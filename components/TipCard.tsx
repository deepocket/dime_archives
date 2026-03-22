'use client'

import { motion } from 'framer-motion'

interface TipCardProps {
  emoji: string
  title: string
  description: string
  index: number
}

export default function TipCard({ emoji, title, description, index }: TipCardProps) {
  return (
    <motion.div
      className="bg-white-off rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gold/10 hover:border-gold/25"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <span className="text-3xl mb-3 block">{emoji}</span>
      <h3 className="font-playfair italic text-green-dark text-lg mb-2">
        {title}
      </h3>
      <p className="font-courier text-black-soft/80 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
