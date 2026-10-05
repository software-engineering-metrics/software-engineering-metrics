# 8.3 Lanzar métricas sin sembrar miedo

## Visión general y motivación

Este capítulo es, en un sentido real, la culminación práctica de todo lo
que ha argumentado este libro desde que el capítulo 1.2 introdujo la ley
de Goodhart: un programa de métricas lanzado mal, de una manera que
provoca miedo en lugar de confianza, garantiza exactamente el
comportamiento de manipulación frente al que ha advertido cada capítulo
posterior, sin importar cuán cuidadosamente se diseñara cada métrica
individual. Una organización puede acertar en cada detalle técnico,
visualización honesta, emparejamiento con salvaguardas, gobernanza
cuidadosa, y aun así producir un programa de métricas corrupto y poco
confiable si el propio lanzamiento le enseña a los ingenieros que estos
números existen para juzgarlos en lugar de para ayudarlos.

El mecanismo aquí es directo y está bien documentado en la investigación
de comportamiento organizacional que ha citado este libro a lo largo de
todo el texto: las personas que temen que una métrica se use en su
contra, socavando la [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety),
responden exactamente como predice el capítulo 1.2, optimizan el número
en lugar de la realidad subyacente, porque el incentivo de protegerse a
sí mismos es inmediato y personal mientras que el daño al aprendizaje
organizacional es difuso y diferido. Esto no es un fallo de carácter
individual; es una respuesta racional a una amenaza genuina, y la única
corrección duradera es eliminar la amenaza, no pedirle a la gente que se
comporte con más honestidad a pesar de ella.

Para los equipos grandes, la orientación de este capítulo importa más
agudamente en el momento del lanzamiento inicial, cuando la confianza
todavía no se ha establecido en ninguna dirección y las primeras
impresiones fijan expectativas duraderas. Las organizaciones empresariales
que introducen un nuevo programa de métricas en toda la organización
arriesgan que un único incidencia inicial mal manejado, las métricas de un
equipo usadas punitivamente, envenene la confianza en todo el
lanzamiento; las organizaciones gubernamentales, que a menudo introducen
programas de métricas en un contexto de protecciones sindicales
existentes, cultura de función pública, o desconfianza histórica hacia
las iniciativas de medición, necesitan aplicar la orientación de este
capítulo con un cuidado y paciencia particulares.

## Principios clave

- **El miedo corrompe los datos más rápida y completamente que cualquier
  defecto técnico en el diseño de métricas.** Una métrica perfectamente
  diseñada pero lanzada mal igual se manipula.
- **La confianza se establece mediante un uso no punitivo demostrado y
  consistente, no solo mediante una declaración de política.** Las
  acciones a lo largo de múltiples ciclos construyen confianza; las
  palabras por sí solas no lo hacen.
- **Las incidencias tempranas de lanzamiento fijan expectativas
  duraderas.** Las primeras veces que una métrica toca algo consecuente
  determinan cómo se percibirá todo el programa en adelante.
- **La transparencia sobre el propósito y el proceso reduce el miedo más
  que la tranquilización por sí sola.** La gente confía en lo que puede
  ver y entender, no solo en lo que se le dice.
- **Esta es una disciplina organizacional sostenida, no un anuncio de
  lanzamiento de una sola vez.** El miedo puede volver a infiltrarse
  gradualmente incluso después de un comienzo genuinamente confiable.

## Recomendaciones

### Comunica el propósito y los no-objetivos explícitamente, antes del lanzamiento, no después de que surjan preocupaciones

Siguiendo la disciplina de carta de métricas del capítulo 1.4, comunica
el propósito de un nuevo programa de métricas y, de manera crucial, sus
no-objetivos explícitos (nunca se usa para la evaluación de rendimiento
individual sin una política separada y claramente divulgada, según el
capítulo 1.1) antes del lanzamiento, no de manera reactiva después de que
los ingenieros ya hayan empezado a preocuparse. La transparencia
proactiva y anticipada sobre para qué no sirve una métrica previene la
especulación ansiosa que de otro modo llena el vacío y moldea impresiones
tempranas y difíciles de revertir.

### Involucra a las personas medidas en el proceso de diseño

Los ingenieros que ayudan a diseñar las métricas que describirán su
propio trabajo tienen muchas menos probabilidades de temer o resentir
esas métricas que aquellos a quienes se les impone un sistema sin ninguna
aportación. Involucra directamente a representantes del equipo en elegir
qué métricas rastrear, cómo se visualizan, y qué salvaguardas se aplican,
siguiendo el énfasis consistente de este libro en la propiedad a nivel de
equipo (capítulo 1.4) en lugar de un mandato puramente de arriba hacia
abajo.

### Empieza con un uso puramente diagnóstico y demuéstralo durante múltiples ciclos antes de siquiera considerar cualquier uso evaluativo

Siguiendo directamente la distinción diagnóstica frente a evaluativa del
capítulo 1.1: empieza un nuevo programa de métricas en modo puramente
diagnóstico, usado solo para entender y mejorar sistemas, sin ninguna
conexión en absoluto con la evaluación individual o de equipo, y sostén
esa disciplina visiblemente a lo largo de varios ciclos de reporte antes
de que siquiera empiece cualquier conversación sobre un uso más amplio.
La confianza construida de esta manera, mediante una contención
demostrada con el tiempo, es mucho más duradera que la confianza afirmada
solo mediante un documento de política.

### Responde al primera incidencia mal manejado de inmediato y visiblemente

Si una métrica se usa mal punitivamente, aunque sea una vez, aunque sea
de manera informal, abórdalo de inmediato, visiblemente, y directamente,
en lugar de dejar que pase en silencio. La respuesta de una organización
a su primera incidencia de mal manejo es desproporcionadamente importante
para moldear la confianza de todo el equipo u organización en todo el
programa en adelante; una corrección rápida y transparente señala un
compromiso genuino con el propósito no punitivo declarado, mientras que
el silencio o una excepción tranquila y sin abordar confirma exactamente
el miedo que impulsa el comportamiento de manipulación en primer lugar.

### Convierte el propio riesgo de manipulación en una conversación compartida y transparente, no en una preocupación oculta de la gerencia

En lugar de tratar el riesgo de manipulación como algo que le preocupa al
liderazgo en privado, comparte abiertamente la lógica de emparejamiento
con salvaguardas del capítulo 1.2 con los equipos que se miden: explica
directamente por qué existe una salvaguarda específica, qué patrón de
manipulación está diseñada para detectar, e invita la propia aportación
del equipo sobre si la salvaguarda está bien diseñada. Esta
transparencia, enmarcando a todo el equipo como socios en la prevención
de la manipulación en lugar de sujetos vigilados por ella, construye una
relación fundamentalmente distinta con el programa de métricas que un
sistema que vigila silenciosamente la manipulación desde arriba sin
discutir nunca el riesgo abiertamente.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Mandato de arriba hacia abajo con una participación mínima del equipo | Rápido de lanzar, diseño consistente | Alto riesgo de manipulación impulsada por el miedo y baja confianza desde el principio |
| Lanzamiento con participación del equipo y codiseñado | Construye confianza y compromiso genuinos, menor riesgo de manipulación | Más lento de lanzar, requiere más esfuerzo de coordinación |
| Uso evaluativo inmediato desde el primer día | Se siente eficiente, conecta las métricas con consecuencias rápidamente | Provoca el máximo miedo y riesgo de manipulación antes de que se haya establecido ninguna confianza |
| Período de demostración extendido y solo diagnóstico antes de cualquier uso evaluativo | Construye confianza duradera y basada en evidencia | Más lento para materializar cualquier caso de uso evaluativo que el liderazgo pueda eventualmente querer |

La tensión central es **velocidad de lanzamiento frente a construcción de
confianza**. Un lanzamiento rápido y de arriba hacia abajo pone en
marcha un programa de métricas rápidamente pero con un riesgo real de
provocar exactamente el miedo y la manipulación frente a los que ha
advertido este libro desde su capítulo inicial; un lanzamiento más lento,
con participación del equipo, y primero diagnóstico toma más tiempo pero
construye la confianza duradera que hace que los datos resultantes
realmente valgan la pena recopilar en primer lugar. Resuelve la tensión
firmemente a favor de la construcción de confianza, ya que un programa de
métricas que se lanza rápido pero produce datos manipulados y poco
confiables no ha logrado, en un sentido real, nada de lo que ha
argumentado este libro, por muy rápido que se haya desplegado.

## Preguntas para debatir con tu equipo

1. **¿El propósito y los no-objetivos explícitos de nuestro programa de
   métricas actual se comunicaron antes del lanzamiento, o los
   ingenieros se enteraron primero y solo después escucharon
   tranquilización sobre cómo se usaría?** Si la tranquilización llegó de
   manera reactiva en lugar de proactiva, esa secuenciación en sí misma
   puede haber moldeado negativamente la confianza temprana, vale la pena
   nombrarlo con honestidad.

2. **¿Las personas medidas estuvieron involucradas en diseñar las
   métricas que describen su propio trabajo, o se impuso el sistema sin
   ninguna aportación?** Evalúa tu proceso de lanzamiento real frente a
   esta prueba específica, ya que la participación importa de manera
   independiente a lo bueno que resultó ser el diseño de métricas
   resultante.

3. **¿Nuestro programa de métricas ha sostenido un uso genuinamente solo
   diagnóstico a lo largo de múltiples ciclos de reporte, o el uso
   evaluativo se ha infiltrado antes de lo que recomendaría un
   lanzamiento centrado en la confianza?** Rastrea la historia real con
   honestidad; la deriva aquí a menudo ocurre gradual e informalmente en
   lugar de mediante un único cambio de política explícito.

4. **¿Una métrica alguna vez se ha usado mal punitivamente, aunque sea
   una vez, aunque sea de manera informal, y cómo respondió la
   organización?** Si esto ha ocurrido, evalúa con honestidad si la
   respuesta fue rápida y visible o tranquila y sin abordar, ya que esa
   respuesta moldeó la confianza en todo el programa mucho más que la incidencia original en sí.

5. **¿Los equipos medidos entienden por qué existe cada salvaguarda, o la
   lógica de prevención de manipulación sigue siendo una preocupación
   privada de la gerencia de la que nunca se les informa directamente?**
   Debate si el razonamiento de salvaguardas de tu organización (capítulo
   1.2) realmente se ha compartido con transparencia o ha permanecido
   como una consideración de diseño no declarada y entre bastidores.

6. **Si comenzáramos nuestro lanzamiento de métricas desde cero hoy,
   aplicando plenamente la orientación de este capítulo, ¿cuán distinto
   se vería el proceso de lo que realmente ocurrió?** Este experimento
   mental retrospectivo a menudo revela lugares específicos y nombrables
   donde se recortó la construcción de confianza bajo presión de tiempo,
   vale la pena aprender de ello incluso si el lanzamiento original no se
   puede deshacer.

## Enfoque sectorial

**Startup.** La confianza a menudo es más fácil de establecer a esta
escala, ya que la conversación directa diaria proporciona naturalmente la
transparencia que recomienda este capítulo. El riesgo es saltarse la
comunicación deliberada del propósito y los no-objetivos simplemente
porque se siente innecesaria en un equipo pequeño y muy unido, una
suposición que puede desmoronarse silenciosamente a medida que el equipo
crece y se unen nuevas contrataciones sin el mismo contexto compartido.

**Pequeña empresa.** Una conversación simple y directa sobre por qué se
está introduciendo una nueva métrica y para qué se usará y no se usará,
celebrada antes del lanzamiento en lugar de después de que surjan
preocupaciones, captura la mayor parte del valor de este capítulo sin
necesitar un proceso formal a esta escala.

**Empresa.** La escala y la impersonalidad de una organización grande
hacen que la orientación de este capítulo sea tanto más difícil de
ejecutar bien como más crítico acertar, ya que un único incidencia mal
manejado puede envenenar la confianza en docenas de equipos que se
enteran de segunda mano en lugar de experimentarlo directamente.
Invierte deliberadamente en el período de demostración extendido y
primero diagnóstico que recomienda este capítulo, y establece un
protocolo de respuesta claro, rápido, y visible para cualquier incidencia
de mal uso de métricas antes de que ocurra uno.

**Gobierno.** Las organizaciones del sector público a menudo introducen
programas de métricas en un contexto de protecciones sindicales
existentes, cultura de función pública establecida, y, en algunos casos,
desconfianza histórica hacia las iniciativas de medición vinculadas a
controversias pasadas de gestión de rendimiento. Aplica la orientación de
este capítulo con una paciencia y formalidad particulares, involucrando
potencialmente la aportación de representantes sindicales o de personal
directamente en el proceso de diseño, y espera que el cronograma de
construcción de confianza sea genuinamente más largo que en un contexto
típico del sector privado.

## Ejemplos

**Empresa.** El lanzamiento inicial de un panel exhaustivo de métricas de
ingeniería de una empresa de software, diseñado enteramente por un equipo
de plataforma central sin ninguna aportación a nivel de equipo, se
encontró con una resistencia generalizada y silenciosa: los ingenieros de
toda la organización empezaron a manipular informalmente sus propios
números reportados en cuestión de semanas, exactamente como predice el
capítulo 1.2 para un sistema de métricas desconfiado y de arriba hacia
abajo. Un relanzamiento seis meses después, esta vez involucrando
directamente a representantes del equipo en la selección de métricas y el
diseño de salvaguardas, y comprometiéndose explícitamente con, y luego
genuinamente sosteniendo, un período de seis meses de solo diagnóstico
antes de que empezara cualquier conversación sobre un uso más amplio,
produjo datos mesurablemente más confiables en el plazo de un año: una
auditoría interna que comparaba los recuentos de despliegue
autorreportados y los instrumentados por el flujo encontró que la brecha
entre ambos se había cerrado sustancialmente en comparación con los
primeros meses del lanzamiento original.

**Gobierno.** El primer intento de una agencia de un gobierno estatal de
introducir métricas de ingeniería se había abandonado por completo dos
años antes tras una única incidencia en la que un gerente había
referenciado informalmente los datos de actividad de un individuo en una
conversación de rendimiento, una incidencia aislada pero sin abordar que
había envenenado la confianza en toda la iniciativa en toda la agencia
durante años después, con el personal todavía refiriéndose a "el asunto
de las métricas" con un escepticismo visible mucho después de que el
programa original se hubiera archivado silenciosamente. Un programa
nuevo y deliberadamente relanzado abordó esta historia directa y
públicamente, reconociendo el mal manejo pasado, comprometiéndose con una
política de uso no punitivo específica y publicada con un patrocinador
ejecutivo responsable nombrado, y estableciendo un protocolo de respuesta
rápido y transparente para cualquier futura preocupación de mal uso. Este
reconocimiento explícito del fracaso pasado, en lugar de simplemente
relanzar como si la historia no existiera, fue específicamente reconocido
por los representantes del personal como la razón por la que el segundo
intento ganó confianza genuina donde el primero no lo había logrado.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de un lanzamiento centrado en la confianza y que evita el
miedo es, sencillamente, datos confiables, sin los cuales todo el
cuidadoso trabajo de diseño de métricas de cada otro capítulo de este
libro no produce ningún valor real. El ejemplo empresarial anterior lo
muestra concreta y mesurablemente: los datos del programa relanzado eran
demostrablemente más precisos de lo que habían sido los datos del
lanzamiento original impulsado por el miedo, un retorno directo y
cuantificable de la inversión adicional en construcción de confianza.

El coste total de propiedad es principalmente tiempo y paciencia
organizacional: el período de demostración extendido y primero
diagnóstico, el esfuerzo de participación del equipo en el diseño, y la
disciplina sostenida de responder rápida y visiblemente a cualquier incidencia de mal uso. Ese coste es significativo pero es el precio
necesario e ineludible de los datos confiables de los que depende cada
otro capítulo de este libro; un lanzamiento rápido que se salta esta
inversión produce un programa de métricas que parece completo pero es
silenciosamente inútil, corrompido por exactamente la manipulación frente
a la que ha advertido este libro desde su primer capítulo sustantivo.

## Antipatrones y errores comunes

- **Un lanzamiento de arriba hacia abajo sin participación del equipo en
  el diseño de métricas:** provoca miedo y manipulación desde el
  principio, sin importar lo bien diseñadas que estén las propias
  métricas.
- **Comunicación reactiva en lugar de proactiva del propósito y los
  no-objetivos:** deja que la especulación ansiosa llene el vacío y
  moldee impresiones tempranas y difíciles de revertir.
- **Apresurarse hacia el uso evaluativo antes de que haya transcurrido un
  período genuino de confianza solo diagnóstico:** la forma más común en
  que un nuevo programa de métricas provoca inmediatamente un
  comportamiento de manipulación.
- **Una respuesta tranquila y sin abordar a una incidencia de mal uso de
  métricas:** confirma exactamente el miedo que impulsa la manipulación y
  causa un daño duradero a la confianza en todo el programa.
- **Mantener la lógica de salvaguardas y prevención de manipulación como
  una preocupación privada de la gerencia:** pierde la oportunidad de
  construir confianza mediante un razonamiento transparente y compartido
  con los equipos medidos.
- **Relanzar un programa de métricas previamente mal manejado sin
  reconocer directamente el fracaso pasado:** repite el error original de
  transparencia insuficiente, esta vez agravado por una historia sin
  abordar.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas se lanzan de arriba hacia abajo sin
  participación del equipo, y el propósito y los no-objetivos se
  comunican de manera reactiva, si es que se comunican.
- **Nivel 2, Desarrollar:** Ocurre cierta comunicación y participación del
  equipo, pero no hay ningún período sostenido de demostración solo
  diagnóstico ni ningún protocolo claro de respuesta al mal uso.
- **Nivel 3, Estandarizar:** Los nuevos programas de métricas se lanzan de
  manera consistente con comunicación proactiva, participación del
  equipo en el diseño, y un período comprometido de demostración solo
  diagnóstico en toda la organización.
- **Nivel 4, Gestionar:** Existe un protocolo de respuesta al mal uso
  rápido, transparente, y probado y se ha ejercitado, y el razonamiento
  de salvaguardas se comparte abiertamente con los equipos medidos como
  práctica estándar.
- **Nivel 5, Orquestar:** La organización tiene un historial demostrado y
  sostenido de datos de métricas confiables y de baja manipulación,
  directamente atribuible a una práctica de lanzamiento disciplinada y
  centrada en la confianza, y este historial se protege y refuerza
  activamente con cada nueva métrica introducida.

## Ideas para el debate

1. ¿El propósito de nuestro programa de métricas actual se comunicó antes o después de que surgieran preocupaciones?
2. ¿Las personas medidas estuvieron genuinamente involucradas en diseñar nuestras métricas, o se impuso el sistema?
3. ¿Nuestra organización alguna vez ha manejado mal una métrica punitivamente, y cómo respondimos?
4. ¿Los equipos medidos entienden por qué existen nuestras salvaguardas, o ese razonamiento se mantiene privado?
5. Si relanzáramos hoy nuestro programa de métricas con plena atención a este capítulo, ¿qué haríamos distinto?

## Conclusiones clave

- **El miedo corrompe los datos más rápida y completamente que cualquier
  defecto técnico** en el diseño de métricas; una métrica perfectamente
  diseñada pero lanzada mal igual se manipula.
- **Involucra directamente a los equipos medidos en el diseño de
  métricas**, y comunica el propósito y los no-objetivos explícitos de
  manera proactiva, antes del lanzamiento.
- **Empieza solo con diagnóstico y demuéstralo durante múltiples
  ciclos** antes de siquiera considerar cualquier uso evaluativo.
- **Responde al primera incidencia mal manejado de inmediato y
  visiblemente**; el silencio confirma exactamente el miedo que impulsa
  el comportamiento de manipulación.
- **Comparte el razonamiento de salvaguardas y prevención de manipulación
  con transparencia** con los equipos medidos, construyendo una
  asociación en lugar de una relación de vigilancia.

## Referencias y lecturas adicionales

- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H.
  Pink (la motivación intrínseca frente a la extrínseca, directamente
  relevante para por qué el miedo corrompe el comportamiento impulsado
  por métricas).
- *The Tyranny of Metrics*, de Jerry Z. Muller (los costes
  organizacionales y culturales de los programas de métricas mal
  implementados).
- *Site Reliability Engineering: How Google Runs Production Systems*, de
  Betsy Beyer, Chris Jones, Jennifer Petoff, y Niall Richard Murphy, eds.
  (los principios de cultura sin culpa que este capítulo extiende de la
  respuesta a incidencias al lanzamiento de programas de métricas en
  general).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la investigación de cultura
  organizacional que sustenta la práctica de métricas de ingeniería
  confiable y de alto rendimiento).
