'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RunawayButton from './RunawayButton'

export default function Hero() {
  const scrollToContent = () => {
    const timeline = document.getElementById('timeline')
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative gold dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-gold opacity-20 text-xs"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          >
            \u2726
          </motion.span>
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-8"
      >
        <Image
          src="/logo.png"
          alt="Dime Archives"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          priority
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-playfair italic text-green-dark text-4xl md:text-6xl lg:text-7xl text-center leading-tight mb-4"
      >
        Felicidades por tu nueva compu
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="font-courier text-green-medium text-lg md:text-xl mb-12 text-center"
      >
        \u2014 un regalo de B para Sol
      </motion.p>

      {/* Accept button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-col items-center gap-6 w-full max-w-md"
      >
        <button
          onClick={scrollToContent}
          className="px-8 py-4 bg-green-dark text-bg-cream font-courier rounded-lg text-lg hover:bg-green-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          \u00a1Gracias! Me encanta \u2661
        </button>

        {/* Runaway button */}
        <RunawayButton />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-dark/30 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-green-dark/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
