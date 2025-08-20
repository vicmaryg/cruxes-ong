# 🌟 Fundación Cruxes de Luz - Sitio Web Oficial

## 📋 Descripción

Sitio web oficial de la **Fundación Cruxes de Luz**, una organización sin fines de lucro que promueve la espiritualidad, solidaridad y desarrollo personal. El sitio presenta una interfaz moderna, responsiva y accesible con soporte multiidioma (español/inglés), sistema de donaciones integrado con Mercado Pago, y diseño optimizado para todos los dispositivos.

## ✨ Características Principales

### 🌍 **Internacionalización Completa**
- Soporte nativo para **español** e **inglés**
- Cambio de idioma en tiempo real sin recarga
- Traducciones dinámicas con archivos JSON (`languages/es.json`, `languages/en.json`)
- Interfaz adaptada culturalmente
- Selector de idioma en el header

### 📱 **Diseño Responsivo Avanzado**
- **Mobile-first** con breakpoints optimizados
- Adaptación perfecta a móvil, tablet y desktop
- Navegación adaptativa con menú hamburguesa
- Imágenes optimizadas en formato WebP
- Espaciado responsivo entre secciones

### 💝 **Sistema de Donaciones Integrado**
- Modal de donaciones con múltiples opciones
- Integración con **Mercado Pago** (backend.js)
- Donaciones únicas y mensuales
- Opciones para empresas (RSE)
- Página de agradecimiento personalizada
- Múltiples montos predefinidos ($2000, $3000, $5000, $15000)

### 🍪 **Gestión de Privacidad y Cookies**
- Modal de consentimiento de cookies
- Cumplimiento GDPR/LOPD
- Política de privacidad detallada
- Almacenamiento seguro de preferencias
- Interfaz accesible y clara

### 🎯 **Experiencia de Usuario**
- Scroll suave entre secciones
- Header fijo con navegación intuitiva
- Botón flotante de WhatsApp
- Botón de "ir arriba" flotante
- Animaciones y transiciones fluidas
- Cursor personalizado

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | - | Estructura semántica y accesible |
| **CSS3** | - | Estilos modernos con variables CSS |
| **JavaScript** | ES6+ | Funcionalidades interactivas |
| **Node.js** | - | Backend para donaciones |
| **Express.js** | 5.1.0 | Servidor web |
| **Mercado Pago** | 2.8.0 | Procesamiento de pagos |
| **PHP** | 7.4+ | Backend para formularios |
| **WebP** | - | Imágenes optimizadas |
| **Font Awesome** | 6.0.0 | Iconografía |
| **Google Fonts** | - | Tipografía Inter |

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (para funcionalidades de donaciones)
- Navegador web moderno
- Servidor web (para funcionalidades PHP)
- Git (para desarrollo)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Crisca-cyver/ProyectoCruxes
   cd cruxes-ong
   ```

2. **Instalar dependencias de Node.js**
   ```bash
   npm install
   ```

3. **Configurar Mercado Pago** (opcional)
   ```bash
   # Editar backend.js y agregar tu access token
   mercadopago.configure({
     access_token: 'TU_ACCESS_TOKEN_REAL'
   });
   ```

4. **Iniciar servidor backend** (para donaciones)
   ```bash
   node backend.js
   ```

5. **Configurar servidor local** (para PHP)
   ```bash
   # Con PHP integrado
   php -S localhost:8000
   
   # Con Python
   python -m http.server 8000
   ```

6. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

## 📁 Estructura del Proyecto

```
cruxes-ong/
├── 📄 index.html                 # Página principal
├── 📄 backend.js                 # Servidor Node.js para donaciones
├── 📄 package.json               # Dependencias Node.js
├── 📄 composer.json              # Dependencias PHP
├── 📄 CNAME                      # Configuración de dominio
├── 📄 enviar_correo.php          # Backend PHP para formularios
├── 📄 cookie_consent.js          # Gestión de cookies
├── 📄 agradecimiento.html        # Página de agradecimiento
├── 📁 styles/                    # Estilos CSS modulares
│   ├── 🎨 variables.css          # Variables CSS globales
│   ├── 🎨 base.css               # Estilos base y reset
│   ├── 🎨 main.css               # Importaciones principales
│   ├── 🎨 header.css             # Estilos del header
│   ├── 🎨 footer.css             # Estilos del footer (con espaciado mejorado)
│   ├── 🎨 hero.css               # Sección hero
│   ├── 🎨 quienes-somos.css      # Sección "Quiénes Somos"
│   ├── 🎨 programas.css          # Sección programas
│   ├── 🎨 novedades.css          # Sección novedades
│   ├── 🎨 contacto.css           # Sección contacto
│   ├── 🎨 dona.css               # Sistema de donaciones
│   ├── 🎨 modal.css              # Modales y overlays
│   ├── 🎨 cookies.css            # Política de cookies
│   ├── 🎨 language.css           # Selector de idioma
│   ├── 🎨 whatsapp.css           # Botón flotante
│   ├── 🎨 agradecimiento.css     # Página de agradecimiento
│   ├── 🎨 cursor.css             # Cursor personalizado
│   └── 🎨 responsive.css         # Media queries
├── 📁 js/                        # Scripts JavaScript
│   ├── 🟨 translations.js        # Sistema de traducciones (537 líneas)
│   └── 🟨 script.js              # Funcionalidades principales
├── 📁 languages/                 # Archivos de traducción
│   ├── 🇪🇸 es.json               # Español
│   └── 🇺🇸 en.json               # Inglés
├── 📁 imagen/                    # Recursos multimedia
│   ├── 🖼️ Lanzamientos/          # Imágenes de lanzamientos
│   ├── 🖼️ LOGO- ALIANZAS/        # Logos de aliados
│   ├── 🖼️ ProyectosSolidarios/   # Imágenes de proyectos
│   ├── 🖼️ *.webp                 # Imágenes optimizadas
│   └── 🖼️ *.png                  # Logos y elementos gráficos
├── 📁 paginas/                   # Páginas adicionales
│   ├── 📄 contacto.html          # Página de contacto
│   ├── 📄 dona.html              # Página de donaciones
│   ├── 📄 formulario.html        # Formulario de contacto
│   ├── 📄 modal_donaciones.html  # Modal de donaciones
│   ├── 📄 novedades.html         # Página de novedades
│   ├── 📄 programas.html         # Página de programas
│   └── 📄 quienes-somos.html     # Página "Quiénes Somos"
└── 📁 documentos/                # Documentos legales
    └── 📄 carta.pdf              # Carta de presentación
```

## 🎨 Secciones del Sitio

### 🏠 **Hero Section**
- Presentación principal con animaciones
- Texto dividido "BIENVENIDOS A CRUXES DE LUZ"
- Llamada a la acción "AMOR en revolución"
- Diseño minimalista y impactante

### 👥 **Quiénes Somos**
- Información detallada de la fundación
- Valores cristianos y misión
- Equipo multidisciplinario
- Objetivos de desarrollo sostenible (ODS)
- Tres ejes principales: Solidaridad, Desarrollo Personal, Espiritualidad

### 🎯 **Programas**
- **Cruxes RSE**: Responsabilidad social empresarial
- **Cruxes Solidarias**: Proyectos solidarios
- **Cruxes de Luz**: Espiritualidad y desarrollo personal
- **Programa de Voluntariado**: Campañas solidarias
- **Escuela de Valores**: Talleres de desarrollo personal
- **Retiros Espirituales**: Encuentros de 2 días
- **Jornadas de Espiritualidad**: Talleres de 1 día

### 📰 **Novedades**
- Carrusel de alianzas estratégicas
- Proyectos solidarios en curso
- Lanzamientos recientes
- Navegación interactiva por categorías

### 💰 **Donaciones**
- Modal de opciones de donación
- Integración completa con Mercado Pago
- Donaciones únicas y recurrentes
- Opciones para empresas (RSE)
- Múltiples montos predefinidos
- Página de agradecimiento personalizada

### 📞 **Contacto**
- Formulario de contacto completo
- Validación en tiempo real
- Integración con PHP
- Múltiples tipos de contacto (donar, voluntario, empresa, información)
- Información de contacto detallada

## 🔧 Características Técnicas

### CSS Modular y Organizado
```css
/* Variables CSS centralizadas */
:root {
    --color-primary: #f97316;
    --color-primary-dark: #ea580c;
    --color-primary-light: #ff9800;
    --font-family: 'Inter', sans-serif;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    /* ... más variables */
}
```

### Sistema de Traducciones Avanzado
- **Archivos JSON** separados por idioma
- **537 líneas** de traducciones en `translations.js`
- **Carga dinámica** sin recarga de página
- **Fallbacks** para textos faltantes
- **Interfaz adaptativa** por idioma
- **Traducciones completas** para todas las secciones

### Backend Integrado
```javascript
// Servidor Express para donaciones
const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

// Endpoint para crear preferencia de pago
app.post('/crear-preferencia', async (req, res) => {
  // Lógica de integración con Mercado Pago
});
```

### Optimización de Rendimiento
- **Imágenes WebP** para mejor compresión
- **CSS modular** para carga eficiente
- **JavaScript optimizado** y modular
- **Lazy loading** de recursos
- **Minificación** de assets

### Accesibilidad
- **Navegación por teclado** completa
- **Contraste adecuado** en colores
- **Textos alternativos** en imágenes
- **Estructura semántica** HTML5
- **ARIA labels** para elementos interactivos

## 📱 Diseño Responsivo

### Breakpoints Optimizados
```css
/* Desktop: > 1024px */
/* Tablet: 768px - 1024px */
/* Mobile: < 768px */
/* Small Mobile: < 480px */
```

### Características Responsivas
- **Header adaptativo** con menú hamburguesa
- **Imágenes flexibles** que se ajustan
- **Tipografía escalable** con rem
- **Espaciado adaptativo** por dispositivo
- **Footer responsivo** con espaciado mejorado

## 🚀 Despliegue

### Opciones de Hosting
- ✅ **GitHub Pages** (recomendado)
- ✅ **Netlify** 
- ✅ **Vercel**
- ✅ **Cualquier servidor web estático**
- ✅ **Servidor con Node.js** (para donaciones)

### Configuración de Dominio
El archivo `CNAME` permite configurar dominios personalizados.

### Variables de Entorno
```bash
# Para Mercado Pago
MERCADOPAGO_ACCESS_TOKEN=tu_token_aqui

# Para EmailJS (opcional)
EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## 🤝 Contribución

### Cómo Contribuir
1. **Fork** del repositorio
2. **Crea una rama** para tu feature
3. **Desarrolla** tus cambios
4. **Prueba** en diferentes dispositivos
5. **Commit** con mensajes descriptivos
6. **Push** y crea un Pull Request

### Guías de Desarrollo
- Mantén el **código limpio** y documentado
- Sigue las **convenciones** existentes
- Prueba en **múltiples dispositivos**
- Verifica las **traducciones** en ambos idiomas
- Optimiza las **imágenes** antes de subir
- Actualiza la **documentación** cuando sea necesario

## 📞 Contacto y Soporte

### Para Usuarios
- 📧 **Formulario de contacto** en el sitio
- 📱 **WhatsApp** flotante para consultas rápidas (+54 9 11 3156-0677)
- 🌐 **Email**: info@cruxes.org
- 📍 **Ubicación**: Argentina

### Para Desarrolladores
- 🐛 **Issues** en GitHub para reportar bugs
- 💡 **Discussions** para sugerencias
- 📧 **Email** para consultas técnicas

## 📄 Licencia

Este proyecto es propiedad de la **Fundación Cruxes de Luz**. Todos los derechos reservados.

## 🎯 Roadmap

### Próximas Características
- [ ] **Blog integrado** para noticias
- [ ] **Sistema de usuarios** para voluntarios
- [ ] **Calendario de eventos** interactivo
- [ ] **Galería de proyectos** mejorada
- [ ] **PWA** (Progressive Web App)
- [ ] **Sistema de newsletter** integrado

### Mejoras Técnicas
- [ ] **Optimización SEO** avanzada
- [ ] **Analytics** integrado (Google Analytics)
- [ ] **Cache** inteligente
- [ ] **CDN** para recursos estáticos
- [ ] **Testing automatizado**
- [ ] **CI/CD pipeline**

---

*Última actualización: Diciembre 2024*  
*Versión: 2.1.0*  
*Desarrollado con ❤️ para la Fundación Cruxes de Luz*
