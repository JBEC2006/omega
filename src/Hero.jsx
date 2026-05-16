import { useState } from 'react'

const WA_LINK = "https://api.whatsapp.com/send?phone=59897863648&text=Hola%2C%20quiero%20hacer%20una%20consulta."

const FALLBACK_BG = 'radial-gradient(ellipse at 30% 60%, rgba(249,115,22,0.15), transparent 60%), #0D0D0D'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.428a.5.5 0 0 0 .609.61l5.703-1.49A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.528-5.222-1.444l-.374-.222-3.884 1.016 1.033-3.772-.243-.388A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

const styles = `
  @keyframes heroBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(-7px); }
  }

  @media (max-width: 767px) {
    .hero-content {
      align-items: center !important;
      text-align: center !important;
      padding: 0 5% 48px !important;
    }
    .hero-content h1 span {
      display: block;
    }
    .hero-badge {
      display: none !important;
    }
    .hero-buttons {
      flex-direction: column !important;
      width: 100%;
    }
    .hero-buttons a {
      width: 100% !important;
      justify-content: center !important;
    }
    .hero-scroll {
      display: none !important;
    }
  }
`

const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: "'Bebas Neue', cursive",
  fontSize: '18px',
  letterSpacing: '2px',
  fontWeight: 700,
  textDecoration: 'none',
  padding: '14px 32px',
  borderRadius: '4px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  border: 'none',
  transition: 'transform 200ms ease, opacity 200ms ease',
  whiteSpace: 'nowrap',
}

function HeroBtn({ href, style, children, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        ...btnBase,
        ...style,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        opacity: hovered ? 0.88 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

export default function Hero({ bgImage }) {
  const hasBg = Boolean(bgImage)

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: hasBg ? undefined : FALLBACK_BG,
        backgroundColor: hasBg ? '#0D0D0D' : undefined,
      }}
    >
      <style>{styles}</style>

      {/* Imagen de fondo */}
      {hasBg && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      )}

      {/* Overlay 1: oscuridad pareja */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.55)',
        pointerEvents: 'none',
      }} />

      {/* Overlay 2: degradado inferior para fundir con la siguiente sección */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, #0D0D0D)',
        pointerEvents: 'none',
      }} />

      {/* Contenido: bottom-left en desktop, centrado en mobile */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '0 6% 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
        className="hero-content"
      >

        {/* Badge dirección */}
        <p
          className="hero-badge"
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '11px',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
          }}
        >
          📍 Coronel Brandzen 2178&nbsp;&nbsp;
          <span style={{ color: '#F97316' }}>•</span>
          &nbsp;&nbsp;Parque Batlle, Montevideo
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 'clamp(56px, 9vw, 110px)',
          lineHeight: 0.9,
          margin: 0,
          color: '#fff',
          letterSpacing: '0.02em',
        }}>
          <span style={{ display: 'block' }}>DONDE SE FORJAN</span>
          <span style={{ display: 'block', color: '#F97316' }}>LOS MEJORES</span>
        </h1>

        {/* Subtítulo */}
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(15px, 2vw, 20px)',
          color: 'rgba(255,255,255,0.6)',
          margin: '16px 0 36px',
        }}>
          Entrená en serio. Resultados reales.
        </p>

        {/* Botones */}
        <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <HeroBtn href="#planes" style={{ backgroundColor: '#F97316', color: '#fff' }}>
            VER PLANES
          </HeroBtn>
          <HeroBtn
            href={WA_LINK}
            onClick={e => { e.preventDefault(); window.open(WA_LINK, '_blank', 'noopener') }}
            style={{ backgroundColor: '#25D366', color: '#fff' }}
          >
            <WhatsAppIcon />
            CONSULTAR
          </HeroBtn>
          <HeroBtn
            href="#horarios"
            style={{
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.4)',
            }}
          >
            VER HORARIOS
          </HeroBtn>
        </div>
      </div>

      {/* Indicador de scroll — solo desktop */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'heroBounce 2.2s ease-in-out infinite',
          opacity: 0.5,
          color: '#fff',
          pointerEvents: 'none',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
