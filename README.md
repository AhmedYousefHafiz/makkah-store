# Product Catalog Mobile - React + TypeScript

A mobile-first React TypeScript sample project that reads products and offers from local JSON files, displays a home offer section, and groups products by category.

## Features

- React + TypeScript + Vite
- Products loaded from `src/data/products.json`
- Offers loaded from `src/data/offers.json`
- Mobile-first responsive layout
- Products grouped by category
- Offer cards in the home page
- Search by product name/category
- Simple bottom navigation UI

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Build

```bash
npm run build
npm run preview
```

## How to update data

Edit:

- `src/data/products.json`
- `src/data/offers.json`

No code changes are needed when adding new categories. Categories are grouped automatically from product data.
