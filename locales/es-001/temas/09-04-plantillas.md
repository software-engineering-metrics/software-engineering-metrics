# 9.4 Plantillas

Plantillas de copiar y pegar para documentos recurrentes. Ejemplos
trabajados y rellenados de las dos primeras viven en
[`docs/examples/`](../ejemplos/index.md).

## Plantilla de carta de métricas

```markdown
# Carta de métricas: [nombre del equipo o conjunto de métricas]

- **Equipo:** [equipo propietario]
- **Responsable:** [persona o rol nombrado]
- **Revisado:** [cadencia, p. ej. trimestral]

## Propósito

[Una o dos frases: qué gobierna esta carta y por qué.]

## Qué rastreamos

| Métrica | Fuente de verdad | Responsable |
| --- | --- | --- |
| [métrica] | [sistema] | [responsable nombrado] |

## No-objetivos

[Declaración explícita de para qué no se usan estas métricas, p. ej.
evaluación de rendimiento individual, clasificación entre equipos sin
contexto.]

## Salvaguardas

[Para cada métrica incentivada, nombra su salvaguarda emparejada y qué
patrón de manipulación detecta.]

## Cadencia de revisión

[Cuándo y cómo se revisita esta carta; qué desencadena el retiro de una
métrica.]
```

## Plantilla de especificación de panel

```markdown
# Especificación de panel: [nombre del panel]

## Audiencia

[Para quién es este panel, y qué decisión informa. Declara explícitamente
si no es para la evaluación individual.]

## Casillas (en orden de visualización)

1. **[Nombre de la métrica]**, [ventana de tiempo], [tipo de gráfico].
   [Cualquier nota de visualización específica: reglas de ejes,
   anotaciones.]
2. ...

## Reglas de visualización

- Los ejes comienzan en cero a menos que se indique lo contrario, con la
  excepción documentada en la casilla.
- [Cualquier otra regla de honestidad específica del proyecto.]

## Cadencia de actualización

[Con qué frecuencia se actualiza cada casilla, y de qué fuente.]

## Qué excluye deliberadamente este panel

[Nombra cualquier cosa dejada fuera intencionalmente, y por qué, p. ej.
recuentos de actividad individual.]
```

## Plantilla de agenda de reunión de revisión de métricas

```markdown
# Revisión de métricas: [fecha]

## Asistentes

[Nombres y roles]

## Métricas revisadas

Para cada métrica:
- Lectura actual y tendencia
- Cualquier movimiento fuera de la variación normal (tema 1.6)
- Estado de la salvaguarda emparejada, si aplica
- Decisión que informa esta lectura, si la hay

## Nuevas métricas propuestas

[Pasa cada una por la lista de comprobación de revisión de nueva métrica,
tema 9.3.]

## Métricas consideradas para el retiro

[¿Qué métricas no han informado ninguna decisión en los últimos dos
ciclos?]

## Elementos de acción

| Elemento | Responsable | Fecha límite |
| --- | --- | --- |
| | | |
```

## Plantilla de análisis retrospectivo sin culpa

```markdown
# Análisis retrospectivo: [nombre del incidente], [fecha]

## Resumen

[Un párrafo: qué ocurrió, impacto en el usuario, duración.]

## Cronología

- Detección: [hora, cómo se detectó]
- Reconocimiento: [hora, quién respondió]
- Resolución: [hora, qué lo corrigió]

## Gravedad

[Clasificación frente a criterios documentados, tema 6.2.]

## Causa raíz

[Qué permitió que esto ocurriera, enmarcado como una pregunta de sistema,
no una individual.]

## Qué funcionó bien

[Cosas específicas que funcionaron en la respuesta.]

## Elementos de acción

| Elemento | Responsable | Fecha límite |
| --- | --- | --- |
| | | |

## Seguimiento

[Confirmación de que los elementos de acción se rastrearon hasta su
finalización, según el próximo ciclo de revisión.]
```

## Plantilla de caso de retorno de la inversión

```markdown
# Caso de ROI: [nombre de la iniciativa]

## Coste (coste total de propiedad, tema 5.5)

- Inicial: [coste de desarrollo]
- Continuo: [mantenimiento, infraestructura, soporte, por año]
- Coste de oportunidad: [qué más podría haber hecho esta capacidad]

## Beneficio (evidencia documentada, temas 5.1-5.3)

- [Beneficio 1], evidenciado por [fuente de datos]
- [Beneficio 2], evidenciado por [fuente de datos]

## Rango y suposiciones

- Caso conservador: [cifra]
- Caso optimista: [cifra]
- Suposición clave que impulsa el rango: [nómbrala]

## Factores de confusión considerados y descartados

[Qué más podría explicar el beneficio proyectado, y por qué se descartó o
se contabilizó.]

## Comprobación posterior a la finalización (rellenar después de que se complete la iniciativa)

- Resultado real: [cifra]
- Comparado con el rango proyectado: [por encima / dentro / por debajo]
- Qué nos enseña esto para la próxima estimación: [nota]
```
