// type Props = {}
import clsx from "clsx"
import Title from "../ui/title"
import CrewImage from "../ui/crew/crew-image"
import CrewCard from "../ui/crew/crew-card"

export default function Page() {
  return (
    <main
      className={clsx(
        "min-h-[90svh]",
        "before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-cover",
        "before:bg-crew-mobile",
        "sm:min-h-[85svh] before:sm:bg-crew-tablet",
        "before:lg:bg-crew-dsktp",
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-90p text-center",
          "sm:max-w-prose sm:text-left",
          "lg:max-w-screen-xl",
        )}
      >
        <Title index="02" title="Meet your crew" />
      </div>
      <div
        className={clsx(
          "mx-auto flex max-w-90p flex-col items-center justify-center text-center",
          "sm:max-w-prose sm:items-start",
          "lg:max-w-screen-xl lg:flex-row lg:items-center lg:justify-between lg:text-left",
        )}
      >
        <CrewCard />
        <CrewImage />
      </div>
    </main>
  )
}
