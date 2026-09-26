# 3.1 El marco SPACE

## Visión general y motivación

El [marco SPACE](https://queue.acm.org/detail.cfm?id=3454124), publicado en
2021 por las investigadoras e investigadores Nicole Forsgren, Margaret-Anne
Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck y Jenna Butler, se
construyó para responder a un problema específico: las métricas de
[productividad del
desarrollador](https://en.wikipedia.org/wiki/Productivity) de un único
número, líneas de código, número de commits, puntos de historia, son
triviales de manipular y engañan de forma habitual. SPACE propone medir en
su lugar a través de cinco dimensiones: **Satisfacción y bienestar**,
**Rendimiento**, **Actividad**, **Comunicación y colaboración**, y
**Eficiencia y flujo**. Ninguna letra individual pretende sostenerse sola;
la contribución real del marco es la disciplina de mantener las cinco a la
vista juntas, para que un equipo no pueda verse productivo en un eje
mientras daña otro en silencio.

Esto importa porque la productividad del desarrollador no es una sola
cosa. Un equipo puede estar muy activo (muchos commits, muchas solicitudes
de incorporación de cambios) mientras rinde mal (el trabajo no mueve los
resultados que importan). Un equipo puede rendir bien a corto plazo
mientras la satisfacción se desploma, un indicador adelantado de la
rotación y el colapso de calidad que aparecen meses después. La intuición
de SPACE, construida directamente sobre los capítulos 1.2 y 1.3 de este
libro, es que cualquiera de estas dimensiones, perseguida como objetivo
aislado, se manipulará a expensas de las demás, y el marco existe
específicamente para hacer visible esa compensación antes de que cause un
daño real.

Para los equipos grandes, SPACE le da al liderazgo un vocabulario
compartido para una conversación que de otro modo recurre por defecto a la
dimensión que resulte más fácil de medir, casi siempre la actividad. Las
organizaciones grandes que comparan la productividad entre muchos equipos
necesitan un marco que resista el tirón hacia contar commits; las
organizaciones del sector público que enfrentan presión de contratación y
retención en un mercado laboral competitivo necesitan datos de
satisfacción y bienestar con la misma seriedad que necesitan datos de
entrega, porque perder a un ingeniero experimentado por agotamiento cuesta
mucho más de lo que jamás ahorró la producción de un solo sprint.

## Principios clave

- **Ninguna dimensión individual de SPACE es fiable de forma aislada.** El
  valor del marco viene específicamente de medir varias juntas.
- **Al menos una métrica de al menos tres dimensiones, mezclando fuentes
  subjetivas y objetivas, es el mínimo para una imagen equilibrada.** Un
  conjunto de métricas extraído por completo de una dimensión o un tipo de
  dato no está realmente usando SPACE.
- **La actividad es la dimensión más propensa a usarse mal como indicador
  indirecto aislado.** Es la más fácil de medir y la menos representativa
  del valor real por sí sola.
- **La medición a nivel de equipo y a nivel individual necesitan un
  tratamiento distinto.** SPACE se diseñó principalmente para obtener una
  perspectiva a nivel de equipo y de sistema, no para marcadores
  individuales.
- **Las cinco dimensiones interactúan.** Un cambio que mejora una puede
  degradar otra, y el marco existe para detectar esa compensación.

## Recomendaciones

### Construye tu conjunto de métricas a partir de al menos tres dimensiones antes de confiar en él

No adoptes SPACE eligiendo una única dimensión favorita, normalmente
actividad o rendimiento, y dándolo por terminado. Selecciona
deliberadamente al menos una métrica de al menos tres de las cinco
dimensiones, mezclando instrumentación objetiva (capítulo 1.5) con datos de
encuesta subjetivos (capítulo 3.7), antes de presentar cualquier conclusión
sobre la productividad del equipo. Esta composición mínima es lo que evita
que SPACE colapse de vuelta al problema del indicador único que se diseñó
para resolver.

### Trata las métricas de actividad como contexto, nunca como el titular

Los recuentos de commits, las líneas de código y los recuentos de
solicitudes de incorporación de cambios son datos legítimos de la
dimensión de actividad de SPACE, pero nunca deberían ser la métrica
principal o única presentada sobre la productividad de un equipo. Usa los
datos de actividad para dar contexto a las otras dimensiones, por ejemplo
notando que una caída en la actividad coincidió con una subida en la
satisfacción porque el equipo por fin tuvo margen para pagar deuda técnica,
en lugar de como un veredicto independiente. El capítulo 3.4 cubre en
profundidad los riesgos específicos de esta dimensión.

### Aplica SPACE a nivel de equipo y de sistema, no a nivel individual

Tanto la investigación original de SPACE como su adopción posterior en la
industria tratan el marco como una lente para entender la productividad a
nivel de equipo y organizacional, no como un marcador de desempeño
individual. Aplicar las dimensiones de SPACE para clasificar a personas,
especialmente la dimensión de actividad, recrea precisamente el riesgo de
manipulación contra el que advierte el capítulo 1.2 y malinterpreta un
marco que nunca se validó para ese uso.

### Vigila las compensaciones entre dimensiones, no solo el movimiento dentro de una

El verdadero poder diagnóstico del marco viene de observar cómo se mueven
las dimensiones unas respecto a otras. Una métrica de rendimiento en
aumento junto a una satisfacción en caída es una señal de alerta que
merece investigarse de inmediato, indicando potencialmente un ritmo
insostenible. Una métrica de actividad en aumento junto a un rendimiento
plano o en caída sugiere trabajo de relleno en lugar de progreso genuino.
Revisa las cinco dimensiones juntas con una cadencia fija específicamente
para detectar estos patrones entre dimensiones, no solo para comprobar
cada número de forma aislada.

### Mezcla las cadencias de forma apropiada entre dimensiones

Algunas dimensiones de SPACE cambian lentamente y se miden mejor de forma
periódica (satisfacción, típicamente con ciclos de encuesta trimestrales);
otras cambian rápido y se benefician de un rastreo más frecuente y
automatizado (actividad, eficiencia y flujo, ambas en gran medida
instrumentables a partir de sistemas existentes). Ajusta tu cadencia de
medición a la tasa de cambio natural de cada dimensión en lugar de forzar
cada métrica al mismo calendario de informes.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Conjunto de métricas de una sola dimensión (normalmente actividad) | Sencillo, barato, familiar | Fácil de manipular, pasa por alto el coste humano de prácticas insostenibles |
| Adopción completa de SPACE con cinco dimensiones | Equilibrada, resiste la manipulación de un solo eje, detecta compensaciones | Requiere más instrumentación e inversión en encuestas |
| Aplicación de SPACE a nivel de equipo | Coincide con el uso validado del marco, protege a las personas de una mala aplicación | No puede responder preguntas a nivel individual que a veces quiere el liderazgo |
| Aplicación de SPACE a nivel individual | Se siente más directamente accionable para algunos gestores | Malinterpreta el marco; fuerte riesgo de manipulación y de moral |

La tensión central es **integridad de la medición frente a coste y
complejidad**. Una implementación completa y equilibrada de SPACE requiere
más instrumentación, más esfuerzo de diseño de encuestas y más disciplina
para revisar las cinco dimensiones juntas de lo que requiere un simple
tablero de actividad. Resuélvela empezando con un conjunto genuinamente
mínimo pero equilibrado, al menos una métrica de al menos tres dimensiones,
en lugar de saltarte por completo la disciplina del marco o intentar una
versión abrumadora y completamente instrumentada de las cinco dimensiones
desde el primer día.

## Preguntas para debatir con tu equipo

1. **¿Nuestro conjunto actual de métricas de productividad extrae de al
   menos tres dimensiones de SPACE, o está dominado solo por datos de
   actividad?** Audita tu tablero explícitamente frente a las cinco
   dimensiones; la mayoría de las organizaciones, evaluadas con
   honestidad, están mucho más cargadas de actividad de lo que creen.

2. **¿Hemos visto alguna vez que una dimensión de SPACE mejorara mientras
   otra se degradaba en silencio, y lo notamos en su momento?** Esta
   compensación entre dimensiones es precisamente lo que el marco está
   diseñado para detectar. Repasa el último año en busca de un periodo
   donde las métricas de entrega mejoraron y pregúntate qué mostraban los
   datos de satisfacción o bienestar durante la misma ventana.

3. **¿Se usan alguna vez los datos relacionados con SPACE, aunque sea de
   manera informal, para evaluar o comparar a personas en lugar de a
   equipos?** Esto malinterpreta el marco e invita a la manipulación. Sé
   honesto sobre cómo se discuten realmente estas métricas en la práctica,
   no solo sobre cómo dice la política que deberían usarse.

4. **¿Cómo notaríamos si un equipo mejorara sus métricas de rendimiento a
   costa de un ritmo insostenible?** Sin datos de satisfacción y bienestar
   revisados junto a los datos de rendimiento, este tipo de compensación es
   invisible hasta que sale a la luz como rotación o un colapso de calidad
   meses después.

5. **¿Cuál es nuestra cadencia de medición para cada una de las cinco
   dimensiones, y coincide con la rapidez con que realmente cambia cada
   una?** Una encuesta de satisfacción trimestral emparejada con datos de
   actividad en tiempo real es un desajuste razonable de cadencia; la misma
   cadencia aplicada a las cinco sin pensarlo no lo es.

6. **Si un nuevo gestor de ingeniería se incorporara mañana y solo mirara
   nuestro tablero, ¿obtendría una imagen equilibrada de la productividad
   del equipo, o una sesgada?** Esta es una prueba práctica de si tu
   conjunto de métricas realmente ha logrado el equilibrio de SPACE, o si
   solo hace un gesto hacia el marco mientras sigue dominado por la
   actividad en la práctica.

## Enfoque sectorial

**Startup.** Una implementación completa de cinco dimensiones suele ser
excesiva para un puñado de ingenieros que hablan a diario y pueden sentir
directamente la salud de la satisfacción y la colaboración. El único hábito
que merece adoptarse pronto es resistir el tirón hacia métricas solo de
actividad a medida que el equipo empieza a crecer más allá del tamaño en
que la conciencia informal lo cubre todo.

**Pequeña empresa.** Sin una función dedicada de analítica de personas,
mantenlo simple: empareja los datos de entrega que ya tengas (capítulo
2.10) con una revisión regular, breve e informal de la satisfacción,
incluso una simple encuesta de pulso de una pregunta. Ese emparejamiento
mínimo ya captura la disciplina central del marco mucho mejor que un
tablero solo de actividad.

**Empresa grande.** Aquí es donde el marco completo se gana su
complejidad. Estandariza un conjunto equilibrado de métricas SPACE entre
equipos para que el liderazgo pueda comparar la productividad de forma
justa en lugar de recurrir por defecto al equipo con el gráfico de commits
de aspecto más impresionante, e invierte en la infraestructura de
encuestas que cubre el capítulo 3.7 para hacer que los datos de
satisfacción y colaboración sean tan fiables como la instrumentación
objetiva.

**Sector público.** La presión de contratación y retención, especialmente
donde el salario del sector público no siempre puede competir con las
ofertas del sector privado, convierte los datos de satisfacción y
bienestar en una preocupación genuinamente estratégica, no en un añadido
blando. Trata SPACE con la misma seriedad que las métricas de entrega en
la planificación de personal y la justificación presupuestaria, ya que el
coste de perder a un ingeniero experimentado por agotamiento se mide en
meses de conocimiento institucional que un reemplazo no puede aportar de
inmediato.

## Ejemplos

**Empresa grande.** El liderazgo de ingeniería de una empresa de software
había estado rastreando durante años el recuento de commits y los puntos de
historia completados como su señal principal de productividad. Después de
adoptar un conjunto de métricas SPACE más completo, incluyendo una encuesta
de satisfacción trimestral y un análisis de red de colaboración (capítulo
3.5), el liderazgo descubrió que el equipo con los números de actividad más
altos también tenía las puntuaciones de satisfacción más bajas y la tasa
más alta de rotación voluntaria durante el año siguiente. Los números de
actividad por sí solos habían estado engañando activamente; la imagen más
completa llevó a una reducción deliberada de la carga de trabajo
concurrente de ese equipo (el principio de trabajo en curso del capítulo
2.5 aplicado a nivel humano) y a una recuperación medible tanto en la
satisfacción como, eventualmente, en un rendimiento sostenible.

**Sector público.** Una agencia nacional de servicios digitales, compitiendo
por talento de ingeniería contra salarios del sector privado que no podía
igualar, adoptó un conjunto equilibrado de métricas SPACE específicamente
para argumentar a favor de inversiones de retención no monetarias: mejores
herramientas, tiempo de concentración protegido y menor fricción de
proceso. Los datos de la encuesta de satisfacción combinados con las
métricas de eficiencia y flujo (capítulo 3.6) mostraron que la frecuencia
de interrupciones, no la compensación, era el predictor más fuerte de la
intención de marcharse en los datos de las entrevistas de salida. La
inversión posterior de la agencia en una política de tiempo de
concentración protegido, justificada directamente por estos datos de
SPACE, se correlacionó con una mejora medible en la retención durante los
dieciocho meses siguientes.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de adoptar SPACE por completo es la rotación evitada y el
colapso de calidad impulsado por el agotamiento evitado, ambos mucho más
caros que el coste de instrumentación del marco. Un conjunto de métricas
solo de actividad puede verse excelente durante uno o dos años justo hasta
que el coste humano se cobra de golpe, momento en el que el coste de
reemplazar la experiencia perdida y reconstruir la salud del equipo eclipsa
cualquier ganancia de productividad que el conjunto de métricas estrecho
pareciera mostrar alguna vez.

El coste total de propiedad incluye la infraestructura de encuestas
(capítulo 3.7) y la disciplina de revisar las cinco dimensiones juntas en
lugar de recurrir por defecto a la que resulte más fácil. Ese coste merece
la pena genuinamente: el ejemplo de la empresa grande de arriba muestra un
patrón real y detectable, alta actividad ocultando un alto riesgo de
rotación, que un conjunto de métricas más estrecho nunca habría sacado a la
luz hasta que el daño ya estuviera hecho.

## Antipatrones y errores comunes

- **Adoptar SPACE solo de nombre mientras se sigue dominado por la
  actividad en la práctica:** el modo de fallo más común, y derrota por
  completo el propósito del marco.
- **Aplicar las dimensiones de SPACE a marcadores individuales:**
  malinterpreta un marco validado para obtener una perspectiva a nivel de
  equipo y de sistema.
- **Revisar las dimensiones de forma aislada en lugar de vigilar
  compensaciones entre dimensiones:** pasa por alto el patrón que SPACE
  está específicamente diseñado para detectar.
- **Forzar cada dimensión a la misma cadencia de medición:** desperdicia
  esfuerzo en dimensiones que cambian lentamente y submide las que cambian
  rápido.
- **Tratar una única puntuación de encuesta de satisfacción como
  suficiente sin datos objetivos:** pierde el equilibrio entre fuentes
  subjetivas y objetivas que pide el marco.
- **Ignorar una tendencia que empeora en una dimensión porque otra se ve
  bien:** exactamente el fallo que la disciplina entre dimensiones del
  marco existe para prevenir.

## Modelo de madurez

- **Nivel 1, Iniciar:** La productividad se mide solo mediante métricas de
  actividad, sin ningún dato de satisfacción, colaboración o eficiencia
  recogido.
- **Nivel 2, Desarrollar:** Algunas dimensiones adicionales se miden de
  manera informal, pero no hay ninguna revisión consistente entre
  dimensiones ni un estándar de composición mínima.
- **Nivel 3, Estandarizar:** Un conjunto equilibrado de métricas que
  extrae de al menos tres dimensiones de SPACE se aplica de forma
  consistente a nivel de equipo en toda la organización.
- **Nivel 4, Gestionar:** Las cinco dimensiones se revisan juntas con una
  cadencia regular, las compensaciones entre dimensiones se investigan
  activamente, y el marco informa decisiones reales de personal y proceso.
- **Nivel 5, Orquestar:** Los datos de SPACE moldean directamente la
  planificación de personal y la inversión en retención, y la organización
  puede señalar intervenciones concretas, informadas por patrones entre
  dimensiones, que mejoraron de forma medible tanto la entrega como el
  bienestar del desarrollador juntos.

## Ideas para el debate

1. ¿Cuál dimensión de SPACE está más submedida en nuestro conjunto actual de métricas?
2. ¿Hemos visto alguna vez que la actividad de un equipo subiera mientras la satisfacción caía en silencio?
3. ¿Cómo detectaríamos hoy a un equipo que intercambia sostenibilidad a largo plazo por producción a corto plazo?
4. ¿Se usan actualmente datos relacionados con SPACE para evaluar a personas en lugar de a equipos?
5. ¿Qué aspecto tendría, en concreto, un tablero de productividad genuinamente equilibrado para nosotros?

## Conclusiones clave

- SPACE abarca cinco dimensiones, **Satisfacción y bienestar, Rendimiento,
  Actividad, Comunicación y colaboración, y Eficiencia y flujo**, y ninguna
  es fiable por sí sola.
- Construye un conjunto de métricas a partir de **al menos tres
  dimensiones**, mezclando fuentes de datos objetivas y subjetivas.
- Trata las **métricas de actividad como contexto**, nunca como la señal
  de productividad principal (capítulo 3.4).
- Aplica SPACE a **nivel de equipo y de sistema**, no como marcador
  individual.
- Revisa las dimensiones juntas, vigilando las **compensaciones entre
  dimensiones**, no solo el movimiento dentro de una sola.

## Referencias y lecturas adicionales

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021): el artículo original del marco SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la base de investigación compartida
  con las métricas DORA).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco y Timothy
  Lister (el argumento clásico para tratar la productividad del
  desarrollador como una cuestión humana, no puramente mecánica).
- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink
  (investigación sobre la motivación relevante para la medición de la
  satisfacción y el bienestar).
