import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import MainLayout from "../layouts/MainLayout"
import AboutUs from "../components/AboutUs"

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
        className="bg-cream dark:bg-night px-4 py-10 transition-colors duration-500"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-strawberry mb-8">
          Nuestro Menú 🍓
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          <ProductCard
            title="Berry Classic"
            description="Vaso de fresas seleccionadas con nuestra crema especial secreta. Frescura total a la salida del cole."
            price="1.50"
            image="src/assets/image.png"
          />

          <ProductCard
            title="Topping Explosivo ✨"
            description="Personaliza tu postre con chocolate, galletas u Oreos. ¡Hazlo único!"
            price="0.50"
            image="src/assets/toppings.png"
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        {/* Aquí va tu Footer o sección de contacto */}
      </section>

    </MainLayout>
  )
}
