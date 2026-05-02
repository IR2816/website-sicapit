"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function TransitionScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [displayPath, setDisplayPath] = useState("Sicapit");

  useEffect(() => {
    // Determine the word to display based on the path
    let word = "Sicapit";
    if (pathname === "/education") word = "Edukasi";
    else if (pathname === "/farm") word = "Farm";
    else if (pathname === "/agrowisata") word = "Agrowisata";
    else if (pathname === "/rafting") word = "Rafting";
    
    setDisplayPath(word);
    
    // Trigger loading screen
    setIsLoading(true);
    
    // Auto-hide after slightly longer visual treat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="transition-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Background Decor Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950/80 to-slate-950" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-10"
          >
            {/* Animated Logo Container */}
            <div className="relative flex justify-center items-center">
              {/* Outer Ripple 1 */}
              <motion.div 
                className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full border-2 border-emerald-500/30"
                animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              {/* Outer Ripple 2 */}
              <motion.div 
                className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full border border-emerald-400/20"
                animate={{ scale: [1, 2, 2.5], opacity: [0.6, 0.2, 0] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
              />
              
              {/* Main Logo Sphere */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center bg-slate-900/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_0_50px_rgba(16,185,129,0.2)] z-10 border border-emerald-400/20">
                <motion.svg
                  width="70%"
                  height="70%"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]"
                >
                  <defs>
                    <linearGradient id="gradient-emerald" x1="0" y1="0" x2="100" y2="100">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                  </defs>
                  
                  {/* Outer spinning dashed ring */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="url(#gradient-emerald)"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "50px", originY: "50px" }}
                  />
                  
                  {/* Mountain / Tent Shape (Si Capit / Rafting / Farm) */}
                  <motion.path
                    d="M20 60 L50 25 L65 45 L75 35 L85 55"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  
                  {/* River Wave (Rafting) */}
                  <motion.path
                    d="M15 70 Q 35 55, 50 70 T 85 70"
                    stroke="#34d399"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  />

                  {/* Sun / Leaf dot */}
                  <motion.circle
                    cx="50" cy="15" r="5"
                    fill="#6ee7b7"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  />
                </motion.svg>
              </div>
            </div>
            
            {/* Text and Bar Layout */}
            <div className="flex flex-col items-center gap-4">
              {/* Outline / Fill Reveal Text */}
              <div className="relative text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-[0.2em] uppercase">
                {/* Outlined stroked background */}
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(16, 185, 129, 0.3)" }}>
                  {displayPath}
                </span>
                
                {/* Illuminated foreground that sweeps across */}
                <motion.span 
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600 block drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                  initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
                  animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
                >
                  {displayPath}
                </motion.span>
              </div>

              {/* Progress Line */}
              <div className="w-48 sm:w-72 h-[3px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-700"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
                />
              </div>

              {/* Subheading text fading in */}
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-emerald-500/60 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mt-2 shadow-black drop-shadow-md"
              >
                Menyiapkan Pelayaran...
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
