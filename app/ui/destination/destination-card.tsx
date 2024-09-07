import clsx from "clsx"
import type { DestinationsLinks } from "@/app/lib/definitions"
import type { DestinationData } from "@/app/lib/definitions"
import { barlowCondensed, bellefair } from "../fonts"

type Props = {
  setDestination: (newDestination: DestinationsLinks) => void
  currentDestination: DestinationData
}

export default function DestinationCard({
  currentDestination,
  setDestination,
}: Props) {
  const links: DestinationsLinks[] = ["Moon", "Mars", "Europa", "Titan"]

  const handleDestinationChange = (destination: DestinationsLinks) => () =>
    setDestination(destination)

  return (
    <div>
      <ul
        className={`${barlowCondensed.className} mt-14 flex justify-center gap-8 uppercase tracking-wider`}
      >
        {links.map(link => (
          <li
            className={clsx("cursor-pointer text-blue", {
              "border-b-4 pb-4 font-semibold text-white":
                link === currentDestination.name,
            })}
            onClick={handleDestinationChange(link)}
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
      <h2 className={`${bellefair.className} mt-6 text-xl uppercase`}>
        {currentDestination.name}
      </h2>
      <p className="text-2xs leading-6 text-blue">
        {currentDestination.description}
      </p>
      <hr className="mt-6 border-white/25" />
      <div className="mt-6 flex flex-col">
        <div className="uppercase">
          <div
            className={`${barlowCondensed.className} text-3xs tracking-wider text-blue`}
          >
            Avg. Distance
          </div>
          <div className={`${bellefair.className} text-md uppercase`}>
            {currentDestination.distance}
          </div>
        </div>
        <div className="my-6">
          <div
            className={`${barlowCondensed.className} text-3xs uppercase tracking-wider text-blue`}
          >
            Est. travel time
          </div>
          <div className={`${bellefair.className} text-md uppercase`}>
            {currentDestination.travel}
          </div>
        </div>
      </div>
    </div>
  )
}
