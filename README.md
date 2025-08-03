# ALX Listing App - Milestone 2

A responsive property listing application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Property Listings**: Display luxury properties with detailed information
- 🔍 **Filtering System**: Filter properties by categories like "Top Villa", "Self Checkin", etc.
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean design with Tailwind CSS
- ⚡ **Performance**: Built with Next.js for optimal performance
- 🔒 **Type Safety**: Full TypeScript implementation

## Project Structure

```
alx-listing-app-00/
├── components/
│   ├── common/
│   │   ├── Pill.tsx           # Filter pill component
│   │   └── PropertyCard.tsx   # Property card component
│   └── layout/
│       ├── Footer.tsx         # Footer component
│       ├── Header.tsx         # Header with navigation
│       └── Layout.tsx         # Main layout wrapper
├── constants/
│   └── index.ts              # Property data and constants
├── interfaces/
│   └── index.ts              # TypeScript interfaces
├── pages/
│   ├── _app.tsx              # App wrapper
│   └── index.tsx             # Home page
├── styles/
│   └── globals.css           # Global styles with Tailwind
└── public/                   # Static assets
```

## Components

### Layout Components
- **Header**: Navigation with search bar, accommodation types, and auth buttons
- **Footer**: Company information, links, and newsletter subscription
- **Layout**: Wrapper component that combines header, main content, and footer

### Common Components
- **PropertyCard**: Displays property information with image, details, and pricing
- **Pill**: Clickable filter component for property categories

## Data Structure

The application uses a comprehensive property data structure defined in TypeScript interfaces:

```typescript
interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-listing-app-00
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Implementation

### Hero Section
- Background image with gradient overlay
- Call-to-action text: "Find your favorite place here!"
- Subtitle: "The best prices for over 2 million properties worldwide."

### Filter System
- Interactive filter pills for different property categories
- Dynamic filtering of property listings
- Clear filter functionality
- Visual feedback for active filters

### Property Listings
- Responsive grid layout (1-4 columns based on screen size)
- Property cards with:
  - High-quality images with hover effects
  - Property name and location
  - Rating with star display
  - Pricing information
  - Property amenities (beds, baths, occupancy)
  - Discount badges when available

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Collapsible mobile navigation
- Optimized layouts for different screen sizes

## Technologies Used

- **Next.js 14** - React framework with app router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Design Principles

- **Component Reusability**: Modular components for easy maintenance
- **Type Safety**: Comprehensive TypeScript implementation
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Semantic HTML and keyboard navigation
- **SEO**: Proper meta tags and semantic structure

## Future Enhancements

- Search functionality
- Property details page
- User authentication
- Booking system
- Advanced filtering options
- Property comparison
- Interactive maps
- User reviews and ratings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is part of the ALX Software Engineering program.
