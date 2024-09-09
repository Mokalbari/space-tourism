"use client"

import useCrewStore from "@/app/hooks/useCrewStore"
import { useInterval } from "usehooks-ts"
import clsx from "clsx"
import { CrewIndex } from "@/app/lib/definitions"
type Props = { className: string }

export default function Carousel({ className }: Props) {
  const index = useCrewStore(state => state.index)
  const increment = useCrewStore(state => state.increment)
  const setIndex = useCrewStore(state => state.setIndex)

  useInterval(increment, 5000)

  const arr: CrewIndex[] = [1, 2, 3, 4]

  return (
    <div className={`${className} flex gap-4 lg:gap-10`}>
      {arr.map(i => (
        <div
          key={i}
          onClick={() => setIndex(i)}
          className={clsx(
            "h-[10px] w-[10px] cursor-pointer rounded-full bg-slate-600 lg:h-4 lg:w-4",
            { "bg-white": index === i },
          )}
        />
      ))}
    </div>
  )
}
