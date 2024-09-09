import clsx from "clsx"
import { bellefair } from "../fonts"

type Props = { index: number }

export default function CountButton({ index }: Props) {
  return (
    <button
      className={clsx(
        `${bellefair.className} text-sm`,
        "grid aspect-square w-10 place-content-center rounded-full border-[1px] border-white/50 p-5",
        "sm:w-14 sm:p-7 sm:text-[24px]",
        "lg:w-20 lg:p-10 lg:text-lg",
      )}
    >
      {index}
    </button>
  )
}
