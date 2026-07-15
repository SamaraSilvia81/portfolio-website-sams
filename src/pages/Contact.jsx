import { useState } from 'react'
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react'
import { colors } from '../data/tokens'
import { Fade, Crosshairs, GridDots, SectionPrompt } from '../components/ui'

const projectTypes = ['Website / Landing Page', 'Web Application', 'UX/UI Design', 'Design System', 'EdTech Platform', 'Consulting', 'Other']
const budgetRanges = ['< R$ 2.000', 'R$ 2.000–5.000', 'R$ 5.000–10.000', 'R$ 10.000+', 'Let\'s discuss']

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  background: colors.surface,
  border: `1px solid ${colors.rule}`,
  color: colors.bone,
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: colors.muted,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: 8,
  display: 'block',
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', projectType: '', budget: '', timeline: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to form backend (Formspree, Supabase, etc.)
    console.log('Form data:', form)
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: 108 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Fade>
          <SectionPrompt command="./contact.sh --interactive" />
        </Fade>

        <Fade delay={0.05}>
          <h1 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 8 }}>
            Let's build something
          </h1>
          <h1 className="fd" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24, color: colors.phosphor }}>
            with intent.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: colors.muted, maxWidth: 520, marginBottom: 56 }}>
            Whether it's a full product build, a design system, or a quick consultation — fill out the form below and I'll get back to you within 48 hours.
          </p>
        </Fade>

        <hr className="divider" style={{ marginBottom: 56 }} />

        {submitted ? (
          <Fade>
            <div style={{
              padding: '64px 32px', background: colors.surface,
              border: '1px solid ' + colors.phosphor20,
              textAlign: 'center',
            }}>
              <p className="fm" style={{ color: colors.phosphor, fontSize: 14, marginBottom: 16 }}>
                $ message sent successfully ✓
              </p>
              <h2 className="fd" style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Thank you!</h2>
              <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.7 }}>
                I'll review your project details and get back to you within 48 hours.
              </p>
            </div>
          </Fade>
        ) : (
          <Fade delay={0.1}>
            <div onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 24 }}>
                {/* NAME */}
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange('name')}
                    style={inputStyle}
                    required
                  />
                </div>
                {/* EMAIL */}
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 24 }}>
                {/* PROJECT TYPE */}
                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select
                    value={form.projectType}
                    onChange={handleChange('projectType')}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B63' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="" style={{ background: colors.surface }}>Select type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: colors.surface }}>{t}</option>
                    ))}
                  </select>
                </div>
                {/* BUDGET */}
                <div>
                  <label style={labelStyle}>Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={handleChange('budget')}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B63' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="" style={{ background: colors.surface }}>Select range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} style={{ background: colors.surface }}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* TIMELINE */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Timeline</label>
                <input
                  type="text"
                  placeholder="e.g. 2 weeks, 1 month, flexible"
                  value={form.timeline}
                  onChange={handleChange('timeline')}
                  style={inputStyle}
                />
              </div>

              {/* MESSAGE */}
              <div style={{ marginBottom: 32 }}>
                <label style={labelStyle}>Project Details</label>
                <textarea
                  placeholder="Tell me about your project — goals, audience, any references..."
                  value={form.message}
                  onChange={handleChange('message')}
                  rows={6}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  required
                />
              </div>

              {/* SUBMIT */}
              <button
                type="button"
                onClick={handleSubmit}
                style={{
                  background: colors.ember, color: '#fff', border: 'none',
                  padding: '14px 32px', fontFamily: "'Space Grotesk'",
                  fontWeight: 600, fontSize: 15, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  transition: 'all 0.3s',
                }}
              >
                <Send size={16} /> Send Message
              </button>
            </div>
          </Fade>
        )}

        <hr className="divider" style={{ margin: '64px 0' }} />

        {/* DIRECT CONTACT */}
        <Fade delay={0.15}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16, marginBottom: 96,
          }}>
            <div style={{ padding: '28px 24px', background: colors.surface, border: `1px solid ${colors.rule}` }}>
              <Mail size={18} color={colors.phosphor} style={{ marginBottom: 12 }} />
              <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Email</p>
              <p className="fm" style={{ fontSize: 13, color: colors.bone }}>hello@sams.sh</p>
            </div>
            <div style={{ padding: '28px 24px', background: colors.surface, border: `1px solid ${colors.rule}` }}>
              <Instagram size={18} color={colors.phosphor} style={{ marginBottom: 12 }} />
              <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Instagram</p>
              <p className="fm" style={{ fontSize: 13, color: colors.bone }}>@devs_sam</p>
            </div>
            <div style={{ padding: '28px 24px', background: colors.surface, border: `1px solid ${colors.rule}` }}>
              <Github size={18} color={colors.phosphor} style={{ marginBottom: 12 }} />
              <p className="fm" style={{ fontSize: 10, color: colors.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>GitHub</p>
              <p className="fm" style={{ fontSize: 13, color: colors.bone }}>github.com/sams</p>
            </div>
          </div>
        </Fade>
      </div>

      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: ${colors.phosphor} !important;
        }
        input::placeholder, textarea::placeholder {
          color: ${colors.muted};
          opacity: 0.6;
        }
        select option { background: ${colors.surface}; color: ${colors.bone}; }
      `}</style>
    </main>
  )
}
