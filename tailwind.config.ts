import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-cream': '#F5F0E8',
        'green-dark': '#1B3B1F',
        'green-medium': '#2D5A34',
        'gold': '#D4952A',
        'gold-light': '#E8B94A',
        'black-soft': '#2C2C2C',
        'cream-warm': '#EDE5D5',
        'white-off': '#FAF8F3',
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'courier': ['var(--font-courier)', 'monospace'],
        'special': ['var(--font-special)', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
