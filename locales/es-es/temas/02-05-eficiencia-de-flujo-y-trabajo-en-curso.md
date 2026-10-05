# 2.5 Eficiencia de flujo y trabajo en curso

## Visión general y motivación

La **eficiencia de flujo** es la razón entre el tiempo activo y el tiempo
total de una pieza de trabajo: si un cambio pasa diez horas siendo
codificado, revisado y probado de forma activa, pero permanece inactivo en
colas durante noventa horas en total a lo largo de todo su recorrido, la
eficiencia de flujo es del 10%. La mayoría de las canalizaciones de entrega
de software, medidas con honestidad, se sitúan entre el 10% y el 25% de
eficiencia de flujo, lo que sorprende a quien espera que el esfuerzo domine.
El coste dominante en la mayoría de los sistemas de entrega no es cuánto
tarda en hacerse el trabajo, es cuánto tarda el trabajo en empezar.

El **[trabajo en curso](https://en.wikipedia.org/wiki/Work_in_process)**
(WIP, por sus siglas en inglés) es el recuento de elementos que se están
trabajando activamente en un momento dado, en un equipo o en un sistema, la
misma cantidad que el tema 2.4 llama "carga de flujo". El hallazgo
contraintuitivo detrás de este tema, respaldado por décadas de
investigación en gestión de operaciones y formalizado para la entrega de
software mediante kanban y la teoría de colas, es que limitar el trabajo en
curso tiende a *aumentar* el rendimiento, no a disminuirlo, porque menos
trabajo en vuelo a la vez significa menos cambio de contexto, colas más
cortas y una finalización más rápida por elemento, aunque parezca que hacer
menos trabajo simultáneamente debería producir menos producción en
conjunto.

Para los equipos grandes, entender la eficiencia de flujo replantea casi
todos los problemas de entrega de "la gente necesita trabajar más rápido" a
"el trabajo necesita esperar menos". Ese replanteamiento importa porque el
primer enfoque invita a presionar a las personas, exactamente la trampa
contra la que advierte el tema 2.6, mientras que el segundo invita a
investigar la estructura de colas, la capacidad de revisión y cuánto
trabajo se empieza simultáneamente, que es donde suele vivir la mejora
real y sostenible. Las organizaciones grandes que hacen malabares con
muchas iniciativas concurrentes entre equipos compartidos son especialmente
propensas a un WIP alto y una eficiencia de flujo baja, porque empezar
trabajo nuevo siempre se siente como progreso incluso cuando está
ralentizando en silencio todo lo que ya está en vuelo.

## Principios clave

- **El tiempo de espera, no el esfuerzo activo, domina la mayoría de las
  canalizaciones de entrega.** Una eficiencia de flujo por debajo del 25%
  es típica, no una señal de un equipo roto.
- **Limitar el trabajo en curso tiende a aumentar el rendimiento**, no a
  disminuirlo, al reducir el cambio de contexto y acortar las colas.
- **Empezar trabajo nuevo se siente como progreso; terminar trabajo es lo
  que realmente entrega valor.** No son lo mismo, y las organizaciones los
  confunden habitualmente.
- **Un WIP alto suele ser invisible hasta que se mide.** Un equipo puede
  estar haciendo malabares con mucho más trabajo concurrente del que
  cualquier persona individualmente se da cuenta.
- **Esta es una métrica a nivel de sistema, no individual.** Aplicar
  límites de WIP para castigar a las personas malinterpreta por completo el
  sentido de la técnica.

## Recomendaciones

### Mide la eficiencia de flujo antes de asumir que el esfuerzo es el cuello de botella

Calcula la razón entre el tiempo activo y el tiempo total transcurrido para
una muestra representativa de cambios recientes, usando los datos de etapa
de tiempo de ciclo del tema 2.6. La mayoría de los equipos que miden
esto por primera vez se sorprenden de lo bajo que es el número, y esa
sorpresa en sí misma es valiosa: redirige la atención de "trabajar más
duro" hacia "reducir las colas", que casi siempre es la palanca más
productiva.

### Fija un límite explícito de trabajo en curso y exígelo de forma visible

Limita el número de elementos que un equipo o una persona puede tener
activos a la vez, visible en un tablero compartido (un tablero kanban
físico o digital es la implementación clásica). Cuando se alcanza el
límite, la siguiente acción del equipo es ayudar a terminar algo que ya
está en vuelo, no empezar algo nuevo. Esta única práctica, tomada de la
manufactura lean y formalizada en kanban, es una de las mejoras de flujo
más consistentemente eficaces disponibles para un equipo de software, y
cuesta casi nada implementarla.

### Trata un límite de WIP como una restricción del sistema, no como una cuota individual

Un límite de WIP gobierna cuánto trabajo tiene en vuelo a la vez el
*sistema* (un equipo, una cola de revisión compartida, un entorno
compartido), no cuánto puede tocar cualquier persona individual. Aplicar el
límite como una cuota de rendimiento individual, "solo puedes tener dos
tickets abiertos", malinterpreta la técnica y arriesga precisamente el tipo
de manipulación a nivel individual contra el que advierte este libro en
todo momento. El límite existe para proteger el flujo a través de todo el
sistema, y su cumplimiento debería ser una norma de equipo, no un techo
personal.

### Investiga por qué el trabajo permanece inactivo, no solo cuánto tiempo

Cuando el análisis de eficiencia de flujo revela tiempos de espera largos,
pregunta específicamente por qué: el trabajo espera porque un revisor no
está disponible, porque un entorno de pruebas compartido está reservado,
porque una dependencia de otro equipo todavía no ha aterrizado. Cada una de
estas tiene una solución distinta. Una directiva genérica de "reducir el
tiempo de espera" sin esta investigación específica tiende a producir
respuestas genéricas e ineficaces.

### Vigila que el WIP no vuelva a subir sigilosamente después de una mejora inicial

Los equipos que adoptan con éxito un límite de WIP a menudo lo ven
erosionarse con el tiempo a medida que regresa la presión para empezar
iniciativas nuevas, "solo esta vez, también necesitamos empezar esto
urgente". Trata cada excepción al límite de WIP como una decisión
deliberada y visible con un motivo declarado, no como una anulación
silenciosa y rutinaria, para que la disciplina del límite no se degrade en
silencio hasta su estado original.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin límite de WIP | Se siente flexible; sin fricción al empezar trabajo nuevo | El cambio de contexto y las colas ralentizan todo en silencio |
| Límite de WIP a nivel de equipo | Mejora el rendimiento y la eficiencia de flujo de forma medible | Requiere disciplina para exigirlo, especialmente bajo presión de plazos |
| Cuota de WIP a nivel individual | Sencilla de plantear | Malinterpreta la técnica; arriesga manipulación individual |
| Límite de WIP estricto e inflexible | Máximo beneficio de eficiencia de flujo | Puede sentirse rígido en situaciones genuinamente urgentes y excepcionales |

La tensión central es **flexibilidad frente a flujo**. Empezar trabajo
nuevo siempre que parece urgente se siente receptivo, pero la
investigación sobre eficiencia de flujo y WIP muestra consistentemente que
esa flexibilidad tiene el coste de terminar cualquier cosa con rapidez, ya
que más trabajo concurrente significa colas más largas y más cambio de
contexto para todo lo que ya está en vuelo. Resuélvela adoptando un límite
de WIP a nivel de equipo como valor por defecto, con un proceso de
excepción deliberado, visible y poco frecuente para emergencias genuinas,
en lugar de una regla rígida sin excepciones o un todo vale flexible e
ilimitado.

## Preguntas para debatir con tu equipo

1. **¿Cuál es nuestra eficiencia de flujo real, medida a partir de datos
   reales de tiempo de ciclo, y nos sorprende ese número?** La mayoría de
   los equipos nunca han calculado esto y asumen que es mucho más alto de
   lo que resulta ser. Extrae una muestra de cambios recientes y calcula la
   razón con honestidad antes de debatir cualquier otra cosa de este
   tema.

2. **¿Cuánto trabajo en curso tenemos realmente ahora mismo, en todo el
   equipo, y sabía alguien ese número antes de contarlo?** Un WIP alto
   suele ser invisible hasta que se mide explícitamente, porque cada
   persona solo ve su propia porción de él. Cuenta todo lo que está en
   curso actualmente, incluyendo trabajo que nadie está tocando
   activamente hoy.

3. **Si adoptáramos un límite de WIP, ¿qué tendría que cambiar sobre cómo
   respondemos a una nueva solicitud urgente?** Esta pregunta saca a la luz
   el hábito organizacional real, empezar trabajo nuevo por reflejo, que un
   límite de WIP está diseñado para interrumpir, y merece debatirse antes,
   no después, de intentar exigir un límite.

4. **Cuando el trabajo permanece inactivo en nuestra canalización, ¿cuál es
   el motivo específico, y es el mismo motivo cada vez?** Una sensación
   genérica de que "las cosas esperan por ahí" es menos útil que una causa
   específica y recurrente: un revisor no disponible, un entorno
   compartido reservado, una dependencia entre equipos. Nombra el patrón
   real a partir de ejemplos recientes concretos.

5. **¿Hemos adoptado alguna vez un límite de WIP y después lo hemos visto
   erosionarse en silencio a través de excepciones?** Esto es extremadamente
   común y merece debatirse con honestidad: qué presión causó la primera
   excepción, y si las excepciones se convirtieron en la nueva normalidad
   sin que nadie lo decidiera de forma explícita.

6. **¿Necesitaría un límite de WIP en nuestro contexto aplicarse a nivel
   individual, de equipo, o de recurso compartido (como una cola de
   revisión o un entorno de pruebas)?** Distintos cuellos de botella
   requieren límites en niveles distintos, y aplicar un límite en el nivel
   equivocado, cuotas individuales en lugar de un tope de cola compartida,
   puede malinterpretar toda la técnica.

## Enfoque sectorial

**Startup.** Con pocas personas, el WIP suele ser naturalmente bajo
simplemente porque no hay suficientes ingenieros para empezar mucho
trabajo simultáneamente. El riesgo es el contrario: quien funda la empresa
o un ingeniero líder haciendo malabares personalmente con muchas más
iniciativas concurrentes de las que se da cuenta, algo que merece medirse
incluso sin herramientas kanban formales.

**Pequeña empresa.** Un tablero visible simple, físico o una herramienta
digital básica, con un límite de columna explícito basta para obtener la
mayor parte del beneficio sin invertir en herramientas sofisticadas de
métricas de flujo. Empieza con un límite generoso y ajústalo gradualmente a
medida que el equipo se siente cómodo con la disciplina.

**Empresa grande.** Un WIP alto es especialmente común y especialmente caro
aquí, porque muchas iniciativas estratégicas concurrentes compiten por la
misma capacidad de ingeniería compartida, y empezar una nueva siempre
parece progreso para quien la patrocinó. Haz visible el WIP a nivel de
cartera, no solo a nivel de equipo, para que el liderazgo pueda ver el
coste de empezar otra iniciativa más antes de terminar las actuales.

**Sector público.** Los programas plurianuales a menudo acumulan un WIP
implícito enorme entre muchos flujos de trabajo, cada uno justificado
individualmente, sin ninguna visibilidad a nivel de toda la organización
sobre el total. Introducir visibilidad del WIP a nivel de cartera, incluso
de manera informal, suele ser el argumento individual más persuasivo para
secuenciar el trabajo en lugar de ejecutarlo todo en paralelo, ya que el
coste de eficiencia de flujo de un WIP alto se agrava visiblemente una vez
medido.

## Ejemplos

**Empresa grande.** El equipo de plataforma de una empresa de servicios
financieros hacía malabares con dieciocho iniciativas concurrentes con
solo doce ingenieros, una razón de WIP a capacidad que nadie había
calculado realmente hasta que un nuevo director de ingeniería la pidió
directamente. La eficiencia de flujo del trabajo del equipo medía menos del
12%. El equipo adoptó un límite explícito de WIP de una iniciativa activa
por cada dos ingenieros, pausando deliberadamente varias iniciativas de
menor prioridad en lugar de seguir repartiendo la capacidad en exceso. El
rendimiento, medido como iniciativas genuinamente completadas por
trimestre, más que se duplicó en dos trimestres, aunque el equipo estaba
visiblemente "haciendo menos" en un momento dado.

**Sector público.** El programa de transformación digital de una agencia
nacional de infraestructuras había acumulado más de cuarenta flujos de
trabajo concurrentes en su cartera, cada uno con su propio patrocinador y
su propia justificación, sin ninguna vista única del trabajo en curso
total. Una revisión de eficiencia de flujo a nivel de programa encontró que
el flujo de trabajo mediano pasaba menos del 15% de su tiempo transcurrido
en desarrollo activo, el resto esperando recursos compartidos: un pequeño
equipo central de revisión de arquitectura, un entorno de pruebas
compartido y una aprobación entre agencias. El programa introdujo límites
explícitos de WIP a nivel de cartera, secuenciando los flujos de trabajo en
lugar de ejecutar los cuarenta en paralelo, y el propio seguimiento de la
agencia mostró una finalización medible más rápida para los flujos de
trabajo que permanecieron activos, incluso cuando el número total en
marcha a la vez cayó bruscamente.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de gestionar la eficiencia de flujo y el WIP de forma
deliberada es contraintuitivo pero está bien documentado: el rendimiento
tiende a subir, no a bajar, cuando una organización hace menos a la vez,
porque menos cambio de contexto y colas más cortas significan que cada
pieza individual de trabajo termina más rápido. El ejemplo de servicios
financieros de arriba, rendimiento duplicado al reducir deliberadamente el
trabajo concurrente, es un patrón común en cuanto las organizaciones
realmente miden y actúan sobre la eficiencia de flujo en lugar de asumir
que más trabajo en paralelo siempre significa más progreso.

El coste total de adoptar esta disciplina es sobre todo organizacional, no
técnico: un tablero visible, un límite de WIP acordado, y la disciplina de
decir que no a empezar trabajo nuevo cuando se alcanza el límite. Esa
disciplina es más difícil de sostener que de adoptar, que es por lo que la
recomendación de "vigilar que el WIP no vuelva a subir" de arriba importa
tanto como la adopción inicial.

## Antipatrones y errores comunes

- **Asumir que el esfuerzo activo domina el tiempo de entrega sin medir la
  eficiencia de flujo:** normalmente equivocado, y desvía el esfuerzo de
  mejora hacia la palanca equivocada.
- **Aplicar un límite de WIP como cuota individual en lugar de restricción
  del sistema:** malinterpreta la técnica y arriesga manipulación
  individual.
- **Empezar trabajo nuevo por reflejo porque se siente como progreso:** el
  hábito central que la eficiencia de flujo y los límites de WIP están
  diseñados para interrumpir.
- **Dejar que las excepciones al límite de WIP se vuelvan rutinarias e
  invisibles:** erosiona la disciplina de vuelta a su estado original sin
  que nadie lo decida a propósito.
- **Medir el WIP solo a nivel de equipo, pasando por alto la sobrecarga a
  nivel de cartera:** común en organizaciones grandes que gestionan muchas
  iniciativas estratégicas concurrentes.
- **Tratar un número bajo de eficiencia de flujo como señal de un mal
  equipo:** es típico de la mayoría de las canalizaciones de entrega y es
  un punto de partida para investigar, no un veredicto.

## Modelo de madurez

- **Nivel 1, Iniciar:** El trabajo en curso no se rastrea; los equipos
  empiezan trabajo nuevo por reflejo sin visibilidad de la carga
  concurrente total.
- **Nivel 2, Desarrollar:** Algunos equipos usan un tablero informal, pero
  los límites de WIP no se exigen de forma consistente y la eficiencia de
  flujo nunca se calcula.
- **Nivel 3, Estandarizar:** Los equipos tienen límites de WIP explícitos y
  visibles a nivel de sistema, y la eficiencia de flujo se mide
  periódicamente a partir de datos reales de tiempo de ciclo.
- **Nivel 4, Gestionar:** Las excepciones al límite de WIP se rastrean
  como decisiones deliberadas y visibles; se monitoriza la erosión de la
  eficiencia de flujo con el tiempo y se investiga cuando cae.
- **Nivel 5, Orquestar:** El WIP es visible y se gestiona a nivel de
  cartera, no solo a nivel de equipo, y la organización puede señalar
  mejoras de rendimiento concretas que resultaron de reducir
  deliberadamente el trabajo concurrente.

## Ideas para el debate

1. ¿Cuál es nuestra eficiencia de flujo real, calculada con honestidad a partir de datos reales?
2. ¿Cuánto trabajo en curso tenemos actualmente que nadie había contado antes de este debate?
3. ¿A qué tendríamos que decir que no para exigir un límite de WIP real?
4. ¿Cuál es el motivo individual más común por el que el trabajo permanece inactivo en nuestra canalización?
5. ¿Dónde en nuestra organización es invisible el WIP a nivel de cartera y probablemente demasiado alto?

## Conclusiones clave

- La **eficiencia de flujo**, la razón entre tiempo activo y tiempo total,
  suele estar por debajo del 25% en canalizaciones de entrega reales; el
  tiempo de espera, no el esfuerzo, domina.
- **Limitar el trabajo en curso tiende a aumentar el rendimiento**, no a
  disminuirlo, al reducir el cambio de contexto y acortar las colas.
- Aplica un **límite de WIP como restricción del sistema**, nunca como
  cuota individual.
- Investiga el **motivo específico** por el que el trabajo permanece
  inactivo en lugar de emitir una directiva genérica de "reducir el tiempo
  de espera".
- Vigila que los límites de WIP **se erosionen mediante excepciones
  rutinarias**; trata cada excepción como una decisión deliberada y
  visible.
- El tema 2.4 nombra esta cantidad **carga de flujo** y el tema 2.7
  formaliza la relación como la ley de Little: el trabajo en curso es igual
  a la tasa de llegada por el tiempo de ciclo, para cualquier cola estable.

## Referencias y lecturas adicionales

- *The Principles of Product Development Flow*, de Donald G. Reinertsen
  (teoría de colas, tamaño de lote y límites de WIP en el desarrollo de
  producto).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, de
  David J. Anderson (el texto fundacional sobre límites de WIP y flujo
  para equipos de software).
- *Actionable Agile Metrics for Predictability*, de Daniel S. Vacanti
  (medición de eficiencia de flujo y previsión basada en flujo).
- *The Goal*, de Eliyahu M. Goldratt (teoría de las restricciones y la
  relación contraintuitiva entre el ajetreo local y el rendimiento del
  sistema).
