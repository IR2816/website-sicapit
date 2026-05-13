'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Hook untuk automatic theme switching berdasarkan jam
 * Light mode: 06:00 - 18:00 (pagi - sore)
 * Dark mode: 18:00 - 06:00 (malam - dini hari)
 * 
 * User bisa juga override dengan manual toggle
 */
export function useAutoTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [autoTheme, setAutoTheme] = useState<'light' | 'dark' | null>(null);

  // Determine theme based on current hour
  const getTimeBasedTheme = (): 'light' | 'dark' => {
    const hour = new Date().getHours();
    // Light mode dari 06:00 - 18:00 (jam 6 pagi sampai jam 6 sore)
    // Dark mode dari 18:00 - 06:00 (jam 6 sore sampai jam 6 pagi)
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  };

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    // Cek apakah user sudah manually set theme
    const savedTheme = localStorage.getItem('theme');
    
    if (!savedTheme) {
      // Jika tidak ada saved theme, gunakan time-based theme
      const timeBasedTheme = getTimeBasedTheme();
      setAutoTheme(timeBasedTheme);
      setTheme(timeBasedTheme);
    } else {
      // Jika ada saved theme, respek user preference
      setAutoTheme(null);
    }
  }, [setTheme]);

  // Update theme setiap jam berubah (jika auto mode aktif)
  useEffect(() => {
    if (!mounted || autoTheme === null) return;

    const checkTimeInterval = setInterval(() => {
      const newTheme = getTimeBasedTheme();
      if (newTheme !== theme) {
        setTheme(newTheme);
        setAutoTheme(newTheme);
      }
    }, 60000); // Check setiap 1 menit

    return () => clearInterval(checkTimeInterval);
  }, [mounted, theme, setTheme, autoTheme]);

  // Manual toggle dengan save ke localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Mark as manually set
    setAutoTheme(null); // Disable auto theme saat user manual toggle
  };

  return {
    theme,
    mounted,
    toggleTheme,
    isAutoMode: autoTheme !== null,
  };
}
