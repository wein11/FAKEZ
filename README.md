# 🎵 FAKEZ - Beats y Producción Musical

![FAKEZ Banner](https://img.shields.io/badge/FAKEZ-Music%20Producer-00F0FF?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

Plataforma web profesional para FAKEZ, productor musical de Buenos Aires, Argentina. Especializado en Trap, Drill, Reggaetón, R&B y producción musical personalizada.

## ✨ Características Principales

### 🎧 Experiencia Visual Única
- **Fondo 3D Interactivo**: Auriculares en wireframe con animación Three.js
- **Partículas Musicales**: Notas flotantes (♪ ♫ ♬ ♩) con movimiento dinámico
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Tema Dark Premium**: Paleta de colores neón (Cyan #00F0FF y Violet #9D00FF)

### 🎹 Funcionalidades
- **Catálogo de Beats**: Filtrado por género (Trap, Drill, Reggaetón, LoFi)
- **Sistema de Licencias**: Múltiples opciones de licenciamiento
- **Custom Beats**: Solicitud de producción personalizada
- **Integración de Pagos**: PayPal, Mercado Pago y Stripe
- **Contacto Directo**: Integración con WhatsApp
- **Reproductor Integrado**: Compatible con BeatStars y plataformas similares

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados con variables CSS
- **JavaScript (ES6+)** - Lógica interactiva
- **Three.js** - Gráficos 3D y animaciones
- **Font Awesome** - Iconografía
- **Google Fonts (Poppins)** - Tipografía moderna

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **dotenv** - Gestión de variables de entorno

### Integraciones
- **PayPal SDK** - Procesamiento de pagos
- **Mercado Pago API** - Pagos en Latinoamérica
- **Stripe** - Pagos internacionales
- **WhatsApp API** - Contacto directo

## 📁 Estructura del Proyecto

```
PARSHI/
├── frontend/
│   ├── index.html              # Página principal
│   ├── licencias.html          # Información de licencias
│   ├── custom-beats.html       # Formulario de beats personalizados
│   ├── sobre.html              # Sobre FAKEZ
│   ├── testimonios.html        # Testimonios de clientes
│   ├── contacto.html           # Página de contacto
│   ├── css/
│   │   └── styles.css          # Estilos globales
│   └── js/
│       ├── 3d-background.js    # Animación 3D de auriculares
│       ├── beats.js            # Lógica del catálogo
│       └── ui.js               # Interacciones UI
├── backend/
│   ├── server.js               # Servidor Express
│   ├── routes/
│   │   ├── beats.js            # Rutas de beats
│   │   ├── licenses.js         # Rutas de licencias
│   │   └── payments.js         # Rutas de pagos
│   ├── controllers/
│   │   ├── beatsController.js  # Controlador de beats
│   │   └── paymentsController.js
│   └── models/
│       ├── Beat.js             # Modelo de beat
│       └── License.js          # Modelo de licencia
├── .gitignore                  # Archivos ignorados
├── package.json                # Dependencias del proyecto
└── README.md                   # Este archivo
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (v14 o superior)
- MongoDB (local o MongoDB Atlas)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/wein11/FAKEZ.git
cd FAKEZ
```

2. **Instalar dependencias del backend**
```bash
cd backend
npm install
```

3. **Configurar variables de entorno**
Crear archivo `.env` en la carpeta `backend/`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/fakez
PAYPAL_CLIENT_ID=tu_paypal_client_id
PAYPAL_CLIENT_SECRET=tu_paypal_secret
MERCADOPAGO_ACCESS_TOKEN=tu_mercadopago_token
STRIPE_SECRET_KEY=tu_stripe_secret_key
```

4. **Iniciar el servidor**
```bash
npm start
```

5. **Abrir la aplicación**
Navegar a `http://localhost:3000` o abrir `frontend/index.html` directamente

## 🎨 Características del Fondo 3D

El fondo animado incluye:

- **Auriculares 3D**: Construidos con geometrías Three.js
  - Ear cups: Torus geometry
  - Headband: 20 segmentos cilíndricos curvados
  - Material: Wireframe cyan con transparencia

- **Notas Musicales**: 100 sprites animados
  - Símbolos: ♪ ♫ ♬ ♩
  - Color: Violet (#9D00FF)
  - Animación: Flotación ascendente con rotación

- **Interactividad**:
  - Seguimiento del mouse
  - Rotación al hacer scroll
  - Movimiento flotante continuo

## 📱 Redes Sociales

- 🎥 [YouTube](https://www.youtube.com/@faak3z)
- 🎧 [Spotify](https://open.spotify.com/artist/5eG8nZA97LubnzPVamFFAp)
- 📱 [TikTok](https://www.tiktok.com/@prodbyfakez)
- 📸 [Instagram](https://www.instagram.com/facubeldi_)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**FAKEZ** - Productor Musical
- Buenos Aires, Argentina
- Especializado en Trap, Drill, Reggaetón, R&B y Urbano

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

🎵 **Hecho con pasión por la música** 🎵
