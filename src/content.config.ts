// Colecciones de contenido: Astro lee los .md y comprueba su frontmatter con este esquema.
// Si un proyecto tiene un campo mal escrito o falta uno obligatorio, el build falla y avisa.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // Lee los .md de la carpeta. El patrón [^_]* ignora los que empiezan por "_" (borradores).
  loader: glob({ base: './src/content/projects', pattern: '**/[^_]*.md' }),
  // El esquema es una función para poder usar `image()`: comprueba que la imagen existe
  // y permite a Astro optimizarla (tamaño, formato webp…).
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.object({
        es: z.string(),
        en: z.string(),
      }),
      technologies: z.array(z.string()),
      image: image().optional(), // captura, ruta relativa al .md (p. ej. ./mi-proyecto.png)
      // Enlaces: solo http(s). Así un "javascript:..." no pasa la validación.
      repo: z.url({ protocol: /^https?$/ }).optional(), // enlace al código (opcional)
      demo: z.url({ protocol: /^https?$/ }).optional(), // enlace a una demo (opcional)
      order: z.number().default(100), // los números más bajos salen primero
    }),
});

export const collections = { projects };
