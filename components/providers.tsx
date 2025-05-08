'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {/* Temporarily commented out to resolve hydration errors */}
        {/* <BankContextProvider clientId={10}>
          {children}
        </BankContextProvider> */}
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}