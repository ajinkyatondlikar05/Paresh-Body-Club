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
        <div className="text-center mb-4 relative z-10 max-w-[280px] sm:max-w-none mx-auto translate-y-[25px] translate-x-0 md:translate-y-0 md:translate-x-12 lg:translate-x-16 xl:translate-x-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="flex justify-center mb-3 text-red-500 animate-pulse"
          >
            <DumbbellIcon />
          </motion.div>
          <h2 className="font-display font-black text-center uppercase tracking-tight italic select-none flex flex-col gap-0 leading-[0.85] sm:block sm:text-5xl md:text-6xl">
            <motion.span 
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-white text-6xl tracking-tighter block sm:inline sm:text-5xl sm:tracking-normal sm:mr-3"
            >
              GYM
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-white text-[42px] tracking-tighter block sm:inline sm:text-5xl sm:tracking-normal sm:mr-3 -mt-1 sm:mt-0"
            >
              MEMBERSHIP
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              animate={{ textShadow: ["0 0 10px rgba(239,68,68,0.25)", "0 0 22px rgba(239,68,68,0.7)", "0 0 10px rgba(239,68,68,0.25)"] }}
              className="text-red-500 text-6xl tracking-tighter block sm:inline sm:text-5xl sm:tracking-normal drop-shadow-[0_0_15px_rgba(239,68,68,0.65)] -mt-1 sm:mt-0"
            >
              DETAILS
            </motion.span>
          </h2>
        </div>

        {/* ── SUBTITLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
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
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#09090b]/90 backdrop-blur-md border border-red-500/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_30px_rgba(239,68,68,0.22)]"
          >
            <div>
              {/* Responsive Table Wrapper */}
              <div className="overflow-x-auto rounded-xl border border-white/10 scrollbar-none">
                <table className="w-full border-collapse">
                  <thead>
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gradient-to-r from-red-800 to-red-650 text-white font-display text-[11px] sm:text-sm tracking-wider uppercase border-b border-white/10 italic"
                    >
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
                    </motion.tr>
                  </thead>
                  <motion.tbody 
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.12,
                          delayChildren: 0.25
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="divide-y divide-white/10 font-sans text-xs sm:text-[15px] text-stone-200"
                  >
                    {MEMBERSHIP_ROWS.map((row) => (
                      <motion.tr 
                        key={row.no} 
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
                        }}
                        className="hover:bg-white/5 transition-colors duration-150 border-b border-white/10 last:border-b-0"
                      >
                        <td className="py-4 px-2 text-center border-r border-white/10">
                          <HexagonNumber num={row.no} />
                        </td>
                        <td className="py-4 px-2 text-center font-extrabold border-r border-white/10 text-stone-100">{row.months}</td>
                        {/* GYM price — clickable WhatsApp enquiry */}
                        <motion.td
                          className="py-4 px-2 text-center font-extrabold border-r border-white/10 text-stone-100 cursor-pointer select-none transition-all duration-200 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] active:scale-95"
                          onClick={() => openWhatsApp(row.gymMsg)}
                          title={`Enquire about ${row.months} Gym plan`}
                          whileHover={{ scale: 1.05, textShadow: "0 0 12px rgba(34,197,94,0.8)" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {row.gym}
                          <span className="block text-[9px] sm:text-[10px] text-green-500/70 font-bold tracking-wider mt-0.5 leading-none">TAP TO ENQUIRE</span>
                        </motion.td>
                        {/* GYM + CARDIO price — clickable WhatsApp enquiry */}
                        <motion.td
                          className="py-4 px-2 text-center font-extrabold text-stone-100 cursor-pointer select-none transition-all duration-200 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] active:scale-95"
                          onClick={() => openWhatsApp(row.gymCardioMsg)}
                          title={`Enquire about ${row.months} Gym + Cardio plan`}
                          whileHover={{ scale: 1.05, textShadow: "0 0 12px rgba(34,197,94,0.8)" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {row.gymCardio}
                          <span className="block text-[9px] sm:text-[10px] text-green-500/70 font-bold tracking-wider mt-0.5 leading-none">TAP TO ENQUIRE</span>
                        </motion.td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </div>

            {/* Note banner at bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center mt-6"
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-black/60 border border-white/10 rounded-full text-stone-300 text-[10px] sm:text-xs max-w-lg shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
                <RedShieldCheck />
                <span className="font-semibold text-left leading-tight">All plans include access to world-class equipment and expert guidance.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 2. RULES & REGULATIONS CARD (Full width layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#09090b]/90 backdrop-blur-md border border-red-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_30px_rgba(239,68,68,0.22)]"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center sm:items-start gap-1 w-full mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <OctagonClipboardIcon />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight italic text-center sm:text-left mt-2 sm:mt-0"
                  >
                    RULES <span className="text-red-500">& REGULATIONS</span>
                  </motion.h3>
                </div>
                {/* Red divider line with stars */}
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3 w-full max-w-[280px] mt-3 mx-auto sm:mx-0"
                >
                  <div className="h-[1.5px] bg-gradient-to-r from-transparent to-red-500/80 flex-grow" />
                  <span className="text-red-500 text-[9px] tracking-widest animate-pulse">★ ★ ★</span>
                  <div className="h-[1.5px] bg-gradient-to-l from-transparent to-red-500/80 flex-grow" />
                </motion.div>
              </div>

              {/* Rules List */}
              <motion.div 
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col"
              >
                {RULES.map((rule, index) => (
                  <motion.div 
                    key={index} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="relative py-4 sm:py-5 flex items-center gap-3.5 sm:gap-5 group"
                  >
                    {/* Rounded Square Badge */}
                    <motion.div 
                      animate={{ boxShadow: ["0 0 10px rgba(239,68,68,0.45)", "0 0 20px rgba(239,68,68,0.75)", "0 0 10px rgba(239,68,68,0.45)"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-red-600 flex items-center justify-center shrink-0 font-display font-extrabold text-white text-sm sm:text-base"
                    >
                      {index + 1}
                    </motion.div>
                    {/* Rule Text */}
                    <p className="text-stone-300 text-xs sm:text-[15px] leading-relaxed text-left flex-grow font-bold">
                      {rule.text}
                    </p>
                    {/* Circle Icon Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-red-500/35 flex items-center justify-center shrink-0 bg-red-950/10 shadow-[0_0_10px_rgba(239,68,68,0.15)] group-hover:border-red-500/60 transition-colors duration-200"
                    >
                      {getRuleIcon(rule.icon)}
                    </motion.div>

                    {/* Divider line with center dot */}
                    {index < RULES.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
                        <div className="h-[1px] bg-white/10 w-full" />
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/30 border border-white/20" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div> {/* Close max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 */}

      {/* ── STAY STRONG. STAY FOCUSED. STAY YOU. — PREMIUM CINEMATIC SECTION ── */}
      <div className="w-full relative z-10 py-24 sm:py-32 bg-black overflow-hidden">
        {/* Subtle dark texture/grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />

        {/* Minimal soft red glow behind the red words */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-red-650/8 rounded-full blur-[70px] pointer-events-none" />
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

          {/* ── HEADLINE ── */}
          <h4 className="font-display font-black italic uppercase tracking-tighter leading-[0.88] select-none text-white" style={{ fontSize: "clamp(2.5rem, 10vw, 4.8rem)" }}>
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="block"
            >
              STAY{" "}
              <motion.span
                className="text-red-500 inline-block"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(239,68,68,0.25)",
                    "0 0 22px rgba(239,68,68,0.65)",
                    "0 0 10px rgba(239,68,68,0.25)"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              >
                STRONG.
              </motion.span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="block mt-2"
            >
              STAY FOCUSED.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="block mt-2"
            >
              STAY{" "}
              <motion.span
                className="text-red-500 inline-block"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(239,68,68,0.25)",
                    "0 0 22px rgba(239,68,68,0.65)",
                    "0 0 10px rgba(239,68,68,0.25)"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 1.25
                }}
              >
                YOU.
              </motion.span>
            </motion.span>
          </h4>

          {/* ── SUBTEXT ── */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.95 }}
            className="mt-10 font-sans font-bold uppercase tracking-widest text-stone-400 select-none flex flex-col items-center leading-relaxed" 
            style={{ fontSize: "clamp(0.8rem, 3.5vw, 1.15rem)" }}
          >
            <span>LET'S BUILD A BETTER,</span>
            <span>STRONGER YOU</span>
            <span
              className="text-red-500 mt-2 font-display font-black italic tracking-wider text-xl sm:text-2xl animate-pulse"
              style={{ textShadow: "0 0 8px rgba(239,68,68,0.4)" }}
            >
              TOGETHER!
            </span>
          </motion.div>

          {/* ── BOTTOM DIVIDER ── */}
          <div className="relative w-full max-w-lg flex items-center justify-center mt-12">
            {/* Left Thin Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.55 }}
              style={{ transformOrigin: "right" }}
              className="absolute left-0 w-[calc(50%-25px)] h-[1px] bg-red-500/30" 
            />
            
            {/* Dumbbell Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 1.25 }}
              className="relative z-10 text-red-500 filter drop-shadow-[0_0_4px_rgba(239,68,68,0.5)]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
                <rect x="2" y="10.5" width="20" height="3" rx="1" />
                <rect x="6" y="5" width="2.5" height="14" rx="1" />
                <rect x="3.5" y="7.5" width="2" height="9" rx="0.8" />
                <rect x="15.5" y="5" width="2.5" height="14" rx="1" />
                <rect x="18.5" y="7.5" width="2" height="9" rx="0.8" />
              </svg>
            </motion.div>
            
            {/* Right Thin Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.55 }}
              style={{ transformOrigin: "left" }}
              className="absolute right-0 w-[calc(50%-25px)] h-[1px] bg-red-500/30" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
