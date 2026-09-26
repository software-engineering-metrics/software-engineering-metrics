# 7.0 Introducción a la parte 7: Métricas en la era de la IA

Cada métrica de este libro hasta ahora se construyó para un mundo en el
que escribir código era el recurso escaso y laborioso. Las herramientas de
IA generativa han cambiado esa premisa más rápido de lo que han logrado
alcanzar las métricas de la mayoría de las organizaciones. Cuando una
herramienta puede producir una solicitud de incorporación de cambios de
aspecto plausible en segundos, varias métricas que cubre este libro en
partes anteriores, los recuentos de actividad de la manera más directa
(capítulo 3.4), y en una medida real la frecuencia de despliegue bruta
(capítulo 2.10) e incluso la cobertura de pruebas (capítulo 4.2) si se
persigue de manera descuidada, dejan de medir lo que solían medir. Esta
parte existe porque un programa de métricas que no reconoce explícitamente
este cambio arriesga reportar con confianza números que silenciosamente se
han vuelto sin sentido, o peor, activamente contraproducentes.

Los cuatro capítulos de esta parte trazan un arco deliberado. El capítulo
7.1 nombra el cambio directamente y explica por qué es un cambio de
paradigma, no un ajuste incremental. El capítulo 7.2 cubre cómo medir
realmente si el desarrollo asistido por IA está ayudando, usando la
disciplina de resultados sobre producción que estableció el capítulo 1.3
desde el mismo principio de este libro. El capítulo 7.3 nombra los riesgos
nuevos y específicos que introduce este cambio: métricas que se inflan sin
un valor correspondiente, y una dilución de calidad que supera la
capacidad actual de la industria para detectarla. El capítulo 7.4 cierra
la parte con la respuesta de este libro a todo el cambio: un giro
deliberado hacia la telemetría de resultados como las métricas que más
importan, precisamente porque el volumen de producción, argumenta esta
parte a lo largo de todo el texto, nunca fue lo correcto que optimizar en
primer lugar, y la IA generativa simplemente ha hecho que esa verdad sea
imposible de ignorar por más tiempo.

Para los equipos grandes, esta parte es urgente en lugar de especulativa.
Las organizaciones empresariales que adoptan asistentes de codificación de
IA a escala necesitan saber rápidamente si sus métricas existentes
todavía significan lo que creen que significan; las organizaciones
gubernamentales, que a menudo avanzan con más cautela en la adopción de
IA pero enfrentan el mismo cambio de herramientas subyacente en la
industria más amplia de la que reclutan y frente a la que se comparan,
necesitan la orientación de esta parte para interpretar correctamente los
puntos de referencia de la industria a medida que esos propios puntos de
referencia cambian bajo la misma presión.

## Capítulos de esta parte

- **7.1 El cambio de paradigma de la IA generativa:** Por qué esto es un
  cambio fundamental en lo que miden varias métricas existentes, no solo
  una nueva herramienta que añadir a la caja de herramientas.
- **7.2 Medir el desarrollo de software asistido por IA:** Cómo medir si
  la asistencia de IA realmente está ayudando, usando datos de resultado
  en lugar de volumen de producción.
- **7.3 Riesgos de inflación de métricas y dilución de calidad:** Los
  riesgos nuevos y específicos de manipulación y calidad que introduce este
  cambio, y cómo protegerse contra ellos.
- **7.4 La telemetría de resultados como la nueva estrella polar:** La
  respuesta de este libro a todo el cambio: un giro deliberado y permanente
  hacia las métricas de resultado a medida que la producción se abarata.

## Cómo se relacionan estos capítulos

El capítulo 7.1 establece por qué existe esta parte en absoluto; el
capítulo 7.2 da la orientación práctica de medición que exige el cambio;
el capítulo 7.3 nombra los modos de fallo específicos frente a los que
una organización necesita protegerse a medida que adopta el desarrollo
asistido por IA; y el capítulo 7.4 generaliza la lección en un principio
permanente que sobrevive a cualquier herramienta o proveedor específico.
Esta parte es menos una familia de métricas independiente, de la manera
en que las partes 2 a 6 cubren cada una un dominio distinto, y más una
lente aplicada retrospectivamente a todo el libro: la actividad, la
producción, e incluso algunas métricas de resultado de cada capítulo
anterior necesitan reexaminarse a través de las preguntas de esta parte a
medida que el desarrollo asistido por IA se convierte en práctica
estándar, no excepcional.

Esta parte se conecta de manera más directa con el principio de
resultados sobre producción del capítulo 1.3 y la advertencia contra las
métricas de actividad del capítulo 3.4, ambos que esta parte trata como
correctos desde siempre, ahora demostrados urgentemente así por un cambio
tecnológico que hace que su opuesto, medir por volumen, sea activamente
peligroso en lugar de meramente subóptimo. También prepara el terreno
para la orientación práctica de la parte 8 sobre la construcción de un
programa de métricas, ya que un panel diseñado antes de este cambio
necesita una reconsideración deliberada, no solo un ajuste incremental, a
la luz de lo que cubre esta parte.
