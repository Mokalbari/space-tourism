import ExploreButton from "./ui/home/explore-button"
import Hero from "./ui/home/hero"
import clsx from "clsx"

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-[90svh]",
        "before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-home-mobile before:bg-cover",
        "sm:min-h-[85svh] before:sm:bg-home-tablet",
        "lg:mt-64 lg:min-h-[60svh] before:lg:bg-home-dsktp",
      )}
    >
      <div
        className={clsx(
          "mx-auto mt-12 flex max-w-90p flex-col items-center",
          "sm:mt-32 sm:max-w-sm",
          "lg:max-w-screen-xl lg:flex-row lg:justify-between",
        )}
      >
        <Hero className="" />
        <ExploreButton className="mb-12 mt-32 lg:m-0" />
      </div>
    </main>
  )
}
