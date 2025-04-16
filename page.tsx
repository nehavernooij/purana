import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PuranaHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-green-100 py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-green-800">Purana</h1>
          <nav className="space-x-6">
            <a href="#how-it-works" className="text-gray-700 hover:text-green-800">How it works</a>
            <a href="#categories" className="text-gray-700 hover:text-green-800">Categories</a>
            <a href="#signup" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl">Sign up</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Give your pre-loved things a second life</h2>
        <p className="text-lg mb-6">Share, lend, or donate with your community.</p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Search items..." className="rounded-xl" />
          <Button className="rounded-xl bg-green-600 hover:bg-green-700">
            <Search className="mr-2 h-4 w-4" />Search
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Popular Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Books', 'Toys', 'Clothes', 'Electronics', 'Furniture', 'Kitchen'].map((cat) => (
              <Card key={cat} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{cat}</h4>
                  <p className="text-gray-600">Find or share {cat.toLowerCase()} near you.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-green-50 py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "List an Item", desc: "Post what you want to give away or lend." },
              { step: "2", title: "Connect Locally", desc: "Find people nearby who need it." },
              { step: "3", title: "Give it a New Life", desc: "Meet and hand over your item!" },
            ].map(({ step, title, desc }) => (
              <Card key={step} className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Step {step}: {title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-100 py-6 mt-12 text-center text-sm text-gray-600">
        <p>© 2025 Purana. All rights reserved.</p>
      </footer>
    </div>
  );
}
