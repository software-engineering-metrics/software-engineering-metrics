# 8.1 Diseñar un panel de métricas de ingeniería

## Visión general y motivación

Cada métrica que ha cubierto este libro eventualmente tiene que vivir en
algún lugar que la gente real realmente mira, y un [panel](https://en.wikipedia.org/wiki/Dashboard_(business))
mal diseñado puede deshacer el trabajo cuidadoso de cada tema
anterior: métricas honestas, bien gobernadas, y emparejadas con
salvaguardas presentadas deshonestamente, de manera desordenada, o a la
audiencia equivocada producen exactamente la confusión y desconfianza que
este libro ha trabajado para prevenir. Este tema trata del oficio
específico del diseño de paneles: elegir qué mostrar a quién,
visualizarlo con honestidad, y estructurar todo el artefacto para que
realmente se use para tomar decisiones en lugar de ignorarse o, peor,
malinterpretarse.

La disciplina central que recomienda este tema es el diseño
específico por audiencia. Un panel construido para la reunión diaria de
un equipo de ingeniería individual necesita métricas distintas, una
granularidad distinta, y una densidad visual distinta que uno construido
para una revisión ejecutiva trimestral, y un único panel de talla única
que intenta servir a ambas audiencias normalmente no sirve bien a
ninguna. Este tema trata el diseño de paneles como una disciplina de
diseño genuina, no solo una ocurrencia tardía de reporte, apoyándose en
los principios de honestidad estadística del tema 1.6 a lo largo de
todo el texto: cada elección de visualización ayuda o dificulta la
capacidad de un lector para sacar la conclusión correcta de los datos.

Para los equipos grandes, el diseño de paneles es donde las muchas
salvaguardas individuales a nivel de métrica de este libro sobreviven en
la práctica o se pierden. Las organizaciones empresariales que gestionan
docenas de paneles de equipo necesitan consistencia sin rigidez,
estándares compartidos que todavía permitan satisfacer las necesidades
específicas de cada audiencia; las organizaciones gubernamentales, cuyos
paneles pueden enfrentar escrutinio público o servir como base para el
reporte de supervisión, necesitan los estándares de visualización honesta
que recomienda este tema aplicados con un rigor particular, ya que un
gráfico engañoso descubierto por un revisor externo daña la credibilidad
mucho más allá de la métrica específica involucrada.

## Principios clave

- **Diseña para una audiencia y decisión específicas, no para una
  cobertura exhaustiva.** Un panel que intenta servir a todos normalmente
  no sirve bien a nadie.
- **Cada elección de visualización ayuda o engaña activamente.** Aplica
  la honestidad estadística del tema 1.6 con rigor: tendencia real,
  ejes honestos, incertidumbre visible.
- **Menos métricas bien elegidas superan a la cobertura exhaustiva.** El
  principio recurrente de este libro, desde el tema 1.1 en adelante,
  se aplica directamente al diseño de paneles.
- **Un panel necesita un responsable y una cadencia de revisión**,
  exactamente como cualquier otra métrica gobernada (tema 1.4), o se
  degrada en un artefacto no mantenido y sin confianza.
- **Los pares de salvaguardas pertenecen a la misma vista.** Nunca separes
  una métrica incentivada de su salvaguarda en distintos paneles o
  distintas secciones.

## Recomendaciones

### Diseña paneles distintos para audiencias y decisiones distintas

Construye vistas separadas y específicas para cada propósito en lugar de
un panel que sirva a toda audiencia: un panel operativo a nivel de equipo
(cadencia diaria o semanal, métricas granulares de entrega y calidad para
el uso del propio equipo), un panel de liderazgo (cadencia mensual o
trimestral, ponderado por resultado según el tema 7.4, menos
métricas, más contexto), y, cuando sea relevante, un panel orientado
externamente (para clientes, órganos de supervisión, o el público,
gobernado cuidadosamente según el rigor escalado por consecuencia del
tema 1.4). Cada uno sirve a una decisión distinta y debería diseñarse
específicamente para esa decisión, no como una vista filtrada de un
único panel maestro.

### Aplica estándares de visualización honesta de manera consistente

Sigue los principios de honestidad estadística del tema 1.6 como
requisitos de diseño rígidos, no como un pulido opcional: comienza los
ejes de valor en cero a menos que se documente una excepción declarada y
visible, muestra la tendencia a lo largo del tiempo en lugar de una
instantánea única, usa medianas y percentiles en lugar de promedios para
datos sesgados, y anota el contexto (despliegues, incidencias, cambios
organizacionales) para que un lector pueda distinguir un cambio genuino
del ruido. Evita las manipulaciones específicas de gráficos que nombró
directamente el tema 1.6: ejes duales que insinúan una correlación
falsa, rangos de fechas seleccionados a conveniencia, y efectos 3D que
distorsionan la proporción.

### Nunca separes una métrica de su salvaguarda emparejada en distintas vistas

Aplica el principio de emparejamiento con salvaguardas del tema 1.2
como una regla de diseño de panel rígida: la frecuencia de despliegue y
la tasa de fallos de cambio (tema 2.10) pertenecen a la misma vista,
siempre visibles juntas, nunca separadas entre un panel de "velocidad" y
un panel de "calidad" distinto que distintas audiencias podrían ver de
manera aislada. Esto no es una preferencia de diseño menor; separar una
métrica de su salvaguarda en distintos paneles recrea exactamente el
riesgo de exposición a incentivos que advierte el tema 1.2, incluso
si ambos números técnicamente se rastrean en algún lugar.

### Asigna un responsable nombrado y una cadencia de revisión a cada panel

Aplica la disciplina de gobernanza del tema 1.4 directamente al
propio artefacto del panel, no solo a las métricas individuales que
muestra: nombra a un responsable de la precisión y relevancia continuas
del panel, y establece una cadencia de revisión en la que se añaden,
retiran, o reconsideran las métricas. Un panel sin responsable se degrada
exactamente de la manera en que lo hace una métrica sin responsable
(tema 1.4), acumulando casillas obsoletas que nadie tiene la
autoridad o responsabilidad de podar.

### Incorpora una declaración explícita y visible de para qué no sirve el panel

Siguiendo la distinción diagnóstica frente a evaluativa del tema 1.1,
declara directa y visiblemente en cualquier panel cuyas métricas
pudieran plausiblemente usarse mal para la evaluación individual,
exactamente para qué no sirve el panel: "estas métricas describen la
salud del equipo y del sistema; no se usan en las revisiones de
rendimiento individual". Esta declaración explícita, aplicada
especialmente a cualquier panel que contenga datos de actividad (tema
3.4) o datos de carga de guardia (tema 6.3), es una pequeña elección
de diseño con un efecto desproporcionado en la prevención de exactamente
la deriva evaluativa frente a la que advierte este libro a lo largo de
todo el texto.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Un único panel exhaustivo para todas las audiencias | Simple de construir y mantener un solo artefacto | No sirve bien a ninguna audiencia específica; abrumador para algunos, insuficiente para otros |
| Paneles específicos por audiencia | Cada uno sirve bien a su decisión real | Más artefactos que construir, mantener, y mantener consistentes |
| Cobertura exhaustiva de métricas en cada vista | Nada se pasa por alto | Fatiga de panel; entierra las métricas que realmente importan para la decisión de esa audiencia |
| Selección de métricas mínima e impulsada por la decisión por panel | Enfocado, accionable, más fácil de confiar | Requiere una disciplina de curación deliberada y arriesga omitir algo relevante |

La tensión central es **exhaustividad frente a enfoque**, la tensión
fundacional del tema 1.1 aplicada específicamente al diseño de
paneles. Un panel exhaustivo se siente más seguro, nada se deja fuera,
pero normalmente sirve peor a su audiencia real que uno enfocado
construido específicamente en torno a las decisiones que esa audiencia
necesita tomar. Resuelve la tensión construyendo múltiples paneles
específicos por propósito en lugar de uno exhaustivo, aceptando el coste
de mantenimiento adicional y modesto de varios artefactos enfocados a
cambio de que cada uno realmente sea útil para su audiencia prevista.

## Preguntas para debatir con tu equipo

1. **¿Nuestro panel actual intenta servir a múltiples audiencias a la
   vez, y si es así, a quién realmente sirve bien?** Repasa tu panel
   existente e identifica su audiencia principal real frente a su
   audiencia prevista; un desajuste aquí es común y vale la pena
   nombrarlo directamente.

2. **¿Alguno de nuestros paneles separa una métrica incentivada de su
   salvaguarda emparejada en distintas vistas?** Audita tus paneles
   actuales específicamente en busca de este patrón, comprobando cada una
   de las métricas DORA de la parte 2 y sus emparejamientos como punto de
   partida.

3. **¿Las visualizaciones de nuestro panel pasarían los estándares de
   visualización honesta del tema 1.6: ejes basados en cero,
   tendencia sobre instantánea, medianas sobre promedios para datos
   sesgados?** Revisa tus gráficos actuales reales frente a esta lista de
   comprobación directamente.

4. **¿Cada panel que mantenemos tiene un responsable nombrado y una
   cadencia de revisión, o algunos simplemente existen sin que nadie sea
   responsable de mantenerlos precisos y relevantes?** Si a algún panel le
   falta un responsable nombrado, esa brecha vale la pena cerrarla de
   inmediato, ya que un panel sin responsable se degrada exactamente de
   la manera en que lo hace una métrica sin responsable.

5. **¿Algún panel cuyas métricas pudieran plausiblemente usarse mal para
   la evaluación individual declara explícitamente para qué no sirve?**
   Comprueba específicamente cualquier panel que contenga datos de
   actividad o de carga de guardia en busca de esta declaración
   explícita.

6. **Si rediseñáramos nuestros paneles desde cero hoy, audiencia por
   audiencia, empezando por la decisión que necesita tomar cada
   audiencia, ¿cuán distinto se vería el resultado de lo que existe
   actualmente?** Este experimento mental a menudo revela cuánto de la
   estructura del panel se ha acumulado por inercia en lugar de diseño
   deliberado.

## Enfoque sectorial

**Startup.** Un único panel simple normalmente es apropiado a esta
escala, ya que todo el equipo y el liderazgo a menudo son el mismo grupo
pequeño de personas que toman en gran medida las mismas decisiones.
Concéntrate en los estándares de visualización honesta y la declaración
explícita de no-para-evaluación incluso a pequeña escala, ya que estos
hábitos son mucho más fáciles de establecer temprano que de reajustar
después.

**Pequeña empresa.** La mayoría de las herramientas listas para usar
proporcionan paneles predeterminados razonables; la disciplina principal
es curarlos hasta las pocas métricas que realmente informan una decisión
real para tu negocio específico, en lugar de mostrar cada métrica que la
herramienta resulte calcular por defecto.

**Empresa.** La consistencia sin rigidez es el reto central aquí: docenas
de paneles de equipo necesitan suficiente estándar compartido (reglas de
visualización honesta, emparejamiento con salvaguardas, disciplina de
propiedad) para ser confiables y comparables, mientras todavía permiten
que las necesidades operativas específicas de cada equipo moldeen su
propia vista. Invierte en un estándar de diseño de panel compartido,
aplicado mediante la gobernanza (tema 1.4), en lugar de una plantilla
rígida de talla única o paneles locales completamente no estructurados e
inconsistentes.

**Gobierno.** Los paneles que enfrentan escrutinio externo o de
supervisión necesitan un rigor particular en la visualización honesta y
la documentación de gobernanza explícita, ya que un gráfico engañoso
descubierto por un revisor externo daña la credibilidad institucional
mucho más allá de la métrica específica involucrada. Aplica el estándar
más alto de las recomendaciones de este tema específicamente a
cualquier panel orientado externamente.

## Ejemplos

**Empresa.** Una empresa de tecnología logística había mantenido durante
años un único panel de "salud de ingeniería" visto tanto por equipos de
ingeniería individuales como por el equipo de liderazgo ejecutivo, con
más de cuarenta casillas que cubrían todo, desde recuentos de commits
individuales hasta resultados de negocio trimestrales. Ninguna audiencia
lo encontraba genuinamente útil: los ingenieros ignoraban las casillas de
resultados de negocio como irrelevantes para su trabajo diario, y los
ejecutivos se sentían abrumados por métricas de entrega granulares sin
contexto para la interpretación. Dividirlo en un panel operativo de
equipo enfocado de seis casillas y un panel de liderazgo separado de ocho
casillas, ambos siguiendo los estándares de emparejamiento con
salvaguardas y visualización honesta de este tema, produjo un
compromiso mesurablemente mayor y, de manera crucial, los ejecutivos
reportaron por primera vez poder explicar qué significaban los números
cuando su propio liderazgo les preguntaba.

**Gobierno.** El panel de servicios digitales orientado al público de un
gobierno estatal había sido criticado públicamente por un gráfico que
mostraba el tiempo de procesamiento "promedio" usando un eje y truncado
que exageraba visualmente una mejora modesta, una violación de los
estándares de visualización honesta del tema 1.6 que un periodista de
tecnología externo había detectado y reportado. El panel rediseñado de la
agencia, construido explícitamente frente a los estándares de este
tema, ejes basados en cero, mediana en lugar de promedio para los
datos de tiempo de procesamiento sesgados hacia la derecha, y contexto
claramente anotado para cualquier cambio notable, fue específicamente
elogiado en un artículo de seguimiento como un modelo de presentación de
datos transparente del sector público, reparando directamente la
credibilidad que había dañado el gráfico engañoso anterior.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de paneles deliberados, específicos por audiencia, y
honestamente diseñados es un uso genuino y una confianza genuina: el
ejemplo de la empresa de logística anterior muestra el coste directo de
un único panel mal diseñado, poco compromiso de ambas audiencias
previstas, y el beneficio directo del rediseño, un compromiso
mesurablemente mayor una vez que cada audiencia obtuvo una vista
realmente construida para sus propias decisiones.

El coste total de propiedad es el esfuerzo de diseño y mantenimiento de
múltiples paneles específicos por propósito en lugar de un artefacto
exhaustivo único, más la disciplina de gobernanza continua (propiedad
nombrada, cadencia de revisión) que recomienda este tema. Ese coste
es modesto comparado con el riesgo de un panel que no se usa, o peor, uno
que engaña activamente a su audiencia y daña la credibilidad, como
muestra concretamente el ejemplo del gobierno anterior.

## Antipatrones y errores comunes

- **Un único panel que intenta servir a toda audiencia:** normalmente no
  sirve bien a nadie.
- **Separar una métrica incentivada de su salvaguarda en distintas
  vistas:** recrea el riesgo de exposición a incentivos que advierte el
  tema 1.2.
- **Elecciones de visualización deshonestas:** ejes truncados, rangos de
  fechas seleccionados a conveniencia, y ejes duales todos engañan a los
  lectores, a veces con consecuencias reputacionales reales.
- **Sin responsable nombrado ni cadencia de revisión para el propio
  panel:** el artefacto se degrada exactamente de la manera en que lo
  hace una métrica sin responsable.
- **Sin declaración explícita de para qué no sirve un panel:** invita a
  la deriva evaluativa frente a la que advierte este libro a lo largo de
  todo el texto.
- **Cobertura exhaustiva de casillas en lugar de curación enfocada e
  impulsada por la decisión:** produce fatiga de panel y entierra lo que
  realmente importa.

## Modelo de madurez

- **Nivel 1, Iniciar:** Un único panel sin curar, si acaso, sirve mal a
  todas las audiencias, sin ningún estándar de visualización honesta ni
  emparejamiento con salvaguardas.
- **Nivel 2, Desarrollar:** Existen algunas vistas específicas por
  audiencia, pero los estándares de visualización son inconsistentes y la
  propiedad no está clara.
- **Nivel 3, Estandarizar:** Se establecen paneles específicos por
  audiencia con estándares de visualización honesta y emparejamiento con
  salvaguardas consistentes en toda la organización, cada uno con un
  responsable nombrado.
- **Nivel 4, Gestionar:** Los paneles se revisan con una cadencia
  regular, con declaraciones explícitas de no-para-evaluación donde sea
  relevante, y las casillas obsoletas se podan activamente.
- **Nivel 5, Orquestar:** La práctica de diseño de paneles de la
  organización es una capacidad confiable y bien gobernada, y la
  organización puede señalar instancias específicas donde paneles
  honestos y bien diseñados repararon o construyeron confianza con las
  partes interesadas.

## Ideas para el debate

1. ¿Quién es la audiencia principal real de nuestro panel actual, frente a su audiencia prevista?
2. ¿Alguno de nuestros paneles separa una métrica de su salvaguarda?
3. ¿Nuestros gráficos actuales pasarían una auditoría de visualización honesta?
4. ¿Cada panel que mantenemos tiene un responsable claramente nombrado y con rendición de cuentas?
5. ¿Cómo sería un rediseño desde cero de nuestros paneles, primero por audiencia?

## Conclusiones clave

- Diseña **paneles específicos por audiencia** para decisiones
  específicas, no un único artefacto exhaustivo que intenta servir a
  todos.
- Aplica **estándares de visualización honesta** (tema 1.6) como
  requisitos rígidos: ejes basados en cero, tendencia sobre instantánea,
  medianas sobre promedios para datos sesgados.
- **Nunca separes una métrica incentivada de su salvaguarda** en
  distintas vistas; mantén los pares de salvaguardas en el mismo panel.
- Asigna un **responsable nombrado y una cadencia de revisión** a cada
  panel, exactamente como exige el tema 1.4 para cualquier métrica
  gobernada.
- Declara explícitamente **para qué no sirve un panel**, especialmente
  donde los datos de actividad o carga operativa podrían usarse mal para
  la evaluación individual.

## Referencias y lecturas adicionales

- *The Visual Display of Quantitative Information*, de Edward R. Tufte
  (el texto fundacional sobre la visualización de datos honesta y de alta
  integridad).
- *Storytelling with Data*, de Cole Nussbaumer Knaflic (diseño práctico
  de paneles y gráficos para audiencias de negocio).
- *Information Dashboard Design*, de Stephen Few (principios de diseño
  específicos de paneles para una comunicación eficaz y honesta).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la disciplina de emparejamiento de
  métricas que este tema aplica directamente al diseño de paneles).
