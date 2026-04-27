"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Package, Heart, Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-2">
          <div className="glass p-6 rounded-xl text-center mb-6 border-b border-[var(--color-card-border)] border-b-[var(--color-neon-purple)] border-b-2">
            <div className="w-20 h-20 mx-auto bg-gray-700 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white border-2 border-[var(--color-neon-purple)]">
              JD
            </div>
            <h2 className="font-bold text-lg">John Doe</h2>
            <p className="text-sm text-gray-400">john@example.com</p>
          </div>
          
          <nav className="glass rounded-xl p-2 flex flex-col space-y-1">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] w-full text-left">
              <Package className="h-5 w-5" />
              <span>Orders</span>
            </button>
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors w-full text-left">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </button>
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors w-full text-left">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <Link href="/" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors w-full text-left mt-4">
              <LogOut className="h-5 w-5" />
              <span>Log out</span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">Order History</h1>
          
          <div className="space-y-6">
            {[1, 2].map((order) => (
              <div key={order} className="glass p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4 border-b border-[var(--color-card-border)] pb-4">
                  <div>
                    <p className="text-sm text-gray-400">Order #AST-{Math.floor(Math.random() * 10000)}</p>
                    <p className="text-sm font-semibold text-[var(--color-neon-blue)]">Processing</p>
                  </div>
                  <Button variant="outline" size="sm">Track</Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/5 rounded-md flex items-center justify-center">
                    <span className="text-xs">IMG</span>
                  </div>
                  <div>
                    <p className="font-bold">Hoverboard X-1</p>
                    <p className="text-sm text-gray-400">Qty: 1</p>
                  </div>
                  <div className="ml-auto font-bold">$899.99</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
