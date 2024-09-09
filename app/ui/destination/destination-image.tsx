"use client"

import Image from "next/image"
import { useMediaQueries } from "@/app/hooks/useMediaQueries"
import useDestinationStore from "@/app/lib/destination-store"
import { destinationInfo } from "@/app/lib/destination-info"

export default function DestinationImage() {
  const destination = useDestinationStore(state => state.destination)
  const currentDestination = destinationInfo[destination]
  const { isAbove640, isAbove1024 } = useMediaQueries()

  const imageSizes = {
    small: 150,
    medium: 300,
    large: 480,
  }

  const getSize = () => {
    if (isAbove1024) return imageSizes.large
    if (isAbove640) return imageSizes.medium
    return imageSizes.small
  }

  const imageSize = getSize()

  return (
    <div className="flex justify-center">
      <Image
        src={`/destination/image-${destination.toLowerCase()}.webp`}
        width={imageSize}
        height={imageSize}
        alt={currentDestination.name}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  )
}
