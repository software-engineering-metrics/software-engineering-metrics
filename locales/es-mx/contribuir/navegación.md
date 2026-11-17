# Navegación: cómo funcionan los archivos generados

Por cada local, se generan cuatro artefactos de navegación a partir de los temas
de ese local, no se escriben a mano (más `README.md`, que se genera una vez para
el local de referencia, `en-gb-oxendict`):

- `README.md` (la tabla de contenidos de la página de inicio del repositorio; solo el local de referencia)
- `locales/<locale>/index.md` (la página de inicio del sitio publicado)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (el índice temático, con enlaces)

Los produce
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
No los edites a mano, porque la siguiente generación sobrescribirá tu cambio.

## Cuándo regenerar

Ejecuta `just nav` (o `python3 tools/gen_nav.py`) siempre que:

- añadas, elimines, renombres o renumeres un tema, o
- cambies el encabezado `# N.M Title` de un tema (la tabla de contenidos lo usa).

Ejecuta primero `python3 tools/localize.py` si cambiaste algo bajo
`locales/en-gb-oxendict/`, para que los temas de los otros tres locales (y sus
títulos generados) estén al día antes de que `gen_nav.py` los lea; consulta
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Cómo funciona

Para cada local, `gen_nav.py` lee cada archivo `locales/<locale>/topics/*.md`,
ordena por número decimal, agrupa por parte y:

- construye la tabla de contenidos parte por parte a partir del título H1 de
  cada tema,
- la escribe en `locales/<locale>/index.md` y en
  `locales/<locale>/front-matter/table-of-contents.md` (y, solo para el local de
  referencia, en `README.md`),
- analiza los temas sustanciales (partes 1 a 8) en busca de una lista fija de
  términos clave y escribe el índice temático en
  `locales/<locale>/topics/09-07-index.md`.

El texto base compartido (el párrafo introductorio, "Cómo leer este libro",
"Temas transversales" y los títulos de las partes) se localiza igual que la
prosa de los temas, mediante las funciones de local de `tools/localize.py`, de
modo que las páginas generadas se leen con naturalidad en cada local.

Los títulos de las partes viven en el diccionario `PART_TITLES` cerca del
principio del script. El generador usa encabezados de parte con dos puntos
("Part 2: Delivery and Flow Metrics"), nunca rayas largas.

En los locales traducidos a mano, la página de inicio y la página de la tabla de
contenidos se escriben a mano (los encabezados traducidos y la línea de
introducción N.0 de cada parte), y `tools/gen_translated_nav.py` actualiza las
listas de temas a partir de los títulos H1 de los temas de ese local.

## Lo que no toca

La especificación en la raíz del repositorio (`spec/index.md`,
`spec/structure.md` y sus compañeros) es la fuente de la verdad escrita a mano.
El generador no la escribe, y no forma parte del sitio publicado. Si cambias la
estructura, actualiza `spec/structure.md` tú mismo, y luego ejecuta `just nav`
para los archivos derivados y `just test` para confirmar que todo encaja.
