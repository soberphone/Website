"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    setErrorMessage(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        setErrorMessage(data.error ?? "Could not send message. Please try again.")
        setStatus("error")
        return
      }
      setStatus("sent")
    } catch {
      setErrorMessage("Network error. Please try again.")
      setStatus("error")
    }
  }

  const isSubmitted = status === "sent"
  const isSending = status === "sending"

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative isolate flex flex-col items-center px-6 pt-28 md:pt-36 pb-24 md:pb-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 40%, #D0DFFF 100%)",
          }}
        />

        {/* Vibrant orb — outer wrapper bobs, inner image spins */}
        <div className="animate-float mb-6">
          <Image
            src="/images/orbs/vibrant.png"
            alt="Vibrant orb"
            width={512}
            height={512}
            priority
            className="w-28 sm:w-32 md:w-40 lg:w-44 h-auto animate-spin-slow select-none"
            draggable={false}
          />
        </div>

        <div className="w-full max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4 sm:whitespace-nowrap bg-clip-text text-transparent text-balance"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
            }}
          >
            We&rsquo;d love to hear from you.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            Questions, ideas, feedback, or just a story to share &ndash; all
            welcome.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-5xl mx-auto">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm"
            >
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-foreground">
                  Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="px-5 py-3 rounded-full bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-foreground">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="px-5 py-3 rounded-full bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-foreground">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="px-5 py-3 rounded-2xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-y min-h-32"
                />
              </label>

              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="rounded-full px-8 py-6 bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg self-center disabled:opacity-60"
              >
                {isSending ? "Sending…" : "Send message"}
              </Button>

              {errorMessage && (
                <p className="text-sm text-destructive text-center" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          ) : (
            <div className="p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-primary/30 text-center">
              <p className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                Thanks for reaching out.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                We&rsquo;ll be in touch soon.
              </p>
            </div>
          )}

          {/* Email fallback */}
          <p className="mt-8 text-center text-sm md:text-base text-muted-foreground">
            Prefer your own inbox? Email us at{" "}
            <a
              href="mailto:contact@soberphone.io"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              contact@soberphone.io
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
