import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Simple in-memory rate limiter
const rateLimiter = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // limit each IP to 100 requests per windowMs
  ipRequests: new Map<string, { count: number, resetTime: number }>(),
  
  // Check if request should be limited
  limit(ip: string): boolean {
    const now = Date.now();
    const record = this.ipRequests.get(ip) || { count: 0, resetTime: now + this.windowMs };
    
    // Reset counter if window expired
    if (now > record.resetTime) {
      record.count = 0;
      record.resetTime = now + this.windowMs;
    }
    
    // Increment counter
    record.count++;
    this.ipRequests.set(ip, record);
    
    return record.count > this.maxRequests;
  }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rate limiting middleware for API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    if (rateLimiter.limit(ip)) {
      return res.status(429).json({ message: 'Too many requests, please try again later.' });
    }
  }
  next();
});

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const host = "localhost";
  const port = 3001;
  server.listen(port, "127.0.0.1", () => {
    log(`serving on port ${port}`);
  });
})();
