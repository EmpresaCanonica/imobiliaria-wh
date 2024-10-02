// import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@nextui-org/theme/dist/components/(button|divider|navbar|ripple|spinner|select).js",
    "./node_modules/@nextui-org/theme/dist/components/select.js",
  ],
  theme: {
    backgroundImage:{
      'img_bg_hero': "url('../assets/HeroBanner.jpg')",
      'img_wallpaper_aboutus':"url('../assets/Wallpaper.svg')"

    },
    extend: {
      colors: {
        'primary-dark-brown': '#331A06',
        'primary-brown': '#4D2708',
        'praimary-light-brown': '#65340B',
        'detail-beige': '#DB9A58',
        'detail-light-beige': '#F2CDA7',
        'off' : '#F5F5F5'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
