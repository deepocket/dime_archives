'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-green-dark py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <Image
          src="/logo.png"
          alt="Dime Archives"
          width={60}
          height={60}
          className="w-12 h-12 object-contain opacity-80"
        />

        <p className="font-courier text-bg-cream/60 text-sm text-center">
          hecho con amor por B &mdash; 2024-2026
        </p>

        <p className="font-courier text-gold/50 text-xs">
          y contando...
        </p>
      </div>
    </footer>
  )
}
