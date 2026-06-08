import { useState, FormEvent, useRef, useEffect } from "react";
import { Calculator, Sparkles, RefreshCw, Info } from "lucide-react";
import { motion, AnimatePresence, useInView, useSpring, useMotionValue } from "motion/react";

function AnimatedValue({ value }: { value: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const numValue = parseFloat(value);
  const motionVal = useMotionValue(numValue);
  const spring = useSpring(motionVal, { stiffness: 120, damping: 25 });

  useEffect(() => {
    motionVal.set(numValue);
  }, [numValue, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(v).toString();
      }
    });
    return unsub;
  }, [spring]);

  return <span ref={nodeRef}>{value}</span>;
}

function AnimatedBMI({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 25 });

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = v.toFixed(1);
      }
    });
    return unsub;
  }, [spring]);

  return <span ref={nodeRef}>0.0</span>;
}

export default function BMICalculator() {
  const [height, setHeight] = useState<string>("170");
  const [weight, setWeight] = useState<string>("65");
  const [bmiValue, setBmiValue] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [colorClass, setColorClass] = useState<string>("");
  const [bmiCategory, setBmiCategory] = useState<string>("");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const calculateBMI = (e: FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100; // convert to meters
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmi = parseFloat((w / (h * h)).toFixed(1));
      setBmiValue(bmi);

      let stat = "";
      let sug = "";
      let clr = "";
      let cat = "";

      if (bmi < 18.5) {
        stat = "Underweight";
        cat = "Underweight";
        sug = "Focus on a clean caloric surplus paired with our Muscle Building program and professional strength workouts in PARESH BODY CLUB MURBAD to add clean athletic mass.";
        clr = "text-amber-400 border-amber-500/30 bg-amber-500/5";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        stat = "Healthy Weight";
        cat = "Normal Weight";
        sug = "Phenomenal! You are in an excellent vital zone. Maintain high endurance, sculpt muscles with our Advanced Cardio Zone, and optimize lifting patterns.";
        clr = "text-emerald-400 border-emerald-500/30 bg-emerald-500/5";
      } else if (bmi >= 25 && bmi < 29.9) {
        stat = "Overweight";
        cat = "Overweight";
        sug = "Let's burn off the storage! Join our High Intensity Weight Loss Program and leverage modern treadmills combined with target strength routines to sculpt lean muscle mass.";
        clr = "text-orange-400 border-orange-500/30 bg-orange-500/5";
      } else {
        stat = "Obese";
        cat = "Obese";
        sug = "Time to prioritize supreme wellness. Paresh sir recommends combining persistent cardio training with continuous coaching and custom general diet frameworks to start the transformation.";
        clr = "text-red-400 border-red-500/30 bg-red-400/5";
      }

      setStatus(stat);
      setSuggestion(sug);
      setColorClass(clr);
      setBmiCategory(cat);
    }
  };

  const resetForm = () => {
    setHeight("170");
    setWeight("65");
    setBmiValue(null);
    setStatus("");
    setSuggestion("");
    setBmiCategory("");
  };

  const rangeData = [
    { label: "Underweight", value: "< 18.5", color: "text-amber-400" },
    { label: "Normal Weight", value: "18.5 – 24.9", color: "text-emerald-400" },
    { label: "Overweight", value: "25.0 – 29.9", color: "text-orange-400" },
    { label: "Obese", value: "≥ 30.0", color: "text-red-400" },
  ];

  return (
    <section
      id="bmi-calculator"
      ref={sectionRef}
      className="py-24 bg-[#0a0a0c] relative overflow-hidden bg-grid-pattern-animated"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[20%] left-[5%] w-2 h-2 bg-red-500/20 rounded-full" animate={{ y: [0, -15, 0], opacity: [0, 0.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[60%] left-[45%] w-3 h-3 bg-red-500/20 rounded-full" animate={{ y: [0, 20, 0], opacity: [0, 0.6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.div className="absolute top-[40%] right-[10%] w-2 h-2 bg-red-500/20 rounded-full" animate={{ y: [0, -10, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Columns - Information */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-1">
                  Know Your Stats
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
                  Instant <motion.span
                    className="text-red-500"
                    animate={isInView ? { textShadow: ["0 0 8px rgba(239,68,68,0.3)", "0 0 24px rgba(239,68,68,0.8)", "0 0 8px rgba(239,68,68,0.3)"] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >BMI</motion.span>{" "}
                  Fitness Calculator
                </h2>
              </div>
              <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
                Body Mass Index (BMI) is a rapid and internationally verified metric to understand your body fat distribution ratio based on height and weight.
              </p>
            </div>

            {/* Quick reference chart */}
            <motion.div
              className="space-y-3 max-w-md mt-8"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {rangeData.map((range) => {
                const isActive = bmiCategory === range.label;
                return (
                  <motion.div
                    key={range.label}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ y: -4, borderColor: 'rgba(239, 68, 68, 0.4)' }}
                    className={`relative flex justify-between items-center p-3 rounded-lg bg-stone-900/40 border border-white/5 text-xs text-stone-400 font-mono transition-all duration-300 overflow-hidden ${isActive ? 'border-red-500/50' : ''}`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                      />
                    )}
                    <span className="relative">{range.label}</span>
                    <span className={`relative font-bold ${range.color}`}>{range.value}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Form & Live Result Display */}
          <div className="lg:col-span-6 relative">
            <motion.div
              className="absolute -inset-8 bg-red-600/5 blur-[80px] rounded-full"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="bg-[#0f0f12]/80 backdrop-blur-lg border border-white/10 p-5 sm:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >

              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <div className="p-3 bg-red-600/10 rounded-xl text-red-500">
                  <Calculator size={22} />
                </div>
                <div>
                  <h3 className="font-display font-black text-white text-lg sm:text-xl uppercase tracking-wider">
                    Calculate BMI Index
                  </h3>
                  <p className="text-stone-500 text-xs font-light">Enter metrics for instant suggestions</p>
                </div>
              </div>

              <form onSubmit={calculateBMI} className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs uppercase font-extrabold tracking-widest text-stone-400">
                      Height: <span className="text-white font-mono"><AnimatedValue value={height} /> cm</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full cursor-pointer bmi-slider"
                    style={{ background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((parseFloat(height) - 120) / 100) * 100}%, #1c1917 ${((parseFloat(height) - 120) / 100) * 100}%, #1c1917 100%)` }}
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 font-mono mt-1">
                    <span>120 cm</span>
                    <span>170 cm</span>
                    <span>220 cm</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs uppercase font-extrabold tracking-widest text-stone-400">
                      Weight: <span className="text-white font-mono"><AnimatedValue value={weight} /> kg</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full cursor-pointer bmi-slider"
                    style={{ background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((parseFloat(weight) - 40) / 110) * 100}%, #1c1917 ${((parseFloat(weight) - 40) / 110) * 100}%, #1c1917 100%)` }}
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 font-mono mt-1">
                    <span>40 kg</span>
                    <span>95 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -3, scale: 1.05, boxShadow: "0 0 25px rgba(239, 68, 68, 0.6)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3.5 px-6 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] cursor-pointer disabled:opacity-50 btn-shine-bmi"
                  >
                    <Sparkles size={14} /> Calculate
                  </motion.button>

                  {bmiValue !== null && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="p-3.5 bg-stone-900 hover:bg-stone-800 border border-white/10 rounded-lg text-stone-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                      title="Reset values"
                    >
                      <RefreshCw size={16} />
                    </button>
                  )}
                </div>
              </form>

              {/* Instant Animated Results Panel */}
              <AnimatePresence>
                {bmiValue !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 border border-white/5 rounded-xl bg-stone-950 p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wider">Your Body Index</span>
                        <div className="relative w-fit">
                          <motion.div
                            className="absolute inset-0 -m-2 border-2 rounded-full"
                            style={{ borderColor: colorClass.replace('text-', 'border-').replace('/5', '/40') }}
                            animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
                          />
                          <h4 className="font-mono font-black text-3xl text-white mt-0.5 relative">
                            <AnimatedBMI value={bmiValue} />
                          </h4>
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 }}
                        className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-black tracking-wider uppercase ${colorClass}`}
                      >
                        {status}
                      </motion.div>
                    </div>

                    <div className="flex gap-3 items-start bg-white/5 p-3.5 rounded-lg">
                      <Info size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-stone-300 text-xs font-semibold block uppercase tracking-wider">Trainer Tip</span>
                        <p className="text-stone-400 text-xs mt-1 leading-relaxed font-light">{suggestion}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
