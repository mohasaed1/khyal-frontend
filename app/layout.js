import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Khyal.ai - Arabic Kids Story Creator',
  description: 'Create personalized Arabic storybooks for your child',
  direction: 'rtl', // Enable RTL globally
  lang: 'ar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
