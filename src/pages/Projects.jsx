import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { colors } from '../data/tokens'
import { projects, categories } from '../data/projects'
import { useLang } from '../data/LangContext'
import { Fade, SectionPrompt } from '../components/ui'

export default function Projects() {
  const [scope, setScope] = useState('all')
  const [domain, setDomain] = useState('all')
  const { t } = useLang()
  const p = t.projects

  const filtered = projects.filter((proj) => {
    if (scope !== 'all' && proj.scope !== scope) return false
    if (domain !== 'all' && proj.domain !== domain) return false
    return true
  })

  const pillStyle = (active) => ({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: active ? 700 : 400,
    padding: '6px 14px', border: `1px solid ${active ? 'var(--c-phosphor)' : 'var(--c-rule)'}`,
    background: active ? 'var(--c-phosphor-8)' : 'transparent',
    color: active ? 'var(--c-phosphor)' : 'var(--c-muted)',
    cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.03em', textTransform: 'uppercase',
  })

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container">
        <Fade><SectionPrompt command={p.tag} right={`${filtered.length} of ${projects.length}`} /></Fade>
        <Fade delay={0.05}>
          <h1 className="fd" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 700, lineHeight: 1, marginBottom: 16 }}>
            {p.heading}<span style={{ color: colors.phosphor }}>{p.headingAccent}</span>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: 1.7, color: colors.muted, maxWidth: 520, marginBottom: 32 }}>{p.subtitle}</p>
        </Fade>

        <Fade delay={0.08}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 16 }}>
              <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 12 }}>{p.scopeLabel}</span>
              <div style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                {categories.scope.map((c) => <button key={c.id} style={pillStyle(scope === c.id)} onClick={() => setScope(c.id)}>{c.label}</button>)}
              </div>
            </div>
            <div>
              <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 12 }}>{p.domainLabel}</span>
              <div style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                {categories.domain.map((c) => <button key={c.id} style={pillStyle(domain === c.id)} onClick={() => setDomain(c.id)}>{c.label}</button>)}
              </div>
            </div>
          </div>
        </Fade>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {filtered.length === 0 && (
            <div style={{ padding: '48px 24px', textAlign: 'center' }}>
              <p className="fm" style={{ color: colors.muted, fontSize: 13 }}>{p.noResults}</p>
              <button onClick={() => { setScope('all'); setDomain('all') }}
                style={{ marginTop: 16, background: 'none', border: `1px solid var(--c-rule)`, color: colors.phosphor, padding: '8px 16px', cursor: 'pointer', fontFamily: "'JetBrains Mono'", fontSize: 12 }}>
                {p.clearFilters}
              </button>
            </div>
          )}
          {filtered.map((proj, i) => (
            <Fade key={proj.id} delay={0.02 + i * 0.03}>
              <Link to={`/projects/${proj.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="prow" style={{ '--accent': proj.accent }}>
                  <span className="fm prow-id" style={{ fontSize: 14, fontWeight: 700, color: colors.muted }}>{proj.id}/</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <h3 className="fd prow-name" style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700 }}>{proj.name}</h3>
                      {proj.links?.live && <span className="fm" style={{ fontSize: 9, color: colors.phosphor, background: colors.phosphor5, padding: '2px 8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{p.liveTag}</span>}
                    </div>
                    <p className="fm" style={{ fontSize: 12, color: colors.muted, marginTop: 2 }}>{proj.type}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                      {proj.tags.slice(0, 4).map((tag) => <span key={tag} className="fm" style={{ fontSize: 10, color: colors.muted, border: `1px solid var(--c-rule)`, padding: '2px 8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{tag}</span>)}
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="prow-arrow" />
                </div>
              </Link>
            </Fade>
          ))}
        </div>
        <div style={{ height: 96 }} />
      </div>
    </main>
  )
}