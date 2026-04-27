"use client";

import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { getTotal, clearCart, items } = useCartStore();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push("/order-success");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black mb-8 text-center sm:text-left">SECURE <span className="text-[var(--color-neon-blue)]">CHECKOUT</span></h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-8 glass p-8 rounded-xl">
          {/* Shipping Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-neon-purple)]">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-sm text-gray-400 mb-1">First Name</label>
                <Input required />
              </div>
              <div className="col-span-1">
                <label className="block text-sm text-gray-400 mb-1">Last Name</label>
                <Input required />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-1">Address</label>
                <Input required />
              </div>
              <div className="col-span-1">
                <label className="block text-sm text-gray-400 mb-1">City</label>
                <Input required />
              </div>
              <div className="col-span-1">
                <label className="block text-sm text-gray-400 mb-1">Postal Code</label>
                <Input required />
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-neon-purple)]">Payment Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Card Number</label>
                <Input required placeholder="XXXX XXXX XXXX XXXX" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm text-gray-400 mb-1">Expiry Date</label>
                  <Input required placeholder="MM/YY" />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm text-gray-400 mb-1">CVC</label>
                  <Input required type="password" placeholder="XXX" />
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
            {isProcessing ? "Processing..." : `Pay $${getTotal().toFixed(2)}`}
          </Button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-6 border-b border-[var(--color-card-border)] pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center text-xs font-bold border border-[var(--color-card-border)]">
                      {item.quantity}x
                    </div>
                    <span className="text-sm font-medium">{item.product.name}</span>
                  </div>
                  <span className="text-gray-300">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--color-card-border)] pt-4 space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-white mt-4 pt-4 border-t border-[var(--color-card-border)]">
                <span>Total</span>
                <span className="text-[var(--color-neon-blue)]">${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
