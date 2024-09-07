import clsx from "clsx"
import Link from "next/link"
import { barlowCondensed } from "../fonts"
import { NavLink } from "../../lib/definitions"

type Props = {
  navLinks: NavLink[]
  pathname: string
}

export default function Menu({ navLinks, pathname }: Props) {
  return (
    <menu className="flex items-center gap-12 bg-white/10 px-9 backdrop-blur-md lg:pl-40 lg:pr-16">
      {navLinks.map((link, index) => (
        <li
          className={clsx(
            `${barlowCondensed.className} relative py-9 uppercase`,
            {
              "after:absolute after:bottom-0 after:left-0 after:mt-10 after:h-[2px] after:w-full after:bg-white":
                pathname === link.path,
            },
          )}
          key={link.id}
        >
          <Link href={`${link.path}`}>
            <span className="mr-3 font-semibold">0{index}</span> {link.link}
          </Link>
        </li>
      ))}
    </menu>
  )
}
