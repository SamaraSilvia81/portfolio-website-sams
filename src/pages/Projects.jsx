import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { colors } from '../data/tokens'
import { projects } from '../data/projects'
import { Fade, Crosshairs, SectionPrompt } from '../components/ui'

export default function Projects() {

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container">
        <Fade>
          <SectionPrompt command="ls -la ~/projects/" right={`total ${projects.length}`} />
        </Fade>

        <Fade delay={0.05}>
          <h1 className="fd" style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, lineHeight: 1, marginBottom: 16 }}>
            All <span style={{ color: colors.phosphor }}>Projects</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: colors.muted, maxWidth: 520, marginBottom: 64 }}>
            Each project in the .sh ecosystem solves a real problem I've encountered as a developer, designer, researcher, or teacher.
          </p>
        </Fade>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {projects.map((p, i) => (
            <Fade key={p.id} delay={0.03 + i * 0.04}>
              <Link to={`/projects/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="prow" style={{ '--accent': p.accent }}>
                  <span className="fm prow-id" style={{ fontSize: 14, fontWeight: 700, color: colors.muted }}>{p.id}/</span>

                  <div>
                    <h3 className="fd prow-name" style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{p.name}</h3>
                    <p className="fm" style={{ fontSize: 12, color: colors.muted }}>{p.type}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="fm" style={{
                          fontSize: 10, color: colors.muted,
                          border: `1px solid ${colors.rule}`,
                          padding: '2px 8px', letterSpacing: '0.04em', textTransform: 'uppercase',
                        }}>{t}</span>
                      ))}
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
