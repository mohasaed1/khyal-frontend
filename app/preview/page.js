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
      const res = await axios.post('http://127.0.0.1:8000/api/v1/generate-pdf', new URLSearchParams({ child_name: childName, story_text: story }))
      setPdfUrl(res.data.pdf_url)
    } catch (err) {
      console.error(err)
      alert('حدث خطأ أثناء إنشاء ملف PDF')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="text-3xl font-bold mb-4">📖 قصة {childName}</h2>
      <p className="mb-6 text-lg leading-loose text-right">{story}</p>
      <button onClick={downloadPdf} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4">
        تنزيل PDF
      </button>
      {pdfUrl && (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
          تحميل ملف PDF
        </a>
      )}
    </div>
  )
}
