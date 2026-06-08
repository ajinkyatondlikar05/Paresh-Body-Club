import { Instagram } from "lucide-react";

export default function InstagramGrid() {
  return (
    <section
      id="instagram"
      className="py-20 bg-[#0c0c0e] relative overflow-hidden"
    >
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex p-3 bg-red-600/10 rounded-xl text-red-500 mb-3 hover:scale-110 transition-transform duration-305">
            <Instagram size={22} />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
            INSTAGRAM FEED <span className="text-red-500">@PARESH_BODY_CLUB</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed font-light">
            Stay plugged into our daily routine frames, reels, fat-to-fit updates, and motivational tips.
          </p>
        </div>

        {/* Prompt Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/paresh_body_club_murbad/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-white text-stone-300 hover:text-red-600 text-xs font-black uppercase tracking-widest rounded-lg border border-white/10 hover:border-white transition-all duration-300 cursor-pointer shadow-lg"
          >
            <Instagram size={14} /> Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
