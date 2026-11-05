// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // URL pública de la web. Sin `base`: un repo <usuario>.github.io se sirve desde la raíz.
  site: 'https://alexjt6.github.io',

  // Enrutado por idioma: español en / (sin prefijo) e inglés en /en/
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Content-Security-Policy: Astro añade un <meta> en cada página con los hashes de
  // sus scripts y estilos. Solo se permiten recursos de la propia web: si algún día
  // se usa algo externo (fuente, script, imagen…), hay que permitirlo aquí.
  security: {
    csp: {
      directives: [
        "default-src 'self'", // por defecto, solo archivos de esta web
        "object-src 'none'", // sin plugins (<object>, <embed>)
        "base-uri 'self'", // nadie puede cambiar la URL base de los enlaces
        "form-action 'none'", // la web no tiene formularios
      ],
    },
  },
});
