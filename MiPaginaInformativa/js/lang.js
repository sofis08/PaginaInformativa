const translations = {
    es: {
        nav_home: "Inicio",
        nav_modules: "Módulos",
        nav_cv: "Hojas de Vida",
        nav_prompts: "Prompts",
        nav_contact: "Contacto",
        hero_title: "Introducción a la Ingeniería de Sistemas",
        hero_desc: "Explora los fundamentos del pensamiento sistémico, el contexto empresarial y la evolución de las TIC.",
        hero_btn: "Ver Módulos Académicos",
        mod_title: "Módulos Académicos",
        mod_subtitle: "Haz clic en cada módulo para desplegar y consultar sus temas detallados.",
        cv_title: "Hojas de Vida del Equipo",
        cv_subtitle: "Conoce los perfiles profesionales de las autoras del proyecto. Puedes visualizar o descargar sus Hojas de Vida.",
        prompt_title: "Prompts e Instrucciones de Desarrollo",
        prompt_subtitle: "Registro de indicaciones utilizadas para estructurar este portal informativo.",
        contact_title: "Contáctanos",
        contact_subtitle: "Envíanos tus dudas, quejas, sugerencias o comentarios.",
        contact_btn: "Enviar Mensaje"
    },
    en: {
        nav_home: "Home",
        nav_modules: "Modules",
        nav_cv: "Resumes",
        nav_prompts: "Prompts",
        nav_contact: "Contact Us",
        hero_title: "Introduction to Systems Engineering",
        hero_desc: "Explore the fundamentals of systems thinking, business context, and ICT evolution.",
        hero_btn: "View Academic Modules",
        mod_title: "Academic Modules",
        mod_subtitle: "Click on each module to expand and review detailed topics.",
        cv_title: "Team Resumes",
        cv_subtitle: "Meet the professional profiles of the project authors. You can view or download their resumes.",
        prompt_title: "Prompts & Instructions",
        prompt_subtitle: "Record of prompts used to structure this information portal.",
        contact_title: "Contact Us",
        contact_subtitle: "Send us your questions, feedback, or suggestions.",
        contact_btn: "Send Message"
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    document.getElementById('btn-lang').textContent = currentLang === 'es' ? 'ES / EN' : 'EN / ES';
}