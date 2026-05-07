import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import useInteractiveBackground from "../hooks/useInteractiveBackground"

export default function MainLayout({ children }) {
  // interacción sutil (aunque no haya imagen, la dejamos para futuros efectos)
  useInteractiveBackground()

  return (
    <div
      className="
        relative
        min-h-screen
        bg-cream
        dark:bg-night
        transition-colors
        duration-500
      "
    >
      {/* ✨ Glow sutil de fondo */}
      <div
        className="
          fixed
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.15),transparent_50%)]
          dark:bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.08),transparent_50%)]
          pointer-events-none
          z-0
        "
      />

      {/* Segundo glow */}
      <div
        className="
          fixed
          bottom-0
          right-0
          w-1/2
          h-1/2
          bg-[radial-gradient(circle_at_bottom_right,rgba(251,207,232,0.15),transparent_60%)]
          dark:bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.05),transparent_60%)]
          pointer-events-none
          z-0
        "
      />

      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  )
}
