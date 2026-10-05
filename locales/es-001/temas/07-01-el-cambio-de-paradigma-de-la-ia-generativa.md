# 7.1 El cambio de paradigma de la IA generativa

## Visión general y motivación

Durante la mayor parte de la historia de la ingeniería de software,
escribir código era lo bastante lento y laborioso como para que el
volumen de producción bruto, líneas escritas, commits realizados,
funcionalidades entregadas, se correlacionara al menos vagamente con el
esfuerzo real y, de manera imperfecta, con el valor real. Esa correlación
nunca fue perfecta, el tema 3.4 dedicó un tema entero a por qué
las métricas de actividad engañan incluso en un mundo previo a la IA, pero
era lo bastante fuerte como para que muchas organizaciones construyeran
programas de métricas sobre la suposición implícita de que más código
producido generalmente significaba más trabajo realizado. Los asistentes
de codificación de [IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
han roto esa suposición de manera decisiva: una herramienta ahora puede
producir un volumen grande y de aspecto plausible de código en segundos, a
una fracción del coste anterior, y ese volumen no te dice casi nada por sí
solo sobre si el código resultante funciona, es mantenible, o sirve a
algún propósito real.

La afirmación central de este tema es que esto es un cambio de
paradigma, no un cambio de herramientas incremental. Un cambio de
paradigma cambia lo que realmente miden tus instrumentos existentes, no
solo los valores que reportan. Un velocímetro sigue midiendo la velocidad
después de que cambias el motor de un coche; varias de las métricas de
este libro no sobreviven a esta transición de manera tan limpia. La
frecuencia de despliegue (tema 2.10) puede subir porque la IA aceleró
un trabajo genuinamente valioso, o porque la IA hizo trivialmente fácil
generar muchos cambios pequeños y de bajo valor; el número por sí solo ya
no puede distinguir entre ambos, de una manera en que en su mayoría podía,
con la precaución adecuada, antes. La misma lógica se aplica con incluso
más fuerza a los recuentos brutos de commits, las líneas de código, y el
volumen de solicitudes de incorporación de cambios, todos los cuales ya
advirtió el tema 3.4 como métricas individuales, ahora amplificados en
un riesgo relevante también a nivel de equipo y organizacional.

Para los equipos grandes, este cambio llegó más rápido de lo que la
práctica de medición de la mayoría de las organizaciones pudo adaptarse a
él, y la brecha entre la velocidad de adopción y la adaptación de la
medición es donde vive el riesgo real de esta parte. Las organizaciones
empresariales que siguen reportando métricas de actividad de la era
previa a la IA sin ajuste arriesgan celebrar una métrica que
silenciosamente ha dejado de correlacionarse con el valor; las
organizaciones gubernamentales que evalúan la inversión en herramientas
de IA necesitan una comprensión clara de exactamente qué métricas siguen
siendo confiables y cuáles ya no lo son, antes de comprometerse con
decisiones de contratación o política construidas sobre suposiciones de
medición obsoletas.

## Principios clave

- **Esto es un cambio de paradigma en lo que miden las métricas, no un
  cambio incremental.** Algunas métricas existentes silenciosamente han
  dejado de significar lo que solían significar.
- **El volumen de producción nunca fue un sustituto confiable del valor, y
  ahora se ha vuelto activamente poco confiable.** La advertencia del
  tema 3.4 siempre fue correcta; este cambio hace que ignorarla sea
  mucho más costoso.
- **La brecha entre la velocidad de adopción de la IA y la velocidad de
  adaptación de la medición es el riesgo real.** Las organizaciones
  adoptan las herramientas más rápido de lo que reconsideran sus
  métricas.
- **No todas las métricas de este libro se ven afectadas por igual.** Las
  métricas de resultado (parte 5) son mucho más resilientes a este cambio
  que las métricas de actividad y producción bruta.
- **Este cambio es a nivel de toda la industria y continuo, no un ajuste
  de una sola vez.** Espera un cambio continuo a medida que las
  herramientas y sus patrones de adopción sigan evolucionando.

## Recomendaciones

### Audita explícitamente tu conjunto de métricas existente en busca de validez en la era de la IA

Repasa tu panel actual y, para cada métrica, pregunta directamente: ¿un
equipo que usa la asistencia de IA intensamente pero produce no más valor
real que antes mostraría una lectura mejorada en esta métrica? Los
recuentos de actividad, la frecuencia de commits, y la frecuencia de
despliegue bruta (sin una salvaguarda de estabilidad emparejada, tema
2.10) son los más expuestos. Las métricas de resultado de la parte 5, la
tasa de defectos escapados, la adopción de funcionalidades, los
resultados de negocio, son comparativamente resilientes, ya que miden el
resultado real en lugar del volumen de actividad que lo produjo.

### Reexamina específicamente la frecuencia de despliegue y el plazo de entrega, con mayor atención a las salvaguardas

El tema 2.10 ya advirtió sobre la manipulación por sustitución,
dividir trabajo significativo en despliegues triviales para inflar el
recuento. La IA generativa hace que este patrón específico de
manipulación sea dramáticamente más barato y fácil de producir, incluso
sin intención, ya que los cambios triviales asistidos por IA ahora son
casi gratuitos de generar. Endurece tu salvaguarda de tasa de fallos de
cambio (tema 2.10) específicamente en proporción a cuán intensamente
un equipo ha adoptado el desarrollo asistido por IA, y vigila las
tendencias de tamaño de despliegue incluso más de cerca que antes.

### Trata la capacidad de revisión de código como un nuevo cuello de botella crítico

Si la asistencia de IA aumenta dramáticamente el volumen de código
propuesto para revisión, la etapa de revisión (tema 2.9), ya a menudo
el mayor contribuyente de tiempo de espera en el flujo de entrega, se
convierte en una restricción aún más aguda. Un revisor al que se le pide
evaluar un volumen mucho mayor de código generado por IA al mismo ritmo
que antes inevitablemente ralentizará el flujo o reducirá la profundidad
de revisión, exactamente el riesgo de aprobación automática que ya
advirtió el tema 2.9, ahora bajo una presión significativamente
mayor. Monitoriza las salvaguardas de profundidad y calidad de revisión
con mayor atención a medida que aumenta el volumen de código generado por
IA.

### No asumas que el código generado por IA conlleva el mismo perfil de defectos que el código escrito por humanos

La evidencia temprana y la experiencia de los profesionales sugieren que
el código generado por IA puede tener un perfil de defectos distinto al
del código escrito por humanos: lógica de aspecto plausible pero
sutilmente equivocada, manejo de casos límite generado con confianza pero
incorrecto, o código que pasa una revisión superficial porque parece
idiomático y razonable, pero en realidad no se razonó con una comprensión
genuina del contexto específico del sistema. Trata esto como una
hipótesis que vale la pena probar activamente frente a tus propios datos
de defectos escapados (tema 5.1), etiquetando los defectos según si
el código de origen fue sustancialmente generado por IA, en lugar de
asumir que las relaciones históricas de tasa de defectos sobre las que tu
organización ha construido sus prácticas de calidad todavía se mantienen
sin cambios.

### Actualiza tu carta de métricas y proceso de gobernanza explícitamente para este cambio

Siguiendo la disciplina de gobernanza del tema 1.4, no dejes que este
cambio le ocurra pasivamente a tu programa de métricas. Revisa
explícitamente tu carta de métricas, nombrando qué métricas necesitan
nuevas salvaguardas, cuáles necesitan retirarse, y cuáles siguen siendo
confiables, como una decisión de gobernanza deliberada en lugar de una
deriva sin examinar. Documenta el razonamiento, ya que esto es exactamente
el tipo de cambio definicional y contextual que advierte el tema 1.4
que de otro modo puede ocurrir silenciosamente y descubrirse solo mucho
después.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Seguir reportando las métricas previas a la IA sin cambios | Sin disrupción, reporte familiar | Arriesga celebrar métricas que silenciosamente han dejado de correlacionarse con el valor |
| Auditoría completa y revisión deliberada del conjunto de métricas | Restaura una medición confiable | Requiere un esfuerzo analítico real y gestión del cambio organizacional |
| Abandonar por completo las métricas de actividad y producción | Elimina directamente el riesgo más expuesto | Pierde alguna señal contextual legítimamente útil (la salvedad del tema 3.4) |
| Endurecer las salvaguardas sin una auditoría completa | Más rápido de implementar | Puede pasar por alto métricas cuya exposición es menos obvia que en los casos más claros |

La tensión central es **continuidad de medición frente a validez de
medición**. Las organizaciones entendiblemente prefieren seguir
reportando métricas familiares de maneras familiares, ya que cambiar un
programa de métricas conlleva un coste organizacional y una disrupción
reales. Pero seguir reportando una métrica que silenciosamente ha dejado
de medir lo que solía medir es peor que la disrupción, es una
desorientación activa. Resuelve la tensión tratando esto como exactamente
el tipo de cambio de gobernanza deliberado y documentado que describe el
tema 1.4, disruptivo a corto plazo pero necesario para mantener
honestas las métricas de la organización.

## Preguntas para debatir con tu equipo

1. **Para cada métrica de nuestro panel, ¿un equipo que usa la asistencia
   de IA intensamente pero produce no más valor real mostraría una
   lectura mejorada?** Repasa tus métricas explícitamente con esta
   prueba; las que la fallan son tus candidatas de mayor prioridad para
   salvaguardas revisadas o retiro.

2. **¿Nuestra frecuencia de despliegue o volumen de commits ha subido
   desde que adoptamos la asistencia de codificación de IA, y hemos
   comprobado si la tasa de fallos de cambio o la tasa de defectos se
   movió correspondientemente?** Revisa los datos emparejados reales en
   lugar de asumir un resultado positivo o negativo.

3. **¿Nuestra capacidad de revisión de código está siguiendo el ritmo de
   cualquier aumento en el volumen de código asistido por IA, o la
   profundidad de revisión se está erosionando silenciosamente bajo una
   presión mayor?** Comprueba las métricas de la etapa de revisión
   (tema 2.9) específicamente en busca de señales de que se
   intensifica el riesgo de aprobación automática.

4. **¿Etiquetamos los defectos según si el código de origen fue
   sustancialmente generado por IA, y si es así, qué muestran esos datos
   hasta ahora?** Si actualmente no etiquetas esto, debate qué se
   necesitaría para empezar, ya que estos datos son directamente
   relevantes para si tus suposiciones de calidad históricas todavía se
   mantienen.

5. **¿Hemos revisado deliberadamente nuestra carta de métricas (tema
   1.4) a la luz de este cambio, o nuestra práctica de medición
   simplemente ha continuado sin cambios?** Si la respuesta honesta es lo
   segundo, esa brecha es exactamente lo que recomienda cerrar primero
   este tema.

6. **¿Cómo sería que nuestra organización fuera sorprendida desprevenida
   por este cambio, celebrando una métrica que ya había dejado de
   significar lo que pensábamos que significaba?** Este experimento
   mental concreto y algo incómodo ayuda a motivar la auditoría que
   recomienda este tema antes, en lugar de después, de que ese
   escenario realmente ocurra.

## Enfoque sectorial

**Startup.** La adopción rápida de herramientas de IA es común y a menudo
una ventaja competitiva genuina, pero la misma velocidad que hace
atractiva la adopción hace más probable la deriva de métricas sin
examinar. Construye el hábito de comprobar las métricas de resultado
(parte 5) junto a cualquier ganancia de eficiencia que reportes de la
adopción de IA, en lugar de reportar solo mejoras de velocidad.

**Pequeña empresa.** La asistencia de codificación de IA puede extender
significativamente la capacidad de un equipo pequeño, pero resiste la
tentación de reportar aumentos de producción bruta como un éxito
inequívoco sin comprobar las salvaguardas de calidad; un equipo pequeño
tiene menos capacidad para absorber un problema de calidad no detectado
que una organización más grande con más redundancia.

**Empresa.** La escala de este riesgo se acumula significativamente aquí,
ya que la adopción de IA en docenas o cientos de equipos simultáneamente
puede desplazar la validez de las métricas en toda la organización antes
de que ningún equipo individual note el patrón localmente. Realiza la
auditoría del conjunto de métricas que recomienda este tema a nivel
organizacional, no solo equipo por equipo, y actualiza la gobernanza
(tema 1.4) de manera central y explícita.

**Gobierno.** Las organizaciones del sector público a menudo adoptan
nueva tecnología con más cautela, pero las métricas y puntos de
referencia usados para evaluar los programas de tecnología del gobierno
frecuentemente se toman de, o se comparan frente a, datos de la industria
del sector privado que a su vez están cambiando bajo esta misma presión.
Entiende explícitamente qué puntos de referencia de la industria contra
los que te comparas se han visto afectados por este cambio antes de
usarlos para fijar expectativas o evaluar el rendimiento.

## Ejemplos

**Empresa.** El liderazgo de ingeniería de una empresa de tecnología
financiera notó que la frecuencia de despliegue había subido casi un 40%
en los dos trimestres siguientes a la adopción amplia de asistentes de
codificación de IA, y reportó esto inicialmente como una victoria de
productividad directa en una presentación a la junta. Un análisis de
seguimiento más cuidadoso, motivado por la pregunta escéptica de un
miembro de la junta sobre si se había comprobado la calidad, encontró que
la tasa de fallos de cambio había subido casi al mismo ritmo que la
frecuencia de despliegue, compensando por completo la ganancia aparente
una vez que se examinó realmente la métrica de estabilidad emparejada. El
reporte revisado de la empresa ahora presenta explícitamente la
frecuencia de despliegue y la tasa de fallos de cambio juntas siempre que
se hacen afirmaciones de productividad asistida por IA, evitando la
afirmación anterior, casi pública, engañosa.

**Gobierno.** Un departamento de TI de un gobierno estatal que pilotaba la
asistencia de codificación de IA para un subconjunto de sus equipos de
ingeniería encontró que la producción bruta de código por ingeniero había
aumentado sustancialmente, una cifra citada inicialmente de manera
favorable en una revisión interna del piloto. Un análisis más detenido,
motivado por la incorporación de la orientación de este libro al marco de
evaluación del departamento, examinó la tasa de defectos escapados para
el trabajo asistido por IA frente al no asistido específicamente y
encontró una tasa de defectos modestamente elevada en la cohorte asistida
por IA, concentrada en el manejo de casos límite para circunstancias
ciudadanas inusuales a las que las herramientas de IA no habían estado
expuestas durante el entrenamiento. Este hallazgo no detuvo el piloto pero
sí llevó a un aumento específico y dirigido del rigor de revisión para
los cambios asistidos por IA que tocaban la lógica de casos límite de
elegibilidad, abordando el riesgo real que la métrica de producción bruta
por sí sola nunca habría revelado.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de realizar esta auditoría de manera proactiva es evitar una
vergüenza pública o a nivel de junta directiva por reportar una métrica
que, bajo escrutinio, resulta no haber medido nada real, exactamente el
escenario que casi produjo el ejemplo de tecnología financiera anterior.
Una organización que se adelanta a este cambio mantiene la credibilidad
ante sus partes interesadas; una que es sorprendida reportando una
métrica hueca paga un coste reputacional real, y en gran medida evitable.

El coste total de propiedad es el esfuerzo analítico de auditar el
conjunto de métricas existente, endurecer las salvaguardas, y actualizar
la documentación de gobernanza, una inversión moderada y de una sola vez
en relación con el riesgo continuo de seguir reportando métricas que
silenciosamente han dejado de medir lo que afirman medir. Este coste
también es recurrente a un nivel menor, ya que este cambio es continuo,
no un evento único, y una reauditoría periódica a medida que las
herramientas y los patrones de adopción sigan evolucionando es una
adición razonable y permanente a una cadencia de gobernanza de métricas.

## Antipatrones y errores comunes

- **Seguir reportando las métricas de actividad de la era previa a la IA
  sin cambios y sin crítica:** arriesga celebrar una métrica que
  silenciosamente ha dejado de correlacionarse con el valor real.
- **Reportar aumentos de frecuencia de despliegue o volumen de producción
  sin la salvaguarda de estabilidad emparejada:** repite la advertencia
  del tema 2.10 con un riesgo significativamente mayor bajo el
  desarrollo asistido por IA.
- **Asumir que el código generado por IA conlleva el mismo perfil de
  defectos que el código escrito por humanos sin comprobarlo:** una
  suposición no probada que podría estar activamente equivocada.
- **Dejar que la profundidad de revisión se erosione silenciosamente bajo
  un volumen mayor de código generado por IA:** el riesgo de aprobación
  automática del tema 2.9, intensificado.
- **Tratar este cambio como un ajuste de una sola vez en lugar de una
  preocupación continua:** las herramientas y sus patrones de adopción
  siguen evolucionando, y la práctica de medición necesita mantener el
  ritmo.
- **Compararse con puntos de referencia de la industria sin entender si
  esos puntos de referencia se han visto ellos mismos afectados por esta
  misma presión:** arriesga una falsa sensación de rendimiento relativo.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas de la era previa a la IA se reportan
  sin cambios, sin ninguna conciencia de que la adopción de IA pueda
  haber afectado su validez.
- **Nivel 2, Desarrollar:** Existe cierta conciencia del cambio, pero no
  se ha realizado ninguna auditoría sistemática del conjunto de métricas
  existente.
- **Nivel 3, Estandarizar:** Se ha realizado una auditoría completa del
  conjunto de métricas, con salvaguardas endurecidas y métricas
  documentadas como afectadas o resilientes, en toda la organización.
- **Nivel 4, Gestionar:** Los defectos y los resultados de calidad se
  etiquetan y rastrean activamente por nivel de asistencia de IA para
  probar, no asumir, que las relaciones de calidad históricas de la
  organización todavía se mantienen.
- **Nivel 5, Orquestar:** La organización tiene una práctica madura y
  continua de reexaminar sus métricas a medida que las herramientas de IA
  y los patrones de adopción siguen evolucionando, y puede señalar
  decisiones de gobernanza específicas tomadas de manera proactiva en
  respuesta a este cambio en lugar de reactivamente después de que
  surgiera un problema.

## Ideas para el debate

1. ¿Cuál de nuestras métricas actuales favorecería más a un equipo que usa la asistencia de IA intensamente pero produce no más valor real?
2. ¿Nuestra frecuencia de despliegue ha subido desde la adopción de IA, y la tasa de fallos de cambio se ha movido con ella?
3. ¿Etiquetamos los resultados de calidad por nivel de asistencia de IA, y qué mostrarían esos datos?
4. ¿Nuestra capacidad de revisión está siguiendo el ritmo de cualquier aumento en el volumen de código generado por IA?
5. ¿Con qué punto de referencia de la industria nos comparamos actualmente, y se ha visto él mismo afectado por esta presión?

## Conclusiones clave

- La IA generativa es un **cambio de paradigma en lo que miden varias
  métricas existentes**, no un cambio de herramientas incremental;
  algunas métricas silenciosamente han dejado de significar lo que solían
  significar.
- **Las métricas de actividad y producción bruta son las más expuestas**;
  las métricas de resultado (parte 5) son comparativamente resilientes.
- **Endurece las salvaguardas, especialmente la tasa de fallos de
  cambio**, en proporción a la adopción del desarrollo asistido por IA.
- **Prueba, no asumas, si el código generado por IA conlleva un perfil de
  defectos distinto** al del código escrito por humanos, usando datos
  etiquetados de defectos escapados.
- Trata esto como una **preocupación de gobernanza continua, no de una
  sola vez** (tema 1.4), ya que las herramientas y sus patrones de
  adopción siguen evolucionando.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (el fundamento de medición basado en
  resultados que este tema argumenta se vuelve más, no menos,
  importante bajo este cambio).
- La investigación de GitHub sobre la programación en pareja con IA y la
  productividad de los desarrolladores (investigación de la industria
  sobre los efectos medibles del desarrollo asistido por IA).
- El programa de Investigación y Evaluación de DevOps de Google Cloud,
  [dora.dev](https://dora.dev/) (investigación continua del Estado de
  DevOps que incorpora hallazgos de adopción de IA en años recientes).
- *The Tyranny of Metrics*, de Jerry Z. Muller (el caso general a favor
  del escepticismo hacia las métricas basadas en volumen, directamente
  relevante a medida que el volumen de producción se abarata).
