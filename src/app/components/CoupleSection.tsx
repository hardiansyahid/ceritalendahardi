import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="section"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #080808 0%, #0f0f0d 40%, #141410 100%)',
        position: 'relative',
      }}
    >
      {/* Subtle batik corner decorations */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '260px',
          height: '260px',
          backgroundImage: 'url(/batik_divider.png)',
          backgroundSize: 'cover',
          opacity: 0.07,
          transform: 'rotate(180deg)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '260px',
          height: '260px',
          backgroundImage: 'url(/batik_divider.png)',
          backgroundSize: 'cover',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />

      <div className="container-wd">
        {/* Section header */}
        <ScrollReveal animation="reveal">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-eyebrow">Bismillahirrahmanirrahim</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Mempelai
            </h2>
            <div className="gold-divider">
              <span>✦</span>
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--color-muted)',
                marginTop: '1.5rem',
                maxWidth: '480px',
                margin: '1.5rem auto 0',
                lineHeight: 1.9,
              }}
            >
              &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
              isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
              kepadanya.&rdquo;
              <br />
              <span
                style={{
                  display: 'block',
                  marginTop: '0.5rem',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-gold-dim)',
                  fontStyle: 'normal',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                QS. Ar-Rum: 21
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Groom */}
          <ScrollReveal animation="reveal-left" delay={100}>
            <PersonCard
              name="Arjuna Prasetyo"
              role="Putra"
              father="Bapak Bambang Prasetyo"
              mother="Ibu Sri Wahyuni"
              imageSrc="/couple_portrait.png"
              imageAlt="Foto mempelai pria"
              isGroom
            />
          </ScrollReveal>

          {/* Center ornament */}
          <ScrollReveal animation="reveal">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: '60px',
                  background:
                    'linear-gradient(to bottom, transparent, var(--color-gold))',
                }}
              />
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                style={{ animation: 'floatY 4s ease-in-out infinite' }}
              >
                <path
                  d="M24 4 C24 4 28 14 38 18 C28 22 24 32 24 32 C24 32 20 22 10 18 C20 14 24 4 24 4Z"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                />
                <path
                  d="M24 16 C24 16 26 20 30 22 C26 24 24 28 24 28 C24 28 22 24 18 22 C22 20 24 16 24 16Z"
                  fill="var(--color-gold)"
                  opacity="0.4"
                />
                <circle cx="24" cy="22" r="2" fill="var(--color-gold)" opacity="0.8" />
              </svg>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '2rem',
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                }}
              >
                &amp;
              </p>
              <div
                style={{
                  width: '1px',
                  height: '60px',
                  background:
                    'linear-gradient(to top, transparent, var(--color-gold))',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Bride */}
          <ScrollReveal animation="reveal-right" delay={100}>
            <PersonCard
              name="Sari Dewanti"
              role="Putri"
              father="Bapak Hadi Santoso"
              mother="Ibu Endang Rahayu"
              imageSrc="/couple_portrait.png"
              imageAlt="Foto mempelai wanita"
              isGroom={false}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function PersonCard({
  name,
  role,
  father,
  mother,
  imageSrc,
  imageAlt,
  isGroom,
}: {
  name: string
  role: string
  father: string
  mother: string
  imageSrc: string
  imageAlt: string
  isGroom: boolean
}) {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Photo frame */}
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '260px',
          margin: '0 auto 2rem',
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: 'absolute',
            inset: '-8px',
            border: '1px solid var(--color-border)',
            transform: isGroom ? 'rotate(-2deg)' : 'rotate(2deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '-4px',
            border: '1px solid rgba(196,155,78,0.15)',
          }}
        />

        {/* Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'var(--color-card)',
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: isGroom ? 'left center' : 'right center',
              filter: 'sepia(0.15) brightness(0.9)',
            }}
            sizes="200px"
          />
          {/* Gold shimmer overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(196,155,78,0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Corner ornaments */}
        <div className="corner-ornament tl" />
        <div className="corner-ornament tr" />
        <div className="corner-ornament bl" />
        <div className="corner-ornament br" />
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: 'var(--color-cream)',
          marginBottom: '0.4rem',
        }}
      >
        {name}
      </h3>

      {/* Divider */}
      <div
        style={{
          width: '40px',
          height: '1px',
          background: 'var(--color-gold)',
          margin: '0.75rem auto',
          opacity: 0.6,
        }}
      />

      {/* Parents */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--color-muted)',
          lineHeight: 1.7,
        }}
      >
        {role} dari
        <br />
        <span style={{ color: 'var(--color-text)' }}>{father}</span>
        <br />
        <span style={{ color: 'var(--color-text)' }}>{mother}</span>
      </p>
    </div>
  )
}
