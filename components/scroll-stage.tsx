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
      // window.innerHeight excludes the bottom safe-area inset, so pinning the
      // layer's bottom there leaves the strip behind the iOS search bar showing
      // the grey page background. Extend past it by our own padding-bottom (which
      // resolves env(safe-area-inset-bottom)) so the dark layer covers that strip.
      const safeBottom = parseFloat(getComputedStyle(backLayer).paddingBottom) || 0
      backLayer.style.position = "sticky"
      backLayer.style.top = `${viewportHeight - backLayerHeight + safeBottom}px`
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
        style={{
          // Cover the bottom safe-area strip (behind the iOS search bar) with the
          // quote section's dark tone instead of the grey page background. 0 on
          // desktop, so this is a no-op there.
          paddingBottom: "env(safe-area-inset-bottom)",
          backgroundColor: "#232323",
        }}
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
