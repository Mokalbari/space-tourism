import type { Metadata } from "next"
import { barlow } from "./ui/fonts"
import "./globals.css"
import Navbar from "./ui/navbar/navbar"

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} flex min-h-svh flex-col bg-home-mobile bg-cover bg-no-repeat text-sm text-white sm:bg-home-tablet lg:justify-between lg:bg-home-dsktp`}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
