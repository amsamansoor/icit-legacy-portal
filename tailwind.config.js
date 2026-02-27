module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ps-bg': '#F4F7F6',           // Main background
        'ps-dark': '#1E2124',         // Dark containers
        'ps-accent': '#FF6B35',       // Primary accent (orange)
        'ps-text-dark': '#1E2124',    // Text on light bg
        'ps-text-light': '#FFFFFF',   // Text on dark bg
        'ps-text-muted': '#6B7280',   // Secondary text
        'ps-page-bg': '#E7E9ED'       // Overall page background
      }
    }
  },
  plugins: []
}
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Check karein ke 'tsx' yahan likha hai
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}