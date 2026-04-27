"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-black mb-12 text-center">GET IN <span className="text-[var(--color-neon-blue)]">TOUCH</span></h1>
      
      <div className="glass p-8 md:p-12 rounded-2xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <Input required placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <Input required type="email" placeholder="Your email" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Subject</label>
            <Input required placeholder="How can we help?" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea 
              required 
              rows={6}
              className="w-full rounded-md border border-[var(--color-card-border)] bg-[var(--color-card)] px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-neon-blue)] focus-visible:ring-offset-2 transition-all duration-300 resize-none"
              placeholder="Write your message here..."
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>Support Hours: 24/7 Galactic Standard Time</p>
        <p className="mt-2">Email: contact@astraluxe.tech</p>
      </div>
    </div>
  );
}
