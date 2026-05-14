"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { PhoneMockup } from "@/components/phone-mockup"

type Tier = "sm" | "md" | "lg" | "xl"

function useViewportTier(): Tier {
  const [tier, setTier] = useState<Tier>("md")
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= 1280) setTier("xl")
      else if (w >= 1024) setTier("lg")
      else if (w >= 640) setTier("md")
      else setTier("sm")
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  return tier
}

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
        {/* Phones (left on desktop, above text on mobile/tablet) */}
        <div className="flex justify-center lg:justify-start">
          <PhoneLayered />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto lg:-translate-x-[34px] xl:translate-x-0">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight text-foreground mb-6">
            <span className="block whitespace-nowrap">The social solution</span>
            <span className="block whitespace-nowrap">for getting off your screen.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-pretty">
            Break the spell with Soberphone. Go beyond willpower with tools and
            support systems that work.
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
  const tier = useViewportTier()
  const s = {
    sm: { back: 110, front: 130, h: 290, w: 310, top: 24 },
    md: { back: 130, front: 150, h: 330, w: 360, top: 28 },
    lg: { back: 130, front: 150, h: 330, w: 340, top: 28 },
    xl: { back: 175, front: 200, h: 430, w: 460, top: 36 },
  }[tier]

  return (
    <div
      className="relative mx-auto"
      style={{ width: `${s.w}px`, height: `${s.h}px` }}
    >
      {/* Back-left: Chat */}
      <PhoneMockup
        src="/images/screen-chat.png"
        alt="Soberphone chat with supporters"
        width={s.back}
        className="absolute left-8 top-8 -rotate-[10deg] origin-bottom-right"
      />

      {/* Back-right: Goals */}
      <PhoneMockup
        src="/images/screen-goals.png"
        alt="Soberphone goals dashboard"
        width={s.back}
        className="absolute right-8 top-8 rotate-[10deg] origin-bottom-left"
      />

      {/* Front-center: Orb */}
      <PhoneMockup
        src="/images/screen-orb.png"
        alt="Soberphone home with ethereal orb"
        priority
        width={s.front}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10"
      />
    </div>
  )
}
