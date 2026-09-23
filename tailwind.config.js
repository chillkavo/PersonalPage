/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        abyss: '#0B132B',
        panel: '#1C2541',
        panel2: '#233156',
        cyan: {
          DEFAULT: '#00B4D8',
          soft: '#6FFFE9',
        },
        smoke: '#F5F5F5',
        muted: '#A8B2C1',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(111, 255, 233, 0.35)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% 0%, rgba(0,180,216,0.12), transparent 60%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-16px)' },
        },
      },
      animation: {
        drift: 'drift 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
