# 5.1 Tasa de defectos escapados y escapes de calidad

## Visión general y motivación

La **tasa de defectos escapados** mide los defectos que llegan a producción
y afectan a usuarios reales, a diferencia de los defectos detectados antes
mediante pruebas, revisión de código, o análisis estático, todos cubiertos
en la parte 4 de este libro. La distinción importa enormemente: un defecto
detectado en revisión de código cuesta minutos corregir y ningún usuario lo
ve jamás; ese mismo defecto, si escapa a producción, puede costar horas de
respuesta a incidencias, daño real al cliente, y una mella mesurable en la
confianza. Esta métrica es, en un sentido real, el marcador final de todo
lo que cubre la parte 4, ya que una tasa de defectos escapados en aumento a
pesar de métricas de calidad interna fuertes (complejidad, cobertura,
análisis estático) normalmente significa que esas señales internas en
realidad no están capturando los modos de fallo que importan a los usuarios
reales.

Este capítulo trata los defectos escapados con la seriedad que su coste
merece a la vez que resiste la tentación de tratar el recuento bruto como
un simple marcador. No todos los defectos son iguales: una errata en un
texto de ayuda raramente visto y un error de corrupción de datos en un
sistema de transacciones financieras son ambos, técnicamente, defectos
escapados, y tratarlos de manera idéntica produce una métrica que es
demasiado ruidosa para actuar sobre ella o, peor aún, activamente engañosa
sobre dónde vive el riesgo real. La recomendación central de este
capítulo, un seguimiento ponderado por gravedad con atención cuidadosa a
cómo se clasifican los defectos, apunta directamente a ese problema.

Para los equipos grandes, la tasa de defectos escapados es uno de los
puentes más claros entre las métricas de ingeniería interna de este libro
y el mundo orientado al cliente del que se ocupa la parte 5 en su
conjunto. Las organizaciones empresariales la usan para justificar la
inversión en las prácticas de pruebas y revisión de la parte 4; las
organizaciones gubernamentales, donde un defecto escapado puede significar
un cálculo de prestaciones incorrecto o una interacción de servicio
público fallida, lo tratan como una medida directa de la confianza pública
y la exposición legal, no meramente como una estadística de ingeniería
interna.

## Principios clave

- **La tasa de defectos escapados es el marcador final de la práctica de
  calidad interna.** Una tasa en aumento a pesar de métricas fuertes de la
  parte 4 significa que esas métricas no están capturando lo que importa.
- **La gravedad importa más que el recuento bruto.** Pondera los defectos
  por el impacto real en el cliente o el negocio, no tratando cada escape
  de manera idéntica.
- **La consistencia de clasificación es esencial.** Dos equipos que
  clasifican la gravedad de forma distinta producen números que no se
  pueden comparar de manera justa.
- **Esta métrica está expuesta a la manipulación de definiciones**,
  exactamente como la tasa de fallos de cambio (capítulo 2.10): reducir lo
  que cuenta como "defecto" favorece el número sin reducir el daño real al
  cliente.
- **La categorización por causa raíz convierte un recuento en una
  herramienta diagnóstica.** Saber *por qué* escapan los defectos es más
  accionable que saber solo cuántos escaparon.

## Recomendaciones

### Pondera los defectos escapados por gravedad, usando una escala consistente y documentada

Clasifica cada defecto escapado usando una escala de gravedad fija
(comúnmente crítico, mayor, menor, o un equivalente numerado) basada en el
impacto real en el cliente o el negocio: la pérdida o corrupción de datos,
la exposición de seguridad, y la indisponibilidad completa de una
funcionalidad se sitúan en la parte superior; un problema cosmético sin
impacto funcional se sitúa en la parte inferior. Rastrea una tendencia
ponderada por gravedad, no solo un recuento bruto, para que un pico en
problemas menores no eclipse visualmente un aumento más pequeño pero mucho
más consecuente en problemas críticos.

### Estandariza los criterios de clasificación entre equipos

Los distintos equipos que quedan libres para clasificar la gravedad de
manera independiente derivarán hacia estándares diferentes, algunos
conservadores, algunos indulgentes, haciendo que la comparación entre
equipos carezca de sentido y, peor aún, creando un incentivo para
clasificar generosamente hacia abajo para que los propios números de un
equipo se vean mejor (una variante de la manipulación de definiciones del
capítulo 1.2). Publica criterios de clasificación claros y basados en
ejemplos, y audita periódicamente una muestra de clasificaciones entre
equipos para comprobar la consistencia.

### Rastrea la [causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis), no solo el recuento y la gravedad

Para cada defecto escapado, registra por qué escapó: una brecha de
pruebas, un caso límite pasado por alto en los requisitos, una diferencia
de entorno entre staging y producción, una revisión que pasó por alto el
problema. Agrega estos datos de causa raíz a lo largo del tiempo para
encontrar patrones sistémicos: si una categoría específica (digamos,
defectos por diferencia de entorno) domina tus escapes, eso apunta
directamente a una brecha de proceso específica y corregible en lugar de
una llamada general y vaga a "probar más".

### Conecta los defectos escapados con sus señales de calidad interna de origen

Cuando sea posible, rastrea un defecto escapado hasta el área de código de
donde provino y comprueba si esa área mostraba señales de advertencia en
las métricas de la parte 4: ¿era un punto caliente de complejidad
(capítulo 4.1, capítulo 4.3), tenía una tasa baja de mutantes eliminados
(capítulo 4.2), señaló algo cerca el análisis estático (capítulo 4.4)?
Esta conexión es lo que valida si tus métricas de calidad interna son
realmente predictivas de defectos reales orientados al cliente, o si están
midiendo algo que, en tu contexto específico, no se correlaciona con lo
que los clientes realmente experimentan.

### Protege contra que la clasificación de defectos se convierta en un ejercicio de culpa

Enmarca el análisis de causa raíz de defectos explícitamente como una
pregunta de sistemas, según el enfoque diagnóstico del capítulo 1.1, no
como un ejercicio de culpa individual. Un equipo que teme la culpa por un
defecto escapado tiene un fuerte incentivo para subreportar, clasificar
hacia abajo de manera indebida, o resistirse a un análisis de causa raíz
exhaustivo, todo lo cual corrompe precisamente los datos de los que
depende este capítulo. La práctica de análisis retrospectivo sin culpa,
cubierta con más profundidad en el capítulo 6.2, se aplica directamente
aquí.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Recuento bruto de defectos escapados | Simple de reportar | Trata una errata y un error de corrupción de datos de manera idéntica; ruidoso y engañoso |
| Seguimiento ponderado por gravedad | Refleja el impacto real en el cliente con más precisión | Requiere una clasificación consistente y disciplinada |
| Estándares de clasificación independientes por equipo | Flexible, poca sobrecarga de coordinación | Produce números no comparables entre equipos; invita a la deriva indulgente |
| Clasificación estandarizada y auditada | Justa, comparable, resiste la manipulación | Requiere gobernanza continua y esfuerzo de auditoría periódico |

La tensión central es **flexibilidad local frente a comparabilidad entre
equipos**. Dejar que cada equipo clasifique la gravedad de los defectos de
la manera que mejor se ajuste a su propio contexto es más simple de
implementar pero produce números que no se pueden comparar ni agregar de
manera justa a nivel organizacional, y crea un incentivo silencioso para
que un equipo clasifique con generosidad para proteger sus propias
métricas. Resuelve la tensión invirtiendo en criterios de clasificación
estandarizados y documentados y auditorías periódicas entre equipos,
tratando esto como trabajo de gobernanza (capítulo 1.4) que vale la pena
la inversión dado lo directamente que se conecta esta métrica con el
impacto real en el cliente.

## Preguntas para debatir con tu equipo

1. **¿Rastreamos los defectos escapados por gravedad, o un recuento bruto
   trata un problema cosmético menor igual que un problema de datos
   crítico?** Revisa tu panel real y compruébalo; si la ponderación por
   gravedad todavía no está en marcha, este es el único cambio de mayor
   valor que recomienda este capítulo.

2. **¿Dos equipos distintos clasificarían la gravedad del mismo defecto de
   la misma manera, o la clasificación se ha ido separando en toda la
   organización?** Elige un defecto pasado real y ambiguo y haz que
   representantes de dos equipos diferentes lo clasifiquen de forma
   independiente; compara los resultados con honestidad.

3. **¿Cuál es nuestra causa raíz más común para los defectos escapados, y
   nuestro proceso actual realmente la aborda, o simplemente seguimos
   respondiendo a incidencias individuales a medida que ocurren?** Agrega tus
   datos de causa raíz de los últimos meses y busca el patrón dominante.

4. **¿Nuestros defectos escapados se han rastreado hasta áreas que nuestras
   métricas de calidad interna (complejidad, cobertura, análisis estático)
   ya habían señalado como arriesgadas?** Esta conexión valida si tus
   métricas de la parte 4 son genuinamente predictivas en tu contexto
   específico, o si se están perdiendo los modos de fallo que realmente
   importan.

5. **¿Nuestro proceso de clasificación de defectos se siente seguro, o los
   ingenieros temen la culpa al reportar o clasificar un defecto con el que
   están asociados?** Una cultura propensa a la culpa corrompe
   sistemáticamente estos datos mediante el subreporte y la clasificación
   indulgente; sé honesto sobre tu cultura actual aquí.

6. **¿Nuestra tasa de defectos escapados ha mejorado alguna vez
   sospechosamente rápido sin ningún cambio correspondiente en la práctica
   de pruebas o revisión?** Como con la tasa de fallos de cambio (capítulo
   2.10), esta es la señal más clara de que se movieron los criterios de
   clasificación, no el riesgo real.

## Enfoque sectorial

**Startup.** La clasificación formal de gravedad a menudo es innecesaria
con un volumen pequeño de defectos y un equipo pequeño que puede discutir
cada uno directamente. El hábito que vale la pena adoptar pronto es
simplemente rastrear los defectos de manera consistente desde el
principio, aunque sea de forma informal, para que los datos históricos
existan una vez que el equipo crezca lo suficiente como para necesitar un
análisis más formal.

**Pequeña empresa.** Una escala de gravedad simple y compartida, incluso
de tres niveles (crítico, mayor, menor), aplicada de manera consistente
por quien maneja el soporte y el triaje de errores, captura la mayor
parte del valor de este capítulo sin necesitar herramientas sofisticadas
ni una función de calidad dedicada.

**Empresa.** La consistencia de clasificación entre equipos es la
inversión de mayor apalancamiento aquí, ya que los estándares
inconsistentes en docenas de equipos hacen que la comparación de calidad
en toda la organización carezca de sentido. Invierte en criterios de
clasificación documentados y basados en ejemplos y en auditoría periódica,
y conecta sistemáticamente los defectos escapados con las señales de
calidad interna de la parte 4 para validar cuáles de esas señales son
realmente predictivas para tu organización.

**Gobierno.** Un defecto escapado en un sistema orientado al público o de
cálculo de prestaciones conlleva un peso legal y de confianza pública más
allá de su coste de ingeniería. Trata la clasificación de gravedad con un
rigor particular para los defectos que afectan a servicios orientados a
la ciudadanía, y prepárate para que las decisiones de clasificación
enfrenten un escrutinio externo, lo cual es un argumento fuerte a favor de
criterios documentados, auditados y consistentes en lugar de juicios
improvisados.

## Ejemplos

**Empresa.** El recuento de defectos escapados de una empresa de software
por suscripción había estado aumentando durante dos trimestres, y la
preocupación inicial se centró en el número bruto. El análisis ponderado
por gravedad reveló que el aumento se concentraba casi por completo en
problemas cosméticos menores, coincidiendo con un rediseño reciente de la
interfaz de usuario, mientras que los defectos críticos y mayores en
realidad habían disminuido ligeramente durante el mismo período. El
análisis de causa raíz del pico de problemas menores señaló una brecha en
las pruebas de regresión visual específicamente para los nuevos
componentes de la interfaz, una corrección dirigida y de bajo coste que se
habría pasado por alto por completo si el equipo hubiera reaccionado al
recuento bruto y no ponderado como una crisis de calidad indiferenciada.

**Gobierno.** El sistema de cálculo de prestaciones de una agencia estatal
de desempleo tuvo un defecto escapado que denegó incorrectamente un
pequeño porcentaje de solicitudes por lo demás elegibles durante varios
meses antes de su detección. Una investigación de causa raíz encontró que
el defecto se había originado en un área de código previamente señalada
como punto caliente de complejidad (capítulo 4.1, capítulo 4.3) en una
revisión de calidad interna dieciocho meses antes, pero el punto caliente
nunca se había priorizado para remediación porque todavía no había
ocurrido ningún defecto que hiciera el riesgo concreto. El proceso
revisado de la agencia ahora pondera explícitamente más alto las áreas
señaladas como puntos calientes en la prioridad de pruebas y revisión
precisamente por esta conexión demostrada y validada entre las señales de
complejidad interna y el riesgo real de defectos escapados.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de rastrear la tasa de defectos escapados con rigor, con
ponderación por gravedad y análisis de causa raíz, es la capacidad de
dirigir la inversión en calidad hacia donde realmente reducirá el daño
orientado al cliente, en lugar de reaccionar a un recuento indiferenciado
que mezcla problemas triviales y graves sin distinción. El ejemplo del
software por suscripción anterior lo muestra con claridad: una reacción
basada en el recuento bruto habría desencadenado una iniciativa de calidad
amplia y sin objetivo definido, mientras que la respuesta ponderada por
gravedad e informada por causa raíz identificó una corrección específica,
barata, y dirigida.

El coste total de propiedad incluye la disciplina de clasificación
(criterios consistentes, auditorías periódicas) y el esfuerzo de
seguimiento de causa raíz, ambos principalmente inversiones de proceso más
que costes de herramientas. Esa inversión se paga a sí misma directamente
en el coste de daño al cliente y respuesta a incidencias evitadas al
dirigir el esfuerzo de calidad hacia las fuentes reales y validadas del
riesgo de defectos escapados.

## Antipatrones y errores comunes

- **Tratar un recuento bruto de defectos como la métrica:** confunde
  problemas triviales y graves y oscurece la señal real.
- **Clasificación de gravedad inconsistente entre equipos:** hace que la
  comparación entre equipos carezca de sentido e invita a la deriva de
  clasificación indulgente.
- **Sin seguimiento de causa raíz:** convierte un recuento en un número
  sin valor diagnóstico, dejando invisibles los patrones sistémicos.
- **Una cultura de reporte propensa a la culpa:** corrompe los datos
  mediante el subreporte y la clasificación indulgente, exactamente el
  riesgo de exposición a incentivos que advierte el capítulo 1.2.
- **No conectar nunca los defectos escapados con las señales de calidad
  interna:** pierde la oportunidad de validar, o invalidar, las métricas
  predictivas de la parte 4 frente a resultados reales.
- **Una mejora sospechosamente rápida sin ningún cambio de proceso detrás:**
  la señal más clara de que cambiaron los criterios de clasificación, no
  el riesgo real.

## Modelo de madurez

- **Nivel 1, Iniciar:** Los defectos escapados se rastrean, si acaso, como
  un recuento bruto sin ponderación por gravedad ni análisis de causa
  raíz.
- **Nivel 2, Desarrollar:** Existe cierta clasificación de gravedad, pero
  los estándares varían entre equipos y el seguimiento de causa raíz es
  inconsistente.
- **Nivel 3, Estandarizar:** La clasificación de gravedad está
  estandarizada y documentada en toda la organización, con una
  categorización de causa raíz aplicada de manera consistente.
- **Nivel 4, Gestionar:** Los defectos escapados se rastrean
  sistemáticamente hasta las señales de calidad interna para validar su
  valor predictivo, y la clasificación se audita periódicamente para
  comprobar su consistencia.
- **Nivel 5, Orquestar:** La organización puede señalar reducciones
  específicas y mesurables en la tasa de defectos escapados rastreadas
  hasta la inversión en calidad dirigida e informada por causa raíz,
  validada frente a las señales de calidad interna.

## Ideas para el debate

1. ¿Nuestro principal defecto escapado del trimestre pasado habría sido clasificado de la misma manera por un equipo distinto?
2. ¿Cuál es nuestra causa raíz más común para los defectos escapados, y realmente la estamos abordando?
3. ¿Un defecto escapado se ha rastreado alguna vez hasta un área que nuestras métricas internas ya habían señalado?
4. ¿Nuestro equipo se siente seguro reportando y clasificando con honestidad un defecto que causó?
5. ¿Qué revelaría una vista ponderada por gravedad de nuestro recuento actual de defectos que un recuento bruto oculta?

## Conclusiones clave

- La tasa de defectos escapados es el **marcador final** de la práctica de
  calidad interna; una tasa en aumento a pesar de métricas fuertes de la
  parte 4 significa que esas métricas no están capturando lo que importa.
- **Pondera por gravedad**, usando una escala de clasificación
  consistente, documentada, y auditada, nunca un recuento bruto por sí
  solo.
- Rastrea la **causa raíz**, no solo el recuento y la gravedad, para
  convertir la métrica en una herramienta diagnóstica genuina.
- **Conecta los defectos escapados con las señales de calidad interna**
  (complejidad, cobertura, análisis estático) para validar si esas
  señales son realmente predictivas.
- Protege contra una **cultura propensa a la culpa** que corrompe el
  reporte y la clasificación mediante el subreporte y la deriva
  indulgente.

## Referencias y lecturas adicionales

- *Site Reliability Engineering*, de Betsy Beyer, Chris Jones, Jennifer
  Petoff, y Niall Richard Murphy, eds. (la práctica de análisis
  retrospectivo sin culpa aplicable al análisis de causa raíz de
  defectos).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la relación entre las prácticas de
  entrega y los resultados de calidad).
- *Code Complete*, de Steve McConnell (prácticas de clasificación de
  defectos y análisis de causa raíz).
- *The Field Guide to Understanding Human Error*, de Sidney Dekker (el
  enfoque sistémico y sin culpa de la investigación de fallos).
