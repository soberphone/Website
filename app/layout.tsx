import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Soberphone | Freedom from the grip of our screens. Together.',
  description: 'Soberphone is a social platform that leverages powerful tools and support systems to free people from screen addiction. Healing happens in connection, not isolation.',
  keywords: ['screen time', 'digital wellness', 'phone addiction', 'screen addiction', 'social support', 'digital detox', 'mindfulness'],
  openGraph: {
    title: 'Soberphone | Freedom from the grip of our screens. Together.',
    description: 'A social platform that frees you through the power of social transparency and connection.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3f7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
