import { useState } from 'react'

const WA_LINK = "https://api.whatsapp.com/send?phone=59897863648&text=Hola%2C%20quiero%20hacer%20una%20consulta."

function PinIcon() {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '1px' }}>
      <path d="M5.5 0C2.462 0 0 2.462 0 5.5c0 3.85 5.5 8.5 5.5 8.5S11 9.35 11 5.5C11 2.462 8.538 0 5.5 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#F97316"/>
    </svg>
  )
}

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
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
    .hero-badge { display: none !important; }
    .hero-buttons {
      flex-direction: column !important;
      width: 100%;
    }
    .hero-buttons a {
      width: 100% !important;
      justify-content: center !important;
    }
    .hero-scroll { display: none !important; }
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
  transition: 'transform 200ms ease, opacity 200ms ease',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
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

// Imagen genérica de respaldo — gym oscuro, estilo Equinox (Unsplash, libre de uso)
const GYM_IMG = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&fit=crop&auto=format'

export default function Hero({ bgImage }) {
  const [src, setSrc] = useState(bgImage || GYM_IMG)
  const [failed, setFailed] = useState(false)
  const showImg = !failed

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        /* Fallback gradient siempre presente como background */
        background: 'radial-gradient(ellipse at 30% 60%, rgba(249,115,22,0.18), transparent 60%), #0D0D0D',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <style>{styles}</style>

      {/* Imagen de fondo */}
      {showImg && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          onError={() => {
            if (src !== GYM_IMG) setSrc(GYM_IMG)
            else setFailed(true)
          }}
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
        backgroundColor: 'rgba(0,0,0,0.58)',
        pointerEvents: 'none',
      }} />

      {/* Overlay 2: degradado inferior — funde hero con la siguiente sección */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '45%',
        background: 'linear-gradient(to bottom, transparent, #0D0D0D)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Contenido — fluye en el flex, empuja hacia el fondo */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '0 6% 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Badge dirección */}
        <p
          className="hero-badge"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '11px',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            margin: '0 0 10px',
          }}
        >
          <PinIcon />
          Coronel Brandzen 2178
          <span style={{ color: 'rgba(255,255,255,0.35)', margin: '0 2px' }}>·</span>
          Parque Batlle, Montevideo
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 'clamp(44px, 7vw, 96px)',
          lineHeight: 0.92,
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
          fontSize: 'clamp(14px, 1.8vw, 19px)',
          color: 'rgba(255,255,255,0.58)',
          margin: '12px 0 24px',
        }}>
          Entrená en serio. Resultados reales.
        </p>

        {/* Botones */}
        <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <HeroBtn href="#planes" style={{ backgroundColor: '#F97316', color: '#fff', border: 'none' }}>
            VER PLANES
          </HeroBtn>
          <HeroBtn
            href={WA_LINK}
            onClick={e => { e.preventDefault(); window.open(WA_LINK, '_blank', 'noopener') }}
            style={{ backgroundColor: '#25D366', color: '#fff', border: 'none' }}
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

      {/* Indicador de scroll — centrado, solo desktop */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'heroBounce 2.2s ease-in-out infinite',
          opacity: 0.45,
          color: '#fff',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
