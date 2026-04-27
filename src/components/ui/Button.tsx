"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "neon";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[var(--color-neon-purple)] text-[#ffffff] hover:bg-[#ff0000] shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]",
      outline: "border-2 border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)] hover:text-[#ffffff] shadow-[0_0_10px_rgba(255,0,0,0.2)] inset-0",
      ghost: "hover:bg-white/10 text-[var(--color-foreground)]",
      neon: "bg-transparent border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] shadow-[0_0_10px_rgba(255,0,0,0.5),inset_0_0_10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8),inset_0_0_20px_rgba(255,0,0,0.8)] hover:bg-[var(--color-neon-blue)] hover:text-[#ffffff] transition-all duration-300",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
