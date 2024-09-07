import { barlowCondensed } from "../fonts"

export default function Title() {
  return (
    <h1
      className={`${barlowCondensed.className} mt-12 uppercase tracking-wider sm:text-[1.25rem] lg:text-md`}
    >
      <span className="font-bold text-white/50">01</span> Pick you destination
    </h1>
  )
}
