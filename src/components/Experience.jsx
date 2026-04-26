import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    company: 'Optimen',
    role: 'Software Developer',
    period: 'Jan 2026 – Apr 2026',
    location: 'León, Gto',
    bullets: [
      'Function developer for problem solving.',
      'Full stack application development',
      'Database normalization & design',
    ],
    color: '#fde8ee',
    dot: '#f4a7b9',
  },
  {
    company: 'Optimen',
    role: 'Software Developer Trainee',
    period: 'Sep 2024 – Dec 2025',
    location: 'León, Gto',
    bullets: [
      'Built corporate event scheduler app',
      'Implemented frontend & backend in Wix',
      'AWS SDP documentation',
    ],
    color: '#fef9e8',
    dot: '#d4a853',
  },
  {
    company: 'UTNG',
    role: 'Proyecto Integrador',
    period: 'May – Sep 2024',
    location: 'Dolores Hidalgo, Gto',
    bullets: [
      'Employee management web app',
      'Backend: Node.js + Express',
      'Frontend: React · DB: MongoDB',
    ],
    color: '#e8f4f0',
    dot: '#8fad88',
  },
  {
    company: 'UTNG',
    role: 'Proyecto Estadía',
    period: 'Jan – Apr 2024',
    location: 'Dolores Hidalgo, Gto',
    bullets: [
      'Scheduler app for enterprise events',
      'Wix frontend & backend implementation',
    ],
    color: '#eeeef8',
    dot: '#9999cc',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '6rem 2.5rem',
        background: 'var(--cream)',
        position: 'relative',
      }}
    >
      {/* Background dots */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(212,184,150,0.2) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Experience 💼
      </motion.h2>

      {/* Timeline */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: '18px',
            top: '12px',
            bottom: '12px',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--pink), var(--spiral), var(--sage))',
            transformOrigin: 'top',
          }}
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.6 }}
            style={{
              display: 'flex',
              gap: '1.8rem',
              marginBottom: '2.5rem',
              position: 'relative',
            }}
          >
            {/* Dot */}
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: exp.color,
              border: `2px solid ${exp.dot}`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              zIndex: 1,
            }}>
              ✦
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{
                flex: 1,
                background: exp.color,
                border: `1px solid ${exp.dot}`,
                borderRadius: '10px',
                padding: '1.4rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '0.4rem' }}>
                <h3 style={{
                  fontFamily: 'Instrument Serif, serif',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--text-dark)',
                }}>
                  {exp.role}
                </h3>
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.65rem',
                  color: 'var(--text-light)',
                  letterSpacing: '0.05em',
                  padding: '2px 8px',
                  background: 'rgba(255,255,255,0.6)',
                  borderRadius: '10px',
                  alignSelf: 'center',
                }}>
                  {exp.period}
                </span>
              </div>

              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '1rem',
                color: 'var(--text-mid)',
                marginBottom: '0.8rem',
                fontWeight: 600,
              }}>
                {exp.company} · {exp.location}
              </p>

              <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.74rem',
                    color: 'var(--text-mid)',
                    lineHeight: 1.7,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontWeight: 300,
                  }}>
                    <span style={{ color: exp.dot, marginTop: '2px' }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
