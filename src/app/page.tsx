import HeroSection from './components/HeroSection'
import CoupleSection from './components/CoupleSection'
import EventSection from './components/EventSection'
import StorySection from './components/StorySection'
import PhotoSection from './components/PhotoSection'
import ThankYouSection from './components/ThankYouSection'
import AngpaoSection from './components/AngpaoSection'
import NavDots from './components/NavDots'
import FloatingPetals from './components/FloatingPetals'

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <FloatingPetals />
      <NavDots />
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <StorySection />
      <PhotoSection />
      <ThankYouSection />
      <AngpaoSection />
    </main>
  )
}

