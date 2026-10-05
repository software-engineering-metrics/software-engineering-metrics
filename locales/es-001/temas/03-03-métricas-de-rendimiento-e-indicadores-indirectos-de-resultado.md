# 3.3 Métricas de rendimiento e indicadores indirectos de resultado

## Visión general y motivación

**Rendimiento**, la P de SPACE (tema 3.1), es la dimensión que más a
menudo se confunde con la actividad, y esa confusión es precisamente lo
que este tema existe para prevenir. El rendimiento pregunta si el
trabajo de un ingeniero o de un equipo realmente produjo un buen
[resultado](https://en.wikipedia.org/wiki/Outcome_(probability)): una
funcionalidad que se lanzó y funcionó, un sistema que se mantuvo fiable, un
cambio que movió una métrica de negocio o de usuario en la dirección
correcta. La actividad (tema 3.4) solo pregunta cuánto movimiento
ocurrió. Un equipo puede estar muy activo y rendir mal, lanzando cambios
pequeños constantes que nunca mueven un resultado, y lo contrario es
igualmente posible: un equipo que lanza pocas veces pero cuyos cambios
aciertan de forma fiable exactamente en el objetivo.

La dificultad con esta dimensión es que el resultado a menudo no se puede
atribuir a una única persona ni siquiera a un único equipo; los resultados
de software emergen de la colaboración, de decisiones tomadas meses antes
por personas que desde entonces se han mudado a otros proyectos, de
condiciones de mercado que ningún ingeniero controla. Las personas que
investigaron SPACE fueron explícitas sobre esto: el rendimiento debería
medirse a nivel de sistema o de equipo usando múltiples señales
convergentes, no reducirse a un único número y desde luego no atribuirse a
un ingeniero individual de forma aislada. Este tema se toma en serio
esa guía y trata la atribución de rendimiento individual como una trampa
que hay que evitar activamente, no como un atajo que tomar cuando resulte
conveniente.

Para los equipos grandes, medir bien el rendimiento es lo que separa un
programa de métricas que realmente mejora los resultados de uno que
simplemente premia el ajetreo visible. Las organizaciones grandes que
comparan el rendimiento entre muchos equipos necesitan señales que
resistan la manipulación mediante el volumen bruto de producción; las
organizaciones del sector público que justifican la inversión en
tecnología ante organismos de supervisión necesitan demostrar que el
esfuerzo de ingeniería produjo resultados reales, no solo artefactos
entregados, que es precisamente el principio de resultados antes que
producción del tema 1.3 aplicado a esta dimensión específica.

## Principios clave

- **El rendimiento mide si el trabajo produjo un buen resultado, no cuánto
  trabajo ocurrió.** Esta es la distinción central con la dimensión de
  actividad.
- **Usa múltiples señales convergentes, nunca un único número de
  rendimiento.** Ningún indicador indirecto individual es lo bastante
  fiable para sostenerse solo.
- **Mide a nivel de equipo o de sistema.** La atribución individual de
  resultados suele ser poco fiable e invita precisamente a la manipulación
  contra la que advierte este libro en todo momento.
- **La calidad es parte del rendimiento, no una preocupación separada.**
  Un trabajo que se lanza pero rompe otra cosa no rindió realmente bien.
- **Una señal de rendimiento sin una decisión asociada es decoración**,
  exactamente según el principio general del tema 1.1 aplicado a esta
  dimensión.

## Recomendaciones

### Combina varias señales convergentes en lugar de una puntuación de rendimiento

Extrae evidencia de rendimiento de múltiples fuentes: la tasa de fallos de
cambio (tema 2.10) y la tasa de defectos escapados (tema 5.1) para
la calidad, los resultados de despliegue ligados a la adopción real de
funcionalidades (tema 5.2) para saber si el trabajo importó, y la
evaluación cualitativa de pares o gestores sobre la contribución de un
equipo a los objetivos estratégicos para el contexto que una métrica pura
no puede capturar. Ninguna de estas es fiable por sí sola; juntas, cuando
convergen en la misma conclusión, son mucho más fiables de lo que podría
ser cualquier número aislado.

### Mide a nivel de equipo, resiste la atribución individual

Los resultados de software rara vez son producto del trabajo de una sola
persona; emergen de decisiones de diseño, retroalimentación de revisión,
trabajo previo de personas que puede que ya hayan dejado el equipo, y
colaboración a través de límites. Atribuir un resultado a un único
ingeniero suele ser una falsa precisión que ignora esta realidad y crea un
fuerte incentivo para que las personas protejan el mérito en lugar de
colaborar libremente, precisamente el tipo de distorsión de incentivos
contra la que advierte el tema 1.2.

### Incorpora la calidad directamente a la definición de rendimiento

Una funcionalidad que se lanza a tiempo pero causa una ola de incidentes en
producción no rindió bien, aunque una visión ingenua centrada solo en la
producción la contaría como entregada. Incorpora la tasa de fallos de
cambio, la tasa de defectos escapados y los datos de incidentes
posteriores al lanzamiento directamente en cómo evalúas el rendimiento, en
lugar de tratar la calidad como una preocupación separada y desconectada
medida solo en la parte 4 y la parte 6 de este libro.

### Usa los datos de rendimiento para informar decisiones de inversión y proceso, no clasificaciones individuales

El uso productivo de los datos de rendimiento es decidir dónde invertir
más (un equipo que entrega resultados sólidos de forma consistente merece
más recursos y autonomía) y dónde investigar (un equipo cuyo trabajo falla
de forma consistente en aterrizar merece ayuda, no culpa, según el enfoque
diagnóstico del tema 1.1). Clasificar a personas o equipos de forma
competitiva entre sí según los datos de rendimiento invita precisamente a
la manipulación y al daño moral contra los que advierte este libro y rara
vez produce mejores resultados que el uso diagnóstico.

### Sé honesto sobre los límites de atribución, especialmente para equipos de plataforma y habilitadores

Los equipos que construyen infraestructura compartida, herramientas
internas o capacidades de plataforma (el capítulo de ingeniería de
plataforma del libro hermano `software-engineering-guide` cubre esto
directamente) a menudo tienen su contribución a los resultados varios
pasos alejada de cualquier métrica única orientada al cliente. Mide el
rendimiento de estos equipos a través de su efecto en los equipos a los
que habilitan, la adopción de su plataforma, la reducción de fricción
reportada por los equipos que la consumen, en lugar de forzar una métrica
de resultado directo mal ajustada sobre un trabajo que es inherentemente
indirecto.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Una única puntuación de rendimiento por equipo | Sencilla de presentar y comparar | Falsa precisión; esconde qué señal subyacente realmente impulsó la puntuación |
| Múltiples señales convergentes | Más fiable, resiste la manipulación de una sola métrica | Más difícil de resumir en un número; requiere más contexto para interpretarse |
| Medición de rendimiento a nivel de equipo | Coincide con cómo emergen realmente los resultados de software | No puede responder directamente preguntas sobre la contribución individual |
| Atribución de rendimiento a nivel individual | Se siente más directamente accionable para las evaluaciones | Suele ser una falsa precisión; fuerte riesgo de manipulación y de protección de mérito |

La tensión central es **precisión frente a honestidad**. Un único número
de rendimiento por equipo, o peor, por persona, es fácil de comparar y
clasificar, pero esa precisión suele ser falsa, escondiendo una
incertidumbre real sobre la atribución y la calidad detrás de una cifra de
aspecto limpio. Resuélvela aceptando una imagen menos ordenada de
múltiples señales como la honesta, y resistiendo la presión del liderazgo
o de los procesos de evaluación de desempeño para colapsarla de vuelta en
una única puntuación falsamente precisa.

## Preguntas para debatir con tu equipo

1. **¿Combina nuestra medición actual de rendimiento múltiples señales
   convergentes, o depende de un único número que se siente más preciso de
   lo que realmente es?** Audita lo que actualmente llamas "métrica de
   rendimiento" y comprueba cuántas señales independientes y convergentes
   realmente la alimentan.

2. **¿Hemos atribuido alguna vez el rendimiento de un equipo o de una
   persona sin tener en cuenta la naturaleza colaborativa y entre equipos
   de cómo ocurrió realmente el resultado?** Elige una historia de éxito
   reciente y rastrea cuánto dependió de personas, decisiones o trabajo
   previo fuera del equipo o persona reconocidos.

3. **¿Incluye nuestra medición de rendimiento la calidad, o solo la
   velocidad de entrega y el volumen de producción?** Una funcionalidad
   lanzada que después causó incidentes significativos en producción no
   debería puntuar como alto rendimiento; comprueba si tu medición actual
   realmente detectaría este caso.

4. **¿Cómo medimos el rendimiento de los equipos de plataforma o
   habilitadores cuya contribución a los resultados es indirecta?** Si la
   respuesta honesta es "pues no lo hacemos", ese vacío merece nombrarse y
   abordarse directamente en lugar de dejar a esos equipos efectivamente
   sin medir o medidos injustamente contra métricas de resultado orientadas
   al cliente que no encajan con su trabajo.

5. **¿Se han usado alguna vez los datos de rendimiento para clasificar a
   personas de forma competitiva entre sí, formal o informalmente?** Esta
   deriva, similar al riesgo de los datos de satisfacción del tema 3.2,
   daña tanto la honestidad de los datos como la disposición del equipo a
   colaborar abiertamente.

6. **Cuando nuestras señales convergentes no coinciden, alta velocidad de
   entrega pero tasa de defectos en aumento, por ejemplo, ¿qué
   concluimos, y maneja bien nuestro proceso ese desacuerdo?** El
   desacuerdo entre señales es en sí mismo información valiosa; debate si
   tu equipo actualmente lo trata como ruido que ignorar o como un
   hallazgo genuino que merece investigarse.

## Enfoque sectorial

**Startup.** El rendimiento suele ser visible directamente: si la
funcionalidad funcionó, si los clientes la adoptaron, si la métrica se
movió. La medición formal de múltiples señales suele ser innecesaria a
esta escala; el riesgo es en cambio atribuir el éxito o el fracaso
demasiado rápido a una persona en un equipo pequeño, colaborativo y de
movimiento rápido donde el mérito y la culpa rara vez pertenecen a una
sola persona.

**Pequeña empresa.** Combina los datos de entrega y calidad que ya tengas
(tema 2.10, tema 5.1) con una conversación directa y honesta sobre
si el trabajo reciente realmente ayudó al negocio, en lugar de construir
una instrumentación formal de múltiples señales que no tienes capacidad de
mantener.

**Empresa grande.** Aquí es donde la disciplina de medición a nivel de
equipo y de múltiples señales se gana su inversión, ya que la presión para
reducir el rendimiento a un único número comparable entre docenas de
equipos es más fuerte aquí, y el daño de la falsa precisión se agrava a
través de las decisiones de recursos de toda la organización. Resiste esa
presión explícitamente y construye el argumento de múltiples señales de
por qué importa.

**Sector público.** Demostrar que la inversión en ingeniería produjo
resultados reales, no solo artefactos entregados, suele ser la pregunta
central que hace un organismo de supervisión. La medición de rendimiento
de múltiples señales, ligada explícitamente a métricas de resultado
(tema 5.3) en lugar de indicadores indirectos centrados solo en la
entrega, da una respuesta mucho más fuerte y defendible que un recuento de
actividad o de entrega por sí solo.

## Ejemplos

**Empresa grande.** El liderazgo de una empresa de tecnología minorista
había estado clasificando informalmente a los equipos de ingeniería por
puntos de historia completados por sprint, tratando esto como un indicador
indirecto de rendimiento. Después de adoptar un enfoque de múltiples
señales, combinando datos de entrega, tasa de fallos de cambio y adopción
de funcionalidades tras el lanzamiento, el liderazgo encontró que el
equipo con la mayor tasa de finalización de puntos de historia también
tenía la tasa de adopción de funcionalidades más baja de la empresa:
estaban entregando rápido pero construyendo cosas que los clientes no
usaban. Reasignar las prioridades de la hoja de ruta de ese equipo basándose
en la imagen de rendimiento más completa, en lugar de en la clasificación
engañosa de un único número, redirigió una capacidad de ingeniería
significativa hacia trabajo de mayor impacto en un trimestre.

**Sector público.** El programa de ingeniería de una agencia tributaria
nacional necesitaba demostrar ante un comité de supervisión que una gran
inversión en sistemas había mejorado el rendimiento, no solo entregado el
alcance contratado. En lugar de reportar solo la finalización de puntos de
historia o hitos, el programa presentó un conjunto convergente de señales:
tasa de error de procesamiento reducida, tiempo mediano de procesamiento
reducido, y tasa aumentada de finalización exitosa de autoservicio, todas
ligadas a los componentes específicos del sistema entregados. La
presentación de múltiples señales ligada a resultados satisfizo el
escrutinio del comité de una forma que un simple informe de "entregado a
tiempo" de un programa anterior no había logrado el año anterior.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de medir el rendimiento a través de señales convergentes ligadas
a resultados en lugar de un único número de falsa precisión es tomar
mejores decisiones de recursos: una organización que puede ver qué
trabajo de equipos realmente mueve resultados puede invertir más donde
importa e investigar donde no, en lugar de premiar a quien resulte
verse más ajetreado. El ejemplo minorista de arriba es típico: una
clasificación engañosa de un único número había estado desviando la
atención de inversión de donde realmente habría ayudado.

El coste total de propiedad es más alto que un enfoque de una sola métrica,
porque requiere combinar datos de múltiples fuentes (entrega, calidad,
resultado) y resistir la presión organizacional para colapsar la imagen de
vuelta en un único número comparable. Ese coste merece la pena porque la
alternativa, una única puntuación falsamente precisa, engaña activamente
las decisiones de recursos que los datos de rendimiento están destinados a
informar.

## Antipatrones y errores comunes

- **Confundir la actividad con el rendimiento:** el error más común que
  esta dimensión está específicamente diseñada para prevenir.
- **Atribución de rendimiento individual para resultados colaborativos y
  entre equipos:** suele ser una falsa precisión que desincentiva la
  colaboración.
- **Excluir la calidad de la definición de rendimiento:** premia el
  trabajo que se lanza pero rompe otra cosa.
- **Forzar una métrica de resultado directo sobre equipos de plataforma o
  habilitadores:** mide lo equivocado para un trabajo que es inherentemente
  indirecto.
- **Colapsar múltiples señales convergentes de vuelta en un único número
  falsamente preciso bajo presión organizacional:** pierde la honestidad
  que el enfoque de múltiples señales se construyó para aportar.
- **Usar los datos de rendimiento para clasificar a personas de forma
  competitiva:** daña tanto la honestidad de los datos como la
  colaboración del equipo.

## Modelo de madurez

- **Nivel 1, Iniciar:** El rendimiento se confunde con la actividad o el
  volumen de producción, medido con un único número sin examinar.
- **Nivel 2, Desarrollar:** Se consideran algunas señales de calidad junto
  a la producción, pero no existe un enfoque consistente de múltiples
  señales y la atribución individual todavía ocurre de manera informal.
- **Nivel 3, Estandarizar:** El rendimiento se mide a nivel de equipo
  usando múltiples señales convergentes que incluyen la calidad, de forma
  consistente en toda la organización.
- **Nivel 4, Gestionar:** El desacuerdo entre señales convergentes se
  investiga activamente; los equipos de plataforma y habilitadores tienen
  medidas de rendimiento apropiadamente indirectas ajustadas a su trabajo
  real.
- **Nivel 5, Orquestar:** Los datos de rendimiento informan directamente
  las decisiones de recursos e inversión, y la organización puede señalar
  decisiones concretas de reasignación que una vista de múltiples señales
  permitió y que una vista de un único número habría pasado por alto.

## Ideas para el debate

1. ¿Qué único número estamos usando actualmente como indicador indirecto de rendimiento que deberíamos retirar en favor de un conjunto convergente?
2. ¿Hemos atribuido alguna vez un resultado al equipo o persona equivocados porque la atribución no estaba clara?
3. ¿Cómo medimos actualmente el rendimiento de un equipo de plataforma o habilitador?
4. ¿Cómo se vería si nuestras señales convergentes no coincidieran entre sí el próximo trimestre?
5. ¿Dónde ha desviado una clasificación por puntos de historia o recuento de entregas nuestra atención de inversión?

## Conclusiones clave

- El rendimiento mide si el trabajo produjo un **buen resultado**, no
  cuánto movimiento ocurrió; no lo confundas con la actividad (tema
  3.4).
- Usa **múltiples señales convergentes**, nunca un único número de
  rendimiento, y sospecha de la falsa precisión.
- Mide a **nivel de equipo o de sistema**; la atribución individual de
  resultados suele ser poco fiable y daña la colaboración.
- **La calidad es parte del rendimiento**, no una preocupación separada y
  desconectada.
- Dales a los equipos de plataforma y habilitadores medidas de rendimiento
  **apropiadamente indirectas** en lugar de forzar sobre su trabajo una
  métrica de resultado directo mal ajustada.

## Referencias y lecturas adicionales

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (medición de rendimiento basada en
  resultados).
- *Team Topologies*, de Matthew Skelton y Manuel Pais (estructuras de
  equipos de plataforma y habilitadores y cómo medir su contribución).
- *Measuring and Managing Performance in Organizations*, de Robert D.
  Austin (los riesgos de las métricas de rendimiento de falsa precisión).
