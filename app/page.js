import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-center bg-gradient-to-r from-purple-200 to-pink-200">
      <h1 className="text-5xl font-bold mb-4">🌟 مرحبًا بك في Khyal.ai</h1>
      <p className="text-xl mb-8">أنشئ قصصًا عربية مخصصة لأطفالك بسهولة</p>
      <Link href="/create" className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
        ابدأ الآن
      </Link>
    </main>
  )
}
