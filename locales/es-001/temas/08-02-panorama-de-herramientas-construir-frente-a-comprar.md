# 8.2 Panorama de herramientas: construir frente a comprar

## Visión general y motivación

Cada organización que implementa la orientación de este libro eventualmente
enfrenta una decisión de infraestructura práctica: construir herramientas
de métricas internamente, comprar una plataforma comercial de analítica de
ingeniería, o, lo más común en la práctica, alguna combinación de ambas.
Este capítulo trata esa decisión con el mismo rigor que aplica el capítulo
5.5 a cualquier otra inversión de ingeniería: un análisis honesto de coste
y beneficio específico para la escala de tu organización, las fuentes de
datos existentes, y las métricas específicas de este libro que realmente
pretendes rastrear, en lugar de una respuesta por defecto que se aplica de
manera uniforme sin importar el contexto.

El mercado comercial de herramientas de analítica de ingeniería ha
madurado considerablemente, y muchas plataformas ahora ofrecen una
instrumentación sólida y en gran medida automatizada para las métricas DORA
(parte 2), los datos de solicitudes de incorporación de cambios y revisión
(capítulo 2.9), y, cada vez más, la infraestructura de encuestas de
experiencia del desarrollador (capítulo 3.7). Esta madurez ha desplazado el
cálculo para muchas organizaciones hacia comprar al menos la capa
fundacional, pero no ha eliminado las ventajas genuinas de la opción de
construir para necesidades específicas y personalizadas, particularmente
en torno a la telemetría de resultados que argumenta el capítulo 7.4 que
ahora es el centro necesario de un programa de métricas, que
frecuentemente es la categoría de medición menos estandarizada y más
específica de la organización que cubre este libro.

Para los equipos grandes, esta decisión tiene consecuencias reales y
continuas de presupuesto y capacidad de ingeniería. Las organizaciones
empresariales a menudo necesitan integrar herramientas de métricas a
través de un panorama genuinamente heterogéneo de sistemas heredados y
modernos, lo que moldea significativamente el cálculo de construir frente
a comprar; las organizaciones gubernamentales frecuentemente enfrentan
restricciones de contratación y requisitos de soberanía de datos o
seguridad que afectan materialmente qué opciones comerciales son siquiera
viables, a veces inclinando la decisión hacia construir o hacia un
conjunto específico y verificado de proveedores sin importar lo que
sugiriera por sí solo un análisis puro de coste y beneficio.

## Principios clave

- **Esto rara vez es una decisión de todo o nada.** La mayoría de los
  programas de métricas maduros combinan herramientas compradas para
  métricas bien estandarizadas con herramientas construidas para
  telemetría de resultados específica de la organización.
- **Compra para métricas bien estandarizadas y ampliamente necesarias;
  construye para las genuinamente específicas de la organización.** Las
  métricas DORA y la analítica de solicitudes de incorporación de cambios
  son territorio de producto básico; tu correlación de resultados de
  negocio específica (capítulo 5.3) normalmente no lo es.
- **La propiedad y portabilidad de los datos importan tanto como la
  comparación de funcionalidades.** Una herramienta que atrapa tus datos de
  métricas es un riesgo duradero, no solo un inconveniente.
- **El coste de integración frecuentemente se subestima** en un análisis
  de construir frente a comprar, para ambas opciones.
- **Las restricciones de contratación, seguridad, y soberanía de datos
  pueden anular un cálculo puro de coste y beneficio**, particularmente
  para las organizaciones gubernamentales.

## Recomendaciones

### Compra para la capa de producto básico: DORA, revisión, e infraestructura de encuestas

Para las familias de métricas con herramientas comerciales maduras y
ampliamente disponibles, la instrumentación de métricas DORA (parte 2), la
analítica de solicitudes de incorporación de cambios y revisión de código
(capítulo 2.9), y las plataformas de encuestas de experiencia del
desarrollador (capítulo 3.7), comprar normalmente es la elección económica
mejor para la mayoría de las organizaciones por debajo de cierta escala,
ya que construir infraestructura equivalente duplica el esfuerzo de
ingeniería en el que muchos proveedores ya han invertido intensamente, con
una diferenciación genuina limitada disponible al construir tu propia
versión.

### Construye para la telemetría de resultados genuinamente específica de la organización

Para las métricas de resultado que argumenta el capítulo 7.4 que deberían
ser el centro de gravedad de tu programa de métricas, la correlación de
resultados de negocio (capítulo 5.3), la adopción de funcionalidades
vinculada a tu producto específico (capítulo 5.2), la economía unitaria
vinculada a tu estructura de coste específica (capítulo 5.4), las
herramientas comerciales son mucho menos estandarizadas y a menudo no
pueden capturar la lógica de negocio y el modelo de datos específicos de
tu organización sin una personalización extensa y costosa que puede
terminar costando más que construir la capacidad equivalente internamente
con control total sobre el resultado.

### Evalúa la propiedad y portabilidad de los datos antes de comprometerte con un proveedor

Antes de firmar un contrato comercial, confirma que puedes exportar todos
tus datos históricos de métricas en un formato usable y estándar, y
entiende qué le ocurre a esos datos y su historial si cambias de
proveedor o descontinúas el servicio. Una relación con un proveedor que se
vuelve difícil de abandonar debido a la [dependencia de un proveedor](https://en.wikipedia.org/wiki/Vendor_lock-in)
es un riesgo organizacional duradero, no meramente un inconveniente, y
esta evaluación merece la misma seriedad que cualquier otro compromiso de
infraestructura significativo y plurianual.

### Presupuesta de manera realista el coste de integración en ambos lados de la decisión

Ya sea construyendo o comprando, el coste de integración, conectar la
herramienta a tu control de versiones real, integración continua y
despliegue continuo, rastreo de incidentes, y sistemas de negocio,
frecuentemente se subestima en la planificación inicial de cualquiera de
los dos caminos. Presupuesta explícitamente este esfuerzo de integración
como una partida distinta y significativa en tu análisis de construir
frente a comprar, en lugar de asumir que una herramienta comercial
funcionará lista para usar con una configuración mínima, o que el coste de
integración de una solución desarrollada internamente es una adición
menor a su coste de desarrollo.

### Contabiliza las restricciones de contratación, seguridad, y soberanía explícita y tempranamente

Para las organizaciones gubernamentales y empresariales reguladas, los
requisitos de soberanía de datos, las necesidades de certificación de
seguridad, y los procesos de contratación pueden estrechar o eliminar
materialmente ciertas opciones comerciales sin importar la calidad de sus
funcionalidades, a veces inclinando la decisión hacia construir o hacia un
conjunto más pequeño de proveedores específicamente verificados. Identifica
estas restricciones explícita y tempranamente en el proceso de
evaluación, en lugar de descubrirlas solo después de que se haya dedicado
un esfuerzo de evaluación significativo a una opción que resulta ser
inviable por razones no relacionadas con su capacidad real.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Comprar herramientas comerciales | Rápido de desplegar, conjunto de funcionalidades maduro, mantenido por el proveedor | Menos personalizable para métricas de resultado específicas de la organización; potencial dependencia del proveedor |
| Construir herramientas internas | Totalmente personalizadas, propiedad y control total de los datos | Inversión de ingeniería significativa y continua; duplica el esfuerzo para métricas de producto básico |
| Híbrido: comprar la capa de producto básico, construir la capa de resultado | Equilibra la eficiencia de coste con una personalización genuina donde más importa | Requiere trabajo de integración para conectar de manera coherente los componentes comprados y construidos |
| Comprarlo todo, incluida la telemetría de resultados, mediante una personalización extensa del proveedor | Una única relación con proveedor, potencialmente contratación más simple | Puede volverse tan costoso como construir, con menos control final sobre el resultado |

La tensión central es **necesidad de personalización frente a coste de
desarrollo**. Las métricas que más se benefician de la personalización, la
telemetría de resultados vinculada específicamente a tu negocio, también
son las más costosas de construir bien; las métricas que son más baratas
de comprar, la analítica de DORA y revisión, también son aquellas donde la
personalización genuina importa menos. Resuelve la tensión emparejando la
decisión directamente con este patrón: compra donde la estandarización te
sirve bien, construye donde tu contexto específico genuinamente lo
requiere, y presupuesta el coste de integración de manera realista en
ambos lados de esa división.

## Preguntas para debatir con tu equipo

1. **Para cada familia de métricas que cubre este libro, ¿genuinamente nos
   beneficiaríamos de la personalización, o una herramienta comercial
   estandarizada nos serviría igual de bien?** Repasa explícitamente las
   partes 2 a 6 y clasifica cada familia de métricas en una columna de
   comprar o construir basándote en esta prueba específica.

2. **¿Hemos evaluado las opciones de exportación y portabilidad de datos de
   nuestro proveedor actual o prospectivo, o estamos asumiendo que
   podríamos irnos fácilmente si lo necesitáramos?** Comprueba esto
   directamente en lugar de asumirlo; la dependencia de datos a menudo se
   descubre solo cuando una organización realmente intenta cambiar.

3. **¿Nuestro análisis original de construir frente a comprar contabilizó
   de manera realista el coste de integración, o se enfocó principalmente
   en las tarifas de licencia frente a las horas de desarrollo?** Revisa
   una decisión de herramientas reciente y comprueba si el coste de
   integración se estimó genuinamente o se subestimó significativamente.

4. **¿Enfrentamos restricciones de contratación, seguridad, o soberanía
   de datos que eliminarían ciertas opciones comerciales sin importar la
   calidad de sus funcionalidades?** Identifica estas restricciones
   explícitamente antes, no después, de invertir un esfuerzo de
   evaluación significativo en opciones que puedan resultar inviables.

5. **¿Nuestro panorama de herramientas actual es un híbrido deliberado,
   que empareja construir y comprar donde cada uno tiene sentido, o se
   acumuló mediante decisiones improvisadas e individualmente razonables
   con el tiempo?** Sé honesto sobre qué patrón realmente describe tu
   situación actual.

6. **¿Qué nos costaría, en esfuerzo y riesgo, cambiar de proveedor de
   herramientas de métricas actual hoy si lo necesitáramos?** Esta
   pregunta concreta pone a prueba tu exposición real actual al riesgo de
   dependencia de datos, más allá de lo que nominalmente prometan los
   términos del contrato del proveedor.

## Enfoque sectorial

**Startup.** Compra herramientas de producto básico por defecto a esta
escala; construir infraestructura de métricas personalizada rara vez es
un buen uso de la escasa capacidad de ingeniería temprana cuando existen
opciones comerciales maduras y económicas específicamente para las
métricas DORA y de revisión. Reserva cualquier esfuerzo de construcción
para la única métrica de resultado (capítulo 5.3) que más directamente
refleje el valor central de tu producto.

**Pequeña empresa.** La mayoría de las opciones de herramientas
comerciales escalan razonablemente bien hacia abajo y tienen precios
accesibles para organizaciones más pequeñas; comprar la capa de producto
básico casi siempre es la elección correcta, y construir algo
personalizado rara vez se justifica hasta que tu organización haya
crecido considerablemente y desarrollado necesidades genuinamente
específicas.

**Empresa.** El enfoque híbrido que recomienda este capítulo se gana su
complejidad aquí: compra la capa de producto básico a escala (a menudo
con un apalancamiento de negociación significativo para términos
favorables), e invierte deliberadamente en construir la capa de
telemetría de resultados específica de la organización, ya que la
complejidad de tu lógica de negocio y modelo de datos a esta escala
normalmente supera lo que las herramientas comerciales genéricas pueden
acomodar sin una personalización extensa y costosa.

**Gobierno.** Los procesos de contratación, los requisitos de
certificación de seguridad, y las restricciones de soberanía de datos
frecuentemente dominan esta decisión más de lo que sugeriría una
comparación pura de funcionalidades o coste. Involucra a las partes
interesadas de contratación y seguridad temprano en el proceso de
evaluación, y prepárate para que la opción de construir sea genuinamente
más atractiva aquí que en un contexto comparable del sector privado,
específicamente por estas restricciones y no porque construir sea
inherentemente mejor.

## Ejemplos

**Empresa.** Una empresa de software inicialmente intentó construir una
plataforma de métricas totalmente personalizada que cubriera cada familia
de métricas de la parte 2 a la parte 6, un esfuerzo plurianual que
consumió una capacidad de ingeniería significativa y aun así se quedó
rezagado frente a las ofertas comerciales maduras específicamente para
las métricas DORA y de revisión estandarizadas. Una estrategia revisada
adoptó una plataforma comercial para estas métricas de producto básico,
liberando al equipo de plataforma interno para enfocarse exclusivamente
en construir la correlación de resultados de negocio y la telemetría de
economía unitaria (capítulos 5.3, 5.4) genuinamente específicas del
modelo de negocio de la empresa, que ninguna herramienta comercial podría
haber proporcionado lista para usar. Este enfoque híbrido entregó un
programa de métricas más completo y genuinamente más útil en un solo año
del que la estrategia de construir todo había logrado después de dos.

**Gobierno.** La evaluación inicial de plataformas comerciales de
analítica de ingeniería de una agencia federal encontró que ninguno de
los proveedores disponibles podía cumplir con los requisitos de soberanía
de datos de la agencia, que exigían que todos los datos de métricas de
ingeniería permanecieran dentro de centros de datos gubernamentales
específicos y certificados. En lugar de abandonar por completo la opción
de comprar, la agencia identificó un subconjunto más pequeño de
proveedores que ofrecían opciones de despliegue en nube soberana
certificadas por el gobierno, a un modesto sobreprecio sobre los precios
comerciales estándar, y desplegó con éxito un programa híbrido:
herramientas compradas para la capa de métricas de producto básico dentro
del límite de soberanía requerido, y herramientas internas construidas
para las necesidades específicas de telemetría de resultados ciudadanos
de la agencia, que ningún proveedor comercial disponible abordaba sin
importar las consideraciones de soberanía.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una estrategia híbrida deliberada de construir frente a
comprar es evitar ambos modos de fallo que ilustran los ejemplos de este
capítulo: la inversión de ingeniería desperdiciada y plurianual de
construir capacidad de producto básico que ya existe barata en el
mercado, y la frustración y el eventual coste de personalización de
forzar una necesidad genuinamente específica de la organización en una
herramienta comercial que no encaja bien. El ejemplo empresarial anterior
lo muestra de manera concreta: el enfoque híbrido entregó más valor
genuino en un año del que la estrategia de construir todo había logrado
en dos.

El coste total de propiedad para cualquier camino incluye el coste de
integración, a menudo subestimado, y, específicamente para las
herramientas compradas, el coste de riesgo continuo de una potencial
dependencia del proveedor a menos que se confirme y proteja
contractualmente la portabilidad de datos por adelantado. Presupuestar
ambos de manera realista, en lugar de enfocarse estrechamente solo en las
tarifas de licencia o las horas de desarrollo, produce una imagen de
coste total mucho más precisa para cualquiera de las dos opciones.

## Antipatrones y errores comunes

- **Construir herramientas personalizadas para métricas de producto
  básico bien estandarizadas:** duplica el esfuerzo de ingeniería en el
  que muchos proveedores ya han invertido intensamente.
- **Comprar herramientas comerciales para telemetría de resultados
  genuinamente específica de la organización sin comprobar primero el
  ajuste:** arriesga una personalización costosa y mal ajustada o una
  necesidad no satisfecha.
- **Sin evaluación de la exportación y portabilidad de datos antes de
  comprometerse con un proveedor:** arriesga una dependencia duradera y
  costosa descubierta solo al intentar irse.
- **Subestimar el coste de integración en cualquiera de los dos lados de
  la decisión:** produce una comparación de coste total inexacta y
  cronogramas poco realistas.
- **Ignorar las restricciones de contratación, seguridad, o soberanía
  hasta tarde en el proceso de evaluación:** desperdicia el esfuerzo de
  evaluación en opciones que resultan ser inviables por razones no
  relacionadas con la capacidad.
- **Tratar esto como una única decisión de todo o nada:** pasa por alto el
  enfoque híbrido que mejor se ajusta a las necesidades reales y mixtas
  de la mayoría de las organizaciones.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las decisiones de herramientas se toman de manera
  improvisada, sin un análisis deliberado de construir frente a comprar
  ni consideración de la portabilidad de datos.
- **Nivel 2, Desarrollar:** Ocurre cierto análisis, pero el coste de
  integración se subestima rutinariamente y el enfoque híbrido no se
  considera deliberadamente.
- **Nivel 3, Estandarizar:** Una estrategia híbrida deliberada de
  construir frente a comprar empareja de manera consistente las métricas
  de producto básico con herramientas compradas y la telemetría de
  resultados específica de la organización con herramientas construidas.
- **Nivel 4, Gestionar:** La portabilidad de datos se confirma y protege
  contractualmente para todas las herramientas compradas, y las
  restricciones de contratación, seguridad, y soberanía se contabilizan
  explícita y tempranamente.
- **Nivel 5, Orquestar:** El panorama de herramientas de la organización
  refleja una estrategia híbrida madura y deliberada, revisada
  regularmente a medida que evolucionan las ofertas comerciales y las
  necesidades organizacionales, con valor demostrado tanto de los
  componentes comprados como de los construidos.

## Ideas para el debate

1. ¿Cuál de nuestras métricas actuales se beneficiaría más de una personalización que actualmente no estamos obteniendo?
2. ¿Hemos confirmado que podríamos exportar todos nuestros datos históricos de métricas si necesitáramos cambiar de proveedor?
3. ¿Nuestra última decisión de herramientas contabilizó de manera realista el coste de integración?
4. ¿Qué restricción de contratación, seguridad, o soberanía podríamos estar subestimando?
5. ¿Cómo sería una estrategia híbrida deliberada para nuestro conjunto específico de métricas?

## Conclusiones clave

- Esto rara vez es todo o nada; la mayoría de los programas maduros
  **combinan herramientas compradas para métricas de producto básico con
  herramientas construidas para telemetría de resultados específica de la
  organización**.
- **Compra para métricas estandarizadas** (DORA, analítica de revisión,
  infraestructura de encuestas); **construye para la medición de
  resultados genuinamente específica de la organización**.
- Evalúa la **propiedad y portabilidad de los datos** antes de
  comprometerte con un proveedor; la dependencia es un riesgo duradero,
  no solo un inconveniente.
- **Presupuesta de manera realista el coste de integración** en ambos
  lados de la decisión; frecuentemente se subestima.
- Las **restricciones de contratación, seguridad, y soberanía** pueden
  anular un cálculo puro de coste y beneficio, particularmente para las
  organizaciones gubernamentales.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (las familias de métricas a las que se
  aplica el análisis de construir frente a comprar de este capítulo).
- *Cloud FinOps*, de J.R. Storment y Mike Fuller (principios de análisis
  de coste aplicables a las decisiones de inversión en herramientas).
- El FinOps Framework de la FinOps Foundation, [finops.org](https://www.finops.org/)
  (orientación práctica sobre la evaluación y gestión de los costes de
  herramientas de nube y SaaS).
- La documentación del Programa Federal de Gestión de Riesgos y
  Autorizaciones (FedRAMP) de Estados Unidos: orientación autorizada
  sobre los requisitos de seguridad y soberanía de herramientas en la
  nube del gobierno.
