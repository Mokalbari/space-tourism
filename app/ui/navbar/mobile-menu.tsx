import clsx from "clsx"
import { NavLink } from "../../lib/definitions"
import { barlowCondensed } from "../fonts"

type Props = {
  navLinks: NavLink[]
  pathname: string
}

export default function MobileMenu({ navLinks, pathname }: Props) {
  return (
    <menu className="absolute right-0 top-0 z-20 h-svh bg-white/10 py-32 pl-8 backdrop-blur-xl">
      {navLinks.map((link, index) => (
        <li
          className={clsx(
            `${barlowCondensed.className} mb-8 pr-28 text-xs uppercase tracking-wide`,
            { "border-r-4 border-white": pathname === link.path },
          )}
          key={link.id}
        >
          <span className="mr-3 font-bold">0{index}</span> {link.link}
        </li>
      ))}
    </menu>
  )
}
