'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '@/lib/data';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("Paneer Gravy");

  return (
    <section id="menu" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-2 block">Premium Cuisines</span>
          <h2 className="text-5xl font-serif text-[#1A3A32]">Our Culinary Masterpieces</h2>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Categories Tab */}
        <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar mb-12 justify-start lg:justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 font-serif text-lg whitespace-nowrap transition-all border-b-2 ${
                activeTab === cat 
                ? 'border-[#D4AF37] text-[#1A3A32] font-bold' 
                : 'border-transparent text-gray-400 hover:text-[#1A3A32]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {menuItems
              .filter(item => item.category === activeTab)
              .map((item: any) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex justify-between items-end border-b border-gray-200 pb-4 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-serif text-[#1A3A32] group-hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                        {item.tag && (
                            <span className="bg-[#1A3A32] text-white text-[9px] px-2 py-0.5 rounded uppercase tracking-tighter">
                                {item.tag}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-500 text-sm font-light italic">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-serif text-[#1A3A32]">₹{item.price}</span>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center text-gray-400 text-sm italic">
          * All prices are in INR. Jain Food options available on request.
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
