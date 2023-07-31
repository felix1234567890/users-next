import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Filter from '@/components/Filter/Filter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Users Search App',
  description: 'Search users by country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header title='Users Search App'/>
      <Filter />
        {children}</body>
    </html>
  )
}
