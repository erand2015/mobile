'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import type { ReactNode } from 'react';

interface LenisWrapperProps {
  children: ReactNode;
}

export function LenisWrapper({ children }: LenisWrapperProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // smoothTouch: false,  ← HIQET KËTU – nuk ekziston më në opsionet aktuale
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}