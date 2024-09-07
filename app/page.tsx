import ExploreButton from "./ui/home/explore-button"
import Hero from "./ui/home/hero"

export default function Home() {
  return (
    <main className="max-w-90p mx-auto sm:max-w-xl lg:max-w-6xl lg:px-8">
      <div className="flex flex-col items-center lg:mb-40 lg:flex-row lg:items-center lg:justify-between">
        <Hero className="mt-12 sm:mt-24 lg:mt-0" />
        <ExploreButton className="mt-28 lg:mt-0" />
      </div>
    </main>
  )
}
