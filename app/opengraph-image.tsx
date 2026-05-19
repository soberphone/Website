import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Soberphone — find freedom from your screen.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  const logoData = readFileSync(
    join(process.cwd(), 'public/images/soberphone-logo-mark.png'),
  )
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 40%, #D0DFFF 100%)',
          padding: 80,
        }}
      >
        <img src={logoSrc} width={260} height={364} alt="Soberphone" />
        <div
          style={{
            marginTop: 28,
            fontSize: 44,
            fontWeight: 500,
            fontFamily: 'serif',
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
          }}
        >
          Find freedom from your screen.
        </div>
      </div>
    ),
    { ...size },
  )
}
