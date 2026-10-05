# 7.4 La telemetría de resultados como la nueva estrella polar

## Visión general y motivación

Este tema cierra la parte 7, y en un sentido real cierra el argumento
que ha ido construyendo todo este libro desde el tema 1.3, con una
única afirmación directa: a medida que la IA generativa abarata la
producción bruta, la **[telemetría](https://en.wikipedia.org/wiki/Telemetry)
de resultados**, la medición continua e instrumentada de resultados reales
en lugar de actividad o producción, deja de ser una buena práctica entre
varias y se convierte en el principio organizador en torno al que tiene
que construirse un programa de métricas. Esta no es una idea nueva
introducida por primera vez aquí. Es la idea que introdujo el tema 1.3
en la parte inicial de este libro, presentada ahora como la respuesta
necesaria, en lugar de meramente preferible, a un cambio tecnológico que
ha hecho que toda alternativa sea más peligrosa de lo que solía ser.

La lógica es directa. Antes de la IA generativa, el volumen de producción
era un sustituto imperfecto pero no del todo inútil del esfuerzo y,
vagamente, del valor; un equipo que entregaba más funcionalidades había,
como mínimo, hecho más trabajo, incluso si ese trabajo no siempre era el
trabajo correcto. La IA generativa rompe incluso esa conexión débil: el
volumen de producción ya no indica de manera confiable el esfuerzo, ya que
una herramienta puede generarlo en segundos, y ciertamente no indica el
valor, ya que el tema 7.3 mostró que la producción inflada puede
coexistir con una calidad en degradación. Las métricas que sobreviven a
este cambio intactas son precisamente aquellas hacia las que este libro ha
enfatizado construir desde sus temas iniciales: la tasa de defectos
escapados (tema 5.1), la adopción de funcionalidades (tema 5.2),
los resultados de clientes y negocio (tema 5.3), la fiabilidad (parte
6), y el bienestar del desarrollador (parte 3). Ninguna de estas depende
de cómo se produjo el código subyacente; todas miden lo que realmente
ocurrió como resultado.

Para los equipos grandes, el argumento de este tema tiene
consecuencias directas y prácticas para cómo debería construirse y
reconstruirse un programa de métricas de aquí en adelante. Las
organizaciones empresariales que rediseñan sus paneles de ingeniería a la
luz de la adopción de IA deberían ponderar la inversión específicamente
hacia la infraestructura de telemetría de resultados que describe este
tema; las organizaciones gubernamentales, que evalúan tanto las
herramientas de IA como los programas de tecnología más amplios en los
que están integradas, deberían someter a ambos al mismo estándar de
telemetría de resultados que recomienda este tema como línea base
para cualquier evaluación creíble y preparada para el futuro.

## Principios clave

- **La telemetría de resultados se vuelve necesaria, no meramente
  preferible, una vez que la producción se abarata.** Este es el
  principio fundacional del tema 1.3, ahora urgente en lugar de
  aspiracional.
- **Las métricas que sobreviven a este cambio son aquellas hacia las que
  ha construido este libro a lo largo de todo el texto**: defectos
  escapados, adopción, resultados de negocio, fiabilidad, y bienestar.
- **Un programa de métricas construido principalmente en torno a métricas
  de producción ahora es un pasivo, no solo una elección subóptima.** Las
  métricas de producción se pueden inflar barata y rápidamente a escala.
- **La telemetría de resultados requiere una inversión real**,
  instrumentación, paciencia para una señal más lenta, y disciplina
  organizacional para resistir la atracción hacia métricas de producción
  más rápidas, más baratas, pero ahora poco confiables.
- **Este principio sobrevive a cualquier herramienta o proveedor de IA
  específico.** Es una respuesta duradera a un cambio duradero en lo que
  significa la producción, no un ajuste temporal a una tendencia pasajera.

## Recomendaciones

### Audita tu proporción de inversión en métricas: telemetría de resultados frente a rastreo de producción

Calcula aproximadamente qué proporción de tu infraestructura de métricas
actual, esfuerzo de instrumentación, espacio en el panel, tiempo de
reunión de revisión, se destina a las métricas de resultado (parte 5,
parte 6, bienestar del desarrollador de la parte 3) frente a las métricas
de producción y actividad (recuento de despliegues, volumen de commits,
rendimiento de solicitudes de incorporación de cambios). Si domina el
rastreo de producción, esa proporción en sí misma ahora es un pasivo dado
el argumento de este tema, y rebalancearla es el cambio individual de
mayor apalancamiento que recomienda este tema.

### Invierte en la infraestructura de telemetría de resultados deliberadamente, como una inversión de ingeniería de primer nivel

La medición de resultados, el rastreo de adopción de funcionalidades, la
correlación de resultados de negocio (tema 5.3), la instrumentación de
fiabilidad (parte 6), requiere una inversión de ingeniería real y
continua que muchas organizaciones históricamente han subinvertido en
relación con las métricas de producción comparativamente baratas y
fáciles que dominan muchos paneles hoy en día. Trata esta inversión de
infraestructura con la misma seriedad que aplica este libro a cualquier
otra capacidad de ingeniería significativa, no como una preocupación
secundaria detrás de la propia inversión en herramientas de IA.

### Acepta y comunica que la telemetría de resultados es más lenta, y construye paciencia para eso en las expectativas de tu organización

Las métricas de resultado son, casi por su naturaleza, más rezagadas y
ruidosas que las métricas de producción (la distinción entre indicadores
adelantados y rezagados del tema 1.3, la precaución estadística del
tema 1.6). Una organización acostumbrada a la retroalimentación
rápida y satisfactoria de ver subir un número de producción necesita
construir una paciencia genuina para la señal más lenta y honesta que
proporciona la telemetría de resultados, y el liderazgo necesita comunicar
y modelar activamente esa paciencia en lugar de recurrir de manera
refleja a la alternativa más rápida pero ahora poco confiable bajo presión
para mostrar resultados rápidos.

### Usa este cambio como la ocasión para retirar métricas de producción genuinamente obsoletas, no solo para añadir métricas de resultado junto a ellas

Siguiendo la disciplina del tema 1.1 de retirar métricas que ya no se
ganan su lugar, usa este momento como una ocasión deliberada para
eliminar las métricas de producción y actividad que este cambio ha
devaluado específicamente, en lugar de simplemente añadir métricas de
resultado encima de un panel existente sin cambios. Un panel que mantiene
cada métrica de producción antigua mientras añade nuevas métricas de
resultado se hincha en lugar de mejorar genuinamente.

### Trata la inversión en telemetría de resultados como duradera, independiente de cualquier herramienta o relación con proveedor de IA específica

Construye la infraestructura de telemetría de resultados como una
capacidad organizacional permanente, no como una reacción específica a
cualquier herramienta de IA que tu organización resulte estar usando este
año. Este principio, y la infraestructura que requiere, sobrevivirá a
cualquier relación específica con un proveedor o generación de
herramientas, y construirlo como una capacidad duradera protege tu
programa de métricas tanto contra el próximo cambio tecnológico como
contra el actual.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Panel dominado por métricas de producción | Retroalimentación rápida y barata; familiar para la mayoría de las organizaciones | Ahora activamente poco confiable dado el efecto de la IA generativa sobre el coste de producción |
| Panel dominado por telemetría de resultados | Resiliente a este cambio; mide lo que realmente importa | Señal más lenta y ruidosa; requiere una inversión de instrumentación real |
| Añadir métricas de resultado junto a métricas de producción sin cambios | Incremental, menos disruptivo | Produce hinchazón del panel en lugar de una mejora genuina |
| Rebalanceo completo y deliberado hacia la telemetría de resultados | Aborda el cambio directa y completamente | Requiere el cambio organizacional y de inversión más significativo |

La tensión central es, en un sentido real, la misma con la que abrió este
libro en el tema 1.3, ahora afilada hasta su forma más urgente:
**retroalimentación rápida y familiar frente a señal más lenta y
honesta**. Las métricas de producción siempre han sido más fáciles y
rápidas de producir; el argumento de este tema es que la IA
generativa ha movido esa compensación de meramente subóptima a
activamente peligrosa. Resuelve la tensión de la manera en que ha
recomendado este libro desde su tema inicial: pondera decisivamente
hacia los resultados, acepta la retroalimentación más lenta que viene con
la medición genuina de valor, y trata la incomodidad de esa
retroalimentación más lenta como el coste honesto de medir algo real en
lugar de algo meramente conveniente.

## Preguntas para debatir con tu equipo

1. **¿Qué proporción de nuestra infraestructura de métricas y atención del
   panel actuales se destina a las métricas de resultado frente a las
   métricas de producción y actividad?** Calcula esta proporción con
   honestidad; la mayoría de las organizaciones, evaluadas por primera
   vez, la encuentran más ponderada hacia la producción de lo que habrían
   adivinado.

2. **¿Qué inversión específica de infraestructura de telemetría de
   resultados hemos estado aplazando a favor de un rastreo de producción
   más rápido y barato?** Nombra un ejemplo concreto, la instrumentación
   de adopción de funcionalidades, las herramientas de correlación de
   resultados de negocio, y debate qué se necesitaría para realmente
   construirlo.

3. **¿Nuestra organización ha construido una paciencia genuina para la
   retroalimentación más lenta de la telemetría de resultados, o la
   presión por resultados rápidos sigue arrastrándonos de vuelta hacia
   métricas de producción más rápidas pero ahora poco confiables?** Sé
   honesto sobre este patrón en tus propios reportes y reuniones de
   revisión recientes.

4. **¿Qué métrica de producción o actividad de nuestro panel actual es
   una candidata genuina para el retiro, ahora que el argumento de este
   tema se aplica específicamente a ella?** Identifica al menos una, y
   debate qué necesitaría reemplazarla en lugar de simplemente dejar una
   brecha.

5. **Si nuestro proveedor de herramientas de IA o la generación actual de
   asistentes de codificación de IA cambiara dramáticamente el próximo
   año, ¿nuestro programa de métricas todavía se sostendría?** Esto pone a
   prueba si tu inversión en telemetría de resultados es genuinamente
   duradera, construida como una capacidad permanente, o meramente una
   reacción específica a tu situación actual de herramientas.

6. **¿Cómo sería que nuestra organización se comprometiera por completo
   con el argumento de este tema, rebalanceando decisivamente nuestra
   inversión en métricas hacia los resultados en lugar de
   incrementalmente?** Esbózalo de manera concreta en lugar de dejarlo
   abstracto; la brecha entre el estado actual y esta visión es la hoja de
   ruta real de tu organización para responder a este cambio.

## Enfoque sectorial

**Startup.** Construir la telemetría de resultados temprano, antes de que
las métricas de producción hayan tenido la oportunidad de convertirse en
un hábito organizacional profundamente arraigado, es genuinamente más
fácil que reajustarla después. Una empresa joven que adopta la asistencia
de codificación de IA desde el principio tiene una oportunidad real de
construir su programa de métricas primero orientado a resultados en lugar
de necesitar deshacer una cultura existente dominada por métricas de
producción.

**Pequeña empresa.** Concentra la inversión en telemetría de resultados
en la única métrica de resultado que más directamente refleje la
supervivencia y el crecimiento (tema 5.3), en lugar de intentar una
instrumentación exhaustiva en cada categoría de resultado que cubre este
libro. Una inversión modesta y enfocada en telemetría de resultados
supera a un panel de métricas de producción exhaustivo que el argumento
de este tema ahora ha devaluado específicamente.

**Empresa.** El rebalanceo que recomienda este tema es un cambio
organizacional genuino y significativo a esta escala, que probablemente
requiere patrocinio ejecutivo y un plan de inversión de varios
trimestres. Trátalo con la misma seriedad que cualquier otra inversión de
infraestructura importante que cubre este libro, y usa los ejemplos
específicos y concretos de los temas 7.1 y 7.3, la inflación de
métricas y la dilución de calidad que un panel rebalanceado habría
detectado antes, para construir el caso interno de la inversión.

**Gobierno.** Los programas de tecnología del gobierno evaluados
principalmente en métricas de entrega y producción (funcionalidades
entregadas, dentro del plazo) son cada vez más vulnerables exactamente al
escepticismo que describió el tema 5.3, y el argumento de este
tema agudiza aún más esa vulnerabilidad a medida que se extiende la
adopción de herramientas de IA por la industria más amplia de la que
reclutan y frente a la que se comparan las agencias gubernamentales.
Construye la telemetría de resultados como la base principal para el
reporte público y la justificación presupuestaria, posicionando a tu
organización por delante de, en lugar de por detrás de, este cambio.

## Ejemplos

**Empresa.** El liderazgo de ingeniería de una empresa de software,
motivado directamente por el casi-incidencia de inflación de métricas
descrito en el ejemplo de tecnología financiera del tema 7.1, realizó
una auditoría completa de su proporción de inversión en métricas y
encontró que casi el 70% de su espacio de panel y esfuerzo de
instrumentación se dedicaba a métricas de producción y actividad, con
solo una inversión modesta e inconsistente en telemetría de resultados. A
lo largo del año siguiente, la empresa rebalanceó deliberadamente esta
proporción, retirando varias métricas de producción que la auditoría del
tema 7.1 había señalado como las más expuestas e invirtiendo la
capacidad liberada en la instrumentación de adopción de funcionalidades y
resultados de negocio (temas 5.2, 5.3). El panel resultante,
presentado en la reunión de la junta del año siguiente, fue reconocido
explícitamente por el mismo miembro de la junta anteriormente escéptico
como una base significativamente más confiable para evaluar la inversión
en ingeniería que la versión anterior dominada por la producción que
reemplazó.

**Gobierno.** Una agencia nacional de servicios digitales, construyendo
un nuevo programa de métricas de ingeniería desde cero específicamente
porque su panel anterior, dominado por métricas de producción, había
atraído un escepticismo legislativo sostenido, adoptó explícitamente el
principio de este tema como su decisión de diseño fundacional: la
telemetría de resultados, el tiempo de espera ciudadano, la tasa de
finalización de servicio, la tasa de defectos escapados, sería la base
principal para todo el reporte público, con las métricas de producción y
entrega retenidas solo como herramientas de diagnóstico internas, nunca
como la evidencia titular presentada externamente. Este diseño primero
orientado a resultados, construido deliberadamente a la luz del cambio de
IA generativa que describe esta parte, dio al reporte de la agencia una
durabilidad y credibilidad ante su comité de supervisión que su programa
predecesor, construido en torno a las suposiciones de métricas de
producción de una generación anterior, nunca había logrado.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de comprometerse decisivamente con la telemetría de resultados
es un programa de métricas que sigue siendo confiable y creíble a través
del cambio tecnológico actual y de lo que venga después, en lugar de uno
que requiera otra revisión significativa la próxima vez que la producción
se abarate mediante algún futuro cambio tecnológico. El ejemplo de la
empresa de software anterior lo muestra de manera concreta: el panel
rebalanceado reparó directamente la credibilidad que la versión anterior,
dominada por la producción, había puesto en riesgo genuino.

El coste total de propiedad es la inversión en infraestructura de
telemetría de resultados que recomienda este tema, un trabajo
genuinamente significativo de varios trimestres para una organización
grande, sopesado contra el riesgo duradero y a largo plazo de un programa
de métricas que se vuelve progresivamente menos confiable a medida que la
producción sigue abaratándose. Este no es un coste que este libro te pida
aceptar a la ligera; es la consecuencia directa y necesaria de tomarse en
serio el argumento fundacional del tema 1.3 tan en serio como te pide
esta parte final del libro.

## Antipatrones y errores comunes

- **Tratar este cambio como si requiriera solo un ajuste incremental en
  lugar de un rebalanceo genuino:** subestima la escala del cambio que ha
  introducido la IA generativa en lo que significan las métricas de
  producción.
- **Añadir métricas de resultado junto a un conjunto de métricas de
  producción sin cambios y todavía dominante:** produce hinchazón del
  panel en lugar del rebalanceo genuino que argumenta este tema.
- **Construir la inversión en telemetría de resultados como una reacción
  a una herramienta de IA actual específica en lugar de como una
  capacidad duradera:** deja a la organización expuesta al próximo cambio
  tecnológico de la misma manera.
- **No construir paciencia organizacional para la retroalimentación más
  lenta de la telemetría de resultados:** arriesga volver a las métricas
  de producción más rápidas, pero ahora poco confiables, bajo presión por
  resultados rápidos.
- **Retirar métricas de producción sin un reemplazo genuino de
  telemetría de resultados:** deja una brecha de medición en lugar de
  una mejora genuina.
- **Presentar este cambio a las partes interesadas como meramente una
  respuesta a las herramientas de IA en lugar de como el cumplimiento del
  principio fundacional de este libro:** subestima la durabilidad y
  generalidad del argumento.

## Modelo de madurez

- **Nivel 1, Iniciar:** El panel sigue dominado por métricas de
  producción, sin ninguna respuesta deliberada al cambio que describe
  esta parte.
- **Nivel 2, Desarrollar:** Se han añadido algunas métricas de resultado,
  pero la proporción de inversión general sigue ponderada hacia la
  producción y ninguna métrica se ha retirado deliberadamente.
- **Nivel 3, Estandarizar:** Se ha realizado una auditoría deliberada y un
  rebalanceo hacia la telemetría de resultados, con métricas de
  producción genuinamente obsoletas retiradas, en toda la organización.
- **Nivel 4, Gestionar:** La infraestructura de telemetría de resultados
  se trata como una inversión de ingeniería continua de primer nivel, y
  la paciencia organizacional para su retroalimentación más lenta se
  cultiva y protege activamente.
- **Nivel 5, Orquestar:** El programa de métricas de la organización está
  liderado por la telemetría de resultados como un principio de diseño
  duradero y permanente, demostrado resiliente a través del cambio
  tecnológico actual y construido explícitamente para seguir siendo
  resiliente a través de lo que venga después.

## Ideas para el debate

1. ¿Cuál es nuestra proporción real actual de inversión en métricas de resultado frente a métricas de producción?
2. ¿Qué única métrica de producción deberíamos retirar este trimestre, y qué métrica de resultado debería reemplazarla?
3. ¿Dónde nos ha arrastrado recientemente la impaciencia organizacional de vuelta hacia métricas de producción más rápidas pero menos confiables?
4. ¿Nuestra inversión en telemetría de resultados es duradera, o está vinculada específicamente a nuestra situación actual de herramientas de IA?
5. ¿Qué se necesitaría para comprometernos por completo con el argumento de este tema, en lugar de ajustar incrementalmente?

## Conclusiones clave

- La telemetría de resultados se vuelve **necesaria, no meramente
  preferible**, una vez que la IA generativa abarata la producción; este
  es el principio fundacional del tema 1.3, ahora urgente.
- Las métricas que **sobreviven a este cambio** son aquellas hacia las
  que construye este libro a lo largo de todo el texto: defectos
  escapados, adopción, resultados de negocio, fiabilidad, y bienestar.
- **Audita y rebalancea tu proporción de inversión en métricas**
  deliberadamente, retirando métricas de producción genuinamente
  obsoletas en lugar de solo añadir métricas de resultado junto a ellas.
- Construye una **paciencia organizacional para la retroalimentación más
  lenta de la telemetría de resultados**, y resiste la atracción de
  vuelta hacia métricas de producción más rápidas pero ahora poco
  confiables bajo presión.
- Construye esta inversión como una **capacidad duradera**, independiente
  de cualquier herramienta o proveedor de IA específico, protegiendo tu
  programa de métricas tanto contra futuros cambios tecnológicos como
  contra el actual.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (el fundamento de medición basado en
  resultados sobre el que se construye todo este libro, y este tema
  final de la parte 7).
- *Lean Analytics*, de Alistair Croll y Benjamin Yoskovitz (la distinción
  entre métricas accionables y de vanidad que el argumento de este
  tema extiende a la era de la IA).
- *The Innovator's Dilemma*, de Clayton M. Christensen (el patrón general
  de métricas y prácticas establecidas que se convierten en pasivos bajo
  un cambio tecnológico disruptivo).
- *Measure What Matters*, de John Doerr (el establecimiento de objetivos
  orientado a resultados como principio organizador para un programa de
  métricas, el modelo que argumenta este tema que ahora debería ser
  el estándar, no la excepción).
