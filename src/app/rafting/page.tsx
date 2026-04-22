'use client';

import { SiteNav } from '../sections/site-nav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SafetySection from './components/SafetySection';
import PackagesSection from './components/PackagesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import AdventureReady from './components/AdventureReady';
import ContactSection from './components/ContactSection';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand selection:text-white bg-[#0a0a0a] text-slate-100">
      <SiteNav brand="Sicapit" />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SafetySection />
        <PackagesSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <AdventureReady />
        <ContactSection />
      </main>
      
    </div>
  );
}
