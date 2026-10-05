# 3.7 Encuestas de experiencia del desarrollador y métricas DevEx

## Visión general y motivación

Este capítulo cierra la parte 3 con la mecánica práctica que hace fiables
los datos autoinformados de cada capítulo anterior: cómo diseñar una
encuesta de experiencia del desarrollador (DevEx) que produzca una señal
genuina en lugar de un concurso de popularidad, y cómo combinar los datos
de encuesta con instrumentación objetiva en un conjunto de métricas sobre
el que una organización realmente pueda actuar. Cada capítulo de esta
parte depende de alguna forma de autoinforme, satisfacción y bienestar
(capítulo 3.2) más directamente, pero el rendimiento, la comunicación y el
flujo también se benefician de una encuesta bien diseñada, y una encuesta
mal diseñada socava el valor de todos ellos a la vez.

La **experiencia del desarrollador (DevEx)** es el planteamiento más
amplio y reciente que ha surgido en torno a la misma idea central que
formalizó SPACE: la experiencia real y del día a día de los ingenieros al
sacar adelante el trabajo, fricción, herramientas, carga cognitiva,
bucles de retroalimentación, es en sí misma algo medible y mejorable, no
solo una preocupación cultural blanda. La investigación de DevEx, sobre
todo el marco propuesto por Abi Noda, Margaret-Anne Storey, Nicole
Forsgren y Michaela Greiler, organiza esta experiencia en torno a tres
dimensiones: bucles de retroalimentación, carga cognitiva, y estado de
flujo, que se corresponden de cerca con las dimensiones de SPACE que esta
parte ya ha cubierto en profundidad, y las extienden.

Para los equipos grandes, la diferencia entre una encuesta que produce una
señal fiable y una que produce ruido o, peor, datos activamente engañosos
está por completo en los detalles de diseño que cubre este capítulo:
redacción de preguntas, elección de la escala de respuesta, muestreo y
cadencia, y cómo se comunican los resultados de vuelta a quienes
respondieron. Las organizaciones grandes y del sector público que
ejecutan estas encuestas a escala, entre miles de ingenieros, no pueden
permitirse equivocarse en esto, porque un instrumento defectuoso a esa
escala produce conclusiones confiadas y equivocadas que moldean
decisiones reales de recursos.

## Principios clave

- **La calidad del diseño de la encuesta determina la fiabilidad de los
  datos mucho más que la longitud o la sofisticación de la encuesta.** Una
  encuesta corta y bien diseñada supera siempre a una larga y mal
  diseñada.
- **La tasa de respuesta es en sí misma una señal**, no solo una métrica de
  recopilación de datos; una tasa en declive a menudo indica una confianza
  erosionada en el proceso.
- **Combina los datos de encuesta con instrumentación objetiva** siempre
  que sea posible, siguiendo el principio de instrumentación del capítulo
  1.5; usa los datos de encuesta específicamente para lo que los datos
  objetivos no pueden capturar.
- **Cierra el ciclo con quienes responden.** Una encuesta que nunca lleva
  visiblemente a ningún cambio entrena a la gente para dejar de tomársela
  en serio.
- **DevEx y SPACE son planteamientos complementarios de la misma
  preocupación subyacente**, no marcos en competencia entre los que
  elegir.

## Recomendaciones

### Diseña preguntas claras y evita la redacción sesgada o de doble cañón

Escribe preguntas de encuesta que pregunten sobre exactamente una cosa, en
lenguaje sencillo, sin incrustar una suposición en la propia pregunta.
"¿Qué tan satisfecho estás con nuestras herramientas y documentación?" es
una pregunta de doble cañón que mezcla dos respuestas potencialmente muy
distintas en una sola respuesta confusa. Divídela en dos preguntas
separadas. Evita la redacción sesgada como "¿cuánto ha mejorado tu
experiencia nuestra inversión reciente en herramientas?", que presupone
que la mejora ocurrió en lugar de preguntar de forma neutral si ocurrió.

### Usa escalas de respuesta consistentes y prueba las preguntas nuevas antes de un despliegue amplio

Estandariza una escala de respuesta consistente (una escala
[Likert](https://en.wikipedia.org/wiki/Likert_scale) de cinco o siete
puntos es común y está bien estudiada) en todo tu instrumento de encuesta,
para que las respuestas sean comparables entre preguntas y a lo largo del
tiempo. Prueba cualquier pregunta nueva con un grupo pequeño antes de
desplegarla en toda la organización, para detectar redacción ambigua o una
interpretación inesperada antes de que corrompa un conjunto de datos
completo.

### Trata la tasa de respuesta como una señal diagnóstica por derecho propio

Rastrea la tasa de respuesta de la encuesta a lo largo de ciclos
sucesivos, y trata una tasa en declive como una señal de alerta que
merece investigarse directamente, similar a la señal de confianza
comentada en el capítulo 3.2. Una tasa de respuesta que cae a menudo
indica fatiga de encuesta, confianza erosionada en que los resultados
lleven a la acción, o una sospecha creciente de que el anonimato no está
genuinamente protegido, cualquiera de las cuales merece una investigación
directa en lugar de descartarse como una mera molestia de recopilación de
datos.

### Combina los datos de encuesta con instrumentación objetiva de DevEx

Empareja las respuestas subjetivas de encuesta con señales objetivas donde
existan: tiempo de compilación, tiempo de ejecución de la suite de
pruebas, tiempo de configuración del entorno de desarrollo local, y los
datos de tiempo de flujo e interrupción del capítulo 3.6. Una respuesta de
encuesta que dice "nuestra compilación es demasiado lenta" se vuelve mucho
más accionable emparejada con la tendencia real medida del tiempo de
compilación, y la combinación detecta casos donde la percepción y la
realidad objetiva divergen en cualquier dirección, algo que merece
investigarse por sí mismo.

### Cierra el ciclo: publica los resultados y una acción de seguimiento visible

Después de cada ciclo de encuesta, publica un resumen honesto de los
resultados, incluidos los resultados que el liderazgo preferiría no
destacar, y comprométete públicamente con al menos una acción concreta
tomada en respuesta. Una encuesta que no produce ningún seguimiento
visible les enseña a quienes responden que su aporte honesto no importa,
lo que degrada tanto la tasa de respuesta como la honestidad de las
respuestas en cada ciclo posterior. Esta disciplina de cerrar el ciclo
suele ser el determinante individual más importante de si un programa de
encuesta DevEx se mantiene útil a lo largo de varios años o se degrada
lentamente hasta convertirse en un ejercicio de marcar casillas.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Encuesta larga y exhaustiva | Datos ricos y detallados sobre muchos temas | Menor tasa de respuesta, más fatiga, más margen para preguntas mal diseñadas |
| Encuesta corta y enfocada | Mayor tasa de respuesta, más fácil de diseñar bien | Menos cobertura; puede pasar por alto un problema emergente fuera del foco elegido |
| Solo datos de encuesta | Captura directamente la experiencia subjetiva | Vulnerable al sesgo y no se puede verificar contra la realidad objetiva |
| Encuesta combinada con instrumentación objetiva | Detecta la divergencia entre percepción y realidad, más accionable | Requiere más esfuerzo de integración de datos |

La tensión central es **cobertura frente a calidad de respuesta**. Una
encuesta más larga y exhaustiva captura más terreno pero degrada la tasa
de respuesta y aumenta el riesgo de que se cuelen preguntas mal diseñadas;
una encuesta corta y enfocada obtiene respuestas de mejor calidad pero
arriesga pasar por alto algo importante fuera de su alcance. Resuélvela
manteniendo corta y bien probada la encuesta central y recurrente, y
usando encuestas ocasionales y claramente etiquetadas de exploración
profunda para temas específicos que necesiten una investigación más
detallada, en lugar de intentar cubrirlo todo en cada ciclo.

## Preguntas para debatir con tu equipo

1. **¿Hemos probado alguna vez una pregunta nueva de encuesta con un grupo
   pequeño antes de desplegarla ampliamente, o las preguntas nuevas van
   directamente a la encuesta completa?** Saltarse el paso de prueba es una
   forma común en que preguntas ambiguas o de doble cañón acaban
   corrompiendo un conjunto de datos completo antes de que alguien note que
   la redacción no era clara.

2. **¿Qué ha hecho nuestra tasa de respuesta en los últimos ciclos de
   encuesta, y hemos investigado un declive si ocurrió?** Trata esta
   tendencia como una señal genuina que merece debatirse, no solo como una
   molestia de recopilación de datos que anotar de pasada.

3. **¿Combinamos los datos de encuesta con alguna instrumentación
   objetiva, o la percepción subjetiva se sostiene por completo sola en
   nuestros informes?** Identifica al menos un lugar donde emparejar una
   pregunta de encuesta con datos objetivos, tiempo de compilación,
   frecuencia de despliegue, podría hacer el resultado más accionable.

4. **¿Qué acción concreta hemos tomado como resultado directo y visible de
   nuestro último ciclo de encuesta, y comunicamos esa acción de vuelta a
   quienes respondieron?** Si la respuesta honesta es "nada visible", ese
   vacío probablemente ya está erosionando la confianza en el instrumento,
   se haya reflejado ya o no en la tasa de respuesta.

5. **¿Alguna de nuestras preguntas de encuesta actuales es sesgada o de
   doble cañón, y lo notaríamos si lo fuera?** Revisa tus preguntas
   actuales reales frente a esta prueba específica como ejercicio de
   grupo.

6. **¿Cómo se comparan nuestros datos de encuesta DevEx o SPACE frente a
   señales objetivas cuando ambos parecen no coincidir, y qué nos dice ese
   desacuerdo?** Un caso donde la percepción y los datos objetivos
   divergen suele ser más valioso diagnósticamente que un caso donde
   coinciden, ya que la propia brecha es informativa.

## Enfoque sectorial

**Startup.** Una encuesta de pulso simple y muy corta, a veces solo una o
dos preguntas, ejecutada de manera informal y frecuente, suele bastar a
esta escala, y el rigor formal de diseño de instrumento importa menos
cuando quien funda la empresa todavía puede tener una conversación directa
con casi todos con regularidad.

**Pequeña empresa.** Una herramienta de encuesta gratuita o de bajo coste
con un conjunto corto y adaptado de preguntas, ejecutada trimestralmente,
captura la mayor parte del valor aquí sin necesitar experiencia dedicada
en diseño de encuestas. Prioriza la disciplina de cerrar el ciclo sobre la
sofisticación; incluso un equipo pequeño se beneficia de actuar
visiblemente sobre lo que revela una encuesta corta.

**Empresa grande.** La calidad del diseño de la encuesta importa
enormemente a escala, porque una pregunta defectuosa o una garantía de
anonimato rota corrompe datos de miles de encuestados a la vez, y las
conclusiones confiadas y equivocadas resultantes pueden desviar decisiones
de recursos significativas. Invierte en experiencia real de diseño de
encuestas, o asóciate con una plataforma establecida de medición DevEx, en
lugar de construir un instrumento improvisado internamente.

**Sector público.** La tasa de respuesta y la confianza son especialmente
frágiles en organizaciones donde el personal ya puede desconfiar de cómo
se usan los datos internamente. Sobreinvierte en garantías de anonimato
transparentes y en acciones de seguimiento visibles específicamente para
construir la confianza que hace alcanzable una tasa de respuesta honesta
en un contexto donde el escepticismo sobre el uso de datos puede ya ser
más alto que en un entorno típico del sector privado.

## Ejemplos

**Empresa grande.** La encuesta DevEx inicial de una empresa de software
incluía una pregunta que pedía a los ingenieros calificar la "satisfacción
con las herramientas y el proceso", una pregunta de doble cañón que
mezclaba dos preocupaciones muy distintas. Cuando la puntuación combinada
resultó mediocre, el liderazgo no pudo saber si el problema era las
herramientas, el proceso, o ambos, y los esfuerzos iniciales de
remediación apuntaron al área equivocada durante dos trimestres. Dividir
la pregunta en una revisión posterior reveló que la puntuación de
herramientas en realidad era fuerte y la puntuación de proceso era pobre,
redirigiendo la inversión hacia simplificar un proceso engorroso de
aprobación de publicaciones, lo que produjo una mejora medible de
satisfacción en un trimestre, a diferencia del esfuerzo anterior centrado
en herramientas que había mostrado poco efecto.

**Sector público.** La primera encuesta DevEx de una agencia digital
nacional tuvo una tasa de respuesta por debajo del 30%, y una revisión
interna encontró que el personal creía ampliamente, correctamente como
resultó, que los gestores individuales podían ver quién había respondido
y quién no, aunque los resultados agregados se suponía que eran anónimos.
La agencia se cambió a una plataforma de encuesta de terceros genuinamente
independiente con anonimato verificado, comunicó el cambio de forma
explícita y repetida, y publicó un resumen claro de los resultados del
ciclo anterior junto con tres acciones concretas tomadas en respuesta. La
tasa de respuesta subió a más del 70% en dos ciclos, y el liderazgo de la
agencia atribuyó específicamente la combinación de anonimato genuino y
acción de seguimiento visible como la razón por la que se recuperó la
confianza en el instrumento.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de un programa de encuesta DevEx bien diseñado son datos
fiables y accionables sobre una dimensión, la experiencia del
desarrollador, que de otro modo permanece invisible hasta que sale a la
luz como rotación o una ralentización de entrega. El ejemplo de la empresa
de software de arriba muestra el coste de diseñar mal: dos trimestres de
esfuerzo de remediación mal dirigido porque una única pregunta mal
redactada mezclaba dos preocupaciones distintas.

El coste total de propiedad incluye la herramienta de encuesta, la
disciplina de diseño y prueba que recomienda este capítulo, y el
compromiso continuo de cerrar el ciclo con una acción de seguimiento
visible en cada ciclo. Ese compromiso, más que cualquier coste de
herramienta, es lo que determina si un programa de encuesta se mantiene
útil durante años o se degrada hasta convertirse en un ejercicio de marcar
casillas que produce datos cada vez menos fiables con el tiempo.

## Antipatrones y errores comunes

- **Preguntas de doble cañón o sesgadas:** mezclan preocupaciones
  distintas o sesgan las respuestas, y a menudo pasan desapercibidas sin
  pruebas previas.
- **Saltarse el paso de prueba para preguntas nuevas:** deja que una
  redacción ambigua corrompa un conjunto de datos a gran escala.
- **Ignorar una tasa de respuesta en declive:** pasa por alto una señal de
  confianza importante por derecho propio.
- **Nunca cerrar el ciclo con una acción de seguimiento visible:** enseña
  a quienes responden que el aporte honesto no importa, degradando la
  calidad de los datos futuros.
- **Tratar los datos de encuesta como suficientes por sí solos, sin
  corroboración objetiva:** pasa por alto casos donde la percepción y la
  realidad divergen en cualquier dirección.
- **Garantías de anonimato débiles o no verificables:** la forma más
  rápida de derrumbar tanto la tasa de respuesta como la honestidad de las
  respuestas.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las preguntas de encuesta son improvisadas y sin
  probar, la tasa de respuesta no se rastrea como señal, y los resultados
  rara vez llevan a una acción visible.
- **Nivel 2, Desarrollar:** Existe cierta disciplina de diseño de
  encuesta, pero las pruebas son inconsistentes y el ciclo no se cierra de
  forma fiable con quienes responden.
- **Nivel 3, Estandarizar:** Las preguntas se prueban antes del
  despliegue, la tasa de respuesta se rastrea y se investiga cuando cae, y
  los resultados se publican de forma consistente con al menos una acción
  de seguimiento concreta.
- **Nivel 4, Gestionar:** Los datos de encuesta se combinan
  sistemáticamente con instrumentación objetiva, y la divergencia entre
  ambos se investiga activamente como señal diagnóstica.
- **Nivel 5, Orquestar:** La organización tiene un programa de encuesta
  maduro, confiable y de varios años con tasas de respuesta
  consistentemente altas, acción visible demostrable en cada ciclo, y un
  historial de detectar y corregir preguntas mal diseñadas antes de que
  corrompan los datos.

## Ideas para el debate

1. ¿Ha confundido o engañado alguna vez a un encuestado alguna pregunta actual de nuestro instrumento?
2. ¿Cuál fue la última acción concreta que tomamos como resultado directo de datos de encuesta?
3. ¿Cómo sabríamos si se hubiera roto nuestra garantía de anonimato, aunque fuera accidentalmente?
4. ¿Dónde coinciden o no coinciden nuestros datos de encuesta con la instrumentación objetiva, y qué nos dice eso?
5. ¿Qué haría falta para duplicar nuestra tasa de respuesta actual?

## Conclusiones clave

- La **calidad del diseño** de la encuesta, preguntas claras, de un solo
  concepto y sin sesgo, importa más que la longitud o la sofisticación.
- **La tasa de respuesta es una señal por derecho propio**; investiga un
  declive en lugar de tratarlo como una mera molestia.
- **Combina los datos de encuesta con instrumentación objetiva** para
  detectar la divergencia entre percepción y realidad.
- **Cierra el ciclo**: publica los resultados y una acción de seguimiento
  visible en cada ciclo, o la confianza en el instrumento se erosionará.
- **DevEx y SPACE son planteamientos complementarios**, no en competencia,
  de la misma preocupación subyacente por la experiencia del desarrollador.

## Referencias y lecturas adicionales

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, y Michaela Greiler,
  "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): el marco
  DevEx de bucles de retroalimentación, carga cognitiva y estado de flujo.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and
  Win in the 21st Century*, de Jeff Lawson (inversión organizacional en la
  experiencia del desarrollador).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, de
  Louis M. Rea y Richard A. Parker (metodología general de diseño de
  encuestas aplicable a los instrumentos DevEx).
