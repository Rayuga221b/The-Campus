import React from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// 2. Import Swiper styles (Mandatory for it to work)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 3. Import our data
import { slides } from '../../data/heroslider';

const HeroSlider = () => {
  return (
    <section className="py-1 bg-[#faf9f6]"> {/* Warm off-white background */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="relative w-full py-8 group">
      {/* The Swiper Component 
         - spaceBetween={20}: 20px gap between slides
         - slidesPerView={1}: Start with 1 slide visible (mobile)
         - breakpoints: At 768px (tablet), show 2 slides. At 1024px, show 2.5 or 3.
      */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
        breakpoints={{
          768: { slidesPerView: 2 },   // Show 2 cards on tablets
          1200: { slidesPerView: 2.2}, // Show 2 full + 1 partial on desktop (like Amazon)
        }}
        className="w-full px-4 h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* The Individual Card - Clean white background */}
            <div className={`relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden flex items-center p-8 transition-transform hover:scale-[1.02] bg-white border border-gray-200 shadow-lg hover:shadow-xl`}>
              
              {/* Text Content (Left Side) */}
              <div className="w-1/2 flex flex-col items-start gap-4 z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {slide.subtitle}
                </p>
                <button className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                  {slide.buttonText}
                </button>
              </div>

              {/* Image (Right Side) */}
              <div className="absolute right-0 top-0 w-1/2 h-full">
                {/* We use object-cover to make sure the image fills the space without stretching */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                {/* Light gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows (Floating on edges) */}
      <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-800 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-30">
        <ChevronLeft size={24} />
      </button>
      <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-800 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-30">
        <ChevronRight size={24} />
      </button>
      
      </div>
      </div>
    </section>
  );
};

export default HeroSlider;