import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-cream dark:bg-night">
      
      {/* Vasito */}
      <motion.img
        src="/glass.png"
        alt="Fresas con crema"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-28 mb-6"
      />

      {/* Texto */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-strawberry font-medium tracking-wide"
      >
        Preparando tu antojo 🍓
      </motion.p>
    </div>
  )
}
