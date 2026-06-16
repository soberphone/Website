"use client"

import { Button } from "@/components/ui/button"
import { BETA_URL } from "@/lib/links"

export function HeroSection() {
  return (
    <section
      className="relative isolate z-30 flex flex-col items-center justify-center px-6 pt-[50px] md:pt-[65px] xl:pt-[140px] pb-12 md:pb-16 overflow-x-clip min-h-[calc(100svh-16px)] xl:min-h-[calc(100svh-42px)]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EAF1FC 100%)" }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1
          className="font-serif font-medium leading-[1.1] tracking-tight pb-[0.05em] mb-1 whitespace-nowrap bg-clip-text text-transparent text-balance"
          style={{
            fontSize: "clamp(3.5rem, 14vw, 12rem)",
            backgroundImage:
              "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
          }}
        >
          Soberphone
        </h1>

        <h2 className="font-sans text-base max-[374px]:text-sm sm:text-2xl md:text-3xl font-semibold text-foreground/80 leading-snug mt-2 mb-1 whitespace-nowrap text-balance">
          Freedom from our screens. Together.
        </h2>

        <p className="text-sm md:text-xl text-muted-foreground/80 leading-relaxed mb-10 text-balance">
          The app for finding balance with technology.
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
        </div>
      </div>
    </section>
  )
}
