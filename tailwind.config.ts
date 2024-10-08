// import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@nextui-org/theme/dist/components/(button|divider|select).js",
    "./node_modules/@nextui-org/theme/dist/components/select.js",
    "./node_modules/@nextui-org/theme/dist/components/image.js",
    "./node_modules/@nextui-org/theme/dist/components",
  ],
  theme: {
  	backgroundImage: {
  		'img_bg_hero': "url('../assets/HeroBanner.jpg')",
  		'img_wallpaper_aboutus': "url('../assets/wallpaper.jpg')"
  	},
  	extend: {
  		colors: {
  			'primary-dark-brown': '#331A06',
  			'primary-brown': '#4D2708',
  			'praimary-light-brown': '#65340B',
  			'detail-beige': '#DB9A58',
  			'detail-light-beige': '#F2CDA7',
  			off: '#F5F5F5',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
