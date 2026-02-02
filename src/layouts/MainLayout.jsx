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
      {/* ✨ Glow girly (sin imagen) */}
      <div
        className="
          fixed
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,150,190,0.25),transparent_60%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(255,105,135,0.10),transparent_60%)]
          pointer-events-none
          z-0
        "
      />

      <Navbar />

      <main className="relative z-10 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}
