# 5.4 Coste y economía unitaria de la ingeniería

## Visión general y motivación

Este capítulo convierte la parte 5 en explícitamente financiera: cómo
expresar el coste de ingeniería en términos que una parte interesada
financiera pueda usar directamente, y cómo construir **economía
unitaria**, el coste expresado por unidad significativa de producción o
uso, en lugar de como una línea presupuestaria departamental opaca y
agregada. El coste de ingeniería normalmente es la mayor línea de gasto
controlable en una organización impulsada por software, y sin embargo con
frecuencia es la peor entendida por la función financiera, reportada como
un único número grande con poca visibilidad sobre qué lo impulsa o cómo
escala con el crecimiento. Este capítulo existe para cerrar esa brecha,
porque un líder de ingeniería que no puede responder "¿qué nos cuesta
operar este sistema?" o "¿cómo escala nuestro coste a medida que
crecemos?" en términos financieros concretos está en una desventaja real
en cada conversación de presupuesto.

La disciplina específica que recomienda este capítulo, la economía
unitaria, significa expresar el coste por despliegue, por cliente
atendido, por transacción procesada, o por otra unidad que realmente le
importe al negocio, en lugar de solo como el coste total de personal o el
gasto total en la nube. Este replanteamiento se conecta directamente con
el principio de resultados sobre producción del capítulo 1.3: un número de
coste total en descenso no es automáticamente bueno si proviene de atender
a menos clientes, y un número de coste total en aumento no es
automáticamente malo si proviene de atender proporcionalmente a muchos
más. La economía unitaria es lo que hace que las tendencias de coste sean
interpretables en lugar de simplemente visibles.

Para los equipos grandes, la disciplina de este capítulo es lo que
convierte las finanzas de ingeniería de una caja negra en un sistema
legible y gestionable. Las organizaciones empresariales usan la economía
unitaria para comparar la eficiencia de coste de distintos productos,
plataformas, o equipos sobre una base justa; las organizaciones
gubernamentales usan la misma disciplina para demostrar responsabilidad
fiscal y para construir un caso basado en evidencia para la inversión en
infraestructura que reducirá el coste por ciudadano atendido con el
tiempo.

## Principios clave

- **El coste total por sí solo no es interpretable sin un denominador.**
  La economía unitaria, el coste por unidad significativa, convierte un
  número opaco en una tendencia accionable.
- **Elige una unidad que refleje un valor de negocio o de misión
  genuino**, no un denominador arbitrario o fácil de manipular.
- **El coste tiene múltiples componentes: personas, infraestructura, y
  herramientas.** Rastréalos por separado, ya que cada uno tiene un
  impulsor de coste distinto y una palanca distinta que accionar.
- **Las prácticas de FinOps aportan al coste en la nube el mismo rigor que
  este libro aporta a las métricas de entrega y calidad.** Trata el coste
  como medible y gestionable, no como un dato inevitable y opaco.
- **Un coste total en descenso no es automáticamente bueno, y uno en
  aumento no es automáticamente malo**, sin comprobar qué le ocurrió a la
  medida unitaria al mismo tiempo.

## Recomendaciones

### Elige una unidad que refleje el valor real entregado, no un denominador arbitrario

Selecciona una unidad para tu cálculo de economía unitaria que rastree
genuinamente el valor de negocio o de misión: coste por cliente atendido,
coste por transacción procesada, coste por despliegue, o coste por
interacción ciudadana gestionada para un servicio del sector público.
Evita un denominador que sea demasiado fácil de inflar para favorecer la
proporción, como un recuento interno y en gran medida discrecional que no
corresponde a ninguna unidad externa genuina de valor entregado.

### Separa los costes de personas, infraestructura, y herramientas

El coste de ingeniería tiene al menos tres componentes distintos con
impulsores y palancas diferentes: el coste de personas (salarios,
beneficios, en gran medida fijo a corto plazo), el coste de infraestructura
(gasto en la nube, en gran medida variable con el uso y directamente
optimizable mediante la práctica de ingeniería), y el coste de
herramientas y licencias (a menudo costes fijos por puesto o por nivel de
uso). Rastréalos por separado en lugar de como un único total mezclado, ya
que un coste total en aumento impulsado por la infraestructura que escala
con un crecimiento genuino requiere una respuesta muy distinta que el
mismo aumento total impulsado por una proliferación no gestionada de
herramientas.

### Aplica la disciplina de FinOps específicamente al coste de infraestructura en la nube

**[FinOps](https://en.wikipedia.org/wiki/FinOps)** es la disciplina de
llevar la responsabilidad financiera al gasto variable en la nube mediante
la colaboración entre funciones de ingeniería, finanzas, y negocio. Aplica
sus prácticas centrales directamente: etiqueta los recursos en la nube por
equipo y servicio para la atribución de costes, revisa el gasto frente al
presupuesto con una cadencia regular, y trata la eficiencia de coste de la
infraestructura (coste por unidad de uso real) como una métrica de
ingeniería que vale la pena optimizar deliberadamente, no como una
sobrecarga fija e inevitable que simplemente aceptar.

### Rastrea la tendencia del coste unitario a lo largo del tiempo, e investiga el movimiento explícitamente

Una única instantánea de coste unitario es menos útil que su tendencia:
¿el coste por cliente atendido está cayendo a medida que la plataforma
madura y escala (una señal de ganancias de eficiencia genuinas), o está
aumentando (una señal de ineficiencia acumulada, deuda técnica que
impulsa un coste de mantenimiento mayor, o un cambio en la mezcla de
clientes atendidos hacia segmentos que consumen más recursos)? Investiga
explícitamente un cambio significativo en la tendencia del coste unitario
en lugar de reportar el número sin explicación.

### Conecta los datos de coste con las métricas de deuda técnica y calidad de otras partes de este libro

El aumento del coste de infraestructura o mantenimiento por unidad a veces
es una consecuencia directa y mesurable de la deuda técnica acumulada
(capítulo 4.5) o de una proliferación de puntos calientes de complejidad
(capítulo 4.1, capítulo 4.3): las rutas de código ineficientes, la
infraestructura redundante, y las consultas mal optimizadas eventualmente
aparecen como un coste unitario elevado. Usa el aumento del coste unitario
como una entrada más, junto a las señales de cambios acumulados y
complejidad de la parte 4, en tu discusión de priorización de deuda, ya
que un elemento de deuda con un impacto de coste demostrado y mesurable
constituye un caso más sólido para la inversión en remediación que una
queja de calidad sin cuantificar por sí sola.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Reportar solo el coste total | Simple, coincide con cómo normalmente se asignan los presupuestos | No es interpretable sin un denominador; oculta las tendencias de eficiencia |
| Economía unitaria con un denominador bien elegido | Interpretable, accionable, comparable a lo largo del tiempo y entre equipos | Requiere cuidado al elegir una unidad genuinamente significativa y difícil de manipular |
| Reporte de coste mezclado (personas, infraestructura, herramientas combinados) | Un único número simple | Oscurece qué impulsor de coste específico realmente está cambiando y por qué |
| Componentes de coste separados | Revela la palanca correcta que accionar para una tendencia de coste dada | Requiere una atribución de coste e infraestructura de rastreo más detallada |

La tensión central es **simplicidad frente a capacidad de acción**. Un
único número de coste total es fácil de reportar y coincide con cómo
muchas organizaciones ya asignan el presupuesto, pero oscurece tanto qué
está impulsando los cambios de coste como si esos cambios reflejan una
eficiencia genuina o un crecimiento genuino. Resuelve la tensión invirtiendo
en el reporte algo más complejo de economía unitaria y componentes
separados que recomienda este capítulo, ya que la capacidad de acción
resultante, saber exactamente qué palanca accionar cuando el coste se
mueve, vale el esfuerzo de rastreo adicional y modesto para cualquier
organización más allá de la escala más pequeña.

## Preguntas para debatir con tu equipo

1. **¿Rastreamos el coste de ingeniería por unidad significativa (cliente,
   transacción, despliegue), o solo como un total opaco?** Si solo existe
   un total, identifica qué unidad haría que tu tendencia de coste sea
   genuinamente interpretable y debate qué se necesitaría para empezar a
   rastrearla.

2. **¿Podemos separar nuestro coste actual en componentes de personas,
   infraestructura, y herramientas, y sabemos cuál está impulsando algún
   cambio reciente?** Revisa tu desglose de coste real, si existe uno, y
   comprueba si es lo bastante detallado como para responder esta pregunta
   con confianza.

3. **¿Hemos aplicado prácticas de etiquetado y atribución de FinOps a
   nuestro coste de infraestructura en la nube, o es una única partida sin
   atribuir?** Si el gasto no se puede atribuir a equipos o servicios
   específicos, debate cómo sería el primer paso hacia una atribución
   genuina.

4. **¿Nuestra tendencia de coste unitario se ha movido significativamente
   en cualquier dirección recientemente, y sabemos por qué?** Investiga un
   movimiento real y reciente, si existe uno, y comprueba si puedes
   explicarlo con confianza o si sigue siendo un misterio.

5. **¿Nuestra tendencia actual de coste de infraestructura se correlaciona
   con alguna de nuestras señales de deuda técnica o punto caliente de
   complejidad de la parte 4?** Contrasta estas fuentes de datos
   explícitamente y comprueba si surge una conexión que podría fortalecer
   un caso de negocio de remediación de deuda.

6. **Si mañana una parte interesada financiera preguntara "¿qué nos
   cuesta atender a un cliente más?", ¿podríamos responder con
   confianza?** Esta pregunta concreta y práctica pone a prueba si tu
   economía unitaria realmente está construida y lista, o es meramente una
   aspiración teórica.

## Enfoque sectorial

**Startup.** La economía unitaria importa enormemente temprano, ya que
tanto inversores como fundadores necesitan saber si el coste de atender a
cada cliente adicional tiende hacia la sostenibilidad o hacia un modelo de
negocio que no puede escalar. Rastrea esto desde muy temprano, incluso con
estimaciones aproximadas, en lugar de esperar hasta que la empresa sea lo
bastante grande como para justificar herramientas formales de FinOps.

**Pequeña empresa.** Los paneles de facturación del proveedor de nube
normalmente proporcionan suficiente visibilidad básica de coste sin
herramientas dedicadas de FinOps; la disciplina principal es elegir una
unidad sensata (coste por cliente o coste por transacción) y comprobar la
tendencia periódicamente, en lugar de mirar solo la factura total de forma
aislada.

**Empresa.** La práctica de FinOps y el rastreo separado de componentes
de coste son esenciales a esta escala, donde el gasto en la nube puede
representar una línea presupuestaria muy grande y a menudo poco escrutada
repartida entre muchos equipos. Invierte en un etiquetado de atribución de
coste adecuado y una cadencia de revisión de coste dedicada, y usa la
economía unitaria para comparar la eficiencia de coste de manera justa
entre distintas líneas de producto o plataformas.

**Gobierno.** La responsabilidad fiscal y la eficiencia de coste
demostrable son directamente relevantes para la justificación
presupuestaria y la rendición de cuentas pública. La economía unitaria
expresada como coste por ciudadano atendido, o coste por transacción
procesada, a menudo es una métrica mucho más persuasiva e interpretable
para los comités presupuestarios que una cifra de gasto total bruto, y
respalda directamente el caso de negocio para la inversión en
infraestructura que reduce el coste por unidad con el tiempo.

## Ejemplos

**Empresa.** El equipo de finanzas de una empresa de software como
servicio se había alarmado por el aumento del gasto total en
infraestructura en la nube durante varios trimestres consecutivos,
asumiendo inicialmente ineficiencia o desperdicio. Un análisis de economía
unitaria, coste por cliente activo, mostró que el coste unitario en
realidad había estado cayendo de manera constante incluso mientras el
gasto total aumentaba, porque el número de clientes estaba creciendo más
rápido que el coste de infraestructura, una mejora de eficiencia genuina
enmascarada al mirar solo el gasto total. Este replanteamiento cambió la
conversación de finanzas de "por qué está gastando más ingeniería" a "cómo
sostenemos este escalado eficiente", una discusión materialmente más
productiva que evitó un mandato de recorte de costes innecesario y
potencialmente dañino que habría apuntado a un gasto genuinamente
saludable impulsado por el crecimiento.

**Gobierno.** Se le pidió a la agencia de servicios digitales de un
gobierno estatal que justificara la inversión continuada en
infraestructura en la nube ante un comité presupuestario que comparaba
costes con el sistema heredado local que estaba reemplazando. Un análisis
de economía unitaria, coste por transacción ciudadana procesada, mostró
que el coste unitario del nuevo sistema basado en la nube era
sustancialmente menor que el del sistema heredado, a pesar de un gasto
total nominal más alto, porque el nuevo sistema manejaba un volumen de
transacciones mucho mayor con un presupuesto de infraestructura total
igual o menor. Esta comparación de coste unitario, en lugar de una
comparación de gasto total más difícil de interpretar, se convirtió en la
evidencia central en un caso exitoso para la inversión continuada y
ampliada en la nube.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una economía unitaria rigurosa es una respuesta defendible e
interpretable a la pregunta que eventualmente hace cada parte interesada
financiera: ¿este gasto es eficiente, y está escalando de manera
sostenible? El ejemplo empresarial anterior muestra el riesgo de hacerlo
mal: una vista solo de gasto total casi desencadenó un mandato de recorte
de costes innecesario y contraproducente contra un gasto que, en base
unitaria, se estaba volviendo más eficiente, no menos.

El coste total de propiedad incluye las herramientas de atribución de
coste (prácticas de etiquetado de FinOps) y la disciplina analítica para
separar los componentes de coste y rastrear las tendencias unitarias con
el tiempo. Esa inversión es modesta comparada con el riesgo de tomar una
decisión de presupuesto significativa, recortar un gasto que en realidad
era eficiente, o no detectar un gasto que genuinamente se estaba volviendo
ineficiente, basándose únicamente en una vista de coste total poco
informada.

## Antipatrones y errores comunes

- **Reportar el coste total sin denominador:** no interpretable y oculta
  si el coste está escalando de manera eficiente o ineficiente.
- **Elegir una unidad arbitraria o fácil de manipular para el cálculo de
  coste:** produce una proporción que favorece en lugar de informar.
- **Mezclar el coste de personas, infraestructura, y herramientas en un
  solo número:** oscurece qué impulsor específico realmente está cambiando
  y qué palanca lo aborda.
- **Sin atribución de coste en la nube (etiquetado de FinOps):** deja el
  gasto de infraestructura efectivamente sin gestionar y sin rendición de
  cuentas a nivel de equipo o servicio.
- **Reaccionar a un cambio de coste total sin comprobar la tendencia
  unitaria:** puede desencadenar un mandato de recorte de costes
  innecesario contra un gasto genuinamente eficiente e impulsado por el
  crecimiento.
- **No conectar nunca las tendencias de coste con los datos de deuda
  técnica o complejidad:** pierde un caso cuantificado y fortalecido para
  la inversión en remediación de deuda.

## Modelo de madurez

- **Nivel 1, Iniciar:** El coste de ingeniería se reporta solo como un
  total opaco, sin economía unitaria ni separación de componentes.
- **Nivel 2, Desarrollar:** Existe cierto desglose de coste, pero la
  economía unitaria es inconsistente y la atribución de coste en la nube
  está en gran medida ausente.
- **Nivel 3, Estandarizar:** La economía unitaria con un denominador bien
  elegido se rastrea de manera consistente, con el coste separado en
  componentes de personas, infraestructura, y herramientas en toda la
  organización.
- **Nivel 4, Gestionar:** Se establecen prácticas de atribución y revisión
  de FinOps, y las tendencias de coste unitario se investigan activamente
  y se conectan con las señales de deuda técnica y calidad.
- **Nivel 5, Orquestar:** La organización puede responder con confianza a
  preguntas detalladas de coste unitario de las partes interesadas
  financieras, y los datos de coste informan directamente tanto las
  decisiones de inversión en ingeniería como la justificación
  presupuestaria al más alto nivel.

## Ideas para el debate

1. ¿Qué unidad haría que nuestra tendencia de coste sea genuinamente interpretable, y la rastreamos?
2. ¿Podríamos separar un cambio de coste reciente en sus componentes de personas, infraestructura, y herramientas?
3. ¿Alguna parte de nuestro gasto de infraestructura actualmente no está atribuida a un equipo o servicio específico?
4. ¿Nuestra tendencia de coste unitario se ha movido recientemente, y sabemos por qué?
5. ¿Dónde podría el aumento del coste unitario ser un síntoma de deuda técnica no abordada?

## Conclusiones clave

- La **economía unitaria**, el coste por unidad significativa de valor,
  convierte un número de coste total opaco en una tendencia interpretable
  y accionable.
- Elige una unidad que refleje **un valor de negocio o de misión
  genuino**, y evita un denominador arbitrario o fácil de manipular.
- Separa el coste en componentes de **personas, infraestructura, y
  herramientas**, ya que cada uno tiene un impulsor y una palanca
  distintos.
- Aplica la **disciplina de FinOps** específicamente al coste de
  infraestructura en la nube, incluyendo el etiquetado de atribución y la
  revisión regular.
- Un coste total en descenso **no es automáticamente bueno**, y uno en
  aumento **no es automáticamente malo**, sin comprobar la tendencia
  unitaria junto a él.

## Referencias y lecturas adicionales

- *Cloud FinOps*, de J.R. Storment y Mike Fuller (el texto fundacional
  sobre las prácticas de FinOps para la gestión del coste en la nube).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la relación entre la eficiencia de
  entrega y el coste).
- *Site Reliability Engineering*, de Betsy Beyer, Chris Jones, Jennifer
  Petoff, y Niall Richard Murphy, eds. (el coste como una compensación
  explícita de la ingeniería de fiabilidad).
- El FinOps Framework de la FinOps Foundation, [finops.org](https://www.finops.org/)
  (orientación práctica y modelo de madurez para la gestión financiera en
  la nube).
