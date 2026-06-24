import { useState, useEffect } from 'react'
import './CityName.css'

const CITIES = ['Ząbkowice Śląskie', 'Kamieniec Ząbkowicki']

export default function CityName() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % CITIES.length)
        setVisible(true)
      }, 350)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`city-name city-name--${visible ? 'visible' : 'hidden'}`}>
      {CITIES[index]}
    </span>
  )
}
