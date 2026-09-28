# 1.3 Resultados antes que producción: elegir qué medir

## Visión general y motivación

Toda métrica de ingeniería cae en una de tres categorías, y confundirlas es
el segundo modo de fallo más común de este libro, después de ignorar por
completo la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
Una **métrica de entrada** mide el esfuerzo invertido: horas de ingeniería,
dólares desplegados, puntos de historia comprometidos. Una **métrica de
producción** mide lo que el sistema produjo: funcionalidades lanzadas,
solicitudes de incorporación de cambios fusionadas, tickets cerrados. Una
**métrica de resultado** mide el cambio que realmente importó: ingresos
retenidos, incidentes evitados, tiempo ahorrado a un usuario. Los equipos
gravitan hacia las entradas y la producción porque son fáciles de contar y
están completamente bajo el control de un equipo. El valor, casi siempre,
vive en los resultados, que tardan más en aparecer, son más ruidosos de
medir y más difíciles de atribuir al trabajo de un único equipo.

Este capítulo trata de resistir esa gravedad de forma deliberada. Un tablero
construido enteramente a partir de entradas y producción puede parecer
impresionantemente ajetreado sin generar ningún valor real: un equipo puede
lanzar docenas de funcionalidades que nadie usa, cerrar cientos de tickets
que se reabren una semana después, o cumplir cada estimación de puntos de
historia mientras los resultados reales del producto, retención,
satisfacción, ingresos, se mantienen planos o caen. Nada de ese ajetreo
aparece como un problema en un tablero centrado solo en la producción,
porque los tableros centrados solo en la producción no están construidos
para verlo.

A la escala de una empresa grande o del sector público, esta distinción
determina si el liderazgo puede distinguir entre un equipo que es productivo
y un equipo que simplemente está activo. Una división puede presentar
números de producción excelentes durante años, funcionalidades lanzadas,
sprints cerrados, mientras el resultado que realmente le importa a quien
financia o a una legislatura, ingresos retenidos, tiempos de espera de la
ciudadanía reducidos, se erosiona en silencio por debajo. "Entregamos la
hoja de ruta" no es la misma afirmación que "la hoja de ruta mejoró las
cosas", y solo un conjunto de métricas ponderado hacia los resultados puede
distinguir entre ambas.

## Principios clave

- **Las entradas y la producción son indicadores indirectos; los resultados
  son la cosa en sí misma.** Pondera tu conjunto de métricas hacia los
  resultados siempre que puedas alcanzarlos.
- **La facilidad de medición no es un motivo para medir algo.** Lo más
  fácil de contar suele ser entradas y producción, no porque sea lo que más
  importa sino porque es mecánicamente sencillo de capturar.
- **La atribución se vuelve más difícil a medida que te acercas a los
  resultados.** Acepta esa compensación de forma deliberada en lugar de
  retirarte hacia la producción porque los resultados son más difíciles de
  atribuir.
- **Un equipo puede controlar sus entradas y su producción, pero solo puede
  influir en los resultados.** Diseña la responsabilidad en consecuencia:
  responsabiliza a los equipos de lo que realmente pueden controlar, y
  rastrea los resultados como señales compartidas entre equipos.
- **Un único resultado estrella, con un pequeño conjunto de impulsores,
  supera a un muro de casillas de producción.** La cobertura debe venir de
  la estructura, no del puro volumen del tablero.

## Recomendaciones

### Clasifica cada métrica antes de adoptarla

Para cualquier métrica candidata, pregunta en cuál de las tres categorías
cae. "Solicitudes de incorporación de cambios fusionadas por semana" es
producción. "Porcentaje de solicitudes fusionadas que causaron un incidente
en producción en la semana siguiente" está más cerca de un resultado, porque
mide una consecuencia en lugar de un volumen. Esta clasificación lleva
treinta segundos y debería ser obligatoria antes de añadir una métrica a
cualquier tablero de equipo u organizacional, porque es la forma más rápida
de detectar un tablero que se llena en silencio de producción fácil de
contar mientras cree que está midiendo valor.

### Construye un árbol de métricas bajo un único resultado

No rastrees una lista plana. Organiza las métricas como un **árbol de
métricas** (a veces llamado árbol de KPI): una métrica de resultado en la
cima, desglosada en los impulsores que la alimentan causal o
matemáticamente, hasta llegar a las medidas operativas de producción y
entrada que los equipos individuales realmente poseen. Cuando el resultado
de la cima se mueve, el árbol te dice qué impulsor de nivel inferior
investigar, convirtiendo "el número ha bajado" en "este paso concreto de la
canalización es la causa". Nombra una única **métrica estrella** en la cima
siempre que tu dominio lo permita: la medida que mejor captura el valor
entregado, la frecuencia de despliegue emparejada con la tasa de fallos de
cambio para un equipo de plataforma, o el uso activo semanal de una
funcionalidad principal para un equipo de producto.

### Pondera los resultados en las revisiones, no solo en el tablero

Un árbol de métricas vale lo que valga cómo se usa en la práctica. En las
revisiones de sprint, las revisiones trimestrales de negocio y las
actualizaciones de liderazgo, encabeza con el número a nivel de resultado y
usa las métricas de producción y entrada que hay debajo solo para explicar
el movimiento, no para sustituirlo. Un equipo que reporta "cerramos 40
tickets este sprint" sin ningún contexto de resultado no te ha dicho nada
sobre si el trabajo importó; un equipo que reporta "los defectos escapados
cayeron un 30% y esta es la inversión en pruebas que lo impulsó" te ha dicho
algo real.

### Acepta una retroalimentación más lenta para las métricas de resultado, y
empareja las con indicadores adelantados más rápidos

Las métricas de resultado suelen ser rezagadas: confirman un resultado
después de que haya pasado el tiempo suficiente para estar seguros. Ese
retraso es un coste genuino, ya que retrasa el aprendizaje. Empareja toda
métrica de resultado con al menos un indicador adelantado, una métrica que
se mueve antes y predice el resultado, para que un equipo pueda corregir el
rumbo antes de que llegue por fin el número lento y definitivo. La
frecuencia de despliegue es un indicador adelantado de los resultados de
entrega; una tendencia creciente de defectos escapados es un indicador
adelantado de un resultado de fiabilidad que se acerca. Usa los indicadores
adelantados para actuar pronto y las métricas de resultado rezagadas para
confirmar que acertaste.

## Ventajas e inconvenientes

| Categoría | Ventajas | Inconvenientes |
| --- | --- | --- |
| Métricas de entrada | Totalmente bajo el control del equipo, fáciles de contar | El vínculo más débil con el valor real; fáciles de manipular por volumen |
| Métricas de producción | Fáciles de contar, propiedad clara, retroalimentación rápida | Premian la actividad sobre el impacto; pueden subir mientras el valor cae |
| Métricas de resultado | Reflejan directamente lo que importa; difíciles de manipular de forma barata | Lentas, ruidosas y difíciles de atribuir a un único equipo |
| Estructura de árbol de métricas | Conecta el trabajo diario con el valor estratégico; ayuda al diagnóstico | Requiere trabajo analítico real para construirse y mantenerse bien |

La tensión central es **controlabilidad frente a valor**. Las entradas y la
producción están totalmente bajo el control de un equipo, lo que las hace
tentadoras para responsabilizar a los equipos; los resultados llevan el
valor pero están solo parcialmente bajo la influencia de un único equipo, ya
que una buena funcionalidad todavía puede fracasar por razones ajenas por
completo a la ingeniería. Resuélvelo responsabilizando a los equipos de las
entradas y la producción que controlan por completo, mientras rastreas los
resultados como señales compartidas que toda la organización posee en
conjunto, conectadas mediante un árbol de métricas explícito en lugar de
dejarlas como un vacío sin explicar entre "hicimos el trabajo" y "¿sirvió de
algo?".

## Preguntas para debatir con tu equipo

1. **Para cada métrica de nuestro tablero actual, ¿es una entrada, una
   producción o un resultado, y el equilibrio entre las tres cuenta una
   historia honesta?** La mayoría de los tableros, auditados con
   honestidad, resultan ser casi enteramente entradas y producción, porque
   eso es lo que las herramientas reportan por defecto. Clasifica cada
   casilla y cuenta el reparto; un tablero sin ninguna casilla de resultado
   está midiendo actividad y presentándola como rendimiento.

2. **¿Cuál es nuestra única métrica de resultado estrella, y podemos
   trazarla hacia abajo a través de un árbol de métricas hasta algo que cada
   equipo realmente posee?** Sin esta estructura de conexión, un número
   principal que se mueve no da ninguna pista de dónde mirar, y los equipos
   no pueden ver cómo sus métricas diarias de producción se conectan con
   algo que importe. Trae tu métrica principal actual, si tienes una, e
   intenta construir el árbol en directo.

3. **¿Dónde estamos responsabilizando a un equipo de un resultado en el que
   solo puede influir, no controlarlo?** Esta es una fuente común de
   frustración y de manipulación silenciosa, porque un equipo castigado por
   un resultado moldeado por factores fuera de su control tiene todos los
   incentivos para protegerse en lugar de mejorar el sistema real.
   Identifica estos desajustes y ajusta la responsabilidad o añade las
   palancas que faltan.

4. **¿Qué indicador adelantado tenemos para cada una de nuestras métricas de
   resultado rezagadas, y con cuánta antelación las predice?** Un conjunto
   de métricas puramente rezagadas significa que solo descubres que estabas
   equivocado cuando ya es demasiado tarde para corregir el rumbo de forma
   barata. Trae tus métricas de resultado y comprueba si existe un
   indicador adelantado genuino para cada una, o si estás volando a ciegas
   entre periodos de informe.

5. **¿Qué parte de lo que celebramos en las revisiones y retrospectivas es
   producción ("enviamos X") frente a resultado ("X cambió Y para
   mejor")?** El lenguaje que usan los equipos para celebrar el trabajo
   moldea hacia qué optimizan con el tiempo, a menudo más que el propio
   tablero. Escucha tus propias reuniones de revisión durante un sprint y
   cuenta el reparto con honestidad.

6. **Si nuestras principales métricas de producción se duplicaran de la
   noche a la mañana, ¿nuestras métricas de resultado mejorarían
   necesariamente, o podrían empeorar?** Este experimento mental saca a la
   luz métricas de producción que se han desconectado, o incluso se han
   opuesto activamente, a los resultados a los que debían servir, como un
   volumen de funcionalidades que aumenta la carga de mantenimiento más
   rápido de lo que aumenta la adopción.

## Enfoque sectorial

**Startup.** Elige un resultado, normalmente un indicador indirecto de si
los clientes siguen obteniendo valor, como la retención o la activación
semanal, y trátalo como tu estrella desde el primer día. Resiste el tirón
hacia métricas de producción vanidosas como el recuento acumulado de
funcionalidades, que resultan tentadoras de reportar a los inversores pero
no dicen nada sobre si el producto realmente funciona para alguien.

**Pequeña empresa.** Tus herramientas existentes, punto de venta,
herramienta de soporte, analítica, normalmente ya reportan un número
cercano a un resultado, tasa de compra repetida, tasa de reapertura de
tickets. Usa esos en lugar de construir instrumentación de resultado
personalizada que no tienes capacidad de mantener, y resiste la tentación de
caer en recuentos brutos de actividad solo porque son la vista por defecto.

**Empresa grande.** El modo de fallo dominante es una cartera de equipos
optimizando cada uno métricas de producción locales que no suman a ningún
resultado organizacional coherente. Construye el árbol de métricas de forma
deliberada, estandariza las definiciones de resultado entre unidades de
negocio, y exige que toda iniciativa importante plantee su hipótesis de
resultado antes de financiarse, no solo su plan de producción.

**Sector público.** Los organismos de supervisión y el público son cada vez
más capaces de distinguir entre "entregamos el alcance del trabajo" y "el
resultado mejoró", y un informe centrado solo en la producción invita
precisamente a ese escrutinio. Define el éxito como un resultado orientado a
la ciudadanía (tiempo de espera, tasa de error, satisfacción) siempre que
sea legal y prácticamente posible, y sé explícito cuando solo se disponga de
una métrica de producción y por qué.

## Ejemplos

**Empresa grande.** La división de ingeniería de una empresa de logística
reportó durante dos años un recuento de "funcionalidades lanzadas por
trimestre" en constante subida, mientras la puntuación de satisfacción del
cliente de la empresa se aplanaba en silencio. Una nueva vicepresidenta de
ingeniería construyó un árbol de métricas con raíz en la tasa de entrega a
tiempo, el resultado de negocio real, desglosado a través del tiempo de
permanencia en el centro logístico y el éxito de la última milla hasta la
producción de ingeniería a nivel de equipo. En un solo ciclo de informe
quedó claro que varios equipos de alta producción estaban lanzando
funcionalidades en áreas sin ningún efecto medible sobre la métrica
estrella, y la inversión se redirigió hacia los impulsores que el árbol
mostraba que realmente importaban.

**Sector público.** El equipo digital de un servicio nacional de salud
había reportado "módulos entregados según el alcance del trabajo" para un
programa plurianual de modernización de historiales de pacientes. Un comité
de supervisión planteó una pregunta distinta: ¿el personal clínico dedicaba
menos tiempo a la introducción administrativa de datos? El equipo incorporó
a posteriori una métrica de resultado, minutos medianos de tiempo
administrativo por encuentro con el paciente, y descubrió que los primeros
módulos en realidad habían aumentado ese tiempo debido a fricción en el
flujo de trabajo, a pesar de cumplir todos los hitos de entrega. Los módulos
posteriores se rediseñaron directamente en torno a la métrica de resultado,
y el informe público del programa pasó de una lista de comprobación de
entregas a una comparación de resultados de antes y después.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de ponderar los resultados es el desperdicio que se evita: una
organización que puede ver, casi en tiempo real, que un flujo de producción
no mueve ningún resultado puede redirigir esa inversión antes de gastar un
ciclo presupuestario entero en descubrirlo por las malas. El coste oculto
dominante en las grandes organizaciones de ingeniería no es la falta de
inversión, es el trabajo bien ejecutado que nunca debería haberse financiado
porque estaba desconectado de cualquier resultado real, y un tablero
centrado solo en la producción no puede ver esa desconexión en absoluto.

El coste total de propiedad de medir resultados es mayor que el de medir
producción, porque los resultados son genuinamente más difíciles de
definir, atribuir e instrumentar, y construir un árbol de métricas real
requiere esfuerzo analítico deliberado en lugar de aceptar lo que una
herramienta exporte por defecto. Ese coste merece pagarse para cualquier
iniciativa de tamaño superior a modesto, porque la alternativa, descubrir
después de los hechos que un año de producción reportada con confianza no
generó ningún valor real, cuesta mucho más que el análisis previo.

## Antipatrones y errores comunes

- **Un tablero que es enteramente casillas de producción:** mide actividad
  y la presenta como rendimiento.
- **Responsabilizar por completo a un equipo de un resultado que no puede
  controlar:** genera frustración e invita a manipular el sistema para
  protegerse de una culpa injusta.
- **Ningún indicador adelantado para un resultado rezagado:** el equipo
  descubre que se equivocó solo cuando ya es demasiado caro arreglarlo.
- **Celebrar el lenguaje de producción en las revisiones mientras se
  afirma valorar los resultados:** la prioridad declarada y el incentivo
  vivido divergen, y el incentivo vivido gana.
- **Una lista plana de métricas sin estructura de árbol:** un número
  principal que se mueve no da ninguna pista de dónde mirar.
- **Tratar la medición de resultados como demasiado difícil de intentar:**
  devuelve a una organización de forma permanente a las entradas y la
  producción fáciles de contar.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas son casi enteramente entradas y
  producción; nadie puede nombrar las métricas de resultado de la
  organización ni trazar una línea hasta ellas.
- **Nivel 2, Desarrollar:** Algunos equipos han identificado métricas de
  resultado de manera informal, pero no existe un árbol de métricas
  compartido ni indicadores adelantados consistentes.
- **Nivel 3, Estandarizar:** Un árbol de métricas documentado conecta un
  resultado estrella compartido hasta la producción que posee cada equipo,
  aplicado de forma consistente en toda la organización.
- **Nivel 4, Gestionar:** Los indicadores adelantados y rezagados se
  rastrean y revisan juntos; los equipos solo se responsabilizan de lo que
  controlan, y la medición de resultados cuenta con recursos activos.
- **Nivel 5, Orquestar:** La medición de resultados se integra directamente
  en las decisiones de financiación y priorización; la organización
  redirige de forma rutinaria la inversión que se aleja de trabajo de alta
  producción y bajo resultado antes de que transcurra un ciclo
  presupuestario completo.

## Ideas para el debate

1. Nombra la métrica de resultado más importante de nuestra organización. ¿Todos están de acuerdo en cuál es?
2. ¿Cuál es nuestra mayor inversión actual en producción que todavía no podemos trazar hasta ningún resultado?
3. ¿Dónde castiga nuestra estructura de responsabilidad a un equipo por un resultado que no puede controlar?
4. ¿Cómo se vería nuestro tablero si eliminásemos cada casilla de producción pura?
5. ¿Cuánto tardamos actualmente en saber si una funcionalidad lanzada realmente ayudó?

## Conclusiones clave

- Clasifica cada métrica como **entrada, producción o resultado**, y pondera
  tu conjunto de forma deliberada hacia los resultados.
- Construye un **árbol de métricas** bajo una única **métrica estrella** para
  que un número principal que se mueve señale una causa.
- Responsabiliza a los equipos de lo que **controlan** (entradas,
  producción); rastrea los resultados como señales compartidas que influye
  toda la organización en conjunto.
- Empareja cada **métrica de resultado** rezagada con un **indicador
  adelantado** más rápido para poder corregir el rumbo antes de que el
  número lento confirme que te equivocabas.
- Un tablero centrado solo en la producción mide actividad y lo llama
  rendimiento; trata eso como una señal de alarma, no como un consuelo.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble y Gene Kim (medición de entrega basada en
  resultados).
- *Lean Analytics*, de Alistair Croll y Benjamin Yoskovitz (la Única
  Métrica Que Importa y la distinción entrada/producción/resultado en el
  contexto de una startup).
- *Measure What Matters*, de John Doerr (fijación de objetivos orientada a
  resultados y el énfasis del marco OKR en los resultados sobre la
  actividad).
- *The Lean Startup*, de Eric Ries (métricas accionables frente a métricas
  de vanidad y validación de resultados).
- *Key Performance Indicators*, de David Parmenter (construcción de una
  estructura de árbol de KPI o de métricas bajo una medida estrella).
