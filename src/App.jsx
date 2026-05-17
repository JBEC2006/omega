import { useState } from 'react'
import Hero from './Hero.jsx'
import logoNaranja from './assets/omega_logo_naranja_transparente.png'
import logoBlanco from './assets/omega_logo_blanco_transparente.png'
import mercadoPagoLogo from './assets/mercado_pago_logo_transparente.png'

const WA_LINK = "https://api.whatsapp.com/send?phone=59897863648&text=Hola%2C%20quiero%20hacer%20una%20consulta."
const INSTAGRAM = "https://www.instagram.com/gimnasio.omega.uy/"
const TIKTOK = "https://www.tiktok.com/@gimnasioomega.uy"
const TURNOS = "https://omega.turnosweb.com/"
const MAPS = "https://www.google.com/maps/place/C.+Cnel.+Brandzen+2178,+11200+Montevideo,+Departamento+de+Montevideo/@-34.8991907,-56.1676435,17z/data=!3m1!4b1!4m6!3m5!1s0x959f81ad241e76e3:0x9b47b77e252368ac!8m2!3d-34.8991907!4d-56.1676435!16s%2Fg%2F11l6v5gknw?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"

const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Disciplinas', href: '#disciplinas' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Contacto', href: '#contacto' },
]

function Logo({ small = false }) {
  const h = small ? 64 : 96
  return (
    <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <img src={logoNaranja} alt="Gimnasio Omega" height={h} style={{ height: h, width: 'auto', objectFit: 'contain' }} />
    </a>
  )
}

function LogoBlanco({ small = false }) {
  const h = small ? 64 : 80
  return (
    <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <img src={logoBlanco} alt="Gimnasio Omega" height={h} style={{ height: h, width: 'auto', objectFit: 'contain' }} />
    </a>
  )
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.79a4.85 4.85 0 01-1.03-.1z" />
    </svg>
  )
}

function ExtLink({ href, className, style, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {children}
    </a>
  )
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: 'rgba(0,0,0,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ padding: '0 3rem' }}>
        <div className="nav-bar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />

          {/* Desktop links */}
          <div className="nav-desktop" style={{ gap: '4rem', alignItems: 'center' }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Hamburger — solo mobile */}
          <button
            className="nav-mobile"
            onClick={() => setOpen(v => !v)}
            aria-label="Abrir menú"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '2px', backgroundColor: '#fff',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — solo mobile */}
      <div className="nav-mobile" style={{
        overflow: 'hidden',
        maxHeight: open ? '400px' : '0',
        opacity: open ? 1 : 0,
        transition: 'max-height 0.35s ease, opacity 0.25s ease',
        backgroundColor: 'rgba(0,0,0,0.95)',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '0 1.5rem 1.25rem' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              padding: '12px 0',
              fontSize: '1rem',
              fontWeight: 500,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              transition: 'color 0.2s',
            }}>
              {l.label}
            </a>
          ))}
          <ExtLink href={WA_LINK} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            marginTop: '12px',
            backgroundColor: '#25D366',
            color: '#fff',
            fontWeight: 700,
            padding: '14px 24px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'background-color 0.2s',
          }}>
            <WhatsAppIcon size={18} />
            Escribinos por WhatsApp
          </ExtLink>
        </div>
      </div>
    </nav>
  )
}


function btnStyle(variant) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '1.05rem', letterSpacing: '0.12em',
    fontWeight: 700, textDecoration: 'none',
    padding: '14px 32px', borderRadius: '10px',
    textTransform: 'uppercase', cursor: 'pointer',
    transition: 'transform 0.2s, opacity 0.2s',
    whiteSpace: 'nowrap',
  }
  if (variant === 'orange') return { ...base, backgroundColor: '#F97316', color: '#fff', border: '2px solid #F97316' }
  if (variant === 'green') return { ...base, backgroundColor: '#25D366', color: '#fff', border: '2px solid #25D366' }
  if (variant === 'outline') return { ...base, backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.35)' }
  return base
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({ id, bg = '#0D0D0D', children }) {
  return (
    <section id={id} style={{ backgroundColor: bg, padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <p style={{ color: '#F97316', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{eyebrow}</p>
      <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#fff', margin: 0 }}>{title}</h2>
    </div>
  )
}

function Card({ children, style = {} }) {
  return (
    <div style={{ backgroundColor: '#1A1A1A', borderRadius: '14px', padding: '2rem', ...style }}>
      {children}
    </div>
  )
}

// ─── NOSOTROS ─────────────────────────────────────────────────────────────────
function Nosotros() {
  const cards = [
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="19" width="32" height="5" rx="2.5" fill="#F97316" opacity="0.22" />
          <rect x="6" y="20" width="32" height="3.5" rx="1.75" fill="#F97316" />
          <rect x="3" y="15" width="6" height="13" rx="2.5" fill="#F97316" />
          <rect x="35" y="15" width="6" height="13" rx="2.5" fill="#F97316" />
          <rect x="0" y="17.5" width="4.5" height="8" rx="2" fill="#F97316" opacity="0.65" />
          <rect x="39.5" y="17.5" width="4.5" height="8" rx="2" fill="#F97316" opacity="0.65" />
        </svg>
      ),
      title: 'Equipamiento de Primer Nivel',
      desc: 'Máquinas modernas, pesos libres completos y todo lo que necesitás para entrenar sin límites.',
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="14" r="7" fill="#F97316" opacity="0.18" stroke="#F97316" strokeWidth="2.2" />
          <path d="M9 40c0-7.18 5.82-13 13-13s13 5.82 13 13" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="35" cy="11" r="4.5" fill="#F97316" opacity="0.15" stroke="#F97316" strokeWidth="1.6" />
          <path d="M39.5 30c0-4.5-2.9-8.3-7-9.6" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      ),
      title: 'Instructores Especializados',
      desc: 'Profesionales capacitados que guían cada clase funcional y acompañan tu progreso.',
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 4L27.5 16L41 17.5L31 27L33.5 40L22 34L10.5 40L13 27L3 17.5L16.5 16L22 4Z"
            stroke="#F97316" strokeWidth="2.2" fill="#F97316" opacity="0.12" strokeLinejoin="round" />
          <path d="M22 11L26 19.5L35 20.5L28.5 26.5L30.5 35L22 30.5L13.5 35L15.5 26.5L9 20.5L18 19.5L22 11Z"
            fill="#F97316" opacity="0.45" />
        </svg>
      ),
      title: 'Comunidad que Impulsa',
      desc: 'Un ambiente donde todos se apoyan. La energía del grupo hace la diferencia en cada entrenamiento.',
    },
  ]

  return (
    <Section id="nosotros">
      <SectionHeader eyebrow="Por qué elegirnos" title="NUESTRA PROPUESTA" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {cards.map(c => (
          <Card key={c.title}>
            <div style={{ marginBottom: '1.25rem' }}>{c.icon}</div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.9rem', letterSpacing: '0.06em', color: '#fff', margin: '0 0 0.75rem' }}>
              {c.title}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7 }}>{c.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// ─── DISCIPLINAS ──────────────────────────────────────────────────────────────
function Disciplinas() {
  return (
    <Section id="disciplinas" bg="#111111">
      <SectionHeader eyebrow="Lo que ofrecemos" title="NUESTRAS DISCIPLINAS" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {/* Musculación */}
        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '14px', padding: '2rem', borderTop: '4px solid #F97316', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <span style={{ color: '#F97316', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Acceso libre</span>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2.2rem, 5vw, 3rem)', letterSpacing: '0.06em', color: '#fff', margin: 0 }}>MUSCULACIÓN</h3>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Accedé al salón de musculación en nuestros horarios de apertura. Equipamiento completo: press, cables, máquinas guiadas, mancuernas y mucho más. Entrenás a tu ritmo, con tu programa.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, listStyle: 'none', margin: 0 }}>
            {['Equipamiento de alto rendimiento', 'Acceso en todo el horario del gimnasio', 'Ambiente motivador'].map(i => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#F97316', flexShrink: 0 }} />
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Funcional */}
        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '14px', padding: '2rem', borderTop: '4px solid #F97316', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <span style={{ color: '#F97316', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Clases guiadas</span>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2.2rem, 5vw, 3rem)', letterSpacing: '0.06em', color: '#fff', margin: 0 }}>FUNCIONAL</h3>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Clases grupales con instructores especializados. Entrenamiento de alta intensidad que combina fuerza, resistencia y movilidad. Cupos limitados para máxima atención personalizada.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, listStyle: 'none', margin: 0 }}>
            {['Instructores certificados', 'Grupos reducidos', 'Turnos online disponibles'].map(i => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#F97316', flexShrink: 0 }} />
                {i}
              </li>
            ))}
          </ul>
          <div>
            <ExtLink href={TURNOS} className="btn-disciplina">
              Reservar Turno
            </ExtLink>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ─── HORARIOS ─────────────────────────────────────────────────────────────────
function Horarios() {
  return (
    <Section id="horarios">
      <SectionHeader eyebrow="Cuándo venís" title="HORARIOS" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {/* General */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <span style={{ width: '4px', height: '36px', backgroundColor: '#F97316', borderRadius: '4px', flexShrink: 0 }} />
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.75rem', letterSpacing: '0.06em', color: '#fff', margin: 0 }}>GIMNASIO GENERAL</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', fontWeight: 500 }}>Lunes a Viernes</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>06:30 – 23:00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0' }}>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', fontWeight: 500 }}>Sábado</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>08:00 – 20:00</span>
            </div>
          </div>
        </Card>

        {/* Funcional */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <span style={{ width: '4px', height: '36px', backgroundColor: '#F97316', borderRadius: '4px', flexShrink: 0 }} />
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.75rem', letterSpacing: '0.06em', color: '#fff', margin: 0 }}>CLASES FUNCIONAL</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', fontWeight: 500 }}>Lun – Vie (tarde)</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>19:00 – 20:00</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>20:00 – 21:00</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0' }}>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', fontWeight: 500 }}>Lun · Mié · Vie (mañana)</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>08:00 – 09:00</span>
            </div>
          </div>
        </Card>
      </div>

      <div style={{ textAlign: 'center' }}>
        <ExtLink href={TURNOS} className="btn-outline-orange">
          Reservar Turno Online
        </ExtLink>
      </div>
    </Section>
  )
}

// ─── PLANES ───────────────────────────────────────────────────────────────────
function Planes() {
  return (
    <Section id="planes" bg="#111111">
      <SectionHeader eyebrow="Invertí en vos" title="PLANES Y PRECIOS" />
      <div style={{ maxWidth: '420px', margin: '0 auto' }}>
        <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
          {/* Card header */}
          <div style={{ backgroundColor: '#F97316', padding: '1.75rem 2rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', margin: '0 0 0.5rem', fontFamily: "'Bebas Neue', cursive" }}>
              Plan Anual
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4px' }}>
              <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '3.8rem', color: '#fff', lineHeight: 1 }}>$1.450</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '6px' }}>/mes</span>
            </div>
          </div>

          {/* Card body */}
          <div style={{ backgroundColor: '#fff', padding: '1.75rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ color: '#6b7280', fontSize: '1rem' }}>Total anual</span>
              <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#111' }}>$17.400</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ color: '#6b7280', fontSize: '1rem' }}>Ahorro vs mensual</span>
              <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#F97316' }}>27,5%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', marginBottom: '0.75rem' }}>
              <span style={{ color: '#6b7280', fontSize: '1rem' }}>Cuotas disponibles</span>
              <span style={{ fontWeight: 600, fontSize: '1rem', color: '#111' }}>Hasta 12 sin recargo</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', backgroundColor: 'rgba(0,158,227,0.07)', borderRadius: '8px', padding: '12px 16px', marginBottom: '1.25rem', boxSizing: 'border-box' }}>
              <img
                src={mercadoPagoLogo}
                alt="Mercado Pago"
                style={{ height: '48px', width: 'auto', display: 'block', flexShrink: 0 }}
              />
              <span style={{ color: '#009ee3', fontSize: '1.05rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Hasta 12 cuotas sin recargo</span>
            </div>

            <ExtLink href={WA_LINK} className="btn-planes-wa">
              <WhatsAppIcon size={20} />
              Consultar por WhatsApp
            </ExtLink>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', textAlign: 'center', marginTop: '1rem' }}>
          También disponible plan mensual · Consultá por descuentos especiales
        </p>
      </div>
    </Section>
  )
}

// ─── CONTACTO ─────────────────────────────────────────────────────────────────
function Contacto() {
  return (
    <Section id="contacto">
      <SectionHeader eyebrow="Encontranos" title="CONTACTO" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        {/* Left: Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ExtLink href={WA_LINK} className="btn-contact" style={{ background: '#25D366', color: '#fff' }}>
            <WhatsAppIcon size={22} />
            Escribinos por WhatsApp
          </ExtLink>
          <ExtLink href={TURNOS} className="btn-contact-outline">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
            </svg>
            Reservar Turno Online
          </ExtLink>
          <ExtLink href={INSTAGRAM} className="btn-contact" style={{ background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)', color: '#fff' }}>
            <InstagramIcon size={22} />
            @gimnasio.omega.uy
          </ExtLink>
          <ExtLink href={TIKTOK} className="btn-contact" style={{ background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,255,255,0.18)' }}>
            <TikTokIcon size={22} />
            @gimnasioomega.uy
          </ExtLink>
          <ExtLink href={MAPS} className="btn-contact" style={{ background: '#1a1a1a', color: '#fff', border: '1px solid rgba(234,67,53,0.45)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Ver en Google Maps
          </ExtLink>
        </div>

        {/* Right: Info */}
        <Card>
          <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.65rem', letterSpacing: '0.06em', color: '#fff', margin: '0 0 1.5rem' }}>INFORMACIÓN</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <InfoRow icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="#F97316"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>} label="Ubicación">
              <ExtLink href={MAPS} style={{ color: '#fff', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}
              >
                <span>Coronel Brandzen 2178</span>
                <span>casi Bulevar Artigas</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginTop: '2px' }}>Parque Batlle, Montevideo</span>
                <span style={{ color: '#F97316', fontSize: '0.8rem', marginTop: '4px', fontWeight: 600, letterSpacing: '0.05em' }}>Ver en Google Maps →</span>
              </ExtLink>
            </InfoRow>
            <InfoRow icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="#F97316"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg>} label="Horario">
              <span>Lun–Vie: 06:30–23:00</span>
              <span>Sáb: 08:00–20:00</span>
            </InfoRow>
            <InfoRow icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="#F97316"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>} label="Teléfono">
              <ExtLink href={WA_LINK} style={{ color: '#F97316', textDecoration: 'none', fontSize: '0.92rem' }}>
                +598 97 863 648
              </ExtLink>
            </InfoRow>
          </div>
        </Card>
      </div>
    </Section>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
      <div style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</div>
      <div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '5px', fontWeight: 700 }}>{label}</p>
        <div style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  )
}

function contactBtnStyle(bg, color) {
  return {
    display: 'flex', alignItems: 'center', gap: '12px',
    background: bg, color,
    fontWeight: 600, fontSize: '1.05rem',
    padding: '15px 22px',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'transform 0.18s, opacity 0.18s',
    border: 'none',
  }
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="footer-row">
          <LogoBlanco small />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="footer-link">{l.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <ExtLink href={WA_LINK} className="icon-link">
              <WhatsAppIcon size={20} />
            </ExtLink>
            <ExtLink href={INSTAGRAM} className="icon-link">
              <InstagramIcon size={20} />
            </ExtLink>
            <ExtLink href={TIKTOK} className="icon-link">
              <TikTokIcon size={20} />
            </ExtLink>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.88rem', margin: 0 }}>
            © {new Date().getFullYear()} Gimnasio Omega — Todos los derechos reservados
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>Diseñado por </span>
            <a
              href="mailto:jengsoftware@gmail.com"
              style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#F97316'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.38)'}
            >
              JENG Web Development
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}> · </span>
            <a
              href="mailto:jengsoftware@gmail.com"
              style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#F97316'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.28)'}
            >
              jengsoftware@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero bgImage="/fotos/hero.jpg" />
        <Nosotros />
        <Disciplinas />
        <Horarios />
        <Planes />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
