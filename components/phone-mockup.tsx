import Image from "next/image"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

// The wrapper's width is controlled by the parent via `className` (e.g. "w-[240px]").
// The screenshot keeps its native aspect ratio.
export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.5rem] bg-neutral-900 p-[6px] shadow-2xl shadow-foreground/20 ring-1 ring-black/40",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.1rem] bg-card">
        <Image
          src={src}
          alt={alt}
          width={460}
          height={996}
          className="h-auto w-full select-none"
          priority={priority}
          draggable={false}
        />
      </div>
    </div>
  )
}
