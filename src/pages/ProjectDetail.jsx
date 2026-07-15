import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ChevronRight } from 'lucide-react'
import { colors, rawColors } from '../data/tokens'
import { projects } from '../data/projects'
import { Fade, Crosshairs, GridDots, SectionPrompt } from '../components/ui'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const currentIdx = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIdx + 1) % projects.length]
  const prevProject = projects[(currentIdx - 1 + projects.length) % projects.length]

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 88 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="fd" style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>404</h1>
          <p className="fm" style={{ color: colors.muted, marginBottom: 24 }}>$ cat: project not found</p>
          <Link to="/projects" style={{ color: colors.phosphor, fontFamily: "'JetBrains Mono'" }}>← back to ~/projects</Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        {/* BREADCRUMB */}
        <Fade>
          <Link to="/projects" className="fm" style={{
            fontSize: 13, color: colors.muted, display: 'inline-flex',
            alignItems: 'center', gap: 8, marginBottom: 48, transition: 'color 0.2s',
          }}>
            <ArrowLeft size={14} /> ~/projects
          </Link>
        </Fade>

        {/* HEADER */}
        <Fade delay={0.05}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span className="fm" style={{ fontSize: 14, color: project.accent, fontWeight: 700 }}>{project.id}/</span>
              <span className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.04em' }}>{project.year}</span>
              <span style={{
                fontSize: 10, fontFamily: "'JetBrains Mono'",
                color: project.status.includes('Active') ? colors.phosphor : colors.muted,
                background: project.status.includes('Active') ? colors.phosphor8 : colors.muted8,
                padding: '3px 10px', letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                {project.status}
              </span>
            </div>

            <h1 className="fd" style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 700, lineHeight: 1, marginBottom: 8 }}>
              {project.name}
            </h1>
            <p className="fm" style={{ fontSize: 14, color: colors.muted, marginBottom: 8 }}>{project.type}</p>
            <p className="fm" style={{ fontSize: 12, color: colors.muted }}>Role: {project.role}</p>
          </div>
        </Fade>

        <hr className="divider" style={{ marginBottom: 48 }} />

        {/* DESCRIPTION */}
        <Fade delay={0.1}>
          <div style={{ marginBottom: 56 }}>
            <SectionPrompt command={`cat ${project.slug}/README.md`} />
            <div style={{ fontSize: 15, lineHeight: 1.85, color: colors.bone87 }}>
              {project.longDesc.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.includes('—')) {
                  const parts = para.split('**').filter(Boolean)
                  return (
                    <div key={i} style={{
                      padding: '12px 20px', marginBottom: 8,
                      borderLeft: `2px solid ${project.accent}20`,
                      background: `${colors.surface}`,
                    }}>
                      {parts.map((part, j) => {
                        if (j % 2 === 0) {
                          return <span key={j} className="fm" style={{ color: project.accent, fontSize: 13, fontWeight: 600 }}>{part}</span>
                        }
                        return <span key={j} style={{ fontSize: 14, color: colors.muted }}>{part}</span>
                      })}
                    </div>
                  )
                }
                return <p key={i} style={{ marginBottom: 20 }}>{para}</p>
              })}
            </div>
          </div>
        </Fade>

        {/* CHALLENGES */}
        <Fade delay={0.15}>
          <div style={{ marginBottom: 56 }}>
            <SectionPrompt command={`cat ${project.slug}/CHALLENGES.md`} />
            <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
              Technical <span style={{ color: colors.ember }}>Challenges</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.challenges.map((c, i) => (
                <div key={i} style={{
                  padding: '20px 24px',
                  background: colors.surface,
                  border: `1px solid ${colors.rule}`,
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                }}>
                  <span className="fm" style={{ fontSize: 12, color: colors.ember, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.bone80 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* STACK */}
        <Fade delay={0.2}>
          <div style={{ marginBottom: 56 }}>
            <SectionPrompt command={`cat ${project.slug}/package.json | jq '.dependencies'`} />
            <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
              Tech <span style={{ color: colors.phosphor }}>Stack</span>
            </h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.stack.map((t) => (
                <span key={t} className="fm" style={{
                  fontSize: 12, color: colors.bone,
                  background: colors.surface, border: `1px solid ${colors.rule}`,
                  padding: '8px 16px',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        {/* NAV: PREV/NEXT */}
        <Fade delay={0.25}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 16, padding: '48px 0',
          }}>
            <Link to={`/projects/${prevProject.slug}`} style={{
              textDecoration: 'none', color: 'inherit',
              padding: '24px', background: colors.surface,
              border: `1px solid ${colors.rule}`,
              transition: 'border-color 0.3s',
            }}>
              <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>← Previous</span>
              <p className="fd" style={{ fontSize: 18, fontWeight: 700, marginTop: 8 }}>{prevProject.name}</p>
            </Link>
            <Link to={`/projects/${nextProject.slug}`} style={{
              textDecoration: 'none', color: 'inherit',
              padding: '24px', background: colors.surface,
              border: `1px solid ${colors.rule}`,
              textAlign: 'right',
              transition: 'border-color 0.3s',
            }}>
              <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Next →</span>
              <p className="fd" style={{ fontSize: 18, fontWeight: 700, marginTop: 8 }}>{nextProject.name}</p>
            </Link>
          </div>
        </Fade>
      </div>
    </main>
  )
}
