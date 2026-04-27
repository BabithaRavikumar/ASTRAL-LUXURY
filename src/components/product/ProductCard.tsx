"use client";

import { Product } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 240, 255, 0.2), 0 10px 10px -5px rgba(0, 240, 255, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="glass rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
    >
      <Link href={`/products/${product.id}`} className="flex-1 flex flex-col">
        <div className="relative h-64 w-full bg-black overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          <div className="absolute bottom-4 left-4 z-20">
            <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider text-[var(--color-neon-blue)] uppercase bg-black/50 rounded-full border border-[var(--color-neon-blue)]/30">
              {product.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center space-x-1">
            <span className="text-yellow-400 text-sm">★ {product.rating}</span>
            <span className="text-gray-500 text-xs">({product.reviews})</span>
          </div>
          <p className="mt-3 text-sm text-gray-400 line-clamp-2 flex-1">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-[var(--color-neon-purple)]">
              ${product.price.toFixed(2)}
            </span>
            <Button size="icon" variant="neon" onClick={handleAddToCart} aria-label="Add to cart">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
