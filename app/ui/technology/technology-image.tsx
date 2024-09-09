"use client"

import Image from "next/image"
import { useMediaQueries } from "@/app/hooks/useMediaQueries"
import useTechnologyStore from "@/app/hooks/useTechnologyStore"
import { technologyInfo } from "@/app/lib/technology-info"

export default function TechnologyImage() {
  const index = useTechnologyStore(state => state.index)
  const currentTechnology = technologyInfo[index]

  const { isAbove1024, isAbove640 } = useMediaQueries()

  const imageSizes = {
    small: {
      width: 768,
      height: 258,
    },
    medium: {
      width: 768,
      height: 357,
    },
    large: {
      width: 608,
      height: 600,
    },
  }

  const getSize = () => {
    if (isAbove1024) return imageSizes.large
    if (isAbove640) return imageSizes.medium
    return imageSizes.small
  }

  const imageSize = getSize()

  return (
    <div>
      {!isAbove1024 && (
        <Image
          src={currentTechnology.images.landscape}
          fill
          alt={currentTechnology.name}
        />
      )}
      {isAbove1024 && (
        <Image
          src={currentTechnology.images.portrait}
          width={imageSize.width}
          height={imageSize.height}
          alt={currentTechnology.name}
        />
      )}
    </div>
  )
}
