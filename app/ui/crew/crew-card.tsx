"use client"

import useCrewStore from "@/app/hooks/useCrewStore"
import { bellefair } from "../fonts"
import Carousel from "./carousel"
import crewInfo from "@/app/lib/crew-info"

export default function CrewCard() {
  const index = useCrewStore(state => state.index)
  const currentCrew = crewInfo[index]

  return (
    <div className="mx-auto mt-16 flex flex-col items-center sm:max-w-lg lg:mx-0 lg:max-w-prose lg:items-start">
      <div
        className={`${bellefair.className} text-sm uppercase text-white/75 sm:text-[1.5rem]`}
      >
        {currentCrew.role}
      </div>
      <h2
        className={`${bellefair.className} text-md uppercase sm:text-[2.5rem]`}
      >
        {currentCrew.name}
      </h2>
      <p className="my-6 text-2xs text-blue sm:text-xs">{currentCrew.bio}</p>
      <Carousel className="sm:mt-12 lg:mt-60" />
    </div>
  )
}
