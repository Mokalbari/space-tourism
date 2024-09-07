import ExploreButton from "./ui/home/explore-button"
import Hero from "./ui/home/hero"

export default function Home() {
  return (
    <main className="max-w-90p mx-auto flex flex-col items-center">
      <Hero className="mt-12" />
      <ExploreButton className="mt-28" />
    </main>
  )
}
