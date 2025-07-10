# E-Commerce Micro-Frontend

A modern, visually stunning e-commerce landing page built with React, Vite, and module federation. This project demonstrates a modular, micro-frontend architecture with glassmorphism UI, animated carousel, and robust error handling.

## Features

- **Glassmorphism UI:** Frosted glass effects, vibrant gradients, and smooth transitions throughout.
- **Header:** Logo, navigation categories, cart icon, and user avatar.
- **Hero Section Carousel:** Animated, auto/manual sliding hero with images, titles, and descriptions.
- **Featured Products:** (Remote) Product listing loaded via module federation from a separate micro-frontend (`product-listing`).
- **Footer:** Copyright and branding.
- **Error Boundary:** Catches and displays errors in remote or local components.
- **Fully Modular:** All major UI parts are split into their own components and styles.

## Tech Stack

- **React 19**
- **Vite** (with [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation))
- **Chakra UI, Emotion, Framer Motion, React Icons** (for future extensibility)
- **ESLint** (custom config)

## Project Structure

```
e-commerce/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Header.jsx / Header.css
│   │   ├── HeroSection.jsx / HeroSection.css
│   │   └── Home.jsx / Home.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Install & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

### Micro-Frontend Setup
- This app expects a remote product listing micro-frontend running at `http://localhost:3001/assets/remoteEntry.js` (see `vite.config.js`).
- The featured products section is loaded via React.lazy and module federation.

## Usage

- The main entry point is `src/main.jsx`, which renders `App.jsx`.
- The `Home` component composes the full landing page:
  - `<Header />` — navigation bar
  - `<HeroSection />` — animated carousel
  - `<ErrorBoundary><Suspense><FeaturedProducts /></Suspense></ErrorBoundary>` — remote product listing
  - `<Footer />` — copyright

## Error Handling

- Any error in the remote or local components is caught by `ErrorBoundary` and a user-friendly message is shown with a reload button.

## Customization

- **Slides:** Edit the `slides` array in `HeroSection.jsx` to change carousel content.
- **Styling:** All major components have their own CSS files for easy theming.
- **Remote Products:** Update the remote URL in `vite.config.js` as needed.

## Linting

- Run `npm run lint` to check code style and best practices (see `eslint.config.js`).

## License

MIT
