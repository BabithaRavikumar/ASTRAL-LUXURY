"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    router.push("/profile");
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full glass p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]" />
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black">{isLogin ? "WELCOME BACK" : "JOIN US"}</h2>
          <p className="text-gray-400 mt-2">
            {isLogin ? "Log in to access your Astraluxe collection." : "Create an account for exclusive access."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Full Name</label>
              <Input required placeholder="Neo" />
            </div>
          )}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <Input required type="email" placeholder="neo@matrix.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <Input required type="password" placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full" size="lg">
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-[var(--color-neon-blue)] hover:text-white transition-colors"
          >
            {isLogin ? "Need an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}
