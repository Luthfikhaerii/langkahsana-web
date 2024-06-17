import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'coklat-2tua': '#6F4E37',
      'coklat': '#CA9271',
      'coklat-muda': '#FFE8D1',
      'coklat-2muda': '#F8F4E1',
      'coklat-tua': '#925F41',
      'hijau': '#005B47'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
