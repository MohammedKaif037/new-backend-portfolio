import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Mohammed Kaif | Backend Developer',
  description: 'Backend Developer with 2.5 years of experience building high-scale e-commerce microservices. Expert in Java 17, Spring Boot, REST APIs, and PCI DSS compliance.',
  generator: 'v0.app',
  keywords: ['Backend Developer', 'Java Developer', 'Spring Boot', 'Microservices', 'REST APIs', 'Mohammed Kaif'],
  authors: [{ name: 'Mohammed Kaif' }],
  icons: {
    icon: '/MK.png', // Favicon from your old layout
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
