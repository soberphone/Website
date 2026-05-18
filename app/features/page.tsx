"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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

type Feature = {
  title: string
  description: string
  image: string
  alt: string
}

const features: Feature[] = [
  {
    title: "Set goals unique to you",
    description: "Decide your ideal limit for troublesome apps - e.g. under 30min on Instagram each day, or 0min on games between 9 and 5.",
    image: "/images/screen-goals.png",
    alt: "Soberphone goals dashboard",
  },
  {
    title: "Unlock your apps with intention",
    description: 'Goal apps are gently "locked." Tap app to open -> decide how long to unlock for -> enjoy your use.',
    image: "/images/screen-unlock.png",
    alt: "Soberphone intentional unlock screen",
  },
  {
    title: "Motivate real change with support from friends",
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

export default function FeaturesPage() {
  const tier = useViewportTier()
  const phoneWidth = { sm: 180, md: 200, lg: 240, xl: 280 }[tier]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative isolate flex flex-col items-center px-6 pt-32 md:pt-40 pb-24 md:pb-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 40%, #D0DFFF 100%)",
          }}
        />

        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-foreground mb-4 text-balance">
            How Soberphone works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            Four steps to break the spell — set goals, unlock with intention,
            invite supporters, and watch your progress.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-start">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-6">
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
      </section>

      <Footer />
    </main>
  )
}
