import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import MainLayout from "../layouts/MainLayout"
import AboutUs from "../components/AboutUs"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <MainLayout>

      {/* INICIO */}
      <section id="inicio">
        <Hero />
      </section>

      {/* SOBRE NOSOTRAS */}
      <section id="about">
        <AboutUs />
      </section>

      {/* MENÚ */}
      <section
        id="menu"
        className="relative bg-cream dark:bg-night px-6 lg:px-8 py-24 transition-colors duration-500 overflow-hidden"
      >
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-strawberry/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header de sección */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-strawberry/10 text-strawberry px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Lo más pedido
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-cocoa dark:text-cream mb-4">
              Nuestro <span className="text-strawberry">Menú</span>
            </h2>
            <p className="text-cocoa/60 dark:text-cream/50 max-w-md mx-auto">
              Elige tu favorito y personalízalo a tu gusto 🍓
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-strawberry to-pink-400 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              title="Berry Classic 🍓"
              description="Vaso de fresas seleccionadas con nuestra crema especial secreta. Frescura total a la salida del cole. El favorito de todos."
              price="1.50"
              image="/image.png"
            />

            <ProductCard
              title="Topping Explosivo ✨"
              description="Personaliza tu postre con chocolate, galletas u Oreos. ¡Hazlo único y dale ese toque especial que lo hace irresistible!"
              price="0.50"
              image="/toppings.png"
            />
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { icon: "🍓", text: "Fresas frescas diarias" },
              { icon: "🧊", text: "Crema artesanal" },
              { icon: "🎨", text: "Toppings variados" },
              { icon: "💕", text: "Hecho con amor" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-cocoa/50 dark:text-cream/40"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACTO — el footer ya incluye la sección de contacto */}
      <section id="contacto" className="h-0 overflow-hidden" />

    </MainLayout>
  )
}
