// src/app/collection/page.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getProducts, getCategories } from '@/lib/api';

// ─── Skeleton loader ──────────────────────────────────────────────────────────
const ProductSkeleton = () => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-white animate-pulse">
    <div className="w-full h-72 bg-gray-200" />
    <div className="p-4">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-1/2" />
    </div>
  </div>
);

const CollectionPage = () => {
  const [products,        setProducts]        = useState([]);
  const [categories,      setCategories]      = useState([]);
  const [activeCategory,  setActiveCategory]  = useState('all');
  const [loading,         setLoading]         = useState(true);
  const [catLoading,      setCatLoading]      = useState(true);

  // Load categories once on mount
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setCatLoading(false);
    });
  }, []);

  // Load products whenever the active category changes
  const loadProducts = useCallback(async (categorySlug) => {
    setLoading(true);
    const params = categorySlug !== 'all' ? { categorySlug } : {};
    const data   = await getProducts(params);
    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProducts(activeCategory);
  }, [activeCategory, loadProducts]);

  return (
    <div className="bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* ── Page Header ── */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-serif font-bold text-brand-maroon">
            Our Collection
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Browse our curated range of traditional sarees, kurtis, lehenghas, and more.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-brand-maroon text-white border-brand-maroon shadow-md'
                : 'bg-white text-brand-charcoal border-gray-300 hover:border-brand-maroon hover:text-brand-maroon'
            }`}
          >
            All
          </button>

          {catLoading
            ? // Skeleton tabs while categories load
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-24 bg-gray-200 rounded-full animate-pulse" />
              ))
            : categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat.slug
                      ? 'bg-brand-maroon text-white border-brand-maroon shadow-md'
                      : 'bg-white text-brand-charcoal border-gray-300 hover:border-brand-maroon hover:text-brand-maroon'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
        </div>

        {/* ── Product Grid ── */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-serif">
              No products found in this category yet.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 px-6 py-2 bg-brand-maroon text-white rounded-full hover:opacity-90 transition"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={product.image_url || '/images/placeholder.jpg'}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={product.image_url?.startsWith('http')}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-brand-charcoal leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{product.category_name}</p>
                  {product.price && (
                    <p className="text-brand-maroon font-semibold mt-2">
                      ₹{Number(product.price).toLocaleString('en-IN')}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;