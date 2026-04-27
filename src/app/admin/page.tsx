"use client";

import { Activity, Package, DollarSign, Users } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="flex-1 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass p-6 rounded-xl border-l-4 border-[var(--color-neon-blue)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Revenue</p>
                <p className="text-2xl font-bold mt-1">$45,231.89</p>
              </div>
              <div className="w-12 h-12 bg-[var(--color-neon-blue)]/20 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-[var(--color-neon-blue)]" />
              </div>
            </div>
            <p className="text-sm text-green-400 mt-4">↑ 20.1% from last month</p>
          </div>

          <div className="glass p-6 rounded-xl border-l-4 border-[var(--color-neon-purple)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Orders</p>
                <p className="text-2xl font-bold mt-1">+573</p>
              </div>
              <div className="w-12 h-12 bg-[var(--color-neon-purple)]/20 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-[var(--color-neon-purple)]" />
              </div>
            </div>
            <p className="text-sm text-green-400 mt-4">↑ 10% from last month</p>
          </div>

          <div className="glass p-6 rounded-xl border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Users</p>
                <p className="text-2xl font-bold mt-1">+2350</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <p className="text-sm text-green-400 mt-4">↑ 180.1% from last month</p>
          </div>

          <div className="glass p-6 rounded-xl border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">System Health</p>
                <p className="text-2xl font-bold mt-1">99.9%</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Activity className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">All systems nominal</p>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--color-card-border)]">
                  <th className="pb-3 text-sm font-medium text-gray-400">Order ID</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Customer</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Amount</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-card-border)]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td className="py-4 text-sm font-mono text-[var(--color-neon-blue)]">#AST-{Math.floor(Math.random() * 10000)}</td>
                    <td className="py-4 text-sm">Customer {item}</td>
                    <td className="py-4 text-sm font-medium">${(Math.random() * 1000).toFixed(2)}</td>
                    <td className="py-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Completed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
