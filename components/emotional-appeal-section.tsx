"use client"

import { PhoneMockup } from "@/components/phone-mockup"

export function EmotionalAppealSection() {
  return (
    <section
      id="emotional-appeal"
      className="relative z-30 -scroll-mt-10"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Part 1: What's the Deal — styled to mirror PhilosophySection. Rounded sheet kept so the phone halo inside Part 3 can extend down past the section's bottom into HowItWorks. */}
      <div
        className="relative px-6 pt-48 md:pt-64 pb-64 md:pb-80 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-12px_30px_-12px_rgba(40,50,90,0.18)]"
        style={{
          backgroundImage: "url('/images/emotional-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FAF5F0",
        }}
      >
        {/* Drag Handle */}
        <div
          aria-hidden
          className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="h-1.5 w-12 rounded-full bg-foreground/20" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="md:ml-[80px] lg:ml-[110px] mt-[20px] max-w-2xl border-l-2 border-[#6FA3F7]/30 pl-8 md:pl-12">
            <p className="text-sm uppercase tracking-widest text-[#6FA3F7] font-medium mb-5">
              What&apos;s the deal?
            </p>

            {/* The Love */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-4 text-balance">
                There&apos;s a lot to <span className="italic text-[#6FA3F7]">love</span> about our screens.
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                The utility, the connection, the whole world in our hands.
              </p>
            </div>

            {/* The Hook */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-4 text-balance">
                But we&apos;re <span className="italic text-[#6FA3F7]">totally hooked.</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                Hours, weeks, and years of our lives spent unintentionally absorbed.
              </p>
            </div>

            {/* The Need */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-4 text-balance">
                We&apos;re <span className="italic text-[#6FA3F7]">not meant</span> to face this alone.
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                It takes a lot more than willpower to get free. And most existing solutions miss the emotional and relational core of the issue.
              </p>
            </div>

            {/* The Truth - healing in connection */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-4 text-balance">
                Healing happens <span className="italic text-[#6FA3F7]">in connection.</span> Not in isolation.
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
                Decades of research on compulsion and addiction are clear on this.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: The Solution */}
      <div className="relative px-6 py-20 md:py-28 bg-[#6FA3F7] overflow-x-clip">
        <div className="max-w-5xl xl:max-w-6xl mx-auto">
          {/* Two-column layout: Text left, Phone right */}
          <div className="flex flex-col items-center lg:flex-row lg:items-end gap-12 lg:gap-16">
            {/* Text content */}
            <div className="flex-1 lg:pl-20">
              {/* Our Answer intro */}
              <div className="relative z-30 mb-8 md:mb-10">
                <p className="text-sm uppercase tracking-widest text-white/80 font-medium mb-4">
                  Our Answer
                </p>
                <p className="font-serif text-2xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-[#3D6BBF] text-balance max-w-md xl:max-w-2xl">
                  Soberphone is a mobile app that uses social support to change your life.
                </p>
              </div>
              <h3 className="font-serif font-medium tracking-tight leading-tight text-left text-4xl md:text-5xl lg:text-6xl text-white">
                Time,<br />presence,<br />and attention.
              </h3>
              <p className="font-sans font-light text-xl md:text-2xl lg:text-3xl text-white text-left mt-1">
                For loved ones. Projects. Rest.
              </p>
              <ul className="mt-6 md:mt-8 flex flex-col gap-3">
                <li className="flex items-center gap-4">
                  <span className="relative z-30 w-4 h-4 rounded-full bg-[#F4A988] shrink-0" aria-hidden />
                  <span className="text-xl md:text-2xl text-white/90">No cold turkey.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="relative z-30 w-4 h-4 rounded-full bg-[#FFD68A] shrink-0" aria-hidden />
                  <span className="text-xl md:text-2xl text-white/90">No dumb phones.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="relative z-30 w-4 h-4 rounded-full bg-[#3D6BBF] shrink-0" aria-hidden />
                  <span className="text-xl md:text-2xl text-white/90">No hyper-gamification.</span>
                </li>
              </ul>
              {/* Closing line — placed above the phone on mobile/iPad portrait; the lg+ copy below sits under the row */}
              <h3 className="lg:hidden relative z-30 mt-8 md:mt-12 font-serif font-medium tracking-tight leading-tight text-left text-3xl md:text-4xl text-white text-balance max-w-3xl">
                Just flexible support for the screen-life balance you want.
              </h3>
            </div>

            {/* Phone mockup */}
            <div className="flex-shrink-0 relative lg:ml-auto lg:mr-0">
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
                  src="/images/screen-goal-reminder.png"
                  alt="Soberphone Goal Reminder screen"
                  width={300}
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Closing line — lg+ only; mobile/iPad portrait has its own copy inside the text column, above the phone */}
          <h3 className="hidden lg:block relative z-30 mt-8 md:mt-12 lg:pl-20 font-serif font-medium tracking-tight leading-tight text-left text-3xl md:text-4xl lg:text-5xl text-white text-balance max-w-3xl">
            Just flexible support for the screen-life balance you want.
          </h3>
        </div>
      </div>
    </section>
  )
}
