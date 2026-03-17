'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import type { ReactNode } from 'react';

interface LenisWrapperProps {
  children: ReactNode;
}

export function LenisWrapper({ children }: LenisWrapperProps) {
  useEffect(() => {
    // Disable Lenis në mobile / touch devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth <= 768;

    if (isMobile) {
      console.log('Mobile detected → Lenis disabled for native smooth scroll');
      return; // mos krijo Lenis fare
    }

    const lenis = new Lenis({
      duration: 1.2,          // pak më e shpejtë për desktop
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
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