"use client"

import { useState } from "react"
import Logo from "./icons/logo.svg"
import BurgerIcon from "./icons/icon-hamburger.svg"
import CloseIcon from "./icons/icon-close.svg"

// import useScreenWidth from "../hooks/useScreenWidth"
import MobileMenu from "./mobile-menu"
import { navLinks } from "../lib/definitions"

// type Props = {}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  // const screenWidth = useScreenWidth()

  const handleTouch = () => setIsMenuOpen(!isMenuOpen)

  const navLinks: navLinks[] = [
    { id: 1, link: "Home" },
    { id: 2, link: "Destination" },
    { id: 3, link: "Crew" },
    { id: 4, link: "Technology" },
  ]

  return (
    <header>
      <nav className="relative flex items-center justify-between p-6">
        <Logo />
        <button
          className="z-20"
          onClick={handleTouch}
          onTouchStart={handleTouch}
        >
          {!isMenuOpen ? <BurgerIcon /> : <CloseIcon />}
        </button>
        {isMenuOpen && <MobileMenu navLinks={navLinks} />}
      </nav>
    </header>
  )
}
