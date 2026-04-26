import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Employee Manager App',
    emoji: '👥',
    description: 'Web application for employee management. Backend built with Node.js + Express, React frontend, and MongoDB database. Includes full CRUD operations and auth.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    color: '#fde8ee',
    borderColor: '#f4a7b9',
    period: 'May – Sep 2024',
  },
  {
    title: 'Event Scheduler',
    emoji: '📅',
    description: 'Scheduling app for corporate meetings and events. Built entirely in Wix with both frontend and backend. Includes AWS SDP documentation.',
    tags: ['Wix', 'AWS', 'Full Stack'],
    color: '#e8f4e8',
    borderColor: '#8fad88',
    period: 'Sep 2024 – Dec 2025',
  },
  {
    title: 'Enterprise Scheduler – Optimen',
    emoji: '🏢',
    description: 'Function developer for problem solving, full stack application development, database normalization & design for Optimen.',
    tags: ['Full Stack', 'PostgreSQL', 'Database Design', 'Docker', 'Python', 'AWS'],
    color: '#fef3e2',
    borderColor: '#d4a853',
    period: 'Jan 2026 – Current',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '6rem 2.5rem',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top torn paper edge */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '40px',
        background: 'var(--cream)',
        clipPath: 'polygon(0 0, 100% 0, 100% 30%, 97% 70%, 94% 40%, 91% 80%, 88% 35%, 85% 75%, 82% 40%, 79% 85%, 76% 45%, 73% 80%, 70% 35%, 67% 75%, 64% 40%, 61% 85%, 58% 45%, 55% 80%, 52% 35%, 49% 75%, 46% 40%, 43% 85%, 40% 50%, 37% 80%, 34% 40%, 31% 75%, 28% 45%, 25% 85%, 22% 40%, 19% 75%, 16% 45%, 13% 80%, 10% 45%, 7% 75%, 4% 50%, 0 80%)',
      }} />

      {/* Scattered doodle lines */}
      <svg style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.12, pointerEvents: 'none' }} width="120" height="120" viewBox="0 0 120 120">
        <path d="M10 60 Q60 10 110 60 Q60 110 10 60Z" fill="none" stroke="var(--pink-deep)" strokeWidth="1.5"/>
        <path d="M30 60 Q60 30 90 60 Q60 90 30 60Z" fill="none" stroke="var(--pink-deep)" strokeWidth="1"/>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '0.5rem' }}
      >
        <p style={{
          fontFamily: 'Caveat, cursive',
          fontSize: '1rem',
          color: 'var(--text-light)',
          fontStyle: 'italic',
        }}>everything that has a piece of me!</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="section-title"
        style={{ marginBottom: '0.8rem' }}
      >
        Projects 🗂️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          textAlign: 'center',
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.78rem',
          color: 'var(--text-light)',
          marginBottom: '3rem',
          letterSpacing: '0.05em',
        }}
      >
        Here are some of the projects I've worked on recently
      </motion.p>

      {/* Project cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '960px',
        margin: '0 auto',
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5, transition: { duration: 0.2 } }}
            style={{
              background: p.color,
              border: `1.5px solid ${p.borderColor}`,
              borderRadius: '12px',
              padding: '1.8rem',
              position: 'relative',
              cursor: 'default',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            {/* Period stamp */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6rem',
              color: 'var(--text-light)',
              letterSpacing: '0.05em',
              opacity: 0.7,
            }}>
              {p.period}
            </div>

            <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{p.emoji}</div>

            <h3 style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: 'var(--text-dark)',
              marginBottom: '0.8rem',
              lineHeight: 1.3,
            }}>
              {p.title}
            </h3>

            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.76rem',
              color: 'var(--text-mid)',
              lineHeight: 1.8,
              marginBottom: '1.2rem',
              fontWeight: 300,
            }}>
              {p.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {p.tags.map((tag, j) => (
                <span
                  key={j}
                  className="tag"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: `1px solid ${p.borderColor}`,
                    color: 'var(--text-dark)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Code / Details buttons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '1.2rem' }}>
              <a
                href="#"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.68rem',
                  color: 'var(--text-dark)',
                  textDecoration: 'none',
                  border: '1px solid rgba(0,0,0,0.15)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.2s',
                  letterSpacing: '0.03em',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'white'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.6)'}
              >
                ↗ Details
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.68rem',
                  color: 'var(--text-mid)',
                  textDecoration: 'none',
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.4)',
                  transition: 'all 0.2s',
                  letterSpacing: '0.03em',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
              >
                &lt;/&gt; Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
