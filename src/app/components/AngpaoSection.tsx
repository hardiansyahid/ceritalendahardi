'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function AngpaoSection() {
  return (
    <section
      id="angpao"
      className="section"
      style={{
        padding: '8rem 0 6rem',
        background: 'linear-gradient(180deg, #080806 0%, #0a0a08 30%, #0f0f0d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '80%', height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)',
          opacity: 0.4,
        }}
      />

      <div className="container-wd">
        {/* Header */}
        <ScrollReveal animation="reveal">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-eyebrow">Amplop Digital</span>
            <h2 className="section-title">Hadiah &amp; Angpao</h2>
            <div style={{ marginTop: '1.5rem' }}>
              <div className="gold-divider"><span>✦</span></div>
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                marginTop: '1.5rem',
                color: 'var(--color-muted)',
                fontSize: '1.05rem',
                maxWidth: '480px',
                margin: '1.5rem auto 0',
                lineHeight: 1.9,
              }}
            >
              Doa dan kehadiran Anda adalah hadiah terbaik bagi kami.
              Namun jika berkenan, berikut nomor rekening yang dapat digunakan.
            </p>
          </div>
        </ScrollReveal>

        {/* Three-column layout: rekening kiri | QR tengah | rekening kanan */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Rekening Mempelai Pria */}
          <ScrollReveal animation="reveal-left" delay={100}>
            <BankCard
              name="Arjuna Prasetyo"
              bank="Bank Central Asia (BCA)"
              accountNumber="1234 5678 90"
              label="Mempelai Pria"
              icon="♦"
            />
          </ScrollReveal>

          {/* QR Code tengah */}
          <ScrollReveal animation="reveal-scale" delay={200}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  padding: '1.5rem',
                  border: '1px solid var(--color-border)',
                  background: 'rgba(20,18,14,0.9)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                {/* Corner ornaments */}
                <div className="corner-ornament tl" />
                <div className="corner-ornament tr" />
                <div className="corner-ornament bl" />
                <div className="corner-ornament br" />

                <div
                  style={{
                    position: 'relative',
                    width: '200px',
                    height: '200px',
                  }}
                >
                  <Image
                    src="/qr_code.png"
                    alt="QRIS barcode untuk transfer digital"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="200px"
                  />
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 1.25rem',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'Cinzel, serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    color: 'var(--color-gold)',
                    borderRadius: '2px',
                    marginBottom: '0.5rem',
                  }}
                >
                  QRIS
                </span>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--color-muted)',
                  }}
                >
                  Scan untuk transfer via semua dompet digital
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Rekening Mempelai Wanita */}
          <ScrollReveal animation="reveal-right" delay={100}>
            <BankCard
              name="Sari Dewanti"
              bank="Bank Mandiri"
              accountNumber="9876 5432 10"
              label="Mempelai Wanita"
              icon="✦"
            />
          </ScrollReveal>
        </div>

        {/* Closing note */}
        <ScrollReveal animation="reveal" delay={300}>
          <div
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              padding: '2rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--color-muted)',
                marginBottom: '1rem',
              }}
            >
              Konfirmasi pengiriman dapat dilakukan melalui
            </p>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 2rem',
                border: '1px solid var(--color-gold-dim)',
                color: 'var(--color-gold)',
                fontFamily: 'Cinzel, serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderRadius: '2px',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background =
                  'rgba(196,155,78,0.08)'
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'var(--color-gold)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'var(--color-gold-dim)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konfirmasi via WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom separator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '80%', height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)',
          opacity: 0.3,
        }}
      />
    </section>
  )
}

function BankCard({
  name, bank, accountNumber, label, icon,
}: {
  name: string; bank: string; accountNumber: string; label: string; icon: string
}) {
  return (
    <div className="bank-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
      {/* Label badge */}
      <div
        style={{
          display: 'inline-block',
          marginBottom: '1.5rem',
          padding: '0.25rem 0.9rem',
          border: '1px solid var(--color-border)',
          borderRadius: '1px',
        }}
      >
        <span
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'var(--color-gold)',
          }}
        >
          {label}
        </span>
      </div>

      {/* Icon */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '2rem',
          color: 'var(--color-gold)',
          marginBottom: '1rem',
          opacity: 0.6,
        }}
      >
        {icon}
      </p>

      {/* Bank name */}
      <p
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          color: 'var(--color-gold-dim)',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
        }}
      >
        {bank}
      </p>

      {/* Account number */}
      <p
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
          letterSpacing: '0.15em',
          color: 'var(--color-cream)',
          marginBottom: '1rem',
          fontWeight: 400,
        }}
      >
        {accountNumber}
      </p>

      {/* Divider */}
      <div style={{ width: '30px', height: '1px', background: 'var(--color-gold)', opacity: 0.4, marginBottom: '1rem' }} />

      {/* Name */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--color-text)',
        }}
      >
        a.n. {name}
      </p>

      {/* Copy hint */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.8rem',
          color: 'var(--color-muted)',
          marginTop: '1rem',
          fontStyle: 'italic',
        }}
      >
        Ketuk nomor rekening untuk menyalin
      </p>
    </div>
  )
}
