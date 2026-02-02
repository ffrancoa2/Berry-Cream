import { useEffect } from "react"

export default function useInteractiveBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 20
      const y = (e.clientY / window.innerHeight) * 20

      document.documentElement.style.setProperty("--bg-x", `${x}px`)
      document.documentElement.style.setProperty("--bg-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
}
