import { Instagram, Play, Film } from "lucide-react";

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
            INSTAGRAM FEED <span className="text-red-500">@PARESH_BODYCLUB_MURBAD</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed font-light">
            Stay plugged into our daily routine frames, reels, fat-to-fit updates, and motivational tips.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-sm sm:max-w-md lg:max-w-5xl mx-auto mt-12 mb-10">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[9/16] rounded-2xl overflow-hidden group border border-white/10 hover:border-red-500/60 shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] transition-all duration-500 bg-stone-900/40 backdrop-blur-md"
            >
              {/* Thumbnail Background */}
              <img
                src={reel.thumbnail}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://placehold.co/600x1067/111111/ef4444?text=Reel+${reel.id}+Preview%5Cn(Upload+reel-${reel.id}.jpg)`;
                }}
                alt={`Instagram Reel Preview ${reel.id}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Top Right Reel Icon */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2.5 rounded-full text-white/90 group-hover:text-red-500 group-hover:bg-black/70 transition-all duration-300 z-10">
                <Film size={18} className="fill-current/20" />
              </div>

              {/* Center Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-full text-white/90 group-hover:text-white group-hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] border border-white/10 group-hover:border-red-500/50">
                  <Play size={32} className="fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Content / Watch Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                <div className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600/90 backdrop-blur-sm text-white font-black tracking-widest uppercase text-xs rounded-xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:bg-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300 w-full">
                  <Play size={16} className="fill-current" /> Watch Reel
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Prompt Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/paresh_bodyclub_murbad/"
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
