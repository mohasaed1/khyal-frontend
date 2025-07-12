"use client"

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Create() {
  const [childName, setChildName] = useState('')
  const [photo, setPhoto] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('file', photo)
      await axios.post('http://127.0.0.1:8000/api/v1/upload-photo', formData)

      const res = await axios.post('http://127.0.0.1:8000/api/v1/generate-story', { child_name: childName })
      localStorage.setItem('story', res.data.story)
      localStorage.setItem('childName', childName)
      router.push('/preview')
    } catch (err) {
      alert('حدث خطأ أثناء إنشاء القصة')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '2rem auto',
      gap: '1rem'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#8E44AD' }}>✨ أنشئ قصة جديدة</h2>
      <input
        type="text"
        placeholder="اسم الطفل"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        required
        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
        required
        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{
        backgroundColor: '#27AE60',
        color: '#fff',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        أنشئ القصة
      </button>
    </form>
  )
}
