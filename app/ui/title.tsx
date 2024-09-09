import clsx from "clsx"
import { barlowCondensed } from "./fonts"

type Props = {
  index: "01" | "02" | "03"
  title: string
}

export default function Title({ index, title }: Props) {
  return (
    <h1
      className={clsx(
        barlowCondensed.className,
        "mt-12 uppercase tracking-wider",
        "sm:text-[1.25rem] lg:text-md",
      )}
    >
      <span className="font-bold text-white/50">{index}</span> {title}
    </h1>
  )
}
