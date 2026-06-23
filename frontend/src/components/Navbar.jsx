import { useState, useEffect } from 'react'
import './Navbar.css'

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
          <img src="/logo.png" alt="Kura Detailing" className="navbar-logo" />
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
