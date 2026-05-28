import ScrollReveal from './ScrollReveal'

const storyItems = [
  {
    year: '2019',
    icon: '✦',
    title: 'Awal Pertemuan',
    text: 'Pertemuan pertama kami terjadi di sebuah seminar budaya di Yogyakarta. Di antara kerumunan, satu tatapan sederhana menjadi awal dari segalanya. Tak ada yang menyangka bahwa momen singkat itu akan mengubah dua perjalanan hidup menjadi satu.',
  },
  {
    year: '2020',
    icon: '❤',
    title: 'Jatuh Hati',
    text: 'Hari demi hari, pesan demi pesan, tawa demi tawa — kami menyadari ada sesuatu yang tumbuh di antara kami. Sesuatu yang hangat, yang tenang, yang terasa seperti rumah. Dan pada akhirnya, kami memberanikan diri untuk mengakuinya satu sama lain.',
  },
  {
    year: '2022',
    icon: '★',
    title: 'Menapaki Bersama',
    text: 'Dua tahun berjalan bersama mengajarkan kami arti saling mendukung dan menerima. Dalam suka dan duka, kami belajar bahwa cinta bukan hanya tentang perasaan, tetapi tentang pilihan — pilihan untuk terus hadir setiap harinya.',
  },
  {
    year: '2024',
    icon: '◆',
    title: 'Lamaran',
    text: 'Di bawah langit sore yang jingga, dengan untaian melati dan doa restu orang tua, Arjuna berlutut dan meminta Sari untuk menjadi pendampingnya seumur hidup. Dengan air mata bahagia dan senyum yang mekar, Sari menjawab: "Iya."',
  },
  {
    year: '2025',
    icon: '♦',
    title: 'Hari Istimewa',
    text: 'Kini tiba saatnya kami meresmikan ikatan yang telah lama kami jaga. Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i untuk menyaksikan dan mendoakan langkah baru kami dalam mengarungi bahtera kehidupan.',
  },
]

export default function StorySection() {
  return (
    <section
      id="story"
      className="section"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #141410 0%, #111109 50%, #0f0f0d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(196,155,78,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,155,78,0.02) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-wd">
        {/* Header */}
        <ScrollReveal animation="reveal">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-eyebrow">Timeline</span>
            <h2 className="section-title">Cerita Kita</h2>
            <div style={{ marginTop: '1.5rem' }}>
              <div className="gold-divider">
                <span>✦</span>
              </div>
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                marginTop: '1.5rem',
                color: 'var(--color-muted)',
                fontSize: '1.05rem',
                maxWidth: '400px',
                margin: '1.5rem auto 0',
              }}
            >
              Setiap pertemuan adalah bagian dari rencana yang lebih indah
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          {/* Center vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background:
                'linear-gradient(to bottom, transparent, var(--color-gold-dim) 10%, var(--color-gold-dim) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {storyItems.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <ScrollReveal
                key={item.year}
                animation={isLeft ? 'reveal-left' : 'reveal-right'}
                delay={100}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    marginBottom: '3.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Center dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '1.5rem',
                      transform: 'translate(-50%, -50%)',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'var(--color-gold)',
                      boxShadow: '0 0 16px rgba(196,155,78,0.5)',
                      zIndex: 2,
                    }}
                  />

                  {/* Card */}
                  <div
                    style={{
                      width: 'calc(50% - 2rem)',
                      marginLeft: isLeft ? 0 : undefined,
                      marginRight: isLeft ? undefined : 0,
                    }}
                  >
                    <div
                      className="glass-card"
                      style={{
                        padding: '1.75rem',
                        position: 'relative',
                      }}
                    >
                      {/* Year badge */}
                      <span
                        style={{
                          fontFamily: 'Cinzel, serif',
                          fontSize: '0.7rem',
                          letterSpacing: '0.25em',
                          color: 'var(--color-gold)',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.year}
                      </span>

                      <h3
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1.4rem',
                          fontWeight: 500,
                          color: 'var(--color-cream)',
                          marginBottom: '0.75rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1rem',
                          color: 'var(--color-muted)',
                          lineHeight: 1.85,
                        }}
                      >
                        {item.text}
                      </p>

                      {/* Connecting line to center */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          top: '1.5rem',
                          [isLeft ? 'right' : 'left']: '-2rem',
                          width: '2rem',
                          height: '1px',
                          background: 'var(--color-border)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
