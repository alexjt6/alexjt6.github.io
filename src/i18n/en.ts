import type { Translations } from './es';

// Textos en inglés. Al estar tipado como `Translations`,
// TypeScript da error si falta o sobra alguna clave respecto a es.ts.
export const en: Translations = {
  site: {
    title: 'Portfolio',
    description:
      'Portfolio of Alex Jiménez Teba, a Multiplatform App Development (DAM) student and software developer working with Java, Python and TypeScript.',
    ogImageAlt: 'Alex Jiménez Teba · Multiplatform App Development (DAM) student · Software developer · Java, Python, TypeScript',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Sections',
    projects: 'Projects',
    experience: 'Experience',
    technologies: 'Technologies',
    about: 'About me',
    cv: 'CV',
    contact: 'Contact',
  },
  theme: {
    label: 'Dark mode',
  },
  hero: {
    headline: 'Multiplatform App Development (DAM) student · Software developer',
    bio: "Currently doing a software development internship. I'm looking for opportunities to keep learning and contribute to real projects.",
  },
  projects: {
    empty: 'Coming soon: my projects will be added here.',
    technologies: 'Technologies',
    imageAlt: 'Screenshot of',
    code: 'Code',
    demo: 'Demo',
  },
  experience: {
    technologies: 'Technologies',
    items: [
      {
        role: 'Junior Full Stack Developer (internship)',
        company: 'Tech Impulse',
        dates: 'September 2026 – present',
        logo: 'tech-impulse.webp',
        tasks: [
          'Web application development with Laravel and admin panel development with Filament.',
          'Website development with WordPress and Astro.',
          'Database management.',
        ],
        technologies: ['Laravel', 'Filament', 'PHP', 'WordPress', 'Astro'],
      },
      {
        role: 'Systems Maintenance',
        company: 'Escola del Bosc',
        dates: 'January 2025 – June 2025',
        logo: 'escola-del-bosc.webp',
        tasks: [
          'Assembly, configuration and optimisation of computer equipment and operating systems.',
          "Maintenance and monitoring of the local network and the school's central server.",
          'Management and supervision of data backup policies.',
        ],
        technologies: [],
      },
    ],
  },
  technologies: {
    categories: {
      languages: 'Programming languages',
      web: 'Web',
      databases: 'Databases',
      frameworks: 'Frameworks',
      tools: 'Tools',
    },
  },
  about: {
    intro:
      "I enjoy programming and sports. My goal is to establish myself as a full stack developer (frontend and backend): after this degree I plan to study Web Application Development (DAW) to complete that profile and, in the long term, a Bachelor's Degree in Computer Engineering.",
    softSkillsTitle: 'Soft skills',
    softSkills: ['Self-directed learning', 'Teamwork', 'Problem solving', 'Communication'],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native', flag: 'es' },
      { name: 'Catalan', level: 'Native', flag: 'es-ct' },
      { name: 'English', level: 'B1', flag: 'gb' },
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: 'Higher Technician Degree in Multiplatform Application Development (DAM)',
        center: 'Institut Sabadell',
        years: '2025 – 2027',
        note: 'Higher vocational training. Currently in the 2nd year.',
      },
      {
        degree: 'Technician Degree in Microcomputer Systems and Networks (SMX)',
        center: 'Institut Sabadell',
        years: '2023 – 2025',
        note: 'Intermediate vocational training.',
      },
    ],
    coursesTitle: 'Additional training',
    courses: [
      {
        name: 'Introduction to AI-Assisted Development: Programming with Agents',
        provider: 'BIG school',
        date: 'June 2026',
      },
      {
        name: 'Introduction to AI-Assisted Development: From Zero to Production',
        provider: 'BIG school',
        date: 'March 2026',
      },
    ],
  },
  cv: {
    text: 'You can view my resume as a PDF.',
    soon: 'Coming soon',
    newTab: '(opens in a new tab)',
    label: 'CV in English (PDF)',
  },
  contact: {
    text: 'Do you have a job offer, or want to get in touch? Send me a message.',
    email: 'Send an email',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    copy: 'Copy',
    copied: 'Copied',
    copyError: 'Error',
    copyLabel: 'Copy email address',
  },
  notFound: {
    title: 'Page not found',
    text: "The page you're looking for doesn't exist or has been moved.",
    back: 'Back to home',
  },
};
