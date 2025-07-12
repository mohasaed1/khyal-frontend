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
      // Upload photo
      const formData = new FormData()
      formData.append('file', photo)
      await axios.post('http://127.0.0.1:8000/api/v1/upload-photo', formData)
      
      // Generate story
      const res = await axios.post('http://127.0.0.1:8000/api/v1/generate-story', new URLSearchParams({ child_name: childName }))
      
      // Save story locally
      localStorage.setItem('story', res.data.story)
      localStorage.setItem('childName', childName)

      router.push('/preview')
    } catch (err) {
      console.error(err)
      alert('حدث خطأ أثناء إنشاء القصة')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">✨ إنشاء قصة جديدة</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="اسم الطفل"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          required
          className="p-3 rounded-lg border border-gray-300"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
          className="p-3 rounded-lg border border-gray-300"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          أنشئ القصة
        </button>
      </form>
    </div>
  )
}
