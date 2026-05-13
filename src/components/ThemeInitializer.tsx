'use client';

import { useAutoTheme } from '@/hooks/use-auto-theme';
import { ReactNode } from 'react';

export function ThemeInitializer({ children }: { children: ReactNode }) {
  // Initialize auto theme on mount
  useAutoTheme();

  return <>{children}</>;
}
