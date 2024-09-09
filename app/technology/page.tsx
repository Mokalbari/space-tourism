// type Props = {}

import clsx from "clsx"
import TechnologyImage from "../ui/technology/technology-image"
import Title from "../ui/title"
import TechnologyCard from "../ui/technology/technology-card"
import ButtonStack from "../ui/technology/button-stack"

export default function Page() {
  return (
    <main
      className={clsx(
        "min-h-[90svh]",
        "before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-cover",
        "before:bg-techno-mobile",
        "before:sm:bg-techno-tablet sm:min-h-[85svh]",
        "before:lg:bg-techno-dsktp",
      )}
    >
      <Title index="03" title="Space launch 101" />
      <div>{/* <TechnologyImage /> */}</div>
      <div>
        <TechnologyCard /> <ButtonStack />
      </div>
    </main>
  )
}
