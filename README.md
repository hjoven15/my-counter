# 🧮 Contador React + Vite + Tailwind CSS

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

Una aplicación de contador sencilla construida con **React 19**, **Vite** y **Tailwind CSS v4**, demostrando las mejores prácticas de desarrollo moderno.

---

## ✨ Características

- ⚡ **Vite** - Build tool ultrarrápido
- 🎨 **Tailwind CSS v4** - Framework CSS utility-first
- ⚛️ **React 19** - La última versión de React
- 📱 **Responsive Design** - Adaptable a todos los dispositivos
- 🎯 **Componentes Modulares** - Código limpio y mantenible
- 🔥 **Hot Reload** - Desarrollo en tiempo real

---

## 🚀 Comenzando

### Prerrequisitos

- Node.js 18+ (recomendado LTS)
- npm 9+ o yarn/pnpm

### Instalación

Clona el repositorio:

```bash
git clone https://github.com/hjoven15/my-counter
cd my-counter
```

Instala las dependencias:

```bash
npm install
```

Ejecuta en modo desarrollo:

```bash
npm run dev
```

Abre tu navegador en:

```
http://localhost:5173
```

---

## 📦 Scripts Disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Construye la app para producción
npm run preview   # Previsualiza el build de producción
npm run lint      # Ejecuta ESLint para análisis de código
```

---

## 🏗️ Estructura del Proyecto

```
my-counter/
├── src/
│   ├── components/
│   │   └── Counter.jsx      # Componente del contador
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales (Tailwind v4)
├── index.html               # HTML principal
├── vite.config.js           # Configuración de Vite
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

---

## 🎨 Tecnologías Utilizadas

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.2
- **Styling:** Tailwind CSS v4.1.12
- **Package Manager:** npm
- **Language:** JavaScript (ES6+)

---

## 🔧 Configuración de Tailwind CSS v4

Este proyecto utiliza la última versión de Tailwind CSS (v4) con configuración simplificada:

```js
// vite.config.js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Configuración automática
  ],
})
```

```css
/* src/index.css */
@import "tailwindcss";
```

---

## 📱 Funcionalidades del Contador

- ➕ **Incrementar:** Aumenta el contador en 1
- ➖ **Decrementar:** Disminuye el contador en 1
- 🎨 **Interfaz Moderna:** Diseño atractivo con gradientes y sombras
- 📱 **Responsive:** Funciona en desktop, tablet y móvil
- ⚡ **Rendimiento Optimizado:** Carga instantánea con Vite

---

## 👨‍💻 Autor

Joven - [@hjoven15](https://github.com/hjoven15)

