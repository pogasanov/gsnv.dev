import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from "@/app/providers";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pavel Gasanov - freelance software developer',
  description: 'Pavel Gasanov personal blog. Here I collect my thoughts and projects done for future reference.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body className={`bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${inter.className}`}>
    <Providers>
      {children}
    </Providers>
    <Script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="18722992-5b6b-49bc-a253-43386ff6bfa3" async/>
    </body>
    </html>
  )
}
