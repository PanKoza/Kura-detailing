import { useScrollReveal } from '../hooks/useScrollReveal'
import './Services.css'
import CityName from './CityName'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const SERVICES = [
  'Dokładne sprzątanie wnętrza',
  'Mycie felg i opon',
  'Czyszczenie plastików i kokpitu oraz pranie tapicerki',
  'Przygotowanie auta do sprzedaży',
  'Mycie ręczne karoserii',
  'Czyszczenie i konserwacja skóry',
  'Odświeżenie auta po zimie',
  'Woskowanie',
  'Usuwanie sierści zwierząt',
]

export default function Services() {
  const headerRef = useScrollReveal(0.2)
  const gridRef   = useScrollReveal(0.08)

  return (
    <section className="services section" id="services">
      <div className="container">
        <header className="services-header reveal-up" ref={headerRef}>
          <span className="section-label">Co Oferujemy</span>
          <h2 className="section-title">
            Usługi <span>detailingowe</span> <CityName />
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Kompleksowa pielęgnacja samochodów w Ząbkowicach Śląskich –
            od mycia ręcznego karoserii, przez pranie tapicerki,
            po ceramikę i woskowanie. Każda usługa wykonywana z najwyższą
            starannością, przy użyciu profesjonalnych środków i sprzętu.
          </p>
        </header>

        <ul className="services-grid" ref={gridRef} aria-label="Lista usług">
          {SERVICES.map((name, i) => (
            <li key={i} className="service-card reveal-up" style={{ '--si': i }}>
              <span className="service-icon">
                <CheckIcon />
              </span>
              <span className="service-name">{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative glow */}
      <div className="services-glow" aria-hidden="true" />
    </section>
  )
}
