# 4.1 Métricas de complejidad de código

## Visión general y motivación

La **[complejidad ciclomática](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
introducida por Thomas J. McCabe en 1976, cuenta el número de rutas
independientes a través del flujo de control de un fragmento de código: cada
`if`, bucle y ramificación suma al recuento. Casi cincuenta años después,
sigue siendo la métrica de complejidad de código más utilizada, junto a
parientes como la complejidad cognitiva (que pondera el flujo de control
anidado y difícil de seguir con más peso que el recuento lineal original de
McCabe) y la profundidad de anidamiento. Estas métricas comparten una
intuición genuina y validada: el código con más rutas independientes es más
difícil de probar por completo, más difícil de razonar, y, en décadas de
investigación empírica, mesurablemente más propenso a contener defectos.

Este tema trata esa intuición con auténtico respeto, a la vez que trata
sus límites con la misma seriedad. Las métricas de complejidad miden una
propiedad específica del código, y una base de código puede ser simple según
toda métrica de complejidad mientras sigue estando mal diseñada, mal
nombrada, o siendo conceptualmente incoherente de maneras que ningún
algoritmo de recuento de ramas puede detectar. Por el contrario, algunos
problemas irreduciblemente complejos genuinamente requieren código complejo
para resolverse correctamente, y un equipo presionado para minimizar una
puntuación de complejidad puede producir código que puntúa bien mientras es
en realidad más difícil de entender, repartiendo la complejidad esencial
entre más archivos y capas de indirección en lugar de reducirla.

Para los equipos grandes, las métricas de complejidad se ganan su lugar como
herramienta de triaje: una forma de encontrar, entre miles de archivos, el
pequeño subconjunto con más probabilidades de recompensar una revisión más
detenida, no como un veredicto independiente sobre la calidad del código.
Las organizaciones empresariales y gubernamentales que mantienen bases de
código demasiado grandes para que una sola persona las haya leído por
completo dependen de esta función de triaje para dirigir el escaso esfuerzo
de refactorización y revisión hacia donde más bien hará.

## Principios clave

- **Las métricas de complejidad predicen la dificultad de prueba y de
  defectos; no miden la calidad directamente.** Trátalas como una entrada
  más, no como un veredicto.
- **Una puntuación de complejidad es susceptible de manipulación mediante
  ofuscación, no solo mediante simplificación genuina.** Repartir la
  complejidad entre más archivos puede bajar la puntuación sin hacer que el
  código sea realmente más fácil de entender.
- **Parte de la complejidad es esencial, no accidental.** Un problema
  genuinamente difícil puede requerir código genuinamente complejo; el
  objetivo es minimizar la complejidad accidental, no eliminar toda
  complejidad indiscriminadamente.
- **Usa las métricas de complejidad para triaje, no como cuadro de mando
  individual o de equipo.** Señalan dónde mirar, no a quién culpar.
- **La tendencia y los valores atípicos importan más que cualquier umbral
  absoluto.** Una tendencia al alza o un valor atípico extremo son más
  accionables que una media única de todo el equipo.

## Recomendaciones

### Usa las métricas de complejidad para priorizar la revisión y el esfuerzo de refactorización

Ejecuta un análisis de complejidad en toda la base de código y usa los
resultados para priorizar dónde una revisión humana más detenida o una
inversión en refactorización rendirían más: las funciones o archivos que
puntúan muy por encima del rango típico de la propia base de código son los
lugares de mayor valor donde mirar primero. Este uso de triaje, encontrar
dónde mirar, es la aplicación más defendible y valiosa de las métricas de
complejidad, mucho más que usarlas como una puerta de aprobado/reprobado
absoluta.

### Establece umbrales relativos a tu propia base de código, no a un número universal

Los umbrales de complejidad absolutos tomados de forma acrítica de la
convención de la industria (una puntuación de complejidad de diez es una
regla general citada con frecuencia) pueden ser demasiado indulgentes o
demasiado estrictos según tu dominio: un analizador sintáctico o un motor de
reglas puede tener legítimamente una complejidad base más alta que un
servicio CRUD típico. Calibra tus propios umbrales contra la distribución
real de tu base de código, y trata el incumplimiento de un umbral como una
señal para mirar más de cerca, no como un fallo de compilación automático, a
menos que tu equipo haya elegido deliberadamente esa política más estricta
con plena conciencia de sus compensaciones.

### Vigila la manipulación mediante descomposición sin simplificación genuina

La forma más común en que se manipulan las puntuaciones de complejidad es el
patrón de sustitución del tema 1.2 aplicado a esta métrica específica:
dividir una función genuinamente compleja en varias funciones más pequeñas
que puntúan bien individualmente, mientras el sistema general sigue siendo
igual de difícil de entender, o a veces se vuelve más difícil, porque la
lógica ahora está dispersa entre más archivos con más indirección entre
ellos. Empareja las métricas de complejidad con una revisión cualitativa de
si la descomposición realmente clarificó el código, o si simplemente movió
la complejidad a un lugar donde la métrica ya no podía verla.

### Distingue la complejidad esencial de la accidental antes de reaccionar

Antes de tratar una puntuación de complejidad alta como un problema que hay
que arreglar, pregunta si el problema subyacente realmente requiere tantas
rutas independientes (la lógica de cálculo del código fiscal legítimamente
tiene muchas ramas, por ejemplo) o si la complejidad proviene de causas
evitables: condicionales profundamente anidados que podrían aplanarse,
lógica duplicada que podría consolidarse, o límites de responsabilidad poco
claros que podrían redibujarse. Solo la segunda categoría es un problema de
calidad genuino que esta métrica debería impulsarte a corregir.

### Rastrea la tendencia y los valores atípicos, no solo una instantánea promedio

Una puntuación de complejidad media de toda la base de código que se mueve
ligeramente rara vez es accionable por sí sola; la complejidad de un archivo
específico que aumenta marcadamente a lo largo de varios cambios, o un
pequeño número de valores atípicos extremos en una base de código por lo
demás bien comportada, son señales mucho más útiles. Rastrea tanto la
tendencia a lo largo del tiempo como la cola de valores atípicos, y úsalas
para desencadenar una investigación específica y dirigida en lugar de una
iniciativa amplia y difusa de reducción de complejidad.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Umbral universal absoluto | Simple, consistente, fácil de automatizar | Ignora diferencias de dominio legítimas; se puede manipular mediante descomposición |
| Umbral relativo a la base de código | Mejor calibrado al contexto real | Requiere más configuración y recalibración periódica |
| Complejidad como puerta automática de compilación | Impone consistencia sin la sobrecarga de la revisión humana | Puede bloquear código legítimamente complejo pero bien diseñado, o premiar la descomposición ofuscada |
| Complejidad como señal de triaje para revisión humana | Detecta problemas de calidad genuinos que la descomposición por sí sola pasaría por alto | Requiere más tiempo de revisión humana que una puerta totalmente automatizada |

La tensión central es **automatización frente a juicio**. Una puerta de
complejidad totalmente automatizada es barata de imponer y consistente, pero
puede tanto bloquear código legítimamente complejo y bien diseñado como
premiar la descomposición superficial que manipula la puntuación sin
simplificar genuinamente nada. Resuelve la tensión usando el análisis de
complejidad automatizado para identificar candidatos a revisión, y
reservando el juicio real (¿es esta complejidad esencial o accidental?,
¿esta refactorización realmente clarificó o solo trasladó la complejidad?)
para un revisor humano en lugar de una puerta automatizada rígida por sí
sola.

## Preguntas para debatir con tu equipo

1. **¿Están nuestros umbrales de complejidad calibrados a la distribución
   real de nuestra propia base de código, o tomados de forma acrítica de
   una convención genérica de la industria?** Extrae la distribución de
   complejidad real de tu base de código y comprueba si tus umbrales
   actuales tienen sentido frente a ella, en lugar de asumir que un número
   citado con frecuencia se aplica universalmente a tu dominio.

2. **¿Hemos visto alguna vez una función dividida en varias más pequeñas sin
   que el código resultante fuera realmente más fácil de entender?** Esta
   es la señal más clara del patrón de manipulación por descomposición que
   advierte este tema. Observa una refactorización reciente motivada
   principalmente por una puntuación de complejidad y evalúa con honestidad
   si mejoró la comprensibilidad genuina.

3. **¿Dónde en nuestra base de código la complejidad es esencial al
   problema, y dónde es accidental y corregible?** Repasa tus valores
   atípicos de mayor complejidad y clasifícalos explícitamente en estas dos
   categorías, ya que solo la segunda representa un problema de calidad
   genuino y accionable.

4. **¿Usamos las métricas de complejidad para priorizar el esfuerzo de
   revisión, o como una puerta automatizada rígida sin juicio humano
   involucrado?** Debate si tu enfoque de aplicación actual deja espacio
   para la distinción entre esencial y accidental que recomienda este
   tema, o si trata cada incumplimiento de forma idéntica sin importar
   el contexto.

5. **¿Se ha usado alguna vez una puntuación de complejidad, aunque sea de
   manera informal, para juzgar la calidad del trabajo de un ingeniero en
   concreto?** Esto arriesga la misma trampa de evaluación individual que
   advierte el tema 3.4 para las métricas de actividad, aplicada aquí a
   las métricas de código en su lugar, e invita a la misma respuesta de
   manipulación.

6. **¿Qué aspecto tiene nuestra tendencia de complejidad durante el último
   año para nuestros archivos más críticos y modificados con más
   frecuencia?** Combina esto con el análisis de cambios acumulados y
   puntos calientes del tema 4.3, ya que un archivo que es tanto
   altamente complejo como modificado con frecuencia merece atención mucho
   antes que uno que es complejo pero rara vez se toca.

## Enfoque sectorial

**Startup.** Las métricas de complejidad suelen ser menos urgentes a esta
escala; el tamaño de la base de código es lo bastante pequeño como para que
la familiaridad informal a menudo sustituya a la medición formal. El hábito
que vale la pena adoptar pronto es simplemente ejecutar un análisis de
complejidad de vez en cuando para detectar un archivo específico que se
vuelve inmanejable en silencio antes de que el equipo haya crecido demasiado
para notarlo de manera informal.

**Pequeña empresa.** La mayoría de las herramientas modernas de análisis
estático reportan métricas de complejidad como parte de una configuración
de linting más amplia, gratuita o de bajo coste; usa el resultado como
señal de triaje periódica en lugar de invertir en herramientas dedicadas.
Concentra la atención primero en tus archivos modificados con más
frecuencia.

**Empresa.** Las métricas de complejidad a escala son más valiosas
combinadas con datos de cambios acumulados (tema 4.3) para priorizar la
inversión en refactorización en una base de código demasiado grande para
que una sola persona la examine manualmente. Calibra los umbrales por
servicio o dominio en lugar de aplicar un número único para toda la
organización, ya que la complejidad legítima varía significativamente entre
distintos tipos de sistemas.

**Gobierno.** Los sistemas gubernamentales de larga vida a menudo acumulan
complejidad gradualmente a lo largo de años o décadas de cambios
incrementales en los requisitos, y una auditoría de complejidad puede ser
una herramienta persuasiva y concreta para justificar la inversión en
modernización o refactorización ante partes interesadas que, de otro modo,
podrían ver el sistema simplemente como algo que "funciona" y que, por
tanto, no vale la pena mejorar con inversión.

## Ejemplos

**Empresa.** Una empresa de procesamiento de pagos ejecutó por primera vez
una auditoría de complejidad de toda la base de código y encontró una única
función de validación de transacciones con una puntuación de complejidad
ciclomática más de diez veces superior a la mediana de la base de código.
La investigación encontró que la complejidad era casi enteramente
accidental: años de manejo de casos especiales añadidos de forma
incremental para proveedores de pago específicos se habían acumulado en
condicionales profundamente anidados que podían reestructurarse en un
patrón de estrategia más limpio que separaba la lógica específica de cada
proveedor. La refactorización, priorizada directamente porque la auditoría
de complejidad la identificó como el objetivo de mayor valor en toda la
base de código, redujo la puntuación de complejidad de la función en más de
un 80% y, más importante aún, redujo mesurablemente la tasa de defectos en
esa ruta de código específica durante los dos trimestres siguientes.

**Gobierno.** El motor de cálculo de prestaciones de décadas de antigüedad
de una autoridad fiscal puntuó extremadamente alto en métricas de
complejidad en casi todas sus funciones, lo que provocó una suposición
inicial de que todo el sistema necesitaba una reescritura desde cero. Una
revisión más detenida, función por función, que distinguía la complejidad
esencial de la accidental, encontró que la mayor parte de la complejidad
reflejaba genuinamente las reglas legales subyacentes, que realmente tenían
tantas ramas y casos especiales legítimos exigidos por ley, mientras que un
subconjunto más pequeño provenía de duplicación evitable entre rutas de
cálculo similares. El equipo dirigió la refactorización solo al subconjunto
de complejidad accidental, evitando una reescritura completa costosa y
arriesgada mientras mejoraba de manera significativa las áreas del sistema
genuinamente más problemáticas.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de usar bien las métricas de complejidad es una inversión de
refactorización dirigida y de alto valor: el ejemplo de la empresa de pagos
anterior muestra una única corrección bien dirigida, identificada mediante
el análisis de complejidad, que redujo mesurablemente los defectos
exactamente en la ruta de código de mayor riesgo, a una fracción del coste
que habría requerido una iniciativa de refactorización amplia y sin
objetivo definido.

El coste total de propiedad es bajo: la mayoría de las cadenas de
herramientas de desarrollo modernas calculan las métricas de complejidad
automáticamente como parte del análisis estático (tema 4.4), y la
inversión real es el tiempo de juicio humano para interpretar los
resultados correctamente, distinguiendo la complejidad esencial de la
accidental y detectando la manipulación por descomposición, más que
cualquier coste significativo de nuevas herramientas.

## Antipatrones y errores comunes

- **Tratar una puntuación de complejidad como un veredicto de calidad
  directo:** mide una propiedad específica, no la calidad general del
  código.
- **Dividir una función para manipular la puntuación sin simplificación
  genuina:** el patrón de manipulación por descomposición que nombra
  específicamente este tema.
- **Aplicar un umbral universal sin calibrarlo a tu propia base de código:**
  produce una aplicación demasiado indulgente o demasiado estricta según el
  dominio.
- **Usar las métricas de complejidad para evaluar individualmente a los
  ingenieros:** invita a la manipulación y aplica mal una métrica pensada
  para el triaje, no para el juicio.
- **Tratar toda la complejidad como igualmente corregible:** la complejidad
  esencial de un problema genuinamente difícil no es un defecto que
  eliminar.
- **Ignorar la tendencia y los valores atípicos en favor de una media plana
  de toda la base de código:** pasa por alto la señal más accionable que
  ofrece esta familia de métricas.

## Modelo de madurez

- **Nivel 1, Iniciar:** La complejidad no se mide, o se mide con un umbral
  universal genérico aplicado sin examen crítico.
- **Nivel 2, Desarrollar:** Se recopilan métricas de complejidad pero rara
  vez se actúa sobre ellas, y no se hace distinción entre complejidad
  esencial y accidental.
- **Nivel 3, Estandarizar:** Los umbrales están calibrados a la
  distribución propia de la base de código, y las métricas de complejidad
  impulsan de manera consistente el triaje de revisión y refactorización en
  toda la organización.
- **Nivel 4, Gestionar:** La tendencia y los valores atípicos de
  complejidad se supervisan activamente y se combinan con datos de cambios
  acumulados (tema 4.3) para priorizar la inversión en refactorización;
  se vigila activamente la manipulación por descomposición.
- **Nivel 5, Orquestar:** La organización puede señalar mejoras específicas
  y mesurables en la tasa de defectos rastreadas directamente hasta la
  inversión en refactorización informada por la complejidad, y los datos de
  complejidad son una entrada rutinaria y confiable en las decisiones de
  inversión de ingeniería.

## Ideas para el debate

1. ¿Cuál es nuestra función o archivo más complejo, y su complejidad es esencial o accidental?
2. ¿Hemos manipulado alguna vez una puntuación de complejidad mediante descomposición sin simplificación real?
3. ¿Están nuestros umbrales calibrados a nuestra propia base de código, o tomados de forma acrítica?
4. ¿Dónde se solapa actualmente la alta complejidad con los altos cambios acumulados en nuestra base de código?
5. ¿Han informado alguna vez los datos de complejidad una decisión de inversión en refactorización, o permanecen sin usar?

## Conclusiones clave

- Las métricas de complejidad como la **complejidad ciclomática** predicen
  la dificultad de prueba y de defectos; no miden directamente la calidad
  general del código.
- Distingue la **complejidad esencial** (de un problema genuinamente
  difícil) de la **complejidad accidental** (evitable mediante un mejor
  diseño) antes de reaccionar ante una puntuación alta.
- Vigila la **manipulación por descomposición**: dividir código para bajar
  una puntuación sin simplificar realmente nada.
- Usa las métricas de complejidad para el **triaje**, dirigiendo la
  revisión humana y el esfuerzo de refactorización, no como un cuadro de
  mando individual ni una puerta automatizada rígida.
- Calibra los umbrales a la **distribución de tu propia base de código**, y
  rastrea la **tendencia y los valores atípicos**, no solo una media plana.

## Referencias y lecturas adicionales

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software
  Engineering* (1976): el artículo original de la complejidad ciclomática.
- *Code Complete*, de Steve McConnell (orientación práctica para gestionar
  la complejidad en la construcción de software).
- *Working Effectively with Legacy Code*, de Michael Feathers (técnicas
  para reducir la complejidad de manera segura en código existente y
  difícil de cambiar).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring
  Understandability" (SonarSource, 2018): la métrica de complejidad
  cognitiva y su distinción respecto a la complejidad ciclomática.
