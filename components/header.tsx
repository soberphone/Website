"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { WAITLIST_URL } from "@/lib/links"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <Image
              src="/images/soberphone-logo-mark.png"
              alt=""
              width={180}
              height={260}
              priority
              className="h-9 md:h-10 w-auto select-none"
              draggable={false}
            />
            <span
              className="font-serif text-2xl md:text-3xl font-medium tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #B5D4FF 0%, #8FB4FF 30%, #F4A988 70%, #FFD68A 100%)",
              }}
            >
              Soberphone
            </span>
          </Link>

          {/* Contact + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button
              asChild
              className="rounded-full px-6 bg-[#6FA3F7] text-white hover:bg-[#6FA3F7]/90"
            >
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                Join the Waitlist
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
