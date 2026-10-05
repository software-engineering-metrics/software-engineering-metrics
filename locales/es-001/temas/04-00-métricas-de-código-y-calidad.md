# 4.0 Introducción a la parte 4: Métricas de código y calidad

Las partes 2 y 3 midieron cómo se mueve el trabajo y cómo les va a las
personas que lo producen. Esta parte se dirige al propio artefacto: el
código, y qué puede y qué no puede decirte una métrica sobre su calidad.
Las métricas de calidad de código tienen la historia más larga de
cualquier familia de métricas de este libro, la complejidad ciclomática se
remonta a 1976, y la historia de mal uso más larga a la par. Esta parte se
toma en serio esa historia: cada capítulo nombra una señal genuinamente
útil junto a la forma específica y bien documentada en que esa señal se
manipula en cuanto se convierte en un objetivo.

El hilo conductor que conecta estos seis capítulos es que ninguna métrica
de código individual captura la calidad por sí sola, y varias de las más
populares engañan activamente si se persiguen de forma aislada. Un
porcentaje alto de cobertura de pruebas puede coexistir con pruebas que no
verifican nada significativo. Una puntuación baja de complejidad puede
coexistir con código que es técnicamente simple pero conceptualmente
incoherente. Los capítulos de esta parte emparejan cada uno su métrica
principal con la comprobación complementaria que detecta su punto ciego
específico: complejidad con contexto de mantenibilidad, cobertura con
pruebas de mutación, cambios acumulados con análisis de puntos calientes,
análisis estático con juicio humano, y deuda técnica con remediación
priorizada en lugar de un backlog que crece sin cesar y que nadie atiende.

Para los equipos grandes, las métricas de código y calidad son lo que hace
posible gestionar una base de código demasiado grande para que una sola
persona la tenga en la cabeza. Un equipo de cinco personas puede depender
del conocimiento tácito compartido de qué partes del sistema son frágiles;
una organización de quinientos ingenieros que abarca docenas de servicios
necesita señales instrumentadas para encontrar esa fragilidad de forma
sistemática. Las organizaciones grandes y del sector público, que a menudo
cargan con bases de código medidas en décadas en lugar de años, dependen
de las métricas de esta parte para priorizar dónde hará más bien una
inversión de mantenimiento limitada.

## Capítulos de esta parte

- **4.1 Métricas de complejidad de código:** La complejidad ciclomática y
  sus parientes, qué predicen realmente, y su riesgo de manipulación bien
  documentado.
- **4.2 Cobertura de pruebas y eficacia de pruebas:** Por qué un
  porcentaje de cobertura por sí solo te dice menos de lo que parece, y
  cómo las pruebas de mutación cierran el vacío.
- **4.3 Cambios acumulados de código y análisis de puntos calientes:**
  Encontrar la pequeña fracción específica de una base de código
  responsable de una cuota desproporcionada de defectos y coste de
  mantenimiento.
- **4.4 Análisis estático y métricas de olores de código:** Señales
  automatizadas de calidad de código, su valor real, y sus límites frente
  al juicio humano.
- **4.5 Medición de la deuda técnica:** Convertir un pasivo invisible y
  discutido de manera informal en una cartera visible, priorizada y
  gestionable.
- **4.6 Métricas de documentación y conocimiento:** Medir si la
  documentación realmente ayuda, no solo si existe.

## Cómo se relacionan estos capítulos

Estos seis capítulos se construyen desde la unidad más pequeña de código
hacia afuera. El capítulo 4.1 empieza a nivel de una única función o
método; el capítulo 4.2 pregunta si las pruebas realmente verifican el
comportamiento de esa unidad; el capítulo 4.3 se aleja para encontrar qué
archivos y módulos de toda la base de código merecen atención primero; el
capítulo 4.4 añade la capa de herramientas automatizadas que escanea todo
esto de forma continua; el capítulo 4.5 convierte los hallazgos acumulados
de los cuatro anteriores en un backlog gestionado y priorizado en lugar de
una preocupación difusa y sin abordar; y el capítulo 4.6 cierra la parte
midiendo si el conocimiento necesario para mantener todo esto con
seguridad está realmente documentado y es localizable.

Esta parte se conecta directamente con las métricas de estabilidad de la
parte 2: la tasa de fallos de cambio (capítulo 2.10) es, en gran parte,
una consecuencia posterior de la calidad de código que esta parte mide
aguas arriba. También se conecta hacia adelante con las métricas de
producto de la parte 5, ya que los defectos escapados (capítulo 5.1) a
menudo se pueden rastrear precisamente hasta los puntos calientes de
complejidad y los vacíos de cobertura que esta parte está construida para
sacar a la luz antes de que lleguen siquiera a producción.
