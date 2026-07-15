import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Terminal, ArrowUpRight, Menu, X } from 'lucide-react'
import { colors, rawColors } from '../data/tokens'
import { Marquee } from './ui'

const navLinks = [
  { to: '/', label: '~/home' },
  { to: '/projects', label: '~/projects' },
  { to: '/about', label: '~/about' },
  { to: '/contact', label: '~/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const styles = {
    ticker: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: colors.phosphor, height: 32,
      display: 'flex', alignItems: 'center',
    },
    tickerItem: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11, fontWeight: 700,
      color: colors.void, letterSpacing: '0.06em',
      textTransform: 'uppercase', padding: '0 24px',
      display: 'flex', alignItems: 'center', gap: 12,
    },
    nav: {
      position: 'fixed', top: 32, left: 0, right: 0, zIndex: 90,
      background: 'color-mix(in srgb, var(--c-void) 80%, transparent)',
      backdropFilter: 'blur(16px) saturate(1.2)',
      borderBottom: `1px solid ${colors.rule}`,
    },
    navInner: {
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 56,
    },
    logo: {
      background: 'none', border: 'none', cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 8,
      textDecoration: 'none',
    },
    link: (active) => ({
      color: active ? colors.phosphor : colors.muted,
      textDecoration: 'none', fontSize: 13,
      letterSpacing: '0.02em', transition: 'color 0.25s',
      fontFamily: "'JetBrains Mono', monospace",
      padding: '4px 0',
    }),
    cta: {
      background: colors.ember, color: '#fff', border: 'none',
      padding: '10px 24px',
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600, fontSize: 14, letterSpacing: '0.03em',
      cursor: 'pointer', display: 'inline-flex',
      alignItems: 'center', gap: 8,
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(.16,1,.3,1)',
    },
    mobileMenu: {
      position: 'fixed', inset: 0,
      background: 'color-mix(in srgb, var(--c-void) 97%, transparent)',
      backdropFilter: 'blur(16px)',
      zIndex: 200, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 28,
    },
  }

  const tickerTexts = [
    'Available for projects',
    'Frontend · UX/UI · Design Systems',
    'Recife, BR → Worldwide',
  ]

  return (
    <>
      {/* TICKER */}
      <div style={styles.ticker}>
        <Marquee speed={25}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} style={styles.tickerItem}>
                <span style={{ opacity: 0.4 }}>✦</span>
                {tickerTexts[i % 3]}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* NAV */}
      <nav style={styles.nav}>
        <div className="container" style={styles.navInner}>
          <Link to="/" style={styles.logo} className="glitch-wrap">
            <Terminal size={15} color={rawColors.phosphor} />
            <span className="fm glitch-text" style={{ color: colors.bone, fontSize: 15, fontWeight: 700 }}>
              sams<span style={{ color: colors.phosphor }}>.sh</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}
               className="desktop-nav">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} style={styles.link(location.pathname === l.to)}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" style={{ ...styles.cta, marginLeft: 8 }}>
              Let's Talk <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="mobile-toggle"
            onClick={() => setMenuOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            <Menu size={22} color={rawColors.bone} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: 48, right: 24, background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} color={rawColors.bone} />
          </button>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}
              onClick={() => setMenuOpen(false)}
              style={{ ...styles.link(location.pathname === l.to), fontSize: 22 }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={styles.cta}>
            Let's Talk <ArrowUpRight size={14} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-toggle { display: none !important; } }
        .desktop-nav a:hover { color: ${colors.phosphor} !important; }
      `}</style>
    </>
  )
}
