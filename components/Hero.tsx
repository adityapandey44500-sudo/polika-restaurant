'use client';
import { motion } from 'framer-motion';
import { Leaf, GraduationCap, PartyPopper, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1A3A32] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
          alt="Polika Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-center gap-2 mb-6">
             <span className="h-[1px] w-12 bg-[#D4AF37]" />
             <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-sm">Welcome to Polika</span>
             <span className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif mb-8 text-white tracking-tight">
            Fine <span className="text-[#D4AF37] italic">Dine</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12 text-gray-200">
            Ashoka Palace, Patna's Premium Pure Veg Destination. 
            Experience Royal Jain Food & Celebrations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#menu" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black px-12 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl">
              EXPLORE MENU
            </a>
            {/* Sahi WhatsApp Number Yahan Hai */}
            <a 
              href="https://wa.me/917281000099" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-12 py-4 rounded-full font-bold transition-all flex items-center justify-center"
            >
              BOOK A TABLE
            </a>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-2">
                <Leaf className="text-green-400" size={28} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white">100% Pure Veg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <PartyPopper className="text-[#D4AF37]" size={28} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white">Party Space</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <GraduationCap className="text-blue-400" size={28} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white">Student Discount</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Clock className="text-yellow-200" size={28} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white">Jain Food Available</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
