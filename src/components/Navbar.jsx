import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DarkModeToggle from "./DarkModeToggle"

export default function Navbar() {
  const [active, setActive] = useState("inicio")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "about", label: "Nosotras" },
    { id: "menu", label: "Menú" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 w-full z-50
        transition-all duration-500
        ${scrolled
          ? "bg-cream/80 dark:bg-night/80 backdrop-blur-xl shadow-lg shadow-strawberry/5"
          : "bg-cream/60 dark:bg-night/60 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">🍓</span>
          <span className="text-xl font-extrabold text-strawberry tracking-tight">
            Berry <span className="text-cocoa dark:text-cream">&</span> Cream
          </span>
        </a>

        {/* Hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-strawberry transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-strawberry transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-strawberry transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-1 text-cocoa dark:text-cream font-medium">
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                relative px-4 py-2 rounded-full text-sm
                transition-all duration-300
                ${active === item.id
                  ? "text-white bg-strawberry shadow-md shadow-strawberry/30"
                  : "hover:bg-strawberry/10 hover:text-strawberry"
                }
              `}
            >
              {item.label}
            </a>
          ))}

          <div className="ml-3 pl-3 border-l border-strawberry/20">
            <DarkModeToggle />
          </div>
        </ul>
      </div>

      {/* MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-cream/95 dark:bg-night/95 backdrop-blur-xl border-t border-strawberry/10"
          >
            <ul className="flex flex-col items-center gap-2 py-6 text-cocoa dark:text-cream">
              {links.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`
                    w-48 text-center px-6 py-3 rounded-2xl text-sm font-medium
                    transition-all duration-300
                    ${active === item.id
                      ? "text-white bg-strawberry shadow-md"
                      : "hover:bg-strawberry/10"
                    }
                  `}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-2">
                <DarkModeToggle />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
