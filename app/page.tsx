import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import Timeline from '@/components/Timeline'
import MacTips from '@/components/MacTips'
import WhyThisMac from '@/components/WhyThisMac'
import LoveLetter from '@/components/LoveLetter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <MacTips />
      <SectionDivider />
      <WhyThisMac />
      <LoveLetter />
      <Footer />
    </main>
  )
}
