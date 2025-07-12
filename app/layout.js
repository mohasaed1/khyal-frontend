import '../styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'خيال.ai - Arabic Kids Stories',
  description: 'Create personalized Arabic storybooks for your child',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
