import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

// Stickers decorativos
const stickers = [
  { emoji: '⭐', x: '-4%', y: '10%', rotate: -15, size: '2.5rem' },
  { emoji: '🍎', x: '-6%', y: '55%', rotate: 8, size: '2.2rem' },
  { emoji: '🌸', x: '98%', y: '5%', rotate: 12, size: '2rem' },
  { emoji: '🍓', x: '100%', y: '65%', rotate: -8, size: '2rem' },
  { emoji: '✨', x: '15%', y: '-5%', rotate: 0, size: '1.5rem' },
  { emoji: '🌙', x: '80%', y: '95%', rotate: -5, size: '1.8rem' },
  { emoji: '💫', x: '95%', y: '35%', rotate: 10, size: '1.4rem' },
]

// Componente de los anillos del cuaderno
function SpiralRings() {
  return (
    <div className="spiral-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="spiral-ring" />
      ))}
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="about-section">
      {/* Estilos CSS embebidos para manejo de responsividad */}
      <style>{`
        .about-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          background: var(--cream);
        }

        .notebook-container {
          position: relative;
          width: 100%;
          max-width: 780px;
          background: #fefaf4;
          border-radius: 8px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
          border: 1px solid rgba(212,184,150,0.4);
          padding: 4rem 2.5rem 2.5rem;
          z-index: 2;
        }

        .spiral-container {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -12px;
          display: flex;
          gap: 15px;
          zIndex: 10;
          width: 90%;
          justify-content: center;
        }

        .spiral-ring {
          width: 14px;
          height: 24px;
          border: 2px solid var(--spiral);
          border-radius: 50%;
          background: var(--cream);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }

        .red-margin {
          position: absolute;
          left: 80px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(240,120,120,0.25);
          pointer-events: none;
        }

        .polaroid-card {
          background: white;
          padding: 10px 10px 28px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          border: 1px solid rgba(0,0,0,0.06);
          cursor: pointer;
        }

        /* RESPONSIVE: MÓVIL */
        @media (max-width: 768px) {
          .about-section { padding: 4rem 1rem; }
          .content-grid { 
            grid-template-columns: 1fr; 
            gap: 2rem;
            text-align: center;
          }
          .notebook-container { padding: 3.5rem 1.5rem 2rem; }
          .red-margin { display: none; }
          .spiral-ring:nth-child(n+10) { display: none; }
          .fact-item { justify-content: center; }
          .sticker-item { display: none; } /* Ocultar stickers laterales en móvil para evitar scroll */
        }
      `}</style>

      {/* Floating stickers (Desktop only via class) */}
      {stickers.map((s, i) => (
        <motion.div
          key={i}
          className="sticker-item"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: s.rotate } : {}}
          transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            fontSize: s.size,
            zIndex: 5,
            pointerEvents: 'none'
          }}
        >
          {s.emoji}
        </motion.div>
      ))}

      <motion.div
        className="notebook-container"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SpiralRings />

        {/* Lined paper texture */}
        <div style={{
          position: 'absolute',
          inset: '0',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(180,160,140,0.1) 31px, rgba(180,160,140,0.1) 32px)',
          backgroundSize: '100% 32px',
          pointerEvents: 'none',
          borderRadius: '8px'
        }} />

        <div className="red-margin" />

        <div className="content-grid">
          {/* Lado Izquierdo: Foto */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <motion.div
              className="polaroid-card"
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <img 
                src="/yo.jpeg" 
                alt="Karen Linette" 
                style={{ width: '170px', height: '210px', objectFit: 'cover' }} 
              />
            </motion.div>
            
            <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem', color: 'var(--text-light)', transform: 'rotate(-1deg)' }}>
              Linette ⏾ 
            </p>

            <div style={{
              fontFamily: 'Caveat, cursive',
              fontSize: '0.9rem',
              color: 'var(--pink-deep)',
              background: 'var(--pink-soft)',
              padding: '4px 12px',
              borderRadius: '4px',
              border: '1px dashed var(--pink)',
              transform: 'rotate(2deg)'
            }}>
              Dolores Hidalgo, Gto 📍
            </div>
          </div>

          {/* Lado Derecho: Texto */}
          <div>
            <motion.h2
              style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '2.8rem',
                color: 'var(--text-dark)',
                marginBottom: '1rem',
                fontWeight: 700,
              }}
            >
              hi!
            </motion.h2>

            <div style={{
              fontFamily: 'Caveat, cursive',
              fontSize: '1.2rem',
              color: 'var(--text-mid)',
              lineHeight: 1.7,
            }}>
              <p style={{ marginBottom: '1rem' }}>
                I'm a software developer, graduate of {' '}
                <span style={{ color: 'var(--pink-deep)', fontWeight: 700 }}>UTNG</span>,
                passionate about building web apps with modern frameworks and cloud solutions.
              </p>

              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                When I'm not coding, you'll find me listening to music or enjoying a good show or movie with coffee ☕
              </p>

              {/* Facts list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { icon: '🎓', text: 'Ing. Gestión y Desarrollo de Software' },
                  { icon: '💼', text: 'Software Developer - Full Stack' },
                  { icon: '🌐', text: 'Python · React · Node.js · MongoDB · AWS' },
                  { icon: '🗣️', text: 'Español · Inglés B1' },
                ].map((fact, i) => (
                  <motion.div
                    key={i}
                    className="fact-item"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span>{fact.icon}</span>
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}