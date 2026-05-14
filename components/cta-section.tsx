"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EtherealOrb } from "@/components/ethereal-orb"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    setIsSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.95 0.03 270) 0%,
              oklch(0.92 0.05 270) 100%
            )
          `,
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Small Orb */}
        <div className="flex justify-center mb-8">
          <EtherealOrb size="md" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-6 text-balance">
          Stay in orbit
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
          Be the first to know about our launch, updates, and opportunities 
          to join the Soberphone community.
        </p>

        {/* Email Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <Button 
                type="submit"
                size="lg"
                className="rounded-full px-8 py-6 bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg whitespace-nowrap"
              >
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-card border border-primary/30">
            <p className="text-lg text-foreground font-medium mb-2">
              Thanks for joining!
            </p>
            <p className="text-muted-foreground">
              We&apos;ll be in touch soon with updates on Soberphone.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
