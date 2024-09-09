"use client"

import clsx from "clsx"
import useTechnologyStore from "@/app/hooks/useTechnologyStore"
import { technologyInfo } from "@/app/lib/technology-info"
import { bellefair } from "../fonts"

export default function TechnologyCard() {
  const index = useTechnologyStore(state => state.index)
  const currentTechno = technologyInfo[index]

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-4 text-center",
        "max-w-xs sm:max-w-lg",
      )}
    >
      <div
        className={clsx(
          `${bellefair.className}`,
          "text-sm uppercase text-white/50",
          "sm:text-sm",
          "lg:text-lg",
        )}
      >
        The terminology...
      </div>
      <h1
        className={clsx(
          `${bellefair.className}`,
          "text-[24px] uppercase",
          "sm:text-[40px]",
          "lg:text-xl",
        )}
      >
        {currentTechno.name}
      </h1>
      <p className={clsx("text-2xs text-blue", "sm:text-xs", "lg:mt-6")}>
        {currentTechno.description}
      </p>
    </div>
  )
}
