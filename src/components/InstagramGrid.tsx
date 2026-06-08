import { Instagram, Play, Film } from "lucide-react";
import { motion } from "motion/react";

export default function InstagramGrid() {
  const REELS = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DSRJkF6iC1B/?igsh=MW05bDlmZ3Y4dnZmdQ==",
      thumbnail: "/reel-1.jpg",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DX15YK1Mt0G/?igsh=MXR6aTl0bjRpNjM1OQ==",
      thumbnail: "/reel-2.jpg",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DRMq9nuCIdW/?igsh=MXc2dnpkbHhtN3c1Mw==",
      thumbnail: "/reel-3.jpg",
    }
  ];

  return (
    <section
      id="instagram"
      className="py-12 lg:py-20 bg-[#0c0c0e] relative overflow-hidden"
    >
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex p-3 bg-red-600/10 rounded-xl text-red-500 mb-3 hover:scale-110 transition-transform duration-305">
            <Instagram size={22} />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
            INSTAGRAM FEED <span className="text-red-500">@PARESH_BODYCLUB_MURBAD</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed font-light">
            Stay plugged into our daily routine frames, reels, fat-to-fit updates, and motivational tips.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-sm sm:max-w-md lg:max-w-5xl mx-auto mt-8 mb-6 lg:mt-12 lg:mb-10">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="relative block w-full h-[520px] max-h-[520px] lg:h-auto lg:max-h-none lg:aspect-[9/16] rounded-2xl overflow-hidden group border border-white/10 hover:border-red-500/60 shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] transition-all duration-500 bg-stone-900/40 backdrop-blur-md"
            >
              {/* Thumbnail Background */}
              <img
                src={reel.thumbnail}
                alt={`Instagram Reel Preview ${reel.id}`}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Top Right Reel Icon */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2.5 rounded-full text-white/90 group-hover:text-red-500 group-hover:bg-black/70 transition-all duration-300 z-10">
                <Film size={18} className="fill-current/20" />
              </div>

              {/* Center Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <motion.div
                  animate={{ boxShadow: ["0 0 15px rgba(0,0,0,0.5)", "0 0 25px rgba(239,68,68,0.4)", "0 0 15px rgba(0,0,0,0.5)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-black/50 backdrop-blur-md p-4 rounded-full text-white/90 group-hover:text-white group-hover:bg-red-600 transition-colors duration-300 border border-white/10 group-hover:border-red-500/50"
                >
                  <Play size={32} className="fill-current translate-x-0.5" />
                </motion.div>
              </div>

              {/* Bottom Content / Watch Button */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex flex-col items-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                <div className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600/90 backdrop-blur-sm text-white font-black tracking-widest uppercase text-xs rounded-xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:bg-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300 w-full btn-shine-bmi">
                  <Play size={16} className="fill-current" /> Watch Reel
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Prompt Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/paresh_bodyclub_murbad/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-4 lg:gap-5 px-6 lg:px-8 py-3 lg:py-4 bg-stone-900/80 hover:bg-black text-white text-xs lg:text-sm font-black uppercase tracking-widest rounded-2xl border border-white/10 hover:border-pink-500/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:-translate-y-1.5"
          >
            <div className="relative flex items-center justify-center">
              {/* Soft pink/red glow around the icon */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] blur-[12px] opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 rounded-full"></div>

              {/* SVG Defs for Instagram Gradient */}
              <svg width="0" height="0" className="absolute">
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </svg>

              <Instagram
                className="w-[38px] h-[38px] lg:w-[44px] lg:h-[44px] relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ stroke: "url(#ig-gradient)" }}
              />
            </div>

            <span className="group-hover:text-pink-400 transition-colors duration-200">Follow on Instagram</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
