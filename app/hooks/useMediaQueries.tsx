import { useState, useEffect } from "react"

/*
Ce hook permet de déterminer la taille de l'écran.
Il prend deux breakpoints : 1024 et 640 & permet d'ajuster le css en fonction
Ce hook retourne ces deux breakpoints à utiliser

Ce hook se base sur l'API matchMedia qui permet d'écouter les redimensionnement
uniquement lorsque les breakpoints sont franchis.
*/

export function useMediaQueries() {
  const [isAbove1024, setIsAbove1024] = useState(false)
  const [isAbove640, setIsAbove640] = useState(false)

  useEffect(() => {
    // Définir ici les breakpoints nécessaires en fonction de l'app
    const mediaQuery1024 = window.matchMedia("(min-width: 1024px)")
    const mediaQuery640 = window.matchMedia("(min-width: 640px)")

    // Update initial de la state
    setIsAbove1024(mediaQuery1024.matches)
    setIsAbove640(mediaQuery640.matches)

    // Gestionnaire d'événement
    const handleMediaQueryChange = () => {
      setIsAbove1024(mediaQuery1024.matches)
      setIsAbove640(mediaQuery640.matches)
    }

    mediaQuery1024.addEventListener("change", handleMediaQueryChange)
    mediaQuery640.addEventListener("change", handleMediaQueryChange)

    // Cleanup
    return () => {
      mediaQuery1024.removeEventListener("change", handleMediaQueryChange)
      mediaQuery640.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return { isAbove1024, isAbove640 }
}
