import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0D17",
        blue: "#D0D6F9",
        white: "#FFFFFF",
      },
      fontSize: {
        "3xl": ["144px", "171.9%"],
        "2xl": ["100px", "114.6%"],
        xl: ["56px", "64.2%"],
        lg: ["32px", "36.7%"],
        md: ["28px", "32.1%"],
        sm: ["18px", "180%"],
        xs: ["16px", "19.2%"],
        "2xs": ["14px", "16.8%"],
      },
      letterSpacing: {
        tight: "0px",
        wider: "2px",
        widest: "4px",
      },
    },
  },
  plugins: [],
}
export default config
