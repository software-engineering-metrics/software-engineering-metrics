# 9.2 Referencia de definiciones y fórmulas de métricas

Cada fórmula del libro, reunida en un solo lugar. Cada entrada nombra el
tema con la discusión completa, incluyendo su riesgo de manipulación y
salvaguarda. Usa esto como una consulta rápida, no como un sustituto del
propio tema.

## Métricas de flujo (parte 2)

| Métrica | Fórmula | Tema |
| --- | --- | --- |
| Velocidad de flujo | Recuento de elementos de flujo completados por unidad de tiempo | 2.3 |
| Distribución de flujo | (Elementos completados de un tipo de elemento de flujo) / (Total de elementos completados) x 100% | 2.3 |
| Tiempo de flujo | Tiempo desde que un elemento de flujo entra en la cadena de valor hasta su entrega | 2.4 |
| Carga de flujo | Recuento de elementos de flujo actualmente activos o en espera en la cadena de valor | 2.4 |
| Ley de Little | Carga de flujo (trabajo en curso) = Tasa de llegada x Tiempo de flujo (tiempo de ciclo) | 2.4, 2.7 |
| Eficiencia de flujo | Tiempo de trabajo activo / Tiempo total transcurrido x 100% | 2.5 |
| Tiempo de ciclo | Suma de las duraciones de etapa: codificación + recogida + revisión + prueba + despliegue | 2.6 |
| Utilización | Tasa de llegada / Tasa de servicio | 2.7 |
| Porcentaje completo y correcto (%C/A) | (Unidades utilizables aguas abajo sin retrabajo) / (Total de unidades) x 100% | 2.8 |
| Rendimiento acumulado | %C/A de la etapa 1 x %C/A de la etapa 2 x ... x %C/A de la etapa N | 2.8 |
| Tiempo takt | Tiempo de trabajo disponible / Demanda del cliente durante ese período | 2.8 |
| Tiempo hasta la primera revisión | Tiempo desde que se abre una solicitud de incorporación de cambios hasta la primera respuesta sustantiva de un revisor | 2.9 |
| Frecuencia de despliegue | Recuento de despliegues exitosos a producción por unidad de tiempo | 2.10 |
| Plazo de entrega para cambios | Tiempo desde el primer commit hasta el despliegue exitoso a producción (reportar la mediana y el percentil 90) | 2.10 |
| Tasa de fallos de cambio | (Despliegues que causan un fallo) / (Total de despliegues) x 100% | 2.10 |
| Tiempo de recuperación de despliegue fallido | Tiempo desde la detección del fallo hasta la restauración genuina del servicio | 2.10 |

## Experiencia del desarrollador (parte 3)

| Métrica | Fórmula | Tema |
| --- | --- | --- |
| Tiempo de concentración | Recuento y duración de bloques ininterrumpidos de más de dos horas por semana, a partir de datos de calendario | 3.6 |
| Tasa de respuesta | (Respuestas de encuesta recibidas) / (Invitaciones de encuesta enviadas) x 100% | 3.7 |

## Código y calidad (parte 4)

| Métrica | Fórmula | Tema |
| --- | --- | --- |
| Complejidad ciclomática | Rutas independientes a través del flujo de control (aristas − nodos + 2, según McCabe) | 4.1 |
| Cobertura de pruebas | (Líneas/ramas ejecutadas por pruebas) / (Total de líneas/ramas) x 100% | 4.2 |
| Tasa de mutantes eliminados | (Mutantes eliminados por la suite de pruebas) / (Total de mutantes introducidos) x 100% | 4.2 |
| Cambios acumulados de código | Líneas añadidas + modificadas + eliminadas por archivo en una ventana de tiempo | 4.3 |
| Puntuación de punto caliente | Cambios acumulados x Complejidad, clasificado por archivo | 4.3 |
| Coste de mantenimiento de deuda | Coste continuo estimado de no corregir un elemento (trabajo relacionado más lento, riesgo de defectos elevado) | 4.5 |

## Producto y negocio (parte 5)

| Métrica | Fórmula | Tema |
| --- | --- | --- |
| Tasa de defectos escapados | (Defectos escapados ponderados por gravedad) / (Unidad de entrega o tiempo) | 5.1 |
| Adopción inicial | (Usuarios que probaron la funcionalidad al menos una vez) / (Audiencia objetivo) x 100% | 5.2 |
| Adopción retenida | (Usuarios que todavía usan la funcionalidad después de N semanas) / (Usuarios que la probaron inicialmente) x 100% | 5.2 |
| Coste unitario | Coste total (personas + infraestructura + herramientas) / Unidad significativa (cliente, transacción) | 5.4 |
| ROI | (Beneficio total − Coste total de propiedad) / Coste total de propiedad, presentado como un rango | 5.5 |

## Fiabilidad, operaciones, y seguridad (parte 6)

| Métrica | Fórmula | Tema |
| --- | --- | --- |
| Presupuesto de error | (1 − objetivo del SLO) x Ventana de tiempo (p. ej., 0,1% de 30 días ≈ 43 minutos) | 6.1 |
| Tasa de consumo del presupuesto de error | Presupuesto de error consumido / Presupuesto de error asignado, en una ventana dada | 6.1 |
| MTTD | Tiempo desde el inicio de la incidencia hasta la detección | 6.2 |
| MTTA | Tiempo desde la notificación de la incidencia hasta el reconocimiento | 6.2 |
| MTTR (incidencia) | Tiempo desde el reconocimiento hasta la restauración genuina del servicio | 6.2 |
| Distribución de avisos de guardia | Avisos recibidos por individuo, en una ventana móvil (no el promedio del equipo) | 6.3 |
| Tiempo hasta la remediación de vulnerabilidad | Tiempo desde el descubrimiento hasta la remediación genuina, rastreado por gravedad | 6.4 |

## Notas sobre el uso de estas fórmulas

- **Empareja siempre una fórmula de velocidad o producción con su
  salvaguarda** (tema 1.2): la tasa de fallos de cambio con la
  frecuencia de despliegue y el plazo de entrega; la tasa de defectos
  escapados con la velocidad de entrega; el consumo del presupuesto de
  error con la actividad de despliegue.
- **Usa medianas y percentiles, no promedios, para las fórmulas basadas en
  tiempo** (tema 1.6) a menos que una fórmula exija explícitamente una
  media.
- **Cada fórmula necesita un sistema de origen y un método de recopilación
  documentados** (tema 1.5) junto a su definición matemática; dos
  equipos que calculan la misma fórmula a partir de fuentes distintas no
  producirán números comparables.
- **La ponderación por gravedad no se muestra explícitamente en cada
  fórmula anterior** pero se aplica dondequiera que aparezca "ponderado
  por gravedad"; consulta el tema relevante para el esquema de
  clasificación completo.
