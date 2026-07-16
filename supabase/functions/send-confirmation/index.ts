import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = 'onboarding@resend.dev'
const SAMS_EMAIL = 'samarasilvia.dev@gmail.com'

serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record

    if (!record?.email || !record?.name) {
      return new Response(JSON.stringify({ error: 'Missing data' }), { status: 400 })
    }

    // 1. Confirmation to client
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: record.email,
        subject: `Got it, ${record.name}! I'll review your project soon`,
        html: `<div style="font-family:system-ui;max-width:560px;margin:0 auto;padding:40px 24px;color:#E8E4DE;background:#0B0B0B"><div style="border-bottom:2px solid #972fff;padding-bottom:20px;margin-bottom:32px"><h1 style="font-size:24px;margin:0;color:#E8E4DE">sams<span style="color:#972fff">.sh</span></h1></div><p style="font-size:16px;line-height:1.7">Hey ${record.name},</p><p style="font-size:15px;line-height:1.7;color:#aaa">Thanks for reaching out! I received your project inquiry.</p><div style="background:#141413;border:1px solid #252523;border-left:3px solid #972fff;padding:20px;margin:24px 0"><p style="margin:0 0 8px;font-size:13px;color:#6B6B63;text-transform:uppercase;letter-spacing:0.06em">Project Details</p>${record.project_type ? `<p style="margin:4px 0;font-size:14px"><strong style="color:#972fff">Type:</strong> ${record.project_type}</p>` : ''}${record.budget ? `<p style="margin:4px 0;font-size:14px"><strong style="color:#972fff">Budget:</strong> ${record.budget}</p>` : ''}${record.timeline ? `<p style="margin:4px 0;font-size:14px"><strong style="color:#972fff">Timeline:</strong> ${record.timeline}</p>` : ''}</div><p style="font-size:15px;line-height:1.7;color:#aaa">I'll get back to you within <strong style="color:#ff22d6">72 hours</strong> with my initial thoughts.</p><div style="border-top:1px solid #252523;padding-top:24px;margin-top:32px"><p style="font-size:13px;color:#6B6B63;margin:0">Samara Silvia Sabino · Frontend Developer & UX Designer</p></div></div>`,
      }),
    })

    // 2. Notify Sams
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: SAMS_EMAIL,
        subject: `New inquiry from ${record.name}`,
        html: `<div style="font-family:system-ui;padding:24px"><h2 style="color:#972fff">New Contact</h2><p><b>Name:</b> ${record.name}</p><p><b>Email:</b> ${record.email}</p><p><b>Type:</b> ${record.project_type || '—'}</p><p><b>Budget:</b> ${record.budget || '—'}</p><p><b>Timeline:</b> ${record.timeline || '—'}</p><hr><p>${record.message}</p></div>`,
      }),
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})