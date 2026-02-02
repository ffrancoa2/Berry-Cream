import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        relative
        w-14 h-7
        rounded-full
        bg-strawberry/30
        dark:bg-cream/20
        transition-colors
        duration-300
      "
    >
      {/* PUNTO */}
      <span
        className={`
          absolute top-1
          w-5 h-5
          rounded-full
          bg-strawberry
          flex items-center justify-center
          text-xs
          transition-all duration-300
          ${dark ? "translate-x-7" : "translate-x-1"}
        `}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  )
}
