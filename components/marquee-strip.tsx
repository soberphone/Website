"use client"

const phrases = [
  "compulsively checking your phone…",
  "hours of unwanted tech use…",
  "billions of us are in a similar struggle…",
]

export function MarqueeStrip() {
  // Render the phrase list multiple times so translateX(-50%) loops seamlessly.
  const loop = [...phrases, ...phrases, ...phrases, ...phrases]

  return (
    <section
      aria-label="The struggle"
      className="relative w-full bg-[#6FA3F7] py-10 md:py-14"
    >
      {/* Keyframes inlined here so this component is self-contained and not
          dependent on globals.css ordering or HMR re-processing. */}
      <style>{`
        @keyframes sp-marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      {/* Inner wrapper carries the edge fade so the blue bar stays solid edge-to-edge */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max whitespace-nowrap"
          style={{
            animation: "sp-marquee 40s linear infinite",
            willChange: "transform",
          }}
        >
          {loop.map((phrase, i) => (
            <span
              key={i}
              className="font-serif text-xl md:text-2xl lg:text-3xl text-white px-12 md:px-16"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
