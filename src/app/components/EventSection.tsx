import ScrollReveal from './ScrollReveal'
import CountdownTimer from './CountdownTimer'

export default function EventSection() {
  return (
    <section
      id="event"
      className="section"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #141410 0%, #131310 100%)',
        position: 'relative',
      }}
    >
      {/* Horizontal gold lines */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '60%', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)',
        opacity: 0.4,
      }} />

      <div className="container-wd">
        {/* Countdown */}
        <ScrollReveal animation="reveal">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-eyebrow">Menghitung Hari</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>
              Menuju Hari Bahagia
            </h2>
            <CountdownTimer />
          </div>
        </ScrollReveal>

        {/* Event cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '860px',
            margin: '0 auto',
          }}
        >
          <ScrollReveal animation="reveal-left" delay={100}>
            <EventCard
              icon="♦"
              type="Akad Nikah"
              day="Sabtu"
              date="12 Juli 2025"
              time="08.00 – 10.00 WIB"
              venue="Masjid Agung Keraton"
              address="Jl. Rotowijayan No.1, Ngupasan, Yogyakarta"
            />
          </ScrollReveal>

          <ScrollReveal animation="reveal-right" delay={100}>
            <EventCard
              icon="✦"
              type="Resepsi"
              day="Sabtu"
              date="12 Juli 2025"
              time="11.00 – 14.00 WIB"
              venue="Pendopo Agung Keraton Ngayogyakarta"
              address="Jl. Rotowijayan No.1, Ngupasan, Yogyakarta"
            />
          </ScrollReveal>
        </div>

        {/* Maps button */}
        <ScrollReveal animation="reveal" delay={200}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://maps.google.com/?q=Keraton+Ngayogyakarta+Hadiningrat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 2rem',
                border: '1px solid var(--color-border)',
                color: 'var(--color-gold)',
                fontFamily: 'Cinzel, serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                transition: 'all 0.3s',
                borderRadius: '2px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function EventCard({
  icon, type, day, date, time, venue, address,
}: {
  icon: string; type: string; day: string; date: string;
  time: string; venue: string; address: string
}) {
  return (
    <div
      className="glass-card"
      style={{ padding: '2.5rem', textAlign: 'center', position: 'relative' }}
    >
      <div className="corner-ornament tl" />
      <div className="corner-ornament tr" />
      <div className="corner-ornament bl" />
      <div className="corner-ornament br" />

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.8rem',
        color: 'var(--color-gold)',
        marginBottom: '1rem',
        opacity: 0.7,
      }}>
        {icon}
      </p>

      <h3 style={{
        fontFamily: 'Cinzel, serif',
        fontSize: '0.75rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--color-gold)',
        marginBottom: '1.5rem',
      }}>
        {type}
      </h3>

      <div style={{ width: '30px', height: '1px', background: 'var(--color-gold)', opacity: 0.4, margin: '0 auto 1.5rem' }} />

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: '0.9rem',
        color: 'var(--color-muted)',
        marginBottom: '0.25rem',
      }}>
        {day}
      </p>
      <p style={{
        fontFamily: 'Cinzel, serif',
        fontSize: '1.1rem',
        letterSpacing: '0.1em',
        color: 'var(--color-cream)',
        marginBottom: '0.5rem',
      }}>
        {date}
      </p>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1rem',
        color: 'var(--color-gold-dim)',
        marginBottom: '1.5rem',
      }}>
        {time}
      </p>

      <div style={{ width: '30px', height: '1px', background: 'var(--color-border)', margin: '0 auto 1.5rem' }} />

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1rem',
        color: 'var(--color-text)',
        fontWeight: 500,
        marginBottom: '0.3rem',
      }}>
        {venue}
      </p>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: '0.85rem',
        color: 'var(--color-muted)',
        lineHeight: 1.6,
      }}>
        {address}
      </p>
    </div>
  )
}
