'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'reveal' | 'reveal-scale' | 'reveal-left' | 'reveal-right'
  delay?: number
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'reveal',
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const delayClass = delay > 0 ? `delay-${delay}` : ''

  return (
    <div ref={ref} className={`${animation} ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
