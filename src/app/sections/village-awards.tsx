"use client";

import { ScrollReveal } from "./scroll-reveal";
import { villageAwards as awards } from "@/lib/data/village-awards";

export function VillageAwards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
      {awards.map((award, i) => (
        <ScrollReveal key={i}>
          <div
            className={`h-full relative overflow-hidden rounded-[24px] p-8 border hover:-translate-y-2 transition-all duration-300 ${
              award.isSpecial 
                ? 'bg-brand border-brand/50 text-white hover:shadow-[0_10px_40px_rgba(22,163,74,0.5)]' 
                : 'bg-surface border-line hover:border-brand/40 text-slate-300 shadow-shadow'
            }`}
          >
            {/* Background Icon Watermark */}
            <div className={`absolute -right-6 -bottom-6 opacity-10 scale-150 pointer-events-none ${award.isSpecial ? 'text-black' : 'text-brand'}`}>
              <award.icon className={`w-10 h-10 ${award.isSpecial ? 'text-black' : 'text-brand'}`} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${award.isSpecial ? 'bg-white/20' : 'bg-brand/10'}`}>
                  <award.icon className={`w-10 h-10 ${award.isSpecial ? 'text-white' : 'text-brand'}`} />
                </div>
                <span className={`text-3xl font-black font-heading ${award.isSpecial ? 'text-white/30' : 'text-line'}`}>
                  {award.year}
                </span>
              </div>
              <h3 className={`font-heading text-xl md:text-2xl font-bold mb-3 ${award.isSpecial ? 'text-white' : 'text-white'}`}>
                {award.title}
              </h3>
              <p className={`leading-relaxed text-sm ${award.isSpecial ? 'text-white/80' : 'text-muted-foreground'}`}>
                {award.desc}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}


