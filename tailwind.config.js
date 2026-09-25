/** @type {import('tailwindcss').Config} */
import headlessui from '@headlessui/tailwindcss'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Terminal green accent on warm charcoal.
        terminal: {
          bg: {
            primary: '#12110f',
            secondary: '#1c1a16',
            tertiary: '#2c2823',
          },
          text: {
            primary: '#f3efe8',
            secondary: '#c4bdb3',
            tertiary: '#9c958c',
          },
          green: {
            DEFAULT: '#7FFF00',
            dim: '#4a9b00',
            glow: 'rgba(127, 255, 0, 0.2)',
          },
          red: '#ff5555',
          yellow: '#ffff55',
          blue: '#5555ff',
        },
      },
      fontFamily: {
        sans: [
          'Outfit',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        'cursor-blink': 'blink 1s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'terminal-glow': '0 8px 28px rgba(127, 255, 0, 0.16), 0 0 40px rgba(127, 255, 0, 0.06)',
        'terminal-glow-subtle': '0 8px 24px rgba(18, 17, 15, 0.45), 0 0 0 1px rgba(127, 255, 0, 0.28)',
      },
    },
  },
  plugins: [headlessui],
}
