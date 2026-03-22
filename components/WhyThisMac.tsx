'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const specs = [
  { icon: '\u2699\ufe0f', label: 'Chip A18 Pro', detail: '6 n\u00facleos CPU, 5 n\u00facleos GPU' },
  { icon: '\ud83e\udde0', label: '8 GB', detail: 'Memoria unificada' },
  { icon: '\ud83d\udcbe', label: '512 GB SSD', detail: 'Con Touch ID' },
  { icon: '\ud83d\udcbb', label: 'Liquid Retina 13"', detail: '1,000 millones de colores' },
  { icon: '\ud83d\udd0b', label: '16 horas', detail: 'De bater\u00eda' },
  { icon: '\ud83e\udd2b', label: 'Sin ventilador', detail: 'Silencio total' },
  { icon: '\ud83d\udce1', label: 'Wi-Fi 6E', detail: '+ Bluetooth 6' },
  { icon: '\ud83e\udea3', label: '1.22 kg', detail: 'Ultraligera' },
]

export default function WhyThisMac() {
  return (
    <section className="py-20 px-6 bg-cream-warm">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-playfair italic text-green-dark text-3xl md:text-5xl mb-4">
          La eleg\u00ed pensando en ti
        </h2>
      </ScrollReveal>

      {/* Narrative text */}
      <div className="max-w-2xl mx-auto mb-20">
        <ScrollReveal>
          <div className="font-courier text-black-soft/90 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              S\u00e9 que para tu estilo de vida, esta es 100% la mejor laptop del mercado. La MacBook Neo tiene el chip A18 Pro, 8 GB de RAM y 512 GB de almacenamiento. Es silenciosa, hermosa y potente.
            </p>
            <p>
              Mi meta desde hace muchos meses fue comprarte una laptop, y por fin se pudo. Estoy s\u00faper emocionado de lo que vas a lograr con esta compu.
            </p>
            <p>
              Vas a poder usar Claude Code para programar, investigar s\u00faper r\u00e1pido, usar Excel para tus proyectos. Se ve s\u00faper chibi kawaii \u2014 el color es precioso.
            </p>
            <p>
              Vas a poder ver pelis s\u00faper agusto, escuchar m\u00fasica, editar las fotos de tu bazar, encontrar recetas de cocina, hacer ofertas de trabajo, administrar tus emprendimientos, ver tutoriales de yoga, ver tus fotos siendo modelo, rutinas de gym y mucho mucho m\u00e1s.
            </p>
            <p className="text-green-dark font-bold">
              Vas a cumplir miles de sue\u00f1os. Vas a viajar much\u00edsimo. Vas a conocer nuevas personas y culturas. Vas a ser s\u00faper feliz. Y vas a ser la mejor mujer del mundo.
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
