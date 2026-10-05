# 7.2 Medir el desarrollo de software asistido por IA

## Visión general y motivación

El capítulo 7.1 estableció por qué varias métricas existentes ya no miden
de manera confiable lo que solían medir bajo el desarrollo asistido por
IA. Este capítulo trata de qué medir en su lugar: cómo saber, con
evidencia real en lugar de impresión o marketing de proveedores, si la
asistencia de codificación de IA realmente está ayudando a tu
organización, y en qué medida. Esta es una pregunta genuinamente
importante con consecuencias presupuestarias reales, las licencias de
herramientas de IA representan un coste real y continuo, la disciplina de
economía unitaria del capítulo 5.4 se aplica directamente, y una
organización que no puede responderla con evidencia está o pagando de más
por una herramienta que no está ayudando o subinvirtiendo en una que
genuinamente sí ayuda.

El enfoque de este capítulo se apoya directamente en el principio de
resultados sobre producción del capítulo 1.3, aplicado ahora
específicamente a la evaluación de herramientas de IA. El enfoque más
ingenuo y común mide el desarrollo asistido por IA por el volumen de
producción, líneas de código generadas, sugerencias aceptadas, tiempo
ahorrado por tarea autorreportado por los desarrolladores, exactamente las
métricas que advirtió el capítulo 7.1 como las más expuestas a este
cambio. El enfoque más riguroso que recomienda este capítulo mide
resultados: si la asistencia de IA realmente redujo el tiempo de ciclo sin
degradar la calidad, si redujo el tiempo dedicado a trabajo genuinamente
de bajo valor y repetitivo, liberando capacidad para trabajo de mayor
valor, y si afectó de manera mesurable los resultados de negocio y
producto de la parte 5.

Para los equipos grandes, acertar con esta medición determina si las
decisiones de inversión en herramientas de IA se toman con evidencia o
con afirmaciones de proveedores e inercia organizacional. Las
organizaciones empresariales que negocian contratos de herramientas de IA
a gran escala necesitan evidencia genuina de valor para justificar el
gasto y comparar herramientas competidoras de manera justa; las
organizaciones gubernamentales, a menudo bajo un escrutinio particular
por el gasto en tecnología, necesitan una metodología de evaluación
rigurosa y defendible antes de comprometer fondos públicos a la adopción
de herramientas de IA a escala.

## Principios clave

- **Mide la asistencia de IA por resultado, no por volumen de producción
  o estadísticas de uso reportadas por el proveedor.** La disciplina del
  capítulo 1.3 se aplica aquí con toda su fuerza.
- **Usa un [grupo de comparación](https://en.wikipedia.org/wiki/Treatment_and_control_groups)
  genuino siempre que sea factible**, no solo una comparación de antes y
  después que una línea base creciente en toda la industria podría
  confundir.
- **El ahorro de tiempo autorreportado es una señal débil por sí sola.**
  Empárejalo con datos objetivos de tiempo de ciclo y calidad.
- **Mide el coste completo, incluyendo el tiempo de revisión y
  corrección**, no solo la velocidad de generación.
- **Distintas tareas y distintos ingenieros pueden ver un valor de
  asistencia de IA muy distinto.** Evita un único número mezclado de toda
  la organización que oculte esta variación.

## Recomendaciones

### Construye una comparación genuina, no solo una instantánea de antes y después

Cuando sea factible, compara los resultados entre un grupo que usa
asistencia de IA y un grupo comparable que no la usa, durante el mismo
período, en lugar de comparar solo los números de antes y después de tu
propia organización, que no pueden distinguir el efecto de la asistencia
de IA de cualquier otro cambio concurrente (la precaución de variables de
confusión del capítulo 1.6 se aplica directamente). Cuando un verdadero
grupo de comparación sea poco práctico, como mínimo compara frente a una
línea base histórica más larga (un gráfico de control, según el capítulo
1.6) en lugar de una única instantánea de antes y después vulnerable a la
regresión a la media o a cambios concurrentes no relacionados.

### Mide el tiempo de ciclo y la calidad juntos, nunca la afirmación de velocidad de la asistencia de IA por sí sola

Aplica directamente la disciplina de los capítulos 2.6 y 2.10: rastrea si
el trabajo asistido por IA se mueve más rápido a través de las etapas de
tiempo de ciclo, y simultáneamente si la tasa de fallos de cambio o la
tasa de defectos escapados (capítulo 5.1) para ese trabajo se mueve en la
dirección equivocada. Una ganancia de productividad genuina muestra un
tiempo de ciclo más rápido con calidad estable o mejorada; una ganancia
falsa muestra un tiempo de ciclo más rápido con calidad en degradación,
exactamente el intercambio que advirtió el capítulo 7.1, descubierto aquí
mediante la misma disciplina de métricas emparejadas que aplica este
libro a lo largo de todo el texto.

### Incluye el tiempo de revisión y corrección en la contabilidad de coste completa

El código generado por IA que es más rápido de producir pero más lento de
revisar, o que requiere más corrección y retrabajo después de la
generación inicial, puede no mostrar ninguna mejora neta de tiempo de
ciclo una vez que se mide todo el flujo, incluso si el paso inicial de
generación de código se sintió dramáticamente más rápido para el
ingeniero individual. Mide toda la cadena de tiempo de ciclo (capítulo
2.6), no solo la etapa de codificación, para capturar esto con
honestidad en lugar de acreditar a la asistencia de IA basándose en una
sensación de velocidad percibida pero incompleta.

### Trata el ahorro de tiempo autorreportado como una hipótesis inicial, no como una conclusión

El autorreporte de un desarrollador de "esto me ahorró una hora" es útil
como señal inicial y como contexto cualitativo (el enfoque combinado
cuantitativo y cualitativo del capítulo 5.3 también se aplica aquí), pero
está sujeto a los mismos sesgos de recuerdo y deseabilidad que advierte el
capítulo 1.5 para cualquier dato autorreportado, y no dice nada sobre el
coste posterior de revisión o corrección. Usa el autorreporte para generar
hipótesis sobre dónde está ayudando más la asistencia de IA, y luego
valida esas hipótesis frente a datos objetivos de tiempo de ciclo y
calidad antes de sacar una conclusión firme.

### Segmenta la medición por tipo de tarea y evita un único número mezclado

La asistencia de codificación de IA probablemente proporciona un valor
muy distinto para tareas repetitivas y bien comprendidas que para la
resolución de problemas genuinamente novedosa y compleja. Mide y reporta
por categoría de tarea en lugar de un único promedio mezclado de toda la
organización, que puede ocultar el hecho de que la asistencia está
proporcionando un valor fuerte en una categoría mientras proporciona poco
o incluso valor negativo en otra, información que un número mezclado
oscurecería por completo.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Solo ahorro de tiempo autorreportado | Rápido, fácil de recopilar | Señal débil; sujeta a sesgo; ignora el coste de revisión posterior |
| Solo comparación de antes y después | Simple de configurar | Confundida por cualquier otro cambio concurrente o tendencia de toda la industria |
| Grupo de comparación genuino | La evidencia más fuerte y defendible | Más difícil de organizar; puede no ser factible para un despliegue de adopción completa |
| Medición de resultado segmentada por tarea | Revela dónde se concentra genuinamente el valor | Requiere un esfuerzo de rastreo y categorización más granular |

La tensión central es **rigor de medición frente a viabilidad práctica**.
Un grupo de comparación genuino y controlado es la evidencia más fuerte
pero a menudo es poco práctico una vez que una herramienta se ha
desplegado en toda la organización sin ningún grupo de control retenido;
las impresiones autorreportadas son rápidas y fáciles pero débiles por sí
solas. Resuelve la tensión usando el diseño de comparación más fuerte que
permita tu despliegue real, un grupo de control genuino durante una fase
piloto temprana si es posible, un gráfico de control de línea base
histórica si no, y tratando el autorreporte como una herramienta de
generación de hipótesis en lugar de la palabra final, sin importar qué
diseño de comparación termines usando.

## Preguntas para debatir con tu equipo

1. **¿Tuvimos, o todavía podríamos construir, un grupo de comparación
   genuino para evaluar nuestra adopción de herramientas de IA, o
   dependemos enteramente de una comparación de antes y después?** Si
   nunca se estableció un verdadero grupo de comparación, debate si un
   gráfico de control de línea base histórica todavía podría proporcionar
   una alternativa razonablemente rigurosa.

2. **¿Hemos medido el tiempo de ciclo y la calidad juntos para el trabajo
   asistido por IA, o solo tenemos una afirmación de velocidad sin una
   comprobación de calidad correspondiente?** Revisa cualquier dato que
   exista y comprueba si existe este emparejamiento específico; si no
   existe, esa brecha es la corrección de mayor prioridad de este
   capítulo.

3. **¿Nuestra medición de tiempo de ciclo para el trabajo asistido por IA
   incluye el tiempo de revisión y corrección, o solo el paso de
   generación inicial?** Una afirmación de velocidad basada solo en el
   tiempo de generación, ignorando el coste de revisión posterior,
   arriesga la trampa de contabilidad incompleta que advierte
   directamente este capítulo.

4. **¿Qué afirmaciones de ahorro de tiempo autorreportadas hemos
   recopilado, y hemos validado alguna de ellas frente a datos
   objetivos?** Elige una afirmación específica y comúnmente repetida y
   comprueba si los datos objetivos realmente la respaldan.

5. **¿Nuestra medición actual mezcla todos los tipos de tarea en un solo
   número, o sabemos qué categorías específicas de trabajo ven el valor
   de asistencia de IA más fuerte?** Si está mezclada, debate qué podría
   revelar un desglose segmentado por tarea que el número actual oculta.

6. **Si tuviéramos que defender nuestra inversión en herramientas de IA
   ante una parte interesada financiera escéptica hoy, usando evidencia en
   lugar de impresión, ¿qué realmente podríamos mostrarles?** Esta prueba
   concreta saca a la luz la brecha entre lo que tu organización
   actualmente cree sobre el valor de la asistencia de IA y lo que
   realmente puede demostrar con evidencia.

## Enfoque sectorial

**Startup.** Un estudio formal de grupo de comparación normalmente es
poco práctico a pequeña escala, pero incluso una mirada simple y honesta
de antes y después al tiempo de ciclo y la tasa de defectos, en lugar de
depender puramente de cuánto más rápido se siente el trabajo, da una
señal significativamente más confiable que la impresión por sí sola.

**Pequeña empresa.** Concentra el esfuerzo de medición primero en tu
categoría de tarea de mayor valor y más repetitiva, donde el valor de la
asistencia de IA tiene más probabilidades de ser claro y medible, en
lugar de intentar una evaluación exhaustiva de todos los tipos de trabajo
que hace tu equipo pequeño.

**Empresa.** Una comparación genuina y controlada durante una fase piloto
temprana, antes del despliegue completo en toda la organización, a menudo
es alcanzable aquí y vale el esfuerzo deliberado de organizarla, ya que
produce evidencia mucho más defendible para la decisión de inversión en
herramientas a gran escala que típicamente sigue a un piloto exitoso.

**Gobierno.** Las decisiones de gasto en tecnología pública, incluida la
contratación de herramientas de IA, a menudo enfrentan un escrutinio
particular y pueden requerir una justificación formal de coste y
beneficio (capítulo 5.5). Incorpora la disciplina de medición que
recomienda este capítulo en cualquier fase piloto desde el principio, ya
que una metodología de evaluación rigurosa y documentada fortalece
considerablemente el eventual caso de financiación o contratación.

## Ejemplos

**Empresa.** Una empresa de software desplegó un asistente de codificación
de IA a la mitad de sus equipos de ingeniería como un piloto deliberado,
manteniendo a la otra mitad como grupo de comparación durante un
trimestre antes del despliegue completo. El grupo piloto mostró una
mejora de tiempo de ciclo genuina y estadísticamente significativa para
tareas bien definidas y ricas en código repetitivo, pero no mostró
ninguna mejora mesurable, y un recuento de iteración de revisión (capítulo
2.9) ligeramente elevado, para trabajo arquitectónico complejo y
novedoso. Este hallazgo segmentado por tarea, visible solo gracias al
diseño de comparación genuino y al desglose por categoría de tarea, llevó
a la empresa a dirigir específicamente el mensaje de despliegue y la
formación de asistencia de IA hacia las categorías de tarea donde
demostrablemente ayudaba, en lugar de presentarla como un impulso de
productividad uniforme en todo el trabajo.

**Gobierno.** Una agencia federal que pilotaba la asistencia de
codificación de IA para un subconjunto de los equipos de su programa de
modernización inicialmente dependió de encuestas de ahorro de tiempo
autorreportadas, que mostraron respuestas entusiastas y uniformemente
positivas. Un análisis objetivo de seguimiento, que comparaba el tiempo de
ciclo y la tasa de defectos escapados entre los equipos piloto y una
cohorte comparable no piloto que trabajaba en componentes de sistema
similares, encontró que la mejora objetiva de tiempo de ciclo era real
pero notablemente menor de lo que sugerían las estimaciones
autorreportadas, e identificó un aumento modesto pero real en el tiempo
de revisión que había estado compensando parte de la ganancia de
velocidad de generación, un hallazgo que los datos de autorreporte por sí
solos habían pasado por alto por completo. Esta imagen más precisa y
basada en evidencia informó directamente un caso de negocio más modesto y
más defendible para la contratación continuada y ampliada de la
herramienta.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de medir rigurosamente el desarrollo asistido por IA es tomar
decisiones de inversión seguras y basadas en evidencia: una organización
que sabe con precisión dónde la asistencia de IA realmente ayuda puede
invertir en expandirla ahí y evitar pagar de más por licencias en
categorías de tareas donde proporciona poco valor, exactamente la
percepción de segmentación por tarea que demuestra el ejemplo de la
empresa de software anterior. Esto se conecta directamente con la
economía unitaria del capítulo 5.4 y la disciplina de ROI del capítulo
5.5, ya que el coste de las herramientas de IA, a menudo con licencia por
puesto, necesita el mismo tratamiento riguroso de coste y beneficio que
aplica este libro a cualquier otra inversión de ingeniería importante.

El coste total de propiedad es el esfuerzo analítico de construir
comparaciones genuinas, medir el tiempo de ciclo completo incluyendo la
revisión y corrección, y segmentar por tipo de tarea, lo cual es más
trabajo que aceptar al pie de la letra las estadísticas de uso reportadas
por el proveedor o las impresiones autorreportadas. Ese esfuerzo se
justifica directamente por la escala del coste de licencia de
herramientas de IA en una organización grande y por el riesgo de un
compromiso de toda la organización costoso, poco fundamentado en
evidencia, basado en la impresión en lugar de los datos.

## Antipatrones y errores comunes

- **Medir la asistencia de IA solo por volumen de producción o
  estadísticas de uso del proveedor:** repite directamente la advertencia
  central del capítulo 7.1.
- **Depender enteramente del ahorro de tiempo autorreportado:** una señal
  débil vulnerable al sesgo, y ciega al coste de revisión y corrección
  posterior.
- **Medir solo el paso de velocidad de generación, ignorando el tiempo de
  ciclo completo:** produce una contabilidad incompleta y potencialmente
  engañosa del efecto real de productividad.
- **Reportar un único número mezclado de toda la organización:** oculta
  la variación real de valor entre distintas categorías de tareas.
- **Sin grupo de comparación ni línea base histórica:** no puede
  distinguir el efecto real de la asistencia de IA de cualquier otro
  cambio concurrente.
- **Tratar un resultado de encuesta autorreportado y entusiasta como
  evidencia suficiente para una decisión de inversión a gran escala:**
  arriesga exactamente la brecha que descubrió el ejemplo de la agencia
  federal anterior solo después de construir una comparación más
  rigurosa.

## Modelo de madurez

- **Nivel 1, Iniciar:** El valor del desarrollo asistido por IA se evalúa,
  si acaso, solo mediante impresión autorreportada y estadísticas de uso
  del proveedor.
- **Nivel 2, Desarrollar:** Existen algunos datos de tiempo de ciclo o
  calidad, pero no hay ningún grupo de comparación genuino ni línea base
  histórica y ningún análisis segmentado por tarea.
- **Nivel 3, Estandarizar:** Se aplica de manera consistente un diseño de
  comparación genuino (grupo de control o línea base histórica) con una
  medición emparejada de tiempo de ciclo y calidad, segmentado por tipo
  de tarea.
- **Nivel 4, Gestionar:** Se rastrea la contabilidad de tiempo de ciclo
  completa, incluyendo el tiempo de revisión y corrección; las
  afirmaciones autorreportadas se validan sistemáticamente frente a
  datos objetivos.
- **Nivel 5, Orquestar:** La organización tiene una comprensión madura y
  basada en evidencia de exactamente dónde la asistencia de IA realmente
  ayuda, informando el despliegue dirigido, la inversión en formación, y
  las decisiones de contratación con un ROI demostrado y defendible.

## Ideas para el debate

1. ¿Qué comparación genuina, si acaso, tenemos para nuestra adopción actual de herramientas de IA?
2. ¿Hemos medido el tiempo de ciclo y la calidad juntos, o solo una afirmación de velocidad?
3. ¿Qué afirmación de asistencia de IA autorreportada deberíamos validar frente a datos objetivos?
4. ¿Qué categoría de tarea específica muestra la evidencia más fuerte de valor de asistencia de IA genuino para nosotros?
5. ¿Podríamos defender actualmente nuestra inversión en herramientas de IA ante una parte interesada financiera escéptica con evidencia?

## Conclusiones clave

- Mide el desarrollo asistido por IA por **resultado**, no por volumen de
  producción o estadísticas de uso reportadas por el proveedor.
- Usa un **grupo de comparación genuino o una línea base histórica**, no
  solo una instantánea de antes y después vulnerable a factores de
  confusión.
- Mide el **tiempo de ciclo y la calidad juntos**, incluyendo el flujo
  completo, el tiempo de revisión y corrección, no solo la velocidad de
  generación.
- Trata el **ahorro de tiempo autorreportado como una hipótesis**, no
  como una conclusión, y valídalo frente a datos objetivos.
- **Segmenta por tipo de tarea**; un único número mezclado oculta dónde se
  concentra genuinamente el valor y dónde no.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la disciplina de medición de
  resultados que este capítulo aplica a la evaluación de herramientas de
  IA).
- La investigación de GitHub sobre la programación en pareja con IA y la
  productividad de los desarrolladores (investigación empírica a escala
  de la industria sobre los resultados del desarrollo asistido por IA).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, y Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (la disciplina de medición
  multidimensional que este capítulo aplica a una nueva categoría de
  herramientas específica).
- *How to Measure Anything*, de Douglas W. Hubbard (construir
  comparaciones defendibles y cuantificar el valor bajo incertidumbre
  genuina).
