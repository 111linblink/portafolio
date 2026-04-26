import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Sticker components
const stickers = [
  { emoji: '⭐', x: '-4%', y: '10%', rotate: -15, size: '2.5rem', color: '#f4c542' },
  { emoji: '🍎', x: '-6%', y: '55%', rotate: 8, size: '2.2rem', color: 'transparent' },
  { emoji: '🌸', x: '98%', y: '5%', rotate: 12, size: '2rem', color: 'transparent' },
  { emoji: '🍓', x: '100%', y: '65%', rotate: -8, size: '2rem', color: 'transparent' },
  { emoji: '✨', x: '15%', y: '-5%', rotate: 0, size: '1.5rem', color: 'transparent' },
  { emoji: '🌙', x: '80%', y: '95%', rotate: -5, size: '1.8rem', color: 'transparent' },
  { emoji: '💫', x: '95%', y: '35%', rotate: 10, size: '1.4rem', color: 'transparent' },
]

// Spiral rings for the notebook
function SpiralRings() {
  const rings = Array.from({ length: 14 }, (_, i) => i)
  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-12px',
      display: 'flex',
      gap: '18px',
      zIndex: 10,
    }}>
      {rings.map(i => (
        <div key={i} style={{
          width: '16px',
          height: '24px',
          border: '2px solid var(--spiral)',
          borderRadius: '50%',
          background: 'var(--cream)',
        }} />
      ))}
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'visible',
        background: 'var(--cream)',
      }}
    >
      {/* Floating stickers around the notebook */}
      {stickers.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: s.rotate - 10 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: s.rotate } : {}}
          transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200, damping: 12 }}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            fontSize: s.size,
            zIndex: 5,
            cursor: 'default',
            userSelect: 'none',
          }}
        >
          {s.emoji}
        </motion.div>
      ))}

      {/* Notebook */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '780px',
          background: '#fefaf4',
          borderRadius: '8px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid rgba(212,184,150,0.4)',
          padding: '3.5rem 2.5rem 2.5rem',
          zIndex: 2,
        }}
      >
        <SpiralRings />

        {/* Notebook lined paper feel */}
        <div style={{
          position: 'absolute',
          inset: '3.5rem 0 0 0',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(180,160,140,0.15) 31px, rgba(180,160,140,0.15) 32px)',
          backgroundSize: '100% 32px',
          borderRadius: '0 0 8px 8px',
          pointerEvents: 'none',
        }} />

        {/* Left red margin line */}
        <div style={{
          position: 'absolute',
          left: '80px',
          top: '3.5rem',
          bottom: 0,
          width: '1px',
          background: 'rgba(240,120,120,0.25)',
          pointerEvents: 'none',
        }} />

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '2rem',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Left: Photo polaroid */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <motion.div
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                background: 'white',
                padding: '10px 10px 28px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
            >
              {/* Photo placeholder — replace the bg with your actual photo later */}
            <img src="/yo.jpeg"
            alt= "Karen Linette"
            style={{ width: '170px', height: '210px', objectFit: 'cover' }}
            />
            </motion.div>

            {/* Caption under polaroid */}
            <p style={{
              fontFamily: 'Caveat, cursive',
              fontSize: '1rem',
              color: 'var(--text-light)',
              textAlign: 'center',
              transform: 'rotate(-1deg)',
            }}>
              Linette ✦
            </p>

            {/* Small sticker on photo corner */}
            <div style={{
              fontFamily: 'Caveat, cursive',
              fontSize: '0.85rem',
              color: 'var(--pink-deep)',
              background: 'var(--pink-soft)',
              padding: '4px 12px',
              borderRadius: '4px',
              transform: 'rotate(2deg)',
              border: '1px dashed var(--pink)',
            }}>
              Dolores Hidalgo, Gto 📍
            </div>
          </div>

          {/* Right: handwritten text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '2.4rem',
                color: 'var(--text-dark)',
                marginBottom: '1rem',
                fontWeight: 700,
              }}
            >
              hi!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '1.15rem',
                color: 'var(--text-mid)',
                lineHeight: 2,
                marginBottom: '1rem',
              }}>
                I'm a software developer, graduate of  {' '}
                <span style={{ color: 'var(--pink-deep)', fontWeight: 700 }}>UTNG</span>,
                with a degree in software development and management passionate about 
                building web apps with modern frameworks, design patterns, and cloud solutions.
              </p>

              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                lineHeight: 2,
                marginBottom: '1.5rem',
              }}>
                When I'm not coding, you'll probably find me exploring new tech, 
                listening music, or watching a good show with coffee ☕
              </p>

              {/* Quick facts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { icon: '🎓', text: 'Ing. Gestión y Desarrollo de Software · UTNG' },
                  { icon: '💼', text: 'Software Developer @ Optimen' },
                  { icon: '🌐', text: 'Full Stack · Node.js · React · MongoDB' },
                  { icon: '🗣️', text: 'Español nativo · Inglés B1' },
                ].map((fact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.75rem',
                      color: 'var(--text-mid)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span>{fact.icon}</span>
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
