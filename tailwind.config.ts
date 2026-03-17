/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f0ff',     // cyan neon – shumë i mirë për tech
          50:  '#e6ffff',
          100: '#ccffff',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#00f0ff',
          600: '#00d4e6',
          700: '#00b3c2',
          800: '#0891b2',
          900: '#0e7490',
        },
        accent: {
          DEFAULT: '#7c3aed',     // violet – perfekt si theks
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b1a78',
        },
        tech: {
          dark:    '#0a0a0f',
          darker:  '#050509',
          gray:    '#1e1e2e',
          light:   '#e0f7ff',
          muted:   '#334155',
        },
        danger:  '#ff3366',
        success: '#00ff9d',
        warning: '#fbbf24',
        info:    '#60a5fa',
      },

      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],  // shumë i dobishëm për specs/kod
      },

      boxShadow: {
        'tech-glow':     '0 0 35px 5px rgba(0, 240, 255, 0.3)',
        'purple-glow':   '0 0 40px 8px rgba(124, 58, 237, 0.35)',
        'cyan-glow-sm':  '0 0 20px 2px rgba(0, 240, 255, 0.2)',
        'card-hover':    '0 25px 50px -12px rgba(0, 240, 255, 0.15)',
      },

      backgroundImage: {
        'tech-radial':   'radial-gradient(circle at 50% 50%, rgba(0,240,255,0.08) 0%, transparent 70%)',
        'gradient-tech': 'linear-gradient(135deg, #0a0a0f 0%, #1e1e2e 50%, #0a0a0f 100%)',
      },

      animation: {
        "gradient-flow": "gradient-flow 7s ease infinite",
        float:           "float 6s ease-in-out infinite",
        "pulse-glow":    "pulse-glow 2.5s ease-in-out infinite",
        "shine":         "shine 3s linear infinite",      // për efekte shine në butona/kartela
      },

      keyframes: {
        "gradient-flow": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%":      { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 240, 255, 0.4)" },
          "70%":      { boxShadow: "0 0 0 25px rgba(0, 240, 255, 0)" },
        },
        shine: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};