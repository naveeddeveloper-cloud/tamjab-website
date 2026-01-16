/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#0F3D35',
        'brand-gold': '#A39261', // Slightly more muted gold/bronze
      },
      fontFamily: {
        logo: ['var(--font-bodoni)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        // This matches the white dots on the gold background
        'dot-pattern': 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
      },
    },
  },
  plugins: [],
};