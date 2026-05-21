"use client"

import { PhoneMockup } from "@/components/phone-mockup"

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
      {/* Drag Handle */}
      <div
        aria-hidden
        className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="h-1.5 w-12 rounded-full bg-foreground/20" />
      </div>

      {/* Part 1: The Love & The Hook - Full background image */}
      <div
        className="relative px-6 pt-20 pb-32 md:pt-28 md:pb-40 min-h-[110vh] flex flex-col justify-end"
        style={{
          backgroundImage: "url('/images/emotional-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FAF5F0",
        }}
      >
        {/* Text container - bottom centered */}
        <div className="relative z-10 max-w-2xl mx-auto text-center mb-[220px] sm:mb-[175px]">
          {/* The Love */}
          <div className="-translate-y-20">
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed mb-2">
              There&apos;s a lot to love about our screens -
            </p>
            <p className="text-base md:text-lg text-foreground/50 leading-relaxed mb-10 md:mb-14">
              the utility, the connection, the whole world in our hands.
            </p>
          </div>
          
          {/* The Hook - larger, bolder */}
          <div className="-translate-y-[50px]">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-4">
              But we&apos;re also<br />totally hooked.
            </h2>
            <p className="text-base md:text-lg text-foreground/50 leading-relaxed max-w-md mx-auto">
              Hours, weeks, and years of our lives spent unintentionally absorbed.
            </p>
          </div>
        </div>

        {/* Bottom statement - absolutely positioned, does not affect layout */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pointer-events-none">
          <h3 className="font-serif font-bold tracking-tight leading-[1.05] text-left uppercase text-4xl md:text-6xl lg:text-7xl text-[#6FA3F7] max-w-5xl mx-auto translate-y-[1.25em]">
            Do you want<br />something different<br /><span className="text-white">for your life?</span>
          </h3>
        </div>
      </div>

      {/* Part 3: The Solution */}
      <div className="relative px-6 py-20 md:py-28 bg-[#6FA3F7]">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout: Text left, Phone right */}
          <div className="flex flex-col items-center lg:flex-row lg:items-end gap-12 lg:gap-16">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="font-serif font-bold tracking-tight leading-[1.05] text-left uppercase text-4xl md:text-6xl lg:text-7xl text-white">
                Time, presence, and attention.<br />For loved ones. Projects. Rest.
              </h3>
              <h3 className="relative z-30 font-serif font-bold tracking-tight leading-[1.05] text-left uppercase text-4xl md:text-6xl lg:text-7xl text-[#3D6BBF]">
                Soberphone helps you build this balance.
              </h3>
            </div>

            {/* Phone mockup */}
            <div className="flex-shrink-0 relative lg:ml-auto lg:mr-[-60px]">
              {/* Soft round glow behind phone, blending into the blue */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] rounded-full blur-3xl z-20"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(195,220,246,0.85) 0%, rgba(195,220,246,0.5) 30%, rgba(195,220,246,0.2) 55%, rgba(195,220,246,0) 75%)",
                }}
              />
              <div
                className="relative lg:-translate-x-10 z-30"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))"
                }}
              >
                <PhoneMockup
                  src="/images/app-screenshot.png"
                  alt="Soberphone app showing personalized greeting"
                  width={300}
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Colorful bullets */}
          <div className="mt-16 md:mt-24 flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-4">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-[#FFD4B8] shrink-0" />
              <span className="text-2xl md:text-3xl text-white/90">No cold turkey.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-[#FFD68A] shrink-0" />
              <span className="text-2xl md:text-3xl text-white/90">No dumb phones.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-[#C3DCF6] shrink-0" />
              <span className="text-2xl md:text-3xl text-white/90">No hyper-gamification.</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 md:mt-10 font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Just an app using social support to motivate<br className="hidden xl:inline" /> real change.
          </p>
        </div>
      </div>
    </section>
  )
}
