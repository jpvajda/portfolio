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
        // Terminal theme colors from REDESIGN_REQUIREMENTS.md
        terminal: {
          bg: {
            primary: '#0d0d0d',
            secondary: '#1a1a1a',
            tertiary: '#262626',
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#a0a0a0',
            tertiary: '#6b6b6b',
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
        'terminal-glow': '0 4px 20px rgba(127, 255, 0, 0.3), 0 0 40px rgba(127, 255, 0, 0.1)',
        'terminal-glow-subtle': '0 2px 12px rgba(127, 255, 0, 0.15), 0 0 20px rgba(127, 255, 0, 0.08)',
      },
    },
  },
  plugins: [headlessui],
}
