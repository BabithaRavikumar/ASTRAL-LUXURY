import Link from "next/link";
import { Globe, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass mt-auto border-t border-[var(--color-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="glow-text text-xl font-bold tracking-wider text-[var(--color-neon-blue)]">
              ASTRALUXE
            </span>
            <p className="mt-4 text-sm text-gray-400">
              Pioneering the future of personal mobility and levitation tech. Elevate your everyday.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=Transport" className="text-sm text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">Transport</Link></li>
              <li><Link href="/products?category=Footwear" className="text-sm text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">Footwear</Link></li>
              <li><Link href="/products?category=Audio" className="text-sm text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">Audio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">
                <span className="sr-only">Community</span>
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors">
                <span className="sr-only">Contact</span>
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Astraluxe Technologies Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
