# 1.2 La ley de Goodhart y la psicología de las métricas

## Visión general y motivación

La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law),
llamada así por el economista Charles Goodhart, suele formularse así: cuando
una medida se convierte en un objetivo, deja de ser una buena medida. La
observación original de Goodhart de 1975 trataba sobre política monetaria,
pero la reformulación posterior de la antropóloga Marilyn Strathern es la
versión que los equipos de software realmente necesitan, y es la frase sobre
la que se construye todo este libro. Cada métrica de cada capítulo
posterior, la frecuencia de despliegue, la cobertura de pruebas, las
puntuaciones de satisfacción, carga con este riesgo, y cada recomendación de
este libro es, de alguna forma, una estrategia para gestionarlo.

El mecanismo no tiene nada de misterioso. Las personas responden a los
incentivos, y una métrica ligada a una recompensa, a una evaluación o a una
reputación es un incentivo, se haya diseñado así a propósito o no. En cuanto
un equipo sabe que se está vigilando la "frecuencia de despliegue", la forma
más barata de mover ese número no siempre es la prevista: dividir un cambio
significativo en cinco despliegues triviales, y el número sube mientras nada
real mejora. Esto no es una historia sobre malos actores. Ingenieros
corrientes y bienintencionados responden exactamente así ante incentivos mal
diseñados, porque el incentivo, no la intención que hay detrás, es lo que
moldea el comportamiento bajo presión.

Para las organizaciones grandes lo que está en juego es mayor porque la
distancia entre quien diseña la métrica y la persona cuyo comportamiento
moldea crece con la escala. Un jefe de equipo que construye una métrica para
su propio equipo de ocho personas puede vigilar directamente si se juega con
ella y corregir el rumbo con rapidez. Una métrica desplegada en una división
de seiscientas personas, o publicada en un informe de rendimiento del sector
público leído por una legislatura, viaja a través de capas de personas que
nunca conocieron a quien la creó y tienen todos los motivos para tratar la
letra de la métrica como el objetivo. La distorsión se agrava con la
distancia, que es exactamente por qué este capítulo, y no uno posterior, es
donde el libro coloca su centro de gravedad.

## Principios clave

- **Asume que a toda métrica incentivada se le jugará en contra.** Diseña
  contra ello desde la primera versión, no después de descubrir la
  distorsión.
- **Jugar con la métrica es racional, no malicioso.** Las personas responden
  con sensatez al incentivo que construiste; culparlas por ello no arregla
  nada.
- **La distancia respecto al dueño de la métrica aumenta el riesgo de
  distorsión.** Cuanto más viaja un número desde la persona que entiende su
  intención, más se convierte en la letra de la norma en lugar de en su
  espíritu.
- **Las razones y los rangos resisten mejor el juego que los recuentos
  brutos.** Un recuento bruto premia el volumen; una razón bien elegida
  premia el comportamiento real que quieres.
- **Una barrera de contención no es opcional en una métrica incentivada.**
  Toda métrica a la que ligas una recompensa necesita una contramétrica
  emparejada que no debe degradarse.

## Recomendaciones

### Clasifica cada métrica por su exposición a incentivos

Antes de publicar una métrica en cualquier lugar visible, pregunta
directamente: ¿la recompensa, la evaluación, la reputación o el presupuesto
de alguien depende de que este número se mueva en una dirección concreta? Si
la respuesta es sí, es una métrica incentivada y necesita una barrera de
contención (más abajo) antes de publicarse. Si es no, es una métrica
diagnóstica (capítulo 1.1) y conlleva un riesgo de juego menor, aunque nunca
nulo, porque las personas pueden seguir moldeando un número que simplemente
esperan que se use para juzgarlas más adelante, incluso sin un incentivo
formal asociado hoy.

### Prefiere razones, tasas y cohortes frente a recuentos brutos

Un recuento bruto como "tickets cerrados" es fácil de manipular haciendo más
de algo de poco valor. Una razón como "porcentaje de tickets resueltos en el
primer contacto" premia el comportamiento subyacente en lugar del volumen.
Una **cohorte**, un grupo definido por un punto de partida compartido, como
todos los despliegues de una semana concreta, evita que una mala tendencia
reciente se esconda dentro de un agregado a largo plazo que resulta
halagador. Siempre que tengas que elegir entre un recuento y una tasa que
capturen el mismo comportamiento subyacente, elige la tasa.

### Empareja cada métrica incentivada con una barrera de contención

Una **métrica de barrera de contención** es una contramétrica emparejada que
no debe degradarse mientras la métrica principal mejora. La frecuencia de
despliegue se empareja con la tasa de fallos de cambio; el tiempo de entrega
se empareja con la tasa de defectos escapados; el tiempo de gestión de un
equipo de soporte se empareja con la satisfacción del cliente. La barrera de
contención es lo que hace que jugar con el sistema salga caro de forma
visible: un equipo que mejora el número incentivado degradando la barrera de
contención queda atrapado por el emparejamiento, no por suerte. Diseña la
barrera de contención al mismo tiempo que la métrica principal, nunca como
una ocurrencia tardía una vez descubierto que se está jugando con ella.

### Vigila los cuatro patrones clásicos de manipulación

La distorsión bajo la ley de Goodhart tiende a caer en un pequeño número de
formas reconocibles. La **manipulación de umbral** optimiza justo hasta un
objetivo y se detiene (un objetivo de 95% de cobertura de pruebas produce
pruebas triviales para llegar exactamente al 95%, no cobertura genuina). La
**manipulación de definición** cambia qué cuenta en lugar de qué ocurre
(redefinir "resuelto" para excluir los casos difíciles). La **manipulación
de temporización** cambia cuándo se registra el trabajo en lugar de cuándo
ocurrió (agrupar despliegues justo antes de que cierre una ventana de
informe). La **manipulación por sustitución** entrega la letra de la
métrica mientras abandona su intención (dividir un cambio real en muchos
triviales para inflar la frecuencia de despliegue). Nombrar estos patrones a
tu equipo, de forma explícita, hace que sea mucho más fácil detectarlos
cuando aparecen en tus propios números.

### Separa la medición de la recompensa siempre que puedas

La barrera de contención más fuerte de todas es estructural: desacopla la
métrica de la recompensa individual. Una métrica usada puramente para
entender un sistema, sin que la paga, la calificación o la posición de nadie
dependa de su dirección, se enfrenta a una presión de manipulación mucho más
débil que una ligada a una evaluación. Por eso la distinción entre
diagnóstico y evaluación del capítulo 1.1 importa tanto en la práctica:
mantener una métrica en modo diagnóstico suele ser más barato y más eficaz
que cualquier cantidad de ingeniería de barreras de contención aplicada a
posteriori.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Recuentos brutos | Sencillos de calcular y explicar | Muy fáciles de manipular por volumen |
| Razones y tasas | Premian el comportamiento correcto, resisten la manipulación por volumen | Pueden ocultar un problema de denominador que se reduce |
| Emparejamiento con barrera de contención | Hace que jugar con el sistema salga caro de forma visible | Duplica las métricas que definir, mantener y de las que hacerse responsable |
| Solo diagnóstico (sin recompensa individual) | La menor presión de manipulación de todas las opciones | Palanca motivacional directa más débil para que la use el liderazgo |
| Métricas fuertemente incentivadas | Respuesta conductual fuerte y rápida | Alto riesgo de distorsión, a menudo en un solo ciclo de informe |

La tensión central es **poder motivacional frente a riesgo de distorsión**.
Las métricas que mueven el comportamiento más rápido, ligando un número
directamente a una recompensa, son exactamente las más expuestas a la ley de
Goodhart. Resuélvela reservando los incentivos fuertes para métricas de
resultado que son genuinamente difíciles de manipular de forma barata, y
emparejando todo aquello que incentives con una barrera de contención
diseñada al mismo tiempo, no añadida después de que aparezca la primera
distorsión.

## Preguntas para debatir con tu equipo

1. **Para cada métrica de la que depende la recompensa de alguien, ¿cuál es
   la forma más barata de manipularla, y detectaríamos hoy esa
   manipulación?** Siéntate y diseña deliberadamente el modo de explotación
   para cada número incentivado de tu tablero: ¿cómo haría un equipo
   racional y bienintencionado que esto se viera bien sin hacer el trabajo
   subyacente? Si no puedes nombrar una forma de detectar esa manipulación,
   todavía no estás listo para incentivar la métrica. Este ejercicio resulta
   incómodo y esa incomodidad es precisamente el objetivo.

2. **¿Cuáles de nuestras métricas actuales ya han derivado hacia uno de los
   cuatro patrones de manipulación, de umbral, de definición, de
   temporización o de sustitución, sin que nadie lo haya señalado?** La
   distorsión rara vez se anuncia sola; aparece como un número que se ve
   estupendo mientras las quejas, los incidentes o los comentarios de los
   clientes subyacentes cuentan una historia distinta. Recorre tu tablero
   contrastándolo con cada patrón por su nombre y sé honesto sobre las
   coincidencias.

3. **¿Tiene cada métrica incentivada de nuestro tablero una barrera de
   contención emparejada, y se diseñó esa barrera al mismo tiempo que la
   métrica?** Una barrera de contención añadida solo después de descubrir la
   manipulación es una reparación, no una decisión de diseño, y suele llegar
   demasiado tarde para evitar la primera ronda de daño a la confianza.
   Audita tus métricas incentivadas específicamente para comprobar este
   emparejamiento.

4. **¿Cuánta distancia recorre esta métrica desde la persona que entiende su
   intención hasta llegar a la persona cuyo comportamiento moldea?** Una
   métrica construida por un equipo de plataforma y consumida tres capas de
   gestión más allá, o publicada en un informe público leído por personas
   que nunca vieron la instrumentación, está mucho más expuesta a que se
   manipule la letra en vez del espíritu que una que un equipo diseñó para
   sí mismo. Traza esa distancia para tus métricas más consecuentes.

5. **¿Hemos eliminado alguna vez un incentivo de una métrica después de
   descubrir que se estaba manipulando, y qué nos costó en confianza
   arreglarlo?** Las organizaciones suelen descubrir la ley de Goodhart por
   las malas, después de un trimestre o un año de comportamiento distorsionado,
   y la reparación cuesta más de lo que habría costado la prevención. Trae
   un incidente real, si tienes uno, y extrae la lección de forma explícita
   en lugar de pasar página en silencio.

6. **¿Dónde hemos asumido que la manipulación era un problema de integridad
   personal en lugar de una respuesta racional a un incentivo mal
   diseñado?** Culpar a las personas por responder de forma predecible a un
   incentivo que construiste rara vez arregla algo y a menudo daña la
   confianza todavía más. Replantea cada incidente de manipulación que
   recuerdes como un problema de diseño en la métrica, no un problema de
   carácter en la persona, y pregúntate qué rediseño lo habría evitado.

## Enfoque sectorial

**Startup.** Con un equipo diminuto, la barrera de contención más rápida es
la conversación directa: todos pueden ver un número y preguntar de
inmediato "espera, ¿por qué ha subido eso?". El riesgo real es que quien
funda la empresa ligue una métrica al relato de captación de inversión
(crecimiento a cualquier coste) sin una barrera de contención emparejada,
porque los inversores externos aplican precisamente el tipo de presión
distante y de altas consecuencias que hace atractivo jugar con el sistema.

**Pequeña empresa.** Las herramientas listas para usar a menudo traen
tableros por defecto construidos alrededor de recuentos (tickets cerrados,
llamadas atendidas) porque los recuentos son fáciles de calcular. Convierte
esos recuentos en tasas activamente siempre que la herramienta lo permita, y
resiste la tentación de ligar cualquier número aislado a una bonificación o
a una evaluación sin identificar antes su barrera de contención.

**Empresa grande.** La distancia es el riesgo dominante: una métrica
diseñada por un equipo de plataforma para diagnóstico interno la recoge tres
capas de gestión después y se convierte en un indicador clave de rendimiento
que quien la construyó no reconocería. Gobierna esto explícitamente
(capítulo 1.4): exige una barrera de contención documentada antes de que se
apruebe cualquier métrica para su uso en una evaluación de desempeño o en un
cuadro de mando ejecutivo.

**Sector público.** Las medidas de rendimiento publicadas se enfrentan a la
presión de manipulación más fuerte de cualquier categoría de este libro,
porque no alcanzar un objetivo puede acarrear consecuencias presupuestarias o
políticas. Audita la propia definición con una cadencia fija, no solo el
número, ya que el patrón clásico de manipulación del sector público es
redefinir en silencio a quién se cuenta (una lista de espera "resuelta"
reclasificando a quién se considera en espera) en lugar de mejorar el
servicio subyacente.

## Ejemplos

**Empresa grande.** Una empresa de tecnología minorista fijó un objetivo del
99% de cobertura automática de pruebas en todos los servicios, ligado a una
puntuación de calidad a nivel de equipo usada en las evaluaciones
trimestrales. En dos trimestres, la cobertura llegó al 99%, y la tasa de
incidentes subió. Una auditoría encontró equipos escribiendo pruebas
triviales, que se limitaban a comprobar que una función devolvía un valor
sin lanzar una excepción, únicamente para satisfacer la herramienta de
cobertura, mientras las pruebas genuinas de casos límite no habían mejorado
en absoluto. La solución sustituyó el objetivo bruto de cobertura por una
métrica emparejada: cobertura más una puntuación de pruebas de mutación
(capítulo 4.2) que mide si las pruebas realmente detectan fallos inyectados,
algo mucho más difícil de manipular de forma barata.

**Sector público.** Una agencia estatal de seguro de desempleo se medía por
la mediana de días hasta el primer pago, publicada a su legislatura. Bajo
presión por alcanzar un objetivo, una oficina regional empezó a reclasificar
en silencio las solicitudes más difíciles de tramitar como "incompletas" y a
excluirlas del denominador, lo que hacía que la mediana publicada se viera
excelente mientras algunos solicitantes esperaban mucho más de lo que
sugería el informe. Una auditoría independiente de la propia definición, no
solo del número, destapó la práctica. La solución de la agencia congeló la
definición, publicó los criterios de exclusión de forma pública y añadió una
métrica de barrera de contención que rastreaba la propia tasa de solicitudes
incompletas, de modo que un repunte en la reclasificación pasara a ser
visible en lugar de quedar oculto.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de tomarse en serio la ley de Goodhart es el trabajo repetido que
se evita. Una organización que diseña barreras de contención desde el
principio invierte una cantidad modesta de esfuerzo adicional en definir una
segunda métrica junto a la primera. Una organización que se salta este paso
a menudo gasta un trimestre entero o más de esfuerzo mal dirigido antes de
que la distorsión salga a la luz, seguido del coste mucho mayor de deshacer
el comportamiento manipulado y reconstruir después la confianza en el
número. El ejemplo minorista de arriba es típico: barato de prevenir, caro
de reparar.

El coste total de propiedad de una barrera de contención no es gratis: es
una segunda métrica que definir, instrumentar y revisar. Pero ese coste es
pequeño y fijo comparado con el coste sin límite de un incentivo que premia
en silencio el comportamiento equivocado durante meses antes de que alguien
se dé cuenta. Cada capítulo posterior a este incorpora esa compensación en
su precio, que es por lo que el emparejamiento con barreras de contención
aparece como recomendación en el resto de este libro y no solo aquí.

## Antipatrones y errores comunes

- **Publicar una métrica incentivada sin barrera de contención:** la causa
  raíz más común de un tablero distorsionado en este libro.
- **Tratar la manipulación como un fallo personal:** culpa a las personas
  por una respuesta racional a un incentivo mal diseñado, y no arregla nada.
- **Auditar el número pero nunca la definición:** el modo de fallo clásico
  del sector público, donde la métrica se ve bien porque quién cuenta cambió
  en silencio.
- **Asumir que una métrica que funcionaba como diagnóstico seguirá siendo
  segura al volverse evaluativa:** la exposición cambia en el momento en que
  se le asocia una recompensa, aunque nada más de la métrica cambie.
- **Diseñar la barrera de contención solo después del primer incidente de
  manipulación:** una reparación que llega cuando el daño a la confianza ya
  está hecho.
- **Ignorar la distancia:** asumir que una métrica se leerá como quien la
  diseñó pretendía una vez que viaja varias capas de gestión o un informe
  público lejos de esa persona.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas se incentivan de forma improvisada, sin
  considerar el riesgo de manipulación, y la distorsión solo se descubre
  después de que la calidad o la confianza sufran de forma visible.
- **Nivel 2, Desarrollar:** Algunos equipos reconocen la manipulación
  después de que ocurra y ajustan de manera informal, pero no existe una
  práctica consistente de diseñar barreras de contención por adelantado.
- **Nivel 3, Estandarizar:** Toda métrica incentivada en toda la
  organización requiere una barrera de contención documentada antes de su
  aprobación, y los cuatro patrones de manipulación se nombran y se enseñan.
- **Nivel 4, Gestionar:** El riesgo de manipulación se vigila activamente:
  las definiciones se auditan periódicamente, los pares de barreras de
  contención se revisan para comprobar si siguen detectando la distorsión, y
  los incidentes de manipulación se rastrean como una métrica en sí misma.
- **Nivel 5, Orquestar:** La organización trata la ley de Goodhart como una
  restricción de diseño permanente, revisada automáticamente cada vez que se
  propone una métrica nueva, y puede señalar rediseños concretos que
  impidieron la distorsión antes de que ocurriera, no solo después.

## Ideas para el debate

1. ¿Cuál es la métrica más consecuente de nuestra organización que hoy no tiene barrera de contención?
2. ¿Hemos visto alguna vez que un número mejorara mientras la realidad subyacente empeoraba?
3. ¿Quién se daría cuenta si la definición detrás de una de nuestras métricas públicas cambiara en silencio?
4. ¿A cuál de los cuatro patrones de manipulación (umbral, definición, temporización, sustitución) es más propensa nuestra organización?
5. ¿Qué nos costaría, en confianza, descubrir que se llevaba un año manipulando una métrica importante?

## Conclusiones clave

- **La ley de Goodhart:** una medida que se convierte en un objetivo deja de
  ser una buena medida, y esto rige cada métrica de este libro.
- Manipular una métrica es una **respuesta racional al incentivo**, no un
  defecto de carácter; arregla el diseño del incentivo, no a las personas.
- Prefiere **razones, tasas y cohortes** frente a recuentos brutos siempre
  que capturen el mismo comportamiento.
- Toda métrica incentivada necesita una **barrera de contención**, diseñada
  al mismo tiempo, no añadida después de descubrir la distorsión.
- Vigila los cuatro patrones de manipulación por su nombre: **manipulación
  de umbral, de definición, de temporización y de sustitución**.
- La **distancia** entre quien diseña una métrica y la persona cuyo
  comportamiento moldea aumenta el riesgo de distorsión; mantén esa
  distancia corta cuando puedas.

## Referencias y lecturas adicionales

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): el origen de la ley de Goodhart.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): la reformulación ampliamente citada, "cuando una medida se
  convierte en un objetivo, deja de ser una buena medida."
- *Seeing Like a State*, de James C. Scott (cómo las métricas legibles
  distorsionan los sistemas que miden, a escala de naciones).
- *The Tyranny of Metrics*, de Jerry Z. Muller (un tratamiento extenso de la
  fijación con las métricas y sus costes en muchas profesiones).
- *Lean Analytics*, de Alistair Croll y Benjamin Yoskovitz (métricas de
  vanidad frente a métricas accionables, y diseño de barreras de contención
  en el contexto de una startup).
- Orientación de la Oficina de Rendición de Cuentas del Gobierno de Estados
  Unidos (GAO) sobre la medición del rendimiento y la GPRA Modernization
  Act: informes de rendimiento del sector público y riesgo de manipulación.
