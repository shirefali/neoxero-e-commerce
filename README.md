# Neoxero E-Commerce

A modern, responsive e-commerce frontend built with React and Vite. Browse products by category, manage a shopping cart and favourites, and explore curated sections (Just In, Low Price, Collections, and more).

## Tech Stack

- **React 19** – UI library
- **Vite 7** – build tool and dev server
- **React Router 7** – client-side routing
- **Tailwind CSS 4** – styling
- **Swiper** – carousels and sliders
- **Lucide React** – icons

## Features

- **Home page** – Hero, trending brands, categories, collections, Just In, Low Price, promo, articles, news feed, and services
- **Category products** – Product listing filtered by category (`/category/:categorySlug`)
- **Favourites** – Saved items page (`/favourites`)
- **Contact** – Contact page (`/contact`)
- **Cart** – Slide-out cart drawer; add/remove items and see totals
- **Global state** – Products (from API), cart, and favourites via React Context

## Project Structure

```
src/
├── components/       # Reusable UI (Navbar, Footer, CartDrawer, Hero, sections…)
├── context/          # CartContext, FavouritesContext, ProductsContext
├── pages/            # HomePage, CategoryProductsPage, FavouritesPage, ContactPage
├── utils/            # Helpers (e.g. categorySlug)
├── App.jsx           # Routes and providers
├── App.css           # Global styles
└── main.jsx          # Entry point, BrowserRouter
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (or yarn/pnpm)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app at [http://localhost:5173](http://localhost:5173) (or the port Vite shows).

### Build

```bash
npm run build
```

Output is in `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Data Source

Product and category data is loaded from [Fake Store API](https://fakestoreapi.com/) in `ProductsContext`. Cart and favourites are stored in memory (no backend).

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/category/:categorySlug` | Category products |
| `/favourites` | Favourites |
| `/contact` | Contact |

## License

Private project.
