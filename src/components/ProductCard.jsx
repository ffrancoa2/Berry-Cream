import { motion } from "framer-motion"
import Button from "./Button"

export default function ProductCard({ title, description, price, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-blush dark:bg-nightSoft rounded-3xl shadow-lg overflow-hidden flex flex-col h-full"
    >
      {/* Imagen del producto */}
      <div className="relative h-48 w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Contenido de la Card */}
      <div className="p-6 flex flex-col flex-grow text-cocoa dark:text-cream">
        <h3 className="font-bold text-xl mb-2 text-strawberry dark:text-strawberryLight">
          {title}
        </h3>
        <p className="text-sm mb-4 flex-grow opacity-90">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-black text-strawberry">
            ${price}
          </span>
          <Button text="Agregar 🍓" />
        </div>
      </div>
    </motion.div>
  )
}