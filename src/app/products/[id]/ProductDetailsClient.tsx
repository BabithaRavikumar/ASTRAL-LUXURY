"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, Heart, Shield, Truck, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

export function ProductDetailsClient({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add multiple quantities
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Image Area */}
      <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-purple)]/20 to-[var(--color-neon-blue)]/20 mix-blend-overlay z-10 pointer-events-none" />
        
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full min-h-[400px] flex items-center justify-center z-0"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Product Info Area */}
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <Link href="/products" className="text-sm text-[var(--color-neon-blue)] hover:underline">
            ← Back to products
          </Link>
          <span className="px-3 py-1 rounded-full border border-[var(--color-card-border)] bg-white/5 text-xs font-semibold uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">{product.name}</h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 && '☆'}
          </div>
          <span className="text-gray-400 text-sm">{product.rating} ({product.reviews} reviews)</span>
          <span className="text-sm px-2 py-0.5 bg-green-500/20 text-green-400 rounded border border-green-500/30">
            In Stock ({product.stock})
          </span>
        </div>

        <p className="text-3xl font-bold text-[var(--color-neon-purple)] mb-8 glow-text">
          ${product.price.toFixed(2)}
        </p>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
        </div>

        {/* Action Area */}
        <div className="glass p-6 rounded-xl border border-[var(--color-card-border)] mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center border border-white/20 rounded-md bg-black/50 overflow-hidden h-12">
            <button 
              className="px-4 text-xl text-gray-400 hover:text-white hover:bg-white/10 h-full transition-colors"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="w-12 text-center font-bold text-lg">{quantity}</span>
            <button 
              className="px-4 text-xl text-gray-400 hover:text-white hover:bg-white/10 h-full transition-colors"
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            >
              +
            </button>
          </div>
          
          <Button size="lg" className="flex-1 h-12 text-lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 flex-shrink-0"
            onClick={() => toggleItem(product)}
          >
            <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-[var(--color-neon-blue)] text-[var(--color-neon-blue)]' : ''}`} />
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[var(--color-card-border)] pt-8">
          <div className="flex flex-col items-center text-center p-4 glass rounded-lg">
            <Shield className="h-6 w-6 text-[var(--color-neon-blue)] mb-2" />
            <h4 className="font-semibold text-sm">2 Year Warranty</h4>
            <p className="text-xs text-gray-400 mt-1">Full coverage</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 glass rounded-lg">
            <Truck className="h-6 w-6 text-[var(--color-neon-purple)] mb-2" />
            <h4 className="font-semibold text-sm">Free Shipping</h4>
            <p className="text-xs text-gray-400 mt-1">On orders over $500</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 glass rounded-lg">
            <RotateCcw className="h-6 w-6 text-gray-300 mb-2" />
            <h4 className="font-semibold text-sm">30-Day Returns</h4>
            <p className="text-xs text-gray-400 mt-1">No questions asked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
