import { useEffect, useRef } from 'react'

/**
 * Observes the returned ref element. When it enters the viewport,
 * `data-visible="true"` is set once and observation stops.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || el.dataset.visible === 'true') return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true'
          obs.unobserve(el)
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
