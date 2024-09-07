import { useState, useEffect } from "react"

/*
Ce hook permet de déterminer la taille de l'écran.
Il prend deux breakpoints : 1024 et 640 & permet d'ajuster le css en fonction
Ce hook retourne ces deux breakpoints à utiliser
*/

/* Le debouncer est là pour éviter les update de state inutiles
entre les différents breakpoints.
La valeur appelée 5ms est suffisament basse pour que
la page soit mise à jour rapidement après un resize du window
*/

const debounce = (fn: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn()
    }, delay)
  }
}

export function useMediaQueries() {
  const [isAbove1024, setIsAbove1024] = useState(false)
  const [isAbove640, setIsAbove640] = useState(false)

  useEffect(() => {
    const updateMediaQuery = () => {
      setIsAbove1024(window.matchMedia("(min-width: 1024px)").matches)
      setIsAbove640(window.matchMedia("(min-width: 640px)").matches)
    }

    // Debounced version of updateMediaQuery
    const debouncedUpdateMediaQuery = debounce(updateMediaQuery, 5)

    // Initial check
    updateMediaQuery()

    window.addEventListener("resize", debouncedUpdateMediaQuery)

    return () => {
      window.removeEventListener("resize", debouncedUpdateMediaQuery)
    }
  }, [])

  return { isAbove1024, isAbove640 }
}
