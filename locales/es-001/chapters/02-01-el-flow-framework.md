# 2.1 El Flow Framework

## Visión general y motivación

El **Flow Framework** es un modelo gerencial y estructural creado por Mik
Kersten y publicado en su libro de 2018 *Project to Product*. Existe para
responder a una pregunta que las métricas puras de canalización no pueden
responder: no solo con qué rapidez y con qué seguridad se mueve el código
desde el commit hasta la producción, sino qué tipo de valor está circulando
por la canalización siquiera, y si esa mezcla refleja la estrategia real del
negocio. El marco trata la entrega de software como una **[cadena de
valor](https://en.wikipedia.org/wiki/Value_stream)**, la secuencia completa
de actividades que convierte una idea en el valor que recibe un cliente,
tomando prestado directamente de la tradición de mapeo de cadena de valor de
la manufactura lean.

Este libro usa el Flow Framework como la estructura organizadora de la
parte 2. El capítulo 2.2 presenta sus cuatro elementos de flujo, los
capítulos 2.3 y 2.4 presentan sus cinco métricas de flujo, el capítulo 2.8
traza esas métricas hasta su origen en el mapeo de cadena de valor Lean
clásico, y el capítulo 2.10 cubre las métricas DORA como un marco de
referencia más estrecho, centrado en la canalización, con el que esta parte
ya no encabeza. Esa es una elección deliberada, no un rechazo de la
investigación de DORA. DORA mide el rendimiento y la estabilidad del
sistema con un rigor estadístico genuino, pero guarda silencio sobre la
pregunta que más le importa realmente a un líder de negocio: de todo lo que
envió la organización de ingeniería este trimestre, cuánto fue valor nuevo
para el cliente, y cuánto lo consumió en silencio la corrección de
defectos, la gestión de riesgo o el pago de deuda. El Flow Framework existe
específicamente para hacer visible esa mezcla.

Para los equipos grandes, esta distinción no es académica. Una organización
de plataforma que gestiona docenas de cadenas de valor puede tener
excelentes números DORA, despliegues rápidos, frecuentes y estables,
mientras su producción real de producto ha derivado en silencio hacia
trabajo casi puramente de mantenimiento, un patrón invisible para un
tablero que solo mide la mecánica de la canalización. Las organizaciones
grandes y del sector público, que deben justificar la inversión en
ingeniería ante partes interesadas que piensan en términos de negocio, no
de canalización, necesitan un vocabulario que conecte la actividad de
entrega con la intención estratégica. Eso es lo que proporciona este marco.

## Principios clave

- **Una cadena de valor es la unidad de medición, no un equipo ni una
  canalización.** Abarca desde una necesidad de cliente o de negocio hasta
  el resultado entregado, cruzando los límites de equipo que el trabajo
  realmente cruce.
- **Los elementos de flujo hacen visible el "qué", no solo el "con qué
  rapidez".** Las cuatro categorías del capítulo 2.2, funcionalidades,
  defectos, riesgos y deuda, convierten una decisión de priorización
  implícita en una explícita y medible.
- **La asignación de capacidad entre elementos de flujo es de suma cero.**
  Más capacidad dedicada a un tipo de elemento es menos capacidad disponible
  para los demás; el marco hace visible esa compensación en lugar de
  dejarla implícita.
- **Las cinco métricas de flujo responden preguntas de negocio, no solo de
  ingeniería.** Están diseñadas para presentarse a una parte interesada no
  técnica, no para quedarse dentro de un equipo de ingeniería.
- **La gestión de la cadena de valor debe ser continua, no un ejercicio de
  mapeo puntual.** Los mapas estáticos de cadena de valor se quedan
  obsoletos; el marco está construido para instrumentarse a partir de las
  herramientas que los equipos ya usan.

## Recomendaciones

### Traza tu cadena de valor antes de instrumentar nada

Antes de adoptar cualquier métrica de flujo, recorre el camino real que
sigue una pieza de trabajo desde que se identifica una necesidad de negocio
hasta que un cliente recibe valor, nombrando cada etapa y cada traspaso
entre equipos. Este es el ejercicio clásico de [mapeo de cadena de
valor](https://en.wikipedia.org/wiki/Value_stream_mapping), adaptado de la
manufactura lean, y saltárselo es el motivo más común por el que una
adopción del Flow Framework produce números en los que nadie confía: las
métricas calculadas contra un proceso no examinado y entendido solo de
manera informal rara vez coinciden con lo que realmente ocurre.

### Conecta las métricas de flujo con las herramientas que tus equipos ya usan

El Flow Framework está construido para una gestión continua y automatizada
de la cadena de valor, no para un ejercicio de mapeo manual periódico.
Integra el seguimiento de elementos de flujo directamente en las
herramientas por las que ya fluye el trabajo, Jira, Azure DevOps, GitHub, en
lugar de construir un sistema de seguimiento paralelo que los equipos
tengan que actualizar a mano. El estado de un elemento de flujo debería
actualizarse por sí mismo a medida que se mueve el ticket o la solicitud de
incorporación de cambios subyacente, la misma disciplina de instrumentación
sobre autoinforme que recomienda el capítulo 1.5 para cada métrica de este
libro.

### Presenta la distribución de flujo directamente a las partes interesadas de negocio, no solo al liderazgo de ingeniería

La mayor oportunidad perdida con este marco es tratarlo como una
herramienta interna de ingeniería. La distribución de flujo, la proporción
de trabajo que va a funcionalidades frente a defectos, riesgo y deuda
(capítulo 2.3), está diseñada específicamente para ser una conversación que
tienes con el liderazgo de producto y de negocio, porque convierte una
decisión de priorización implícita, cuánta capacidad va a valor nuevo
frente a mantener las luces encendidas, en algo explícito y negociable en
lugar de asumido.

### Trata los cuatro elementos de flujo como una taxonomía genuina, no como una formalidad

Exige que cada unidad de trabajo se clasifique en exactamente uno de los
cuatro tipos de elemento de flujo en el momento de la entrada, no de forma
retroactiva. Una clasificación aplicada a posteriori, o aplicada sin rigor
porque "básicamente es una funcionalidad", erosiona todo el valor de la
taxonomía, porque el objetivo entero es un registro honesto y consistente
de adónde fue realmente la capacidad.

### Revisa tu mapa de cadena de valor cuando cambie la organización, no en un calendario fijo

Un mapa de cadena de valor se queda obsoleto en el momento en que los
límites de equipo, las herramientas o el propio producto cambian de forma
significativa, no en una cadencia anual arbitraria. Trata una
reorganización, una migración importante de herramientas o un giro
significativo de producto como un disparador para volver a recorrer la
cadena de valor, porque una métrica de flujo calculada contra un mapa
obsoleto mide en silencio lo equivocado.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Solo métricas de canalización (DORA, capítulo 2.10) | Sencillas, bien validadas, baratas de instrumentar a partir de datos de integración continua existentes | Guardan silencio sobre qué tipo de valor se está entregando |
| Adopción completa del Flow Framework | Conecta la entrega con la estrategia de negocio; hace visible y negociable la mezcla de valor | Requiere un mapa honesto de la cadena de valor y una disciplina consistente de clasificación de elementos de flujo |
| Mapeo de cadena de valor estático y puntual | Barato, rápido de ejecutar como ejercicio de taller | Se queda obsoleto rápido; produce una instantánea, no una métrica viva |
| Gestión continua de cadena de valor integrada con herramientas | Datos vivos, siempre actuales; escala entre muchas cadenas de valor | Requiere trabajo real de integración de herramientas por adelantado |

La tensión central es **legibilidad de negocio frente a esfuerzo de
instrumentación**. Las métricas de canalización son baratas porque la
canalización ya produce los datos; las métricas de cadena de valor
requieren un mapa honesto de todo el proceso y un hábito disciplinado de
clasificación en el momento de la entrada que las métricas de canalización
nunca exigieron. Resuélvela empezando por una única cadena de valor, no por
toda la organización a la vez, mapeándola bien, y solo entonces integrando
el seguimiento de elementos de flujo en las herramientas existentes, en
lugar de intentar un despliegue masivo simultáneo en todos los equipos.

## Preguntas para debatir con tu equipo

1. **¿Podríamos dibujar ahora mismo un mapa de cadena de valor preciso para
   nuestro producto más importante, o estaríamos adivinando varios de los
   traspasos?** La mayoría de las organizaciones nunca han recorrido
   realmente este camino de principio a fin. Intenta el ejercicio con
   honestidad y anota cada punto donde el grupo no esté de acuerdo sobre lo
   que realmente ocurre, porque ese desacuerdo es en sí mismo diagnóstico.

2. **Si clasificáramos todo lo que envió nuestro equipo el trimestre
   pasado en funcionalidades, defectos, riesgo y deuda, ¿sorprendería el
   resultado a nuestro liderazgo de producto?** La mayoría de los equipos
   nunca han hecho explícito este reparto, y la respuesta a menudo revela
   una carga de mantenimiento o un problema de deuda que antes era
   invisible en un simple recuento de "puntos de historia entregados".

3. **¿Tenemos una forma genuina, integrada con herramientas, de rastrear
   elementos de flujo, o esto requeriría que alguien clasificara y
   reclasificara el trabajo a mano?** Un sistema manual se degrada rápido
   bajo una carga de trabajo real; uno integrado con herramientas no.
   Evalúa con honestidad cuál de los dos estáis realmente preparados para
   sostener.

4. **¿Cuándo cambió por última vez nuestro mapa de cadena de valor, y hemos
   actualizado nuestras métricas para reflejarlo?** Las reorganizaciones y
   las migraciones de herramientas invalidan en silencio un mapa de cadena
   de valor, y pocas organizaciones se acuerdan de revisarlo cuando eso
   ocurre.

5. **¿Se presentan alguna vez nuestras métricas de flujo directamente a
   partes interesadas de negocio o de producto, o se quedan dentro de
   ingeniería?** La mayor ventaja del marco sobre las métricas centradas
   solo en la canalización es precisamente esta conversación, y saltársela
   renuncia a la mayor parte del valor del marco.

6. **¿Qué haría falta para que alguien manipulara nuestra clasificación de
   elementos de flujo sin hacer nada deshonesto sobre el papel?** Recorre
   cómo un equipo bajo presión de entrega podría reetiquetar en silencio
   trabajo de deuda o riesgo como funcionalidades para parecer más
   productivo, y debate si lo notaríais actualmente.

## Enfoque sectorial

**Startup.** Un mapa de cadena de valor completo suele ser excesivo para un
equipo de cinco personas donde todos ya conocen de memoria todo el proceso.
El hábito útil a esta escala es simplemente nombrar en voz alta los cuatro
tipos de elemento de flujo en las conversaciones de planificación, para que
el trabajo de deuda y riesgo no desaparezca en silencio de la vista en
cuanto se acerca la fecha límite de una funcionalidad.

**Pequeña empresa.** Adopta la clasificación de elementos de flujo dentro de
cualquier herramienta de seguimiento ligera que ya uses, una columna
etiquetada o un campo personalizado, en lugar de cualquier producto
dedicado de gestión de cadena de valor. La disciplina de una clasificación
consistente importa mucho más que la sofisticación de la herramienta detrás
de ella.

**Empresa grande.** Aquí es donde el marco se gana su lugar, porque una
organización grande que gestiona docenas de cadenas de valor en muchas
líneas de producto no tiene ninguna otra forma fiable de ver, en un solo
lugar, cómo se está asignando realmente la capacidad de ingeniería entre
funcionalidades, defectos, riesgo y deuda. Invierte en la integración de
herramientas; la alternativa manual no sobrevive al contacto con la escala
real.

**Sector público.** La distribución de flujo le da a una organización de
ingeniería del sector público una respuesta defendible y legible para el
negocio a "por qué no se está enviando más funcionalidad nueva", cuando la
respuesta honesta es que una parte creciente de la capacidad va a la
remediación de seguridad o a la deuda heredada. Hacer visible y explícita
esa compensación, en lugar de absorber la presión en silencio, suele ser lo
más útil que este marco le ofrece a un líder de tecnología del sector
público.

## Ejemplos

**Empresa grande.** La organización de la plataforma de siniestros de una
gran aseguradora creía que principalmente estaba enviando funcionalidades
nuevas, según sus informes de velocidad de sprint. Un primer ejercicio de
mapeo de cadena de valor y clasificación de elementos de flujo reveló que el
trabajo de deuda y riesgo, gran parte de él deuda técnica no documentada de
un sistema central de una década de antigüedad, en realidad consumía cerca
de la mitad de la capacidad total de ingeniería, un hecho que ningún
informe anterior había sacado a la luz porque ese trabajo siempre se había
plegado dentro de "tareas de ingeniería" genéricas. Presentar este reparto
al comité ejecutivo aseguró un presupuesto dedicado de reducción de deuda
por primera vez en la historia de la plataforma, en lugar de que el trabajo
de deuda siguiera compitiendo en silencio contra cada solicitud de
funcionalidad.

**Sector público.** La división de servicios digitales de una autoridad
tributaria nacional usó el mapeo de cadena de valor para diagnosticar por
qué una funcionalidad emblemática orientada a la ciudadanía había estado
"en curso" durante más de un año a pesar de una finalización de sprint
constante. El mapa reveló que la cadena de valor en realidad abarcaba cinco
equipos distintos con tres traspasos que el organigrama no reflejaba, y la
clasificación de elementos de flujo mostró que el tiempo real de ingeniería
de la funcionalidad era una fracción pequeña de su tiempo de flujo total,
el resto consumido por retrasos de traspaso entre equipos que las métricas
propias de ningún equipo individual podían ver. La división se reestructuró
en torno a la cadena de valor en lugar del organigrama para esa línea de
producto específica, recortando el tiempo de flujo de forma sustancial en
dos trimestres.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de adoptar el Flow Framework es una respuesta defendible y
legible para el negocio a una pregunta que las métricas de canalización no
pueden responder: si la capacidad de ingeniería se asigna de la forma en
que el liderazgo cree que se asigna. El ejemplo de la aseguradora de
arriba, sacando a la luz que casi la mitad de la capacidad iba a trabajo de
deuda antes invisible, es un patrón común en cuanto una organización
clasifica su trabajo con honestidad, y esa visibilidad habitualmente
desbloquea una inversión que una vaga solicitud de "necesitamos más tiempo
para deuda técnica" nunca podría.

El coste total de propiedad se concentra en dos lugares: el ejercicio
inicial de mapeo de cadena de valor, que exige tiempo real de facilitación
para hacerse con honestidad, y la integración de herramientas necesaria
para mantener actuales los datos de elementos de flujo sin mantenimiento
manual. Ambos costes son puntuales o de bajo mantenimiento una vez bien
hechos, lo que hace que el marco resulte considerablemente más barato de
sostener de lo que es de adoptar.

## Antipatrones y errores comunes

- **Tratar el mapeo de cadena de valor como un taller puntual, nunca
  revisado:** el mapa se queda obsoleto en el momento en que cambia la
  organización, y una métrica calculada contra un mapa obsoleto mide lo
  equivocado.
- **Construir un sistema paralelo de seguimiento de elementos de flujo
  mantenido a mano:** se degrada rápido bajo una carga de trabajo real;
  intégralo en las herramientas existentes en su lugar.
- **Clasificar los elementos de flujo de forma retroactiva en lugar de en
  el momento de la entrada:** el vector de manipulación central de este
  capítulo. Bajo presión de entrega, un equipo puede reetiquetar en
  silencio trabajo de deuda o riesgo como funcionalidades a posteriori para
  parecer más productivo ante partes interesadas que solo ven el gráfico de
  distribución de flujo, sin que nadie tome nunca una decisión explícita y
  visible de hacerlo. La barrera de contención es exigir la clasificación
  en el momento de la entrada, antes de conocer el resultado, y auditar
  periódicamente una muestra de elementos clasificados frente a lo que el
  cambio subyacente realmente hizo, la misma disciplina de auditoría que
  pide el capítulo 1.2 para cada métrica de este libro.
- **Mantener las métricas de flujo solo dentro de ingeniería:** renuncia a
  la principal ventaja del marco, un vocabulario compartido con las partes
  interesadas de negocio.
- **Mapear el organigrama en lugar de la cadena de valor real:** oculta
  traspasos entre equipos que a menudo son la mayor fuente de retraso.
- **Adoptar el marco en toda la organización antes de validarlo en una
  cadena de valor:** arriesga una gran inversión en métricas en las que
  nadie confía porque el mapa subyacente nunca se confirmó preciso.

## Modelo de madurez

- **Nivel 1, Iniciar:** No existe ningún mapa de cadena de valor; el
  trabajo se rastrea como tickets genéricos sin clasificación de elementos
  de flujo.
- **Nivel 2, Desarrollar:** Se ha mapeado una cadena de valor y los
  elementos de flujo se clasifican de manera informal, pero el seguimiento
  es manual y se aplica de forma inconsistente.
- **Nivel 3, Estandarizar:** La clasificación de elementos de flujo está
  integrada en las herramientas existentes y se aplica de forma consistente
  en el momento de la entrada en las principales cadenas de valor.
- **Nivel 4, Gestionar:** La distribución de flujo se revisa regularmente
  con las partes interesadas de negocio, y los mapas de cadena de valor se
  mantienen actuales de forma activa a medida que cambia la organización.
- **Nivel 5, Orquestar:** La organización asigna la inversión en
  ingeniería de forma deliberada entre cadenas de valor usando datos de
  flujo, y puede señalar decisiones estratégicas concretas, un presupuesto
  de reducción de deuda, una reestructuración de equipo, tomadas porque el
  marco hizo visible una compensación antes invisible.

## Ideas para el debate

1. ¿Podríamos dibujar hoy un mapa de cadena de valor preciso para nuestro producto insignia, sin adivinar?
2. ¿Qué porcentaje de la capacidad del trimestre pasado revelaría una clasificación honesta de elementos de flujo que fue a deuda y riesgo, frente a funcionalidades?
3. ¿Llegan actualmente nuestras métricas de flujo a las partes interesadas de negocio, o se quedan dentro de ingeniería?
4. ¿Cuál es el mayor traspaso entre equipos de nuestra cadena de valor que nuestro organigrama no refleja?

## Conclusiones clave

- El **Flow Framework**, del libro *Project to Product* de Mik Kersten,
  mide qué tipo de valor circula por una canalización de entrega, no solo
  con qué rapidez funciona la propia canalización.
- Una **cadena de valor**, no un equipo ni una canalización, es la unidad
  de medición del marco, y mapearla con honestidad viene antes de
  instrumentar cualquier cosa.
- La **clasificación de elementos de flujo en el momento de la entrada, no
  a posteriori**, es la barrera de contención contra el vector de
  manipulación central de este capítulo: reetiquetar en silencio trabajo de
  deuda o riesgo como funcionalidades para parecer más productivo.
- **Conecta las métricas de flujo con las herramientas existentes**, Jira,
  Azure DevOps, GitHub, en lugar de un sistema de seguimiento manual
  paralelo que no sobrevivirá a una carga de trabajo real.
- Presenta los datos de flujo **directamente a las partes interesadas de
  negocio**; esa conversación, no un tablero interno de ingeniería, es la
  principal ventaja del marco sobre las métricas centradas solo en la
  canalización.

## Referencias y lecturas adicionales

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Rother, Mike, y John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, y George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, y John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
