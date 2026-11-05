// Textos en español (idioma por defecto).
// La forma de este objeto define el tipo `Translations`: en.ts debe tener las mismas claves.

// Forma de cada experiencia y de cada curso. Con `as Job[]` / `as Course[]`,
// TypeScript sabe qué campos tienen los elementos aunque la lista esté vacía.
interface Job {
  role: string;
  company: string;
  dates: string;
  logo: string; // archivo del logo en public/companies/ (con extensión); '' = sin logo
  tasks: string[];
  technologies: string[];
}

interface Course {
  name: string;
  provider: string; // quién lo imparte
  date: string;
  url?: string; // enlace al curso o al certificado (opcional)
}

export const es = {
  site: {
    title: 'Portafolio',
    description:
      'Portafolio de Alex Jiménez Teba, estudiante de DAM y desarrollador de software con Java, Python y TypeScript.',
    // Texto alternativo de la imagen de vista previa (public/og-es.png)
    ogImageAlt: 'Alex Jiménez Teba · Estudiante de DAM · Desarrollador de software · Java, Python, TypeScript',
  },
  skipLink: 'Saltar al contenido',
  nav: {
    label: 'Secciones',
    projects: 'Proyectos',
    experience: 'Experiencia',
    technologies: 'Tecnologías',
    about: 'Sobre mí',
    cv: 'CV',
    contact: 'Contacto',
  },
  theme: {
    label: 'Modo oscuro',
  },
  hero: {
    headline: 'Estudiante de DAM · Desarrollador de software',
    bio: 'Actualmente en prácticas de desarrollo de software. Busco oportunidades para seguir aprendiendo y aportar en proyectos reales.',
    // Botones del inicio. El del CV solo aparece si el PDF de este idioma está subido.
    projects: 'Ver proyectos',
    cv: 'Ver CV',
    contact: 'Contactar',
  },
  projects: {
    empty: 'Próximamente: aquí añadiré mis proyectos.',
    technologies: 'Tecnologías',
    imageAlt: 'Captura de',
    code: 'Código',
    demo: 'Demo',
  },
  experience: {
    technologies: 'Tecnologías',
    // Lista vacía = la sección "Experiencia" no se muestra (ni en el menú).
    // Solo role y company son necesarios: dates/logo '' y tasks/technologies [] no se pintan.
    // Ejemplo mínimo:
    // { role: 'Prácticas de desarrollo de software', company: 'Empresa', dates: '', logo: '', tasks: [], technologies: [] }
    // Ejemplo completo:
    // { role: 'Prácticas de desarrollo de software', company: 'Empresa', dates: 'sept. 2026 – actualidad',
    //   logo: 'empresa.webp', tasks: ['Tarea 1', 'Tarea 2'], technologies: ['Java', 'MySQL'] }
    items: [
      {
        role: 'Desarrollador Full Stack Junior (prácticas)',
        company: 'Tech Impulse',
        dates: 'septiembre 2026 – actualidad',
        logo: 'tech-impulse.webp',
        tasks: [
          'Desarrollo de aplicaciones web con Laravel y de paneles de administración con Filament.',
          'Desarrollo de sitios web con WordPress y Astro.',
          'Gestión de bases de datos PostgreSQL y MySQL, incluidas migraciones con Laravel.',
        ],
        technologies: ['Laravel', 'Filament', 'PHP', 'PostgreSQL', 'MySQL', 'WordPress', 'Astro'],
      },
      {
        role: 'Mantenimiento de Sistemas',
        company: 'Escola del Bosc',
        dates: 'enero 2025 – junio 2025',
        logo: 'escola-del-bosc.webp',
        tasks: [
          'Montaje, configuración y optimización de equipos y sistemas operativos.',
          'Mantenimiento y monitorización de la red local y del servidor central del centro.',
          'Gestión y supervisión de las políticas de copias de seguridad de datos.',
        ],
        technologies: [],
      },
    ] as Job[],
  },
  technologies: {
    // Nombre de cada categoría (las tecnologías y sus logos están en src/data/profile.ts)
    categories: {
      languages: 'Lenguajes',
      web: 'Web',
      databases: 'Bases de datos',
      frameworks: 'Frameworks',
      tools: 'Herramientas',
    },
  },
  about: {
    // Texto personal. Vacío = no se muestra.
    intro:
      'Me gustan la programación y el deporte. Mi objetivo es consolidarme como desarrollador full stack (frontend y backend): cuando termine el ciclo quiero cursar el CFGS de Desarrollo de Aplicaciones Web (DAW) para completar ese perfil y, a largo plazo, el Grado en Ingeniería Informática.',
    softSkillsTitle: 'Habilidades blandas',
    softSkills: ['Aprendizaje autónomo', 'Trabajo en equipo', 'Resolución de problemas', 'Comunicación'],
    languagesTitle: 'Idiomas',
    // flag: archivo de la bandera en public/flags/ (sin ".svg"); es-ct = senyera
    languages: [
      { name: 'Español', level: 'Nativo', flag: 'es' },
      { name: 'Catalán', level: 'Nativo', flag: 'es-ct' },
      { name: 'Inglés', level: 'B1', flag: 'gb' },
    ],
    educationTitle: 'Formación',
    // Estudios, del más reciente al más antiguo. Para añadir uno, copia un bloque { … }.
    education: [
      {
        degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
        center: 'Institut Sabadell',
        years: '2025 – 2027',
        note: 'Ciclo de grado superior. Cursando 2.º curso.',
      },
      {
        degree: 'Técnico en Sistemas Microinformáticos y Redes (SMX)',
        center: 'Institut Sabadell',
        years: '2023 – 2025',
        note: 'Ciclo de grado medio.',
      },
    ],
    coursesTitle: 'Formación complementaria',
    // Cursos y certificados, del más reciente al más antiguo. Lista vacía = el bloque no se muestra.
    courses: [
      {
        name: 'Iniciación al Desarrollo con IA: Programa con Agentes',
        provider: 'BIG school',
        date: 'junio 2026',
      },
      {
        name: 'Iniciación al Desarrollo con IA: de 0 a Producción',
        provider: 'BIG school',
        date: 'marzo 2026',
      },
    ] as Course[],
  },
  cv: {
    text: 'Puedes consultar mi currículum en PDF.',
    soon: 'Próximamente',
    // Texto oculto para lectores de pantalla: avisa de que el enlace abre otra pestaña
    newTab: '(se abre en una pestaña nueva)',
    // Texto del botón. Cada web muestra solo el CV de su idioma.
    label: 'CV en español (PDF)',
  },
  contact: {
    text: '¿Tienes una oferta de empleo, o quieres comentarme algo? Escríbeme.',
    // Tooltip (title) del email y nombre accesible (aria-label y title) de los iconos
    email: 'Enviar un email',
    github: 'Mi perfil de GitHub',
    linkedin: 'Mi perfil de LinkedIn',
    // Botón para copiar el email: texto visible en cada estado y nombre para lectores de pantalla
    copy: 'Copiar',
    copied: 'Copiado',
    copyError: 'Error',
    copyLabel: 'Copiar el email',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o se ha movido.',
    back: 'Volver al inicio',
  },
};

export type Translations = typeof es;
