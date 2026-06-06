import { Calendar, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

// Accent Components
const DiagonalStripesLeft = () => (
  <div className="absolute top-0 left-0 w-48 h-48 overflow-hidden pointer-events-none select-none z-10">
    <div className="absolute top-[-50px] left-[-50px] w-[220px] h-[40px] bg-red-600/80 -rotate-45 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
    <div className="absolute top-[-30px] left-[-30px] w-[220px] h-[15px] bg-red-600/80 -rotate-45 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
    <div className="absolute top-[-10px] left-[-10px] w-[220px] h-[8px] bg-red-600/80 -rotate-45" />
  </div>
);

const DiagonalStripesRight = () => (
  <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden pointer-events-none select-none z-10">
    <div className="absolute top-[-50px] right-[-50px] w-[220px] h-[40px] bg-red-600/80 rotate-45 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
    <div className="absolute top-[-30px] right-[-30px] w-[220px] h-[15px] bg-red-600/80 rotate-45 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
    <div className="absolute top-[-10px] right-[-10px] w-[220px] h-[8px] bg-red-600/80 rotate-45" />
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

const MEMBERSHIP_ROWS = [
  { no: 1, months: "1 MONTH", gym: "₹ 700", gymCardio: "₹ 900" },
  { no: 2, months: "3 MONTHS", gym: "₹ 1800", gymCardio: "₹ 2400" },
  { no: 3, months: "6 MONTHS", gym: "₹ 3000", gymCardio: "₹ 4200" },
  { no: 4, months: "1 YEAR", gym: "₹ 5400", gymCardio: "₹ 7200" }
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

        {/* Top-Left Muscular Bodybuilder Silhouette/Photo Background */}
        <div className="absolute top-0 left-0 w-full lg:w-[48%] h-[380px] lg:h-[480px] opacity-[0.35] lg:opacity-[0.85] z-0 pointer-events-none">
          <img 
            src="/founder-flex.png" 
            alt="Bodybuilder decoration"
            className="w-full h-full object-cover object-left-top filter grayscale contrast-125 brightness-[0.75] animate-bodybuilder-breathe"
          />
          {/* Subtle gradient to blend image into the page */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#09090b]/80 to-[#09090b]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090b]" />
        </div>

        {/* Top-Right Gym Equipment Poster Texture */}
        <div className="absolute top-0 right-0 w-[52%] h-[480px] hidden lg:block opacity-[0.22] pointer-events-none">
          <img 
            src="/about-bg.png" 
            alt="Gym background"
            className="w-full h-full object-cover object-right-center filter grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#09090b]/75 to-[#09090b]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090b]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── SLANTED BOLD HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 relative z-10"
        >
          <div className="flex justify-center mb-3 text-red-500 animate-pulse">
            <DumbbellIcon />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-center uppercase tracking-tight italic select-none">
            <span className="text-white block">GYM MEMBERSHIP</span>
            <span className="text-red-500 block -mt-1 sm:-mt-2">DETAILS</span>
          </h2>
          <p className="text-stone-400 font-sans text-[11px] sm:text-sm text-center uppercase tracking-widest italic mt-3.5 font-bold">
            CHOOSE THE PERFECT PLAN FOR YOUR FITNESS JOURNEY
          </p>
        </motion.div>
        
        {/* ── MAIN VERTICAL STACKED LAYOUT ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10 sm:gap-12 max-w-4xl mx-auto relative z-10"
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
                        <td className="py-4 px-2 text-center font-extrabold border-r border-white/10 text-stone-100">{row.gym}</td>
                        <td className="py-4 px-2 text-center font-extrabold text-stone-100">{row.gymCardio}</td>
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

        {/* ── STAY STRONG. STAY FOCUSED. STAY YOU. SLOGAN ── */}
        <div className="mt-16 text-center relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-6">
            
            {/* Left Muscle Flex Silhouette */}
            <div className="hidden md:block">
              <BodybuilderFlexSilhouette />
            </div>
            
            {/* Main Slogan Typography */}
            <div className="text-center flex-grow">
              <h4 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight italic select-none">
                <span className="text-white">STAY </span>
                <span className="text-red-500 animate-text-glow-pulse">STRONG. </span>
                <span className="text-white">STAY FOCUSED. STAY YOU.</span>
              </h4>
              <p className="text-stone-400 text-xs sm:text-sm font-bold uppercase tracking-widest mt-3">
                Let’s build a better, stronger you together!
              </p>
            </div>

            {/* Right Barbells Lifter Silhouette */}
            <div className="hidden md:block">
              <LifterSilhouette />
            </div>
          </div>

          {/* Mobile silhouettes layout */}
          <div className="flex md:hidden items-center justify-center gap-8 mb-6">
            <BodybuilderFlexSilhouette />
            <LifterSilhouette />
          </div>

          {/* Center dumbbell logo with line accents */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[2px] bg-gradient-to-r from-transparent to-red-500/80 w-16 sm:w-24" />
            <div className="text-red-500 animate-pulse">
              <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current">
                <rect x="2" y="10.5" width="20" height="3" rx="1" />
                <rect x="6" y="5" width="2.5" height="14" rx="1" />
                <rect x="3.5" y="7.5" width="2" height="9" rx="0.8" />
                <rect x="15.5" y="5" width="2.5" height="14" rx="1" />
                <rect x="18.5" y="7.5" width="2" height="9" rx="0.8" />
              </svg>
            </div>
            <div className="h-[2px] bg-gradient-to-l from-transparent to-red-500/80 w-16 sm:w-24" />
          </div>
        </div>

      </div>
    </section>
  );
}
