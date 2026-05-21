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
        className="relative px-6 pt-20 pb-48 md:pt-28 md:pb-64 min-h-[90vh] flex flex-col justify-end"
        style={{
          backgroundImage: "url('/images/emotional-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FAF5F0",
        }}
      >
        {/* Text container - bottom centered */}
        <div className="relative z-10 max-w-2xl mx-auto text-center mb-[120px] sm:mb-[75px]">
          {/* The Love */}
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed mb-2">
            There&apos;s a lot to love about our screens -
          </p>
          <p className="text-base md:text-lg text-foreground/50 leading-relaxed mb-10 md:mb-14">
            the utility, the connection, the whole world in our hands.
          </p>
          
          {/* The Hook - larger, bolder */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-4">
            But we&apos;re also<br />totally hooked.
          </h2>
          <p className="text-base md:text-lg text-foreground/50 leading-relaxed max-w-md mx-auto">
            Hours, weeks, and years of our lives spent unintentionally absorbed.
          </p>
        </div>
      </div>

      {/* Floating black circle with Desire text - straddles Part 1 and Part 3 */}
      <div className="relative z-30 flex justify-start px-8 md:px-16 lg:px-24 -mt-40 md:-mt-52 mb-[-160px] md:mb-[-200px]">
        <div 
          className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-[#2e2e2e] flex items-center justify-center p-8 md:p-12"
          style={{
            boxShadow: "0 25px 60px rgba(0,0,0,0.3)"
          }}
        >
          {/* Vignette inside circle */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
            }}
          />
          <div className="relative text-center">
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-semibold">
              Most of us want<br />something different<br />for our lives.
            </p>
            <p className="mt-4 text-base md:text-lg text-white/70 leading-tight">
              More <span className="text-[#FFD68A] font-medium">time</span>, <span className="text-[#F4A988] font-medium">presence</span>,<br />and <span className="text-[#B5D4FF] font-medium">attention</span>.
            </p>
            <p className="mt-2 text-sm md:text-base text-white/50">
              For loved ones, projects, and rest.
            </p>
          </div>
        </div>
      </div>

      {/* Part 3: The Solution */}
      <div className="relative px-6 pt-48 md:pt-56 pb-20 md:pb-28 bg-[#6FA3F7]">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout: Text left, Phone right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-base md:text-lg font-sans uppercase tracking-[0.25em] text-white/50 mb-6">
                A new approach
              </p>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white mb-7 text-balance">
                Define your version of balance and bring it to life
              </h3>
              <p className="text-2xl md:text-3xl text-[#FFD4B8] font-serif mb-12">
                with Soberphone.
              </p>

              {/* Value Props */}
              <div className="flex flex-col gap-5 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFD4B8] mt-3 shrink-0" />
                  <span className="text-lg md:text-xl text-white/90">
                    No dumb phones or cold-turkey
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/60 mt-3 shrink-0" />
                  <span className="text-lg md:text-xl text-white/90">
                    Keep what you love, and get support with the rest
                  </span>
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex-shrink-0 relative lg:mr-[-60px]">
              {/* Soft round glow behind phone, blending into the blue */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(195,220,246,0.85) 0%, rgba(195,220,246,0.5) 30%, rgba(195,220,246,0.2) 55%, rgba(195,220,246,0) 75%)",
                }}
              />
              <div
                className="relative lg:-translate-x-10"
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
        </div>
      </div>
    </section>
  )
}
