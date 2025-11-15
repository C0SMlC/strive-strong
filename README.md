# Strive Strong Physiotherapy Landing Page

Modern single-page marketing site for Strive Strong Physiotherapy. The build recreates and extends the original Figma concept with responsive React components, dark-mode support, image optimization, and embedded lead-generation flows.

## Features

- Responsive hero with background image preloading, dynamic blur overlay, and high-contrast light/dark themes
- Location-aware booking CTA with Google Maps embed and persistent WhatsApp/phone calls to action
- Rich services, treatment areas, testimonials, FAQ, and contact sections powered by reusable component library
- Global theming with Tailwind CSS v4 (experimental) utilities and custom component layer
- Accessibility-minded navigation, semantic HTML, and keyboard-friendly interactive controls
- Lazy-loaded media and aspect-ratio helpers to deliver consistent image rendering across breakpoints

## Tech Stack

- Vite 6 + React 18 + TypeScript
- Tailwind CSS v4 (standalone build) with custom CSS layers
- Radix UI primitives & shadcn-inspired component system
- Lucide icons, Motion One animations, Embla carousel, React Hook Form utilities
- Prettier-like conventions enforced via project formatting rules

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

3. Open `http://localhost:3000` (or the host shown in your terminal) in your browser.

## Available Scripts

- `npm run dev` – start the Vite development server with HMR
- `npm run build` – create an optimized production build in `dist/`
- `npm run preview` – preview the production build locally (requires prior build)

## Project Structure

```
src/
  components/        // Feature sections and UI primitives
  config/            // Shared metadata, contact info, constants
  styles/            // Global CSS, Tailwind tokens, dark-mode overrides
  assets/            // Local hero and testimonial imagery
  main.tsx           // Client entry point
  App.tsx            // Top-level page composition
```

## Customization Notes

- Update `src/config/constants.ts` to change contact details, social links, or map locations.
- Modify image assets in `src/assets/` and the tailored copy in the `components/` directory to match your clinic’s services.
- Tailwind utility gaps can be filled in `src/index.css` under the appropriate `@layer` block.

## Deployment

The project outputs static assets (`dist/`) after running `npm run build`. Deploy the folder to any static hosting provider (Netlify, Vercel, Azure Static Web Apps, GitHub Pages, etc.). Configure your host to serve `index.html` for unknown routes since this is a single-page experience.

## Credits

- Original design inspiration designed with the help of AI: [Figma – Happy Physiotherapist Landing Page](https://www.figma.com/design/ubE0ctjpNFJ5s5SF0zhGWq/Happy-Physiotherapist-Landing-Page)
- Development: [Pratik Spendurkar](https://linktr.ee/pratikspendurkar)
