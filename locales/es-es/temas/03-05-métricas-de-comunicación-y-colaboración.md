# 3.5 Métricas de comunicación y colaboración

## Visión general y motivación

**Comunicación y colaboración**, la C de SPACE (tema 3.1), mide cómo
fluye realmente la información entre personas y equipos: qué tan
descubrible es la documentación, qué tan uniformemente se reparte el
conocimiento en un equipo, qué tan bien se coordinan las dependencias entre
equipos, y qué tan bien se incorporan los nuevos miembros del equipo al
flujo de entendimiento compartido. Esta dimensión suele ser la menos
instrumentada de las cinco, precisamente porque es más difícil de observar
que los datos de entrega y menos personal que los datos de satisfacción, y
ese vacío es un error, porque las rupturas aquí son con frecuencia la
causa raíz de problemas que aparecen, mal atribuidos, en cada una de las
otras dimensiones.

Una tasa de fallos de cambio en aumento (tema 2.10) que parece un
problema de pruebas en realidad a veces es un problema de comunicación: un
equipo que no supo del cambio de una dependencia hasta que se rompió en
producción. Una tendencia de satisfacción en declive (tema 3.2) que
parece un problema de carga de trabajo en realidad a veces es un problema
de aislamiento: un ingeniero que ha sido excluido en silencio de las
conversaciones donde se toman las decisiones. El argumento central de este
tema es que la comunicación y la colaboración merecen una medición
directa precisamente porque sus fallos se disfrazan de otros problemas, y
un equipo que persigue la causa raíz equivocada desperdicia esfuerzo real
arreglando lo que no es.

Para los equipos grandes, esta dimensión se vuelve estructuralmente más
difícil de sostener justo a medida que se vuelve más importante. La
coordinación de un equipo de cinco personas ocurre por proximidad diaria y
casi no necesita medición deliberada; una organización de quinientas
personas repartida por husos horarios y unidades de negocio depende de
mecanismos de documentación, descubribilidad y coordinación entre equipos
que hay que diseñar deliberadamente y monitorizar activamente, porque los
canales informales que funcionaban a pequeña escala simplemente no llegan
tan lejos.

## Principios clave

- **Las rupturas de comunicación a menudo se disfrazan de otros
  problemas.** Un problema de calidad o de satisfacción puede tener una
  causa raíz de colaboración.
- **Esta dimensión es la más difícil de instrumentar automáticamente**, y
  la tentación es saltársela por completo; resiste esa tentación de forma
  deliberada.
- **La concentración de conocimiento es un riesgo medible, no solo una
  preocupación vaga.** Rastrea qué tan estrechamente se sostiene el
  conocimiento crítico.
- **La fricción de dependencias entre equipos a menudo es invisible para
  los equipos implicados** hasta que alguien la mide directamente.
- **La velocidad de incorporación es un indicador indirecto directo y
  medible de qué tan bien fluye realmente el entendimiento compartido** en
  una organización.

## Recomendaciones

### Mide directamente la concentración de conocimiento

Rastrea cuántas personas pueden revisar, modificar u operar de forma
competente cada componente de sistema crítico: un componente con solo una
persona cualificada tiene un **[factor de
autobús](https://en.wikipedia.org/wiki/Bus_factor)** de uno, un riesgo
severo y a menudo invisible (el tema del libro hermano
`software-engineering-guide` sobre sostener sistemas de larga vida cubre
esto con más profundidad). Los datos de autoría del control de versiones,
combinados con los registros de rotación de guardia, pueden sacar a la luz
esta concentración automáticamente: busca componentes donde un único autor
o una única persona de guardia representa una cuota desproporcionada de
cambios o respuestas a incidencias en un periodo significativo.

### Mide la fricción de dependencias entre equipos con una señal directa

Rastrea cuánto tarda una solicitud entre equipos, un cambio de API
necesario, una actualización de biblioteca compartida, una publicación
coordinada, desde que se plantea hasta que se resuelve, similar en
espíritu a la descomposición de tiempo de ciclo del tema 2.6 pero
aplicada específicamente a la coordinación entre equipos, no dentro de un
equipo. Un equipo que espera de forma consistente semanas por una
dependencia que posee otro equipo tiene un problema de colaboración que no
aparecerá con claridad en las métricas de entrega internas propias de
ninguno de los dos equipos.

### Usa la descubribilidad de la documentación, no solo su existencia, como señal

Un wiki lleno de páginas obsoletas o imposibles de encontrar no es
evidencia de buena comunicación solo porque el contenido técnicamente
existe en algún lugar. Cuando sea posible, rastrea con qué frecuencia se
accede realmente a la documentación, con qué frecuencia un nuevo miembro
del equipo reporta no poder encontrar una respuesta que necesitaba, o con
qué frecuencia se hace la misma pregunta repetidamente en un canal de chat
porque la respuesta, aunque documentada, no era descubrible. Esto conecta
directamente la calidad de la documentación (tema 4.6) con las
preocupaciones de colaboración de esta dimensión.

### Rastrea el tiempo de incorporación hasta la contribución productiva como indicador indirecto directo

El tiempo desde que un nuevo miembro del equipo se incorpora hasta su
primera contribución significativa e independiente es un indicador
indirecto fuerte y práctico de qué tan bien fluye realmente el
entendimiento compartido en una organización: un equipo donde el
conocimiento vive por completo en la cabeza de las personas se incorpora
lenta e impredeciblemente; un equipo con documentación genuinamente buena,
propiedad clara y mentoría accesible se incorpora más rápido y de forma
más consistente. Rastrea esta métrica explícitamente y trata un tiempo de
incorporación largo o muy variable como una señal de colaboración, no solo
como una preocupación de recursos humanos.

### Mapea periódicamente las redes de comunicación reales, no solo los organigramas

Un organigrama describe quién se supone que reporta a quién; rara vez
describe quién habla realmente con quién para sacar adelante el trabajo.
Un análisis periódico y ligero de los patrones de comunicación, redes de
revisión de código (quién revisa el trabajo de quién), o la superposición
de asistencia a reuniones, puede revelar una estructura de colaboración
real que difiere sustancialmente del organigrama formal, a menudo
exponiendo un cuello de botella informal (una persona por la que todos
pasan) o un bolsillo aislado (un subequipo que se ha alejado del flujo de
información más amplio) que de otro modo permanecería invisible.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Ninguna medición directa de colaboración | Baja sobrecarga | Las causas raíz se atribuyen mal a otras dimensiones; los riesgos permanecen invisibles |
| Rastreo de concentración de conocimiento | Saca a la luz directamente un riesgo real y severo (factor de autobús) | Requiere combinar datos de múltiples sistemas (control de versiones, guardia) |
| Rastreo de fricción de dependencias entre equipos | Revela problemas de coordinación invisibles dentro de cualquiera de los dos equipos | Necesita instrumentación deliberada; no es automático a partir de herramientas existentes |
| Mapeo de red de comunicación | Revela la estructura real e informal detrás del organigrama | Puede sentirse invasivo si no se maneja con el mismo cuidado que los datos de satisfacción |

La tensión central es **dificultad de instrumentación frente a valor
diagnóstico**. Esta dimensión es genuinamente más difícil de medir
automáticamente que los datos de entrega o de actividad, y esa dificultad
es precisamente por qué muchas organizaciones se la saltan, aunque sus
fallos son con frecuencia la causa raíz oculta de problemas atribuidos a
otras dimensiones. Resuélvela empezando por las señales de mayor valor y
más abordables, la concentración de conocimiento y la fricción de
dependencias entre equipos, ambas derivables en gran medida de los datos
existentes de control de versiones y seguimiento de incidencias, antes de
intentar un análisis de red de comunicación más ambicioso.

## Preguntas para debatir con tu equipo

1. **¿Conocemos nuestro factor de autobús para cada componente de sistema
   crítico, o solo lo descubriríamos de la peor manera cuando la única
   persona que lo entiende no esté disponible?** Extrae datos de control de
   versiones y de guardia para tus sistemas más críticos y comprueba con
   honestidad qué tan concentrado está realmente el conocimiento.

2. **¿Cuánto tarda en resolverse una solicitud típica de dependencia entre
   equipos, y habría notado esa fricción cualquiera de los dos equipos
   implicados sin medirla deliberadamente?** Elige una dependencia reciente
   entre equipos y rastrea su cronología real; la respuesta suele ser más
   larga, y menos visible para los implicados, de lo que asumía cualquiera
   de los dos equipos.

3. **Cuando hemos tenido recientemente un problema de calidad o
   satisfacción, ¿podría una ruptura de comunicación o colaboración haber
   sido parte de la causa raíz real?** Repasa una incidencia reciente o una
   caída de satisfacción y hazte esta pregunta específicamente, en lugar de
   aceptar la primera explicación más obvia.

4. **¿Cuánto tarda un nuevo miembro del equipo en hacer su primera
   contribución significativa e independiente, y cuánto varía ese tiempo
   de una persona a otra?** Un tiempo de incorporación largo o muy variable
   es un síntoma directo y medible de qué tan bien fluye realmente el
   entendimiento compartido en tu equipo.

5. **¿Coincide nuestra red de comunicación informal con nuestro organigrama
   formal, o se ha desarrollado un cuello de botella oculto o un bolsillo
   aislado que nadie ha nombrado?** Si nunca has mirado esto directamente,
   esa ausencia en sí misma merece debatirse.

6. **¿Es realmente descubrible nuestra documentación, o simplemente existe
   en algún lugar difícil de encontrar?** Pregúntale a un miembro reciente
   del equipo, o intenta deliberadamente responder a una pregunta real
   usando solo tus recursos documentados, y observa cómo va realmente la
   experiencia.

## Enfoque sectorial

**Startup.** La comunicación ocurre de forma natural por la proximidad y la
conversación diaria en un equipo pequeño, y la medición formal suele ser
innecesaria. El riesgo que hay que vigilar es que el factor de autobús se
concentre peligrosamente a medida que el equipo crece más allá del tamaño
en que la ósmosis informal todavía llega a todos, a menudo entre ocho y
doce personas.

**Pequeña empresa.** Una conversación simple, periódica y honesta, "quién
es la única persona que entiende este sistema", a menudo saca a la luz los
riesgos de concentración de conocimiento más críticos sin necesitar
instrumentación formal. Prioriza documentar primero las dos o tres áreas
de conocimiento más frágiles y más concentradas.

**Empresa grande.** Tanto la fricción de dependencias entre equipos como la
concentración de conocimiento escalan mal aquí, ya que más equipos
significan más superficie de coordinación y más sistemas críticos que
pueden acabar en manos de un grupo cada vez más reducido de expertos
veteranos. Invierte deliberadamente en la instrumentación que recomienda
este tema, ya que la conciencia informal genuinamente no puede cubrir
una organización a esta escala.

**Sector público.** Los sistemas de larga vida y las largas permanencias de
empleados comunes en las organizaciones del sector público pueden crear un
riesgo severo de factor de autobús escondido detrás de una estabilidad
aparente, ya que un sistema que no ha cambiado de manos en una década puede
depender por completo de una o dos personas cerca de la jubilación. Trata
la medición de concentración de conocimiento como una preocupación de
continuidad operativa, no solo como una amabilidad de ingeniería.

## Ejemplos

**Empresa grande.** El equipo de plataforma de una empresa de logística
descubrió, solo después de una incidencia crítica durante las vacaciones de
un ingeniero clave, que un algoritmo central de enrutamiento tenía un
factor de autobús efectivo de uno: el historial del control de versiones
mostró que una única persona había autorizado más del 90% de los cambios
recientes del componente, y el registro de rotación de guardia mostró que
la misma persona había resuelto personalmente cada incidencia relacionada
durante los dos años anteriores. El equipo instituyó un programa
deliberado de difusión de conocimiento, sesiones de trabajo en pareja y
rotación de la propiedad de incidencias relacionadas, y un análisis de
seguimiento ocho meses después mostró que el factor de autobús había
subido a cuatro, con el ingeniero original liberado para asumir trabajo
nuevo y de mayor apalancamiento en lugar de seguir siendo un punto único
de fallo permanente.

**Sector público.** El equipo de ingeniería de una agencia estatal de
beneficios midió por primera vez la fricción de dependencias entre equipos
después de retrasos repetidos y notados informalmente en un servicio
compartido de verificación de elegibilidad. Los datos mostraron que la
espera mediana para un cambio de dependencia del equipo del servicio
compartido era de once días, mucho más de lo que cualquiera de los dos
equipos había asumido al preguntarlo de manera informal, y la causa raíz
resultó ser un proceso de solicitud poco claro y no documentado en lugar
de cualquier escasez de capacidad. Publicar un proceso de solicitud claro y
sencillo y un objetivo comprometido de tiempo de respuesta para el
servicio compartido bajó la espera mediana a menos de dos días en un
trimestre, sin necesitar personal adicional.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de medir directamente la comunicación y la colaboración es
detectar causas raíz que otras dimensiones atribuyen mal: un problema de
calidad que parece un vacío de pruebas pero en realidad es una ruptura de
comunicación desperdicia esfuerzo cuando un equipo intenta arreglarlo
añadiendo más pruebas en lugar de arreglar el fallo de coordinación
subyacente. El ejemplo de factor de autobús de arriba muestra la versión
más cruda de este retorno: una organización que descubre y arregla de
forma proactiva un riesgo severo de concentración de conocimiento evita el
coste catastrófico de descubrirlo durante una crisis real, cuando la única
persona que entendía un sistema crítico genuinamente no está disponible.

El coste total de propiedad es sobre todo esfuerzo de instrumentación,
combinar datos de control de versiones, guardia y seguimiento de
incidencias de formas que no son automáticas de fábrica, más la disciplina
periódica de revisar explícitamente la concentración de conocimiento y la
fricción de dependencias. Ese coste es modesto comparado con el coste de
una crisis real de factor de autobús o un fallo de coordinación entre
equipos crónico y sin abordar.

## Antipatrones y errores comunes

- **Saltarse esta dimensión porque es difícil de instrumentar
  automáticamente:** deja causas raíz mal atribuidas a otras dimensiones
  más fáciles de medir.
- **Tratar un organigrama como una imagen precisa de los patrones de
  comunicación reales:** frecuentemente equivocado, y el vacío es
  precisamente donde viven los cuellos de botella ocultos.
- **Ignorar el factor de autobús hasta que una crisis fuerza el
  descubrimiento:** el modo de fallo más dañino contra el que advierte
  este tema.
- **Asumir que la existencia de documentación equivale a su utilidad:** el
  contenido obsoleto o imposible de encontrar aporta poco valor real de
  comunicación.
- **Medir la fricción entre equipos pero no actuar sobre una causa raíz
  clara y arreglable una vez encontrada:** desperdicia la inversión
  diagnóstica.
- **Tratar una incorporación lenta y variable como puramente un asunto de
  recursos humanos en lugar de una señal de colaboración de ingeniería:**
  pasa por alto un indicador indirecto genuinamente útil y medible.

## Modelo de madurez

- **Nivel 1, Iniciar:** La comunicación y la colaboración no se miden en
  absoluto; el factor de autobús y la fricción entre equipos se descubren
  solo a través de una crisis.
- **Nivel 2, Desarrollar:** Existe cierta conciencia informal de la
  concentración de conocimiento, pero no hay medición consistente ni
  investigación proactiva.
- **Nivel 3, Estandarizar:** El factor de autobús y la fricción de
  dependencias entre equipos se miden de forma consistente para sistemas
  críticos y servicios compartidos en toda la organización.
- **Nivel 4, Gestionar:** El mapeo de red de comunicación revela
  periódicamente cuellos de botella ocultos y bolsillos aislados, y el
  tiempo de incorporación se rastrea como indicador indirecto directo de
  la salud del entendimiento compartido.
- **Nivel 5, Orquestar:** La organización reduce de forma proactiva el
  riesgo de concentración de conocimiento y la fricción entre equipos antes
  de que causen incidencias, y puede señalar intervenciones concretas,
  difusión deliberada de conocimiento, procesos de dependencia
  clarificados, que mejoraron de forma medible esta dimensión.

## Ideas para el debate

1. ¿Cuál es, con honestidad, nuestro factor de autobús para nuestro sistema individual más crítico?
2. ¿Qué dependencia entre equipos causó más fricción en el último trimestre, y la medimos?
3. ¿Encontraría un nuevo miembro del equipo nuestra documentación, o solo descubriría que técnicamente existe en algún lugar?
4. ¿Coincide nuestra red de comunicación informal con nuestro organigrama?
5. ¿Qué problema de calidad o satisfacción podría tener en realidad una causa raíz de colaboración que no hemos investigado?

## Conclusiones clave

- Los fallos de comunicación y colaboración a menudo **se disfrazan de
  otros problemas**; una causa raíz mal atribuida a la dimensión
  equivocada desperdicia esfuerzo.
- Rastrea la **concentración de conocimiento (factor de autobús)**
  directamente usando datos de control de versiones y de guardia, en lugar
  de esperar a que una crisis la revele.
- Mide explícitamente la **fricción de dependencias entre equipos**; suele
  ser invisible para los equipos implicados hasta que se mide.
- Usa el **tiempo de incorporación hasta la contribución productiva** como
  indicador indirecto directo y práctico de qué tan bien fluye el
  entendimiento compartido.
- Mapea periódicamente las **redes de comunicación reales**, ya que a
  menudo difieren sustancialmente del organigrama formal.

## Referencias y lecturas adicionales

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, de Matthew Skelton y Manuel Pais (modos de interacción
  de equipos y diseño de dependencias entre equipos).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco y Timothy
  Lister (estructuras de comunicación informal y su efecto en la
  productividad).
- Conway, Melvin E., "How Do Committees Invent?" (1968): el origen de la
  ley de Conway, sobre la relación entre la estructura de comunicación y la
  estructura del sistema.
