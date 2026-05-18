"use client"

import Image from "next/image"

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.98 0.005 60) 0%,
              oklch(0.95 0.03 270) 100%
            )
          `,
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              The Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-8 text-balance">
              Our devices have a powerful psychological hold on us.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Fortunately we&rsquo;ve learned what works. Behavioral research tells us that
                social support is foundational for change to take root and mature.
              </p>
              <p>
                Lasting change comes from being seen, supported, and accountable to people
                who care about us. Not from willpower alone. Not from simple restriction.
                Not from hyper-gamification.
              </p>
              <p className="text-foreground font-medium">
                To transform your life: decide what tech you struggle with, set goals for
                your ideal use, and invite people you trust to support your journey.
                They&rsquo;ll be invited to check in when you go over a goal.
              </p>
            </div>
          </div>

          {/* Orb Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float">
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-spin-slow">
                <Image
                  src="/images/orb.png"
                  alt="Ethereal orb"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
