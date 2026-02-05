import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Experience'
import Contact from '@/components/Contact'
import RobotBuddy from '@/components/RobotBuddy'
import CursorTrail from '@/components/CursorTrail'
import FloatingCode from '@/components/FloatingCode'
import InteractiveGrid from '@/components/InteractiveGrid'
import ScrollProgress from '@/components/ScrollProgress'
import MorphingBlob from '@/components/MorphingBlob'
import SoundWave from '@/components/SoundWave'

export default function Home() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <InteractiveGrid />
      <MorphingBlob />
      <FloatingCode />
      <CursorTrail />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <RobotBuddy />
      <SoundWave />
    </main>
  )
}
