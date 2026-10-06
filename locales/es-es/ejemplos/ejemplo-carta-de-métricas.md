# Ejemplo: carta de métricas para un equipo de plataforma de pagos

Un ejemplo trabajado de una carta de métricas, el tipo de documento de una
página que se describe en el
[tema 1.4, Gobernanza y propiedad de las métricas](../temas/01-04-gobernanza-y-propiedad-de-las-métricas.md).
Lo que importa es la forma: un propósito declarado, un no-objetivo
explícito, responsables nombrados, y una cadencia de revisión. Una carta
tan corta está pensada para leerse, no para archivarse.

- **Equipo:** Plataforma de pagos
- **Responsable:** Gerente de ingeniería de plataforma
- **Revisado:** Trimestralmente, en la revisión de plataforma

## Propósito

Esta carta gobierna las métricas que rastrea el equipo de plataforma de
pagos sobre su propia entrega y fiabilidad. Existe para que todos, dentro
y fuera del equipo, puedan ver qué se mide, por qué, y para qué no sirve.

## Qué rastreamos

| Métrica | Fuente de verdad | Responsable |
| --- | --- | --- |
| Frecuencia de despliegue | Flujo de integración y despliegue continuos | Responsable de plataforma |
| Plazo de entrega para cambios | Git más el flujo de despliegue | Responsable de plataforma |
| Tasa de fallos de cambio | Rastreador de incidencias, etiquetado por despliegue | Responsable de guardia |
| Tiempo de recuperación de despliegue fallido | Rastreador de incidencias | Responsable de guardia |
| Latencia P99 de la API (SLI) | Plataforma de observabilidad | Responsable de SRE |
| Consumo del presupuesto de error | Plataforma de observabilidad | Responsable de SRE |

## No-objetivos

Estas métricas nunca se usan, individualmente o en combinación, para
clasificar a los ingenieros, evaluar revisiones de rendimiento, o
comparar la hoja de ruta de este equipo con la de otro equipo sin
también comparar el alcance, la dotación de personal, y la madurez del
sistema. Cualquier uso fuera del propósito declarado arriba requiere la
aprobación del director de ingeniería y del propio equipo.

## Salvaguardas

Cada métrica anterior que conlleva un incentivo se empareja con una
salvaguarda. El plazo de entrega para cambios se vigila junto a la tasa
de fallos de cambio, de modo que un equipo no pueda mejorar su número de
velocidad entregando cambios más arriesgados. La frecuencia de despliegue
se vigila junto al consumo del presupuesto de error, por la misma razón.

## Cadencia de revisión

El equipo revisa esta carta cada trimestre. Una métrica que no ha
cambiado ninguna decisión en dos trimestres consecutivos es una candidata
para el retiro.
