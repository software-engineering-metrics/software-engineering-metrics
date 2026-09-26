# 1.1 Por qué medir la ingeniería de software

## Visión general y motivación

La ingeniería de software se resiste a la medición de una manera en que la
manufactura no lo hace. Una línea de fábrica produce unidades idénticas, así
que contarlas dice algo real. El trabajo de software produce artefactos
únicos bajo requisitos en constante cambio, así que un recuento ingenuo, de
commits, de líneas, de tickets cerrados, no dice casi nada sobre el valor
entregado. Esa brecha entre la dificultad de medir el trabajo de software y
la necesidad muy real de saber si va bien es donde vive todo este libro. Este
capítulo trata de cerrar esa brecha con honestidad: no fingiendo que el
trabajo de software es tan contable como los productos de una fábrica, sino
siendo precisos sobre lo que la medición puede y no puede hacer por una
organización de ingeniería.

La medición existe para responder preguntas que una organización no puede
responder con confianza de otra manera: ¿nuestra entrega se está volviendo
más rápida o más lenta?, ¿la calidad está mejorando o degradándose?, ¿los
ingenieros están sufriendo agotamiento?, ¿esta inversión está dando
resultado? Sin métricas, esas preguntas las responde quien hable con más
confianza en la sala, normalmente la persona más veterana o más persuasiva
presente, y esa respuesta con frecuencia es incorrecta. Los equipos de
[ingeniería de software](https://en.wikipedia.org/wiki/Software_engineering)
que se saltan la medición no evitan hacer juicios sobre su propio
desempeño. Simplemente hacen esos juicios basándose en intuición, anécdotas y
el sesgo de lo reciente, en lugar de evidencia.

Para equipos grandes, esto deja de ser algo deseable y se vuelve estructural.
Un equipo de seis personas puede compartir un modelo mental de cómo van las
cosas mediante la conversación diaria. Un departamento de seiscientas
personas, repartidas por husos horarios y unidades de negocio, no puede. A
esa escala, un conjunto de números compartido y confiable es el único
sustituto práctico de la conciencia informal que un equipo pequeño obtiene
gratis. El liderazgo de una empresa grande necesita métricas para asignar
inversión entre docenas de equipos que compiten por el mismo presupuesto.
Las organizaciones de ingeniería del sector público necesitan métricas para
demostrar a las legislaturas y al público que los fondos asignados
produjeron capacidad real, no solo actividad. En ambos contextos, "trabajamos
duro" no es evidencia; un número defendible sí lo es.

## Principios clave

- **Medir para aprender, no para juzgar.** El propósito principal de una
  métrica de ingeniería es informar una decisión, no puntuar a una persona o
  un equipo.
- **Un número sin una decisión asociada es decoración.** Si ninguna lectura
  de una métrica cambiaría lo que haces a continuación, no pertenece a un
  tablero.
- **La medición es un medio, no el objetivo.** El objetivo es mejor software,
  entregado de forma más fiable, por un equipo sostenible. Las métricas
  existen solo para servir a ese objetivo.
- **Toda métrica tiene un coste.** La instrumentación, el tiempo de revisión
  y el riesgo de distorsión del comportamiento cubierto en el capítulo 1.2
  cuestan algo. Una métrica tiene que recuperar ese coste.
- **El silencio también es una decisión.** Elegir no medir algo es una
  elección con consecuencias, no una opción neutral por defecto.

## Recomendaciones

### Parte de la decisión, no del tablero

Antes de instrumentar nada, nombra la decisión que la métrica va a informar.
"Queremos saber si nuestra nueva canalización de despliegue redujo la tasa de
incidentes" es una pregunta con forma de decisión; "vamos a rastrear todo lo
que la herramienta pueda exportar" no lo es. Trabajar hacia atrás desde una
decisión mantiene el conjunto de métricas pequeño y hace que cada casilla sea
defendible cuando alguien pregunte por qué existe. Si no puedes nombrar la
decisión que una métrica informaría, todavía no la construyas. El capítulo
1.3 profundiza en la versión de esta disciplina centrada en resultados sobre
producción.

### Separa el uso diagnóstico del uso evaluativo

Una métrica usada para diagnosticar un problema del sistema (por qué está
aumentando nuestro tiempo de entrega) se comporta de forma completamente
distinta a la misma métrica usada para evaluar a una persona o un equipo
(quién tiene el peor tiempo de entrega). La primera invita a la investigación
y la mejora. La segunda invita a la ocultación y a jugar con el sistema,
porque ahora el número tiene una consecuencia reputacional o económica
asociada. Decide explícitamente, por escrito, para qué uso está pensada una
métrica, y nunca dejes que una métrica diagnóstica se deslice hacia un uso
evaluativo sin reconsiderar deliberadamente el riesgo. Esta distinción
reaparece constantemente a lo largo de este libro y se formaliza en la
sección de no objetivos de la carta de métricas descrita en el capítulo 1.4.

### Trata la medición como una hipótesis, no como un hecho

Una métrica es un indicador indirecto de algo que realmente te importa, no
la cosa en sí misma. La frecuencia de despliegue es un indicador indirecto
de la capacidad de entrega, no la capacidad de entrega en sí misma. Trata
cada métrica como una hipótesis sometida a prueba continua: ¿este número
sigue reflejando lo que nos importa, o el mundo ha cambiado y ha dejado atrás
al indicador? Revisa esa pregunta con una cadencia fija en lugar de asumir
que una métrica bien elegida hace dos años sigue estando bien elegida hoy,
especialmente a medida que cambian las herramientas, la estructura del
equipo o (véase la parte 7) la naturaleza del propio trabajo.

### Haz visible la ausencia de medición

En organizaciones grandes, el vacío más arriesgado no es una métrica mala,
es un área que nadie mide en absoluto porque es difícil de instrumentar: la
experiencia del desarrollador, la fricción de dependencias entre equipos, la
erosión del conocimiento institucional. Nombra estos vacíos explícitamente en
tu carta de métricas en lugar de dejar que permanezcan invisibles por
defecto. Una organización que sabe qué no está midiendo, y por qué, está en
una posición mucho más sólida que otra que ha olvidado en silencio que esas
áreas existen.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Instrumentación intensiva, muchas métricas | Visibilidad amplia, menos puntos ciegos | Fatiga del tablero, mayor superficie para jugar con el sistema, mayor coste de mantenimiento |
| Métricas mínimas, guiadas por decisiones | Foco, bajo coste, cada métrica defendible | Riesgo de pasar por alto un problema emergente fuera del conjunto elegido |
| Métricas solo para diagnóstico | Fomenta un reporte y una investigación honestos | El liderazgo puede seguir usándolas informalmente de forma evaluativa |
| Métricas ligadas a la evaluación individual | Se siente responsable, fácil de explicar a directivos | Fuerte incentivo para jugar con el sistema; daña la confianza; suele medir lo equivocado |

La tensión central es **cobertura frente a foco**, y se agudiza con
**diagnóstico frente a juicio**. Con muy pocas métricas desarrollas puntos
ciegos que solo salen a la luz como una crisis; con demasiadas nadie puede
actuar sobre ninguna de ellas, y cada una a la que asocias un peso evaluativo
invita a la distorsión. Resuélvelo empezando de forma mínima y guiada por
decisiones, añadiendo una métrica solo cuando una decisión específica y
nombrada la necesite, y defendiendo explícitamente el límite de solo
diagnóstico en el trabajo de gobernanza del capítulo 1.4 en lugar de dejar
que se erosione por defecto.

## Preguntas para debatir con tu equipo

1. **Para cada métrica de nuestro tablero actual, ¿qué decisión
   desencadenarían una buena lectura y una mala lectura?** Si ambas lecturas
   llevan a la misma acción, o a ninguna acción en absoluto, la métrica es
   decoración. Recorre tu tablero casilla por casilla y fuerza una respuesta
   honesta para cada una. Este ejercicio suele reducir a la mitad un tablero
   sobrecargado en una sola sesión, porque la mayor parte del desorden se
   acumula por métricas que nadie retira, no por métricas que alguien añadió
   deliberadamente por una razón que todavía se sostiene.

2. **¿Cuáles de nuestras métricas se usan de forma diagnóstica, y cuáles se
   han vuelto evaluativas en silencio?** Una métrica construida para
   entender una restricción del sistema puede derivar hacia usarse para
   clasificar equipos o individuos sin que nadie lo decida a propósito, a
   menudo mediante un comentario casual en una reunión de revisión que se
   convierte en costumbre. Una vez que ocurre esa deriva, el número deja de
   ser confiable, porque ahora la gente tiene un motivo para hacer que se
   vea bien en lugar de hacer que sea preciso. Nombra por escrito el uso
   previsto de cada métrica y compara la práctica actual con él.

3. **¿Qué no estamos midiendo porque es difícil de instrumentar, y qué nos
   está costando ese vacío?** Los puntos ciegos más peligrosos son
   precisamente los que nunca llegan a un tablero por su resistencia a una
   medición fácil: la fricción de dependencias entre equipos, la erosión del
   conocimiento institucional o la acumulación silenciosa de soluciones
   frágiles. Trae una lista de las cosas que todos se preocupan en privado
   pero que nadie rastrea, y sé honesto sobre el motivo.

4. **Si eliminásemos esta métrica mañana, ¿quién lo notaría, y qué
   perdería?** Una métrica que nadie echaría de menos es una métrica que no
   está informando ninguna decisión. Esta pregunta saca a la luz casillas de
   vanidad que sobreviven puramente por inercia. Para una organización
   grande con docenas de tableros de equipo, esta disciplina de poda importa
   tanto como la disciplina de añadir métricas nuevas.

5. **¿Cuánto cuesta realmente producir y mantener cada métrica de nuestro
   tablero, incluyendo el tiempo de ingeniería detrás de la
   instrumentación?** Las métricas no son gratis. Las canalizaciones, los
   tableros y el tiempo de revisión dedicado a discutir un número conllevan
   un coste recurrente fácil de subestimar porque está repartido entre
   muchas tareas pequeñas en lugar de concentrarse en una sola partida
   visible. Trae tu esfuerzo real de instrumentación y mantenimiento y
   ponlo en la balanza junto al valor de decisión de la pregunta 1.

6. **¿Dónde se ha convertido la medición en un sustituto del juicio, y dónde
   se ha convertido el juicio en un sustituto de la medición?** Ambos modos
   de fallo son reales. Un equipo que delega cada decisión a un tablero
   pierde el juicio contextual que detecta lo que el número pasa por alto;
   un equipo que ignora los datos disponibles a favor de la voz más alta en
   la sala repite el mismo problema con el que abre este capítulo. El
   objetivo son métricas que informen el juicio, no métricas que lo
   reemplacen.

## Enfoque sectorial

**Startup.** Con un puñado de ingenieros, la mayor parte de lo que este
capítulo advierte, la deriva hacia el uso evaluativo, los puntos ciegos, la
sobrecarga del tablero, es fácil de evitar simplemente porque todos hablan a
diario. El riesgo es el contrario: saltarse la medición por completo porque
se siente como una sobrecarga que el equipo no puede permitirse. Elige dos o
tres preguntas con forma de decisión (¿estamos entregando lo bastante
rápido?, ¿se mantiene la calidad?) e instrumenta solo esas.

**Pequeña empresa.** Sin una plataforma dedicada ni un equipo de datos,
apóyate en lo que ya reportan tus herramientas existentes en lugar de
construir instrumentación personalizada. El tablero de un procesador de
pagos, las métricas de respuesta de una herramienta de soporte y el
historial de compilaciones de tu proveedor de integración continua suelen
cubrir las decisiones más importantes. Resiste la tentación de comprar una
plataforma de analítica de ingeniería dedicada antes de haber demostrado que
actuarás sobre lo que te diga.

**Empresa grande.** El riesgo principal son las métricas que derivan en
silencio de un uso diagnóstico a uno evaluativo a medida que ascienden por
las capas de gestión, y los tableros que crecen por acumulación porque nadie
tiene a su cargo la tarea de podarlos. La gobernanza (capítulo 1.4) no es
opcional a esta escala. Estandariza las definiciones entre unidades de
negocio y construye una revisión periódica de retiro dentro del propio
programa de métricas.

**Sector público.** Aquí las métricas suelen llevar peso estatutario o
presupuestario, lo que aumenta tanto el valor de acertar como el coste de
equivocarse. Un número reportado a una legislatura o a un organismo
supervisor necesita una metodología documentada, una definición estable
entre periodos de reporte y honestidad sobre sus límites. Trata "actualmente
no medimos esto" como una respuesta que podrías necesitar defender, no como
un fallo privado que ocultar.

## Ejemplos

**Empresa grande.** La organización de ingeniería de una aseguradora global
había crecido hasta superar los sesenta equipos scrum, cada uno con su
propio tablero informal, ninguno comparable con otro. El liderazgo no podía
responder una pregunta básica: cuál de nuestras diez inversiones
estratégicas en la plataforma está entregando software realmente más rápido.
La solución no fueron más métricas, fueron menos y mejores: la organización
definió un núcleo compartido y guiado por decisiones de métricas DORA
(capítulo 2.10) calculado de forma idéntica en todas partes a partir de los
mismos datos de la canalización, retiró cuarenta tableros específicos de
equipo y, en dos trimestres, por fin pudo comparar áreas de inversión sobre
una base común.

**Sector público.** El equipo de servicio digital de una agencia tributaria
nacional había recibido el encargo, por parte de un comité de supervisión,
de demostrar el retorno de un programa de modernización de varios años. Las
métricas existentes del equipo eran totalmente internas y basadas en
actividad: puntos de historia completados, sprints cerrados. Nada de eso
respondía a la pregunta real del comité. El equipo construyó en su lugar un
pequeño conjunto de métricas de resultado, tiempo medio para resolver la
incidencia de una declaración de un ciudadano, tasa de adopción del canal
digital y tasa de defectos escapados en el nuevo sistema, y las reportó
trimestralmente con una metodología documentada. Las preguntas del comité
pasaron de "demuestra que estás trabajando" a "cómo replicamos esto en la
siguiente agencia", que es el resultado que un conjunto de métricas bien
elegido debe producir.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de la medición deliberada es la calidad de las decisiones. Una
organización que puede decir, con evidencia, "nuestro tiempo de entrega
mejoró un 30% tras la inversión en la plataforma" puede defender esa
inversión, repetir lo que funcionó y detener lo que no. Una organización que
depende de la anécdota no puede hacer nada de eso con confianza, y termina
relitigando los mismos argumentos en cada ciclo presupuestario porque nadie
puede señalar un número en el que ambas partes confíen.

El coste de la medición no es el tablero. Es la disciplina continua: la
instrumentación, el mantenimiento de definiciones y la poda periódica que
recomienda este capítulo. Ese coste total de propiedad es real pero modesto
comparado con el coste de la alternativa, que es una organización grande
tomando decisiones tecnológicas de varios millones basándose en quien
argumentó de forma más persuasiva en la sala. El retorno de un programa de
métricas no son las métricas en sí; son las decisiones que se toman mejor
gracias a ellas.

## Antipatrones y errores comunes

- **Medir todo lo que la herramienta exporta:** convierte un tablero en
  ruido e invita a jugar con el sistema en una superficie enorme sin ningún
  valor de decisión correspondiente.
- **Métricas sin una decisión nombrada:** decoración que cuesta esfuerzo de
  mantenimiento y no le dice nada útil a nadie.
- **Deriva silenciosa de uso diagnóstico a evaluativo:** la forma más rápida
  de destruir la confianza en un número.
- **Tratar una métrica como un hecho en lugar de una hipótesis:** un
  indicador que era correcto hace dos años puede estar equivocado hoy, y
  nadie lo comprueba.
- **Confundir la ausencia de un número malo con la presencia de uno bueno:**
  una métrica que nunca miras no puede decirte que algo va mal.
- **Construir capacidad de medición antes de decidir qué decidir:** la
  instrumentación en busca de una pregunta desperdicia tiempo de ingeniería
  real.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas, si existen, son improvisadas,
  personales de quien las construyó, y nadie puede decir qué decisión
  informa cada una.
- **Nivel 2, Desarrollar:** Existe un conjunto básico de métricas para
  algunos equipos, en su mayoría copiadas de un marco de referencia o de los
  valores por defecto de una herramienta, sin un vínculo claro con una
  decisión.
- **Nivel 3, Estandarizar:** Cada métrica rastreada tiene un propósito
  documentado y una clasificación explícita de diagnóstico frente a
  evaluación, aplicada de forma consistente en toda la organización.
- **Nivel 4, Gestionar:** Las métricas se revisan con una cadencia fija
  frente a las decisiones que informan; las métricas que dejan de merecer su
  mantenimiento se retiran, y todo el conjunto se mide tanto por coste como
  por valor.
- **Nivel 5, Orquestar:** La medición es una capacidad viva: la
  organización identifica rutinariamente sus propios puntos ciegos,
  comprueba si sus indicadores indirectos siguen reflejando la realidad, y
  trata el propio programa de métricas como algo que mejorar, no solo
  mantener.

## Ideas para el debate

1. ¿Qué métrica de nuestro tablero nos costaría más justificar mantener si nos preguntasen hoy?
2. ¿Qué decisión hemos tomado en el último trimestre usando una métrica, en lugar de una opinión?
3. ¿Dónde de nuestra organización una métrica diagnóstica se ha vuelto evaluativa en silencio?
4. ¿Qué tenemos miedo de medir, y por qué?
5. Si nuestro programa de métricas desapareciera mañana, ¿qué decisiones empeorarían?

## Conclusiones clave

- La medición existe para servir a las **decisiones**, no para existir por sí
  misma; una métrica sin una decisión asociada es decoración.
- Mantén el uso **diagnóstico** separado del uso **evaluativo**, por escrito,
  y vigila la deriva silenciosa entre ambos.
- Trata cada métrica como una **hipótesis** sobre lo que representa, no como
  un hecho asentado, y revisa esa hipótesis con una cadencia fija.
- El silencio, elegir no medir algo, es en sí mismo una decisión con
  consecuencias; haz visibles los puntos ciegos en lugar de dejar que
  permanezcan invisibles por defecto.
- El coste total de un programa de métricas es real; ponlo explícitamente en
  la balanza frente al valor de decisión que aporta cada métrica.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble y Gene Kim (la base de investigación para la medición de
  ingeniería basada en resultados).
- *How to Measure Anything*, de Douglas W. Hubbard (un marco general para
  cuantificar cosas que parecen inmedibles).
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin
  (el análisis fundacional de la disfunción que la medición puede introducir
  en una organización).
- *Thinking, Fast and Slow*, de Daniel Kahneman (los sesgos cognitivos que
  hacen del juicio no asistido un sustituto poco fiable de la medición).
- El programa de Investigación y Evaluación de DevOps (DORA) de Google,
  [dora.dev](https://dora.dev/) (la investigación continua sobre el estado
  de DevOps en la que se apoya este libro a lo largo de todo el texto).
