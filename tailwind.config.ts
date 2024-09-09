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
        "destination-dsktp": "url('/background-destination-desktop.jpg')",
        "destination-tablet": "url('/background-destination-tablet.jpg')",
        "destination-mobile": "url('/background-destination-mobile.jpg')",
        "crew-dsktp": "url('/background-crew-desktop.jpg')",
        "crew-tablet": "url('/background-crew-tablet.jpg')",
        "crew-mobile": "url('/background-crew-mobile.jpg')",
        "techno-dsktp": "url('/background-technology-desktop.jpg')",
        "techno-tablet": "url('/background-technology-tablet.jpg')",
        "techno-mobile": "url('/background-technology-mobile.jpg')",
      },
      maxWidth: {
        "90p": "90%",
      },
    },
  },
  plugins: [],
}
export default config
