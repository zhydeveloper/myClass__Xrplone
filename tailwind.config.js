import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './public/**/*.{html,js}'],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors: {
        orange:'#FF8A08',
        dark:'#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

