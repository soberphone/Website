"use client"

export function EmotionalAppealSection() {
  return (
    <section
      id="emotional-appeal"
      className="relative z-30 -scroll-mt-10 -mt-12 md:-mt-16 bg-[#2e2e2e]"
    >
      <div
        className="relative px-6 pt-0 md:pt-[46px] pb-64 md:pb-80 rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-[#2e2e2e]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="md:ml-0 lg:ml-[110px] mt-[20px] max-w-2xl border-l-2 border-[#6FA3F7]/30 pl-8 md:pl-12">
            <p className="text-sm uppercase tracking-widest text-[#6FA3F7] font-medium mb-5">
              What&apos;s the deal?
            </p>

            {/* The Love */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-white mb-4 text-balance">
                There&apos;s a lot to <span className="italic text-[#6FA3F7]">love</span> about our screens.
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-pretty">
                The utility, the connection, the whole world in our hands.
              </p>
            </div>

            {/* The Hook */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-white mb-4 text-balance">
                But we&apos;re <span className="italic text-[#6FA3F7]">totally hooked.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-pretty">
                Hours, weeks, and years of our lives spent unintentionally absorbed.
              </p>
            </div>

            {/* The Need */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-white mb-4 text-balance">
                We&apos;re <span className="italic text-[#6FA3F7]">not meant</span> to face this alone.
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-pretty">
                It takes a lot more than willpower to get free. And most existing solutions miss the emotional and relational core of the issue.
              </p>
            </div>

            {/* The Truth - healing in connection */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-white mb-4 text-balance">
                Healing happens <span className="italic text-[#6FA3F7]">in connection.</span> Not in isolation.
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-pretty">
                Decades of research on compulsion and addiction are clear on this.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
