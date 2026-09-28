# 2.0 Introducción a la parte 2: Métricas de flujo

Si la parte 1 es la filosofía de la medición, la parte 2 es donde esa
filosofía se encuentra con la propia entrega: las métricas que describen no
solo con qué rapidez y con qué seguridad un equipo mueve código desde una
idea hasta un sistema en funcionamiento, sino qué tipo de valor está
circulando por esa canalización siquiera. Esta parte se organiza en torno al
**Flow Framework**, un modelo creado por Mik Kersten en su libro de 2018
*Project to Product*, que trata la entrega de software como una cadena de
valor y le da a esa cadena de valor un vocabulario compartido: cuatro tipos
de elementos de flujo y cinco métricas de flujo que conectan la actividad de
ingeniería con la estrategia de negocio en términos que una parte
interesada no técnica realmente puede usar.

Esa elección de marco organizador es deliberada. Las métricas DORA,
frecuencia de despliegue, tiempo de entrega, tasa de fallos de cambio y
tiempo de recuperación, están genuinamente validadas por la investigación y
siguen siendo uno de los marcos de entrega con mejor evidencia disponibles,
pero miden la mecánica de la canalización, no lo que fluye a través de
ella. Un equipo puede presentar excelentes números DORA mientras su valor
entregado real ha derivado en silencio hacia el retrabajo o se ha alejado
del trabajo de deuda y riesgo que protege el futuro de un sistema. Esta
parte cubre DORA por completo, pero como un único capítulo de referencia
consolidado al final (capítulo 2.10), porque la pregunta más urgente y más
frecuentemente ausente para la mayoría de las organizaciones no es "con qué
rapidez va nuestra canalización" sino "qué está entregando realmente nuestra
canalización". Cada capítulo de esta parte sigue la misma disciplina
establecida en la parte 1: exponer la métrica, nombrar cómo se manipula, y
emparejarla con la barrera de contención que detecta esa manipulación.

Para los equipos grandes, las métricas de flujo son lo que hace posible la
comparación entre equipos sin perder de vista el valor. Un equipo de
plataforma, un equipo móvil y un equipo de datos pueden no tener casi nada
en común en su trabajo diario, pero la velocidad de flujo y la distribución
de flujo, calculadas de forma consistente, permiten que el liderazgo haga
una pregunta justa sobre los tres: ¿está este equipo entregando el tipo de
valor que su fase actual realmente exige? Las organizaciones grandes y del
sector público dependen de las métricas de esta parte para justificar la
inversión en plataforma, para comparar el retorno de esfuerzos de
modernización que compiten entre sí, y para demostrar, con evidencia en
lugar de anécdota, que la capacidad de ingeniería se asigna de la forma en
que el liderazgo cree que se asigna.

## Capítulos de esta parte

- **2.1 El Flow Framework:** El origen del marco, su modelo de cadena de
  valor, y por qué este libro lo usa, en lugar de DORA en solitario, para
  organizar las métricas de entrega y flujo.
- **2.2 Elementos de flujo: funcionalidades, defectos, riesgos y deuda:** La
  taxonomía de cuatro tipos del marco, su asignación de capacidad de suma
  cero, y cómo se manipula la clasificación si se aplica de forma
  retroactiva.
- **2.3 Velocidad de flujo y distribución de flujo:** Cuánto se lanzó y qué
  tipo de valor fue, siempre leídas juntas.
- **2.4 Tiempo de flujo y carga de flujo:** Cómo la ley de Little demuestra
  que una cadena de valor sobrecargada se ralentiza matemáticamente, no solo
  de forma probable.
- **2.5 Eficiencia de flujo y trabajo en curso:** Por qué estar ocupado no
  es lo mismo que ser rápido, y cómo limitar el trabajo en curso mejora el
  rendimiento de forma contraintuitiva.
- **2.6 Tiempo de ciclo y sus componentes:** Descomponer el tiempo de
  ingeniería de un cambio en sus etapas constituyentes para que un equipo
  sepa exactamente adónde va realmente el tiempo.
- **2.7 Teoría de colas:** Las matemáticas que sustentan la carga de flujo,
  el tiempo de flujo, el tiempo de ciclo y el trabajo en curso, y por qué el
  tiempo de espera en un recurso compartido se dispara a medida que la
  utilización se acerca a su límite.
- **2.8 Métricas Lean de cadena de valor:** El conjunto de herramientas Lean
  clásico, tiempo de entrega, tiempo de proceso, tiempo de ciclo, porcentaje
  completo y correcto, y tiempo takt, del que descienden las métricas
  específicas de software de esta parte, y cómo tender un puente entre los
  dos vocabularios.
- **2.9 Métricas de solicitudes de incorporación de cambios y revisión de
  código:** Las métricas que viven dentro de una única etapa de la
  canalización de entrega, y cómo pueden distorsionar la calidad de la
  revisión si se usan de forma descuidada.
- **2.10 El marco de métricas DORA:** Las cuatro métricas DORA al completo,
  colocadas al final de forma deliberada porque miden la canalización, no
  el valor que fluye a través de ella.

## Cómo se relacionan estos capítulos

El capítulo 2.1 presenta el Flow Framework en su conjunto; el capítulo 2.2
expone su taxonomía de elementos de flujo, y los capítulos 2.3 y 2.4 cubren
entre ambos sus cinco métricas de flujo, velocidad y distribución juntas,
después tiempo y carga juntos, con la carga y el tiempo ligados directamente
a la ley de Little. Los capítulos 2.5 a 2.7 se centran en la mecánica que
sustenta específicamente el tiempo de flujo y el tiempo de ciclo: la
eficiencia de flujo y el trabajo en curso explican por qué las etapas de
ingeniería suelen ser más lentas de lo que parecen, el tiempo de ciclo
descompone esa porción de ingeniería en sus etapas, y la teoría de colas
formaliza, en términos matemáticos demostrables, por qué son ciertas las
afirmaciones de todos los capítulos anteriores sobre carga, tiempo de
espera y utilización. El capítulo 2.8 da un paso atrás para trazar todo
esto hasta su origen en el mapeo de cadena de valor Lean clásico, el
vocabulario común del que generalizan las métricas específicas de software
de esta parte. El capítulo 2.9 cubre la única etapa de la canalización que
la mayoría de los equipos pueden mejorar más rápido. El capítulo 2.10
cierra la parte con las métricas DORA al completo, presentadas como una
capa de referencia bien evidenciada pero más estrecha una vez que la imagen
más amplia y orientada al negocio de los capítulos anteriores ya está a la
vista.

La disciplina de barreras de contención de esta parte se conecta
directamente con el capítulo 1.2: la velocidad de flujo nunca se reporta
sin la distribución de flujo junto a ella, y las métricas de velocidad de
DORA se mantienen emparejadas con sus métricas de estabilidad, de modo que
un equipo no pueda mejorar un número de velocidad enviando en silencio
código más arriesgado o una mezcla de valor más estrecha. Ese
emparejamiento no es incidental a ninguno de los dos marcos; es la
intuición central de cada uno de ellos, y las métricas de fiabilidad de la
parte 6 extienden esa misma mitad de estabilidad del emparejamiento hacia
las operaciones de producción una vez que el código ya se ha lanzado.
