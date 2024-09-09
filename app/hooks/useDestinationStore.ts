import { create } from "zustand"
import { DestinationsLinks } from "../lib/definitions"

type Store = {
  destination: DestinationsLinks
  setDestination: (str: DestinationsLinks) => void
}

const useDestinationStore = create<Store>()(set => ({
  destination: "Moon",
  setDestination: newDestination => set({ destination: newDestination }),
}))

export default useDestinationStore
