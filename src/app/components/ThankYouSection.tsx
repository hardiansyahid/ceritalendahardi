import ScrollReveal from './ScrollReveal'

export default function ThankYouSection() {
  return (
    <section
      id="thankyou"
      className="section"
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0c0c0a 0%, #0a0a08 50%, #080806 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(196,155,78,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Batik corners */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '300px', height: '300px',
          backgroundImage: 'url(/batik_divider.png)',
          backgroundSize: 'cover', opacity: 0.05,
          transform: 'rotate(180deg)', pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '300px', height: '300px',
          backgroundImage: 'url(/batik_divider.png)',
          backgroundSize: 'cover', opacity: 0.05,
          pointerEvents: 'none',
        }}
      />

      <div className="container-wd">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>

          {/* Top ornament */}
          <ScrollReveal animation="reveal">
            <div style={{ marginBottom: '3rem' }}>
              <LotusOrnament />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal" delay={100}>
            <span className="section-eyebrow">Dengan Sepenuh Hati</span>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
              Ucapan Terima Kasih
            </h2>
          </ScrollReveal>

          {/* Main quote box */}
          <ScrollReveal animation="reveal-scale" delay={200}>
            <div
              className="glass-card"
              style={{
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '3rem',
                position: 'relative',
              }}
            >
              <div className="corner-ornament tl" />
              <div className="corner-ornament tr" />
              <div className="corner-ornament bl" />
              <div className="corner-ornament br" />

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
                  lineHeight: 2,
                  color: 'var(--color-cream)',
                  marginBottom: '1.5rem',
                }}
              >
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu
                dalam momen sakral pernikahan kami.
              </p>

              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'var(--color-gold)',
                  margin: '0 auto 1.5rem',
                  opacity: 0.5,
                }}
              />

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.9,
                }}
              >
                Tanpa mengurangi rasa hormat, kami memohon maaf yang sebesar-besarnya
                apabila terdapat kesalahan dalam penulisan nama dan gelar, serta
                kekurangan dalam penyampaian undangan ini.
              </p>
            </div>
          </ScrollReveal>

          {/* Closing names */}
          <ScrollReveal animation="reveal" delay={300}>
            <p
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.7rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--color-gold-dim)',
                marginBottom: '1rem',
              }}
            >
              Hormat kami
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                color: 'var(--color-cream)',
                letterSpacing: '0.05em',
                lineHeight: 1.4,
              }}
            >
              Arjuna &amp; Sari
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--color-muted)',
                marginTop: '0.5rem',
              }}
            >
              beserta seluruh keluarga besar
            </p>
          </ScrollReveal>

          {/* Hashtag */}
          <ScrollReveal animation="reveal" delay={400}>
            <div
              style={{
                marginTop: '3rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 1.75rem',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold)',
                }}
              >
                #ArjunaDanSari2025
              </span>
            </div>
          </ScrollReveal>

          {/* Bottom ornament */}
          <ScrollReveal animation="reveal" delay={500}>
            <div style={{ marginTop: '3rem' }}>
              <LotusOrnament />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function LotusOrnament() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <div style={{ flex: 1, maxWidth: '100px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4 C18 4 22 10 28 12 C22 14 18 20 18 20 C18 20 14 14 8 12 C14 10 18 4 18 4Z" stroke="var(--color-gold)" strokeWidth="0.8" fill="none" />
        <path d="M18 14 C18 14 20 17 23 18 C20 19 18 22 18 22 C18 22 16 19 13 18 C16 17 18 14 18 14Z" fill="var(--color-gold)" opacity="0.3" />
        <circle cx="18" cy="18" r="2" fill="var(--color-gold)" opacity="0.7" />
        <line x1="18" y1="2" x2="18" y2="0" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.4" />
        <line x1="18" y1="34" x2="18" y2="36" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.4" />
        <line x1="2" y1="18" x2="0" y2="18" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.4" />
        <line x1="34" y1="18" x2="36" y2="18" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.4" />
      </svg>
      <div style={{ flex: 1, maxWidth: '100px', height: '1px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />
    </div>
  )
}
