"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6">OUR <span className="text-[var(--color-neon-blue)] glow-text">MISSION</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We believe gravity shouldn't hold you down. Founded in 2026, Astraluxe Technologies is dedicated to pushing the boundaries of personal mobility and lifestyle products using proprietary quantum-levitation tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="glass p-8 rounded-xl text-center">
          <div className="w-16 h-16 mx-auto bg-[var(--color-neon-purple)]/20 rounded-full flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-[var(--color-neon-purple)]" />
          </div>
          <h3 className="text-xl font-bold mb-4">Innovation First</h3>
          <p className="text-gray-400">Continuous R&D to bring the impossible into everyday reality.</p>
        </div>
        <div className="glass p-8 rounded-xl text-center">
          <div className="w-16 h-16 mx-auto bg-[var(--color-neon-blue)]/20 rounded-full flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-[var(--color-neon-blue)]" />
          </div>
          <h3 className="text-xl font-bold mb-4">Absolute Safety</h3>
          <p className="text-gray-400">Military-grade fail-safes built into every consumer product.</p>
        </div>
        <div className="glass p-8 rounded-xl text-center">
          <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4">Global Reach</h3>
          <p className="text-gray-400">Shipping to over 150 countries with carbon-neutral logistics.</p>
        </div>
      </div>

      <div className="glass rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/10 to-[var(--color-neon-purple)]/10" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">The Tech Behind the Magic</h2>
            <p className="text-gray-300 mb-6">
              Our patented Repulsor Grid™ creates localized gravitational distortions, allowing objects to float effortlessly. It's safe, energy-efficient, and entirely frictionless.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border-4 border-dashed border-[var(--color-neon-blue)]/50 rounded-full flex items-center justify-center"
            >
              <div className="w-32 h-32 border border-[var(--color-neon-purple)] rounded-full animate-ping" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
