import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 🍓 IMAGEN HERO de fondo */}
      <img
        src="/berry.png"
        alt="Fresas con crema"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradiente premium */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-cream/95 via-cream/80 to-transparent
          dark:from-night/95 dark:via-night/80 dark:to-transparent
        "
      />

      {/* Detalles decorativos flotantes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-strawberry/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-blush/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENIDO principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-strawberry/10 dark:bg-strawberry/20 text-strawberry px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-strawberry rounded-full animate-pulse" />
            Disponibles a la salida del cole
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cocoa dark:text-cream leading-[1.1] mb-6"
          >
            Fresas con crema
            <br />
            <span className="text-strawberry">hechas con amor</span>
            <span className="inline-block ml-2 animate-bounce">🍓</span>
          </motion.h1>

          {/* Frases rotativas */}
          <div className="h-10 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="text-cocoa/70 dark:text-cream/70 text-lg sm:text-xl"
              >
                {frases[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="
                group relative inline-flex items-center gap-2
                bg-strawberry text-white
                px-8 py-4 rounded-full
                font-semibold text-lg
                shadow-xl shadow-strawberry/30
                hover:shadow-2xl hover:shadow-strawberry/40
                hover:-translate-y-0.5
                transition-all duration-300
                overflow-hidden
              "
            >
              <span className="relative z-10">Ver Menú</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-strawberry opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="https://wa.me/593981217023?text=Hola%20quiero%20fresas%20con%20crema%20🍓"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-white/80 dark:bg-nightSoft/80 backdrop-blur-sm
                text-cocoa dark:text-cream
                px-8 py-4 rounded-full
                font-semibold text-lg
                border-2 border-strawberry/20
                hover:border-strawberry/50
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              <img src="/social.png" alt="WhatsApp" className="w-5 h-5" />
              Pedir ahora
            </a>
          </motion.div>

          {/* Stats mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "$1.50", label: "Desde" },
              { value: "100%", label: "Fresco" },
              { value: "🍓", label: "Natural" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-strawberry">{stat.value}</p>
                <p className="text-xs text-cocoa/60 dark:text-cream/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-strawberry/40 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-strawberry rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
