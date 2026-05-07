import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-cocoa dark:bg-night overflow-hidden" id="contacto">
      {/* Wave decorativa */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-cream dark:fill-night"
            opacity=".5"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-cream dark:fill-night"
            opacity=".3"
          />
        </svg>
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-6 pt-24 pb-12"
      >
        <div className="bg-gradient-to-r from-strawberry to-pink-400 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-strawberry/20 relative overflow-hidden">
          {/* Burbujas decorativas */}
          <div className="absolute top-4 left-8 w-16 h-16 bg-white/10 rounded-full" />
          <div className="absolute bottom-6 right-12 w-10 h-10 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/10 rounded-full" />

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
            ¿Se te antojó? 🍓
          </h3>
          <p className="text-white/80 mb-6 relative z-10 max-w-md mx-auto">
            Haz tu pedido por WhatsApp y recíbelo fresquito a la salida del cole
          </p>
          <a
            href="https://wa.me/593981217023?text=Hola%20quiero%20fresas%20con%20crema%20🍓"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative z-10
              inline-flex items-center gap-3
              bg-white text-strawberry
              px-8 py-4 rounded-full
              font-bold text-lg
              shadow-lg
              hover:-translate-y-1 hover:shadow-xl
              active:scale-[0.98]
              transition-all duration-300
            "
          >
            <img src="/social.png" alt="WhatsApp" className="w-6 h-6" />
            Pedir ahora
          </a>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Marca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🍓</span>
            <h3 className="text-xl font-extrabold text-strawberry">
              Berry & Cream
            </h3>
          </div>
          <p className="text-sm text-cream/60 leading-relaxed">
            Dulzura que enamora, frescura que se siente. Hechas al momento
            con las mejores fresas 💕
          </p>
        </motion.div>

        {/* Navegación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="sm:text-center"
        >
          <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
            Navegación
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Inicio", href: "#inicio" },
              { label: "Nosotras", href: "#about" },
              { label: "Menú", href: "#menu" },
              { label: "Contacto", href: "#contacto" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-cream/50 hover:text-strawberry transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:text-right"
        >
          <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
            Síguenos
          </h4>

          <div className="flex sm:justify-end gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/593981217023?text=Hola%20quiero%20fresas%20con%20crema%20🍓"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-12 h-12
                bg-cream/10 rounded-xl
                flex items-center justify-center
                hover:bg-strawberry/20
                transition-all duration-300
              "
            >
              <img
                src="/social.png"
                alt="WhatsApp"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sleep_khanna"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-12 h-12
                bg-cream/10 rounded-xl
                flex items-center justify-center
                hover:bg-strawberry/20
                transition-all duration-300
              "
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10 text-center py-6 text-xs text-cream/40">
        © {currentYear} Berry & Cream · Hecho con 🍓 y mucho amor
      </div>
    </footer>
  )
}
