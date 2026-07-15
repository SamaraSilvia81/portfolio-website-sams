import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react'
import { colors } from '../data/tokens'
import { projects } from '../data/projects'
import { projectImages } from '../data/images'
import { useLang } from '../data/LangContext'
import { Fade, SectionPrompt } from '../components/ui'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useLang()
  const d = t.projectDetail
  const project = projects.find((p) => p.slug === slug)
  const currentIdx = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIdx + 1) % projects.length]
  const prevProject = projects[(currentIdx - 1 + projects.length) % projects.length]
  const images = projectImages?.[slug] || []
  const hasLinks = project?.links && (project.links.live || project.links.github)

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 88 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="fd" style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>{d.notFoundTitle}</h1>
          <p className="fm" style={{ color: colors.muted, marginBottom: 24 }}>{d.notFoundMsg}</p>
          <Link to="/projects" style={{ color: colors.phosphor, fontFamily: "'JetBrains Mono'" }}>{d.notFoundLink}</Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Fade>
          <Link to="/projects" className="fm" style={{ fontSize: 13, color: colors.muted, display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 48, transition: 'color 0.2s' }}>
            <ArrowLeft size={14} /> {d.back}
          </Link>
        </Fade>

        <Fade delay={0.05}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className="fm" style={{ fontSize: 14, color: project.accent, fontWeight: 700 }}>{project.id}/</span>
              <span className="fm" style={{ fontSize: 11, color: colors.muted }}>{project.year}</span>
              <span className="fm" style={{ fontSize: 10, color: project.status.includes('Active') || project.status.includes('Deployed') ? colors.phosphor : colors.muted, background: project.status.includes('Active') || project.status.includes('Deployed') ? colors.phosphor8 : colors.muted8, padding: '3px 10px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{project.status}</span>
            </div>
            <h1 className="fd" style={{ fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 700, lineHeight: 1, marginBottom: 8 }}>{project.name}</h1>
            <p className="fm" style={{ fontSize: 14, color: colors.muted, marginBottom: 8 }}>{project.type}</p>
            <p className="fm" style={{ fontSize: 12, color: colors.muted, marginBottom: 24 }}>Role: {project.role}</p>
            {hasLinks && (
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ fontSize: 13, padding: '10px 20px' }}><Globe size={14} /> {d.visitLive} <ExternalLink size={12} /></a>}
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="cta-ghost" style={{ fontSize: 13, padding: '10px 20px' }}><Github size={14} /> {d.sourceCode}</a>}
              </div>
            )}
          </div>
        </Fade>

        <hr className="divider" style={{ marginBottom: 48 }} />

        {project.motivation && (
          <Fade delay={0.08}>
            <div style={{ marginBottom: 56 }}>
              <SectionPrompt command={`cat ${project.slug}/${d.motivationTag}`} />
              <div style={{ padding: '24px 28px', background: colors.surface, border: `1px solid ${colors.rule}`, borderLeft: `3px solid ${project.accent}` }}>
                <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{d.motivationLabel}</p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.bone87, fontStyle: 'italic' }}>{project.motivation}</p>
              </div>
            </div>
          </Fade>
        )}

        <Fade delay={0.1}>
          <div style={{ marginBottom: 56 }}>
            <SectionPrompt command={`cat ${project.slug}/${d.readmeTag}`} />
            <div style={{ fontSize: 15, lineHeight: 1.85, color: colors.bone87 }}>
              {project.longDesc.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.includes('—')) {
                  const parts = para.split('**').filter(Boolean)
                  return (<div key={i} style={{ padding: '12px 20px', marginBottom: 8, borderLeft: `2px solid ${project.accent}`, background: colors.surface }}>{parts.map((part, j) => j % 2 === 0 ? <span key={j} className="fm" style={{ color: project.accent, fontSize: 13, fontWeight: 600 }}>{part}</span> : <span key={j} style={{ fontSize: 14, color: colors.muted }}>{part}</span>)}</div>)
                }
                return <p key={i} style={{ marginBottom: 20 }}>{para}</p>
              })}
            </div>
          </div>
        </Fade>

        {images.length > 0 && (
          <Fade delay={0.12}>
            <div style={{ marginBottom: 56 }}>
              <SectionPrompt command={`ls ${project.slug}/screenshots/`} />
              <div style={{ display: 'grid', gridTemplateColumns: images.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
                {images.map((img, i) => <div key={i} className="photo-frame" style={{ aspectRatio: '16/10' }}><img src={img.src} alt={img.alt} style={{ objectPosition: img.pos }} /></div>)}
              </div>
            </div>
          </Fade>
        )}

        <Fade delay={0.15}>
          <div style={{ marginBottom: 56 }}>
            <SectionPrompt command={`cat ${project.slug}/${d.challengesTag}`} />
            <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>{d.challengesHeading}<span style={{ color: colors.ember }}>{d.challengesAccent}</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.challenges.map((c, i) => (
                <div key={i} style={{ padding: '20px 24px', background: colors.surface, border: `1px solid ${colors.rule}`, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span className="fm" style={{ fontSize: 12, color: colors.ember, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.bone80 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade delay={0.2}>
          <div style={{ marginBottom: 56 }}>
            <SectionPrompt command={`cat ${project.slug}/${d.stackTag}`} />
            <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>{d.stackHeading}<span style={{ color: colors.phosphor }}>{d.stackAccent}</span></h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.stack.map((tech) => <span key={tech} className="stack-pill">{tech}</span>)}
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        <Fade delay={0.25}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '48px 0' }}>
            <Link to={`/projects/${prevProject.slug}`} style={{ textDecoration: 'none', color: 'inherit', padding: '24px', background: colors.surface, border: `1px solid ${colors.rule}` }}>
              <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{d.prev}</span>
              <p className="fd" style={{ fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 700, marginTop: 8 }}>{prevProject.name}</p>
            </Link>
            <Link to={`/projects/${nextProject.slug}`} style={{ textDecoration: 'none', color: 'inherit', padding: '24px', background: colors.surface, border: `1px solid ${colors.rule}`, textAlign: 'right' }}>
              <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{d.next}</span>
              <p className="fd" style={{ fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 700, marginTop: 8 }}>{nextProject.name}</p>
            </Link>
          </div>
        </Fade>
      </div>
    </main>
  )
}