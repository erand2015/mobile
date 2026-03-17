"use client";

import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { useEffect, useRef } from 'react';

import Navbar from '@/components/shared/navbar';
import { PreLoader } from '@/components/shared/pre-loader';
import { CustomCursor } from '@/components/shared/custom-cursor';
import { ScrollProgress } from '@/components/shared/scroll-progress';
import { BackToTop } from '@/components/shared/back-to-top';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-clash', 
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-satoshi',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Përcaktojmë ref-in për div-in mbështjellës
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mainRef.current) {
        const { clientX, clientY } = e;
        // Variablat CSS aplikohen te ky div
        mainRef.current.style.setProperty('--x', `${clientX}px`);
        mainRef.current.style.setProperty('--y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <html lang="sq" className="scroll-smooth cursor-none" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-[#050505] text-white min-h-screen overflow-x-hidden cursor-none relative`}>
        
        {/* ZGJIDHJA: Përdorim një div mbështjellës me ref në vend të body */}
        <div ref={mainRef} className="relative min-h-screen w-full">
          
          {/* 1. Spotlight Mouse Glow Premium */}
          <div 
            className="pointer-events-none fixed inset-0 z-0 transition duration-300 opacity-40"
            style={{
              background: `radial-gradient(600px at var(--x, 0) var(--y, 0), rgba(204, 255, 0, 0.08), transparent 80%)`
            }}
          />

          <ScrollProgress />
          <BackToTop />
          <CustomCursor />
          <PreLoader />
          
          <Navbar />

          <div className="relative z-10 flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>

          {/* Noise Overlay Premium */}
          <div className="pointer-events-none fixed inset-0 z-[90] opacity-[0.03] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </body>
    </html>
  );
}