import { NavLink } from "../../lib/definitions"
import { barlowCondensed } from "../fonts"

type Props = {
  navLinks: NavLink[]
}

export default function MobileMenu({ navLinks }: Props) {
  return (
    <menu className="absolute right-0 top-0 z-10 h-svh bg-white/10 py-32 pl-8 pr-28">
      {navLinks.map((link, index) => (
        <li
          className={`${barlowCondensed.className} mb-8 text-xs uppercase tracking-wide`}
          key={link.id}
        >
          <span className="mr-3 font-bold">0{index}</span> {link.link}
        </li>
      ))}
    </menu>
  )
}
