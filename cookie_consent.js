document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-cookies');
    const modalContent = modal.querySelector('.modal-contenido');
    const textContent = modal.querySelector('.modal-text-content');
    const btnAceptar = modal.querySelector('.btn-aceptar');
    const btnRechazar = modal.querySelector('.btn-rechazar');
    const btnManage = modal.querySelector('.btn-manage-preferences');

    // --- Funcionalidad Mostrar/Ocultar Modal ---
    const showModal = () => {
        if(modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    };

    const hideModal = () => {
        if(modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    };

    // Función para manejar la aceptación de cookies
    function handleAcceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        hideModal();
        
        // Marcar la casilla de privacidad en el formulario si existe
        const privacidadCheckbox = document.querySelector('input[name="privacidad"]');
        if (privacidadCheckbox) {
            privacidadCheckbox.checked = true;
        }
        
        // Mostrar el botón de WhatsApp
        const whatsappButton = document.querySelector('.whatsapp-float');
        if (whatsappButton) {
            whatsappButton.classList.remove('hidden');
        }

        // Mostrar todas las secciones
        const hiddenSections = document.querySelectorAll('.hidden-section');
        hiddenSections.forEach(section => {
            section.classList.remove('hidden-section');
        });
    }

    // Función para manejar el rechazo de cookies
    function handleRejectCookies() {
        localStorage.setItem('cookiesAccepted', 'false');
        hideModal();
        
        // Desmarcar la casilla de privacidad en el formulario si existe
        const privacidadCheckbox = document.querySelector('input[name="privacidad"]');
        if (privacidadCheckbox) {
            privacidadCheckbox.checked = false;
        }
        
        // Mantener oculto el botón de WhatsApp
        const whatsappButton = document.querySelector('.whatsapp-float');
        if (whatsappButton) {
            whatsappButton.classList.add('hidden');
        }

        // Ocultar secciones después de "Quiénes Somos"
        const allSections = document.querySelectorAll('.section');
        let hideStartIndex = -1;
        
        allSections.forEach((section, index) => {
            if (section.id === 'quienes-somos') {
                hideStartIndex = index + 1;
            }
        });

        allSections.forEach((section, index) => {
            if (hideStartIndex !== -1 && index >= hideStartIndex) {
                section.classList.add('hidden-section');
            }
        });
    }

    // --- Event Listeners para los botones del Modal ---
    if(btnAceptar) {
        btnAceptar.addEventListener('click', handleAcceptCookies);
    }
    if(btnRechazar) {
        btnRechazar.addEventListener('click', handleRejectCookies);
    }
    if(btnManage) {
        btnManage.addEventListener('click', () => {
            console.log('Gestionar preferencias clickeado.');
        });
    }

    // Verificar el estado de las cookies al cargar la página
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    // Si no hay preferencia guardada, mostrar el modal
    if (!cookiesAccepted) {
        showModal();
    } else if (cookiesAccepted === 'true') {
        if (whatsappButton) {
            whatsappButton.classList.remove('hidden');
        }
        // Mostrar todas las secciones
        const hiddenSections = document.querySelectorAll('.hidden-section');
        hiddenSections.forEach(section => {
            section.classList.remove('hidden-section');
        });
    } else if (cookiesAccepted === 'false') {
        if (whatsappButton) {
            whatsappButton.classList.add('hidden');
        }
        // Ocultar secciones después de "Quiénes Somos"
        const allSections = document.querySelectorAll('.section');
        let hideStartIndex = -1;
        
        allSections.forEach((section, index) => {
            if (section.id === 'quienes-somos') {
                hideStartIndex = index + 1;
            }
        });

        allSections.forEach((section, index) => {
            if (hideStartIndex !== -1 && index >= hideStartIndex) {
                section.classList.add('hidden-section');
            }
        });
    }
}); 