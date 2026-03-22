'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  'No la quiero, \u00bfd\u00f3nde la regreso?',
  'Nope, es tuya',
  'Ni lo intentes \ud83d\ude0f',
  'Te la mereces \u2728',
  'No hay devoluciones \ud83d\udeab',
  'Jajaja nice try',
  'Es tuya para siempre',
  '\u00bfSegura? Imposible',
  'Este bot\u00f3n no funciona \ud83e\udd37\u200d\u2642\ufe0f',
]

export default function RunawayButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [messageIndex, setMessageIndex] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [isGone, setIsGone] = useState(false)
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isPositioned, setIsPositioned] = useState(false)

  const moveButton = useCallback(() => {
    if (isGone) return

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (newAttempts >= 8) {
      setScale(Math.max(0, 1 - (newAttempts - 7) * 0.3))
      if (newAttempts >= 10) {
        setIsGone(true)
        return
      }
    }

    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const btnWidth = 240
    const btnHeight = 48
    const maxX = rect.width - btnWidth
    const maxY = rect.height - btnHeight

    const newX = Math.random() * Math.max(0, maxX)
    const newY = Math.random() * Math.max(0, maxY)

    setPosition({ x: newX, y: newY })
    setIsPositioned(true)
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }, [attempts, isGone])

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: '80px' }}
    >
      <AnimatePresence mode="wait">
        {isGone ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center font-courier text-gold text-lg"
          >
            Ok, me rend\u00ed. Es tuya. \ud83d\udc9b
          </motion.p>
        ) : (
          <motion.button
            ref={buttonRef}
            className="absolute px-6 py-3 border-2 border-green-dark text-green-dark font-courier rounded-lg hover:bg-green-dark/5 transition-colors whitespace-nowrap text-sm md:text-base"
            style={{
              ...(isPositioned
                ? { left: position.x, top: position.y }
                : { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }),
            }}
            animate={
              isPositioned
                ? { x: 0, y: 0, scale }
                : { scale }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onMouseEnter={moveButton}
            onTouchStart={(e) => {
              e.preventDefault()
              moveButton()
            }}
          >
            {messages[messageIndex]}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
