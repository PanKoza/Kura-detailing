import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './FAQ.css'

const ITEMS = [
  {
    q: 'Ile kosztuje auto detailing w Ząbkowicach Śląskich?',
    a: 'Oferujemy trzy pakiety detailingowe dopasowane do budżetu. Pakiet Podstawowy obejmuje mycie zewnętrzne i czyszczenie wnętrza, Pakiet Standard zawiera dodatkowo pranie tapicerki i skór, a Pakiet Premium to pełny detailing z ceramiką samochodową. Zadzwoń pod numer 793 088 929 po dokładną wycenę.',
  },
  {
    q: 'Czym jest detailing samochodowy?',
    a: 'Detailing samochodowy to kompleksowa, profesjonalna pielęgnacja auta – zarówno zewnętrzna (mycie ręczne, polerowanie lakieru, woskowanie, ceramika) jak i wewnętrzna (pranie tapicerki, czyszczenie skór, plastików i kokpitu). Efektem jest samochód wyglądający jak nowy, z lakierem chronionym na wiele miesięcy.',
  },
  {
    q: 'Czy wykonujecie ceramikę samochodową w Ząbkowicach Śląskich?',
    a: 'Tak! W ramach Pakietu Premium nakładamy płynną ceramikę samochodową, która tworzy twardą, hydrofobową powłokę ochronną na lakierze. Chroni przed zarysowaniami, brudem, UV i czynnikami atmosferycznymi nawet przez kilka lat.',
  },
  {
    q: 'Jak długo trwa pranie tapicerki samochodowej?',
    a: 'Czas prania tapicerki zależy od stanu pojazdu i zakresu usługi – zazwyczaj od 2 do 5 godzin. Pranie foteli, dywaników i wykładziny podłogowej wykonujemy profesjonalnym sprzętem ekstrakcyjnym, który skutecznie usuwa zabrudzenia, roztocza i sierść zwierząt.',
  },
  {
    q: 'Jaki jest zasięg usług Kura Detailing?',
    a: 'Obsługujemy klientów przede wszystkim z Ząbkowic Śląskich, ale dojeżdżamy również do Kłodzka, Dzierżoniowa, Ziębic, Barda i okolicznych miejscowości na Dolnym Śląsku. Skontaktuj się z nami, aby ustalić szczegóły.',
  },
  {
    q: 'Jak przygotować auto do sprzedaży w Ząbkowicach Śląskich?',
    a: 'Pomagamy przygotować auta do sprzedaży – kompleksowe czyszczenie zewnętrzne i wewnętrzne, polerowanie lakieru, pranie tapicerki i usuwanie nieprzyjemnych zapachów. Dobrze przygotowane auto może osiągnąć wyższą cenę sprzedaży.',
  },
]

export default function FAQ() {
  const ref     = useScrollReveal(0.1)
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <header className="faq-header reveal-up" data-visible="true">
          <span className="section-label">Często zadawane pytania</span>
          <h2 className="section-title">
            FAQ – <span>Auto Detailing Ząbkowice Śląskie</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Odpowiedzi na najczęstsze pytania o detailing samochodowy, ceramikę,
            pranie tapicerki i pielęgnację aut w Ząbkowicach Śląskich.
          </p>
        </header>

        <ul className="faq-list" aria-label="Często zadawane pytania">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={i} className={`faq-item reveal-up${isOpen ? ' faq-item--open' : ''}`} style={{ '--fi': i }}>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="faq-answer"
                >
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
