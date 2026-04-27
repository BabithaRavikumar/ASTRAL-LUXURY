import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filteredProducts = [...products];

  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(
      (p) => 
        p.name.toLowerCase().includes(search.toLowerCase()) || 
        p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({
    success: true,
    count: filteredProducts.length,
    data: filteredProducts
  });
}
