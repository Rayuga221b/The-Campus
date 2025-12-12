import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gift, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Clock size={32} />,
    title: "Same Day Delivery",
    desc: "Order by 2 PM for delivery today. We never miss a special moment.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Gift size={32} />,
    title: "Premium Packaging",
    desc: "Every gift comes in our signature sustainable luxury boxes.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Quality Guarantee",
    desc: "Freshness guaranteed for flowers and plants for 7 days.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <Truck size={32} />,
    title: "Free Shipping",
    desc: "On all orders above $50. No hidden fees at checkout.",
    color: "bg-orange-50 text-orange-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Gifting With Us is Special
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We don't just deliver objects; we deliver emotions. Here is how we ensure perfection.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start invisible & 50px down
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible & original position
              viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect (0.1s delay between each)
              className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;