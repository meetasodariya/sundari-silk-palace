// src/app/_components/FeaturedCollection.js
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { getFeaturedProducts } from '@/lib/api';

// ─── Skeleton loader shown while fetching ────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-pulse">
    <div className="w-full aspect-[3/4] bg-gray-200" />
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
    </div>
  </div>
);

const FeaturedCollection = () => {
  const [products, setProducts]   = useState([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    getFeaturedProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-20 bg-brand-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-4">
          Our Featured Collection
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the finest craftsmanship with our handpicked collection.
        </p>

        {loading ? (
          // Skeleton placeholder grid while loading
          <div className="flex gap-6 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ width: '80%', maxWidth: '350px' }}>
                <SkeletonCard />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={products.length > 1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} style={{ width: '80%', maxWidth: '450px' }}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden group">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={product.image_url || '/images/placeholder.jpg'}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 80vw, 450px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      // Allow both local /images/ paths AND Cloudinary https:// URLs
                      unoptimized={product.image_url?.startsWith('http')}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif text-brand-charcoal">
                      {product.name}
                    </h3>
                    {product.category_name && (
                      <p className="text-sm text-gray-500 mt-1">{product.category_name}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollection;