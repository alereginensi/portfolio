/* ============================================================
   Translations
   ============================================================ */
const translations = {
    es: {
        'nav.home':        'inicio',
        'nav.experience':  'experiencia',
        'nav.stack':       'stack',
        'nav.projects':    'proyectos',
        'nav.freelance':   'freelance',
        'nav.contact':     'contacto',

        'hero.badge':          'Actualmente en GSS Facility Services',
        'hero.value':          'Desarrollo aplicaciones completas en entornos productivos reales, con foco en backend sólido, APIs escalables y bases de datos relacionales.',
        'hero.cta.projects':   'Ver proyectos',
        'hero.cta.contact':    'Contacto',

        'section.experience':  'Experiencia',
        'section.about':       'Sobre mí',
        'section.stack':       'Stack',
        'section.projects':    'Proyectos',
        'section.freelance':     'Freelance',
        'section.contact':     'Contacto',

        'freelance.lead': 'Sitios web a medida por encargo: estructura, contenido y despliegue listos para producción.',
        'freelance.anto.title': 'Anto Beauty Art',
        'freelance.anto.desc': 'Web para estética y formación: servicios, cursos de micropigmentación y mentoría 1:1, con navegación clara y enlaces a contacto y WhatsApp.',
        'freelance.andrea.title': 'Andrea Zoé Fernández',
        'freelance.andrea.desc': 'Web profesional de constelaciones familiares: enfoque, beneficios, sesiones y talleres, testimonios y contacto por WhatsApp.',
        'freelance.cta': 'Visitar sitio',
        'freelance.anto.slug': 'anto-beauty-art',
        'freelance.andrea.slug': 'andreazoef',
        'freelance.badge.web': 'Web',
        'freelance.badge.client': 'Cliente',
        'freelance.link.anto.aria': 'Abrir el sitio web de Anto Beauty Art',
        'freelance.link.andrea.aria': 'Abrir el sitio web de Andrea Zoé Fernández',

        'exp.period':      '2026 – Presente',
        'exp.badge':       'Actual',
        'exp.description': 'Desarrollo de aplicaciones internas para la gestión operativa de la empresa. Responsabilidad completa sobre features desde el diseño hasta el despliegue, trabajando directamente sobre código en producción.',
        'exp.li1': 'Diseño e implementación de plataforma full stack para gestión de incidentes, bitácoras y control de tareas operativas',
        'exp.li2': 'Desarrollo de APIs REST consumidas por roles diferenciados: administradores, supervisores y personal operativo',
        'exp.li3': 'Modelado e implementación de base de datos relacional en PostgreSQL, incluyendo optimización de consultas',
        'exp.li4': 'Gestión del flujo de trabajo con Git (feature branches, revisiones de código)',
        'exp.li5': 'Deploy y mantenimiento de aplicaciones en Railway',

        'about.p1': 'Soy Full Stack Developer con experiencia real en entornos productivos. Me formé en <strong>Holberton School</strong> y <strong>Globant University</strong>, donde construí bases sólidas en Java, C, Python y desarrollo web.',
        'about.p2': 'Hoy trabajo en <strong>GSS Facility Services</strong> desarrollando aplicaciones completas: desde el modelado de la base de datos hasta la interfaz de usuario. Me muevo bien tanto en backend (Java, Node.js, APIs REST) como en frontend (React, JavaScript).',
        'about.p3': 'Busco un equipo donde pueda seguir creciendo técnicamente, trabajar en problemas reales y aportar desde el primer día.',
        'about.h1.title': 'Producción real',
        'about.h1.desc':  'Código en entornos productivos, no proyectos de práctica',
        'about.h2.title': 'Full Stack',
        'about.h2.desc':  'Backend sólido + frontend funcional y limpio',
        'about.h3.title': 'Git workflow',
        'about.h3.desc':  'Feature branches, colaboración en equipo',
        'about.h4.title': 'Bases de datos',
        'about.h4.desc':  'Diseño relacional, SQL, PostgreSQL, MySQL',

        'proj.featured': '◆ Proyecto destacado',
        'proj1.p1': '<strong>Problema:</strong> GSS Facility Services manejaba su operación —incidentes, bitácoras, tareas, comunicación— de forma dispersa, sin trazabilidad ni centralización.',
        'proj1.p2': '<strong>Solución:</strong> Plataforma full stack con roles diferenciados (administrador, supervisor, operativo), seguimiento de incidentes, control de bitácoras y persistencia en PostgreSQL. Diseñada para escalar con el crecimiento de la empresa.',
        'proj1.p3': '<strong>Mi rol:</strong> Diseño de base de datos, desarrollo del backend (APIs REST), implementación del frontend y despliegue en Railway.',
        'proj2.p1': '<strong>Problema:</strong> El proceso de licitaciones públicas es complejo y poco accesible para pequeñas empresas.',
        'proj2.p2': 'Plataforma web que simplifica la búsqueda, seguimiento y gestión del proceso de licitaciones, reduciendo la barrera de entrada.',
        'proj3.p1': 'Automatización de servidores, CI/CD pipelines y debugging de web stacks en entornos Linux. Scripts para gestión y monitoreo de infraestructura.',

        'gh.top':      'ver en github',
        'contact.lead': 'Estoy abierto a nuevas oportunidades. Si tenés un proyecto interesante o querés charlar sobre tecnología, escribime.',
        'footer.built': 'Diseñado y desarrollado por',
    },
    en: {
        'nav.home':        'home',
        'nav.experience':  'experience',
        'nav.stack':       'stack',
        'nav.projects':    'projects',
        'nav.freelance':   'freelance',
        'nav.contact':     'contact',

        'hero.badge':          'Currently at GSS Facility Services',
        'hero.value':          'I build complete applications in real production environments, focused on solid backend, scalable APIs and relational databases.',
        'hero.cta.projects':   'View projects',
        'hero.cta.contact':    'Contact',

        'section.experience':  'Experience',
        'section.about':       'About me',
        'section.stack':       'Stack',
        'section.projects':    'Projects',
        'section.freelance':     'Freelance',
        'section.contact':     'Contact',

        'freelance.lead': 'Custom client sites: structure, content and production-ready deployment.',
        'freelance.anto.title': 'Anto Beauty Art',
        'freelance.anto.desc': 'Beauty and training site: services, micropigmentation courses and 1:1 mentorship, with clear navigation and contact/WhatsApp CTAs.',
        'freelance.andrea.title': 'Andrea Zoé Fernández',
        'freelance.andrea.desc': 'Professional systemic constellation therapy site: positioning, benefits, sessions and workshops, testimonials and WhatsApp contact.',
        'freelance.cta': 'Visit site',
        'freelance.anto.slug': 'anto-beauty-art',
        'freelance.andrea.slug': 'andreazoef',
        'freelance.badge.web': 'Web',
        'freelance.badge.client': 'Client',
        'freelance.link.anto.aria': 'Open Anto Beauty Art website',
        'freelance.link.andrea.aria': 'Open Andrea Zoé Fernández website',

        'exp.period':      '2026 – Present',
        'exp.badge':       'Current',
        'exp.description': 'Development of internal applications for the company\'s operational management. Full ownership of features from design to deployment, working directly on production code.',
        'exp.li1': 'Design and implementation of a full stack platform for incident tracking, logbooks and operational task management',
        'exp.li2': 'Development of REST APIs consumed by different roles: administrators, supervisors and operational staff',
        'exp.li3': 'Relational database modeling and implementation in PostgreSQL, including query optimization',
        'exp.li4': 'Git workflow management (feature branches, code reviews)',
        'exp.li5': 'Application deployment and maintenance on Railway',

        'about.p1': 'I\'m a Full Stack Developer with real experience in production environments. I trained at <strong>Holberton School</strong> and <strong>Globant University</strong>, where I built solid foundations in Java, C, Python and web development.',
        'about.p2': 'Today I work at <strong>GSS Facility Services</strong> building complete applications: from database modeling to user interfaces. I\'m comfortable on both backend (Java, Node.js, REST APIs) and frontend (React, JavaScript).',
        'about.p3': 'I\'m looking for a team where I can keep growing technically, work on real problems and contribute from day one.',
        'about.h1.title': 'Real production',
        'about.h1.desc':  'Code in production environments, not practice projects',
        'about.h2.title': 'Full Stack',
        'about.h2.desc':  'Solid backend + clean and functional frontend',
        'about.h3.title': 'Git workflow',
        'about.h3.desc':  'Feature branches, team collaboration',
        'about.h4.title': 'Databases',
        'about.h4.desc':  'Relational design, SQL, PostgreSQL, MySQL',

        'proj.featured': '◆ Featured project',
        'proj1.p1': '<strong>Problem:</strong> GSS Facility Services managed its operations —incidents, logbooks, tasks, communication— in a scattered way, without traceability or centralization.',
        'proj1.p2': '<strong>Solution:</strong> Full stack platform with differentiated roles (admin, supervisor, operative), incident tracking, logbook control and PostgreSQL persistence. Designed to scale with the company\'s growth.',
        'proj1.p3': '<strong>My role:</strong> Database design, backend development (REST APIs), frontend implementation and deployment on Railway.',
        'proj2.p1': '<strong>Problem:</strong> The public bidding process is complex and barely accessible for small businesses.',
        'proj2.p2': 'Web platform that simplifies the search, tracking and management of the bidding process, lowering the entry barrier.',
        'proj3.p1': 'Server automation, CI/CD pipelines and web stack debugging in Linux environments. Scripts for infrastructure management and monitoring.',

        'gh.top':      'view on github',
        'contact.lead': 'I\'m open to new opportunities. If you have an interesting project or just want to talk about tech, reach out.',
        'footer.built': 'Designed and developed by',
    }
};

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       Theme Toggle (BB8)
       checked = dark mode (night scene) — default
       unchecked = light mode (day scene)
       ============================================================ */
    const themeCheckbox = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeCheckbox) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeCheckbox.checked = false;
        } else {
            themeCheckbox.checked = true; // dark by default
        }

        themeCheckbox.addEventListener('change', () => {
            if (themeCheckbox.checked) {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    /* ============================================================
       Language Toggle
       ============================================================ */
    let currentLang = localStorage.getItem('lang') || 'es';

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const text = translations[lang][key];
            if (text !== undefined) {
                el.innerHTML = text;
                if (el.dataset.text !== undefined) {
                    el.dataset.text = text.toUpperCase();
                }
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.dataset.i18nAria;
            const text = translations[lang][key];
            if (text !== undefined) {
                el.setAttribute('aria-label', text);
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    // Apply saved or default language on load
    applyLang(currentLang);

    /* ============================================================
       Mobile Navigation
       ============================================================ */
    const hamburger = document.querySelector('.hamburger');
    const navUv     = document.querySelector('.nav-uv');
    const navbar    = document.querySelector('.navbar');

    function openMenu()  { navUv.classList.add('nav-active'); }
    function closeMenu() { navUv.classList.remove('nav-active'); }

    if (hamburger && navUv) {
        /* Set CSS var so panel drops exactly below navbar */
        function setNavbarHeight() {
            if (navbar) {
                document.documentElement.style.setProperty(
                    '--navbar-h', navbar.offsetHeight + 'px'
                );
            }
        }
        setNavbarHeight();
        window.addEventListener('resize', setNavbarHeight);

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navUv.classList.toggle('nav-active');
        });

        /* Close when a section link is tapped — let href fire first */
        navUv.querySelectorAll('.nav-uv-btn').forEach(a => {
            a.addEventListener('click', () => setTimeout(closeMenu, 80));
        });

        /* Close when clicking outside the panel or hamburger */
        document.addEventListener('click', (e) => {
            if (!navUv.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }

    /* ============================================================
       Active nav link on scroll
       ============================================================ */
    const sections   = document.querySelectorAll('section[id]');
    const navBtns    = document.querySelectorAll('.nav-uv-btn');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 110;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight) {
                navBtns.forEach(a => a.classList.remove('active'));
                const active = document.querySelector(`.nav-uv-btn[href="#${section.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    /* ============================================================
       Scroll Reveal (IntersectionObserver)
       ============================================================ */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger siblings slightly
                const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
                const index = siblings.indexOf(entry.target);
                const delay = Math.min(index * 80, 300);

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ============================================================
       Terminal card — copy email to clipboard
       ============================================================ */
    const emailCopyBtn = document.getElementById('email-copy-btn');
    if (emailCopyBtn) {
        emailCopyBtn.addEventListener('click', async () => {
            const email = 'reginensia@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
            } catch {
                const ta = document.createElement('textarea');
                ta.value = email;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            emailCopyBtn.classList.add('tc-copied');
            setTimeout(() => emailCopyBtn.classList.remove('tc-copied'), 2000);
        });
    }

});
