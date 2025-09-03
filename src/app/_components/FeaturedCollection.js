// src/app/_components/FeaturedCollection.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Image from 'next/image'; 

const featuredProducts = [
  {
    name: 'Royal Bandhani Saree',
    imagePath: '/images/featured/bandhani-sari.jpg', // Example image path
  },
  {
    name: 'Mirror Work Lehenga',
    imagePath: '/images/featured/lehenga.jpg', // Example image path
  },
  {
    name: 'Elegant Silk Saree',
    imagePath: '/images/featured/silk-sari.jpg',     // Example image path
  },
  {
    name: 'Traditional Chaniya Choli',
    imagePath: '/images/featured/chaniya-choli.jpg',      // Example image path
  },
   {
    name: 'Festive Kurti Set',
    imagePath: '/images/featured/kurtis.jpg',      // Example image path
  },
];

const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-brand-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-4">
          Our Featured Collection
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the finest craftsmanship with our handpicked collection.
        </p>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
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
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={index} style={{ width: '80%', maxWidth: '450px' }}> {/* Adjusted width for better image display */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden group">
                {/* **STEP 3: Replace ThreeD_SareeViewer with the Image component** */}
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  width={600} // A base width for optimization
                  height={800} // A base height for optimization
                  className="w-full h-auto object-cover aspect-[3/4]" // aspect-ratio for consistent look
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-serif text-brand-charcoal">
                    {product.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCollection;