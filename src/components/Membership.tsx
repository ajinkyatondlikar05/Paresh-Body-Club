import { Calendar, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

// Accent Components
const DiagonalStripesLeft = () => (
  <div className="absolute top-0 left-0 w-64 h-64 overflow-hidden pointer-events-none select-none z-20">
    {/* Thick Stripe with red glow and border */}
    <div className="absolute top-[-30px] left-[-90px] w-[280px] h-[26px] bg-red-650 -rotate-45 shadow-[0_0_20px_#ff0000] border-b border-red-400" />
    {/* Thin Stripe */}
    <div className="absolute top-[3px] left-[-80px] w-[280px] h-[6px] bg-red-500 -rotate-45 shadow-[0_0_12px_#ff0000]" />
  </div>
);

const DiagonalStripesRight = () => (
  <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden pointer-events-none select-none z-20">
    {/* Thick Stripe with red glow and border */}
    <div className="absolute top-[-30px] right-[-90px] w-[280px] h-[26px] bg-red-650 rotate-45 shadow-[0_0_20px_#ff0000] border-b border-red-400" />
    {/* Thin Stripe */}
    <div className="absolute top-[3px] right-[-80px] w-[280px] h-[6px] bg-red-500 rotate-45 shadow-[0_0_12px_#ff0000]" />
  </div>
);

const DiagonalStripesBottomRight = () => (
  <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden pointer-events-none select-none z-20">
    {/* Thick Stripe with red glow and border */}
    <div className="absolute bottom-[-30px] right-[-90px] w-[280px] h-[26px] bg-red-650 -rotate-45 shadow-[0_0_20px_#ff0000] border-t border-red-400" />
    {/* Thin Stripe */}
    <div className="absolute bottom-[3px] right-[-80px] w-[280px] h-[6px] bg-red-500 -rotate-45 shadow-[0_0_12px_#ff0000]" />
  </div>
);

const DiagonalStripesBottomLeft = () => (
  <div className="absolute bottom-0 left-0 w-64 h-64 overflow-hidden pointer-events-none select-none z-20">
    {/* Thick Stripe with red glow and border */}
    <div className="absolute bottom-[-30px] left-[-90px] w-[280px] h-[26px] bg-red-650 rotate-45 shadow-[0_0_20px_#ff0000] border-t border-red-400" />
    {/* Thin Stripe */}
    <div className="absolute bottom-[3px] left-[-80px] w-[280px] h-[6px] bg-red-500 rotate-45 shadow-[0_0_12px_#ff0000]" />
  </div>
);


const DumbbellIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" className="text-red-500 fill-current shrink-0">
    {/* Bar */}
    <rect x="2" y="10.5" width="20" height="3" rx="1" />
    {/* Left Inner Plate */}
    <rect x="6" y="5" width="2.5" height="14" rx="1" />
    {/* Left Outer Plate */}
    <rect x="3.5" y="7.5" width="2" height="9" rx="0.8" />
    {/* Right Inner Plate */}
    <rect x="15.5" y="5" width="2.5" height="14" rx="1" />
    {/* Right Outer Plate */}
    <rect x="18.5" y="7.5" width="2" height="9" rx="0.8" />
  </svg>
);

const ShieldStarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="text-white fill-none stroke-current stroke-[2] shrink-0 mx-auto mb-1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polygon points="12,6 13.5,9.5 17,10 14.5,12.5 15,16 12,14.5 9,16 9.5,12.5 7,10 10.5,9.5" fill="currentColor" stroke="none" />
  </svg>
);

const BarbellIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="text-white fill-current shrink-0 mx-auto mb-1.5">
    <rect x="2" y="11" width="20" height="2" rx="0.5" />
    <rect x="6" y="7" width="2" height="10" rx="0.5" />
    <rect x="8" y="8" width="1" height="8" rx="0.5" />
    <rect x="15" y="8" width="1" height="8" rx="0.5" />
    <rect x="16" y="7" width="2" height="10" rx="0.5" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="text-white fill-none stroke-current stroke-[2] shrink-0 mx-auto mb-1.5">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M6 10h2l2-3 2 6 2-3h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HexagonNumber = ({ num }: { num: number }) => (
  <div className="relative w-8 h-8 flex items-center justify-center mx-auto select-none pointer-events-none">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-500 stroke-current fill-none stroke-[8] filter drop-shadow-[0_0_3px_rgba(239,68,68,0.4)]">
      <polygon points="50,4 93,25 93,75 50,96 7,75 7,25" />
    </svg>
    <span className="relative font-display font-black text-white text-sm z-10">{num}</span>
  </div>
);

const OctagonClipboardIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-500 stroke-current fill-none stroke-[6] filter drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
      <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" />
    </svg>
    <ClipboardList className="relative text-white z-10" size={20} />
  </div>
);

const RedShieldCheck = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NoRefundIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="18" cy="15" r="4" className="fill-[#140505] stroke-[1.5]" />
    <line x1="16" y1="13" x2="20" y2="17" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="13" x2="16" y2="17" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const FollowRulesIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TimeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InjuryIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <circle cx="18" cy="15" r="4" className="fill-[#140505] stroke-[1.5]" />
    <line x1="18" y1="13" x2="18" y2="17" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ValuablesIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const BodybuilderFlexSilhouette = () => (
  <svg viewBox="0 0 100 100" width="70" height="70" className="text-red-650/90 fill-current shrink-0 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
    <path d="M50 20c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm-3.5 7.4c-4.8.8-8.2 4-9.3 8.3-.9 3.5-3.3 5.4-6.8 6-4.5.8-8 3.5-9.3 7.8-1 3.2.1 6.5 2.8 8.1 2.8 1.6 6.3 1 8.5-1.3 1.8-1.9 3.5-2.5 5.9-1.9 1.1.3 1.8 1.2 1.8 2.4v28.2c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V57c0-1.2.7-2.1 1.8-2.4 2.4-.6 4.1 0 5.9 1.9 2.2 2.3 5.7 2.9 8.5 1.3 2.7-1.6 3.8-4.9 2.8-8.1-1.3-4.3-4.8-7-9.3-7.8-3.5-.6-5.9-2.5-6.8-6-1.1-4.3-4.5-7.5-9.3-8.3-.7-.1-1.5-.2-2.2-.2s-1.5.1-2.2.2z" />
  </svg>
);

const LifterSilhouette = () => (
  <svg viewBox="0 0 100 100" width="70" height="70" className="text-red-650/90 fill-current shrink-0 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
    <path d="M50 24c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm-8.8 6.5c-3 0-5.8 1.5-7.3 4l-11.4 19c-1.3 2.2-.6 5.1 1.6 6.4 2.2 1.3 5.1.6 6.4-1.6l8.5-14.2v36.9c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4V38.1l8.5 14.2c1.3 2.2 4.2 2.9 6.4 1.6 2.2-1.3 2.9-4.2 1.6-6.4L66.1 34.5c-1.5-2.5-4.3-4-7.3-4H41.2zM10 48h80v-4H10v4z" />
  </svg>
);

const WHATSAPP_PHONE = "919021468123";

const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

const MEMBERSHIP_ROWS = [
  {
    no: 1,
    months: "1 MONTH",
    gym: "₹ 700",
    gymCardio: "₹ 900",
    gymMsg: "Hi Sir, I want more details about the 1 Month Gym membership plan ₹700.",
    gymCardioMsg: "Hi Sir, I want more details about the 1 Month Gym + Cardio membership plan ₹900.",
  },
  {
    no: 2,
    months: "3 MONTHS",
    gym: "₹ 1800",
    gymCardio: "₹ 2400",
    gymMsg: "Hi Sir, I want more details about the 3 Months Gym membership plan ₹1800.",
    gymCardioMsg: "Hi Sir, I want more details about the 3 Months Gym + Cardio membership plan ₹2400.",
  },
  {
    no: 3,
    months: "6 MONTHS",
    gym: "₹ 3000",
    gymCardio: "₹ 4200",
    gymMsg: "Hi Sir, I want more details about the 6 Months Gym membership plan ₹3000.",
    gymCardioMsg: "Hi Sir, I want more details about the 6 Months Gym + Cardio membership plan ₹4200.",
  },
  {
    no: 4,
    months: "1 YEAR",
    gym: "₹ 5400",
    gymCardio: "₹ 7200",
    gymMsg: "Hi Sir, I want more details about the 1 Year Gym membership plan ₹5400.",
    gymCardioMsg: "Hi Sir, I want more details about the 1 Year Gym + Cardio membership plan ₹7200.",
  },
];

const RULES = [
  { text: "Fees once paid will not be refunded back or transfer to other person.", icon: "cash" },
  { text: "All the rules & regulations of the gymnasium should be strictly followed.", icon: "shield" },
  { text: "Fees should be paid strictly on time.", icon: "clock" },
  { text: "Gymnasium authorities will not take any responsibility if any injury is caused.", icon: "injury" },
  { text: "We are not responsible for your valuable things.", icon: "valuables" }
];

export default function Membership() {
  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case "cash":
        return <NoRefundIcon />;
      case "shield":
        return <FollowRulesIcon />;
      case "clock":
        return <TimeIcon />;
      case "injury":
        return <InjuryIcon />;
      case "valuables":
        return <ValuablesIcon />;
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <section 
      id="membership" 
      className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden"
    >
      {/* ── BACKGROUND POSTER LAYER ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        
        {/* Red ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-red-650/10 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute top-1/3 right-[10%] w-[350px] h-[350px] bg-red-550/15 rounded-full blur-[120px] animate-glow-pulse" />
        
        {/* Drifting smoke effect */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 -left-10 w-96 h-96 bg-stone-950/20 blur-[70px] rounded-full animate-smoke-slow" />
          <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-stone-950/20 blur-[70px] rounded-full animate-smoke-slow" style={{ animationDelay: "-9s" }} />
        </div>

        {/* Embers */}
        <div className="absolute bottom-0 inset-x-0 h-1/2">
          <div className="absolute left-[15%] w-[1.5px] h-[1.5px] bg-red-500 rounded-full blur-[0.5px] animate-ember-cinematic-1" />
          <div className="absolute left-[45%] w-[2px] h-[2px] bg-red-600 rounded-full blur-[0.5px] animate-ember-cinematic-2" style={{ animationDelay: "-5s" }} />
          <div className="absolute left-[75%] w-[1px] h-[1px] bg-red-500 rounded-full blur-[0.5px] animate-ember-cinematic-3" style={{ animationDelay: "-10s" }} />
        </div>

        {/* Poster Corner Accents */}
        <DiagonalStripesLeft />
        <DiagonalStripesRight />
        <div className="absolute top-0 left-0 w-64 h-[470px] md:h-[430px] lg:h-[540px] overflow-hidden pointer-events-none select-none z-20">
          <DiagonalStripesBottomLeft />
        </div>
        <div className="absolute top-0 right-0 w-64 h-[470px] md:h-[430px] lg:h-[540px] overflow-hidden pointer-events-none select-none z-20">
          <DiagonalStripesBottomRight />
        </div>

        {/* Top-Left Muscular Bodybuilder Photo Background */}
        <div className="absolute top-0 left-0 w-[50%] h-[470px] md:h-[430px] lg:h-[540px] opacity-[0.95] lg:opacity-[1.0] z-0 pointer-events-none overflow-hidden">
          <div className="w-full h-full relative scale-[1.25] translate-y-[-20px] origin-top-left md:scale-[1.20] md:translate-y-0 md:origin-left">
            <img 
              src="/membership-left-clean.jpg?v=5" 
              alt="Bodybuilder decoration"
              className="w-full h-full object-cover filter contrast-130 brightness-[1.05] saturate-110 md:contrast-110 md:brightness-[0.8] animate-bodybuilder-breathe"
              style={{ objectPosition: "left 20%" }}
            />
            {/* Subtle Rim Lighting Highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(239,68,68,0.4),transparent_50%)] mix-blend-screen pointer-events-none md:hidden" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-50% to-[#09090b]" />
          <div className="absolute top-[20%] left-[-10%] w-[250px] h-[250px] bg-red-650/30 rounded-full blur-[80px] md:hidden pointer-events-none" />
        </div>

        {/* Top-Right Gym Equipment Poster Texture */}
        <div className="absolute top-0 right-0 w-[50%] h-[470px] md:h-[430px] lg:h-[540px] opacity-[0.95] lg:opacity-[1.0] z-0 pointer-events-none overflow-hidden">
          <img 
            src="/membership-right-clean.jpg?v=5" 
            alt="Gym background"
            className="w-full h-full object-cover object-right filter contrast-125 brightness-[1.70] saturate-110 md:brightness-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090b]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-35% to-[#09090b] md:via-35%" />
          <div className="absolute top-[10%] right-[10%] w-[180px] h-[180px] bg-red-650/20 rounded-full blur-[40px] md:hidden pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[200px] h-[200px] bg-red-500/30 rounded-full blur-[60px] md:hidden pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── SLANTED BOLD HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4 relative z-10 max-w-[280px] sm:max-w-none mx-auto translate-y-[25px] translate-x-0 md:translate-y-0 md:translate-x-12 lg:translate-x-16 xl:translate-x-20"
        >
          <div className="flex justify-center mb-3 text-red-500 animate-pulse">
            <DumbbellIcon />
          </div>
          <h2 className="font-display font-black text-center uppercase tracking-tight italic select-none flex flex-col gap-0 leading-[0.85] sm:block sm:text-5xl md:text-6xl">
            <span className="text-white text-6xl tracking-tighter block sm:inline sm:text-5xl sm:tracking-normal sm:mr-3">GYM</span>
            <span className="text-white text-[42px] tracking-tighter block sm:inline sm:text-5xl sm:tracking-normal sm:mr-3 -mt-1 sm:mt-0">MEMBERSHIP</span>
            <span className="text-red-500 text-6xl tracking-tighter block sm:inline sm:text-5xl sm:tracking-normal drop-shadow-[0_0_15px_rgba(239,68,68,0.65)] -mt-1 sm:mt-0">DETAILS</span>
          </h2>
        </motion.div>

        {/* ── SUBTITLE ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="flex items-center justify-center gap-2.5 w-full max-w-[280px] sm:max-w-none mx-auto mb-12 relative z-10 translate-y-[35px] md:translate-y-0"
        >
          <div className="h-[1.5px] bg-red-500 w-6 shrink-0 sm:hidden" />
          <p className="text-white font-sans text-[10px] sm:text-sm text-center uppercase tracking-widest italic font-bold max-w-[170px] sm:max-w-none">
            CHOOSE THE PERFECT PLAN FOR YOUR FITNESS JOURNEY
          </p>
          <div className="h-[1.5px] bg-red-500 w-6 shrink-0 sm:hidden" />
        </motion.div>
        
        {/* ── MAIN VERTICAL STACKED LAYOUT ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10 sm:gap-12 max-w-4xl mx-auto relative z-10 mt-[45px] md:mt-0"
        >
          
          {/* 1. MEMBERSHIP TABLE CARD (Full width layout) */}
          <motion.div
            variants={itemVariants}
            className="bg-[#09090b]/90 backdrop-blur-md border border-red-500/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_30px_rgba(239,68,68,0.22)]"
          >
            <div>
              {/* Responsive Table Wrapper */}
              <div className="overflow-x-auto rounded-xl border border-white/10 scrollbar-none">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-800 to-red-650 text-white font-display text-[11px] sm:text-sm tracking-wider uppercase border-b border-white/10 italic">
                      <th className="py-4 px-2 text-center font-black border-r border-white/10 w-16 sm:w-20">
                        <ShieldStarIcon />
                        <span className="block mt-1">NO.</span>
                      </th>
                      <th className="py-4 px-2 text-center font-black border-r border-white/10">
                        <Calendar size={20} className="text-white shrink-0 mx-auto mb-1.5" />
                        <span>MONTHS</span>
                      </th>
                      <th className="py-4 px-2 text-center font-black border-r border-white/10">
                        <BarbellIcon />
                        <span>GYM</span>
                      </th>
                      <th className="py-4 px-2 text-center font-black">
                        <HeartPulseIcon />
                        <span>GYM + CARDIO</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-sans text-xs sm:text-[15px] text-stone-200">
                    {MEMBERSHIP_ROWS.map((row) => (
                      <tr 
                        key={row.no} 
                        className="hover:bg-white/5 transition-colors duration-150 border-b border-white/10 last:border-b-0"
                      >
                        <td className="py-4 px-2 text-center border-r border-white/10">
                          <HexagonNumber num={row.no} />
                        </td>
                        <td className="py-4 px-2 text-center font-extrabold border-r border-white/10 text-stone-100">{row.months}</td>
                        {/* GYM price — clickable WhatsApp enquiry */}
                        <td
                          className="py-4 px-2 text-center font-extrabold border-r border-white/10 text-stone-100 cursor-pointer select-none transition-all duration-200 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] active:scale-95"
                          onClick={() => openWhatsApp(row.gymMsg)}
                          title={`Enquire about ${row.months} Gym plan`}
                        >
                          {row.gym}
                          <span className="block text-[9px] sm:text-[10px] text-green-500/70 font-bold tracking-wider mt-0.5 leading-none">TAP TO ENQUIRE</span>
                        </td>
                        {/* GYM + CARDIO price — clickable WhatsApp enquiry */}
                        <td
                          className="py-4 px-2 text-center font-extrabold text-stone-100 cursor-pointer select-none transition-all duration-200 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] active:scale-95"
                          onClick={() => openWhatsApp(row.gymCardioMsg)}
                          title={`Enquire about ${row.months} Gym + Cardio plan`}
                        >
                          {row.gymCardio}
                          <span className="block text-[9px] sm:text-[10px] text-green-500/70 font-bold tracking-wider mt-0.5 leading-none">TAP TO ENQUIRE</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note banner at bottom */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-black/60 border border-white/10 rounded-full text-stone-300 text-[10px] sm:text-xs max-w-lg shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
                <RedShieldCheck />
                <span className="font-semibold text-left leading-tight">All plans include access to world-class equipment and expert guidance.</span>
              </div>
            </div>
          </motion.div>

          {/* 2. RULES & REGULATIONS CARD (Full width layout) */}
          <motion.div
            variants={itemVariants}
            className="bg-[#09090b]/90 backdrop-blur-md border border-red-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_30px_rgba(239,68,68,0.22)]"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center sm:items-start gap-1 w-full mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <OctagonClipboardIcon />
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight italic text-center sm:text-left mt-2 sm:mt-0">
                    RULES <span className="text-red-500">& REGULATIONS</span>
                  </h3>
                </div>
                {/* Red divider line with stars */}
                <div className="flex items-center gap-3 w-full max-w-[280px] mt-3 mx-auto sm:mx-0">
                  <div className="h-[1.5px] bg-gradient-to-r from-transparent to-red-500/80 flex-grow" />
                  <span className="text-red-500 text-[9px] tracking-widest animate-pulse">★ ★ ★</span>
                  <div className="h-[1.5px] bg-gradient-to-l from-transparent to-red-500/80 flex-grow" />
                </div>
              </div>

              {/* Rules List */}
              <div className="flex flex-col">
                {RULES.map((rule, index) => (
                  <div 
                    key={index} 
                    className="relative py-4 sm:py-5 flex items-center gap-3.5 sm:gap-5 group"
                  >
                    {/* Rounded Square Badge */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-red-600 flex items-center justify-center shrink-0 font-display font-extrabold text-white text-sm sm:text-base shadow-[0_0_10px_rgba(239,68,68,0.45)]">
                      {index + 1}
                    </div>
                    {/* Rule Text */}
                    <p className="text-stone-300 text-xs sm:text-[15px] leading-relaxed text-left flex-grow font-bold">
                      {rule.text}
                    </p>
                    {/* Circle Icon Badge */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-red-500/35 flex items-center justify-center shrink-0 bg-red-950/10 shadow-[0_0_10px_rgba(239,68,68,0.15)] group-hover:border-red-500/60 transition-colors duration-200">
                      {getRuleIcon(rule.icon)}
                    </div>

                    {/* Divider line with center dot */}
                    {index < RULES.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
                        <div className="h-[1px] bg-white/10 w-full" />
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/30 border border-white/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div> {/* Close max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 */}

      {/* ── STAY STRONG. STAY FOCUSED. STAY YOU. — PREMIUM CINEMATIC SECTION ── */}
      <div className="w-full relative z-10 mt-32 py-16 sm:py-24 bg-[#09090b] overflow-hidden border-t border-white/5">

        {/* ── BACKGROUND LAYERS (Floating directly on the section background) ── */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          {/* Deep ambient glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-700/12 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-red-600/10 rounded-full blur-[100px] animate-glow-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-red-800/12 rounded-full blur-[90px] animate-glow-pulse" style={{ animationDelay: "-3s" }} />

          {/* Red lens flare glow centered behind headline */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[180px] bg-red-500/20 rounded-full blur-[60px] animate-lens-flare-pulse" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[100px] bg-red-400/30 rounded-full blur-[35px] animate-lens-flare-pulse" style={{ animationDelay: "-1.5s" }} />

          {/* Cinematic smoke */}
          <div className="absolute top-10 -left-10 w-96 h-96 bg-zinc-900/35 blur-[80px] rounded-full animate-smoke-cinematic" />
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-zinc-900/35 blur-[80px] rounded-full animate-smoke-cinematic" style={{ animationDelay: "-8s" }} />

          {/* Floating red sparks */}
          <div className="absolute bottom-12 left-[10%] w-[2px] h-[2px] bg-red-500 rounded-full blur-[0.5px] animate-spark-float-1" />
          <div className="absolute bottom-8 left-[28%] w-[1.5px] h-[1.5px] bg-red-400 rounded-full blur-[0.5px] animate-spark-float-2" />
          <div className="absolute bottom-16 left-[55%] w-[2px] h-[2px] bg-red-600 rounded-full blur-[0.5px] animate-spark-float-3" />
          <div className="absolute bottom-6 left-[72%] w-[1px] h-[1px] bg-red-500 rounded-full blur-[0.5px] animate-spark-float-1" style={{ animationDelay: "-6s" }} />
          <div className="absolute bottom-20 left-[85%] w-[2px] h-[2px] bg-red-400 rounded-full blur-[0.5px] animate-spark-float-2" style={{ animationDelay: "-3s" }} />
          <div className="absolute bottom-10 left-[42%] w-[1.5px] h-[1.5px] bg-red-500 rounded-full blur-[0.5px] animate-spark-float-3" style={{ animationDelay: "-9s" }} />

          {/* Red energy light streaks */}
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/15 to-transparent animate-sweep-left" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/10 to-transparent animate-sweep-right" style={{ animationDelay: "-2s" }} />

          {/* TOP-LEFT neon diagonal corner beam (positioned relative to screen boundaries) */}
          <div className="absolute top-0 left-0 w-40 h-40 overflow-hidden pointer-events-none z-30">
            <div className="absolute top-[-20px] left-[-60px] w-[200px] h-[20px] bg-red-600 -rotate-45 shadow-[0_0_18px_#ff0000,0_0_35px_rgba(239,68,68,0.5)] animate-beam-pulse" />
            <div className="absolute top-[4px] left-[-55px] w-[200px] h-[5px] bg-red-400 -rotate-45 opacity-60 shadow-[0_0_10px_#ff0000] animate-beam-pulse" style={{ animationDelay: "-0.5s" }} />
          </div>

          {/* TOP-RIGHT neon diagonal corner beam (positioned relative to screen boundaries) */}
          <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none z-30">
            <div className="absolute top-[-20px] right-[-60px] w-[200px] h-[20px] bg-red-600 rotate-45 shadow-[0_0_18px_#ff0000,0_0_35px_rgba(239,68,68,0.5)] animate-beam-pulse" />
            <div className="absolute top-[4px] right-[-55px] w-[200px] h-[5px] bg-red-400 rotate-45 opacity-60 shadow-[0_0_10px_#ff0000] animate-beam-pulse" style={{ animationDelay: "-0.5s" }} />
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

          {/* Red accent line above headline */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[1.5px] bg-gradient-to-r from-transparent to-red-500/80 w-10 sm:w-16" />
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_6px_rgba(239,68,68,0.9)] animate-pulse" />
            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-red-500/80 w-10 sm:w-16" />
          </div>

          {/* ── HEADLINE ── */}
          <h4 className="font-display font-black uppercase select-none leading-[0.88] tracking-tight" style={{ fontSize: "clamp(2.2rem, 9vw, 3.8rem)" }}>
            <span className="block">
              <span
                className="text-white"
                style={{
                  textShadow: "0 0 30px rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6)",
                  WebkitTextStroke: "0.5px rgba(255,255,255,0.15)",
                }}
              >
                STAY{" "}
              </span>
              <span
                className="text-red-500 animate-text-glow-pulse"
                style={{
                  textShadow: "0 0 20px rgba(239,68,68,0.9), 0 0 40px rgba(239,68,68,0.5), 0 0 70px rgba(239,68,68,0.25)",
                }}
              >
                STRONG.
              </span>
            </span>
            <span
              className="block text-white mt-1.5"
              style={{
                textShadow: "0 0 30px rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6)",
                WebkitTextStroke: "0.5px rgba(255,255,255,0.15)",
              }}
            >
              STAY FOCUSED.
            </span>
            <span className="block mt-1.5">
              <span
                className="text-white"
                style={{
                  textShadow: "0 0 30px rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6)",
                  WebkitTextStroke: "0.5px rgba(255,255,255,0.15)",
                }}
              >
                STAY{" "}
              </span>
              <span
                className="text-red-500 animate-text-glow-pulse"
                style={{
                  textShadow: "0 0 20px rgba(239,68,68,0.9), 0 0 40px rgba(239,68,68,0.5), 0 0 70px rgba(239,68,68,0.25)",
                  animationDelay: "-1.25s",
                }}
              >
                YOU.
              </span>
            </span>
          </h4>

          {/* ── SUBHEADLINE ── */}
          <p className="mt-6 font-display font-bold uppercase tracking-widest text-sm sm:text-base select-none" style={{ fontSize: "clamp(0.75rem, 3.5vw, 1.05rem)" }}>
            <span className="text-stone-300">LET'S BUILD A BETTER, STRONGER YOU{" "}</span>
            <span
              className="text-red-500"
              style={{ textShadow: "0 0 12px rgba(239,68,68,0.7)" }}
            >
              TOGETHER!
            </span>
          </p>

          {/* ── BOTTOM SILHOUETTE FLOATING ITEMS ── */}
          <div className="grid grid-cols-2 gap-8 sm:gap-24 max-w-xl mx-auto justify-items-center mt-14 sm:mt-18">

            {/* LEFT ITEM — Muscular Bodybuilder Silhouette Flexing Double Biceps */}
            <div className="flex flex-col items-center group relative pointer-events-auto">
              {/* Glowing red neon circle container */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-red-500/30 bg-transparent flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.25),inset_0_0_12px_rgba(239,68,68,0.15)] group-hover:scale-105 group-hover:border-red-500/80 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.7),inset_0_0_18px_rgba(239,68,68,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent rounded-full pointer-events-none" />
                
                {/* High-detail Bodybuilder double bicep SVG silhouette */}
                <svg
                  viewBox="0 0 100 100"
                  className="relative z-10 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(239,68,68,0.8)] transition-all duration-300"
                  style={{ width: "80%", height: "80%" }}
                >
                  <defs>
                    <linearGradient id="body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff4d4d" />
                      <stop offset="60%" stopColor="#cc0000" />
                      <stop offset="100%" stopColor="#660000" />
                    </linearGradient>
                  </defs>

                  {/* Bodybuilder Silhouette Path */}
                  <path
                    d="M 50,15 
                       C 53,15 54,12 54,10 
                       C 54,8 52.5,7.5 50,7.5 
                       C 47.5,7.5 46,8 46,10 
                       C 46,12 47,15 50,15 Z 
                       M 50,15 
                       C 48,16.5 45,18 43,20 
                       C 38,18 33,18.5 28.5,21.5 
                       C 24,18 19,17.5 15,21.5 
                       C 12,24.5 10.5,28 13.5,30 
                       C 16.5,32 19.5,29.5 22.5,26.5 
                       C 24,29 23,32.5 20.5,36 
                       C 18,39.5 14,41.5 12,46.5 
                       C 10,51.5 11,54 13.5,53.5 
                       C 16,53 19,49.5 21.5,45 
                       C 23,49 22.5,53.5 19.5,57.5 
                       C 16.5,61.5 12.5,63.5 10.5,68.5 
                       C 8.5,73.5 10.5,76 13,75.5 
                       C 15.5,75 18,71.5 20.5,66 
                       C 22.5,69 24.5,71.5 27,73.5 
                       C 29.5,75.5 32,77 34.5,77.5 
                       C 37.5,78 40.5,75.5 42,72.5 
                       C 43.5,69.5 44.5,66 44.5,61 
                       C 44.5,54.5 46.5,51.5 50,51.5 
                       C 53.5,51.5 55.5,54.5 55.5,61 
                       C 55.5,66 56.5,69.5 58,72.5 
                       C 59.5,75.5 62.5,78 65.5,77.5 
                       C 68,77 70.5,75.5 73,73.5 
                       C 75.5,71.5 77.5,69 79.5,66 
                       C 82,71.5 84.5,75 87,75.5 
                       C 89.5,76 91.5,73.5 89.5,68.5 
                       C 87.5,63.5 83.5,61.5 80.5,57.5 
                       C 77.5,53.5 77,49 78.5,45 
                       C 81,49.5 84,53 86.5,53.5 
                       C 89,54 90,51.5 88,46.5 
                       C 86,41.5 82,39.5 79.5,36 
                       C 77,32.5 76,29 77.5,26.5 
                       C 80.5,29.5 83.5,32 86.5,30 
                       C 89.5,28 88,24.5 85,21.5 
                       C 80.5,18.5 75.5,18 71,20 
                       C 69,18 66,16.5 64,15 
                       C 62,13.5 53.5,13.5 50,15 Z"
                    fill="url(#body-grad)"
                  />

                  {/* Muscle Definition Lines */}
                  {/* Chest Separation */}
                  <path d="M 50,22 L 50,30 M 43,26 C 46,28 50,29 50,30 C 50,30 54,28 57,26" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.65" fill="none" />
                  
                  {/* Collarbones */}
                  <path d="M 42,21 C 45,21 48,22 50,23.5 C 52,22 55,21 58,21" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.55" fill="none" />

                  {/* Abs */}
                  <path d="M 50,34 L 50,49" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.6" fill="none" />
                  <path d="M 45,37 H 55 M 44,41 H 56 M 45,45 H 55" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" fill="none" />

                  {/* Left Bicep peak */}
                  <path d="M 28,21 C 29,23 28.5,26 27,27.5" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" fill="none" />
                  {/* Right Bicep peak */}
                  <path d="M 72,21 C 71,23 71.5,26 73,27.5" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" fill="none" />

                  {/* Lats */}
                  <path d="M 40,32 C 37,36 34,42 34,48" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.4" fill="none" />
                  <path d="M 60,32 C 63,36 66,42 66,48" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.4" fill="none" />

                  {/* Quads */}
                  <path d="M 32,59 C 30,64 28,70 30,75 M 36,60 L 33,73" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" fill="none" />
                  <path d="M 68,59 C 70,64 72,70 70,75 M 64,60 L 67,73" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" fill="none" />
                </svg>
              </div>
              {/* Floating label */}
              <div className="mt-4 text-center select-none">
                <h5 className="font-display font-black text-red-500 uppercase tracking-wider text-[11px] sm:text-sm drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]">STRENGTH</h5>
                <p className="text-stone-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mt-0.5">BUILD MUSCLE</p>
              </div>
            </div>

            {/* RIGHT ITEM — Professional Athlete Performing Heavy Barbell Squat */}
            <div className="flex flex-col items-center group relative pointer-events-auto">
              {/* Glowing red neon circle container */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-red-500/30 bg-transparent flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.25),inset_0_0_12px_rgba(239,68,68,0.15)] group-hover:scale-105 group-hover:border-red-500/80 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.7),inset_0_0_18px_rgba(239,68,68,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent rounded-full pointer-events-none" />
                
                {/* High-detail Athlete squat SVG silhouette */}
                <svg
                  viewBox="0 0 100 100"
                  className="relative z-10 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(239,68,68,0.8)] transition-all duration-300"
                  style={{ width: "80%", height: "80%" }}
                >
                  <defs>
                    <linearGradient id="squat-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff4d4d" />
                      <stop offset="60%" stopColor="#cc0000" />
                      <stop offset="100%" stopColor="#660000" />
                    </linearGradient>
                  </defs>

                  {/* Barbell weights and collar clips (high detail plates) */}
                  <g fill="#990000">
                    <rect x="2" y="32" width="3.5" height="20" rx="0.75" />
                    <rect x="6.5" y="30" width="3.5" height="24" rx="0.75" />
                    <rect x="11" y="30" width="3.5" height="24" rx="0.75" fill="#cc0000" />
                    <rect x="15.5" y="38" width="1.5" height="8" rx="0.25" fill="#ff4d4d" />
                    
                    <rect x="94.5" y="32" width="3.5" height="20" rx="0.75" />
                    <rect x="90" y="30" width="3.5" height="24" rx="0.75" />
                    <rect x="85.5" y="30" width="3.5" height="24" rx="0.75" fill="#cc0000" />
                    <rect x="83" y="38" width="1.5" height="8" rx="0.25" fill="#ff4d4d" />

                    <rect x="17" y="40" width="66" height="3" rx="0.5" fill="#e60000" />
                  </g>

                  {/* Squatting Athlete Path */}
                  <path
                    d="M 50,30 
                       C 52.5,30 53.5,27.5 53.5,25.5 
                       C 53.5,23.5 52,22.5 50,22.5 
                       C 48,22.5 46.5,23.5 46.5,25.5 
                       C 46.5,27.5 47.5,30 50,30 Z 
                       M 50,30 
                       C 46,31 43,32.5 41,35 
                       C 39,33.5 36.5,33.5 35,35 
                       C 33.5,36.5 33,39 34.5,41 
                       C 36,43 38,42.5 39.5,41.5 
                       C 41.5,43 41,45.5 39,47.5 
                       C 36,50.5 32,53 28,54.5 
                       C 25.5,55.5 24,58 25,60 
                       C 26,62 28.5,61.5 31.5,59.5 
                       C 35.5,57 39.5,53.5 42,49 
                       C 43,53.5 42,58.5 39,63.5 
                       C 35.5,68.5 30.5,71.5 25.5,73 
                       C 23,73.5 21.5,76 22,78 
                       C 22.5,80 25,80.5 28.5,79 
                       C 33.5,77 38.5,73 42.5,67 
                       C 44.5,71 46,75.5 47,80.5 
                       C 48,85.5 48.5,90.5 48,93 
                       C 47.5,95.5 49.5,96 51,95 
                       C 52.5,94 53,91 52.5,86 
                       C 52,81.5 50.5,76.5 48.5,72 
                       C 49.5,72.5 50.5,72.5 51.5,72 
                       C 49.5,76.5 48,81.5 47.5,86 
                       C 47,91 47.5,94 49,95 
                       C 50.5,96 52.5,95.5 52,93 
                       C 51.5,90.5 52,85.5 53,80.5 
                       C 54,75.5 55.5,71 57.5,67 
                       C 61.5,73 66.5,77 71.5,79 
                       C 75,80.5 77.5,80 78,78 
                       C 78.5,76 77,73.5 74.5,73 
                       C 69.5,71.5 64.5,68.5 61,63.5 
                       C 58,58.5 57,53.5 58,49 
                       C 60.5,53.5 64.5,57 68.5,59.5 
                       C 71.5,61.5 74,62 75,60 
                       C 76,58 74.5,55.5 72,54.5 
                       C 68,53 64,50.5 61,47.5 
                       C 59,45.5 58.5,43 60.5,41.5 
                       C 62,42.5 64,43 65.5,41 
                       C 67,39 66.5,36.5 65,35 
                       C 63.5,33.5 61,33.5 59,35 
                       C 57,32.5 54,31 50,30 Z"
                    fill="url(#squat-grad)"
                  />

                  {/* Spine / Back Highlight */}
                  <path d="M 50,33 L 50,56" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.6" fill="none" />
                  
                  {/* Glute / Leg Cuts */}
                  <path d="M 38,64 C 36,68 33,70 30,72 M 39,69 C 37,73 34,75 32,77" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" fill="none" />
                  <path d="M 62,64 C 63,68 66,70 69,72 M 61,69 C 63,73 66,75 68,77" stroke="#ff8080" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" fill="none" />

                  {/* Traps weight pressure highlight */}
                  <path d="M 44,34 C 47,35 50,35.5 53,35.5 C 56,35.5 59,35 62,34" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" fill="none" />
                </svg>
              </div>
              {/* Floating label */}
              <div className="mt-4 text-center select-none">
                <h5 className="font-display font-black text-red-500 uppercase tracking-wider text-[11px] sm:text-sm drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]">POWER</h5>
                <p className="text-stone-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mt-0.5">HEAVY SQUAT</p>
              </div>
            </div>

          </div>

          {/* ── BOTTOM DIVIDER AND NEON LINES ── */}
          <div className="relative w-full flex items-center justify-center mt-20 sm:mt-28">
            {/* Left Thin Neon Line */}
            <div className="absolute left-0 w-[calc(50%-50px)] h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-red-500 shadow-[0_0_6px_#ff0000]" />
            
            {/* Glowing Red Dumbbell Separator */}
            <div className="relative z-10 mx-auto text-red-500 animate-pulse filter drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]">
              <svg viewBox="0 0 24 24" width="36" height="36" className="fill-current">
                <rect x="2" y="10.5" width="20" height="3" rx="1" />
                <rect x="6" y="5" width="2.5" height="14" rx="1" />
                <rect x="3.5" y="7.5" width="2" height="9" rx="0.8" />
                <rect x="15.5" y="5" width="2.5" height="14" rx="1" />
                <rect x="18.5" y="7.5" width="2" height="9" rx="0.8" />
              </svg>
            </div>
            
            {/* Right Thin Neon Line */}
            <div className="absolute right-0 w-[calc(50%-50px)] h-[1px] bg-gradient-to-l from-transparent via-red-500/40 to-red-500 shadow-[0_0_6px_#ff0000]" />
          </div>

          {/* Subtle red smoke and particles at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none overflow-hidden z-0">
            <div className="absolute left-[20%] w-[1.5px] h-[1.5px] bg-red-500 rounded-full blur-[0.5px] animate-spark-float-1" />
            <div className="absolute left-[50%] w-[2px] h-[2px] bg-red-650 rounded-full blur-[0.5px] animate-spark-float-2" style={{ animationDelay: "-3s" }} />
            <div className="absolute left-[80%] w-[1px] h-[1px] bg-red-500 rounded-full blur-[0.5px] animate-spark-float-3" style={{ animationDelay: "-6s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
