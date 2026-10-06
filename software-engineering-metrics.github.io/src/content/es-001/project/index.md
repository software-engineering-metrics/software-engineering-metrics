# Acerca de este proyecto

Documentación del proyecto para el libro: cómo está montado, cómo construirlo y
comprobarlo, y dónde está la fuente de la verdad. Para el libro en sí, consulta
la [tabla de contenidos](../index.md).

## Mapa del proyecto

- **El libro:** publicado en cuatro locales bajo `locales/`; consulta
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Este local, `en-gb-oxendict/topics/` (63 archivos), `en-gb-oxendict/front-matter/`
  y los apéndices de la parte 9 son la fuente escrita a mano; `en-001`,
  `en-gb` y `en-us` se derivan de ella.
- **Fuente de la verdad:** `spec/` en la raíz del repositorio (no se publica en
  el sitio). La estructura se declara en `spec/structure.md`, las reglas de
  escritura en `spec/conventions.md` y la ortografía en
  `spec/oxford-spelling.md`. Todo lo demás se construye para coincidir.
- **Herramientas:** `tools/localize.py` deriva los otros tres locales;
  `tools/gen_nav.py` genera la navegación; `tests/validate.py` hace cumplir la
  especificación; el `justfile` los une.
- **Guía para colaboradores:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  en la raíz del repositorio, y las guías de la
  [sección de contribuciones](../contributing/index.md).

## Construir y comprobar

La suite de validación se ejecuta en Python 3 sin otras dependencias y sin
acceso a la red. Las tareas se ejecutan con [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Este repositorio contiene el contenido y la especificación del libro. Se
convierte en un sitio web mediante el repositorio independiente
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Cómo funciona aquí el desarrollo guiado por la especificación

La especificación va primero. `spec/structure.md` dice qué temas existen y cómo
se numeran. `spec/conventions.md` dice cómo deben escribirse. Los temas se
redactan para satisfacer ambos. `tools/gen_nav.py` deriva la navegación de los
temas, y `tests/validate.py` comprueba el resultado de vuelta contra la
especificación. Si los temas y la especificación alguna vez discrepan, las
pruebas fallan, que es la señal para volver a alinearlos.

Esto evita la deriva: un cambio solo está "hecho" cuando la especificación, los
temas, la navegación generada y las pruebas coinciden.

## Decisiones de diseño que conviene conocer

- **Temas planos, numerados en decimal.** Los archivos son
  `locales/<locale>/topics/PP-CC-slug.md`, el mismo slug en todos los locales.
  La parte es un número entero; el tema es un decimal; N.0 es la introducción
  de la parte. Esto mantiene identificadores estables y permite que las
  herramientas ordenen y agrupen sin un árbol de directorios.
- **Un local escrito a mano, tres derivados.** `en-gb-oxendict` usa ortografía
  Oxford, el estilo de la casa de la mayoría de los organismos internacionales
  de normalización (consulta `spec/oxford-spelling.md`); `en-001`, `en-gb` y
  `en-us` se derivan mecánicamente de él, así que la traducción nunca se desvía
  de la fuente.
- **Navegación generada.** La tabla de contenidos, la página de contenidos y el
  índice temático se generan, así que nunca se desvían de los temas.
- **Pruebas sin conexión y sin dependencias.** La suite solo usa la biblioteca
  estándar, así que se ejecuta en cualquier lugar, incluidos CI y ganchos de
  pre-commit.
- **Las referencias cruzadas siguen siendo texto plano.** La prosa se refiere a
  los temas por su número decimal ("véase el tema 2.1"), como exige la
  especificación; el sitio que lo renderiza se encarga de convertir esas
  referencias en enlaces.
- **Sin rayas largas, por regla y por prueba.** Una elección de estilo
  deliberada, aplicada para que siga siendo cierta a medida que el libro crece.
- **Cada familia de métricas nombra su propio vector de manipulación.** Esta es
  la única regla de la plantilla que no tiene equivalente en el proyecto
  hermano `software-engineering-guide`: existe porque todo el tema de este libro
  es la medición, así que el riesgo de la propia medición tiene que ser de
  primera clase, no implícito.

## Lecturas adicionales

- [Redacción](../contributing/authoring.md) : escribir y editar temas.
- [Navegación](../contributing/navigation.md) : cómo funcionan los archivos generados.
- [Pruebas](../contributing/testing.md) : qué comprueban las pruebas y cómo corregir fallos.
- [Ejemplos](../examples/index.md) : ejemplos pequeños y concretos.
- [Registro de cambios](changelog.md) : historial de cambios notables.
