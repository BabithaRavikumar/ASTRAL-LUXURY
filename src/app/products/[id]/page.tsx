import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetailsClient } from "./ProductDetailsClient";

// Since it's an App Router in a new Next.js setup, we use async params correctly.
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductDetailsClient product={product} />
    </div>
  );
}
