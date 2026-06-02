import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "founder", label: "Founder" },
    { id: "membership", label: "Membership" },
    { id: "facilities", label: "Facilities" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/97 backdrop-blur-md border-b border-white/8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.9)]"
          : "bg-[#0a0a0c]/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo — hexagon barbell shield matching screenshot */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Hexagon / shield SVG icon with barbell */}
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 44 44" className="w-10 h-10 md:w-11 md:h-11" fill="none">
                {/* Hexagon shield */}
                <path
                  d="M22 2 L40 12 L40 32 L22 42 L4 32 L4 12 Z"
                  fill="#dc2626"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
                {/* Barbell icon inside */}
                <rect x="10" y="20" width="24" height="4" rx="2" fill="white" />
                <rect x="9" y="16" width="4" height="12" rx="2" fill="white" />
                <rect x="31" y="16" width="4" height="12" rx="2" fill="white" />
                <rect x="6" y="18" width="4" height="8" rx="1.5" fill="white" />
                <rect x="34" y="18" width="4" height="8" rx="1.5" fill="white" />
              </svg>
            </div>
            <div className="leading-[1.05] flex flex-col justify-center">
              <div className="font-display font-black text-white text-[13px] md:text-[15px] tracking-tight leading-none">
                PARESH
              </div>
              <div className="font-display font-black text-red-500 text-[13px] md:text-[15px] tracking-tight leading-none mt-0.5">
                BODY CLUB
              </div>
              <div className="text-[8px] md:text-[9px] uppercase tracking-[0.16em] text-stone-400 font-extrabold leading-none mt-1">
                MURBAD BRANCH
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-2 text-xs lg:text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-red-500 rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("membership")}
              className="ml-3 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs lg:text-sm font-extrabold uppercase tracking-widest rounded-md cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-[0_0_18px_rgba(239,68,68,0.35)] hover:shadow-[0_0_25px_rgba(239,68,68,0.55)]"
            >
              JOIN NOW <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full md:hidden bg-[#0c0c0e]/98 backdrop-blur-xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.85)] max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-2 sm:px-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider cursor-pointer ${
                    activeSection === link.id
                      ? "text-red-500 bg-red-900/20 pl-4 border-l-4 border-red-500"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 pb-2 px-3">
                <button
                  onClick={() => scrollToSection("membership")}
                  className="w-full text-center py-3.5 bg-red-600 hover:bg-red-500 text-white text-sm font-black uppercase tracking-widest rounded-md shadow-lg shadow-red-500/30 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2"
                >
                  JOIN NOW <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
