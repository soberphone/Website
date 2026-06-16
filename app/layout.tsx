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
  // themeColor matches the hero gradient's top stop (#FFFFFF) so the iOS status
  // bar strip (time/battery) blends into the hero page instead of showing the
  // browser's default translucent/grey bar.
  themeColor: '#FFFFFF',
  // viewportFit 'cover': draw the page edge-to-edge *under* the browser bars and
  // home-indicator safe area, so content shows through the translucent bar
  // instead of iOS filling the safe-area strip with the grey root background.
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
    <html lang="en" className={`${inter.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
