# 4.5 Medición de la deuda técnica

## Visión general y motivación

La **[deuda técnica](https://en.wikipedia.org/wiki/Technical_debt)**, una
metáfora acuñada por Ward Cunningham, describe el coste acumulado de atajos
pasados, decisiones expeditivas que permitieron enviar algo antes pero
dejaron la base de código más difícil de cambiar después, de la misma
manera que la deuda financiera te permite gastar ahora a costa de intereses
después. Toda base de código lleva algo de deuda técnica, y eso no es
automáticamente un fracaso; el valor real de la metáfora es que enmarca la
deuda como una compensación gestionable en lugar de un secreto vergonzoso o
una carga permanente e inevitable. Este capítulo trata de hacer esa
compensación visible y gestionable mediante la medición, en lugar de
dejarla como una preocupación vaga y perpetuamente despriorizada que todo
ingeniero percibe pero sobre la que nadie puede actuar con evidencia.

Los capítulos que preceden a este, complejidad (4.1), cobertura (4.2),
cambios acumulados y puntos calientes (4.3), y análisis estático (4.4),
cada uno saca a la luz una faceta de la deuda técnica. El trabajo de este
capítulo es la síntesis: convertir esas señales separadas, más los elementos
que nunca aparecen en ningún escaneo automatizado (un atajo arquitectónico
no documentado, una migración deliberadamente aplazada), en una única lista
acumulada visible y priorizada que compite de manera justa por la inversión
frente al trabajo de funcionalidades, en lugar de perder esa competencia por
defecto simplemente porque no tiene ninguna métrica asociada ni ningún
defensor en las reuniones de planificación.

Para los equipos grandes, la deuda técnica no gestionada se acumula de una
manera genuinamente peligrosa y fácil de subestimar: cada nuevo atajo hace
que el siguiente cambio sea ligeramente más difícil, lo que crea presión
para más atajos, lo que se acumula aún más. Las organizaciones
empresariales y gubernamentales que mantienen sistemas durante muchos años
están especialmente expuestas a este efecto acumulativo, y la
recomendación central de este capítulo, una lista acumulada de deuda
visible, cuantificada y priorizada, es el mecanismo que permite a una
organización realmente gestionar la compensación de forma deliberada en
lugar de ir a la deriva hacia una crisis.

## Principios clave

- **La deuda técnica es una metáfora deliberada para una compensación
  gestionable, no un secreto vergonzoso.** Algo de deuda, asumida a
  sabiendas, es una decisión de negocio razonable.
- **La deuda no medida pierde la competencia de priorización frente al
  trabajo de funcionalidades por defecto**, no porque importe menos, sino
  porque no tiene ningún defensor visible.
- **Cuantifica la deuda en términos que quienes toman decisiones puedan
  sopesar: coste de corregirla frente al coste de mantenerla.** Una
  afirmación vaga de "el código está desordenado" rara vez compite bien
  contra una solicitud de funcionalidad concreta.
- **La deuda se acumula.** Cada nuevo atajo hace que los cambios futuros
  sean marginalmente más difíciles, y ese efecto se acelera si no se
  gestiona.
- **No toda deuda debe pagarse.** Alguna vale la pena mantenerla
  indefinidamente si el coste de corregirla supera el coste de vivir con
  ella.

## Recomendaciones

### Construye una única lista acumulada de deuda técnica visible

Consolida las señales de los capítulos anteriores de esta parte, valores
atípicos de complejidad, áreas con baja tasa de mutantes eliminados, puntos
calientes, hallazgos de análisis estático sin resolver, junto con
elementos de deuda que solo un humano puede identificar (un atajo
arquitectónico, una actualización de dependencia aplazada, una solución
alternativa no documentada), en una única lista acumulada visible,
rastreada con el mismo rigor y visibilidad que tu lista acumulada de
funcionalidades. La deuda que solo vive en la memoria de ingenieros
individuales o en comentarios de código dispersos efectivamente no existe
para fines de priorización.

### Cuantifica el coste de cada elemento de deuda y su coste de mantenimiento

Para cada elemento, estima dos cifras: el coste de corregirlo (tiempo de
ingeniería, riesgo de la propia corrección) y el coste de mantenerlo sin
corregir (cuánto más lento va el trabajo relacionado, cuánto riesgo
adicional de defectos conlleva, cuánto bloquea otro trabajo). Este
planteamiento, tomado directamente de la propia lógica de la metáfora de
la deuda financiera, da a quienes toman decisiones una base real de
comparación frente al coste y valor esperado del trabajo de
funcionalidades, en lugar de una queja abstracta y no cuantificada.

### Prioriza usando el impacto, no la antigüedad ni el defensor más ruidoso

Clasifica los elementos de deuda por su combinación de coste de
mantenimiento y con qué frecuencia se toca el código afectado (los datos
de cambios acumulados del capítulo 4.3 son directamente útiles aquí): un
elemento en un rincón raramente modificado de la base de código, por
desagradable que sea, importa mucho menos que uno que se sitúa
directamente en la trayectoria de tu desarrollo más activo. Resiste
priorizar según qué elemento lleva más tiempo en la lista acumulada o qué
ingeniero lo defiende de forma más persistente, ya que ninguno de los dos
se correlaciona de manera fiable con el impacto real en el negocio.

### Asigna capacidad dedicada y protegida para la remediación de deuda

Una lista acumulada de deuda que debe competir elemento por elemento
contra cada solicitud de funcionalidad entrante en cada ciclo de
planificación tiende a perder de manera consistente, porque el trabajo de
funcionalidades normalmente tiene un defensor de negocio más claro e
inmediato. Asigna un porcentaje protegido de la capacidad de ingeniería, un
patrón común está entre el 10% y el 20%, específicamente para la
remediación de deuda, decidido de antemano en lugar de negociado de nuevo
cada sprint, de modo que el pago de la deuda ocurra como algo habitual en
lugar de solo tras el rastro de una crisis.

### Acepta parte de la deuda como permanente, y dilo de forma explícita

No todo elemento pertenece a un plan de remediación activo. Cuando el
coste de corregir genuinamente supere el coste de mantener un elemento
indefinidamente, particularmente para código en un sistema estable,
raramente tocado, y próximo a retirarse, documenta esa decisión de forma
explícita y traslada el elemento a una categoría deliberadamente
despriorizada en lugar de dejarlo indefinidamente en una lista acumulada
activa donde su presencia continua implica silenciosamente un trabajo que
en realidad nunca ocurrirá.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin seguimiento formal de deuda | Sin sobrecarga | La deuda pierde la competencia de priorización por defecto; se acumula de forma invisible |
| Conciencia de deuda informal y ad hoc | Poca sobrecarga, cierta visibilidad | Inconsistente; depende de la memoria individual y la defensa personal |
| Lista acumulada de deuda formal y cuantificada | Compite de manera justa por la inversión; permite compensaciones informadas | Requiere mantenimiento continuo y disciplina de cuantificación |
| Capacidad de remediación protegida y dedicada | Asegura que el pago ocurra de manera consistente, no solo reactivamente | Reduce la capacidad disponible para el trabajo de funcionalidades a corto plazo |

La tensión central es **presión de entrega inmediata frente a
mantenibilidad a largo plazo**. El trabajo de funcionalidades casi siempre
tiene un defensor de negocio más claro e inmediato que la remediación de
deuda, lo que crea una presión estructural para que la deuda pierda cada
decisión de priorización individual incluso cuando su coste acumulado es
alto. Resuelve la tensión eliminando la remediación de deuda por completo
de la competencia elemento por elemento mediante capacidad protegida y
preasignada, de modo que la compensación se decida de forma deliberada y
por adelantado en lugar de volver a litigarse, y normalmente perderse, en
cada ciclo de planificación.

## Preguntas para debatir con tu equipo

1. **¿Tenemos una única lista acumulada de deuda técnica visible, o la
   conciencia de la deuda vive principalmente en las cabezas de
   ingenieros individuales?** Si la respuesta honesta es lo segundo, esa es
   la mayor brecha que recomienda cerrar primero este capítulo.

2. **Para nuestro principal elemento de deuda, ¿podríamos enunciar su coste
   de corrección y su coste de mantenimiento en términos lo bastante
   específicos como para compararlos de manera justa con una solicitud de
   funcionalidad?** Si no, practica esta cuantificación juntos como
   ejercicio grupal usando un elemento real y actual.

3. **¿Qué porcentaje de nuestra capacidad de ingeniería realmente se destina
   a la remediación de deuda, y ese porcentaje se decidió de forma
   deliberada o simplemente resulta ser lo que sobrevive después de asignar
   el trabajo de funcionalidades?** Revisa tus sprints recientes reales y
   calcula el número real en lugar de confiar en la impresión.

4. **¿Nuestra lista acumulada de deuda está priorizada por impacto de
   negocio genuino, o por el elemento que se ha planteado de manera más
   persistente o que lleva más tiempo ahí?** Contrasta tu priorización
   actual con los datos de cambios acumulados (capítulo 4.3) y comprueba si
   los dos se alinean.

5. **¿Qué elementos de deuda deberíamos aceptar explícitamente como
   permanentes, en lugar de dejarlos indefinidamente en una lista acumulada
   activa?** Identifica al menos un elemento real en el que el coste de
   corregir supere genuinamente el coste de mantenerlo, y debate trasladarlo
   a un estado explícitamente despriorizado.

6. **¿Cómo ha cambiado nuestra lista acumulada de deuda durante el último
   año, creciendo, reduciéndose, o manteniéndose plana, y esa tendencia
   coincide con nuestra intuición?** Rastrea esto a lo largo del tiempo en
   lugar de mirar solo una instantánea única; la tendencia suele ser más
   informativa que el tamaño absoluto en un momento dado.

## Enfoque sectorial

**Startup.** La deuda deliberada e informada suele ser una estrategia
razonable en esta etapa: enviar rápido para validar una hipótesis, con un
plan claro para revisitar atajos específicos si el producto demuestra
funcionar, es un intercambio legítimo, no un fracaso. El riesgo es perder
de vista qué atajos eran deliberados y reversibles frente a cuáles se han
convertido silenciosamente en pasivos permanentes y sin examinar a medida
que crece la base de código.

**Pequeña empresa.** Una lista simple y compartida, incluso una informal,
que nombre tus atajos conocidos y su coste aproximado de corrección
normalmente es suficiente a esta escala. La disciplina principal que vale
la pena adoptar es revisitar esa lista periódicamente en lugar de dejar
que se acumule en silencio y se vuelva invisible por la familiaridad.

**Empresa.** La capacidad de remediación protegida y preasignada importa
más aquí, ya que la competencia de priorización individual entre deuda y
trabajo de funcionalidades favorece de manera fiable a las funcionalidades
en docenas de equipos simultáneamente sin un contrapeso estructural.
Estandariza la práctica de cuantificación de deuda en toda la organización
para que los elementos de deuda se puedan comparar de manera justa entre
equipos para decisiones de inversión a nivel de cartera.

**Gobierno.** Los sistemas de larga vida acumulan deuda a lo largo de años
o décadas de cambios de requisitos incrementales e individualmente
razonables, a menudo sin ningún seguimiento formal de deuda en absoluto
hasta que una crisis obliga a abordar el problema. Una lista acumulada de
deuda cuantificada y visible es una herramienta genuinamente persuasiva
para justificar el presupuesto de modernización ante los órganos de
supervisión, ya que convierte una afirmación vaga de "el sistema es
antiguo" en un caso específico y con coste asociado para la inversión.

## Ejemplos

**Empresa.** La plataforma de facturación de una empresa de
telecomunicaciones había acumulado más de una década de deuda técnica
reconocida de manera informal pero nunca rastreada formalmente, con
ingenieros que citaban rutinariamente "el motor de facturación es un
desastre" en retrospectivas sin ningún seguimiento posterior. Un nuevo
director de ingeniería exigió que cada equipo construyera una lista
acumulada de deuda cuantificada, estimando el coste de corrección y el
coste de mantenimiento de cada elemento, y asignó un 15% fijo de la
capacidad de ingeniería a la remediación de deuda en adelante. En el plazo
de un año, los cinco elementos con mayor coste de mantenimiento,
representando una pequeña fracción de la lista acumulada total por
cantidad, se habían resuelto, y la tasa de fallos de cambio (capítulo
2.10) para los despliegues relacionados con facturación mejoró de forma
mesurable, demostrando el impacto desproporcionado de dirigirse primero a
los elementos con mayor coste de mantenimiento en lugar de trabajar la
lista acumulada en un orden arbitrario.

**Gobierno.** El sistema central de procesamiento de datos de una agencia
nacional de estadísticas, construido originalmente más de veinte años
antes, nunca había tenido una evaluación formal de deuda a pesar del
reconocimiento informal generalizado entre el personal de que partes
significativas eran frágiles y poco comprendidas. Una evaluación de deuda
estructurada, que combinaba hallazgos de análisis estático, datos de
puntos calientes, y entrevistas con los pocos ingenieros restantes que
entendían los componentes más antiguos, produjo una lista acumulada
cuantificada y priorizada que respaldó directamente una solicitud de
presupuesto de modernización plurianual. De manera crucial, la evaluación
también identificó explícitamente varios componentes heredados estables y
raramente tocados como razonables para dejar sin cambios, evitando una
reescritura completa del sistema innecesariamente amplia y costosa en
favor de una inversión dirigida en las áreas específicas que los datos
mostraban con el mayor coste continuo.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de gestionar la deuda técnica de manera deliberada es evitar el
coste acumulativo: cada atajo sin abordar hace que los cambios futuros
sean marginalmente más difíciles, y ese efecto se acelera sin
intervención, produciendo finalmente una base de código tan frágil que
incluso los cambios simples se vuelven lentos y arriesgados. El ejemplo de
telecomunicaciones anterior muestra el retorno de forma concreta: dirigirse
a un pequeño número de los elementos con mayor coste de mantenimiento
produjo una mejora mesurable en entrega y calidad, desproporcionada
respecto a la modesta fracción de la lista acumulada total que
representaban esos elementos.

El coste total de propiedad es la capacidad protegida asignada a la
remediación, típicamente entre el 10% y el 20% del tiempo de ingeniería, lo
cual es un coste real y visible que compite con la velocidad de
funcionalidades a corto plazo. Ese coste vale la pena pagarlo porque la
alternativa, la deuda no gestionada y acumulativa, finalmente cuesta mucho
más en entrega ralentizada y tasas de defectos elevadas en toda la base de
código, no solo en los elementos específicos que quedaron sin abordar.

## Antipatrones y errores comunes

- **Sin una lista acumulada de deuda visible y rastreada:** la deuda pierde
  la competencia de priorización por defecto y se acumula de forma
  invisible.
- **Afirmaciones de deuda vagas y no cuantificadas:** rara vez compiten
  bien contra solicitudes de funcionalidades concretas y cuantificadas en
  la planificación.
- **Priorizar la deuda por antigüedad o volumen de defensa en lugar de
  impacto:** desvía la capacidad limitada de remediación.
- **Sin capacidad protegida para la remediación:** el pago de la deuda solo
  ocurre reactivamente, tras una crisis, en lugar de como práctica
  rutinaria y deliberada.
- **Tratar toda la deuda como igualmente digna de corregir:** desperdicia
  esfuerzo en elementos de bajo impacto mientras los elementos de mayor
  coste de mantenimiento permanecen sin abordar.
- **Dejar que la deuda permanezca indefinidamente en una lista acumulada
  activa sin decidir nunca que es permanente:** implica un trabajo futuro
  que en realidad nunca ocurrirá y satura la priorización genuina.

## Modelo de madurez

- **Nivel 1, Iniciar:** La deuda técnica se discute de manera informal, sin
  una lista acumulada rastreada y sin cuantificación; pierde de manera
  consistente frente al trabajo de funcionalidades.
- **Nivel 2, Desarrollar:** Algunos equipos rastrean la deuda de manera
  informal, pero no existe una cuantificación consistente, visibilidad
  entre equipos, ni capacidad de remediación protegida.
- **Nivel 3, Estandarizar:** Existe una lista acumulada de deuda visible y
  cuantificada en toda la organización, con capacidad de remediación
  protegida asignada de manera consistente.
- **Nivel 4, Gestionar:** Los elementos de deuda se priorizan por impacto
  medido (coste de mantenimiento combinado con cambios acumulados), y la
  deuda aceptada de forma permanente se documenta explícitamente en lugar
  de dejarse ambigua.
- **Nivel 5, Orquestar:** La organización puede señalar mejoras específicas
  y mesurables de entrega o calidad rastreadas hasta la remediación de
  deuda dirigida, y la gestión de deuda es una entrada rutinaria y
  confiable en las decisiones de inversión de ingeniería junto con el
  trabajo de funcionalidades.

## Ideas para el debate

1. ¿Cuál es nuestro único elemento de deuda con mayor coste de mantenimiento ahora mismo, y podríamos cuantificarlo?
2. ¿Qué porcentaje de nuestra capacidad realmente se destina hoy a la remediación de deuda?
3. ¿Qué elemento de deuda deberíamos aceptar explícitamente como permanente en lugar de dejarlo ambiguo en nuestra lista acumulada?
4. ¿Nuestra lista acumulada de deuda ha crecido, se ha reducido, o se ha mantenido plana durante el último año?
5. ¿Qué revelaría una evaluación de deuda cuantificada que nuestra conciencia informal actual está pasando por alto?

## Conclusiones clave

- La deuda técnica es una **compensación gestionable, no un secreto
  vergonzoso**; cuantifícala en lugar de dejarla como una preocupación
  vaga y perpetuamente despriorizada.
- **Cuantifica el coste de corregir frente al coste de mantener** cada
  elemento para que compita de manera justa con el trabajo de
  funcionalidades.
- **Prioriza por impacto** (coste de mantenimiento combinado con cambios
  acumulados), no por antigüedad ni volumen de defensa.
- Asigna **capacidad de remediación protegida y dedicada**, decidida de
  antemano, ya que de lo contrario la deuda pierde de manera fiable la
  competencia elemento por elemento contra el trabajo de funcionalidades.
- **Acepta explícitamente parte de la deuda como permanente** cuando el
  coste de corregir supere el coste de mantener, en lugar de dejarla
  ambigua en una lista acumulada activa.

## Referencias y lecturas adicionales

- Cunningham, Ward, "The WyCash Portfolio Management System" (informe de
  experiencia de OOPSLA, 1992): el origen de la metáfora de la deuda
  técnica.
- *Managing Technical Debt: Reducing Friction in Software Development*, de
  Philippe Kruchten, Robert Nord, e Ipek Ozkaya (un tratamiento exhaustivo
  de la medición y gestión de la deuda técnica).
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler
  (las técnicas de remediación de las que en última instancia se nutre una
  lista acumulada de deuda).
- *Your Code as a Crime Scene*, de Adam Tornhill (el análisis de puntos
  calientes como entrada para la priorización de deuda, capítulo 4.3).
