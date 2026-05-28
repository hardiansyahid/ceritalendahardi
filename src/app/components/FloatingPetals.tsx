'use client'

import { useEffect, useRef } from 'react'

export default function FloatingPetals() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const petalCount = 12
    const petals: HTMLElement[] = []

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div')
      petal.classList.add('petal')

      const size = Math.random() * 6 + 5
      const left = Math.random() * 100
      const duration = Math.random() * 12 + 10
      const delay = Math.random() * 15
      const xDrift = Math.random() * 80 - 40

      petal.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
        transform: translateX(${xDrift}px);
        opacity: 0;
        border-radius: ${Math.random() > 0.5 ? '60% 40% 60% 40%' : '40% 60% 40% 60%'};
      `

      container.appendChild(petal)
      petals.push(petal)
    }

    return () => {
      petals.forEach(p => p.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  )
}
