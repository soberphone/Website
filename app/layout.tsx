import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import 'devices.css'
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
  metadataBase: new URL('https://soberphone.io'),
  title: 'Soberphone | Find freedom from your screen.',
  description: 'Get to the root with a social solution that motivates real change. Willpower, blockers, and hyper-gamification not working? Soberphone helps you set goals and invite supporters who check in when you go over.',
  keywords: ['screen time', 'digital wellness', 'phone addiction', 'screen addiction', 'social support', 'digital detox', 'mindfulness'],
  openGraph: {
    title: 'Soberphone | Find freedom from your screen.',
    description: 'Get to the root with a social solution that motivates real change.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soberphone | Find freedom from your screen.',
    description: 'Get to the root with a social solution that motivates real change.',
  },
}

export const viewport: Viewport = {
  // No themeColor: lets mobile browsers use their native translucent status/address
  // bar, which blurs the page content behind it — so the bar reflects whatever
  // section sits at the top of the viewport instead of a solid fixed color.
  // viewportFit 'cover': draw the page edge-to-edge *under* the browser bars and
  // home-indicator safe area, so content shows through the translucent bar. The
  // root background is white (see layout html/body) so any uncovered safe-area
  // strip stays hero-white rather than the soft-lavender app background.
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} bg-white`}>
      <body className="font-sans antialiased bg-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
