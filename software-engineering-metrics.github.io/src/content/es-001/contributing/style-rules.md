# Reglas de estilo (compartidas, exigibles)

El estilo de la casa en un solo lugar. Los elementos marcados "(test)" los hace
cumplir `tests/validate.py`; una infracción rompe la compilación. La versión
narrativa completa es `spec/conventions.md` en la raíz del repositorio.

## Reglas estrictas

- **Sin rayas largas.** No uses nunca "—" (U+2014). Usa una coma, dos puntos,
  paréntesis o dos oraciones. Las rayas medias "–" se permiten solo en rangos
  numéricos como `1–9` o `2.1–2.8`. (test)
- **Sin frases hechas.** No uses "not only ... but also", "but also" ni
  "load-bearing". Evita "It's important to note", "In today's fast-paced world",
  "It's crucial to consider", "It appears that", "One could argue" y la
  fórmula "it's not just X, it's Y". (test, las tres primeras)
- **Define los términos en su primer uso.** Expande los acrónimos y define la
  jerga la primera vez que cada tema los usa, por ejemplo "mean time to
  recovery (MTTR)."
- **Enlaza los conceptos clave a Wikipedia** en la primera mención, una vez por
  tema, solo en prosa. Forma: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Nunca en encabezados, tablas, código ni en la sección de referencias. (la
  forma del enlace es un test)
- **Solo referencias reales.** Autor y título de obras genuinas. Sin títulos,
  autores ni URL inventados.
- **Nombra el vector de manipulación.** Un tema sobre una familia de métricas
  expone cómo se manipula la métrica y qué barrera de protección lo detecta
  (tema 1.2).

## Voz

- Cálida, directa, alentadora. Dirígete al lector de "tú". Oraciones cortas,
  palabras sencillas. Empieza por lo importante.
- Con opinión y práctica. Neutral respecto a los proveedores. Nombra productos
  solo como ejemplos factuales.

## Estructura (test)

- Los temas de contenido usan el orden exacto de secciones de
  [`chapter-template.md`](chapter-template.md).
- El primer encabezado es `# N.M Title` (número de tema con punto) y coincide
  con el prefijo `PP-CC` con ceros a la izquierda del archivo.
- La numeración dentro de cada parte es contigua y empieza en N.0.

## Después de editar

- Si cambiaste el conjunto de temas, actualiza `spec/structure.md` y ejecuta
  `just nav`.
- Ejecuta siempre `just test`.
