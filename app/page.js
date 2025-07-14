"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [childName, setChildName] = useState('');
  const [story, setStory] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    const savedChildName = localStorage.getItem('childName');
    const savedStory = localStorage.getItem('story');
    const savedPhotoUrl = localStorage.getItem('photoUrl');

    if (savedChildName && savedStory && savedPhotoUrl) {
      setChildName(savedChildName);
      setStory(savedStory);
      setPhotoUrl(`http://127.0.0.1:8000${savedPhotoUrl}`);
    }
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨ مرحبًا بك في خيال.ai</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        أنشئ كتب قصص عربية مخصصة لطفلك بسهولة
      </p>
      <Link href="/create">
        <button
          style={{
            backgroundColor: '#8E44AD',
            color: '#fff',
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginBottom: '2rem',
          }}
        >
          ابدأ الآن
        </button>
      </Link>

      {/* 👇 Show last generated story if exists */}
      {childName && story && (
        <div
          style={{
            maxWidth: '600px',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            textAlign: 'right',
          }}
        >
          <h3 style={{ color: '#27AE60', marginBottom: '1rem' }}>
            📖 آخر قصة لـ {childName}
          </h3>
          {photoUrl && (
            <img
              src={photoUrl}
              alt={`صورة ${childName}`}
              style={{
                width: '100%',
                maxHeight: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
          )}
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#333',
              whiteSpace: 'pre-wrap',
            }}
          >
            {story.substring(0, 300)}...
          </p>
          <Link href="/preview">
            <button
              style={{
                marginTop: '1rem',
                backgroundColor: '#2980B9',
                color: '#fff',
                padding: '0.5rem 1.5rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              عرض القصة كاملة
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
