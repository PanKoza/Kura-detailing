import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import LoyaltyCard from './components/LoyaltyCard'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <LoyaltyCard />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
