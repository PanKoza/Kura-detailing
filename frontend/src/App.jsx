import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PickupBanner from './components/PickupBanner'
import Services from './components/Services'
import Packages from './components/Packages'
import LoyaltyCard from './components/LoyaltyCard'
import BeforeAfter from './components/BeforeAfter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PickupBanner />
        <Services />
        <Packages />
        <BeforeAfter />
        <LoyaltyCard />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
