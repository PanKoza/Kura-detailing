import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Packages.css'

const StarIcon = ({ color }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"/>
  </svg>
)

const CrownIcon = ({ color }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 18 L5.5 9 L9.5 13.5 L12 5 L14.5 13.5 L18.5 9 L21 18 Z"/>
    <rect x="3" y="19.5" width="18" height="2" rx="1" fill={color}/>
  </svg>
)

const CheckIcon = ({ color }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const PACKAGES = [
  {
    tier: 'PODSTAWOWY',
    accent: '#CD7F32',
    Icon: StarIcon,
    desc: 'Idealne odświeżenie dla Twojego auta',
    features: [
      'Odkurzanie wnętrza',
      'Czyszczenie powierzchni plastikowych',
      'Mycie szyb',
      'Ręczne mycie auta zewnątrz',
    ],
    premium: false,
  },
  {
    tier: 'STANDARD',
    accent: '#B8B8C0',
    Icon: StarIcon,
    desc: 'Kompleksowa pielęgnacja dla wymagających',
    features: [
      'Odkurzanie wnętrza',
      'Czyszczenie powierzchni plastikowych',
      'Mycie szyb',
      'Pranie tapicerki',
      'Czyszczenie skór',
      'Ręczne mycie auta zewnątrz oraz czyszczenie felg chemią',
    ],
    premium: false,
  },
  {
    tier: 'PREMIUM',
    accent: '#C9A84C',
    Icon: CrownIcon,
    desc: 'Pełna, luksusowa pielęgnacja Twojego pojazdu',
    features: [
      'Pełny detailing wnętrza oraz zabezpieczenie',
      'Nałożenie dressingu na plastikowe powierzchnie',
      'Pranie wykładziny podłogowej',
      'Mycie ręczne auta zewnątrz oraz czyszczenie felg i opon',
      'Nałożenie płynnej ceramiki',
    ],
    premium: true,
  },
]

/* ── 3D tilt card wrapper ── */
function PackageCard({ tier, accent, Icon, desc, features, premium, index }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5   // -0.5 → 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transition = 'transform 0.08s linear, box-shadow 0.3s ease, border-color 0.3s ease'
    card.style.transform  = `perspective(900px) rotateY(${x * 11}deg) rotateX(${-y * 11}deg) translateY(${premium ? '-14px' : '-7px'})`
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    card.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease'
    card.style.transform  = premium ? 'translateY(-10px)' : 'translateY(0)'
  }

  return (
    <article
      ref={cardRef}
      className={`pkg-card${premium ? ' pkg-card--premium' : ''}`}
      style={{ '--card-i': index }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {premium && <div className="pkg-badge">Najpopularniejszy</div>}

      <div className="pkg-header">
        <div className="pkg-icon" style={{ filter: `drop-shadow(0 0 10px ${accent}55)` }}>
          <Icon color={accent} />
        </div>
        <p className="pkg-label">Pakiet</p>
        <h3 className="pkg-tier" style={{ color: accent }}>{tier}</h3>
        <p className="pkg-desc">{desc}</p>
      </div>

      <hr className="pkg-divider" />

      <ul className="pkg-features" aria-label={`Usługi w pakiecie ${tier}`}>
        {features.map((f, i) => (
          <li key={i} className="pkg-feature">
            <span className="pkg-feature-icon">
              <CheckIcon color={accent} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={premium ? 'btn-primary pkg-btn' : 'btn-outline pkg-btn'}
      >
        Wybierz pakiet
      </a>
    </article>
  )
}

export default function Packages() {
  const headerRef = useScrollReveal(0.2)
  const gridRef   = useScrollReveal(0.08)

  return (
    <section className="packages section" id="packages">
      <div className="container">
        <header className="packages-header reveal-up" ref={headerRef}>
          <span className="section-label">Pakiety Detailingowe</span>
          <h2 className="section-title">Cennik auto detailingu <span>Ząbkowice Śląskie</span></h2>
          <div className="gold-divider center" />
          <p className="section-subtitle packages-subtitle">
            Dopasuj pakiet detailingowy do swoich potrzeb i ciesz się perfekcyjnym
            wyglądem swojego auta każdego dnia!
          </p>
        </header>

        <div className="packages-grid" ref={gridRef}>
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.tier} {...pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
