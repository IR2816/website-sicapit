/* eslint-disable react-hooks/set-state-in-effect */
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
    else if (pathname === "/edu-wisata") word = "Edu Wisata";
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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#130f0a]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.12),transparent_40%),radial-gradient(circle_at_bottom,_rgba(192,132,252,0.06),transparent_35%)]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="relative flex justify-center items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] overflow-hidden flex items-center justify-center bg-surface/90 border border-line shadow-sm">
                <Image src="/assets/images/icon.jpg" alt="Sicapit" fill sizes="112px" className="object-cover" />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="relative text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-[0.12em] uppercase text-foreground dark:text-white">
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(220, 38, 38, 0.28)" }}>
                  {displayPath}
                </span>
                <motion.span 
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#ef4444] to-[#7BAFC4] block"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {displayPath}
                </motion.span>
              </div>

              <div className="w-48 sm:w-72 h-px bg-line rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-brand via-[#ef4444] to-[#7BAFC4]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </div>

              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-muted-foreground text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase mt-2"
              >
                Menyiapkan halaman...
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
