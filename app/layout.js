import '../styles/globals.css'

export const metadata = {
  title: 'Khyal.ai - Arabic Kids Story Creator',
  description: 'Create personalized Arabic storybooks for your child',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
