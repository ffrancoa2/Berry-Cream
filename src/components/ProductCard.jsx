import { motion } from "framer-motion"

export default function ProductCard({ title, description, price, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        group relative
        bg-white/70 dark:bg-nightSoft/70
        backdrop-blur-sm
        rounded-3xl
        overflow-hidden
        shadow-lg shadow-strawberry/5
        hover:shadow-2xl hover:shadow-strawberry/15
        hover:-translate-y-2
        transition-all duration-500
        flex flex-col h-full
        border border-strawberry/5
      "
    >
      {/* Imagen del producto */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge de precio */}
        <div className="absolute top-4 right-4 bg-strawberry text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-strawberry/30">
          ${price}
        </div>
      </div>

      {/* Contenido de la Card */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-cocoa dark:text-cream group-hover:text-strawberry transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-cocoa/70 dark:text-cream/60 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <a
          href="https://wa.me/593981217023?text=Hola%20quiero%20fresas%20con%20crema%20🍓"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full text-center
            bg-gradient-to-r from-strawberry to-pink-400
            text-white
            py-3 rounded-2xl
            font-semibold
            shadow-md shadow-strawberry/20
            hover:shadow-xl hover:shadow-strawberry/30
            active:scale-[0.98]
            transition-all duration-300
            flex items-center justify-center gap-2
          "
        >
          <img src="/social.png" alt="" className="w-4 h-4 brightness-[10]" />
          Pedir por WhatsApp
        </a>
      </div>
    </motion.div>
  )
}