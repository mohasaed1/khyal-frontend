"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Preview() {
  const [childName, setChildName] = useState('')
  const [story, setStory] = useState('')
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    setChildName(localStorage.getItem('childName'))
    setStory(localStorage.getItem('story'))
  }, [])

  const downloadPdf = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/v1/generate-pdf', {
        child_name: childName,
        story_text: story
      })
      setPdfUrl(res.data.pdf_url)
    } catch {
      alert('حدث خطأ أثناء إنشاء ملف PDF')
    }
  }

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '1rem',
      backgroundColor: '#FDF6FD',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#8E44AD', marginBottom: '1rem' }}>📖 قصة {childName}</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>{story}</p>
      <button onClick={downloadPdf} style={{
        backgroundColor: '#2980B9',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        تنزيل PDF
      </button>
      {pdfUrl && (
        <div style={{ marginTop: '1rem' }}>
          <a href={pdfUrl} target="_blank" style={{ color: '#2980B9', textDecoration: 'underline' }}>
            تحميل ملف PDF
          </a>
        </div>
      )}
    </div>
  )
}
