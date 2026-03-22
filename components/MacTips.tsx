'use client'

import ScrollReveal from './ScrollReveal'
import TipCard from './TipCard'

const tips = [
  {
    emoji: '\ud83d\udd0d',
    title: 'Spotlight es tu mejor amigo',
    description: 'Cmd + Espacio abre Spotlight. Busca apps, archivos, hasta operaciones matem\u00e1ticas. Es como Google pero para tu compu.',
  },
  {
    emoji: '\ud83d\udcf8',
    title: 'Screenshots como pro',
    description: 'Cmd + Shift + 3 captura toda la pantalla. Cmd + Shift + 4 te deja seleccionar un \u00e1rea. Cmd + Shift + 5 abre opciones avanzadas.',
  },
  {
    emoji: '\ud83d\udd90\ufe0f',
    title: 'El trackpad es m\u00e1gico',
    description: 'Dos dedos para scroll. Tres dedos arriba para ver todas las ventanas. Pellizca para zoom. Desliza con dos dedos desde la derecha para notificaciones.',
  },
  {
    emoji: '\ud83d\udccb',
    title: 'Copiar y pegar',
    description: 'Cmd + C para copiar, Cmd + V para pegar. En Mac es Cmd (\u2318), no Ctrl como en Windows.',
  },
  {
    emoji: '\ud83d\udd04',
    title: 'Cerrar vs minimizar',
    description: 'El bot\u00f3n rojo cierra la ventana pero no la app. Para cerrar la app: Cmd + Q. Para cambiar entre apps: Cmd + Tab.',
  },
  {
    emoji: '\ud83d\udcbe',
    title: 'iCloud es tu nube',
    description: 'Tus fotos, documentos y notas se sincronizan autom\u00e1ticamente con tu iPhone. Todo conectado.',
  },
  {
    emoji: '\ud83c\udf19',
    title: 'Dark Mode',
    description: 'Ve a Configuraci\u00f3n > Apariencia y activa el modo oscuro. Se ve hermoso.',
  },
  {
    emoji: '\ud83c\udfb5',
    title: 'AirDrop',
    description: 'Comparte fotos, archivos y links entre tu Mac y tu iPhone al instante. Solo activa AirDrop en ambos dispositivos.',
  },
  {
    emoji: '\ud83d\udcf1',
    title: 'Continuidad',
    description: 'Puedes copiar algo en tu iPhone y pegarlo en tu Mac (y viceversa). Tambi\u00e9n puedes contestar llamadas y mensajes desde la Mac.',
  },
  {
    emoji: '\ud83d\udd12',
    title: 'Touch ID',
    description: 'Tu Mac tiene Touch ID. \u00dasalo para desbloquear, comprar en la App Store y autocompletar contrase\u00f1as.',
  },
]

export default function MacTips() {
  return (
    <section className="py-20 px-6">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-playfair italic text-green-dark text-3xl md:text-5xl mb-4">
          Tu nueva vida en Mac
        </h2>
        <p className="font-courier text-green-medium text-base md:text-lg">
          Todo lo que necesitas saber para empezar
        </p>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  )
}
