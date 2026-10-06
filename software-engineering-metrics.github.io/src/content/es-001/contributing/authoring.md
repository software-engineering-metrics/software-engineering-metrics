# Redacción: escribir y editar temas

## Antes de escribir

- Lee las [reglas de estilo](style-rules.md) y `spec/conventions.md` en la raíz
  del repositorio.
- Consulta `spec/structure.md` en la raíz del repositorio para ver dónde encaja
  el tema y qué número debe tener.

## Escribir un tema nuevo

1. Elige la parte y el siguiente número decimal libre en esa parte. La
   numeración es contigua, así que un tema nuevo suele tomar el número siguiente
   al último de su parte.
2. Crea `locales/en-gb-oxendict/topics/PP-CC-slug.md` (prefijo con ceros a la
   izquierda separado por guiones, por ejemplo `02-01-...`) a partir de la
   [plantilla de tema](chapter-template.md). Escríbelo con ortografía Oxford
   (consulta `spec/oxford-spelling.md`); nunca edites directamente los otros
   tres locales.
3. Escribe siguiendo la plantilla. Todo tema de contenido necesita todas sus
   secciones: visión general, principios clave, recomendaciones, compensaciones
   (con una tabla), preguntas para debatir, perspectiva por sector (startup,
   pequeña empresa, gran empresa, gobierno), ejemplos (uno de empresa y uno de
   gobierno), caso de negocio, antipatrones, un modelo de madurez de cinco
   niveles, ideas para debatir, conclusiones clave y referencias.
4. Nombra el vector de manipulación. Toda familia de métricas necesita una
   respuesta explícita a "cómo hace un equipo para que este número se vea bien
   sin mejorar lo que mide, y qué barrera de protección lo detecta" (consulta el
   tema 1.2).
5. Define los términos en su primer uso. Añade enlaces a Wikipedia para los
   conceptos clave en la primera mención, solo en prosa.
6. Haz referencias cruzadas a temas relacionados por número decimal, por
   ejemplo "(tema 2.1)."
7. Añade el tema a `spec/structure.md`.
8. Si la introducción de la parte (N.0) enumera sus temas, añade una viñeta ahí.
9. Ejecuta `python3 tools/localize.py` para derivar el tema a `en-001`, `en-gb`
   y `en-us`.
10. Ejecuta `just nav` y luego `just test`.

## Editar un tema existente

- Mantén intactos el orden de las secciones y los encabezados. Las pruebas
  comprueban que los temas de contenido siguen teniendo todas las secciones
  necesarias.
- Conserva las definiciones en línea, los enlaces a Wikipedia, las tablas y la
  lista de referencias salvo que la edición trate específicamente de ellos.
- No introduzcas rayas largas ni las frases prohibidas. Si estás reformulando,
  reescribe en lugar de meter una raya.
- Ejecuta después `python3 tools/localize.py` para volver a derivar `en-001`,
  `en-gb` y `en-us` desde la fuente editada `en-gb-oxendict`.

## Renombrar o renumerar

- Renombra el archivo en `locales/en-gb-oxendict/`, actualiza su encabezado
  `# N.M Title`, actualiza `spec/structure.md` y actualiza toda referencia
  cruzada que apunte al número antiguo.
- Ejecuta `python3 tools/localize.py` para renombrar también el archivo en los
  otros tres locales (deriva los cuatro a partir de las mismas rutas relativas).
- Ejecuta `just nav` y `just test`. Las pruebas señalarán una discrepancia entre
  el H1 y el nombre del archivo, un hueco de numeración, un local desviado de la
  fuente o un enlace roto.

## Recordatorio de tono

Escribe como un colega con experiencia que quiere que el lector tenga éxito.
Cálido, sencillo, directo y útil. Oraciones cortas. Sin relleno.
