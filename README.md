# 🌸 Karen Linette · Portafolio

## Cómo correr el proyecto localmente

### Paso 1 – Prerequisitos
Asegúrate de tener instalado:
- [Node.js LTS](https://nodejs.org) (v18 o superior)
- [Git](https://git-scm.com)
- VS Code (ya lo tienes ✓)

### Paso 2 – Crear el proyecto
```bash
npm create vite@latest karen-portfolio -- --template react
cd karen-portfolio
```

### Paso 3 – Reemplaza los archivos
Copia todos los archivos de esta carpeta dentro de tu proyecto.
La estructura debe quedar así:
```
karen-portfolio/
├── public/
│   ├── favicon.svg
│   └── cv.pdf          ← pon aquí tu CV en PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### Paso 4 – Instalar dependencias
```bash
npm install
npm install framer-motion react-icons
```

### Paso 5 – Correr en local
```bash
npm run dev
```
Abre http://localhost:5173 en tu navegador 🎉

---

## Personalizar tu foto

En `src/components/About.jsx`, busca el div con el emoji 👩🏻‍💻 y reemplázalo con tu imagen:

```jsx
// Antes (placeholder):
<div style={{ background: 'linear-gradient(...)' }}>
  <span style={{ fontSize: '3.5rem' }}>👩🏻‍💻</span>
</div>

// Después (con tu foto):
<img 
  src="/tu-foto.jpg" 
  alt="Karen Linette"
  style={{ width: '170px', height: '210px', objectFit: 'cover' }}
/>
```
Pon tu foto en la carpeta `public/` con el nombre `tu-foto.jpg`

---

## Subir a Vercel (GRATIS)

### Opción A – Con GitHub (recomendada)

1. Crea cuenta en [github.com](https://github.com)
2. Crea un repositorio nuevo (llámalo `portfolio`)
3. En tu terminal:
```bash
git init
git add .
git commit -m "🌸 mi portfolio"
git remote add origin https://github.com/TU_USUARIO/portfolio.git
git push -u origin main
```
4. Ve a [vercel.com](https://vercel.com) → Sign up with GitHub
5. Click **"New Project"** → importa tu repositorio `portfolio`
6. Vercel detecta Vite automáticamente → click **Deploy** 🚀
7. ¡Listo! Tu sitio estará en `tu-usuario.vercel.app`

### Opción B – Con Vercel CLI (sin GitHub)

```bash
npm install -g vercel
npm run build
vercel
```
Sigue las instrucciones en pantalla.

---

## Personalizar el contenido

- **Proyectos**: edita el array `projects` en `src/components/Projects.jsx`
- **Experiencia**: edita el array `experiences` en `src/components/Experience.jsx`
- **Skills**: edita el array `skills` en `src/components/Skills.jsx`
- **Colores**: cambia las variables en `src/index.css` → `:root { --pink: ... }`

---

¡Mucho éxito Karen! 🌸✨
