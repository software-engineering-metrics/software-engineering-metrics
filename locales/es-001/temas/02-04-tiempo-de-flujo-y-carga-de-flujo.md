# 2.4 Tiempo de flujo y carga de flujo

## Visión general y motivación

El **tiempo de flujo** es el tiempo total transcurrido desde que un
elemento de flujo (capítulo 2.2) entra en la cadena de valor hasta que se
entrega, midiendo la capacidad de respuesta a lo largo de todo el camino
desde que se identifica una necesidad de negocio hasta que un cliente
recibe valor. La **carga de flujo** es el número total de elementos de
flujo actualmente activos o en espera en la cadena de valor en un momento
dado, el nombre que le da el Flow Framework a lo que el capítulo 2.5 llama
trabajo en curso. Juntas, estas son las dos métricas del Flow Framework que
más directamente se conectan con las matemáticas de la teoría de colas,
porque la carga de flujo no solo se correlaciona con el tiempo de flujo,
lo dicta matemáticamente.

Esa relación es la **[ley de
Little](https://en.wikipedia.org/wiki/Little%27s_law)**, una demostración
de la teoría de colas (el capítulo 2.7 la cubre al completo) que establece
que el número promedio de elementos en un sistema estable es igual a la
tasa de llegada promedio multiplicada por el tiempo promedio que cada
elemento pasa en el sistema. Aplicado aquí: la carga de flujo es igual a la
tasa de llegada multiplicada por el tiempo de flujo. Este es el hecho más
útil de este capítulo, porque convierte un argumento que antes era
cualitativo, "estamos demasiado sobrecargados, las cosas están tardando
demasiado", en uno demostrable y cuantitativo que un líder de negocio no
puede descartar fácilmente: si la carga de flujo sigue subiendo mientras la
tasa de llegada se mantiene plana, el tiempo de flujo tiene garantizado
matemáticamente que también subirá, no solo que es probable que lo haga.

Para los equipos grandes, este suele ser el número individual más
persuasivo de todo el marco. Un líder de negocio que se resiste a la idea
de decir que no a trabajo nuevo, porque cada solicitud se siente
individualmente justificada, a menudo aceptará que sobrecargar una cadena
de valor ralentiza de forma demostrable cada elemento que ya está en ella,
una vez que se rastrea la carga de flujo y se muestra directamente la
relación con el tiempo de flujo en lugar de argumentarla de forma
abstracta. Tanto las organizaciones grandes que hacen malabares con muchas
iniciativas estratégicas simultáneas como los programas del sector público
que gestionan docenas de flujos de trabajo paralelos dependen de esta
demostración, no solo de la intuición detrás de ella, para justificar decir
que no a empezar más trabajo a la vez.

## Principios clave

- **La carga de flujo dicta matemáticamente el tiempo de flujo, mediante la
  ley de Little.** Esto no es correlación; es una demostración que se
  cumple para cualquier cadena de valor estable.
- **El tiempo de flujo abarca toda la cadena de valor, no solo la
  ingeniería.** Empieza cuando se identifica una necesidad de negocio, no
  cuando la ingeniería recoge el trabajo, que el tiempo de ciclo del
  capítulo 2.6 después descompone más.
- **Una carga de flujo en aumento es la señal de alerta más temprana de un
  tiempo de flujo en aumento.** Porque la relación es demostrable, la carga
  de flujo se puede vigilar como indicador adelantado, no solo descubrirse
  después de que el tiempo de flujo ya se haya degradado.
- **El punto de entrada de la cadena de valor debe estar fijado y
  documentado.** Dónde empieza el reloj del tiempo de flujo es una decisión
  de definición expuesta al mismo riesgo de manipulación que cualquier otro
  límite de métrica de este libro.
- **Un líder de negocio puede actuar directamente sobre la carga de
  flujo.** A diferencia del tiempo de flujo, que es una medición rezagada,
  la carga de flujo es una palanca: decir que no a empezar trabajo nuevo es
  una acción disponible hoy.

## Recomendaciones

### Fija y documenta el punto de entrada de la cadena de valor antes de medir el tiempo de flujo

Decide explícitamente si el tiempo de flujo empieza cuando se identifica
por primera vez una necesidad de negocio, cuando se aprueba formalmente, o
cuando la ingeniería empieza el trabajo, y documenta esa elección de la
misma forma que recomienda el capítulo 1.4 para cualquier carta de
métricas. Esta única decisión determina si el tiempo de flujo mide una
capacidad de respuesta genuina de principio a fin o solo la porción más
estrecha de ella que controla la ingeniería, y cambiar la definición más
adelante sin divulgarlo es el riesgo de manipulación central de este
capítulo.

### Rastrea la carga de flujo de forma continua, no periódica

Porque la carga de flujo es un indicador adelantado, mediante la ley de
Little, del tiempo de flujo que está por llegar, rastréala como un número
vivo y actualizado continuamente en lugar de una instantánea periódica. Una
carga de flujo que ya lleva semanas subiendo para cuando alguien la
comprueba ya ha estado extendiendo en silencio el tiempo de flujo durante
el mismo periodo, de forma invisible, antes de que la métrica se pusiera al
día.

### Usa la ley de Little explícitamente al argumentar a favor de un límite de trabajo en curso o un aumento de capacidad

Al hacer el caso para empezar menos trabajo concurrente, o para añadir
capacidad, presenta la ecuación real, no solo la recomendación: la carga de
flujo es igual a la tasa de llegada por el tiempo de flujo, así que si la
tasa de llegada es aproximadamente fija, reducir la carga de flujo tiene
garantizado matemáticamente reducir el tiempo de flujo. Este es un
argumento sustancialmente más fuerte ante una parte interesada escéptica
que una afirmación sin cuantificar de que "estamos demasiado ocupados",
porque es demostrable en lugar de solo afirmado.

### Separa el tiempo de flujo de las causas subyacentes de la carga de flujo antes de proponer una solución

Cuando la carga de flujo es alta, investiga qué tipo de elemento de flujo
(capítulo 2.2) la está impulsando realmente: demasiadas funcionalidades
concurrentes empezadas a la vez, un backlog de defectos sin atender, o
trabajo de riesgo atascado esperando una aprobación compartida. Cada causa
implica una solución distinta, y tratar "la carga de flujo es alta" como un
único problema sin diferenciar tiende a producir una respuesta genérica e
ineficaz.

### Contrasta el tiempo de flujo con el tiempo de ciclo para aislar dónde ocurre realmente el retraso

Dado que el tiempo de flujo abarca toda la cadena de valor y el tiempo de
ciclo (capítulo 2.6) cubre solo la porción de ingeniería de ella, compara
ambos directamente. Una brecha grande entre el tiempo de flujo y el tiempo
de ciclo significa que la mayor parte del retraso ocurre antes de que la
ingeniería vea siquiera el trabajo, en colas de aprobación, backlogs de
priorización o traspasos entre equipos, lo que apunta hacia una solución
muy distinta de una brecha concentrada dentro de la propia ingeniería.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Medir el tiempo de flujo solo desde que lo recoge ingeniería | Sencillo, coincide con la instrumentación de tiempo de ciclo existente | Pasa por alto el retraso previo a ingeniería, subestima la capacidad de respuesta real |
| Medir el tiempo de flujo desde la identificación genuina de la necesidad de negocio | Captura la capacidad de respuesta real de principio a fin | Requiere instrumentar etapas fuera del control directo de ingeniería |
| Instantáneas periódicas de carga de flujo | Baratas de calcular ocasionalmente | Pasan por alto el valor de indicador adelantado; una carga en aumento pasa desapercibida demasiado tiempo |
| Rastreo continuo de carga de flujo | Indicador adelantado vivo y accionable | Requiere integración de herramientas continua, no solo un informe ocasional |

La tensión central es **alcance frente a alcance de la instrumentación**.
Medir el tiempo de flujo solo desde que lo recoge ingeniería es mucho más
fácil de instrumentar, ya que reutiliza los datos de tiempo de ciclo que ya
recoge el capítulo 2.6, pero subestima en silencio la capacidad de
respuesta real al ignorar todo lo que ocurre antes de que ingeniería vea el
trabajo. Resuélvela empezando por la medición más estrecha, limitada a
ingeniería, si es todo lo que puedes instrumentar hoy, pero trata extender
el punto de inicio del tiempo de flujo hacia arriba, hacia la
identificación de la necesidad de negocio y la priorización, como una
prioridad a corto plazo y no como una limitación permanente.

## Preguntas para debatir con tu equipo

1. **¿Dónde empieza realmente hoy nuestro reloj de tiempo de flujo, y está
   todo el mundo en la organización de acuerdo en que ese es el punto de
   partida correcto?** Un desajuste entre dónde asumen las partes
   interesadas que empieza el reloj y dónde realmente empieza es una fuente
   común y silenciosa de desconfianza en la métrica. Confirma que la
   definición documentada coincide con el entendimiento compartido.

2. **¿Hemos comprobado alguna vez si nuestra carga de flujo medida, nuestra
   tasa de llegada y nuestro tiempo de flujo realmente satisfacen la ley de
   Little?** Si no se equilibran aproximadamente, uno de los tres números
   se está midiendo de forma inconsistente. Repasa los números reales
   juntos en lugar de asumir que la comprobación se cumpliría.

3. **¿Se rastrea la carga de flujo de forma continua, o pasaría
   desapercibida una subida constante durante semanas antes de que alguien
   la comprobara?** Un indicador adelantado solo te protege si alguien lo
   está vigilando realmente casi en tiempo real, no solo revisándolo en un
   informe trimestral.

4. **Cuando sube la carga de flujo, ¿podemos decir qué tipo de elemento de
   flujo la está impulsando realmente, o se lee como un único número sin
   diferenciar?** Un diagnóstico genérico de "estamos sobrecargados"
   produce una respuesta genérica, a menudo ineficaz. Comprueba si tu
   instrumentación actual puede atribuir realmente una carga en aumento a
   una causa concreta.

5. **¿Qué tan grande es la brecha entre nuestro tiempo de flujo y nuestro
   tiempo de ciclo, y sugiere esa brecha que la mayor parte del retraso
   ocurre antes o después de que ingeniería vea el trabajo?** Esta
   comparación a menudo revela que la mayor oportunidad de mejora está
   completamente fuera del control de ingeniería.

6. **¿Ha estrechado alguien alguna vez en silencio nuestro punto de partida
   del tiempo de flujo para que el número se vea mejor, sin que ese cambio
   se documentara o divulgara?** Este es el riesgo de manipulación central
   del capítulo expuesto directamente. Pregúntate con honestidad si tu
   definición ha derivado alguna vez de esta forma.

## Enfoque sectorial

**Startup.** La carga de flujo suele ser baja simplemente porque no hay
suficientes personas para empezar mucho trabajo a la vez, pero la misma
relación matemática se sigue aplicando en cuanto quien funda la empresa o
un ingeniero líder se convierte en un cuello de botella personal para
muchas iniciativas concurrentes. Rastrea la carga de flujo de manera
informal incluso sin herramientas dedicadas, ya que la ley de Little se
cumple independientemente de la escala.

**Pequeña empresa.** Una lista simple y compartida de todo lo que está
activo actualmente suele bastar para calcular la carga de flujo sin
software dedicado de gestión de cadena de valor. El hábito útil es
comprobarla con la suficiente regularidad para detectar pronto un número en
aumento, no descubrirlo solo una vez que el tiempo de flujo ya se ha
degradado visiblemente.

**Empresa grande.** Aquí es donde la ley de Little se gana su lugar como
argumento, no solo como métrica: una organización grande que hace
malabares con docenas de iniciativas estratégicas concurrentes puede usar
la relación demostrable entre la carga de flujo y el tiempo de flujo para
plantear un caso basado en evidencia para secuenciar el trabajo, algo que
un argumento puramente cualitativo de "estamos demasiado ocupados" rara vez
consigue frente a una presión decidida de las partes interesadas.

**Sector público.** Los programas plurianuales acumulan habitualmente una
carga de flujo grande e implícita entre muchos flujos de trabajo, cada uno
justificado individualmente, sin ninguna visibilidad del total a nivel de
toda la organización. Presentar la ley de Little directamente, mostrando
que el propio crecimiento del tiempo de flujo del programa se explica
matemáticamente por su propia carga de flujo en aumento, suele ser la
evidencia más clara y persuasiva disponible para secuenciar los flujos de
trabajo en lugar de ejecutarlos todos en paralelo indefinidamente.

## Ejemplos

**Empresa grande.** La organización de plataforma de una empresa de
tecnología de medios gestionaba veintidós iniciativas estratégicas
concurrentes con una capacidad realista para unas doce, un desajuste que
nadie había cuantificado hasta que una nueva vicepresidenta de ingeniería
pidió directamente la carga de flujo. El tiempo de flujo de la iniciativa
mediana había crecido un 40% en el año anterior, una tendencia que el
liderazgo había atribuido a que "el trabajo se está volviendo más difícil".
Presentar la ley de Little junto a los números reales de carga de flujo y
tasa de llegada mostró que el crecimiento se explicaba por completo solo
por la carga de flujo en aumento, sin necesidad de ningún cambio en la
dificultad subyacente del trabajo para explicarlo. La organización
secuenció las iniciativas hasta una carga de flujo sostenible, y el tiempo
de flujo mediano cayó casi un tercio en dos trimestres.

**Sector público.** El programa de modernización de una agencia federal de
gestión de subvenciones había acumulado carga de flujo entre docenas de
flujos de trabajo paralelos sin ningún total rastreado en conjunto, y cada
patrocinador de flujo de trabajo creía que su propia iniciativa estaba
apropiadamente dotada de recursos de forma aislada. Un análisis de la
oficina del programa usando la ley de Little mostró que el tiempo de flujo
agregado del programa, el tiempo desde la aprobación de un flujo de trabajo
hasta su entrega, podía predecirse casi con exactitud solo a partir de su
carga de flujo agregada, un hallazgo que convenció a patrocinadores que se
habían resistido a los argumentos de despriorización durante más de un
año. El programa adoptó un techo explícito de carga de flujo, y los nuevos
flujos de trabajo ahora entran en una cola en lugar de empezar de inmediato
sin importar la carga actual.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de rastrear juntas la carga de flujo y el tiempo de flujo es un
caso demostrable, no simplemente persuasivo, para secuenciar el trabajo en
lugar de ejecutarlo todo en paralelo. El ejemplo de la empresa de tecnología
de medios de arriba, explicar toda una regresión del tiempo de flujo solo
mediante la carga de flujo, es el patrón que esta combinación produce de
forma fiable: un argumento concreto y cuantitativo tiene éxito donde antes
fracasaba una apelación cualitativa a estar "demasiado ocupados" frente a
una presión organizacional real para empezar más trabajo.

El coste total de propiedad es bajo en relación con su poder persuasivo: la
carga de flujo solo requiere un recuento en vivo de elementos activos y en
espera, y el tiempo de flujo requiere instrumentar el punto de entrada de
la cadena de valor, un trabajo que se paga solo la primera vez que evita
que una organización se comprometa con más iniciativas concurrentes de las
que su capacidad real puede sostener.

## Antipatrones y errores comunes

- **Estrechar en silencio el punto de partida del tiempo de flujo para
  favorecer el número:** el vector de manipulación central de este
  capítulo. Mover el inicio del reloj desde la identificación genuina de la
  necesidad de negocio hacia un punto posterior, la recogida por
  ingeniería, la aprobación formal, reduce el tiempo de flujo sin cambiar
  en absoluto la capacidad de respuesta genuina, y puede ocurrir de forma
  lo bastante gradual como para que ningún cambio individual parezca una
  manipulación deliberada. La barrera de contención es documentar
  explícitamente el punto de entrada en una carta de métricas (capítulo
  1.4) y auditarlo periódicamente frente a la definición documentada, la
  misma disciplina que este libro pide para cada límite de métrica.
- **Medir la carga de flujo solo periódicamente:** renuncia a su valor
  como indicador adelantado, ya que una subida constante puede pasar
  desapercibida durante semanas.
- **Tratar la carga de flujo como un único número sin diferenciar:** pasa
  por alto qué tipo de elemento de flujo está impulsando realmente una
  sobrecarga, produciendo una respuesta genérica en lugar de dirigida.
- **Ignorar la brecha entre el tiempo de flujo y el tiempo de ciclo:**
  pasa por alto si el retraso se concentra antes o después de ingeniería,
  lo que implica soluciones muy distintas.
- **Argumentar a favor de reducir el trabajo concurrente sin presentar
  explícitamente la ley de Little:** una apelación cualitativa es mucho
  más fácil de descartar para una parte interesada que una relación
  cuantitativa y demostrable.
- **Asumir que la ley de Little solo se aplica a gran escala:** se cumple
  para cualquier sistema estable sin importar el tamaño, incluyendo una
  única persona sobrecargada.

## Modelo de madurez

- **Nivel 1, Iniciar:** Ni el tiempo de flujo ni la carga de flujo se
  rastrean; el retraso se discute de forma anecdótica sin datos que lo
  respalden.
- **Nivel 2, Desarrollar:** El tiempo de flujo se rastrea solo desde que lo
  recoge ingeniería, y la carga de flujo se comprueba periódicamente en
  lugar de de forma continua.
- **Nivel 3, Estandarizar:** El tiempo de flujo se mide desde un punto de
  entrada de la cadena de valor documentado y compartido en toda la
  organización, y la carga de flujo se rastrea de forma continua como
  indicador adelantado.
- **Nivel 4, Gestionar:** La ley de Little se usa explícitamente para
  justificar decisiones de capacidad y secuenciación, y una carga de flujo
  en aumento se atribuye a un tipo de elemento de flujo concreto antes de
  proponer una solución.
- **Nivel 5, Orquestar:** La organización fija techos explícitos de carga
  de flujo en sus cadenas de valor, y puede señalar decisiones concretas de
  secuenciación, respaldadas por la ley de Little, que mejoraron el tiempo
  de flujo de forma medible.

## Ideas para el debate

1. ¿Dónde empieza realmente nuestro reloj de tiempo de flujo, y ha derivado alguna vez esa definición sin documentarse?
2. ¿Satisfacen aproximadamente la ley de Little nuestra carga de flujo, nuestra tasa de llegada y nuestro tiempo de flujo medidos?
3. ¿Se rastrea la carga de flujo con la suficiente continuidad como para detectar una subida constante en días, no en meses?
4. ¿Cuál es la brecha entre nuestro tiempo de flujo y nuestro tiempo de ciclo, y qué nos dice esa brecha sobre dónde ocurre realmente el retraso?

## Conclusiones clave

- **La carga de flujo dicta matemáticamente el tiempo de flujo**, mediante
  la ley de Little: la carga de flujo es igual a la tasa de llegada por el
  tiempo de flujo, para cualquier cadena de valor estable.
- **El tiempo de flujo abarca toda la cadena de valor**, desde la
  identificación de la necesidad de negocio hasta la entrega, más amplio
  que el alcance limitado a ingeniería del tiempo de ciclo (capítulo 2.6).
- El vector de manipulación central del capítulo es **estrechar en
  silencio el punto de partida del tiempo de flujo**; la barrera de
  contención es una definición documentada y auditada del punto de
  entrada.
- **Rastrea la carga de flujo de forma continua**, no periódica, para que
  funcione como un indicador adelantado genuino en lugar de un
  descubrimiento rezagado.
- Usa la ley de Little **explícitamente**, no solo como intuición, al
  argumentar a favor de un límite de trabajo en curso, un aumento de
  capacidad o la secuenciación de trabajo concurrente.

## Referencias y lecturas adicionales

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
