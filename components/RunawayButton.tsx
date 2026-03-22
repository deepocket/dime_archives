'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const messages = [
  'No la quiero, \u00bfd\u00f3nde la regreso?',
  'Nope, es tuya',
  'Ni lo intentes',
  'Te la mereces',
  'No hay devoluciones',
  'Jajaja nice try',
  'Es tuya para siempre',
  'Este bot\u00f3n no funciona',
]

export default function RunawayButton() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [messageIndex, setMessageIndex] = useState(0)

  const moveButton = useCallback(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const btnWidth = 260
    const btnHeight = 52
    const padding = 16

    const newX = padding + Math.random() * Math.max(0, vw - btnWidth - padding * 2)
    const newY = padding + Math.random() * Math.max(0, vh - btnHeight - padding * 2)

    setPosition({ x: newX, y: newY })
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }, [])

  return (
    <>
      {position === null ? (
        <button
          onClick={moveButton}
          className="px-6 py-3 border-2 border-green-dark text-green-dark font-courier rounded-lg hover:bg-green-dark/5 transition-colors text-sm md:text-base"
        >
          {messages[0]}
        </button>
      ) : (
        <motion.button
          className="fixed px-6 py-3 border-2 border-green-dark text-green-dark font-courier rounded-lg bg-bg-cream hover:bg-green-dark/5 transition-colors text-sm md:text-base z-[100] shadow-lg"
          animate={{ left: position.x, top: position.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={moveButton}
        >
          {messages[messageIndex]}
        </motion.button>
      )}
    </>
  )
}
