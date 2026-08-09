'use client';
import { MapPin, Phone, Globe, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A3A32] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-serif mb-6 text-[#D4AF37]">POLIKA</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Experience the art of fine dining at Polika. Patna's most elegant pure veg restaurant serving happiness on every plate.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Globe size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Mail size={18} /></a>
               <a href="https://wa.me/919162026801" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#D4AF37]">Location</h4>
            <div className="flex items-start gap-4 text-gray-400 mb-6">
              <MapPin className="mt-1 flex-shrink-0" size={20} />
              <p>Ashoka Palace, Near Kashyap Marriage Hall, Near Ashok Puri, Jyotipuram Colony, Chowk, Patna, Bihar 800014</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <Phone size={20} />
              <p>+91 91620 26801, 72810 00099</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#D4AF37]">Timing</h4>
            <p className="text-gray-400 mb-2">Monday - Friday</p>
            <p className="text-white font-serif text-xl mb-6">12:00 PM - 10:00 PM</p>
            <p className="text-gray-400 mb-2">Saturday - Sunday</p>
            <p className="text-white font-serif text-xl">12:00 PM - 11:00 PM</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm">
          <p>© 2026 Polika Fine Dine Restaurant. Pure Veg Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
