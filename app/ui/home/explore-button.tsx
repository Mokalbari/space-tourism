type Props = { className: string }
import { bellefair } from "../fonts"
import clsx from "clsx"

export default function ExploreButton({ className }: Props) {
  return (
    <button
      className={clsx(
        bellefair.className,
        "relative z-10 aspect-square cursor-pointer rounded-full bg-white px-8 text-sm uppercase text-black", // Classes principales
        "px-16 sm:text-lg", // Responsive
        "after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full", // Styles pour ::after
        "after:bg-white/10 after:transition after:ease-in-out hover:after:scale-150 hover:after:transition-transform", // Styles au hover
        `${className}`, // Props
      )}
    >
      Explore
    </button>
  )
}
