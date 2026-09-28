# 1.4 Gobernanza y propiedad de las métricas

## Visión general y motivación

Una métrica sin dueño es una discusión pendiente esperando a suceder. Dos
equipos calculan "usuarios activos" de forma distinta y dedican una reunión
a reconciliar números en lugar de gestionar la tendencia; la casilla de un
tablero que nadie mantiene queda obsoleta en silencio durante meses antes de
que alguien lo note; una métrica creada originalmente para el diagnóstico de
un equipo la adopta otro equipo con un propósito para el que su definición
original nunca se diseñó. Nada de esto es un problema de medición en el
sentido estadístico. Es un problema de gobernanza, y se resuelve con la
misma disciplina que las organizaciones ya aplican al código: propiedad
explícita, una [fuente única de
verdad](https://en.wikipedia.org/wiki/Single_source_of_truth) documentada, y
un proceso de revisión.

La gobernanza no es burocracia por sí misma. Es lo que hace que un programa
de métricas sobreviva al contacto con la escala organizacional. Un único
equipo puede mantener las definiciones de sus métricas en la cabeza de
alguien y corregir la deriva mediante la conversación diaria. Una
organización con docenas de equipos, cada uno produciendo y consumiendo
métricas, no puede. Sin gobernanza, las definiciones derivan en silencio,
las métricas se multiplican sin que nadie las pode, y para cuando el
liderazgo nota que dos informes no coinciden, el coste de reconciliarlos ya
se ha pagado muchas veces en reuniones desperdiciadas y confianza erosionada.

Para las organizaciones grandes y del sector público, la gobernanza carga
con un peso adicional porque las métricas alimentan cada vez más decisiones
con consecuencias reales, asignación de presupuesto, informes públicos de
rendimiento, contratos con proveedores, que sobreviven a cualquier persona
concreta que construyó el tablero original. Una carta de métricas que
sobrevive a la rotación de personal, que cualquier nuevo miembro del equipo
puede leer y entender, es lo que hace que los números de una organización
sigan significando lo mismo dentro de cinco años que hoy.

## Principios clave

- **Toda métrica tiene exactamente un dueño.** La propiedad compartida es
  ninguna propiedad; cuando todos poseen una definición, nadie la mantiene.
- **Una métrica tiene una fuente única de verdad.** Que dos sistemas
  calculen la misma métrica de forma distinta es un fallo de gobernanza
  esperando a salir a la luz.
- **La gobernanza se escribe, no es conocimiento tribal.** Una carta de
  métricas que solo vive en la memoria de alguien no sobrevive a su marcha.
- **El retiro es tan importante como la adopción.** Un programa de métricas
  sano poda con la misma deliberación con la que crece.
- **La gobernanza escala con la consecuencia, no con el número de
  métricas.** Una métrica que alimenta un informe público necesita una
  gobernanza más pesada que una que un único equipo usa para depurar su
  propio sprint.

## Recomendaciones

### Escribe una carta de métricas para todo conjunto de métricas que cruce el límite de un equipo

Una **carta de métricas** es un documento breve y vivo que expone el
propósito de un conjunto de métricas, sus no objetivos explícitos (aquí
pertenece la distinción entre diagnóstico y evaluación del capítulo 1.1), el
dueño y la fuente de verdad de cada métrica, y una cadencia de revisión.
Mantenla en una página. El archivo
docs/examples/metrics-charter-example.md del repositorio complementario de
este libro muestra la forma. Una carta tan breve se lee; una carta que se
extiende hasta convertirse en un documento de políticas no.

### Asigna un dueño nombrado a cada métrica, no a un equipo

"El equipo de plataforma posee esta métrica" difumina la responsabilidad
hasta que nadie la mantiene realmente. Nombra a una persona o a un rol
concreto y responsable. Ese dueño es responsable de que la definición de la
métrica se mantenga exacta, de que su instrumentación se mantenga sana, y de
responder a la pregunta "por qué este número se ve mal" cuando
inevitablemente surja. La propiedad puede y debe rotar a medida que las
personas cambian de rol, pero la carta siempre debería nombrar a un dueño
actual, nunca dejar el campo en blanco.

### Establece una fuente única de verdad por métrica y prohíbe el cálculo paralelo

Cuando dos sistemas calculan de forma distinta la misma métrica llamada
nominalmente igual, por ejemplo, los "usuarios activos" de un equipo
contando inicios de sesión y los de otro equipo contando llamadas a la API,
el desacuerdo resultante cuesta mucho más en reuniones de reconciliación de
lo que habría costado ponerse de acuerdo en una fuente de verdad desde el
principio. Nombra el sistema autorizado para cada métrica en la carta, y
trata cualquier otro cálculo de la misma métrica como un fallo que corregir
o como una métrica con nombre distinto que renombrar.

### Incorpora una revisión de retiro a la cadencia de gobernanza

Un programa de métricas que solo añade métricas acumula una sobrecarga de
tablero sobre la que nadie puede actuar (capítulo 1.1). En cada revisión de
gobernanza, junto con proponer métricas nuevas, pregunta cuáles de las
existentes no han informado ninguna decisión en los dos últimos ciclos y son
candidatas al retiro. Retirar una métrica no es un fracaso; es la misma
disciplina que una base de código sana aplica al código muerto.

### Escala el rigor de la gobernanza a la consecuencia, no al volumen

No todas las métricas necesitan el mismo proceso. Una métrica que un único
equipo inventa para depurar su propio sprint necesita casi ninguna
gobernanza más allá de que el equipo sepa qué significa. Una métrica que
alimenta un cuadro de mando ejecutivo, un informe público de rendimiento o
la compensación de una persona necesita una definición documentada, un dueño
nombrado, un rastro de auditoría y una aprobación antes de publicarse. Ajusta
el peso de tu proceso a la consecuencia de que la métrica esté equivocada,
no a cuántas métricas existan.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin gobernanza formal | Rápido, poca sobrecarga para equipos pequeños | Las definiciones derivan; la propiedad se difumina; los tableros crecen sin control |
| Carta ligera por conjunto de métricas | Barata, legible, escala con la organización | Requiere disciplina para mantenerse al día; puede saltarse bajo presión de plazos |
| Junta central de gobernanza de métricas pesada | Consistencia fuerte, rastro de auditoría fuerte | Lenta para aprobar métricas nuevas; puede convertirse en un cuello de botella que los equipos evitan |
| Gobernanza escalada a la consecuencia | Ajusta el esfuerzo al riesgo real | Requiere buen juicio para clasificar la consecuencia correctamente; se puede manipular restando importancia a lo que está en juego |

La tensión central es **consistencia frente a velocidad**. Una gobernanza
central pesada produce métricas fiables y consistentes pero frena a un
equipo justo cuando quiere instrumentar algo rápido para responder a una
pregunta urgente. Resuélvela escalando el peso de la gobernanza a la
consecuencia: deja que los equipos instrumenten libremente para su propio
uso diagnóstico, y exige la disciplina completa de carta, propiedad y
aprobación solo cuando una métrica cruza el límite de un equipo o alimenta
un uso evaluativo o público.

## Preguntas para debatir con tu equipo

1. **¿Tiene cada métrica que cruza el límite de un equipo un dueño
   nombrado, y se reconocería ese dueño como responsable si se le
   preguntara hoy?** "El equipo de plataforma la posee" no es una
   respuesta; una persona o un rol concreto sí lo es. Audita tus métricas
   entre equipos y comprueba si el dueño nombrado, si existe alguno, sabe
   realmente que tiene esa responsabilidad.

2. **¿Dónde calculamos actualmente la misma métrica nominal de dos formas
   distintas, y cuánto tiempo hemos pasado reconciliando el desacuerdo?**
   Este es uno de los fallos de gobernanza más caros y más comunes en las
   organizaciones grandes, y es completamente evitable con una fuente única
   de verdad documentada. Trae un ejemplo real si tienes uno y rastrea su
   coste.

3. **¿Cuándo retiramos una métrica por última vez, y qué desencadenó esa
   decisión?** Una organización que solo sabe describir cómo añade métricas,
   nunca cómo las elimina, está acumulando deuda de tablero. Si no puedes
   recordar un retiro, esa ausencia es en sí misma la respuesta a esta
   pregunta.

4. **¿Es nuestro proceso de gobernanza proporcional a la consecuencia, o
   pasa cada métrica por el mismo peso de revisión sin importar lo que esté
   en juego?** Una gobernanza excesivamente pesada sobre una métrica de bajo
   riesgo de un equipo frena el trabajo sin ningún beneficio de seguridad;
   una gobernanza excesivamente ligera sobre una métrica que alimenta un
   informe público o una decisión de compensación es un riesgo real. Traza
   tus métricas actuales por consecuencia y comprueba el peso del proceso
   frente a ella con honestidad.

5. **¿Qué le ocurre a la propiedad de una métrica cuando la persona que la
   construyó cambia de rol o se marcha?** Una carta de métricas que solo
   existe en la cabeza de una persona desaparece con ella. Prueba esto
   eligiendo una métrica y preguntando si alguien recién contratado podría,
   solo a partir de la documentación escrita, entender su definición, su
   fuente de verdad y su propósito.

6. **¿Cómo sabríamos si la definición de una métrica hubiera cambiado en
   silencio?** Un cambio en cómo se calcula un número, sin un cambio en su
   nombre ni una nota en su historial, resulta casi invisible hasta que
   alguien compara datos antiguos y nuevos y encuentra una discontinuidad
   que no puede explicar. Debate si tus métricas llevan hoy algún tipo de
   historial de cambios.

## Enfoque sectorial

**Startup.** La gobernanza formal suele ser excesiva para un equipo de cinco
personas donde todos ya saben qué significa cada número. La única
disciplina que merece adoptarse pronto de todos modos es nombrar por
escrito a un único dueño por métrica, porque cuesta casi nada y evita la
confusión a medida que se incorporan las primeras contrataciones y empiezan
a preguntar qué significa un número.

**Pequeña empresa.** Aquí la gobernanza consiste sobre todo en elegir, y
mantener, una única herramienta como fuente de verdad para cada métrica en
lugar de dejar que las hojas de cálculo y el tablero integrado de una
plataforma diverjan en silencio. Escribe la carta como un único documento
compartido, aunque sea informal, para que un nuevo empleado pueda averiguar
qué significa un número sin tener que preguntar por ahí.

**Empresa grande.** Aquí es donde la gobernanza se gana su lugar.
Estandariza las definiciones entre unidades de negocio, exige una carta para
todo lo que alimente un cuadro de mando ejecutivo, y construye una revisión
de retiro dentro de una cadencia de gobernanza recurrente, porque la
sobrecarga de tableros a esta escala se vuelve cara rápido, tanto en coste
de mantenimiento como en la pérdida de credibilidad cuando dos divisiones
reportan números contradictorios para lo mismo.

**Sector público.** La gobernanza aquí a menudo tiene una dimensión legal o
de auditoría: las medidas de rendimiento publicadas pueden necesitar
satisfacer requisitos legales de reporte, y un cambio de definición puede
tener consecuencias políticas reales. Documenta la metodología públicamente,
congela las definiciones entre periodos de reporte salvo que un cambio se
justifique públicamente por sí mismo, y trata una auditoría independiente de
la definición de la métrica, no solo de su valor actual, como una práctica
de gobernanza permanente.

## Ejemplos

**Empresa grande.** Una empresa multinacional de software descubrió,
durante una integración posterior a una adquisición, que sus dos unidades
de negocio más grandes definían la "frecuencia de despliegue" de forma
distinta: una contaba cada envío a un entorno de preproducción, la otra
contaba solo las publicaciones en producción. El liderazgo llevaba más de un
año comparando el rendimiento de entrega de ambas unidades usando números
que en realidad no eran comparables. La solución fue una junta de
gobernanza de métricas a nivel de toda la empresa que publicó un glosario
único de definiciones de métricas (reflejado en el capítulo 9.2 de este
libro), exigió a cada equipo certificar su cumplimiento, y retiró las
definiciones locales ambiguas en un solo trimestre.

**Sector público.** Una oficina nacional de estadística responsable de
publicar un tablero de rendimiento de servicios digitales descubrió que un
cambio en cómo se calculaba "resuelto dentro del acuerdo de nivel de
servicio", hecho en silencio por un equipo de ingeniería al corregir lo que
consideraban un fallo, había desplazado una cifra de cumplimiento destacada
en varios puntos porcentuales sin documentación pública del cambio. La
oficina estableció un proceso formal de control de cambios para cualquier
definición de métrica que alimentara un informe público: los cambios
propuestos requieren una justificación documentada, una comparación
publicada de antes y después junto con el cambio, y la aprobación de un
funcionario responsable nombrado, cerrando el vacío que había dejado pasar
inadvertido el cambio anterior.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de la gobernanza es el coste de reconciliación que se evita. Cada
hora dedicada a una reunión donde dos equipos discuten sobre qué número es
correcto es una hora que una gobernanza disciplinada, una fuente única de
verdad, un dueño nombrado, habría evitado por completo. A escala de empresa
grande, este coste se compone a través de docenas de equipos y puede
consumir una parte genuinamente significativa de la atención del liderazgo
en un problema que una carta de una página por conjunto de métricas habría
evitado.

El coste total de propiedad de una práctica de gobernanza ligera, una carta,
un dueño nombrado, una revisión periódica, es modesto y mayormente inicial.
La alternativa, descubrir un año después de iniciada una gran iniciativa que
los números en los que el liderazgo había confiado nunca fueron realmente
comparables, cuesta muchísimo más, tanto en análisis desperdiciado como en
el daño de credibilidad de corregir el registro público o interno a
posteriori.

## Antipatrones y errores comunes

- **Propiedad de equipo en lugar de propiedad de una persona nombrada:**
  difumina la responsabilidad hasta que nadie mantiene realmente la
  definición.
- **Cálculo paralelo de la misma métrica nominal:** garantiza un desacuerdo
  eventual y una reconciliación cara.
- **Una carta que solo existe en la cabeza de alguien:** desaparece en el
  momento en que esa persona cambia de rol.
- **Un programa de métricas que solo añade, nunca retira:** produce una
  sobrecarga de tablero sobre la que nadie puede actuar.
- **Un peso de gobernanza uniforme sin importar la consecuencia:** frena el
  trabajo de bajo riesgo mientras protege insuficientemente las métricas
  públicas o ligadas a compensación de alto riesgo.
- **Cambios de definición silenciosos:** el significado de una métrica
  cambia sin historial de cambios, y las comparaciones históricas se
  invalidan en silencio.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas no tienen dueños formales; las
  definiciones viven en la memoria individual y derivan en silencio entre
  equipos.
- **Nivel 2, Desarrollar:** Algunos equipos escriben documentación informal
  para sus propias métricas, pero no existe un formato de carta compartido
  ni consistencia entre equipos.
- **Nivel 3, Estandarizar:** Toda métrica que cruza el límite de un equipo
  tiene una carta documentada, un dueño nombrado y una única fuente de
  verdad acordada, exigida en toda la organización.
- **Nivel 4, Gestionar:** Una cadencia de gobernanza recurrente revisa las
  métricas para comprobar su relevancia continuada, retira las que ya no se
  ganan su mantenimiento, y rastrea los cambios de definición con un
  historial visible.
- **Nivel 5, Orquestar:** La gobernanza es proporcional a la consecuencia,
  automatizada cuando es posible (un catálogo de métricas que señala las que
  no están documentadas o no tienen dueño), y la organización puede
  demostrar, a petición, la procedencia completa de cualquier número
  publicado.

## Ideas para el debate

1. ¿Podría alguien recién contratado averiguar, solo con la documentación, qué significan realmente nuestras tres métricas más importantes?
2. ¿Cuáles de nuestras métricas calculan actualmente de forma distinta dos sistemas diferentes?
3. ¿Cuándo retiramos una métrica por última vez, y cómo decidimos hacerlo?
4. ¿Es nuestro proceso de gobernanza más pesado donde la consecuencia es más alta, o es uniforme?
5. ¿Quién posee, por nombre, la métrica pública más consecuente de nuestra organización?

## Conclusiones clave

- Toda métrica necesita **un dueño nombrado**, no un equipo, y **una fuente
  de verdad**, no un cálculo paralelo.
- Escribe una **carta de métricas** breve y viva para todo conjunto de
  métricas que cruce el límite de un equipo, exponiendo el propósito, los no
  objetivos, la propiedad y la cadencia de revisión.
- El **retiro** es una disciplina de gobernanza tan importante como la
  adopción; poda de forma deliberada.
- Escala el rigor de la gobernanza a la **consecuencia**, no al número de
  métricas: un proceso más pesado para las métricas públicas, evaluativas o
  ligadas a compensación.
- La definición de una métrica puede derivar en silencio; rastrea los
  cambios con un historial visible para que la confianza en un número
  sobreviva a la rotación de personal.

## Referencias y lecturas adicionales

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, de John Ladley (estructuras de gobernanza aplicables
  a programas de métricas).
- *Measuring and Managing Performance in Organizations*, de Robert D.
  Austin (disfunción organizacional en torno a la propiedad y el uso de
  métricas).
- *Key Performance Indicators*, de David Parmenter (propiedad de métricas,
  disciplina de definición y cadencia de revisión).
- Orientación de la Oficina de Rendición de Cuentas del Gobierno de Estados
  Unidos (GAO) sobre la medición del rendimiento y la GPRA Modernization
  Act: gobernanza de métricas y control de cambios en el sector público.
