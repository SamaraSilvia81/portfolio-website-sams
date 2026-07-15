import { useState } from 'react'
import { Download } from 'lucide-react'
import { colors } from '../data/tokens'
import { aboutPhoto } from '../data/images'
import { Fade, SectionPrompt } from '../components/ui'

const career = [
  { period: 'Jan 2026–Present', role: 'Frontend Software Engineer & UX/UI Designer', org: 'Dental Office Management SaaS', badge: 'FREELANCE', desc: 'B2B SaaS for dental clinics — patient scheduling, medical records, financial dashboards. Next.js, Node.js, MongoDB, Tailwind.', accent: 'var(--c-phosphor)' },
  { period: 'Feb 2025–Aug 2025', role: 'Frontend Software Engineer & UX/UI Designer', org: 'CloudBasics Academy', badge: 'FREELANCE', desc: 'E-learning platform — frontend architecture, Design System, branding, API integration, Core Web Vitals optimization. React.js, Figma.', accent: 'var(--c-ember)' },
  { period: 'Feb 2025–Present', role: 'MSc Candidate — Software Engineering', org: 'CIn/UFPE', badge: 'ACADEMIC', desc: 'Researching technical debt in microfrontend architectures. Building the MFE-OSS dataset (455 validated projects). Advisor: Prof. Vinicius Garcia.', accent: 'var(--c-phosphor)' },
  { period: 'Sep 2023–Dec 2023', role: 'Full Stack Software Engineer', org: 'Mil Folhas (TCC – UNICAP)', badge: 'FREELANCE', desc: 'Customer Service Kiosk — delivered 60% of codebase. React.js, Node.js, ElephantSQL, microservices architecture.', accent: 'var(--c-ember)' },
  { period: 'Sep 2022–Nov 2023', role: 'Frontend Developer & UX/UI', org: 'BidWeb Security IT', badge: 'INTERNSHIP', desc: 'Cybersecurity products — React.js, Zustand, CI/CD on AWS (S3 & EC2), Kibana dashboards. Internal asset management system.', accent: 'var(--c-phosphor)' },
  { period: 'Dec 2021–Mar 2022', role: 'Product Designer & Demoday Winner', org: 'Puberflix — Technical Residency (UNICAP)', badge: '1ST PLACE', desc: '1st Place at Demoday. Educational app for youth health (SDGs). Product Discovery, Design Thinking, Lean Inception, Figma prototyping.', accent: 'var(--c-ember)' },
]

const skills = [
  { name: 'React.js', accent: 1 }, { name: 'Next.js' }, { name: 'JavaScript' },
  { name: 'TypeScript' }, { name: 'Micro-frontends', accent: 2 }, { name: 'Module Federation' },
  { name: 'Tailwind CSS' }, { name: 'Redux' }, { name: 'Zustand' },
  { name: 'Figma', accent: 1 }, { name: 'Design Systems', accent: 2 }, { name: 'Framer Motion' },
  { name: 'Node.js' }, { name: 'Express' }, { name: 'GraphQL' },
  { name: 'MongoDB' }, { name: 'Supabase' }, { name: 'Firebase' },
  { name: 'AWS' }, { name: 'CI/CD', accent: 1 }, { name: 'Git' },
  { name: 'REST API' }, { name: 'Jest' }, { name: 'Vercel' },
  { name: 'UX Research' }, { name: 'Design Thinking', accent: 2 }, { name: 'Responsive Design' },
]

const faq = [
  { q: 'What does your frontend stack look like in practice?', a: 'React + Vite for complex SPAs, Next.js for SSR/SSG. Redux Toolkit or Zustand for state. Supabase or Firebase for backend. Tailwind when speed matters, CSS Modules for specificity, vanilla CSS for full control. Everything deploys on Vercel.' },
  { q: 'How do you approach a new UX/UI project?', a: "Problem first, pixels later. Competitive analysis, user context mapping, information architecture. Then wireframes → hi-fi in Figma → build. I don't hand off designs — I build what I design, so my designs are already informed by what's feasible and performant." },
  { q: "What's your research about?", a: 'My MSc investigates how Self-Admitted Technical Debt (SATD) reveals architectural challenges in microfrontend systems. Built a dataset of 455 validated MFE projects from GitHub, analyzed through the GQM framework. Output: guidelines for implementing MFEs at scale without crippling debt.' },
  { q: "What's a design system to you?", a: "A shared language between design and code: tokens, patterns, and documentation. It's overkill for a landing page. It's essential the moment a second developer touches the codebase. My .sh ecosystem projects share token conventions — a lightweight system-of-systems approach." },
  { q: 'How do you handle a project that needs to ship fast?', a: "Scope ruthlessly, build the critical path first, cut features — not corners. Vanilla JS if a framework slows me down, pre-built components if custom ones aren't the differentiator, Supabase over a custom backend for MVPs. Semantic HTML, accessibility, and clean code are never negotiable." },
  { q: 'What challenges do you enjoy most?', a: 'The intersection of systems thinking and visual craft. Designing a grading schema for real classrooms. Building a saga-gating system that feels like discovery. Mapping 22 database tables with proper RLS policies. Problems where the solution must be technically sound AND human-centered.' },
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Fade><SectionPrompt command="cat about.sh --verbose" /></Fade>

        {/* INTRO */}
        <Fade delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, marginBottom: 80, alignItems: 'start' }}>
            <div>
              <h1 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>
                Samara Silvia<br /><span style={{ color: colors.phosphor }}>Sabino</span>
              </h1>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: colors.bone87, marginBottom: 16 }}>
                Full Stack Software Engineer focused on React.js, Node.js, and the AWS ecosystem. Hands-on experience building scalable architectures, modular interfaces (Micro-frontends), and CI/CD pipelines.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: colors.bone87, marginBottom: 24 }}>
                Currently pursuing an MSc in Software Engineering at CIn/UFPE with emphasis on architecture. The <span className="fm" style={{ color: colors.phosphor, fontSize: 13, background: colors.phosphor5, padding: '2px 8px' }}>.sh ecosystem</span> is my playground — tools I build, use, and teach with.
              </p>
              <a href="/resume-en.pdf" target="_blank" rel="noopener" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: colors.ember, color: '#fff', border: 'none',
                padding: '12px 24px', fontFamily: "'Space Grotesk'",
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
                transition: 'all 0.3s',
              }}>
                <Download size={16} /> Download Resume (EN)
              </a>
            </div>

            {/* FOTO — fonte em src/data/photos.json → "about" */}
            <div style={{ aspectRatio: '3/4', background: colors.surface, border: `1px solid ${colors.rule}`, position: 'relative', overflow: 'hidden' }}>
              <img
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: aboutPhoto.pos, filter: 'grayscale(15%) contrast(1.05)',
                }}
              />
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        {/* SKILLS CLOUD */}
        <Fade delay={0.08}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command="echo $SKILLS" />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, textAlign: 'center' }}>
              Hard Skills & <span style={{ color: colors.ember }}>Tools</span>
            </h2>
            <div className="skill-cloud">
              {skills.map((s, i) => (
                <span
                  key={s.name}
                  className={`skill-pill ${s.accent === 1 ? 'accent-1' : s.accent === 2 ? 'accent-2' : ''}`}
                  style={{ '--delay': `${i * 0.15}s` }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        {/* CAREER */}
        <Fade delay={0.1}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command="git log --oneline career/" />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>
              Career <span style={{ color: colors.ember }}>Timeline</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {career.map((c, i) => (
                <Fade key={i} delay={0.04 + i * 0.05}>
                  <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, padding: '28px 0', borderBottom: `1px solid ${colors.rule}` }}>
                    <div>
                      <span className="fm" style={{ fontSize: 12, color: c.accent, fontWeight: 500 }}>{c.period}</span>
                      <span className="fm" style={{ display: 'block', fontSize: 9, color: colors.void, background: c.accent, padding: '2px 8px', marginTop: 8, letterSpacing: '0.06em', fontWeight: 700, width: 'fit-content' }}>{c.badge}</span>
                    </div>
                    <div>
                      <h3 className="fd" style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{c.role}</h3>
                      <p className="fm" style={{ fontSize: 12, color: colors.muted, marginBottom: 10 }}>{c.org}</p>
                      <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.bone67 }}>{c.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        {/* EDUCATION */}
        <Fade delay={0.12}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command="cat education.sh" />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { degree: 'M.Sc. in Computer Science', school: 'Universidade Federal de Pernambuco, CIn', period: 'Feb 2025 – Present', accent: colors.phosphor },
                { degree: 'Technologist in Internet Systems', school: 'Universidade Católica de Pernambuco', period: 'Nov 2021 – Dec 2023', accent: colors.ember },
                { degree: 'Technical High School in Business Administration', school: 'ETE Advogado José David Gil Rodrigues', period: 'Nov 2017 – Dec 2020', accent: colors.muted },
              ].map((e, i) => (
                <div key={i} style={{ padding: '20px 24px', background: colors.surface, border: `1px solid ${colors.rule}`, borderLeft: `3px solid ${e.accent}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                    <h3 className="fd" style={{ fontSize: 16, fontWeight: 700 }}>{e.degree}</h3>
                    <span className="fm" style={{ fontSize: 11, color: colors.muted }}>{e.period}</span>
                  </div>
                  <p className="fm" style={{ fontSize: 12, color: colors.muted, marginTop: 4 }}>{e.school}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        {/* FAQ TÉCNICO */}
        <Fade delay={0.15}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command="man sams" />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
              Technical <span style={{ color: colors.phosphor }}>FAQ</span>
            </h2>
            <p style={{ fontSize: 14, color: colors.muted, marginBottom: 40, lineHeight: 1.7 }}>
              The questions I get asked in interviews, client calls, and DMs — answered once, honestly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faq.map((item, i) => (
                <div key={i}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: '100%', textAlign: 'left',
                    background: openFaq === i ? colors.surface : 'transparent',
                    border: 'none', borderBottom: `1px solid ${colors.rule}`,
                    padding: '20px 24px', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    gap: 16, transition: 'background 0.2s', color: colors.bone,
                  }}>
                    <span className="fd" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{item.q}</span>
                    <span className="fm" style={{ fontSize: 18, color: colors.phosphor, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(.16,1,.3,1)' }}>
                    <div style={{ padding: '20px 24px 28px', background: colors.surface, borderBottom: `1px solid ${colors.rule}` }}>
                      <p style={{ fontSize: 14, lineHeight: 1.8, color: colors.bone73 }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <div style={{ height: 96 }} />
      </div>
    </main>
  )
}