import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        padding: '1rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(250,247,242,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,184,150,0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
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

      {/* Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
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
    </motion.nav>
  )
}
