"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-[var(--color-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 glow-text text-2xl font-bold tracking-wider text-[var(--color-neon-blue)]">
              ASTRALUXE
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[var(--color-neon-blue)] hover:glow-text px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth" className="text-gray-300 hover:text-[var(--color-neon-purple)] transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="relative text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-neon-purple)] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-[var(--color-card-border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[var(--color-neon-blue)] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              <Link href="/auth" className="text-gray-300 hover:text-[var(--color-neon-purple)]" onClick={() => setIsOpen(false)}>
                <User className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="relative text-gray-300 hover:text-[var(--color-neon-blue)]" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--color-neon-purple)] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
