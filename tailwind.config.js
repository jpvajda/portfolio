/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Terminal theme colors
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
            glow: '#7FFF0033',
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
      },
    },
  },
  plugins: [],
}
