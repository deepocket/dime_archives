import { Playfair_Display, Courier_Prime, Special_Elite } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
  display: 'swap',
})

export const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special',
  display: 'swap',
})
