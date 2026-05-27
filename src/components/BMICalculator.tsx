import { useState, FormEvent } from "react";
import { Calculator, Sparkles, RefreshCw, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BMICalculator() {
  const [height, setHeight] = useState<string>("170");
  const [weight, setWeight] = useState<string>("65");
  const [bmiValue, setBmiValue] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [colorClass, setColorClass] = useState<string>("");

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

      if (bmi < 18.5) {
        stat = "Underweight";
        sug = "Focus on a clean caloric surplus paired with our Muscle Building program and professional strength workouts in PARESH BODY CLUB MURBAD to add clean athletic mass.";
        clr = "text-amber-400 border-amber-500/30 bg-amber-500/5";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        stat = "Healthy Weight";
        sug = "Phenomenal! You are in an excellent vital zone. Maintain high endurance, sculpt muscles with our Advanced Cardio Zone, and optimize lifting patterns.";
        clr = "text-emerald-400 border-emerald-500/30 bg-emerald-500/5";
      } else if (bmi >= 25 && bmi < 29.9) {
        stat = "Overweight";
        sug = "Let's burn off the storage! Join our High Intensity Weight Loss Program and leverage modern treadmills combined with target strength routines to sculpt lean muscle mass.";
        clr = "text-orange-400 border-orange-500/30 bg-orange-500/5";
      } else {
        stat = "Obese";
        sug = "Time to prioritize supreme wellness. Paresh sir recommends combining persistent cardio training with continuous coaching and custom general diet frameworks to start the transformation.";
        clr = "text-red-400 border-red-500/30 bg-red-400/5";
      }

      setStatus(stat);
      setSuggestion(sug);
      setColorClass(clr);
    }
  };

  const resetForm = () => {
    setHeight("170");
    setWeight("65");
    setBmiValue(null);
    setStatus("");
    setSuggestion("");
  };

  return (
    <section 
      id="bmi-calculator" 
      className="py-24 bg-[#0a0a0c] relative overflow-hidden bg-grid-pattern"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Columns - Information */}
          <div className="lg:col-span-6">
            <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-1">
              Know Your Stats
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none mb-6">
              Instant <span className="text-red-500">BMI</span> <br />
              Fitness Calculator
            </h2>
            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light">
              Body Mass Index (BMI) is a rapid and internationally verified metric to understand your body fat distribution ratio based on height and weight.
            </p>
            
            {/* Quick reference chart */}
            <div className="space-y-3 max-w-md">
              <div className="flex justify-between items-center p-3 rounded-lg bg-stone-900/40 border border-white/5 text-xs text-stone-400 font-mono">
                <span>Underweight</span>
                <span className="text-amber-400">&lt; 18.5</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-stone-900/40 border border-white/5 text-xs text-stone-400 font-mono">
                <span>Normal Weight</span>
                <span className="text-emerald-400">18.5 – 24.9</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-stone-900/40 border border-white/5 text-xs text-stone-400 font-mono">
                <span>Overweight</span>
                <span className="text-orange-400">25.0 – 29.9</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-stone-900/40 border border-white/5 text-xs text-stone-400 font-mono">
                <span>Obese</span>
                <span className="text-red-400">&ge; 30.0</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form & Live Result Display */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f0f12] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              
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
                      Height: <span className="text-white font-mono">{height} cm</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full accent-red-500 cursor-pointer bg-stone-800 rounded-lg appearance-none h-2"
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
                      Weight: <span className="text-white font-mono">{weight} kg</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full accent-red-500 cursor-pointer bg-stone-800 rounded-lg appearance-none h-2"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 font-mono mt-1">
                    <span>40 kg</span>
                    <span>95 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300 glow-btn-red cursor-pointer"
                  >
                    <Sparkles size={14} /> Calculate
                  </button>

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
                        <h4 className="font-mono font-black text-3xl text-white mt-0.5">{bmiValue}</h4>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-black tracking-wider uppercase ${colorClass}`}>
                        {status}
                      </div>
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

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
