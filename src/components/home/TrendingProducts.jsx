import React from 'react';
import { ShoppingCart, ArrowUpRight } from 'lucide-react';
import { trendingGifts } from '../../data/trendingGifts';

const TrendingProducts = () => {
  return (
    // CHANGE 1: Background is now a soft Green-to-White gradient
    <section className="py-16 bg-gradient-to-b from-[#f0fdf4] to-[#ffffff]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          {/* CHANGE 2: Text color changed from Orange to Green */}
          <span className="text-green-600 font-bold tracking-wider text-xs uppercase mb-2 block">
            Best Selling
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
            Trending Gifts of the Season
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingGifts.map((product) => (
            <div 
              key={product.id} 
              // CHANGE 3: Hover shadow is now a soft Green glow
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-5 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {product.name}
                </h3>
                {/* Price Tag */}
                <span className="bg-gray-100 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                  {product.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-1 leading-relaxed line-clamp-2 min-h-[40px]">
                {product.description}
              </p>
              
              <div className="text-xs font-medium text-gray-400 mb-6">
                in {product.category}
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-3 mt-auto">
                {/* Cart Button */}
                {/* CHANGE 4: Hover turns button Solid Green */}
                <button className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors">
                  <ShoppingCart size={20} />
                </button>

                {/* View Details Button */}
                {/* CHANGE 5: Hover gives a soft green background tint */}
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-900 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors uppercase tracking-wide">
                  View Details
                  <ArrowUpRight size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;