import type { Metadata } from 'next'
import { playfair, courier, specialElite } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dime Archives — Para Sol',
  description: 'Una carta de amor en forma de página web. De B para Sol.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${courier.variable} ${specialElite.variable}`}>
      <body className="paper-texture">
        {children}
      </body>
    </html>
  )
}
