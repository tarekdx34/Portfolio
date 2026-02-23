/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'bg-dark': 'var(--background)',
        'surface-dark': 'var(--surface)',
        'border-dark': 'var(--border)',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        'xl': '8px',
      },
    },
  },
  plugins: [],
};