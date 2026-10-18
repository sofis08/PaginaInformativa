// Importación de módulos oficiales de Firebase (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración de tu proyecto en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCx5WxtOuylxWsVERkqVCxr1aZAIPo5ecU",
  authDomain: "sitio-web-55ab3.firebaseapp.com",
  projectId: "sitio-web-55ab3",
  storageBucket: "sitio-web-55ab3.firebasestorage.app",
  messagingSenderId: "809644621511",
  appId: "1:809644621511:web:06ffd777407d55640488e2"
};

// Inicializar la app y la base de datos Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencias a los elementos del HTML
const contactForm = document.getElementById('contact-form');
const listaComentarios = document.getElementById('listaComentarios');

// 1. GUARDAR EN BASE DE DATOS AL ENVIAR FORMULARIO
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Detiene el envío por defecto del navegador (Evita error 405 y recargas)

    const nombre = document.getElementById('contact-nombre').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const tipo = document.getElementById('contact-tipo').value;
    const mensaje = document.getElementById('contact-mensaje').value.trim();

    if (!nombre || !mensaje) return;

    try {
      await addDoc(collection(db, "comentarios"), {
        nombre: nombre,
        email: email,
        tipo: tipo,
        mensaje: mensaje,
        fecha: new Date().toLocaleString('es-ES')
      });

      contactForm.reset();
      alert("¡Gracias! Tu mensaje ha sido enviado correctamente.");
    } catch (error) {
      console.error("Error al guardar en la base de datos: ", error);
      alert("Hubo un error al enviar tu comentario.");
    }
  });
}

// 2. LEER Y MOSTRAR EN TIEMPO REAL EN EL HTML
if (listaComentarios) {
  onSnapshot(collection(db, "comentarios"), (snapshot) => {
    listaComentarios.innerHTML = ""; // Limpiar el texto "Cargando..."

    if (snapshot.empty) {
      listaComentarios.innerHTML = "<p style='text-align: center;'>Aún no hay comentarios publicados.</p>";
      return;
    }

    snapshot.forEach((doc) => {
      const data = doc.data();

      const item = document.createElement('div');
      item.className = 'comentario-item';
      item.style.cssText = "background: #ffffff; border-left: 4px solid #4B1F6F; padding: 15px; margin-bottom: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
      item.innerHTML = `
        <div class="comentario-header" style="display: flex; justify-content: space-between; font-size: 0.9em; color: #555; margin-bottom: 6px;">
          <strong>${data.nombre} <span style="color: #4B1F6F;">(${data.tipo || 'Mensaje'})</span></strong>
          <span><small>${data.fecha || ''}</small></span>
        </div>
        <p class="comentario-texto" style="margin: 0; color: #333;">${data.mensaje}</p>
      `;

      listaComentarios.appendChild(item);
    });
  }, (error) => {
    console.error("Error al leer de Firebase: ", error);
    listaComentarios.innerHTML = "<p style='text-align: center; color: red;'>Error al conectar con la base de datos. Verifica las Reglas en la consola de Firebase.</p>";
  });
}