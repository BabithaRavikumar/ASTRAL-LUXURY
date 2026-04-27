"use client";

import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl font-black mb-6">YOUR <span className="text-[var(--color-neon-blue)]">CART</span> IS EMPTY</h1>
        <p className="text-gray-400 mb-8 max-w-md">Looks like you haven't added any Astraluxe gear to your cart yet.</p>
        <Link href="/products">
          <Button size="lg">Return to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black mb-8">SHOPPING <span className="text-[var(--color-neon-purple)]">CART</span></h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.product.id} className="glass p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-lg bg-[var(--color-neon-blue)]/10 flex items-center justify-center border border-[var(--color-neon-blue)]/30 flex-shrink-0">
                <span className="text-2xl font-bold text-white/80">{item.product.name.substring(0, 2)}</span>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold">{item.product.name}</h3>
                <p className="text-sm text-gray-400">{item.product.category}</p>
                <div className="text-[var(--color-neon-purple)] font-bold mt-2">
                  ${item.product.price.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded bg-black/50 overflow-hidden h-10">
                  <button 
                    className="px-3 text-gray-400 hover:text-white hover:bg-white/10 h-full"
                    onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                  <button 
                    className="px-3 text-gray-400 hover:text-white hover:bg-white/10 h-full"
                    onClick={() => updateQuantity(item.product.id, Math.min(item.product.stock, item.quantity + 1))}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={() => removeItem(item.product.id)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-6 border-b border-[var(--color-card-border)] pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6 text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-[var(--color-card-border)] pt-4 mt-4 flex justify-between font-bold text-xl text-white">
                <span>Total</span>
                <span className="text-[var(--color-neon-blue)]">${getTotal().toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="block w-full">
              <Button size="lg" className="w-full flex justify-between items-center group">
                Proceed to Checkout
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
