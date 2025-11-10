# AstroBite - Mars Restaurant Web Application

## Overview

AstroBite is a futuristic restaurant web application themed around Mars' first dining establishment. The app features a mobile-first, glassmorphic design with a space-themed aesthetic, showcasing menu items, gallery photos, customer reviews, and reservation functionality. Built as a full-stack application, it combines React frontend with Express backend, utilizing PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom Mars theme configuration
- Class Variance Authority (CVA) for component variant management
- Custom design tokens for glassmorphism effects, Mars color palette (#b11226 red, #ff5c39 orange, #0d0d0d black, #e6e6e6 silver)

**Theming**
- Context-based theme provider supporting light/dark modes
- CSS custom properties for dynamic theming
- Google Fonts integration (Orbitron for headings, Exo 2 for body text)
- Persistent theme preference via localStorage

**Page Structure**
- Home: Statistics cards showcasing restaurant highlights
- Menu: Searchable/filterable menu with featured items section
- About: Restaurant story and mission statement
- Gallery: Image grid with customer reviews
- Contact: Reservation form with validation

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for type-safe server development
- ESM module system (type: "module" in package.json)
- Custom middleware for request logging and JSON parsing with raw body preservation
- Vite integration in development for SSR and HMR capabilities

**API Design**
- RESTful endpoints under `/api` prefix
- Resource-based routing (menu items, reservations, reviews)
- Consistent error handling with appropriate HTTP status codes
- Request validation using Zod schemas

**Storage Layer**
- Abstract `IStorage` interface for data persistence flexibility
- In-memory storage implementation (`MemStorage`) with pre-seeded data
- Designed to be swappable with database-backed implementation
- Type-safe data models shared between client and server

### Data Storage

**Database Setup**
- Drizzle ORM configured for PostgreSQL via Neon serverless driver
- Schema definitions using Drizzle's pg-core with proper type inference
- Migration support via drizzle-kit
- Environment-based database URL configuration

**Data Models**
- `menuItems`: Restaurant dishes with name, description, price, category, image, featured flag
- `reservations`: Customer bookings with contact info, date/time, guest count
- `reviews`: Customer feedback with rating (1-5) and comments
- UUID primary keys generated via PostgreSQL's `gen_random_uuid()`
- Timestamp tracking for reservations and reviews

**Validation**
- Drizzle-Zod integration for automatic schema-to-validation conversion
- Custom validation rules (email format, guest count limits, rating bounds)
- Shared schemas between frontend forms and backend API validation

### External Dependencies

**UI & Styling**
- Radix UI: Unstyled accessible component primitives (dialogs, dropdowns, navigation, etc.)
- Tailwind CSS: Utility-first CSS framework
- PostCSS with Autoprefixer: CSS processing pipeline
- Lucide React: Icon library for consistent iconography

**Data Management**
- @tanstack/react-query: Async state management and caching
- React Hook Form: Form state management with validation
- @hookform/resolvers: Integration between React Hook Form and Zod validation

**Database & ORM**
- @neondatabase/serverless: Serverless PostgreSQL driver for Neon
- Drizzle ORM: Type-safe SQL query builder
- drizzle-zod: Schema-to-validation conversion
- connect-pg-simple: PostgreSQL session store (configured but not actively used)

**Development Tools**
- @replit/vite-plugin-*: Replit-specific Vite plugins for dev experience
- tsx: TypeScript execution for Node.js
- esbuild: Fast bundler for server-side code

**Utilities**
- date-fns: Date manipulation and formatting
- clsx + tailwind-merge: Conditional className management
- nanoid: Unique ID generation
- Zod: Runtime type validation and schema definition