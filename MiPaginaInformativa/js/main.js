// Lógica para abrir y cerrar los módulos desplegables (Acordeón)
function toggleAccordion(headerElement) {
    const item = headerElement.parentElement;
    
    // Si se desea que solo haya uno abierto a la vez, se desmarca esta sección:
    /*
    document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
    });
    */

    // Alternar el estado activo del módulo cliqueado
    item.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal de Introducción a la Ingeniería de Sistemas cargado correctamente.");
});