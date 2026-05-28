import Image from 'next/image'

export default function BatikDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '80px',
        position: 'relative',
        overflow: 'hidden',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <Image
        src="/batik_divider.png"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
        sizes="100vw"
      />
      {/* Gradient fade top & bottom */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, var(--color-dark) 0%, transparent 40%, transparent 60%, var(--color-dark) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
