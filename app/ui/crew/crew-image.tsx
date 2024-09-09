"use client"

import Image from "next/image"
import { useMediaQueries } from "@/app/hooks/useMediaQueries"
import useCrewStore from "@/app/hooks/useCrewStore"
import crewInfo from "@/app/lib/crew-info"

export default function CrewImage() {
  const index = useCrewStore(state => state.index)
  const currentCrew = crewInfo[index]

  const { isAbove1024, isAbove640 } = useMediaQueries()

  const imageSizes = {
    small: {
      width: 327,
      height: 350,
    },
    medium: {
      width: 688,
      height: 483,
    },
    large: {
      width: 539,
      height: 734,
    },
  }

  const getSize = () => {
    if (isAbove1024) return imageSizes.large
    if (isAbove640) return imageSizes.medium
    return imageSizes.small
  }

  const imageSize = getSize()
  return (
    <div className="relative mt-10">
      <Image
        src={currentCrew.images.webp}
        width={imageSize.width}
        height={imageSize.height}
        alt={currentCrew.name}
      />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black to-transparent sm:hidden lg:block" />
    </div>
  )
}
