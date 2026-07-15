import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Terminal, ArrowUpRight, Menu, X, Globe } from 'lucide-react'
import { colors, rawColors } from '../data/tokens'
import { useLang } from '../data/LangContext'
import { Marquee } from './ui'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, t, toggle } = useLang()
  const navLinks = t.nav.links
  const tickerTexts = t.nav.ticker

  return (
    <>
      {/* TICKER */}
      <div className="ticker-bar">
        <Marquee speed={25}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="fm ticker-item">
                <span style={{ opacity: 0.4 }}>✦</span>
                {tickerTexts[i % 3]}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* NAV */}
      <nav className="main-nav">
        <div className="container nav-inner">
          <Link to="/" className="glitch-wrap nav-logo">
            <Terminal size={15} color={rawColors.phosphor} />
            <span className="fm glitch-text" style={{ color: colors.bone, fontSize: 15, fontWeight: 700 }}>
              sams<span style={{ color: colors.phosphor }}>.sh</span>
            </span>
          </Link>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className={`fm nav-link ${location.pathname === l.to ? 'active' : ''}`}>
                {l.label}
              </Link>
            ))}
            <button onClick={toggle} className="fm lang-btn" title="Switch language">
              <Globe size={12} />
              {lang === 'en' ? 'PT' : 'EN'}
            </button>
            <Link to="/contact" className="cta-primary" style={{ marginLeft: 4 }}>
              {t.nav.cta} <ArrowUpRight size={13} />
            </Link>
          </div>

          <button className="mobile-toggle" onClick={() => setMenuOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            <Menu size={22} color={rawColors.bone} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: 48, right: 24, background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} color={rawColors.bone} />
          </button>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}
              onClick={() => setMenuOpen(false)}
              className={`fm nav-link ${location.pathname === l.to ? 'active' : ''}`}
              style={{ fontSize: 22 }}>
              {l.label}
            </Link>
          ))}
          <button onClick={() => { toggle(); setMenuOpen(false) }} className="fm lang-btn" style={{ fontSize: 14, padding: '8px 16px' }}>
            <Globe size={14} />
            {lang === 'en' ? 'Português' : 'English'}
          </button>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="cta-primary">
            {t.nav.cta} <ArrowUpRight size={14} />
          </Link>
        </div>
      )}

      <style>{`
        .ticker-bar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: var(--c-phosphor); height: 32px;
          display: flex; align-items: center;
        }
        .ticker-item {
          font-size: 11px; font-weight: 700; color: var(--c-void);
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 0 24px; display: flex; align-items: center; gap: 12px;
        }
        .main-nav {
          position: fixed; top: 32px; left: 0; right: 0; z-index: 90;
          background: color-mix(in srgb, var(--c-void) 80%, transparent);
          backdrop-filter: blur(16px) saturate(1.2);
          border-bottom: 1px solid var(--c-rule);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px; text-decoration: none; }
        .nav-link {
          color: var(--c-muted); text-decoration: none; font-size: 13px;
          letter-spacing: 0.02em; transition: color 0.25s; padding: 4px 0;
        }
        .nav-link:hover, .nav-link.active { color: var(--c-phosphor); }
        .lang-btn {
          background: none; border: 1px solid var(--c-rule); color: var(--c-muted);
          cursor: pointer; padding: 4px 10px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.04em; display: inline-flex; align-items: center; gap: 5px;
          transition: all 0.25s;
        }
        .lang-btn:hover { border-color: var(--c-phosphor); color: var(--c-phosphor); }
        .mobile-menu-overlay {
          position: fixed; inset: 0;
          background: color-mix(in srgb, var(--c-void) 97%, transparent);
          backdrop-filter: blur(16px); z-index: 200;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px;
        }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-toggle { display: none !important; } }
      `}</style>
    </>
  )
}