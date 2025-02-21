# Golobe Frontend - Travel Booking Platform

## Overview

Golobe's frontend provides a modern, responsive user interface for a comprehensive travel booking platform. The application offers an intuitive booking experience for flights, hotels, and activities, with a focus on performance, accessibility, and user experience.

## Core Features

### Booking Interface

-   Interactive flight search and booking
-   Hotel browsing with detailed property views
-   Activity and attraction discovery
-   Multi-city trip planning
-   Real-time pricing updates
-   Booking management dashboard

### User Features

-   Personalized user dashboards
-   Booking history and tracking
-   User preference management
-   Real-time notifications
-   Social sharing integration

### System Features

-   Responsive design for all devices
-   Offline capability with PWA
-   Localization support
-   Advanced search filters
-   Interactive maps integration

## Technical Stack

### Core Technologies

-   React 18 with TypeScript
-   TailwindCSS for styling
-   Redux Toolkit for state management

### UI Components

-   Shadcn/ui for core components
-   Framer Motion for animations
-   React Hook Form for form handling
-   Yup for form validation
-   Mapbox for maps integration

### Development Tools

-   ESLint and Prettier
-   Jest and React Testing Library

## Getting Started

### Prerequisites

```
- Node.js (v20 or higher)
- npm or yarn
- Backend API running locally
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/UltimateProdigy/golobe-client.git
cd golobe/client
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_GA_ID=your_analytics_id
```

5. Start the development server

```bash
npm run dev
```

## Project Structure

```
client/
├── src/
│   ├── app.tsx        # Next.js app directory
│   ├── components/    # Reusable components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── store/         # Redux store setup
│   ├── styles/        # Global styles
│   └── types/         # TypeScript definitions
├── public/           # Static assets
├── stories/         # Storybook stories
└── tests/           # Test files
```

## Key Components

### Pages

-   Home page with search interface
-   Flight search results
-   Hotel listings
-   Activity discovery
-   Booking confirmation
-   User dashboard
-   Account management

### Features

-   Advanced search filters
-   Interactive booking flow
-   Real-time availability checking
-   Secure payment processing
-   Booking modification interface
-   Travel itinerary builder

## Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run Storybook
npm run storybook
```

## Performance Optimization

-   Image optimization with Next.js Image
-   Code splitting and lazy loading
-   Server-side rendering for SEO
-   Static page generation where applicable
-   Caching strategies
-   Bundle size optimization

## Deployment

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deployment Platforms

-   Vercel (recommended)
-   Netlify
-   AWS Amplify
-   Docker deployment available

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Contact

-   Frontend Lead - [Akinola Ayobami](mailto:ayobamiakinola84@gmail.com)
-   Project Link: https://github.com/UltimateProdigy/golobe-client

## Roadmap

-   [ ] Implement PWA functionality
-   [ ] Add AI-powered travel recommendations
-   [ ] Enhance accessibility features
-   [ ] Add virtual tours for hotels
-   [ ] Implement voice search
-   [ ] Add augmented reality features for activity previews
