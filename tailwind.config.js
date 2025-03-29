/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'yale': ['yale-new', 'Times New Roman', 'serif'],
        'neue-haas': ['neue-haas-unica', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
