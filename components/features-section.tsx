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

export function FeaturesSection() {
  const tier = useViewportTier()
  const phoneWidth = { sm: 130, md: 150, lg: 200, xl: 240 }[tier]

  return (
    <section
      id="features"
      className="relative z-10 py-24 md:py-32 px-6 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-12px_30px_-12px_rgba(40,50,90,0.18)]"
      style={{
        // GPU-composite the sheet so its rise and its upward shadow don't
        // trigger repaints on the back layer behind it.
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background — white surface that contrasts cleanly with the periwinkle above */}
      <div
        className="absolute inset-0 -z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-white"
      />

      {/* Bottom-sheet drag handle */}
      <div
        aria-hidden
        className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2"
      >
        <div className="h-1.5 w-12 rounded-full bg-foreground/20" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-3 text-balance">
            Invite friends to support you.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Decide what tech you struggle with, set goals for your ideal use, and add supporters &ndash; they&rsquo;ll be invited to check in when you go over a goal.
          </p>

          <figure className="mt-8 md:mt-10 mx-auto max-w-xl text-center">
            <blockquote className="font-serif italic text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
              &ldquo;Not only is this hands down the most effective tool I&rsquo;ve
              found, it&rsquo;s also really easy, intuitive, fun, and connective.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-muted-foreground not-italic">
              &mdash; Mark, Soberphone Beta User
            </figcaption>
          </figure>
        </div>

        {/* 4-column phone grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[17px] gap-y-12 md:gap-x-[29px] md:gap-y-16 items-start">
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
