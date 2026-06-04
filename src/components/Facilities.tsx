import { 
  Flame, 
  Dumbbell, 
  Zap, 
  Heart, 
  Shield, 
  Users, 
  Droplets, 
  Music, 
  ChevronRight 
} from "lucide-react";
import { FACILITIES } from "../data";

// Map icon string names to actual Lucide Icon elements for typings stability 
const iconMap: { [key: string]: any } = {
  Flame,
  Dumbbell,
  Zap,
  Heart,
  Shield,
  Users,
  Droplets,
  Music,
};

export default function Facilities() {
  return (
    <section 
      id="facilities" 
      className="py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Visual lighting background panels */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
            World-Class Infrastructure
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            Premium Gym <span className="text-red-500">Facilities</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Engineered with extreme care to maintain hygiene, motivation, and professional lifting continuity 24/7.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FACILITIES.map((fac) => {
            const IconComponent = iconMap[fac.iconName] || Dumbbell;
            return (
              <div
                key={fac.id}
                className="group relative bg-[#0f0f12] hover:bg-[#141418] border border-white/5 hover:border-red-500/20 p-8 rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Glowing Background Overlay Spot on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  {/* Icon Block with Ring Flare */}
                  <div className="relative mb-6 inline-block">
                    <div className="p-4 bg-stone-900 rounded-xl text-red-500 group-hover:text-white group-hover:bg-red-600 transition-all duration-300 relative z-10">
                      <IconComponent size={24} className="stroke-[1.5]" />
                    </div>
                    <div className="absolute inset-0 bg-red-500 rounded-xl blur-md scale-75 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors duration-200">
                    {fac.title}
                  </h3>
                  <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    {fac.description}
                  </p>
                </div>

                {/* Micro Action Button */}
                <div className="mt-6 flex items-center text-red-500 font-display font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  Secure access <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Visual Banner below cards */}
        <div className="mt-16 bg-gradient-to-r from-red-950/20 via-stone-900/60 to-red-950/20 border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-ping"></div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">
                Heavy Load Tested Equipment list
              </h4>
              <p className="text-xs text-stone-400 mt-1">Our steel dumbbells go up to advanced heavy limits for extreme bodybuilders.</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-2.5 bg-stone-900 hover:bg-white text-stone-300 hover:text-red-600 text-xs font-black uppercase tracking-widest rounded-lg border border-white/10 hover:border-white transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Enquire for virtual tour
          </button>
        </div>

      </div>
    </section>
  );
}
