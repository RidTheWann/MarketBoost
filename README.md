# Modern Business Landing Page with CMS

A modern, conversion-optimized business landing page template with built-in CMS, perfect for agencies, startups, and businesses. Built with React, TypeScript, Tailwind CSS and Express.js.

![Preview](preview.png)

## 🌟 Key Features

- Modern Dark Theme Design
- Fully Responsive Layout  
- Built-in CMS Dashboard
- Performance Optimized
- PostgreSQL Database
- SEO Friendly
- Easy Customization
- API Documentation

## 🛠 Tech Stack

- React 18 with TypeScript
- Tailwind CSS
- Shadcn UI Components
- Express.js Backend
- PostgreSQL + Drizzle ORM
- Framer Motion Animations

## 📦 Quick Start

1. Clone repository
2. Install dependencies:
```bash
npm install
```

3. Set environment variables:
```env
DATABASE_URL=your_postgresql_database_url
```

4. Initialize database:
```bash
npm run db:push
```

5. Start development server:
```bash
npm run dev
```

The app will run on http://localhost:5000

## 🎨 Customization

### Theme
Edit `theme.json` to customize:
- Color scheme
- Typography
- Dark/light mode
- Border radius

### Content
Access CMS dashboard at `/admin` to manage:
- Hero section
- Features
- Testimonials  
- Pricing plans

## 📚 API Documentation

### Hero Section
- GET /api/cms/hero
- POST /api/cms/hero

### Features  
- GET /api/cms/features
- POST /api/cms/features

### Testimonials
- GET /api/cms/testimonials  
- POST /api/cms/testimonials

### Pricing
- GET /api/cms/pricing
- POST /api/cms/pricing

## 📄 License

[MIT License](LICENSE)