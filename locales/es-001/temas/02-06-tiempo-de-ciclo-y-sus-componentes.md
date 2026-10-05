# 2.6 Tiempo de ciclo y sus componentes

## Visión general y motivación

El **tiempo de ciclo** es el desglose interno del tiempo de flujo (tema
2.4) de un cambio en sus etapas de ingeniería constituyentes: tiempo de
codificación, tiempo de revisión, tiempo de pruebas y tiempo de despliegue,
a veces dividido aún más en tiempo de recogida (cuánto espera un cambio
antes de que alguien empiece a trabajar en él) y tiempo activo (cuánto
tarda una vez que alguien lo hace). Mientras que el tiempo de flujo te da
un único número de cuánto tarda un cambio de principio a fin a través de
toda la cadena de valor, el [tiempo de
ciclo](https://en.wikipedia.org/wiki/Cycle_time) te dice adónde va
realmente ese tiempo una vez que llega a ingeniería, que es la capa
diagnóstica que el tema 2.4 prometía que se encuentra debajo de su
propio número resumen.

Esta distinción importa porque "el tiempo de entrega es demasiado largo" no
es accionable por sí solo. Un equipo cuyo tiempo de entrega está dominado
por el tiempo de codificación necesita una intervención distinta de un
equipo cuyo tiempo de entrega está dominado por una cola de revisión de
tres días, que a su vez necesita una intervención distinta de un equipo que
pierde la mayor parte de su tiempo en una suite de pruebas lenta y poco
fiable. Sin la descomposición del tiempo de ciclo, los equipos tienden a
adivinar el cuello de botella, y la conjetura se equivoca con la
frecuencia suficiente como para que arreglar la etapa equivocada
desperdicie esfuerzo real mientras la restricción real permanece intacta.

Para los equipos grandes, la descomposición del tiempo de ciclo es lo que
convierte una regresión del tiempo de entrega a nivel de toda la
organización de un misterio en un problema específico y abordable. Cuando
docenas de equipos comparten infraestructura común, un cuello de botella de
revisión compartido o una canalización de integración continua compartida
y lenta puede estar arrastrando hacia abajo el tiempo de entrega de todos
los equipos de forma idéntica, y solo una comparación de tiempo de ciclo
entre equipos revela esa causa raíz compartida, en lugar de que cada
equipo adivine de forma independiente su propia explicación local.

## Principios clave

- **El tiempo de ciclo explica el tiempo de entrega; no lo sustituye.**
  Repórtalos juntos, con el tiempo de ciclo como diagnóstico y el tiempo de
  entrega como resumen.
- **El tiempo de espera suele dominar sobre el tiempo activo.** La mayor
  parte del retraso en la entrega de software viene de trabajo inactivo en
  una cola, no del esfuerzo activo (el tema 2.5 cubre esto directamente
  a través de la eficiencia de flujo).
- **Descompón por etapa antes de proponer una solución.** Una solución
  dirigida a la etapa equivocada desperdicia esfuerzo y puede desmoralizar
  a un equipo al que se le pide "trabajar más rápido" cuando el cuello de
  botella real estaba en otro sitio.
- **Un cuello de botella compartido entre muchos equipos es una
  oportunidad de inversión en plataforma,** no solo una serie de problemas
  individuales de equipo.
- **Los datos de tiempo de ciclo están expuestos a los mismos riesgos de
  manipulación que el tiempo de flujo** (tema 2.4): vigila los límites
  de etapa que se desplazan en silencio para favorecer un número.

## Recomendaciones

### Instrumenta explícitamente cada límite de etapa

Divide el recorrido de un cambio en etapas nombradas con límites claros e
instrumentables: codificación (del primer commit a la apertura de la
solicitud de incorporación de cambios), recogida (de la apertura de la
solicitud a la primera revisión), revisión (de la primera revisión a la
aprobación), y despliegue (de la aprobación a producción). Captura marcas
de tiempo para cada transición de forma automática a partir de eventos de
control de versiones e integración continua, no a partir de un seguimiento
de etapas autoinformado, aplicando el mismo principio de instrumentación
sobre autoinforme del tema 1.5.

### Separa el tiempo de espera del tiempo activo dentro de cada etapa

Dentro de la revisión, por ejemplo, distingue el tiempo que una solicitud
de incorporación de cambios permanece sin tocar esperando a que un revisor
empiece (tiempo de espera) del tiempo que lleva una conversación de
revisión activa una vez que empieza (tiempo activo). Esta distinción suele
revelar que el coste dominante es la cola, no el esfuerzo, lo que apunta
hacia una solución muy distinta (más capacidad de revisores, mejores
notificaciones, solicitudes de incorporación de cambios más pequeñas para
revisar) que una solución dirigida a hacer más rápidas las propias
conversaciones de revisión.

### Busca un cuello de botella compartido antes de diagnosticar equipo por equipo

Cuando varios equipos muestran la misma etapa como su retraso dominante,
una canalización de integración continua compartida y lenta, un grupo de
revisión compartido sobrecargado, un tren de publicación compartido poco
frecuente, esa causa compartida es una oportunidad de inversión a nivel de
plataforma, no una serie de problemas locales sin relación. Agrega los
datos de tiempo de ciclo entre equipos específicamente para buscar este
patrón antes de asumir que el cuello de botella de cada equipo es único
para ese equipo.

### Usa el tiempo de ciclo para fijar objetivos de mejora realistas y específicos por etapa

En lugar de un único objetivo de "reducir el tiempo de entrega en un 20%",
que no le da a un equipo ninguna guía sobre dónde enfocarse, usa la
descomposición del tiempo de ciclo para fijar un objetivo específico por
etapa: "reducir el tiempo de espera mediano de revisión de dos días a
cuatro horas". Un objetivo específico y dirigido a una etapa es tanto más
fácil de accionar para un equipo como más fácil de verificar que se logró
realmente mediante un cambio de proceso real en lugar de un desplazamiento
sin relación en otro lugar.

### Vigila la manipulación de límites de etapa

Igual que los puntos de inicio y fin del tiempo de flujo pueden derivar
(tema 2.4), los límites de etapa individuales del tiempo de ciclo
pueden desplazarse de formas que favorecen el número de una etapa
específica sin ninguna mejora real, por ejemplo, marcar una revisión como
"empezada" en el momento en que se asigna un revisor en lugar de cuando
realmente empieza a leer el cambio. Audita periódicamente la
instrumentación de límites de etapa frente a su definición documentada.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Tiempo de ciclo de grano grueso (dos o tres etapas) | Sencillo de instrumentar y explicar | Puede no señalar el cuello de botella real con suficiente precisión para actuar |
| Tiempo de ciclo de grano fino (muchas etapas, división espera frente a activo) | Diagnóstico preciso, objetivos específicos por etapa accionables | Más esfuerzo de instrumentación; más números que mantener y explicar |
| Revisión de tiempo de ciclo equipo por equipo | Ajustada al flujo de trabajo real de cada equipo | Puede pasar por alto un cuello de botella compartido entre equipos oculto detrás de números locales similares |
| Revisión agregada de tiempo de ciclo entre equipos | Revela cuellos de botella compartidos a nivel de plataforma | Requiere definiciones de etapa estandarizadas entre equipos para ser significativa |

La tensión central es **precisión diagnóstica frente a coste de
instrumentación**. Un rastreo de tiempo de ciclo de grano más fino da un
diagnóstico más accionable pero cuesta más construir y mantener, y añade
más números que un equipo tiene que entender y en los que tiene que
confiar. Resuélvela empezando por lo grueso (codificación, revisión,
despliegue) y añadiendo divisiones más finas, espera frente a tiempo
activo dentro de una etapa específica, solo una vez que esa etapa se
confirme como un cuello de botella genuino y recurrente que merezca la
inversión adicional de instrumentación.

## Preguntas para debatir con tu equipo

1. **Si el tiempo de entrega regresara hoy, ¿podríamos decir en una hora
   qué etapa específica fue responsable, usando datos en lugar de
   conjeturas?** Esta es la prueba central de si tu instrumentación de
   tiempo de ciclo realmente cumple su propósito diagnóstico. Si la
   respuesta honesta es no, ese vacío merece cerrarse antes de que ocurra
   la próxima regresión.

2. **Dentro de nuestra etapa de cuello de botella dominante, ¿cuánto del
   retraso es tiempo de espera frente a tiempo activo?** La mayoría de los
   equipos asumen que el esfuerzo activo es la restricción antes de
   comprobarlo, cuando la cola suele ser el coste mayor. Extrae el reparto
   real de tu etapa más lenta y comprueba si se sostiene la suposición.

3. **¿Comparten varios equipos la misma etapa de cuello de botella
   dominante, sugiriendo una solución a nivel de plataforma en lugar de a
   nivel de equipo?** Agrega tus datos de tiempo de ciclo entre equipos y
   busca explícitamente este patrón antes de asumir que la lentitud de
   cada equipo tiene una causa local.

4. **¿Hemos fijado objetivos de mejora específicos por etapa, o solo un
   único objetivo general de tiempo de entrega sin ninguna guía sobre dónde
   enfocarse?** Un objetivo vago deja a un equipo adivinando dónde invertir
   esfuerzo; uno específico por etapa no. Comprueba tus objetivos actuales
   frente a esta distinción.

5. **¿Ha derivado algún límite de etapa del tiempo de ciclo en nuestra
   instrumentación de su definición documentada con el tiempo?** Los
   límites de etapa están expuestos a la misma deriva de definición que el
   propio tiempo de flujo (tema 2.4). Audita una muestra de eventos
   recientes de transición de etapa frente a la definición escrita.

6. **¿Cómo se manifiesta de forma distinta una cultura de revisión intensa
   frente a una cultura de confianza alta en nuestros datos de tiempo de
   ciclo?** Un equipo con una revisión muy exhaustiva y de varias rondas
   mostrará un tiempo de etapa de revisión más largo que un equipo que
   confía en fusiones de aprobación única; debate si tu equilibrio actual
   refleja una elección deliberada o un valor por defecto nunca examinado.

## Enfoque sectorial

**Startup.** El tiempo de ciclo suele estar dominado por el tiempo de
codificación en lugar de por las etapas de revisión o despliegue,
simplemente porque el proceso es mínimo. A medida que el equipo crece más
allá de un puñado de ingenieros, empieza a vigilar específicamente el
tiempo de espera de revisión, ya que suele ser la primera etapa en
ralentizarse cuando el trabajo de más personas tiene que pasar por menos
revisores disponibles.

**Pequeña empresa.** La analítica básica de la plataforma de control de
versiones suele exponer suficiente cronometraje a nivel de etapa (tiempo
hasta la primera revisión, tiempo hasta la fusión) sin instrumentación
personalizada. Enfócate primero en la etapa de revisión, ya que es el
cuello de botella temprano más común y el más fácil de arreglar con un
pequeño cambio de proceso como una rotación de revisores.

**Empresa grande.** Los cuellos de botella compartidos entre docenas de
equipos son comunes y de alto apalancamiento para encontrar: una única cola
de integración continua compartida y sobrecargada, o un paso de revisión
central obligatorio, pueden estar gravando en silencio el tiempo de entrega
en toda la organización. Invierte específicamente en la agregación de
tiempo de ciclo entre equipos para sacar a la luz estas restricciones
compartidas en lugar de dejar que cada equipo diagnostique de forma
independiente.

**Sector público.** Los datos de tiempo de ciclo son una herramienta
sólida y concreta para justificar la modernización de procesos ante partes
interesadas escépticas, ya que "el tiempo de espera de revisión promedia
cuatro días debido a un único rol de aprobación con cuello de botella" es
un caso mucho más persuasivo y específico para la inversión que una
afirmación abstracta de "nuestro proceso es lento".

## Ejemplos

**Empresa grande.** El liderazgo de ingeniería de una empresa de
infraestructura en la nube notó que el tiempo de entrega subía casi
simultáneamente en casi todos los equipos. La agregación de tiempo de
ciclo entre equipos reveló que el tiempo de espera de revisión, no el
tiempo activo de revisión, era la causa dominante y compartida: un equipo
pequeño y centralizado de revisión de seguridad se había convertido en un
cuello de botella a medida que el número de equipos que requerían su
aprobación crecía más rápido que el propio equipo. Ampliar y formar un
grupo más amplio de revisores certificados en seguridad, en lugar de pedir
a los equipos individuales que de alguna forma codificaran o probaran más
rápido, resolvió el cuello de botella compartido y devolvió el tiempo de
entrega a la baja en todos los equipos en un trimestre.

**Sector público.** El equipo de servicios digitales de un gobierno estatal
estaba bajo presión para reducir el tiempo de entrega, y al principio
respondió pidiendo a los ingenieros que trabajaran más rápido, un instinto
natural pero en última instancia poco útil. La descomposición del tiempo
de ciclo mostró que el tiempo activo de codificación apenas había cambiado
año tras año; casi toda la regresión venía de una cola creciente en una
etapa obligatoria de revisión de arquitectura introducida dieciocho meses
antes como medida de cumplimiento. El equipo rediseñó esa revisión hacia un
proceso más ligero y escalonado por riesgo para cambios de bajo riesgo,
recortando sustancialmente el tiempo de espera de revisión mientras
preservaba el rigor completo de revisión para cambios genuinamente de alto
riesgo.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de la descomposición del tiempo de ciclo es una inversión
dirigida y eficaz: una organización que sabe exactamente qué etapa es el
cuello de botella puede arreglar esa etapa específica en lugar de repartir
el esfuerzo de forma diluida por todo un proceso con la esperanza de que
algo ayude. El ejemplo de revisión de seguridad de arriba es típico: una
solución dirigida con precisión, ampliar un recurso específico con cuello
de botella, resolvió un problema a nivel de toda la organización mucho más
barato de lo que lo habría hecho una iniciativa amplia y difusa de
"acelerar la entrega".

El coste total de propiedad es el esfuerzo de instrumentación para
capturar marcas de tiempo a nivel de etapa de forma fiable y la disciplina
continua de auditar periódicamente los límites de etapa en busca de
deriva. Ese coste merece la pena porque la alternativa, adivinar los
cuellos de botella y arreglar la etapa equivocada, desperdicia mucho más
esfuerzo de ingeniería con el tiempo del que cuesta la propia
instrumentación.

## Antipatrones y errores comunes

- **Reaccionar a una regresión del tiempo de entrega sin diagnóstico de
  tiempo de ciclo:** con frecuencia lleva a arreglar la etapa equivocada.
- **Asumir que el esfuerzo activo, no el tiempo de espera, es el coste
  dominante:** normalmente equivocado; la cola domina en la mayoría de las
  canalizaciones de entrega reales (tema 2.5).
- **Pasar por alto un cuello de botella compartido entre equipos por
  revisar el tiempo de ciclo solo equipo por equipo:** deja sin descubrir
  una solución de plataforma de alto apalancamiento.
- **Fijar un objetivo general vago de tiempo de entrega sin guía específica
  por etapa:** deja a los equipos adivinando dónde enfocar el esfuerzo.
- **Deriva de definición de límites de etapa:** favorece el número de una
  etapa específica sin mejora real.
- **Instrumentar cada etapa posible de grano fino antes de confirmar que
  alguna de ellas es un cuello de botella genuino:** desperdicia esfuerzo
  de instrumentación en detalle que todavía no informa ninguna decisión.

## Modelo de madurez

- **Nivel 1, Iniciar:** El tiempo de ciclo no se descompone en absoluto;
  los equipos adivinan los cuellos de botella cuando regresa el tiempo de
  entrega.
- **Nivel 2, Desarrollar:** Algunos equipos rastrean el cronometraje de
  etapa de grano grueso de manera informal, pero no hay instrumentación
  consistente ni comparación entre equipos.
- **Nivel 3, Estandarizar:** Los límites de etapa se instrumentan de forma
  consistente en toda la organización, con el tiempo de espera separado del
  tiempo activo en las etapas de cuello de botella dominantes.
- **Nivel 4, Gestionar:** La agregación de tiempo de ciclo entre equipos
  saca activamente a la luz cuellos de botella compartidos; los objetivos
  de mejora específicos por etapa sustituyen a las metas generales vagas de
  tiempo de entrega.
- **Nivel 5, Orquestar:** Los datos de tiempo de ciclo impulsan
  directamente la priorización de la inversión en plataforma, y la
  organización puede señalar soluciones concretas y dirigidas, un grupo de
  revisión ampliado, una canalización compartida más rápida, que mejoraron
  de forma medible el tiempo de entrega en muchos equipos a la vez.

## Ideas para el debate

1. ¿Cuál es nuestra etapa de cuello de botella dominante actual, y qué tan seguros estamos de esa respuesta?
2. ¿Cuánto del tiempo de esa etapa de cuello de botella es tiempo de espera frente a tiempo activo?
3. ¿Comparte alguno de nuestros equipos el mismo cuello de botella, sugiriendo una solución a nivel de plataforma?
4. ¿Cuándo fijamos por última vez un objetivo de mejora de entrega específico por etapa, en lugar de general?
5. ¿Ha cambiado alguna vez una definición de límite de etapa en nuestras herramientas sin documentarse?

## Conclusiones clave

- El tiempo de ciclo **descompone el tiempo de flujo** en etapas de
  ingeniería, codificación, revisión, pruebas, despliegue, y es la capa
  diagnóstica que hay debajo de ese número resumen.
- Separa el **tiempo de espera del tiempo activo** dentro de cada etapa; la
  cola suele dominar sobre el esfuerzo activo (tema 2.5).
- Busca **cuellos de botella compartidos entre equipos** antes de asumir
  que una ralentización es específica de un equipo; una causa compartida
  suele ser una oportunidad de inversión en plataforma.
- Fija **objetivos de mejora específicos por etapa**, no metas generales
  vagas, para que los equipos sepan exactamente dónde enfocarse.
- Los límites de etapa están expuestos al mismo riesgo de **deriva de
  definición** que el propio tiempo de flujo; audítalos periódicamente.
- El tema 2.7 da las matemáticas subyacentes, la ley de Little, de por
  qué el trabajo en curso y el tiempo de ciclo se mueven juntos.

## Referencias y lecturas adicionales

- *The Principles of Product Development Flow*, de Donald G. Reinertsen
  (teoría de colas y razonamiento de tamaño de lote subyacentes al
  análisis de tiempo de ciclo).
- *Actionable Agile Metrics for Predictability*, de Daniel S. Vacanti
  (medición de tiempo de ciclo y basada en flujo para la entrega de
  software).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (el tiempo de entrega y su relación con
  el rendimiento de entrega).
- *The Goal*, de Eliyahu M. Goldratt (teoría de las restricciones, y el
  principio de encontrar y arreglar el cuello de botella real en lugar de
  optimizar en todas partes).
