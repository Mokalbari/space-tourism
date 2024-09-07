import { DestinationsLinks } from "@/app/lib/definitions"
import { DestinationData } from "@/app/lib/definitions"

type Props = {
  setDestination: (newDestination: DestinationsLinks) => void
  currentDestination: DestinationData
}

export default function DestinationCard({
  currentDestination,
  setDestination,
}: Props) {
  const links: DestinationsLinks[] = ["Moon", "Mars", "Europa", "Titan"]

  const handleDestinationChange = (destination: DestinationsLinks) => () =>
    setDestination(destination)

  return (
    <div>
      <ul>
        {links.map(link => (
          <li
            className="cursor-pointer"
            onClick={handleDestinationChange(link)}
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
      <h2>{currentDestination.name}</h2>
      <p>{currentDestination.description}</p>
      <hr />
      <div>Avg. Distance</div>
      <div>{currentDestination.distance}</div>
      <div>Est. travel time</div>
      <div>{currentDestination.travel}</div>
    </div>
  )
}
