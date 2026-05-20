"use client"

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
        className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-32 min-h-[85vh]"
        style={{
          backgroundImage: "url('/images/emotional-bg.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FAF5F0",
        }}
      >
        {/* Content container - split layout */}
        <div className="relative z-10 max-w-6xl mx-auto h-full">
          {/* Top left: The Love */}
          <div className="max-w-md">
            <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-foreground/40 mb-4">
              Let&apos;s be honest
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight text-foreground">
              There&apos;s a lot to love about our screens
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground/60 leading-relaxed">
              The utility. The connection.<br />
              The whole world in our hands.
            </p>
          </div>

          {/* Bottom right: The Hook */}
          <div className="mt-32 md:mt-48 lg:mt-56 ml-auto max-w-md text-right">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight text-foreground">
              But we&apos;re also totally hooked
            </h3>
            <p className="mt-4 text-base md:text-lg text-foreground/60 leading-relaxed">
              Hours, weeks, and years of our lives<br />
              spent unintentionally absorbed.
            </p>
          </div>
        </div>
      </div>

      {/* Part 3: The Solution */}
      <div className="px-6 py-20 md:py-28 bg-[#1E1C1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base font-sans uppercase tracking-[0.25em] text-white/40 mb-5">
            A new approach
          </p>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-tight text-white mb-6 text-balance">
            Define your version of balance and bring it to life
          </h3>
          <p className="text-xl md:text-2xl text-[#F4A988] font-serif mb-12">
            with Soberphone.
          </p>

          {/* Value Props */}
          <div className="flex flex-col gap-4 max-w-md mx-auto text-left">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F4A988] mt-2.5 shrink-0" />
              <span className="text-base md:text-lg text-white/80">
                No dumb phones or cold-turkey
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#8FB4FF] mt-2.5 shrink-0" />
              <span className="text-base md:text-lg text-white/80">
                Keep what you love, and get support with the rest
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
