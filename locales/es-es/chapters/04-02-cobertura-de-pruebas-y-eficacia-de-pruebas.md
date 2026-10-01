# 4.2 Cobertura de pruebas y eficacia de pruebas

## Visión general y motivación

La **[cobertura de pruebas](https://en.wikipedia.org/wiki/Code_coverage)**
mide el porcentaje de código ejecutado por una suite de pruebas: cobertura
de líneas, cobertura de ramas, o la más estricta cobertura de rutas. Es una
de las métricas más rastreadas de todo este libro, barata de calcular, fácil
de visualizar como un único porcentaje, y en consecuencia una de las que más
se manipula, exactamente de la forma que predice el capítulo 1.2 para
cualquier métrica que se convierte en un objetivo. Una suite de pruebas
puede lograr una cobertura alta mientras verifica casi nada significativo,
porque la cobertura mide si el código se ejecutó durante una ejecución de
pruebas, no si la prueba realmente comprobó que el código se comportaba
correctamente.

Esta brecha entre cobertura y eficacia genuina de las pruebas no es una nota
al pie menor; es la preocupación central de este capítulo. Una prueba que
llama a una función y no afirma nada sobre su resultado aumenta la cobertura
de forma idéntica a una prueba que verifica a fondo el comportamiento de la
función en casos límite. La solución que recomienda este capítulo, las
**pruebas de mutación**, introduce deliberadamente fallos pequeños y
artificiales en el código y comprueba si la suite de pruebas realmente los
detecta, es la respuesta directa a esta brecha, y este capítulo la trata
como el complemento necesario de la cobertura, no como algo opcional.

Para los equipos grandes, los objetivos de cobertura a menudo se adoptan en
toda la organización como una puerta de calidad, precisamente el tipo de
métrica incentivada y de alta visibilidad que el capítulo 1.2 advierte que
es más susceptible de manipulación. Las organizaciones empresariales y
gubernamentales que establecen un requisito de porcentaje de cobertura
general sin una comprobación de eficacia emparejada están, en efecto,
incentivando exactamente el patrón de manipulación de umbral que describe
este libro: pruebas triviales escritas puramente para alcanzar un número,
sin la mejora correspondiente en la prevención real de defectos.

## Principios clave

- **La cobertura mide ejecución, no verificación.** Que una línea sea
  ejecutada por una prueba no dice nada sobre si la prueba comprobó algo
  significativo sobre ella.
- **Un objetivo de cobertura sin una comprobación de eficacia es un caso de
  manual de la ley de Goodhart** (capítulo 1.2): el número mejora mientras
  la calidad genuina no lo hace.
- **Las pruebas de mutación son el complemento necesario de la cobertura**,
  no un sustituto; usa ambas juntas.
- **La cobertura es más útil como un mínimo que como un objetivo que
  maximizar.** Un número bajo revela código genuinamente sin probar;
  perseguir el 100% a menudo produce rendimientos decrecientes o negativos.
- **La cobertura de las rutas críticas importa más que la cobertura
  uniforme y general.** No todo el código conlleva el mismo riesgo si fallo.

## Recomendaciones

### Usa la cobertura para encontrar código sin probar, no como un objetivo que maximizar

Trata un informe de cobertura principalmente como un mapa de lo que no
tiene ninguna prueba en absoluto, lo cual es información genuinamente útil,
en lugar de como una puntuación que empujar hacia el 100%. El código con
cobertura cero es una brecha real que vale la pena cerrar; el valor marginal
de empujar la cobertura del 85% al 95% suele ser mucho menor y a menudo no
vale el esfuerzo que requiere, especialmente si ese esfuerzo produce
pruebas de bajo valor solo para alcanzar el número más alto.

### Empareja todo objetivo de cobertura con pruebas de mutación

Las herramientas de **pruebas de mutación** introducen automáticamente
fallos pequeños en tu código, invirtiendo un operador de comparación,
cambiando una condición límite, y luego ejecutan tu suite de pruebas contra
cada versión mutada. Una suite de pruebas que "mata" (fallo contra) a la
mayoría de los mutantes está verificando genuinamente el comportamiento;
una suite de pruebas con alta cobertura de líneas pero una tasa baja de
mutantes eliminados está ejecutando código sin comprobarlo de forma
significativa. Este emparejamiento es la salvaguarda individual más eficaz
contra la manipulación de objetivos de cobertura, y este libro lo recomienda
como práctica estándar, no como una técnica avanzada u opcional.

### Prioriza la cobertura y las pruebas de mutación en las rutas críticas primero

No todo el código conlleva el mismo riesgo. Una ruta de procesamiento de
pagos, una comprobación de autenticación, o un script de migración de datos
merece pruebas mucho más rigurosas que un informe administrativo poco
utilizado. En lugar de perseguir una cobertura uniforme en toda la base de
código, identifica tus rutas de código de mayor riesgo y mayor consecuencia
y concentra tanto el esfuerzo de cobertura como el de pruebas de mutación
ahí primero, aceptando una cobertura menor en código genuinamente de bajo
riesgo como una compensación deliberada e informada en lugar de un
descuido.

### Vigila los patrones específicos de manipulación de la cobertura

Las formas más comunes en que se manipula la cobertura, una vez que se
convierte en un objetivo, incluyen: pruebas que llaman a una función pero no
afirman nada significativo sobre el resultado (la manipulación de umbral
del capítulo 1.2 aplicada a esta métrica), desactivar o eliminar pruebas que
fallan en lugar de corregir el problema subyacente, y excluir por completo
del cálculo de cobertura el código difícil de probar en lugar de abordar
por qué es difícil de probar. Audita periódicamente una muestra de pruebas
directamente, leyendo sus afirmaciones reales, en lugar de confiar solo en
el porcentaje de cobertura.

### Establece un mínimo de cobertura, no un techo de cobertura, en tu canal de integración continua

Configura tu canal de compilación para que falle si la cobertura cae por
debajo de un mínimo acordado para el código nuevo, previniendo el
retroceso, en lugar de exigir que cada cambio empuje el número general
hacia arriba. Esta distinción importa: un mínimo protege contra el
retroceso sin crear la misma presión implacable hacia arriba que produce
pruebas de bajo valor escritas puramente para subir el número un poco más.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Porcentaje de cobertura por sí solo | Barato, simple, ampliamente soportado por las herramientas | Se manipula fácilmente; mide ejecución, no verificación |
| Cobertura más pruebas de mutación | Verifica que las pruebas realmente comprueban el comportamiento, resiste la manipulación | Más costoso computacionalmente; requiere inversión en herramientas |
| Objetivo de cobertura uniforme en toda la base de código | Simple de enunciar y aplicar | Desperdicia esfuerzo en código de bajo riesgo; subinvierte en relación con el riesgo en otras partes |
| Cobertura basada en riesgo, con las rutas críticas primero | Concentra el esfuerzo donde más importa | Requiere juicio para identificar correctamente las rutas genuinamente críticas |

La tensión central es **simplicidad frente a honestidad**. Un único
porcentaje de cobertura es fácil de reportar y fácil de establecer como
objetivo, pero esa simplicidad es exactamente lo que lo hace tan fácil de
manipular una vez que se convierte en un número incentivado. Resuelve la
tensión aceptando la complejidad añadida de las pruebas de mutación y la
priorización basada en riesgo como el coste de una señal honesta, y
comunicando explícitamente a tu equipo por qué un número de cobertura
general más bajo, concentrado correctamente en las rutas críticas y
respaldado por una fuerte tasa de mutantes eliminados, es más valioso que
uno más alto, distribuido de manera más uniforme pero verificado de forma
menos eficaz.

## Preguntas para debatir con tu equipo

1. **¿Cuál es nuestra tasa de mutantes eliminados en nuestras rutas de
   código de mayor riesgo, y cómo se compara con nuestro porcentaje de
   cobertura en ese mismo código?** Una gran brecha entre un número de
   cobertura alto y una tasa de mutantes eliminados baja es la señal más
   clara posible de que la cobertura por sí sola no te está diciendo lo que
   crees que te está diciendo.

2. **¿Hemos escrito alguna vez una prueba principalmente para aumentar un
   número de cobertura, con poco pensamiento real sobre qué debería
   verificar?** Sé honesto aquí; esto ocurre con más frecuencia de la que
   los equipos suelen admitir, especialmente bajo presión de plazos cuando
   una puerta de cobertura está bloqueando una fusión.

3. **¿Está nuestro esfuerzo de cobertura concentrado en nuestras rutas de
   código de mayor riesgo, o distribuido de manera uniforme sin importar la
   consecuencia si ese código fallo?** Compara tu distribución de cobertura
   actual con una evaluación honesta del riesgo de tu base de código y busca
   el desajuste.

4. **¿Hemos desactivado o eliminado alguna vez una prueba fallida en lugar
   de corregir el problema subyacente que reveló?** Esta es una de las
   formas más dañinas de manipulación de cobertura, porque elimina
   activamente protección real mientras el número de cobertura reportado
   apenas se mueve.

5. **¿Nuestro canal de integración continua impone un mínimo de cobertura
   para el código nuevo, o empuja hacia un techo cada vez más alto sin
   importar los rendimientos decrecientes?** Debate si el diseño actual de
   tu puerta crea el incentivo correcto, proteger contra el retroceso, o el
   incorrecto, una presión implacable hacia arriba que premia el relleno de
   pruebas de bajo valor.

6. **¿Qué código de nuestra base de código está excluido del cálculo de
   cobertura, y esa exclusión está justificada o está ocultando una brecha
   real de pruebas?** Revisa tu configuración de exclusión real; es común
   que esta lista crezca silenciosamente con el tiempo sin que nadie
   reconsidere si cada exclusión sigue estando justificada.

## Enfoque sectorial

**Startup.** Los objetivos formales de cobertura a menudo son innecesarios
en esta etapa tan temprana; concentra el esfuerzo de escritura de pruebas
directamente en tus rutas de código más arriesgadas y más críticas para el
negocio (normalmente la lógica de pagos o del flujo de trabajo principal)
en lugar de perseguir un porcentaje general en una base de código que
todavía está cambiando rápidamente y de todos modos puede reescribirse de
forma sustancial pronto.

**Pequeña empresa.** La mayoría de las plataformas de integración continua
reportan la cobertura automáticamente con un coste de configuración
mínimo; úsala principalmente para detectar código crítico completamente sin
probar en lugar de perseguir un porcentaje objetivo específico, y considera
las pruebas de mutación solo una vez que tengas la capacidad de ingeniería
para actuar sobre lo que revelan.

**Empresa.** Los objetivos de cobertura generales, aplicados a toda la
organización, son un error común y de consecuencias importantes a esta
escala, ya que incentivan exactamente la manipulación que describe este
capítulo en docenas de equipos simultáneamente. Establece expectativas de
cobertura basadas en riesgo que varíen según la criticidad del servicio, e
invierte en infraestructura de pruebas de mutación específicamente para tus
sistemas de mayor riesgo.

**Gobierno.** Los requisitos de cobertura a veces aparecen en documentación
de contratación pública o cumplimiento normativo como un indicador
contundente y fácil de especificar para el aseguramiento de la calidad.
Cuando sea posible, empareja cualquier porcentaje de cobertura exigido
contractualmente con un requisito de eficacia basado en pruebas de mutación
o defectos, de modo que el incentivo contractual no premie inadvertidamente
exactamente el relleno de pruebas de bajo valor que advierte este capítulo.

## Ejemplos

**Empresa.** La dirección de una plataforma de comercio electrónico había
establecido un requisito de cobertura del 95% para todo código nuevo en
toda la empresa, aplicado como una puerta rígida de integración continua.
Una auditoría dos años después, motivada por una oleada de defectos en
producción en código supuestamente bien probado, encontró una tasa de
mutantes eliminados inferior al 40% en gran parte de la base de código: los
equipos habían estado escribiendo pruebas que ejecutaban rutas de código
sin afirmar de forma significativa sobre su comportamiento, puramente para
satisfacer la puerta bajo presión de plazos. La empresa sustituyó el
requisito de cobertura general por una política escalonada según riesgo:
cobertura estricta más pruebas de mutación obligatorias por encima de un
umbral de tasa de eliminación del 80% para el código de pagos y
autenticación, y un mínimo de cobertura mucho más ligero para herramientas
internas de bajo riesgo, lo que redujo el esfuerzo de pruebas desperdiciado
y mejoró de forma mesurable las tasas de defectos en las rutas genuinamente
críticas.

**Gobierno.** El sistema de elegibilidad para prestaciones de una agencia de
salud pública estaba contractualmente obligado a mantener un 90% de
cobertura de pruebas según su acuerdo con el proveedor de desarrollo. Una
revisión posterior a una incidencia, tras un defecto significativo en el
cálculo de elegibilidad que se había publicado a pesar de que se cumplía el
requisito de cobertura, encontró que la función específica responsable
había logrado su cobertura enteramente mediante pruebas que llamaban a la
función con entradas válidas pero nunca probaban condiciones límite ni
entradas inválidas, precisamente donde ocurrió el defecto. El contrato
revisado del proveedor de la agencia ahora exige una puntuación documentada
de pruebas de mutación junto con la cobertura para cualquier código de
cálculo de elegibilidad, cerrando la brecha específica que había permitido
que pruebas conformes pero ineficaces satisficieran el contrato.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de emparejar la cobertura con las pruebas de mutación es detectar
la brecha entre la calidad aparente y la real de las pruebas antes de que
cueste un defecto en producción. El ejemplo del comercio electrónico
anterior muestra el patrón con claridad: un requisito de cobertura por sí
solo había producido una falsa sensación de seguridad que una oleada de
defectos finalmente expuso a un coste mucho mayor que la inversión en
pruebas de mutación que habría detectado la brecha antes.

El coste total de propiedad incluye el coste computacional de las pruebas
de mutación, que son más costosas de ejecutar que la simple instrumentación
de cobertura y por eso normalmente se reservan para el código de rutas
críticas en lugar de toda la base de código, más el tiempo de ingeniería
para interpretar y actuar sobre los resultados. Ese coste se justifica
específicamente para el código de mayor riesgo, donde el coste de una
brecha no detectada en la eficacia de las pruebas es más alto.

## Antipatrones y errores comunes

- **Tratar el porcentaje de cobertura como un veredicto de calidad
  directo:** mide ejecución, no verificación.
- **Escribir pruebas principalmente para satisfacer una puerta de
  cobertura:** produce exactamente el patrón de manipulación de umbral de
  bajo valor que advierte el capítulo 1.2.
- **Desactivar o eliminar pruebas fallidas en lugar de corregir el problema
  subyacente:** elimina protección real mientras apenas afecta al número
  reportado.
- **Aplicar un objetivo de cobertura uniforme sin importar el riesgo del
  código:** desperdicia esfuerzo en código de bajo riesgo y subinvierte en
  rutas genuinamente críticas.
- **Dejar crecer una lista de exclusión silenciosamente con el tiempo:**
  oculta brechas reales de pruebas detrás de una cifra de cobertura
  técnicamente exacta pero engañosa.
- **Perseguir un techo de cobertura en lugar de un mínimo de cobertura:**
  crea una presión implacable hacia arriba que premia el relleno de pruebas
  por encima de la verificación genuina.

## Modelo de madurez

- **Nivel 1, Iniciar:** La cobertura no se mide, o se mide de forma
  inconsistente sin ningún mínimo, objetivo, o comprobación de eficacia.
- **Nivel 2, Desarrollar:** Existe un objetivo de cobertura y se rastrea,
  pero ninguna prueba de mutación ni priorización basada en riesgo informa
  cómo se asigna el esfuerzo.
- **Nivel 3, Estandarizar:** Los mínimos de cobertura se imponen de manera
  consistente en la integración continua, con una priorización basada en
  riesgo que dirige dónde se concentra el esfuerzo de cobertura.
- **Nivel 4, Gestionar:** Las pruebas de mutación se ejecutan en el código
  de rutas críticas, con un umbral de tasa de eliminación rastreado que
  debe cumplirse junto con la cobertura, y las listas de exclusión se
  auditan periódicamente.
- **Nivel 5, Orquestar:** La organización puede señalar reducciones
  específicas de defectos rastreadas hasta la priorización informada por
  pruebas de mutación, y los datos de cobertura y eficacia juntos informan
  directamente las decisiones de inversión en pruebas.

## Ideas para el debate

1. ¿Cuál es nuestra tasa de mutantes eliminados en nuestra ruta de código más crítica, y siquiera lo sabemos?
2. ¿Hemos escrito alguna vez una prueba de bajo valor puramente para satisfacer una puerta de cobertura?
3. ¿Está nuestro esfuerzo de cobertura actual concentrado donde el riesgo es más alto, o distribuido de manera uniforme?
4. ¿Qué código está actualmente excluido del cálculo de cobertura, y esa exclusión sigue estando justificada?
5. ¿Valdría la pena el coste computacional de una inversión en pruebas de mutación en nuestro sistema de mayor riesgo?

## Conclusiones clave

- La cobertura de pruebas mide **ejecución, no verificación**; una línea
  cubierta no dice nada sobre si se comprobó de forma significativa.
- Empareja la cobertura con las **pruebas de mutación** para verificar que
  las pruebas realmente detectan fallos reales, no solo que ejecutan el
  código.
- Concentra el esfuerzo de pruebas en las **rutas críticas y de alto
  riesgo** en lugar de perseguir una cobertura uniforme en toda la base de
  código.
- Usa la cobertura como un **mínimo para proteger contra el retroceso**, no
  como un techo que maximizar implacablemente.
- Vigila los patrones específicos de manipulación de la cobertura:
  **pruebas de bajo valor, pruebas fallidas desactivadas, y listas de
  exclusión que crecen silenciosamente**.

## Referencias y lecturas adicionales

- *Working Effectively with Legacy Code*, de Michael Feathers (estrategia
  de cobertura de pruebas para bases de código existentes y difíciles de
  probar).
- Jia, Yue, y Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011): un
  estudio exhaustivo de las técnicas de pruebas de mutación y su eficacia.
- *xUnit Test Patterns*, de Gerard Meszaros (patrones de diseño de pruebas
  relevantes para escribir pruebas genuinamente eficaces, no meramente
  satisfactorias de la cobertura).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la relación entre las prácticas de
  pruebas y el rendimiento de entrega).
