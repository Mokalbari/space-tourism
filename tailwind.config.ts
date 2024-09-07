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
        "4xl": "144px",
        "3xl": "100px",
        "2xl": "80px",
        xl: "56px",
        lg: "32px",
        md: "28px",
        sm: "18px",
        xs: "16px",
        "2xs": "15px",
        "3xs": "14px",
      },
      letterSpacing: {
        tight: "0px",
        wider: "2px",
        widest: "4px",
      },
      backgroundImage: {
        "home-dsktp": "url('/background-home-desktop.jpg')",
        "home-tablet": "url('/background-home-tablet.jpg')",
        "home-mobile": "url('/background-home-mobile.jpg')",
      },
      maxWidth: {
        "90p": "90%",
      },
    },
  },
  plugins: [],
}
export default config
