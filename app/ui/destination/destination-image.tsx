import Image from "next/image"
import { useMediaQueries } from "@/app/hooks/useMediaQueries"
import type { DestinationData, DestinationsLinks } from "@/app/lib/definitions"

type Props = {
  destination: DestinationsLinks
  currentDestination: DestinationData
}

export default function DestinationImage({
  destination,
  currentDestination,
}: Props) {
  const { isAbove640, isAbove1024 } = useMediaQueries()

  const imageSizes = {
    small: 150,
    medium: 300,
    large: 480,
  }

  return (
    <div>
      {!isAbove640 && (
        <Image
          src={`/destination/image-${destination.toLowerCase()}.webp`}
          width={imageSizes.small}
          height={imageSizes.small}
          alt={currentDestination.name}
        />
      )}
      {isAbove640 && !isAbove1024 && (
        <Image
          src={`/destination/image-${destination.toLowerCase()}.webp`}
          width={imageSizes.medium}
          height={imageSizes.medium}
          alt={currentDestination.name}
        />
      )}
      {isAbove1024 && (
        <Image
          src={`/destination/image-${destination.toLowerCase()}.webp`}
          width={imageSizes.large}
          height={imageSizes.large}
          alt={currentDestination.name}
        />
      )}
    </div>
  )
}
