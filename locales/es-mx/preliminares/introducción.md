# Introducción

Este libro es una guía de trabajo para medir bien la [ingeniería de software](https://en.wikipedia.org/wiki/Software_engineering),
para equipos que van desde una startup de cinco personas hasta una empresa con
miles de ingenieros o un organismo público que rinde cuentas frente a un marco
de rendimiento legal. Existe porque la mayoría de los consejos sobre métricas
son o bien un resumen de un marco sin detalle operativo, o bien la lista de
funciones de un proveedor de herramientas. Este libro intenta no ser ninguna de
las dos cosas: tiene opinión sobre qué medir, es explícito sobre cómo se
manipula cada métrica, y es práctico sobre cómo dirigir un programa de métricas
en el que un equipo confíe en lugar de temerlo.

## Para quién es

El público principal son las personas que eligen qué mide una organización:
líderes de ingeniería, ingenieros staff y principales, equipos de plataforma y
DevOps, y responsables de programas y de producto. El público secundario es
cualquier ingeniero que quiera entender el razonamiento detrás de un panel cuyo
número se le pide mover, y cómo cuestionar una métrica que ha dejado de cumplir
su propósito. No necesitas leerlo de principio a fin. Cada tema se sostiene por
sí mismo, expone primero sus principios y termina con conclusiones prácticas,
un modelo de madurez y referencias.

## Cómo está organizado el libro

El libro se divide en **partes** (números enteros) y **temas** (decimales). El
tema **N.0** presenta cada parte y explica cómo se relacionan sus temas; los
temas **N.1, N.2, …** cubren los temas en profundidad.

- **Parte 1, Fundamentos de la medición:** por qué medir, la ley de Goodhart y
  la psicología de la manipulación, elegir resultados en lugar de producción,
  gobernanza y propiedad, fuentes de datos, y la alfabetización estadística que
  necesita todo programa de métricas.
- **Parte 2, Métricas de flujo:** el Flow Framework, sus elementos de flujo y
  sus cinco métricas de flujo, el tiempo de ciclo, la teoría de colas, las
  métricas clásicas de flujo de valor de Lean, las métricas de solicitudes de
  integración y revisión de código, y el marco DORA como tema de referencia.
- **Parte 3, Experiencia del desarrollador y el marco SPACE:** el marco SPACE y
  sus cinco dimensiones, y cómo realizar una encuesta de experiencia del
  desarrollador sin que se convierta en un concurso de popularidad.
- **Parte 4, Métricas de código y calidad:** complejidad, cobertura y eficacia
  de las pruebas, rotación y puntos calientes, análisis estático, deuda
  técnica y documentación.
- **Parte 5, Métricas de producto y negocio:** defectos escapados, adopción de
  funciones, resultados de clientes y de negocio, economía unitaria y retorno
  de la inversión.
- **Parte 6, Métricas de fiabilidad, operaciones y seguridad:** SLI, SLO y
  presupuestos de error, métricas de incidentes, guardias y capacidad, y
  métricas de seguridad y vulnerabilidades.
- **Parte 7, Las métricas en la era de la IA:** el cambio de paradigma de la IA
  generativa, cómo medir el desarrollo asistido por IA, el riesgo de inflación
  de métricas, y por qué la telemetría de resultados se convierte en la estrella
  polar cuando la producción se abarata.
- **Parte 8, Construir un programa de métricas:** diseñar un panel, construir o
  comprar, implantar métricas sin sembrar miedo, un modelo de madurez y una hoja
  de ruta de adopción gradual.
- **Parte 9, Apéndices:** glosario, una referencia de definiciones y fórmulas
  de métricas, listas de verificación, plantillas, autoevaluación de madurez,
  referencias e índice.

## Principios rectores

Ocho principios forman la columna vertebral del libro:

1. **Una medida que se convierte en objetivo deja de ser una buena medida.**
   Diseña desde el principio contra la ley de Goodhart, no después de que
   aparezca la distorsión.
2. **Resultados antes que producción, y producción antes que actividad.** Pondera
   cada conjunto de métricas hacia lo que cambió para el cliente o el negocio,
   no hacia lo que produjo el equipo o lo ocupado que estuvo.
3. **Toda métrica incentivada necesita una barrera de protección.** Empareja la
   velocidad con la calidad, el rendimiento con la estabilidad, y nunca
   persigas un número de forma aislada.
4. **Mide sistemas, no personas.** Una métrica que individualiza la culpa rompe
   la confianza e invita a la manipulación; una métrica que revela una
   restricción del sistema invita a la mejora.
5. **Prefiere la instrumentación al autoinforme donde puedas obtenerla, y el
   autoinforme donde no.** Los recuentos de despliegues vienen del pipeline; la
   satisfacción viene de preguntar.
6. **Una métrica se gana su lugar o se retira.** Cada casilla de un panel cuesta
   atención. Poda deliberadamente.
7. **Las definiciones importan más que los paneles.** Dos equipos que calculan
   el "plazo de entrega" de forma distinta pasarán más tiempo discutiendo el
   número que actuando sobre él.
8. **La IA generativa es una razón para reexaminar, no solo para volver a
   establecer la línea base.** Cuando la producción se abarata, las métricas
   construidas en torno al volumen de producción necesitan nuevas barreras de
   protección, no solo nuevos objetivos.

## Temas transversales

La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es el
único tema que recorre todas las partes de este libro, no solo el tema 1.2. Cada
tema sobre una familia de métricas expone cómo se manipula la métrica que cubre
y qué barrera de protección lo detecta. Las obligaciones de información de
gobiernos y empresas, donde una métrica puede tener peso legal o contractual,
se tratan como insumos de diseño en todo el libro, no como una ocurrencia tardía
confinada a un solo tema.

## Cómo usarlo

Adopta de forma gradual; no dejes caer un panel de golpe sobre un equipo que
nunca tuvo uno. Empieza donde el dolor es mayor, usa el modelo de madurez de
cada tema para ubicarte con honestidad, y deja que la hoja de ruta de adopción
(tema 8.5) ordene el trabajo. El objetivo no es un muro de gráficos. Es una
organización que pueda decir, con evidencia, si lo que hace funciona, y que
confíe en sus propios números lo suficiente como para actuar sobre ellos.
