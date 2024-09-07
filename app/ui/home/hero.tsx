import { bellefair, barlowCondensed } from "../fonts"

type Props = { className: string }

export default function Hero({ className }: Props) {
  return (
    <section className={`${className} text-center lg:max-w-lg lg:text-left`}>
      <span
        className={`${barlowCondensed.className} text-xs uppercase tracking-wider text-blue sm:text-md`}
      >
        So you want to travel to <br className="" />
      </span>
      <h1 className={`${bellefair.className} text-2xl uppercase sm:text-4xl`}>
        Space
      </h1>
      <p className="mt-6 text-2xs leading-7 text-blue sm:text-xs">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </section>
  )
}
