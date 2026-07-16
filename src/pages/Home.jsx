import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight, ChevronRight, Mail, Github, Linkedin, Instagram,
  Code2, Palette, Layout, GraduationCap
} from 'lucide-react'
import { colors, rawColors } from '../data/tokens'
import { projects, services, stack } from '../data/projects'
import { heroImage } from '../data/images'
import { useLang } from '../data/LangContext'
import { Fade, Crosshairs, GridDots, SectionPrompt } from '../components/ui'
import TerminalTyping from '../components/TerminalTyping'

const iconMap = { frontend: Code2, uxui: Palette, systems: Layout, edtech: GraduationCap }
const PREVIEW_COUNT = 6

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { t } = useLang()
  const h = t.home
  const previewProjects = projects.slice(0, PREVIEW_COUNT)

  const handleCardMouse = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
    })
  }, [])

  return (
    <main>
      {/* ████ HERO ████ */}
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 88, position: 'relative', overflow: 'hidden' }}>
        <div className="hero-deco" style={{ position: 'absolute', top: 120, right: 60, opacity: 0.15 }}><Crosshairs size={40} color={rawColors.phosphor} /></div>
        <div className="hero-deco" style={{ position: 'absolute', bottom: 80, left: 40, opacity: 0.1 }}><GridDots rows={6} cols={8} color={rawColors.phosphor} /></div>

        <div className="hero-photo-wrap">
          <img src={heroImage.src} alt={heroImage.alt} className="hero-photo" style={{ objectPosition: heroImage.pos }} />
        </div>

        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>

        <Fade>
          <TerminalTyping />
        </Fade>

          {/* <Fade>
            <p className="fm" style={{ color: colors.phosphor, fontSize: 13, marginBottom: 32, letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, background: colors.phosphor, borderRadius: '50%' }} />
              $ {h.heroTag}<span className="blink">_</span>
            </p>
          </Fade> */}

          <Fade delay={0.08}>
            <h1 className="fd hero-h1">
              <span>{h.heroLine1}</span><span style={{ color: colors.phosphor }}>{h.heroLine1Accent}</span>
            </h1>
          </Fade>
          <Fade delay={0.14}>
            <h1 className="fd hero-h1">{h.heroLine2}</h1>
          </Fade>
          <Fade delay={0.2}>
            <h1 className="fd text-outline muted-stroke hero-h2">{h.heroLine3}</h1>
          </Fade>

          <Fade delay={0.28}>
            <div className="hero-meta">
              <p className="hero-tagline">{h.heroTagline}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h.statusLabel}</span>
                <span className="fm" style={{ fontSize: 12, color: colors.phosphor, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, background: colors.phosphor, borderRadius: '50%', boxShadow: '0 0 8px ' + colors.phosphor40 }} />
                  {h.statusValue}
                </span>
                <span className="fm" style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>{h.location}</span>
              </div>
            </div>
          </Fade>

          <Fade delay={0.35}>
            <div className="hero-ctas">
              <Link to="/projects" className="cta-primary">{h.ctaProjects} <ChevronRight size={14} /></Link>
              <Link to="/contact" className="cta-ghost">{h.ctaContact}</Link>
            </div>
          </Fade>

          <Fade delay={0.4}>
            <div className="hero-photo-mobile photo-frame">
              <img src={heroImage.src} alt={heroImage.alt} style={{ objectPosition: heroImage.pos }} />
            </div>
          </Fade>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ ABOUT PREVIEW ████ */}
      <section className="section-pad">
        <div className="container">
          <Fade><SectionPrompt command={`cat ${h.aboutTag}`} /></Fade>
          <Fade delay={0.08}>
            <div className="about-grid">
              <div>
                <h2 className="fd section-heading">{h.aboutHeading1}<br /><span style={{ color: colors.phosphor }}>{h.aboutHeading2}</span></h2>
                <p className="body-text">{h.aboutP1}</p>
                <p className="body-text">{h.aboutP2Pre}<span className="fm tag-inline">{h.aboutP2Tag}</span>{h.aboutP2Post}</p>
                <Link to="/about" className="fm link-accent">{h.aboutMore} <ArrowUpRight size={14} /></Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="info-card" style={{ borderLeft: `3px solid ${colors.phosphor}` }}>
                  <span className="fm card-label">{h.researchLabel}</span>
                  <p className="fd card-title">{h.researchTitle}</p>
                  <p className="fm card-sub">{h.researchOrg}</p>
                </div>
                <div className="info-card" style={{ borderLeft: `3px solid ${colors.ember}` }}>
                  <span className="fm card-label">{h.teachingLabel}</span>
                  <p className="fd card-title">{h.teachingTitle}</p>
                  <p className="fm card-sub">{h.teachingOrg}</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={0.15}>
            <div className="stats-grid">
              {h.stats.map((s, i) => (
                <div key={i} className="stat-cell">
                  <div className="fd stat-num">{s.num}</div>
                  <div className="fm stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ PROJECTS (max 6 + see more) ████ */}
      <section className="section-pad">
        <div className="container">
          <Fade><SectionPrompt command={h.projectsTag} right={`${previewProjects.length} of ${projects.length}`} /></Fade>
          <Fade delay={0.05}>
            <h2 className="fd" style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 700, marginBottom: 48 }}>
              {h.selectedWork}<span style={{ color: colors.phosphor }}>{h.selectedWorkAccent}</span>
            </h2>
          </Fade>

          <div className="project-grid">
            {previewProjects.map((p, i) => (
              <Fade key={p.id} delay={0.03 + i * 0.06}>
                <Link to={`/projects/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="pcard" style={{
                    '--accent': p.accent,
                    '--mx': `${((mousePos.x + 4) / 8) * 100}%`,
                    '--my': `${((mousePos.y + 4) / 8) * 100}%`,
                    transform: hoveredProject === p.id
                      ? `perspective(600px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg) translateY(-4px)`
                      : 'none',
                  }}
                    onMouseEnter={() => setHoveredProject(p.id)}
                    onMouseLeave={() => { setHoveredProject(null); setMousePos({ x: 0, y: 0 }) }}
                    onMouseMove={handleCardMouse}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <span className="fm" style={{ fontSize: 13, color: p.accent, fontWeight: 700 }}>{p.id}/</span>
                      <ArrowUpRight size={18} className="pcard-arrow" />
                    </div>
                    <h3 className="fd pcard-name" style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, marginBottom: 4, lineHeight: 1.15, '--accent': p.accent, position: 'relative', zIndex: 1 }}>{p.name}</h3>
                    <p className="fm" style={{ fontSize: 12, color: colors.muted, marginBottom: 12, letterSpacing: '0.02em', position: 'relative', zIndex: 1 }}>{p.type}</p>
                    <p style={{ fontSize: 13, color: colors.bone67, lineHeight: 1.65, marginBottom: 20, position: 'relative', zIndex: 1 }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                      {p.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="fm tag-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>

          {projects.length > PREVIEW_COUNT && (
            <Fade delay={0.3}>
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <Link to="/projects" className="cta-ghost" style={{ margin: '0 auto' }}>
                  {h.ctaProjects} ({projects.length}) <ArrowUpRight size={14} />
                </Link>
              </div>
            </Fade>
          )}
        </div>
      </section>

      <hr className="divider" />

      {/* ████ SERVICES ████ */}
      <section className="section-pad">
        <div className="container">
          <Fade><SectionPrompt command={h.servicesTag} /></Fade>
          <Fade delay={0.05}>
            <h2 className="fd" style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 700, marginBottom: 48 }}>
              {h.servicesHeading}<span style={{ color: colors.phosphor }}>{h.servicesHeadingAccent}</span>
            </h2>
          </Fade>

          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = iconMap[s.id]
              return (
                <Fade key={s.id} delay={0.04 + i * 0.07}>
                  <div className="svc-block">
                    <div className="svc-icon"><Icon size={20} color={rawColors.phosphor} /></div>
                    <h3 className="fd" style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.muted }}>{s.desc}</p>
                  </div>
                </Fade>
              )
            })}
          </div>

          <Fade delay={0.1}>
            <div className="stack-box">
              <p className="fm" style={{ fontSize: 11, color: colors.muted, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h.stackLabel}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {stack.map((t) => <span key={t} className="stack-pill">{t}</span>)}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ CONTACT CTA ████ */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0 clamp(48px, 8vw, 96px)' }}>
        <div className="container">
          <Fade><SectionPrompt command={h.contactTag} /></Fade>
          <Fade delay={0.08}>
            <h2 className="fd" style={{ fontSize: 'clamp(28px, 7vw, 64px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 8, maxWidth: 600 }}>
              {h.contactHeading1}<br />{h.contactHeading1b}
            </h2>
            <h2 className="fd" style={{ fontSize: 'clamp(28px, 7vw, 64px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24, color: colors.phosphor }}>
              {h.contactHeading2}
            </h2>
          </Fade>
          <Fade delay={0.16}>
            <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: 1.75, color: colors.muted, maxWidth: 460, marginBottom: 40 }}>{h.contactP}</p>
          </Fade>
          <Fade delay={0.22}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link to="/contact" className="cta-primary"><Mail size={16} /> {h.ctaContact}</Link>
            </div>
          </Fade>
          <Fade delay={0.28}>
            <div>
              <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{h.connectLabel}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[Github, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="social-icon"><Icon size={18} /></a>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <style>{`
        .section-pad { padding: clamp(48px, 8vw, 96px) 0; position: relative; }
        .about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 48px; align-items: start; }
        .section-heading { font-size: clamp(24px, 5vw, 32px); font-weight: 700; margin-bottom: 24px; line-height: 1.15; }
        .body-text { font-size: clamp(14px, 2.5vw, 15px); line-height: 1.8; color: var(--c-bone); opacity: 0.85; margin-bottom: 16px; }
        .tag-inline { color: var(--c-phosphor); font-size: 13px; background: var(--c-phosphor-5); padding: 2px 8px; }
        .link-accent { font-size: 13px; color: var(--c-phosphor); display: inline-flex; align-items: center; gap: 6px; letter-spacing: 0.02em; }
        .info-card { padding: 20px 24px; background: var(--c-surface); border: 1px solid var(--c-rule); }
        .card-label { font-size: 10px; color: var(--c-muted); letter-spacing: 0.08em; text-transform: uppercase; }
        .card-title { font-size: 14px; font-weight: 600; margin-top: 6px; line-height: 1.5; }
        .card-sub { font-size: 11px; color: var(--c-muted); margin-top: 4px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1px; background: var(--c-rule); border: 1px solid var(--c-rule); margin-top: 56px; }
        .stat-cell { text-align: center; padding: 24px 12px; background: var(--c-surface); }
        .stat-num { font-size: clamp(24px, 5vw, 36px); font-weight: 700; color: var(--c-phosphor); line-height: 1; }
        .stat-lbl { font-size: 10px; color: var(--c-muted); margin-top: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); gap: 16px; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); gap: 16px; }
        .svc-icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--c-phosphor-5); border: 1px solid var(--c-phosphor-12); margin-bottom: 20px; }
        .stack-box { margin-top: 64px; padding: 36px 28px; background: var(--c-surface); border: 1px solid var(--c-rule); }
        .tag-sm { font-size: 10px; color: var(--c-muted); border: 1px solid var(--c-rule); padding: 3px 10px; letter-spacing: 0.04em; text-transform: uppercase; }
        .social-icon { color: var(--c-muted); display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border: 1px solid var(--c-rule); transition: all 0.25s; }
        .social-icon:hover { color: var(--c-phosphor); border-color: var(--c-phosphor-20); }
        .hero-h1 { font-size: clamp(40px, 11vw, 110px); font-weight: 700; line-height: 0.9; letter-spacing: -0.04em; margin-bottom: 4px; }
        .hero-h2 { font-size: clamp(28px, 8vw, 80px); font-weight: 700; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 36px; }
        .hero-meta { display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap; margin-bottom: 40px; }
        .hero-tagline { font-size: clamp(14px, 2.5vw, 16px); line-height: 1.7; color: var(--c-bone); max-width: 420px; opacity: 0.9; }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-photo-mobile { display: none; }

        @media (max-width: 768px) {
          .hero-section { min-height: auto !important; padding-top: 140px !important; padding-bottom: 32px !important; }
          .hero-photo-wrap { display: none !important; }
          .hero-deco { display: none !important; }
          .hero-h1 { font-size: clamp(32px, 14vw, 48px) !important; }
          .hero-h2 { font-size: clamp(20px, 8vw, 32px) !important; margin-bottom: 24px !important; }
          .hero-meta { gap: 16px; }
          .hero-photo-mobile {
            display: block;
            margin-top: 40px;
            aspect-ratio: 4 / 5;
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
          }
          .section-pad { padding: 48px 0; }
          .info-card { padding: 16px 20px; }
          .stack-box { padding: 24px 20px; margin-top: 40px; }
          .pcard { padding: 24px 20px; }
        }
      `}</style>
    </main>
  )
}