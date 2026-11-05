// CV en PDF: ruta del archivo de cada idioma y si está subido.
// Lo usan la sección CV y el botón "Ver CV" del inicio: así la comprobación está en un solo sitio.
import { existsSync } from 'node:fs';
import { profile } from './profile';
import type { Lang } from '../i18n';

export function getCv(lang: Lang) {
  const url = profile.cv[lang];
  // Se comprueba al compilar. El build se ejecuta desde la raíz del proyecto,
  // por eso la ruta empieza por "public"
  const available = existsSync(`public${url}`);
  return { url, available };
}
