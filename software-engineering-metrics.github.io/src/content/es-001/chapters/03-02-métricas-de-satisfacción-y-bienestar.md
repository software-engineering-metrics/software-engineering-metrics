# 3.2 Métricas de satisfacción y bienestar

## Visión general y motivación

**Satisfacción y bienestar**, la S de SPACE (tema 3.1), es la
dimensión que ninguna telemetría de sistema puede observar directamente. Si
un ingeniero encuentra significativo su trabajo, si se siente respaldado
por su equipo, si se dirige hacia el agotamiento, nada de esto deja rastro
en un registro de control de versiones ni en una canalización de
integración continua. Hay que preguntarlo. Este tema trata de preguntar
bien: diseñar una medición que produzca una señal fiable sobre un estado
genuinamente subjetivo y genuinamente importante, en lugar de un número que
parece preciso mientras mide casi nada real.

Esta dimensión importa porque es el indicador adelantado de costes que
aparecen en otro lugar, mucho más tarde y de forma mucho más cara. La
satisfacción en declive predice la rotación antes que una entrevista de
salida. El riesgo de agotamiento en aumento predice un colapso de calidad
antes de que lo muestre la tasa de defectos. Una organización que solo
vigila las métricas de entrega y actividad se entera de un problema de
bienestar solo una vez que ya se ha convertido en una marcha, un
incidente, o un declive silencioso y sostenido en la producción que tarda
meses en diagnosticarse. Medir directamente la satisfacción y el bienestar
es lo que le compra a la organización el tiempo de anticipación para
actuar antes de que eso ocurra.

Para los equipos grandes, esta dimensión es también donde más agudamente
importa la distinción entre diagnóstico y evaluación del tema 1.1. Los
datos de satisfacción usados para entender y mejorar las condiciones del
equipo son valiosos y de bajo riesgo. Los mismos datos usados para
clasificar equipos o, peor, a personas entre sí corrompen el instrumento
de encuesta casi de inmediato, porque la gente deja de responder con
honestidad en cuanto sospecha que la respuesta se usará en su contra o en
contra de su equipo. Las organizaciones grandes y del sector público, con
sus ciclos formales de evaluación de desempeño, son especialmente
propensas a esta deriva y necesitan protegerse de ella explícitamente.

## Principios clave

- **La satisfacción y el bienestar no se pueden observar desde la
  telemetría del sistema.** Esta dimensión hay que preguntarla,
  deliberadamente y bien.
- **El anonimato no es opcional.** Cualquier vínculo percibido entre una
  respuesta honesta y una consecuencia personal destruye la señal.
- **Esta dimensión es un indicador adelantado, no rezagado.** Predice la
  rotación y los problemas de calidad antes de que aparezcan en otro
  lugar.
- **El agotamiento es un patrón específico y reconocible, no solo
  infelicidad genérica.** Mídelo explícitamente en lugar de depender solo
  de una puntuación vaga de satisfacción.
- **La tendencia importa más que cualquier lectura individual.** Una única
  puntuación de satisfacción es una instantánea; la tendencia a lo largo
  de encuestas sucesivas es la señal real.

## Recomendaciones

### Usa instrumentos de encuesta validados en lugar de inventar el tuyo propio

El bienestar y el agotamiento tienen instrumentos de medición establecidos
y validados, sobre todo el [Inventario de Burnout de
Maslach](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory), que mide
el agotamiento a través de tres dimensiones reconocidas: agotamiento
emocional, despersonalización o cinismo, y sensación reducida de logro
personal. Tomar prestado de un instrumento establecido y validado, incluso
una versión corta adaptada, produce datos más fiables que un conjunto de
preguntas improvisado e inventado internamente, porque los instrumentos
validados ya se han probado para comprobar si realmente miden lo que dicen
medir.

### Garantiza un anonimato genuino, y sé transparente sobre cómo lo lograste

Declara explícitamente, y cúmplelo, que las respuestas individuales no se
pueden rastrear hasta una persona, especialmente en equipos pequeños donde
de otro modo se podrían inferir los patrones de respuesta. Usa una
herramienta de encuesta de terceros que la propia organización no pueda
desanonimizar, publica resultados agregados solo por encima de un tamaño
mínimo de grupo (comúnmente cinco o más encuestados) para evitar la
inferencia en equipos pequeños, y comunica esta política con claridad
antes de pedirle a alguien que participe. Un único incidente donde se
rompa el anonimato, aunque sea accidentalmente, destruye la confianza en
cada encuesta futura.

### Rastrea la tendencia con el tiempo, no una única lectura aislada

Una única puntuación de satisfacción tiene un valor diagnóstico limitado
por sí sola; una tendencia decreciente a lo largo de tres ciclos de
encuesta consecutivos es una señal mucho más fuerte y accionable. Ejecuta
la encuesta con una cadencia consistente y moderada, lo trimestral es
común, y presenta siempre los resultados junto a la línea de tendencia
histórica en lugar de como un número aislado, para que tanto quienes lean
los resultados como quienes respondan puedan calibrar frente a un cambio
genuino en lugar de ruido puntual.

### Distingue la satisfacción genérica del riesgo específico de agotamiento

Una pregunta general de satisfacción ("¿qué tan satisfecho estás con tu
trabajo?") y una pregunta específica de agotamiento ("¿te sientes
emocionalmente agotado por tu trabajo?") miden cosas relacionadas pero
distintas, y un equipo puede puntuar razonablemente en la primera mientras
muestra señales de alerta reales en la segunda. Incluye ambas en el diseño
de tu encuesta, y trata una señal de alerta específica de agotamiento como
algo que requiere un seguimiento más rápido y directo que una caída
general de satisfacción.

### Empareja los datos de encuesta con señales corroborantes objetivas, con cautela

Donde estén disponibles, corrobora las tendencias de satisfacción con
señales objetivas que plausiblemente se relacionen con el bienestar: la
tasa de rotación voluntaria, patrones sostenidos de trabajo fuera de
horario, o una tasa creciente de vacaciones sin usar. Usa estas como
corroboración, nunca como sustituto de preguntar directamente, y ten
cuidado de que esta corroboración no se convierta en un mecanismo de
vigilancia que dañe, irónicamente, la propia confianza y satisfacción.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Preguntas de encuesta internas improvisadas | Rápidas de construir, ajustadas al contexto | Sin validar; no está claro si realmente miden lo que dicen medir |
| Instrumento validado (p. ej., Inventario de Burnout de Maslach, adaptado) | Probado, comparable, señal más fiable | Requiere más preparación y puede necesitar adaptación para el contexto de ingeniería |
| Encuestas de pulso cortas y frecuentes | Poca fatiga de encuestados, señal casi en tiempo real | Menos profundidad por encuesta; riesgo de ruido si se sobreinterpreta |
| Encuestas poco frecuentes y profundas | Señal rica y detallada | Más lenta para detectar un problema de rápido desarrollo como el agotamiento agudo |

La tensión central es **profundidad frente a frecuencia**. Una encuesta
profunda y validada ejecutada trimestralmente da una imagen fiable y
detallada pero puede pasar por alto un problema de rápido desarrollo entre
ciclos; las encuestas de pulso cortas y frecuentes detectan problemas más
rápido pero arriesgan datos más superficiales y ruidosos y fatiga de
encuestados si se abusa de ellas. Resuélvela ejecutando una encuesta más
profunda y validada con cadencia trimestral como instrumento principal,
complementada con una comprobación de pulso muy corta y opcional (una o
dos preguntas) con más frecuencia para alerta temprana, sin pedir la
misma profundidad de compromiso cada vez.

## Preguntas para debatir con tu equipo

1. **¿Usamos un instrumento de encuesta validado, o preguntas que
   inventamos nosotros mismos sin evidencia de que realmente midan la
   satisfacción o el agotamiento?** Si tu encuesta actual se construyó de
   forma improvisada, considera si adaptarla de un instrumento establecido
   como el Inventario de Burnout de Maslach produciría datos más fiables.

2. **¿Podemos garantizar honestamente el anonimato, incluso en equipos
   pequeños donde los patrones de respuesta podrían ser inferibles de otro
   modo?** Repasa tu herramienta de encuesta real y tu práctica de
   agregación y comprueba si un gestor decidido podría, en la práctica,
   inferir las respuestas de una persona, aunque la política diga que no
   debería poder.

3. **¿Hemos visto alguna vez que los datos de satisfacción presagiaran un
   pico de rotación o un problema de calidad que apareció más tarde en
   otras métricas?** Repasa tu historial de encuestas frente a tus datos
   de rotación e incidentes y observa si un patrón de indicador adelantado
   es visible en retrospectiva. Si nunca lo has comprobado, eso en sí
   mismo merece debatirse.

4. **¿Distinguimos la satisfacción general del riesgo específico de
   agotamiento en nuestra encuesta, o dependemos de una única pregunta
   mezclada?** Un equipo puede verse bien en satisfacción general mientras
   muestra señales de alerta reales de agotamiento por debajo; comprueba si
   tu instrumento actual podría realmente detectar esa diferencia.

5. **¿Se han usado alguna vez los datos de satisfacción, aunque sea de
   manera informal, para comparar o clasificar equipos entre sí?** Esta
   deriva hacia el uso evaluativo corrompe el instrumento de encuesta casi
   de inmediato, porque quienes responden cambian sus respuestas en cuanto
   sospechan una consecuencia competitiva.

6. **¿Cuál es nuestra tasa de respuesta real, y qué nos estaría diciendo
   una tasa de respuesta en declive por sí misma?** Una tasa de respuesta
   que cae en encuestas sucesivas es en sí misma una señal, a menudo de
   confianza erosionada en el proceso o de fatiga de encuesta, y merece
   investigarse por derecho propio en lugar de descartarse como una
   molestia de recopilación de datos.

## Enfoque sectorial

**Startup.** Con un puñado de personas, las encuestas formales anónimas
pueden sentirse innecesarias, y la conversación directa a menudo saca a la
luz los problemas de satisfacción más rápido de lo que lo haría un
instrumento trimestral. El riesgo es que quien funda la empresa confunda
la ausencia de quejas con la ausencia de un problema; introduce incluso una
revisión ligera y anónima en cuanto el equipo crezca más allá del tamaño
en que todos hablan a diario.

**Pequeña empresa.** Una herramienta de encuesta anónima simple, gratuita o
de bajo coste, ejecutada trimestralmente con un conjunto corto y adaptado
de preguntas validadas, es alcanzable sin una función dedicada de
analítica de personas. Resiste la tentación de saltarte las garantías de
anonimato porque el equipo se siente unido; precisamente esa cercanía es
lo que hace más difícil dar retroalimentación negativa honesta
directamente.

**Empresa grande.** La infraestructura de encuestas a esta escala necesita
inversión real: una herramienta de terceros adecuada, una política de
agregación con tamaño mínimo de grupo, y una política clara y comunicada
de forma consistente de uso no evaluativo. La recompensa también es
proporcionalmente mayor, ya que detectar una tendencia de agotamiento en
una organización de gran plantilla antes de que impulse la rotación
protege una cantidad mucho mayor de conocimiento institucional.

**Sector público.** La presión de retención por las restricciones
salariales del sector público hace que esta dimensión sea estratégicamente
importante, no opcional. Los datos de bienestar pueden justificar
directamente solicitudes presupuestarias para inversiones de retención no
monetarias (herramientas, tiempo protegido, gestión de la carga de
trabajo) que las restricciones de compensación por sí solas no pueden
abordar, siempre que la propia recopilación de datos sea lo bastante
fiable como para citarse con confianza.

## Ejemplos

**Empresa grande.** El equipo de plataforma de una empresa de
infraestructura en la nube puntuó bien en satisfacción general durante más
de un año mientras una pregunta específica de agotamiento, adaptada de la
subescala de agotamiento emocional del Inventario de Burnout de Maslach,
mostraba un declive constante a lo largo de cuatro trimestres
consecutivos. El liderazgo, inicialmente inclinado a descartar la
preocupación porque el número general de satisfacción se veía bien,
investigó más a fondo tras un segundo trimestre consecutivo de declive y
encontró que el equipo había estado absorbiendo una carga de guardia
insostenible (tema 6.3) durante casi un año tras una congelación de
contrataciones. Restaurar una dotación adecuada de guardia revirtió la
tendencia de agotamiento en dos trimestres, bastante antes de que se
hubiera convertido en el pico de rotación que los datos de la empresa
mostraban como la consecuencia posterior típica de este patrón.

**Sector público.** Una agencia de TI de un gobierno estatal, enfrentando
una dificultad crónica para competir en salario con empleadores del sector
privado, usó datos de encuesta de bienestar específicamente para construir
un caso presupuestario para una política de tiempo de concentración
protegido en lugar de un aumento salarial que no podía conseguir. La
encuesta mostró que la frecuencia de interrupciones y la carga de
reuniones, no la compensación, eran los predictores más fuertes de
intención de marcharse entre quienes respondieron que estaban buscando
activamente empleo. La política resultante, bloqueando dos tardes sin
interrupciones a la semana para trabajo de ingeniería concentrado, se
correlacionó con una mejora medible tanto en las puntuaciones de
satisfacción como en la retención voluntaria durante el año siguiente, a
una fracción del coste que habría requerido un aumento salarial
competitivo.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de medir directamente la satisfacción y el bienestar es la
alerta temprana: una organización que detecta una tendencia de agotamiento
un año entero antes de que se convierta en rotación puede intervenir a una
fracción del coste de reclutar e incorporar a un reemplazo, que
típicamente tarda meses en alcanzar plena productividad incluso una vez
contratado. La rotación voluntaria de un ingeniero experimentado le cuesta
a una organización mucho más que la infraestructura de encuesta que podría
haber dado la alerta.

El coste total de propiedad incluye la herramienta de encuesta, la
disciplina de garantizar y mantener un anonimato genuino, y el compromiso
organizacional de actuar sobre lo que muestran los datos en lugar de
recopilarlos e ignorar los resultados incómodos. Ese último coste, la
disposición a actuar, suele ser el verdadero cuello de botella, no la
propia medición; una encuesta que revela un problema que nadie aborda
erosiona la confianza en el instrumento con la misma seguridad que una
garantía de anonimato rota.

## Antipatrones y errores comunes

- **Preguntas de encuesta improvisadas y sin validar:** produce datos de
  fiabilidad incierta.
- **Garantías de anonimato débiles o rotas:** destruye la respuesta
  honesta y la confianza en el instrumento, a menudo de forma permanente.
- **Reaccionar a una única lectura en lugar de rastrear la tendencia:**
  reacciona en exceso al ruido o pasa por alto un declive lento genuino.
- **Mezclar la satisfacción general con preguntas específicas de
  agotamiento:** puede esconder una señal de alerta real dentro de un
  promedio que se ve bien.
- **Usar los datos de satisfacción para clasificar o comparar equipos:** la
  deriva evaluativa que corrompe las respuestas honestas.
- **Recopilar los datos pero nunca actuar sobre un resultado incómodo:**
  erosiona la confianza en la encuesta tan a fondo como lo hace una
  promesa de anonimato rota.

## Modelo de madurez

- **Nivel 1, Iniciar:** La satisfacción y el bienestar no se miden en
  absoluto, o solo a través de conversaciones informales y sin estructura.
- **Nivel 2, Desarrollar:** Existe una encuesta improvisada pero carece de
  validación, una cadencia consistente o una garantía fuerte de anonimato.
- **Nivel 3, Estandarizar:** Un instrumento de encuesta validado o
  adaptado se ejecuta con una cadencia consistente y una garantía de
  anonimato fuerte y comunicada, en toda la organización.
- **Nivel 4, Gestionar:** Las tendencias se rastrean activamente a lo
  largo de ciclos sucesivos, las señales específicas de agotamiento se
  distinguen de la satisfacción general, y la organización tiene un
  proceso documentado para actuar sobre las señales de alerta.
- **Nivel 5, Orquestar:** Los datos de bienestar informan directamente la
  planificación de personal y la inversión en retención, corroborados con
  cautela con señales objetivas, y la organización puede señalar
  intervenciones concretas que revirtieron un declive medido antes de que
  se convirtiera en rotación o en un problema de calidad.

## Ideas para el debate

1. ¿Sobreviviría nuestro instrumento de encuesta actual al escrutinio como genuinamente anónimo?
2. ¿Ha predicho alguna vez una tendencia de satisfacción o agotamiento un problema que después apareció en otro lugar?
3. ¿Cuál es nuestro proceso para actuar sobre un resultado de encuesta que no queremos oír?
4. ¿Distinguimos actualmente el riesgo de agotamiento de la satisfacción general en nuestra medición?
5. ¿Qué inversión no monetaria justificarían mejor ahora mismo nuestros datos de bienestar?

## Conclusiones clave

- La satisfacción y el bienestar hay que **preguntarlos directamente**;
  ninguna telemetría de sistema puede observar esta dimensión.
- Usa un **instrumento validado** cuando sea posible, y garantiza un
  **anonimato** genuino y bien comunicado.
- Esta dimensión es un **indicador adelantado** de problemas de rotación y
  calidad que de otro modo saldrían a la luz mucho más tarde y de forma
  mucho más cara.
- Distingue la **satisfacción general del riesgo específico de
  agotamiento**, y rastrea la **tendencia en el tiempo**, no una única
  lectura.
- Nunca uses estos datos para **clasificar o comparar equipos**; esa
  deriva corrompe la respuesta honesta casi de inmediato.

## Referencias y lecturas adicionales

- Maslach, Christina, y Susan E. Jackson, *Maslach Burnout Inventory* (el
  instrumento validado y ampliamente usado para medir el agotamiento a
  través de tres dimensiones).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink
  (investigación sobre motivación y satisfacción relevante para el diseño
  de encuestas).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, de Christina Maslach y Michael P. Leiter (causas
  organizacionales e intervenciones para el agotamiento).
