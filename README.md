# CodeArchitect - Frontend Development Course Landing Page

A modern, responsive landing page for a frontend development course, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with a dark theme and blueprint-inspired design
- 📱 Fully responsive across all devices
- ⚡ Optimized performance with lazy loading and code splitting
- 🔍 SEO optimized with proper meta tags
- 📊 Analytics integration (Google Analytics & Meta Pixel)
- 🛡️ Error boundaries for graceful error handling
- 🔄 Loading states and smooth animations
- ♿ Accessibility compliant
- 🌐 Social media integration

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Query
- React Router
- Shadcn/ui

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codearchitect-landing.git
cd codearchitect-landing
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to Vercel:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign in to [Vercel](https://vercel.com)
3. Click "Add New..." > "Project"
4. Import your repository
5. Configure project settings (all defaults for Vite should work)
6. Click "Deploy"

The site will be automatically built and deployed. Vercel will provide you with a unique URL to access your deployed application.

## Project Structure

```
src/
├── components/         # Reusable UI components
├── config/            # Configuration files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and services
├── pages/             # Page components
└── styles/            # Global styles and Tailwind config
```

## Key Components

- `HeroSection`: Main landing section with animated elements
- `ErrorBoundary`: Graceful error handling
- `Loading`: Consistent loading states
- `Analytics`: Event tracking integration

## Performance Optimizations

- Image optimization with next/image
- Code splitting with React.lazy
- Font optimization with preload
- Efficient bundle size with tree shaking
- Caching strategies with React Query

## Analytics Integration

The project includes integration with:
- Google Analytics 4
- Meta (Facebook) Pixel

To enable analytics:
1. Add your tracking IDs to the `.env` file
2. Set `VITE_ENABLE_ANALYTICS=true`

## Development Guidelines

1. Follow the TypeScript strict mode guidelines
2. Use the provided ErrorBoundary for error handling
3. Implement loading states for async operations
4. Add proper aria-labels for accessibility
5. Test across different devices and browsers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern architectural blueprints
- Icons from Lucide Icons
- UI components from Shadcn/ui
