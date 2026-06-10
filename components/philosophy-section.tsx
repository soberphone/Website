"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const shots = [
  { src: "/images/app-store/01-balance.png", alt: "End compulsive tech use" },
  { src: "/images/app-store/02-goals.png", alt: "Flexible goals" },
  { src: "/images/app-store/03-opens.png", alt: "Intentional opens" },
  { src: "/images/app-store/04-support.png", alt: "Social support" },
  { src: "/images/app-store/05-feedback.png", alt: "Dynamic feedback" },
  { src: "/images/app-store/06-cover.png", alt: "Soberphone" },
]

export function PhilosophySection() {
  const desktopRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (
    ref: React.RefObject<HTMLDivElement | null>,
    dir: "left" | "right"
  ) => {
    const el = ref.current
    if (!el) return
    const card = el.querySelector("li")
    const step = card ? card.getBoundingClientRect().width + 24 : 200
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" })
  }

  return (
    <section
      id="showcase"
      className="relative z-20 pt-[134px] md:pt-[166px] pb-48 md:pb-60 px-6 overflow-hidden bg-[#2e2e2e] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      style={{
        background:
          "#2e2e2e",
      }}
    >
      {/* Mobile + tablet: stacked vertically, page-scroll */}
      <ul className="lg:hidden flex flex-col items-center gap-6">
        {shots.map((s) => (
          <li
            key={s.src}
            className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] rounded-[2rem] overflow-hidden"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={1242}
              height={2688}
              className="w-full h-auto block"
              draggable={false}
            />
          </li>
        ))}
      </ul>

      {/* Desktop (lg+): fixed strip showing exactly 5 cards, arrows on the outside */}
      <div className="hidden lg:flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollByCard(desktopRef, "left")}
          aria-label="Scroll screenshots left"
          className="shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={desktopRef}
          className="overflow-x-auto w-[821px] xl:w-[1071px] 2xl:w-[1296px] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <ul className="flex gap-6">
            {shots.map((s) => (
              <li
                key={s.src}
                className="shrink-0 w-[145px] xl:w-[195px] 2xl:w-[240px] rounded-[2rem] overflow-hidden"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1242}
                  height={2688}
                  className="w-full h-auto block"
                  draggable={false}
                />
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(desktopRef, "right")}
          aria-label="Scroll screenshots right"
          className="shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
