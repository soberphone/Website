"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const orbStates = [
  { src: "/images/orbs/struggling.png", label: "Struggling" },
  { src: "/images/orbs/difficult.png", label: "Difficult" },
  { src: "/images/orbs/okay.png", label: "Okay" },
  { src: "/images/orbs/great.png", label: "Great" },
  { src: "/images/orbs/vibrant.png", label: "Vibrant" },
]

export function HeroSection() {
  return (
    <section className="relative isolate flex flex-col items-center px-6 pt-24 md:pt-32 pb-0 overflow-hidden">
      {/* Background gradient — mirrors the app's AppGradientBackground (white center → #D0DFFF edge) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 40%, #D0DFFF 100%)",
        }}
      />

<div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <Image
          src="/images/soberphone-logo-mark.png"
          alt="Soberphone"
          priority
          width={180}
          height={260}
          className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto mb-3"
        />

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-1 sm:whitespace-nowrap bg-clip-text text-transparent text-balance"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
            }}
          >
            Find freedom from your screen.
          </h1>

          <h2 className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-foreground/85 leading-snug mt-[15px] mb-1 sm:whitespace-nowrap text-balance">
            Willpower, blockers, and hyper-gamification not working?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-balance">
            Get to the root with a social solution that motivates real change.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg"
            >
              Join the Waitlist
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-8 py-6 text-base text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Orb spectrum row — tops poke above the fold, struggling → vibrant L→R.
          Negative -mx-6 breaks out of the section's px-6 so orbs can run nearly edge-to-edge. */}
      <div className="w-[calc(100%+3rem)] -mx-6 mt-[135px] grid grid-cols-5 gap-x-1 sm:gap-x-2 md:gap-x-3 items-end">
        {orbStates.map((orb) => (
          <div key={orb.src} className="flex flex-col items-center w-full">
            {/* aspect-[2/1] + overflow-hidden hides the bottom half of the square orb */}
            <div className="w-full max-w-[260px] aspect-[2/1] overflow-hidden">
              <Image
                src={orb.src}
                alt={orb.label}
                width={512}
                height={512}
                className="w-full h-auto select-none"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
