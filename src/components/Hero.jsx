import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'a Software Developer.',
  'a Full Stack Dev.',
  'a Problem Solver.',
  'a Tech Enthusiast.',
]

// Floating doodle elements
const doodles = [
  { emoji: '✦', x: '8%', y: '20%', size: '1.4rem', delay: 0, rotate: 15 },
  { emoji: '✧', x: '85%', y: '15%', size: '1.1rem', delay: 0.3, rotate: -10 },
  { emoji: '◇', x: '92%', y: '55%', size: '0.9rem', delay: 0.6, rotate: 25 },
  { emoji: '✦', x: '5%', y: '70%', size: '0.8rem', delay: 0.9, rotate: -20 },
  { emoji: '✧', x: '78%', y: '80%', size: '1.2rem', delay: 0.4, rotate: 5 },
  { emoji: '⋆', x: '15%', y: '45%', size: '1.5rem', delay: 0.7, rotate: 0 },
  { emoji: '◦', x: '70%', y: '30%', size: '1rem', delay: 1, rotate: 0 },
]

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursor(c => !c), 530)
    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>
      {displayed}
      <span style={{
        opacity: cursor ? 1 : 0,
        transition: 'opacity 0.1s',
        color: 'var(--pink)',
      }}>_</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2.5rem',
        paddingTop: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture dots */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(212,184,150,0.25) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        zIndex: 0,
      }} />

      {/* Floating doodles */}
      {doodles.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: d.delay + 1, duration: 0.5 },
            scale: { delay: d.delay + 1, duration: 0.5 },
            y: { delay: d.delay + 1, duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            left: d.x,
            top: d.y,
            fontSize: d.size,
            rotate: `${d.rotate}deg`,
            color: i % 2 === 0 ? 'var(--pink-deep)' : 'var(--gold)',
            zIndex: 0,
          }}
        >
          {d.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: '1.2rem',
            color: 'var(--text-light)',
            marginBottom: '0.5rem',
            letterSpacing: '0.05em',
          }}
        >
          hello, world! 🌸
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            color: 'var(--text-dark)',
            marginBottom: '0.6rem',
            letterSpacing: '-0.02em',
          }}
        >
          Hi, I'm <span style={{
            fontFamily: 'Instrument Serif, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)',
          }}>Linette</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontWeight: 300,
            color: 'var(--text-mid)',
            marginBottom: '2.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          I am <TypingText />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.78rem',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              border: '1px solid var(--spiral)',
              padding: '9px 22px',
              borderRadius: '24px',
              background: 'var(--paper)',
              transition: 'all 0.25s',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--pink-soft)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--paper)'}
          >
            Resume ↗
          </a>
          <a
            href="#about"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.78rem',
              color: 'var(--paper)',
              textDecoration: 'none',
              padding: '9px 22px',
              borderRadius: '24px',
              background: 'var(--text-dark)',
              transition: 'all 0.25s',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--pink-deep)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--text-dark)'}
          >
            Contact →
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Caveat, cursive',
          fontSize: '0.9rem',
          color: 'var(--text-light)',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        scroll ↓
      </motion.div>
    </section>
  )
}
