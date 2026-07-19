/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F8FA',
        ink: '#1B2430',
        muted: '#6B7686',
        border: '#E4E7ED',
        indigo: '#4C5FD5',
        teal: '#17A398',
        amber: '#E2A33D',
        rose: '#D96C6C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
