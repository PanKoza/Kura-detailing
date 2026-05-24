import { useState, useCallback } from 'react'
import './Hero.css'

/* Gold particles: x/y as % of hero, dur in seconds */
const PARTICLES = [
  { size: 2.5, x: 12,  y: 18, delay: 0,   dur: 9  },
  { size: 2,   x: 78,  y: 12, delay: 1.6, dur: 12 },
  { size: 3.5, x: 88,  y: 55, delay: 0.9, dur: 8  },
  { size: 2,   x: 32,  y: 68, delay: 2.8, dur: 11 },
  { size: 3,   x: 62,  y: 78, delay: 1.4, dur: 7  },
  { size: 2,   x: 48,  y: 38, delay: 3.2, dur: 10 },
  { size: 4,   x: 92,  y: 28, delay: 0.4, dur: 13 },
  { size: 2,   x: 22,  y: 82, delay: 2.1, dur: 9  },
  { size: 1.5, x: 55,  y: 14, delay: 1,   dur: 14 },
  { size: 2.5, x: 70,  y: 65, delay: 3.8, dur: 8  },
]

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    })
  }, [])
  return (
    <section className="hero" id="hero" onMouseMove={onMouseMove}>
      {/* Background layers */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-overlay" />
        <div className="hero-bg-glow" />
        <div className="hero-bg-grain" />

        {/* Interactive mouse-follow glow */}
        <div
          className="hero-cursor-glow"
          style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }}
        />

        {/* Light sweep line */}
        <div className="hero-sweep" />

        {/* Floating gold particles */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            aria-hidden="true"
            style={{
              width:  `${p.size}px`,
              height: `${p.size}px`,
              left:   `${p.x}%`,
              top:    `${p.y}%`,
              '--dur':   `${p.dur}s`,
              '--delay': `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        {/* Location badge */}
        <div className="hero-badge hero-anim-1">
          <span className="hero-badge-dot" />
          Ząbkowice Śląskie
        </div>

        {/* Headline — H1 with primary keyword */}
        <h1 className="hero-title">
          <span className="hero-title-script hero-anim-2">Premium</span>
          <span className="hero-title-main   hero-anim-3">AUTO DETAILING</span>
          <span className="hero-title-sub    hero-anim-4">Ząbkowice Śląskie</span>
        </h1>

        <p className="hero-desc hero-anim-5">
          Profesjonalny detailing samochodowy w Ząbkowicach Śląskich – mycie ręczne
          karoserii, pranie tapicerki, ceramika samochodowa i pełne czyszczenie wnętrza.
          Przywrócimy Twojemu autu blask i perfekcyjny wygląd!
        </p>

        {/* CTAs */}
        <div className="hero-actions hero-anim-6">
          <a href="#contact" className="btn-primary hero-btn">
            Umów się na wizytę
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#packages" className="btn-outline">Zobacz pakiety</a>
        </div>

        {/* Stats bar */}
        <div className="hero-stats hero-anim-7" aria-label="Informacje o firmie">
          <div className="hero-stat">
            <strong className="hero-stat-value">100%</strong>
            <span className="hero-stat-label">Satysfakcji</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <strong className="hero-stat-value">Premium</strong>
            <span className="hero-stat-label">Jakość usług</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <strong className="hero-stat-value">D1·KURA</strong>
            <span className="hero-stat-label">Instagram</span>
          </div>
        </div>
      </div>

      {/* Vertical scroll hint */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Odkryj więcej</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
