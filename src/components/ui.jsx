import { useRef, useState, useEffect } from 'react'
import { colors, rawColors } from '../data/tokens'

/* ─── FADE IN ON SCROLL ─── */
export function Fade({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

/* ─── MARQUEE TICKER ─── */
export function Marquee({ children, speed = 30, reverse = false }) {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
      <div style={{
        display: 'inline-flex',
        animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
      }}>
        {children}{children}
      </div>
    </div>
  )
}

/* ─── CROSSHAIR DECORATION ─── */
export function Crosshairs({ size = 20, color = rawColors.muted, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
      <line x1="10" y1="0" x2="10" y2="20" stroke={color} strokeWidth="0.5" />
      <line x1="0" y1="10" x2="20" y2="10" stroke={color} strokeWidth="0.5" />
      <circle cx="10" cy="10" r="4" stroke={color} strokeWidth="0.5" />
    </svg>
  )
}

/* ─── GRID DOT PATTERN ─── */
export function GridDots({ rows = 4, cols = 6, color = rawColors.rule }) {
  const dots = []
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      dots.push(<circle key={`${r}-${c}`} cx={c * 10 + 5} cy={r * 10 + 5} r="1.5" fill={color} />)
  return <svg width={cols * 10} height={rows * 10} style={{ opacity: 0.6 }}>{dots}</svg>
}

/* ─── SECTION HEADER ─── */
export function SectionPrompt({ command, right }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginBottom: 48,
      flexWrap: 'wrap', gap: 12,
    }}>
      <p className="fm prompt" style={{ fontSize: 13, color: colors.muted, letterSpacing: '0.04em' }}>
        {command}
      </p>
      {right && <span className="fm" style={{ fontSize: 11, color: colors.muted }}>{right}</span>}
    </div>
  )
}

/* ─── PHOTO WITH NOIR FILTER ─── */
export function Photo({ src, alt, width, height, style = {} }) {
  return (
    <div className="photo-frame" style={{ width, height, ...style }}>
      <img src={src} alt={alt} />
    </div>
  )
}
