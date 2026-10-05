# 6.4 Métricas de gestión de seguridad y vulnerabilidades

## Visión general y motivación

Este capítulo cierra la parte 6 extendiendo la misma disciplina de
fiabilidad que ha construido esta parte, fijación de objetivos,
emparejamiento con salvaguardas, reporte honesto de incidencias, a un
riesgo distinto pero estrechamente relacionado: no si un sistema fallo
por sí solo, sino si alguien hace que falle, o lo explota,
deliberadamente. Las métricas de **gestión de vulnerabilidades** miden
qué tan bien una organización encuentra y corrige debilidades de
seguridad antes de que se exploten: cuántas vulnerabilidades existen, qué
tan graves son, y de manera crítica, con qué rapidez se remedian una vez
descubiertas, ya que una vulnerabilidad conocida pero sin parchear es un
riesgo permanente y cuantificable que la organización ha elegido cargar,
ya sea deliberadamente o por negligencia.

La preocupación central de este capítulo refleja directamente el
tratamiento que da el capítulo 4.4 a los hallazgos de análisis estático:
un recuento bruto de vulnerabilidades es una métrica deficiente, que
confunde problemas triviales y críticos, y está expuesto exactamente a
los mismos riesgos de manipulación, reducción de definición, supresión, y
manipulación de umbral, que describe en general el capítulo 1.2. La
adición específica que requieren las métricas de seguridad es el tiempo
hasta la remediación rastreado frente a la gravedad, ya que una
vulnerabilidad crítica sin parchear durante meses representa un riesgo
fundamentalmente distinto al de la misma vulnerabilidad detectada y
corregida en un día, información que un simple recuento por sí solo no
puede transmitir.

Para los equipos grandes, las métricas de seguridad conllevan
consecuencias más allá del riesgo técnico inmediato: las organizaciones
empresariales enfrentan exposición contractual y reputacional por una
filtración, y las organizaciones gubernamentales enfrentan consecuencias
de seguridad nacional, legales, y de confianza pública que convierten a
las métricas de seguridad en un asunto de genuino interés público, no
meramente una preocupación de ingeniería interna. Este capítulo trata la
gestión de vulnerabilidades con el mismo rigor y la misma disciplina de
emparejamiento con salvaguardas que aplica este libro a lo largo de todo
el texto, porque las métricas de seguridad están expuestas a todo riesgo
de manipulación que describe este libro, con un riesgo correspondientemente
más alto cuando esa manipulación tiene éxito.

## Principios clave

- **El tiempo hasta la remediación por gravedad importa más que un
  recuento bruto de vulnerabilidades.** Un problema crítico sin parchear
  durante meses es un riesgo fundamentalmente distinto al del mismo
  problema detectado y corregido rápidamente.
- **Las métricas de seguridad están expuestas a los mismos riesgos de
  manipulación que los hallazgos de análisis estático** (capítulo 4.4),
  con un riesgo más alto cuando la manipulación tiene éxito.
- **La clasificación de gravedad necesita criterios externos y
  estandarizados** siempre que sea posible, no un juicio puramente interno
  que pueda derivar hacia la indulgencia.
- **Una vulnerabilidad divulgada y corregida rápidamente es una señal de
  un proceso saludable, no un fallo que ocultar.** Castigar la divulgación
  desalienta el reporte del que depende todo este sistema.
- **La deuda de seguridad es una categoría de deuda técnica** (capítulo
  4.5) y debería competir por capacidad de remediación priorizada sobre la
  misma base explícita y cuantificada.

## Recomendaciones

### Rastrea el tiempo hasta la remediación por gravedad como la métrica principal

Para cada vulnerabilidad descubierta, registra su gravedad (usando una
escala estandarizada como el
[Sistema de Puntuación de Vulnerabilidades Común](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS, cuando sea aplicable) y rastrea el tiempo desde el descubrimiento
hasta la remediación genuina, no hasta que se cierre un ticket o se
fusione una corrección pero todavía no se despliegue. Establece objetivos
explícitos de tiempo de remediación por gravedad, comúnmente medidos en
días para problemas críticos y semanas para los de menor gravedad, y
rastrea el cumplimiento frente a esos objetivos como la métrica principal
de salud de seguridad, en lugar de un recuento bruto y no ponderado de
vulnerabilidades.

### Usa una puntuación de gravedad estandarizada en lugar de un juicio puramente interno

Donde esté disponible un sistema de puntuación externo estandarizado como
el CVSS, úsalo como la base principal para la clasificación de gravedad en
lugar de depender enteramente de un juicio interno potencialmente
inconsistente. Esto refleja la disciplina de clasificación de defectos
escapados del capítulo 5.1 y la disciplina de clasificación de incidencias
del capítulo 6.2, aplicadas aquí específicamente a la seguridad, y resiste
el mismo riesgo de deriva indulgente que advierten esos capítulos, ya que
una puntuación anclada externamente es más difícil de redefinir
silenciosamente hacia abajo que una puramente interna.

### Construye una cultura de divulgación de vulnerabilidades y reporte interno genuinamente sin castigo

Aplica directamente a la seguridad el principio de análisis retrospectivo
sin culpa del capítulo 6.2: un ingeniero que descubre y reporta una
vulnerabilidad que introdujo, o un investigador que divulga
responsablemente una encontrada externamente, debería tratarse como
alguien que presta un servicio valioso, no como alguien que confiesa un
fallo. Castigar la divulgación, internamente o de investigadores
externos, desalienta de manera fiable exactamente el reporte del que
depende todo el sistema de gestión de vulnerabilidades, empujando el
riesgo real a la clandestinidad en lugar de hacia un proceso de
remediación gestionado.

### Trata la deuda de seguridad como una categoría dentro de tu lista acumulada de deuda técnica

Incorpora las vulnerabilidades de riesgo aceptado conocidas, aquellas
deliberadamente todavía no remediadas debido a prioridades en
competencia, a la misma lista acumulada de deuda técnica visible y
cuantificada descrita en el capítulo 4.5, con el mismo planteamiento de
coste de corrección frente a coste de mantenimiento. Esto evita que el
riesgo de seguridad desaparezca en un estado invisible y no documentado
de "lo sabemos" o compita injustamente contra el trabajo de
funcionalidades sin un caso explícito y cuantificado para su prioridad.

### Combina las métricas de vulnerabilidades con contexto de exposición y explotabilidad

No toda vulnerabilidad con la misma puntuación de gravedad nominal
conlleva el mismo riesgo real: una vulnerabilidad crítica en una
herramienta interna sin exposición de red externa es un riesgo distinto
al de la misma gravedad nominal en un servicio orientado a internet que
maneja datos de clientes. Cuando sea factible, pondera la priorización por
el contexto real de exposición y explotabilidad, no solo por la
puntuación de gravedad, de modo que la capacidad de remediación se
concentre primero en los elementos genuinamente de mayor riesgo.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Recuento bruto de vulnerabilidades | Simple de reportar | Confunde problemas triviales y críticos; se manipula fácilmente mediante supresión |
| Rastreo de tiempo hasta la remediación ponderado por gravedad | Refleja la exposición de riesgo real con el tiempo | Requiere una clasificación y rastreo disciplinados y consistentes |
| Juicio de gravedad puramente interno | Flexible, adaptado al contexto | Propenso a la deriva indulgente y la inconsistencia entre equipos |
| Puntuación externa estandarizada (p. ej., CVSS) más ponderación de contexto | Consistente, anclada externamente, resiste la manipulación | Requiere análisis de contexto adicional para una priorización genuinamente precisa |

La tensión central es **consistencia frente a contexto**. Un enfoque de
puntuación puramente estandarizado es consistente y resistente a la
manipulación pero puede pasar por alto un contexto genuino, la exposición
y la explotabilidad, que determina el riesgo real; un enfoque puramente
contextual y juzgado internamente captura los matices pero es propenso al
mismo riesgo de deriva indulgente que advierte este libro para cualquier
otra métrica dependiente de clasificación. Resuelve la tensión anclando
en la puntuación estandarizada como la línea base consistente, y luego
aplicando encima una ponderación de contexto documentada y auditable, en
lugar de cualquiera de los dos extremos por sí solo.

## Preguntas para debatir con tu equipo

1. **¿Rastreamos el tiempo hasta la remediación por gravedad, o solo un
   recuento bruto de vulnerabilidades?** Revisa tu métrica real actual y
   comprueba si distingue un problema crítico sin parchear durante meses
   de uno corregido en un día, ya que un recuento bruto trata estas
   situaciones de riesgo muy distinto de manera idéntica.

2. **¿Usamos un sistema de puntuación de gravedad externo estandarizado,
   o la clasificación depende de un juicio puramente interno y
   potencialmente inconsistente?** Si es puramente interno, debate qué
   cambiaría al adoptar un estándar como el CVSS en tu práctica de
   clasificación actual.

3. **¿Un ingeniero que introdujo y luego reportó una vulnerabilidad se
   sentiría seguro haciéndolo, o temería el castigo?** Esta es la versión
   directa y específica de seguridad de la pregunta de cultura sin culpa
   del capítulo 6.2, y una respuesta honesta aquí importa enormemente
   para si se puede confiar en absoluto en tus datos de vulnerabilidades.

4. **¿Tenemos una lista acumulada visible y cuantificada de
   vulnerabilidades conocidas de riesgo aceptado, o el estado de "lo
   sabemos" se vuelve silenciosamente invisible y sin abordar con el
   tiempo?** Comprueba si tu deuda de seguridad se rastrea con el mismo
   rigor que tu lista acumulada general de deuda técnica (capítulo 4.5).

5. **¿Nuestra priorización de remediación contabiliza la exposición y
   explotabilidad reales, o depende puramente de una puntuación de
   gravedad nominal sin importar el contexto?** Elige un ejemplo real
   donde dos vulnerabilidades con gravedad nominal similar conllevaban un
   riesgo real muy distinto, y debate si tu proceso actual las habría
   priorizado correctamente.

6. **¿La clasificación de gravedad de una vulnerabilidad alguna vez ha
   derivado hacia abajo con el tiempo sin una justificación clara?** Esto
   refleja el patrón de manipulación de definiciones que advierten tanto
   el capítulo 1.2 como el capítulo 6.2; audita una muestra de tus
   clasificaciones recientes para detectar este riesgo específico.

## Enfoque sectorial

**Startup.** Los procesos formales de gestión de vulnerabilidades a
menudo son innecesarios muy temprano, pero adoptar un escaneo automatizado
básico de dependencias y una norma de reporte interno simple y honesta
desde el principio cuesta poco y evita que la deuda de seguridad se
acumule invisiblemente antes de que el equipo tenga la capacidad de
abordarla de manera sistemática.

**Pequeña empresa.** La mayoría de las plataformas de desarrollo modernas
incluyen escaneo automatizado de vulnerabilidades gratuito o de bajo
coste para las dependencias; habilita esto temprano y rastrea el tiempo
hasta la remediación para cualquier cosa señalada como crítica, incluso
sin una función de seguridad dedicada ni herramientas sofisticadas.

**Empresa.** Tanto la puntuación de gravedad consistente y estandarizada
como la cultura de divulgación genuinamente sin castigo son esenciales y
más difíciles de mantener a escala, donde la inconsistencia entre docenas
de equipos y la deriva cultural hacia la búsqueda de culpables tras una incidencia grave son riesgos constantes. Invierte en una función dedicada
de gobernanza de seguridad para mantener la consistencia de clasificación
y proteger activamente la cultura de divulgación.

**Gobierno.** Las métricas de seguridad aquí a menudo se cruzan
directamente con la seguridad nacional, el cumplimiento regulatorio, y la
confianza pública, y una vulnerabilidad grave y mal manejada puede tener
consecuencias mucho más allá de una filtración típica del sector privado.
Mantén una clasificación de gravedad rigurosa y anclada externamente,
protege activamente la cultura de divulgación interna y externa, y trata
la deuda de seguridad con la transparencia y el rigor de priorización que
recomienda este capítulo, ya que una vulnerabilidad crítica no documentada
y silenciosamente aceptada en infraestructura pública es un riesgo
genuinamente grave y auditable.

## Ejemplos

**Empresa.** El equipo de seguridad de una empresa de software había
reportado durante años solo un recuento bruto de vulnerabilidades al
liderazgo, un número que había tenido una tendencia plana, dando una
falsa sensación de estabilidad. Un análisis revisado ponderado por
gravedad y de tiempo hasta la remediación reveló que, aunque el recuento
total era plano, las vulnerabilidades críticas estaban tardando un
promedio de más de noventa días en remediarse, muy por encima de
cualquier objetivo razonable, porque competían sin éxito contra el
trabajo de funcionalidades en cada ciclo de planificación sin capacidad
dedicada y protegida. Establecer un objetivo estricto de remediación de 7
días para las vulnerabilidades críticas, respaldado por capacidad de
remediación de deuda de seguridad protegida que reflejaba el modelo de
asignación de deuda técnica del capítulo 4.5, redujo el tiempo promedio de
remediación crítica a menos de cinco días en dos trimestres.

**Gobierno.** Una agencia nacional de infraestructura descubrió, tras una
auditoría de seguridad externa, que los ingenieros internos habían estado
evitando informalmente reportar vulnerabilidades que descubrían en su
propio código, temiendo que reflejara mal en sus evaluaciones de
rendimiento, un claro paralelo con el patrón de subreporte de incidencias
impulsado por la culpa del capítulo 6.2. La agencia instituyó una
política explícita y públicamente comunicada que protegía a los
reportadores internos de vulnerabilidades de cualquier consecuencia de
rendimiento, modelada directamente sobre la práctica de respuesta a incidencias sin culpa, y los reportes internos de vulnerabilidades
aumentaron sustancialmente en el año siguiente, un resultado que el
liderazgo de la agencia interpretó correctamente como evidencia de una
detección mejorada y un reporte honesto, no como evidencia de una calidad
de código en declive, evitando la conclusión natural pero equivocada de
que un número en aumento debía significar que las cosas habían empeorado.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una gestión de vulnerabilidades rigurosa, bien clasificada,
y honestamente reportada es el coste de filtración evitado, que para una incidencia de seguridad grave frecuentemente eclipsa muchas veces el coste
de la remediación proactiva, junto con el daño regulatorio, contractual, y
reputacional evitado. El ejemplo de la empresa de software anterior
muestra el mecanismo específico: la deuda de seguridad había estado
perdiendo silenciosamente la competencia de priorización frente al
trabajo de funcionalidades durante años, exactamente el patrón que
advierte el capítulo 4.5 para la deuda técnica en general, hasta que la
capacidad de remediación protegida lo corrigió directamente.

El coste total de propiedad incluye las herramientas de escaneo
automatizado, la capacidad de remediación protegida que recomienda
asignar este capítulo, y la inversión cultural sostenida en la práctica
de divulgación sin castigo. Ese coste es modesto comparado con el coste
de una vulnerabilidad grave y explotada con éxito que la remediación
proactiva y bien priorizada habría detectado y corregido mucho antes de
que pudiera explotarse.

## Antipatrones y errores comunes

- **Rastrear solo un recuento bruto de vulnerabilidades:** confunde
  problemas triviales y críticos y da una falsa sensación de estabilidad o
  crisis sin importar el riesgo real.
- **Clasificación de gravedad puramente interna y no estandarizada:**
  propensa a la deriva indulgente y la inconsistencia entre equipos.
- **Castigar la divulgación de vulnerabilidades, interna o externa:**
  empuja el riesgo real a la clandestinidad en lugar de hacia un proceso
  de remediación gestionado.
- **Deuda de seguridad sin una lista acumulada visible y cuantificada:**
  pierde la competencia de priorización frente al trabajo de
  funcionalidades por defecto.
- **Priorizar solo por la puntuación de gravedad nominal, ignorando el
  contexto de exposición y explotabilidad:** desvía la capacidad limitada
  de remediación.
- **Interpretar un recuento creciente de reportes de vulnerabilidades como
  evidencia de una calidad en declive sin comprobar si el propio reporte
  mejoró:** una instancia específica de la trampa de variables de
  confusión del capítulo 1.6.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las vulnerabilidades se rastrean, si acaso, como
  un recuento bruto sin ponderación por gravedad, sin rastreo de tiempo
  de remediación, y con una cultura de divulgación punitiva.
- **Nivel 2, Desarrollar:** Existe cierta clasificación de gravedad, pero
  los estándares son inconsistentes y el tiempo de remediación no se
  rastrea frente a objetivos explícitos.
- **Nivel 3, Estandarizar:** La puntuación de gravedad estandarizada y
  anclada externamente y los objetivos explícitos de tiempo de
  remediación por gravedad se aplican de manera consistente, con una
  cultura de divulgación genuinamente sin castigo.
- **Nivel 4, Gestionar:** La deuda de seguridad se rastrea en una lista
  acumulada visible y cuantificada con capacidad de remediación
  protegida; la priorización contabiliza el contexto de exposición y
  explotabilidad, no solo la gravedad.
- **Nivel 5, Orquestar:** La organización puede señalar reducciones
  específicas y mesurables en el tiempo de remediación crítica y puede
  demostrar una cultura de divulgación sostenida y confiable que produce
  datos de vulnerabilidades honestos y completos.

## Ideas para el debate

1. ¿Cuál es nuestro tiempo promedio actual hasta la remediación para las vulnerabilidades críticas, y cumple un objetivo explícito?
2. ¿Un ingeniero que introdujo una vulnerabilidad se sentiría seguro reportándola él mismo?
3. ¿Tenemos una lista acumulada visible y cuantificada de deuda de seguridad de riesgo aceptado conocido?
4. ¿Nuestra priorización de remediación contabiliza la exposición real, o solo la gravedad nominal?
5. ¿Una clasificación de gravedad alguna vez ha derivado hacia abajo con el tiempo sin una justificación clara?

## Conclusiones clave

- Rastrea el **tiempo hasta la remediación por gravedad**, no un recuento
  bruto de vulnerabilidades, como la métrica principal de salud de
  seguridad.
- Usa la **puntuación de gravedad externa estandarizada** (como el CVSS)
  como línea base consistente, resistente al riesgo de deriva indulgente
  que invita el juicio puramente interno.
- Construye una cultura de divulgación **genuinamente sin castigo**;
  castigar el reporte empuja el riesgo real a la clandestinidad.
- Trata la **deuda de seguridad como una categoría de deuda técnica**
  (capítulo 4.5), compitiendo de manera justa por la capacidad de
  remediación protegida.
- Pondera la priorización por la **exposición y explotabilidad reales**,
  no solo la puntuación de gravedad.

## Referencias y lecturas adicionales

- La especificación del Sistema de Puntuación de Vulnerabilidades Común
  (CVSS) de FIRST.org: el marco de puntuación de gravedad estandarizado
  referenciado a lo largo de este capítulo.
- Los recursos de la OWASP Foundation sobre la gestión de vulnerabilidades
  y la práctica del ciclo de vida de desarrollo de software seguro.
- *Site Reliability Engineering: How Google Runs Production Systems*, de
  Betsy Beyer, Chris Jones, Jennifer Petoff, y Niall Richard Murphy, eds.
  (los principios de cultura sin culpa que este capítulo aplica a la
  divulgación de seguridad).
- Publicación Especial 800-40 del NIST, *Guide to Enterprise Patch
  Management Planning*: orientación autorizada sobre la práctica de
  remediación de vulnerabilidades.
