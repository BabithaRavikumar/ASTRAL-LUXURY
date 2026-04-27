# Astraluxe E-Commerce Platform

Welcome to **Astraluxe**, a premium, futuristic luxury e-commerce web application designed for high-end levitation technology and gear. The platform features a sleek red and white aesthetic with glassmorphism UI elements, smooth Framer Motion animations, and a fully responsive layout.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (with persistent storage)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

- **Futuristic UI/UX**: Striking red-and-white theme featuring glassmorphism cards, glowing text, and custom "floating" CSS animations.
- **Dynamic Product Catalog**: Browse, search, and filter through high-end levitating products with photorealistic 8K images.
- **Robust Shopping Cart**: Add items, adjust quantities, and view a detailed order summary. State is persisted using Zustand.
- **Checkout Flow**: Simulated secure checkout form resulting in a stylized order success confirmation.
- **User Dashboard**: Profile page displaying active orders and account settings.
- **Admin Dashboard**: Revenue tracking, system health, active users, and recent order management.
- **Static & Dynamic Rendering**: Optimized Next.js App Router utilization for fast, SEO-friendly performance.

## 📁 Project Structure

```text
/src
├── app/                  # Next.js App Router Pages & API Routes
│   ├── admin/            # Admin Dashboard
│   ├── api/products/     # Backend API for product fetching
│   ├── auth/             # Login and Registration
│   ├── cart/             # Shopping Cart UI
│   ├── checkout/         # Checkout flow
│   ├── order-success/    # Confirmation screen
│   ├── products/         # Product Listing & Details pages
│   └── profile/          # User Dashboard
├── components/           # Reusable React Components
│   ├── layout/           # Navbar, Footer
│   ├── product/          # Product Cards
│   └── ui/               # Base elements (Buttons, Inputs, Skeletons)
├── data/                 # Mock database
├── lib/                  # Utilities (Tailwind merge)
└── store/                # Zustand State Stores (Cart, Wishlist)
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   cd anti-gravity
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Building for Production

To create an optimized production build, run:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## 📝 License

&copy; 2026 Astraluxe Technologies Inc. All rights reserved.
