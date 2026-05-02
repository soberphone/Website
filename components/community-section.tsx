"use client"

const testimonials = [
  {
    quote: "For the first time, I don't feel alone in this struggle. Having my best friend as a supporter has made all the difference.",
    author: "Sarah M.",
    role: "Early adopter",
  },
  {
    quote: "The social accountability aspect is brilliant. It's not about shame—it's about having people who genuinely care about your wellbeing.",
    author: "James K.",
    role: "Beta tester",
  },
  {
    quote: "I've tried every screen time app out there. Soberphone is the first one that actually addresses why I reach for my phone in the first place.",
    author: "Maria L.",
    role: "Community member",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.97 0.01 280) 0%,
              oklch(0.95 0.03 270) 100%
            )
          `,
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-6 text-balance">
            Voices from our community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Real stories from people reclaiming their relationship with technology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-card border border-border/50 shadow-sm"
            >
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
