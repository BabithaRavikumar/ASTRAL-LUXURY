"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function OrderSuccessPage() {
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  return (
    <div className="flex-1 flex items-center justify-center py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-2xl max-w-md w-full text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]" />
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle className="h-10 w-10 text-green-400" />
        </motion.div>

        <h1 className="text-3xl font-black mb-2 glow-text">ORDER CONFIRMED</h1>
        <p className="text-gray-400 mb-6">Your Astraluxe tech is being prepared for dispatch.</p>
        
        <div className="bg-black/50 rounded-lg p-4 mb-8 border border-white/10">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Order Number</p>
          <p className="text-2xl font-mono text-[var(--color-neon-blue)]">#{orderNumber}</p>
        </div>

        <Link href="/products">
          <Button className="w-full">Continue Shopping</Button>
        </Link>
      </motion.div>
    </div>
  );
}
