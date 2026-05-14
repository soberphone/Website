"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium text-foreground">
              Soberphone
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
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

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Soberphone
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="font-serif text-lg italic text-muted-foreground">
            Freedom from the grip of our screens. Together.
          </p>
        </div>
      </div>
    </footer>
  )
}
