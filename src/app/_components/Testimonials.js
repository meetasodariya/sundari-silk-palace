'use client';
// **FIX**: Correct and complete imports for Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { quote: 'Amazing collection and very reasonable prices. A must-visit in Ahmedabad!', author: 'Priya S.' },
  { quote: 'The designs are unique and the quality is top-notch. Highly recommended.', author: 'Neha M.' },
  { quote: 'I have been a customer for years. Sundari Silk Palace never disappoints.', author: 'Rina P.' },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-off-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <FaStar className="text-brand-gold text-3xl" />
          <span className="text-3xl font-bold text-gray-700 font-serif">4.7 Stars on Google</span>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-48" // Set a fixed height to prevent layout shift
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="pt-4">
              <p className="text-xl md:text-2xl italic text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <h4 className="font-bold text-lg text-brand-maroon">- {testimonial.author}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;