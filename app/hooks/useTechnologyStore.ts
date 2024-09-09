import { create } from "zustand"
import { TechnologyIndex } from "../lib/definitions"

type Store = {
  index: TechnologyIndex
  increment: () => void
  setIndex: (index: TechnologyIndex) => void
}

const useTechnologyStore = create<Store>(set => ({
  index: 1,

  increment: () =>
    set(state => ({
      index: (state.index < 3 ? state.index + 1 : 1) as TechnologyIndex,
    })),

  setIndex: (num: TechnologyIndex) =>
    set(() => ({
      index: num,
    })),
}))

export default useTechnologyStore
