"use client"

// Hooks
import { useState } from "react"
import useScreenWidth from "../../hooks/useScreenWidth"

// SVG Icons
import BurgerIcon from "./icons/icon-hamburger.svg"
import CloseIcon from "./icons/icon-close.svg"
import Logo from "./icons/logo.svg"

// Components
import MobileMenu from "./mobile-menu"
import Menu from "./menu"

// Types
import type { NavLink } from "../../lib/definitions"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const screenWidth = useScreenWidth()

  const handleTouch = () => setIsMenuOpen(!isMenuOpen)

  const navLinks: NavLink[] = [
    { id: 1, link: "Home" },
    { id: 2, link: "Destination" },
    { id: 3, link: "Crew" },
    { id: 4, link: "Technology" },
  ]

  return (
    <header>
      <nav className="relative flex items-center justify-between max-sm:p-6">
        <div className="sm:px-10 sm:py-6 lg:p-16">
          <Logo />
        </div>

        {/* Decorative line */}
        {screenWidth > 1024 && (
          <div
            aria-hidden="true"
            className="flex-1 translate-x-8 border-[1px] border-white/15"
          />
        )}

        {/* Mobile menu & button <= 640px */}
        {screenWidth <= 640 && (
          <>
            <button
              className="z-20"
              onTouchStart={handleTouch}
              aria-label={isMenuOpen ? "close menu" : "open menu"}
            >
              {!isMenuOpen ? <BurgerIcon /> : <CloseIcon />}
            </button>
            {isMenuOpen && <MobileMenu navLinks={navLinks} />}
          </>
        )}

        {/* Tablet & PC */}
        {screenWidth > 640 && <Menu navLinks={navLinks} />}
      </nav>
    </header>
  )
}
