import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhoneMockup } from "@/components/phone-mockup"

export const metadata: Metadata = {
  title: "App Store | Soberphone",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

type Card = {
  headline: React.ReactNode
  src: string
  alt: string
}

const cards: Card[] = [
  {
    headline: (
      <>
        Set <strong className="font-bold">goals</strong> you actually pick.
      </>
    ),
    src: "/images/screen-goals.png",
    alt: "Soberphone goals screen",
  },
  {
    headline: (
      <>
        <strong className="font-bold">Unlock</strong> with{" "}
        <strong className="font-bold">intention.</strong>
      </>
    ),
    src: "/images/screen-unlock-duration.png",
    alt: "Soberphone unlock duration picker",
  },
  {
    headline: (
      <>
        Go over? Your <strong className="font-bold">people</strong> know.
      </>
    ),
    src: "/images/screen-exceed-goal.png",
    alt: "Soberphone exceed goal screen",
  },
  {
    headline: (
      <>
        <strong className="font-bold">Real</strong> check-ins.{" "}
        <strong className="font-bold">Real</strong> change.
      </>
    ),
    src: "/images/screen-supporter-chat-v2.png",
    alt: "Soberphone supporter chat",
  },
  {
    headline: (
      <>
        Your <strong className="font-bold">orb</strong> grows with you.
      </>
    ),
    src: "/images/screen-orb.png",
    alt: "Soberphone orb",
  },
]

export default function AppStorePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative isolate px-6 pt-32 md:pt-40 pb-24 md:pb-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 40%, #D0DFFF 100%)",
          }}
        />

        <div className="max-w-6xl mx-auto">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-foreground mb-4 text-balance">
              App Store screenshots
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Draft screenshots for the Soberphone App Store submission.
            </p>
          </header>

          <div className="-mx-6 px-6 overflow-x-auto pb-4">
            <div className="flex gap-4 md:gap-5 snap-x snap-mandatory md:justify-center">
              {cards.map((card, i) => (
                <ScreenshotCard key={i} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ScreenshotCard({ card }: { card: Card }) {
  return (
    <div
      className="relative shrink-0 snap-center w-[260px] sm:w-[280px] rounded-[28px] overflow-hidden shadow-md"
      style={{
        aspectRatio: "9 / 19",
        background:
          "linear-gradient(180deg, #EAF1FC 0%, #D6E4F7 55%, #B9CFEE 100%)",
      }}
    >
      <div className="relative h-full flex flex-col items-center px-5 pt-10">
        <h3 className="font-sans text-xl sm:text-[1.35rem] text-center font-semibold text-foreground leading-tight tracking-tight text-balance mb-6">
          {card.headline}
        </h3>
        <div className="flex-1 flex items-end justify-center w-full pb-0">
          <div className="translate-y-[18%]">
            <PhoneMockup src={card.src} alt={card.alt} width={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
