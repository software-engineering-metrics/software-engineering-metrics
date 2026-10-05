# 6.3 Métricas de guardia, capacidad, y carga operativa

## Visión general y motivación

La fiabilidad que introdujo el capítulo 6.1 y la respuesta a incidencias
que midió el capítulo 6.2 dependen ambas de un sistema humano que este
capítulo mide directamente: la rotación de guardia, los ingenieros que
llevan un buscapersonas y responden cuando algo se rompe, y la capacidad
de infraestructura que determina cuánta carga puede absorber un sistema
antes de empezar a romperse en primer lugar. Una organización puede tener
SLO excelentes, presupuestos de error bien diseñados, y una cultura de incidencias genuinamente sin culpa, y aun así agotar a sus ingenieros de
guardia mediante una carga insostenible que eventualmente degrada la
misma fiabilidad que esas otras prácticas se construyeron para proteger.

Este capítulo trata la carga operativa como una familia de métricas por
derecho propio, directamente conectada con la medición de bienestar y
[agotamiento](https://en.wikipedia.org/wiki/Occupational_burnout) del
capítulo 3.2 pero específica del estrés particular y agudo de llevar un
buscapersonas: el sueño interrumpido, el coste psicológico de estar de
guardia incluso cuando no ocurre nada, y el peso acumulado de una carga de incidencias frecuente y mal distribuida. Una organización que mide la
fiabilidad de sus sistemas meticulosamente mientras nunca mide la
sostenibilidad de las personas que mantienen esos sistemas fiables está
midiendo solo la mitad de la imagen, y la mitad no medida tiende a salir a
la superficie eventualmente como rotación de personal, calidad de
respuesta a incidencias degradada por parte de respondedores agotados, o
ambas cosas.

Para los equipos grandes, las métricas de guardia y capacidad revelan
problemas de balanceo de carga que reflejan las preocupaciones de
concentración de conocimiento del capítulo 3.5: un pequeño número de
ingenieros absorbiendo una proporción desproporcionada de avisos, a menudo
las personas más experimentadas precisamente porque pueden resolver incidencias más rápido, lo cual crea simultáneamente un riesgo de
agotamiento y un riesgo de factor de autobús. Las organizaciones
empresariales y gubernamentales que operan servicios críticos las
veinticuatro horas dependen de las métricas de este capítulo para dotar
de personal las rotaciones de guardia de manera sostenible en lugar de
descubrir el coste real solo a través de la rotación de personal.

## Principios clave

- **La carga de guardia es un recurso medible y gestionable**, no una
  carga inevitable e ilimitada que los ingenieros simplemente tienen que
  absorber.
- **La frecuencia de avisos y la distribución de avisos importan por
  igual.** Un promedio de todo el equipo puede ocultar una concentración
  severa en un pequeño número de individuos.
- **La interrupción durante la guardia conlleva un coste incluso cuando no
  ocurre ninguna incidencia real**, el peso psicológico de estar localizable
  y ser responsable.
- **La planificación de capacidad y la carga de guardia están conectadas.**
  La infraestructura con provisión insuficiente genera más avisos,
  aumentando directamente la carga de guardia.
- **Un sistema de guardia sostenible protege la propia fiabilidad**, ya
  que los respondedores agotados toman decisiones más lentas y más
  propensas a errores durante las incidencias.

## Recomendaciones

### Rastrea la frecuencia y distribución de avisos, no solo un promedio a nivel de equipo

Mide cuántos avisos recibe cada ingeniero de guardia individual, no solo
un promedio de todo el equipo que puede ocultar una concentración severa.
De manera similar a las preocupaciones de factor de autobús del capítulo
3.5 y de carga de revisión del capítulo 2.9, la carga de guardia a menudo
se concentra en un pequeño número de personas experimentadas que pueden
resolver incidencias más rápido, precisamente el patrón que crea tanto un
riesgo de agotamiento como un punto único de fallo peligroso. Rebalancea
las rotaciones deliberadamente cuando aparezca esta concentración.

### Mide el coste psicológico de estar de guardia, no solo el tiempo activo de incidencias

Estar de guardia conlleva un coste real incluso durante un turno con cero
avisos reales: una calidad de sueño reducida por anticipar una posible
interrupción, actividades personales restringidas, y el estrés de bajo
grado de la responsabilidad continua. Cuando sea factible, captura esto
mediante datos de encuesta (capítulo 3.7) específicamente sobre la
experiencia de guardia, separados de la satisfacción general, ya que un
equipo puede reportar una satisfacción general razonable mientras la
guardia específicamente está erosionando el bienestar en silencio.

### Establece límites explícitos sobre la frecuencia de guardia sostenible

Establece una frecuencia máxima razonable para con qué frecuencia
cualquier individuo debería estar de guardia, comúnmente no más de una
semana de cada cuatro o cinco, y rastrea la frecuencia de rotación real
frente a ese límite. Una rotación que técnicamente tiene suficientes
personas en la lista pero que efectivamente depende de dos o tres de
ellas debido a brechas de habilidades o restricciones de disponibilidad
en realidad no está cumpliendo el límite, sin importar lo que muestre el
calendario nominal.

### Conecta la planificación de capacidad directamente con la carga de guardia

La infraestructura con provisión insuficiente, un margen insuficiente
para picos de tráfico, una configuración de autoescalado inadecuada,
genera más avisos por definición, aumentando directamente la carga de
guardia. Rastrea la utilización de la capacidad de infraestructura y
correlaciónala con la frecuencia de avisos: un servicio que regularmente
opera cerca de su techo de capacidad y genera una proporción
desproporcionada de avisos es un argumento directo y cuantificable para
la inversión en capacidad, no solo una queja operativa vaga.

### Usa las métricas de guardia para informar decisiones de dotación de personal y contratación, no la evaluación individual

Agrega los datos de carga de guardia a nivel de equipo para construir el
caso a favor de dotación adicional de personal, mejores herramientas para
reducir avisos de falso positivo, o inversión arquitectónica para reducir
la frecuencia genuina de incidencias. Siguiendo la orientación consistente
de este libro para cualquier métrica que toque a individuos directamente
(capítulo 1.2, capítulo 3.4), nunca uses los datos individuales de
respuesta a avisos para evaluar el rendimiento de un ingeniero específico;
el objetivo es la dotación de personal sostenible y el diseño del
sistema, no llevar la cuenta individual.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin rastreo formal de carga de guardia | Sin sobrecarga | El riesgo de agotamiento y la concentración de factor de autobús permanecen invisibles hasta que salen a la superficie como rotación de personal |
| Solo frecuencia de avisos promedio del equipo | Simple de calcular | Oculta una concentración individual severa |
| Rastreo de distribución de avisos a nivel individual | Revela directamente la concentración y el riesgo de agotamiento | Requiere cuidado para usarlo solo de manera agregada, nunca para la evaluación individual |
| Inversión en capacidad para reducir el volumen de avisos en la fuente | Aborda la causa raíz, reduce la carga de manera sostenible | Requiere una inversión de infraestructura por adelantado |

La tensión central es **aceptación frente a inversión**. Es fácil tratar
un volumen alto de avisos simplemente como el coste inevitable de operar
un servicio fiable y pedirle a los ingenieros de guardia que lo absorban,
pero esa aceptación eventualmente le cuesta a la organización a través de
la rotación de personal y la calidad de respuesta a incidencias degradada
por parte de respondedores agotados. Resuelve la tensión tratando la
carga de guardia elevada como una señal que exige una inversión genuina,
mejoras de capacidad, mejores alertas para reducir los falsos positivos,
dotación de rotación ampliada, en lugar de una carga inevitable que
simplemente soportar indefinidamente.

## Preguntas para debatir con tu equipo

1. **¿Cuál es nuestra distribución real de avisos entre los individuos de
   la rotación, no solo el promedio del equipo?** Revisa los datos reales
   a nivel individual; un promedio de equipo de aspecto razonable puede
   ocultar a una o dos personas absorbiendo una proporción
   dramáticamente desproporcionada.

2. **¿Alguna vez hemos medido el coste psicológico de estar de guardia
   separado de la satisfacción general?** Si no, debate si una pregunta
   de encuesta corta y dedicada específicamente sobre la experiencia de
   guardia sacaría a la luz algo que tu encuesta de satisfacción general
   (capítulo 3.2) actualmente está pasando por alto.

3. **¿Nuestro calendario de rotación de guardia nominal refleja la
   realidad, o efectivamente depende de solo dos o tres personas debido a
   brechas de habilidades o disponibilidad?** Sé honesto sobre esto; un
   calendario que lista ocho nombres pero efectivamente depende de dos no
   está cumpliendo ningún límite razonable de sostenibilidad.

4. **¿Cuál de nuestros servicios genera una proporción desproporcionada
   de avisos en relación con su margen de capacidad, y una inversión
   adicional en infraestructura reduciría esa carga directamente?**
   Contrasta explícitamente la frecuencia de avisos con los datos de
   utilización de capacidad para construir este caso con evidencia real.

5. **¿Los datos de carga de guardia alguna vez se han usado, incluso de
   manera informal, para evaluar el rendimiento de un individuo en lugar
   de informar decisiones de dotación de personal y arquitectura?** Esto
   arriesga la misma trampa de evaluación individual que advierte el
   capítulo 3.4 para los datos de actividad, aplicada aquí a la carga
   operativa en su lugar.

6. **¿Qué nos costaría perder a nuestro ingeniero de guardia más avisado
   por agotamiento o rotación de personal, y cómo se compara eso con el
   coste de rebalancear la rotación o invertir en correcciones de causa
   raíz ahora?** Esta comparación concreta a menudo constituye un caso
   más sólido para la inversión proactiva que un llamamiento abstracto a
   la sostenibilidad por sí solo.

## Enfoque sectorial

**Startup.** La guardia a menudo es informal y se concentra en los
fundadores o un pequeño equipo de ingeniería temprano por necesidad. El
riesgo es normalizar un ritmo insostenible desde temprano, antes de que se
haya considerado nunca un diseño de rotación deliberado, lo cual se vuelve
mucho más difícil de revertir una vez que se ha convertido en la
expectativa predeterminada para las nuevas contrataciones que se unen más
tarde.

**Pequeña empresa.** Un calendario de rotación simple y explícito con un
límite de sostenibilidad claro (no más de una semana de cada cuatro, por
ejemplo) es alcanzable incluso sin herramientas dedicadas de guardia. La
disciplina principal es simplemente hacer visible y explícita la rotación
y su equidad en lugar de dejarla como un acuerdo informal y no declarado.

**Empresa.** La concentración de distribución de avisos y sus riesgos
asociados de agotamiento y factor de autobús escalan mal aquí, ya que más
servicios y más complejidad generalmente significan más avisos
potenciales, y la concentración de experiencia agrava el problema.
Invierte en el rastreo de carga a nivel individual (usado solo de manera
agregada para decisiones de dotación de personal), la inversión en
capacidad para reducir el volumen de avisos en la fuente, y el
rebalanceo deliberado de rotaciones.

**Gobierno.** La infraestructura pública crítica a menudo requiere
cobertura de guardia las veinticuatro horas con consecuencias genuinas si
se retrasa la respuesta, lo que eleva tanto la importancia de una
dotación de personal sostenible como la dificultad de lograrla bajo las
restricciones típicas de personal del sector público. Usa los datos de
carga de guardia explícita y directamente para justificar las solicitudes
de dotación de personal, enmarcando la capacidad de guardia sostenible
como un requisito de fiabilidad directo y cuantificable en lugar de una
preferencia discrecional de dotación de personal.

## Ejemplos

**Empresa.** Una empresa de infraestructura en la nube descubrió, después
de finalmente extraer datos de avisos a nivel individual por primera vez,
que dos ingenieros sénior de una rotación de guardia de quince personas
habían manejado personalmente más del 60% de todos los avisos del año
anterior, tanto porque eran los más rápidos en resolver incidencias
complejos como porque otros miembros de la rotación habían aprendido a
deferir informalmente a ellos en lugar de intentar la resolución por sí
mismos. Ambos ingenieros reportaron síntomas significativos de agotamiento
en la encuesta de bienestar de la empresa (capítulo 3.2) sin que el
liderazgo hubiera conectado previamente esa señal de encuesta con los
datos específicos y cuantificables de concentración de guardia. Un
esfuerzo de rebalanceo deliberado, incluyendo formación dirigida para
construir confianza de resolución en toda la rotación más amplia y un
límite formal sobre cuántos avisos consecutivos se podía asignar a
cualquier individuo, redujo la proporción de los dos ingenieros a menos
del 25% en seis meses, con una mejora correspondiente en su bienestar
reportado.

**Gobierno.** El equipo de ingeniería de guardia de una empresa regional
de agua había estado operando con una rotación nominal de cuatro personas
para la monitorización de infraestructura crítica, pero los datos de
utilización de capacidad revelaron que una estación de bombeo específica y
envejecida, que operaba consistentemente cerca de su techo operativo,
generaba casi la mitad de todos los avisos de toda la rotación. Una
actualización de capacidad a esa única estación de bombeo, financiada
directamente usando la correlación entre frecuencia de avisos y capacidad
como evidencia de apoyo concreta en la solicitud de presupuesto, redujo el
volumen total de avisos de toda la organización en aproximadamente un 40%
en el año siguiente, demostrando que la carga de guardia había sido
sustancialmente un problema de capacidad disfrazado en lugar de
puramente un problema de dotación de personal o proceso.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de gestionar deliberadamente la carga de guardia y capacidad
es la rotación de personal evitada y la degradación de fiabilidad evitada
por respondedores agotados que toman decisiones más lentas y más
propensas a errores. El ejemplo de infraestructura en la nube anterior
muestra directamente el riesgo acumulativo: la concentración no gestionada
creó exposición simultánea de agotamiento y factor de autobús que un
esfuerzo de rebalanceo directo e informado por datos resolvió a un coste
modesto comparado con el riesgo de perder a cualquiera de los ingenieros
sénior por rotación de personal.

El coste total de propiedad incluye la instrumentación para rastrear la
distribución de avisos a nivel individual (usada con cuidado, solo de
manera agregada) y, cuando esté indicado, una inversión genuina en
capacidad para reducir el volumen de avisos en la fuente. El ejemplo de la
empresa de agua muestra que esta inversión puede pagarse a sí misma
directa y mesurablemente, ya que una única corrección de capacidad bien
dirigida redujo sustancialmente la carga operativa de toda la
organización.

## Antipatrones y errores comunes

- **Rastrear solo un recuento de avisos promedio a nivel de equipo:**
  oculta una concentración individual severa que impulsa tanto el riesgo
  de agotamiento como el de factor de autobús.
- **Tratar un calendario de rotación nominal como si reflejara la
  realidad:** un calendario que efectivamente depende de dos o tres
  personas no es sostenible sin importar cuántos nombres estén en la
  lista.
- **Usar datos de respuesta a avisos individuales para evaluar el
  rendimiento:** repite la trampa de evaluación individual que advierte
  este libro a lo largo de todo el texto, aplicada aquí a la carga
  operativa.
- **Aceptar un volumen alto de avisos como un coste inevitable de la
  fiabilidad en lugar de investigar la capacidad como causa raíz:** pasa
  por alto una corrección directa frecuentemente disponible.
- **No conectar nunca los datos de carga de guardia con los datos de
  encuesta de bienestar:** pierde la oportunidad de identificar y actuar
  sobre un riesgo de agotamiento acumulativo antes de que salga a la
  superficie como rotación de personal.
- **Ignorar el coste psicológico de estar de guardia con cero avisos
  reales:** subcuenta la verdadera carga de una rotación.

## Modelo de madurez

- **Nivel 1, Iniciar:** La carga de guardia no se rastrea en absoluto, o
  se rastrea solo como un promedio de todo el equipo que oculta la
  concentración individual.
- **Nivel 2, Desarrollar:** Existen algunos datos de avisos a nivel
  individual, pero no están conectados con los datos de encuesta de
  bienestar ni con las decisiones de inversión en capacidad.
- **Nivel 3, Estandarizar:** La distribución de avisos a nivel individual
  y la correlación de utilización de capacidad se rastrean de manera
  consistente, con límites de sostenibilidad explícitos sobre la
  frecuencia de rotación.
- **Nivel 4, Gestionar:** Los datos de carga de guardia se usan
  activamente para impulsar la inversión en capacidad y el rebalanceo de
  rotaciones, conectados explícitamente con las señales de encuesta de
  bienestar.
- **Nivel 5, Orquestar:** La organización puede señalar mejoras
  específicas y mesurables tanto en la carga operativa como en el
  bienestar a partir de la inversión en capacidad dirigida y el rediseño
  de rotaciones, y la dotación de personal de guardia sostenible es una
  entrada rutinaria y bien justificada en la planificación de personal e
  infraestructura.

## Ideas para el debate

1. ¿Qué aspecto tiene nuestra distribución real de avisos a nivel individual ahora mismo?
2. ¿Nuestro calendario de rotación nominal refleja quién realmente resuelve la mayoría de las incidencias?
3. ¿Qué única inversión en capacidad reduciría más nuestro volumen actual de avisos?
4. ¿Alguna vez hemos conectado los datos de carga de guardia con las señales de encuesta de bienestar?
5. ¿Qué nos costaría perder por agotamiento a nuestro ingeniero más avisado?

## Conclusiones clave

- La carga de guardia es un **recurso medible y gestionable**; rastrea la
  distribución a nivel individual, no solo un promedio de todo el equipo
  que puede ocultar una concentración severa.
- Estar de guardia conlleva un **coste psicológico incluso con cero
  avisos reales**; mide esto por separado de la satisfacción general.
- **La planificación de capacidad y la carga de guardia están
  directamente conectadas**; la infraestructura con provisión
  insuficiente genera más avisos y más carga.
- Usa los datos de guardia para **decisiones de dotación de personal y
  capacidad**, nunca para la evaluación de rendimiento individual.
- Un sistema de guardia sostenible **protege la propia fiabilidad**, ya
  que los respondedores agotados toman decisiones más lentas y más
  propensas a errores.

## Referencias y lecturas adicionales

- *Site Reliability Engineering: How Google Runs Production Systems*, de
  Betsy Beyer, Chris Jones, Jennifer Petoff, y Niall Richard Murphy, eds.
  (la práctica de guardia y la carga operativa sostenible).
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, y Stephen Thorne, eds. (orientación
  práctica sobre el diseño de rotaciones de guardia).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, de Christina Maslach y Michael P. Leiter (causas
  organizacionales e intervenciones para el agotamiento, aplicables al
  estrés de guardia).
- *Seeking SRE: Conversations About Running Production Systems at Scale*,
  editado por David N. Blank-Edelman (perspectivas de la práctica sobre
  operaciones sostenibles).
