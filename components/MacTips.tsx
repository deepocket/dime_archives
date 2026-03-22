'use client'

import ScrollReveal from './ScrollReveal'
import TipCard from './TipCard'
import { motion } from 'framer-motion'

const tips = [
  {
    emoji: '🔍',
    title: 'Spotlight es tu mejor amigo',
    description: 'Cmd + Espacio abre Spotlight. Busca apps, archivos, hasta operaciones matemáticas. Es como Google pero para tu compu.',
  },
  {
    emoji: '📸',
    title: 'Screenshots como pro',
    description: 'Cmd + Shift + 3 captura toda la pantalla. Cmd + Shift + 4 te deja seleccionar un área. Cmd + Shift + 5 abre opciones avanzadas.',
  },
  {
    emoji: '🖐️',
    title: 'El trackpad es mágico',
    description: 'Dos dedos para scroll. Tres dedos arriba para ver todas las ventanas. Pellizca para zoom. Desliza con dos dedos desde la derecha para notificaciones.',
  },
  {
    emoji: '📋',
    title: 'Copiar y pegar',
    description: 'Cmd + C para copiar, Cmd + V para pegar. En Mac es Cmd (⌘), no Ctrl como en Windows.',
  },
  {
    emoji: '🔄',
    title: 'Cerrar vs minimizar',
    description: 'El botón rojo cierra la ventana pero no la app. Para cerrar la app: Cmd + Q. Para cambiar entre apps: Cmd + Tab.',
  },
  {
    emoji: '💾',
    title: 'iCloud es tu nube',
    description: 'Tus fotos, documentos y notas se sincronizan automáticamente con tu iPhone. Todo conectado.',
  },
  {
    emoji: '🌙',
    title: 'Dark Mode',
    description: 'Ve a Configuración > Apariencia y activa el modo oscuro. Se ve hermoso.',
  },
  {
    emoji: '🎵',
    title: 'AirDrop',
    description: 'Comparte fotos, archivos y links entre tu Mac y tu iPhone al instante. Solo activa AirDrop en ambos dispositivos.',
  },
  {
    emoji: '📱',
    title: 'Continuidad',
    description: 'Puedes copiar algo en tu iPhone y pegarlo en tu Mac (y viceversa). También puedes contestar llamadas y mensajes desde la Mac.',
  },
  {
    emoji: '🔒',
    title: 'Touch ID',
    description: 'Tu Mac tiene Touch ID. Úsalo para desbloquear, comprar en la App Store y autocompletar contraseñas.',
  },
]

const apps = [
  { emoji: '🤖', name: 'Claude', description: 'App de IA' },
  { emoji: '📝', name: 'Coconote', description: 'Notas de reuniones con IA' },
  { emoji: '⚡', name: 'Raycast', description: 'Launcher, reemplazo de Spotlight' },
  { emoji: '🎵', name: 'Spotify', description: 'Música' },
  { emoji: '🎨', name: 'Canva', description: 'Diseño gráfico' },
  { emoji: '📊', name: 'Excel', description: 'Hojas de cálculo' },
  { emoji: '🌙', name: 'f.lux', description: 'Protección de luz azul' },
  { emoji: '⛔', name: 'Cold Turkey', description: 'Bloqueador de distracciones' },
]

const resources = [
  { title: 'Guía oficial de macOS', url: 'https://support.apple.com/es-mx/guide/mac-help/mchl3a2c2cb0/mac' },
  { title: 'Hub USB-C recomendado', url: 'https://www.amazon.com.mx/TP-Link-microSD-Compatible-ChromeOS-UH7020C/dp/B0DT1MB534/ref=asc_df_B0DT1MB534?mcid=6c539b7f66433cc29b81e4e6fe6f0ec9&tag=gledskshopmx-20&linkCode=df0&hvadid=730033385251&hvpos=&hvnetw=g&hvrand=17933610371124177936&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9211336&hvtargid=pla-2400803934423&hvocijid=17933610371124177936-B0DT1MB534-&hvexpln=0&language=es_MX&th=1' },
  { title: 'Travel Organizer para tu Mac', url: 'https://www.apple.com/shop/product/hrjm2zm/a/bellroy-travel-organizer-black?fnode=8cb76d623f8afdece31b8194d98b558cea52f77e7c000d7b8be709ac4db11e5000c013eca64250a3619806305a2b4d48838af4b837a764e2d7bc21ad9090be9e4252c250493b61fa817df8e22dd517ed8b99d2ebb9aa7d7d5ff057f8c1f3b289c9e746005a2f6cfb57f4f9670e5018e8&fs=f%3Dmacbookneoa18pro%26fh%3D4592%252Bd63cbf' },
  { title: 'Tips para tu nueva Mac (video)', url: 'https://youtu.be/Kft9Y33oc2I?si=0Tszm-3A-1HlSSdL' },
  { title: 'Atajos de teclado esenciales (video)', url: 'https://youtu.be/KYXnw8SLtFc?si=up67r7iJBSUg07U2' },
]

export default function MacTips() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <ScrollReveal className="text-center mb-12 md:mb-16">
        <h2 className="font-playfair italic text-green-dark text-3xl md:text-5xl">
          Tu nueva vida en Mac
        </h2>
      </ScrollReveal>

      {/* Tips grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {tips.map((tip, index) => (
          <TipCard
            key={index}
            emoji={tip.emoji}
            title={tip.title}
            description={tip.description}
            index={index}
          />
        ))}
      </div>

      {/* Best Apps */}
      <div className="max-w-5xl mx-auto mt-20">
        <ScrollReveal className="text-center mb-10">
          <h3 className="font-playfair italic text-green-dark text-2xl md:text-4xl">
            Las mejores apps
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="bg-white-off rounded-xl p-4 md:p-5 text-center shadow-sm border border-gold/10 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="text-2xl md:text-3xl block mb-2">{app.emoji}</span>
              <p className="font-playfair italic text-green-dark text-sm md:text-base font-semibold">
                {app.name}
              </p>
              <p className="font-courier text-black-soft/60 text-xs mt-1">
                {app.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-3xl mx-auto mt-20">
        <ScrollReveal className="text-center mb-10">
          <h3 className="font-playfair italic text-green-dark text-2xl md:text-4xl">
            Recursos útiles
          </h3>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white-off rounded-xl p-4 md:p-5 shadow-sm border border-gold/10 hover:shadow-md hover:border-gold/30 transition-all group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-courier text-green-dark text-sm md:text-base group-hover:text-green-medium transition-colors">
                  {resource.title}
                </p>
                <span className="text-gold text-lg shrink-0 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
