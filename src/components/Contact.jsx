import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const contacts = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'cabrera.karen.vidal.8@gmail.com',
      href: 'mailto:cabrera.karen.vidal.8@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linette-cabrera-vidal',
      href: 'https://www.linkedin.com/in/linette-cabrera-vidal-2b2401303',
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: '418 124 1691',
      href: 'tel:4181241691',
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Dolores Hidalgo, Guanajuato, MX',
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: '60vh',
        padding: '6rem 2.5rem 4rem',
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Decorative doodles */}
      {['✦', '◇', '⋆', '✧'].map((d, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            fontSize: '1.5rem',
            color: i % 2 === 0 ? 'var(--pink)' : 'var(--gold)',
            opacity: 0.2,
            left: `${10 + i * 25}%`,
            top: `${15 + (i % 2) * 60}%`,
          }}
        >
          {d}
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: 'Caveat, cursive',
          fontSize: '1.1rem',
          color: 'var(--text-light)',
          marginBottom: '0.5rem',
          fontStyle: 'italic',
        }}
      >
        let's work together!
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="section-title"
        style={{ marginBottom: '0.5rem' }}
      >
        Get in Touch 🌸
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.78rem',
          color: 'var(--text-light)',
          marginBottom: '3rem',
          textAlign: 'center',
          maxWidth: '420px',
          lineHeight: 1.8,
          letterSpacing: '0.03em',
        }}
      >
        I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open!
      </motion.p>

      {/* Contact cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        maxWidth: '700px',
        width: '100%',
      }}>
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            {c.href ? (
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <ContactCard c={c} />
              </a>
            ) : (
              <ContactCard c={c} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          marginTop: '5rem',
          textAlign: 'center',
          fontFamily: 'Caveat, cursive',
          fontSize: '1rem',
          color: 'var(--text-light)',
        }}
      >
        <p>made with 🌸 by Linette · {new Date().getFullYear()}</p>
      </motion.div>
    </section>
  )
}

function ContactCard({ c }) {
  return (
    <div style={{
      background: 'var(--paper)',
      border: '1px solid var(--spiral)',
      borderRadius: '12px',
      padding: '1.4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      height: '100%',
      transition: 'border-color 0.2s, background 0.2s',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--pink)'
        e.currentTarget.style.background = 'var(--pink-soft)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--spiral)'
        e.currentTarget.style.background = 'var(--paper)'
      }}
    >
      <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
      <span style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.62rem',
        color: 'var(--text-light)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {c.label}
      </span>
      <span style={{
        fontFamily: 'Caveat, cursive',
        fontSize: '1rem',
        color: 'var(--text-dark)',
        fontWeight: 600,
        lineHeight: 1.3,
        wordBreak: 'break-all',
      }}>
        {c.value}
      </span>
    </div>
  )
}
