import { useState } from 'react'
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react'
import { colors } from '../data/tokens'
import { useLang } from '../data/LangContext'
import { Fade, GridDots, SectionPrompt } from '../components/ui'

const inputStyle = {
  width: '100%', padding: '14px 16px',
  background: 'var(--c-surface)', border: '1px solid var(--c-rule)',
  color: 'var(--c-bone)', fontFamily: "'Inter', sans-serif",
  fontSize: 14, outline: 'none', transition: 'border-color 0.2s',
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); console.log('Form:', form); setSubmitted(true) }

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Fade><SectionPrompt command={c.tag} /></Fade>

        <Fade delay={0.05}>
          <h1 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 8 }}>{c.heading1}</h1>
          <h1 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24, color: colors.phosphor }}>{c.heading2}</h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: colors.muted, maxWidth: 520, marginBottom: 56 }}>{c.subtitle}</p>
        </Fade>

        <hr className="divider" style={{ marginBottom: 56 }} />

        {submitted ? (
          <Fade>
            <div style={{ padding: '64px 32px', background: colors.surface, border: `1px solid var(--c-phosphor-20)`, textAlign: 'center' }}>
              <p className="fm" style={{ color: colors.phosphor, fontSize: 14, marginBottom: 16 }}>{c.successTag}</p>
              <h2 className="fd" style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>{c.successHeading}</h2>
              <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.7 }}>{c.successMsg}</p>
            </div>
          </Fade>
        ) : (
          <Fade delay={0.1}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 24 }}>
                <div>
                  <label className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{c.nameLabel}</label>
                  <input type="text" placeholder={c.namePlaceholder} value={form.name} onChange={handleChange('name')} style={inputStyle} required />
                </div>
                <div>
                  <label className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{c.emailLabel}</label>
                  <input type="email" placeholder={c.emailPlaceholder} value={form.email} onChange={handleChange('email')} style={inputStyle} required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 24 }}>
                <div>
                  <label className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{c.typeLabel}</label>
                  <select value={form.projectType} onChange={handleChange('projectType')} style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                    <option value="">{c.typePlaceholder}</option>
                    {c.projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{c.budgetLabel}</label>
                  <select value={form.budget} onChange={handleChange('budget')} style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                    <option value="">{c.budgetPlaceholder}</option>
                    {c.budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{c.timelineLabel}</label>
                <input type="text" placeholder={c.timelinePlaceholder} value={form.timeline} onChange={handleChange('timeline')} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 32 }}>
                <label className="fm" style={{ fontSize: 11, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{c.messageLabel}</label>
                <textarea placeholder={c.messagePlaceholder} value={form.message} onChange={handleChange('message')} rows={6} style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }} required />
              </div>
              <button type="button" onClick={handleSubmit} className="cta-primary">
                <Send size={16} /> {c.submitBtn}
              </button>
            </div>
          </Fade>
        )}

        <hr className="divider" style={{ margin: '64px 0' }} />

        <Fade delay={0.15}>
          <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>{c.directLabel}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 96 }}>
            {[
              { Icon: Mail, label: 'Email', value: 'samarasilvia.dev@gmail.com' },
              { Icon: Instagram, label: 'Instagram', value: '@devs_sam' },
              { Icon: Github, label: 'GitHub', value: 'github.com/SamaraSilvia81' },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ padding: '28px 24px', background: colors.surface, border: `1px solid ${colors.rule}` }}>
                <Icon size={18} color="var(--c-phosphor)" style={{ marginBottom: 12 }} />
                <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</p>
                <p className="fm" style={{ fontSize: 13, color: colors.bone }}>{value}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </main>
  )
}