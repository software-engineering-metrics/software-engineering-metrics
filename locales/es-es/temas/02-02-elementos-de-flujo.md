# 2.2 Elementos de flujo: funcionalidades, defectos, riesgos y deuda

## Visión general y motivación

Un **elemento de flujo** es la unidad de trabajo del Flow Framework, y cada
elemento de flujo pertenece a exactamente uno de cuatro tipos:
**funcionalidades**, valor o capacidad de negocio nuevos entregados a un
cliente; **defectos**, correcciones de calidad para errores encontrados por
usuarios o por pruebas; **riesgos**, trabajo de seguridad, cumplimiento,
privacidad y gobernanza que protege al negocio; y **deuda**, [deuda
técnica](https://en.wikipedia.org/wiki/Technical_debt), mejora
arquitectónica y trabajo de infraestructura que habilita la velocidad
futura. El capítulo 2.1 presentó el marco al que pertenecen estas cuatro
categorías; este capítulo profundiza en la propia taxonomía, porque las
categorías solo entregan valor si un equipo clasifica su trabajo en ellas
con honestidad y consistencia.

La propiedad que define a los elementos de flujo es que la asignación entre
los cuatro tipos es un **juego de suma cero**: existe una cantidad fija de
capacidad de ingeniería en cualquier periodo dado, y cada hora dedicada a
una funcionalidad es una hora no dedicada a deuda, riesgo o trabajo de
defectos. Esto no es un hecho nuevo sobre la entrega de software, todo
líder de ingeniería ya sabe que la capacidad es finita, pero la mayoría de
las organizaciones no tienen ninguna forma consistente y honesta de ver el
reparto real. La velocidad de sprint cuenta puntos de historia sin importar
el tipo; un backlog que se vacía se ve idéntico tanto si el trabajo detrás
era un flujo de pago nuevo como si eran tres meses de remediación de
seguridad poco vistosa. Los elementos de flujo existen específicamente para
hacer visible ese reparto invisible.

Para los equipos grandes, esta visibilidad cambia la naturaleza de una
conversación sobre recursos. En lugar de que un líder de ingeniería haga un
argumento sin cuantificar de que "necesitamos más tiempo para deuda
técnica", la clasificación de elementos de flujo produce un número real, la
deuda consumió el 30% de la capacidad del trimestre pasado, que se puede
discutir, defender y ajustar de forma deliberada con las partes
interesadas de negocio. Tanto las organizaciones grandes que gestionan
muchas líneas de producto simultáneas como las agencias del sector público
que equilibran nueva funcionalidad orientada a la ciudadanía frente al
riesgo de sistemas heredados dependen de este tipo de compensación
defendible y cuantificada mucho más que de una sensación privada e informal
de que "estamos dedicando demasiado tiempo al mantenimiento".

## Principios clave

- **Cada elemento de flujo pertenece a exactamente un tipo.** Forzar una
  clasificación única, en lugar de permitir una mezclada o ambigua, es lo
  que hace que la taxonomía sea útil para los informes agregados.
- **La asignación es de suma cero, no aditiva.** Más capacidad para
  funcionalidades es necesariamente menos capacidad para defectos, riesgo y
  deuda en el mismo periodo.
- **No existe una distribución universalmente sana.** Un producto joven en
  fase de crecimiento debería inclinarse legítimamente hacia
  funcionalidades; un sistema maduro que carga con un riesgo técnico real
  debería inclinarse legítimamente hacia trabajo de deuda y riesgo.
- **El trabajo de deuda y riesgo se subinforma crónicamente sin esta
  disciplina.** Tiende a ocurrir en silencio, absorbido dentro de "tareas de
  ingeniería" genéricas, hasta que la clasificación de elementos de flujo lo
  saca a la luz.
- **La calidad de la clasificación determina todo el valor de la
  taxonomía.** Una taxonomía aplicada de forma inconsistente o manipulada a
  posteriori produce números que engañan activamente en lugar de informar.

## Recomendaciones

### Clasifica cada elemento en el momento de la entrada, usando una definición escrita para cada tipo

Acuerda una definición concisa y escrita de qué cuenta como funcionalidad,
defecto, riesgo y deuda en tu contexto específico, y exige que cada pieza
nueva de trabajo se clasifique frente a esa definición en el momento en que
entra en la cadena de valor, no después de completarse. Una definición
acordada de antemano resiste la tentación de clasificar de forma
retroactiva basándose en cómo acabó viéndose una pieza de trabajo, que es
precisamente el riesgo de manipulación que este capítulo nombra directamente
más abajo.

### Reporta la distribución de flujo como una tendencia, no como una instantánea única

La distribución de un único periodo te dice menos que la tendencia a lo
largo de varios periodos. Una deriva constante hacia un tipo de elemento,
las funcionalidades subiendo mientras la deuda se reduce en silencio
trimestre tras trimestre, es una señal mucho más fuerte que el número de
cualquier periodo único, y suele ser el patrón que merece plantearse a las
partes interesadas antes de que se convierta en una crisis, no después.

### Fija una distribución objetivo deliberada junto con las partes interesadas de negocio, no solo con ingeniería

Decide, junto con el liderazgo de producto y de negocio, qué aspecto tiene
una distribución sana para la fase actual de tu cadena de valor específica,
y revisa ese objetivo periódicamente en lugar de dejar que derive por
defecto. Un producto joven en fase de crecimiento y un sistema maduro en
fase de estabilidad tienen objetivos sanos legítimamente distintos, y el
propio objetivo debería ser una decisión de negocio negociada, no algo que
ingeniería decide en silencio por su cuenta.

### Contrasta la clasificación de elementos de flujo con evidencia independiente

Compara periódicamente tu distribución de flujo con métricas que no
dependan de la autoclasificación: la tasa de defectos escapados (capítulo
5.1), la medición de deuda técnica (capítulo 4.5) y las métricas de gestión
de vulnerabilidades (capítulo 6.4). Si los defectos o las vulnerabilidades
suben mientras las cuotas de elementos de flujo de "defectos" y "riesgo" se
mantienen planas o se reducen, ese desajuste es la señal más clara
disponible de que la clasificación se ha desviado de la realidad.

### Vigila específicamente el patrón de fábrica de funcionalidades

Cuando la distribución de flujo muestra que las funcionalidades absorben de
forma consistente casi toda la capacidad, trimestre tras trimestre, sin que
el trabajo de deuda y riesgo suba nunca por encima de una cuota simbólica,
ese patrón (a veces llamado "fábrica de funcionalidades") suele significar
que la deuda y el riesgo están siendo privados de capacidad, no que el
sistema genuinamente no necesite mantenimiento. Este patrón resulta cómodo
a corto plazo y caro más adelante, apareciendo eventualmente como una
crisis de calidad o de seguridad que llega sin ningún aviso en el gráfico
de distribución de flujo, porque la acumulación subyacente nunca fue
visible.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin clasificación formal (backlog genérico) | Sin sobrecarga de proceso | El trabajo de deuda, riesgo y defectos permanece invisible; difícil defender decisiones de recursos |
| Clasificación de elementos de flujo de cuatro tipos | Hace visible y negociable la asignación de capacidad con las partes interesadas | Requiere disciplina en el momento de la entrada y una definición escrita y acordada por tipo |
| Clasificación de grano más fino (muchos subtipos) | Más detalle diagnóstico | Más esfuerzo de clasificación; más números que explicar a las partes interesadas |
| Clasificación retroactiva | Más fácil de aplicar, sin cambio de proceso por adelantado | Muy expuesta a la manipulación; la clasificación deriva hacia lo que mejor se vea |

La tensión central es **disciplina de clasificación frente a sobrecarga de
proceso**. Una taxonomía de cuatro tipos es deliberadamente gruesa, lo
bastante gruesa como para que clasificar un elemento lleve segundos, no un
debate, pero esa simplicidad solo se sostiene si la disciplina de
clasificar en el momento de la entrada, frente a una definición escrita, se
mantiene genuinamente. Resuélvela manteniendo la taxonomía exactamente así
de simple, cuatro tipos, no más, e invirtiendo cualquier rigor adicional en
el paso de auditoría (contrastar con evidencia independiente) en lugar de
en un esquema de clasificación más elaborado que se erosiona bajo una carga
de trabajo real.

## Preguntas para debatir con tu equipo

1. **Si clasificáramos todo lo que envió nuestro equipo el trimestre
   pasado, ¿qué aspecto tendría el reparto real entre funcionalidades,
   defectos, riesgo y deuda, y sorprendería eso a nuestras partes
   interesadas?** La mayoría de los equipos nunca han hecho este ejercicio
   con honestidad. Inténtalo con datos reales antes de asumir que ya
   conoces la respuesta.

2. **¿Tenemos una definición escrita y acordada de qué cuenta como
   funcionalidad frente a deuda frente a riesgo en nuestro contexto
   específico, o depende la clasificación de quien esté etiquetando el
   ticket?** Una definición informal e inconsistente produce números que
   parecen precisos pero que en realidad no son comparables de un periodo a
   otro.

3. **¿Ha derivado alguna vez nuestra distribución de flujo de forma
   constante hacia un tipo de elemento sin que nadie lo decidiera de forma
   deliberada?** Una deriva lenta es fácil de pasar por alto periodo a
   periodo pero evidente en cuanto se traza como tendencia. Extrae varios
   periodos de datos, si los tienes, y busca este patrón con honestidad.

4. **¿Qué aspecto tendría una distribución de flujo sana para la fase
   actual de nuestro producto, y hemos acordado realmente ese objetivo con
   las partes interesadas de negocio?** La mayoría de las organizaciones
   nunca han hecho explícito este objetivo, lo que significa que no existe
   una base compartida para notar cuándo la distribución real se aleja de
   él.

5. **¿Coincide nuestra distribución de flujo con evidencia independiente,
   como la tasa de defectos escapados o el recuento de vulnerabilidades
   abiertas, o hay un desajuste que merece investigarse?** Un desajuste
   aquí es la señal más clara disponible de que la clasificación se ha
   desviado de lo que el trabajo realmente es.

6. **¿Podría alguien de nuestro equipo reetiquetar en silencio un elemento
   de deuda o riesgo como funcionalidad bajo presión de entrega, y lo
   notaríamos actualmente si lo hiciera?** Este es el riesgo de
   manipulación central del capítulo expuesto directamente. Debate si tu
   proceso actual realmente lo detectaría, no solo si alguien lo haría de
   forma deliberada.

## Enfoque sectorial

**Startup.** La clasificación formal a menudo se siente como sobrecarga
cuando todo el equipo ya sabe en qué está trabajando cada persona. El
mínimo útil a esta escala es simplemente nombrar en voz alta las cuatro
categorías durante la planificación, para que el trabajo de deuda y riesgo
no se despriorice en silencio cada vez que la fecha límite de una
funcionalidad crea presión, un patrón que se agrava mal en cuanto crecen
tanto la base de código como el equipo.

**Pequeña empresa.** Un único campo personalizado o etiqueta en tu
herramienta de seguimiento existente basta para capturar el tipo de
elemento de flujo sin ninguna inversión en herramientas dedicadas. La
disciplina de clasificar de forma consistente en el momento de la entrada
importa mucho más que cualquier sofisticación de la herramienta.

**Empresa grande.** La clasificación de elementos de flujo es donde este
marco se gana su valor a escala, porque una organización grande que
gestiona muchas cadenas de valor simultáneas no tiene ninguna otra forma
fiable y agregada de ver cómo se reparte realmente la capacidad entre
funcionalidades, defectos, riesgo y deuda. Invierte en clasificación
integrada con herramientas y en contrastes periódicos con evidencia
independiente; la clasificación manual e improvisada no sobrevive a la
escala organizacional real.

**Sector público.** La distribución de flujo le da a un líder de tecnología
del sector público una respuesta defendible y cuantificada cuando se le
pregunta por qué no se están enviando más funcionalidades nuevas orientadas
a la ciudadanía, cuando la respuesta honesta es que la carga de riesgo y
deuda de un sistema heredado está consumiendo una cuota genuina y
justificable de capacidad. Hacer explícita y negociada esa compensación, en
lugar de absorberla en silencio, tiende a generar más confianza con los
organismos de supervisión que una apelación sin cuantificar a la
"necesidad técnica".

## Ejemplos

**Empresa grande.** El equipo de la plataforma de comercio electrónico de
una gran empresa minorista creía, según la velocidad de sprint, que estaba
entregando una producción constante de funcionalidades. Un primer ejercicio
honesto de clasificación de elementos de flujo encontró que las
"funcionalidades" en realidad solo constituían el 40% del trabajo
completado, con la deuda, gran parte de ella ligada a un sistema de pago
envejecido, consumiendo casi un tercio de la capacidad sin que nunca se
hubiera nombrado como tal en ningún informe anterior. Presentar este
reparto al liderazgo de producto, junto con una tasa creciente de defectos
escapados que corroboraba la carga de deuda, aseguró un presupuesto
dedicado de modernización que el equipo había solicitado sin éxito durante
dos años usando solo argumentos cualitativos.

**Sector público.** El equipo de licencias digitales de una agencia estatal
de vehículos motorizados clasificó su backlog por primera vez después de
que una interrupción pública llamara la atención sobre la estabilidad del
sistema subyacente. El ejercicio reveló que el trabajo de "riesgo",
principalmente parcheo de seguridad que se había despriorizado
repetidamente en favor de funcionalidades visibles orientadas a la
ciudadanía, se había reducido a menos del 5% de la capacidad durante el año
anterior, un patrón que nunca había sido visible en los informes estándar
del equipo. El liderazgo de la agencia usó el hallazgo para exigir en
adelante una asignación mínima de trabajo de riesgo, respaldada por los
datos de distribución de flujo en lugar de solo por una declaración de
política general.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de la clasificación de elementos de flujo es una base defendible
y cuantificada para decisiones de recursos que antes se argumentaban de
forma cualitativa y a menudo se perdían frente a lo que fuera más visible
para las partes interesadas. El ejemplo minorista de arriba, asegurar un
presupuesto de modernización con datos de capacidad reales en lugar de una
apelación general, es el patrón que esta disciplina produce de forma
fiable: un número concreto es mucho más difícil de descartar que una
impresión general de que "necesitamos más tiempo para mantenimiento".

El coste total de propiedad es bajo una vez que se acuerdan la taxonomía y
sus definiciones: la clasificación añade segundos a la entrada, no una
carga de proceso significativa, y la integración de herramientas necesaria
para rastrearla suele ser un único campo personalizado o etiqueta. El coste
real y continuo es la disciplina de sostener una clasificación honesta bajo
presión de entrega, que es por lo que el contraste periódico con evidencia
independiente importa tanto como la adopción inicial.

## Antipatrones y errores comunes

- **Clasificar el trabajo de forma retroactiva, después de conocer el
  resultado:** el vector de manipulación central de este capítulo. Bajo
  presión de entrega, un equipo puede etiquetar en silencio trabajo de
  deuda o riesgo como funcionalidad a posteriori, o redondear un elemento
  ambiguo hacia el tipo que mejor se vea en el gráfico de distribución, sin
  que ninguna decisión individual parezca deshonesta por sí sola. La
  barrera de contención es la clasificación en el momento de la entrada
  frente a una definición escrita, combinada con auditorías periódicas que
  comparan la distribución de flujo con evidencia independiente como la
  tasa de defectos escapados (capítulo 5.1) y las métricas de
  vulnerabilidades (capítulo 6.4), la misma disciplina de auditoría contra
  evidencia independiente que pide el capítulo 1.2 para cada métrica de
  este libro.
- **Dejar que las funcionalidades absorban de forma consistente casi toda
  la capacidad (el patrón de fábrica de funcionalidades):** priva en
  silencio al trabajo de deuda y riesgo de capacidad hasta que sale a la
  luz como una crisis.
- **Tratar la distribución de un único periodo como toda la imagen:** pasa
  por alto la deriva lenta y acumulativa que una vista de tendencia revela
  con claridad.
- **Fijar una distribución objetivo sin las partes interesadas de
  negocio:** renuncia al principal valor del marco, un entendimiento
  compartido y negociado de la compensación.
- **Usar una definición inconsistente o no documentada por tipo:** produce
  números que parecen precisos pero que en realidad no son comparables en
  el tiempo.
- **Sobrediseñar la taxonomía con muchos subtipos:** añade una sobrecarga
  de clasificación que erosiona la disciplina sin añadir una perspectiva
  proporcional.

## Modelo de madurez

- **Nivel 1, Iniciar:** El trabajo se rastrea de forma genérica, sin
  clasificación de elementos de flujo; el trabajo de deuda y riesgo es
  invisible en los informes.
- **Nivel 2, Desarrollar:** Algunos equipos clasifican los elementos de
  flujo de manera informal, pero las definiciones son inconsistentes y la
  clasificación a menudo ocurre de forma retroactiva.
- **Nivel 3, Estandarizar:** Todos los equipos clasifican en el momento de
  la entrada frente a una definición compartida y escrita, y la
  distribución de flujo se rastrea como tendencia.
- **Nivel 4, Gestionar:** La distribución de flujo se contrasta
  periódicamente con evidencia independiente, y las distribuciones
  objetivo se fijan de forma deliberada con las partes interesadas de
  negocio.
- **Nivel 5, Orquestar:** Los datos de elementos de flujo informan
  directamente las decisiones de recursos e inversión en toda la
  organización, y el liderazgo puede señalar decisiones concretas tomadas
  porque la clasificación hizo explícita una compensación antes invisible.

## Ideas para el debate

1. ¿Qué mostraría un reparto honesto de elementos de flujo del trabajo del trimestre pasado, y sorprendería a alguien?
2. ¿Tenemos una definición escrita para cada uno de los cuatro tipos de elemento de flujo, o depende la clasificación de quién etiquete el trabajo?
3. ¿Ha derivado alguna vez nuestra distribución de flujo hacia un tipo de elemento sin una decisión deliberada detrás?
4. ¿Con qué evidencia independiente podríamos contrastar hoy nuestra distribución de flujo?

## Conclusiones clave

- Un **elemento de flujo** pertenece a exactamente uno de cuatro tipos,
  funcionalidades, defectos, riesgos o deuda, y la asignación de capacidad
  entre ellos es de **suma cero**.
- **No existe una distribución universalmente sana**; la mezcla correcta
  depende de la fase de un producto y debería ser un objetivo deliberado y
  negociado con las partes interesadas de negocio.
- El vector de manipulación central del capítulo es la **clasificación
  retroactiva**, reetiquetar en silencio trabajo de deuda o riesgo como
  funcionalidad a posteriori; la barrera de contención es la clasificación
  en el momento de la entrada más auditorías periódicas contra evidencia
  independiente.
- Vigila específicamente el **patrón de fábrica de funcionalidades**, las
  funcionalidades absorbiendo de forma consistente casi toda la capacidad,
  que priva de recursos al trabajo de deuda y riesgo hasta que sale a la
  luz como una crisis.
- La distribución de flujo resulta más valiosa como **tendencia**, y su
  mayor beneficio viene de compartirla directamente con las partes
  interesadas de negocio.

## Referencias y lecturas adicionales

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, y George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
