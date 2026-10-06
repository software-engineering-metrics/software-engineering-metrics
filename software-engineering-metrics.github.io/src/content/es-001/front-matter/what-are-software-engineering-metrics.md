# ¿Qué son las métricas de ingeniería de software?

Las [métricas de ingeniería de software](https://en.wikipedia.org/wiki/Software_metric)
son medidas cuantitativas que se usan para evaluar, seguir y mejorar la
calidad, la eficiencia y el impacto de los procesos, productos y equipos de
desarrollo de software. Bien usadas, actúan como herramientas de diagnóstico
sistémico: revelan cuellos de botella operativos, justifican la reducción de
la deuda técnica y alinean la actividad de ingeniería con resultados de
negocio concretos. Mal usadas, distorsionan el comportamiento, dañan la
confianza y premian exactamente lo equivocado.

Este libro existe porque la mayoría de los equipos recurren a las métricas
antes de haber decidido *para qué* sirve una métrica. Un panel se llena de
todo lo que es fácil de contar, un equipo directivo empieza a preguntar "¿este
número sube o baja?", y en un trimestre el equipo está optimizando el número
en lugar del resultado que debía representar. Ese fallo tiene nombre, la
[ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): cuando una
medida se convierte en un objetivo, deja de ser una buena medida. Cada tema de
este libro está escrito con esa ley detrás.

## Los dos marcos fundamentales

El sector ha convergido en gran medida en dos marcos respaldados por la
investigación para medir la entrega de ingeniería y la salud del equipo.

Las **[métricas DORA](https://dora.dev/guides/dora-metrics/)** (del programa
DevOps Research and Assessment) miden el rendimiento y la estabilidad del
sistema: frecuencia de despliegue, plazo de entrega para cambios, tasa de
fallos de cambio y tiempo de recuperación de despliegues fallidos. La parte 2
de este libro cubre las cuatro en un tema de referencia dedicado, junto con el
Flow Framework que se usa para organizar con mayor amplitud las métricas de
entrega y de flujo, porque DORA mide bien la mecánica del pipeline pero no dice
nada sobre qué tipo de valor circula por él.

**El [marco SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, creado por
investigadores de Microsoft, GitHub y la Universidad de Victoria, equilibra el
rendimiento bruto con la experiencia del desarrollador en cinco dimensiones:
satisfacción y bienestar, rendimiento, actividad, comunicación y colaboración,
y eficiencia y flujo. La parte 3 lo cubre en profundidad.

Más allá de estos dos marcos, los equipos siguen métricas localizadas
agrupadas por dominio: métricas de código y calidad (parte 4), métricas de
producto y negocio (parte 5), y métricas de fiabilidad, operaciones y
seguridad (parte 6). La parte 7 aborda un cambio que ya está en marcha: las
herramientas de IA generativa han vuelto casi gratuita la producción bruta de
código, lo que significa que varias métricas en las que el sector ha confiado
durante una década ya no significan lo que solían significar.

## Para quién es

El público principal son las personas que eligen qué mide un equipo y por qué:
líderes de ingeniería, ingenieros staff y principales, equipos de plataforma y
DevOps, y responsables de programas y de producto que construyen por primera
vez un panel o un cuadro de mando de métricas, o reparan uno que ha empezado a
distorsionar el comportamiento. El público secundario es cualquier ingeniero
que quiera entender por qué su organización sigue lo que sigue, y cómo
oponerse cuando se hace un mal uso de una métrica.

## Cómo leerlo

Empieza aquí, luego lee la [introducción](introduction.md) para ver cómo está
organizado el libro, o salta directamente a la
[tabla de contenidos](table-of-contents.md). Cada tema se sostiene por sí
mismo: expone primero sus principios, da recomendaciones concretas, nombra
cómo se manipula la métrica que cubre y termina con un modelo de madurez,
preguntas para debatir y referencias. No necesitas leer el libro de principio
a fin para usarlo.
