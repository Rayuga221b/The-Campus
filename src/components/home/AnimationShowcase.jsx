import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AnimatedShowcase = () => {
  return (
    <section className="py-4 bg-sky-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 font-bold tracking-wider text-xs uppercase mb-2 block">
              Inspiration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Curated <br />
              <span className="text-gray-400">Collections.</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all group"
          >
            View All Collections
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        </div>

        {/* Grid: left spans 2 rows; right is single-column, two-row grid so each right card = half left */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6"
          style={{ height: "80vh", maxHeight: 720 }}
        >
          {/* LEFT: spans two rows on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.05 }}
            className="relative lg:row-span-2 rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1600&q=80"
              alt="Birthday Collection"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 transform-gpu will-change-transform group-hover:scale-105 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end z-10">
              <span className="text-white/90 text-sm font-medium mb-2">Bestseller's</span>
              <h3 className="text-white text-3xl font-bold">Birthday Bashes</h3>
            </div>
          </motion.div>

          {/* RIGHT: single column, two rows so combined height matches left */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {/* TOP RIGHT (row 1 of right column) */}
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.12 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1512909481869-0eaa1e9817ba?auto=format&fit=crop&w=1600&q=80"
                alt="New Arrivals"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 transform-gpu will-change-transform group-hover:scale-105 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end z-10">
                <span className="text-white/90 text-sm font-medium mb-1">New Arrivals</span>
                <h3 className="text-white text-2xl font-bold">Anniversary Specials</h3>
              </div>
            </motion.div>

            {/* BOTTOM RIGHT (row 2 of right column) */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.18 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80"
                alt="Style Essentials"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 transform-gpu will-change-transform group-hover:scale-105 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end z-10">
                <span className="text-white/90 text-sm font-medium mb-1">Style Essentials</span>
                <h3 className="text-white text-2xl font-bold">Fashion & Accessories</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedShowcase;
