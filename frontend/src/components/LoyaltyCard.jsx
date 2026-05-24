import { useScrollReveal } from '../hooks/useScrollReveal'
import './LoyaltyCard.css'

const STAMPS = [1, 2, 3, 4, 5, 6]

export default function LoyaltyCard() {
  const sectionRef = useScrollReveal(0.2)

  return (
    <section className="loyalty section" id="loyalty" ref={sectionRef}>
      <div className="container">
        <div className="loyalty-card">
          {/* Top gold line */}
          <div className="loyalty-card-shimmer" aria-hidden="true" />

          {/* ── Left: branding & description ── */}
          <div className="loyalty-left">
            <div className="loyalty-brand">
              {/* Mini rooster SVG */}
              <svg width="28" height="34" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M13 56 Q-2 36 7 18 Q15 34 21 50" fill="#C9A84C"/>
                <ellipse cx="46" cy="70" rx="27" ry="21" fill="#C9A84C"/>
                <circle cx="63" cy="39" r="14" fill="#C9A84C"/>
                <path d="M54 27 C56 19 60 21 59 26 C62 18 66 20 64 25 C68 17 72 20 70 26 C67 24 61 24 54 27Z" fill="#C9A84C"/>
                <path d="M75 36 L84 39 L75 42Z" fill="#9A7B30"/>
                <circle cx="69" cy="37" r="2.5" fill="#080808"/>
              </svg>
              <span className="loyalty-brand-name">KURA DETAILING</span>
            </div>

            <span className="section-label" style={{ marginBottom: '0.5rem' }}>Program Lojalnościowy</span>
            <h2 className="loyalty-title">
              Karta <span>Lojalnościowa</span>
            </h2>
            <p className="loyalty-sub">Zbieraj pieczątki i odbierz rabat!</p>

            <p className="loyalty-fine">
              1 pieczątka za usługę o wartości min. 100 zł.<br />
              Karta nie łączy się z innymi promocjami.
            </p>
          </div>

          {/* ── Right: stamps + reward ── */}
          <div className="loyalty-right">
            <div className="loyalty-stamps" aria-label="6 pieczątek do zebrania">
              {STAMPS.map((n, i) => (
                <div key={n} className="loyalty-stamp" style={{ '--si': i }} aria-label={`Pieczątka ${n}`}>
                  <span className="loyalty-stamp-num">{n}</span>
                </div>
              ))}
            </div>

            <span className="loyalty-eq" aria-hidden="true">=</span>

            <div className="loyalty-reward">
              <span className="loyalty-discount">-50%</span>
              <span className="loyalty-reward-label">NA DOWOLNĄ</span>
              <span className="loyalty-reward-label">USŁUGĘ</span>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="loyalty-dots" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="loyalty-dot" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
