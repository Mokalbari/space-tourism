import DestinationImage from "./destination-image"
import DestinationCard from "./destination-card"

export default function PlanetInfo() {
  return (
    <div className="mt-12 flex flex-col justify-center lg:mt-28 lg:w-full lg:flex-row lg:items-center lg:justify-around lg:text-left">
      <DestinationImage />
      <DestinationCard />
    </div>
  )
}
