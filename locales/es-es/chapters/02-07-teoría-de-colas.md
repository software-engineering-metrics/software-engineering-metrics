# 2.7 Teoría de colas

## Visión general y motivación

La **[teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory)** es
el estudio matemático de las líneas de espera. Suena como algo extraño
para un libro sobre métricas de ingeniería de software hasta que te das
cuenta de cuánto de una canalización de entrega en realidad es una cola:
una solicitud de incorporación de cambios esperando a un revisor, un
commit esperando a un ejecutor de integración continua, un ticket
esperando a que lo recojan, un mensaje de soporte al cliente esperando una
respuesta. El capítulo 2.4 ya presentó la carga de flujo y el tiempo de
flujo y mostró que sobrecargar una cadena de valor ralentiza bruscamente la
entrega, y los capítulos 2.5 y 2.6 mostraron que la mayor parte del tiempo
de entrega es tiempo de espera, no tiempo de trabajo. La teoría de colas es
las matemáticas subyacentes que explican por qué todo eso es cierto, no
solo un patrón observado.

El resultado individual más útil es la **[ley de
Little](https://en.wikipedia.org/wiki/Little%27s_law)**, un teorema
demostrado por el investigador de operaciones John Little en 1961: el
número promedio de elementos en un sistema estable es igual a la tasa
promedio a la que llegan los elementos, multiplicada por el tiempo promedio
que cada elemento pasa en el sistema. El capítulo 2.4 ya usó este resultado
bajo los propios nombres del Flow Framework, la carga de flujo es igual a
la tasa de llegada por el tiempo de flujo. En el vocabulario más amplio de
este libro también se lee como que el trabajo en curso (capítulo 2.5) es
igual a la tasa de llegada de trabajo nuevo multiplicada por el tiempo de
ciclo (capítulo 2.6). Esto no es una regla general ni una correlación
observada en algunos estudios. Es una demostración que se cumple para
cualquier cola estable, sin importar qué esté procesando la cola ni cómo
decida qué trabajar a continuación.

Para un equipo grande, esa generalidad es lo importante. La ley de Little
te da una comprobación de cordura que funciona de forma idéntica tanto si
la cola es un tablero kanban, un intermediario de mensajes o una
canalización de integración continua compartida. Si tu trabajo en curso,
tasa de llegada y tiempo de ciclo medidos no satisfacen aproximadamente la
ecuación, uno de tus tres números está mal, normalmente por una definición
inconsistente de qué cuenta como "en curso" o "llegado". Las organizaciones
grandes y del sector público gestionan docenas de estas colas a la vez,
grupos de revisión de código compartidos, entornos de pruebas compartidos,
consejos de aprobación compartidos, y la ley de Little es la herramienta
más barata disponible para detectar una definición de métrica mala antes
de que impulse una mala decisión de personal o de proceso.

## Principios clave

- **La ley de Little es una demostración, no una heurística.** El trabajo
  en curso es igual a la tasa de llegada por el tiempo de ciclo, para
  cualquier cola estable, y es una comprobación rápida de si tus métricas
  de entrega son internamente consistentes.
- **La utilización no escala de forma lineal con el tiempo de espera.** A
  medida que un recurso compartido se acerca a la utilización completa, el
  retraso de cola crece de forma brusca, no gradual. Un recurso funcionando
  al 95% de ocupación suele esperar muchas veces más que uno funcionando al
  80%, no solo "un poco peor".
- **El promedio de una cola oculta su peor caso.** Reportar solo el tiempo
  de espera medio esconde la cola larga y dolorosa cerca de la capacidad,
  precisamente lo que advierte el capítulo 1.6 sobre usar percentiles en
  lugar de promedios.
- **Cómo se define una cola se puede manipular tan fácilmente como
  cualquier otra métrica.** Si algo cuenta como "llegado", "en curso" o
  "atendido" es una elección, y se puede ajustar para favorecer un tablero
  sin cambiar lo que realmente le ocurre al trabajo.
- **Una canalización suele ser una cola de colas.** Una canalización de
  entrega encadena varias etapas, y la etapa más lenta marca el ritmo de
  toda la cadena sin importar lo rápido que funcionen las demás.

## Recomendaciones

### Usa la ley de Little para comprobar tus propios números antes de confiar en ellos

Toma el trabajo en curso promedio medido de tu equipo, su tasa de llegada
promedio de elementos nuevos por semana, y su tiempo de ciclo promedio, y
comprueba si el trabajo en curso es aproximadamente igual a la tasa de
llegada multiplicada por el tiempo de ciclo. Cuando no lo sea, no asumas
que la teoría está equivocada. Busca la causa real: un límite de etapa
contado de forma inconsistente, trabajo que permanece "bloqueado" pero
sigue contando como en curso, o una tasa de llegada medida en una ventana
distinta del tiempo de ciclo. Esta única comprobación detecta más mala
instrumentación de la que la mayoría de los equipos encuentran de
cualquier otra forma.

### Rastrea la utilización directamente para cada recurso compartido y limitado en capacidad

Identifica los recursos que tu canalización de entrega comparte entre
muchos equipos, un grupo de revisión de código, un clúster de integración
continua, un entorno de preproducción, y mide qué tan ocupado funciona cada
uno como proporción de su capacidad disponible, antes de planear hacerlo
funcionar cerca de su límite. Un grupo de revisores compartido funcionando
cerca de la capacidad completa produce tiempos de espera de cola de
revisión que crecen mucho más rápido que el modesto aumento de demanda que
los causó, precisamente la dinámica detrás del consejo del capítulo 2.9 de
vigilar el tiempo hasta la primera revisión como indicador adelantado.

### Separa la tasa de llegada, la tasa de éxito, la tasa de fallo y la tasa de abandono

Resiste la tentación de fusionar todo lo que sale de una cola en un único
número de "rendimiento" o "tasa de servicio". Rastrea cuatro cosas por
separado: con qué rapidez llega el trabajo, qué parte termina con éxito,
qué parte fallo y necesita retrabajo, y qué parte se abandona o se
descarta en silencio antes de que alguien la termine. Una canalización que
parece rápida porque su tasa de abandono subió en silencio en realidad no
está entregando más, y solo rastrear estas cuatro tasas por separado te lo
mostrará.

### Modela las canalizaciones multietapa como una cola de colas

Trata una canalización de entrega, o cualquier proceso multietapa, un
ciclo de vida de incidencias, un proceso de contratación, como una cadena de
colas en lugar de una masa indiferenciada de "tiempo". La tasa de llegada
general la fija la primera etapa, la tasa de finalización general la fija
la última etapa, y los recuentos totales de error y abandono de la
canalización son la suma de los de cada etapa. Este enfoque te dice de
inmediato en qué etapa merece la pena invertir: la que tiene la peor
combinación de alta utilización y alta tasa de fallo o abandono, no la que
resulta ser más fácil de instrumentar.

### Fija los límites de personal y de trabajo en curso teniendo en cuenta la utilización, no solo el rendimiento

Cuando decidas cuántos revisores o ejecutores de integración continua
necesita un equipo, no dimensiones la capacidad para que coincida
exactamente con la tasa de llegada promedio. Una cola funcionando al 100%
de utilización en promedio tiene, en la práctica, un tiempo de espera
efectivamente infinito, porque las llegadas reales son desiguales, no
perfectamente suaves. Planea deliberadamente un margen, y trata "nuestros
revisores casi siempre están ocupados" como una señal de alerta sobre los
tiempos de espera por venir, no como evidencia de una dotación de recursos
eficiente.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin modelo formal de colas, dotación de recursos a ojo | Rápido de empezar; sin vocabulario nuevo para el equipo | Subestima de forma consistente cuánto se dispara el tiempo de espera cerca de la capacidad completa |
| La ley de Little como comprobación de cordura sobre métricas existentes | Barata, no requiere herramientas nuevas, detecta rápido definiciones malas | Solo comprueba consistencia, no diagnostica por sí sola la causa |
| Simulación de colas completa (distribuciones de llegada, múltiples servidores) | Predicción más precisa del comportamiento del tiempo de espera bajo carga | Requiere habilidad estadística real y un mantenimiento que la mayoría de los equipos no sostendrá |
| Rastreo de utilización en recursos compartidos sin modelado más profundo | Sencillo, accionable, detecta la causa individual más grande de tiempos de espera desbocados | No dice nada sobre por qué la utilización es alta ni qué hacer con la causa subyacente |

La tensión central es **rigor frente a adopción**. Una simulación de colas
completa da la respuesta más precisa, pero casi ningún equipo de
ingeniería construirá y mantendrá una, y un modelo en el que nadie confía
ni actualiza es peor que ningún modelo. La ley de Little y el rastreo
básico de utilización renuncian a algo de precisión pero no requieren
habilidad estadística especializada y encajan directamente en las métricas
que un equipo ya recoge para los capítulos 2.4 a 2.6. Recurre por defecto
a esas comprobaciones baratas y adoptables, y reserva la simulación
completa para el caso raro en que un único recurso compartido, una flota
grande de integración continua, un grupo de revisión especializado, sea lo
bastante caro como para justificar la inversión.

## Preguntas para debatir con tu equipo

1. **¿Satisfacen realmente la ley de Little nuestro trabajo en curso,
   nuestra tasa de llegada y nuestro tiempo de ciclo medidos, y si no, por
   qué no?** Este es el diagnóstico individual más rápido disponible para
   una definición de métrica mala. Repasa los números reales juntos, y si
   la ecuación no se cumple aproximadamente, rastrea el desajuste hasta una
   inconsistencia de definición específica en lugar de descartar la
   comprobación.

2. **¿Qué recursos compartidos de nuestra canalización de entrega funcionan
   cerca de la utilización completa, y sabemos realmente su número de
   utilización?** La mayoría de los equipos pueden nombrar un recurso que
   "siempre se siente ocupado" pero nunca han medido su utilización
   directamente. Identifica los dos o tres recursos compartidos más
   limitados y consigue un número real para cada uno.

3. **¿Estamos mezclando éxito, fallo y abandono en un único número de
   rendimiento, y qué veríamos si los separáramos?** Un único recuento de
   "elementos completados" puede subir incluso mientras la calidad cae o el
   trabajo se abandona en silencio. Recalcula el rendimiento de un periodo
   reciente como tres números separados y debate qué revela el reparto que
   el número mezclado ocultaba.

4. **¿Dónde está el verdadero cuello de botella de nuestra canalización, la
   etapa más lenta que marca el ritmo de todo lo que viene después de
   ella?** Los equipos a menudo invierten en acelerar la etapa que es más
   fácil de mejorar en lugar de la que realmente restringe el rendimiento
   total. Identifica la etapa con la peor combinación de alta utilización y
   alta tasa de fallo o abandono.

5. **Si añadiéramos capacidad a nuestro recurso compartido más limitado,
   ¿mejoraría realmente el tiempo de espera, o simplemente se expandiría la
   demanda para llenarlo?** Esta pregunta separa una escasez de capacidad
   genuina de un problema de demanda, y la respuesta cambia si la solución
   correcta es más personal, un límite de trabajo en curso, o un cambio en
   cómo se prioriza el trabajo antes de que entre en la cola.

6. **¿Hemos redefinido alguna vez qué cuenta como "en curso" o "llegado" de
   una forma que hizo que un tablero se viera mejor sin cambiar lo que
   realmente le ocurrió al trabajo?** Esto merece preguntarse con
   honestidad y de forma específica, con ejemplos reales del último año, en
   lugar de tratarlo como una preocupación hipotética.

## Enfoque sectorial

**Startup.** Con un puñado de ingenieros, la mayoría de las colas son lo
bastante cortas como para que el análisis formal de colas resulte
excesivo. El hábito útil es más pequeño: nota cuándo una persona, a menudo
el ingeniero más veterano, se ha convertido en un recurso compartido de
facto sobre el que espera todo lo demás, y trátalo como un problema de
utilización que merece nombrarse incluso sin ningún modelo formal detrás.

**Pequeña empresa.** Un equipo de pequeña empresa rara vez necesita algo
más sofisticado que rastrear la utilización de su uno o dos recursos
genuinamente compartidos, a menudo un único revisor o una única
canalización de despliegue, y vigilar el punto en que "normalmente
disponible" se convierte en silencio en "normalmente el cuello de
botella". Una hoja de cálculo basta; no hace falta una herramienta
dedicada a esta escala.

**Empresa grande.** Los recursos compartidos se multiplican rápido a
escala de empresa grande: un equipo central de plataforma, un consejo de
revisión de seguridad compartido, una flota de integración continua
compartida que sirve a docenas de equipos de producto. Estos son
precisamente los recursos donde el rastreo de utilización se gana su
lugar, porque un único recurso compartido sobrecargado puede degradar en
silencio el tiempo de entrega de cada equipo que depende de él, y las
métricas propias de ningún equipo individual revelarán una causa que vive
fuera de su propia canalización.

**Sector público.** Los programas de entrega multiagencia y
multiproveedor a menudo dirigen el trabajo a través de consejos de
aprobación compartidos, procesos de acreditación de seguridad compartidos
y entornos de pruebas compartidos que ningún equipo individual controla ni
puede redimensionar por su cuenta. El análisis de colas de estas puertas
compartidas, tasa de llegada, capacidad, utilización, suele ser la
evidencia más clara disponible para un caso de negocio que busque añadir
capacidad o cambiar cómo se agrupa el trabajo antes de llegar a la puerta.

## Ejemplos

**Empresa grande.** El equipo de plataforma interna de un proveedor de
infraestructura en la nube notó que el tiempo de entrega para cambios
(capítulo 2.10) había subido gradualmente en todos los equipos de producto
que dependían de su flota de integración continua compartida, aunque
ningún equipo individual había cambiado cómo trabajaba. Un análisis de
utilización encontró la flota funcionando por encima del 90% de ocupación
durante las horas centrales, bien pasado el punto en que la teoría de colas
predice que el tiempo de espera crece de forma brusca en lugar de gradual.
El equipo de plataforma añadió capacidad de integración continua e
introdujo una política de programación por reparto justo para que ningún
estallido de actividad de un único equipo pudiera monopolizar la cola. El
tiempo de espera mediano de integración continua cayó a más de la mitad en
un mes, evidencia de que el cuello de botella había sido, todo el tiempo,
una cola compartida e invisible.

**Sector público.** El equipo de servicio digital de una agencia nacional
de permisos rastreó el procesamiento de solicitudes como un único número
de rendimiento de "casos cerrados por semana" durante dos años, y el
número se veía estable. Un análisis más detenido, dividiendo ese número en
casos aprobados, rechazados y abandonados por los solicitantes después de
largos retrasos, encontró que la tasa de abandono casi se había triplicado
en el mismo periodo mientras las aprobaciones se mantenían planas. La ley
de Little, aplicada a la cola de gestores de casos, mostró que el trabajo
en curso había crecido mucho más allá de lo que implicaba el tiempo de
procesamiento promedio declarado por el equipo, lo que significaba que los
casos se estaban acumulando en silencio en un estado que no se contaba
como "en espera". La agencia reestructuró sus definiciones de seguimiento
de casos para contar honestamente cada caso abierto y añadió capacidad de
gestores de casos dimensionada para mantener la utilización por debajo del
85%, ahora rastreada como un objetivo operativo permanente junto al número
de rendimiento.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de aplicar un análisis básico de colas es que convierte "la
canalización se siente lenta" en una decisión concreta y defendible, añade
margen a este recurso compartido, divide esta métrica mezclada en sus
componentes reales, en lugar de un empujón vago hacia "trabajar más
rápido" que pasa por alto la causa real. El ejemplo del proveedor de
infraestructura en la nube de arriba, tiempo de espera reducido a la mitad
gracias a una solución de capacidad y programación en lugar de cualquier
cambio en el comportamiento de los equipos individuales, es el patrón que
este análisis produce de forma fiable: la solución casi siempre es más
barata que pedirle a cada equipo aguas abajo que se mueva más rápido
alrededor de un cuello de botella que no puede ver.

El coste total de adopción es genuinamente bajo. La ley de Little y el
rastreo de utilización no necesitan ninguna herramienta nueva más allá de
lo que los capítulos 2.4 a 2.6 ya te piden que recojas: tasa de llegada,
trabajo en curso y tiempo de ciclo. La inversión es sobre todo disciplina
analítica, comprobar los números entre sí y revisar periódicamente la
utilización de los recursos compartidos antes de que se conviertan en la
próxima regresión inexplicada de tiempo de entrega de la organización.

## Antipatrones y errores comunes

- **Dimensionar la capacidad de un recurso compartido para que coincida
  exactamente con su tasa de llegada promedio:** garantiza una alta
  utilización y tiempos de espera desbocados en cuanto la demanda sea
  desigual aunque sea brevemente.
- **Reportar solo el tiempo de espera medio, nunca un percentil:** esconde
  la cola larga que más importa a las personas que esperan en ella.
- **Mezclar éxito, fallo y abandono en un único número de rendimiento:**
  el vector de manipulación central de este capítulo. Un equipo bajo
  presión puede hacer que el rendimiento se vea sano dejando que suba en
  silencio la tasa de abandono, tickets abandonados, solicitudes
  descartadas en silencio, trabajo que nunca se cuenta como un fallo. La
  barrera de contención es rastrear la tasa de llegada, éxito, fallo y
  abandono como cuatro números separados y visibles, la misma disciplina
  que pide el capítulo 1.2 para cada métrica de este libro, para que una
  tasa de abandono creciente no pueda esconderse detrás de un gráfico de
  rendimiento plano.
- **Tratar "nuestra gente siempre está ocupada" como un cumplido:** es un
  síntoma de alta utilización, la causa principal de tiempos de espera
  largos e impredecibles.
- **Redefinir "en curso" para reducir en silencio el trabajo en curso:**
  mueve el trabajo a un estado no contado, "bloqueado", "en espera", sin
  cambiar cuánto tarda en terminarse, y rompe la comprobación de la ley de
  Little que de otro modo lo habría detectado.
- **Asumir que un modelo de colas no necesita mantenimiento una vez
  construido:** los patrones de llegada y la capacidad cambian
  constantemente, y un modelo obsoleto produce predicciones confiadas y
  equivocadas.

## Modelo de madurez

- **Nivel 1, Iniciar:** Ninguna cola se mide explícitamente; el tiempo de
  espera se discute de forma anecdótica como "las cosas se sienten
  lentas".
- **Nivel 2, Desarrollar:** La tasa de llegada, el trabajo en curso y el
  tiempo de ciclo se rastrean para al menos una canalización, pero nunca se
  comprueban contra la ley de Little ni contra la utilización de recursos
  compartidos.
- **Nivel 3, Estandarizar:** La ley de Little es una comprobación de
  consistencia rutinaria entre canalizaciones de entrega, y la utilización
  se rastrea explícitamente para los recursos compartidos más
  significativos.
- **Nivel 4, Gestionar:** La tasa de éxito, fallo y abandono se rastrean
  por separado para cada cola significativa, y las decisiones de capacidad
  usan objetivos de utilización, no solo la demanda promedio.
- **Nivel 5, Orquestar:** La organización modela sus canalizaciones
  principales como colas de colas, identifica los cuellos de botella
  reales de forma sistemática, y puede señalar cambios concretos de
  capacidad o proceso hechos gracias al análisis de colas, con una mejora
  medible del tiempo de espera que lo demuestre.

## Ideas para el debate

1. Elige una de nuestras canalizaciones de entrega y comprueba si sus números satisfacen hoy la ley de Little.
2. Nombra el único recurso compartido de nuestra organización que la mayoría estaría de acuerdo en que "siempre está ocupado", y encuentra su número real de utilización.
3. ¿Cómo se vería nuestro gráfico de rendimiento si lo dividiéramos en tasas de éxito, fallo y abandono del último trimestre?
4. Si tuviéramos que añadir capacidad a exactamente un recurso compartido este año, ¿a cuál, y qué evidencia lo justificaría?

## Conclusiones clave

- **La ley de Little**, el trabajo en curso es igual a la tasa de llegada
  por el tiempo de ciclo, es una demostración, no una heurística, y es la
  comprobación más barata disponible sobre si tus métricas de entrega son
  internamente consistentes.
- **El tiempo de espera crece de forma brusca, no gradual, a medida que la
  utilización se acerca a la capacidad completa.** Trata "siempre ocupado"
  como una señal de alerta, no como un cumplido.
- Rastrea la **tasa de llegada, tasa de éxito, tasa de fallo y tasa de
  abandono** por separado; mezclarlas en un único número de rendimiento es
  el vector de manipulación central de este capítulo.
- Modela una canalización multietapa como una **cola de colas**, e invierte
  en la etapa con la peor combinación de alta utilización y alta tasa de
  fallo o abandono, no en la etapa que resulta más fácil de mejorar.
- Favorece las comprobaciones baratas y adoptables, **la ley de Little y el
  rastreo de utilización**, frente a una simulación de colas completa que
  pocos equipos sostendrán.

## Referencias y lecturas adicionales

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
