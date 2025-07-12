import Link from 'next/link'

export default function Home() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨ مرحبًا بك في خيال.ai</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        أنشئ كتب قصص عربية مخصصة لطفلك بسهولة
      </p>
      <Link href="/create">
        <button style={{
          backgroundColor: '#8E44AD',
          color: '#fff',
          padding: '0.75rem 2rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          ابدأ الآن
        </button>
      </Link>
    </section>
  )
}
