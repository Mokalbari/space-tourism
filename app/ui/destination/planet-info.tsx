"use client"

import { useState } from "react"
import { destinationInfo } from "@/app/lib/destination-info"
import DestinationImage from "./destination-image"
import DestinationCard from "./destination-card"
import type { DestinationsLinks } from "@/app/lib/definitions"

export default function PlanetInfo() {
  const [destination, setDestination] = useState<DestinationsLinks>("Moon")
  const currentDestination = destinationInfo[destination]

  return (
    <div className="mt-12 flex flex-col justify-center">
      <DestinationImage
        destination={destination}
        currentDestination={currentDestination}
      />
      <DestinationCard
        currentDestination={currentDestination}
        setDestination={setDestination}
      />
    </div>
  )
}
