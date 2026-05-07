import { motion } from "framer-motion";

export default function AboutUs() {
  const features = [
    {
      title: "Hecho por estudiantes",
      desc: "Entendemos lo que buscas: calidad, buen precio y un sabor increíble.",
      emoji: "🎓",
      gradient: "from-purple-400/20 to-pink-400/20",
    },
    {
      title: "100% Personalizable",
      desc: "Tú eliges el 'glow up' de tu postre con nuestros rellenos innovadores.",
      emoji: "✨",
      gradient: "from-pink-400/20 to-strawberry/20",
    },
    {
      title: "Fresco y Natural",
      desc: "Fresas seleccionadas cada día porque te mereces lo mejor.",
      emoji: "🍓",
      gradient: "from-strawberry/20 to-red-400/20",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-cream dark:bg-night text-cocoa dark:text-cream py-24 px-5 md:px-8 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-strawberry/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blush/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-strawberry/10 text-strawberry px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Nuestra historia
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cocoa dark:text-cream mb-4">
            Quiénes <span className="text-strawberry">Somos</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-strawberry to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Story section - Con layout visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Texto */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-relaxed text-cocoa/80 dark:text-cream/80">
              Somos un grupo de amigos de <strong className="text-strawberry">Noveno B</strong> de la Unidad
              Educativa "San Francisco de Milagro" que, al igual que tú, siempre salíamos de clases buscando
              algo dulce, rico y que no nos dejara sin dinero para el bus.
            </p>
            <p className="text-lg leading-relaxed text-cocoa/80 dark:text-cream/80">
              Nuestra meta es sencilla: que nadie se quede sin su postre favorito. Queremos{" "}
              <strong className="text-strawberry">democratizar las fresas con crema</strong> ofreciendo vasos
              llenos de frescura por solo <span className="font-bold text-strawberry text-xl">$1,50</span>,
              dándote el control total para que los personalices con los mejores toppings.
            </p>

            {/* Mini stats */}
            <div className="flex gap-6 pt-4">
              {[
                { icon: "🍓", text: "Fresas frescas diarias" },
                { icon: "💰", text: "Precios accesibles" },
                { icon: "💕", text: "Hecho con amor" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-cocoa/60 dark:text-cream/60">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Imagen / Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-strawberry/10">
              <img
                src="/image.png"
                alt="Berry & Cream"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-strawberry/30 to-transparent" />
            </div>
            {/* Decoración flotante */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-nightSoft rounded-2xl shadow-xl p-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-3xl">🍓</p>
              <p className="text-xs font-semibold text-cocoa dark:text-cream mt-1">100% Fresh</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features - Por qué elegirnos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className={`
                group relative
                bg-gradient-to-br ${item.gradient}
                backdrop-blur-sm
                rounded-3xl p-8
                text-center
                border border-strawberry/10
                hover:border-strawberry/30
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-strawberry/10
                transition-all duration-500
                cursor-default
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </span>
              <h3 className="text-lg font-bold mb-3 text-cocoa dark:text-cream group-hover:text-strawberry transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-cocoa/70 dark:text-cream/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
