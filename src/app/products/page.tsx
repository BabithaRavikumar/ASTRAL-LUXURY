"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-wider glow-text text-white">ALL <span className="text-[var(--color-neon-purple)]">GEAR</span></h1>
          <p className="mt-2 text-gray-400">Browse our complete collection of Astraluxe tech.</p>
        </div>
        
        <div className="w-full md:w-auto relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Search products..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="glass p-6 rounded-xl sticky top-24">
            <h3 className="font-bold text-lg mb-4 border-b border-[var(--color-card-border)] pb-2 text-[var(--color-neon-blue)]">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`w-full text-left px-2 py-1 rounded transition-colors ${selectedCategory === "All" ? "bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)]" : "text-gray-400 hover:text-white"}`}
                >
                  All Products
                </button>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-2 py-1 rounded transition-colors ${selectedCategory === category ? "bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)]" : "text-gray-400 hover:text-white"}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 glass rounded-xl">
              <p className="text-xl text-gray-400">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
