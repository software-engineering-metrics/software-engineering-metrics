# Ejemplo: especificación de panel para un panel de métricas de entrega

Una especificación de panel trabajada, siguiendo el
[capítulo 8.1, Diseñar un panel de métricas de ingeniería](../temas/08-01-diseñar-un-panel-de-métricas-de-ingeniería.md).
Lo que importa es la forma: una audiencia nombrada, un número pequeño de
casillas, un estándar de visualización honesto, y una cadencia de
actualización declarada.

## Audiencia

El liderazgo de ingeniería y el equipo de plataforma, revisado en la
revisión de entrega quincenal. No pensado para la evaluación de
rendimiento individual.

## Casillas (en orden de visualización)

1. **Frecuencia de despliegue**, últimas 4 semanas, por equipo. Gráfico
   de líneas, agrupado por semana, eje que comienza en cero.
2. **Plazo de entrega para cambios**, mediana y percentil 90, últimas 4
   semanas. Gráfico de barras con ambas series mostradas, no solo la
   mediana.
3. **Tasa de fallos de cambio**, últimas 4 semanas, con la definición
   acordada del equipo de "fallo" enlazada desde la casilla.
4. **Tiempo de recuperación de despliegue fallido**, mediana, últimas 4
   semanas.
5. **Presupuesto de error restante**, trimestre actual, por servicio,
   como porcentaje.

## Reglas de visualización

- Cada gráfico de tendencia muestra al menos ocho puntos de datos, nunca
  una instantánea única.
- Los ejes comienzan en cero a menos que se documente una excepción
  declarada en la casilla.
- Los despliegues, incidentes, y festivos se anotan en la línea de
  tiempo para que un lector pueda distinguir un cambio real del ruido.
- Sin ejes duales, sin efectos 3D, sin rangos de fechas seleccionados a
  conveniencia.

## Cadencia de actualización

Las casillas provenientes del flujo (frecuencia de despliegue, plazo de
entrega) se actualizan cada hora. Las casillas provenientes de
incidentes (tasa de fallos de cambio, tiempo de recuperación) se
actualizan al cerrar el análisis retrospectivo. El panel declara su
propia hora de última actualización.

## Qué excluye deliberadamente este panel

Los recuentos de commits individuales, los recuentos de solicitudes de
incorporación de cambios individuales, y las líneas de código. Estas son
métricas de actividad con una historia bien documentada de manipulación y
de medir el esfuerzo en lugar del resultado (capítulo 3.4).
