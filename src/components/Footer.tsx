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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 items-start mb-12 sm:mb-16">

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
                <span className="font-display font-black text-[22px] md:text-[24px] text-white block uppercase tracking-tight">
                  PARESH BODY CLUB
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-red-500 font-extrabold block -mt-0.5">
                  MURBAD BRANCH
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-stone-400 font-light leading-relaxed max-w-sm">
              One of the most trusted strength and bodybuilding destinations near Parasic Bank, Murbad. Empowering fitness lovers with pristine biomechanics, raw iron stacks, and continuous coaching.
            </p>

            {/* SVG Defs for Instagram Gradient */}
            <svg width="0" height="0" className="absolute">
              <linearGradient id="ig-footer-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </svg>

            {/* Social media icons stack */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-stone-900/60 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/50 hover:shadow-[0_0_20px_rgba(24,119,242,0.4)] transition-all duration-300 hover:scale-[1.08] hover:-translate-y-1 cursor-pointer"
                aria-label="Facebook Page"
              >
                <Facebook className="w-7 h-7 md:w-[32px] md:h-[32px] text-stone-400 group-hover:text-[#1877F2] transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/paresh_body_club_murbad/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-stone-900/60 backdrop-blur-md rounded-2xl border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-[1.08] hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                aria-label="Instagram Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433]/0 via-[#dc2743]/0 to-[#bc1888]/0 group-hover:from-[#f09433]/10 group-hover:via-[#dc2743]/10 group-hover:to-[#bc1888]/10 transition-colors duration-300"></div>
                <Instagram className="w-7 h-7 md:w-[32px] md:h-[32px] text-stone-400 group-hover:stroke-[url(#ig-footer-gradient)] transition-all duration-300 relative z-10" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-stone-900/60 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300 hover:scale-[1.08] hover:-translate-y-1 cursor-pointer"
                aria-label="Youtube Channel"
              >
                <Youtube className="w-7 h-7 md:w-[32px] md:h-[32px] text-stone-400 group-hover:text-[#FF0000] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick links list */}
          <div>
            <h4 className="font-display font-black text-lg md:text-[22px] uppercase tracking-widest text-white mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3.5 text-[17px] md:text-[20px] font-semibold">
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
            </ul>
          </div>

          {/* Gym location summary quick contacts Column */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-lg md:text-[22px] uppercase tracking-widest text-white mb-3">
              Connect Channels
            </h4>
            <ul className="space-y-3.5 text-base md:text-lg font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-stone-400 font-light leading-snug">
                  Congress Bhavan, 1st Floor, Near Parasic Bank, Murbad, Maharashtra 421401
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span className="text-stone-400 font-bold">+91 90214 68123</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span className="text-stone-400 font-bold">info@pareshbodyclub.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower section containing copyright and passion tagline */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm md:text-base font-light text-center relative">
          <div className="hidden sm:block"></div>

          <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            <p className="font-mono text-stone-600">
              ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-1.5 text-stone-500 text-sm md:text-base uppercase font-extrabold tracking-widest">
            <Flame size={18} className="text-red-500 animate-pulse shrink-0" />
            <span>Built with passion for fitness</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
