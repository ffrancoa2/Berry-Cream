import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Button from "./Button"

const frases = [
  "Dulces, frescas y totalmente irresistibles 💕",
  "Hechas al momento, con amor real 🍓",
  "El antojo que siempre vuelve ✨",
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % frases.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
      "
    >
      {/* 🍓 IMAGEN HERO */}
      <img
        src="/src/assets/berry.png"
        alt="Fresas con crema"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-90
          dark:opacity-70
        "
      />

      {/* overlay suave */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-cream/80
          via-cream/60
          to-cream/90
          dark:from-night/80
          dark:via-night/60
          dark:to-night/90
        "
      />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-strawberry leading-tight">
          Fresas con crema <br /> hechas con amor 🍓
        </h1>

        {/* 💗 micro historia */}
        <div className="mt-4 h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6 }}
              className="text-cocoa dark:text-cream text-base sm:text-lg"
            >
              {frases[index]}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

      {/* 🍓 detalle flotante */}
      <motion.span
        className="absolute bottom-16 right-10 text-3xl opacity-40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🍓
      </motion.span>
    </section>
  )
}
