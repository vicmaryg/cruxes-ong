console.log('Script.js cargado');

// Variables globales
let currentLanguage = 'es';
let scrollInterval;

// Función para manejar el efecto blur del header
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Función para cambiar el idioma
function changeLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateTexts();
    translateDataI18n();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Función para actualizar los textos en la página
// Función para cargar la lista de "Quienes somos"
function loadQuienesSomosList() {
    const quienesSomosList = document.getElementById('quienes-somos-list');
    if (quienesSomosList) {
        const t = translations[currentLanguage];
        if (t && t.quienes_somos && t.quienes_somos.objetivos) {
            quienesSomosList.innerHTML = '';
            
            t.quienes_somos.objetivos.forEach(objetivo => {
                const li = document.createElement('li');
                li.innerHTML = objetivo;
                quienesSomosList.appendChild(li);
            });
        }
    }
}

// Modificar la función updateTexts para incluir la carga de la lista
function updateTexts() {
    const t = translations[currentLanguage];
    
    if (!t) {
        console.error('No hay traducciones disponibles para:', currentLanguage);
        return;
    }
    
    try {
        // Navegación
        document.querySelectorAll('.nav-link').forEach((link, index) => {
            const keys = ['inicio', 'nosotros', 'servicios', 'novedades', 'contacto'];
            if (keys[index]) {
                link.textContent = t.nav[keys[index]];
            }
        });
        

        
        // Botón de donación
        const donateButton = document.querySelector('.donate-button');
        if (donateButton) donateButton.textContent = t.nav.donar;
        
        // Hero
        const heroTitle = document.querySelector('.hero-title');
        const heroQuote = document.querySelector('.hero-section .quote, .hero-section q.quote');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        
        if (heroTitle) heroTitle.innerHTML = t.hero.title;
        if (heroQuote) {
            heroQuote.textContent = t.hero.quote;
        }
        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
        if (heroDescription) heroDescription.textContent = t.hero.description;
        
        // Quiénes Somos
        const quienesSomosTitle = document.querySelector('#quienes-somos .section-title');
        const quienesSomosDesc = document.querySelector('#quienes-somos .section-description');
        const quienesSomosList = document.querySelector('#quienes-somos-list');
        
        if (quienesSomosTitle) quienesSomosTitle.textContent = t.quienes_somos.title;
        if (quienesSomosDesc) quienesSomosDesc.textContent = t.quienes_somos.description;
        if (quienesSomosList && t.quienes_somos.objetivos) {
            quienesSomosList.innerHTML = t.quienes_somos.objetivos
                .map(objetivo => `<li>${objetivo.replace(/^\s*•\s*/, '')}</li>`)
                .join('');
        }
        
        // Párrafo base y botones
        const baseText = document.querySelector('#quienes-somos p:not(.section-description)');
        const cartaButton = document.querySelector('#quienes-somos .button-link:first-child');
        // const codigoButton = document.querySelector('#quienes-somos .button-link:last-child');

        if (baseText) baseText.innerHTML = t.quienes_somos.base_text;
        if (cartaButton) cartaButton.textContent = t.quienes_somos.buttons.carta;
        // if (codigoButton) codigoButton.textContent = t.quienes_somos.buttons.codigo;
        
        // Sección de ejes
        const ejesTitle = document.querySelector('.ejes-title');
        const ejesList = document.querySelector('.ejes-content ul');
        const ejesQuote = document.querySelector('.ejes-quote');

        if (ejesTitle) {
            console.log('Título de ejes encontrado:', ejesTitle);
            ejesTitle.textContent = t.quienes_somos.ejes.title;
        } else {
            console.log('No se encontró el título de ejes');
        }

        if (ejesList && t.quienes_somos.ejes && t.quienes_somos.ejes.items) {
            console.log('Lista de ejes encontrada:', ejesList);
            ejesList.innerHTML = t.quienes_somos.ejes.items
                .map(item => `<li>${item}</li>`)
                .join('');
        } else {
            console.log('No se encontró la lista de ejes o las traducciones');
        }

        if (ejesQuote) {
            ejesQuote.innerHTML = t.quienes_somos.ejes.quote;
        } else {
            console.log('No se encontró la cita de ejes');
        }
        
        // Visión, Misión y Objetivos
        const visionMisionTitle = document.querySelector('#vision-mision-objetivos .section-title');
        const visionTitle = document.querySelector('.vision-title');
        const visionContent = document.querySelector('.vision-content');
        const misionTitle = document.querySelector('.mision-title');
        const misionContent = document.querySelector('.mision-content');
        const objetivoGeneralTitle = document.querySelector('#vision-mision-objetivos .objetivo-title');
        const objetivoGeneralText = document.querySelector('#vision-mision-objetivos .objetivo-content');
        const objetivoEspecificoTitle = document.querySelector('#vision-mision-objetivos .objetivo-especifico-title');
        const objetivoEspecificoList = document.querySelector('#vision-mision-objetivos ul');
        
        if (visionMisionTitle) visionMisionTitle.textContent = t.vision_mision.title;
        if (visionTitle) visionTitle.textContent = t.vision_mision.vision.title;
        if (visionContent) visionContent.textContent = t.vision_mision.vision.content;
        if (misionTitle) misionTitle.textContent = t.vision_mision.mision.title;
        if (misionContent) misionContent.textContent = t.vision_mision.mision.content;
        if (objetivoGeneralTitle) objetivoGeneralTitle.textContent = t.vision_mision.objetivo_general.title;
        if (objetivoGeneralText) objetivoGeneralText.textContent = t.vision_mision.objetivo_general.text;
        if (objetivoEspecificoTitle) objetivoEspecificoTitle.textContent = t.vision_mision.objetivo_especifico.title;
        
        // Asegurar que el elemento existe antes de modificarlo
        if (objetivoEspecificoList) {
            console.log('Elemento ul encontrado, actualizando contenido...');
            console.log('Items disponibles:', t.vision_mision.objetivo_especifico.items);
            // Mostrar los tres primeros ítems en la lista
            objetivoEspecificoList.innerHTML = t.vision_mision.objetivo_especifico.items
                .slice(0, 3)
                .map(item => `<li>${item}</li>`)
                .join('');
            console.log('Contenido actualizado:', objetivoEspecificoList.innerHTML);
        } else {
            console.log('Elemento ul NO encontrado');
            // Intentar con un selector más específico
            const alternativeList = document.querySelector('.objetivo-especifico-row ul');
            if (alternativeList) {
                console.log('Elemento ul encontrado con selector alternativo');
                alternativeList.innerHTML = t.vision_mision.objetivo_especifico.items
                    .slice(0, 3)
                    .map(item => `<li>${item}</li>`)
                    .join('');
            }
        }
        
        // Nuestro Equipo
        const equipoTitle = document.querySelector('#nuestro-equipo .section-title');
        const equipoDesc = document.querySelector('#nuestro-equipo p');
        const equipoComite = document.querySelector('#nuestro-equipo p:nth-child(3)');
        const equipoQuote = document.querySelector('#nuestro-equipo .quote');
        const odsTitle = document.querySelector('#nuestro-equipo .section-title:last-child');
        
        if (equipoTitle) {
            console.log('Elemento equipoTitle encontrado:', equipoTitle);
            console.log('Valor de t.equipo.title:', t.equipo.title);
            equipoTitle.textContent = t.equipo.title;
            console.log('equipoTitle.textContent después de la asignación:', equipoTitle.textContent);
        } else {
            console.log('Elemento equipoTitle NO encontrado.');
        }
        if (equipoDesc) equipoDesc.textContent = t.equipo.description;
        if (equipoComite) equipoComite.textContent = t.equipo.comite;
        if (equipoQuote) equipoQuote.textContent = t.equipo.quote;
        if (odsTitle) odsTitle.textContent = t.equipo.ods_title;
        
        // Programas
        /*
        const programasTitle = document.querySelector('#programas .section-title');
        if (programasTitle) programasTitle.textContent = t.programas.title;
        
        // CRUXES RSE
        const rseTitle = document.querySelector('.cruxes-rse .programa-title');
        const rseQuote = document.querySelector('.cruxes-rse .programa-quote');
        const rseAsesoramientoTitle = document.querySelector('.cruxes-rse .programa-content h4');
        const rseAsesoramientoDesc = document.querySelector('.cruxes-rse .programa-content p');
        const rseAsesoramientoList = document.querySelector('.cruxes-rse .programa-content ul');
        
        if (rseTitle) rseTitle.textContent = t.programas.cruxes_rse.title;
        if (rseQuote) rseQuote.textContent = t.programas.cruxes_rse.quote;
        if (rseAsesoramientoTitle) rseAsesoramientoTitle.textContent = t.programas.cruxes_rse.asesoramiento.title;
        if (rseAsesoramientoDesc) rseAsesoramientoDesc.textContent = t.programas.cruxes_rse.asesoramiento.description;
        if (rseAsesoramientoList) {
            rseAsesoramientoList.innerHTML = t.programas.cruxes_rse.asesoramiento.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
        
        // CRUXES SOLIDARIAS
        const solidariasTitle = document.querySelector('.cruxes-solidarias .programa-title');
        const solidariasQuote = document.querySelector('.cruxes-solidarias .programa-quote');
        const solidariasProyectosTitle = document.querySelector('.cruxes-solidarias .programa-content h4');
        const solidariasProyectosDesc = document.querySelector('.cruxes-solidarias .programa-content p');
        const solidariasProyectosList = document.querySelector('.cruxes-solidarias .programa-content ul');
        
        if (solidariasTitle) solidariasTitle.textContent = t.programas.cruxes_solidarias.title;
        if (solidariasQuote) solidariasQuote.textContent = t.programas.cruxes_solidarias.quote;
        if (solidariasProyectosTitle) solidariasProyectosTitle.textContent = t.programas.cruxes_solidarias.proyectos.title;
        if (solidariasProyectosDesc) solidariasProyectosDesc.textContent = t.programas.cruxes_solidarias.proyectos.description;
        if (solidariasProyectosList) {
            solidariasProyectosList.innerHTML = t.programas.cruxes_solidarias.proyectos.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
        
        // CRUXES DE LUZ
        const luzTitle = document.querySelector('.cruxes-de-luz .programa-title');
        const luzQuote = document.querySelector('.cruxes-de-luz .programa-quote');
        const luzEspiritualidadTitle = document.querySelector('.cruxes-de-luz .programa-content h4');
        const luzEspiritualidadDesc = document.querySelector('.cruxes-de-luz .programa-content p');
        const luzEspiritualidadList = document.querySelector('.cruxes-de-luz .programa-content ul');
        
        if (luzTitle) luzTitle.textContent = t.programas.cruxes_luz.title;
        if (luzQuote) luzQuote.textContent = t.programas.cruxes_luz.quote;
        if (luzEspiritualidadTitle) luzEspiritualidadTitle.textContent = t.programas.cruxes_luz.espiritualidad.title;
        if (luzEspiritualidadDesc) luzEspiritualidadDesc.textContent = t.programas.cruxes_luz.espiritualidad.description;
        if (luzEspiritualidadList) {
            luzEspiritualidadList.innerHTML = t.programas.cruxes_luz.espiritualidad.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
*/
        
        // Novedades
        const novedadesTitle = document.querySelector('#novedades .section-title');
        const verMasBtn = document.querySelector('#novedades .ver-mas-btn');
        const alianzasTitle = document.querySelector('#novedades .novedad-item:nth-child(1) .novedad-title');
        const proyectosTitle = document.querySelector('#novedades .novedad-item:nth-child(2) .novedad-title');
        const lanzamientosTitle = document.querySelector('#novedades .novedad-item:nth-child(3) .novedad-title');
        
        if (novedadesTitle) novedadesTitle.textContent = t.novedades.title;
        if (verMasBtn) verMasBtn.textContent = t.novedades.ver_mas;
        if (alianzasTitle) alianzasTitle.textContent = t.novedades.alianzas;
        if (proyectosTitle) proyectosTitle.textContent = t.novedades.jornada_espiritualidad;
        if (lanzamientosTitle) lanzamientosTitle.textContent = t.novedades.lanzamientos;
        
        // Contacto
        const contactoTitle = document.querySelector('.contacto-main-title');
        const masInfoTitle = document.querySelector('#contacto h3:not(.contacto-main-title)');
        const formText = document.querySelector('.contacto-info p');
        const nombreLabel = document.querySelector('label[for="nombre"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const mensajeLabel = document.querySelector('label[for="mensaje"]');
        const submitButton = document.querySelector('button[type="submit"]');
        const tipoContactoLabel = document.querySelector('label[for="tipo-contacto"]');
        const tipoContactoSelect = document.querySelector('#tipo-contacto');
        const telefonoLabel = document.querySelector('label[for="telefono"]');
        const privacidadText = document.querySelector('#privacidad-texto');
        
        if (contactoTitle) contactoTitle.textContent = t.contacto.title;
        if (masInfoTitle) masInfoTitle.textContent = t.contacto.mas_info;
        if (formText) formText.textContent = t.contacto.form_text;
        if (nombreLabel) nombreLabel.textContent = t.contacto.nombre;
        if (emailLabel) emailLabel.textContent = t.contacto.email;
        if (mensajeLabel) mensajeLabel.textContent = t.contacto.mensaje;
        if (submitButton) submitButton.textContent = t.contacto.enviar;
        if (tipoContactoLabel) tipoContactoLabel.textContent = t.contacto.tipo_contacto.label;
        if (telefonoLabel) telefonoLabel.textContent = t.contacto.telefono;
        if (privacidadText) privacidadText.textContent = t.contacto.privacidad + ' *';
        
        // Agregar funcionalidad para abrir modal de política de privacidad al hacer clic en la casilla
        const privacidadCheckbox = document.querySelector('input[name="privacidad"]');
        if (privacidadCheckbox) {
            privacidadCheckbox.addEventListener('click', function(e) {
                e.preventDefault(); // Prevenir que se marque automáticamente
                this.checked = false; // Mantener desmarcado hasta que se acepte
                
                // Mostrar el modal de cookies (que ahora contiene la política de privacidad)
                const modalCookies = document.getElementById('modal-cookies');
                if (modalCookies) {
                    modalCookies.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
        
        // Actualizar opciones del select
        if (tipoContactoSelect) {
            const options = tipoContactoSelect.options;
            if (options.length > 0) {
                options[0].textContent = t.contacto.tipo_contacto.placeholder;
                options[1].textContent = t.contacto.tipo_contacto.donar;
                options[2].textContent = t.contacto.tipo_contacto.voluntario;
                options[3].textContent = t.contacto.tipo_contacto.empresa;
                options[4].textContent = t.contacto.tipo_contacto.informacion;
                options[5].textContent = t.contacto.tipo_contacto.otro;
            }
        }
        
        // Footer
        const footerQuote = document.querySelector('.footer-center-content p');
        const footerLink = document.querySelector('.footer-link');
        // const siguenosText = document.querySelector('.footer .social-icons');
        
        if (footerQuote) footerQuote.textContent = t.footer.quote;
        if (footerLink) footerLink.textContent = t.footer.cookies;
        // if (siguenosText) siguenosText.textContent = t.footer.siguenos;
        
        // Objetivos de Desarrollo Sostenible
        const todosLosTitulos = document.querySelectorAll('h2.section-title');
        todosLosTitulos.forEach((titulo) => {
            if (titulo.textContent.includes('Objetivos de desarrollo sostenible') || 
                titulo.textContent.includes('Sustainable Development Goals')) {
                console.log('Encontrado título de ODS:', titulo.textContent);
                titulo.textContent = t.objetivos_desarrollo.title;
            }
        });
        
        console.log('Textos actualizados exitosamente');
    } catch (error) {
        console.error('Error al actualizar textos:', error);
    }
}

// Inicializar sistema de idiomas
function initLanguageSystem() {
    console.log('Inicializando sistema de idiomas');
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    const toggle = document.getElementById('languageToggle');
    if (toggle) {
        console.log('Toggle encontrado:', toggle);
        toggle.checked = currentLanguage === 'en';
        toggle.addEventListener('change', changeLanguage);
    }
    
    updateTexts();
    translateDataI18n();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    initLanguageSystem();
    
    // Agregar listener para el efecto blur del header después de un pequeño delay
    setTimeout(() => {
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll(); // Ejecutar una vez al cargar
    }, 100);
});

// También agregar cuando la página esté completamente cargada
window.addEventListener('load', () => {
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();
});

// Inicializar el formulario de contacto
initializeForm();

  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Saltar enlaces con href="#" o selectores inválidos
      if (targetId === '#' || targetId.length <= 1) {
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Resaltar sección activa en el nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink();

  // Manejo del formulario de contacto
function initializeForm() {
  const contactoForm = document.getElementById('contacto-form');
  
  if (contactoForm) {
    contactoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const tipoContacto = document.getElementById('tipo-contacto').value;
      const politicaPrivacidad = document.getElementById('politica-privacidad').checked;
      const mensaje = document.getElementById('mensaje').value.trim();
      
      if (!nombre || !email || !telefono || !mensaje || !politicaPrivacidad) {
        alert('Por favor, complete todos los campos requeridos y acepte la política de privacidad.');
        return;
      }
      
      // Mostrar indicador de carga
      const submitButton = contactoForm.querySelector('.form-submit-btn');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;
      
      // Preparar los datos para enviar
      const formData = {
          nombre: nombre,
          email: email,
          telefono: telefono,
          tipoContacto: tipoContacto,
          mensaje: mensaje
      };

      // Simular envío (reemplazar con tu endpoint real)
      setTimeout(() => {
          alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
          contactoForm.reset();
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
      }, 1000);
      
      // Código original para envío real (descomentar cuando tengas el backend)
      /*
      fetch('enviar_correo.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
              contactoForm.reset();
          } else {
              throw new Error(data.error || 'Error al enviar el mensaje');
          }
      })
      .catch(error => {
          alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente más tarde.');
          console.error('Error:', error);
      })
      .finally(() => {
          // Restaurar el botón
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
      });
      */
    });
  }
}

  // Control del menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const navHeader = document.querySelector('.nav-header');

  // Función para alternar el menú
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navHeader.classList.toggle('active');
    document.body.style.overflow = navHeader.classList.contains('active') ? 'hidden' : '';
  }

  // Event listener para el botón del menú
  menuToggle.addEventListener('click', toggleMenu);

  // Cerrar el menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navHeader.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Cerrar el menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (navHeader.classList.contains('active') && 
        !navHeader.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      toggleMenu();
    }
  });

  // --- Funcionalidad del Carrusel de Novedades ---
  window.addEventListener('load', function() {
    const novedadItems = document.querySelectorAll('.novedad-item');

    novedadItems.forEach(item => {
      const carouselContainer = item.querySelector('.novedad-carousel-container');
      const leftArrow = item.querySelector('.left-arrow');
      const rightArrow = item.querySelector('.right-arrow');
      const carouselItems = carouselContainer ? carouselContainer.querySelectorAll('img, .carousel-image-placeholder, .carousel-content-placeholder') : [];
      
      if (carouselItems.length > 0) {
        const firstItem = carouselItems[0];
        const itemOffsetWidth = firstItem.offsetWidth;
        const itemMarginLeft = parseInt(window.getComputedStyle(firstItem).marginLeft);
        const itemMarginRight = parseInt(window.getComputedStyle(firstItem).marginRight);
        const itemTotalWidth = itemOffsetWidth + itemMarginLeft + itemMarginRight;

        // Función para avanzar automáticamente
        const autoScroll = () => {
          const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
          if (carouselContainer.scrollLeft + itemTotalWidth >= maxScrollLeft) {
            carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselContainer.scrollBy({ left: itemTotalWidth, behavior: 'smooth' });
          }
        };

            // Intervalo para el desplazamiento automático - más lento en pantallas pequeñas
            const scrollSpeed = window.innerWidth <= 1024 ? 6000 : 3000;
            scrollInterval = setInterval(autoScroll, scrollSpeed);

            // Función para manejar el clic en la flecha derecha
                    rightArrow.addEventListener('click', () => {
                clearInterval(scrollInterval);
                const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
                if (carouselContainer.scrollLeft + itemTotalWidth >= maxScrollLeft) {
                    carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselContainer.scrollBy({ left: itemTotalWidth, behavior: 'smooth' });
                }
                scrollInterval = setInterval(autoScroll, scrollSpeed);
            });

            // Función para manejar el clic en la flecha izquierda
                    leftArrow.addEventListener('click', () => {
                clearInterval(scrollInterval);
          if (carouselContainer.scrollLeft === 0) {
                    carouselContainer.scrollTo({ 
                        left: carouselContainer.scrollWidth - carouselContainer.clientWidth, 
                        behavior: 'smooth' 
                    });
          } else {
            carouselContainer.scrollBy({ left: -itemTotalWidth, behavior: 'smooth' });
          }
                scrollInterval = setInterval(autoScroll, scrollSpeed);
            });

            // Pausar el desplazamiento automático cuando el mouse está sobre el carrusel
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(scrollInterval);
            });

            // Reanudar el desplazamiento automático cuando el mouse sale del carrusel
            carouselContainer.addEventListener('mouseleave', () => {
                scrollInterval = setInterval(autoScroll, scrollSpeed);
        });
      } else {
        console.log(`--- Debug Carrusel: No se encontraron items en el carrusel de ${item.querySelector('.novedad-title')?.textContent} ---`);
      }
  });
});

/* Modal de Donación 2025*/
// --- Funciones del Modal de Donación ---

// Función para abrir el modal de donación
function openDonationModal() {
  const modal = document.getElementById('modal-donacion-backup');
  if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
      
      // Cerrar modal al hacer clic en la X
      const cerrarBtn = modal.querySelector('.modal-close-btn');
      if (cerrarBtn) {
        cerrarBtn.onclick = function() {
          closeDonationModal();
        };
      }
      
      // Cerrar modal al hacer clic fuera del contenido
      modal.onclick = function(e) {
        if (e.target === modal) {
          closeDonationModal();
        }
      };
      
      // Traducir el modal
      setTimeout(() => {
        translateDataI18n();
      }, 100);
  }
}

// Función para cerrar el modal de donación
function closeDonationModal() {
  // Cerrar modal dinámico
  var modal = document.getElementById('modal-donacion');
  if(modal) modal.style.display = 'none';
  
  // Cerrar modal de respaldo
  var backupModal = document.getElementById('modal-donacion-backup');
  if(backupModal) backupModal.style.display = 'none';
  
  // Limpia el contenedor para evitar duplicados si se vuelve a abrir
  var cont = document.getElementById('modal-donaciones-container');
  if(cont) {
    // Solo limpiar si no hay modal de respaldo
    if (!document.getElementById('modal-donacion-backup')) {
      cont.innerHTML = '';
    }
  }
}

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal-donacion');
  if (modal) {
      modal.addEventListener('click', function(e) {
          if (e.target === modal) {
              closeDonationModal();
          }
      });
  }
  
  // Cerrar modal con la tecla Escape
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closeDonationModal();
      }
  });
});

// Modal de donaciones dinámico
function cargarModalDonaciones() {
  console.log('Iniciando carga del modal...');
  
  // Usar directamente la función openDonationModal que ya está configurada
  openDonationModal();
}

// Función para mostrar el modal de respaldo
function showBackupModal() {
  console.log('Mostrando modal de respaldo');
  const backupModal = document.getElementById('modal-donacion-backup');
  if (backupModal) {
    backupModal.style.display = 'flex';
    
    // Cerrar modal al hacer clic en la X
    const cerrarBtn = backupModal.querySelector('.modal-close-btn');
    if (cerrarBtn) {
      cerrarBtn.onclick = function() {
        backupModal.style.display = 'none';
      };
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    backupModal.onclick = function(e) {
      if (e.target === backupModal) {
        backupModal.style.display = 'none';
      }
    };
    
    // Traducir el modal de respaldo
    setTimeout(() => {
      console.log('Traduciendo modal de respaldo...');
      translateDataI18n();
    }, 100);
    
    console.log('Modal de respaldo mostrado exitosamente');
  } else {
    console.error('Modal de respaldo no encontrado');
    alert('Error al cargar el modal de donaciones. Por favor, intente nuevamente.');
  }
}

// Detectar cuando el usuario regresa de Mercado Pago
window.addEventListener('focus', function() {
  // Verificar si hay una donación pendiente en localStorage
  const pendingDonation = localStorage.getItem('pendingDonation');
  if (pendingDonation) {
    // Limpiar la donación pendiente
    localStorage.removeItem('pendingDonation');
    
    // Mostrar el modal de agradecimiento
    setTimeout(() => {
      openAgradecimientoModal();
    }, 500);
  }
});

// Marcar donación pendiente cuando se hace clic en un botón de donación
function handleDonationClick(event, amount) {
  // Cerrar el modal de donaciones
  closeDonationModal();
  
  // Marcar que hay una donación pendiente
  localStorage.setItem('pendingDonation', amount.toString());
  
  // Mostrar el modal de agradecimiento después de un pequeño delay
  setTimeout(() => {
    openAgradecimientoModal();
  }, 300);
  
  // Continuar con la redirección a Mercado Pago
  // El enlace se abrirá en nueva pestaña como está configurado
}

document.addEventListener('DOMContentLoaded', function() {
  const donarAhoraBtn = document.getElementById('donarAhoraBtn');
  if (donarAhoraBtn) {
    console.log('Botón "Donar ahora" encontrado, agregando event listener');
    donarAhoraBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Clic en botón "Donar ahora" detectado');
      openDonationModal();
    });
  } else {
    console.error('Botón "Donar ahora" no encontrado en DOMContentLoaded');
  }
});

// También agregar event listener cuando el DOM esté completamente cargado
window.addEventListener('load', function() {
  const donarAhoraBtn = document.getElementById('donarAhoraBtn');
  if (donarAhoraBtn && !donarAhoraBtn.hasAttribute('data-listener-added')) {
    console.log('Botón "Donar ahora" encontrado en window.load, agregando event listener');
    donarAhoraBtn.setAttribute('data-listener-added', 'true');
    donarAhoraBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Clic en botón "Donar ahora" detectado (window.load)');
      openDonationModal();
    });
  }
});

// Función para abrir el modal de agradecimiento
function openAgradecimientoModal() {
  const modal = document.getElementById('modal-agradecimiento');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    
    // Cerrar modal al hacer clic en la X
    const cerrarBtn = modal.querySelector('.modal-close-btn');
    if (cerrarBtn) {
      cerrarBtn.onclick = function() {
        closeAgradecimientoModal();
      };
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.onclick = function(e) {
      if (e.target === modal) {
        closeAgradecimientoModal();
      }
    };
    
    // Traducir el modal
    setTimeout(() => {
      translateDataI18n();
    }, 100);
  }
}

// Función para cerrar el modal de agradecimiento
function closeAgradecimientoModal() {
  const modal = document.getElementById('modal-agradecimiento');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
  }
}



// Función para traducir elementos con data-i18n
function translateDataI18n() {
    const t = translations[currentLanguage];
    if (!t) {
        console.warn('No hay traducciones disponibles para:', currentLanguage);
        return;
    }
    
    console.log('Buscando elementos con data-i18n...');
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Elementos encontrados:', elements.length);
    
    // Recorrer todos los elementos con data-i18n
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        
        // Navegar por el objeto de traducciones usando las claves anidadas
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Traducción no encontrada para: ${key}`);
                return;
            }
        }
        
        // Aplicar la traducción
        if (typeof value === 'string') {
            console.log(`Traduciendo ${key}: "${element.textContent}" -> "${value}"`);
            element.textContent = value;
        } else if (typeof value === 'object') {
            console.warn(`Valor de traducción no es string para: ${key}`, value);
        }
    });
    
    console.log('Traducción completada');
}

// Mostrar/ocultar flecha de scroll-top y funcionalidad
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    });
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}); 

// === Mostrar/ocultar texto base de quienes somos ===
document.addEventListener('DOMContentLoaded', function() {
    const btnMasInfo = document.getElementById('btn-mas-info');
    const masInfoTexto = document.getElementById('mas-info-texto');
    if (btnMasInfo && masInfoTexto) {
        function updateMasInfoText() {
            const t = translations[currentLanguage];
            if (t && t.quienes_somos && t.quienes_somos.base_text) {
                masInfoTexto.innerHTML = t.quienes_somos.base_text;
            }
        }
        // Siempre oculto al inicio
        masInfoTexto.style.display = 'none';
        btnMasInfo.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
        btnMasInfo.addEventListener('click', function toggleInfo() {
            if (masInfoTexto.style.display === 'none' || masInfoTexto.style.display === '') {
                updateMasInfoText();
                masInfoTexto.style.display = 'block';
                btnMasInfo.textContent = currentLanguage === 'es' ? '- info...' : '- info...';
            } else {
                masInfoTexto.style.display = 'none';
                btnMasInfo.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
            }
        });
        // Si cambias de idioma, vuelve a ocultar la info y mostrar el link
        const originalUpdateTexts = updateTexts;
        window.updateTexts = function() {
            originalUpdateTexts();
            masInfoTexto.style.display = 'none';
            btnMasInfo.style.display = 'inline';
            btnMasInfo.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
        };
        btnMasInfo.style.cursor = 'pointer';
    }
});

// === Mostrar/ocultar texto del equipo ===
document.addEventListener('DOMContentLoaded', function() {
    const btnMasInfoEquipo = document.getElementById('btn-mas-info-equipo');
    const masInfoEquipo = document.getElementById('mas-info-equipo');
    if (btnMasInfoEquipo && masInfoEquipo) {
        function updateMasInfoEquipoText() {
            const t = translations[currentLanguage];
            if (t && t.equipo && t.equipo.description) {
                masInfoEquipo.innerHTML = `<p data-i18n="equipo.description">${t.equipo.description}</p>`;
            }
        }
        masInfoEquipo.style.display = 'none';
        btnMasInfoEquipo.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
        btnMasInfoEquipo.addEventListener('click', function toggleInfoEquipo() {
            if (masInfoEquipo.style.display === 'none' || masInfoEquipo.style.display === '') {
                updateMasInfoEquipoText();
                masInfoEquipo.style.display = 'block';
                btnMasInfoEquipo.textContent = currentLanguage === 'es' ? '- info...' : '- info...';
            } else {
                masInfoEquipo.style.display = 'none';
                btnMasInfoEquipo.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
            }
        });
        const originalUpdateTexts = window.updateTexts;
        window.updateTexts = function() {
            originalUpdateTexts();
            if (masInfoEquipo.style.display === 'block') {
                updateMasInfoEquipoText();
            }
            masInfoEquipo.style.display = 'none';
            btnMasInfoEquipo.style.display = 'inline';
            btnMasInfoEquipo.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
        };
        btnMasInfoEquipo.style.cursor = 'pointer';
    }
});

// === Mostrar/ocultar los ítems extra de objetivo_especifico ===
document.addEventListener('DOMContentLoaded', function() {
    const btnMasInfoObj = document.getElementById('btn-mas-info-objetivos');
    const masInfoObj = document.getElementById('mas-info-objetivos');
    if (btnMasInfoObj && masInfoObj) {
        function updateMasInfoObjText() {
            const t = translations[currentLanguage];
            if (t && t.vision_mision && t.vision_mision.objetivo_especifico && t.vision_mision.objetivo_especifico.items) {
                const items = t.vision_mision.objetivo_especifico.items.slice(3); // Mostrar desde el cuarto ítem
                masInfoObj.innerHTML = '<ul>' + items.map(item => `<li>${item}</li>`).join('') + '</ul>';
            }
        }
        masInfoObj.style.display = 'none';
        btnMasInfoObj.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
        btnMasInfoObj.addEventListener('click', function toggleInfoObj() {
            if (masInfoObj.style.display === 'none' || masInfoObj.style.display === '') {
                updateMasInfoObjText();
                masInfoObj.style.display = 'block';
                btnMasInfoObj.textContent = currentLanguage === 'es' ? '- info...' : '- info...';
            } else {
                masInfoObj.style.display = 'none';
                btnMasInfoObj.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
            }
        });
        const originalUpdateTexts = window.updateTexts;
        window.updateTexts = function() {
            originalUpdateTexts();
            if (masInfoObj.style.display === 'block') {
                updateMasInfoObjText();
            }
            masInfoObj.style.display = 'none';
            btnMasInfoObj.style.display = 'inline';
            btnMasInfoObj.textContent = currentLanguage === 'es' ? '+ info...' : '+ info...';
        };
        btnMasInfoObj.style.cursor = 'pointer';
    }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card-flip').forEach(card => {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
  });
});

// Función corregida para actualizar títulos de card-back
function updateCardBackTitles() {
    const cardBacks = document.querySelectorAll('.card-back[data-i18n-title]');
    
    cardBacks.forEach(cardBack => {
        const titleKey = cardBack.getAttribute('data-i18n-title');
        const keys = titleKey.split('.');
        let value = translations[currentLanguage];
        
        // Navegar por el objeto de traducciones usando las claves anidadas
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Traducción no encontrada para: ${titleKey}`);
                return;
            }
        }
        
        // Establecer el título si se encontró la traducción
        if (typeof value === 'string') {
            cardBack.setAttribute('data-title', value);
        }
    });
}

// También cargar al inicio
document.addEventListener('DOMContentLoaded', function() {
    loadQuienesSomosList();
    updateCardBackTitles();
});

// Forzar actualización de la lista de objetivos específicos
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const objetivoEspecificoList = document.querySelector('#vision-mision-objetivos ul') || document.querySelector('.objetivo-especifico-row ul');
        if (objetivoEspecificoList && translations[currentLanguage]) {
            const t = translations[currentLanguage];
            objetivoEspecificoList.innerHTML = t.vision_mision.objetivo_especifico.items
                .slice(0, 3)
                .map(item => `<li>${item}</li>`)
                .join('');
        }
    }, 100);
});