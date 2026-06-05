import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function Headquarters() {
  const ref = useRef(null);
  // Trigger animations when 10% of the section is visible
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5, // Delays map fade up until cards start showing
      },
    },
  };

  const cards = [
    {
      title: "Physical Location",
      content: "Mata Nagar Rd, Shirgaon, Murbad, Maharashtra 421401",
      extra: "LOCATION CODE: 794Q+CW MURBAD, MAHARASHTRA",
      icon: MapPin,
      type: "address",
    },
    {
      title: "Direct Line",
      content: "+91 90214 68123",
      href: "tel:+919021468123",
      icon: Phone,
      type: "phone",
    },
    {
      title: "Inquiry Mailbox",
      content: "info@pareshbodyclub.com",
      href: "mailto:info@pareshbodyclub.com",
      icon: Mail,
      type: "email",
    },
  ];

  return (
    <motion.section
      id="headquarters"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-16 bg-[#0c0c0e] relative overflow-hidden bg-grid-pattern block md:hidden border-t border-white/5"
    >
      {/* Top glowing ambient red gradient accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-red-500 font-display font-black uppercase text-xs tracking-widest block mb-1">
            FIND US
          </span>
          <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">
            OUR <span className="text-red-500">HEADQUARTERS</span>
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mt-2 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
        </div>

        {/* Info Cards Stack */}
        <div className="space-y-4 mb-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-stone-900/50 backdrop-blur-md border border-white/5 hover:border-red-500/20 rounded-2xl p-5 flex gap-4 items-start transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Glowing pulsing icon wrapper */}
                <motion.div
                  className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-red-500 shrink-0"
                  animate={{
                    boxShadow: [
                      "0 0 6px rgba(239, 68, 68, 0.15)",
                      "0 0 16px rgba(239, 68, 68, 0.45)",
                      "0 0 6px rgba(239, 68, 68, 0.15)",
                    ],
                    borderColor: [
                      "rgba(239, 68, 68, 0.25)",
                      "rgba(239, 68, 68, 0.65)",
                      "rgba(239, 68, 68, 0.25)",
                    ],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2, // Offset pulse timing for cool stagger
                  }}
                >
                  <IconComponent size={20} className="stroke-[2px]" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-widest block mb-0.5">
                    {card.title}
                  </span>
                  
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-white hover:text-red-500 font-bold text-sm sm:text-base transition-colors duration-250 block truncate"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <span className="text-white font-semibold text-xs sm:text-sm leading-relaxed block">
                      {card.content}
                    </span>
                  )}

                  {card.extra && (
                    <span className="text-red-500 text-[9px] uppercase font-black tracking-widest block mt-2 font-mono bg-red-500/5 py-1 px-2.5 rounded border border-red-500/10 w-fit">
                      {card.extra}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Glowing Interactive Live Map Container */}
        <motion.div
          variants={mapVariants}
          className="relative rounded-2xl overflow-hidden border border-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.18)] bg-stone-950 p-[1px]"
        >
          {/* Internal shadow and inner border */}
          <div className="relative w-full h-56 rounded-[15px] overflow-hidden bg-stone-900">
            <iframe
              title="PARESH BODY CLUB Live Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.159392233777!2d73.387192!3d19.2560625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be78b102b0d142d%3A0x14c75fe9e41d57b4!2sPARESH%20BODY%20CLUB%20MURBAD!5e0!3m2!1sen!2sin!4v1716719138092!5m2!1sen!2sin"
              className="w-full h-full border-0 filter grayscale invert contrast-110 opacity-70"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Dark gradient overlay vignetting the map edges */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>

            {/* Floating Region Badge */}
            <div className="absolute top-3 left-3 bg-red-950/85 backdrop-blur-md text-red-400 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-red-500/30 flex items-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              SHIRGAON REGION
            </div>

            {/* Floating Open in Maps Link */}
            <a
              href="https://maps.app.goo.gl/McerevxEyhJxAf5p9"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-black/80 hover:bg-red-650 hover:text-white backdrop-blur-md text-stone-300 text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg border border-white/10 hover:border-red-500/40 flex items-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer"
            >
              <Navigation size={10} className="rotate-45" />
              Open in Maps
            </a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
