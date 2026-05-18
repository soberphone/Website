"use client"

import { useEffect, useState } from "react"
import { PhoneMockup } from "@/components/phone-mockup"

type Feature = {
  title: string
  description: string
  image: string
  alt: string
}

// Placeholder images use the existing hero screenshots until real
// screenshots are provided for each feature.
const features: Feature[] = [
  {
    title: "Set goals unique to you",
    description: "TBD — short copy describing how users tailor goals to their own patterns and priorities.",
    image: "/images/screen-goals.png",
    alt: "Soberphone goals dashboard",
  },
  {
    title: "Unlock your apps with intention",
    description: "TBD — short copy describing the intentional unlock flow that breaks the autopilot.",
    image: "/images/screen-orb.png",
    alt: "Soberphone intentional unlock screen",
  },
  {
    title: "Motivate real change with support from friends",
    description: "TBD — short copy describing how social accountability and supporters drive lasting change.",
    image: "/images/screen-chat.png",
    alt: "Soberphone chat with supporters",
  },
  {
    title: "Visualize your progress",
    description: "TBD — short copy describing how users see and celebrate their progress over time.",
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

export function FeaturesSection() {
  const tier = useViewportTier()
  const phoneWidth = { sm: 130, md: 150, lg: 200, xl: 240 }[tier]

  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-3 text-balance">
            Take back your time, presence, and attention.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Soberphone offers tools and support systems that motivate real change.
          </p>
        </div>

        {/* 4-column phone grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[17px] gap-y-12 md:gap-x-[29px] md:gap-y-16 items-start">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mt-[30px] mb-6">
                <PhoneMockup
                  src={feature.image}
                  alt={feature.alt}
                  width={phoneWidth}
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">
                {`0${i + 1}`}
              </p>
              <h3 className="font-serif text-lg md:text-xl font-medium leading-tight tracking-tight text-foreground mb-2 text-balance">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
