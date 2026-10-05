# 8.4 Modelo de madurez para programas de métricas de ingeniería

## Visión general y motivación

Cada tema de las partes 1 a 7 de este libro termina con su propio
[modelo de madurez](https://en.wikipedia.org/wiki/Capability_Maturity_Model)
de cinco niveles, acotado a la familia de métricas específica de ese
tema. Este tema hace algo distinto: da un paso atrás y pregunta
cómo se ve la madurez para el *programa* de métricas en su conjunto, la
capacidad organizacional que produce, gobierna, y actúa sobre todas esas
métricas individuales juntas. Una organización puede estar en el nivel 4
de madurez de una métrica DORA individual mientras todavía está en el
nivel 1 de madurez del programa en general, si, por ejemplo, tiene una
instrumentación excelente pero ninguna gobernanza (tema 1.4), o
métricas individuales excelentes pero un lanzamiento impulsado por el
miedo (tema 8.3) que ha corrompido los datos subyacentes sin importar
lo bien que se diseñara cada métrica.

El modelo de este tema se construye en torno a cinco dimensiones que
atraviesan cada familia de métricas individual que cubre este libro:
gobernanza y propiedad (tema 1.4), calidad de instrumentación
(tema 1.5), equilibrio entre resultado y producción (tema 1.3,
tema 7.4), confianza cultural (tema 8.3), y mejora continua (la
disciplina de retiro y revisión que estableció el tema 1.1 desde el
mismo principio de este libro). La madurez general del programa de una
organización es realistamente el mínimo, no el promedio, entre estas
cinco dimensiones, ya que una debilidad seria en cualquiera de ellas,
particularmente la confianza cultural, puede socavar el valor de la
fortaleza en todas las demás, exactamente como argumentó directamente el
tema 8.3.

Para los equipos grandes, este modelo consolidado le da al liderazgo un
único instrumento honesto para la autoevaluación organizacional,
distinto y complementario a las comprobaciones de madurez tema por
tema que proporciona este libro a lo largo de todo el texto. Las
organizaciones empresariales que comparan la madurez de métricas entre
unidades de negocio, y las organizaciones gubernamentales que reportan la
madurez del programa a órganos de supervisión, ambas se benefician de
esta única evaluación transversal en lugar de necesitar sintetizar
cuarenta y cinco lecturas de madurez a nivel de tema separadas en una
imagen general coherente por sí mismas.

## Principios clave

- **La madurez del programa es el mínimo entre sus dimensiones, no el
  promedio.** Una debilidad seria en la confianza cultural socava la
  fortaleza en todas las demás partes.
- **Las cinco dimensiones transversales son gobernanza, instrumentación,
  equilibrio de resultado, confianza cultural, y mejora continua.** Cada
  dimensión reúne hilos de muchos temas individuales.
- **Este modelo complementa, no reemplaza, los modelos de madurez a
  nivel de tema individuales.** Usa ambos juntos para una imagen
  completa.
- **La autoevaluación debería ser honesta y específica, no
  aspiracional.** Puntúa dónde realmente estás, usando evidencia
  concreta, no dónde pretendes estar.
- **El movimiento entre niveles requiere una inversión deliberada**, no
  solo el paso del tiempo; la madurez no se acumula automáticamente.

## Recomendaciones

### Evalúa cada una de las cinco dimensiones de manera independiente, usando evidencia concreta

Para la gobernanza, comprueba si cada métrica consecuente tiene un
responsable nombrado y una carta documentada (tema 1.4). Para la
instrumentación, comprueba si las métricas provienen de fuentes
automatizadas en lugar de autorreporte siempre que sea posible (tema
1.5). Para el equilibrio de resultado, calcula la proporción real de
métricas ponderadas por resultado frente a ponderadas por producción en
tus paneles principales (tema 7.4). Para la confianza cultural,
evalúa con honestidad si tu historial de lanzamiento alguna vez ha
incluido un uso punitivo y mal manejado de una métrica y cómo se abordó
(tema 8.3). Para la mejora continua, comprueba si tu organización
tiene un historial documentado de retirar métricas que dejaron de
ganarse su lugar (tema 1.1). Puntúa cada dimensión de manera
independiente antes de combinarlas.

### Toma el mínimo entre las dimensiones como tu puntuación general honesta

Resiste la tentación de promediar tus cinco puntuaciones de dimensión en
un único compuesto más favorecedor. Un programa con una instrumentación
excelente (nivel 4) pero una confianza cultural débil (nivel 1) no es, en
ningún sentido significativo, un programa de nivel 2 o 3; la dimensión
débil socava activamente el valor de las fuertes, ya que los datos poco
confiables corrompidos por la manipulación impulsada por el miedo no se
rescatan por haberse recopilado con una instrumentación excelente. Reporta
el mínimo con honestidad, aunque produzca una imagen general menos
favorecedora que la que produciría un promedio.

### Usa este modelo junto a, no en lugar de, los modelos a nivel de tema

Este modelo consolidado responde "qué tan maduro es nuestro programa en
general"; los modelos individuales a nivel de tema a lo largo de las
partes 2 a 8 responden "qué tan madura es nuestra práctica para esta
métrica específica". Usa ambos juntos: el modelo consolidado para
priorizar qué dimensión transversal necesita más inversión, y los
modelos a nivel de tema para identificar qué familias de métricas
específicas necesitan más atención dentro de esa dimensión.

### Revisita la evaluación con una cadencia fija, no meramente cuando lo provoca una crisis

Siguiendo la disciplina de gobernanza consistente de este libro (tema
1.4), reevalúa la madurez del programa con una cadencia regular, lo anual
es común, en lugar de solo después de que una crisis (un incidente de
manipulación descubierto, un reporte público que daña la credibilidad)
fuerce la pregunta. Un programa que solo examina su propia madurez de
manera reactiva pierde la oportunidad de detectar y abordar una dimensión
que se debilita antes de que produzca un incidente real y costoso.

### Trata una puntuación baja con honestidad como un punto de partida para la inversión, no como una calificación reprobatoria

Siguiendo el planteamiento diagnóstico, no evaluativo, que estableció el
tema 1.1 para todo este libro, usa una puntuación de madurez baja, en
cualquier dimensión, como el punto de partida para un plan de inversión
deliberado (la hoja de ruta de adopción del tema 8.5 es el siguiente
paso directo), no como un veredicto del que sentirse mal. La mayoría de
las organizaciones, evaluadas con honestidad, encontrarán debilidades
reales en algún lugar de este modelo; la respuesta productiva es la
inversión dirigida, no la actitud defensiva sobre la puntuación.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Promediar las cinco puntuaciones de dimensión | Produce un único número simple y más favorecedor | Oculta una debilidad crítica en una dimensión que socava el resto |
| Tomar el mínimo entre dimensiones | Honesto, accionable, identifica correctamente la restricción real | Puede sentirse desalentador si una dimensión se queda significativamente atrás de las demás |
| Usar solo los modelos a nivel de tema | Orientación detallada y específica de la métrica | Pierde la vista transversal de la salud general del programa |
| Usar solo este modelo consolidado | Simple, de alto nivel | Pierde el detalle específico y accionable que proporcionan los modelos a nivel de tema |

La tensión central es **simplicidad frente a honestidad**, haciendo eco
de la precaución del tema 5.5 contra un único número falsamente
preciso. Una puntuación promediada es más simple y cómoda de reportar,
pero oculta activamente la restricción real sobre la confiabilidad y el
valor general de tu programa. Resuelve la tensión a favor de la
honestidad: reporta el mínimo, y usa tanto este modelo consolidado como
los modelos individuales a nivel de tema juntos para una imagen
completa, precisa, y accionable.

## Preguntas para debatir con tu equipo

1. **Evaluadas con honestidad e independencia, ¿qué nivel puntúa
   realmente cada una de nuestras cinco dimensiones, gobernanza,
   instrumentación, equilibrio de resultado, confianza cultural, y
   mejora continua?** Repasa cada dimensión explícitamente, usando
   evidencia concreta en lugar de impresión, antes de combinarlas en una
   evaluación general.

2. **¿Cuál es nuestra dimensión más débil, y eso coincide con nuestra
   intuición sobre la salud general de nuestro programa, o revela algo
   que no habíamos nombrado directamente antes?** Una puntuación baja en
   confianza cultural específicamente, por ejemplo, podría socavar la
   confianza en datos que de otro modo parecen técnicamente excelentes.

3. **¿Hemos estado promediando nuestras fortalezas y debilidades en una
   imagen general más favorecedora, en lugar de reportar con honestidad
   nuestra dimensión más débil como la restricción real?** Sé honesto
   sobre cómo ha hablado previamente tu organización sobre su propia
   madurez de métricas.

4. **¿Cuándo reevaluamos formalmente por última vez nuestra madurez de
   programa general, y fue provocada por una crisis o por una cadencia
   deliberada y regular?** Si solo fue provocada por crisis, debate cómo
   sería una cadencia de evaluación regular en adelante.

5. **¿Cómo sería, concretamente, una inversión dirigida en nuestra
   dimensión más débil para el próximo trimestre?** Muévete directamente
   de la evaluación a la acción, conectando el diagnóstico de este
   tema con la hoja de ruta de adopción del tema 8.5.

6. **¿Cómo se compararía nuestra autoevaluación con una revisión externa
   y honesta de alguien fuera de nuestra organización?** Esta pregunta
   pone a prueba si tu evaluación interna podría estar sujeta a algo del
   mismo sesgo optimista frente al que ha advertido este libro a lo largo
   de todo el texto, vale la pena comprobarlo periódicamente con una
   perspectiva genuinamente externa.

## Enfoque sectorial

**Startup.** La evaluación formal de cinco dimensiones probablemente es
innecesaria a una escala muy pequeña, donde la conciencia informal
normalmente cubre la mayor parte de lo que revelaría este modelo. El
hábito que vale la pena adoptar temprano es simplemente ser honesto
sobre la confianza cultural específicamente, ya que la cultura de
métricas temprana de una empresa joven establece una base que se vuelve
mucho más difícil de cambiar una vez que la organización ha crecido
significativamente.

**Pequeña empresa.** Un repaso simple, honesto, e informal de las cinco
dimensiones una vez al año, incluso sin una puntuación formal, captura la
mayor parte del valor de este tema sin necesitar un proceso de
evaluación estructurado a esta escala.

**Empresa.** Este modelo consolidado es particularmente valioso para
comparar la madurez de métricas entre muchas unidades de negocio de
manera justa, ya que una comparación tema por tema entre docenas
de equipos sería inmanejable. Úsalo para priorizar la inversión en toda
la organización hacia cualquier dimensión que muestre la debilidad más
extendida entre unidades.

**Gobierno.** Una autoevaluación de madurez documentada y honesta, usando
este modelo consolidado, es un artefacto genuinamente útil para
demostrar el rigor del programa a un órgano de supervisión, siempre que
la evaluación se realice con honestidad en lugar de de manera
aspiracional. Considera una revisión externa periódica de la propia
autoevaluación, particularmente para la dimensión de confianza cultural,
que es la más difícil de evaluar con precisión desde una perspectiva
puramente interna.

## Ejemplos

**Empresa.** La autoevaluación inicial de una empresa de tecnología
logística puntuó su dimensión de instrumentación en nivel 4 (obtención de
datos automatizada y exhaustiva de flujos y sistemas) pero su dimensión
de confianza cultural en nivel 1, tras un incidente de mal uso de
métricas sin abordar de dos años antes que nunca se había reconocido ni
reparado directamente (haciendo eco directamente del ejemplo
gubernamental del tema 8.3). El instinto inicial del liderazgo fue
promediar estas en una imagen general respetable de nivel 2 o 3; una
aplicación más honesta de la puntuación basada en el mínimo de este
tema identificó correctamente la confianza cultural como la
restricción real sobre el valor de todo el programa, ya que incluso una
instrumentación excelente estaba produciendo datos que los ingenieros,
conscientes del incidente pasado, todavía no confiaban plenamente ni
reportaban con honestidad. La inversión dirigida específicamente en la
reparación de la confianza cultural, siguiendo directamente la
orientación del tema 8.3, se priorizó sobre una mayor inversión en
instrumentación como resultado directo de esta evaluación honesta y
basada en el mínimo.

**Gobierno.** Una agencia nacional de estadísticas que realizaba su
primera autoevaluación de madurez formal, usando este modelo consolidado
como parte de una revisión de gobernanza de tecnología más amplia,
encontró que su dimensión de gobernanza puntuaba bien (propiedad clara,
cartas documentadas) pero su dimensión de equilibrio de resultado
puntuaba mal, con la gran mayoría de las métricas rastreadas siendo
basadas en producción y actividad a pesar de que el argumento de la parte
7 a favor de la ponderación por resultado se había entendido bien
intelectualmente dentro del liderazgo técnico de la agencia. Este
hallazgo honesto y específico, en lugar de una sensación general vaga de
que "deberíamos medir más los resultados", le dio al plan de inversión
posterior de la agencia (tema 8.5) un punto de partida concreto y
basado en evidencia, y el reporte de seguimiento a la junta de
supervisión de la agencia citó específicamente esta evaluación de madurez
como la base para una estrategia de inversión en métricas redirigida.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una autoevaluación de madurez honesta y basada en el
mínimo es identificar correctamente la restricción real sobre el valor
de un programa de métricas, en lugar de seguir invirtiendo en una
dimensión ya fuerte mientras una débil sigue socavando la confiabilidad
de todo el programa, exactamente el patrón que ilustran ambos ejemplos
anteriores. Este efecto de dirección es el valor principal del modelo:
dirige la inversión de mejora limitada hacia donde realmente moverá la
madurez del programa en general, en lugar de hacia donde resulta ser más
fácil o familiar invertir.

El coste total de propiedad es el propio esfuerzo de evaluación, modesto
y periódico, sopesado contra el riesgo de seguir invirtiendo en una
dimensión ya fuerte mientras una débil sin abordar, particularmente la
confianza cultural, sigue corrompiendo silenciosamente el valor de todo
lo demás que ha construido el programa.

## Antipatrones y errores comunes

- **Promediar las puntuaciones de dimensión en un compuesto más
  favorecedor:** oculta la restricción real sobre el valor general del
  programa.
- **Evaluar solo de manera aspiracional, basándose en la política
  declarada en lugar de la práctica real:** produce una imagen inexacta
  y excesivamente optimista.
- **Usar este modelo consolidado como reemplazo de, en lugar de
  complemento a, los modelos a nivel de tema:** pierde el detalle
  específico y accionable que proporcionan esos modelos individuales.
- **Solo reevaluar después de que una crisis fuerza la pregunta:** pierde
  la oportunidad de detectar y abordar proactivamente una dimensión que
  se debilita.
- **Tratar una puntuación baja como una calificación reprobatoria en
  lugar de un punto de partida de inversión:** invita a la actitud
  defensiva en lugar de la respuesta productiva y diagnóstica que
  recomienda este libro a lo largo de todo el texto.
- **Nunca buscar una perspectiva externa honesta sobre la
  autoevaluación:** arriesga que el mismo sesgo optimista frente al que
  advierte este libro a lo largo de todo el texto afecte a la propia
  evaluación.

## Modelo de madurez

- **Nivel 1, Iniciar:** No existe ninguna evaluación transversal formal;
  las familias de métricas individuales pueden evaluarse de manera
  independiente, pero la salud general del programa no se examina.
- **Nivel 2, Desarrollar:** Existe cierta conciencia informal de las
  fortalezas y debilidades del programa en general, pero no se ha
  realizado ninguna evaluación estructurada de cinco dimensiones.
- **Nivel 3, Estandarizar:** Se realiza una evaluación estructurada,
  honesta, y basada en el mínimo de cinco dimensiones, usando evidencia
  concreta, en toda la organización.
- **Nivel 4, Gestionar:** La evaluación se repite con una cadencia
  regular, y sus hallazgos informan directa y consistentemente las
  prioridades de inversión dirigida.
- **Nivel 5, Orquestar:** La organización tiene una práctica demostrada y
  sostenida de autoevaluación honesta, incluida la revisión externa
  periódica, y puede señalar decisiones de inversión específicas que
  impulsaron directamente los hallazgos de la evaluación.

## Ideas para el debate

1. ¿Cuál es nuestra puntuación honesta y basada en evidencia en cada una de las cinco dimensiones ahora mismo?
2. ¿Qué dimensión es nuestra restricción real, y eso coincide con nuestra intuición?
3. ¿Alguna vez hemos promediado nuestras puntuaciones en una imagen más favorecedora de la que mostraría el mínimo?
4. ¿Cuándo reevaluamos formalmente por última vez, y fue proactivo o impulsado por una crisis?
5. ¿Qué revelaría probablemente una revisión externa honesta de nuestra autoevaluación?

## Conclusiones clave

- La madurez del programa abarca cinco dimensiones transversales:
  **gobernanza, instrumentación, equilibrio de resultado, confianza
  cultural, y mejora continua**.
- La madurez general es el **mínimo entre dimensiones, no el promedio**;
  una debilidad en la confianza cultural socava la fortaleza en todas
  las demás partes.
- Usa este modelo consolidado **junto a, no en lugar de**, los modelos de
  madurez individuales a nivel de tema a lo largo de este libro.
- **Reevalúa con una cadencia regular**, en lugar de esperar hasta que
  una crisis fuerce la pregunta.
- Trata una puntuación baja como un **punto de partida de inversión
  honesto**, no como una calificación reprobatoria, siguiendo el
  planteamiento diagnóstico de este libro a lo largo de todo el texto.

## Referencias y lecturas adicionales

- *Capability Maturity Model Integration (CMMI)*, Software Engineering
  Institute (la metodología general de modelo de madurez de la que se
  inspira estructuralmente el enfoque de este tema).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la base de investigación para los
  modelos de madurez individuales a nivel de tema que reúne este
  modelo consolidado).
- *Measuring and Managing Performance in Organizations*, de Robert D.
  Austin (evaluación organizacional de la salud y disfunción del
  programa de métricas).
- *The Fifth Discipline: The Art and Practice of the Learning
  Organization*, de Peter M. Senge (autoevaluación organizacional a
  nivel de sistemas y mejora continua).
