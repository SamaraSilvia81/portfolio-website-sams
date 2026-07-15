import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight, ChevronRight, Mail, Github, Linkedin, Instagram,
  Code2, Palette, Layout, GraduationCap
} from 'lucide-react'
import { colors, rawColors } from '../data/tokens'
import { projects, services, stack } from '../data/projects'
import { heroImage } from '../data/images'
import { Fade, Crosshairs, GridDots, SectionPrompt } from '../components/ui'

const iconMap = { frontend: Code2, uxui: Palette, systems: Layout, edtech: GraduationCap }

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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
        <div style={{ position: 'absolute', top: 120, right: 60, opacity: 0.15 }}><Crosshairs size={40} color={rawColors.phosphor} /></div>
        <div style={{ position: 'absolute', bottom: 80, left: 40, opacity: 0.1 }}><GridDots rows={6} cols={8} color={rawColors.phosphor} /></div>
        <div style={{ position: 'absolute', top: '30%', right: 0, width: 120, height: 1, background: colors.rule }} />
        <div style={{ position: 'absolute', bottom: '25%', left: 0, width: 80, height: 1, background: colors.rule }} />

        {/* FLOATING PHOTO — sits behind/beside the text */}
        {/* Fonte da imagem: src/data/photos.json → "hero" */}
        <div className="hero-photo-wrap">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="hero-photo"
            style={{ objectPosition: heroImage.pos }}
          />
        </div>

        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          <Fade>
            <p className="fm" style={{ color: colors.phosphor, fontSize: 13, marginBottom: 32, letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, background: colors.phosphor, borderRadius: '50%' }} />
              $ whoami<span className="blink">_</span>
            </p>
          </Fade>

          <Fade delay={0.08}>
            <h1 className="fd" style={{ fontSize: 'clamp(56px, 11vw, 110px)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 4 }}>
              <span>FRONT</span><span style={{ color: colors.phosphor }}>END</span>
            </h1>
          </Fade>
          <Fade delay={0.14}>
            <h1 className="fd" style={{ fontSize: 'clamp(56px, 11vw, 110px)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 4 }}>
              DEVELOPER
            </h1>
          </Fade>
          <Fade delay={0.2}>
            <h1 className="fd text-outline muted-stroke" style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: 36 }}>
              & UX DESIGNER
            </h1>
          </Fade>

          <Fade delay={0.28}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 40 }}>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: colors.bone, maxWidth: 420, opacity: 0.9 }}>
                I craft digital products where code meets design craft.
                Intentional interfaces, scalable systems, real impact.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Status</span>
                <span className="fm" style={{ fontSize: 12, color: colors.phosphor, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, background: colors.phosphor, borderRadius: '50%', boxShadow: '0 0 8px ' + colors.phosphor40 }} />
                  Available
                </span>
                <span className="fm" style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>📍 Recife, PE — Brazil</span>
              </div>
            </div>
          </Fade>

          <Fade delay={0.35}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/projects" style={{
                background: colors.ember, color: '#fff', border: 'none',
                padding: '12px 28px', fontFamily: "'Space Grotesk'", fontWeight: 600,
                fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
                textDecoration: 'none', transition: 'all 0.3s',
              }}>
                View Projects <ChevronRight size={14} />
              </Link>
              <Link to="/contact" style={{
                background: 'transparent', color: colors.bone,
                border: `1px solid ${colors.rule}`, padding: '12px 28px',
                fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 14,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                textDecoration: 'none', transition: 'all 0.3s',
              }}>
                Get in Touch
              </Link>
            </div>
          </Fade>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ ABOUT PREVIEW ████ */}
      <section style={{ padding: '96px 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 40, right: 28, opacity: 0.08 }}><GridDots rows={5} cols={5} color={rawColors.bone} /></div>
        <div className="container">
          <Fade><SectionPrompt command="cat about.sh" /></Fade>

          <Fade delay={0.08}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
              <div>
                <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, lineHeight: 1.15 }}>
                  Building digital products<br /><span style={{ color: colors.phosphor }}>with intention.</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.bone, opacity: 0.85, marginBottom: 16 }}>
                  Frontend developer and UX/UI designer. Currently pursuing an MSc in Computer Science at CIn/UFPE, researching how technical debt reveals architectural challenges in microfrontend systems at scale.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.bone, opacity: 0.85, marginBottom: 24 }}>
                  I build the <span className="fm" style={{ color: colors.phosphor, fontSize: 13, background: colors.phosphor5, padding: '2px 8px' }}>.sh ecosystem</span> — tools for researchers, educators, and creators.
                </p>
                <Link to="/about" className="fm" style={{ fontSize: 13, color: colors.phosphor, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '0.02em' }}>
                  More about me <ArrowUpRight size={14} />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ padding: '20px 24px', background: colors.surface, border: `1px solid ${colors.rule}`, borderLeft: `3px solid ${colors.phosphor}` }}>
                  <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Research</span>
                  <p className="fd" style={{ fontSize: 14, fontWeight: 600, marginTop: 6, lineHeight: 1.5 }}>Technical Debt × Microfrontends</p>
                  <p className="fm" style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>CIn/UFPE · Prof. Vinicius Garcia</p>
                </div>
                <div style={{ padding: '20px 24px', background: colors.surface, border: `1px solid ${colors.rule}`, borderLeft: `3px solid ${colors.ember}` }}>
                  <span className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Teaching</span>
                  <p className="fd" style={{ fontSize: 14, fontWeight: 600, marginTop: 6, lineHeight: 1.5 }}>Design Thinking · UX · Development</p>
                  <p className="fm" style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>ETE Cícero Dias · Recife, PE</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={0.15}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 1, background: colors.rule, border: `1px solid ${colors.rule}`, marginTop: 56,
            }}>
              {[
                { num: '10+', lbl: 'Projects shipped' },
                { num: '3+', lbl: 'Years building' },
                { num: 'MSc', lbl: 'Researcher' },
                { num: 'EDU', lbl: 'Educator' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '24px 16px', background: colors.surface }}>
                  <div className="fd" style={{ fontSize: 36, fontWeight: 700, color: colors.phosphor, lineHeight: 1 }}>{s.num}</div>
                  <div className="fm" style={{ fontSize: 10, color: colors.muted, marginTop: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ PROJECTS ████ */}
      <section style={{ padding: '96px 0', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 60, right: 20, opacity: 0.1 }}><Crosshairs size={32} color={rawColors.ember} /></div>
        <div className="container">
          <Fade><SectionPrompt command="ls ~/projects/" right={`${projects.length} entries · drwxr-xr-x`} /></Fade>
          <Fade delay={0.05}>
            <h2 className="fd" style={{ fontSize: 40, fontWeight: 700, marginBottom: 48 }}>
              Selected <span style={{ color: colors.phosphor }}>Work</span>
            </h2>
          </Fade>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
            {projects.map((p, i) => (
              <Fade key={p.id} delay={0.03 + i * 0.06}>
                <Link to={`/projects/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div
                    className="pcard"
                    style={{
                      '--accent': p.accent,
                      '--mx': `${((mousePos.x + 4) / 8) * 100}%`,
                      '--my': `${((mousePos.y + 4) / 8) * 100}%`,
                      transform: hoveredProject === p.id
                        ? `perspective(600px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg) translateY(-4px)`
                        : 'perspective(600px) rotateX(0) rotateY(0)',
                    }}
                    onMouseEnter={() => setHoveredProject(p.id)}
                    onMouseLeave={() => { setHoveredProject(null); setMousePos({ x: 0, y: 0 }) }}
                    onMouseMove={handleCardMouse}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <span className="fm" style={{ fontSize: 13, color: p.accent, fontWeight: 700 }}>{p.id}/</span>
                      <ArrowUpRight size={18} className="pcard-arrow" />
                    </div>
                    <h3 className="fd pcard-name" style={{
                      fontSize: 26, fontWeight: 700, marginBottom: 4, lineHeight: 1.15,
                      '--accent': p.accent,
                      position: 'relative', zIndex: 1,
                    }}>{p.name}</h3>
                    <p className="fm" style={{ fontSize: 12, color: colors.muted, marginBottom: 12, letterSpacing: '0.02em', position: 'relative', zIndex: 1 }}>{p.type}</p>
                    <p style={{ fontSize: 13, color: colors.bone67, lineHeight: 1.65, marginBottom: 20, position: 'relative', zIndex: 1 }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                      {p.tags.map((t) => (
                        <span key={t} className="fm" style={{
                          fontSize: 10, color: colors.muted,
                          border: `1px solid ${colors.rule}`,
                          padding: '3px 10px', letterSpacing: '0.04em', textTransform: 'uppercase',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ SERVICES ████ */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <Fade><SectionPrompt command="cat services.sh" /></Fade>
          <Fade delay={0.05}>
            <h2 className="fd" style={{ fontSize: 40, fontWeight: 700, marginBottom: 48 }}>
              What I <span style={{ color: colors.phosphor }}>Do</span>
            </h2>
          </Fade>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {services.map((s, i) => {
              const Icon = iconMap[s.id]
              return (
                <Fade key={s.id} delay={0.04 + i * 0.07}>
                  <div className="svc-block">
                    <div style={{
                      width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: colors.phosphor5, border: '1px solid ' + colors.phosphor12,
                      marginBottom: 20,
                    }}>
                      <Icon size={20} color={rawColors.phosphor} />
                    </div>
                    <h3 className="fd" style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.muted }}>{s.desc}</p>
                  </div>
                </Fade>
              )
            })}
          </div>

          {/* STACK */}
          <Fade delay={0.1}>
            <div style={{
              marginTop: 64, padding: '36px 28px',
              background: colors.surface, border: `1px solid ${colors.rule}`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 16, right: 20, opacity: 0.15 }}><Crosshairs size={20} color={rawColors.phosphor} /></div>
              <p className="fm" style={{ fontSize: 11, color: colors.muted, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ~/stack · tools & technologies
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {stack.map((t) => (
                  <span key={t} className="stack-pill">{t}</span>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <hr className="divider" />

      {/* ████ CONTACT CTA ████ */}
      <section style={{ padding: '120px 0 96px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 60, left: 30, opacity: 0.06 }}><GridDots rows={8} cols={10} color={rawColors.phosphor} /></div>
        <div className="container">
          <Fade><SectionPrompt command="./contact.sh" /></Fade>
          <Fade delay={0.08}>
            <h2 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 8, maxWidth: 600 }}>
              Let's build<br />something
            </h2>
            <h2 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24, color: colors.phosphor }}>
              with intent.
            </h2>
          </Fade>
          <Fade delay={0.16}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: colors.muted, maxWidth: 460, marginBottom: 40 }}>
              Got a project, collaboration, or idea in mind? I'm currently available for freelance, contract, and open-source work.
            </p>
          </Fade>
          <Fade delay={0.22}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link to="/contact" style={{
                background: colors.ember, color: '#fff', border: 'none',
                padding: '12px 28px', fontFamily: "'Space Grotesk'", fontWeight: 600,
                fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
                textDecoration: 'none',
              }}>
                <Mail size={16} /> Get in Touch
              </Link>
            </div>
          </Fade>
          <Fade delay={0.28}>
            <div>
              <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Connect</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[Github, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" style={{
                    color: colors.muted, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 48, height: 48, border: `1px solid ${colors.rule}`, transition: 'all 0.25s',
                  }}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  )
}