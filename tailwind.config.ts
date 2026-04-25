import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'hsl(222 47% 6%)',
          soft: 'hsl(223 34% 10%)',
        },
        fg: {
          DEFAULT: 'hsl(210 40% 98%)',
          muted: 'hsl(215 20% 70%)',
        },
        border: 'hsl(215 25% 20%)',
        brand: {
          400: 'hsl(270 95% 75%)',
          500: 'hsl(270 95% 67%)',
          600: 'hsl(270 95% 60%)',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)',
      },
    },
  },
  plugins: [],
} satisfies Config

