import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center h-screen">
      <h1 className="text-5xl font-bold mb-4 text-purple-800">🌟 مرحبًا بك في Khyal.ai</h1>
      <p className="text-xl mb-6 text-gray-700">أنشئ قصصًا عربية مخصصة لأطفالك بسهولة</p>
      <Link href="/create" className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
        ابدأ الآن
      </Link>
    </main>
  )
}
