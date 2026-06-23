import './Footer.css'
import CityName from './CityName'

const PhoneIcon    = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11 19.79 19.79 0 0 1 1.58 2.26 2 2 0 0 1 3.55 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const EmailIcon    = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
const InstaIcon    = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const LocationIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>

export default function Footer() {
  return (
    <footer className="footer" id="contact">

      {/* ── CTA banner ── */}
      <div className="footer-cta-wrap">
        <div className="container">
          <div className="footer-cta">
            <div className="footer-cta-text">
              <p className="footer-slogan">"Perfekcja w każdym detalu"</p>
              <h2 className="footer-cta-title">
                Gotowy na <span>transformację</span> swojego auta?
              </h2>
            </div>
            <a href="tel:793088929" className="btn-primary footer-cta-btn">
              <PhoneIcon />
              Umów się: 793 088 929
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-col footer-col--brand">
              <div className="footer-brand">
                {/* Mini rooster */}
                <svg width="32" height="38" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13 56 Q-2 36 7 18 Q15 34 21 50" fill="#C9A84C"/>
                  <path d="M17 63 Q0 48 5 28 Q14 44 23 59" fill="#C9A84C"/>
                  <ellipse cx="46" cy="70" rx="27" ry="21" fill="#C9A84C"/>
                  <path d="M24 61 Q17 74 26 80 Q35 73 36 61 Q30 59 24 61" fill="#9A7B30" opacity="0.55"/>
                  <path d="M57 51 C63 55 65 63 63 69 C59 73 52 74 47 72" fill="#C9A84C"/>
                  <circle cx="63" cy="39" r="14" fill="#C9A84C"/>
                  <path d="M54 27 C56 19 60 21 59 26 C62 18 66 20 64 25 C68 17 72 20 70 26 C67 24 61 24 54 27Z" fill="#C9A84C"/>
                  <path d="M75 36 L84 39 L75 42Z" fill="#9A7B30"/>
                  <circle cx="69" cy="37" r="2.5" fill="#080808"/>
                  <circle cx="70" cy="36" r="0.8" fill="rgba(255,255,255,0.7)"/>
                  <path d="M75 42 C79 48 75 53 71 51 C72 46 74 43 75 42Z" fill="#9A7B30"/>
                  <rect x="39" y="89" width="5" height="7" rx="2" fill="#C9A84C"/>
                  <rect x="51" y="89" width="5" height="7" rx="2" fill="#C9A84C"/>
                </svg>
                <span className="footer-brand-name">KURA DETAILING</span>
              </div>
              <p className="footer-tagline">Profesjonalna pielęgnacja<br/>Twojego samochodu</p>
              <p className="footer-brand-desc">
                Auto detailing premium w Ząbkowicach Śląskich. Specjalizujemy się w myciu ręcznym
                karoserii, praniu tapicerki, ceramice samochodowej
                i kompleksowej pielęgnacji wnętrza.
              </p>
            </div>

            {/* Nav column */}
            <div className="footer-col">
              <h3 className="footer-col-title">Nawigacja</h3>
              <ul className="footer-nav">
                <li><a href="#hero"     className="footer-nav-link">Strona Główna</a></li>
                <li><a href="#services" className="footer-nav-link">Co Oferujemy</a></li>
                <li><a href="#packages" className="footer-nav-link">Pakiety</a></li>
                <li><a href="#loyalty"  className="footer-nav-link">Karta Lojalnościowa</a></li>
              </ul>
            </div>

            {/* Contact column */}
            <div className="footer-col">
              <h3 className="footer-col-title">Kontakt</h3>
              <address className="footer-contacts" style={{ fontStyle: 'normal' }}>
                <div className="footer-contacts-inner">
                  <span className="footer-contact-icon"><PhoneIcon /></span>
                  <a href="tel:+48793088929" className="footer-contact-link">793 088 929</a>
                </div>
                <div className="footer-contacts-inner">
                  <span className="footer-contact-icon"><EmailIcon /></span>
                  <a href="mailto:detailingkura@gmail.com" className="footer-contact-link">detailingkura@gmail.com</a>
                </div>
                <div className="footer-contacts-inner">
                  <span className="footer-contact-icon"><InstaIcon /></span>
                  <a href="https://instagram.com/d1kura" target="_blank" rel="noopener noreferrer" className="footer-contact-link">D1 KURA (Instagram)</a>
                </div>
                <div className="footer-contacts-inner">
                  <span className="footer-contact-icon"><LocationIcon /></span>
                  <span className="footer-contact-text">
                    <CityName />, Dolny śląsk
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-thanks">Dziękujemy za zaufanie!</p>
            <p className="footer-copy">© 2025 Kura Detailing. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
