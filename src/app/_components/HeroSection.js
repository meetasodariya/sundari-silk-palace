'use client';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden -mt-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        src="/videos/hero-video1.mp4" // **IMPORTANT**: Add a video to /public/videos/hero-video.mp4
      ></video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
        >
          Sundari Silk Palace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-200 font-sans"
        >
          36 Years of Timeless Elegance
        </motion.p>
      </div>
    </section>
  );
};
export default HeroSection;