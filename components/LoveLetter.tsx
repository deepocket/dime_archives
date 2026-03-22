'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function LoveLetter() {
  return (
    <section className="py-20 px-6 bg-green-dark">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-playfair italic text-bg-cream text-3xl md:text-5xl mb-4">
          Carta para ti
        </h2>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="letter-paper rounded-lg p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="font-courier text-black-soft text-base md:text-lg leading-loose space-y-6">
            <p className="font-playfair italic text-green-dark text-xl md:text-2xl">
              Sol,
            </p>

            <p>
              Estaré eternamente agradecido contigo, siempre.
            </p>

            <p>
              Quisiera haber sido esa persona que te acompañará en todo tu camino. Anhelo con mi alma tener una oportunidad de poder hablar de vuelta como antes.
            </p>

            <p>
              Gracias por dejarme cuidarte. Por aprender juntos. Por reírnos tanto. Por platicar como nunca. Y por hacerme tan, pero tan, pero tan feliz.
            </p>

            <p>
              Fui el hombre más afortunado de la tierra...
            </p>

            <p>
              Bueno, lo sigo siendo, porque te conocí.
            </p>

            <motion.p
              className="font-playfair italic text-green-dark text-xl md:text-2xl text-right mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              —B
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
