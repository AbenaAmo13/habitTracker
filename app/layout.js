import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '/components/nav.js'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Habit Tracker 2024',
  description: 'Track all your habits for a successful 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Navigation />
      </body>
    </html>
  )
}
