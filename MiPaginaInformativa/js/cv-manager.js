// Función para simular agregar participantes a la interfaz
function agregarParticipante(event) {
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const rol = document.getElementById('rol').value;
    const perfil = document.getElementById('perfil').value;

    // Crear la tarjeta en el HTML
    const cvContainer = document.getElementById('cv-container');
    
    const newCard = document.createElement('div');
    newCard.classList.add('cv-card');
    
    newCard.innerHTML = `
        <h3>${nombre}</h3>
        <span class="role-badge">${rol}</span>
        <p>${perfil}</p>
        <div class="cv-actions">
            <a href="assets/docs/hoja_de_vida_ejemplo.pdf" download class="btn btn-download">Descargar CV (PDF)</a>
        </div>
    `;

    // Insertar en la lista
    cvContainer.appendChild(newCard);

    // Limpiar formulario
    document.getElementById('cv-form').reset();
    alert("Participante agregado exitosamente.");
}