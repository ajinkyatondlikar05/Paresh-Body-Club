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

  // Prevent body scrolling while menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/97 backdrop-blur-md border-b border-white/8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.9)]"
          : "bg-[#0a0a0c]/90 backdrop-blur-sm py-5"
      }`}
      style={{ zIndex: 10000 }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo — hexagon barbell shield with premium upgrades */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-5 cursor-pointer group"
          >
            {/* Hexagon / shield SVG icon with barbell and subtle red glow */}
            <div className="relative w-11 h-11 md:w-[50px] md:h-[50px] flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-red-500/20 blur-[10px] rounded-full scale-90 group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
              <svg viewBox="0 0 44 44" className="relative w-11 h-11 md:w-[50px] md:h-[50px] filter drop-shadow-[0_2px_8px_rgba(239,68,68,0.35)]" fill="none">
                {/* Hexagon shield */}
                <path
                  d="M22 2 L40 12 L40 32 L22 42 L4 32 L4 12 Z"
                  fill="#dc2626"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                />
                {/* Barbell icon inside */}
                <rect x="10" y="20" width="24" height="4" rx="2" fill="white" />
                <rect x="9" y="16" width="4" height="12" rx="2" fill="white" />
                <rect x="31" y="16" width="4" height="12" rx="2" fill="white" />
                <rect x="6" y="18" width="4" height="8" rx="1.5" fill="white" />
                <rect x="34" y="18" width="4" height="8" rx="1.5" fill="white" />
              </svg>
            </div>
            
            {/* Text block with premium typography & custom red accent line */}
            <div className="flex flex-col justify-center text-left">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-display font-bold text-white text-[14.5px] md:text-[17px] antialiased">
                  PARESH
                </span>
                <span className="font-display font-black text-red-500 text-[15.5px] md:text-[18px] antialiased">
                  BODY CLUB
                </span>
              </div>
              {/* Subtle red accent line under branding */}
              <div className="w-9 h-[1.5px] bg-red-500 mt-1.5 rounded-full shadow-[0_0_4px_rgba(239,68,68,0.6)]" />
              <div className="text-[7.5px] md:text-[8.5px] uppercase tracking-[0.24em] text-stone-400 font-semibold leading-none mt-1.5 antialiased">
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
              style={{ zIndex: 10001, position: "relative" }}
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 md:hidden bg-[#050505]/98 backdrop-blur-xl border-b border-red-500/20 shadow-[0_15px_30px_rgba(239,68,68,0.15)] flex flex-col pt-[100px] px-6 pb-10 overflow-y-auto"
            style={{
              zIndex: 9999,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100vh",
            }}
          >
            <div className="flex flex-col justify-center items-center gap-6 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-black uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? "text-red-500 scale-105 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                      : "text-white hover:text-red-500"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-6 w-full max-w-[280px] pb-8">
                <button
                  onClick={() => scrollToSection("membership")}
                  className="w-full text-center py-4 bg-red-600 hover:bg-red-500 text-white text-sm font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(239,68,68,0.45)] cursor-pointer transition-all duration-300 flex items-center justify-center gap-2"
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
