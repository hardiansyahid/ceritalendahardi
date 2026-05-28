'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero',     label: 'Beranda' },
  { id: 'couple',   label: 'Mempelai' },
  { id: 'event',    label: 'Acara' },
  { id: 'story',    label: 'Cerita' },
  { id: 'photos',   label: 'Foto' },
  { id: 'thankyou', label: 'Terima Kasih' },
  { id: 'angpao',   label: 'Angpao' },
]

export default function NavDots() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Navigasi halaman"
      style={{
        position: 'fixed',
        right: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={`Navigasi ke seksi ${label}`}
          style={{
            width: active === id ? '8px' : '6px',
            height: active === id ? '8px' : '6px',
            borderRadius: '50%',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            background: active === id ? 'var(--color-gold)' : 'rgba(196,155,78,0.3)',
            boxShadow: active === id ? '0 0 8px rgba(196,155,78,0.6)' : 'none',
            transition: 'all 0.3s ease',
            outline: 'none',
          }}
        />
      ))}
    </nav>
  )
}
