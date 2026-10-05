# 2.8 Métricas Lean de cadena de valor

## Visión general y motivación

Cada métrica que esta parte ha cubierto hasta ahora, tiempo de flujo, carga
de flujo, tiempo de ciclo, utilización, desciende de un conjunto de
herramientas mucho más antiguo: las cinco mediciones básicas del mapeo de
cadena de valor **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**
clásico, desarrollado en Toyota y generalizado en la manufactura, las
operaciones y la entrega de servicios mucho antes de que el software las
adoptara. El **tiempo de entrega (LT, por sus siglas en inglés)** es el
tiempo total de reloj desde que se solicita el trabajo hasta que se
entrega. El **tiempo de proceso (PT)** es el tiempo práctico real dedicado
a trabajar en una única unidad. El **tiempo de ciclo (CT)** es el tiempo
promedio necesario para completar un único nodo o fase dentro de la
cadena. El **porcentaje completo y correcto (%C/A)** es el porcentaje de
unidades que un equipo aguas abajo puede procesar sin necesitar
retrabajo. El **tiempo takt** es el tiempo máximo aceptable para completar
una unidad y así coincidir limpiamente con la demanda del cliente.

Este tema existe porque la ingeniería de software no inventó estas
ideas, las tomó prestadas, y el préstamo a veces reutilizó las mismas
palabras para cosas ligeramente distintas. El propio tiempo de ciclo de
este libro (tema 2.6) mide específicamente las etapas de ingeniería de
un cambio, codificación, revisión, prueba, despliegue, mientras que el CT
clásico de Lean es el "tiempo promedio por nodo" más general aplicado a
cualquier proceso. El tiempo de flujo (tema 2.4) es el nombre que le da
este libro a lo que Lean llama tiempo de entrega. Conocer esta
correspondencia importa porque un lector que venga de un contexto Lean Six
Sigma, común en la manufactura, la logística, la sanidad y las operaciones
del sector público, usará estos términos exactos con sus significados
originales, y un equipo de software que no hable el mismo idioma renuncia a
un puente fácil y respaldado por evidencia hacia colegas fuera de
ingeniería.

Para los equipos grandes, el %C/A es la métrica menos aprovechada de este
tema. Captura algo que las métricas de flujo de los temas 2.3 y 2.4
no capturan: cuánto de lo que produce una etapa es realmente utilizable por
la siguiente etapa sin devolverse. Agregado a lo largo de una cadena de
valor multietapa, un concepto que la manufactura llama **rendimiento
acumulado (rolled throughput yield)**, el %C/A revela cómo el retrabajo se
agrava de forma invisible a través de los traspasos, un patrón al que son
especialmente propensas las organizaciones grandes con canalizaciones
largas de varios equipos y los programas del sector público con múltiples
puertas de aprobación, y que rara vez miden directamente.

## Principios clave

- **Estas cinco métricas son anteriores al software y se generalizan más
  allá de él.** Son el vocabulario común que una parte interesada formada
  en Lean Six Sigma, común en grandes empresas y operaciones del sector
  público, ya habla con fluidez.
- **La colisión de terminología es real y merece nombrarse
  explícitamente.** El tiempo de ciclo de este libro (tema 2.6) y el CT
  clásico de Lean están relacionados pero no son idénticos; documenta la
  correspondencia para que las conversaciones multifuncionales no se
  malinterpreten en silencio.
- **El %C/A debe agregarse a lo largo de cada etapa, no medirse una sola
  vez al final.** El retrabajo introducido pronto en una cadena y detectado
  tarde es invisible para una métrica medida solo en la entrega final.
- **El tiempo takt replantea la planificación de capacidad en torno a la
  demanda, no al esfuerzo.** La pregunta cambia de "qué tan rápido podemos
  ir" a "qué tan rápido necesitamos ir", que se conecta directamente con la
  utilización (tema 2.7) y la carga de flujo (tema 2.4).
- **Estas son métricas diagnósticas, no métricas de vanidad.** Cada una
  existe para responder a una pregunta operativa específica, no para
  producir un número impresionante para un tablero.

## Recomendaciones

### Traza tu cadena de valor con las cinco métricas Lean antes de adoptar un marco específico de software

Calcula el tiempo de entrega, el tiempo de proceso, el tiempo de ciclo, el
%C/A y el tiempo takt para una muestra representativa de trabajo que se
mueve por tu cadena de valor antes de superponer las propias métricas del
Flow Framework (temas 2.3 y 2.4). Esto te da una línea base que
cualquier parte interesada con formación en Lean Six Sigma puede entender
de inmediato, y con frecuencia saca a la luz el mismo dominio del tiempo de
espera que describe el tema 2.5, expresado en un vocabulario anterior a
cualquier marco de software concreto y que le sobrevivirá.

### Agrega el porcentaje completo y correcto de forma multiplicativa a lo largo de cada etapa

Mide el %C/A en cada etapa individualmente, y después multiplica los
porcentajes a nivel de etapa entre sí para obtener el rendimiento acumulado
de la cadena de valor. Tres etapas funcionando individualmente al 90%
completo y correcto se agravan hasta aproximadamente un 73% en conjunto, un
número que no se parece en nada al informe propio de ninguna etapa
individual y que suele ser el más honesto. Este único cálculo es la forma
más rápida de revelar cuánto retrabajo está absorbiendo realmente una
canalización multietapa.

### Fija el tiempo takt explícitamente a partir de datos reales de demanda del cliente, no de la capacidad

Calcula el tiempo takt como el tiempo de trabajo disponible dividido entre
la demanda del cliente en ese periodo, deliberadamente independiente de lo
rápido que tu equipo resulte ser capaz de trabajar hoy. Compara tu tiempo
de proceso y tu tiempo de ciclo medidos con este número: un tiempo de
proceso cómodamente por debajo del tiempo takt indica un margen sano,
mientras que un tiempo de ciclo que supera el tiempo takt es evidencia
concreta y cuantificada de una escasez de capacidad, no solo la sensación
de que las cosas van con retraso.

### Documenta la correspondencia entre los términos Lean y el vocabulario propio de este libro

Donde tu organización ya gestione un programa Lean Six Sigma fuera del
software, o donde ingeniería reporte a un liderazgo que habla con fluidez
ese vocabulario, escribe la correspondencia explícitamente en tu carta de
métricas (tema 1.4): el tiempo de flujo de este libro es el tiempo de
entrega de Lean, el tiempo de ciclo de este libro (tema 2.6) es una
aplicación específica del CT más general de Lean, y el tiempo activo de
este libro (tema 2.5) es el tiempo de proceso de Lean. Este único
documento evita una discusión recurrente y de poco valor sobre de quién son
los números "reales".

### Usa el %C/A como barrera de contención junto a la velocidad de flujo, no como sustituto de ella

Empareja el rendimiento acumulado con la velocidad de flujo (tema 2.3)
de la misma forma en que este libro empareja cada métrica de velocidad con
una barrera de contención de estabilidad. Un recuento de elementos en
aumento con un %C/A acumulado en caída significa que la cadena de valor
está entregando más unidades que cada vez necesitan más retrabajo después,
precisamente el patrón de velocidad sin calidad contra el que el tema
1.2 advierte que se proteja cada familia de métricas.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Solo métricas Lean clásicas (LT, PT, CT, %C/A, tiempo takt) | Vocabulario universal; funciona tanto en equipos de software como fuera de él | No es específico de software; necesita traducción para etapas específicas de ingeniería |
| Solo métricas del Flow Framework (temas 2.3, 2.4) | Diseñadas específicamente para cadenas de valor de software y visibilidad por tipo de elemento | Poco familiares para partes interesadas formadas en Lean Six Sigma fuera de ingeniería |
| Ambas, con una correspondencia explícita documentada | Habla ambos vocabularios; el puente multifuncional más fuerte | Requiere la disciplina inicial de escribir la correspondencia y mantenerla actual |
| %C/A medido solo en la entrega final | Sencillo, un solo número | Esconde el retrabajo introducido y detectado antes en la cadena |

La tensión central es **universalidad frente a especificidad**. Las
métricas Lean clásicas son legibles al instante para cualquiera con
experiencia en manufactura, operaciones o Six Sigma, pero no se diseñaron
pensando en las etapas específicas del software, revisión de código,
pruebas automatizadas, aprobación de despliegue. Resuélvela usando las
métricas Lean como el vocabulario base compartido para las conversaciones
multifuncionales y ejecutivas, y las propias métricas del Flow Framework
(temas 2.3 y 2.4) para el trabajo diagnóstico específico de software
que los equipos de ingeniería hacen día a día.

## Preguntas para debatir con tu equipo

1. **¿Podríamos calcular hoy las cinco métricas Lean clásicas para nuestra
   cadena de valor, o solo tenemos algunas de ellas?** La mayoría de los
   equipos de software tienen equivalentes de tiempo de flujo y tiempo de
   ciclo pero nunca han calculado explícitamente el tiempo de proceso, el
   %C/A o el tiempo takt. Identifica cuáles de las cinco faltan realmente
   antes de asumir que el vacío es pequeño.

2. **¿Hemos agregado alguna vez el %C/A a lo largo de cada etapa de nuestra
   cadena de valor, o solo lo hemos medido en la entrega final?** Una única
   medición al final de la cadena esconde precisamente el retrabajo
   acumulativo que el cálculo de rendimiento acumulado de este tema
   está diseñado para revelar. Intenta el cálculo de agregación con datos
   reales.

3. **¿Conocemos nuestro tiempo takt, calculado a partir de la demanda real
   del cliente, y cómo se compara nuestro tiempo de ciclo medido con él?**
   La mayoría de los equipos nunca han hecho explícita esta comparación, lo
   que significa que las conversaciones de capacidad se mantienen
   anecdóticas en lugar de cuantificadas.

4. **Si una parte interesada formada en Lean Six Sigma fuera de ingeniería
   preguntara por nuestro tiempo de ciclo, ¿estaríamos seguros de que
   significa lo mismo para ella que para nosotros?** El tiempo de ciclo de
   este libro (tema 2.6) y el CT clásico de Lean están relacionados
   pero no son idénticos. Debate si esa distinción ha causado alguna vez un
   malentendido real en tu organización.

5. **¿Ha sido alguna vez nuestro rendimiento acumulado significativamente
   más bajo que el %C/A propio reportado de cualquier etapa individual?**
   Si nunca has calculado la agregación, debate qué esperarías encontrar y
   después compruébalo con datos reales.

6. **¿Ya gestiona nuestra organización un programa Lean o Six Sigma fuera
   del software con el que podríamos alinearnos en lugar de mantener un
   vocabulario separado y desconectado?** Muchas grandes empresas y
   agencias del sector público ya tienen esta infraestructura; comprueba si
   ingeniería se ha conectado alguna vez realmente a ella.

## Enfoque sectorial

**Startup.** El mapeo completo de cadena de valor Lean rara vez merece la
ceremonia a esta escala, pero el tiempo takt merece entenderse de manera
informal: saber aproximadamente qué tan rápido necesita moverse realmente
el equipo para igualar la demanda real del cliente, en lugar de un ritmo
interno arbitrario, evita tanto sobreconstruir capacidad demasiado pronto
como subconstruirla en cuanto llega el crecimiento.

**Pequeña empresa.** El %C/A es la más útil de forma inmediata de las cinco
métricas aquí, ya que responde directamente a "cuánto de lo que enviamos
necesita rehacerse", una pregunta que los propietarios y los equipos
pequeños sienten con intensidad sin siempre tener un número asociado a
ella. Rastréalo de manera informal para tu uno o dos procesos críticos
antes de invertir en algo más elaborado.

**Empresa grande.** Aquí es donde el vocabulario Lean clásico se gana su
lugar, porque las grandes empresas muy a menudo ya gestionan un programa
Lean Six Sigma en operaciones, divisiones cercanas a la manufactura o
servicios compartidos, y una ingeniería que habla el mismo idioma gana un
puente inmediato y creíble hacia esas funciones en lugar de necesitar
justificar desde cero un conjunto de métricas separado y exclusivo del
software.

**Sector público.** Las agencias del sector público, especialmente
aquellas con raíces en funciones regulatorias, cercanas a la manufactura o
logísticas, con frecuencia tienen mandatos existentes de Lean o de mejora
de procesos. Enmarcar la cadena de valor de un servicio digital en los
mismos términos clásicos, tiempo de entrega, tiempo de proceso, %C/A,
tiempo takt, que ya usa la oficina de mejora de procesos de una agencia
suele ser la forma más rápida de asegurar un apoyo institucional genuino
para un esfuerzo de modernización de software.

## Ejemplos

**Empresa grande.** La división interna de software de una empresa de
manufactura había luchado durante años para que un equipo de liderazgo de
operaciones, formado en Lean Six Sigma desde la planta de fábrica, se
tomara en serio sus métricas de ingeniería. Replantear la canalización de
entrega de la división usando las mismas cinco métricas clásicas,
calculando el tiempo de entrega, el tiempo de proceso, el tiempo de ciclo,
el %C/A y el tiempo takt para su cadena de valor de software, hizo que los
números de la división fueran legibles para el liderazgo de operaciones
por primera vez de inmediato. Un cálculo de rendimiento acumulado a través
de las cuatro etapas de la canalización reveló un %C/A real del 61%, muy
por debajo del número propio reportado de cualquier etapa individual, que
se convirtió en la base de evidencia para una iniciativa de reducción de
retrabajo que el liderazgo de operaciones financió en el mismo trimestre.

**Sector público.** El equipo de permisos digitales de un departamento
estatal de transporte, que reportaba a una agencia con una oficina de
mejora de procesos Lean de larga data, nunca había involucrado a esa
oficina porque sus propias métricas usaban un lenguaje específico de
software que la oficina no reconocía. Después de traducir la cadena de
valor de permisos a tiempo de entrega, tiempo de proceso y %C/A, la oficina
de mejora de procesos identificó que la restricción real del equipo no era
la velocidad de ingeniería sino una etapa de revisión legal aguas abajo
que funcionaba muy por debajo de su propio tiempo takt efectivo en
relación con la demanda de permisos, un hallazgo sobre el que la oficina
estaba equipada para actuar de inmediato porque se enmarcó en términos
familiares.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de adoptar el vocabulario Lean clásico junto a las métricas
específicas de software de este libro es un puente creíble e inmediato
hacia experiencia y financiación de mejora de procesos que a menudo ya
existe en otro lugar de una organización grande. El ejemplo de la empresa
de manufactura de arriba, asegurar financiación de reducción de retrabajo
en el mismo trimestre en que el replanteamiento hizo legible el caso, es el
patrón que produce de forma fiable el enfoque de este tema: la
perspectiva no era nueva, pero el vocabulario que la hizo accionable para
la audiencia correcta sí lo era.

El coste total de propiedad es bajo: estas cinco métricas no requieren
ninguna instrumentación nueva más allá de lo que los temas 2.4 a 2.6 ya
recogen, más una clasificación de retrabajo para el %C/A que suele ser una
simple adición al seguimiento existente de defectos y elementos de flujo
(tema 2.2). La inversión principal es la traducción, escribir la
correspondencia entre los términos de este libro y los clásicos de Lean, lo
que se paga solo la primera vez que evita un malentendido multifuncional.

## Antipatrones y errores comunes

- **Medir el %C/A solo en la entrega final:** el vector de manipulación
  central de este tema. Un equipo puede reportar un %C/A alto en la
  etapa final mientras las etapas anteriores producen en silencio
  retrabajo que se arregla antes de que alguien lo mida, haciendo que toda
  la cadena de valor se vea más sana de lo que es. La barrera de contención
  es agregar el %C/A de forma multiplicativa a lo largo de cada etapa, el
  cálculo de rendimiento acumulado, y auditar periódicamente la definición
  de "completo y correcto" de cada etapa para que no se estreche en
  silencio con el tiempo.
- **Asumir que el tiempo de ciclo de este libro y el CT clásico de Lean
  significan exactamente lo mismo:** produce confusión multifuncional real
  cuando los dos vocabularios se encuentran sin una correspondencia
  documentada.
- **Fijar el tiempo takt a partir de la capacidad actual en lugar de la
  demanda real del cliente:** derrota el propósito de la métrica, que es
  revelar una brecha entre la demanda y la capacidad, no confirmar
  cualquier ritmo que ya exista.
- **Tratar las métricas Lean clásicas como obsoletas en cuanto se adopta un
  marco específico de software:** descarta un puente creíble y respaldado
  por evidencia hacia experiencia en mejora de procesos que puede ya
  existir en la organización.
- **Ignorar un programa Lean Six Sigma existente en otra parte de la
  organización:** renuncia a financiación, experiencia y credibilidad
  institucional que replantear las métricas de entrega en un lenguaje
  compartido podría desbloquear.
- **Reportar el %C/A sin emparejarlo con la velocidad de flujo:** permite
  que un número de rendimiento en aumento esconda una tasa de retrabajo en
  caída, el mismo vacío de barrera de contención contra el que advierte
  este libro en todo momento.

## Modelo de madurez

- **Nivel 1, Iniciar:** Ninguna de las cinco métricas Lean clásicas se
  calcula; la entrega se discute sin referencia al tiempo de entrega, el
  tiempo de proceso o el %C/A.
- **Nivel 2, Desarrollar:** El tiempo de entrega y el tiempo de ciclo se
  rastrean de manera informal, pero el tiempo de proceso, el %C/A y el
  tiempo takt no se calculan, y no existe ninguna correspondencia con el
  vocabulario propio de este libro.
- **Nivel 3, Estandarizar:** Las cinco métricas clásicas se calculan de
  forma consistente, y la correspondencia con el vocabulario de flujo y
  tiempo de ciclo de este libro se documenta en una carta de métricas
  compartida.
- **Nivel 4, Gestionar:** El rendimiento acumulado se calcula a lo largo de
  cada etapa de la cadena de valor, y el tiempo takt se compara con el
  tiempo de ciclo medido para cuantificar explícitamente las brechas de
  capacidad.
- **Nivel 5, Orquestar:** La organización ha conectado sus métricas de
  entrega de software con un programa Lean o Six Sigma existente en otra
  parte del negocio, y puede señalar decisiones concretas de inversión o
  proceso tomadas porque el vocabulario compartido hizo accionable una
  perspectiva para una audiencia ajena a ingeniería.

## Ideas para el debate

1. ¿Podríamos calcular hoy el tiempo de entrega, el tiempo de proceso, el tiempo de ciclo, el %C/A y el tiempo takt para nuestra cadena de valor?
2. ¿Cuál sería nuestro rendimiento acumulado si multiplicáramos entre sí el %C/A de cada etapa?
3. ¿Ya gestiona nuestra organización un programa Lean o Six Sigma con el que nunca hemos conectado las métricas de ingeniería?
4. ¿Cómo se compara nuestro tiempo de ciclo medido con nuestro tiempo takt, calculado a partir de la demanda real del cliente?

## Conclusiones clave

- Las cinco métricas Lean clásicas, **tiempo de entrega, tiempo de proceso,
  tiempo de ciclo, porcentaje completo y correcto, y tiempo takt**, son
  anteriores al software y siguen siendo el vocabulario común de las
  partes interesadas formadas en Lean Six Sigma.
- El propio **tiempo de flujo y tiempo de ciclo de este libro se
  corresponden con, pero no son idénticos a**, el tiempo de entrega y el CT
  clásico de Lean; documenta la correspondencia explícitamente para evitar
  confusión multifuncional.
- El vector de manipulación central del tema es **medir el %C/A solo en
  la entrega final**; la barrera de contención es agregarlo de forma
  multiplicativa a lo largo de cada etapa como rendimiento acumulado.
- **El tiempo takt replantea la capacidad en torno a la demanda real del
  cliente**, no al ritmo existente, y se empareja directamente con la
  utilización (tema 2.7) y la carga de flujo (tema 2.4).
- Replantear la entrega de software en términos Lean clásicos suele ser la
  forma más rápida de conectar con **experiencia y financiación de mejora
  de procesos ya existentes** en una organización grande.

## Referencias y lecturas adicionales

- Rother, Mike, y John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., y Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, y Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
