# 3.4 Métricas de actividad y sus límites

## Visión general y motivación

**Actividad**, la A de SPACE (tema 3.1), cuenta el volumen de trabajo
de ingeniería observable desde la telemetría del sistema: commits,
solicitudes de incorporación de cambios abiertas, líneas de código
cambiadas, comentarios de revisión de código dejados. Es la dimensión de
SPACE más fácil de medir, porque cada uno de estos eventos ya lo registran
automáticamente las herramientas que los equipos de ingeniería usan a
diario, y esa facilidad de medición es precisamente lo que hace de esta
dimensión la más peligrosa de sobreponderar. La actividad es una señal
real y legítima usada con cuidado. Usada como indicador indirecto de
productividad aislado, es la familia de métricas individual más manipulada
y más engañosa de toda la historia de la medición de la [ingeniería de
software](https://en.wikipedia.org/wiki/Software_engineering).

El problema central es que la actividad mide movimiento, no valor. Un
recuento de commits no distingue entre un commit que resolvió un problema
difícil con elegancia y un commit que dividió un cambio significativo en
cinco para parecer más productivo (la manipulación por sustitución del
tema 1.2, aplicada directamente a esta familia de métricas). Las
líneas de código cambiadas premian la verbosidad sobre la habilidad mucho
más valiosa de eliminar código innecesario. Un ingeniero que pasa un día
entero en pensamiento profundo e ininterrumpido antes de escribir diez
líneas elegantes y bien probadas parece menos "activo" según estas
métricas que uno que confirma cambios superficiales y sin revisar cada
veinte minutos, aunque el primero muy a menudo está produciendo mucho más
valor real.

Para los equipos grandes, la tentación de usar las métricas de actividad
para la evaluación individual es constante y está bien documentada, porque
la actividad es fácil de atribuir a una persona concreta y fácil de
calcular automáticamente, a diferencia de las señales más difíciles y más
honestas de las otras dimensiones de SPACE. Este tema existe
específicamente para nombrar esa tentación y darles a los equipos el
lenguaje y la evidencia para resistirla, porque en cuanto una organización
empieza a clasificar individualmente a los ingenieros por recuento de
commits o líneas de código, el daño a la colaboración, la calidad del
código y la moral está bien documentado y es difícil de revertir.

## Principios clave

- **La actividad mide movimiento, no valor.** Es una señal contextual
  legítima, nunca un indicador indirecto de productividad aislado.
- **Esta es la familia de métricas individual más mal usada históricamente
  en la medición de la ingeniería de software.** Trata esa historia como
  una advertencia, no como una coincidencia.
- **La clasificación individual por actividad es casi siempre dañina.**
  Daña la colaboración, premia el trabajo de relleno visible, e invita a
  la manipulación casi de inmediato.
- **Los datos de actividad son más útiles en conjunto, como contexto para
  otras dimensiones,** no como una señal independiente sobre una persona o
  un equipo.
- **El trabajo profundo y valioso a menudo se ve silencioso en un tablero
  de actividad.** La familia de métricas está estructuralmente sesgada en
  contra precisamente del tipo de pensamiento que produce los mejores
  resultados de ingeniería.

## Recomendaciones

### Nunca clasifiques ni evalúes a personas por recuentos brutos de actividad

Esta es la regla más difícil y más importante de este tema. El
recuento de commits, las líneas de código y el recuento de solicitudes de
incorporación de cambios nunca deberían aparecer en una evaluación de
rendimiento individual, una clasificación comparativa, ni en ningún contexto
donde la compensación, la posición o la reputación de un ingeniero dependa
del número. Esto se deriva directamente del principio de exposición a
incentivos del tema 1.2: en el momento en que la actividad se convierte
en una métrica individual incentivada, la manipulación sigue casi de
inmediato, y el comportamiento resultante, inflar commits, dividir cambios
de forma trivial, evitar el trabajo profundo y poco vistoso que produce
pocos eventos visibles, daña activamente a la organización.

### Usa los datos de actividad en conjunto, como contexto, no como veredicto

Los datos de actividad se vuelven genuinamente útiles cuando se agregan a
nivel de equipo y se leen junto a las otras dimensiones de SPACE: una caída
brusca en la actividad de commits a nivel de equipo que coincide con una
subida en la satisfacción podría indicar que el equipo por fin tuvo
margen para pensar profundamente y pagar deuda técnica, un patrón
positivo, no negativo. Leída de forma aislada, la misma caída se ve
alarmante. El contexto de las otras dimensiones es lo que hace que los
datos de actividad sean interpretables en lugar de engañosos.

### Prefiere señales de actividad cercanas a la calidad frente al volumen bruto

Donde los datos de actividad sean útiles siquiera, prefiere señales
ajustadas por calidad frente a recuentos brutos: el tamaño de la solicitud
de incorporación de cambios en relación con la profundidad de revisión
(tema 2.9), o la razón entre código nuevo y código eliminado, que
puede revelar si un equipo está acumulando complejidad o simplificando
activamente. Estas señales ajustadas siguen siendo datos de la dimensión de
actividad pero resisten la manipulación más burda que invitan los
recuentos brutos.

### Vigila específicamente el patrón de manipulación por sustitución en los datos de actividad

La forma más común en que se manipulan las métricas de actividad es
precisamente el patrón de sustitución del tema 1.2: dividir trabajo
genuinamente significativo en muchos eventos pequeños y triviales para
inflar un recuento. Si la frecuencia de commits o de solicitudes de
incorporación de cambios sube mientras la complejidad o el tamaño
subyacente de los cambios cae bruscamente, investiga antes de atribuir el
mérito a una mejora de productividad real, usando la misma disciplina
diagnóstica que recomienda el tema 2.10 para la frecuencia de
despliegue.

### Nombra explícitamente y desincentiva el teatro de actividad

El **teatro de actividad** es trabajo realizado, consciente o
inconscientemente, principalmente porque es visible y contable en lugar de
porque es valioso: commits pequeños frecuentes, actividad nocturna
llamativa, u ajetreo visible en canales compartidos. Nombrar este patrón
explícitamente ante tu equipo, y ser transparente en que el liderazgo no
usa la actividad bruta para juzgar la contribución, elimina buena parte
del incentivo para que ocurra en primer lugar.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Clasificación individual por actividad | Sencilla, fácil de calcular, se siente directamente accionable | Se manipula casi de inmediato; daña la colaboración y la moral; mide lo equivocado |
| Ninguna medición de actividad en absoluto | Evita por completo el riesgo de mal uso | Pierde una señal contextual genuinamente útil para detectar patrones a nivel de equipo |
| Actividad agregada a nivel de equipo, leída en contexto | Aporta contexto útil sin riesgo individual | Requiere disciplina para interpretarla junto a otras dimensiones en lugar de de forma aislada |
| Señales de actividad ajustadas por calidad | Resiste la manipulación más burda de recuento bruto | Más complejas de calcular y explicar que un simple recuento |

La tensión central es **utilidad frente a riesgo de mal uso**. Los datos
de actividad, leídos con cuidado en conjunto y en contexto, son
genuinamente útiles para detectar patrones como un ritmo insostenible o un
equipo que encuentra en silencio margen para abordar deuda técnica. Los
mismos datos, usados como marcador individual, son casi uniformemente
dañinos. Resuélvela no evitando por completo los datos de actividad sino
construyendo una regla organizacional estricta contra su uso individual,
mientras permites e incluso fomentas un uso reflexivo y contextualizado a
nivel de equipo.

## Preguntas para debatir con tu equipo

1. **¿Se ha evaluado alguna vez a alguien en nuestra organización, formal
   o informalmente, usando un recuento bruto de actividad como commits o
   líneas de código?** Pregunta esto directamente y prepárate para una
   respuesta incómoda pero necesaria; este mal uso a menudo ocurre en
   silencio, a través de un comentario casual de un gestor, sin
   convertirse nunca en política oficial.

2. **¿Qué aspecto tendría el teatro de actividad específicamente en
   nuestro equipo, y hemos visto señales de ello?** Nombrar la forma
   específica y plausible que este patrón podría tomar en tu propio equipo
   lo hace mucho más fácil de reconocer si empieza a ocurrir.

3. **Cuando se mueven nuestros datos de actividad a nivel de equipo, ¿los
   interpretamos junto a las otras dimensiones de SPACE, o de forma
   aislada?** Una caída en la actividad leída de forma aislada se ve
   preocupante; la misma caída leída junto a una mejora de satisfacción o
   rendimiento puede verse como un patrón genuinamente positivo. Comprueba
   tu práctica de revisión real frente a esta distinción.

4. **¿Hemos visto alguna vez una subida en la frecuencia de commits o
   solicitudes de incorporación de cambios acompañada de un tamaño medio
   de cambio que se reduce, sugiriendo una división trivial en lugar de
   una ganancia de productividad genuina?** Extrae datos reales y
   comprueba este patrón específico de manipulación por sustitución.

5. **¿Cómo hablamos actualmente de "quién está contribuyendo más" en
   nuestro equipo, y se apoya esa conversación implícitamente en datos de
   actividad aunque no exista una métrica formal?** El sesgo informal y
   no medido hacia el ajetreo visible puede moldear la percepción y la
   recompensa incluso sin una política explícita basada en actividad; saca
   esto a la luz con honestidad.

6. **¿Qué aspecto tiene en nuestro equipo el trabajo genuinamente valioso
   pero silencioso, pensamiento profundo, diseño cuidadoso, mentoría, y
   cómo nos aseguramos de que se reconozca a pesar de generar pocos datos
   de actividad visibles?** Esta pregunta es el complemento positivo de las
   anteriores: nombrar qué aspecto tiene el buen trabajo silencioso ayuda a
   protegerlo de pasarse por alto en favor de un trabajo más ruidoso y más
   contable.

## Enfoque sectorial

**Startup.** Con un equipo pequeño y muy colaborativo, los datos de
actividad suelen ser visibles sin necesitar ningún tablero, y el riesgo de
clasificación individual contra el que advierte este tema es menos
probable simplemente porque todos ya saben en qué está trabajando cada
persona. El riesgo en cambio es que quien funda la empresa favorezca de
forma inconsciente el comportamiento visiblemente "ajetreado" al tomar
decisiones tempranas de contratación o participación accionaria.

**Pequeña empresa.** Está bien echarle un vistazo a los datos de actividad
de tus herramientas existentes para tener una sensación general del
rendimiento del equipo, pero resiste usarlos para comparar directamente a
personas individuales; el valor real de un equipo pequeño a menudo se
concentra en unas pocas personas haciendo un trabajo silencioso y de alto
apalancamiento que una vista de recuento de commits infravaloraría de
forma sistemática.

**Empresa grande.** Aquí es donde la tentación de la clasificación
individual es más fuerte y más dañina, porque los datos de actividad son
la señal más fácil de extraer para un proceso de evaluación de rendimiento
que abarca miles de ingenieros, y la presión por encontrar *alguna*
entrada cuantificable es real. Construye una política explícita, comunicada
y exigida contra la clasificación individual por actividad, y audita
periódicamente las prácticas de evaluación de rendimiento para confirmar que
la política realmente se sigue en la práctica, no solo que se declara.

**Sector público.** Las métricas de actividad pueden resultar tentadoras de
citar en un informe público como evidencia de productividad ("diez mil
commits este año"), pero este tipo de titular es casi carente de
significado y puede invitar precisamente al escrutinio equivocado en
cuanto un revisor informado señala que la actividad bruta no dice nada
sobre los resultados. Reporta en su lugar datos de resultado y rendimiento
(tema 3.3), y evita los recuentos de actividad en cualquier
comunicación de cara al exterior.

## Ejemplos

**Empresa grande.** El liderazgo de ingeniería de una empresa de software
había empezado, sin política formal, a referenciar informalmente datos de
frecuencia de commits individuales en las discusiones de promoción. Una
revisión interna, impulsada por un proyecto no relacionado de análisis de
rotación, encontró que los ingenieros que trabajaban en los sistemas más
complejos y de mayor valor de la empresa, que requerían largos periodos de
trabajo de diseño cuidadoso antes de escribir cualquier código, tenían
recuentos de commits sistemáticamente más bajos que los ingenieros en
sistemas más simples y desarrollados de forma más incremental, y como
resultado estaban siendo sutilmente perjudicados en las conversaciones de
promoción. El liderazgo emitió una política explícita y comunicada que
prohibía las referencias a recuentos de actividad en las discusiones de
rendimiento y promoción, y desplazó la evidencia de promoción hacia el
enfoque de rendimiento de múltiples señales del tema 3.3.

**Sector público.** Una agencia de servicios digitales, bajo presión para
demostrar productividad ante un comité de supervisión legislativa,
propuso inicialmente reportar el total de commits y líneas de código
escritas en todo su programa de ingeniería como evidencia de valor
entregado. Un asesor técnico interno se opuso, señalando correctamente que
este planteamiento invitaba precisamente al escrutinio equivocado, ya que
un miembro del comité con conocimientos técnicos podría fácilmente señalar
que el volumen bruto de código no dice nada sobre si el código funcionaba
o importaba. El informe revisado de la agencia usó en su lugar métricas de
resultado (tema 5.3): reducción de errores reportados por la
ciudadanía y aumento de la finalización exitosa de autoservicio, que
resistieron mucho mejor las preguntas del comité de lo que lo habrían
hecho los números de actividad.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de acertar con las métricas de actividad, usándolas de forma
contextual en lugar de como marcadores individuales, es el daño evitado:
las organizaciones que clasifican individualmente a los ingenieros por
actividad ven de forma fiable comportamiento de manipulación, menor
colaboración (ingenieros protegiendo su propia producción visible en lugar
de ayudar a un compañero de equipo), y un sesgo sistemático contra el
trabajo profundo y de alto apalancamiento que a menudo produce más valor
mientras genera menos actividad visible. Revertir ese daño, una vez
arraigado en una cultura de evaluación de rendimiento, es genuinamente
difícil y lento.

El coste total de evitar esta trampa es sobre todo disciplina
organizacional: una política explícita, exigida de forma consistente,
contra la clasificación individual por actividad, y un compromiso de
invertir en su lugar en la medición de rendimiento más difícil y más
honesta que describe el tema 3.3. Esa disciplina cuesta menos que las
decisiones de promoción mal dirigidas, la colaboración dañada y el
comportamiento de manipulación que las métricas de actividad individuales
producen de forma fiable con el tiempo.

## Antipatrones y errores comunes

- **Clasificación individual por recuento de commits o líneas de código:**
  el mal uso individual más dañino y más común históricamente en todo este
  libro.
- **Teatro de actividad:** trabajo realizado principalmente por visibilidad
  en lugar de por valor, una respuesta totalmente previsible a la
  evaluación basada en actividad.
- **Interpretar una caída de actividad a nivel de equipo de forma aislada,
  sin comprobar las otras dimensiones de SPACE:** puede confundir un
  patrón genuinamente positivo con uno preocupante.
- **Citar recuentos brutos de actividad en comunicación externa o dirigida
  al liderazgo:** invita precisamente al escrutinio equivocado y dice poco
  sobre el valor real.
- **Infravalorar de forma sistemática el trabajo profundo y cuidadoso que
  genera pocos eventos visibles:** un sesgo estructural incorporado a toda
  esta familia de métricas.
- **Un sesgo informal y sin política hacia la actividad que se cuela en
  las conversaciones de promoción o evaluación:** dañino incluso sin una
  métrica oficial detrás.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas de actividad se usan, formal o
  informalmente, para evaluar o clasificar a personas, sin ninguna
  conciencia del riesgo.
- **Nivel 2, Desarrollar:** Existe cierta conciencia del riesgo, pero
  ninguna política explícita evita que los datos de actividad influyan de
  manera informal en las evaluaciones o discusiones de promoción.
- **Nivel 3, Estandarizar:** Una política explícita y comunicada en toda la
  organización prohíbe la clasificación individual por actividad, y los
  datos de actividad se usan solo en conjunto, a nivel de equipo.
- **Nivel 4, Gestionar:** Las prácticas de evaluación de rendimiento y
  promoción se auditan periódicamente para confirmar que se sigue la
  política en la práctica, y las señales de actividad ajustadas por
  calidad sustituyen a los recuentos brutos donde se usan datos de
  actividad siquiera.
- **Nivel 5, Orquestar:** La organización ha desplazado de forma
  demostrable la cultura de evaluación lejos de las métricas de actividad
  hacia el enfoque de rendimiento de múltiples señales del tema 3.3,
  con una mejora visible en la colaboración y una reducción del
  comportamiento de manipulación como evidencia de que el cambio
  funcionó.

## Ideas para el debate

1. ¿Se ha sentido alguien aquí evaluado alguna vez, aunque fuera informalmente, por lo "ajetreada" que se veía su actividad?
2. ¿Qué aspecto tendría el teatro de actividad específicamente en nuestro equipo?
3. ¿Tenemos una política explícita y escrita contra la clasificación individual por actividad, y se sigue realmente?
4. ¿Qué trabajo silencioso y de alto valor en nuestro equipo genera actualmente los datos de actividad menos visibles?
5. ¿Cómo rediseñaríamos la evidencia de nuestra evaluación de rendimiento para eliminar por completo los recuentos de actividad?

## Conclusiones clave

- La actividad mide **movimiento, no valor**; es la familia de métricas
  individual más mal usada históricamente en la ingeniería de software.
- **Nunca clasifiques ni evalúes a personas** por recuentos brutos de
  actividad; esta es la regla más difícil y más importante de este
  tema.
- Usa los datos de actividad **en conjunto, como contexto** para las otras
  dimensiones de SPACE, nunca como veredicto aislado.
- Vigila el **teatro de actividad** y el **patrón de manipulación por
  sustitución** (tema 1.2) específicamente dentro de esta familia de
  métricas.
- El trabajo profundo y de alto valor a menudo genera **los datos de
  actividad menos visibles**; protégelo de ser infravalorado de forma
  sistemática.

## Referencias y lecturas adicionales

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco y Timothy
  Lister (el argumento en contra de medir a los ingenieros por el ajetreo
  visible).
- *Deep Work: Rules for Focused Success in a Distracted World*, de Cal
  Newport (el valor del trabajo silencioso e ininterrumpido que las
  métricas de actividad subcuentan de forma sistemática).
- *The Tyranny of Metrics*, de Jerry Z. Muller (la fijación con las
  métricas y sus costes, directamente aplicable a la evaluación basada en
  actividad).
