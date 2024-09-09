export interface NavLink {
  id: number
  link: string
  path: string
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

export type CrewIndex = 1 | 2 | 3 | 4

export type CrewData = {
  id: number
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}
