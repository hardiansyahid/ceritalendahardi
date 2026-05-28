'use client'

import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2025-07-12T08:00:00+07:00')

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const now = new Date()
      const diff = WEDDING_DATE.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  const units = [
    { label: 'Hari',   value: timeLeft.days },
    { label: 'Jam',    value: timeLeft.hours },
    { label: 'Menit',  value: timeLeft.minutes },
    { label: 'Detik',  value: timeLeft.seconds },
  ]

  return (
    <div
      style={{
        display: 'flex',
        gap: 'clamp(1rem, 4vw, 3rem)',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {units.map((u, i) => (
        <div
          key={u.label}
          style={{ textAlign: 'center', minWidth: '70px' }}
        >
          <span
            className="countdown-num"
            style={{
              animationDelay: `${i * 0.1}s`,
              textShadow: '0 0 30px rgba(196,155,78,0.3)',
            }}
          >
            {pad(u.value)}
          </span>
          <span
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              display: 'block',
              marginTop: '0.5rem',
            }}
          >
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
