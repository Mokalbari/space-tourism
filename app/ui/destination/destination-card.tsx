"use client"

import clsx from "clsx"
import type { DestinationsLinks } from "@/app/lib/definitions"
import { barlowCondensed, bellefair } from "../fonts"
import useDestinationStore from "@/app/lib/destination-store"
import { destinationInfo } from "@/app/lib/destination-info"

export default function DestinationCard() {
  const destination = useDestinationStore(state => state.destination)
  const setDestination = useDestinationStore(state => state.setDestination)
  const currentDestination = destinationInfo[destination]

  const links: DestinationsLinks[] = ["Moon", "Mars", "Europa", "Titan"]

  return (
    <div className="lg:max-w-sm">
      <ul
        className={clsx(
          barlowCondensed.className,
          "mt-14 flex justify-center gap-8 uppercase tracking-wider",
          "sm:text-xs lg:justify-start",
        )}
      >
        {links.map(link => (
          <li
            className={clsx("cursor-pointer text-blue", {
              "border-b-4 pb-4 font-semibold text-white":
                link === currentDestination.name,
            })}
            onClick={() => setDestination(link)}
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
      <h2
        className={clsx(
          bellefair.className,
          "mt-6 text-xl uppercase",
          "sm:text-2xl",
        )}
      >
        {currentDestination.name}
      </h2>
      <p className={clsx("text-2xs leading-6 text-blue", "sm:text-xs")}>
        {currentDestination.description}
      </p>
      <hr className="mt-6 border-white/25 lg:mt-10" />
      <div
        className={clsx(
          "mt-6 flex flex-col items-center justify-around",
          "sm:flex-row lg:mt-4 lg:justify-start lg:gap-12",
        )}
      >
        <div className="uppercase">
          <div
            className={clsx(
              barlowCondensed.className,
              "text-3xs tracking-wider text-blue",
            )}
          >
            Avg. Distance
          </div>
          <div className={clsx(bellefair.className, "text-md uppercase")}>
            {currentDestination.distance}
          </div>
        </div>
        <div className="my-6">
          <div
            className={clsx(
              barlowCondensed.className,
              "text-3xs uppercase tracking-wider text-blue",
            )}
          >
            Est. travel time
          </div>
          <div className={clsx(bellefair.className, "text-md uppercase")}>
            {currentDestination.travel}
          </div>
        </div>
      </div>
    </div>
  )
}
