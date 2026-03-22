'use client'

import { motion } from 'framer-motion'
import { Milestone } from '@/data/milestones'

interface TimelineCardProps {
  milestone: Milestone
  index: number
}

export default function TimelineCard({ milestone, index }: TimelineCardProps) {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex items-center mb-8 md:mb-12 ${
      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
    } flex-row`}>
      {/* Timeline dot */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-bg-cream transform -translate-x-1/2 z-10" />

      {/* Spacer for desktop */}
      <div className="hidden md:block md:w-1/2" />

      {/* Card */}
      <motion.div
        className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
        initial={{
          opacity: 0,
          x: isLeft ? -30 : 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="bg-white-off rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gold/10">
          {/* Emoji */}
          <span className="text-2xl mb-2 block">{milestone.emoji}</span>

          {/* Date */}
          <p className="font-special text-gold text-sm mb-1">
            {milestone.date}
          </p>

          {/* Title */}
          <h3 className="font-playfair italic text-green-dark text-lg md:text-xl mb-2">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="font-courier text-black-soft/80 text-sm leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
