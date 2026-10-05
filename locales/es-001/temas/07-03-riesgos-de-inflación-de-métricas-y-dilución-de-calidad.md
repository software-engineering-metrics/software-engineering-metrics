# 7.3 Riesgos de inflación de métricas y dilución de calidad

## Visión general y motivación

Este tema nombra, directa y específicamente, los dos modos de fallo
frente a los que advirtió el tema 7.1 que debe protegerse todo el
marco de este libro a medida que el desarrollo asistido por IA se
convierte en práctica estándar: la **inflación de métricas**, números que
suben sin un valor real correspondiente, y la **dilución de calidad**, una
erosión gradual en la calidad del código que supera la capacidad actual
de la industria para detectarla mediante las prácticas de revisión y
pruebas existentes. Estas no son categorías de riesgo nuevas que este
libro no haya nombrado ya, la inflación de métricas es la ley de Goodhart
del tema 1.2 y la manipulación por sustitución del tema 1.2
aplicadas a escala, y la dilución de calidad es la brecha de eficacia de
cobertura del tema 4.2 y la preocupación de defectos escapados del
tema 5.1, ambas intensificadas. Lo nuevo es la velocidad y la escala a
las que la IA generativa puede producir ambos modos de fallo
simultáneamente, más rápido de lo que fueron diseñadas para detectar la
mayoría de las salvaguardas existentes de las organizaciones.

El mecanismo específico que preocupa a este tema es sutil: el código
generado por IA muy a menudo parece correcto. Sigue modismos familiares,
usa nombres de variables plausibles, y pasa una lectura superficial de
manera mucho más fiable que el código escrito por humanos genuinamente
descuidado típicamente lo hace, precisamente porque se entrenó con un
corpus vasto de código que parecía correcto. Esto hace que los defectos
generados por IA sean más difíciles de detectar para un revisor humano
mediante el tipo de revisión de reconocimiento de patrones, "¿esto se ve
bien?", que detecta muchos errores introducidos por humanos, porque la
versión generada por IA está específicamente optimizada, en un sentido
estadístico, para verse correcta sea o no que realmente lo esté.

Para los equipos grandes, los riesgos de este tema se acumulan con la
escala de una manera que debería preocupar específicamente a las
organizaciones empresariales y gubernamentales: la inflación de métricas
en docenas de equipos simultáneamente puede producir una señal falsa de
productividad mejorada en toda la organización que toma un tiempo y
análisis significativos deshacer, exactamente como mostró el ejemplo de
la empresa de tecnología financiera del tema 7.1. La dilución de
calidad que supera la capacidad de detección es incluso más grave en
contextos regulados, de seguridad crítica, o de confianza pública, donde
el coste de un defecto no detectado que llega a producción conlleva
consecuencias mucho más allá de la preocupación de ingeniería inmediata.

## Principios clave

- **La inflación de métricas y la dilución de calidad son versiones
  intensificadas de riesgos que este libro ya ha nombrado**, no
  categorías enteramente nuevas; las salvaguardas existentes siguen
  aplicándose, pero necesitan trabajar más duro.
- **La cualidad de "parece correcto" del código generado por IA lo hace
  específicamente más difícil de detectar para la revisión humana basada
  en reconocimiento de patrones.** Este es un riesgo distinto del error
  humano ordinario.
- **La velocidad de este cambio puede superar la capacidad de una
  organización para adaptar sus salvaguardas**, creando una ventana de
  exposición genuina y limitada en el tiempo.
- **Las métricas de calidad existentes (parte 4) siguen siendo valiosas
  pero pueden necesitar recalibración**, no sustitución, a la luz de este
  nuevo perfil de riesgo.
- **La propia capacidad de detección necesita una inversión deliberada**,
  ya que las prácticas de revisión y pruebas que cubre este libro se
  diseñaron antes de que este riesgo específico existiera a esta escala.

## Recomendaciones

### Recalibra los umbrales de tasa de fallos de cambio y defectos escapados para el trabajo intensivo en IA

Donde un equipo o área de código haya adoptado intensamente la asistencia
de IA, aplica el rastreo ponderado por gravedad de los temas 2.4 y
5.1 con una sensibilidad elevada, al menos hasta que tu organización haya
construido suficiente evidencia (tema 7.2) para saber si la relación
histórica entre estas métricas y el riesgo genuino todavía se mantiene
sin cambios específicamente para el trabajo asistido por IA. Trata esta
recalibración como una postura temporal de recopilación de evidencia, no
como una suposición permanente y sin examinar en ninguna dirección.

### Invierte específicamente en capacidad de detección que resista el problema de "parece correcto"

La revisión de código tradicional, que depende en gran medida del
reconocimiento de patrones de un revisor sobre qué se ve bien, está
específicamente debilitada frente al código generado por IA de aspecto
plausible pero sutilmente incorrecto. Invierte correspondientemente más
en métodos de detección que no dependan del reconocimiento visual de
patrones: las [pruebas de mutación](https://en.wikipedia.org/wiki/Mutation_testing)
(tema 4.2), que prueban el comportamiento real en lugar de la
apariencia, y las pruebas basadas en propiedades o invariantes, que
verifican la corrección lógica en lugar de la plausibilidad superficial,
se vuelven ambas desproporcionadamente más valiosas específicamente por
este cambio.

### Vigila la inflación de métricas en todo el flujo de entrega, no solo en el punto de generación de código

La inflación de métricas del desarrollo asistido por IA no se limita a la
etapa de codificación; puede propagarse a través de toda la cadena de
tiempo de ciclo (tema 2.6): un volumen mayor de solicitudes de
incorporación de cambios generadas por IA puede inflar las métricas de
rendimiento de solicitudes de incorporación de cambios (tema 2.9)
incluso mientras la señal útil que esa métrica originalmente estaba
diseñada para capturar, el rendimiento genuino del equipo, se mantiene
plana o incluso disminuye una vez que se contabilizan adecuadamente la
carga de revisión y el coste de corrección. Audita todo tu conjunto de
métricas en busca de este patrón de propagación, no solo las métricas más
obvias y directamente adyacentes a la IA.

### Construye un plan de recalibración explícito y con límite de tiempo en lugar de una postura permanente de sospecha

El escrutinio elevado que recomienda este tema es apropiado durante
un período activo de adopción e incertidumbre, pero no debería convertirse
en un impuesto permanente y sin examinar sobre el trabajo asistido por IA
indefinidamente. A medida que tu organización construya evidencia real
mediante la disciplina de medición del tema 7.2, revisa los umbrales
y salvaguardas basándote en lo que realmente muestra esa evidencia,
endureciendo más donde se confirma el riesgo, relajando donde no, en
lugar de ignorar el riesgo por completo o tratar cada pieza de código
asistido por IA con sospecha permanente e indiferenciada sin importar la
evidencia que se vaya acumulando.

### Comunica este riesgo con transparencia en lugar de tratarlo como una razón para resistir la adopción de IA

Enmarca la orientación de este tema como gestión de riesgos para una
nueva capacidad genuinamente valiosa, no como un argumento contra el
desarrollo asistido por IA en general. Una organización que comunica
claramente estos riesgos específicos y nombrados y construye salvaguardas
proporcionadas contra ellos, exactamente como recomienda este libro para
cualquier otra métrica y técnica que cubre, adopta la asistencia de IA de
manera más segura y sostenible que una que ignora el riesgo o lo trata
como una razón para una resistencia generalizada a un conjunto de
herramientas genuinamente útil.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Sin recalibración, tratar el trabajo asistido por IA de manera idéntica al código escrito por humanos | Simple, sin cambio de proceso | Pasa por alto un perfil de riesgo elevado específico y sugerido por evidencia |
| Escrutinio elevado generalizado y permanente de todo el código asistido por IA | Maximiza la reducción de riesgo a corto plazo | Impuesto insostenible sobre una capacidad genuinamente valiosa; ignora la evidencia acumulada |
| Recalibración con límite de tiempo e impulsada por evidencia | Equilibra la gestión de riesgos con una adopción sostenible | Requiere una disciplina de medición continua (tema 7.2) para saber cuándo relajar el escrutinio |
| Inversión en métodos de detección resistentes a los defectos de "parece correcto" | Aborda el nuevo riesgo específico directa y duraderamente | Requiere una inversión inicial en infraestructura de pruebas de mutación y basadas en propiedades |

La tensión central es **cautela frente a velocidad de adopción**. La
cautela excesiva y permanente desperdicia gran parte del valor genuino
del desarrollo asistido por IA; la cautela insuficiente arriesga la
inflación de métricas y la dilución de calidad que nombra este tema,
potencialmente a una escala significativa antes de la detección. Resuelve
la tensión mediante el enfoque con límite de tiempo e impulsado por
evidencia que recomienda este tema: escrutinio elevado ahora,
calibrado hacia abajo o hacia arriba a medida que se acumula evidencia
real de la disciplina de medición del tema 7.2, en lugar de una
política generalizada permanente o una suposición sin examinar de que
nada ha cambiado.

## Preguntas para debatir con tu equipo

1. **¿Hemos recalibrado nuestros umbrales de tasa de fallos de cambio o
   defectos escapados para el trabajo intensivo en IA, o estamos
   aplicando los umbrales de la era previa a la IA sin cambios?** Si no
   han cambiado, debate si eso refleja una decisión deliberada y basada
   en evidencia o simplemente una ausencia de atención a la pregunta.

2. **¿Tenemos métodos de detección, como las pruebas de mutación, que no
   dependan del reconocimiento visual de patrones de un revisor, o
   nuestro proceso de revisión depende enteramente de ojos humanos
   evaluando si el código "se ve bien"?** Esta es la vulnerabilidad
   específica que identifica este tema; evalúa tu capacidad de
   detección actual frente a ella con honestidad.

3. **¿La inflación de métricas se ha propagado más allá de la etapa de
   codificación hacia nuestras métricas de solicitudes de incorporación
   de cambios o despliegue, y lo notaríamos actualmente si hubiera
   ocurrido?** Repasa toda tu cadena de tiempo de ciclo buscando este
   patrón de propagación, no solo el punto de origen más obvio.

4. **¿Nuestro escrutinio elevado actual del código asistido por IA, si lo
   hay, se basa en evidencia acumulada, o es un valor predeterminado
   indefinido y sin examinar que nunca se ha reconsiderado?** Debate qué
   evidencia necesitaría acumularse antes de que consideraras relajar o
   endurecer más las salvaguardas actuales.

5. **¿Cómo comunicamos internamente los riesgos de este tema: como
   una razón para la cautela y salvaguardas proporcionadas, o como un
   argumento implícito contra la adopción de IA en general?** Sé honesto
   sobre cómo realmente está aterrizando esta conversación en tu equipo,
   ya que un mensaje recibido como resistencia generalizada rara vez
   produce la respuesta proporcionada y basada en evidencia que recomienda
   este tema.

6. **¿Cómo sería que nuestra organización descubriera, solo después de una
   escala significativa, que tanto la inflación de métricas como la
   dilución de calidad habían estado ocurriendo simultáneamente y sin
   detectar?** Este escenario concreto y algo incómodo vale la pena
   nombrarlo explícitamente como el fallo específico que las salvaguardas
   de este tema están construidas para prevenir.

## Enfoque sectorial

**Startup.** La adopción rápida con capacidad de revisión limitada hace
que los riesgos de este tema sean particularmente agudos para un
equipo pequeño; el problema de detección de "parece correcto" es más
difícil de detectar con menos revisores y menos especializados. Invierte
temprano en al menos pruebas de mutación ligeras en tus rutas de código
más críticas, incluso si una cobertura exhaustiva todavía no es factible.

**Pequeña empresa.** Los procesos formales de recalibración probablemente
son innecesarios a esta escala, pero una conciencia simple y explícita de
que el código generado por IA merece una lectura ligeramente más
escéptica de lo habitual, específicamente porque tiende a verse más
confiadamente correcto de lo que realmente puede ser, no cuesta nada y
aborda directamente la preocupación central de este tema.

**Empresa.** Tanto la inflación de métricas como la dilución de calidad
se acumulan significativamente a escala, ya que una señal falsa o un
problema de calidad no detectado en docenas de equipos simultáneamente es
mucho más consecuente y mucho más difícil de deshacer que el mismo
problema en un solo equipo. Invierte deliberadamente en actualizaciones
de capacidad de detección en toda la organización (infraestructura de
pruebas de mutación, adopción de pruebas basadas en propiedades) y en la
disciplina de recalibración con límite de tiempo que recomienda este
tema, rastreada de manera centralizada.

**Gobierno.** Las consecuencias de la dilución de calidad no detectada
son particularmente graves en contextos regulados, de seguridad crítica,
o de confianza pública comunes en los sistemas gubernamentales. Aplica un
escrutinio elevado e impulsado por evidencia específicamente a los
cambios asistidos por IA en rutas de código de alta consecuencia (la
lógica de ponderación de exposición y explotabilidad del tema 6.4 se
aplica de manera similar aquí), y prepárate para demostrar, a un auditor u
órgano de supervisión, exactamente qué capacidad de detección existe
contra este riesgo específico.

## Ejemplos

**Empresa.** El equipo de ingeniería de procesamiento de siniestros de una
empresa de seguros adoptó ampliamente la asistencia de codificación de
IA y, seis meses después, notó un aumento gradual pero mesurable en los
defectos escapados específicamente en lógica condicional compleja, el
tipo de código donde el manejo sutilmente equivocado de casos límite es
tanto lo más fácil para que las herramientas de IA lo generen de manera
plausible como lo más difícil de detectar para un revisor solo mediante
inspección. Una investigación confirmó el patrón de "parece correcto" que
describe este tema: el código defectuoso había usado
consistentemente patrones idiomáticos y de aspecto familiar que pasaban
la revisión sin desencadenar el tipo de escrutinio que podría haber
recibido una pieza de código escrito por humanos obviamente inusual o
torpe. La respuesta del equipo dirigió específicamente las pruebas de
mutación a la lógica condicional compleja en toda la empresa, un método
de detección resistente al problema de plausibilidad superficial, y midió
una reducción significativa en esta categoría de defecto específica en
dos trimestres.

**Gobierno.** Una autoridad fiscal que pilotaba el desarrollo asistido por
IA para un subconjunto de su trabajo de mantenimiento del motor de
cálculo incorporó desde el principio la disciplina de recalibración con
límite de tiempo que recomienda este tema, estableciendo un período
explícito de recopilación de evidencia de seis meses con requisitos de
revisión elevados específicamente para los cambios asistidos por IA a la
lógica de cálculo. La evidencia recopilada no mostró ninguna diferencia
estadísticamente significativa en la tasa de defectos para cambios
estrechos y bien delimitados, pero sí confirmó un riesgo elevado para
cambios asistidos por IA más amplios y arquitectónicamente significativos.
La política resultante de la agencia relajó el escrutinio elevado para la
categoría de cambio estrecho mientras lo mantenía e incluso lo
fortalecía para los cambios arquitectónicamente significativos, un
resultado proporcionado y basado en evidencia que ni el extremo de "sin
recalibración" ni el de "escrutinio permanente generalizado" habrían
producido.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de protegerse deliberadamente contra la inflación de métricas
y la dilución de calidad es evitar exactamente el escenario que muestra
el ejemplo de la empresa de seguros anterior: un problema de calidad no
detectado y gradualmente acumulativo que cuesta mucho más descubrir y
remediar después del hecho de lo que habría costado proactivamente la
inversión en detección, infraestructura de pruebas de mutación dirigida
específicamente al código de mayor riesgo.

El coste total de propiedad incluye la inversión en capacidad de
detección que recomienda este tema y la disciplina continua de
recalibración basada en evidencia en lugar de cualquiera de los dos
extremos, sospecha permanente o falta de atención permanente. Ese coste
es modesto y con límite de tiempo en relación con el riesgo de un
problema de calidad significativo y a escala que pase sin detectar
específicamente porque fue diseñado, por la naturaleza de cómo estas
herramientas generan código, para parecer correcto ante los procesos de
revisión que una organización ya tenía en marcha.

## Antipatrones y errores comunes

- **Aplicar sin cambios los umbrales y métodos de detección de la era
  previa a la IA:** pasa por alto un perfil de riesgo elevado específico y
  sugerido por evidencia.
- **Depender enteramente de la revisión de reconocimiento de patrones
  humano para el código generado por IA:** específicamente vulnerable al
  problema de "parece correcto" que identifica este tema.
- **Pasar por alto la propagación de la inflación de métricas más allá
  del punto de generación de código:** una señal falsa puede propagarse
  por todo el flujo de entrega sin detectarse.
- **Escrutinio generalizado, permanente, y sin examinar sin recalibración
  basada en evidencia:** desperdicia gran parte del valor genuino del
  desarrollo asistido por IA de manera insostenible.
- **Comunicar los riesgos de este tema como resistencia generalizada a
  la adopción de IA en lugar de gestión de riesgos proporcionada:**
  socava tanto la seguridad como la adopción.
- **Sin inversión en capacidad de detección dirigida específicamente a
  este nuevo perfil de riesgo:** deja a la organización dependiente de
  métodos de revisión que este tema ha demostrado que están
  específicamente debilitados frente a él.

## Modelo de madurez

- **Nivel 1, Iniciar:** Sin conciencia del riesgo de inflación de
  métricas o dilución de calidad específico del desarrollo asistido por
  IA; las salvaguardas y métodos de detección existentes se aplican sin
  cambios.
- **Nivel 2, Desarrollar:** Existe cierta conciencia, pero la
  recalibración es improvisada y no se ha realizado la inversión en
  capacidad de detección específica para este riesgo.
- **Nivel 3, Estandarizar:** Los umbrales recalibrados y los métodos de
  detección resistentes al problema de "parece correcto" (pruebas de
  mutación y basadas en propiedades) se aplican de manera consistente al
  trabajo asistido por IA.
- **Nivel 4, Gestionar:** Una disciplina de recalibración con límite de
  tiempo e impulsada por evidencia ajusta activamente el escrutinio
  basándose en los datos acumulados, y la propagación de la inflación de
  métricas se monitoriza activamente en todo el flujo.
- **Nivel 5, Orquestar:** La organización tiene una postura de gestión de
  riesgos madura, proporcionada, y en evolución continua hacia el
  desarrollo asistido por IA, comunicada con transparencia, que ni
  desperdicia su valor mediante una cautela excesiva ni expone a la
  organización a una dilución de calidad no detectada.

## Ideas para el debate

1. ¿Hemos visto alguna evidencia temprana del patrón de defecto "parece correcto" en nuestro propio código asistido por IA?
2. ¿Qué método de detección abordaría más directamente el riesgo específico de este tema para nosotros?
3. ¿La inflación de métricas de la asistencia de IA se ha propagado hacia alguna de nuestras métricas de flujo posteriores?
4. ¿Nuestro escrutinio actual del código asistido por IA se basa en evidencia o es un valor predeterminado sin examinar?
5. ¿Cómo está siendo recibida realmente la orientación de este tema por nuestro equipo: como gestión de riesgos o como resistencia a la adopción de IA?

## Conclusiones clave

- La inflación de métricas y la dilución de calidad son **versiones
  intensificadas de riesgos que este libro ya nombra**, que requieren que
  las salvaguardas existentes trabajen más duro, no marcos enteramente
  nuevos.
- La tendencia del código generado por IA a **"parecer correcto"**
  debilita específicamente la revisión de código humana tradicional
  basada en reconocimiento de patrones.
- Invierte en **métodos de detección resistentes a la plausibilidad
  superficial**, particularmente las pruebas de mutación y basadas en
  propiedades.
- Aplica una postura de **recalibración con límite de tiempo e impulsada
  por evidencia**, no una sospecha generalizada permanente ni una
  confianza permanente sin examinar.
- **Comunica este riesgo como gestión de riesgos proporcionada**, no
  como un argumento contra la adopción de IA, para apoyar tanto la
  seguridad como el uso sostenible.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la disciplina emparejada de velocidad
  y estabilidad que este tema aplica a una nueva categoría de
  riesgo).
- Jia, Yue, y Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  el método de detección que argumenta este tema se vuelve
  desproporcionadamente valioso.
- La investigación de GitHub sobre la programación en pareja con IA y la
  productividad de los desarrolladores (datos de la industria sobre los
  resultados y riesgos del desarrollo asistido por IA).
- *The Tyranny of Metrics*, de Jerry Z. Muller (la fijación en métricas y
  el riesgo de manipulación, directamente relevante para la preocupación
  de inflación de métricas que nombra este tema).
