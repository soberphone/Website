"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

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
      {/* Part 1: What's the Deal — styled to mirror PhilosophySection. Rounded sheet kept so the orb halo inside Part 3 can extend down past the section's bottom into HowItWorks. */}
      <div
        className="relative px-6 pt-32 md:pt-44 pb-64 md:pb-80 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-12px_30px_-12px_rgba(40,50,90,0.18)]"
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
          <div className="md:ml-0 lg:ml-[110px] mt-[20px] max-w-2xl border-l-2 border-[#6FA3F7]/30 pl-8 md:pl-12">
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
      <div
        className="relative px-6 py-[120px] md:py-[152px] overflow-x-clip"
        style={{
          backgroundImage: "url('/images/our-answer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#6FA3F7",
        }}
      >
        <div className="relative max-w-5xl xl:max-w-6xl mx-auto">
          {/* Text content — constrained left of the orb column */}
          <div className="relative z-30 md:pl-12 lg:pl-20 pr-28 sm:pr-32 md:pr-44 lg:pr-52 xl:pr-60">
            <div className="mb-8 md:mb-10">
              <p className="text-sm uppercase tracking-widest text-white/80 font-medium mb-4">
                Our Answer
              </p>
              <p className="font-serif text-2xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-white text-balance max-w-md xl:max-w-2xl">
                Soberphone is a mobile app that helps you build screen-life balance. Set goals, open apps with intention, and get support from friends in the moments that matter most.
              </p>
            </div>
            <h3 className="font-serif font-medium tracking-tight leading-tight text-left text-4xl md:text-5xl lg:text-6xl text-[#3D6BBF]">
              Time,<br />presence,<br />and attention.
            </h3>
            <p className="font-sans font-light text-xl md:text-2xl lg:text-3xl text-[#3D6BBF] text-left mt-1">
              For loved ones. Projects. Rest.
            </p>
            <ul className="mt-6 md:mt-8 flex flex-col gap-3">
              <li className="text-sm text-[#3D6BBF]/90">No cold turkey.</li>
              <li className="text-sm text-[#3D6BBF]/90">No dumb phones.</li>
              <li className="text-sm text-[#3D6BBF]/90">No hyper-gamification.</li>
            </ul>
            <h3 className="mt-8 md:mt-12 font-serif font-medium tracking-tight leading-tight text-left text-2xl md:text-3xl lg:text-4xl text-[#3D6BBF] text-balance max-w-3xl">
              Just flexible support for the screen-life balance you want.
            </h3>
          </div>

          {/* Orb progression — absolute column spanning Part 3's full height (incl. its py-[120px]/py-[152px] padding), so top (struggling) center sits on the boundary with What's the Deal and bottom (vibrant) center sits on the boundary with How It Works. Negative top/bottom MUST equal Part 3's vertical padding to extend this overlay across both section boundaries. */}
          <div className="absolute -top-[120px] -bottom-[120px] md:-top-[152px] md:-bottom-[152px] right-0 lg:right-4 xl:right-12 w-24 sm:w-28 md:w-36 lg:w-44 xl:w-48 z-30 pointer-events-none">
            {/* Halo centered on the orb column for soft glow */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(195,220,246,0.5) 0%, rgba(195,220,246,0.25) 30%, rgba(195,220,246,0.08) 55%, rgba(195,220,246,0) 75%)",
              }}
            />

            <div className="relative w-full h-full" style={{ filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2))" }}>
              {/* Struggling — center at 0% (boundary: What's the Deal | Our Answer) */}
              <Image src="/images/orbs/struggling.png" alt="Struggling" width={512} height={512} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto select-none" draggable={false} />
              <ArrowDown aria-hidden className="absolute top-[12.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#3D6BBF]/70" />
              <Image src="/images/orbs/difficult.png" alt="Difficult" width={512} height={512} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto select-none" draggable={false} />
              <ArrowDown aria-hidden className="absolute top-[37.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#3D6BBF]/70" />
              <Image src="/images/orbs/okay.png" alt="Okay" width={512} height={512} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto select-none" draggable={false} />
              <ArrowDown aria-hidden className="absolute top-[62.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#3D6BBF]/70" />
              <Image src="/images/orbs/great.png" alt="Great" width={512} height={512} className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto select-none" draggable={false} />
              <ArrowDown aria-hidden className="absolute top-[87.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#3D6BBF]/70" />
              {/* Vibrant — center at 100% (boundary: Our Answer | How It Works) */}
              <Image src="/images/orbs/vibrant.png" alt="Vibrant" width={512} height={512} className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto select-none" draggable={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
