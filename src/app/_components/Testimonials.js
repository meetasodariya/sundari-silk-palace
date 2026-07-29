'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import { getTestimonials } from '@/lib/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading]           = useState(true);

  useEffect(() => {
    getTestimonials().then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-brand-off-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 animate-pulse">
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
            <div className="h-8 w-48 bg-gray-200 rounded" />
          </div>
          <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-brand-off-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
          <FaStar className="text-brand-gold text-3xl" />
          <span className="text-3xl font-bold text-gray-700 font-serif">
            4.7 Stars on Google
          </span>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={testimonials.length > 1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full pb-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pt-4 px-4">
              <div className="flex justify-center mb-3">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <FaStar key={i} className="text-brand-gold text-xl mx-0.5" />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic text-gray-700 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <h4 className="font-bold text-lg text-brand-maroon">
                — {testimonial.author}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;