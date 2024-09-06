import { Inter, Barlow, Barlow_Condensed, Bellefair } from "next/font/google"
export const inter = Inter({ subsets: ["latin"] })
export const barlow = Barlow({ weight: "400", subsets: ["latin"] })
export const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})
export const bellefair = Bellefair({ weight: "400", subsets: ["latin"] })
