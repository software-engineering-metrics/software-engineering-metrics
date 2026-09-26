# 1.0 Introducción a la parte 1: Fundamentos de la medición

Antes de que este libro nombre una sola métrica, tiene que responder a una
pregunta más difícil: ¿para qué sirve la medición? Todo equipo que alguna
vez ha construido un tablero también ha visto, tarde o temprano, cómo un
número mejoraba mientras aquello que se suponía que representaba empeoraba.
Eso no es un fallo de herramientas. Es el resultado previsible de saltarse
los fundamentos que cubre esta parte: por qué medimos siquiera, qué le pasa
a una métrica en cuanto la gente sabe que se está vigilando, cómo ponderar
los resultados sobre la actividad, quién posee un número y su definición, de
dónde vienen realmente los datos, y cómo leer una señal ruidosa sin
engañarte a ti mismo.

Para los equipos grandes, estos fundamentos dejan de ser opcionales. Un
único equipo puede salirse con la suya con un número improvisado que un
gestor mira de reojo una vez por semana. Una organización con cientos de
ingenieros, docenas de tableros y un equipo de liderazgo que reporta hacia
arriba no puede. A esa escala, una métrica sin dueño o mal definida no
engaña solo a un equipo, engaña a todos los que confían en ese número más
abajo sin comprobar cómo se construyó, y resulta caro deshacerlo una vez que
el comportamiento se ha adaptado para manipularlo.

Las organizaciones grandes y del sector público sienten esto con más fuerza,
porque sus métricas a menudo cargan con consecuencias más allá del equipo
que las produce: decisiones presupuestarias, informes públicos de
rendimiento, hallazgos de auditoría y contratos con proveedores. Una métrica
que parece una comodidad interna de ingeniería puede convertirse en
silencio en una entrada crítica e incuestionada para decisiones que toman
personas que nunca ven la canalización que la generó. Sentar bien los
fundamentos es lo que hace soportable ese peso.

## Capítulos de esta parte

- **1.1 Por qué medir la ingeniería de software:** El argumento a favor de
  medir siquiera, qué se supone que debe lograr, y la diferencia entre medir
  para aprender y medir para juzgar.
- **1.2 La ley de Goodhart y la psicología de las métricas:** La única idea
  que rige cada uno de los demás capítulos de este libro: una medida que se
  convierte en un objetivo deja de ser una buena medida, y los mecanismos
  psicológicos que hacen casi inevitable la manipulación en cuanto la gente
  sabe que se la está vigilando.
- **1.3 Resultados antes que producción: elegir qué medir:** Cómo ponderar
  un conjunto de métricas hacia los resultados en lugar de la actividad,
  usando la distinción clásica entrada/producción/resultado y el patrón de
  la métrica estrella.
- **1.4 Gobernanza y propiedad de las métricas:** Quién decide qué se mide,
  quién posee una definición, y cómo una carta de métricas evita que un
  tablero en crecimiento se convierta en una sobrecarga sin responsables.
- **1.5 Fuentes de datos e instrumentación:** De dónde vienen realmente las
  métricas de ingeniería, instrumentación frente a autoinforme, y los
  problemas de calidad de datos que invalidan un tablero en silencio antes
  de que nadie lo note.
- **1.6 Alfabetización estadística para métricas de ingeniería:** El juicio
  estadístico mínimo que necesita un equipo para leer una métrica con
  honestidad: percentiles frente a promedios, tamaño de muestra, regresión a
  la media y variables de confusión.

## Cómo se relacionan estos capítulos

Estos seis capítulos se construyen en un orden estricto. El capítulo 1.1
pregunta por qué medir siquiera, algo que importa porque un equipo que no lo
ha respondido acaba recopilando números sobre los que nadie actúa. El
capítulo 1.2 es el eje sobre el que gira el resto del libro: en cuanto
aceptas que cualquier medida puede convertirse en un objetivo y sufrir
manipulación, las recomendaciones de todos los capítulos posteriores se
derivan de diseñar contra ese riesgo. El capítulo 1.3 convierte esa cautela
en una regla positiva: pondera hacia los resultados, porque son la
categoría más difícil de manipular de forma barata. El capítulo 1.4 hace
concreta la gobernanza, el capítulo 1.5 hace concretos los datos, y el
capítulo 1.6 te da el juicio estadístico para evitar que te engañe el ruido
incluso una vez que la gobernanza y la instrumentación son sólidas.

Todo lo que viene después depende de esta parte. Las métricas de flujo y las
métricas DORA de la parte 2, y el marco SPACE de la parte 3, son todos, en
efecto, ejemplos trabajados de los principios de ponderación de resultados y
emparejamiento con barreras de contención expuestos en los capítulos 1.2 y
1.3. La guía de diseño de tableros del capítulo 8.1 asume el modelo de
gobernanza del capítulo 1.4. Y el modelo de madurez que cierra cada capítulo
de este libro es, bajo sus cinco niveles, un modelo de madurez precisamente
para la disciplina que introduce esta parte: medir con intención, y revisar
tu propio trabajo.
