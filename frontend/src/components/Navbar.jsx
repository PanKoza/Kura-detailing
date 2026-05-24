import { useState, useEffect } from 'react'
import './Navbar.css'

const RoosterIcon = () => (
  <svg className="navbar-rooster" width="38" height="46" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Tail feathers */}
    <path d="M13 56 Q-2 36 7 18 Q15 34 21 50" fill="#C9A84C"/>
    <path d="M17 63 Q0 48 5 28 Q14 44 23 59" fill="#C9A84C"/>
    {/* Body */}
    <ellipse cx="46" cy="70" rx="27" ry="21" fill="#C9A84C"/>
    {/* Wing shadow */}
    <path d="M24 61 Q17 74 26 80 Q35 73 36 61 Q30 59 24 61" fill="#9A7B30" opacity="0.55"/>
    {/* Neck */}
    <path d="M57 51 C63 55 65 63 63 69 C59 73 52 74 47 72" fill="#C9A84C"/>
    {/* Head */}
    <circle cx="63" cy="39" r="14" fill="#C9A84C"/>
    {/* Comb */}
    <path d="M54 27 C56 19 60 21 59 26 C62 18 66 20 64 25 C68 17 72 20 70 26 C67 24 61 24 54 27Z" fill="#C9A84C"/>
    {/* Beak */}
    <path d="M75 36 L84 39 L75 42Z" fill="#9A7B30"/>
    {/* Eye */}
    <circle cx="69" cy="37" r="2.5" fill="#080808"/>
    <circle cx="70" cy="36" r="0.8" fill="rgba(255,255,255,0.7)"/>
    {/* Wattle */}
    <path d="M75 42 C79 48 75 53 71 51 C72 46 74 43 75 42Z" fill="#9A7B30"/>
    {/* Legs */}
    <rect x="39" y="89" width="5" height="7" rx="2" fill="#C9A84C"/>
    <rect x="51" y="89" width="5" height="7" rx="2" fill="#C9A84C"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={close}>
          <RoosterIcon />
          <span className="navbar-brand-name">KURA DETAILING</span>
        </a>

        <nav className="navbar-nav" aria-label="Główna nawigacja">
          <a href="#services" className="navbar-link">Usługi</a>
          <a href="#packages" className="navbar-link">Pakiety</a>
          <a href="#faq"      className="navbar-link">FAQ</a>
          <a href="#loyalty"  className="navbar-link">Karta Lojalnościowa</a>
          <a href="#contact"  className="navbar-link">Kontakt</a>
        </nav>

        <a href="#contact" className="btn-primary navbar-cta">Umów się</a>

        <button
          className={`navbar-hamburger${menuOpen ? ' navbar-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar-mobile" aria-label="Menu mobilne">
          <a href="#services" className="navbar-mobile-link" onClick={close}>Usługi</a>
          <a href="#packages" className="navbar-mobile-link" onClick={close}>Pakiety</a>
          <a href="#faq"      className="navbar-mobile-link" onClick={close}>FAQ</a>
          <a href="#loyalty"  className="navbar-mobile-link" onClick={close}>Karta Lojalnościowa</a>
          <a href="#contact"  className="navbar-mobile-link" onClick={close}>Kontakt</a>
          <a href="#contact" className="btn-primary" onClick={close} style={{ width: '100%', justifyContent: 'center' }}>
            Umów się
          </a>
        </nav>
      )}
    </header>
  )
}
