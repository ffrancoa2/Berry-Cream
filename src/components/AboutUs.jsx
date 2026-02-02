import { motion } from "framer-motion";

export default function AboutUs() {
  const features = [
    {
      title: "Hecho por estudiantes, para estudiantes",
      desc: "Entendemos lo que buscas: calidad, buen precio y un sabor increíble.",
      emoji: "🎓"
    },
    {
      title: "Personalización al máximo",
      desc: "No somos el típico vaso de siempre; aquí tú eliges el 'glow up' de tu postre con nuestros rellenos innovadores.",
      emoji: "✨"
    },
    {
      title: "Fresco y Natural",
      desc: "Usamos fresas seleccionadas cada día porque sabemos que te mereces lo mejor.",
      emoji: "🍓"
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-cream dark:bg-night text-cocoa dark:text-cream py-24 px-5 md:px-20 overflow-hidden"
    >
      {/* Fondo animado sutil */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-pink-50/20 dark:bg-strawberry/10 pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Título */}
      <motion.h2
        className="relative text-4xl md:text-5xl font-bold text-center text-strawberry dark:text-strawberry/80 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Quiénes Somos 🍓✨
      </motion.h2>

      {/* Historia */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p>
          Somos un grupo de amigos de Noveno B de la Unidad Educativa "San Francisco de Milagro" que, al igual que tú, siempre salíamos de clases buscando algo dulce, rico y que no nos dejara sin dinero para el bus. Al ver que las opciones de postres eran costosas o muy pequeñas, decidimos tomar las riendas y crear Berry & Cream.
        </p>
        <p>
          Nuestra meta es sencilla: que nadie se quede sin su postre favorito. Queremos democratizar las fresas con crema ofreciendo vasos llenos de frescura por solo $1,50, dándote el control total para que los personalices con los mejores toppings por solo $0,50 adicionales.
        </p>
      </motion.div>

      {/* Features / Por qué elegirnos */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/70 dark:bg-neutral-800/70 rounded-2xl shadow-md p-6 text-center cursor-default hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.25)] transition-transform duration-500 relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
          >
            <motion.h3
              className="text-xl font-semibold mb-2 text-strawberry dark:text-strawberry/80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {item.emoji} {item.title}
            </motion.h3>
            <motion.p className="text-cocoa dark:text-cream">
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* CTA final */}
      <motion.p
        className="mt-12 text-center text-lg md:text-xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
      </motion.p>
    </section>
  );
}
