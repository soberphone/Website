"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WAITLIST_URL, BETA_URL } from "@/lib/links"

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative z-10"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Backdrop matching the HowItWorks page bg — fills the rectangular section so the rounded sheet's corner cut-outs read as a continuation of the page above */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, #353535 0%, #2e2e2e 55%, #232323 100%)",
        }}
      />

      <div className="relative isolate px-6 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-12px_30px_-12px_rgba(40,50,90,0.18)] pt-24 md:pt-32 pb-44 md:pb-56">
        {/* Drag Handle */}
        <div
          aria-hidden
          className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="h-1.5 w-12 rounded-full bg-foreground/20" />
        </div>

        <div
          className="absolute inset-0 -z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem]"
          style={{
            background:
              "linear-gradient(0deg, #ffffff 0%, #ffffff 30%, #E2E8FA 100%)",
          }}
        />

      {/* The Philosophy */}
      <div className="max-w-6xl mx-auto">
        <div id="philosophy" className="relative md:ml-[110px] mt-[20px] max-w-2xl text-left border-l-2 border-[#6FA3F7]/30 pl-8 md:pl-12 scroll-mt-56">
          <p className="text-sm uppercase tracking-widest text-[#6FA3F7] font-medium mb-5">
            The Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 text-balance">
            You don&rsquo;t have to <span className="italic text-[#6FA3F7]">do this alone.</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              Lasting change comes from being seen, supported, and accountable to people who care about us. When we take our struggles out of isolation and embed them in community and connection, our lives begin to change at the root.
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
              <strong className="font-semibold text-[#6FA3F7] text-3xl md:text-4xl mr-2 align-baseline">Soberphone</strong> works where other tools don&rsquo;t because it goes beyond:
            </p>
            <ul className="mt-3 space-y-2 font-serif text-xl md:text-2xl text-foreground leading-snug">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#F4A988] inline-block shrink-0" aria-hidden />
                <strong className="font-semibold">willpower,</strong>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#FFD68A] inline-block shrink-0" aria-hidden />
                <strong className="font-semibold">restriction,</strong>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#8FB8F9] inline-block shrink-0" aria-hidden />
                <strong className="font-semibold">and hyper-gamification.</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alternating stripes transition — lavender (matching the bg at the top of the section) thinning into white, echoing the blue/black stripes on the page above */}
      <div aria-hidden className="relative -mx-6 mt-36 md:mt-[12.25rem] bg-white">
        <div className="h-8 md:h-10 bg-[#E2E8FA]" />
        <div className="h-6 md:h-8" />
        <div className="h-4 md:h-5 bg-[#E2E8FA]" />
        <div className="h-10 md:h-12" />
        <div className="h-1.5 md:h-2 bg-[#E2E8FA]" />
      </div>

      <div className="max-w-4xl mx-auto text-center mt-20 md:mt-28">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/soberphone-logo-mark.png"
            alt="Soberphone"
            width={180}
            height={260}
            className="w-28 md:w-32 h-auto"
          />
        </div>

        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-6 bg-clip-text text-transparent text-balance"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
          }}
        >
          Find your screen-life balance with Soberphone.
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
          Be the first to know about our launch, updates, and opportunities
          to join the Soberphone community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="min-w-[14rem] rounded-full px-8 py-6 text-base bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg"
          >
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
              Download the Beta
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[14rem] rounded-full px-8 py-6 text-base border-[#6FA3F7] text-[#6FA3F7] hover:bg-[#6FA3F7]/10 hover:text-[#6FA3F7]"
          >
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Join the Waitlist
            </a>
          </Button>
        </div>
      </div>
      </div>
    </section>
  )
}
