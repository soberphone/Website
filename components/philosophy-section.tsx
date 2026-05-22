"use client"

export function PhilosophySection() {
  return (
    <section
      id="testimonial"
      className="relative z-20 pt-40 md:pt-48 pb-48 md:pb-56 px-6 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #353535 0%, #2e2e2e 55%, #232323 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="md:ml-[80px] lg:ml-[110px] mt-[20px]">
          <h2 className="font-serif font-medium leading-tight tracking-tight text-white mb-6 text-balance text-3xl md:text-4xl lg:text-5xl">
            &ldquo;Hands down the most effective <br />tool I&rsquo;ve found&hellip; changed my life.
          </h2>

          <p className="text-lg md:text-xl text-white leading-relaxed text-balance">
            Also happens to be intuitive, fun, <br />and connective.&rdquo; &mdash; Mark, Beta User
          </p>
        </div>
      </div>
    </section>
  )
}
