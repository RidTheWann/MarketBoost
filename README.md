
# Modern Business Landing Page with CMS

A production-ready, modern business landing page template with integrated CMS functionality. Perfect for agencies, startups, and businesses looking for a professional web presence. Built with React 18, TypeScript, and Express.js, this template offers enterprise-grade features and security.

## Why Choose This Template?

- 🚀 **Production Ready**: Pre-configured for optimal performance
- 🔒 **Enterprise Security**: Built-in rate limiting, SQL injection prevention, XSS protection
- 📱 **Responsive Design**: Looks great on all devices
- 🎨 **Customizable**: Easy to brand and modify
- 🔍 **SEO Optimized**: Built-in SEO best practices
- 📊 **Analytics Ready**: Easy integration with popular analytics tools
- 💾 **Database Included**: PostgreSQL setup with connection pooling
- 📝 **Full Documentation**: Comprehensive guides and examples

## 🌟 Key Features

- Modern Dark/Light Theme Design
- Fully Responsive Layout
- Built-in CMS Dashboard
- Performance Optimized
- PostgreSQL Database with Connection Retries
- SEO Friendly
- Rate Limited API
- Input Validation
- TypeScript Support
- Comprehensive Documentation

## 🛡️ Security Features

- Rate Limiting Protection
- Input Validation
- SQL Injection Prevention
- XSS Protection
- CSRF Protection
- Secure Database Connection

## 🛠️ Tech Stack

- React 18 with TypeScript
- Tailwind CSS + Shadcn UI
- Express.js Backend
- PostgreSQL + Drizzle ORM
- Framer Motion Animations
- Zod Validation

## 📦 Installation

1. Clone repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```env
DATABASE_URL=your_postgresql_database_url
SESSION_SECRET=your_secure_session_secret
RATE_LIMIT_WINDOW=15 # minutes
RATE_LIMIT_MAX=100 # requests
```

4. Initialize database:
```bash
npm run db:push
```

5. Start development server:
```bash
npm run dev
```

6. For production:
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Database
- Uses PostgreSQL with connection retries
- Automatic reconnection handling
- Connection pooling for performance

### Security
- Rate limiting per IP
- Input validation using Zod
- Secure session handling
- CORS configuration

### Performance
- Code splitting
- Image optimization
- Caching strategies
- Minification

## 📚 API Documentation

### Authentication
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/status

### CMS Endpoints
- GET /api/cms/hero - Get hero section content
- POST /api/cms/hero - Update hero section
- GET /api/cms/features - Get features list
- POST /api/cms/features - Create/update feature
- GET /api/cms/testimonials - Get testimonials
- POST /api/cms/testimonials - Add testimonial
- GET /api/cms/pricing - Get pricing plans
- POST /api/cms/pricing - Update pricing plans

### Contact Form
- POST /api/contact - Submit contact form

## 🎨 Customization

Detailed documentation in `/docs` folder covers:
- Theme customization
- Component styling
- Layout modifications
- CMS configuration
- API integration

## 📄 License

[MIT License](LICENSE)

## 🤝 Support

For support, contact: support@example.com
