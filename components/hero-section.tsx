"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { PhoneMockup } from "@/components/phone-mockup"

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-[8px] md:pt-[40px]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.95 0.03 270) 0%,
              oklch(0.97 0.01 280) 50%,
              oklch(0.98 0.005 60) 100%
            )
          `,
        }}
      />

      {/* Blurred drifting orb (matches app's goals page) */}
      <div className="absolute inset-0 -z-[5] overflow-hidden pointer-events-none" aria-hidden>
        <div className="animate-orb-drift absolute top-0 left-0">
          <div className="animate-orb-sway">
            <Image
              src="/images/orb.png"
              alt=""
              width={300}
              height={300}
              className="blur-[60px] opacity-50"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Phones (left on desktop, below on mobile) */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <PhoneLayered />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground mb-6">
            <span className="block whitespace-nowrap">Break the spell.</span>
            <span className="block italic">Together.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-pretty">
            Soberphone is for the fed-up and ready. It offers first-of-its-kind
            tools to get you off your screen, with a real support system
            that drives lasting change.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-8 py-6 text-base text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  )
}

function PhoneLayered() {
  return (
    <div className="relative mx-auto h-[360px] sm:h-[400px] lg:h-[460px] w-full max-w-[420px]">
      {/* Back-left: Chat */}
      <PhoneMockup
        src="/images/screen-chat.png"
        alt="Soberphone chat with supporters"
        className="absolute left-0 top-6 sm:top-8 w-[140px] sm:w-[160px] lg:w-[180px] -rotate-[10deg] origin-bottom-right"
      />

      {/* Back-right: Goals */}
      <PhoneMockup
        src="/images/screen-goals.png"
        alt="Soberphone goals dashboard"
        className="absolute right-0 top-6 sm:top-8 w-[140px] sm:w-[160px] lg:w-[180px] rotate-[10deg] origin-bottom-left"
      />

      {/* Front-center: Orb */}
      <PhoneMockup
        src="/images/screen-orb.png"
        alt="Soberphone home with ethereal orb"
        priority
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-[160px] sm:w-[180px] lg:w-[210px]"
      />
    </div>
  )
}
