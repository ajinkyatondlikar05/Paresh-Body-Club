import { Dumbbell, Instagram, Facebook, Youtube, Flame, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer 
      id="main-footer" 
      className="bg-[#050507] border-t border-white/5 pt-16 pb-8 text-stone-400 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-red-650/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core footer Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start mb-16">
          
          {/* Gym brand Column */}
          <div className="md:col-span-2 space-y-5">
            <div 
              onClick={() => handleScrollTo("home")} 
              className="flex items-center space-x-2.5 cursor-pointer group w-fit"
            >
              <div className="p-2 bg-red-650 rounded-lg group-hover:bg-red-700 transition-colors duration-200">
                <Dumbbell className="text-white h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-black text-lg text-white block uppercase tracking-tight">
                  PARESH BODY CLUB
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-red-500 font-extrabold block -mt-1">
                  MURBAD BRANCH
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              One of the most trusted strength and bodybuilding destinations in Shirgaon and Mata Nagar Rd area, Murbad. Empowering fitness lovers with pristine biomechanics, raw iron stacks, and continuous coaching.
            </p>

            {/* Social media icons stack */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-stone-900 hover:bg-red-650 text-stone-400 hover:text-white rounded-lg border border-white/5 transition-all cursor-pointer"
                aria-label="Facebook Page"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-stone-900 hover:bg-red-650 text-stone-400 hover:text-white rounded-lg border border-white/5 transition-all cursor-pointer"
                aria-label="Instagram Profile"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-stone-900 hover:bg-red-650 text-stone-400 hover:text-white rounded-lg border border-white/5 transition-all cursor-pointer"
                aria-label="Youtube Channel"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick links list */}
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold">
              <li>
                <button 
                  onClick={() => handleScrollTo("home")} 
                  className="hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer font-bold text-left block"
                >
                  Home Floor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")} 
                  className="hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer font-bold text-left block"
                >
                  About Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("membership")} 
                  className="hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer font-bold text-left block"
                >
                  Membership Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("facilities")} 
                  className="hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer font-bold text-left block"
                >
                  Facilities List
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("trainers")} 
                  className="hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer font-bold text-left block"
                >
                  Certified Team
                </button>
              </li>
            </ul>
          </div>

          {/* Gym location summary quick contacts Column */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-1">
              Connect Channels
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-stone-400 font-light leading-snug">
                  Mata Nagar Rd, Shirgaon, Murbad, Maharashtra 421401
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-red-500 shrink-0" />
                <span className="text-stone-400 font-bold">+91 90214 68123</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-red-500 shrink-0" />
                <span className="text-stone-400 font-bold">info@pareshbodyclub.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower section containing copyright and passion tagline */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-light">
          <div>
            <p className="font-mono text-stone-600">
              © {new Date().getFullYear()} PARESH BODY CLUB MURBAD. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-stone-500 text-xs uppercase font-extrabold tracking-widest">
            <Flame size={14} className="text-red-500 animate-pulse" /> 
            <span>Built with passion for fitness</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
