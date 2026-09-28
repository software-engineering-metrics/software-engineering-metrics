# 1.6 Alfabetización estadística para métricas de ingeniería

## Visión general y motivación

No necesitas un título en estadística para gestionar bien un programa de
métricas, pero sí necesitas evitar un pequeño número de errores concretos y
comunes que hacen que métricas por lo demás bien gobernadas y bien
instrumentadas resulten activamente engañosas. Un equipo puede hacerlo todo
bien, nombrar una decisión clara, evitar la ley de Goodhart, ponderar hacia
los resultados, gobernar la propiedad, instrumentar de forma fiable, y aun
así sacar la conclusión equivocada porque leyó un promedio donde necesitaba
un percentil, confundió ruido con tendencia, o cayó en una coincidencia
disfrazada de causa. Este capítulo es el juicio estadístico mínimo que este
libro asume que ya tiene el lector de cada capítulo posterior.

El problema central es que las métricas de ingeniería suelen ser ruidosas,
asimétricas y de muestra pequeña según los estándares de la estadística
formal. El recuento semanal de despliegues de un único equipo no es una
curva de campana suave; es un puñado de puntos de datos con valores atípicos
grandes ocasionales (una publicación grande, una racha de reversiones
provocadas por un incidente). Aplicar intuiciones ingenuas construidas para
conjuntos de datos grandes y bien comportados a este tipo de datos produce
conclusiones confiadas y equivocadas de forma habitual. Aprender a detectar
cuándo un número es demasiado ruidoso para confiar en él, cuándo un promedio
te está mintiendo, y cuándo que dos cosas se muevan juntas no dice nada
sobre causalidad no es un rigor opcional, es lo que separa un programa de
métricas que le enseña a una organización algo verdadero de uno que le
enseña algo que suena plausible y es falso.

A escala de empresa grande o del sector público, los errores estadísticos se
agravan porque una conclusión engañosa, una vez aceptada por el liderazgo,
se pone en práctica en muchos equipos antes de que a nadie se le ocurra
reexaminar el análisis subyacente. Una comparación estadísticamente ingenua
entre dos divisiones, o entre el antes y el después de una gran
reorganización, puede moldear decisiones de asignación de recursos durante
años basándose en nada más que ruido o en una variable de confusión que
nadie controló. Este capítulo existe para que ese fallo sea menos probable.

## Principios clave

- **Una mediana o un percentil suele decirte más que un promedio.** Los
  datos de ingeniería están habitualmente sesgados por valores atípicos que
  los promedios absorben y los percentiles no.
- **Las muestras pequeñas producen números ruidosos.** Un porcentaje
  calculado a partir de un puñado de eventos oscila salvajemente por
  motivos que no tienen nada que ver con un cambio real.
- **La regresión a la media engaña a la gente constantemente.** Una lectura
  inusualmente buena o mala tiende a estar seguida de una más normal, con o
  sin ninguna intervención.
- **La correlación no es causalidad, y las variables de confusión están por
  todas partes.** Dos métricas que se mueven juntas pueden compartir una
  tercera causa oculta en lugar de que una impulse a la otra.
- **Un [gráfico de
  control](https://en.wikipedia.org/wiki/Control_chart) supera a una
  comparación única de antes y después.** Ver el rango normal de variación
  es lo que te permite distinguir un cambio real del ruido.

## Recomendaciones

### Recurre por defecto a medianas y percentiles para datos asimétricos

Las métricas de ingeniería basadas en tiempo, tiempo de entrega, tiempo de
recuperación de incidentes, latencia de respuesta, casi siempre están
sesgadas hacia la derecha: la mayoría de los valores se agrupan bajos, con
una cola larga de valores atípicos grandes ocasionales. Un promedio tirado
por esa cola puede pintar una imagen que ningún caso típico refleja
realmente. Reporta la **mediana** (el valor central, donde la mitad de las
observaciones están por encima y la mitad por debajo) junto al **percentil
90** o al **percentil 95** (el valor por debajo del cual cae el 90% o el
95% de las observaciones), que juntos muestran tanto el caso típico como la
cola del peor caso que un equipo realmente experimenta. El capítulo de KPI
del libro hermano `software-engineering-guide`, y todos los capítulos de
métricas de entrega de la parte 2 de este libro, asumen este hábito de
principio a fin.

### Sabe cuándo una muestra es demasiado pequeña para confiar en ella

Una tasa de fallos de cambio calculada a partir de tres despliegues en una
semana tranquila no es una señal significativa; un único fallo mueve el
porcentaje del 0% al 33% de la noche a la mañana por motivos que pueden no
tener nada que ver con el riesgo subyacente. Antes de reaccionar a una
métrica basada en porcentajes, comprueba el recuento subyacente. Como regla
práctica general, trata una tasa calculada a partir de menos de
aproximadamente veinte o treinta eventos subyacentes como ruidosa y que
requiere una ventana de observación más larga antes de sacar una
conclusión, y dilo explícitamente en el tablero en lugar de presentar un
porcentaje volátil de muestra pequeña con la misma confianza que uno
estable de muestra grande.

### Vigila la regresión a la media antes de atribuir el mérito a una intervención

Si la peor semana de incidentes de un equipo va seguida de atención del
liderazgo y una mejora posterior, resulta tentador atribuir el mérito a la
intervención. A menudo, parte de esa mejora habría ocurrido de todos modos,
porque una lectura inusualmente extrema tiende a estar seguida de una más
típica puramente como artefacto estadístico, un fenómeno llamado
**regresión a la media**. Protégete de esto comparando con una línea base
histórica más larga en lugar del único punto de datos extremo que
desencadenó la atención, y siendo apropiadamente humilde sobre cuánta
mejora observada atribuir a una acción concreta.

### Busca variables de confusión antes de afirmar que una métrica causó un resultado

Cuando dos métricas se mueven juntas, la frecuencia de despliegue subiendo
junto con la satisfacción del cliente, resiste el reflejo de afirmar que
una causó la otra antes de considerar una **variable de confusión**: un
tercer factor oculto que impulsa a ambas. El lanzamiento de una
funcionalidad nueva podría impulsar de forma independiente tanto la
frecuencia de despliegue (más correcciones de seguimiento) como la
satisfacción (la propia funcionalidad), sin ningún vínculo causal entre las
dos métricas en absoluto. Antes de presentar una correlación como evidencia
de causalidad, pregúntate activamente qué más cambió al mismo tiempo que
podría explicar ambos movimientos.

### Usa un gráfico de control, no una única instantánea de antes y después

Un **gráfico de control** traza una métrica a lo largo del tiempo con su
rango normal de variación mostrado explícitamente, típicamente como bandas
alrededor de un promedio central. Esto te permite distinguir un cambio
genuino, un punto de datos o una racha sostenida fuera del rango normal, del
ruido ordinario que una única comparación de antes y después no puede
diferenciar. Antes de declarar "el número mejoró después del cambio", traza
suficientes datos históricos para ver qué aspecto tiene la variación normal,
y comprueba si la lectura posterior al cambio realmente cae fuera de ella.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Promedios | Sencillos, familiares, fáciles de calcular | Distorsionados por valores atípicos en datos de ingeniería asimétricos |
| Medianas y percentiles | Robustos frente a valores atípicos, muestran el caso típico y la cola juntos | Ligeramente menos familiares para audiencias no técnicas |
| Comparación única de antes y después | Rápida, intuitiva, fácil de presentar | Vulnerable a la regresión a la media y al ruido |
| Gráficos de control y líneas base más largas | Distinguen cambios reales del ruido de forma fiable | Requieren más datos históricos y más explicación a una audiencia no técnica |

La tensión central es **sencillez frente a rigor**. Los promedios y las
comparaciones únicas de antes y después son más fáciles de calcular y
explicar, que es precisamente por qué dominan los informes informales, pero
también son las dos técnicas con más probabilidad de producir una
conclusión confiada y equivocada sobre el tipo de datos ruidosos y
asimétricos que generan las métricas de este libro. Resuélvela recurriendo
por defecto a las técnicas más rigurosas, medianas, percentiles y gráficos
de control, para cualquier decisión con consecuencias reales, y reservando
las técnicas más sencillas para vistazos exploratorios de bajo riesgo donde
una lectura equivocada cuesta poco.

## Preguntas para debatir con tu equipo

1. **¿Cuáles de las casillas de nuestro tablero reportan un promedio donde
   una mediana o un percentil contarían una historia más veraz?** Las
   métricas de ingeniería basadas en tiempo casi siempre están sesgadas, y
   un promedio sobre datos sesgados puede verse bien mientras el caso
   típico, o la cola del peor caso, cuentan una historia completamente
   distinta. Audita tus casillas basadas en tiempo específicamente para
   detectar esta sustitución.

2. **¿Qué tan pequeña es la muestra subyacente detrás de nuestras métricas
   basadas en porcentajes, y tratamos una métrica de diez eventos con la
   misma confianza que una de mil?** Una tasa volátil de muestra pequeña
   presentada sin su recuento subyacente invita a reaccionar de forma
   exagerada al ruido. Comprueba tu tasa de fallos de cambio y casillas
   porcentuales similares para detectar este vacío.

3. **¿Hemos atribuido alguna vez el mérito de una mejora a una intervención
   que la regresión a la media habría producido de todos modos?** Este es
   uno de los errores estadísticos más fáciles de cometer y uno de los más
   difíciles de notar después de los hechos, porque la intervención y la
   mejora realmente ocurrieron en ese orden. Repasa una historia reciente de
   "lo arreglamos" y pregúntate con honestidad si la comparación con la
   línea base fue lo bastante larga para descartar esto.

4. **¿Dónde hemos asumido que una métrica causó otra sin comprobar si había
   una variable de confusión?** Que dos cosas se muevan juntas es común; que
   una cause la otra es una afirmación más fuerte que necesita más
   evidencia. Elige una correlación en la que tu equipo cree actualmente e
   intenta nombrar una confusión plausible que la explicaría sin ningún
   vínculo causal en absoluto.

5. **¿Tenemos suficientes datos históricos para saber qué aspecto tiene la
   variación normal de nuestras métricas más importantes, o estamos
   comparando puntos únicos?** Sin una noción de rango normal, cualquier
   lectura única parece alarmante o tranquilizadora según el estado de
   ánimo en lugar de la evidencia. Debate si tu métrica más vigilada se ha
   trazado alguna vez como un gráfico de control en lugar de como un número
   único.

6. **¿Cómo comunicamos actualmente la incertidumbre a las partes
   interesadas no técnicas, y sugiere nuestro tablero más precisión de la
   que los datos realmente soportan?** Un gráfico sin ninguna indicación de
   la variación normal o del tamaño de muestra puede hacer que un equipo de
   liderazgo reaccione de forma exagerada al ruido o, con la misma
   frecuencia, descarte una señal real como ruido. Debate cómo podría tu
   informe comunicar esto con honestidad sin volverse ilegible.

## Enfoque sectorial

**Startup.** Los equipos pequeños generan muestras pequeñas casi en todas
partes, lo que significa que la cautela sobre muestras pequeñas de este
capítulo importa constantemente. Resiste sacar conclusiones fuertes de una
única semana mala o de una única semana estupenda; con solo un puñado de
puntos de datos, la respuesta honesta a "¿es esto una tendencia?" suele ser
"todavía no lo sabemos".

**Pequeña empresa.** Los tableros integrados de las herramientas listas para
usar suelen recurrir por defecto a promedios y comparaciones de un único
periodo porque son las más sencillas de calcular y mostrar. Donde la
herramienta lo permita, cambia a medianas para las métricas basadas en
tiempo, y sé escéptico ante cualquier titular de "subió un 40% este mes"
calculado a partir de un recuento subyacente pequeño.

**Empresa grande.** Los errores estadísticos a esta escala acaban integrados
en decisiones de asignación de recursos y reorganización que afectan a
cientos de personas. Invierte en analistas o especialistas en datos
integrados que puedan construir gráficos de control adecuados y comprobar
si hay confusiones antes de que una comparación entre unidades de negocio, o
un antes y después de un cambio importante, se presente al liderazgo como
un hecho consumado.

**Sector público.** Una comparación estadísticamente ingenua que alimenta un
informe público o una justificación presupuestaria puede tener
consecuencias reales desproporcionadas e invita precisamente al tipo de
escrutinio que expone públicamente un análisis descuidado. Aplica las
técnicas más rigurosas, gráficos de control, tamaños de muestra
documentados, comprobaciones de confusión, como práctica permanente para
todo lo que se publique externamente, no solo como un esfuerzo ocasional.

## Ejemplos

**Empresa grande.** El equipo de liderazgo de una empresa de software
celebró una mejora del 25% en la tasa de fallos de cambio el mes después de
implantar una nueva política de revisión de código, atribuyendo el mérito
directamente a la política. Un análisis más detenido encontró que el mes
"anterior" había sido inusualmente malo, provocado por una migración fallida
de un único equipo, y el tamaño de muestra subyacente en ambos meses estaba
por debajo de treinta despliegues en toda la empresa. Un gráfico de control
usando doce meses de historial mostró que la nueva lectura estaba bien
dentro de la variación normal, no un cambio genuino de nivel, y el efecto
real de la política, aunque real, era mucho más pequeño de lo que sugería
el titular.

**Sector público.** Una agencia de tránsito público reportó una gran mejora
interanual en la puntualidad de un sistema de programación recién
digitalizado, comparando un único trimestre "anterior" con un único
trimestre "posterior". Una revisión independiente encontró que el
trimestre "anterior" había coincidido con un cierre por obras no
relacionado que había deprimido el rendimiento en toda la red, y una línea
base más larga mostró que la puntualidad ya se estaba recuperando antes de
que se lanzara el nuevo sistema. El informe revisado de la agencia usó un
gráfico de control completo de varios años y atribuyó una mejora más
modesta, pero más defendible, específicamente al nuevo sistema.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de la alfabetización estadística es el desvío de esfuerzo que se
evita: una organización que atribuye correctamente una mejora, o reconoce
correctamente el ruido como ruido, gasta su próxima inversión donde
realmente ayudará en lugar de perseguir un efecto fantasma. El ejemplo
minorista de arriba es típico: una empresa que creyó que su política de
revisión por sí sola impulsó una mejora del 25% podría subinvertir en otros
factores reales, o exagerar el valor de la política de una forma que
distorsiona decisiones futuras.

El coste total del rigor estadístico es sobre todo un cambio de hábito más
que una herramienta nueva: elegir una mediana en lugar de un promedio,
comprobar un tamaño de muestra antes de reaccionar, trazar una línea base
más larga antes de declarar la victoria. Estos hábitos cuestan poco de
adoptar y evitan el coste mucho mayor y más difícil de detectar de las
decisiones tomadas sobre conclusiones confiadas y equivocadas.

## Antipatrones y errores comunes

- **Reportar un promedio sobre datos asimétricos basados en tiempo:**
  esconde el caso típico y la cola detrás de un único número engañoso.
- **Reaccionar a un porcentaje sin tamaño de muestra visible:** trata el
  ruido de un puñado de eventos como si fuera una tendencia estable y
  significativa.
- **Atribuir el mérito a una intervención sin descartar la regresión a la
  media:** un error común, fácil de cometer y difícil de notar.
- **Afirmar causalidad a partir de correlación sin considerar confusiones:**
  exagera lo que los datos realmente soportan.
- **Comparar una única instantánea de antes y después en lugar de trazar una
  línea base más larga:** no puede distinguir un cambio real de la
  variación ordinaria.
- **Sugerir más precisión de la que los datos soportan en informes dirigidos
  al liderazgo:** invita a reaccionar de forma exagerada al ruido o a
  descartar una señal real.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas se reportan como promedios brutos e
  instantáneas únicas de antes y después sin ninguna atención al tamaño de
  muestra, la asimetría o la variación de la línea base.
- **Nivel 2, Desarrollar:** Algunos analistas aplican medianas o percentiles
  de manera informal, pero no existe una práctica organizacional consistente
  y las confusiones rara vez se comprueban.
- **Nivel 3, Estandarizar:** Las medianas y los percentiles son el valor por
  defecto para las métricas asimétricas basadas en tiempo; los tamaños de
  muestra se muestran junto a las métricas basadas en porcentajes en toda la
  organización.
- **Nivel 4, Gestionar:** Los gráficos de control con líneas base históricas
  son práctica estándar para cualquier afirmación de un cambio genuino; las
  variables de confusión se consideran activamente antes de hacer
  afirmaciones causales en los informes.
- **Nivel 5, Orquestar:** El rigor estadístico está incorporado a la propia
  herramienta, los tableros muestran percentiles y bandas de control por
  defecto, y la organización puede demostrar que una decisión pasada
  concreta se corrigió porque se detectó una lectura estadísticamente
  ingenua antes de que moldeara la estrategia.

## Ideas para el debate

1. ¿Qué titulares de nuestro tablero actual se verían distintos si sustituyéramos un promedio por una mediana?
2. ¿Hemos cambiado alguna vez una decisión porque un porcentaje resultó basarse en una muestra mucho más pequeña de lo que asumíamos?
3. ¿Cuál es una historia reciente de "mejoramos esta métrica" que deberíamos reexaminar en busca de regresión a la media?
4. ¿Dónde podrían estar correlacionadas dos de nuestras métricas a través de una tercera causa oculta en lugar de que una impulse a la otra?
5. ¿Muestran nuestros gráficos más importantes un rango normal de variación, o solo una línea de tendencia única?

## Conclusiones clave

- Prefiere **medianas y percentiles** frente a promedios para métricas de
  ingeniería asimétricas y basadas en tiempo.
- Trata un **porcentaje de muestra pequeña** como ruidoso, y dilo
  explícitamente en lugar de reaccionar como si fuera una tendencia estable.
- Vigila la **regresión a la media** antes de atribuir el mérito de una
  mejora a una intervención que siguió a una lectura inusualmente mala.
- **La correlación no es causalidad**; busca activamente variables de
  confusión antes de hacer una afirmación causal.
- Usa un **gráfico de control con una línea base histórica real**, no una
  única instantánea de antes y después, para distinguir un cambio genuino
  del ruido ordinario.

## Referencias y lecturas adicionales

- *The Signal and the Noise*, de Nate Silver (distinguir la señal real del
  ruido en datos imperfectos).
- *How to Measure Anything*, de Douglas W. Hubbard (razonamiento
  estadístico para la medición organizacional).
- *Understanding Variation: The Key to Managing Chaos*, de Donald J.
  Wheeler (gráficos de control y la distinción entre variación de causa
  común y de causa especial).
- *Thinking, Fast and Slow*, de Daniel Kahneman (sesgos cognitivos
  incluyendo la regresión a la media y la ilusión de narrativa causal).
- *The Visual Display of Quantitative Information*, de Edward R. Tufte
  (presentación honesta y de alta integridad de datos cuantitativos).
