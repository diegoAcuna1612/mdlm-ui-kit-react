import { MuniColors } from './src/theme/colors';
import { MuniSizes } from './src/theme/sizes';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muni: MuniColors,
      },
      spacing: {
        muni: MuniSizes,
      },
    },
  },
  plugins: [],
}