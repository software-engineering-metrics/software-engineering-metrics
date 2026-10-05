# 4.6 Métricas de documentación y conocimiento

## Visión general y motivación

Este tema cierra la parte 4 midiendo si el conocimiento necesario para
mantener con seguridad una base de código realmente está documentado y es
localizable, no solo si la documentación existe técnicamente en algún
lugar. El tema 3.5 cubrió la comunicación y la colaboración como una
preocupación de experiencia del desarrollador; este tema cubre el mismo
problema subyacente, la disponibilidad del conocimiento, desde el lado del
código: ¿tiene un ingeniero nuevo, o uno existente trabajando en código
desconocido, lo que necesita para hacer un cambio seguro, o ese
conocimiento vive solo en las cabezas de un número cada vez más reducido de
personas con antigüedad?

El reto de medición aquí es genuinamente difícil, más difícil que la
mayoría de las otras métricas de este libro, porque la calidad y utilidad
de la documentación son inherentemente más subjetivas que un porcentaje de
cobertura o una puntuación de complejidad. El enfoque de este tema es
medir sustitutos de la utilidad en lugar de la existencia: con qué
frecuencia se accede realmente a la documentación, con qué frecuencia se
hace la misma pregunta repetidamente a pesar de que exista una respuesta
documentada, y cuánto tiempo le toma a alguien desconocido de un sistema
volverse productivo en él. Ninguno de estos sustitutos es perfecto por sí
solo, pero juntos dan una imagen mucho más honesta que contar el número de
páginas wiki o archivos README que contiene una base de código.

Para los equipos grandes, las preocupaciones de este tema se acumulan
con la antigüedad organizacional y la rotación de personal de maneras que
son fáciles de subestimar hasta que una crisis obliga a abordar el
problema: un sistema mantenido durante años por los mismos dos ingenieros
puede funcionar perfectamente bien con casi ninguna documentación escrita,
justo hasta que ambos ingenieros se van dentro del mismo año, momento en el
que la organización descubre que el conocimiento nunca se capturó
realmente en ningún sitio duradero. Las organizaciones empresariales y
gubernamentales, con vidas de sistema típicamente más largas y una
continuidad de personal menos segura que una startup, cargan con este
riesgo de forma más aguda que la mayoría.

## Principios clave

- **La existencia de documentación no es lo mismo que su utilidad.** Mide
  si realmente ayuda, no solo si está presente.
- **Las preguntas repetidas a pesar de respuestas documentadas revelan un
  problema de localizabilidad, no un problema de esfuerzo de
  documentación.** Más contenido no siempre es la solución.
- **El tiempo de incorporación hasta la contribución productiva es un
  sustituto sólido y práctico** de la salud general del conocimiento,
  conectando directamente con las métricas de colaboración del tema
  3.5.
- **El conocimiento que vive solo en las cabezas de las personas es un
  riesgo de durabilidad,** no un estado estable y sostenible, por bien que
  funcione actualmente.
- **La documentación se degrada.** Una página que era precisa hace un año
  puede ahora ser activamente engañosa, y la obsolescencia en sí misma
  necesita rastrearse.

## Recomendaciones

### Rastrea el acceso y la obsolescencia de la documentación, no solo su existencia

Cuando tu plataforma de documentación lo permita, rastrea con qué
frecuencia se ven realmente las páginas, y por separado, cuánto tiempo ha
pasado desde que se actualizó por última vez una página en relación con la
frecuencia con la que ha cambiado el sistema subyacente que describe
(contrastarlo con los datos de cambios acumulados del tema 4.3 es
directamente útil aquí). Una página que describe un sistema que ha
cambiado sustancialmente desde que se editó por última vez es una fuerte
candidata a ser activamente engañosa en lugar de simplemente inútil, y esta
señal de obsolescencia merece al menos tanta atención como rastrear si la
documentación existe en absoluto.

### Vigila las preguntas repetidas como una señal de localizabilidad

Si la misma pregunta se hace repetidamente en un canal de chat del equipo o
durante la incorporación, a pesar de que técnicamente exista una respuesta
documentada en algún lugar, ese patrón revela un problema de
localizabilidad, la respuesta no está donde la gente naturalmente busca,
en lugar de un problema de esfuerzo de documentación que más escritura
solucionaría. Rastrea explícitamente las preguntas recurrentes, y úsalas
para priorizar reorganizar o exponer mejor el contenido existente en lugar
de escribir más de él.

### Mide el tiempo de incorporación hasta la primera contribución significativa e independiente

Esta métrica, introducida en el tema 3.5 como una señal de
colaboración, es igualmente una señal de documentación y salud del
conocimiento desde el lado del código. Un tiempo de incorporación
consistentemente corto y predecible sugiere un conocimiento genuinamente
accesible y preciso; un tiempo largo y muy variable, especialmente uno que
depende en gran medida de qué persona específica resulta incorporar a un
nuevo miembro del equipo, sugiere un conocimiento que vive peligrosamente
concentrado en la memoria individual en lugar de en una forma escrita y
duradera.

### Identifica y prioriza explícitamente las áreas de conocimiento crítico no documentadas

Contrasta tus datos de concentración de conocimiento (el análisis del
[factor de autobús](https://en.wikipedia.org/wiki/Bus_factor) del tema
3.5) con la cobertura de documentación: un sistema con un factor de
autobús de uno y sin documentación significativa es un riesgo severo y
acumulativo que merece atención prioritaria sobre un sistema bien
documentado con el mismo factor de autobús bajo, ya que la documentación
al menos proporciona una mitigación parcial mientras se forma a un sucesor
dedicado.

### Trata la deuda de documentación como una categoría dentro de tu lista acumulada de deuda técnica

En lugar de rastrear las brechas de documentación por separado y de manera
informal, incorpora las brechas de documentación significativas a la misma
lista acumulada visible y cuantificada descrita en el tema 4.5,
particularmente para sistemas críticos con un factor de autobús bajo, de
modo que el trabajo de documentación compita de manera justa por la
capacidad priorizada en lugar de aplazarse perpetuamente como una tarea de
menor estatus comparada con la remediación de deuda centrada en el código.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin medición de documentación | Poca sobrecarga | El riesgo de conocimiento permanece invisible hasta que una crisis obliga a descubrirlo |
| Contar la existencia de documentación (número de páginas, presencia de README) | Simple, fácil de reportar | No dice nada sobre la utilidad, precisión, o localizabilidad |
| Rastrear el acceso y la obsolescencia | Revela la utilidad real y la degradación | Requiere analítica de la plataforma de documentación y disciplina de revisión continua |
| Tiempo de incorporación como sustituto | Práctico, concreto, se vincula directamente con el impacto real en el negocio | Indirecto; otros factores además de la documentación también afectan la velocidad de incorporación |

La tensión central es **medibilidad frente a significado**. La existencia
de documentación es trivialmente fácil de contar y no te dice casi nada
útil; la utilidad genuina, si alguien realmente puede encontrar y confiar
en el conocimiento documentado cuando lo necesita, es lo que realmente
importa pero es más difícil de medir directamente. Resuelve la tensión
usando los sustitutos que recomienda este tema, patrones de acceso,
obsolescencia en relación con los cambios acumulados, preguntas repetidas,
y tiempo de incorporación, en combinación, aceptando que ninguno por sí
solo es perfecto pero que su convergencia es mucho más significativa que
un simple recuento de existencia.

## Preguntas para debatir con tu equipo

1. **Para nuestro sistema más crítico y con el factor de autobús más bajo,
   ¿realmente existe documentación significativa y precisa, o un experto
   que se va se llevaría la mayor parte del conocimiento real consigo?**
   Esta es la versión más aguda y concreta de la preocupación central de
   este tema; respóndela con honestidad primero para tu sistema
   individual de mayor riesgo.

2. **¿Qué pregunta se hace repetidamente en el chat de nuestro equipo a
   pesar de que exista una respuesta documentada en algún lugar?** Si
   puedes nombrar una de inmediato, ese es un problema de localizabilidad
   que vale la pena corregir directamente, probablemente reorganizando o
   exponiendo mejor el contenido existente en lugar de escribir más.

3. **¿Cuánto tardó nuestro miembro más reciente del equipo en hacer su
   primera contribución significativa e independiente, y cómo se comparó
   eso con el miembro del equipo anterior?** Una gran variación
   inexplicada entre individuos a menudo apunta a un conocimiento que
   depende en gran medida de quién resulta incorporar a alguien, en lugar
   de documentación duradera y accesible.

4. **¿Cuándo comprobamos por última vez si una pieza de documentación
   seguía siendo precisa, en relación con cuánto ha cambiado el sistema
   subyacente desde que se escribió?** Si la respuesta honesta es "no
   comprobamos esto de forma sistemática", ese riesgo de obsolescencia
   probablemente sea mayor de lo que cualquiera asume actualmente.

5. **¿Nuestra lista acumulada de deuda técnica (tema 4.5) incluye
   brechas de documentación, o el trabajo de documentación se aplaza
   perpetuamente como una tarea de menor estatus comparada con las
   correcciones de código?** Revisa tu lista acumulada real y comprueba si
   la deuda de documentación es visible y compite por capacidad priorizada
   o es efectivamente invisible.

6. **¿Qué nos costaría si la una o dos personas que entienden nuestro
   sistema más crítico y menos documentado se fueran dentro del mismo
   año?** Esta pregunta concreta e incómoda vale la pena responderla con
   honestidad en lugar de tratar el riesgo como abstracto o improbable.

## Enfoque sectorial

**Startup.** Las métricas formales de documentación suelen ser
innecesarias con un equipo pequeño donde el conocimiento se propaga a
través de conversaciones constantes y directas. El riesgo a vigilar es la
misma concentración de factor de autobús que advierte el tema 3.5,
ahora aplicada específicamente a la documentación: a medida que el equipo
crece más allá del tamaño en el que todos hablan a diario, el conocimiento
no documentado que funcionaba bien de manera informal se convierte en un
pasivo real.

**Pequeña empresa.** Prioriza documentar primero tu sistema individual más
crítico y menos redundante, aunque sea de manera informal, en lugar de
intentar una documentación exhaustiva de todo. Un documento corto y preciso
que cubra tu único punto de fallo más arriesgado ofrece más valor real que
una cobertura amplia pero superficial en todas partes.

**Empresa.** Tanto la obsolescencia como la localizabilidad de la
documentación escalan mal aquí, ya que una organización grande acumula
documentación a través de muchos equipos y plataformas más rápido de lo
que cualquiera puede mantenerla actualizada u organizada de manera
consistente. Invierte en analítica de la plataforma de documentación para
rastrear el acceso y la obsolescencia a escala, y trata la deuda de
documentación como una categoría de primer nivel en tu lista acumulada de
deuda de toda la organización.

**Gobierno.** La larga antigüedad de los empleados, común en las
organizaciones del sector público, puede enmascarar un riesgo severo de
conocimiento no documentado detrás de una estabilidad aparente, ya que un
sistema mantenido por la misma persona durante quince años puede funcionar
perfectamente bien justo hasta que esa persona se jubila. Trata la salud de
la documentación explícitamente como una preocupación de continuidad de
operaciones, conectada directamente con la planificación de la fuerza
laboral y la sucesión, no meramente como una comodidad de ingeniería.

## Ejemplos

**Empresa.** Una empresa de servicios financieros descubrió, durante una
reorganización no relacionada, que su motor central de cálculo de riesgo
no tenía documentación significativa más allá de algunos comentarios de
código obsoletos, y que los dos ingenieros que mejor lo entendían estaban
siendo reasignados a una nueva iniciativa simultáneamente. Un esfuerzo de
documentación de emergencia, realizado bajo una presión de tiempo
significativa, extrajo y registró el conocimiento crítico antes de que la
reasignación entrara en vigor, pero el proceso tomó varias semanas de
tiempo dedicado de ingenieros sénior que podría haberse distribuido de
manera más gradual y barata si la salud de la documentación se hubiera
rastreado y priorizado de forma proactiva en lugar de descubrirse como una
emergencia.

**Gobierno.** El sistema de gestión de casos de décadas de antigüedad de un
gobierno estatal había acumulado documentación sustancial a lo largo de
los años, pero una auditoría de localizabilidad encontró que los nuevos
miembros del equipo constantemente no podían encontrar la documentación
existente relevante y hacían repetidamente el mismo puñado de preguntas en
los canales del equipo, preguntas que, de hecho, ya estaban respondidas en
algún lugar de la plataforma de documentación extensa y mal organizada de
la agencia. En lugar de escribir más contenido, la agencia invirtió en
reorganizar y mejorar la estructura de búsqueda y navegación de su
documentación existente, y una encuesta de seguimiento mostró una
reducción mesurable en las preguntas repetidas y una experiencia de
incorporación reportada significativamente más rápida para el nuevo
personal, sin añadir ni una sola página nueva de contenido.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de medir y gestionar la salud de la documentación de manera
deliberada es un coste de crisis evitado: el ejemplo de servicios
financieros anterior muestra la diferencia entre la captura de
conocimiento proactiva y gradual y un esfuerzo de emergencia costoso y
comprimido forzado por un movimiento de personal no planificado. El
conocimiento crítico no documentado es un pasivo permanente que no cuesta
nada visiblemente hasta el momento en que se vuelve muy costoso de golpe.

El coste total de propiedad es principalmente la disciplina de rastrear
los sustitutos que recomienda este tema, patrones de acceso,
obsolescencia, preguntas repetidas, tiempo de incorporación, y la voluntad
de incorporar las brechas de documentación a una lista acumulada
priorizada en lugar de tratarlas como perpetuamente de menor estatus que
el trabajo centrado en código. Esa disciplina cuesta mucho menos que la
extracción de conocimiento en modo de crisis que el ejemplo de servicios
financieros muestra como alternativa.

## Antipatrones y errores comunes

- **Contar la existencia de documentación en lugar de su utilidad:** no
  dice casi nada sobre si el conocimiento realmente es accesible cuando se
  necesita.
- **Escribir más contenido en respuesta a preguntas repetidas, sin
  comprobar primero la localizabilidad:** a menudo aborda un problema
  completamente equivocado.
- **No comprobar nunca la obsolescencia de la documentación en relación con
  cuánto ha cambiado el sistema:** arriesga contenido activamente engañoso
  y desactualizado.
- **Tratar la deuda de documentación como perpetuamente de menor estatus
  que la deuda de código:** la deja crónicamente despriorizada e invisible
  en la lista acumulada.
- **Confundir la estabilidad aparente, un sistema que no ha cambiado en
  años, con bajo riesgo:** puede enmascarar un problema severo de factor de
  autobús no documentado detrás de un sistema que simplemente aún no ha
  necesitado a su único experto.
- **Descubrir conocimiento crítico no documentado solo durante una
  transición de personal de emergencia:** el modo de fallo costoso y
  evitable que este tema está construido para prevenir.

## Modelo de madurez

- **Nivel 1, Iniciar:** La salud de la documentación no se mide; la
  concentración de conocimiento y el riesgo de obsolescencia se descubren
  solo a través de crisis.
- **Nivel 2, Desarrollar:** Existe algo de documentación, pero no hay un
  rastreo sistemático del acceso, la obsolescencia, o la localizabilidad.
- **Nivel 3, Estandarizar:** El acceso y la obsolescencia se rastrean para
  los sistemas críticos, y el tiempo de incorporación se mide como
  sustituto de la salud del conocimiento en toda la organización.
- **Nivel 4, Gestionar:** Las brechas de documentación se incorporan a la
  lista acumulada de deuda técnica priorizada, contrastadas con el riesgo
  de factor de autobús para identificar las combinaciones de riesgo más
  severas.
- **Nivel 5, Orquestar:** La organización identifica y aborda de manera
  proactiva el riesgo de conocimiento crítico no documentado antes de que
  una transición de personal fuerce el problema, y puede señalar mejoras
  específicas y mesurables en la incorporación o la respuesta a incidentes
  rastreadas hasta la inversión en documentación.

## Ideas para el debate

1. ¿Cuál es ahora mismo nuestra combinación más severa de factor de autobús bajo y documentación deficiente?
2. ¿Qué pregunta se hace repetidamente a pesar de que exista una respuesta documentada?
3. ¿Cómo sabríamos si una pieza de documentación crítica se hubiera vuelto obsoleta y engañosa?
4. ¿Nuestra lista acumulada de deuda técnica incluye brechas de documentación, o son invisibles?
5. ¿Qué nos costaría si el único experto de nuestro sistema menos documentado se fuera este año?

## Conclusiones clave

- Mide la **utilidad, no la existencia**: si la documentación realmente
  ayuda, usando sustitutos como patrones de acceso, obsolescencia, y
  preguntas repetidas.
- **Las preguntas repetidas a pesar de respuestas documentadas** revelan un
  problema de localizabilidad, no necesariamente un problema de esfuerzo de
  contenido.
- **El tiempo de incorporación hasta la contribución productiva** es un
  sustituto sólido y práctico de la salud general del conocimiento.
- **El conocimiento crítico no documentado es un riesgo acumulativo**,
  especialmente combinado con un factor de autobús bajo (tema 3.5); no
  cuesta nada visiblemente hasta que cuesta mucho de golpe.
- Incorpora las **brechas de documentación a tu lista acumulada de deuda
  técnica** (tema 4.5) para que compitan de manera justa por capacidad
  priorizada.

## Referencias y lecturas adicionales

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, de
  Jared Bhatti, Zachariah Goldberg, Ted Kubaska, y Sarah Moir (prácticas
  documentales prácticas para equipos de ingeniería).
- *A Philosophy of Software Design*, de John Ousterhout (la relación entre
  documentación, complejidad, y mantenibilidad).
- *Team Topologies*, de Matthew Skelton y Manuel Pais (implicaciones de
  diseño organizacional del conocimiento concentrado frente al
  distribuido).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la documentación como una de las
  capacidades correlacionadas con el rendimiento de entrega).
