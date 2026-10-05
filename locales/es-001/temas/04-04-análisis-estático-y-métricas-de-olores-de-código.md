# 4.4 Análisis estático y métricas de olores de código

## Visión general y motivación

Las herramientas de **[análisis estático](https://en.wikipedia.org/wiki/Static_program_analysis)**
escanean el código fuente sin ejecutarlo, señalando patrones conocidos por
correlacionarse con defectos, vulnerabilidades de seguridad, o problemas de
mantenibilidad: código inalcanzable, recursos sin cerrar, coerciones de
tipo sospechosas, lógica duplicada, y la categoría más amplia de **olores de
código** (*code smells*), patrones estructurales que no son necesariamente
errores pero que tienden a hacer el código más difícil de entender, probar,
o cambiar con seguridad. El análisis estático es la capa automatizada y
continua bajo las métricas más específicas de los otros capítulos de esta
parte, ejecutándose en cada commit y sacando a la luz problemas en el
momento en que se introducen en lugar de esperar a una auditoría periódica.

La preocupación central de este capítulo es la brecha entre lo que reportan
las herramientas de análisis estático y lo que realmente importa. Una
herramienta puede señalar miles de hallazgos en una base de código grande, y
el número de hallazgos por sí solo es una métrica deficiente, ya que
confunde preferencias de estilo triviales con riesgo genuino y grave, y se
puede reducir tanto mediante supresión como mediante correcciones reales. El
valor del análisis estático no proviene del recuento bruto de hallazgos
sino de lo bien que una organización prioriza por gravedad, previene el
retroceso, y resiste la tentación de tratar el juicio de la herramienta
como un sustituto de la revisión humana en lugar de un complemento a ella.

Para los equipos grandes, el análisis estático es la única forma práctica
de imponer una línea base de calidad de código e higiene de seguridad en
una base de código demasiado grande para que cualquier equipo la revise
manualmente por completo. Las organizaciones empresariales y
gubernamentales, que a menudo enfrentan requisitos de cumplimiento
normativo en torno a prácticas de codificación segura, dependen del
análisis estático como evidencia documentada y auditable de que se aplicó
de manera consistente un nivel base de escrutinio, no solo cuando un
revisor humano resultó notar un problema.

## Principios clave

- **El recuento bruto de hallazgos es una métrica deficiente por sí sola.**
  Confunde problemas triviales y graves, y se puede manipular mediante
  supresión en lugar de correcciones genuinas.
- **La priorización por gravedad importa más que el volumen.** Un número
  pequeño de hallazgos críticos merece más atención que un número grande de
  hallazgos triviales.
- **El análisis estático complementa la revisión humana; no la sustituye.**
  Las herramientas detectan patrones; no entienden la intención ni el
  contexto de negocio.
- **Una tendencia de "nuevos problemas introducidos" es más accionable que
  un recuento total de la lista acumulada.** Te dice si la práctica actual
  está mejorando o retrocediendo.
- **Los falsos positivos erosionan la confianza en la herramienta.** Una
  tasa de falsos positivos sin gestionar lleva a los equipos a ignorar los
  hallazgos en bloque, incluidos los reales.

## Recomendaciones

### Rastrea hallazgos ponderados por gravedad, no el recuento bruto

Configura tus herramientas de análisis estático para clasificar los
hallazgos por gravedad (crítico, alto, medio, bajo, o una escala
equivalente), y rastrea una tendencia ponderada por gravedad en lugar de un
recuento total plano. Una base de código con cero hallazgos críticos y
quinientas sugerencias de estilo de baja gravedad está en un estado muy
distinto al de una con cincuenta hallazgos críticos y ningún problema de
estilo en absoluto, y un recuento bruto trata a ambas como
aproximadamente equivalentes cuando no lo son.

### Impón la puerta sobre los hallazgos nuevos introducidos, no sobre toda la lista acumulada histórica

La mayoría de las bases de código establecidas llevan una lista acumulada
histórica de hallazgos que preceden a la práctica actual y sería
prohibitivamente costoso corregir todos a la vez. En lugar de bloquear todo
el trabajo hasta que se elimine toda la lista acumulada, impón la puerta en
la integración continua sobre si un cambio específico introduce nuevos
hallazgos por encima de un umbral de gravedad acordado, dejando que la
lista acumulada se reduzca gradualmente mediante el mantenimiento normal
mientras se previene una mayor acumulación. Esta distinción refleja la
recomendación del mínimo de cobertura del capítulo 4.2: proteger contra el
retroceso en lugar de exigir una corrección poco realista y de una sola
vez.

### Gestiona activamente la tasa de falsos positivos

Revisa periódicamente una muestra de hallazgos, particularmente cualquier
categoría con un volumen alto, y comprueba cuántos son falsos positivos
genuinos, casos en los que la herramienta señaló un patrón que en realidad
no es problemático en contexto. Ajusta la configuración de reglas para
suprimir específicamente las categorías de reglas genuinamente ruidosas y
de bajo valor, en lugar de dejar que los equipos desarrollen el hábito de
ignorar la salida de la herramienta en bloque porque gran parte de ella es
ruido. Una tasa de falsos positivos alta y sin gestionar es la forma más
rápida de destruir la credibilidad de un programa de análisis estático.

### Usa los hallazgos del análisis estático como una señal para la revisión, no como un veredicto automático

Incluso un hallazgo legítimo y no falso positivo no siempre justifica una
corrección automática y obligatoria; algunos patrones señalados son
aceptables dado un contexto específico que una herramienta no puede ver.
Construye un proceso ligero para que un humano revise y corrija, o exima
de forma explícita y visible, un hallazgo con una razón documentada, en
lugar de imponer ciegamente cada hallazgo como obligatorio o permitir una
supresión silenciosa y no documentada que erosiona el valor de la
herramienta con el tiempo.

### Combina el análisis estático con las otras métricas de calidad de código de esta parte

Los hallazgos del análisis estático, las puntuaciones de complejidad
(capítulo 4.1), y los datos de puntos calientes (capítulo 4.3) son
evidencia complementaria, no métricas en competencia. Un archivo con una
alta concentración de hallazgos de análisis estático sin resolver que
también es un punto caliente de cambios acumulados y complejidad es un
candidato particularmente fuerte para atención prioritaria, ya que
múltiples señales independientes convergen en la misma conclusión.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Recuento bruto de hallazgos como métrica | Simple de reportar | Confunde problemas triviales y graves; se manipula fácilmente mediante supresión |
| Tendencia ponderada por gravedad | Refleja el riesgo real con más precisión | Requiere mantenimiento continuo de la clasificación por gravedad |
| Puerta sobre toda la lista acumulada histórica | Maximiza la limpieza eventual del código | A menudo poco práctico para bases de código establecidas; puede paralizar todo el trabajo |
| Puerta solo sobre nuevos hallazgos | Práctico, previene el retroceso, deja que la lista acumulada se reduzca gradualmente | Los problemas heredados persisten más tiempo sin un plan de remediación deliberado |

La tensión central es **exhaustividad frente a viabilidad práctica**. Una
política de análisis estático que exige resolver toda la lista acumulada
histórica antes de que proceda cualquier trabajo nuevo es exhaustiva pero
normalmente poco práctica para cualquier base de código con historia real,
y los equipos bajo esa presión tienden a suprimir los hallazgos en bloque
en lugar de corregirlos genuinamente. Resuelve la tensión imponiendo la
puerta estrictamente sobre los nuevos hallazgos mientras se ejecuta un
esfuerzo de remediación separado y deliberadamente ritmado contra la lista
acumulada heredada, priorizado usando las técnicas de gravedad y
contraste cruzado que recomiendan este capítulo y el capítulo 4.3.

## Preguntas para debatir con tu equipo

1. **¿Rastreamos una tendencia ponderada por gravedad, o solo un recuento
   bruto total de hallazgos?** Revisa tu panel real y compruébalo; un
   recuento bruto es común por defecto en muchas herramientas y a menudo
   necesita una configuración deliberada para sacar a la luz la gravedad
   correctamente en su lugar.

2. **¿Cuál es nuestra lista acumulada heredada actual de hallazgos sin
   resolver, y tenemos un plan deliberado y ritmado para reducirla, o
   simplemente se acumula indefinidamente?** Una lista acumulada no
   abordada y que crece silenciosamente es común y vale la pena nombrarla
   con honestidad en lugar de dejarla sin examinar.

3. **¿Cuál es nuestra tasa estimada de falsos positivos para nuestras
   categorías de hallazgos de mayor volumen, y hemos ajustado la
   configuración de reglas en respuesta?** Si nunca has comprobado esto,
   toma una muestra de hallazgos de tu categoría más ruidosa y evalúa con
   honestidad cuántos son genuinamente accionables.

4. **¿Los ingenieros de nuestro equipo confían en los hallazgos del
   análisis estático, o han aprendido a ignorarlos porque gran parte de la
   salida es ruido?** Esta es una pregunta de autoevaluación directa y
   honesta que vale la pena hacer al equipo, ya que una herramienta que se
   ignora no proporciona ningún valor real sin importar su capacidad
   teórica.

5. **¿Cómo manejamos actualmente un hallazgo legítimo que un equipo cree
   que debería eximirse dado un contexto específico?** Comprueba si tu
   proceso hace de esto una decisión visible y documentada, o si ocurre
   mediante una supresión silenciosa y no documentada que erosiona la
   señal de la herramienta con el tiempo.

6. **¿Dónde convergen los hallazgos del análisis estático, las puntuaciones
   de complejidad, y los datos de puntos calientes en el mismo archivo o
   módulo?** Contrasta estas tres señales de forma explícita; la
   convergencia entre múltiples métricas independientes es una señal de
   priorización más fuerte que cualquiera de ellas por sí sola.

## Enfoque sectorial

**Startup.** Una herramienta de análisis estático ligera y gratuita
integrada en la integración continua desde el principio es un seguro
barato y detecta problemas genuinos temprano, antes de que una lista
acumulada heredada tenga alguna oportunidad de acumularse. Mantén el
conjunto de reglas centrado en categorías genuinamente de alto valor y
bajo ruido en lugar de habilitar todas las reglas disponibles de
inmediato.

**Pequeña empresa.** La mayoría de los ecosistemas de lenguajes modernos
incluyen herramientas de análisis estático gratuitas y capaces; habilitarlo
en la integración continua con un conjunto de reglas por defecto sensato
requiere poca inversión. Concéntrate en imponer la puerta sobre los nuevos
hallazgos en lugar de intentar resolver toda lista acumulada preexistente
de una vez.

**Empresa.** Gestionar deliberadamente la tasa de falsos positivos y la
priorización por gravedad se vuelve esencial a esta escala, ya que una
herramienta mal ajustada que genera ruido excesivo en docenas de equipos
será ignorada en toda la organización. Invierte en un responsable dedicado
para la propia configuración de las herramientas de análisis estático,
tratando el ajuste de reglas como una disciplina continua en lugar de una
tarea de configuración de una sola vez.

**Gobierno.** Los hallazgos del análisis estático, particularmente los
relacionados con seguridad, a menudo son directamente relevantes para los
requisitos de cumplimiento normativo y auditoría. Mantén un proceso
documentado y auditable de cómo se priorizan, corrigen, o eximen
formalmente los hallazgos con una justificación registrada, ya que esta
documentación en sí misma es frecuentemente lo que un auditor externo
querrá ver.

## Ejemplos

**Empresa.** El panel de análisis estático de una empresa de software
había acumulado más de cuarenta mil hallazgos sin resolver en toda su base
de código tras varios años sin priorización ponderada por gravedad, un
número tan grande que los ingenieros habían dejado en gran medida de mirar
el panel en absoluto. Un enfoque revisado clasificó los hallazgos por
gravedad, encontró que menos de doscientos eran genuinamente críticos, e
impuso la puerta de integración continua específicamente sobre nuevos
hallazgos críticos y de alta gravedad mientras dejaba que la lista
acumulada de baja gravedad se redujera gradualmente mediante el
mantenimiento normal del código. En seis meses, los hallazgos críticos
habían caído a un solo dígito, y, más importante aún, los datos de encuesta
de ingenieros mostraron una confianza renovada en la salida de la
herramienta ahora que sacaba a la luz una señal manejable y genuinamente
accionable en lugar de una lista acumulada abrumadora e ignorada.

**Gobierno.** La política de seguridad de la cadena de suministro de
software de una agencia de defensa exigía un escaneo de análisis estático
con cero hallazgos sin resolver antes de cualquier lanzamiento, una
política que, en la práctica, había llevado a los equipos de desarrollo a
suprimir grandes cantidades de hallazgos, incluidos algunos problemas de
seguridad genuinos, simplemente para cumplir con los plazos de lanzamiento
bajo una puerta de todo o nada inviable. Una política revisada exigía cero
hallazgos nuevos críticos o de alta gravedad introducidos por cualquier
lanzamiento dado, combinado con un plan y cronograma de remediación
documentado y rastreado para la lista acumulada heredada, revisado
trimestralmente por una junta de gobernanza de seguridad. Este enfoque
práctico y por fases tanto restauró el escrutinio de seguridad genuino
para el código nuevo como logró un progreso real y mesurable contra la
lista acumulada heredada a lo largo de dieciocho meses, a diferencia de la
política previa inviable que en su mayoría había producido supresión en
lugar de correcciones genuinas.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de un análisis estático bien gestionado es detectar defectos
reales y vulnerabilidades de seguridad antes de que lleguen a producción,
a un coste mucho menor del que requeriría el esfuerzo de revisión humana
equivalente para la misma cobertura. El ejemplo de la agencia de defensa
anterior muestra el coste de hacerlo mal: una política inviable de todo o
nada había en realidad reducido el escrutinio de seguridad genuino al
impulsar la supresión, lo opuesto a su intención.

El coste total de propiedad incluye la propia herramienta, a menudo
gratuita o de bajo coste para los ecosistemas de lenguajes comunes, y la
disciplina continua de priorización por gravedad, gestión de falsos
positivos, y planificación de remediación de la lista acumulada heredada.
Esa disciplina continua, más que la propia herramienta, es lo que determina
si un programa de análisis estático proporciona un valor genuino y
confiable o degenera en ruido ignorado.

## Antipatrones y errores comunes

- **Tratar el recuento bruto de hallazgos como la métrica:** confunde
  problemas triviales y graves y se manipula fácilmente mediante
  supresión.
- **Exigir que se resuelva toda la lista acumulada histórica antes de que
  proceda cualquier trabajo nuevo:** normalmente poco práctico e impulsa la
  supresión en lugar de correcciones genuinas.
- **Ignorar la tasa de falsos positivos:** un nivel de ruido sin gestionar
  lleva a los equipos a ignorar por completo la salida de la herramienta,
  incluidos los hallazgos reales.
- **Supresión silenciosa y no documentada de hallazgos legítimos:**
  erosiona la señal de la herramienta y no deja rastro de auditoría para
  fines de cumplimiento normativo.
- **Tratar un hallazgo de análisis estático como un veredicto automático
  sin revisión humana:** pasa por alto un contexto que una herramienta no
  puede ver.
- **No contrastar nunca los hallazgos con datos de complejidad y puntos
  calientes:** pasa por alto la señal de priorización más fuerte que
  proporciona la evidencia convergente.

## Modelo de madurez

- **Nivel 1, Iniciar:** El análisis estático no se ejecuta, o los
  hallazgos se acumulan sin gestión, sin priorización por gravedad ni
  seguimiento de tendencia.
- **Nivel 2, Desarrollar:** Algo de análisis estático se ejecuta en la
  integración continua, pero la priorización por gravedad es
  inconsistente y la tasa de falsos positivos no se gestiona.
- **Nivel 3, Estandarizar:** Los hallazgos están ponderados por gravedad y
  la integración continua impone la puerta sobre nuevos hallazgos críticos
  y de alta gravedad, en toda la organización.
- **Nivel 4, Gestionar:** La tasa de falsos positivos se ajusta
  activamente, la lista acumulada heredada tiene un plan de remediación
  documentado y ritmado, y las exenciones son visibles y están
  documentadas.
- **Nivel 5, Orquestar:** Los hallazgos del análisis estático, los datos
  de complejidad, y los datos de puntos calientes se contrastan
  rutinariamente para priorizar la inversión, y la organización puede
  señalar mejoras específicas y mesurables de defectos o seguridad
  rastreadas hasta el programa.

## Ideas para el debate

1. ¿Cuál es nuestra tendencia actual ponderada por gravedad, y está mejorando o empeorando?
2. ¿Qué tan grande es nuestra lista acumulada heredada de hallazgos, y tenemos un plan deliberado para reducirla?
3. ¿Cuál es nuestra tasa estimada de falsos positivos para nuestra categoría de hallazgos más ruidosa?
4. ¿Los ingenieros de nuestro equipo actualmente confían en la salida de nuestro análisis estático, o la ignoran?
5. ¿Dónde convergen los hallazgos del análisis estático con los datos de complejidad o puntos calientes en nuestra base de código?

## Conclusiones clave

- Rastrea una **tendencia ponderada por gravedad**, no un recuento bruto de
  hallazgos, que confunde problemas triviales y graves.
- Impón la puerta de integración continua sobre los **nuevos hallazgos
  introducidos**, no toda la lista acumulada histórica, para prevenir el
  retroceso sin exigir una corrección poco práctica y de una sola vez.
- Gestiona activamente la **tasa de falsos positivos**; el ruido sin
  gestionar destruye la confianza en la herramienta y lleva a que los
  hallazgos se ignoren en bloque.
- Trata los hallazgos como una **señal para la revisión humana**, con
  exenciones visibles y documentadas, no como un veredicto automático ni
  una supresión silenciosa.
- Contrasta el análisis estático con los **datos de complejidad y puntos
  calientes** (capítulos 4.1, 4.3) para obtener evidencia de priorización
  convergente y más fuerte.

## Referencias y lecturas adicionales

- *Static Program Analysis*, de Anders Møller y Michael I. Schwartzbach
  (los fundamentos teóricos y prácticos de las técnicas de análisis
  estático).
- La guía de OWASP sobre pruebas de seguridad de aplicaciones estáticas
  (SAST), parte de los recursos más amplios de la OWASP Foundation sobre
  prácticas de desarrollo de software seguro.
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler
  (el catálogo de olores de código del que se nutre gran parte de las
  herramientas de análisis estático).
- *Working Effectively with Legacy Code*, de Michael Feathers (gestión de
  una lista acumulada heredada de problemas de calidad en una base de
  código establecida).
