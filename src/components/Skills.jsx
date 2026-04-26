import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Tech skills with emoji/text icons
const skills = [
  { name: 'React', color: '#61dafb', bg: '#e8f8fd' },
  { name: 'Node.js', color: '#68a063', bg: '#e8f4e8' },
  { name: 'JavaScript', color: '#f0db4f', bg: '#fefbe8' },
  { name: 'MongoDB', color: '#47a248', bg: '#e8f4e8' },
  { name: 'MySQL', color: '#4479a1', bg: '#e8f0f8' },
  { name: 'Docker', color: '#2496ed', bg: '#e8f2fc' },
  { name: 'AWS', color: '#ff9900', bg: '#fff4e8' },
  { name: 'Angular', color: '#dd0031', bg: '#fce8eb' },
  { name: 'Java', color: '#ed8b00', bg: '#fff4e8' },
  { name: 'Python', color: '#3776ab', bg: '#e8f0f8' },
  { name: 'PostgreSQL', color: '#336791', bg: '#e8f0f8' },
  { name: 'GitHub', color: '#333', bg: '#f0f0f0' },
  { name: 'C++', color: '#00599c', bg: '#e8f0f8' },
  { name: 'Unity', color: '#222', bg: '#ebebeb' },
  { name: 'WordPress', color: '#21759b', bg: '#e8f2f8' },
  { name: 'Wix', color: '#faad4d', bg: '#fff4e8' },
  { name: 'Scrum', color: '#009fdb', bg: '#e8f4fd' },
  { name: 'Mendix', color: '#0595db', bg: '#e8f4fd' },
]

const certifications = [
  { title: 'IT Essentials', org: 'Cisco', icon: '💻' },
  { title: 'CCNAv7', org: 'Cisco', icon: '🌐' },
  { title: 'CCNA Switching & Routing', org: 'Cisco', icon: '🔌' },
  { title: 'NDG Linux Essentials', org: 'Cisco', icon: '🐧' },
  { title: 'React Basic', org: 'HackerRank', icon: '⚛️' },
  { title: 'Problem Solving Basic', org: 'Logic', icon: '🧩' },
  { title: 'Python Básico', org: 'Coding', icon: '🐍' },
  { title: 'Intro a Ciberseguridad', org: 'Cisco', icon: '🛡️' },
  { title: 'Scrum Study', org: 'Agile', icon: '🚀' },
  { title: 'Mendix Certified', org: 'LowCode', icon: '🏗️' },
  { title: 'Office 2019', org: 'Microsoft', icon: '📊' },
  { title: 'Cloud Computing', org: 'Aviation', icon: '☁️' },
]

// Place skills in a sphere arrangement
function getSpherePositions(count, radius) {
  const positions = []
  const phi = Math.PI * (3 - Math.sqrt(5)) // golden angle
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = phi * i
    positions.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    })
  }
  return positions
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [rotation, setRotation] = useState(0)
  const animRef = useRef(null)

  useEffect(() => {
    let start = null
    const animate = (ts) => {
      if (!start) start = ts
      setRotation(((ts - start) / 1000) * 25) // 25 deg/s
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const positions = getSpherePositions(skills.length, 160)
  const rad = (rotation * Math.PI) / 180

  // Rotate around Y axis
  const rotated = positions.map(({ x, y, z }) => ({
    x: x * Math.cos(rad) + z * Math.sin(rad),
    y,
    z: -x * Math.sin(rad) + z * Math.cos(rad),
  }))

  const softSkills = ['Liderazgo', 'Trabajo en equipo', 'Adaptabilidad', 'Empatía', 'Negociación']

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '6rem 2.5rem',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Skills ⏾
      </motion.h2>

      {/* 3D Sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          position: 'relative',
          width: '380px',
          height: '380px',
          margin: '0 auto 4rem',
          perspective: '800px',
        }}
      >
        {rotated.map((pos, i) => {
          const skill = skills[i]
          // Normalize z for depth: z in [-160,160] -> scale/opacity
          const scale = (pos.z + 160) / 320 * 0.5 + 0.6   // 0.6 – 1.1
          const opacity = (pos.z + 160) / 320 * 0.6 + 0.35 // 0.35 – 0.95
          const zIndex = Math.round(pos.z + 160)

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${-pos.y}px)) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'transform 0.05s linear',
              }}
            >
              <div style={{
                background: skill.bg,
                border: `1.5px solid ${skill.color}40`,
                borderRadius: '8px',
                padding: '5px 10px',
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.68rem',
                color: skill.color,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                boxShadow: `0 2px 8px ${skill.color}20`,
                letterSpacing: '0.03em',
                userSelect: 'none',
              }}>
                {skill.name}
              </div>
            </div>
          )
        })}
      </motion.div>

{/* Soft Skills */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.8rem', color: '#d63384', marginBottom: '1.5rem' }}>
          & soft skills too ✨
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
          {softSkills.map((s, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '1.2rem',
                color: '#e479b6',
                background: '#fde8ee',
                padding: '8px 22px',
                borderRadius: '50px',
                boxShadow: '2px 4px 0px rgba(0,0,0,0.1)',
                display: 'inline-block'
              }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Certificaciones */}
      <div style={{ marginTop: '8rem' }}>
        <h3 style={{ 
          fontFamily: 'Instrument Serif, serif', 
          fontStyle: 'italic', 
          fontSize: '2.5rem', 
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          Certifications & Credentials
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '30px', 
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -10, rotate: 1 }}
              style={{
                background: '#fff',
                padding: '25px',
                border: '1.5px solid #f0f0f0',
                borderRadius: '20px',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '8px', height: '100%', 
                background: 'linear-gradient(to bottom, #ff85a1, #fbb1bd)' 
              }} />
              
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{cert.icon}</div>
              <div style={{ 
                fontFamily: 'DM Mono, monospace', 
                fontSize: '0.8rem', 
                fontWeight: 'bold',
                letterSpacing: '1px'
              }}>
                {cert.title}
              </div>
              <div style={{ 
                fontFamily: 'Caveat, cursive', 
                fontSize: '1.1rem', 
                color: '#aaa',
                marginTop: '8px'
              }}>
                {cert.org}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
