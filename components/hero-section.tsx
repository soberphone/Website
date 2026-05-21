"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { WAITLIST_URL, BETA_URL } from "@/lib/links"

export function HeroSection() {
  return (
    <section className="relative isolate z-10 flex flex-col items-center px-6 pt-[129px] md:pt-[143px] pb-20 md:pb-28 overflow-hidden min-h-[calc(100svh-44px)]">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover select-none"
        draggable={false}
      />
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <style>{`
          @keyframes sp-orb-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes sp-orb-bob { 0% { transform: translateY(0); } 100% { transform: translateY(-12px); } }
          @media (prefers-reduced-motion: reduce) {
            .sp-orb-bob, .sp-orb-spin { animation: none !important; }
          }
        `}</style>
        <div
          className="sp-orb-bob mb-[22px]"
          style={{ animation: "sp-orb-bob 4s ease-in-out infinite alternate" }}
        >
          <Image
            src="/images/orbs/vibrant.png"
            alt="Soberphone"
            priority
            width={512}
            height={512}
            draggable={false}
            className="sp-orb-spin w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-auto select-none"
            style={{ animation: "sp-orb-spin 20s linear infinite" }}
          />
        </div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-medium leading-tight tracking-tight mb-1 sm:whitespace-nowrap bg-clip-text text-transparent text-balance"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
            }}
          >
            Soberphone
          </h1>

          <h2 className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-foreground/85 leading-snug mt-[30px] sm:mt-[15px] mb-1 sm:whitespace-nowrap text-balance">
            Stay connected. Not consumed.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-balance">
            Screen-life balance with the support of your friends.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="min-w-[17rem] sm:min-w-[14rem] rounded-full px-8 py-6 text-base bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg"
            >
              <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
                Download the Beta
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[17rem] sm:min-w-[14rem] rounded-full px-8 py-6 text-base border-[#6FA3F7] text-[#6FA3F7] hover:bg-[#6FA3F7]/10 hover:text-[#6FA3F7]"
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
