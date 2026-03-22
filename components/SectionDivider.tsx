'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 gap-4">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold to-transparent flex-1 max-w-[120px]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.span
        className="text-gold text-lg"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        ✦
      </motion.span>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold to-transparent flex-1 max-w-[120px]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  )
}
