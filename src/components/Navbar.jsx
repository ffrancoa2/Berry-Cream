import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import DarkModeToggle from "./DarkModeToggle"

export default function Navbar() {
  const [active, setActive] = useState("inicio")
  const [open, setOpen] = useState(false)

  useEffect(() => {
  const sections = document.querySelectorAll("section")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  )

  sections.forEach((section) => observer.observe(section))

  // 👇 FIX CLAVE PARA AL SUBIR
  const onScroll = () => {
    if (window.scrollY < 100) {
      setActive("inicio")
    }
  }

  window.addEventListener("scroll", onScroll)

  return () => {
    observer.disconnect()
    window.removeEventListener("scroll", onScroll)
  }
}, [])

  const links = ["inicio", "about", "menu", "contacto"]

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream dark:bg-night shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-strawberry">
          🍓 Berry & Cream
        </div>

        {/* Hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-strawberry text-2xl"
        >
          ☰
        </button>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-cocoa dark:text-cream font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative flex flex-col items-center"
            >
              <span
                className={`transition-colors ${
                  active === item
                    ? "text-strawberry font-semibold"
                    : "hover:text-strawberry"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>

              {active === item && (
                <motion.span
                  layoutId="nav-dot"
                  className="w-2 h-2 bg-strawberry rounded-full mt-1"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}

          <div className="mx-4 h-5 w-px bg-strawberry/30" />
          <DarkModeToggle />
        </ul>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="md:hidden bg-cream dark:bg-night border-t border-strawberry/20">
          <ul className="flex flex-col items-center gap-6 py-6 text-cocoa dark:text-cream">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="relative flex flex-col items-center"
              >
                <span
                  className={`transition-colors ${
                    active === item
                      ? "text-strawberry font-semibold"
                      : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>

                {active === item && (
                  <motion.span
                    layoutId="nav-dot"
                    className="w-2 h-2 bg-strawberry rounded-full mt-1"
                  />
                )}
              </a>
            ))}
            <DarkModeToggle />
          </ul>
        </div>
      )}
    </nav>
  )
}
