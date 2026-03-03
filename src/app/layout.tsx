import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import SiteHeader from '@/components/parts/SiteHeader'
import Footer from '@/components/parts/Footer'
import ScrollGlow from '@/components/effects/ScrollGlow'
import MouseSpotlight from '@/components/effects/MouseSpotlight'

const FuturaDemiC = localFont({ src: '../../public/fonts/futurademic.ttf' })

export const metadata: Metadata = {
  title: 'Fovibalt – Universal LED Strip Controller',
  description: 'Connect any LED strip, any time, any place. The only universal LED controller with LedID™ technology, AI effects, and 3-step setup.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </head>
      <body className={FuturaDemiC.className}>
        <div className="appShell">
          <div className="globalEffects" aria-hidden="true">
            <ScrollGlow />
            <MouseSpotlight />
          </div>
          <SiteHeader />
          <main className="appContent">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
