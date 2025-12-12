import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Import standard Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Data
import { categories } from '../../data/categories';

const CategorySlider = () => {
  return (
    <section className="py-1 bg-[#faf9f6]"> {/* Warm off-white background */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="relative w-full py-10 group">
      
      {/* Section Title (Optional, remove if you want it purely clean like the image) */}
      <h3 className="text-xl font-bold text-gray-900 mb-6 px-1">Shop by Category</h3>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20} // Space between circles
        slidesPerView={3} // Start small (Mobile)
        navigation={{
          nextEl: '.cat-next',
          prevEl: '.cat-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 4 }, // Tablet
          768: { slidesPerView: 6 }, // Small Laptop
          1024: { slidesPerView: 8 }, // Desktop (High density like screenshot)
        }}
        className="w-full"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id} className="flex flex-col items-center group/card cursor-pointer">
            {/* Image Container */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden mb-3 border border-transparent group-hover/card:border-gray-300 transition-all">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Title */}
            <span className="text-sm font-semibold text-gray-700 group-hover/card:text-black">
              {cat.title}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons (Outside the swiper container) */}
      <button className="cat-prev absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full border border-gray-100 text-gray-700 hover:bg-gray-50 disabled:opacity-0 disabled:cursor-not-allowed transition-all opacity-0 group-hover:opacity-100">
        <ChevronLeft size={20} />
      </button>
      <button className="cat-next absolute right-0 top-[60%] -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full border border-gray-100 text-gray-700 hover:bg-gray-50 disabled:opacity-0 disabled:cursor-not-allowed transition-all opacity-0 group-hover:opacity-100">
        <ChevronRight size={20} />
      </button>

      </div>
      </div>
    </section>
  );
};

export default CategorySlider;