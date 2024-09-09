import { bellefair } from "../fonts"
import Carousel from "./carousel"

export default function CrewCard() {
  return (
    <div className="mx-auto mt-16 flex flex-col items-center sm:max-w-lg lg:mx-0 lg:max-w-prose lg:items-start">
      <div
        className={`${bellefair.className} text-sm uppercase text-white/75 sm:text-[1.5rem]`}
      >
        Pilot
      </div>
      <h2
        className={`${bellefair.className} text-md uppercase sm:text-[2.5rem]`}
      >
        Victor Glover
      </h2>
      <p className="my-6 text-2xs text-blue sm:text-xs">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.{" "}
      </p>
      <Carousel className="mt-" />
    </div>
  )
}
