import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from "@/app/providers";

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
    </body>
    </html>
  )
}
