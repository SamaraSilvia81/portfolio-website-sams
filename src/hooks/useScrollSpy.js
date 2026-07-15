import { useState, useEffect } from 'react'

export function useScrollSpy(ids, margin = '-35% 0px -35% 0px') {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: margin }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [ids.join(',')])
  return active
}

export function useFadeIn(threshold = 0.12) {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref])

  return [setRef, visible]
}
