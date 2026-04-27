export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  stock: number;
}

export const categories = ["Transport", "Footwear", "Audio", "Accessories", "Home"];

export const products: Product[] = [
  {
    id: "1",
    name: "Hoverboard X-1",
    description: "The ultimate Astraluxe personal transport. Float smoothly over any terrain with neon-lit thrusters.",
    price: 899.99,
    category: "Transport",
    imageUrl: "/products/hoverboard.png",
    rating: 4.8,
    reviews: 124,
    stock: 15,
  },
  {
    id: "2",
    name: "Zero-G Sneakers",
    description: "Experience the feeling of walking on the moon. These sneakers reduce your effective weight by 20%.",
    price: 249.99,
    category: "Footwear",
    imageUrl: "/products/sneakers.png",
    rating: 4.5,
    reviews: 89,
    stock: 42,
  },
  {
    id: "3",
    name: "Levitating Speaker Orb",
    description: "360-degree sound from a speaker that literally floats above its base using magnetic levitation.",
    price: 159.99,
    category: "Audio",
    imageUrl: "/products/speaker.png",
    rating: 4.9,
    reviews: 312,
    stock: 100,
  },
  {
    id: "4",
    name: "Anti-Grav Backpack",
    description: "Carry heavy loads with zero strain. The built-in repulsor tech makes 50lbs feel like 5lbs.",
    price: 199.99,
    category: "Accessories",
    imageUrl: "/products/backpack.png",
    rating: 4.7,
    reviews: 56,
    stock: 25,
  },
  {
    id: "5",
    name: "Hover Desk",
    description: "A floating ergonomic desk that adjusts to your perfect height automatically. No legs, just pure levitation.",
    price: 1299.99,
    category: "Home",
    imageUrl: "/products/desk.png",
    rating: 4.6,
    reviews: 41,
    stock: 5,
  },
  {
    id: "6",
    name: "Quantum Pulse Earbuds",
    description: "Immersive audio delivered directly to your cochlea. They float near your ears when not in use.",
    price: 299.99,
    category: "Audio",
    imageUrl: "/products/earbuds.png",
    rating: 4.4,
    reviews: 210,
    stock: 80,
  }
];
