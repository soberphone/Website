import { cn } from "@/lib/utils"

const NATIVE_W = 428
const NATIVE_H = 868

type PhoneMockupProps = {
  src: string
  alt: string
  width: number
  className?: string
  priority?: boolean
}

export function PhoneMockup({
  src,
  alt,
  width,
  className,
  priority = false,
}: PhoneMockupProps) {
  const scale = width / NATIVE_W
  const height = NATIVE_H * scale

  return (
    <div
      className={cn("relative", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: `${NATIVE_W}px`,
          height: `${NATIVE_H}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div className="device device-iphone-14-pro device-black">
          <div className="device-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="device-screen"
              loading={priority ? "eager" : "lazy"}
              draggable={false}
            />
          </div>
          <div className="device-stripe" />
          <div className="device-header" />
          <div className="device-sensors" />
          <div className="device-btns" />
          <div className="device-power" />
        </div>
      </div>
    </div>
  )
}
