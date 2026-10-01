# 6.1 Indicadores y objetivos de nivel de servicio, y presupuestos de error

## Visión general y motivación

La **[ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, la disciplina pionera en Google y documentada en el libro *Site
Reliability Engineering*, aportó un vocabulario sobre el que se construye
directamente este capítulo: un **indicador de nivel de servicio (SLI)** es
una señal medida directamente de la salud de un servicio, la latencia de
solicitud, la tasa de error, la disponibilidad. Un **objetivo de nivel de
servicio (SLO)** es el rango objetivo para ese indicador, el 99,9% de las
solicitudes tienen éxito en menos de 200 milisegundos, por ejemplo. Y un
**presupuesto de error** es el déficit permitido, el 0,1% de las
solicitudes que se permite que fallen, tratado no como un defecto que
eliminar sino como un recurso gastable que se puede usar deliberadamente
para asumir riesgo: entregar un cambio arriesgado, ejecutar un
experimento, o simplemente aceptar que la fiabilidad perfecta ni es
alcanzable ni, pasado cierto punto, vale su coste.

Esta última idea, el presupuesto de error como un recurso gastable en
lugar de un número que minimizar hacia cero, es el concepto individual más
importante de este capítulo y posiblemente de toda esta parte. Resuelve
una tensión que aqueja a muchas organizaciones: la ingeniería quiere
entregar funcionalidades y asumir riesgos razonables; las operaciones
quieren la máxima estabilidad. Sin un presupuesto de error compartido y
cuantificado, esto se convierte en una negociación interminable y
políticamente cargada. Con uno, se convierte en una regla simple y
objetiva: gasta libremente mientras quede presupuesto, ralentiza y
prioriza automáticamente el trabajo de estabilidad una vez que se agote.
Esto convierte un desacuerdo filosófico en uno aritmético.

Para los equipos grandes, los SLO y los presupuestos de error son lo que
hace que la fiabilidad sea medible y negociable en lugar de un absoluto
inalcanzable y no declarado que todos los equipos incumplen en silencio
mientras se sienten vagamente culpables por ello. Las organizaciones
empresariales usan los SLO para establecer expectativas claras y
contractuales entre equipos y con los clientes; las organizaciones
gubernamentales que operan infraestructura pública crítica los usan para
fijar objetivos de fiabilidad defendibles y públicamente justificables en
lugar de un estándar imposible de perfección que ningún sistema real puede
sostener.

## Principios clave

- **La fiabilidad del 100% es el objetivo equivocado para casi cualquier
  sistema.** Normalmente es inalcanzable, y perseguirla más allá de cierto
  punto activamente intercambia velocidad por ningún beneficio
  significativo para el usuario.
- **Un SLO debería reflejar lo que los usuarios realmente notan y les
  importa**, no un número redondo arbitrario elegido porque suena
  tranquilizador.
- **El presupuesto de error convierte la fiabilidad en un recurso
  gastable**, dando tanto a la ingeniería como a las operaciones una regla
  compartida y objetiva sobre cuándo entregar rápido y cuándo ralentizar.
- **Los SLI deben medirse a partir de la experiencia real del usuario**
  siempre que sea posible, no solo del estado de salud autoreportado de un
  sistema interno.
- **Agotar el presupuesto de error desencadena una respuesta
  predeterminada y acordada**, no una discusión improvisada cada vez que
  ocurre.

## Recomendaciones

### Elige SLI que reflejen la experiencia real del usuario

Selecciona indicadores medidos lo más cerca posible de la experiencia real
del usuario: la tasa de éxito y la latencia de las solicitudes medidas en
el borde o el balanceador de carga, no solo comprobaciones de salud
internas del servicio que pueden reportar "saludable" mientras los
usuarios experimentan problemas reales. Un SLI que mide algo que el
usuario nunca nota realmente, un componente interno técnicamente activo
mientras la solicitud general de todos modos fallo, está midiendo lo
equivocado por fácil que sea de instrumentar.

### Establece el objetivo del SLO basándote en lo que los usuarios realmente necesitan, no en un número redondo arbitrario

Resiste el reflejo de establecer un objetivo como "99,99% de tiempo de
actividad" simplemente porque suena impresionantemente riguroso. En su
lugar, investiga qué nivel de fiabilidad los usuarios realmente notan y
les importa, informado por datos históricos de incidencias, investigación
de usuarios, y el coste demostrado de lograr cada incremento adicional de
fiabilidad, ya que pasar del 99,9% al 99,99% a menudo cuesta mucho más
esfuerzo de ingeniería que pasar del 99% al 99,9%, para un beneficio
perceptible por el usuario decreciente y eventualmente insignificante.

### Trata el presupuesto de error como un recurso gastable con una respuesta predeterminada a su agotamiento

Calcula el presupuesto de error directamente a partir del SLO (un objetivo
de disponibilidad del 99,9% en 30 días permite aproximadamente 43 minutos
de indisponibilidad permitida) y rastrea el gasto frente a él de manera
continua. Acuerda, de antemano y antes de cualquier incidencia específica,
qué ocurre cuando se agota el presupuesto: una política común y eficaz es
que el trabajo de funcionalidades se pausa y la prioridad del equipo se
desplaza automáticamente al trabajo de fiabilidad hasta que el
presupuesto se recupera. Esta regla predeterminada elimina la necesidad
de volver a litigar la compensación bajo presión durante cada incidencia
individual.

### Usa el presupuesto de error para tomar decisiones de riesgo deliberadas e informadas

Un presupuesto de error saludable y sin gastar no es algo que atesorar; es
un permiso para asumir riesgos razonables, entregar un cambio con riesgo
elevado pero aceptable, ejecutar un experimento de ingeniería del caos (el
capítulo de ingeniería del caos del libro hermano
`software-engineering-guide` lo cubre directamente), o aceptar un cambio
de arquitectura más arriesgado, porque el presupuesto existe
específicamente para gastarse deliberadamente en lugar de preservarse sin
tocar. Un presupuesto de error que nunca se gasta sugiere ya sea un equipo
excesivamente conservador o un SLO fijado de manera demasiado laxa en
relación con la fiabilidad realmente lograda, ambos casos que vale la pena
investigar.

### Revisa y revisa los SLO periódicamente, basándote en evidencia, no en la inercia

Un SLO fijado hace años puede ya no reflejar las expectativas actuales de
los usuarios, la arquitectura del sistema, o las prioridades del negocio.
Revisa los SLO con una cadencia regular, comprobando la fiabilidad
histórica lograda, la retroalimentación de los usuarios, y si el objetivo
todavía representa un punto de compensación significativo en lugar de un
objetivo fácilmente cumplido que podría endurecerse para habilitar más
velocidad en otro sitio, o uno poco realista que el equipo efectivamente
ha renunciado a cumplir.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin SLO formal (un "lo más fiable posible" implícito) | Sin sobrecarga de configuración | Negociación interminable y sin fundamento entre velocidad y estabilidad; sin regla compartida |
| SLO aspiracional y muy alto (99,99%+) | Señala seriedad sobre la fiabilidad | A menudo un coste innecesario; rendimientos decrecientes más allá de lo que los usuarios realmente notan |
| SLO basado en evidencia y fundamentado en la experiencia del usuario | Refleja valor genuino; defendible y alcanzable | Requiere datos reales y análisis para fijarlo correctamente |
| Presupuesto de error con respuesta predeterminada al agotamiento | Elimina la negociación improvisada; toma de decisiones objetiva y rápida | Requiere compromiso organizacional y disciplina para realmente honrar la regla predeterminada |

La tensión central es **aspiración frente a viabilidad**. Un SLO alto y
aspiracional parece señalar seriedad sobre la calidad, pero perseguir la
fiabilidad más allá de lo que los usuarios realmente notan intercambia
velocidad real por ningún beneficio genuino, y un objetivo poco realista
que el equipo nunca cumple realmente le enseña a todos a dejar de tomarse
el SLO en serio en absoluto. Resuelve la tensión fundamentando el SLO en
evidencia real, qué notan los usuarios, qué ha logrado históricamente el
sistema, qué cuesta cada incremento adicional, en lugar de en la
aspiración o el deseo de parecer riguroso en un marcador.

## Preguntas para debatir con tu equipo

1. **¿Nuestro SLO actual está fundamentado en evidencia sobre lo que los
   usuarios realmente notan, o se fijó aspiracionalmente porque un número
   alto se sentía apropiadamente serio?** Rastrea el origen de tu objetivo
   actual, si puedes, y evalúa con honestidad si refleja investigación
   real de usuarios o solo intuición de ingeniería.

2. **¿Tenemos una respuesta predeterminada y acordada al agotamiento del
   presupuesto de error, o la compensación se vuelve a litigar cada vez
   que ocurre?** Si la respuesta honesta es lo segundo, esa brecha vale la
   pena cerrarla antes de que el próximo incidencia fuerce la discusión bajo
   presión.

3. **¿Nuestro presupuesto de error alguna vez se gasta realmente de manera
   deliberada, en un cambio de riesgo calculado o un experimento, o solo
   se consume accidentalmente mediante incidencias?** Un presupuesto que
   nunca se gasta deliberadamente podría indicar un equipo excesivamente
   cauteloso que se pierde oportunidades legítimas que el presupuesto
   existe para habilitar.

4. **¿Nuestros SLI se miden a partir de la experiencia real del usuario, o
   de la salud del sistema interno que podría no reflejar lo que los
   usuarios realmente encuentran?** Comprueba tu instrumentación actual
   frente a esta distinción específica; es una brecha común incluso en
   programas de fiabilidad por lo demás maduros.

5. **¿Cuándo revisamos por última vez nuestro SLO frente a la evidencia
   actual, y ha cambiado algo, expectativas de los usuarios, arquitectura
   del sistema, prioridades del negocio, que justificaría revisarlo?** Si
   no puedes recordar una revisión reciente, esa ausencia en sí misma vale
   la pena discutirla.

6. **¿Qué nos costaría, en esfuerzo de ingeniería, subir nuestro SLO
   actual en un "nueve" adicional de fiabilidad, y estaría ese coste
   justificado por algún beneficio genuino para el usuario?** Este
   planteamiento concreto de coste y beneficio ayuda a fundamentar la
   tensión entre aspiración y viabilidad en números reales en lugar de
   preferencia abstracta.

## Enfoque sectorial

**Startup.** Los SLO formales a menudo son innecesarios muy temprano,
cuando el equipo puede responder a los problemas de fiabilidad directa e
informalmente. Adopta al menos un SLO informal y aproximado una vez que
tengas clientes de pago reales que dependan del tiempo de actividad, ya
que la disciplina de un objetivo explícito, incluso uno rastreado de
manera laxa, ayuda a priorizar el trabajo de fiabilidad frente a la
presión de funcionalidades más temprano de lo que piensan la mayoría de
las empresas jóvenes.

**Pequeña empresa.** La mayoría de las plataformas modernas de alojamiento
y observabilidad reportan datos básicos de tiempo de actividad y latencia
con una configuración mínima; usa esto para fijar un SLO simple y
alcanzable en lugar de uno aspiracional que no puedes rastrear ni actuar
sobre él de manera realista con capacidad operativa limitada.

**Empresa.** Los SLO a esta escala a menudo sustentan acuerdos de nivel
de servicio contractuales con consecuencias financieras reales, lo que
hace que la fijación de objetivos basada en evidencia y la gestión
disciplinada del presupuesto de error sean especialmente importantes.
Invierte en SLI genuinamente fundamentados en la experiencia del usuario
en lugar de comprobaciones de salud internas convenientes, y establece
formalmente la política de respuesta al agotamiento predeterminada, con
el respaldo ejecutivo, antes de que se necesite bajo presión.

**Gobierno.** Los objetivos de fiabilidad del sector público para
infraestructura crítica a veces conllevan peso legal o regulatorio, y un
objetivo poco realista e incumplido descubierto durante una auditoría o
una incidencia pública daña significativamente la credibilidad
institucional. Fija los objetivos basándote en la necesidad genuina y
documentada de los usuarios y la misión, y sé transparente públicamente
sobre la compensación deliberada que representa un presupuesto de error,
en lugar de insinuar un estándar inalcanzable de perfección.

## Ejemplos

**Empresa.** Una empresa de almacenamiento en la nube había apuntado
durante años al "tiempo de actividad máximo" sin un SLO formal, lo que
generaba una tensión crónica y sin resolver entre el equipo de producto
(que quería entregar funcionalidades rápido) y el equipo de
infraestructura (que quería la máxima precaución), litigada de nuevo en
cada reunión de planificación de lanzamientos. Adoptar un SLO formal de
disponibilidad del 99,95% con un presupuesto de error explícito y una
política predeterminada, el trabajo de funcionalidades se pausa
automáticamente cuando se agota el presupuesto, resolvió por completo la
negociación recurrente: ambos equipos podían ver el mismo número y
acordar la misma regla, y la empresa reportó un aumento mesurable en las
funcionalidades entregadas durante períodos de presupuesto saludable junto
a una ralentización mesurable y deliberada durante los dos períodos del
año siguiente en que el presupuesto genuinamente se agotó, exactamente
como pretendía la política.

**Gobierno.** El sistema público de alertas de un servicio meteorológico
nacional había operado durante años bajo una expectativa informal de
"siempre disponible", sin ningún objetivo documentado y con una tensión
operativa significativa y sin abordar en el equipo de guardia que
intentaba cumplir un estándar no declarado y efectivamente imposible. Un
SLO formal recién adoptado, 99,9% de disponibilidad con una explicación
del presupuesto de error público claramente comunicada, dio al equipo de
operaciones el permiso explícito y defendible para programar ventanas de
mantenimiento planificadas dentro del presupuesto, algo que la expectativa
previa no declarada de "siempre disponible" había hecho políticamente
difícil incluso cuando era genuinamente necesario para la salud del
sistema a largo plazo. La comunicación pública que explicaba directamente
el concepto de presupuesto de error, en lugar de ocultarlo, se recibió de
manera favorable como una señal de práctica operativa honesta y madura en
lugar de un debilitamiento del compromiso con la calidad del servicio.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de adoptar formalmente los SLO y los presupuestos de error es
resolver una negociación por lo demás interminable y políticamente costosa
entre velocidad y estabilidad con una única regla compartida y objetiva.
El ejemplo de almacenamiento en la nube anterior lo muestra de manera
concreta: años de tensión recurrente y sin resolver entre dos equipos se
resolvieron con un único objetivo formal y una política predeterminada,
liberando una energía organizacional significativa que anteriormente se
dedicaba a volver a litigar repetidamente la misma compensación.

El coste total de propiedad incluye el esfuerzo de análisis para fijar
correctamente un objetivo basado en evidencia y la disciplina de honrar la
respuesta predeterminada al agotamiento incluso bajo presión para entregar
de todos modos una funcionalidad particularmente deseada. Ese coste de
disciplina es real, pero es mucho menor que el coste continuo de una
negociación crónica y sin resolver que consume energía organizacional en
cada ciclo de planificación indefinidamente.

## Antipatrones y errores comunes

- **Fijar un SLO aspiracional sin ninguna evidencia detrás:** produce un
  objetivo poco realista que el equipo deja de tomarse en serio, o uno
  innecesariamente costoso que persigue un beneficio que los usuarios no
  notan.
- **Sin respuesta predeterminada al agotamiento del presupuesto de
  error:** obliga al mismo argumento difícil de compensación bajo presión
  cada vez que ocurre.
- **Medir los SLI a partir de la salud del sistema interno en lugar de la
  experiencia real del usuario:** puede reportar "saludable" mientras los
  usuarios experimentan problemas reales.
- **Nunca gastar realmente un presupuesto de error saludable de manera
  deliberada:** puede indicar precaución excesiva y oportunidad legítima
  perdida.
- **Fijar un objetivo una vez y nunca revisitarlo:** un SLO puede volverse
  obsoleto a medida que cambian las expectativas de los usuarios, la
  arquitectura, y las prioridades.
- **Tratar la política del presupuesto de error como opcional bajo
  presión:** una regla predeterminada que se anula cada vez que resulta
  inconveniente no proporciona ningún valor real de toma de decisiones.

## Modelo de madurez

- **Nivel 1, Iniciar:** Los objetivos de fiabilidad son implícitos o
  aspiracionales, sin ningún SLO, SLI, o presupuesto de error formal
  definido.
- **Nivel 2, Desarrollar:** Algunos servicios tienen un SLO informal, pero
  los SLI pueden no reflejar la experiencia real del usuario y no existe
  una política de agotamiento predeterminada.
- **Nivel 3, Estandarizar:** Los SLO basados en evidencia con SLI de
  experiencia de usuario genuinos y una política de agotamiento de
  presupuesto de error predeterminada se establecen de manera consistente
  en los servicios críticos.
- **Nivel 4, Gestionar:** Los presupuestos de error se gastan activa y
  deliberadamente en la asunción de riesgos calculados, y los SLO se
  revisan y revisan con una cadencia regular basada en evidencia.
- **Nivel 5, Orquestar:** Los SLO y los presupuestos de error están
  integrados en toda la organización como el mecanismo compartido y
  objetivo para equilibrar la velocidad y la estabilidad, y la
  organización puede señalar decisiones específicas que el marco permitió
  que una negociación sin fundamento no habría resuelto de manera tan
  eficaz.

## Ideas para el debate

1. ¿Nuestro SLO actual está fundamentado en evidencia, o en aspiración?
2. ¿Tenemos una respuesta predeterminada al agotamiento del presupuesto de error que realmente honraríamos bajo presión?
3. ¿Cuándo gastamos por última vez deliberadamente un presupuesto de error saludable en un riesgo calculado?
4. ¿Nuestros SLI miden la experiencia real del usuario o comprobaciones de salud internas convenientes?
5. ¿Qué nos costaría subir nuestro SLO en un "nueve" adicional, y estaría justificado ese coste?

## Conclusiones clave

- Un **indicador de nivel de servicio (SLI)** mide la experiencia real del
  usuario; un **objetivo de nivel de servicio (SLO)** es su objetivo
  basado en evidencia; un **presupuesto de error** es el déficit
  permitido y deliberadamente gastable.
- **La fiabilidad del 100% normalmente es el objetivo equivocado**;
  fundamenta tu SLO en lo que los usuarios realmente notan y en lo que
  realmente cuesta cada incremento adicional.
- Trata el presupuesto de error como un **recurso gastable con una
  respuesta predeterminada al agotamiento**, eliminando la necesidad de
  volver a litigar velocidad frente a estabilidad bajo presión cada vez.
- Mide los SLI a partir de la **experiencia real del usuario**, no solo de
  comprobaciones de salud internas convenientes.
- **Revisa y revisa los SLO periódicamente**, basándote en evidencia, ya
  que un objetivo obsoleto pierde su utilidad a medida que cambian el
  sistema y sus usuarios.

## Referencias y lecturas adicionales

- *Site Reliability Engineering: How Google Runs Production Systems*, de
  Betsy Beyer, Chris Jones, Jennifer Petoff, y Niall Richard Murphy, eds.
  (el texto fundacional que define los SLI, SLO, y presupuestos de error).
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, y Stephen Thorne, eds. (orientación
  práctica sobre la implementación de SLO y presupuestos de error).
- *Implementing Service Level Objectives*, de Alex Hidalgo (una guía
  exhaustiva y orientada a la práctica para diseñar y operacionalizar
  SLO).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la relación entre la práctica de
  fiabilidad y el rendimiento de entrega).
