/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // Shtuar për siguri
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#050505',        // Pak më i zi se 0a0a0a për kontrast OLED
          100: '#1a1a1a',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#CCFF00',        // Titan-Lime
          glow: 'rgba(204, 255, 0, 0.4)',
        },
        titan: {
          lime: '#CCFF00',
          dark: '#99CC00',
        }
      },

      fontFamily: {
        // Sigurohemi që fallbacks janë të saktë
        sans: ['var(--font-satoshi)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-clash)', 'Space Grotesk', 'sans-serif'],
      },

      boxShadow: {
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.9)',
        'titan-glow': '0 0 40px -5px rgba(204, 255, 0, 0.35)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)', // Për butona premium
      },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 5s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 6s linear infinite',
        'marquee': "marquee var(--duration, 30s) linear infinite",
        'marquee-vertical': "marquee-vertical var(--duration, 30s) linear infinite",
        'grid': "grid 20s linear infinite",
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' }, // Efekt blur gjatë hyrjes
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        },
        'gradient-flow': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' }, // Më i lëmuar
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': { 'transform-style': 'preserve-3d' },
        '.backface-hidden': { 'backface-visibility': 'hidden' },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-image': 'linear-gradient(to bottom, #fff, #666)',
        },
        '.titan-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-image': 'linear-gradient(to b, #CCFF00, #99CC00)',
        },
      });
    },
  ],
};