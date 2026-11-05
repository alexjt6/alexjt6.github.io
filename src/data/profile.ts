// Datos personales que no dependen del idioma.
// Los textos traducibles (titular, bio, formación…) están en src/i18n/.

/** Una tecnología: su nombre y el archivo de su logo en public/logos/ (sin ".svg"). */
interface Tech {
  name: string;
  logo: string;
}

interface Profile {
  name: string;
  initials: string;
  email: string;
  github: string;
  linkedin: string;
  /**
   * Rutas de los CV dentro de public/, uno por idioma.
   * Si el archivo no existe, el botón sale deshabilitado ("Próximamente").
   */
  cv: {
    es: string;
    en: string;
  };
  /** Tecnologías por categoría (el nombre de cada categoría está en i18n). */
  technologies: {
    languages: Tech[];
    web: Tech[];
    databases: Tech[];
    frameworks: Tech[];
    tools: Tech[];
  };
}

export const profile: Profile = {
  name: 'Alex Jiménez Teba',
  initials: 'AJT',
  email: 'alexjt607@gmail.com',
  github: 'https://github.com/alexjt6',
  linkedin: 'https://www.linkedin.com/in/alexjt607/',
  cv: {
    es: '/cv-es.pdf',
    en: '/cv-en.pdf',
  },
  // Logos de Devicon (licencia MIT, ver public/logos/LICENSE)
  technologies: {
    languages: [
      { name: 'Java', logo: 'java' },
      { name: 'Python', logo: 'python' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'PHP', logo: 'php' },
    ],
    web: [
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css3' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
    ],
    databases: [
      { name: 'MySQL', logo: 'mysql' },
      { name: 'MariaDB', logo: 'mariadb' },
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'MongoDB', logo: 'mongodb' },
    ],
    frameworks: [
      { name: 'React', logo: 'react' },
      { name: 'Laravel', logo: 'laravel' },
      { name: 'Astro', logo: 'astro' },
    ],
    tools: [
      { name: 'Git', logo: 'git' },
      { name: 'VS Code', logo: 'vscode' },
      { name: 'JetBrains', logo: 'jetbrains' },
      { name: 'Eclipse', logo: 'eclipse' },
      { name: 'Android Studio', logo: 'androidstudio' },
    ],
  },
};
