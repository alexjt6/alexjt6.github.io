# Portafolio de Alex Jiménez Teba

Web personal para mostrar mis proyectos y buscar prácticas o empleo.

🌐 **https://alexjt6.github.io** (español) · **https://alexjt6.github.io/en/** (inglés)

Hecha con [Astro](https://docs.astro.build) 7 + TypeScript y CSS propio.
Es una web estática: no tiene backend ni base de datos.
La fuente de los títulos, [Space Grotesk](https://fontsource.org/fonts/space-grotesk),
se instala con npm (Fontsource) y se sirve desde la propia web.

## Requisitos

- [Node.js](https://nodejs.org) **22.23.4 o superior** (en Windows, instala la
  versión LTS desde la web oficial). Compruébalo con `node --version`.
- Git.
- Recomendado: VS Code con la extensión oficial de Astro.

## Comandos

Desde la carpeta del proyecto:

| Comando           | Qué hace                                                       |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez o si cambian)    |
| `npm run dev`     | Servidor de desarrollo en http://localhost:4321 (se recarga solo) |
| `npm run build`   | Comprueba los tipos y genera la web final en `dist/`           |
| `npm run preview` | Sirve `dist/` en local para probar el resultado del build      |

## Estructura

```
src/
  pages/              Rutas: index.astro (/), en/index.astro (/en/) y 404.astro
  layouts/            BaseLayout.astro: <html>, <head> (SEO), cabecera y pie
  components/         Header, Footer, LanguagePicker, ThemeToggle, Section, Home
    sections/         Hero, Projects, ProjectCard, Experience, Technologies, About, Cv, Contact
  i18n/               es.ts y en.ts (todos los textos) e index.ts (getI18n)
  data/profile.ts     Datos fijos (nombre, iniciales, email, enlaces, CV, tecnologías)
  data/cv.ts          getCv(): ruta del CV de cada idioma y si el PDF está subido
  content/projects/   Un archivo .md por proyecto (la carpeta se crea con el primero)
  content.config.ts   Campos que debe tener cada proyecto
  styles/global.css   Colores, degradados, espaciados, estilos base y animaciones compartidas
public/               Archivos que se copian tal cual (favicon, imágenes de vista previa, robots.txt, CV…)
  logos/              Logos de las tecnologías (Devicon)
  flags/              Banderas de los idiomas (flag-icons)
```

## Cómo editar el contenido

### Textos (en los dos idiomas)

Todos los textos visibles están en `src/i18n/es.ts` y `src/i18n/en.ts`.
`en.ts` debe tener exactamente las mismas claves que `es.ts`: si falta alguna,
`npm run build` da error y te dice cuál.

### Datos personales

En `src/data/profile.ts`: nombre, iniciales (logotipo de la cabecera y monograma del Inicio
si no hay foto), email, enlaces, CV y tecnologías por categoría (`technologies`).

### Añadir una tecnología (con su logo)

1. Busca su logo en [Devicon](https://devicon.dev) y descarga la versión "original" en SVG.
2. Guárdalo en `public/logos/`, p. ej. `public/logos/docker.svg`.
3. En `src/data/profile.ts`, añade `{ name: 'Docker', logo: 'docker' }` en su categoría.

El nombre (`name`) se muestra al lado del logo. Todo lo demás se actualiza solo: la cinta en
movimiento, el número de cada filtro y la tarjeta. Los proyectos sin captura también usan estos
logos: su tarjeta muestra el de la primera tecnología de su lista que tenga logo.

La sección Tecnologías (`Technologies.astro`) tiene tres partes:

- **Cinta en movimiento:** dos filas con los nombres que se desplazan en sentidos opuestos y se
  paran al pasar el ratón. Es decorativa: con "reducir movimiento" no se muestra.
- **Filtros por categoría** (Todas, Lenguajes, Web…): al cambiar de filtro, las tarjetas se
  recolocan con una animación (View Transitions API). Sin JavaScript no se muestran los filtros
  y se ven todas las tecnologías.
- **Rejilla de tarjetas:** aparecen una tras otra al llegar con el scroll y, con ratón, un brillo
  de color sigue al puntero e ilumina también los bordes de las tarjetas cercanas.

### Bloques que se ocultan si están vacíos

Así la web publicada nunca enseña huecos ni marcadores. Para que aparezcan, rellénalos:

| Bloque | Dónde | Qué poner |
| --- | --- | --- |
| Etiqueta de estado del inicio (con punto verde) | `hero.status` en `es.ts` y `en.ts` | Un texto corto, p. ej. `'Abierto a nuevas oportunidades'` |
| Experiencia (y su entrada en el menú) | `experience.items` en `es.ts` y `en.ts` | `{ role, company, dates, tasks: [...], technologies: [...] }` (hay ejemplos comentados). Basta con `role` y `company`: `dates: ''`, `tasks: []` y `technologies: []` no se muestran |
| Texto de "Sobre mí" | `about.intro` en `es.ts` y `en.ts` | Un párrafo |
| Formación complementaria | `about.courses` en `es.ts` y `en.ts` | `{ name, provider, date, url }` (`url` es opcional) |

### Formación, idiomas y habilidades blandas

En `src/i18n/es.ts` y `src/i18n/en.ts`, dentro de `about`: `education` (un bloque
`{ degree, center, years, note }` por estudio, del más reciente al más antiguo),
`languages` (`{ name, level, flag }`; `flag` es el archivo de `public/flags/` sin `.svg`)
y `softSkills`.

### Añadir un proyecto

1. Crea el archivo `src/content/projects/<nombre>.md`, p. ej. `gestor-tareas.md`.
   Los archivos que empiezan por `_` no se publican, así que puedes usarlos como borradores.
2. Empieza el archivo con este bloque y rellénalo. Los campos marcados como opcionales
   se pueden borrar:

   ```yaml
   ---
   title: Nombre del proyecto
   description:
     es: Descripción corta en español (1–2 frases).
     en: Short description in English (1–2 sentences).
   technologies: [Java, MySQL] # opcional: si no se pone, la tarjeta sale sin etiquetas
   image: ./gestor-tareas.png # opcional: captura en la misma carpeta (mejor 16:9)
   repo: https://github.com/alexjt6/gestor-tareas # opcional (el repo debe ser público)
   demo: https://ejemplo.com # opcional
   inProgress: true # opcional: muestra la etiqueta "En desarrollo"
   order: 1 # opcional: los números más bajos salen primero
   ---
   ```

   Si el título no es un nombre propio y hay que traducirlo, se pone uno por idioma
   (ver `gestor-equipos.md`):

   ```yaml
   title:
     es: Gestor de equipos deportivos
     en: Sports team manager
   ```

   Astro optimiza la captura sola. **No enlaces repos privados**: un visitante
   vería un error 404. Haz el repo público antes o deja `repo` sin poner.
3. Ejecuta `npm run build`: si falta un campo o hay una URL mal escrita, te avisa.
4. Sube el cambio a `main`.

Mientras no haya proyectos, la web muestra "Próximamente" y el build avisa de
que la carpeta no existe o está vacía. Es normal.

### Poner el CV

Sube los PDF a `public/` con estos nombres exactos:

| Archivo | Dónde se muestra |
| --- | --- |
| `public/cv-es.pdf` | Web en español (`/`) |
| `public/cv-en.pdf` | Web en inglés (`/en/`) |

No hay que tocar código: al compilar, `getCv()` (`src/data/cv.ts`) comprueba si el archivo
existe. Si existe, se activan el botón de la sección CV y el de "Ver CV" del inicio; si no,
la sección muestra "Próximamente" y el inicio no enseña ese botón. Las rutas están en
`cv` dentro de `src/data/profile.ts`. Los botones abren el PDF en una pestaña nueva.

**El PDF es público** (cualquiera lo descarga y Google lo indexa): sin teléfono ni
dirección. Revísalo antes de subirlo. Si se sube algo sensible por error, borrarlo después
**no basta**: queda en el historial de git. Hay que reescribir el historial, hacer force push
y pedir a GitHub Support que borre las copias en caché (guía de GitHub
[Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)).

### Foto del inicio

En escritorio, a la derecha del nombre sale la foto (con un cuadro de color girado detrás) o,
si no hay foto, un cuadrado con las iniciales **AJT**.
Para poner o cambiar la foto, guárdala como `src/assets/foto.jpg` (también vale
`.jpeg`, `.png`, `.webp` o `.avif`; crea la carpeta `assets` si no existe).

No hay que tocar código: al compilar, `Hero.astro` busca ese archivo. Si existe, muestra la
foto; si no, las iniciales. Para cambiarla, sustituye el archivo; para volver a AJT, bórralo.

- Astro la recorta a cuadrado (por el centro), la reduce a 768×768 como máximo y la
  convierte a webp. Si es más pequeña no la amplía: el cuadrado mide lo que su lado corto.
  Mejor que sea cuadrada y de al menos 768×768 para que se vea nítida.
- Las fotos `.heic` del iPhone no valen: expórtala antes como JPG.
- Como el monograma, en móvil y tablet no se muestra.

### Favicon e imagen de vista previa

- `public/favicon.svg`: icono de la pestaña (iniciales AJT). Es un SVG: se puede editar como texto.
- `public/apple-touch-icon.png` (180×180): icono al añadir la web a la pantalla de inicio del iPhone.
- `public/og-es.png` y `public/og-en.png` (1200×630): imagen que aparece al compartir el enlace
  en LinkedIn, WhatsApp, X… Si cambias el nombre o el titular, hay que regenerarlas
  (mismo tamaño y nombre de archivo).

### Cambiar colores

Están como variables al principio de `src/styles/global.css`.
`light-dark(claro, oscuro)` define el color de cada tema.

- `--color-accent` (azul) y `--color-accent-2` (violeta) forman el degradado de los títulos
  destacados, las líneas y las viñetas (`--gradient-text`).
- `--gradient-button` es el degradado de los botones principales y del logotipo. Es igual en
  los dos temas porque lleva texto blanco encima: si lo cambias, comprueba que el blanco se lea bien.

### Animaciones

Casi todas son de CSS (con algún script pequeño) y **se desactivan si el sistema tiene activado
"reducir movimiento"** (Windows: Configuración → Accesibilidad → Efectos visuales → Efectos de animación).

| Animación | Dónde |
| --- | --- |
| Entrada del inicio (los elementos aparecen uno tras otro) y fondo con manchas de color que flotan | `Hero.astro` |
| Aparición al hacer scroll | Cualquier elemento con el atributo `data-reveal`. Script en `BaseLayout.astro`, estilos al final de `global.css` |
| Cambio de tema con un círculo que crece desde el botón | `ThemeToggle.astro` (View Transitions API; sin ella, cambio directo) |
| Barra de progreso de lectura bajo la cabecera | `Header.astro` (solo CSS, `animation-timeline: scroll()`; donde no hay soporte, no se muestra) |
| Tecnologías: cinta en movimiento, filtros animados (View Transitions API), tarjetas que aparecen una tras otra y brillo que sigue al ratón | `Technologies.astro` |
| Punto que late en la etiqueta "En desarrollo" de los proyectos | `ProjectCard.astro` |
| Efectos al pasar el ratón (botones, tarjetas, logos) | En el `<style>` de cada componente |

Para que otro elemento aparezca al hacer scroll, basta con añadirle `data-reveal`:
`<div data-reveal>…</div>`.

## Cómo funciona

- **Idiomas:** enrutado nativo de Astro (`i18n` en `astro.config.mjs`). Español en `/`
  e inglés en `/en/`. Cada componente obtiene su idioma con
  `getI18n(Astro.currentLocale)`.
- **Tema claro/oscuro:** por defecto sigue al sistema. El botón guarda la elección en
  `localStorage` y un pequeño script en el `<head>` la aplica antes de pintar la página.
- **Aparición al hacer scroll:** un `IntersectionObserver` avisa cuando un elemento con
  `data-reveal` entra en pantalla y le pone la clase que lo anima. Solo se ocultan al cargar
  los que están por debajo de la pantalla: si el script fallara, todo seguiría visible.
- **Numeración de secciones (01, 02…):** un contador de CSS (`counter-increment`), así que se
  ajusta solo si se oculta una sección.
- **Copiar email (Contacto):** el botón usa la API del portapapeles (`navigator.clipboard`).
  Empieza oculto (`hidden`) y el script solo lo muestra si el navegador tiene esa API; sin
  JavaScript queda el enlace `mailto:`. Los textos de cada estado le llegan en atributos `data-*`.
- **Proyectos:** son una *content collection*. Astro lee los `.md` y comprueba sus campos
  con el esquema de `src/content.config.ts`.
- **SEO:** título y descripción por idioma, `canonical`, `hreflang`, Open Graph y Twitter (con imagen) y `robots.txt`.
- **Seguridad:** Content-Security-Policy generada por Astro (`security` en `astro.config.mjs`):
  el navegador solo carga scripts, estilos e imágenes de la propia web.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml` (workflow oficial de Astro):
compila la web y la publica en GitHub Pages. Tarda alrededor de 1 minuto.

- El estado se ve en la pestaña **Actions** del repositorio.
- Si el build falla, no se publica nada y sigue online la versión anterior.
- Configuración necesaria (ya hecha): **Settings → Pages → Source: GitHub Actions**.

## Créditos

- Logos de tecnologías: [Devicon](https://github.com/devicons/devicon) (licencia MIT,
  ver `public/logos/LICENSE`). Los iconos de GitHub y LinkedIn de Contacto usan sus trazados.
- Fuente de los títulos: [Space Grotesk](https://github.com/floriankarsten/space-grotesk)
  (SIL Open Font License 1.1), instalada con [Fontsource](https://fontsource.org).
- Banderas: [flag-icons](https://github.com/lipis/flag-icons) (licencia MIT, ver `public/flags/LICENSE`).
- Las marcas y logos pertenecen a sus respectivos propietarios.

## Licencia

© 2026 Alex Jiménez Teba. **Todos los derechos reservados** (ver [`LICENSE`](LICENSE)):
se puede ver el código, pero no copiarlo ni reutilizarlo sin permiso.
Excepción: los logos y banderas de terceros mantienen su licencia MIT (ver Créditos).
