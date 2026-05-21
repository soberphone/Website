"use client"

import { useEffect, useState } from "react"
import { PhoneMockup } from "@/components/phone-mockup"

type Feature = {
  title: string
  description: string
  image: string
  alt: string
}

const features: Feature[] = [
  {
    title: "Set Goals",
    description: "Decide your ideal limit for troublesome apps - e.g. under 30min on Instagram each day, or 0min on games between 9 and 5.",
    image: "/images/screen-goals.png",
    alt: "Soberphone goals dashboard",
  },
  {
    title: "Open With Intention",
    description: "Tap app to open -> decide how long to unlock for -> enjoy your use.",
    image: "/images/screen-unlock.png",
    alt: "Soberphone intentional unlock screen",
  },
  {
    title: "Do It Together",
    description: "Get the most out of Soberphone by inviting supporters - friends who are notified when you go over a goal. This is optional, but extremely effective and connective.",
    image: "/images/screen-chat.png",
    alt: "Soberphone chat with supporters",
  },
  {
    title: "Visualize your progress",
    description: "Keep an eye on your orb - it changes based on your progress. Maintain a vibrant state by meeting your goals each day. When you go over, your orb degrades a little.",
    image: "/images/screen-orb.png",
    alt: "Soberphone progress visualization",
  },
]

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
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #353535 0%, #2e2e2e 55%, #232323 100%)",
        }}
      />

      {/* Striped transition: solid CTA blue stripes thin out and gaps widen as they descend into the black */}
      <div aria-hidden className="relative w-full">
        <div className="h-16 md:h-20 bg-[#6FA3F7]" />
        <div className="h-4 md:h-5" />
        <div className="h-8 md:h-10 bg-[#6FA3F7]" />
        <div className="h-6 md:h-8" />
        <div className="h-4 md:h-5 bg-[#6FA3F7]" />
        <div className="h-10 md:h-12" />
        <div className="h-1.5 md:h-2 bg-[#6FA3F7]" />
      </div>

      {/* Continuation of the phone halo from the page above — same gradient as the phone glow, positioned to mirror the phone's screen position so the halo flows continuously across the section boundary on top of the solid stripes */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 lg:left-[72%] -translate-x-1/2 -top-[1700px] w-[2000px] h-[2000px] rounded-full blur-3xl z-10"
        style={{
          background:
            "radial-gradient(circle at center, rgba(195,220,246,0.85) 0%, rgba(195,220,246,0.5) 30%, rgba(195,220,246,0.2) 55%, rgba(195,220,246,0) 75%)",
        }}
      />

      <div className="px-6 pt-16 md:pt-24 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-[#8FB8F9] font-medium mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-white mb-3 text-balance">
            Screen-life balance with the support of your friends.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed text-pretty">
            Decide what tech you struggle with, set goals for your ideal use, and add supporters &ndash; they&rsquo;ll be invited to check in when you go over a goal.
          </p>
        </div>

        {/* 4-column phone grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[17px] gap-y-12 md:gap-x-[29px] md:gap-y-16 items-start">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-start text-left mx-auto"
              style={{ width: `${phoneWidth}px` }}
            >
              <div className="mt-[30px] mb-6">
                <PhoneMockup
                  src={feature.image}
                  alt={feature.alt}
                  width={phoneWidth}
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#8FB8F9] font-medium mb-2">
                {`0${i + 1}`}
              </p>
              <h3 className="font-serif text-lg md:text-xl font-medium leading-tight tracking-tight text-white mb-2 text-balance">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
