# Contribuir

Gracias por ayudar a mejorar este libro. Se agradecen contribuciones de todos
los tamaños, desde corregir una errata hasta escribir un tema nuevo.

## Reglas básicas

El libro sigue un estilo de la casa estricto. Lo esencial:

- Sin rayas largas (em-dash). Usa una coma, dos puntos, paréntesis o dos
  oraciones.
- Sin frases hechas ("not only ... but also", "load-bearing" y similares).
- Escritura cálida, sencilla y directa. Dirígete al lector de "tú". Oraciones
  cortas.
- Define los términos en su primer uso. Enlaza los conceptos clave a Wikipedia
  en la primera mención.
- Solo referencias reales.
- Cada tema sobre una familia de métricas nombra su vector de manipulación y su
  barrera de protección.

Las reglas completas están en `spec/conventions.md` en la raíz del repositorio,
y la versión corta son las [reglas de estilo](reglas-de-estilo.md). Las pruebas hacen
cumplir las partes mecánicas.

## Preparación

Necesitas Python 3 y [just](https://github.com/casey/just). Este repositorio
contiene el contenido y la especificación del libro, además del sitio SvelteKit
(`software-engineering-metrics.github.io/`) que lo convierte en el sitio web
publicado.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Hacer un cambio

1. Lee la guía pertinente: [redacción](redacción.md) para los temas,
   [navegación](navegación.md) para los archivos generados, [pruebas](pruebas.md)
   para las pruebas.
2. Haz el cambio más pequeño que cumpla el objetivo.
3. Si añadiste, eliminaste, renombraste o renumeraste un tema, actualiza
   `spec/structure.md` en la raíz del repositorio y ejecuta `just nav`.
4. Ejecuta `just test`. Debe pasar.
5. Añade una entrada de una línea al [registro de cambios](../proyecto/registro-de-cambios.md)
   bajo **Unreleased**.

## En qué trabajar

- Corregir errores, pasajes poco claros o referencias obsoletas.
- Mejorar los ejemplos, especialmente los concretos de empresa y de gobierno.
- Verificar las citas contra fuentes reales.
- Rellenar vacíos en la cobertura de un tema sin romper la plantilla.

## Qué evitar

- No edites a mano los archivos generados (`README.md`, el `index.md` de cada
  local, `front-matter/table-of-contents.md` y `topics/09-07-index.md`). Cambia
  los temas y ejecuta `just nav` en su lugar.
- No edites `en-001`, `en-gb` ni `en-us` directamente; se derivan de
  `en-gb-oxendict` mediante `tools/localize.py`.
- No añadas un tema sin actualizar también `spec/structure.md`.
- No introduzcas rayas largas ni las frases prohibidas; las pruebas fallarán.

## Informar de problemas

Abre un issue que describa el problema, el archivo y el tema y, cuando proceda,
la fuente o referencia correcta. Los informes pequeños y específicos son los más
fáciles de atender.
