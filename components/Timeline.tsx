'use client'

import ScrollReveal from './ScrollReveal'
import TimelineCard from './TimelineCard'
import { milestones } from '@/data/milestones'

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-20 px-4 md:px-6">
      <ScrollReveal className="text-center mb-12 md:mb-16">
        <h2 className="font-playfair italic text-green-dark text-3xl md:text-5xl">
          Nuestra Historia
        </h2>
      </ScrollReveal>

      <div className="relative max-w-4xl mx-auto">
        <div className="timeline-line" />

        {milestones.map((milestone, index) => (
          <TimelineCard
            key={index}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
