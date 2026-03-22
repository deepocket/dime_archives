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
    <div className={`relative flex items-center mb-6 md:mb-10 ${
      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
    } flex-row`}>
      {/* Timeline dot */}
      <div className="absolute left-[20px] md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-gold rounded-full border-[3px] md:border-4 border-bg-cream transform -translate-x-1/2 z-10" />

      {/* Spacer for desktop */}
      <div className="hidden md:block md:w-1/2" />

      {/* Card */}
      <motion.div
        className={`ml-10 mr-2 md:ml-0 md:mr-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
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
        <div className="bg-white-off rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gold/10">
          {/* Date */}
          <p className="font-special text-gold text-xs md:text-sm mb-2">
            {milestone.date}
          </p>

          {/* Text */}
          <p className="font-courier text-green-dark text-sm md:text-base leading-relaxed">
            {milestone.text}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
