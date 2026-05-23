"use client"

import { useEffect, useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { EmotionalAppealSection } from "@/components/emotional-appeal-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"

export function ScrollStage() {
  const backLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const backLayer = backLayerRef.current
    if (!backLayer) return

    // Honor reduced-motion: leave the back layer in normal flow.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion) return

    // Compute sticky top so the back layer pins with its bottom at viewport bottom.
    // If the back layer is taller than the viewport, this top is negative — fine.
    const update = () => {
      const viewportHeight = window.innerHeight
      const backLayerHeight = backLayer.offsetHeight
      backLayer.style.position = "sticky"
      backLayer.style.top = `${viewportHeight - backLayerHeight}px`
    }

    update()
    window.addEventListener("resize", update)

    // Recompute after late layout shifts (fonts, image loads).
    const ro = new ResizeObserver(update)
    ro.observe(backLayer)

    return () => {
      window.removeEventListener("resize", update)
      ro.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={backLayerRef}
        className="relative z-0 w-full"
      >
        <HeroSection />
        <PhilosophySection />
      </div>
      <EmotionalAppealSection />
      <HowItWorksSection />
      <FeaturesSection />
    </>
  )
}
