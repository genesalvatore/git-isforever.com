import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git is Forever | Distributed Permanence & Digital Immortality',
  description: 'Forever is not a promise. It\'s mathematics. Distributed across thousands of machines. Impossible to erase. Forever in the Merkle tree.',
  keywords: ['git is forever', 'distributed permanence', 'digital immortality', 'merkle tree', 'forever storage', 'permanent data', 'immutable history'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Forever',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-isforever.com',
    title: 'Git is Forever | Distributed Permanence & Digital Immortality',
    description: 'Forever is not a promise. It\'s mathematics. Distributed across thousands of machines. Impossible to erase. Forever in the Merkle tree.',
    siteName: 'Git is Forever',
    images: [
      {
        url: '/og-forever.png',
        width: 1200,
        height: 630,
        alt: 'Git is Forever - Distributed Permanence & Digital Immortality',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-isforever.com',
  },
  metadataBase: new URL('https://git-isforever.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
