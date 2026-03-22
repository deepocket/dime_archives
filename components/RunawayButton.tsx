'use client'

import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  'No la quiero, ¿dónde la regreso?',
  'Nope, es tuya',
  'Ni lo intentes',
  'Te la mereces',
  'No hay devoluciones',
  'Jajaja nice try',
  'Es tuya para siempre',
  'Este botón no funciona',
]

export default function RunawayButton() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isGone, setIsGone] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const moveButton = useCallback(() => {
    if (isGone) return

    // Start 5-second timer on first click
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        setIsGone(true)
      }, 5000)
    }

    const vw = window.innerWidth
    const vh = window.innerHeight
    const btnWidth = 260
    const btnHeight = 52
    const padding = 16

    const newX = padding + Math.random() * Math.max(0, vw - btnWidth - padding * 2)
    const newY = padding + Math.random() * Math.max(0, vh - btnHeight - padding * 2)

    setPosition({ x: newX, y: newY })
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }, [isGone])

  return (
    <>
      <AnimatePresence mode="wait">
        {isGone ? (
          <motion.p
            key="gone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-courier text-gold text-base md:text-lg text-center"
          >
            me rindo, es toda tuya 💛
          </motion.p>
        ) : position === null ? (
          <button
            key="initial"
            onClick={moveButton}
            className="px-6 py-3 border-2 border-green-dark text-green-dark font-courier rounded-lg hover:bg-green-dark/5 transition-colors text-sm md:text-base"
          >
            {messages[0]}
          </button>
        ) : (
          <motion.button
            key="moving"
            className="fixed px-6 py-3 border-2 border-green-dark text-green-dark font-courier rounded-lg bg-bg-cream hover:bg-green-dark/5 transition-colors text-sm md:text-base z-[100] shadow-lg"
            animate={{ left: position.x, top: position.y }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={moveButton}
          >
            {messages[messageIndex]}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
