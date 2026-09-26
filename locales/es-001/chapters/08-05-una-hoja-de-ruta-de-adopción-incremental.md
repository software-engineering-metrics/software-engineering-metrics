# 8.5 Una hoja de ruta de adopción incremental

## Visión general y motivación

Este capítulo cierra la parte 8, y el contenido sustantivo de este libro,
con la pregunta que probablemente se está haciendo cada lector que ha
llegado hasta aquí: dado todo lo que cubre este libro, cuarenta y cinco
capítulos que abarcan entrega, experiencia del desarrollador, calidad de
código, resultados de negocio, fiabilidad, seguridad, y el cambio de la
era de la IA, ¿por dónde empieza realmente una organización? La respuesta
honesta que da este capítulo es: no en todo a la vez. Un lanzamiento
[de un solo golpe](https://en.wikipedia.org/wiki/Big_bang_adoption) del
alcance completo de este libro, intentado todo a la vez, viola
directamente la orientación central del capítulo 8.3, ya que un programa
de métricas amplio y exhaustivo introducido de la noche a la mañana es
exactamente el tipo de cambio que provoca miedo y manipulación en lugar
de confianza.

Este capítulo proporciona en su lugar una secuencia concreta y por fases,
construida sobre un principio simple y consistente repetido a lo largo de
este libro: empieza por los cimientos, demuestra valor en un alcance
estrecho, y luego expande deliberadamente, sin saltarte nunca el trabajo
de gobernanza y confianza cultural cubierto en el capítulo 1.4 y el
capítulo 8.3 a favor de saltar directamente a métricas sofisticadas y
exhaustivas. Esta secuenciación no es arbitraria; sigue la estructura de
dependencia que establecen las propias partes de este libro, los
cimientos de la parte 1 genuinamente tienen que llegar primero, porque
cada parte posterior asume la gobernanza, la orientación a resultados, y
la alfabetización estadística que establecen los capítulos 1.1 a 1.6.

Para los equipos grandes, una hoja de ruta por fases es lo que hace que
el alcance completo de este libro sea alcanzable en lugar de abrumador.
Las organizaciones empresariales pueden usar la secuenciación de este
capítulo para planificar un lanzamiento de programa de métricas
genuinamente de varios trimestres o años con hitos realistas; las
organizaciones gubernamentales, que a menudo necesitan justificar la
inversión en métricas ante un proceso presupuestario o de supervisión de
manera incremental en lugar de como una única solicitud grande, pueden
usar las fases de este capítulo como puntos de control naturales para
demostrar valor y solicitar inversión continuada.

## Principios clave

- **Los cimientos primero, siempre.** La gobernanza (capítulo 1.4), la
  orientación a resultados (capítulo 1.3), y la construcción de confianza
  cultural (capítulo 8.3) no se pueden saltar a favor de saltar
  directamente a métricas sofisticadas.
- **Demuestra valor en un alcance estrecho antes de expandir.** Un solo
  equipo o una sola familia de métricas, hecha bien y confiable, es un
  cimiento más sólido que un lanzamiento exhaustivo hecho mal.
- **Secuencia por dependencia, no por importancia percibida.** Algunas
  familias de métricas de este libro dependen del trabajo de base que
  establecen primero otros capítulos.
- **Cada fase debería producir un resultado demostrable y reportable**
  que justifique la inversión continuada en la siguiente fase.
- **Esta es una hoja de ruta para adaptar, no una prescripción universal
  y rígida.** El punto de partida y las prioridades específicas de tu
  organización deberían moldear el ritmo real.

## Recomendaciones

### Fase 1: Cimientos y gobernanza (parte 1)

Antes de instrumentar una sola familia de métricas, establece la
disciplina de gobernanza que describe el capítulo 1.4: una plantilla de
carta de métricas, una política clara diagnóstica frente a evaluativa
(capítulo 1.1), y los fundamentos de alfabetización estadística del
capítulo 1.6 compartidos entre quienquiera que vaya a interpretar los
datos. Esta fase todavía no produce ningún panel; produce el trabajo de
base organizacional del que depende cada fase posterior. Saltarse esta
fase para avanzar más rápido es la forma más común en que se socava en la
práctica la orientación de este libro, ya que cada métrica posterior
hereda la calidad de gobernanza que estableció esta fase, o su ausencia.

### Fase 2: Un único equipo piloto, métricas DORA, solo diagnóstico (parte 2)

Selecciona un equipo, idealmente uno dispuesto y comprometido en lugar de
uno obligado, e instrumenta las métricas DORA de la parte 2, usando
instrumentación automatizada (capítulo 1.5) en lugar de autorreporte, en
modo puramente diagnóstico siguiendo directamente la orientación de
construcción de confianza del capítulo 8.3. Ejecuta esto durante al menos
un trimestre completo antes de expandir, y úsalo como un terreno de
prueba para tu plantilla de carta de gobernanza y tu enfoque de diseño de
panel (capítulo 8.1) antes de comprometerte con cualquiera de los dos a
una escala más amplia.

### Fase 3: Expande las métricas de entrega a toda la organización, añade experiencia del desarrollador (partes 2, 3)

Una vez que el piloto haya demostrado un valor genuino y, de manera
crucial, confianza sostenida (sin incidentes de mal uso, o uno bien
manejado según la orientación del capítulo 8.3), expande la
instrumentación DORA a equipos adicionales, e introduce la primera
encuesta de experiencia del desarrollador (capítulo 3.7) en toda la
organización. Esta fase es donde la disciplina diagnóstica frente a
evaluativa enfrenta su primera prueba real a escala, y mantenerla
cuidadosamente aquí marca el tono para todo lo que sigue.

### Fase 4: Calidad de código y métricas de resultado (partes 4, 5)

Con los cimientos de entrega y experiencia del desarrollador establecidos
y confiables, añade las métricas de calidad de código de la parte 4,
priorizando el análisis de puntos calientes (capítulo 4.3) y el rastreo
de deuda técnica (capítulo 4.5) como los puntos de partida de mayor
apalancamiento, y empieza a construir la infraestructura de telemetría de
resultados que argumenta el capítulo 7.4 que debería ser finalmente el
centro de gravedad de tu programa, empezando por la tasa de defectos
escapados (capítulo 5.1) y la adopción de funcionalidades (capítulo 5.2)
como las métricas de resultado más manejables de instrumentar primero.

### Fase 5: Fiabilidad, seguridad, y recalibración de la era de la IA (partes 6, 7)

Establece SLO y presupuestos de error formales (capítulo 6.1) para tus
servicios más críticos, construye la práctica de métricas de incidentes
sin culpa (capítulo 6.2), y realiza la auditoría de métricas de la era de
la IA que recomienda el capítulo 7.1 si tu organización ha adoptado, o
está adoptando, herramientas de desarrollo asistido por IA. Esta fase a
menudo se ejecuta parcialmente en paralelo con la fase 4 en lugar de
estrictamente en secuencia, ya que el trabajo de fiabilidad y seguridad
frecuentemente tiene su propia urgencia independiente.

### Continuo: evaluación de madurez consolidada e inversión continua

Una vez establecidas las fases centrales, adopta la evaluación de madurez
consolidada del capítulo 8.4 como una práctica anual y recurrente, usando
sus hallazgos para dirigir la inversión continua en lugar de tratar la
hoja de ruta como completa una vez que se ha tocado técnicamente cada
fase. Un programa de métricas es una capacidad organizacional sostenida,
no un proyecto con una fecha de finalización definida, y esta fase
continua refleja directamente esa realidad.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Lanzamiento de un solo golpe y exhaustivo | Rápido, cobertura exhaustiva desde el principio | Alto riesgo de provocar miedo y manipulación (capítulo 8.3); sin un cimiento de gobernanza demostrado |
| Lanzamiento por fases, cimientos primero | Construye confianza y gobernanza antes de expandir el alcance; cada fase se demuestra a sí misma | Más lento para alcanzar la cobertura completa; requiere un compromiso sostenido de varios trimestres |
| Lanzamiento por fases, primero las métricas (saltándose la gobernanza) | Resultados de panel iniciales más rápidos | Hereda una gobernanza débil en cada fase posterior; mayor riesgo a largo plazo |
| Adopción improvisada y oportunista sin hoja de ruta | Flexible, responde a las necesidades inmediatas | Produce una cobertura inconsistente y difícil de gobernar y repite errores fase por fase |

La tensión central es **velocidad hacia la cobertura exhaustiva frente a
secuenciación con los cimientos primero**. Las organizaciones bajo
presión para mostrar resultados rápidamente se sienten tentadas a
saltarse el trabajo de gobernanza de la fase 1 y saltar directamente a
instrumentar métricas, pero el argumento acumulativo de este libro, desde
la disciplina de gobernanza del capítulo 1.4 hasta la orientación de
construcción de confianza del capítulo 8.3, es que saltarse el cimiento
produce un programa más rápido pero fundamentalmente más débil. Resuelve
la tensión comprometiéndote con la secuencia por fases, y usando el
resultado demostrable de cada fase (la recomendación clave del capítulo
8.5) para justificar la inversión continuada en lugar de intentar mostrar
resultados exhaustivos antes de que el cimiento pueda sostenerlos.

## Preguntas para debatir con tu equipo

1. **¿Dónde se sitúa realmente nuestra organización en esta secuencia por
   fases ahora mismo, evaluado con honestidad?** Mapea tu estado actual
   directamente frente a las cinco fases; muchas organizaciones,
   evaluadas con honestidad, encuentran que tienen métricas instrumentadas
   de una fase posterior sin haber completado genuinamente las
   fundacionales anteriores.

2. **¿Nos saltamos el cimiento de gobernanza de la fase 1 a favor de
   pasar directamente a la instrumentación, y si es así, qué nos ha
   costado eso?** Esto se conecta directamente con la evaluación de
   madurez del capítulo 8.4; un cimiento de gobernanza débil descubierto
   tarde es costoso de reajustar.

3. **¿Cómo sería un equipo piloto genuino y dispuesto para nosotros, si
   todavía no hemos ejecutado uno?** Identifica un equipo candidato
   específico y real en lugar de dejar esto abstracto, y debate qué lo
   haría un buen candidato específicamente.

4. **¿Qué resultado demostrable produjo realmente cada fase que hemos
   completado, y lo usamos para justificar la inversión de la siguiente
   fase?** Si no puedes señalar un resultado específico y comunicado de
   una fase completada, esa brecha vale la pena nombrarla.

5. **¿La fase 4 y la fase 5 se están ejecutando en un paralelo apropiado
   para nosotros, o se está descuidando una a favor de la otra?** Debate
   si el perfil de riesgo específico de tu organización, más centrado en
   la entrega o más centrado en la fiabilidad, debería moldear esta
   secuenciación paralela de manera distinta al valor predeterminado que
   describe este capítulo.

6. **¿Hemos establecido la práctica de evaluación de madurez continua y
   recurrente del capítulo 8.4, o nuestra hoja de ruta efectivamente
   termina una vez que las fases iniciales están técnicamente
   completas?** Una hoja de ruta sin esta fase continua arriesga tratar
   el programa de métricas como un proyecto terminado en lugar de la
   capacidad sostenida que argumenta este libro que necesita ser.

## Enfoque sectorial

**Startup.** Esta hoja de ruta completa y de varias fases probablemente
se puede comprimir significativamente, ya que una organización pequeña
puede avanzar por las fases de gobernanza fundacional y piloto en
semanas en lugar de trimestres. No te saltes la fase 1 por completo
incluso a pequeña escala, ya que los hábitos de gobernanza establecidos
temprano son mucho más fáciles de sostener que de reajustar a medida que
crece la organización.

**Pequeña empresa.** Ritma la hoja de ruta según tu capacidad real en
lugar de intentar cada fase en la secuencia que describe este capítulo;
una pequeña empresa podría razonablemente detenerse después de la fase 2
o 3, con las métricas de entrega y experiencia del desarrollador, y
aplazar el trabajo más sofisticado de resultado y fiabilidad de las
partes 4 a 6 hasta que la organización haya crecido lo suficiente como
para realmente necesitarlo y sostenerlo.

**Empresa.** Planifica esta hoja de ruta explícitamente como un programa
de varios trimestres o años con hitos realistas, y usa el resultado
demostrable de cada fase como un punto de control formal para asegurar el
patrocinio ejecutivo y el presupuesto continuados, en lugar de intentar
justificar todo el alcance por adelantado en un único caso de negocio.

**Gobierno.** Usa las fases de este capítulo como puntos de control
naturales e incrementales para el reporte presupuestario o al órgano de
supervisión, solicitando inversión continuada en cada límite de fase
basándote en el resultado demostrado y documentado de la fase anterior en
lugar de como una única solicitud grande y anticipada que puede enfrentar
más escepticismo o dificultad de contratación.

## Ejemplos

**Empresa.** Una empresa de tecnología sanitaria adoptó explícitamente
esta hoja de ruta como el marco estructurador de su programa de métricas,
completando el cimiento de gobernanza de la fase 1 en seis semanas,
ejecutando un piloto DORA de un solo equipo durante un trimestre
completo, y solo entonces expandiendo a la cobertura completa de métricas
de entrega organizacional en la fase 3, aproximadamente cinco meses
después de empezar. Al ritmar deliberadamente el lanzamiento de esta
manera, la empresa evitó el patrón de manipulación impulsado por el
miedo que describe el capítulo 8.3 como un riesgo de lanzamientos más
rápidos y menos disciplinados, y su equipo piloto de la fase 2
específicamente se convirtió en defensores internos informales de la
expansión del programa, habiendo experimentado de primera mano que el
compromiso de solo diagnóstico realmente se honró a lo largo de su
trimestre piloto.

**Gobierno.** Una agencia de tecnología de un gobierno estatal usó
explícitamente la estructura por fases de este capítulo para secuenciar
las solicitudes de presupuesto a su comité de supervisión, solicitando
financiación para la fase 1 y la fase 2 como una inversión piloto inicial
y modesta, luego regresando al comité con los resultados documentados de
la fase 2, frecuencia de despliegue mejorada y tasa de fallos de cambio
estable para el equipo piloto, como evidencia concreta que respaldaba una
solicitud de financiación más grande para la fase 3 y la fase 4 en el
siguiente ciclo presupuestario. Este enfoque de financiación incremental
y basado en evidencia tuvo éxito donde una solicitud anticipada anterior,
más exhaustiva, para todo el alcance del programa de métricas de la
agencia había sido rechazada previamente por ser demasiado grande e
insuficientemente justificada por resultados demostrados.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una hoja de ruta por fases y con los cimientos primero es
un programa de métricas que realmente funciona, confiable, bien
gobernado, genuinamente usado para tomar decisiones, en lugar de un
programa de apariencia exhaustiva pero corrompido por el miedo o mal
gobernado que arriesga producir un lanzamiento más rápido. El ejemplo de
tecnología sanitaria anterior lo muestra directamente: el ritmo
deliberado produjo confianza genuina y defensa interna que un
lanzamiento más rápido probablemente habría socavado.

El coste total de propiedad es tiempo: esta hoja de ruta genuinamente
tarda más en alcanzar el alcance completo de lo que tardaría un
lanzamiento de un solo golpe. Ese coste de tiempo es el precio directo y
necesario del cimiento de confianza y gobernanza que ha argumentado todo
este libro desde sus capítulos iniciales, y el ejemplo del gobierno
anterior muestra un beneficio secundario genuino y práctico: las fases
incrementales y basadas en evidencia a menudo son más fáciles de financiar
y justificar que una única solicitud anticipada, grande, y no demostrada.

## Antipatrones y errores comunes

- **Un lanzamiento de un solo golpe y exhaustivo intentado todo a la
  vez:** viola la orientación central del capítulo 8.3 y arriesga
  provocar miedo y manipulación desde el principio.
- **Saltarse el cimiento de gobernanza de la fase 1 para avanzar más
  rápido:** hereda una gobernanza débil en cada fase posterior, costosa
  de reajustar después.
- **Seleccionar un equipo piloto no dispuesto u obligado para la fase
  2:** socava el propósito de construcción de confianza al que se supone
  que sirve un piloto genuino.
- **No producir o comunicar un resultado demostrable de cada fase:**
  pierde la base de evidencia necesaria para justificar la inversión
  continuada en la siguiente fase.
- **Tratar la hoja de ruta como completa una vez que se ha tocado
  técnicamente cada fase:** pierde la práctica continua de evaluación de
  madurez que recomienda el capítulo 8.4 como una disciplina permanente,
  no de una sola vez.
- **Seguir rígidamente la secuenciación predeterminada de este capítulo
  sin importar el perfil de riesgo real de tu organización:** esta hoja
  de ruta debería adaptarse, no aplicarse mecánicamente sin juicio.

## Modelo de madurez

- **Nivel 1, Iniciar:** No existe ninguna hoja de ruta; la adopción de
  métricas, cuando ocurre en absoluto, es improvisada y sin secuenciar.
- **Nivel 2, Desarrollar:** Se han intentado algunas fases, pero el
  trabajo de gobernanza fundacional se saltó o quedó incompleto, y los
  resultados de fase no se documentan sistemáticamente.
- **Nivel 3, Estandarizar:** Se documenta y sigue activamente una hoja de
  ruta por fases que sigue la secuencia de cimientos primero de este
  capítulo, con cada fase produciendo un resultado demostrable.
- **Nivel 4, Gestionar:** Los resultados de fase se usan sistemáticamente
  para justificar la inversión continuada, y la hoja de ruta se adapta
  deliberadamente al perfil de riesgo y las prioridades específicas de la
  organización.
- **Nivel 5, Orquestar:** La organización ha completado la hoja de ruta
  completa y sostiene la práctica continua de evaluación de madurez del
  capítulo 8.4 como una capacidad permanente, con un historial demostrado
  y plurianual de inversión en métricas por fases y centrada en la
  confianza.

## Ideas para el debate

1. ¿Dónde se sitúa realmente nuestra organización en esta secuencia por fases ahora mismo?
2. ¿Nos saltamos o acortamos la fase de gobernanza fundacional, y qué nos ha costado eso?
3. ¿Cómo sería un equipo piloto genuino y dispuesto para nuestra próxima expansión?
4. ¿Qué resultado demostrable de nuestra fase más reciente podría justificar nuestra próxima solicitud de inversión?
5. ¿Hemos establecido la práctica de evaluación de madurez continua, o nuestra hoja de ruta efectivamente termina?

## Conclusiones clave

- Adopta la orientación de este libro **por fases, con los cimientos
  primero**, nunca como un lanzamiento de un solo golpe que arriesga
  provocar miedo y manipulación.
- **La fase 1 (gobernanza) no se puede saltar**; cada fase posterior
  hereda la calidad de gobernanza que establece esta fase.
- Usa un **equipo piloto genuino y dispuesto** para demostrar valor y
  construir confianza antes de expandir el alcance a toda la
  organización.
- Cada fase debería producir un **resultado demostrable y reportable**
  que justifique la inversión continuada en la siguiente fase.
- Trata la finalización de la hoja de ruta como el inicio de una
  **práctica continua y sostenida** (la evaluación de madurez recurrente
  del capítulo 8.4), no como un proyecto terminado.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la base de evidencia para las
  familias de métricas que secuencia esta hoja de ruta).
- *Leading Change*, de John P. Kotter (principios de gestión del cambio
  organizacional aplicables a un lanzamiento de programa de métricas por
  fases).
- *The Lean Startup*, de Eric Ries (el ciclo de construir, medir, y
  aprender del que se nutre el enfoque por fases y de demostrar valor
  antes de expandir de este capítulo).
- Orientación de la Oficina de Rendición de Cuentas del Gobierno de
  Estados Unidos (GAO) sobre la medición del rendimiento y la Ley de
  Modernización GPRA: práctica de financiación de programas del sector
  público incremental y basada en evidencia.
