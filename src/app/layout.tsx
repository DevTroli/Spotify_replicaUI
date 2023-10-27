import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Clone Spotify',
  description: 'Listen to your favorite music on Spotify clone'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-950 text-white">{children}</body>
    </html>
  )
}
