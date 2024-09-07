// type Props = {}
import { bellefair } from "../fonts"

export default function ExploreButton() {
  return (
    <button
      className={`${bellefair.className} relative aspect-square cursor-pointer rounded-full bg-white p-12 uppercase text-black hover:after:absolute hover:after:bg-red-600`}
    >
      Explore
    </button>
  )
}
