import { useState, useEffect } from 'react'
import './CookieConsent.css'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookieConsent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-overlay" role="dialog" aria-modal="true" aria-label="Zgoda na pliki cookie">
      <div className="cookie-popup">
        <p className="cookie-text">
          Ta strona używa plików cookie w celu zapewnienia najlepszej jakości usług.
          Możesz zaakceptować wszystkie pliki cookie lub je odrzucić.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn--reject" onClick={reject}>
            Odrzuć
          </button>
          <button className="cookie-btn cookie-btn--accept" onClick={accept}>
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  )
}
