import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Packages.css'
import CityName from './CityName'

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

/* ── Service feature icons ── */
const WindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2"/>
    <path d="M10.59 19.41A2 2 0 1 0 12 16H2"/>
    <path d="M14.5 7A2.5 2.5 0 1 1 17 12H2"/>
  </svg>
)

const WandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 4V2"/>
    <path d="M15 16v-2"/>
    <path d="M8 9h2"/>
    <path d="M20 9h2"/>
    <path d="M17.8 11.8 19 13"/>
    <path d="M15 9h.01"/>
    <path d="M17.8 6.2 19 5"/>
    <path d="m3 21 9-9"/>
    <path d="M12.2 6.2 11 5"/>
  </svg>
)

const GlassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <path d="M3 10h18M10 4v16"/>
    <circle cx="16" cy="7" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const DropletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

const SeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="9" rx="2"/>
    <path d="M2 13h20v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z"/>
    <path d="M6 20v2M18 20v2"/>
  </svg>
)

const FeatherIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
    <path d="M16 8L2 22M17.5 15H9"/>
  </svg>
)

const WheelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="2" x2="12" y2="9"/>
    <line x1="12" y1="15" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="9" y2="12"/>
    <line x1="15" y1="12" x2="22" y2="12"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/>
  </svg>
)

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
)

const PACKAGES = [
  {
    tier: 'PODSTAWOWY',
    accent: '#CD7F32',
    Icon: StarIcon,
    desc: 'Idealne odświeżenie dla Twojego auta',
    features: [
      { label: 'Odkurzanie wnętrza',                    Icon: WindIcon    },
      { label: 'Czyszczenie powierzchni plastikowych',   Icon: WandIcon    },
      { label: 'Mycie szyb',                             Icon: GlassIcon   },
      { label: 'Ręczne mycie auta zewnątrz',             Icon: DropletIcon },
    ],
    premium: false,
  },
  {
    tier: 'STANDARD',
    accent: '#B8B8C0',
    Icon: StarIcon,
    desc: 'Kompleksowa pielęgnacja dla wymagających',
    features: [
      { label: 'Odkurzanie wnętrza',                                          Icon: WindIcon    },
      { label: 'Czyszczenie powierzchni plastikowych',                        Icon: WandIcon    },
      { label: 'Mycie szyb',                                                  Icon: GlassIcon   },
      { label: 'Pranie tapicerki',                                            Icon: SeatIcon    },
      { label: 'Czyszczenie skór',                                            Icon: FeatherIcon },
      { label: 'Ręczne mycie auta zewnątrz oraz czyszczenie felg chemią',     Icon: WheelIcon   },
    ],
    premium: false,
  },
  {
    tier: 'PREMIUM',
    accent: '#C9A84C',
    Icon: CrownIcon,
    desc: 'Pełna, luksusowa pielęgnacja Twojego pojazdu',
    features: [
      { label: 'Pełny detailing wnętrza oraz zabezpieczenie',                     Icon: SparkleIcon },
      { label: 'Nałożenie dressingu na plastikowe powierzchnie',                  Icon: WandIcon    },
      { label: 'Pranie wykładziny podłogowej',                                    Icon: GridIcon    },
      { label: 'Mycie ręczne auta zewnątrz oraz czyszczenie felg i opon',         Icon: WheelIcon   },
      { label: 'Nałożenie płynnej ceramiki',                                      Icon: ShieldIcon  },
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
            <span className="pkg-feature-icon" style={{ color: accent }}>
              <f.Icon />
            </span>
            {f.label}
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
          <h2 className="section-title">Cennik auto detailingu <span><CityName /></span></h2>
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
