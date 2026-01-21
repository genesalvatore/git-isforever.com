import type { Metadata } from 'next'
import './globals.css'
import CathedralStructuredData from '@/components/CathedralStructuredData'

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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
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
        <script defer data-domain="git-isforever.com" src="https://plausible.io/js/script.js"></script>
        <CathedralStructuredData siteName="Git is Forever" siteUrl="https://git-isforever.com" description="Forever is not a promise. It's mathematics. Distributed across thousands of machines. Impossible to erase. Forever in the Merkle tree." theme="eternity" />
      </head>
      <body>{children}</body>
    </html>
  )
}
