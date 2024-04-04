import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const FuturaDemiC = localFont({ src: '../../public/fonts/futurademic.ttf' })

export const metadata: Metadata = {
  title: 'Fovibalt',
  description: 'Fovibalt',
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
      <body className={FuturaDemiC.className}>{children}</body>
    </html>
  )
}
