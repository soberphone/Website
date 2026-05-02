"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
              Soberphone
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#philosophy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="#community"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90"
            >
              Get Early Access
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
                href="#features"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#philosophy"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Philosophy
              </Link>
              <Link
                href="#community"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Button 
                className="rounded-full mt-2 bg-foreground text-background hover:bg-foreground/90"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
