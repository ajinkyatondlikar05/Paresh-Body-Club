import { Star, MessageSquareCode, Quote } from "lucide-react";
import { REVIEWS } from "../data";
import { motion } from "motion/react";

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-red-650/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-stone-800/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header containing the 4.8 rating metric summary details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
              Customer Experiences
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              Testimonials & <span className="text-red-500">Reviews</span>
            </h2>
            <p className="text-stone-300 font-sans text-xs sm:text-sm md:text-base max-w-xl mt-3 leading-relaxed font-light">
              Don’t just take our word for it. Read honest reviews from our dedicated member network who successfully rebuilt their physical confidence.
            </p>
          </div>

          {/* Interactive Rating Badge Grid */}
          <div className="lg:col-span-5 bg-stone-900/60 border border-white/5 p-4 sm:p-6 rounded-2xl flex items-center justify-between backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] gap-4">
            <div>
              <span className="block text-4xl sm:text-5xl font-mono font-black text-white">4.8</span>
              <div className="flex items-center gap-0.5 mt-1.5 text-yellow-500">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </div>
              <span className="block text-stone-500 text-[10px] uppercase font-bold tracking-wider mt-2">
                Overall Score Metric
              </span>
            </div>

            <div className="h-16 w-px bg-white/10"></div>

            <div className="text-right">
              <span className="block text-4xl sm:text-5xl font-mono font-black text-red-500">10</span>
              <span className="block text-stone-300 text-xs font-semibold uppercase mt-1">Verified reviews</span>
              <span className="block text-stone-500 text-[10px] uppercase font-bold tracking-wider mt-2">
                Google Local Map
              </span>
            </div>
          </div>
        </div>

        {/* glassmorphism reviews layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-stone-900/45 hover:bg-stone-900/90 border border-white/5 hover:border-red-500/10 transition-all duration-300 hover:-translate-y-1 group backdrop-blur shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Quotation Icon and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={i < Math.floor(rev.rating) ? "fill-current" : "text-stone-600"} 
                      />
                    ))}
                  </div>
                  <Quote size={20} className="text-stone-800 group-hover:text-red-950 transition-colors duration-300" />
                </div>

                {/* Testimonial Statement */}
                <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-light italic">
                  “{rev.comment}”
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-red-500 transition-colors duration-200 uppercase">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider block">
                    {rev.role}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-stone-600 block">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
