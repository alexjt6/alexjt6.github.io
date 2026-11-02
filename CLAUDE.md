# CLAUDE.md — Portafolio personal (alexjt6.github.io)

Guía para trabajar en este repositorio. Léela antes de hacer cambios.

## Objetivo

Portafolio personal para conseguir trabajo o prácticas y mostrar proyectos.
Debe poder ampliarse con el tiempo (sobre todo añadiendo proyectos).

El autor es estudiante de 2.º de DAM (nivel intermedio) y es quien revisa
el código: tiene que poder entenderlo todo.

## Stack

- [Astro](https://docs.astro.build) 7 + TypeScript (modo `strict`).
- CSS propio con variables (sin frameworks CSS).
- Web estática desplegada en GitHub Pages con GitHub Actions
  (workflow oficial de Astro: `withastro/action`).
- Node ≥ 22.23.4 (lo exige Astro 7).

## Comandos

| Comando           | Qué hace                                               |
| ----------------- | ------------------------------------------------------ |
| `npm install`     | Instala dependencias                                   |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321`      |
| `npm run build`   | Comprueba tipos (`astro check`) y genera `dist/`       |
| `npm run preview` | Sirve `dist/` en local para probar el build            |

## Configuración

- `site: 'https://alexjt6.github.io'`, **sin** `base` (el repo se llama
  `<usuario>.github.io`, así que se sirve desde la raíz).
- i18n con el enrutado nativo de Astro: español por defecto en `/`,
  inglés en `/en/` (`prefixDefaultLocale: false`).

## Estructura (objetivo final)

```
src/
  pages/            index.astro (es) y en/index.astro (en): solo renderizan Home
  layouts/          BaseLayout.astro: <html>, <head>, cabecera y pie
  components/       Header, Footer, LanguagePicker, ThemeToggle, Home
    sections/       Hero, Projects, ProjectCard, About, Cv, Contact
  i18n/             es.ts, en.ts (textos) e index.ts (helpers)
  data/profile.ts   Datos personales que no se traducen (enlaces, email…)
  content/projects/ Un .md por proyecto (_plantilla.md no se publica)
  content.config.ts Esquema de la colección de proyectos
  styles/global.css Variables, reset y estilos base
public/             Archivos estáticos (favicon, CV en PDF…)
```

Una sola página por idioma con secciones y menú de anclas:
`#projects`, `#about`, `#cv`, `#contact`.

## Datos personales

Confirmados por el autor. En la fase 3 pasan a `src/data/profile.ts` (datos)
y a `src/i18n/` (textos traducibles).

| Dato      | Valor                                            |
| --------- | ------------------------------------------------ |
| Nombre    | Alex Jiménez Teba                                |
| Titular   | es: Estudiante de DAM · en: Multiplatform App Development (DAM) student |
| Bio corta | Ver abajo                                        |
| GitHub    | https://github.com/alexjt6                       |
| LinkedIn  | https://www.linkedin.com/in/alexjt607/           |
| Email     | alexjt607@gmail.com                              |
| Foto      | No                                               |
| Formación | 2.º de DAM (centro y años: **pendiente**)        |
| CV en PDF | **Pendiente** (botón preparado pero deshabilitado) |

Bio corta:

- **es:** Estudiante de 2.º de DAM en prácticas de desarrollo de software.
  Busco oportunidades para seguir aprendiendo y aportar en proyectos reales.
- **en:** 2nd-year Multiplatform App Development (DAM) student, currently doing
  a software development internship. I'm looking for opportunities to keep
  learning and contribute to real projects.

- **No mostrar una lista de tecnologías personales** por ahora ("Sobre mí"
  solo lleva la formación). Las tecnologías de cada proyecto sí aparecen en
  su tarjeta.

## Convenciones

- **Simplicidad ante todo.** Código legible antes que ingenioso. Nada de
  abstracciones "por si acaso".
- **Sin dependencias innecesarias.** Antes de añadir una, justificarla.
- **Comentarios breves en español**, solo donde aporten (el "por qué").
- **Textos solo en `src/i18n/`.** Ningún texto visible escrito a mano en los
  componentes. `en.ts` está tipado con la forma de `es.ts`, así TypeScript
  avisa si falta una traducción.
- **Datos personales en `src/data/profile.ts`.** Si falta un dato, usar un
  marcador visible `[RELLENAR: …]`. Nunca inventar datos.
- **Proyectos:** un `.md` por proyecto en `src/content/projects/` con
  `description: { es, en }` en el frontmatter. Los archivos que empiezan por
  `_` se ignoran (plantilla, borradores).
- **CSS:** variables en `global.css`; estilos de cada componente en su
  `<style>` (Astro los aplica solo a ese componente). Móvil primero.
- **Tema claro/oscuro:** respeta la preferencia del sistema; el selector
  guarda la elección en `localStorage`.
- **Accesibilidad:** HTML semántico, contraste AA, foco visible, navegación
  por teclado, `prefers-reduced-motion`.
- **Rendimiento:** sin JS salvo el imprescindible (tema), sin fuentes externas.

## Avisos de Astro 7

- Todas las etiquetas deben cerrarse; un HTML mal anidado (p. ej. `<div>`
  dentro de `<p>`) da error al compilar.
- `compressHTML` es `'jsx'` por defecto: puede desaparecer el espacio entre
  elementos inline. Si pasa, añadir `{" "}`.
- Colecciones: `src/content.config.ts`, `glob` de `astro/loaders`
  y `z` de `astro/zod`.

## Forma de trabajar

- Idioma: commits, PRs y explicaciones en español, claros y concisos.
- Trabajo por fases, **una rama y una PR por fase**, cada rama sale de `main`
  cuando la PR anterior está mergeada:
  1. `fase-1-base` — Proyecto Astro base + despliegue a GitHub Pages
  2. `fase-2-layout-i18n` — Layout, i18n (es/en) y tema claro/oscuro
  3. `fase-3-secciones` — Secciones y contenido
  4. `fase-4-pulido` — SEO básico, accesibilidad, rendimiento, README
- Cada PR explica **qué se hizo, por qué y cómo comprobarlo**.
- **No hacer merge**: lo hace el autor tras revisar y aprobar.
- Antes de subir: `npm run build` sin errores.
- Si falta un dato o hay que tomar una decisión, **preguntar** en vez de
  inventar.
