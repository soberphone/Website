import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WAITLIST_URL, BETA_URL } from "@/lib/links"

export function CTASection() {
  return (
    <section className="relative z-10 py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.95 0.03 270) 0%,
              oklch(0.92 0.05 270) 100%
            )
          `,
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/soberphone-logo-mark.png"
            alt="Soberphone"
            width={180}
            height={260}
            className="w-28 md:w-32 h-auto"
          />
        </div>

        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-6 bg-clip-text text-transparent text-balance"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
          }}
        >
          Join the wave of people reclaiming their time, presence, and attention!
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
          Be the first to know about our launch, updates, and opportunities
          to join the Soberphone community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[14rem] rounded-full px-8 py-6 text-base border-[#6FA3F7] text-[#6FA3F7] hover:bg-[#6FA3F7]/10 hover:text-[#6FA3F7]"
          >
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Join the Waitlist
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="min-w-[14rem] rounded-full px-8 py-6 text-base bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90 shadow-lg"
          >
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
              Download the Beta
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
