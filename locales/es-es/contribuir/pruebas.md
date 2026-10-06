# Pruebas: la suite de validación

## Ejecutarla

```sh
just test
# or
python3 tests/validate.py
```

Se ejecuta desde cualquier lugar y solo necesita Python 3 (sin paquetes de
terceros ni red). Imprime una línea por comprobación y termina con un código
distinto de cero si alguna falla, así que sirve en CI y como gancho de
pre-commit.

## Qué comprueba

- **El número esperado de temas** (la constante al principio del script).
- **Numeración contigua** dentro de cada parte, empezando en N.0.
- **El H1 coincide con el decimal del nombre del archivo** en cada tema.
- **Los títulos H1 coinciden con `spec/structure.md`** carácter por carácter, no
  solo con el decimal inicial.
- **Las secciones obligatorias** están presentes en cada tema de contenido
  (partes 1 a 8, tema N.1 y superiores), **en el orden exacto de la plantilla**.
- **Un recuento mínimo de palabras** para cada tema de contenido (1500
  palabras), con una lista de excepciones en el script para casos intencionales.
- **Sin rayas largas** en ningún archivo Markdown.
- **Rayas medias solo entre dígitos**, así que "2.1–2.8" pasa y todo lo demás
  falla.
- **Sin frases prohibidas** ("not only", "but also", "load-bearing").
- **Todos los enlaces `.md` internos se resuelven.**
- **Las referencias cruzadas en prosa apuntan a temas reales**: una referencia a
  un número de tema sin archivo correspondiente en disco falla, usando el mismo
  patrón de referencia que usa el enlazado automático de temas del sitio
  publicado.
- **Los enlaces a Wikipedia están bien formados**
  (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` coincide con los archivos en disco**, en ambos sentidos.
- **El README, la página de inicio y la página de contenidos enlazan cada tema.**

## Cuando falla una comprobación

La línea que falla nombra el archivo y el problema. Correcciones habituales:

- Se encontró una raya larga: reformula la oración para eliminar el "—". No la
  borres sin más.
- Falta una sección: añade la sección `##` que falta desde la plantilla de tema.
- Discrepancia de estructura: añadiste o renombraste un tema sin actualizar
  `spec/structure.md`, o al revés. Vuelve a alinearlos.
- Enlace roto: corrige la ruta, o actualízala tras un cambio de nombre.
- Hueco de numeración: renumera para que la parte sea contigua desde N.0.

## Más allá de la suite de validación

- `just spell` ejecuta [codespell](https://github.com/codespell-project/codespell)
  sobre el repositorio. La configuración, incluida la lista de falsos positivos
  que se ignoran, es la sección `[tool.codespell]` de `pyproject.toml`.
- `just stats` imprime un informe en Markdown (recuentos de palabras por tema,
  temas escasos, enlaces a Wikipedia, entradas de referencias) desde
  `tools/stats.py`.

## Integración continua

- `.github/workflows/test.yml` se ejecuta en cada pull request y en los push a
  ramas que no son la principal: la suite de validación y codespell. Este
  repositorio no compila ni despliega un sitio; el renderizado ocurre en el
  repositorio independiente `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` comprueba los enlaces externos cada semana con
  [lychee](https://github.com/lycheeverse/lychee) (patrones ignorados en
  `.lycheeignore`) y guarda los resultados en un único issue "Link checker
  report". Los enlaces externos quedan fuera de la ruta del PR a propósito.

## Lo que las pruebas no cubren

La suite comprueba estructura y estilo, no verdad. No puede saber si una
referencia es real o si la prosa es exacta. Verifica las citas y los hechos a
mano o con una pasada de investigación. La existencia de un enlace a Wikipedia
(a diferencia de su forma) también requiere una comprobación de red, que la
suite deja fuera deliberadamente para poder ejecutarse sin conexión.
