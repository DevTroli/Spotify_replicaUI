import type { Metadata } from 'next'
import '../styles/index.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin']
})

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
      <body
        className="bg-zinc-950 text-white"
        style={{ fontFamily: nunito.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  )
}
