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
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}