import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaGithub,
  FaWordpress,
  FaMicrosoft,
  FaLinux
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiAngular,
  SiPostgresql,
  SiCplusplus,
  SiUnity,
  SiScrumalliance,
  SiCisco,
  SiHackerrank
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node", icon: FaNodeJs, color: "#68A063" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "GitHub", icon: FaGithub, color: "#222" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Unity", icon: SiUnity, color: "#111" },
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "Scrum", icon: SiScrumalliance, color: "#009FDB" },
];

const certifications = [
  { title: 'IT Essentials', org: 'Cisco', icon: SiCisco, color: '#1BA0D7' },
  { title: 'CCNAv7', org: 'Cisco', icon: SiCisco, color: '#1BA0D7' },
  { title: 'CCNA Switching & Routing', org: 'Cisco', icon: SiCisco, color: '#1BA0D7' },
  { title: 'NDG Linux Essentials', org: 'NDG', icon: FaLinux, color: '#222' },
  { title: 'React Basic', org: 'HackerRank', icon: SiHackerrank, color: '#00EA64' },
  { title: 'Problem Solving Basic', org: 'HackerRank', icon: SiHackerrank, color: '#00EA64' },
  { title: 'Python Básico', org: 'Coding', icon: FaPython, color: '#3776AB' },
  { title: 'Intro a Ciberseguridad', org: 'Cisco', icon: SiCisco, color: '#1BA0D7' },
  { title: 'Scrum Study', org: 'Agile', icon: SiScrumalliance, color: '#009FDB' },
  { title: 'Mendix Certified', org: 'LowCode', icon: SiMongodb, color: '#0595DB' },
  { title: 'Office 2019', org: 'Microsoft', icon: FaMicrosoft, color: '#F25022' },
  { title: 'Cloud Computing', org: 'Aviation', icon: FaAws, color: '#FF9900' }
];

function getSpherePositions(count, radius) {
  let positions = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    positions.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius
    });
  }
  return positions;
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [rotation, setRotation] = useState(0);
  const [mouseRotation, setMouseRotation] = useState(0);
  const [sphereSize, setSphereSize] = useState({ container: 650, radius: 260, iconSize: 42, boxSize: 82 });
  const animRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setSphereSize({ container: 300, radius: 110, iconSize: 22, boxSize: 48 });
      } else if (width < 768) {
        setSphereSize({ container: 450, radius: 180, iconSize: 32, boxSize: 65 });
      } else {
        setSphereSize({ container: 650, radius: 260, iconSize: 42, boxSize: 82 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      setRotation(((ts - start) / 1000) * 18);
      animRef.current = requestAnimationFrame(animate);
    }
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const positions = getSpherePositions(skills.length, sphereSize.radius);
  const rad = ((rotation + mouseRotation) * Math.PI) / 180;

  const rotated = positions.map(({ x, y, z }) => ({
    x: x * Math.cos(rad) + z * Math.sin(rad),
    y,
    z: -x * Math.sin(rad) + z * Math.cos(rad)
  }));

  const softSkills = ["Leadership", "Teamwork", "Adaptability", "Empathy", "Problem Solving"];

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "5rem 1rem",
        background: "var(--paper)",
        overflowX: "hidden", // Previene el scroll horizontal por desbordamiento de la esfera
        position: "relative",
        isolation: "isolate",
        zIndex: 1
      }}
    >
      <style>{`
        .section-title {
          text-align: center;
          font-family: 'Caveat', cursive;
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 10px;
        }
        @media (max-width: 600px) {
          .section-title { font-size: 2.2rem; }
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="section-title"
      >
        Skills ⏾
      </motion.h2>

      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const center = rect.width / 2;
          setMouseRotation(((x - center) / center) * 70);
        }}
        onMouseLeave={() => setMouseRotation(0)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: `${sphereSize.container}px`,
          height: `${sphereSize.container}px`,
          margin: "2rem auto",
          cursor: "default",
          perspective: "1000px",
          touchAction: "pan-y" // CORRECCIÓN: Permite el scroll vertical en móviles sobre la esfera
        }}
      >
        {rotated.map((pos, i) => {
          const skill = skills[i];
          const Icon = skill.icon;
          const scale = (pos.z + sphereSize.radius) / (sphereSize.radius * 2) * 0.5 + 0.5;
          const opacity = (pos.z + sphereSize.radius) / (sphereSize.radius * 2) * 0.8 + 0.2;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transformStyle: "preserve-3d",
                // CORRECCIÓN: Usar translate3d mejora el rendimiento en móviles
                transform: `translate3d(calc(-50% + ${pos.x}px), calc(-50% + ${-pos.y}px), ${pos.z}px) scale(${scale})`,
                opacity: (window.innerWidth < 500 && opacity < 0.35) ? 0 : opacity, // Oculta elementos traseros en móvil para evitar ruido visual
                zIndex: Math.round(pos.z + sphereSize.radius),
                transition: "transform .1s ease-out", 
                pointerEvents: "none"
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                style={{
                  width: `${sphereSize.boxSize}px`,
                  height: `${sphereSize.boxSize}px`,
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                  border: "1px solid rgba(0,0,0,.04)",
                  pointerEvents: "auto" 
                }}
              >
                <Icon size={sphereSize.iconSize} color={skill.color} />
              </motion.div>
              <p style={{
                marginTop: "6px",
                textAlign: "center",
                fontSize: sphereSize.container < 500 ? "0.6rem" : "0.72rem",
                fontFamily: "DM Mono, monospace",
                color: "#7a6f66",
                whiteSpace: "nowrap"
              }}>
                {skill.name}
              </p>
            </div>
          );
        })}
      </motion.div>

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <p style={{ fontFamily: "Caveat,cursive", fontSize: "2rem", color: "#d76aa3", marginBottom: "1.5rem" }}>
          & soft skills too ✨
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 1rem"
        }}>
          {softSkills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{ rotate: -2, y: -4 }}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "#fde8ef",
                color: "#e479b6",
                fontFamily: "Caveat,cursive",
                fontSize: "1.1rem",
                boxShadow: "2px 4px 0 rgba(0,0,0,.05)"
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <p style={{ marginTop: "3rem", textAlign: "center", fontFamily: "DM Mono, monospace", fontSize: ".7rem", opacity: .5 }}>
        {window.innerWidth < 768 ? "swipe to see more ✧" : "hover to rotate ✧"}
      </p>

      <div style={{ marginTop: "6rem" }}>
        <h3 style={{
          fontFamily: 'Instrument Serif, serif',
          fontStyle: 'italic',
          fontSize: '2.4rem',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Certifications & Credentials
        </h3>

        <div className="cert-grid">
          {certifications.map((cert, i) => {
            const CertIcon = cert.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: '#fff',
                  padding: '24px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 25px rgba(0,0,0,.05)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0, top: 0, width: '6px', height: '100%',
                  background: 'linear-gradient(to bottom,#ff85a1,#fbb1bd)',
                  borderRadius: '20px 0 0 20px'
                }} />
                <CertIcon size={38} color={cert.color} />
                <div style={{ marginTop: '12px', fontFamily: 'DM Mono, monospace', fontSize: '.75rem', fontWeight: 'bold' }}>
                  {cert.title}
                </div>
                <div style={{ fontFamily: 'Caveat,cursive', fontSize: '1.1rem', color: '#b58a9d', marginTop: '6px' }}>
                  {cert.org}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}