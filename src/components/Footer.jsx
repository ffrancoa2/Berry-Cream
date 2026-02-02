import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-blush dark:bg-night mt-16 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* Marca */}
        <div>
          <h3 className="text-2xl font-extrabold text-strawberry">
            🍓 Berry & Cream
          </h3>
          <p className="mt-2 text-sm text-cocoa dark:text-cream/80">
            Dulzura que enamora, frescura que se siente 💕
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold text-cocoa dark:text-cream mb-3">
            Navegación
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-strawberry cursor-pointer transition">Inicio</li>
            <li className="hover:text-strawberry cursor-pointer transition">Menú</li>
            <li className="hover:text-strawberry cursor-pointer transition">Contacto</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold text-cocoa dark:text-cream mb-3">
            Síguenos
          </h4>

          <div className="flex justify-center sm:justify-start gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/59381217023?text=Hola%20quiero%20fresas%20con%20crema%20🍓"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/social.png"
                alt="WhatsApp"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sleep_khanna"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* TikTok (aún no activo) */}
            {/* 
            <img
              src="/icons/tiktok.png"
              alt="TikTok"
              className="w-8 h-8 opacity-40"
            />
            */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-strawberry/20 text-center py-4 text-sm text-cocoa dark:text-cream/70">
        © {new Date().getFullYear()} Berry & Cream . Hecho con amor 🍓
      </div>
    </motion.footer>
  )
}
