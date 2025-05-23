# Cec Personal Website

¡Bienvenido/a al repositorio de la página personal de **Cec**!

Este proyecto es una versión moderna, rápida y responsiva del sitio personal de Cristián E. Contreras Cabrera, desarrollado con Astro, React y Tailwind CSS. Aquí encontrarás información profesional, proyectos, publicaciones y enlaces de contacto.

---

## 🚀 Descripción

**ceccuentos-web** es el sitio personal y portafolio de Cristián E. Contreras Cabrera (Cec), orientado a destacar su trabajo profesional, publicaciones, proyectos y presencia digital. El sitio está optimizado para SEO, es instalable como PWA y ofrece una experiencia moderna y responsiva en todos los dispositivos.

---

## 🌟 Características

- Diseño moderno y responsivo
- Blog y portafolio de proyectos
- PWA: Instalación como app en dispositivos móviles
- Optimización SEO y OpenGraph
- Código modular y fácil de mantener
- Despliegue sencillo en Netlify, Vercel o cualquier hosting estático
- Accesibilidad y buenas prácticas web

---

## 🧰 Tecnologías principales

- [Astro](https://astro.build/) (framework principal)
- [React.js](https://reactjs.org/) (componentes interactivos)
- [Tailwind CSS](https://tailwindcss.com/) (estilos)
- [TypeScript](https://www.typescriptlang.org/) (opcional)
- [PWA](https://web.dev/progressive-web-apps/)

---

## 📁 Estructura del proyecto

```
ceccuentos-web/
├── public/               # Archivos estáticos (favicon, manifest, imágenes)
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── layouts/          # Layouts globales y de página
│   ├── pages/            # Rutas y páginas del sitio
│   ├── data/             # Datos y configuración del sitio
│   └── assets/           # Imágenes y recursos
├── package.json          # Dependencias y scripts
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.cjs   # Configuración de Tailwind
└── README.md             # Este archivo
```

---

## 🛠️ Instalación y uso local

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/ceccuentos/ceccuentos-web.git
   cd ceccuentos-web
   ```

2. **Instala dependencias:**

   ```sh
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo:**

   ```sh
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador en** `http://localhost:4321` (o el puerto indicado)

---

## 🌐 Despliegue

Puedes desplegar fácilmente este sitio en plataformas como **Netlify**, **Vercel** o cualquier hosting estático compatible con Astro.

- **Build:**
  ```sh
  npm run build
  # o
  yarn build
  ```
- Sube la carpeta `dist/` al hosting de tu preferencia.

---

## 💬 Frases célebres dinámicas

El sitio muestra frases célebres o inspiradoras de manera aleatoria en el footer, obtenidas dinámicamente desde una base de datos en Supabase. Esto permite mantener el contenido fresco y motivacional para los visitantes, y puede ser fácilmente actualizado desde el backend sin necesidad de modificar el código fuente.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas sugerir mejoras, reportar bugs o colaborar, por favor abre un issue o pull request siguiendo las buenas prácticas del repositorio.

---

## 👤 Autor

- **Cristián E. Contreras Cabrera**
- [ceccuentos.me](https://www.ceccuentos.com)
- [LinkedIn](https://www.linkedin.com/in/cec/)

---

## 📄 Licencia

MIT

---

## 🙏 Reconocimientos

Este proyecto está basado en el excelente trabajo de [cojocaru-david/cojocarudavid.me](https://github.com/cojocaru-david/cojocarudavid.me). ¡Gracias por compartir tu código y diseño con la comunidad!
