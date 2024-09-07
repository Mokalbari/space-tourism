export interface NavLink {
  id: number
  link: string
}

export type DestinationsLinks = "Moon" | "Mars" | "Europa" | "Titan"

export type DestinationData = {
  id: number
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}
