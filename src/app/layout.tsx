import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WalletProvider from './context/walletContext'
import { ProductProvider, useProductContext } from './context/productContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OnyxTrack',
  description: 'Make Your Business Stronger with Authenticity and Transparency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <WalletProvider>
          <ProductProvider>
            {children}
            <Toaster />
          </ProductProvider>
        </WalletProvider>
      </body>
    </html>
  )
}
