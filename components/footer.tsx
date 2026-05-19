"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium text-foreground">
              Soberphone
            </span>
          </Link>

          {/* Links + copyright (right, single row) */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <Link
              href="/sms-consent"
              className="font-serif italic hover:text-foreground transition-colors"
            >
              sms consent
            </Link>
            <Link
              href="/privacy"
              className="font-serif italic hover:text-foreground transition-colors"
            >
              privacy policy
            </Link>
            <p>© {new Date().getFullYear()} Soberphone</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
