# Modern Business Landing Page with CMS

A modern, conversion-optimized business landing page template built with React and Tailwind CSS, featuring a sleek dark-themed design with elegant UI interactions and a built-in CMS.

## Features

- 🎨 Modern Dark Theme Design
- 📱 Fully Responsive Layout
- 💻 Built-in CMS for Content Management
- 🚀 Performance Optimized
- 🔒 PostgreSQL Database Integration
- 🛠 Easy to Customize

## Tech Stack

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Framer Motion for animations
- PostgreSQL for data storage
- Express.js backend
- Drizzle ORM

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with:
```env
DATABASE_URL=your_postgresql_database_url
```

4. Push the database schema:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

## CMS Usage

The CMS is accessible at `/admin` and allows you to manage:

### Hero Section
- Edit main heading and subheading
- Customize button text
- Toggle visibility

### Features
- Add/edit feature cards
- Customize icons and descriptions
- Reorder features

### Testimonials
- Manage customer testimonials
- Upload customer images
- Edit testimonial content

### Pricing Plans
- Configure pricing tiers
- Customize plan features
- Set popular plan status

## Customization

### Theme Customization

Edit `theme.json` to customize:
- Primary color
- Theme variant (vibrant/professional)
- Dark/light mode
- Border radius

### Component Customization

All components are built with Tailwind CSS and can be customized in:
- `client/src/components/sections/`
- `client/src/components/layout/`

## Performance Optimization

The template is optimized for performance with:
- Image optimization
- CSS purging
- Code splitting
- Dynamic imports

## API Documentation

### Content Management API

#### Hero Section
- `GET /api/cms/hero` - Get active hero content
- `POST /api/cms/hero` - Create/update hero content

#### Features
- `GET /api/cms/features` - Get all features
- `POST /api/cms/features` - Create new feature

#### Testimonials
- `GET /api/cms/testimonials` - Get all testimonials
- `POST /api/cms/testimonials` - Add new testimonial

#### Pricing
- `GET /api/cms/pricing` - Get pricing plans
- `POST /api/cms/pricing` - Create new pricing plan

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
