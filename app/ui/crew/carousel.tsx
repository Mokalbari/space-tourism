"use client"

import useCrewStore from "@/app/hooks/useCrewStore"
import { useInterval } from "usehooks-ts"
import clsx from "clsx"
type Props = { className: string }

export default function Carousel({ className }: Props) {
  const index = useCrewStore(state => state.index)
  const increment = useCrewStore(state => state.increment)
  const setIndex = useCrewStore(state => state.setIndex)

  useInterval(increment, 5000)

  return (
    <div className={`${className} flex gap-4 lg:gap-10`}>
      <div
        onClick={() => setIndex(1)}
        className={clsx(
          "h-[10px] w-[10px] cursor-pointer rounded-full bg-slate-600 lg:h-4 lg:w-4",
          { "bg-white": index === 1 },
        )}
      />
      <div
        onClick={() => setIndex(2)}
        className={clsx(
          "h-[10px] w-[10px] cursor-pointer rounded-full bg-slate-600 lg:h-4 lg:w-4",
          { "bg-white": index === 2 },
        )}
      />
      <div
        onClick={() => setIndex(3)}
        className={clsx(
          "h-[10px] w-[10px] cursor-pointer rounded-full bg-slate-600 lg:h-4 lg:w-4",
          { "bg-white": index === 3 },
        )}
      />
      <div
        onClick={() => setIndex(4)}
        className={clsx(
          "h-[10px] w-[10px] cursor-pointer rounded-full bg-slate-600 lg:h-4 lg:w-4",
          { "bg-white": index === 4 },
        )}
      />
    </div>
  )
}
