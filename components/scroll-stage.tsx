"use client"

import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { EmotionalAppealSection } from "@/components/emotional-appeal-section"
import { FeaturesSection } from "@/components/features-section"

export function ScrollStage() {
  // Hero + Quote scroll as a normal page (no sticky pin). Pinning them kept iOS
  // Safari's toolbar in its expanded, solid (grey) state because no content
  // scrolled under it; normal flow lets Safari minimize to its translucent bar.
  return (
    <>
      <div className="relative z-0 w-full">
        <HeroSection />
        <PhilosophySection />
      </div>
      <EmotionalAppealSection />
      <FeaturesSection />
    </>
  )
}
