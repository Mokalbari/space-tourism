"use client"

import useTechnologyStore from "@/app/hooks/useTechnologyStore"
import CountButton from "./count-button"
import { TechnologyIndex } from "@/app/lib/definitions"
import { useInterval } from "usehooks-ts"

export default function ButtonStack() {
  const setIndex = useTechnologyStore(state => state.setIndex)
  const incrementIndex = useTechnologyStore(state => state.increment)

  const indexArray: TechnologyIndex[] = [1, 2, 3]

  useInterval(incrementIndex, 5000)

  return (
    <div>
      {indexArray.map(i => (
        <CountButton onClick={() => setIndex(i)} key={i} index={i} />
      ))}
    </div>
  )
}
