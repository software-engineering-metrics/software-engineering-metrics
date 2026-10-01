# 5.3 Métricas de resultados de clientes y negocio

## Visión general y motivación

Este capítulo amplía el enfoque más allá de la adopción a nivel de
funcionalidad del capítulo 5.2 hacia toda la gama de resultados de
clientes y negocio que realmente le importan a una organización: ingresos
retenidos o incrementados, satisfacción y lealtad del cliente, reducción de
costes, riesgo evitado, y, para las organizaciones del sector público, los
resultados de la ciudadanía a cuyo servicio existe una misión. Estas son
las métricas de resultado que el capítulo 1.3 colocó en la cima de la
jerarquía de entrada, producción y resultado, y este capítulo es donde
este libro enfrenta la versión más difícil y honesta del reto central de
ese capítulo: los resultados a este nivel rara vez son atribuibles a la
ingeniería por sí sola, y fingir lo contrario produce exactamente el
problema de falsa precisión que advertía el capítulo 3.3 para el
rendimiento individual, ahora escalado al nivel de la contribución de toda
una organización de ingeniería al negocio.

La respuesta productiva a esa dificultad de atribución no es renunciar a
conectar el trabajo de ingeniería con los resultados de negocio, lo cual
abandonaría toda la premisa del capítulo 1.3, sino ser honesto sobre la
fuerza de la conexión y usar evidencia convergente en lugar de
afirmaciones de falsa precisión de causalidad directa. Una organización de
ingeniería bien gestionada puede mostrar que su trabajo se correlaciona
con, contribuye a, y a veces impulsa directamente resultados de negocio
específicos, sin reclamar el crédito exclusivo de resultados que también
dependen de ventas, marketing, condiciones del mercado, y decisiones de
estrategia de producto tomadas fuera del control de ingeniería.

Para los equipos grandes, la disciplina de este capítulo determina si la
ingeniería tiene un asiento real en la mesa estratégica o se trata como un
centro de coste cuyo valor se asume en lugar de demostrarse. Las
organizaciones empresariales usan las métricas de resultados de clientes y
negocio para justificar una inversión en ingeniería continuada y ampliada
frente a demandas competidoras de capital; las organizaciones
gubernamentales usan las métricas equivalentes de resultado ciudadano para
demostrar que el gasto en tecnología pública produjo su valor público
previsto, que es cada vez más el estándar al que los órganos de
supervisión someten a los programas de gobierno digital.

## Principios clave

- **Los resultados rara vez son atribuibles a la ingeniería por sí sola.**
  Usa evidencia convergente y un lenguaje de correlación honesto, no
  afirmaciones falsas de causalidad exclusiva.
- **Conecta las métricas de ingeniería con las métricas de resultado de
  forma explícita, mediante una cadena causal documentada**, no solo por
  yuxtaposición en el mismo panel.
- **Las organizaciones gubernamentales y orientadas a una misión tienen
  métricas de resultado más allá de los ingresos.** El tiempo de espera de
  la ciudadanía, la tasa de error, y la finalización del servicio importan
  tanto como, o más que, las medidas financieras.
- **Una métrica de resultado de negocio es lenta y ruidosa.** Aplica la
  alfabetización estadística del capítulo 1.6 con rigor aquí, más que casi
  en cualquier otra parte de este libro.
- **Aquí es donde se gana o se pierde la credibilidad de la ingeniería
  ante las partes interesadas no técnicas.** Habla en el lenguaje de
  resultado que tu audiencia ya usa.

## Recomendaciones

### Construye una cadena causal explícita y documentada desde las métricas de ingeniería hasta los resultados de negocio

En lugar de presentar las métricas de entrega y los resultados de negocio
uno al lado del otro y dejar que la audiencia infiera una conexión,
construye el árbol de métricas (capítulo 1.3) explícitamente: esta
inversión de ingeniería específica redujo el plazo de entrega, lo que
permitió una respuesta más rápida a una necesidad específica del cliente,
lo que se correlacionó con una mejora específica en la retención. Documenta
cada eslabón de esta cadena con su propia evidencia, de modo que la
afirmación general sea una cadena de eslabones individuales defendibles en
lugar de un único salto sin respaldo desde "mejoramos la frecuencia de
despliegue" hasta "los ingresos crecieron".

### Usa un lenguaje honesto de [correlación](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation), y busca activamente factores de confusión

Siguiendo directamente la guía del capítulo 1.6, resiste afirmar que un
cambio de ingeniería *causó* una mejora en el resultado de negocio sin
considerar qué más cambió al mismo tiempo: un cambio de precios, un tropiezo
de un competidor, un efecto estacional, una campaña de marketing. Formula
los hallazgos como correlaciones respaldadas por una cadena causal
plausible, y sé explícito sobre qué factores de confusión consideraste y
descartaste, en lugar de presentar una única comparación de antes y
después como prueba.

### Rastrea explícitamente los resultados ciudadanos y de misión para el trabajo del sector público y orientado a una misión

Para las organizaciones gubernamentales y sin fines de lucro, el
equivalente de "ingresos" a menudo es un resultado ciudadano o de
beneficiario: reducción del tiempo de espera para un servicio, aumento de
la tasa de finalización exitosa de un proceso de solicitud, reducción de
la tasa de error en un cálculo de prestaciones. Rastrea estos con el mismo
rigor que las organizaciones del sector privado aplican a las métricas de
ingresos, y resiste la tentación de recurrir a métricas solo de entrega
(funcionalidades entregadas, dentro del plazo) simplemente porque son más
fáciles de medir y están menos expuestas a la dificultad de atribución.

### Combina los datos cuantitativos de resultado con la señal cualitativa del cliente

Los números por sí solos, especialmente los números de resultado de
negocio lentos y ruidosos, pueden pasar por alto un contexto que la señal
cualitativa captura directamente: la retroalimentación de entrevistas con
clientes, los temas de tickets de soporte, o los hallazgos de
investigación directa de usuarios. Usa la señal cualitativa para explicar
*por qué* se movió una métrica de resultado cuantitativa, o para detectar
un problema emergente antes de que aparezca en absoluto en un número
rezagado, tratando ambas como evidencia complementaria en lugar de tratar
los datos cuantitativos como inherentemente más autorizados.

### Presenta los datos de resultado en el propio vocabulario de la audiencia

Al presentar a partes interesadas no técnicas, ejecutivos, miembros de la
junta, órganos de supervisión legislativa, empieza con la métrica de
resultado en el lenguaje que ya usan (ingresos retenidos, coste evitado,
tiempo de espera ciudadano reducido), y usa las métricas de ingeniería
solo como evidencia de apoyo de cómo se logró ese resultado, no como el
titular. Esto es una aplicación directa del principio de ponderación de
resultados del capítulo 1.3 a la habilidad específica de la comunicación
con partes interesadas.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Afirmar causalidad directa de las métricas de ingeniería a los resultados de negocio | Narrativa simple y convincente | Normalmente exagera la certeza; vulnerable a ser desacreditada por una audiencia escéptica |
| Correlación honesta y documentada por cadena | Defendible, construye credibilidad a largo plazo | Más compleja de presentar; requiere más disciplina de recopilación de evidencia |
| Reporte solo de entrega (evitando por completo las afirmaciones de resultado) | Simple, evita el riesgo de atribución | No logra demostrar el valor de negocio real de la ingeniería; débil en conversaciones de inversión |
| Evidencia de resultado cuantitativa y cualitativa combinada | Más rica, más explicativa, captura lo que los números por sí solos pasan por alto | Requiere más esfuerzo para recopilar y sintetizar ambos tipos de evidencia |

La tensión central es **narrativa convincente frente a honestidad
defendible**. Una afirmación de causalidad directa y simple, "entregamos
esta funcionalidad y los ingresos crecieron un 20%", es una historia mucho
más convincente que una cadena causal de múltiples eslabones cuidadosamente
matizada con factores de confusión reconocidos, pero también tiene muchas
más probabilidades de estar equivocada y, si una parte interesada
escéptica la cuestiona, de dañar la credibilidad de la organización de
ingeniería para afirmaciones futuras. Resuelve la tensión invirtiendo en
la versión más difícil y honesta: una cadena causal documentada con
factores de confusión reconocidos sigue siendo una historia convincente, y
tiene la ventaja decisiva de ser una que sobrevive al escrutinio.

## Preguntas para debatir con tu equipo

1. **Para nuestra afirmación más reciente de que un cambio de ingeniería
   mejoró un resultado de negocio, ¿podríamos documentar la cadena causal
   completa, o presentamos un salto directo de uno a otro?** Elige una
   afirmación real y reciente e intenta rellenar cada eslabón
   explícitamente; las brechas en la cadena vale la pena nombrarlas con
   honestidad.

2. **¿Qué factores de confusión consideramos, y descartamos, antes de hacer
   esa afirmación?** Si la respuesta honesta es "en realidad no
   comprobamos", esa es una brecha que vale la pena cerrar antes de que se
   haga la próxima afirmación de este tipo ante una audiencia escéptica.

3. **Para nuestro trabajo del sector público u orientado a una misión,
   ¿rastreamos el resultado ciudadano o de beneficiario equivalente con el
   mismo rigor que una organización del sector privado aplica a los
   ingresos?** Si tu organización recurre por defecto a métricas solo de
   entrega porque son más fáciles, debate qué se necesitaría para construir
   en su lugar la métrica de resultado más difícil.

4. **¿Qué señal cualitativa, entrevistas con clientes, temas de soporte,
   podría explicar un movimiento reciente en una métrica de resultado
   cuantitativa que el número por sí solo no explica?** Busca un caso
   específico donde la evidencia cualitativa añadiría valor explicativo
   real a una tendencia cuantitativa que ya has observado.

5. **Cuando presentamos a partes interesadas no técnicas, ¿empezamos con la
   métrica de resultado en su vocabulario, o con una métrica de ingeniería
   que tienen que traducir ellos mismos?** Revisa una presentación reciente
   y comprueba cuál fue primero y cuál se enmarcó como el titular.

6. **¿Alguna vez nos han cuestionado sobre una afirmación de resultado y
   descubrimos que no podíamos defenderla bajo escrutinio?** Si esto ha
   ocurrido, debate qué evidencia habría hecho defendible la afirmación, y
   aplica esa lección hacia adelante a cómo se construyen y documentan las
   afirmaciones futuras.

## Enfoque sectorial

**Startup.** La atribución de resultados suele ser más clara a esta
escala, ya que una empresa pequeña puede rastrear más directamente una
funcionalidad específica hasta un movimiento métrico específico con menos
complejidad organizacional diluyendo la conexión. Aun así, resiste la
tentación de afirmar causalidad directa sin al menos considerar
brevemente factores de confusión obvios como la estacionalidad o un
impulso de marketing concurrente.

**Pequeña empresa.** Concéntrate en cualquier métrica de resultado que
refleje más directamente la supervivencia y el crecimiento, ingresos,
clientes recurrentes, reducción de costes, y conecta el trabajo de
ingeniería con ella mediante un razonamiento cualitativo simple y honesto
en lugar de un análisis estadístico sofisticado que probablemente te
falte capacidad para realizar con rigor.

**Empresa.** Construir la cadena causal documentada desde las métricas de
ingeniería hasta los resultados de negocio es genuinamente difícil a esta
escala, dada la complejidad organizacional y los muchos factores de
confusión, pero también es donde la inversión más rinde, ya que la
credibilidad de la ingeniería en las conversaciones de asignación de
capital depende directamente de este tipo de evidencia defendible.

**Gobierno.** Las métricas de resultado ciudadano y de misión son cada vez
más lo que esperan los órganos de supervisión, y un programa que solo
puede reportar métricas de entrega (funcionalidades entregadas, dentro del
plazo) invita exactamente al escepticismo que este capítulo está
construido para ayudarte a anticipar. Invierte en rastrear explícitamente
los resultados ciudadanos, incluso donde sean más difíciles de medir que
un simple recuento de entrega, ya que esa inversión protege directamente
la financiación y la credibilidad futuras.

## Ejemplos

**Empresa.** El liderazgo de ingeniería de una empresa de software como
servicio quería justificar la inversión continuada en trabajo de
fiabilidad de plataforma ante un equipo de finanzas escéptico centrado en
la velocidad de funcionalidades. En lugar de afirmar causalidad directa
desde las mejoras de fiabilidad hasta los ingresos, el equipo construyó
una cadena documentada: la inversión en fiabilidad redujo las incidencias
de indisponibilidad reportados por los clientes, las incidencias de
indisponibilidad se correlacionaron fuertemente con un riesgo elevado de
abandono en los treinta días siguientes según el propio modelo de abandono
de la empresa, y la cohorte de clientes que experimentó menos incidencias
después de la inversión mostró un abandono mesurablemente menor que una
cohorte comparable previa a la inversión, con la estacionalidad y los
cambios de precios explícitamente comprobados y descartados como factores
de confusión. Esta cadena cuidadosamente documentada y honestamente
matizada resultó más persuasiva para el equipo de finanzas escéptico que
una afirmación de causalidad directa más amplia del año anterior.

**Gobierno.** Un programa nacional de identidad digital necesitaba
demostrar valor a un comité legislativo escéptico sobre el coste
continuado del programa. En lugar de reportar métricas de entrega (módulos
entregados, dentro del plazo), el programa reportó métricas de resultado
ciudadano directamente: el tiempo mediano para completar una verificación
de identidad cayó de varios días a menos de diez minutos, y la tasa de
finalización de autoservicio, sin requerir una visita presencial a una
oficina, aumentó sustancialmente. Estas métricas de resultado, combinadas
con testimonios cualitativos de ciudadanos que habían usado el servicio,
resultaron mucho más persuasivas para el comité que el reporte centrado en
la entrega que el programa había usado en ciclos presupuestarios
anteriores, y respaldaron directamente la aprobación de financiación
continuada.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una medición rigurosa y honesta de los resultados de
clientes y negocio es la credibilidad de la ingeniería en las
conversaciones estratégicas: una organización que puede conectar
defendiblemente su trabajo con resultados reales, con una honestidad
apropiada sobre los límites de atribución, gana una posición más fuerte en
las futuras decisiones de inversión que una que exagera su caso (y es
descubierta) o evita por completo las afirmaciones de resultado (y parece
un centro de coste sin valor de negocio demostrable).

El coste total de propiedad es el esfuerzo analítico de construir y
documentar cadenas causales, comprobar factores de confusión, y combinar
evidencia cuantitativa con cualitativa, lo cual es genuinamente más
trabajo que una simple afirmación de correlación sin respaldo. Esa
inversión vale la pena hacerla precisamente porque la alternativa, una
afirmación exagerada que después fallo bajo escrutinio, cuesta mucho más
en credibilidad a largo plazo de lo que cuesta el rigor adicional por
adelantado.

## Antipatrones y errores comunes

- **Afirmar causalidad directa sin comprobar factores de confusión:**
  exagera la certeza y arriesga daño a la credibilidad si se cuestiona.
- **Presentar las métricas de ingeniería y de resultado una al lado de la
  otra sin una cadena causal documentada:** invita a la audiencia a
  inferir una conexión que en realidad puede no sostenerse.
- **Recurrir por defecto a métricas solo de entrega para el trabajo del
  sector público u orientado a una misión porque son más fáciles de
  medir:** no logra demostrar los resultados que realmente le importan a
  las partes interesadas.
- **Tratar los datos de resultado cuantitativos como inherentemente más
  autorizados que la evidencia cualitativa:** pierde contexto y poder
  explicativo que los números por sí solos no pueden proporcionar.
- **Presentar a partes interesadas no técnicas en vocabulario de
  ingeniería en lugar de vocabulario de resultado:** debilita el poder
  persuasivo de un caso genuinamente sólido.
- **Evitar por completo las afirmaciones de resultado para eludir la
  dificultad de atribución:** deja el valor de negocio real de la
  ingeniería sin demostrar y sin apreciar.

## Modelo de madurez

- **Nivel 1, Iniciar:** La ingeniería solo reporta métricas de entrega y
  actividad; no se intenta ninguna conexión con resultados de negocio o
  ciudadanos.
- **Nivel 2, Desarrollar:** Se hacen algunas afirmaciones de resultado,
  pero sin una cadena causal documentada ni consideración de factores de
  confusión.
- **Nivel 3, Estandarizar:** Las afirmaciones de resultado se construyen
  sobre cadenas causales documentadas de múltiples eslabones con factores
  de confusión considerados explícitamente, en toda la organización.
- **Nivel 4, Gestionar:** La evidencia de resultado cuantitativa y
  cualitativa se combina sistemáticamente, y los datos de resultado se
  presentan de manera consistente en el vocabulario de las partes
  interesadas.
- **Nivel 5, Orquestar:** La ingeniería tiene un historial demostrado y
  confiable de afirmaciones de resultado defendibles que han sobrevivido
  al escrutinio, y los datos de resultado informan directa y
  rutinariamente las decisiones de inversión estratégica al más alto nivel
  de la organización.

## Ideas para el debate

1. ¿Cuál es nuestra evidencia actual más sólida que conecta el trabajo de ingeniería con un resultado real de negocio o ciudadano?
2. ¿Qué factor de confusión nunca hemos comprobado realmente antes de hacer una afirmación de resultado?
3. ¿Rastreamos los resultados ciudadanos o de misión con el mismo rigor que los financieros, si nos aplica?
4. ¿Qué evidencia cualitativa fortalecería nuestra mejor historia cuantitativa de resultado actual?
5. ¿Cómo cambiaría nuestra última presentación importante a partes interesadas si empezáramos con resultados en lugar de con métricas de entrega?

## Conclusiones clave

- Los resultados **rara vez son atribuibles a la ingeniería por sí
  sola**; usa evidencia convergente y un lenguaje de correlación honesto,
  no afirmaciones falsas de causalidad exclusiva.
- Construye una **cadena causal explícita y documentada** desde las
  métricas de ingeniería hasta los resultados de negocio, comprobando los
  factores de confusión en cada eslabón.
- Rastrea los **resultados ciudadanos y de misión** para el trabajo del
  sector público y orientado a una misión con el mismo rigor que las
  organizaciones privadas aplican a los ingresos.
- **Combina la evidencia cuantitativa y cualitativa**; los números por sí
  solos a menudo pasan por alto el contexto que explica por qué se movió
  un resultado.
- Presenta los datos de resultado en el **propio vocabulario de la
  audiencia**, empezando con los resultados, no con las métricas de
  ingeniería, para las partes interesadas no técnicas.

## Referencias y lecturas adicionales

- *Continuous Discovery Habits*, de Teresa Torres (conectar las decisiones
  de producto e ingeniería con la evidencia de resultados de clientes).
- *Lean Analytics*, de Alistair Croll y Benjamin Yoskovitz (métricas de
  resultado y el enfoque de la única métrica que importa).
- *How to Measure Anything*, de Douglas W. Hubbard (cuantificar el valor
  de negocio y manejar la incertidumbre de atribución con honestidad).
- Orientación de la Oficina de Rendición de Cuentas del Gobierno de
  Estados Unidos (GAO) sobre la medición del rendimiento y la Ley de
  Modernización GPRA: estándares de reporte del sector público basados en
  resultados.
