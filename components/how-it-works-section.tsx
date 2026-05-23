"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
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

export function HowItWorksSection() {
  const tier = useViewportTier()
  const phoneWidth = { sm: 240, md: 150, lg: 200, xl: 240 }[tier]

  return (
    <section
      id="how-it-works"
      className="relative z-10 overflow-hidden pb-24 md:pb-32 scroll-mt-24"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #353535 0%, #2e2e2e 55%, #232323 100%)",
        }}
      />

      <div className="px-6 pt-36 md:pt-44 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-[#8FB8F9] font-medium mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-white mb-3 text-balance">
            The core components:
          </h2>
          <ol className="mt-6 md:mt-8 text-left flex flex-col gap-5 md:gap-6">
            <li className="flex gap-4 md:gap-5">
              <span className="font-serif text-2xl md:text-3xl text-[#8FB8F9] leading-none flex-shrink-0 tabular-nums select-none" aria-hidden>1.</span>
              <span className="text-base md:text-lg text-white/75 leading-relaxed text-pretty">
                Decide what tech you struggle with and set goals for your ideal use.
              </span>
            </li>
            <li className="flex gap-4 md:gap-5">
              <span className="font-serif text-2xl md:text-3xl text-[#8FB8F9] leading-none flex-shrink-0 tabular-nums select-none" aria-hidden>2.</span>
              <span className="text-base md:text-lg text-white/75 leading-relaxed text-pretty">
                Choose how long to &ldquo;unlock&rdquo; that tech for at each open.
              </span>
            </li>
            <li className="flex gap-4 md:gap-5">
              <span className="font-serif text-2xl md:text-3xl text-[#8FB8F9] leading-none flex-shrink-0 tabular-nums select-none" aria-hidden>3.</span>
              <span className="text-base md:text-lg text-white/75 leading-relaxed text-pretty">
                Add supporters to motivate real change &ndash; they&rsquo;ll be invited to check in if you decide to exceed a goal.
              </span>
            </li>
            <li className="flex gap-4 md:gap-5">
              <span className="font-serif text-2xl md:text-3xl text-[#8FB8F9] leading-none flex-shrink-0 tabular-nums select-none" aria-hidden>4.</span>
              <span className="text-base md:text-lg text-white/75 leading-relaxed text-pretty">
                Watch your orb &ndash; it changes to reflect your progress. Keep it vibrant by meeting your goals each day.
              </span>
            </li>
          </ol>
        </div>

        {/* 3-phone unlock flow: locked → choose duration → app open. Arrows rotate 90° on mobile (stacked) to point down. */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-3 lg:gap-6 mb-16 md:mb-20">
          <PhoneMockup
            src="/images/screen-goal-reminder.png"
            alt="Soberphone goal reminder showing locked tech"
            width={phoneWidth}
          />
          <ArrowRight aria-hidden className="w-9 h-9 md:w-7 md:h-7 lg:w-9 lg:h-9 text-[#8FB8F9] rotate-90 md:rotate-0 shrink-0" />
          <PhoneMockup
            src="/images/screen-unlock-duration.png"
            alt="Soberphone unlock duration picker"
            width={phoneWidth}
          />
          <ArrowRight aria-hidden className="w-9 h-9 md:w-7 md:h-7 lg:w-9 lg:h-9 text-[#8FB8F9] rotate-90 md:rotate-0 shrink-0" />
          <PhoneMockup
            src="/images/screen-youtube.png"
            alt="YouTube open after intentional unlock"
            width={phoneWidth}
          />
        </div>

      </div>
    </section>
  )
}
