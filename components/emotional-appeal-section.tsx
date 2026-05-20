"use client"

import Image from "next/image"

export function EmotionalAppealSection() {
  return (
    <section
      id="emotional-appeal"
      className="relative z-10 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-12px_30px_-12px_rgba(40,50,90,0.18)]"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/emotional-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center select-none"
        draggable={false}
        priority
      />

      {/* Gradient overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(255, 245, 235, 0.3) 0%,
              rgba(255, 245, 235, 0.1) 30%,
              rgba(255, 245, 235, 0.2) 60%,
              rgba(30, 28, 26, 0.85) 100%
            )
          `,
        }}
      />

      {/* Drag Handle */}
      <div
        aria-hidden
        className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="h-1.5 w-12 rounded-full bg-foreground/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Part 1: The Love */}
        <div className="flex-1 flex items-center justify-center px-6 py-24 md:py-32 min-h-[70vh]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-base font-sans uppercase tracking-[0.25em] text-foreground/60 mb-6">
              Let&apos;s be honest
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 text-balance">
              There&apos;s a lot to love about our screens
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed text-balance max-w-2xl mx-auto">
              The utility. The connection. The whole world in our hands.
            </p>
          </div>
        </div>

        {/* Part 2: The Problem */}
        <div className="flex-1 flex items-center justify-center px-6 py-20 md:py-28 min-h-[60vh]">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-tight text-foreground mb-8 text-balance">
              But we&apos;re also totally hooked
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed text-balance max-w-xl mx-auto">
              Hours, weeks, and years of our lives spent unintentionally absorbed.
            </p>
          </div>
        </div>

        {/* Part 3: The Solution */}
        <div
          className="flex items-center justify-center px-6 py-28 md:py-36 min-h-[70vh]"
          style={{
            background: `
              linear-gradient(
                180deg,
                transparent 0%,
                rgba(30, 28, 26, 0.6) 30%,
                rgba(30, 28, 26, 0.9) 100%
              )
            `,
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-base font-sans uppercase tracking-[0.25em] text-white/50 mb-6">
              A new approach
            </p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-tight text-white mb-8 text-balance">
              Define your version of balance and bring it to life
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed text-balance max-w-xl mx-auto mb-12">
              with Soberphone.
            </p>

            {/* Value Props */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F4A988]" />
                <span className="text-base md:text-lg text-white/80 font-medium">
                  No dumb phones or cold-turkey
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8FB4FF]" />
                <span className="text-base md:text-lg text-white/80 font-medium">
                  Keep what you love
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 font-serif italic mt-10 text-balance">
              Get support with the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
