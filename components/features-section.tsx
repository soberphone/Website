"use client"

import Image from "next/image"

export function FeaturesSection() {

  return (
    <section
      id="features"
      className="relative z-10"
    >
      {/* Our Answer page (rings bg) */}
      <div
        className="relative isolate px-6 overflow-hidden pt-24 md:pt-32 pb-24 md:pb-32"
        style={{
          background:
            "radial-gradient(circle at center, #6FA3F7 0%, #6FA3F7 33%, #B5D4FF 33%, #B5D4FF 66%, #FFFFFF 66%, #FFFFFF 100%)",
        }}
      >
      <div className="max-w-6xl mx-auto">
        <div id="philosophy" className="relative md:ml-0 lg:ml-[110px] mt-[20px] max-w-2xl lg:max-w-3xl xl:max-w-4xl text-left border-l-2 border-foreground/30 pl-8 md:pl-12 scroll-mt-56">
          {/* S — sans, eyebrow */}
          <p className="text-sm md:text-base uppercase tracking-widest text-foreground font-medium mb-6">
            Our Answer
          </p>

          {/* L — serif, hero statement */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-foreground">
            Time,<br />presence,<br />and attention.
          </h2>

          {/* M — sans, sub */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/85 mt-4">
            For loved ones. Projects. Rest.
          </p>

          {/* M — sans, body */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/85 leading-relaxed mt-10 md:mt-12">
            Soberphone is a mobile app that helps you build screen-life balance. Set goals, open apps with intention, and get support from friends in the moments that matter most.
          </p>

          {/* S — sans, list */}
          <ul className="mt-6 md:mt-8 flex flex-col gap-2">
            <li className="text-sm md:text-base text-foreground/75">No cold turkey.</li>
            <li className="text-sm md:text-base text-foreground/75">No dumb phones.</li>
            <li className="text-sm md:text-base text-foreground/75">No hyper-gamification.</li>
          </ul>

          {/* L — serif, closing statement */}
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-foreground mt-12 md:mt-16 text-balance">
            Just flexible support for the screen-life balance you want.
          </h3>
        </div>

      </div>
      </div>

      {/* Pre-footer CTA — visually separate from the Our Answer page above */}
      <div className="relative px-6 pt-24 md:pt-32 pb-24 md:pb-32 bg-[#FBC987]">
        <div className="text-center max-w-6xl mx-auto">
          <div className="flex justify-center mb-10">
            <Image
              src="/images/soberphone-logo-mark.png"
              alt="Soberphone"
              width={180}
              height={260}
              className="h-[28vw] max-h-[360px] w-auto select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
