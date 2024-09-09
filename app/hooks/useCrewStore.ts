import { create } from "zustand"
import { CrewIndex } from "../lib/definitions"

type Store = {
  index: CrewIndex
  increment: () => void
  setIndex: (index: CrewIndex) => void
}

const useCrewStore = create<Store>(set => ({
  index: 1,

  increment: () =>
    set(state => ({
      index: (state.index < 4 ? state.index + 1 : 1) as CrewIndex,
    })),

  setIndex: (num: CrewIndex) =>
    set(() => ({
      index: num,
    })),
}))

export default useCrewStore
