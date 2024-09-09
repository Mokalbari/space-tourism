import clsx from "clsx"
import { bellefair } from "../fonts"
import useTechnologyStore from "@/app/hooks/useTechnologyStore"

type Props = {
  index: number
  onClick: () => void
}

export default function CountButton({ index, onClick }: Props) {
  const currentIndex = useTechnologyStore(state => state.index)

  return (
    <button
      onClick={onClick}
      className={clsx(
        `${bellefair.className} text-sm`,
        "grid aspect-square w-10 place-content-center rounded-full border-[1px] border-white/50 p-5",
        "sm:w-14 sm:p-7 sm:text-[24px]",
        "lg:w-20 lg:p-10 lg:text-lg",
        { "bg-white text-black": currentIndex === index },
      )}
    >
      {index}
    </button>
  )
}
