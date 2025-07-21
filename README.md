# 🌟 Fundación Cruxes de Luz - Sitio Web Oficial

## 📋 Descripción

Sitio web oficial de la **Fundación Cruxes de Luz**, una organización que promueve la espiritualidad, solidaridad y desarrollo personal. El sitio presenta una interfaz moderna, responsiva y accesible con soporte multiidioma (español/inglés), sistema de donaciones integrado y diseño optimizado para todos los dispositivos.

## ✨ Características Principales

### 🌍 **Internacionalización Completa**
- Soporte nativo para **español** e **inglés**
- Cambio de idioma en tiempo real sin recarga
- Traducciones dinámicas con archivos JSON
- Interfaz adaptada culturalmente

### 📱 **Diseño Responsivo Avanzado**
- **Mobile-first** con breakpoints optimizados
- Adaptación perfecta a móvil, tablet y desktop
- Navegación adaptativa y menú hamburguesa
- Imágenes optimizadas para cada resolución
- Imágenes optimizadas para cada resolución

### 💝 **Sistema de Donaciones**
- Modal de donaciones con múltiples opciones
- Integración con Mercado Pago
- Donaciones únicas y mensuales
- Opciones para empresas (RSE)

### 🍪 **Gestión de Privacidad**
- Modal de consentimiento de cookies
- Cumplimiento GDPR/LOPD
- Almacenamiento seguro de preferencias
- Interfaz accesible y clara

### 🎯 **Experiencia de Usuario**
- Scroll suave entre secciones
- Header fijo con navegación intuitiva
- Botón flotante de WhatsApp
- Animaciones y transiciones fluidas

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | - | Estructura semántica y accesible |
| **CSS3** | - | Estilos modernos con variables CSS |
| **JavaScript** | ES6+ | Funcionalidades interactivas |
| **PHP** | 7.4+ | Backend para formularios |
| **WebP** | - | Imágenes optimizadas |
| **Git** | - | Control de versiones |

## 🚀 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno
- Servidor web (para funcionalidades PHP)
- Git (para desarrollo)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Crisca-cyver/ProyectoCruxes
   cd proyecto_cruxes
   ```

2. **Configurar servidor local** (opcional)
   ```bash
   # Con PHP integrado
   php -S localhost:8000
   
   # Con Python
   python -m http.server 8000
   ```

3. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

## 📁 Estructura del Proyecto

```
proyecto_cruxes/
├── 📄 index.html                 # Página principal
├── 📄 formulario.html            # Formulario de contacto
├── 📄 enviar_correo.php          # Backend PHP
├── 📄 composer.json              # Dependencias PHP
├── 📄 CNAME                      # Configuración de dominio
├── 📁 styles/                    # Estilos CSS modulares
│   ├── 🎨 variables.css          # Variables CSS globales
│   ├── 🎨 base.css               # Estilos base y reset
│   ├── 🎨 main.css               # Importaciones principales
│   ├── 🎨 header.css             # Estilos del header
│   ├── 🎨 footer.css             # Estilos del footer
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
│   └── 🎨 responsive.css         # Media queries
├── 📁 js/                        # Scripts JavaScript
│   ├── 🟨 script.js              # Funcionalidades principales
│   ├── 🟨 translations.js        # Sistema de traducciones
│   └── 🟨 cookie_consent.js      # Gestión de cookies
├── 📁 languages/                 # Archivos de traducción
│   ├── 🇪🇸 es.json               # Español
│   └── 🇺🇸 en.json               # Inglés
├── 📁 imagen/                    # Recursos multimedia
│   ├── 🖼️ Lanzamientos/          # Imágenes de lanzamientos
│   ├── 🖼️ LOGO- ALIANZAS/        # Logos de aliados
│   ├── 🖼️ ProyectosSolidarios/   # Imágenes de proyectos
│   └── 🖼️ *.webp                 # Imágenes optimizadas
└── 📄 README.md                  # Documentación
```

## 🎨 Secciones del Sitio

### 🏠 **Hero Section**
- Presentación principal con animaciones
- Llamadas a la acción prominentes
- Imagen de fondo dinámica
- Texto dividido con efectos

### 👥 **Quiénes Somos**
- Información de la fundación
- Valores y misión
- Equipo y especialistas
- Objetivos de desarrollo sostenible

### 🎯 **Programas**
- **Cruxes RSE**: Responsabilidad social empresarial
- **Cruxes Solidarias**: Proyectos solidarios
- **Cruxes de Luz**: Espiritualidad y desarrollo personal

### 📰 **Novedades**
- Carrusel de alianzas
- Proyectos solidarios
- Lanzamientos recientes
- Navegación interactiva

### 💰 **Donaciones**
- Modal de opciones de donación
- Integración con Mercado Pago
- Donaciones únicas y recurrentes
- Opciones para empresas

### 📞 **Contacto**
- Formulario de contacto completo
- Validación en tiempo real
- Integración con PHP
- Información de contacto

## 🔧 Características Técnicas

### CSS Modular y Organizado
```css
/* Variables CSS centralizadas */
:root {
    --color-primary: #f97316;
    --font-family: 'Inter', sans-serif;
    --spacing-sm: 1rem;
    /* ... más variables */
}
```

### Sistema de Traducciones
- **Archivos JSON** separados por idioma
- **Carga dinámica** sin recarga de página
- **Fallbacks** para textos faltantes
- **Interfaz adaptativa** por idioma

### Optimización de Rendimiento
- **Imágenes WebP** para mejor compresión
- **CSS modular** para carga eficiente
- **JavaScript optimizado** y modular
- **Lazy loading** de recursos

### Accesibilidad
- **Navegación por teclado** completa
- **Contraste adecuado** en colores
- **Textos alternativos** en imágenes
- **Estructura semántica** HTML5

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

## 🚀 Despliegue

### Opciones de Hosting
- ✅ **GitHub Pages** (recomendado)
- ✅ **Netlify** 
- ✅ **Vercel**
- ✅ **Cualquier servidor web estático**

### Configuración de Dominio
El archivo `CNAME` permite configurar dominios personalizados.

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
- Verifica las **traducciones**
- Optimiza las **imágenes**

## 📞 Contacto y Soporte

### Para Usuarios
- 📧 **Formulario de contacto** en el sitio
- 📱 **WhatsApp** flotante para consultas rápidas
- 🌐 **Información** en la sección de contacto

### Para Desarrolladores
- 🐛 **Issues** en GitHub para reportar bugs
- 💡 **Discussions** para sugerencias
- 📧 **Email** para consultas técnicas

## 📄 Licencia

Este proyecto es propiedad de la **Fundación Cruxes de Luz**. Todos los derechos reservados.

---

## 🎯 Roadmap

### Próximas Características
- [ ] **Blog integrado** para noticias
- [ ] **Sistema de usuarios** para voluntarios
- [ ] **Calendario de eventos** interactivo
- [ ] **Galería de proyectos** mejorada
- [ ] **PWA** (Progressive Web App)

### Mejoras Técnicas
- [ ] **Optimización SEO** avanzada
- [ ] **Analytics** integrado
- [ ] **Cache** inteligente
- [ ] **CDN** para recursos estáticos

---

*Última actualización: Diciembre 2024*  
*Versión: 2.0.0*  
*Desarrollado con ❤️ para la Fundación Cruxes de Luz*
