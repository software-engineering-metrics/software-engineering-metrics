# 6.2 Métricas de incidentes: detección, respuesta, y recuperación

## Visión general y motivación

Este tema mide lo que ocurre cuando el presupuesto de error del
tema 6.1 se gasta mediante un fallo real: un **incidente**, un evento
no planificado que degrada o interrumpe un servicio. Cuatro métricas
forman el vocabulario estándar para medir qué tan bien maneja esto una
organización: el **tiempo medio de detección (MTTD)**, cuánto tiempo pasa
antes de que la organización note que algo va mal; el **tiempo medio de
reconocimiento (MTTA)**, cuánto tiempo pasa antes de que alguien asuma la
responsabilidad de responder; el **tiempo medio de resolución** o
**recuperación (MTTR)**, cuánto tiempo pasa hasta que se restaura el
servicio, el mismo concepto que cubrió específicamente el tema 2.10
para los fallos causados por despliegues, ahora generalizado a cualquier
incidente sin importar la causa; y la **frecuencia de incidentes**,
simplemente con qué frecuencia ocurren incidentes en absoluto.

La preocupación central de este tema, haciendo eco del tratamiento
que da el tema 2.10 a la tasa de fallos de cambio, es que estos
números solo son tan confiables como la cultura organizacional en torno a
reportar y clasificar los incidentes con honestidad. Un equipo que teme la
culpa por un incidente tiene todo el incentivo para subreportar, retrasar
el reconocimiento para evitar estar "en el reloj", o clasificar un evento
grave como menor para proteger sus propias métricas. La práctica del
**[análisis retrospectivo sin culpa](https://en.wikipedia.org/wiki/Just_culture)**,
pionera en organizaciones como Etsy y formalizada en la literatura de SRE
de Google, existe específicamente para eliminar ese incentivo, y este
tema la trata como un requisito previo para datos de incidentes
confiables, no como una comodidad cultural opcional añadida encima de las
métricas.

Para los equipos grandes, las métricas de incidentes revelan si la
capacidad de detección y respuesta de una organización, las herramientas
de reversión del tema 2.10 entre otras inversiones, realmente funciona
bajo condiciones reales y variadas, no solo el escenario específico de
fallo causado por despliegue que cubrió ese tema. Las organizaciones
empresariales y gubernamentales que operan infraestructura crítica
dependen de estas métricas tanto internamente, para impulsar una mejora
operativa genuina, como externamente, para demostrar a los clientes,
reguladores, o al público que los incidentes se manejan con competencia y
mejoran con el tiempo.

## Principios clave

- **La cultura sin culpa es un requisito previo para datos de incidentes
  confiables**, no una adición opcional; el miedo a la culpa corrompe por
  igual el reporte, la velocidad de reconocimiento, y la clasificación de
  gravedad.
- **La detección, el reconocimiento, y la resolución son fases distintas
  con correcciones distintas.** Un tiempo de recuperación general lento
  puede ocultar problemas subyacentes muy distintos según qué fase
  realmente sea lenta.
- **La frecuencia de incidentes y el MTTR son una señal emparejada**,
  similar a la tasa de fallos de cambio y el tiempo de recuperación de
  DORA (tema 2.10): ninguna por sí sola cuenta la historia completa.
- **La clasificación de gravedad necesita el mismo rigor que la
  clasificación de defectos escapados** (tema 5.1): criterios
  consistentes y documentados, no juicio improvisado.
- **El valor de un análisis retrospectivo está en el aprendizaje
  sistémico, no en producir un número.** La métrica es un subproducto de
  la buena práctica, no su objetivo.

## Recomendaciones

### Descompón el tiempo de respuesta a incidentes en sus fases distintas

Mide y reporta el tiempo de detección (desde el inicio real del fallo
hasta que alguien lo nota), el tiempo de reconocimiento (desde la
notificación hasta que alguien asume la responsabilidad), y el tiempo de
resolución (desde la responsabilidad hasta la recuperación genuina) por
separado, en lugar de solo un único total mezclado. Cada fase apunta a
una corrección distinta: una detección lenta apunta a una brecha de
monitorización y alertas, un reconocimiento lento apunta a un problema de
proceso de guardia o escalado, y una resolución lenta apunta a una brecha
de herramientas, guías de operación, o capacidad diagnóstica (el tema
2.10 cubre esto específicamente para los fallos causados por despliegue).

### Construye y protege un proceso de análisis retrospectivo genuinamente sin culpa

Un **análisis retrospectivo sin culpa** investiga qué ocurrió y por qué el
sistema permitió que ocurriera, evitando explícitamente atribuir la culpa
a un individuo por un error que cualquier persona razonable en las mismas
circunstancias, con la misma información, podría plausiblemente haber
cometido. Protege esta disciplina activamente: el liderazgo modelando
respuestas no punitivas a los incidentes, una política escrita explícita,
y el hábito de preguntar "qué de nuestro sistema permitió esto" en lugar
de "quién hizo esto" son todas inversiones necesarias y continuas, no una
declaración de política de una sola vez.

### Clasifica la gravedad con criterios consistentes, documentados, y auditados

Aplica la misma disciplina que recomienda el tema 5.1 para los
defectos escapados a la clasificación de gravedad de incidentes: una
escala fija y documentada basada en el impacto real en el cliente o el
negocio, aplicada de manera consistente entre equipos, auditada
periódicamente para detectar la deriva. Una clasificación inconsistente,
algunos equipos generosos, algunos estrictos, hace que los datos de
incidentes de toda la organización sean tan poco confiables para la
comparación como lo serían datos de defectos clasificados de manera
inconsistente.

### Rastrea la frecuencia de incidentes y el MTTR juntos, nunca de forma aislada

Un MTTR que mejora junto a una frecuencia de incidentes en aumento podría
indicar un equipo que se está volviendo mejor en la extinción de
incendios mientras la fiabilidad subyacente del sistema en realidad se
degrada; una frecuencia de incidentes en descenso junto a un MTTR que
empeora podría indicar fallos más raros pero más graves y difíciles de
diagnosticar que reemplazan a fallos menores frecuentes. Revisa ambas
juntas, reflejando exactamente la disciplina de emparejamiento de
velocidad y estabilidad de las métricas DORA de la parte 2, para obtener
una imagen combinada y honesta.

### Extrae y rastrea elementos de acción sistémicos de los análisis retrospectivos, no solo métricas

El valor real del proceso de análisis retrospectivo son los elementos de
acción específicos y sistémicos que produce: una alerta faltante añadida,
una guía de operación mejorada, un punto único de fallo eliminado.
Rastrea estos elementos de acción hasta su finalización con la misma
disciplina que la lista acumulada de deuda técnica del tema 4.5, ya
que un análisis retrospectivo que produce percepción pero ningún
seguimiento desperdicia el aprendizaje organizacional que el proceso
pretende capturar.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Métrica de tiempo de respuesta a incidentes única y mezclada | Simple de reportar | Oculta qué fase específica, detección, reconocimiento, resolución, es el problema real |
| Métricas de incidentes descompuestas por fase | Diagnóstica, apunta directamente a la corrección correcta | Requiere una instrumentación más cuidadosa de cada transición de fase |
| Revisión de incidentes orientada a la culpa | Se siente responsable, satisface un deseo de asignar responsabilidad | Corrompe la honestidad del reporte futuro y rara vez corrige la causa sistémica real |
| Práctica de análisis retrospectivo sin culpa | Produce datos honestos y correcciones sistémicas genuinas | Requiere una inversión cultural sostenida y disciplina de liderazgo para mantenerla |

La tensión central es **el atractivo de la responsabilidad individual
frente a la necesidad práctica de un reporte honesto**. Culpar a un
individuo después de un incidente puede sentirse satisfactorio y puede
parecer liderazgo decisivo, pero corrompe de manera fiable los datos de
cada incidente futuro, porque la gente subreporta, retrasa el
reconocimiento, o clasifica mal la gravedad una vez que teme una
consecuencia personal. Resuelve la tensión a favor de la práctica sin
culpa de manera deliberada y consistente, entendiendo que la
responsabilidad genuina proviene de corregir el sistema que permitió un
fallo, no de castigar al individuo que resultó estar presente cuando
ocurrió.

## Preguntas para debatir con tu equipo

1. **¿Descomponemos el tiempo de respuesta a incidentes en fases de
   detección, reconocimiento, y resolución, o solo rastreamos un único
   número mezclado?** Si solo existe un número mezclado, elige un
   incidente significativo reciente e intenta reconstruir el desglose por
   fases retroactivamente para ver qué habría revelado.

2. **¿Nuestro equipo realmente creería que nuestro proceso de análisis
   retrospectivo es sin culpa, o el miedo a la consecuencia todavía moldea
   cómo se reportan y discuten los incidentes?** Pregunta esto directa y
   honestamente; una política declarada de "sin culpa" que en realidad no
   se vive no produce datos confiables.

3. **¿Dos equipos distintos clasificarían la gravedad del mismo incidente
   de la misma manera?** Elige un incidente pasado real y ambiguo y haz
   que representantes de distintos equipos lo clasifiquen de forma
   independiente, luego compara los resultados.

4. **¿Revisamos la frecuencia de incidentes y el MTTR juntos, o uno recibe
   más atención que el otro?** Comprueba tu práctica de reporte y
   revisiones reales en busca de este emparejamiento, reflejando la misma
   disciplina que recomienda el tema 2.10 para las métricas de
   estabilidad de DORA.

5. **¿Qué porcentaje de los elementos de acción de nuestros análisis
   retrospectivos de los últimos seis meses realmente se han completado?**
   Si actualmente no rastreas esto, esa brecha vale la pena nombrarla; un
   proceso de análisis retrospectivo con una tasa baja de finalización de
   elementos de acción está produciendo percepción sin seguimiento.

6. **¿El miedo a la culpa alguna vez ha hecho que alguien retrase el
   reporte o el reconocimiento de un incidente?** Esta es una pregunta
   incómoda pero importante; una respuesta honesta de "sí, y esto es lo
   que ocurrió" es mucho más valiosa para la salud de tu proceso de
   incidentes que un "no" reflejo.

## Enfoque sectorial

**Startup.** La respuesta a incidentes a menudo es informal por necesidad
con un equipo pequeño, y la descomposición formal por fases puede ser
innecesaria al principio. El hábito que vale la pena adoptar temprano son
las normas de discusión sin culpa desde el primer incidente, ya que los
hábitos culturales establecidos temprano son mucho más fáciles de
sostener que de reajustar una vez que se ha arraigado un patrón propenso
a la culpa.

**Pequeña empresa.** Un registro de incidentes simple y compartido,
incluso informal, con una clasificación de gravedad básica y una breve
retrospectiva sin culpa para cualquier cosa significativa, captura la
mayor parte del valor de este tema sin necesitar herramientas
sofisticadas ni una plataforma dedicada de gestión de incidentes.

**Empresa.** Tanto la clasificación de gravedad consistente como la
cultura sin culpa genuina y sostenida son más difíciles de mantener a
escala, y ambas son esenciales para datos de incidentes confiables y
comparables en docenas de equipos. Invierte en criterios de clasificación
documentados, auditoría periódica, y un modelado activo de liderazgo de
respuesta sin culpa, ya que la deriva cultural hacia la culpa tiende a
infiltrarse gradualmente sin una contrapresión deliberada y continua.

**Gobierno.** Los incidentes que afectan a servicios públicos o
infraestructura crítica a menudo enfrentan escrutinio externo, atención
mediática, o investigación formal, lo que crea una fuerte presión hacia
la búsqueda de culpables que puede socavar directamente la práctica
interna sin culpa si no se gestiona activamente. Mantén una disciplina
interna clara y sin culpa para el aprendizaje sistémico genuino, separada
de cualquier proceso de rendición de cuentas externo que pueda seguir a un
incidente grave, y comunica esa distinción con claridad al personal.

## Ejemplos

**Empresa.** La cultura de ingeniería de una empresa de pagos había
tratado durante años, de manera informal, los incidentes como algo que
minimizar reconociendo rápido para evitar parecer responsable, lo que
generaba tiempos de detección y reconocimiento consistentemente deficientes
que el liderazgo inicialmente atribuyó a herramientas de monitorización
inadecuadas. Un cambio cultural hacia análisis retrospectivos
genuinamente sin culpa, incluyendo que el liderazgo elogiara pública y
específicamente el reconocimiento rápido y honesto de incidentes en lugar
de elogiar solo la resolución rápida, produjo una mejora mesurable tanto
en el tiempo de detección como en el de reconocimiento en dos trimestres,
revelando que el cuello de botella original había sido cultural, miedo a
la culpa, en lugar de técnico, herramientas inadecuadas, como se había
asumido inicialmente.

**Gobierno.** El centro de operaciones de una agencia de tránsito público
había clasificado históricamente casi todas las interrupciones de
servicio como "menores" en su registro interno de incidentes, un patrón
que un nuevo director de seguridad encontró sospechoso dadas las quejas
informales persistentes del personal de campo sobre problemas graves
recurrentes. Una investigación reveló que la clasificación de "menor"
evitaba un proceso de reporte formal engorroso requerido para gravedades
más altas, creando un incentivo no intencionado para subclasificar. La
agencia simplificó sus requisitos de reporte formal para todas las
gravedades y protegió explícitamente al personal de la culpa por reportar
la gravedad con honestidad, y los datos de incidentes posteriores
mostraron una tasa más precisa, y sustancialmente más alta, de
interrupciones genuinamente significativas, finalmente dándole al
liderazgo una imagen honesta frente a la cual priorizar la inversión en
infraestructura.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de las métricas de incidentes genuinamente sin culpa, bien
clasificadas, y descompuestas por fase es datos honestos que realmente
impulsan una mejora sistémica, en lugar de una imagen reconfortante pero
falsa producida por el subreporte o la clasificación errónea impulsados
por el miedo. El ejemplo de la empresa de pagos anterior lo muestra de
manera concreta: una corrección cultural, no una inversión en
herramientas, resolvió lo que el liderazgo había diagnosticado
erróneamente como un problema técnico de detección.

El coste total de propiedad es principalmente inversión cultural y de
proceso: el compromiso sostenido del liderazgo con la práctica sin culpa,
los criterios de clasificación de gravedad documentados y auditados, y la
disciplina de rastrear los elementos de acción del análisis retrospectivo
hasta su finalización. Esa inversión cuesta menos que la alternativa, un
programa de métricas de incidentes que produce datos equivocados con
confianza porque el miedo ha corrompido cada entrada de él.

## Antipatrones y errores comunes

- **Revisión de incidentes orientada a la culpa:** corrompe la honestidad
  del reporte, la velocidad de reconocimiento, y la clasificación de
  gravedad para cada incidente futuro.
- **Rastrear solo un número de tiempo de respuesta mezclado:** oculta qué
  fase específica, detección, reconocimiento, resolución, es realmente el
  problema.
- **Clasificación de gravedad inconsistente entre equipos:** hace que los
  datos de incidentes de toda la organización no sean confiables para la
  comparación.
- **Revisar la frecuencia de incidentes y el MTTR de forma aislada:** pasa
  por alto la imagen combinada y honesta que proporciona la señal
  emparejada.
- **Un proceso de análisis retrospectivo que produce percepción pero
  ningún elemento de acción completado:** desperdicia el aprendizaje
  organizacional que el proceso pretende capturar.
- **Una política declarada de "sin culpa" que en realidad no vive el
  liderazgo:** produce la misma corrupción de datos impulsada por el
  miedo que una cultura abiertamente orientada a la culpa.

## Modelo de madurez

- **Nivel 1, Iniciar:** La respuesta a incidentes es informal, el reporte
  es inconsistente, y una cultura propensa a la culpa desalienta
  activamente el reporte honesto.
- **Nivel 2, Desarrollar:** Existe cierto rastreo de incidentes, pero la
  clasificación de gravedad es inconsistente y la práctica sin culpa se
  declara pero no se vive de manera consistente.
- **Nivel 3, Estandarizar:** Las métricas de incidentes descompuestas por
  fase con una clasificación de gravedad consistente y documentada se
  rastrean en toda la organización, con una práctica de análisis
  retrospectivo genuinamente sin culpa.
- **Nivel 4, Gestionar:** La frecuencia de incidentes y el MTTR se
  revisan juntos, los elementos de acción del análisis retrospectivo se
  rastrean hasta su finalización, y la clasificación se audita
  periódicamente para comprobar su consistencia.
- **Nivel 5, Orquestar:** La organización tiene un historial demostrado y
  sostenido de práctica sin culpa que produce datos honestos y
  correcciones sistémicas genuinas, y las métricas de incidentes informan
  directa y confiablemente las decisiones de inversión en fiabilidad.

## Ideas para el debate

1. ¿Nuestro proceso de análisis retrospectivo sobreviviría a una prueba honesta de si es genuinamente sin culpa?
2. ¿Cuál es el desglose por fases, detección, reconocimiento, resolución, de nuestro incidente reciente más lento?
3. ¿Dos equipos clasificarían la gravedad de nuestro último incidente significativo de la misma manera?
4. ¿Qué porcentaje de los elementos de acción de nuestros análisis retrospectivos recientes realmente se han completado?
5. ¿El miedo a la culpa alguna vez ha moldeado cómo se reportó o discutió un incidente en nuestro equipo?

## Conclusiones clave

- **La cultura de análisis retrospectivo sin culpa es un requisito
  previo** para datos de incidentes confiables; el miedo a la culpa
  corrompe por igual el reporte, la velocidad de reconocimiento, y la
  clasificación.
- Descompón el tiempo de respuesta en fases de **detección,
  reconocimiento, y resolución**, cada una apuntando a una corrección
  distinta.
- Clasifica la gravedad con **criterios consistentes, documentados, y
  auditados**, reflejando la disciplina de defectos escapados del
  tema 5.1.
- Revisa **la frecuencia de incidentes y el MTTR juntos**, nunca de forma
  aislada, la misma disciplina de emparejamiento que las métricas de
  estabilidad de DORA.
- Rastrea los **elementos de acción del análisis retrospectivo hasta su
  finalización**; la métrica es un subproducto de la buena práctica, no
  su objetivo.

## Referencias y lecturas adicionales

- *Site Reliability Engineering: How Google Runs Production Systems*, de
  Betsy Beyer, Chris Jones, Jennifer Petoff, y Niall Richard Murphy, eds.
  (la práctica de análisis retrospectivo sin culpa y las métricas de
  incidentes).
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, y Stephen Thorne, eds. (orientación
  práctica sobre la respuesta a incidentes y el análisis retrospectivo).
- *The Field Guide to Understanding Human Error*, de Sidney Dekker (el
  caso fundacional para la investigación de fallos sistémica y sin
  culpa).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy
  Engineering Blog (2012): una articulación temprana e influyente de la
  práctica sin culpa en las operaciones de software.
