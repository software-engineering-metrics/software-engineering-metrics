# 2.3 Velocidad de flujo y distribución de flujo

## Visión general y motivación

La **velocidad de flujo** es el número de elementos de flujo (capítulo 2.2)
completados en un periodo dado, la medida de
[rendimiento](https://en.wikipedia.org/wiki/Throughput) del Flow
Framework. La **distribución de flujo** es la proporción de cada tipo de
elemento de flujo, funcionalidades, defectos, riesgo y deuda, entre los
elementos completados en ese mismo periodo. Las dos métricas están
diseñadas para leerse juntas: la velocidad sola responde "cuánto enviamos",
y la distribución sola responde "qué tipo de trabajo fue", pero ninguna de
las dos preguntas significa mucho sin la otra. Un equipo puede subir su
velocidad mientras su distribución se desplaza en silencio de
funcionalidades hacia retrabajo de defectos, lo que se ve como aceleración
en un gráfico de velocidad y en realidad es un síntoma de calidad en
declive.

Este emparejamiento es la misma disciplina que el capítulo 1.2 pide para
cada familia de métricas de este libro: nunca reportar un número de
velocidad sin la barrera de contención que muestra qué costó esa velocidad.
La velocidad de flujo es la generalización más directa de esta parte de una
métrica de rendimiento, más cercana en espíritu a la frecuencia de
despliegue (capítulo 2.10) que a cualquier otro número único de este libro,
pero consciente del tipo de elemento de una forma que la frecuencia de
despliegue nunca fue. La frecuencia de despliegue te dice con qué frecuencia
el código llega a producción; la velocidad de flujo, emparejada con la
distribución, te dice con qué frecuencia el valor llega a producción y qué
tipo de valor es.

Para los equipos grandes que gestionan muchas cadenas de valor simultáneas,
este emparejamiento expone un patrón que un único número de rendimiento
oculta por completo: una cadena de valor cuya velocidad se ve sana mientras
su distribución ha derivado en silencio hacia trabajo casi puramente de
funcionalidades, privando en silencio a la capacidad de deuda y riesgo que
el capítulo 2.2 advertía que necesita protección deliberada. Tanto las
organizaciones grandes que comparan el rendimiento entre líneas de producto
como las agencias del sector público que reportan la producción de entrega
a organismos de supervisión necesitan este emparejamiento para evitar
confundir la producción bruta con un progreso genuino y sostenible.

## Principios clave

- **La velocidad sin distribución oculta lo que realmente se envió.** Un
  recuento de elementos en aumento no dice nada sobre si ese recuento es
  sano, manipulado o inclinado en silencio hacia el trabajo más fácil
  disponible.
- **La distribución sin velocidad oculta la escala.** Un reparto
  porcentual que se ve sano significa poco si no sabes también cuánto
  trabajo total representa.
- **Las dos métricas deben reportarse juntas, siempre.** Esta es una
  aplicación directa del principio de emparejamiento con barrera de
  contención del capítulo 1.2 aplicado específicamente a los datos de
  flujo.
- **La velocidad está expuesta a la misma manipulación por sustitución que
  cualquier métrica de recuento de elementos.** Dividir trabajo difícil en
  muchos elementos pequeños y fáciles infla el recuento sin entregar más
  valor de forma proporcional.
- **Una distribución sana depende del contexto, no es un objetivo fijo.**
  El capítulo 2.2 lo cubre en profundidad; la velocidad y la distribución
  siempre deberían interpretarse frente al objetivo que ese contexto
  implica.

## Recomendaciones

### Reporta la velocidad de flujo como una línea de tendencia, nunca como un número de un único periodo

El recuento de elementos de un único periodo es ruidoso y fácil de
malinterpretar. Traza la velocidad de flujo a lo largo de varios periodos
consecutivos y mira la tendencia, no ningún punto de datos aislado, la
misma disciplina que recomienda el capítulo 1.6 para cualquier métrica de
serie temporal propensa a la variación natural.

### Nunca presentes la velocidad de flujo sin su distribución al lado

Trata esto como una regla estricta para cualquier tablero o informe, no
como algo opcional. Un gráfico de velocidad mostrado solo invita
precisamente a la mala interpretación con la que abre este capítulo: un
rendimiento en aumento que en realidad es una cuota creciente de
retrabajo o trabajo fácil de funcionalidades desplazando a la capacidad de
deuda y riesgo. Pon ambas en la misma vista, siempre.

### Pondera la velocidad por tamaño o complejidad cuando los tamaños de los elementos varíen mucho

El recuento bruto de elementos trata un cambio de configuración de una
línea y una migración arquitectónica de varias semanas como equivalentes,
lo que invita a la misma manipulación por sustitución que este libro ya
nombró para la frecuencia de despliegue (capítulo 2.10): dividir trabajo
difícil en muchos elementos pequeños infla el recuento sin entregar más de
forma proporcional. Donde los tamaños de los elementos varíen mucho,
pondera la velocidad con una estimación aproximada de tamaño o complejidad,
o rastrea el tamaño medio de los elementos junto al recuento bruto, para
que un tamaño medio que se reduce junto a un recuento que sube sea visible
en lugar de estar oculto.

### Vigila la distribución de flujo en busca de deriva, no solo su instantánea actual

La señal más útil de la distribución de flujo rara vez son los porcentajes
exactos de este periodo; es la dirección del cambio a lo largo de varios
periodos. Una deriva constante, las funcionalidades subiendo mientras la
deuda y el riesgo se reducen en silencio, merece plantearse a las partes
interesadas bastante antes de que se convierta en el tipo de problema de
calidad o seguridad que el capítulo 2.2 advierte que se acumula de forma
invisible bajo un patrón de fábrica de funcionalidades.

### Compara la velocidad de flujo entre cadenas de valor solo con verdadero cuidado

Dos cadenas de valor con distinta granularidad de elementos, distinto
tamaño de equipo o distinta fase de producto no son directamente
comparables solo por la velocidad bruta, el mismo problema de justicia que
el capítulo 2.10 nombra para la frecuencia de despliegue entre equipos. Usa
la velocidad primero para la propia tendencia de una cadena de valor, y
solo intenta la comparación entre cadenas de valor después de confirmar
definiciones de elementos y granularidad genuinamente comparables.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Solo velocidad de recuento bruto de elementos | Sencilla de calcular y explicar | Expuesta a la manipulación por sustitución; oculta qué tipo de valor se envió |
| Velocidad emparejada con distribución | Muestra juntas tanto la escala como la mezcla de valor | Requiere una clasificación disciplinada de elementos de flujo (capítulo 2.2) para ser significativa |
| Velocidad ponderada por tamaño | Resiste la manipulación por sustitución mediante la división del tamaño de elementos | Requiere un método de dimensionamiento consistente y acordado en todo el equipo |
| Comparación de velocidad entre cadenas de valor | Útil para decisiones de inversión a nivel de cartera | Fácilmente injusta sin confirmar definiciones de elementos genuinamente comparables |

La tensión central es **sencillez frente a resistencia a la manipulación**.
El recuento bruto de elementos es el número más fácil de calcular y
explicar, pero también es el más fácil de inflar dividiendo trabajo difícil
en muchas piezas pequeñas. Resuélvela manteniendo simple la métrica
principal, velocidad bruta emparejada con distribución, y reservando la
ponderación por tamaño para las cadenas de valor donde se sabe que los
tamaños de los elementos varían lo bastante como para que el recuento
simple se haya vuelto activamente engañoso.

## Preguntas para debatir con tu equipo

1. **Cuando reportamos la velocidad de flujo, ¿se muestra siempre la
   distribución de flujo junto a ella, o a veces la velocidad aparece
   sola?** Un número de velocidad sin su distribución es una imagen
   incompleta según el propio principio central de este capítulo. Comprueba
   tus tableros e informes reales en busca de este vacío.

2. **¿Ha cambiado nuestro tamaño medio de elemento junto con una velocidad
   en aumento, y lo sabríamos si hubiera cambiado?** Un tamaño medio que se
   reduce junto a un recuento que sube es la firma específica de la
   manipulación por sustitución aplicada a los elementos de flujo. Extrae
   los datos reales en lugar de asumir que el patrón está ausente.

3. **¿Hemos comparado alguna vez nuestra velocidad con la de otro equipo
   sin confirmar que nuestras definiciones de elementos y granularidad
   realmente coinciden?** Una comparación injusta aquí puede presionar a un
   equipo a manipular sus propios números solo para parecer comparable,
   haciendo eco del mismo riesgo que este libro ya nombra para la
   frecuencia de despliegue.

4. **¿Ha derivado nuestra distribución de flujo en una dirección durante
   los últimos periodos, y lo decidió alguien de forma deliberada?** Una
   deriva lenta es fácil de pasar por alto periodo a periodo. Traza varios
   periodos juntos y busca una tendencia con honestidad antes de asumir que
   el reparto actual es estable.

5. **Si alguien quisiera inflar nuestra velocidad de flujo sin hacer más
   trabajo real, ¿cuál sería la forma más fácil de hacerlo, y lo
   detectarían nuestros informes actuales?** Recorre la mecánica concreta
   de dividir elementos difíciles en fáciles, y debate si tu tablero
   realmente revelaría ese patrón.

6. **¿Llegan nuestros números de velocidad y distribución juntos alguna vez
   a las partes interesadas de negocio, o solo viaja hacia arriba el
   titular de velocidad?** El principio de emparejamiento solo protege
   contra la mala interpretación si las personas que toman decisiones a
   partir de los datos realmente ven ambas mitades.

## Enfoque sectorial

**Startup.** La velocidad de flujo suele ser fácil de rastrear de manera
informal a esta escala, ya que todo el equipo ya tiene una noción
aproximada del rendimiento. La disciplina útil es emparejarla con la
distribución incluso de manera informal, para que quien funda la empresa
no confunda un recuento creciente de cierre de tickets con un progreso
genuino de funcionalidades cuando el recuento en realidad está dominado por
corrección de errores en etapa temprana.

**Pequeña empresa.** Rastrea la velocidad y la distribución juntas desde
cualquier herramienta ligera que ya uses para la clasificación de
elementos de flujo (capítulo 2.2); no se necesita ninguna plataforma
analítica dedicada a esta escala. El hábito de verlas siempre lado a lado
importa más que cualquier sofisticación de la herramienta.

**Empresa grande.** La comparación de velocidad entre cadenas de valor
resulta tentadora a esta escala para la priorización a nivel de cartera, y
también es donde el riesgo de injusticia es mayor, ya que distintas líneas
de producto tienen legítimamente una granularidad de elementos muy
distinta. Invierte en confirmar definiciones comparables antes de usar
comparaciones de velocidad para justificar decisiones de inversión entre
equipos.

**Sector público.** La velocidad de flujo emparejada con la distribución le
da a un líder de tecnología del sector público una base de evidencia mucho
más sólida para reportar la producción de entrega a organismos de
supervisión que el rendimiento bruto por sí solo, porque puede mostrar no
solo cuánto se envió sino que la mezcla refleja una asignación deliberada y
defendible entre funcionalidad nueva, remediación de defectos y gestión de
riesgo.

## Ejemplos

**Empresa grande.** El equipo de plataforma de un proveedor de software
reportó una velocidad de flujo en aumento constante durante tres
trimestres consecutivos, una tendencia que el liderazgo celebró como una
entrega que se aceleraba. Un análisis más detenido de la distribución de
flujo, solicitado solo después de una escalada de un cliente por errores
recurrentes, reveló que la cuota de "funcionalidades" de esa velocidad
creciente en realidad había caído del 70% al 45% en el mismo periodo, con
elementos de corrección de defectos llenando el vacío. El equipo había
estado enviando más elementos, pero una proporción decreciente de ellos era
valor nuevo; el resto era retrabajo que el gráfico de velocidad por sí solo
había ocultado por completo.

**Sector público.** El equipo de la plataforma de datos de una agencia
nacional de estadística rastreaba la velocidad de flujo como su métrica de
entrega principal para un informe anual a su consejo de supervisión.
Cuando un miembro del consejo preguntó qué proporción de esa velocidad
representaba capacidad nueva orientada al público, el equipo descubrió que
nunca había desglosado el número por tipo de elemento de flujo y no pudo
responder directamente. La agencia adoptó posteriormente un informe
emparejado de velocidad y distribución, que reveló que el trabajo de
riesgo y cumplimiento, impulsado por una nueva regulación de protección de
datos, había consumido legítimamente una cuota creciente de capacidad, una
asignación defendible que el consejo aceptó con facilidad una vez que se
mostró de forma explícita en lugar de quedar implícita en una caída de
velocidad sin explicar.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de emparejar la velocidad con la distribución es un relato más
honesto y más defendible de la producción de entrega del que ofrece
cualquiera de los dos números por sí solo. El ejemplo del proveedor de
software de arriba, descubrir que una velocidad en aumento en realidad
reflejaba una producción decreciente de funcionalidades, es exactamente el
tipo de mala interpretación que previene este emparejamiento, y detectar
ese patrón pronto es mucho más barato que descubrirlo solo después de que
un problema de calidad de cara al cliente fuerce la pregunta.

El coste total de propiedad es mínimo una vez que la clasificación de
elementos de flujo (capítulo 2.2) ya está en marcha: la distribución es una
agregación directa de elementos ya clasificados, y la disciplina de mostrar
ambas métricas juntas es una convención de informe, no una inversión
técnica. La mayor parte del coste de las recomendaciones de este capítulo
ya se pagó cuando la organización adoptó en primer lugar una clasificación
honesta de elementos de flujo.

## Antipatrones y errores comunes

- **Reportar la velocidad de flujo sin distribución:** el vector de
  manipulación central de este capítulo. Un equipo bajo presión de entrega
  puede subir el recuento de elementos prefiriendo trabajo fácil de
  funcionalidades pequeñas y evitando elementos más difíciles de deuda,
  riesgo o defectos, o dividiendo elementos grandes en muchos pequeños, y
  un gráfico de velocidad mostrado solo se leerá como aceleración en lugar
  del cambio real en lo que se está entregando. La barrera de contención es
  la misma disciplina de emparejamiento que el capítulo 1.2 pide a lo
  largo de este libro: nunca mostrar la velocidad sin la distribución, y
  comprobar periódicamente el tamaño medio de elemento junto al recuento
  para detectar específicamente la división.
- **Comparar la velocidad entre cadenas de valor con distinta granularidad
  de elementos:** produce una comparación injusta y engañosa.
- **Tratar la distribución de un único periodo como estable:** pasa por
  alto una deriva lenta y significativa que solo una vista de tendencia
  revela.
- **Dejar que solo el titular de velocidad llegue a las partes interesadas
  de negocio:** renuncia a todo el valor protector del principio de
  emparejamiento.
- **Ignorar el tamaño medio de los elementos mientras se celebra una
  velocidad en aumento:** pasa por alto la firma específica de la
  manipulación por sustitución.
- **Fijar un objetivo de velocidad sin ninguna referencia a la
  distribución:** invita precisamente a la manipulación que este capítulo
  advierte por su nombre.

## Modelo de madurez

- **Nivel 1, Iniciar:** La velocidad de flujo, si se rastrea, se reporta
  sola sin datos de distribución, y nadie ha comprobado si hay
  manipulación por sustitución.
- **Nivel 2, Desarrollar:** Algunos equipos rastrean la distribución, pero
  no se empareja de forma consistente con la velocidad en los informes ni
  se revisa como tendencia.
- **Nivel 3, Estandarizar:** La velocidad y la distribución se reportan
  siempre juntas, se ven como tendencias, y se monitoriza el tamaño medio
  de elemento para detectar la manipulación por sustitución.
- **Nivel 4, Gestionar:** La deriva de distribución se investiga de forma
  proactiva antes de que se convierta en un problema de calidad o
  seguridad, y las comparaciones de velocidad entre cadenas de valor solo
  se hacen después de confirmar definiciones de elementos genuinamente
  comparables.
- **Nivel 5, Orquestar:** La velocidad y la distribución informan
  directamente las decisiones de inversión a nivel de cartera, y la
  organización puede señalar casos concretos donde se detectó y corrigió
  una deriva de distribución antes de que causara un fallo visible.

## Ideas para el debate

1. ¿Incluye siempre nuestro informe de velocidad de flujo la distribución, o hemos mostrado alguna vez una sin la otra?
2. ¿Ha cambiado recientemente nuestro tamaño medio de elemento de flujo junto con un cambio en la velocidad?
3. ¿Sabríamos si nuestra distribución de flujo hubiera derivado de forma constante durante los últimos trimestres?
4. ¿Qué haría falta para que alguien inflara nuestra velocidad sin entregar más valor real, y lo notaríamos?

## Conclusiones clave

- La **velocidad de flujo** mide el rendimiento; la **distribución de
  flujo** mide qué tipo de trabajo representa ese rendimiento. Repórtalas
  juntas, siempre.
- Este emparejamiento es una aplicación directa del **principio de
  barrera de contención** del capítulo 1.2: nunca mostrar un número de
  velocidad sin el contexto de lo que costó.
- El vector de manipulación central del capítulo es **reportar la
  velocidad sola**, lo que puede ocultar un giro hacia trabajo fácil de
  funcionalidades o una división de elementos que infla el recuento sin
  entregar valor proporcional.
- La **deriva de distribución** es más visible como tendencia a lo largo
  de varios periodos, no en la instantánea de un único periodo.
- Las **comparaciones de velocidad entre cadenas de valor** necesitan
  definiciones de elementos genuinamente comparables para ser justas; sin
  eso, engañan más de lo que informan.

## Referencias y lecturas adicionales

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, y Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
