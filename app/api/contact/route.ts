import { NextResponse } from "next/server"
import { Resend } from "resend"

// Resend testing mode only allows sending to the account's verified email.
// Once soberphone.io is verified at resend.com/domains, switch this back to
// "contact@soberphone.io".
const CONTACT_TO = "emmett@soberphone.io"

// Resend requires a verified sending domain. Until soberphone.io is verified
// in Resend, we send from their shared dev address. Swap to a verified
// noreply@soberphone.io once the domain is set up.
const CONTACT_FROM = process.env.RESEND_FROM ?? "Soberphone Contact <onboarding@resend.dev>"

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 },
    )
  }
  const resend = new Resend(apiKey)

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { name, email, message } =
    (body as { name?: unknown; email?: unknown; message?: unknown }) ?? {}

  const emailStr = typeof email === "string" ? email.trim() : ""
  const messageStr = typeof message === "string" ? message.trim() : ""
  const nameStr = typeof name === "string" ? name.trim() : ""

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    )
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }
  if (messageStr.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 })
  }

  const fromLabel = nameStr ? `${nameStr} <${emailStr}>` : emailStr
  const subject = nameStr
    ? `Soberphone contact: ${nameStr}`
    : `Soberphone contact: ${emailStr}`

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: emailStr,
      subject,
      text: `From: ${fromLabel}\n\n${messageStr}`,
      html: `<p><strong>From:</strong> ${escapeHtml(fromLabel)}</p><p style="white-space: pre-wrap;">${escapeHtml(messageStr)}</p>`,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Could not send message. Please try again." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form send failed:", err)
    return NextResponse.json(
      { error: "Could not send message. Please try again." },
      { status: 500 },
    )
  }
}
