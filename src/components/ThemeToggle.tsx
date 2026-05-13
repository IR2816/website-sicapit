'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 p-0 rounded-lg border border-line hover:border-brand/50 hover:bg-surface-strong transition-all"
        title={`Current theme: ${theme}`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-brand" />
        ) : (
          <Sun className="w-4 h-4 text-brand" />
        )}
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 mt-2 w-48 rounded-lg bg-surface border border-line shadow-lg overflow-hidden">
          <div className="p-2">
            <p className="text-xs font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wide">Tema</p>

            <button
              onClick={() => {
                setTheme('light');
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm ${
                theme === 'light'
                  ? 'bg-brand text-white'
                  : 'text-foreground hover:bg-surface-strong'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Light</span>
              {theme === 'light' && <span className="ml-auto text-xs">✓</span>}
            </button>

            <button
              onClick={() => {
                setTheme('dark');
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm ${
                theme === 'dark'
                  ? 'bg-brand text-white'
                  : 'text-foreground hover:bg-surface-strong'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Dark</span>
              {theme === 'dark' && <span className="ml-auto text-xs">✓</span>}
            </button>

            <div className="border-t border-line my-1"></div>

            <div className="px-3 py-2 text-xs text-muted-foreground">
              <p className="font-medium mb-1">Auto Switch</p>
              <p>Light: 06:00 - 18:00</p>
              <p>Dark: 18:00 - 06:00</p>
              <p className="mt-1 text-[10px] italic">
                (Manual selection disables auto-switch)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
