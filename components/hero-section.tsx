"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 md:pt-40">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.95 0.03 270) 0%,
              oklch(0.97 0.01 280) 50%,
              oklch(0.98 0.005 60) 100%
            )
          `,
        }}
      />

      {/* Floating orb */}
      <div className="relative mb-8 md:mb-12 animate-float">
        <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
          <Image
            src="/images/orb.png"
            alt="Ethereal orb"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground mb-6 text-balance">
          Freedom from the grip of our screens.{" "}
          <span className="italic">Together.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Soberphone is a social platform that frees you through the power of 
          social transparency and connection. When you start slipping over an edge, 
          your friends are there to catch you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 shadow-lg"
          >
            Join the Waitlist
          </Button>
          <Button 
            variant="ghost"
            size="lg"
            className="rounded-full px-8 py-6 text-base text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  )
}
