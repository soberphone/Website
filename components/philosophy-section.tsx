"use client"

import Image from "next/image"

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative pt-24 md:pt-32 pb-[180px] px-6 overflow-hidden"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              The Philosophy
            </p>
            <h2 className="font-serif font-medium leading-tight tracking-tight text-foreground mb-8 text-balance text-3xl md:text-4xl lg:text-5xl">
              Take back your agency with Soberphone
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed -translate-y-[12px]">
              <p>
                Behavioral research says{" "}
                <span
                  className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight whitespace-nowrap bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(270deg, #6FA3F7 0%, #8FB4FF 30%, #F4A988 75%, #FFD68A 100%)",
                  }}
                >
                  social support
                </span>
                <br />
                is essential for human development and transformation.
              </p>
              <p>
                Lasting change comes from being seen, supported, and accountable to people
                who care about us. Not from willpower alone. Not from simple restriction.
                Not from hyper-gamification.
              </p>
              <p className="text-foreground font-medium" data-philosophy-anchor>
                When we take our struggles out of isolation and embed them in community
                and connection, our lives begin to change at the root.
              </p>
            </div>
          </div>

          {/* Right: line drawing */}
          <div className="flex justify-center">
            <Image
              src="/images/social-support.png"
              alt="Line drawing of figures helping each other out of a phone"
              width={1024}
              height={559}
              className="w-full max-w-md md:max-w-lg lg:max-w-sm xl:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
