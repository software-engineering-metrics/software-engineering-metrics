# 5.2 Adopción de funcionalidades y métricas de uso

## Visión general y motivación

La **adopción de funcionalidades** mide si las personas para quienes se
construyó una funcionalidad realmente la usan, a qué ritmo, y si ese uso
persiste con el tiempo. Es, en un sentido muy directo, la prueba de
realidad sobre todo lo que miden las partes 2 a 4 de este libro: una
organización puede desplegar con frecuencia, mantener una excelente
experiencia del desarrollador, y entregar código impecablemente probado, y
aun así estar construyendo cosas que nadie quiere. Los datos de adopción
son donde una organización de ingeniería descubre si su producción se
conectó con algún resultado real, que es exactamente la distinción entre
entrada, producción y resultado que introdujo el capítulo 1.3 aplicada al
caso más concreto de este libro: una funcionalidad específica y entregada.

La preocupación central de este capítulo es que los datos de adopción, más
que casi cualquier otra familia de métricas de este libro, son fáciles de
medir de una manera que favorece en lugar de informar. Una funcionalidad
puede mostrar una adopción inicial impresionante puramente por curiosidad
o exposición forzada (una ventana modal que aparece independientemente de
si el usuario la quiere o no) mientras que la entrega de valor genuina y
sostenida, medida por si la gente sigue usándola una vez que se desvanece
la novedad, cuenta una historia completamente distinta. Distinguir la
adopción genuina de un pico temporal es el reto técnico central de este
capítulo, y equivocarse en esto lleva rutinariamente a las organizaciones a
celebrar funcionalidades que fracasan en silencio y abandonar aquellas que
apenas empezaban a encontrar a su audiencia.

Para los equipos grandes, los datos de adopción de funcionalidades son lo
que hace que la priorización de la hoja de ruta se base en evidencia en
lugar de estar impulsada por quien defiende más persuasivamente el trabajo
de su propio equipo. Las organizaciones empresariales que gestionan
grandes carteras de producto necesitan datos de adopción para identificar
qué inversiones se están ganando su lugar; las organizaciones
gubernamentales que construyen servicios digitales orientados a la
ciudadanía los necesitan para demostrar que la inversión pública produjo
servicios que la gente realmente usa, no solo servicios que técnicamente
existen.

## Principios clave

- **La adopción inicial y la adopción sostenida son señales distintas.**
  Un pico por curiosidad o exposición forzada no es lo mismo que una
  entrega de valor genuina y duradera.
- **La adopción debería medirse frente a la audiencia para la que se
  construyó**, no frente a toda tu base de usuarios sin distinción.
- **Una funcionalidad con baja adopción no es automáticamente un
  fracaso.** Puede tener poca visibilidad, estar mal orientada, o
  simplemente ser nueva; investiga antes de concluir.
- **La retención del uso importa más que una única instantánea de
  adopción.** Rastrea si las personas que probaron una funcionalidad
  siguen regresando a ella.
- **Los datos de adopción están expuestos a la manipulación mediante
  exposición forzada o patrones oscuros.** Un número inflado al hacer que
  una funcionalidad sea difícil de evitar no es una señal genuina.

## Recomendaciones

### Distingue la prueba inicial de la retención sostenida

Rastrea dos números separados: el porcentaje de tu audiencia objetivo que
prueba una funcionalidad al menos una vez (adopción inicial), y el
porcentaje que todavía la está usando después de un período significativo,
como cuatro u ocho semanas (adopción retenida). Una funcionalidad con alta
prueba inicial y baja retención sugiere que la visibilidad funcionó pero
la funcionalidad en sí no entregó suficiente valor para que la gente
siguiera regresando, un diagnóstico muy distinto, y una corrección muy
distinta, a una prueba inicial baja con alta retención, que sugiere una
funcionalidad genuinamente valiosa que no suficiente gente conoce.

### Define la audiencia objetivo con precisión antes de medir la adopción

La adopción medida frente a toda tu base de usuarios puede ser engañosa si
una funcionalidad solo estaba pensada para un segmento específico: una
funcionalidad para administradores empresariales medida frente a una base
mayoritariamente de usuarios individuales siempre parecerá tener una
adopción terrible, sin importar lo bien que en realidad sirva a las
personas para las que se construyó. Define explícitamente la audiencia
prevista antes del lanzamiento, y mide la adopción frente a ese
denominador específico, no frente a tu recuento total de usuarios.

### Investiga la baja adopción antes de concluir que una funcionalidad fracasó

Un número de adopción bajo tiene varias causas posibles que exigen
respuestas muy distintas: la funcionalidad genuinamente no es valiosa, la
funcionalidad es valiosa pero tiene poca visibilidad (los usuarios no
saben que existe), la funcionalidad es valiosa pero está mal explicada
(los usuarios la ven pero no entienden su propósito), o la ventana de
medición es simplemente demasiado corta para que una funcionalidad de
adopción más lenta haya encontrado todavía a su audiencia. Investiga cuál
de estas se aplica antes de decidir invertir más, rediseñar, o descontinuar.

### Vigila la adopción inflada por exposición forzada o [patrones oscuros](https://en.wikipedia.org/wiki/Dark_pattern)

Un número de adopción impulsado porque una funcionalidad es difícil de
evitar, un flujo de incorporación intrusivo, una ventana modal que el
usuario debe cerrar, una configuración predeterminada difícil de cambiar,
no está midiendo una entrega de valor genuina, y celebrarlo como si lo
fuera repite el patrón de manipulación por sustitución del capítulo 1.2 en
forma de producto. Empareja los números brutos de adopción con una señal
de satisfacción o de estilo Net Promoter para la funcionalidad específica
cuando sea factible, de modo que la exposición forzada que no se traduce
en satisfacción genuina se detecte en lugar de celebrarse.

### Conecta las tendencias de adopción con decisiones específicas de producto e ingeniería

Cuando la adopción sube o baja de manera inesperada, rastrea el cambio
hasta una decisión específica, un cambio de interfaz, un cambio en las
configuraciones predeterminadas, un impulso de marketing, una mejora o
regresión de rendimiento, en lugar de tratar el movimiento como un
misterio sin explicar. Esto conecta los datos de adopción con un
aprendizaje accionable de producto e ingeniería, cerrando el ciclo entre
un cambio específico y su efecto medido en el uso real.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Medir frente a la base total de usuarios | Simple, un único denominador | Engañoso para funcionalidades dirigidas a un segmento específico |
| Medir frente a una audiencia objetivo definida | Justo, refleja con precisión el alcance previsto | Requiere una definición deliberada de audiencia antes del lanzamiento |
| Solo prueba inicial | Señal rápida, disponible poco después del lanzamiento | Pierde de vista si la funcionalidad entrega valor duradero |
| Prueba inicial más retención | Distingue la curiosidad del valor genuino | Requiere esperar más tiempo (semanas) antes de que surja una imagen completa |

La tensión central es **velocidad frente a honestidad**. Los datos de
prueba inicial están disponibles casi inmediatamente después del
lanzamiento y satisfacen la presión organizacional de reportar resultados
tempranos, pero no pueden distinguir por sí solos la curiosidad o la
exposición forzada del valor genuino y duradero. Resuelve la tensión
reportando los datos de prueba inicial temprano y claramente etiquetados
como preliminares, mientras te comprometes públicamente a una lectura de
retención de seguimiento en un intervalo fijo y predeterminado, de modo
que el entusiasmo temprano no se cristalice en una historia de éxito no
examinada antes de que la señal real haya tenido tiempo de surgir.

## Preguntas para debatir con tu equipo

1. **Para nuestra funcionalidad entregada más recientemente, ¿conocemos la
   prueba inicial y el uso retenido por separado, o solo un único número
   combinado?** Si solo existe un número combinado, esa brecha oculta
   exactamente la distinción entre curiosidad y valor que este capítulo
   trata como central.

2. **¿Nuestra audiencia objetivo para esta funcionalidad se definió
   explícitamente antes del lanzamiento, y estamos midiendo la adopción
   frente a ese grupo específico?** Comprueba si tu denominador de
   adopción actual coincide con para quién se construyó realmente la
   funcionalidad, o si se diluye al medir frente a una población más
   amplia e irrelevante.

3. **Para una funcionalidad con baja adopción, ¿hemos investigado cuál de
   las varias causas posibles, poco valor, poca visibilidad, mala
   explicación, tiempo insuficiente, realmente se aplica?** Repasa esta
   lista diagnóstica específica para una funcionalidad real y actual de
   baja adopción en lugar de recurrir por defecto a "debe de no ser
   valiosa".

4. **¿Alguna parte de nuestro número de adopción reportado está inflada
   por exposición forzada, una configuración predeterminada intrusiva, o
   una ventana modal de cierre obligatorio, en lugar de un uso genuino y
   voluntario?** Sé honesto aquí; este es un patrón común y fácil de caer
   en él, especialmente bajo presión para mostrar resultados positivos
   tempranos.

5. **Cuando la adopción de una funcionalidad se movió significativamente,
   ¿pudimos rastrear ese movimiento hasta un cambio específico que
   hicimos?** Si la respuesta suele ser "no estamos seguros", esa brecha
   limita cuánto puede aprender realmente tu organización de sus propios
   datos de adopción con el tiempo.

6. **¿Emparejamos los números de adopción con alguna señal de
   satisfacción para la misma funcionalidad, o solo rastreamos el uso
   bruto?** Un número de adopción alto emparejado con baja satisfacción es
   una señal de advertencia que el uso bruto por sí solo pasaría por alto
   por completo.

## Enfoque sectorial

**Startup.** La adopción de funcionalidades suele ser la señal individual
más importante que tiene una empresa joven, estrechamente ligada al
propio ajuste producto-mercado. Rastrea la retención específicamente, no
solo la prueba inicial, desde el primer lanzamiento de funcionalidad, ya
que distinguir el valor genuino de la curiosidad temprana es crítico
cuando la supervivencia de la empresa puede depender de acertar con este
diagnóstico.

**Pequeña empresa.** La mayoría de las plataformas de analítica reportan
datos de uso básicos con una configuración mínima; la disciplina principal
es definir tu audiencia objetivo con claridad antes de medir, en lugar de
reportar la adopción frente a toda tu base de clientes sin importar para
quién se construyó realmente una funcionalidad específica.

**Empresa.** Los datos de adopción a esta escala son esenciales para una
priorización de hoja de ruta justa y basada en evidencia en una gran
cartera de producto, y la disciplina de distinguir la prueba inicial de la
retención sostenida importa aún más aquí, ya que una base de usuarios lo
bastante grande puede producir un pico inicial de aspecto impresionante
para casi cualquier lanzamiento sin importar el valor real.

**Gobierno.** La adopción de un servicio digital orientado a la ciudadanía
es una medida directa y concreta de si la inversión pública se tradujo en
un beneficio público real, y a menudo es una métrica mucho más persuasiva
para un órgano de supervisión que un recuento de entrega o actividad. Mide
la adopción frente a la población para la que realmente se construyó el
servicio, y sé honesto sobre las barreras (alfabetización digital, acceso,
conocimiento) que podrían explicar una baja adopción más allá del propio
diseño del servicio.

## Ejemplos

**Empresa.** Una empresa de software de gestión de proyectos lanzó una
nueva funcionalidad de edición colaborativa y celebró una impresionante
tasa de prueba inicial del 60% en las primeras dos semanas. Una lectura de
retención de seguimiento a las ocho semanas mostró que solo el 8% de esos
primeros probadores todavía usaba la funcionalidad de manera regular,
revelando que la alta tasa de prueba había estado impulsada casi por
completo por un aviso emergente de incorporación destacado y difícil de
cerrar en lugar de un interés genuino y sostenido. La investigación de la
retroalimentación cualitativa de los primeros probadores que habían dejado
de usar la funcionalidad reveló un problema de usabilidad específico y
corregible, un patrón de interacción poco intuitivo, que un rediseño
dirigido abordó, y el uso retenido casi se triplicó después de la
corrección, aunque nunca se acercó al número de prueba inicial
engañosamente alto.

**Gobierno.** Un servicio nacional de empleo lanzó una nueva herramienta
de emparejamiento de trabajo en línea, reportando inicialmente la adopción
frente a toda la base de usuarios registrados de la agencia, produciendo
un porcentaje desalentadoramente bajo que amenazaba la financiación
continua del programa. Un análisis revisado, midiendo la adopción
específicamente frente al subconjunto de usuarios registrados que
buscaban activamente empleo en las industrias objetivo de la herramienta,
la audiencia realmente prevista, mostró una tasa de adopción
sustancialmente más alta y precisa. Combinado con una campaña de
divulgación dirigida específicamente a esa audiencia definida, y una
lectura de retención posterior que mostraba un uso sostenido fuerte entre
los adoptantes, el programa aseguró financiación continua basándose en la
métrica corregida y honestamente orientada en lugar de la cifra original
engañosamente diluida.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una medición rigurosa de la adopción de funcionalidades es
una inversión de hoja de ruta basada en evidencia: una organización que
puede distinguir el valor genuino y retenido de la prueba inicial impulsada
por la curiosidad puede invertir con confianza más en las funcionalidades
que realmente están funcionando y redirigir el esfuerzo lejos de las que
no, en lugar de perseguir un pico inicial engañoso o abandonar
prematuramente una funcionalidad genuinamente valiosa pero de
descubrimiento lento.

El coste total de propiedad es principalmente la instrumentación de
analítica, normalmente ya disponible en la mayoría de las plataformas
modernas de analítica de producto, más la disciplina de definir
explícitamente las audiencias objetivo y comprometerse con lecturas de
retención de seguimiento en lugar de detenerse en una señal temprana e
incompleta. Esa disciplina cuesta poco y previene el error mucho más
costoso de malinterpretar un falso éxito o un falso fracaso.

## Antipatrones y errores comunes

- **Reportar solo la prueba inicial, nunca la retención:** no puede
  distinguir la curiosidad o la exposición forzada del valor genuino y
  duradero.
- **Medir la adopción frente al denominador equivocado:** diluye o infla
  la señal para funcionalidades dirigidas a un segmento de audiencia
  específico.
- **Concluir que una funcionalidad fracasó sin investigar la causa
  específica** de la baja adopción: arriesga abandonar una funcionalidad
  genuinamente valiosa pero con poca visibilidad o mal cronometrada.
- **Celebrar la adopción inflada por exposición forzada o patrones
  oscuros:** una instancia del lado del producto de la manipulación por
  sustitución del capítulo 1.2.
- **No rastrear nunca el movimiento de adopción hasta decisiones
  específicas:** limita el aprendizaje organizacional a partir de los
  propios datos de la organización.
- **Rastrear el uso sin ninguna señal de satisfacción emparejada:** pierde
  de vista el caso en el que un uso alto coexiste con poco valor o
  satisfacción genuinos.

## Modelo de madurez

- **Nivel 1, Iniciar:** La adopción no se mide, o solo se reporta un único
  número temprano de prueba sin retención.
- **Nivel 2, Desarrollar:** Existe cierto rastreo de adopción, pero las
  audiencias objetivo no están definidas con precisión y la retención se
  mide de manera inconsistente.
- **Nivel 3, Estandarizar:** Tanto la prueba inicial como la adopción
  retenida se rastrean de manera consistente frente a una audiencia
  objetivo definida con precisión para cada funcionalidad importante.
- **Nivel 4, Gestionar:** Las funcionalidades de baja adopción se
  investigan sistemáticamente para determinar una causa raíz específica
  antes de una decisión de rediseñar o descontinuar; la adopción se
  empareja con datos de satisfacción.
- **Nivel 5, Orquestar:** Los datos de adopción informan directa y
  rutinariamente la priorización de la hoja de ruta y las decisiones de
  inversión, y la organización puede rastrear movimientos de adopción
  específicos hasta decisiones específicas de producto e ingeniería con
  confianza.

## Ideas para el debate

1. ¿Cuál es una funcionalidad reciente donde nuestra prueba inicial y nuestra adopción retenida contaron historias muy distintas?
2. ¿La audiencia objetivo de nuestra última funcionalidad se definió con precisión antes del lanzamiento, o solo después?
3. ¿Qué funcionalidad de baja adopción merece una investigación honesta de causa raíz antes de que decidamos su destino?
4. ¿Alguna parte de nuestro reporte de adopción actual está inflada por exposición forzada?
5. ¿Qué revelaría emparejar los datos de adopción con datos de satisfacción sobre nuestra funcionalidad más usada?

## Conclusiones clave

- Distingue la **prueba inicial de la retención sostenida**; un pico por
  curiosidad o exposición forzada no es valor genuino y duradero.
- Mide la adopción frente a una **audiencia objetivo definida con
  precisión**, no una base de usuarios más amplia e irrelevante.
- **Investiga la causa específica** de la baja adopción antes de concluir
  que una funcionalidad fracasó; varias causas muy distintas exigen
  respuestas muy distintas.
- Vigila la adopción **inflada por exposición forzada o patrones
  oscuros**, y empareja la adopción con una **señal de satisfacción** para
  detectarlo.
- **Rastrea el movimiento de adopción hasta decisiones específicas** para
  convertir los datos en aprendizaje organizacional genuino.

## Referencias y lecturas adicionales

- *Lean Analytics*, de Alistair Croll y Benjamin Yoskovitz (métricas
  accionables frente a métricas de vanidad aplicadas a los datos de uso de
  producto).
- *Continuous Discovery Habits*, de Teresa Torres (conectar las decisiones
  de producto con la evidencia de resultados de clientes, incluidos los
  datos de adopción).
- *Hooked: How to Build Habit-Forming Products*, de Nir Eyal (la retención
  y la formación de hábitos, y la línea ética entre el valor genuino y los
  patrones oscuros).
- *Measure What Matters*, de John Doerr (el establecimiento de objetivos
  orientado a resultados aplicable a la fijación de objetivos de
  adopción).
