import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import SiteHeader from '@/components/parts/SiteHeader'
import Footer from '@/components/parts/Footer'
import ScrollGlow from '@/components/effects/ScrollGlow'
import MouseSpotlight from '@/components/effects/MouseSpotlight'

const FuturaDemiC = localFont({ src: '../../public/fonts/futurademic.ttf' })

const SITE_URL = 'https://fovibalt.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fovibalt – The Only Universal LED Strip Controller | LedID™',
    template: '%s | Fovibalt',
  },
  description:
    'Fovilight is the only universal LED strip controller. Supports 20+ LED types with LedID™ auto-detection, AI effects, Lua scripting, BLE setup, and local-first control. Works with any LED strip.',
  keywords: [
    'universal LED controller',
    'LED strip controller',
    'smart LED controller',
    'addressable LED controller',
    'WS2812 controller',
    'WS2815 controller',
    'APA102 controller',
    'SK6812 controller',
    'RGBW LED controller',
    'LedID technology',
    'AI LED effects',
    'LED effect store',
    'LED strip auto detection',
    'BLE LED controller',
    'local-first smart home',
    'fovilight',
    'fovibalt',
    'LED Lua scripting',
    'universal smart lighting',
    'LED strip starter kit',
  ],
  authors: [{ name: 'Fovibalt' }],
  creator: 'Fovibalt',
  publisher: 'Fovibalt',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Fovibalt',
    title: 'Fovibalt – The Only Universal LED Strip Controller',
    description:
      'Supports 20+ LED types with LedID™ auto-detection, AI effects, Lua scripting, and local-first control. 3-step BLE setup. Works with any LED strip.',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Fovilight universal LED strip controller',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fovibalt – The Only Universal LED Strip Controller',
    description:
      'Supports 20+ LED types with LedID™ auto-detection, AI effects, and local-first control.',
    images: ['/images/og-cover.png'],
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
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
