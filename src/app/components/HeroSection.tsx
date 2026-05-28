'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#080808',
      }}
    >
      {/* Parallax background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-10%',
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform',
        }}
      >
        <Image
          src="/hero_bg.png"
          alt="Batik ornament background"
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.55 }}
          sizes="100vw"
        />
      </div>

      {/* Deep dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.8) 70%, rgba(8,8,8,0.97) 100%)',
        }}
      />

      {/* Top & bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(8,8,8,0.9) 0%, transparent 18%, transparent 80%, rgba(8,8,8,0.95) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '2rem 1.5rem',
          maxWidth: '720px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-sub-animate"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.65rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '2rem',
            opacity: 0,
          }}
        >
          Undangan Pernikahan
        </p>

        {/* Ornament top */}
        <div className="hero-divider-animate" style={{ marginBottom: '1.5rem', opacity: 0 }}>
          <OrnamentLine />
        </div>

        {/* Names */}
        <h1
          className="hero-title-animate"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: 400,
            letterSpacing: '0.05em',
            lineHeight: 1.1,
            color: 'var(--color-cream)',
            marginBottom: '0',
            opacity: 0,
          }}
        >
          <span
            style={{
              background:
                'linear-gradient(135deg, #8a6d35 0%, #e2c87a 45%, #c49b4e 70%, #8a6d35 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
            }}
          >
            Arjuna
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.38em',
              letterSpacing: '0.3em',
              color: 'var(--color-gold)',
              WebkitTextFillColor: 'var(--color-gold)',
              display: 'block',
              margin: '0.3em 0',
            }}
          >
            &amp;
          </span>
          <span
            style={{
              background:
                'linear-gradient(135deg, #8a6d35 0%, #e2c87a 45%, #c49b4e 70%, #8a6d35 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
            }}
          >
            Sari
          </span>
        </h1>

        {/* Ornament bottom */}
        <div className="hero-divider-animate" style={{ marginTop: '1.5rem', opacity: 0 }}>
          <OrnamentLine />
        </div>

        {/* Date & Venue */}
        <div
          className="hero-date-animate"
          style={{
            marginTop: '2.5rem',
            opacity: 0,
          }}
        >
          <p
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
              letterSpacing: '0.25em',
              color: 'var(--color-gold-light)',
              marginBottom: '0.4rem',
            }}
          >
            SABTU, 12 JULI 2025
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              color: 'var(--color-muted)',
              letterSpacing: '0.1em',
            }}
          >
            Pendopo Agung Keraton Ngayogyakarta · Yogyakarta
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-date-animate"
          style={{
            marginTop: '4rem',
            opacity: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'var(--color-gold-dim)',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '48px',
              background:
                'linear-gradient(to bottom, var(--color-gold), transparent)',
              animation: 'fadeInUp 1s ease infinite alternate',
            }}
          />
        </div>
      </div>
    </section>
  )
}

function OrnamentLine() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: '120px',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, var(--color-gold))',
        }}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.8"
        />
        <circle cx="10" cy="10" r="2" fill="var(--color-gold)" opacity="0.6" />
      </svg>
      <div
        style={{
          flex: 1,
          maxWidth: '120px',
          height: '1px',
          background:
            'linear-gradient(90deg, var(--color-gold), transparent)',
        }}
      />
    </div>
  )
}
