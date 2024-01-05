import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#0F3A62",
        text: "#1C1F1B",
        bg: "#F5FAFD",
        stroke: "#ECF2F7",
        error: "#A10F0F",
        success: "#0FA16D",
        danger: "#A10F0F",
        onDanger: "#F3C4C4",
        sidebar: "#ECF2F7",
        outline: "#D1D1D1",
        hover: "#23588A",
        lightDark: "#747474",
        warning: "#9EA10F",
        lighterBg: "#ECF2F7",
        onSuccess: "#C7E4D9",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
export default config
