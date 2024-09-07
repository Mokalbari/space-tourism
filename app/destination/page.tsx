import clsx from "clsx"

import Title from "../ui/destination/title"
import PlanetInfo from "../ui/destination/planet-info"

export default function Page() {
  return (
    <main
      className={clsx(
        "min-h-[90svh]",
        "before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-cover",
        "before:bg-destination-mobile",
        "before:sm:bg-destination-tablet sm:min-h-[85svh]",
        "before:lg:bg-destination-dsktp",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-90p flex-col items-center justify-center text-center",
          "sm:max-w-prose sm:items-start",
          "lg:max-w-screen-xl",
        )}
      >
        <Title />
        <PlanetInfo />
      </div>
    </main>
  )
}
