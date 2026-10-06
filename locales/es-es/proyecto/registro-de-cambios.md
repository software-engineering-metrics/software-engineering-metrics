# Registro de cambios

Cambios notables en el libro y sus herramientas. Las entradas más recientes
están arriba. Las fechas usan ISO 8601 (AAAA-MM-DD).

## [Unreleased]

### Changed

- Neerlandés (`nl-nl`): traducidos los títulos y slugs en inglés que quedaban de los temas 9.0, 9.3 y 9.4
  (`bijlagen`, `controlelijsten`, `sjablonen`).
- Galés (`cy-001`, `cy-gb`): terminología alineada con TermCymru: `risg` (riesgo, en lugar de
  `perygl`, con concordancia de género), `cyfnewidiad` (compensación), `dangosydd rhagfynegi` y
  `dangosydd ôl-fynegi` (indicador adelantado y rezagado, en lugar de `hwyrfrydig`), `cynhwysedd`
  (capacidad), `dosraniad` (distribución), `cydberthynas` (correlación), `allbwn` para producción en
  el tema 1.3 y `cyfradd gadael staff` (rotación de personal). Se renombraron cuatro slugs de temas para que coincidan.
- Sitio: actualizado `@lilydesignsystem/svelte-picker-bar` a 0.2.0, que añade un selector de
  búsqueda a la barra de cabecera; envía a la búsqueda existente del sitio `/?<query>`.
- Añadido `scripts/generate-sitemap.mjs`, que se ejecuta al final de `pnpm build` y
  escribe `sitemap.xml` a partir de las páginas prerrenderizadas (solo URL canónicas de local,
  sin duplicados por los alias de dos letras) para que la línea `Sitemap:` de
  `robots.txt` se resuelva.
- `AGENTS.md` es ahora un índice corto; los detalles pasaron a `AGENTS/layout.md`, `style.md`,
  `locales.md` y `workflow.md`.
- Barrido de documentación: actualizados `AGENTS.md`, `index.md`, el texto de locales del
  README generado, `spec/index.md`, `spec/locales.md`, y el `AGENTS.md` y `README.md` del sitio
  para 27 locales, los nombres de directorio de sección por local y las nuevas herramientas;
  añadido `CLAUDE.md` (un puntero a `AGENTS.md`); corregidas las rutas `docs/` obsoletas de las dos
  habilidades de agente y hecho de `skills/` la copia canónica de `.claude/skills/`
  (comprobado por las pruebas).
- Añadidos `llms.txt` y `llms.json` (un índice para agentes de IA de cada local y tema
  servidos) a `static/` del sitio, generados por `tools/gen_llms.py`
  (`just llms`) y comprobados por las pruebas.
- Página de inicio del sitio: la lista de casillas de las "nueve partes" es ahora una lista anidada de "Contenidos" de todas las
  partes y temas, y se eliminó la sección "La ley de Goodhart, en todas partes".
- Reformulado "chapter" a "topic" en toda la prosa del libro en cada
  local (por ejemplo "tema 2.1", "Temas de esta parte"), usando la palabra
  propia de cada idioma para tema (`tema`, `sujet`, `Thema`, `тема`, `主題`,
  etcétera), y en la especificación, el texto generado por las herramientas y las
  cadenas de interfaz del sitio. Los nombres de archivo, las URL y las claves de sección no cambian.
- Traducidos todos los nombres de directorios de sección bajo `locales/`: `chapters/` es
  ahora `topics/` (y su traducción en cada otro local, p. ej. `temas/`,
  `sujets/`, `themen/`), y el `examples/` de `es-001` es `ejemplos/`. Los nombres
  viven en `spec/section-names.json`; las herramientas, las pruebas y la sincronización de contenido del sitio
  los leen de ahí, y las URL del sitio no cambian.

### Changed

- Revisados los locales galeses (`cy-001`, `cy-gb`, mantenidos idénticos) contra la lista de
  terminología TermCymru del Gobierno de Gales: `llesiant` para bienestar,
  `cynhyrchiant` para productividad, `gwendid`/`gwendidau` para vulnerabilidad,
  `llywodraethiant` para gobernanza, `cydberthynas` para correlación,
  `ôl-groniad` para backlog (antes dejado en inglés), `cost a budd` para
  coste-beneficio, y `deallusrwydd artiffisial (AI)` en la primera mención de la IA
  en cada tema.

### Added

- Añadido el alemán (`de-001`) como el 26.º local completamente traducido: los 63
  temas con los sidecars `.locale-peer-id` correspondientes, idéntico en contenido a
  `de-de`. Conectado al sitio y servido en `/de-001/` (alias `/de/`).
- Añadido el portugués (`pt-001`) como el 25.º local completamente traducido: los 63
  temas con los sidecars `.locale-peer-id` correspondientes, idéntico en contenido a
  `pt-pt`. Conectado al sitio y servido en `/pt-001/` (alias `/pt/`).
- Completada una traducción manual completa, desde cero, de los 63 temas al
  urdu (`ur-001`, de derecha a izquierda), el 24.º local completamente traducido, con
  los sidecars `.locale-peer-id` correspondientes. Cada tema se tradujo directamente
  de la fuente en inglés, el índice (tema 9.7) reasigna cada enlace interno
  a su nombre de archivo en urdu, y el directorio de sección es `موضوعات`. Conectado al
  sitio y servido en `/ur-001/` (alias `/ur/`).
- Completada una traducción manual completa, desde cero, de los 63 temas al
  indonesio (`id-001`), con los sidecars `.locale-peer-id` correspondientes. No existía
  un local indonesio previo sobre el que construir, así que cada tema se tradujo
  directamente de la fuente en inglés, y el índice (tema 9.7) reasigna cada
  enlace interno a su nombre de archivo en indonesio. Conectado al sitio y servido en
  `/id-001/` (alias `/id/`).
- Añadidos el ruso (`ru-001`) y el chino (`zh-001`) como los locales completamente
  traducidos 21.º y 22.º: los 63 temas cada uno, con los sidecars
  `.locale-peer-id` correspondientes, idénticos en contenido a `ru-ru` y `zh-cn`.
  Conectados al sitio y servidos en `/ru-001/` y `/zh-001/` (alias
  `/ru/` y `/zh/`).
- Añadido el francés (`fr-001`) como el 20.º local completamente traducido: los 63
  temas con los sidecars `.locale-peer-id` correspondientes, idéntico en contenido a
  `fr-fr`. Conectado al sitio y servido en `/fr-001/` (alias `/fr/`).
- Añadido el bengalí (`bn-001`) como el 19.º local completamente traducido: los 63
  temas con los sidecars `.locale-peer-id` correspondientes, idéntico en contenido a
  `bn-bd`. Conectado al sitio y servido en `/bn-001/` (alias `/bn/`).
- Añadido el árabe (`ar-001`) como el 18.º local completamente traducido: los 63
  temas con los sidecars `.locale-peer-id` correspondientes, idéntico en contenido a
  `ar-eg`. Conectado al sitio y servido en `/ar-001/` (alias `/ar/`).
- Añadido el galés, Gran Bretaña (`cy-gb`) como el 17.º local completamente
  traducido: los 63 temas con los sidecars `.locale-peer-id` correspondientes, idéntico
  en contenido a `cy-001` (la misma relación que `hi-id` tiene con `hi-001`).
  Conectado a `SERVED_LOCALE_CODES` del sitio y servido en `/cy-gb/`.
- Completada una traducción manual completa, desde cero, de los 63 temas al
  neerlandés, Países Bajos (`nl-nl`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. No existía un local neerlandés previo sobre el que construir, así que
  cada tema se tradujo directamente de la fuente en inglés. El índice
  (tema 9.7) reasigna cada enlace interno de tema a su nombre de archivo en neerlandés,
  siguiendo el enfoque usado para `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` y `sv-se`. Aún no conectado
  al sitio.
- Completada una traducción manual completa, desde cero, de los 63 temas al
  sueco, Suecia (`sv-se`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. No existía un local sueco previo sobre el que construir, así que
  cada tema se tradujo directamente de la fuente en inglés. El índice
  (tema 9.7) reasigna cada enlace interno de tema a su nombre de archivo en sueco,
  siguiendo el enfoque usado para `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru` y `fr-fr`. Aún no conectado al
  sitio.
- Completada una traducción manual completa, desde cero, de los 63 temas al
  francés, Francia (`fr-fr`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. No existía un local francés previo sobre el que construir, así que
  cada tema se tradujo directamente de la fuente en inglés. El índice
  (tema 9.7) reasigna cada enlace interno de tema a su nombre de archivo en francés,
  siguiendo el enfoque usado para `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp` y `ru-ru`. Aún no conectado al sitio.
- Completada una traducción manual completa, desde cero, de los 63 temas al
  ruso, Rusia (`ru-ru`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. No existía un local ruso previo sobre el que construir, así que
  cada tema se tradujo directamente de la fuente en inglés. El índice
  (tema 9.7) reasigna cada enlace interno de tema a su nombre de archivo en ruso,
  siguiendo el enfoque usado para `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt` y `ja-jp`. Aún no conectado al sitio.
- Completada una traducción manual completa, desde cero, de los 63 temas al
  japonés, Japón (`ja-jp`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. No existía un local japonés previo sobre el que construir, así que
  cada tema se tradujo directamente de la fuente en inglés. El índice
  (tema 9.7) reasigna cada enlace interno de tema a su nombre de archivo en japonés,
  siguiendo el enfoque usado para `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es` y `pt-pt`. Aún no conectado al sitio.
- Completada una traducción manual completa, desde cero, de los 63 temas al
  portugués, Portugal (`pt-pt`), con los sidecars `.locale-peer-id` correspondientes
  y `just test` en verde. No existía un local portugués previo sobre el que
  construir, así que cada tema se tradujo directamente de la fuente en inglés.
  El índice (tema 9.7) reasigna cada enlace interno de tema a su nombre de archivo
  en portugués, siguiendo el enfoque usado para `ar-eg`, `bn-bd`,
  `ko-kr` y `es-es`. Aún no conectado al sitio.
- Añadido el español, España (`es-es`) como local completamente traducido, los 63
  temas, partiendo de una copia de la traducción española existente (`es-001`)
  (que, tras inspeccionarla, resultó ya gramaticalmente neutra,
  con un vocabulario en su mayoría ya inclinado hacia España) y aplicando después
  una pasada terminológica dirigida a los usos minoritarios restantes, sobre todo
  "incidente" a "incidencia" para el dominio de métricas de incidentes de este libro,
  con las correspondientes correcciones de concordancia de género en todo el texto. Aún no
  conectado al sitio.
- Completada una traducción manual completa de los 63 temas al coreano, Corea
  (`ko-kr`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. El índice (tema 9.7) reasigna cada enlace interno de tema
  a su nombre de archivo en coreano, siguiendo el enfoque usado para `ar-eg` y
  `bn-bd`. Aún no conectado al sitio.
- Añadido el hindi, India (`hi-id`) como local completamente traducido, los 63
  temas, copiando literalmente la traducción hindi existente (`hi-001`)
  bajo el código de local con etiqueta de país, ya que el hindi estándar no tiene
  una variante específica de la India que traducir a mano por separado. Aún no
  conectado al sitio.
- Completada una traducción manual completa de los 63 temas al bengalí,
  Bangladés (`bn-bd`), con los sidecars `.locale-peer-id` correspondientes y
  `just test` en verde. Aún no conectado al sitio.
- Completada una traducción manual completa de los 63 temas al árabe, Egipto
  (`ar-eg`), con los sidecars `.locale-peer-id` correspondientes y `just test`
  en verde. Aún no conectado al sitio.
- Completada una traducción manual completa de los 63 temas al alemán, Alemania
  (`de-de`), con los sidecars `.locale-peer-id` correspondientes y `just test`
  en verde. Aún no conectado al sitio.
- Completadas traducciones manuales completas de los 63 temas a tres locales:
  galés (`cy-001`), chino (`zh-cn`) e hindi (`hi-001`), cada uno con los
  sidecars `.locale-peer-id` correspondientes y `just test` en verde.
- Añadidos dos locales traducidos planificados más, galés - Gran Bretaña
  (`cy-gb`) y chino (`zh-001`), a
  `spec/locales-for-global-sharing-with-svelte/locales.tsv` y
  `spec/locales.md` (ahora trece locales planificados, frente a once), y
  resuelto el endónimo hasta entonces indeciso de `zh-cn` como 中文. Los `LOCALE_LABELS`
  del sitio ganaron entradas equivalentes (`cy-gb`: "Cymraeg (Prydain
  Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Todavía solo infraestructura:
  ninguno de estos locales tiene un directorio `locales/<code>/` ni contenido
  traducido.
- Publicado el libro en cuatro locales bajo `locales/`: `en-gb-oxendict`
  (inglés británico, ortografía Oxford; la fuente escrita a mano), `en-001`
  (inglés internacional), `en-gb` (inglés británico general) y `en-us`
  (inglés estadounidense). `en-001`, `en-gb` y `en-us` se derivan mecánicamente
  de `en-gb-oxendict` mediante el nuevo `tools/localize.py`; consulta
  `spec/locales.md`. `docs/` ya no existe; toda referencia a él en
  `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` y
  `tools/stats.py` apunta ahora a `locales/<locale>/`.
- Añadidas dos habilidades de Claude Code, `software-engineering-metrics-skill` (para lectores
  que aplican la guía del libro a su propio equipo) y
  `software-engineering-metrics-maintainer-skill` (para colaboradores que añaden
  o editan temas), bajo `skills/` y replicadas en `.claude/skills/`.
- Movido el código fuente del sitio web publicado a este repositorio como
  `software-engineering-metrics.github.io/`, antes un repositorio independiente.
  Ahora lee `locales/` directamente desde la raíz del repositorio en lugar de
  una copia hermana. El `.github/workflows/deploy.yml` de la raíz comprueba que el sitio
  sigue compilando en cada push a `main`, y luego envía un `repository_dispatch` al
  repositorio `software-engineering-metrics.github.io` (mantenido como un caparazón
  de despliegue delgado, ya que GitHub Pages solo servirá ese dominio desnudo desde un
  repositorio con exactamente ese nombre), que extrae este monorepo, compila el
  sitio y lo despliega.
- Añadida la infraestructura para locales traducidos (no meramente derivados por
  ortografía), según la nueva subespecificación `spec/locales-for-global-sharing-with-svelte/`:
  `tools/gen_locale_peer_ids.py` asigna a cada archivo de contenido un sidecar
  `.locale-peer-id`, idéntico entre locales, que un futuro local traducido
  (con sus propios slugs en escritura nativa) puede usar para resolver
  "esta página, en el local X" en lugar de comparar por slug; `tests/validate.py`
  comprueba que cada sidecar existe y coincide. `spec/locales.md` documenta diez
  locales traducidos planificados (árabe, bengalí, galés, español, francés, hindi,
  indonesio, portugués, ruso, urdu y chino - China); ninguno tiene todavía un
  directorio `locales/<code>/`, ya que ninguno está aún traducido. En el sitio,
  `scripts/locales.mjs` ganó `LOCALE_LABELS`/`localeLabel()` (un nombre para mostrar de
  cada local planificado, listo antes del enrutamiento) y
  `sortedLocaleEntries()` (el orden de clasificación que debería usar una futura lista de locales),
  y `src/lib/i18n.js` extrajo las cadenas de interfaz (navegación, barra lateral, paginador,
  selector, pie de página, enlace de salto) que cada componente `.svelte` tenía antes
  codificadas en inglés, enhebradas mediante `ui(locale)`, con vuelta al
  inglés para cualquier local sin sus propias traducciones.
- Sustituido el control de cabecera solo de local construido a mano del sitio por el
  `@lilydesignsystem/svelte-picker-bar` del [Lily Design System](https://lilydesignsystem.com/):
  un selector de tema real (claro/oscuro, mediante los nuevos
  `static/assets/themes/{light,dark}.css`), el selector de local real
  (conectado al enrutamiento basado en URL de este sitio en lugar de a su comportamiento
  predeterminado solo de lang/dir), un selector de tamaño de texto (la escala de siete pasos de Lily) y
  un selector de compartir (correo electrónico, Mastodon, copiar enlace). Fijados
  `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` a
  `^0.1.2` y `@lilydesignsystem/svelte-headless` a `^0.2.0` mediante overrides de
  `pnpm-workspace.yaml`, sorteando un error real publicado en los rangos de
  dependencias de `svelte-picker-bar` 0.1.0 (consulta el `CHANGELOG.md` de cada selector,
  "0.1.2", y el `AGENTS.md` de este sitio).
- Eliminada la fila de estadísticas de la página de inicio (partes/temas/"Free Always") y su sección
  "How to read it", y sustituida la cuadrícula de tarjetas "Browse the nine parts" por
  una lista de viñetas sencilla.

### Changed

- Añadido `scripts/generate-sitemap.mjs`, que se ejecuta al final de `pnpm build` y
  escribe `sitemap.xml` a partir de las páginas prerrenderizadas (solo URL canónicas de local,
  sin duplicados por los alias de dos letras) para que la línea `Sitemap:` de
  `robots.txt` se resuelva.
- Añadido el tema 2.8, métricas de flujo de valor Lean (plazo de entrega, tiempo de
  proceso, tiempo de ciclo, porcentaje completo y exacto, y tiempo takt del mapeo
  clásico de flujo de valor de Lean, además del cálculo del rendimiento acumulado de primera pasada),
  colocado después de la teoría de colas. Las métricas de solicitudes de integración y revisión de código
  pasaron de 2.8 a 2.9, y el tema de métricas DORA pasó de 2.9 a 2.10.
  Actualizadas todas las referencias cruzadas afectadas en el libro.
- Renombrada la parte 2 de "Delivery and Flow Metrics" a "Flow Metrics" y
  reorganizada en torno al Flow Framework de Mik Kersten. Añadidos cuatro temas
  nuevos: 2.1 El Flow Framework, 2.2 Elementos de flujo (funciones, defectos,
  riesgos, deuda), 2.3 Velocidad de flujo y distribución de flujo, y 2.4 Tiempo de flujo
  y carga de flujo. Consolidados los cuatro temas individuales de métricas DORA
  (frecuencia de despliegue, plazo de entrega, tasa de fallos de cambio, tiempo de recuperación)
  en un único tema de referencia, 2.9 El marco de métricas DORA, movido
  al final de la parte. Renumerados eficiencia de flujo y trabajo en curso
  a 2.5 y renombrado y renumerado el tema de teoría de colas (antes
  2.9) a 2.7 Teoría de colas. El tiempo de ciclo (2.6) y las métricas de solicitudes de integración y
  revisión de código (2.8) conservan sus números. Actualizadas todas las referencias cruzadas
  del libro, el glosario, la referencia de fórmulas, la autoevaluación de
  madurez y los preliminares para que coincidan.

### Added

- Versión inicial: 45 temas sustanciales en 8 partes, más los preliminares
  y un apéndice de 7 temas (parte 9), que cubren los marcos DORA y SPACE,
  las métricas de código y calidad, las métricas de producto y negocio, las métricas de fiabilidad y
  seguridad, y el efecto de la IA generativa en las métricas de ingeniería.
- Infraestructura del repositorio replicada del proyecto hermano
  `software-engineering-guide`: un `spec/` guiado por la especificación
  (índice, estructura, convenciones, ortografía Oxford, hoja de ruta), una suite de validación
  en `tests/validate.py`, un generador de navegación en `tools/gen_nav.py`,
  un `justfile`, `AGENTS.md` con guías para colaboradores bajo `docs/contributing/`,
  `CONTRIBUTING.md` y este registro de cambios.
- `spec/structure.md`, el manifiesto canónico de temas contra el que las pruebas comprueban
  los archivos.
- Dos ejemplos trabajados en `docs/examples/`: una carta de métricas rellenada y una
  especificación de panel.

## Historia

El libro se construyó desde la especificación hacia fuera: la estructura de nueve partes
se declaró primero en `spec/structure.md`, y luego cada tema se redactó
contra la plantilla compartida de `docs/contributing/chapter-template.md`, con
`tests/validate.py` haciendo cumplir la estructura y el estilo de la casa en todo momento.

## Convenciones de este archivo

- Agrupa los cambios bajo **Added**, **Changed**, **Fixed**, **Removed** o
  **Deprecated**.
- Mantén las entradas cortas y específicas. Una línea cada una donde sea posible.
- Tampoco uses aquí rayas largas; las pruebas comprueban también este archivo.
