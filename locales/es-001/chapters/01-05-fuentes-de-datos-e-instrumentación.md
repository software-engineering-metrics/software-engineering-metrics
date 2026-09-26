# 1.5 Fuentes de datos e instrumentación

## Visión general y motivación

Una métrica es tan fiable como los datos que hay debajo de ella, y la
mayoría de los programas de métricas dedican mucho más esfuerzo a diseñar
tableros que a verificar la canalización que los alimenta. Esto está al
revés. Un gráfico bellamente diseñado construido sobre una instrumentación
inconsistente, autoinformada o rota en silencio es peor que ningún gráfico,
porque parece autorizado mientras está equivocado. Este capítulo trata del
fundamento poco vistoso que el resto de este libro asume: de dónde vienen
realmente los datos de ingeniería, cuándo confiar en la instrumentación
automatizada más que en el autoinforme, y los fallos de calidad de datos que
invalidan una métrica en silencio antes de que nadie lo note.

Los datos de ingeniería de software provienen de un puñado de tipos de
fuente, cada una con características de fiabilidad distintas. El control de
versiones y las canalizaciones de [integración y entrega
continuas](https://en.wikipedia.org/wiki/CI/CD) generan registros objetivos,
con marca de tiempo y difíciles de falsear de lo que realmente ocurrió. Los
rastreadores de incidencias y las herramientas de gestión de proyectos
generan registros que dependen de que las personas actualicen el estado de
forma correcta y puntual, algo que a menudo hacen de forma inconsistente.
Las encuestas generan datos autoinformados que resultan inestimables para
cosas que ningún sistema puede observar, como la satisfacción, pero están
sujetos al sesgo de memoria y a los efectos de deseabilidad social. Las
plataformas de observabilidad generan telemetría a nivel de sistema que es
objetiva pero solo cubre lo que se instrumentó. Saber de qué categoría
provienen los datos de una métrica concreta te dice cuánto confiar en ella y
qué modos de fallo vigilar.

A escala de empresa grande o del sector público, los problemas de calidad de
datos se agravan porque la distancia entre el origen de los datos y su uso
final en un tablero crece a través de múltiples sistemas, integraciones y
transformaciones. Un campo que significa una cosa en el sistema de origen
puede significar algo sutilmente distinto para cuando llega a una capa de
informes, y nadie más abajo lo nota porque el número sigue pareciendo
plausible. Acertar con la instrumentación es menos emocionante que acertar
con los marcos de referencia, pero es el fundamento sobre el que se sostiene
todo lo demás en este libro.

## Principios clave

- **Prefiere la instrumentación al autoinforme siempre que el sistema pueda
  observar el evento directamente.** Una marca de tiempo de despliegue de la
  canalización es más fiable que un recuento de despliegues autoinformado
  por un equipo.
- **Usa el autoinforme solo para lo que no se puede observar directamente.**
  La satisfacción, la fricción percibida y el bienestar no tienen sustituto
  en ningún sistema de registro; pregunta directamente y diseña bien la
  encuesta (capítulo 3.7). Reserva el autoinforme específicamente para esa
  categoría.
- **Los datos de cada métrica tienen un sistema de origen, un método de
  recopilación y un modo de fallo conocido.** Documenta los tres, no solo la
  definición.
- **La calidad de los datos se degrada en silencio.** Una canalización que
  funcionaba correctamente hace un año puede estar rota en silencio hoy, y
  un tablero seguirá mostrando un número equivocado sin quejarse.
- **Instrumenta en el punto de verdad, no aguas abajo de una traducción.**
  Cada salto entre el evento y el tablero es una oportunidad para que el
  significado se desvíe.

## Recomendaciones

### Traza cada métrica hasta su sistema de origen real antes de confiar en ella

Para cada métrica de un tablero, nombra el sistema concreto que genera el
evento subyacente: la canalización de integración y entrega continuas para
los eventos de despliegue, el alojador del control de versiones para los
eventos de commit y fusión, el rastreador de incidentes para los registros
de interrupciones, la plataforma de encuestas para la satisfacción
autoinformada. Si no puedes nombrar el sistema exacto, en realidad no sabes
de dónde viene el número, y no puedes evaluar su fiabilidad. Este mapeo es
un prerrequisito para la carta de gobernanza del capítulo 1.4, no un
ejercicio aparte.

### Instrumenta en el evento, no en el informe

Los datos más fiables capturan un evento automáticamente en el momento en
que ocurre: una canalización registra un despliegue en el instante en que
se completa, un sistema de control de versiones registra una fusión en el
instante en que aterriza. Los datos que dependen de que una persona recuerde
actualizar después un campo de estado, marcar un ticket como "hecho",
registrar un despliegue manualmente en una hoja de cálculo, pierden
precisión cuanto más se alejan del evento real y cuanto más ocupada está la
persona responsable. Siempre que exista un evento automatizado, prefiérelo
frente a un indicador informado por una persona para el mismo hecho.

### Reserva las encuestas para lo que solo una persona puede contarte

Algunas cosas genuinamente no se pueden observar desde la telemetría del
sistema: si un ingeniero siente que su trabajo tiene sentido, si un proceso
resulta frustrante, si el riesgo de agotamiento está aumentando. Estas cosas
requieren preguntar directamente, y una encuesta bien diseñada (el capítulo
3.7 cubre la mecánica) es la herramienta adecuada. El error es usar el
autoinforme para cosas que un sistema podría observar directamente en su
lugar, pedir a los ingenieros que estimen su propia frecuencia de
despliegue en lugar de extraerla de la canalización, lo que introduce ruido
y sesgo innecesarios en datos que podrían haber sido objetivos.

### Incorpora comprobaciones de calidad de datos a la propia canalización

Trata las canalizaciones de métricas con el mismo rigor que el código de
producción: añade comprobaciones automatizadas que avisen cuando una fuente
deja de enviar datos, cuando la distribución de un campo cambia de forma
inesperada, o cuando un recuento cae a cero sin motivo aparente. Un tablero
que muestra en silencio datos obsoletos o rotos como si fueran actuales es
peor que un tablero que muestra visiblemente "datos no disponibles", porque
el primero erosiona la confianza de forma invisible mientras el segundo al
menos dice la verdad sobre sus propias limitaciones.

### Documenta el método de recopilación junto a la definición

La definición de una métrica ("tiempo de entrega para cambios") no está
completa sin su método de recopilación (medido desde la marca de tiempo del
primer commit en el control de versiones hasta la marca de tiempo del
despliegue en producción en la canalización, excluyendo las ramas de
corrección urgente). Dos equipos con la misma definición pero distintos
métodos de recopilación seguirán produciendo números no comparables.
Registra ambos en la carta de métricas del capítulo 1.4, y trata un cambio
en cualquiera de los dos como un cambio que requiere la misma revisión
documentada.

## Ventajas e inconvenientes

| Tipo de fuente | Ventajas | Inconvenientes |
| --- | --- | --- |
| Instrumentación de canalización automatizada (integración continua, control de versiones) | Objetiva, con marca de tiempo, difícil de falsear, poco esfuerzo continuo | Requiere inversión de ingeniería inicial para construirse y mantenerse |
| Datos de rastreador de incidencias y gestión de proyectos | Ampliamente disponibles, familiares para los equipos | Dependen de la diligencia humana; a menudo inconsistentes entre equipos |
| Encuestas y autoinforme | Única fuente para la experiencia subjetiva (satisfacción, bienestar) | Sesgo de memoria, sesgo de deseabilidad social, fatiga de respuesta |
| Plataformas de observabilidad y telemetría | Señal rica, en tiempo real, a nivel de sistema | Solo cubre lo que se instrumentó explícitamente; puede ser caro a escala |

La tensión central es **objetividad frente a cobertura**. La instrumentación
automatizada es la fuente más fiable pero no puede observar en absoluto la
experiencia subjetiva, mientras que las encuestas pueden alcanzar
precisamente lo que la automatización no puede pero cargan con un riesgo de
sesgo real. Resuélvela usando instrumentación automatizada siempre que se
pueda observar un evento directamente, y reservando el autoinforme
específica y únicamente para lo que genuinamente requiere preguntarle a una
persona, nunca como un sustituto perezoso de datos que un sistema podría
haber proporcionado.

## Preguntas para debatir con tu equipo

1. **Para nuestras cinco métricas más importantes, ¿podemos nombrar el
   sistema de origen exacto y el método de recopilación de cada una, o
   estamos asumiendo una definición sin saber de dónde vienen realmente los
   datos?** Este es un vacío sorprendentemente común: una métrica se adopta
   de un marco de referencia o del tablero por defecto de un proveedor, y
   nadie del equipo actual sabe realmente qué sistema genera los datos
   subyacentes ni cómo. Rastrea cada una hasta su origen como ejercicio de
   grupo.

2. **¿Cuáles de nuestras métricas dependen del autoinforme para algo que un
   sistema podría observar directamente, y qué haría falta para sustituir
   ese autoinforme por instrumentación real?** Los recuentos de despliegue
   autoinformados, las horas trabajadas autoinformadas y el tiempo de ciclo
   autoestimado son ejemplos comunes de usar la fuente de datos equivocada
   para algo que la automatización podría capturar de forma más fiable.
   Identifícalas y prioriza sustituir primero las de mayor riesgo.

3. **¿Cómo sabríamos si una de nuestras canalizaciones de datos se rompiera
   en silencio?** La mayoría de las organizaciones solo descubren una
   canalización de métricas rota cuando alguien nota que un número parece
   implausible, lo que puede tardar meses. Debate si alguna de tus
   canalizaciones tiene hoy comprobaciones de salud automatizadas, y si no,
   cuáles las necesitan primero con más urgencia.

4. **¿Dónde ha cambiado una traducción entre sistemas el significado de una
   métrica sin que nadie lo decidiera a propósito?** Un campo que significa
   una cosa en un sistema de origen puede significar algo sutilmente
   distinto después de una integración o una migración, y el número
   resultante puede parecer plausible mientras está equivocado. Recorre la
   ruta completa de datos de tu métrica más consecuente y busca puntos de
   traducción.

5. **¿Documentamos los métodos de recopilación, no solo las definiciones,
   en nuestra carta de métricas?** Dos equipos pueden compartir el nombre y
   la definición de una métrica mientras la calculan con métodos de
   recopilación distintos, produciendo números que en realidad no son
   comparables. Audita una muestra de tus cartas contra este vacío
   específico.

6. **¿Cómo distinguimos entre una tendencia genuina y un artefacto de
   calidad de datos cuando un número se mueve de forma inesperada?** Un
   cambio repentino en una métrica suele ser la primera señal de un cambio
   real o de una canalización rota, y distinguir entre ambos requiere
   conocer la fuente de datos lo bastante bien para investigar con rapidez.
   Debate el proceso real de tu equipo para el último cambio inexplicado de
   métrica que encontrasteis.

## Enfoque sectorial

**Startup.** Con una pila pequeña, la mayoría de tus métricas pueden venir
directamente de tu proveedor de integración continua, tu alojador de
control de versiones y una herramienta de encuestas ligera, sin construir
canalizaciones personalizadas. El riesgo es saltarse incluso las
comprobaciones de salud básicas porque el equipo se mueve rápido; una
comprobación automatizada de cinco minutos de que una fuente de datos sigue
enviando eventos es un seguro barato contra volar a ciegas en silencio.

**Pequeña empresa.** Apóyate en los informes integrados de tus herramientas
existentes en lugar de construir canalizaciones de datos personalizadas que
no tienes capacidad de mantener. Sé explícito sobre qué números vienen de
sistemas automatizados y cuáles son estimaciones que alguien escribe en una
hoja de cálculo, porque los dos tienen una fiabilidad muy distinta, aunque
acaben en la misma página.

**Empresa grande.** Los problemas de calidad de datos se agravan a través de
integraciones, migraciones y límites entre unidades de negocio. Invierte en
canalizaciones de datos centralizadas y bien monitorizadas para tus métricas
más consecuentes, construye comprobaciones automatizadas de calidad de
datos como práctica estándar, y audita los métodos de recopilación, no solo
las definiciones, siempre que compares métricas entre unidades de negocio.

**Sector público.** La procedencia de los datos puede tener peso legal y de
auditoría: una cifra de rendimiento publicada puede necesitar sobrevivir a
una auditoría externa no solo de su valor sino de toda su cadena de
recopilación. Documenta explícitamente el linaje de los datos, conserva los
registros históricos del método de recopilación incluso después de que
cambie una metodología, y prepárate para demostrar exactamente cómo se
produjo un número, no solo qué marca actualmente.

## Ejemplos

**Empresa grande.** El liderazgo de ingeniería de una empresa de servicios
financieros llevaba dos años rastreando el "tiempo de entrega para cambios"
antes de descubrir que una migración de canalización de datos dieciocho
meses antes había cambiado en silencio la fuente de la marca de tiempo del
primer commit a la creación de la solicitud de incorporación de cambios,
acortando el tiempo de entrega aparente en una media de varias horas en
todos los equipos sin que nadie lo notara ni lo aprobara. La solución
instauró una comprobación de calidad de datos que comparaba la distribución
de cada métrica semana a semana y señalaba para revisión humana los cambios
estadísticamente inusuales, lo que detectó dos problemas de canalización más
en silencio durante el año siguiente.

**Sector público.** El tablero público de fiabilidad de servicio de una
agencia de transporte dependía de una mezcla de telemetría de sensores
automatizada e informes de incidentes introducidos manualmente por las
oficinas regionales. Una auditoría encontró que las regiones con menos
capacidad de personal estaban subinformando sistemáticamente los incidentes
menores, no por deshonestidad sino simplemente porque la entrada manual
competía por tiempo con trabajo más urgente, lo que significaba que la
cifra de fiabilidad publicada era mejor que la realidad precisamente en las
regiones que menos podían permitirse que un mantenimiento con pocos
recursos pasara desapercibido. La solución de la agencia sustituyó la
entrada manual de incidentes por registro automatizado activado por
sensores siempre que fue viable y añadió una estimación documentada de la
cobertura del informe manual junto a la cifra publicada.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una instrumentación sólida es la confianza: un equipo de
liderazgo que confía en sus datos puede actuar sobre ellos con decisión,
mientras que un equipo que se ha quemado con una canalización rota en
silencio empieza a dudar de cada número, lo que ralentiza cada decisión que
depende de métricas. Esa pérdida de confianza es cara y difícil de reparar,
y a menudo tarda mucho más en reconstruirse de lo que habría costado la
inversión original en instrumentación.

El coste total de propiedad de una buena instrumentación incluye el trabajo
de ingeniería inicial para construir canalizaciones fiables y el coste
continuo de la monitorización de calidad de datos, ambos fáciles de
subfinanciar porque ninguno produce por sí mismo una casilla visible en el
tablero. Esa falta de inversión es una economía falsa: el coste de descubrir
una canalización rota en silencio después de meses de decisiones tomadas
sobre datos malos es mucho más alto que el coste de construir las
comprobaciones de salud que lo habrían detectado el primer día.

## Antipatrones y errores comunes

- **Confiar en un número sin conocer su sistema de origen:** una métrica
  adoptada de un marco de referencia o de los valores por defecto de un
  proveedor sin que nadie rastree de dónde vienen realmente los datos.
- **Autoinformar lo que un sistema podría observar directamente:**
  introduce ruido y sesgo innecesarios en datos que podrían haber sido
  objetivos.
- **Ninguna comprobación automatizada de calidad de datos en una
  canalización de métricas:** una canalización rota en silencio puede
  mostrar números equivocados durante meses sin detectarse.
- **Documentar solo la definición, no el método de recopilación:** dos
  equipos con el mismo nombre de métrica pueden seguir calculando números
  no comparables.
- **Un tablero que muestra "0" o datos obsoletos como si fueran actuales,
  sin ninguna indicación de un fallo de fuente:** peor que un mensaje visible
  de "datos no disponibles".
- **Regiones o equipos con pocos recursos que subinforman sistemáticamente
  por la carga de la entrada manual:** un vacío de calidad de datos que
  correlaciona precisamente con las áreas que necesitan más atención.

## Modelo de madurez

- **Nivel 1, Iniciar:** Nadie puede rastrear de forma fiable una métrica
  hasta su sistema de origen; las canalizaciones no tienen comprobaciones de
  salud y los fallos pasan desapercibidos.
- **Nivel 2, Desarrollar:** Algunas métricas tienen fuentes documentadas,
  pero los métodos de recopilación son inconsistentes y las comprobaciones
  de calidad de datos son, en el mejor de los casos, improvisadas.
- **Nivel 3, Estandarizar:** Toda métrica gobernada documenta su sistema de
  origen y su método de recopilación; se prefiere la canalización
  automatizada frente al autoinforme siempre que se pueda observar un
  evento directamente.
- **Nivel 4, Gestionar:** Comprobaciones automatizadas de calidad de datos
  monitorizan cada canalización consecuente, señalan anomalías para
  revisión, y el linaje de los datos está documentado y es auditable.
- **Nivel 5, Orquestar:** La organización trata la calidad de datos como una
  disciplina de ingeniería de primer nivel con su propia monitorización y
  respuesta a incidentes, y puede demostrar la procedencia completa de
  cualquier métrica publicada a petición.

## Ideas para el debate

1. ¿Podríamos rastrear ahora mismo, en directo, en esta reunión, nuestras tres métricas principales hasta su sistema de origen exacto?
2. ¿Cuáles de nuestras métricas actuales dependen del autoinforme para algo que un sistema podría medir directamente?
3. ¿Tiene hoy alguna de nuestras canalizaciones de métricas comprobaciones de salud automatizadas?
4. ¿Cuándo descubrimos por última vez una canalización de datos rota en silencio, y cuánto tiempo llevaba equivocada?
5. ¿Dónde crea la entrada manual de datos un vacío entre lo reportado y la realidad?

## Conclusiones clave

- Prefiere la **instrumentación automatizada** al autoinforme siempre que un
  sistema pueda observar el evento directamente; reserva el autoinforme
  para la experiencia genuinamente subjetiva.
- Toda métrica necesita un **sistema de origen y un método de recopilación**
  documentados, no solo una definición.
- La calidad de los datos **se degrada en silencio**; incorpora
  comprobaciones automatizadas a la propia canalización en lugar de
  descubrir la rotura por accidente.
- Instrumenta **en el evento**, no aguas abajo de una traducción, para
  minimizar la deriva entre lo que ocurrió y lo que muestra el tablero.
- El coste de una canalización rota en silencio, meses de decisiones
  tomadas sobre datos malos, supera con creces el coste de las
  comprobaciones de salud que lo habrían detectado.

## Referencias y lecturas adicionales

- *Observability Engineering*, de Charity Majors, Liz Fong-Jones y George
  Miranda (principios de diseño de instrumentación y telemetría).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble y Gene Kim (el enfoque de instrumentación detrás de
  las métricas DORA).
- *Data Quality: The Accuracy Dimension*, de Jack E. Olson (conceptos de
  calidad de datos aplicables a canalizaciones de métricas).
- *How to Measure Anything*, de Douglas W. Hubbard (métodos de medición
  para cantidades que parecen difíciles de observar directamente).
