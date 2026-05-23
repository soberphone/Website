"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"
import { WAITLIST_URL, BETA_URL } from "@/lib/links"

type Tier = "sm" | "md" | "lg" | "xl"

function useViewportTier(): Tier {
  const [tier, setTier] = useState<Tier>("lg")
  useEffect(() => {
    const compute = (): Tier => {
      const w = window.innerWidth
      if (w >= 1280) return "xl"
      if (w >= 1024) return "lg"
      if (w >= 768) return "md"
      return "sm"
    }
    setTier(compute())
    const onResize = () => setTier(compute())
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  return tier
}

export function FeaturesSection() {
  const tier = useViewportTier()
  // Philosophy phone row: 3 phones across, centered, matching the How It Works
  // phone sizing exactly.
  const philosophyPhoneWidth = { sm: 240, md: 150, lg: 200, xl: 240 }[tier]

  // Size the photo backdrop to the image's own aspect ratio (1642 × 1094) so the
  // full photo shows edge-to-edge with nothing cropped off the sides. We match the
  // layer height to its rendered width × ratio and let `cover` fill it exactly.
  const PHOTO_RATIO = 1094 / 1642
  const sheetRef = useRef<HTMLDivElement>(null)
  const [photoHeight, setPhotoHeight] = useState<number | null>(null)
  useEffect(() => {
    const measure = () => {
      const sheet = sheetRef.current
      if (!sheet) return
      // clientWidth is the padding-box width, which is the photo layer's width (inset-x-0).
      setPhotoHeight(sheet.clientWidth * PHOTO_RATIO)
    }
    measure()
    const t = setTimeout(measure, 300)
    window.addEventListener("resize", measure)
    return () => {
      window.removeEventListener("resize", measure)
      clearTimeout(t)
    }
  }, [tier])

  return (
    <section
      id="features"
      className="relative z-10"
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

      <div
        ref={sheetRef}
        className="relative isolate px-6 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-12px_30px_-12px_rgba(40,50,90,0.18)] pt-24 md:pt-32 pb-44 md:pb-56"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Drag Handle */}
        <div
          aria-hidden
          className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="h-1.5 w-12 rounded-full bg-foreground/20" />
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem]"
          style={{
            height: photoHeight ? `${photoHeight}px` : "65%",
            backgroundImage: "url(/images/philosophy-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 45%, transparent 95%)",
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 45%, transparent 95%)",
          }}
        />

      {/* The Philosophy */}
      <div className="max-w-6xl mx-auto">
        <div id="philosophy" className="relative md:ml-0 lg:ml-[110px] mt-[20px] max-w-2xl text-left border-l-2 border-[#6FA3F7]/30 pl-8 md:pl-12 scroll-mt-56">
          <p className="text-sm uppercase tracking-widest text-[#6FA3F7] font-medium mb-5">
            The Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 text-balance">
            You don&rsquo;t have to <span className="italic text-[#6FA3F7]">do this alone.</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              You can use the goal setting and unlock timer tools on their own with great success. <strong className="font-semibold">But add supporters and watch your life transform at the root.</strong>
            </p>
            <p>
              <strong className="font-serif font-semibold text-[#6FA3F7] text-3xl md:text-4xl mr-2 align-baseline">Soberphone</strong> works where other tools don&rsquo;t because lasting change comes from being seen, supported, and accountable to people who care about you. When you take your struggles out of isolation and embed them in community and connection, you go way beyond <strong className="font-semibold">willpower</strong>, <strong className="font-semibold">restriction</strong>, and <strong className="font-semibold">hyper-gamification</strong>.
            </p>
          </div>
        </div>

        {/* Horizontal phone row below the philosophy text. Centered on the page,
            matching the How It Works phone format and gaps (no arrows). Stacks at
            sm and below. */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[137px] md:gap-[101px] lg:gap-[137px] mt-16 md:mt-20">
          <PhoneMockup
            src="/images/screen-exceed-goal.png"
            alt="Soberphone exceed-goal prompt with supporter message"
            width={philosophyPhoneWidth}
          />
          <PhoneMockup
            src="/images/screen-chat-list.png"
            alt="Soberphone supporter chat list"
            width={philosophyPhoneWidth}
          />
          <PhoneMockup
            src="/images/screen-chat.png"
            alt="Soberphone supporter chat"
            width={philosophyPhoneWidth}
          />
        </div>
      </div>

<div className="max-w-4xl mx-auto text-center mt-48 md:mt-64">
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
