"use client"

import Image from "next/image"

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2778.PNG-63lg14wlfNhSydjmlTAj9OxltIGzyF.png",
    alt: "Goals dashboard showing active screen time goals",
    title: "Set Your Goals",
    description: "Create custom goals for specific apps or times of day",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2780.PNG-XFI6wDJIUcl2sFtFEWOf4GiO7MXzWZ.png",
    alt: "Chat interface showing conversations with supporters",
    title: "Stay Connected",
    description: "Chat with your supporters and share your journey",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2777.PNG-YOBysVCzZamqkME2TyvpEZJTFyKCb3.png",
    alt: "Home screen with ethereal orb design",
    title: "Find Your Center",
    description: "A calm space to reflect and set intentions",
  },
]

export function AppPreviewSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            The App
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-6 text-balance">
            Beautiful, intentional design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Every screen is crafted to feel calm and grounded. 
            No aggressive notifications or guilt-inducing metrics.
          </p>
        </div>

        {/* Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto mb-6 w-[260px] md:w-[240px] lg:w-[280px]">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-foreground/10 border border-border/30 bg-card">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={280}
                    height={607}
                    className="w-full h-auto"
                    priority={index === 0}
                  />
                </div>
              </div>
              
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {screenshot.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
