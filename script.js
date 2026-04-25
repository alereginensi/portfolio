/* ============================================================
   Translations
   ============================================================ */
const translations = {
    es: {
        'nav.home':        'inicio',
        'nav.about':       'sobre mí',
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
        'freelance.anto.slug': 'antobeautyart.com',
        'freelance.andrea.slug': 'andreazoefernandez.com',
        'freelance.badge.web': 'Web',
        'freelance.badge.client': 'Cliente',
        'freelance.link.anto.aria': 'Abrir el sitio web de Anto Beauty Art',
        'freelance.link.andrea.aria': 'Abrir el sitio web de Andrea Zoé Fernández',

        'exp.period':      '2026 – Presente',
        'exp.badge':       'Actual',
        'exp.description': 'Desarrollo de aplicaciones internas para la gestión operativa de la empresa. Responsabilidad completa sobre features desde el diseño hasta el despliegue, trabajando directamente sobre código en producción.',
        'exp.li1': 'Diseño e implementación de plataforma <strong>full stack</strong> para gestión de <strong>incidentes</strong>, <strong>bitácoras</strong> y control de tareas operativas',
        'exp.li2': 'Desarrollo de <strong>APIs REST</strong> consumidas por roles diferenciados: <strong>administradores</strong>, <strong>supervisores</strong> y personal operativo',
        'exp.li3': 'Modelado e implementación de base de datos relacional en <strong>PostgreSQL</strong>, incluyendo <strong>optimización</strong> de consultas',
        'exp.li4': 'Gestión del flujo de trabajo con <strong>Git</strong> (<strong>feature branches</strong>, revisiones de código)',
        'exp.li5': '<strong>Deploy</strong> y mantenimiento de aplicaciones en <strong>Railway</strong>',
        'exp.li6': 'Comunicación y soporte a usuarios <strong>no técnicos</strong>: requisitos <strong>claros</strong>, feedback <strong>rápido</strong> y <strong>capacitación</strong>',
        'exp.li7': 'Entrega en <strong>tiempos cortos</strong>: <strong>priorización</strong>, trade-offs y resolución de incidentes en <strong>producción</strong>',
        'exp.li8': 'Diseño de <strong>UX</strong> y flujos para un equipo de <strong>~50 personas</strong> y más de <strong>800 usuarios activos</strong>',

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
        'proj1.p1': '<strong>Problema:</strong> La operación interna se resolvía con herramientas sueltas (tickets, bitácora, logística, limpieza, RRHH, reportes) sin un flujo unificado, historial confiable ni permisos por rol.',
        'proj1.p2': '<strong>Solución:</strong> Portal interno full stack con módulos (tickets, bitácora, logística/agenda, operaciones, notificaciones) y control de acceso. API en Next.js (App Router) con autenticación JWT, capa de DB que soporta SQLite local y PostgreSQL en producción, y automatizaciones/cron para procesos externos (ej. Mitrabajo con Playwright).',
        'proj1.p3': '<strong>Mi rol:</strong> End-to-end: diseño de arquitectura, modelado y migraciones DB, APIs, UI, manejo de edge/runtime (middleware), integración Cloudinary/archivos, worker separado para cron pesado, Docker y despliegue en Railway.',
        'proj2.p1': '<strong>Problema:</strong> El proceso de licitaciones públicas es complejo y poco accesible para pequeñas empresas.',
        'proj2.p2': 'Plataforma web que simplifica la búsqueda, seguimiento y gestión del proceso de licitaciones, reduciendo la barrera de entrada.',
        'proj3.p1': 'Automatización de servidores, CI/CD pipelines y debugging de web stacks en entornos Linux. Scripts para gestión y monitoreo de infraestructura.',
        'proj4.p1': '<strong>Resumen:</strong> Monorepo de curso con proyectos y ejercicios: Java (básico→avanzado), Maven, JDBC, JPA/Hibernate, Spring Boot y SQL/MySQL.',
        'proj4.p2': 'Incluye prácticas con testing (JUnit/Mockito) y apps web (Thymeleaf + Security). Ideal para mostrar progreso y amplitud de stack en Java.',

        'gh.top':      'ver en github',
        'contact.lead': 'Estoy abierto a nuevas oportunidades. Si tenés un proyecto interesante o querés charlar sobre tecnología, escribime.',
        'footer.built': 'Diseñado y desarrollado por',
    },
    en: {
        'nav.home':        'home',
        'nav.about':       'about',
        'nav.experience':  'experience',
        'nav.stack':       'stack',
        'nav.projects':    'projects',
        'nav.freelance':   'freelance',
        'nav.contact':     'contact',

        'hero.badge':          'Currently at GSS Facility Services',
        'hero.value':          'I build end-to-end applications in real production environments, with a focus on robust backend architecture, scalable APIs, and relational database design.',
        'hero.cta.projects':   'View projects',
        'hero.cta.contact':    'Contact',

        'section.experience':  'Experience',
        'section.about':       'About me',
        'section.stack':       'Stack',
        'section.projects':    'Projects',
        'section.freelance':     'Freelance',
        'section.contact':     'Contact',

        'freelance.lead': 'Custom websites built on request: from design and content to deployment.',
        'freelance.anto.title': 'Anto Beauty Art',
        'freelance.anto.desc': 'Beauty and training website: services, micropigmentation courses, and 1:1 mentorship — with clear navigation and CTAs linking to contact and WhatsApp.',
        'freelance.andrea.title': 'Andrea Zoé Fernández',
        'freelance.andrea.desc': 'Professional family constellations website: value proposition, session modalities, workshops, testimonials, and WhatsApp contact.',
        'freelance.cta': 'Visit site',
        'freelance.anto.slug': 'antobeautyart.com',
        'freelance.andrea.slug': 'andreazoefernandez.com',
        'freelance.badge.web': 'Web',
        'freelance.badge.client': 'Client',
        'freelance.link.anto.aria': 'Open Anto Beauty Art website',
        'freelance.link.andrea.aria': 'Open Andrea Zoé Fernández website',

        'exp.period':      '2026 – Present',
        'exp.badge':       'Current',
        'exp.description': 'Development of internal applications for the company\'s operational management. Full ownership of features from design to deployment, working directly on production code.',
        'exp.li1': 'Designed and implemented a <strong>full-stack</strong> platform for <strong>incident</strong> tracking, <strong>activity logs</strong>, and <strong>operational</strong> task management',
        'exp.li2': 'Built <strong>REST APIs</strong> consumed by role-based users: <strong>administrators</strong>, <strong>supervisors</strong>, and <strong>field staff</strong>',
        'exp.li3': 'Modeled and implemented a relational database in <strong>PostgreSQL</strong>, including <strong>query optimization</strong>',
        'exp.li4': 'Managed <strong>Git</strong> workflow using <strong>feature branches</strong> and <strong>code reviews</strong>',
        'exp.li5': 'Deployed and maintained applications on <strong>Railway</strong>',
        'exp.li6': 'Liaised with <strong>non-technical</strong> users: gathering <strong>clear</strong> requirements, delivering <strong>fast</strong> feedback cycles, and providing <strong>onboarding</strong>',
        'exp.li7': 'Delivered under <strong>tight timelines</strong>: <strong>prioritization</strong>, trade-off decisions, and <strong>live</strong> incident resolution',
        'exp.li8': 'Designed <strong>UX</strong> flows and interfaces for a team of <strong>~50 staff</strong> and <strong>over 800</strong> active users',

        'about.p1': 'I\'m a Full Stack Developer with hands-on experience in production environments. I trained at <strong>Holberton School</strong> and <strong>Globant University</strong>, where I built a strong foundation in Java, C, Python, and web development.',
        'about.p2': 'I currently work at <strong>GSS Facility Services</strong>, developing full-stack applications — from database modeling to user interface. I\'m equally comfortable on the backend (Java, Node.js, REST APIs) and the frontend (React, JavaScript).',
        'about.p3': 'I\'m looking for a team where I can keep growing technically, tackle real-world problems, and contribute from day one.',
        'about.h1.title': 'Production-grade',
        'about.h1.desc':  'Real codebase experience, not just side projects',
        'about.h2.title': 'Full Stack',
        'about.h2.desc':  'Solid backend paired with clean, functional frontend',
        'about.h3.title': 'Git workflow',
        'about.h3.desc':  'Feature branches and team-based code collaboration',
        'about.h4.title': 'Databases',
        'about.h4.desc':  'Relational design, SQL, PostgreSQL, MySQL',

        'proj.featured': '◆ Featured project',
        'proj1.p1': '<strong>Problem:</strong> GSS Facility Services managed its operations — incidents, logs, tasks, and internal communication — in a scattered way, with no traceability or centralized system.',
        'proj1.p2': '<strong>Solution:</strong> A full-stack platform with role-based access (administrator, supervisor, field operator), incident tracking, activity log management, and PostgreSQL persistence. Built to scale alongside the company\'s growth.',
        'proj1.p3': '<strong>My role:</strong> Database design, backend development (REST APIs), frontend implementation, and deployment on Railway.',
        'proj2.p1': '<strong>Problem:</strong> Public procurement processes are complex and largely inaccessible to small businesses.',
        'proj2.p2': 'A web platform that streamlines the search, tracking, and management of public tenders — lowering the barrier to entry for smaller organizations.',
        'proj3.p1': 'Server automation, CI/CD pipeline setup, and web stack debugging on Linux environments. Scripting for infrastructure management and monitoring.',
        'proj4.p1': '<strong>Summary:</strong> Course monorepo featuring projects and exercises covering Java (beginner to advanced), Maven, JDBC, JPA/Hibernate, Spring Boot, and SQL/MySQL.',
        'proj4.p2': 'Includes testing practices with JUnit/Mockito and web applications using Thymeleaf and Spring Security. Demonstrates depth and breadth across the Java ecosystem.',

        'gh.top':      'view on github',
        'contact.lead': 'I\'m open to new opportunities. If you have an interesting project or just want to talk tech, feel free to reach out.',
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
    const navBtns = [...document.querySelectorAll('.nav-uv-btn')];
    const navSlider = document.querySelector('.nav-uv-slider');
    const sectionById = new Map(
        [...document.querySelectorAll('section[id]')].map(s => [s.id, s])
    );

    const linked = navBtns
        .map(a => {
            const id = (a.getAttribute('href') || '').replace('#', '');
            return { a, id, section: sectionById.get(id) };
        })
        .filter(x => Boolean(x.section));

    function setActiveById(id) {
        navBtns.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }

    function moveNavSliderTo(el) {
        if (!navUv || !navSlider || !el) return;

        const navRect = navUv.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const x = elRect.left - navRect.left;
        const w = elRect.width;

        navSlider.style.transform = `translateX(${x}px)`;
        navSlider.style.width = `${w}px`;
        navSlider.style.opacity = '1';
    }

    function updateActiveLink() {
        if (!linked.length) return;

        const scrollPos = window.scrollY + 110;
        const docH = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight
        );
        const atBottom = window.scrollY + window.innerHeight >= docH - 2;

        if (atBottom) {
            setActiveById(linked[linked.length - 1].id);
            moveNavSliderTo(linked[linked.length - 1].a);
            return;
        }

        let current = linked[0].id;
        for (const { id, section } of linked) {
            if (section.offsetTop <= scrollPos) current = id;
        }
        setActiveById(current);

        const activeEl = navBtns.find(a => a.classList.contains('active'));
        moveNavSliderTo(activeEl);
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink, { passive: true });
    updateActiveLink();

    if (navUv && navSlider) {
        navBtns.forEach(a => {
            a.addEventListener('mouseenter', () => moveNavSliderTo(a));
        });
        navUv.addEventListener('mouseleave', () => {
            const activeEl = navBtns.find(a => a.classList.contains('active'));
            moveNavSliderTo(activeEl);
        });
    }

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
       Email (anti-grabber): build at runtime
       ============================================================ */
    const email = `${'reginensi' + 'a'}@${'gmail.com'}`;

    // Fill terminal card and mailto links without hardcoding in HTML
    document.querySelectorAll('.tc-cmd').forEach(el => {
        el.textContent = '';
        el.setAttribute('data-cmd', email);
    });
    document.querySelectorAll('a.js-email-link').forEach(a => {
        a.setAttribute('href', `mailto:${email}`);
    });

    /* ============================================================
       Terminal card — copy email to clipboard
       ============================================================ */
    const emailCopyBtn = document.getElementById('email-copy-btn');
    if (emailCopyBtn) {
        emailCopyBtn.addEventListener('click', async () => {
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
