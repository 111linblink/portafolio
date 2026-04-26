import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú al hacer click en un link (móvil)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 1.5rem', // Ajustado para móvil
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled || isOpen ? 'rgba(250,247,242,0.95)' : 'transparent',
        backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
        borderBottom: scrolled || isOpen ? '1px solid rgba(212,184,150,0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Estilos para ocultar/mostrar elementos */}
      <style>{`
        .nav-links-desktop {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: var(--text-dark);
          z-index: 101;
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(250,247,242,0.98);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 1.5rem;
          border-bottom: 1px solid rgba(212,184,150,0.3);
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .menu-button { display: block; }
        }
      `}</style>

      {/* Logo / name */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Caveat, cursive',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-dark)',
          letterSpacing: '0.02em',
        }}>
          Linette ⏾⋆.˚
        </span>
      </a>

      {/* Botón Hamburguesa (Móvil) */}
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Links Escritorio */}
      <div className="nav-links-desktop">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.78rem',
              color: 'var(--text-mid)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--pink-deep)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}
          >
            {link.label}
          </a>
        ))}

        {/* Resume button */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.72rem',
            color: 'var(--text-dark)',
            textDecoration: 'none',
            border: '1px solid var(--spiral)',
            padding: '5px 14px',
            borderRadius: '20px',
            background: 'var(--paper)',
            transition: 'all 0.2s',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'var(--pink-soft)'
            e.target.style.borderColor = 'var(--pink)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'var(--paper)'
            e.target.style.borderColor = 'var(--spiral)'
          }}
        >
          Resume ↗
        </a>
      </div>

      {/* Menú Móvil con Animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '1rem',
                  color: 'var(--text-dark)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.9rem',
                color: 'var(--pink-deep)',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '1rem',
                border: '1px solid var(--pink)',
                padding: '10px',
                borderRadius: '12px'
              }}
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}