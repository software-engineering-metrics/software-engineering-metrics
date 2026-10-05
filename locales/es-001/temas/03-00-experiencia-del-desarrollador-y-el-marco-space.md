# 3.0 Introducción a la parte 3: Experiencia del desarrollador y el marco SPACE

La parte 2 midió la entrega desde fuera: con qué rapidez y con qué
seguridad se mueve el código por una canalización. Esta parte mide la
experiencia de las personas que producen ese código, y existe porque un
conjunto de métricas de entrega por sí solo puede verse excelente mientras
las personas detrás de él se están agotando, ahogándose en interrupciones o
desconectándose en silencio. Una organización que solo vigila las métricas
DORA puede mejorarlas durante uno o dos años exprimiendo más a un equipo,
justo hasta que la rotación, el colapso de calidad o el agotamiento borran
la ganancia de golpe. Esta parte es el contrapeso.

La pieza central es el [marco
SPACE](https://queue.acm.org/detail.cfm?id=3454124), desarrollado por
investigadores de Microsoft, GitHub y la Universidad de Victoria
específicamente como un correctivo al hábito de la industria de medir la
productividad del desarrollador mediante un único indicador indirecto fácil
de manipular, como las líneas de código o el número de commits. SPACE
abarca cinco dimensiones: satisfacción y bienestar, rendimiento, actividad,
comunicación y colaboración, y eficiencia y flujo. La disciplina central
del marco, y la razón por la que esta parte lo trata con el mismo rigor que
la parte 2 aplica a sus propias métricas de flujo, es que ninguna dimensión
individual es fiable por sí sola; el valor viene específicamente de
mantener las cinco a la vista juntas, para que un equipo no pueda verse
bien en un eje dañando otro en silencio.

Para los equipos grandes, las métricas de experiencia del desarrollador
responden a una pregunta que DORA no puede: ¿es sostenible este rendimiento
de entrega, y está la organización reteniendo a las personas que lo
producen? Las organizaciones grandes que ignoran esta parte tienden a
descubrir el coste a través de datos de rotación y entrevistas de salida,
bastante después de que el daño esté hecho; las organizaciones del sector
público, a menudo operando bajo restricciones salariales públicas que
limitan su capacidad de competir solo por compensación, tienen razones
particularmente fuertes para tratar la experiencia del desarrollador como
una preocupación de primer nivel y gestionada activamente en lugar de una
ocurrencia tardía.

## Temas de esta parte

- **3.1 El marco SPACE:** Las cinco dimensiones juntas, por qué ninguna es
  fiable por sí sola, y cómo construir a partir de ellas un conjunto de
  métricas genuinamente equilibrado.
- **3.2 Métricas de satisfacción y bienestar:** Medir la realización, la
  frustración y el riesgo de agotamiento, la dimensión que ninguna
  telemetría de sistema puede observar directamente.
- **3.3 Métricas de rendimiento e indicadores indirectos de resultado:** La
  dimensión más fácil de confundir con la actividad, y cómo medir en su
  lugar la contribución genuina a los resultados.
- **3.4 Métricas de actividad y sus límites:** Recuentos de commits, líneas
  de código, y por qué esta es la dimensión más peligrosa de sobreponderar.
- **3.5 Métricas de comunicación y colaboración:** Cómo fluye realmente la
  información entre personas y equipos, y qué aspecto tiene un patrón
  sano.
- **3.6 Eficiencia y flujo: trabajo profundo e interrupciones:** Proteger el
  tiempo ininterrumpido que requiere el trabajo de ingeniería real, y medir
  la fricción que lo erosiona.
- **3.7 Encuestas de experiencia del desarrollador y métricas DevEx:** Cómo
  realizar una encuesta que produzca una señal fiable en lugar de un
  concurso de popularidad, y cómo combinarla con datos objetivos.

## Cómo se relacionan estos temas

El tema 3.1 presenta juntas las cinco dimensiones de SPACE, y los
temas 3.2 a 3.6 después toman cada dimensión por turno con verdadera
profundidad, en el orden en que las presentan los investigadores de SPACE.
El tema 3.7 cierra la parte con la mecánica práctica del diseño de
encuestas, ya que la satisfacción, el rendimiento y la colaboración
dependen en parte de datos autoinformados (la distinción entre
instrumentación y autoinforme del tema 1.5 es directamente relevante a
lo largo de esta parte) y una encuesta mal diseñada socava cada uno de los
temas anteriores.

La disciplina central de esta parte, el equilibrio entre dimensiones en
lugar de la fuerza en una sola, es el ejemplo trabajado más claro que tiene
este libro del principio de resultados antes que producción del tema
1.3 aplicado a las personas en lugar de a una canalización de entrega. La
actividad (tema 3.4) es la dimensión de SPACE más análoga a una métrica
de producción pura, y esta parte la trata en consecuencia: útil como una
entrada entre cinco, peligrosa como señal aislada. Leída junto a la parte
2, esta parte completa la imagen que DORA por sí sola no puede
proporcionar: no solo si el software se envía rápido y con seguridad, sino
si las personas que lo envían pueden sostener ese ritmo.
