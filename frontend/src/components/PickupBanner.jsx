import { useEffect, useRef } from 'react'
import './PickupBanner.css'

const CarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
    <circle cx="7.5" cy="17.5" r="2.5"/>
    <circle cx="16.5" cy="17.5" r="2.5"/>
  </svg>
)

const PinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function PickupBanner() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('pickup-banner--visible') },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="pickup-banner-wrap" ref={ref}>
      <div className="container">
        <div className="pickup-banner">
          {/* Animated car track */}
          <div className="pickup-track" aria-hidden="true">
            <span className="pickup-car-icon"><CarIcon /></span>
            <span className="pickup-road" />
            <span className="pickup-pin-icon"><PinIcon /></span>
          </div>

          <div className="pickup-content">
            <p className="pickup-label">Wygodna usługa</p>
            <h2 className="pickup-title">
              Dojeżdżamy po Twoje auto<br className="pickup-br" /> i odstawiamy pod wskazane miejsce
            </h2>
            <p className="pickup-desc">
              Nie musisz nigdzie jechać – nasz kierowca odbierze Twój samochód
              z domu, pracy lub innego miejsca i dostarczy go z powrotem po zakończeniu usługi.
            </p>
          </div>

          <a href="#contact" className="pickup-cta">
            Zapytaj o odbiór
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Decorative glow blobs */}
          <span className="pickup-blob pickup-blob--1" aria-hidden="true" />
          <span className="pickup-blob pickup-blob--2" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
