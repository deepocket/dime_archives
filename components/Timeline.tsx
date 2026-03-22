'use client'

import ScrollReveal from './ScrollReveal'
import TimelineCard from './TimelineCard'
import { milestones } from '@/data/milestones'

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 gold-stars">
      {/* Section header */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-playfair italic text-green-dark text-3xl md:text-5xl mb-4">
          Nuestra Historia
        </h2>
        <p className="font-courier text-green-medium text-base md:text-lg">
          Cada momento contigo ha sido un regalo
        </p>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Gold line */}
        <div className="timeline-line" />

        {/* Milestone cards */}
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
