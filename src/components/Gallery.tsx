import { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { MoveRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Workout area",
    "Machines",
    "Dumbbells",
    "Fitness training",
    "Cardio section",
    "Gym interior"
  ];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="gallery" 
      className="py-24 bg-[#0a0a0c] relative overflow-hidden bg-grid-pattern"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-1">
              Visual Tour
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              GYM <span className="text-red-500">GALLERY</span>
            </h2>
            <p className="text-stone-400 font-sans text-xs sm:text-sm mt-2 max-w-lg leading-relaxed font-light">
              Explore real-time visual snippets of our premium layout setups, pristine locker stations, and intense conditioning frames.
            </p>
          </div>

          {/* Followers social statistics badge */}
          <div className="bg-stone-900/80 border border-white/5 p-4 rounded-xl backdrop-blur-sm self-start md:self-auto flex items-center gap-4 shrink-0">
            <div>
              <span className="font-mono font-black text-xl text-white block">100% REAL</span>
              <span className="text-[10px] text-stone-500 uppercase font-black tracking-wider">Murbad Gym Photos</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div>
              <span className="font-mono font-black text-xl text-red-500 block">4.8★</span>
              <span className="text-[10px] text-stone-500 uppercase font-black tracking-wider">Top Rated Center</span>
            </div>
          </div>
        </div>

        {/* Dynamic Category Filtering Row */}
        <div className="flex flex-nowrap items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0" style={{ WebkitOverflowScrolling: 'touch' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs font-black uppercase tracking-widest cursor-pointer whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/20"
                  : "bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-850 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filterable Products/Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative h-36 sm:h-56 md:h-80 rounded-xl overflow-hidden bg-stone-900 border border-white/5 shadow-lg"
              >
                {/* Product Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-75 contrast-105"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Absolute Top category badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 backdrop-blur-md border border-white/10 text-stone-300 text-[8px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 sm:px-3 sm:py-1 rounded-md z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
                  {item.category}
                </div>

                {/* Absolute Center Zoom icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-red-650 p-2.5 sm:p-4 rounded-full opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 pointer-events-none z-10">
                  <ZoomIn size={16} className="sm:w-5 sm:h-5" />
                </div>

                {/* Bottom Details Content */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display font-black text-xs sm:text-base md:text-lg text-white uppercase tracking-wider mb-0.5 sm:mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-red-500 text-[9px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    Explore <span className="hidden sm:inline">Setup Area</span> <MoveRight size={10} className="animate-pulse" />
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Motivate text indicator */}
        <div id="instagram-block" className="mt-16 text-center">
          <p className="text-xs text-stone-500 font-mono tracking-wider uppercase">
            FOLLOW US ON INSTAGRAM <span className="text-red-500 font-bold hover:underline cursor-pointer ml-1">@PARESH_BODY_CLUB</span> FOR DAILY WORKOUT REELS!
          </p>
        </div>

      </div>
    </section>
  );
}
