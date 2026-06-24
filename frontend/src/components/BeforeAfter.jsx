import { useState, useEffect, useRef } from 'react'
import './BeforeAfter.css'

const PAIRS = [
  {
    before: '/pzed/727204688_978037495099247_30736184312604054_n.jpg',
    after:  '/po/727045638_2142709896296704_3257467841278342783_n.jpg',
  },
  {
    before: '/pzed/727235110_1350917500319094_1606877760650626767_n.jpg',
    after:  '/po/727360558_1513092983795949_5347917899227348786_n.jpg',
  },
  {
    before: '/pzed/727542362_1546506163745215_4370890530273525924_n.jpg',
    after:  '/po/727360558_1906037456729060_5260052501964739875_n.jpg',
  },
  {
    before: '/pzed/727979335_2242098646542984_3746766708637433343_n.jpg',
    after:  '/po/727497035_1736530754441624_1818264846125338565_n.jpg',
  },
  {
    before: '/pzed/728089221_1345338843676386_1978583157651530397_n.jpg',
    after:  '/po/728453317_1648230202952682_7148268258824805314_n.jpg',
  },
  {
    before: '/pzed/728152169_1345039621095989_4919628818399917284_n.jpg',
    after:  '/po/730040025_851408794367208_240715508091301327_n.jpg',
  },
  {
    before: '/pzed/728969308_2207962513357128_3937236073189254808_n.jpg',
    after:  '/po/730640053_1033633636291765_7122151355080517245_n.jpg',
  },
  {
    before: '/pzed/729790643_2123983691856075_938004957097128343_n.jpg',
    after:  '/po/730640053_2024186844851776_7479000768534759332_n.jpg',
  },
]

const INTERVAL = 4500

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [phase, setPhase] = useState('visible') // 'visible' | 'exit' | 'enter'
  const timerRef = useRef(null)
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setPhase('exit')
      setTimeout(() => {
        setActiveIdx(i => (i + 1) % PAIRS.length)
        setPhase('enter')
        setTimeout(() => setPhase('visible'), 60)
      }, 480)
    }, INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (idx) => {
    setPhase('exit')
    setTimeout(() => {
      setActiveIdx(idx)
      setPhase('enter')
      setTimeout(() => setPhase('visible'), 60)
    }, 380)
    startTimer()
  }

  const pair = PAIRS[activeIdx]

  return (
    <section className="ba-section" id="realizacje" ref={sectionRef}>
      <div className={`ba-header${inView ? ' ba-reveal' : ''}`}>
        <span className="ba-subtitle">Efekty pracy</span>
        <h2 className="ba-title">Przed &amp; Po detailingu</h2>
      </div>

      <div className={`ba-cards ba-phase-${phase}${inView ? ' ba-reveal' : ''}`}>
        {/* BEFORE */}
        <div className="ba-card ba-card-before">
          <div className="ba-card-label">
            <span className="ba-label-dot ba-label-dot-before" />
            Przed
          </div>
          <img src={pair.before} alt="Przed detailingiem" className="ba-card-img" />
          <div className="ba-card-shine" />
        </div>

        {/* Arrow divider */}
        <div className="ba-arrow">
          <div className="ba-arrow-line" />
          <svg className="ba-arrow-icon" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
            <path d="M15 20h10M21 15l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="ba-arrow-line" />
        </div>

        {/* AFTER */}
        <div className="ba-card ba-card-after">
          <div className="ba-card-label ba-card-label-gold">
            <span className="ba-label-dot ba-label-dot-after" />
            Po
          </div>
          <img src={pair.after} alt="Po detailingu" className="ba-card-img" />
          <div className="ba-card-shine" />
        </div>
      </div>

      {/* Dot navigation */}
      <div className={`ba-dots${inView ? ' ba-reveal' : ''}`}>
        {PAIRS.map((_, i) => (
          <button
            key={i}
            className={`ba-dot${i === activeIdx ? ' ba-dot-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Para ${i + 1}`}
          >
            {i === activeIdx && (
              <span
                className="ba-dot-progress"
                style={{ animationDuration: `${INTERVAL}ms` }}
              />
            )}
          </button>
        ))}
      </div>

      <p className="ba-counter">{activeIdx + 1} / {PAIRS.length}</p>
    </section>
  )
}
