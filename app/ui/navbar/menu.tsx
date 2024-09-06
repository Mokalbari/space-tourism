import { barlowCondensed } from "../fonts"
import { NavLink } from "../../lib/definitions"

type Props = {
  navLinks: NavLink[]
}

export default function Menu({ navLinks }: Props) {
  return (
    <menu className="flex items-center gap-12 bg-white/10 p-9 lg:pl-40 lg:pr-16">
      {navLinks.map((link, index) => (
        <li className={`${barlowCondensed.className} uppercase`} key={link.id}>
          <span className="mr-3 font-semibold">0{index}</span> {link.link}
        </li>
      ))}
    </menu>
  )
}
