# 2.10 El marco de métricas DORA

## Visión general y motivación

Las **[métricas DORA](https://dora.dev/guides/dora-metrics/)** vienen del
programa de Investigación y Evaluación de
[DevOps](https://en.wikipedia.org/wiki/DevOps), un esfuerzo de
investigación de varios años, publicado más tarde como el libro
*Accelerate* de Nicole Forsgren, Jez Humble y Gene Kim, que encuestó a
decenas de miles de profesionales de ingeniería para encontrar qué
prácticas de entrega se correlacionan con el rendimiento organizacional. El
resultado fueron cuatro métricas, emparejadas de dos en dos: la frecuencia
de despliegue y el tiempo de entrega para cambios miden la velocidad; la
tasa de fallos de cambio y el tiempo de recuperación de un despliegue
fallido, a menudo abreviado como tiempo medio de recuperación (MTTR),
miden la estabilidad. El hallazgo de investigación que hizo significativo
al marco fue que quienes rendían de forma excelente eran rápidos y
estables simultáneamente, desmontando la suposición de que la velocidad y
la seguridad se intercambian entre sí, y ese hallazgo sigue siendo el
ejemplo trabajado más claro que tiene este libro del principio de
emparejamiento con barrera de contención del tema 1.2: una métrica de
velocidad incentivada, emparejada con una barrera de contención de
estabilidad, es lo que realmente hacen las organizaciones de mejor
rendimiento.

Este libro cubre DORA en último lugar en esta parte, de forma deliberada,
en lugar de como el marco organizador de la parte. Esa colocación no es un
rechazo de la investigación, que sigue siendo genuinamente rigurosa y
merece usarse. Refleja una limitación específica y real: DORA mide con qué
rapidez y con qué seguridad se mueve una canalización, pero guarda
silencio sobre qué se mueve a través de la canalización. Un equipo puede
presentar excelentes números DORA mientras su producción real ha derivado
en silencio hacia retrabajo de defectos o ha privado de capacidad al
trabajo de deuda técnica y seguridad, un patrón que el Flow Framework de
los temas 2.1 a 2.4 está construido específicamente para sacar a la
luz y que DORA no puede ver. Usa DORA como lo presenta este tema: una
medida de referencia bien validada pero más estrecha de la mecánica de la
canalización, no la imagen completa de la salud de la entrega.

Para los equipos grandes, el valor genuino que le queda a DORA es la
comparabilidad. Una métrica calculada de forma consistente a partir de
datos de canalización e incidentes le permite a una organización comparar
la capacidad de entrega entre muchos equipos que trabajan en dominios
distintos sin el problema de comparar peras con manzanas que aqueja a la
mayoría de las comparaciones entre equipos. Las organizaciones grandes
todavía la usan para priorizar la inversión en plataforma; las
organizaciones del sector público todavía la usan para demostrar, con
evidencia, que un programa de modernización mejoró de forma medible la
mecánica de entrega. Trata eso como el trabajo propio y delimitado de
DORA, y usa los temas del Flow Framework anteriores en esta parte para
la pregunta más amplia de si se está entregando siquiera lo correcto.

## Principios clave

- **DORA mide la canalización, no el valor que fluye a través de ella.** El
  tema 2.1 nombra directamente este vacío; usa la distribución de
  flujo (tema 2.3) para ver lo que DORA no puede.
- **La velocidad y la estabilidad se miden juntas, nunca por separado.** Un
  tablero informado por DORA sin ambas mitades no está realmente usando el
  marco.
- **La consistencia de la definición importa más que el número bruto.** Un
  equipo que pasa de rendimiento "medio" a "alto" en una métrica definida
  de forma consistente es una señal real; comparar dos equipos calculados
  de forma distinta no lo es.
- **DORA mide el sistema, no a las personas.** Aplicar estas métricas a
  ingenieros individuales rompe la base estadística del marco e invita
  precisamente a la manipulación contra la que advierte el tema 1.2.
- **Las cuatro métricas son indicadores indirectos, no objetivos.** Se
  correlacionan con el rendimiento organizacional; perseguir el número en
  sí mismo, desconectado de una mejora de entrega genuina, derrota el
  propósito del marco.

## Recomendaciones

### Instrumenta la frecuencia de despliegue desde la canalización, contando solo publicaciones en producción

La **frecuencia de despliegue** mide con qué frecuencia un equipo publica
con éxito en producción. Cuenta solo los despliegues exitosos en
producción, instrumentados automáticamente a partir de datos de la
canalización de integración continua, nunca autoinformados. Vigila
específicamente la manipulación por sustitución, dividir un cambio
significativo en varios despliegues triviales puramente para inflar el
recuento, rastreando el tamaño del despliegue junto a la frecuencia: un
tamaño medio que se reduce junto a un recuento en aumento es la señal más
clara de que esto está ocurriendo.

### Instrumenta el tiempo de entrega para cambios desde el primer commit hasta producción

El **tiempo de entrega para cambios** mide el tiempo desde el primer commit
de un cambio de código hasta su despliegue exitoso en producción. Reporta
tanto la mediana como un percentil alto, no solo una media, siguiendo la
guía del tema 1.6 sobre datos asimétricos basados en tiempo, y vigila
la deriva de definición en cualquiera de los dos extremos, que favorece el
número sin ninguna mejora genuina.

### Define la tasa de fallos de cambio por escrito antes de comparar entre equipos

La **tasa de fallos de cambio** mide el porcentaje de despliegues que
causan un fallo que requiere remediación, una reversión, una corrección
urgente o un incidente. Esta es la más difícil de las cuatro de definir de
forma consistente, porque "fallo" no es evidentemente objetivo por sí
mismo. Acuerda una definición escrita antes de comparar equipos; sin ella,
una comparación aparentemente justa puede engañar gravemente. Vigila una
mejora sospechosamente rápida sin ningún cambio de proceso subyacente
detrás, la señal más clara de manipulación de definición en lugar de
progreso genuino.

### Mide el tiempo de recuperación desde la detección, no desde el evento de despliegue

El **tiempo de recuperación de un despliegue fallido** mide cuánto tarda en
restaurarse el servicio una vez que un despliegue causa un fallo. Empieza
el reloj en la detección, no en el propio evento de despliegue, para que
el número refleje un retraso de recuperación genuino en lugar de un vacío
de monitorización. Invierte específicamente en capacidad de reversión
automatizada, la palanca individual más común para mejorar esta métrica de
forma genuina en lugar de declarar un incidente resuelto de forma
prematura.

### Usa las métricas de flujo, no DORA, para diagnosticar por qué se movió un número

Cuando una métrica DORA cambia, los cuatro números por sí solos rara vez
explican por qué. Usa la descomposición del tiempo de ciclo (tema 2.6),
la carga de flujo (tema 2.4) y la distribución de flujo (tema 2.3)
como la capa diagnóstica que hay debajo de los números resumen de DORA, y
nunca uses una métrica DORA en una evaluación de desempeño individual, el
mal uso individual más dañino al que está expuesto este marco.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Marco DORA completo, las cuatro métricas emparejadas | Validado por investigación, resiste la manipulación mediante el emparejamiento, permite una comparación justa entre equipos | Guarda silencio sobre qué tipo de valor se está entregando; necesita el Flow Framework al lado para esa imagen |
| DORA como único conjunto de métricas organizador de esta parte | Sencillo, familiar para la mayoría de los líderes de ingeniería | Pasa por alto por completo la pregunta de la mezcla de valor, la razón de este libro para despriorizarlo aquí |
| DORA más el Flow Framework juntos | La mecánica de canalización y la mezcla de valor son ambas visibles | Requiere mantener dos vocabularios de métricas en lugar de uno |
| DORA aplicado a nivel individual | Se siente directamente accionable para algunos gestores | Rompe la validez estadística del marco; fuerte exposición a la ley de Goodhart |

La tensión central es **rigor mecánico frente a legibilidad de negocio**.
Las cuatro métricas de DORA están definidas con precisión y validadas por
investigación, lo que las hace excelentes para comparar el rendimiento de
canalización entre equipos, pero esa misma precisión se limita
estrechamente a la propia canalización y no dice nada sobre si está
fluyendo por ella el trabajo correcto. Resuélvela manteniendo DORA como una
capa de referencia para la salud de la canalización, el lugar propio del
tema 2.10 en la estructura de este libro, mientras usas los temas
del Flow Framework anteriores en esta parte para la pregunta orientada al
negocio de la mezcla de valor, en lugar de intentar que DORA responda a una
pregunta para la que nunca se diseñó.

## Preguntas para debatir con tu equipo

1. **¿Estamos instrumentando las cuatro métricas DORA desde la
   canalización, o algunas son estimaciones autoinformadas?** Un marco
   construido sobre una medición objetiva y validada por investigación
   pierde mucho de su valor en el momento en que un número se convierte en
   una mejor conjetura. Audita la fuente de datos real de cada métrica
   (tema 1.5).

2. **¿Comparten todos los equipos que comparamos usando métricas DORA las
   mismas definiciones de despliegue, cambio y fallo?** Una comparación
   entre equipos que usan definiciones distintas no es realmente una
   comparación, y puede producir juicios injustos sobre el rendimiento
   relativo.

3. **¿Ha usado alguien en nuestra organización una métrica DORA en una
   evaluación de desempeño individual, de forma formal o informal?** Este
   es el mal uso más dañino del marco y a menudo ocurre en silencio.
   Pregunta directamente y prepárate para una respuesta incómoda pero
   necesaria.

4. **¿Podrían nuestros números DORA verse excelentes mientras nuestra
   distribución de flujo (tema 2.3) ha derivado en silencio hacia el
   retrabajo o se ha alejado de las funcionalidades?** Este es precisamente
   el vacío que DORA por sí sola no puede ver. Extrae ambos conjuntos de
   números juntos y comprueba si cuentan una historia consistente.

5. **Cuando una de nuestras métricas DORA se mueve, ¿tenemos los
   diagnósticos de métricas de flujo para explicar por qué?** Un número
   DORA por sí solo te dice que algo cambió, no qué. Comprueba si tus
   equipos pueden responder "por qué subió el tiempo de entrega este mes"
   con datos, o solo con especulación.

6. **¿Cómo cambiarían nuestros cuatro números DORA si intentáramos
   manipular cada uno de forma deliberada, y lo notaríamos?** Recorre la
   frecuencia de despliegue, el tiempo de entrega, la tasa de fallos de
   cambio y el tiempo de recuperación uno por uno, la aplicación práctica
   de la disciplina central del tema 1.2 a este marco específico.

## Enfoque sectorial

**Startup.** Las métricas de velocidad de DORA suelen venir de forma
natural a un equipo pequeño que ya despliega con frecuencia; la disciplina
más difícil es instrumentar la tasa de fallos de cambio y el tiempo de
recuperación con honestidad en lugar de asumir estabilidad porque todavía
nada se ha roto gravemente. Emparejar DORA con una división de elementos
de flujo aunque sea informal (tema 2.2) desde el principio evita
construir una falsa sensación de salud de entrega en torno solo a la
velocidad de canalización.

**Pequeña empresa.** La mayoría de las plataformas modernas de integración
continua y control de versiones exportan datos de frecuencia de despliegue
y tiempo de entrega con una configuración mínima; vincular los despliegues
con los incidentes para la tasa de fallos de cambio suele necesitar más
esfuerzo manual. Empieza con las dos métricas de velocidad y añade el
rastreo de estabilidad en cuanto exista un registro informal de incidentes
al que vincularlo.

**Empresa grande.** El mayor valor que le queda a DORA a esta escala es la
comparación justa y consistente entre equipos para decisiones de inversión
en plataforma. Estandariza las definiciones en toda la organización
(tema 1.4), automatiza la instrumentación de forma centralizada, y
empareja cada informe DORA con una vista de distribución de flujo para que
el liderazgo vea juntos tanto la velocidad de canalización como la mezcla
de valor, no una sin la otra.

**Sector público.** Las métricas DORA todavía le dan a un programa de
modernización una forma defendible y respaldada por investigación de
demostrar la mejora de la mecánica de entrega ante organismos de
supervisión. Reporta las cuatro métricas juntas, nunca eligiendo solo la
mitad favorable, y emparéjalas con la distribución de flujo para que el
informe también responda a la pregunta más difícil e importante de qué
está entregando realmente la canalización más rápida.

## Ejemplos

**Empresa grande.** El programa de modernización de plataforma de una gran
empresa de telecomunicaciones instrumentó las cuatro métricas DORA de
forma consistente en cuarenta equipos de producto y mostró un movimiento
genuino de rendimiento bajo a rendimiento alto en dieciocho meses, la
frecuencia de despliegue subió aproximadamente diez veces, el tiempo de
entrega bajó de semanas a días, la tasa de fallos de cambio se mantuvo
plana. Un miembro de la junta, revisando la presentación, hizo una
pregunta que los números DORA por sí solos no podían responder: cuánto de
esa entrega más rápida era valor nuevo para el cliente frente a
retrabajo. La organización de ingeniería no tenía respuesta hasta que
adoptó la clasificación de elementos de flujo el trimestre siguiente, que
mostró que el trabajo de funcionalidades en realidad había caído como
cuota de la producción total incluso mientras mejoraban los números de
velocidad de DORA, un hallazgo que remodeló las prioridades del programa
para el año siguiente.

**Sector público.** La oficina de modernización de TI de un gobierno
estatal adoptó las métricas DORA como condición contractual para comparar
la capacidad de entrega de varios equipos de proveedores en competencia, un
uso eficaz de la comparabilidad del marco. La alta frecuencia de despliegue
de un proveedor resultó, una vez que se exigió la tasa de fallos de cambio
junto a ella, correlacionarse con una tasa de fallos casi tres veces más
alta que la de sus pares, información que informó directamente la decisión
de renovación de contrato de la oficina. La oficina añadió más tarde un
requisito de distribución de flujo a los mismos contratos después de
descubrir que el proveedor con los mejores números DORA también era el que
dedicaba la menor cuota de capacidad al trabajo de remediación de
seguridad que el contrato exigía específicamente.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de adoptar bien DORA, dentro de su alcance propio, es una
respuesta defendible y basada en evidencia a "¿nuestra canalización de
entrega se está volviendo más rápida y más segura?", que sigue siendo una
de las preguntas más abordables de responder con confianza en ingeniería.
Esa respuesta justifica la inversión en plataforma y herramientas con
números reales, y le permite al liderazgo comparar inversiones en
competencia sobre una base justa y consistente, exactamente como siempre
lo ha hecho.

El coste total de propiedad es el trabajo de integración que vincula los
eventos de despliegue con los registros de incidentes para la tasa de
fallos de cambio y el tiempo de recuperación, nada trivial en un panorama
de herramientas grande y heterogéneo. El coste adicional de emparejar DORA
con los temas del Flow Framework anteriores en esta parte es
comparativamente pequeño, ya que la clasificación de elementos de flujo es
una convención de informe superpuesta al trabajo existente, no un sistema
de medición paralelo, y el retorno, detectar precisamente el punto ciego de
mezcla de valor que ilustra el ejemplo de telecomunicaciones de arriba,
merece bien esa inversión adicional modesta.

## Antipatrones y errores comunes

- **Tratar DORA como la imagen completa de la salud de entrega:** el
  vector de manipulación que la colocación de este tema está diseñada
  para contrarrestar. Una organización puede presentar números DORA
  genuinamente excelentes, despliegues rápidos, frecuentes y estables,
  mientras su valor entregado real ha derivado en silencio hacia el
  retrabajo o se ha alejado de las funcionalidades, y las cuatro métricas
  de DORA por sí solas nunca revelarán ese cambio porque nunca se
  diseñaron para medirlo. La barrera de contención es emparejar cada
  informe DORA con la distribución de flujo (tema 2.3), para que una
  canalización rápida y estable que entrega la mezcla equivocada de
  trabajo sea visible en lugar de confundirse con salud de entrega
  genuina.
- **Reportar solo la mitad de velocidad de DORA:** derrota el hallazgo
  central del marco de que la velocidad y la estabilidad se mueven juntas
  en quienes rinden mejor.
- **Usar métricas DORA en evaluaciones de desempeño individuales:** rompe
  la validez estadística del marco e invita a una manipulación fuerte.
- **Comparar equipos con definiciones inconsistentes:** produce
  comparaciones que parecen justas pero no lo son.
- **Números DORA autoinformados en lugar de instrumentados desde la
  canalización:** introduce precisamente el sesgo que el marco se diseñó
  para eliminar.
- **Tratar DORA como diagnóstico en lugar de resumen:** deja a un equipo
  incapaz de explicar por qué se movió un número sin la capa de métricas
  de flujo que hay debajo.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas DORA, si se rastrean, son
  autoinformadas, definidas de forma inconsistente, y nunca se emparejan
  con datos de flujo.
- **Nivel 2, Desarrollar:** Algunos equipos instrumentan DORA desde la
  canalización, pero las definiciones varían y no existe ninguna
  contraparte de distribución de flujo con la que contrastar.
- **Nivel 3, Estandarizar:** Las cuatro métricas DORA se instrumentan de
  forma consistente a partir de datos de canalización e incidentes, con
  definiciones compartidas, y se muestran rutinariamente junto a la
  distribución de flujo.
- **Nivel 4, Gestionar:** DORA y las métricas de flujo se revisan juntas
  como un emparejamiento estándar en cada nivel de la organización, y DORA
  nunca se usa para evaluación individual.
- **Nivel 5, Orquestar:** La organización puede señalar casos concretos en
  los que la distribución de flujo detectó un problema de mezcla de valor
  que unos excelentes números DORA por sí solos habían ocultado, y usa
  ambos marcos de forma deliberada para las preguntas distintas que cada
  uno responde.

## Ideas para el debate

1. ¿Dónde nos sitúan hoy honestamente nuestras cuatro métricas DORA en el espectro de niveles de rendimiento?
2. ¿Podrían nuestros números DORA verse excelentes mientras nuestra distribución de flujo ha derivado en silencio? ¿Lo hemos comprobado alguna vez?
3. ¿Ha usado alguien alguna vez un número DORA para juzgar a una persona, aunque fuera de manera informal?
4. Si un competidor publicara sus números DORA, ¿compararían favorablemente los nuestros, y esa comparación realmente nos diría quién está entregando más valor real?

## Conclusiones clave

- Las cuatro métricas de DORA, **frecuencia de despliegue, tiempo de
  entrega, tasa de fallos de cambio y tiempo de recuperación**, emparejan
  la velocidad con la estabilidad por diseño y siguen genuinamente
  validadas por investigación.
- Este libro coloca DORA **al final de esta parte** porque mide la
  canalización, no el valor que fluye a través de ella; empárejalo con la
  distribución de flujo (tema 2.3) para obtener la imagen completa.
- El vector de manipulación central del tema es **confundir unos
  números DORA excelentes con una salud de entrega completa**; la barrera
  de contención es reportar siempre DORA junto a la distribución de flujo.
- **Nunca uses métricas DORA en evaluaciones de desempeño individuales**;
  la validez del marco depende de una medición a nivel de sistema, no
  individual.
- Usa las **métricas de flujo como la capa diagnóstica** debajo de los
  números resumen de DORA cuando uno de ellos se mueva.

## Referencias y lecturas adicionales

- Forsgren, Nicole, Jez Humble, y Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. Programa de Investigación y Evaluación de DevOps.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, y George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, y John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
