# 4.3 Cambios acumulados de código y análisis de puntos calientes

## Visión general y motivación

Los **cambios acumulados de código** (*code churn*) miden con qué frecuencia
cambia un archivo o módulo a lo largo del tiempo: líneas añadidas,
modificadas y eliminadas a través de sucesivos commits. Por sí solos, los
cambios acumulados son una señal bastante débil: algunos archivos cambian a
menudo porque están bajo un desarrollo activo y saludable, y algunos cambian
rara vez porque son estables y correctos, no porque estén desatendidos. El
verdadero poder diagnóstico del enfoque de este tema proviene de
combinar los cambios acumulados con la complejidad (tema 4.1): un
archivo que es a la vez modificado con frecuencia y altamente complejo, un
**punto caliente**, tiene una probabilidad desproporcionada de ser una
fuente de defectos y un lastre para la velocidad del equipo, y la
investigación empírica lo confirma de manera consistente en muchas bases de
código y organizaciones.

El **análisis de puntos calientes**, popularizado por el trabajo de Adam
Tornhill sobre analítica de software, es especialmente valioso porque no
requiere ninguna encuesta manual ni juicio subjetivo para encontrar sus
objetivos. El historial de [control de versiones](https://en.wikipedia.org/wiki/Version_control)
ya contiene todo lo necesario para calcular tanto los cambios acumulados
como, combinado con herramientas de análisis estático, la complejidad, para
cada archivo de una base de código de forma automática. Esto permite a un
equipo u organización identificar, con evidencia real en lugar de
anécdotas o la queja más ruidosa en una retrospectiva, exactamente qué
pequeña fracción de la base de código merece atención de refactorización
primero.

Para los equipos grandes, el análisis de puntos calientes resuelve un
problema genuino de asignación: una base de código con cientos de miles de
líneas tiene mucho más código del que cualquier equipo puede permitirse
refactorizar de forma exhaustiva, y la intuición sobre dónde viven los
peores problemas con frecuencia es errónea, sesgada por quien se quejó más
recientemente o el archivo que a un ingeniero sénior le resulta
antipático. Las organizaciones empresariales y gubernamentales que gestionan
bases de código grandes y de larga vida dependen de esta priorización basada
en datos para dirigir un presupuesto de refactorización genuinamente escaso
hacia el código que producirá el mayor retorno.

## Principios clave

- **Los cambios acumulados por sí solos son una señal débil; combinados con
  la complejidad son fuertes.** La combinación, no cualquiera de las dos
  métricas por separado, es lo que identifica un punto caliente genuino.
- **El análisis de puntos calientes no requiere ninguna encuesta manual.**
  El historial de control de versiones ya contiene todo lo necesario para
  calcularlo automáticamente.
- **Un punto caliente es una señal de priorización, no un veredicto
  automático.** Todavía se necesita juicio humano para decidir qué acción
  merece un punto caliente concreto.
- **El cambio frecuente no es intrínsecamente malo.** Parte de los cambios
  acumulados reflejan un desarrollo saludable y activo en lugar de un
  problema de calidad.
- **Este análisis escala precisamente donde la intuición falla**: en bases
  de código demasiado grandes para que cualquier persona las examine y
  priorice solo por instinto.

## Recomendaciones

### Calcula los cambios acumulados y la complejidad juntos, y clasifica por su combinación

Extrae la frecuencia de cambio por archivo del historial de control de
versiones a lo largo de una ventana significativa, normalmente de seis
meses a un año, y empareja eso con una medida de complejidad (tema 4.1)
para los mismos archivos. Clasifica los archivos por la combinación,
comúnmente el producto de los cambios acumulados y la complejidad, en lugar
de por cualquiera de las dos métricas por separado, ya que esta combinación
es lo que la investigación subyacente asocia de forma consistente con tasas
de defectos y coste de mantenimiento elevados.

### Investiga los principales puntos calientes con juicio humano antes de actuar

Una lista clasificada de puntos calientes identifica candidatos para
atención, no una lista de acciones automática. Para cada uno de tus
principales puntos calientes, investiga con ojo humano: ¿es este código
genuinamente mal diseñado que necesita refactorización, o es un archivo que
legítimamente necesita cambios frecuentes porque se sitúa en el centro de
una lógica de negocio activa y en evolución, en cuyo caso la prioridad
podría ser mejores pruebas o documentación más clara en lugar de una
reescritura estructural. Esto refleja la distinción entre complejidad
esencial y accidental del tema 4.1, aplicada aquí a la señal combinada
de cambios acumulados y complejidad.

### Contrasta los puntos calientes con datos de incidentes y defectos

Cuando estén disponibles, comprueba si tus puntos calientes identificados
se correlacionan con incidentes de producción reales (tema 6.2) o datos
de defectos escapados (tema 5.1). Una correlación fuerte valida el
análisis de puntos calientes como genuinamente predictivo para tu base de
código concreta y refuerza el caso de negocio para actuar sobre él; una
correlación débil o ausente sugiere ya sea un problema de calidad de datos,
ya sea que los cambios acumulados y la complejidad no son, en tu contexto
particular, la combinación correcta de señales por la que priorizar.

### Rastrea la tendencia de los puntos calientes a través de análisis sucesivos, no solo una instantánea única

Vuelve a ejecutar el análisis de puntos calientes periódicamente, lo
trimestral es habitual, y rastrea si los puntos calientes previamente
identificados están mejorando, empeorando, o resueltos, y si están
surgiendo otros nuevos. Un punto caliente que persiste a través de varios
ciclos de análisis a pesar de haber sido señalado repetidamente indica que
el esfuerzo de remediación en realidad no se ha aplicado, o que un intento
de remediación previo no abordó el problema subyacente real.

### Usa los datos de puntos calientes para informar, no sustituir, las conversaciones de priorización a nivel de equipo

Presenta el análisis de puntos calientes como evidencia en una discusión de
priorización, no como un mandato automático que anula el propio juicio
contextual de un equipo sobre qué es lo más importante ahora mismo. Un
equipo puede tener razones buenas y legítimas para despriorizar
temporalmente un punto caliente conocido, una reescritura planificada
próxima hace que la refactorización incremental sea un esfuerzo
desperdiciado, por ejemplo, y el análisis debería informar esa
conversación, no sustituirla.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Priorización basada en intuición | Rápida, no requiere herramientas, aprovecha el conocimiento contextual del equipo | Sesgada por la actualidad, la preferencia personal, y quien más se queja |
| Cambios acumulados por sí solos | Simple de calcular | Señal débil por sí sola; el cambio frecuente no es intrínsecamente malo |
| Cambios acumulados combinados con complejidad (análisis de puntos calientes) | Fuerte, basada en evidencia, automática a partir de datos existentes | Requiere combinar dos fuentes de datos e interpretar los resultados con juicio |
| Análisis de puntos calientes contrastado con datos de incidentes | Validado, la evidencia más fuerte para la priorización | Requiere una vinculación fiable entre incidentes y código, que no toda organización tiene |

La tensión central es **evidencia frente a contexto**. El análisis de
puntos calientes proporciona evidencia objetiva y escalable que la
priorización basada en intuición no puede igualar en una base de código
grande, poco familiar o de larga vida, pero carece del juicio contextual
que un equipo tiene sobre por qué un punto caliente dado importa, o no,
ahora mismo. Resuelve la tensión tratando el análisis de puntos calientes
como la base de evidencia para una conversación de priorización,
combinada con, y nunca en sustitución de, el propio juicio contextual del
equipo sobre el momento y las compensaciones.

## Preguntas para debatir con tu equipo

1. **¿Cuáles son nuestros cinco principales puntos calientes, clasificados
   por cambios acumulados y complejidad combinados, y esa clasificación
   coincidiría con la intuición de nuestro equipo sobre dónde viven
   nuestros peores problemas?** Ejecuta el análisis y compara el resultado
   con lo que tu equipo habría adivinado antes de ver los datos; las
   discrepancias suelen ser el hallazgo más valioso.

2. **¿Nuestros puntos calientes identificados se correlacionan con
   incidentes de producción reales o datos de defectos escapados?** Si
   tienes los datos para comprobarlo, hazlo directamente; si no los tienes,
   esa brecha en sí misma vale la pena nombrarla como algo hacia lo que
   trabajar.

3. **Para nuestro principal punto caliente ahora mismo, ¿el problema
   subyacente es complejidad esencial que legítimamente requiere cambios
   frecuentes, o complejidad accidental que una refactorización podría
   corregir genuinamente?** Repasa el archivo juntos y haz este juicio de
   forma explícita en lugar de asumir cualquiera de las dos respuestas.

4. **¿Ha persistido un punto caliente previamente identificado a través de
   varios ciclos de análisis a pesar de haber sido señalado?** Si es así,
   investiga con honestidad por qué: la remediación nunca se intentó
   realmente, o un intento previo no abordó la causa subyacente real.

5. **¿Estamos priorizando actualmente el trabajo de refactorización basado
   en evidencia, o basado en quien se quejó más reciente o ruidosamente?**
   Sé honesto sobre el proceso de priorización real actual de tu equipo y
   cómo se compara con lo que sugeriría un análisis de puntos calientes
   basado en evidencia.

6. **¿Qué nos costaría, en tasa de defectos o ralentización de la entrega,
   dejar nuestro principal punto caliente actual sin abordar durante otro
   año?** Esta pregunta obliga a una estimación concreta del coste que
   puede anclar una decisión de priorización, en lugar de dejar el punto
   caliente como una preocupación abstracta y fácil de despriorizar.

## Enfoque sectorial

**Startup.** El análisis formal de puntos calientes suele ser innecesario
con una base de código pequeña y joven que todo el equipo todavía tiene en
la cabeza colectivamente. La técnica se vuelve valiosa específicamente una
vez que la base de código ha crecido más allá del tamaño en el que
cualquier persona puede identificar de forma fiable las peores áreas solo
de memoria, a menudo en algún punto de los primeros uno o dos años de
crecimiento sostenido.

**Pequeña empresa.** Herramientas gratuitas o de bajo coste pueden extraer
datos de cambios acumulados directamente de tu historial de control de
versiones existente con una configuración mínima; combínalos con cualquier
dato de complejidad que tu linter o herramienta de análisis estático
existente ya reporte, en lugar de invertir en software comercial dedicado
de análisis de puntos calientes en esta escala.

**Empresa.** El análisis de puntos calientes es donde la priorización
basada en evidencia obtiene el mayor retorno, ya que la intuición
genuinamente falla en la escala de una base de código que abarca cientos de
servicios y miles de archivos. Invierte en ejecutar este análisis de manera
regular en toda la base de código y contrastarlo con datos de incidentes
para construir un caso validado y defendible para la inversión en
refactorización.

**Gobierno.** Los sistemas de larga vida, a veces de décadas de
antigüedad, son un ajuste natural para el análisis de puntos calientes, ya
que el historial acumulado de control de versiones proporciona una señal
rica y a largo plazo sobre qué partes del sistema genuinamente han
demostrado ser problemáticas con el tiempo. Este enfoque basado en
evidencia también es una herramienta persuasiva y concreta para justificar
la inversión en modernización ante partes interesadas que necesitan algo
más que la opinión informal de un ingeniero para aprobar financiación.

## Ejemplos

**Empresa.** La plataforma de procesamiento de siniestros de una compañía
de seguros, que abarcaba más de dos millones de líneas de código en
docenas de servicios, había acumulado años de quejas informales sobre que
"el módulo de validación de siniestros" era problemático, pero nunca se
había seguido ninguna priorización formal a partir de esas quejas. Un
análisis de puntos calientes que combinaba seis meses de datos de cambios
acumulados con puntuaciones de complejidad identificó un archivo
completamente distinto, una utilidad compartida de conversión de divisas
enterrada en lo profundo de una dependencia rara vez discutida, como el
verdadero principal punto caliente, uno que nunca había surgido en ninguna
queja retrospectiva. Contrastarlo con datos de incidentes confirmó que
esta utilidad estaba implicada en una proporción desproporcionada de
defectos de cálculo financiero durante el año anterior, y una
refactorización dirigida de esa utilidad específica, en lugar del módulo
al que todos habían estado culpando informalmente, produjo una reducción
mesurable de los incidentes relacionados en el trimestre siguiente.

**Gobierno.** El sistema de licencias de vehículos de motor de décadas de
antigüedad de una agencia estatal se sometió a un análisis de puntos
calientes como parte de un caso de negocio de modernización. El análisis
identificó un pequeño grupo de archivos, que representaba menos del 3% de
la base de código total, responsable de una proporción desproporcionada
tanto de cambios acumulados como de complejidad, y contrastarlo con el
registro de incidentes de la agencia mostró que ese mismo grupo
representaba casi el 40% de todos los defectos del sistema reportados
durante los tres años anteriores. Este hallazgo concreto y basado en
evidencia, mucho más persuasivo que una afirmación general de que "el
sistema es antiguo y necesita modernizarse", se convirtió en la pieza
central de una solicitud presupuestaria exitosa para un esfuerzo de
modernización dirigido e incremental centrado específicamente en ese
grupo en lugar de un reemplazo completo del sistema, mucho más costoso.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno del análisis de puntos calientes es una inversión dirigida y
basada en evidencia: ambos ejemplos anteriores muestran un caso en el que
el análisis formal redirigió la atención de refactorización lejos de donde
la queja informal la había centrado y hacia donde los datos realmente
mostraban que vivía el problema, produciendo un retorno mesurablemente
mejor que el que habría producido una inversión sin objetivo definido o
guiada por la intuición.

El coste total de propiedad es bajo, ya que los datos de cambios acumulados
provienen directamente del historial de control de versiones existente y
los datos de complejidad normalmente ya están disponibles a partir de
herramientas de análisis estático (tema 4.4); la principal inversión es
el esfuerzo de análisis periódico y el tiempo de juicio humano para
interpretar los resultados y decidir qué acción merece cada punto caliente
identificado.

## Antipatrones y errores comunes

- **Usar los cambios acumulados por sí solos sin complejidad:** una señal
  débil por sí sola que puede señalar código saludable y activamente
  desarrollado como un falso positivo.
- **Tratar una clasificación de puntos calientes como una lista de acciones
  automática sin juicio humano:** pasa por alto la distinción entre
  esencial y accidental que determina la respuesta correcta.
- **Priorizar la refactorización basándose en la queja más ruidosa en
  lugar de la evidencia:** con frecuencia desvía el esfuerzo lejos de donde
  los datos realmente muestran que vive el problema.
- **No contrastar nunca los puntos calientes con datos de incidentes o
  defectos:** pasa por alto el paso de validación que refuerza el caso
  para actuar sobre el análisis.
- **Ejecutar el análisis una vez y nunca repetirlo:** pasa por alto si el
  esfuerzo de remediación realmente está funcionando con el tiempo.
- **Ignorar un punto caliente señalado de forma persistente sin investigar
  por qué la remediación no se mantuvo:** desperdicia el valor diagnóstico
  del análisis repetido.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las prioridades de refactorización se establecen
  por intuición o volumen de quejas, sin que ningún dato de cambios
  acumulados o complejidad informe la decisión.
- **Nivel 2, Desarrollar:** Algunos equipos comprueban informalmente los
  datos de cambios acumulados o complejidad, pero no existe una práctica
  consistente de análisis de puntos calientes en toda la organización.
- **Nivel 3, Estandarizar:** El análisis de puntos calientes que combina
  cambios acumulados y complejidad se ejecuta de manera regular y
  consistente informa la priorización de refactorización en toda la
  organización.
- **Nivel 4, Gestionar:** Los puntos calientes se contrastan con datos de
  incidentes y defectos para validar el análisis, y se rastrea activamente
  la tendencia a través de ciclos sucesivos.
- **Nivel 5, Orquestar:** La organización puede señalar mejoras específicas
  y mesurables en la tasa de defectos o la entrega a partir de la inversión
  en refactorización informada por puntos calientes, y el análisis es una
  entrada rutinaria y confiable en las decisiones de inversión de
  ingeniería.

## Ideas para el debate

1. ¿Qué aspecto tendría nuestra lista de principales puntos calientes si ejecutáramos este análisis hoy?
2. ¿Esa lista coincidiría, o contradiría, la sensación informal actual de nuestro equipo sobre nuestras peores áreas de problemas?
3. ¿Tenemos los datos para contrastar los puntos calientes con incidentes reales?
4. ¿Ha persistido un área de problema conocida a pesar de intentos previos de solucionarla, y por qué?
5. ¿Qué nos costaría dejar nuestro principal punto caliente actual sin abordar durante otro año?

## Conclusiones clave

- **Los cambios acumulados combinados con la complejidad** identifican
  puntos calientes genuinos con mucha más fiabilidad que cualquiera de las
  dos métricas por separado.
- El análisis de puntos calientes no requiere **ninguna encuesta manual**;
  es calculable automáticamente a partir de datos existentes de control de
  versiones y análisis estático.
- Trata una clasificación de puntos calientes como **evidencia para la
  priorización**, no como un veredicto automático; todavía se requiere
  juicio humano.
- **Contrasta los puntos calientes con datos de incidentes y defectos**
  para validar el análisis y reforzar el caso para actuar sobre él.
- Rastrea los puntos calientes **a través de ciclos de análisis sucesivos**
  para confirmar que la remediación realmente está funcionando, no solo
  una vez como una instantánea.

## Referencias y lecturas adicionales

- *Your Code as a Crime Scene*, de Adam Tornhill (el texto fundacional
  sobre el análisis de puntos calientes que combina cambios acumulados y
  complejidad a partir de datos de control de versiones).
- *Software Design X-Rays*, de Adam Tornhill (técnicas adicionales para el
  análisis conductual de código usando el historial de control de
  versiones).
- Nagappan, Nachiappan, y Thomas Ball, "Use of Relative Code Churn Measures
  to Predict System Defect Density," *ICSE* (2005): investigación empírica
  sobre la relación entre los cambios acumulados y la densidad de
  defectos.
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler
  (técnicas para abordar la complejidad accidental una vez identificada).
