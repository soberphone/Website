"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PhoneMockup } from "@/components/phone-mockup"
import { BETA_URL } from "@/lib/links"

export function HeroSection() {
  return (
    <section className="relative isolate z-30 flex flex-col items-center px-6 pt-[50px] md:pt-[65px] xl:pt-[140px] pb-12 md:pb-16 overflow-x-clip min-h-[calc(100svh-132px)] xl:min-h-[calc(100svh-42px)]">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-[25%_80%] md:object-[45%_80%] lg:object-[40%_80%] xl:object-[25%_80%] select-none"
        draggable={false}
      />
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-10 xl:gap-16 xl:pl-40 translate-y-[150px] xl:translate-y-[18px]">
        <div
          className="flex-shrink-0 mt-[50px] xl:mt-0 xl:-ml-[100px]"
          style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))" }}
        >
          <PhoneMockup
            src="/images/app-screenshot.png"
            alt="Soberphone app"
            width={260}
            priority
          />
        </div>
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left max-w-3xl -translate-y-[17px] xl:translate-y-[18px]">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-medium leading-tight tracking-tight mb-1 sm:whitespace-nowrap text-white text-balance">
            Soberphone
          </h1>

          <h2 className="font-sans text-lg max-[374px]:text-sm sm:text-2xl md:text-3xl font-bold text-white leading-snug mt-2 mb-1 whitespace-nowrap text-balance">
            Freedom from our screens. Together.
          </h2>

          <p className="text-base md:text-xl text-white leading-relaxed mb-10 text-balance">
            An app with tools and support systems to motivate real change.
          </p>

          <div className="flex flex-col sm:flex-row items-center xl:items-start gap-4">
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
      </div>

    </section>
  )
}
