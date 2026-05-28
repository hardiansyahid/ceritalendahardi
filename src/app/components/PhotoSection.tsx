import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const photos = [
  { src: '/gallery_1.png', alt: 'Momen bersama', span: 'row-span-2' },
  { src: '/gallery_2.png', alt: 'Foto prewedding', span: '' },
  { src: '/gallery_3.png', alt: 'Detail dekorasi', span: '' },
  { src: '/gallery_4.png', alt: 'Cincin pernikahan', span: '' },
  { src: '/gallery_5.png', alt: 'Momen spesial', span: '' },
  { src: '/gallery_6.png', alt: 'Kebersamaan', span: 'col-span-2' },
]

export default function PhotoSection() {
  return (
    <section
      id="photos"
      className="section"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #0f0f0d 0%, #0c0c0a 100%)',
      }}
    >
      <div className="container-wd">
        {/* Header */}
        <ScrollReveal animation="reveal">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-eyebrow">Galeri</span>
            <h2 className="section-title">Foto Kenangan</h2>
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
              }}
            >
              Setiap gambar menyimpan seribu cerita
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <ScrollReveal animation="reveal-scale" delay={100}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto',
              gap: '0.75rem',
            }}
          >
            {/* Photo 1 — tall left */}
            <div
              className="photo-grid-item"
              style={{
                gridRow: 'span 2',
                height: '520px',
                position: 'relative',
              }}
            >
              <Image src="/gallery_1.png" alt="Momen bersama" fill sizes="33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 50%)', pointerEvents: 'none' }} />
            </div>

            {/* Photo 2 */}
            <div className="photo-grid-item" style={{ height: '250px', position: 'relative' }}>
              <Image src="/gallery_2.png" alt="Foto prewedding" fill sizes="33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>

            {/* Photo 3 */}
            <div className="photo-grid-item" style={{ height: '250px', position: 'relative' }}>
              <Image src="/gallery_3.png" alt="Detail dekorasi" fill sizes="33vw" style={{ objectFit: 'cover', filter: 'sepia(0.2) brightness(0.85)' }} />
            </div>

            {/* Photo 4 */}
            <div className="photo-grid-item" style={{ height: '250px', position: 'relative' }}>
              <Image src="/gallery_4.png" alt="Momen spesial" fill sizes="33vw" style={{ objectFit: 'cover', objectPosition: 'right center' }} />
            </div>

            {/* Photo 5 */}
            <div className="photo-grid-item" style={{ height: '250px', position: 'relative' }}>
              <Image src="/gallery_5.png" alt="Kebersamaan" fill sizes="33vw" style={{ objectFit: 'cover', filter: 'brightness(0.8)' }} />
            </div>

            {/* Photo 6 — wide bottom */}
            <div
              className="photo-grid-item"
              style={{
                gridColumn: 'span 2',
                height: '260px',
                position: 'relative',
              }}
            >
              <Image src="/gallery_6.png" alt="Foto bersama" fill sizes="66vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(8,8,8,0.3)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    color: 'var(--color-cream)',
                    textAlign: 'center',
                    textShadow: '0 2px 20px rgba(0,0,0,0.8)',
                    letterSpacing: '0.08em',
                  }}
                >
                  "Dua jiwa, satu tujuan"
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Placeholder note */}
        <ScrollReveal animation="reveal" delay={200}>
          <p
            style={{
              textAlign: 'center',
              marginTop: '1.5rem',
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--color-gold-dim)',
              letterSpacing: '0.05em',
            }}
          >
            ✦ Foto-foto akan diperbarui setelah hari pernikahan ✦
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
