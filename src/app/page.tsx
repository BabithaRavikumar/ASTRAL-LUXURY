"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-background)]">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[128px] opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              ASTRAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] glow-text">LUXURY</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-400 mb-10"
          >
            Experience the next evolution of personal mobility. Advanced repulsor technology meets premium futuristic design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                Our Technology
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
          className="absolute right-[10%] top-[20%] hidden lg:block z-0"
          animate={{ 
            y: [-20, 20, -20],
            rotateX: [0, 10, 0],
            rotateY: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-64 h-64 border border-[var(--color-neon-blue)] rounded-full opacity-30 shadow-[0_0_50px_rgba(0,240,255,0.2)]" />
        </motion.div>
        <motion.div 
          className="absolute left-[10%] bottom-[20%] hidden lg:block z-0"
          animate={{ 
            y: [20, -20, 20],
            rotateX: [0, -10, 0],
            rotateY: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-48 h-48 border border-[var(--color-neon-purple)] rounded-full opacity-30 shadow-[0_0_50px_rgba(138,43,226,0.2)]" />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider">FEATURED <span className="text-[var(--color-neon-blue)]">TECH</span></h2>
              <p className="mt-2 text-gray-400">Our most advanced Astraluxe equipment.</p>
            </div>
            <Link href="/products" className="hidden sm:flex text-[var(--color-neon-purple)] hover:text-white transition-colors items-center group">
              View All <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 sm:hidden flex justify-center">
             <Link href="/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[var(--color-neon-purple)]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16">USER <span className="text-[var(--color-neon-purple)]">EXPERIENCES</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex R.", role: "Urban Explorer", quote: "The Hoverboard X-1 completely changed my commute. It's smooth, responsive, and turning heads everywhere I go." },
              { name: "Sarah M.", role: "Fitness Coach", quote: "Zero-G Sneakers are a game changer for joint stress. I can run twice as far with half the fatigue." },
              { name: "David T.", role: "Audiophile", quote: "The Levitating Speaker isn't just a gimmick. The 360 sound isolation provided by actual levitation is incredible." }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl relative"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[var(--color-neon-blue)] fill-[var(--color-neon-blue)]" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-neon-purple)]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-[var(--color-card-border)] bg-black/60 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">JOIN THE <span className="text-[var(--color-neon-blue)] glow-text">FUTURE</span></h2>
          <p className="text-gray-400 mb-8">Subscribe to receive early access to new prototype drops and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Enter your email" className="flex-1 bg-black/50" required />
            <Button type="submit" variant="neon">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
