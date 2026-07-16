import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { colors, rawColors } from '../data/tokens'
import { useLang } from '../data/LangContext'
import { useSupabase } from '../hooks/useSupabase'
import { Fade, Crosshairs, SectionPrompt } from '../components/ui'

export default function About() {
  const { t } = useLang()
  const a = t.about
  const [openFaq, setOpenFaq] = useState(null)

  const { data: career, loading: loadCareer } = useSupabase('career')
  const { data: education, loading: loadEdu } = useSupabase('education')
  const { data: skills, loading: loadSkills } = useSupabase('skills')
  const { data: faq, loading: loadFaq } = useSupabase('faq')

  const isLoading = loadCareer || loadEdu || loadSkills || loadFaq

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Fade><SectionPrompt command={a.tag} /></Fade>

        {/* INTRO */}
        <Fade delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, marginBottom: 80, alignItems: 'start' }}>
            <div>
              <h1 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>
                {a.name1}<br /><span style={{ color: colors.phosphor }}>{a.name2}</span>
              </h1>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: colors.bone87, marginBottom: 16 }}>{a.p1}</p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: colors.bone87, marginBottom: 24 }}>
                {a.p2Pre}<span className="fm" style={{ color: colors.phosphor, fontSize: 13, background: colors.phosphor5, padding: '2px 8px' }}>{a.p2Tag}</span>{a.p2Post}
              </p>
              <a href="/resume-en.pdf" target="_blank" rel="noopener" className="cta-primary">
                <Download size={16} /> {a.resumeBtn}
              </a>
            </div>
            <div style={{ aspectRatio: '3/4', background: colors.surface, border: `1px solid ${colors.rule}`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <div style={{ textAlign: 'center', padding: 32 }}>
                <Crosshairs size={32} color={rawColors.rule} style={{ margin: '0 auto 16px' }} />
                <p className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em' }}>{a.photoPlaceholder}</p>
              </div>
            </div>
          </div>
        </Fade>

        <hr className="divider" />

        {/* SKILLS */}
        <Fade delay={0.08}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command={a.skillsTag} />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, textAlign: 'center' }}>
              {a.skillsHeading}<span style={{ color: colors.ember }}>{a.skillsHeadingAccent}</span>
            </h2>
            {loadSkills ? (
              <div style={{ textAlign: 'center', padding: 40 }}><Loader2 size={24} color={rawColors.phosphor} style={{ animation: 'spin 1s linear infinite' }} /></div>
            ) : (
              <div className="skill-cloud">
                {skills.map((s, i) => (
                  <span key={s.id} className={`skill-pill ${s.accent === 1 ? 'accent-1' : s.accent === 2 ? 'accent-2' : ''}`} style={{ '--delay': `${i * 0.15}s` }}>
                    {s.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Fade>

        <hr className="divider" />

        {/* CAREER */}
        <Fade delay={0.1}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command={a.careerTag} />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>
              {a.careerHeading}<span style={{ color: colors.ember }}>{a.careerHeadingAccent}</span>
            </h2>
            {loadCareer ? (
              <div style={{ textAlign: 'center', padding: 40 }}><Loader2 size={24} color={rawColors.phosphor} style={{ animation: 'spin 1s linear infinite' }} /></div>
            ) : (
              <div>
                {career.map((c, i) => (
                  <Fade key={c.id} delay={0.04 + i * 0.05}>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, padding: '28px 0', borderBottom: `1px solid ${colors.rule}` }}>
                      <div>
                        <span className="fm" style={{ fontSize: 12, color: `var(--c-${c.accent})`, fontWeight: 500 }}>{c.period}</span>
                        <span className="fm" style={{ display: 'block', fontSize: 9, color: colors.void, background: `var(--c-${c.accent})`, padding: '2px 8px', marginTop: 8, letterSpacing: '0.06em', fontWeight: 700, width: 'fit-content' }}>{c.badge}</span>
                      </div>
                      <div>
                        <h3 className="fd" style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{c.role}</h3>
                        <p className="fm" style={{ fontSize: 12, color: colors.muted, marginBottom: 10 }}>{c.org}</p>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.bone67 }}>{c.description}</p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}
          </div>
        </Fade>

        <hr className="divider" />

        {/* EDUCATION */}
        <Fade delay={0.12}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command={a.eduTag} />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>{a.eduHeading}</h2>
            {loadEdu ? (
              <div style={{ textAlign: 'center', padding: 40 }}><Loader2 size={24} color={rawColors.phosphor} style={{ animation: 'spin 1s linear infinite' }} /></div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {education.map((e) => (
                  <div key={e.id} style={{ padding: '20px 24px', background: colors.surface, border: `1px solid ${colors.rule}`, borderLeft: `3px solid var(--c-${e.accent})` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                      <h3 className="fd" style={{ fontSize: 16, fontWeight: 700 }}>{e.degree}</h3>
                      <span className="fm" style={{ fontSize: 11, color: colors.muted }}>{e.period}</span>
                    </div>
                    <p className="fm" style={{ fontSize: 12, color: colors.muted, marginTop: 4 }}>{e.school}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Fade>

        <hr className="divider" />

        {/* FAQ */}
        <Fade delay={0.15}>
          <div style={{ padding: '64px 0' }}>
            <SectionPrompt command={a.faqTag} />
            <h2 className="fd" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
              {a.faqHeading}<span style={{ color: colors.phosphor }}>{a.faqHeadingAccent}</span>
            </h2>
            <p style={{ fontSize: 14, color: colors.muted, marginBottom: 40, lineHeight: 1.7 }}>{a.faqSub}</p>
            {loadFaq ? (
              <div style={{ textAlign: 'center', padding: 40 }}><Loader2 size={24} color={rawColors.phosphor} style={{ animation: 'spin 1s linear infinite' }} /></div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {faq.map((item, i) => (
                  <div key={item.id}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                      width: '100%', textAlign: 'left',
                      background: openFaq === i ? colors.surface : 'transparent',
                      border: 'none', borderBottom: `1px solid ${colors.rule}`,
                      padding: '20px 24px', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      gap: 16, transition: 'background 0.2s', color: colors.bone,
                    }}>
                      <span className="fd" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{item.question}</span>
                      <span className="fm" style={{ fontSize: 18, color: colors.phosphor, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                    </button>
                    <div style={{ maxHeight: openFaq === i ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(.16,1,.3,1)' }}>
                      <div style={{ padding: '20px 24px 28px', background: colors.surface, borderBottom: `1px solid ${colors.rule}` }}>
                        <p style={{ fontSize: 14, lineHeight: 1.8, color: colors.bone73 }}>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Fade>

        <div style={{ height: 96 }} />
      </div>
    </main>
  )
}