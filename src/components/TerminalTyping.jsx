import { useState, useEffect } from 'react'
import { colors } from '../data/tokens'

export default function TerminalTyping() {
  const name = 'samara silvia sabino'
  const [chars, setChars] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting) {
      if (chars < name.length) {
        const t = setTimeout(() => setChars(c => c + 1), 60 + Math.random() * 40)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(true), 3000)
        return () => clearTimeout(t)
      }
    } else {
      if (chars > 0) {
        const t = setTimeout(() => setChars(c => c - 1), 30)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(false), 800)
        return () => clearTimeout(t)
      }
    }
  }, [chars, deleting])

  return (
    <div className="fm" style={{ fontSize: 13, letterSpacing: '0.06em', marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ display: 'inline-block', width: 8, height: 8, background: colors.phosphor, borderRadius: '50%' }} />
        <span style={{ color: colors.phosphor }}>$</span>
        <span style={{ color: colors.phosphor }}>whoami</span>
      </div>
      <div style={{
        marginTop: 6, paddingLeft: 24,
        color: colors.bone, fontSize: 'clamp(14px, 2.5vw, 16px)',
        letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7,
        minHeight: '1.5em',
      }}>
        {name.slice(0, chars)}<span style={{ color: colors.phosphor }} className="blink">_</span>
      </div>
    </div>
  )
}