'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const specs = [
  { icon: '⚙️', label: 'Chip A18 Pro', detail: '6 núcleos CPU, 5 núcleos GPU' },
  { icon: '🧠', label: '8 GB', detail: 'Memoria unificada' },
  { icon: '💾', label: '512 GB SSD', detail: 'Con Touch ID' },
  { icon: '💻', label: 'Liquid Retina 13"', detail: '1,000 millones de colores' },
  { icon: '🔋', label: '16 horas', detail: 'De batería' },
  { icon: '🤫', label: 'Sin ventilador', detail: 'Silencio total' },
  { icon: '📡', label: 'Wi-Fi 6E', detail: '+ Bluetooth 6' },
  { icon: '🪣', label: '1.22 kg', detail: 'Ultraligera' },
]

export default function WhyThisMac() {
  return (
    <section className="py-20 px-6 bg-cream-warm">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-playfair italic text-green-dark text-3xl md:text-5xl mb-4">
          La elegí pensando en ti
        </h2>
      </ScrollReveal>

      {/* Narrative text */}
      <div className="max-w-2xl mx-auto mb-20">
        <ScrollReveal>
          <div className="font-courier text-black-soft/90 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Sé que para tu estilo de vida, esta es 100% la mejor laptop del mercado. La MacBook Neo tiene el chip A18 Pro, 8 GB de RAM y 512 GB de almacenamiento. Es silenciosa, hermosa y potente.
            </p>
            <p>
              Mi meta desde hace muchos meses fue comprarte una laptop, y por fin se pudo. Estoy súper emocionado de lo que vas a lograr con esta compu.
            </p>
            <p>
              Vas a poder usar Claude Code para programar, investigar súper rápido, usar Excel para tus proyectos. Se ve súper chibi kawaii — el color es precioso.
            </p>
            <p>
              Vas a poder ver pelis súper agusto, escuchar música, editar las fotos de tu bazar, encontrar recetas de cocina, hacer ofertas de trabajo, administrar tus emprendimientos, ver tutoriales de yoga, ver tus fotos siendo modelo, rutinas de gym y mucho mucho más.
            </p>
            <p className="text-green-dark font-bold">
              Vas a cumplir miles de sueños. Vas a viajar muchísimo. Vas a conocer nuevas personas y culturas. Vas a ser súper feliz. Y vas a ser la mejor mujer del mundo.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Specs */}
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="font-special text-gold text-lg">MacBook Neo</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="text-center p-4 md:p-6 bg-white-off/60 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <span className="text-3xl mb-2 block">{spec.icon}</span>
              <p className="font-playfair italic text-green-dark text-sm md:text-base font-semibold">
                {spec.label}
              </p>
              <p className="font-courier text-black-soft/60 text-xs md:text-sm mt-1">
                {spec.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
