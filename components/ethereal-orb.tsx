"use client"

import { useEffect, useRef } from "react"

interface EtherealOrbProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function EtherealOrb({ className = "", size = "lg" }: EtherealOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64 md:w-80 md:h-80",
    xl: "w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]",
  }

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.005
      const x = Math.sin(time) * 3
      const y = Math.cos(time * 0.7) * 3
      orb.style.transform = `translate(${x}px, ${y}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/40 via-transparent to-transparent blur-3xl scale-150" />
      
      {/* Main orb with gradient */}
      <div
        ref={orbRef}
        className="relative w-full h-full rounded-full"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 80% at 30% 30%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(199, 210, 254, 0.8) 20%,
              rgba(186, 204, 254, 0.7) 40%,
              rgba(196, 181, 253, 0.6) 60%,
              rgba(254, 215, 170, 0.5) 80%,
              rgba(253, 186, 116, 0.4) 100%
            )
          `,
          boxShadow: `
            0 0 60px rgba(253, 186, 116, 0.4),
            0 0 100px rgba(253, 186, 116, 0.2),
            inset 0 0 60px rgba(255, 255, 255, 0.3)
          `,
        }}
      >
        {/* Inner highlight */}
        <div 
          className="absolute top-[15%] left-[20%] w-[30%] h-[30%] rounded-full opacity-80"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
          }}
        />
        
        {/* Secondary highlight */}
        <div 
          className="absolute bottom-[25%] right-[20%] w-[20%] h-[20%] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(254, 215, 170, 0.8) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}
