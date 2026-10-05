# 6.0 Introducción a la parte 6: Métricas de fiabilidad, operaciones, y seguridad

La parte 2 cubrió cómo un cambio pasa de un commit a producción; esta parte
cubre lo que ocurre una vez que está funcionando ahí, indefinidamente, bajo
condiciones reales que el equipo no puede controlar por completo. Las
métricas de fiabilidad, operaciones, y seguridad son donde las promesas de
la ingeniería de software se encuentran con la realidad sostenida: no "¿tuvo
éxito este despliegue?" sino "¿este sistema sigue funcionando, noche tras
noche, bajo carga, bajo ataque, y bajo la presión de una rotación de guardia
que tiene que ser sostenible durante años, no solo para el próximo
incidente?".

Los cuatro temas de esta parte siguen un arco deliberado. Los
indicadores y objetivos de nivel de servicio (tema 6.1) establecen el
vocabulario y la disciplina de fijación de objetivos de la que depende todo
lo demás en esta parte. Las métricas de incidentes (tema 6.2) miden lo
que ocurre cuando se incumple ese objetivo. Las métricas de guardia y
capacidad (tema 6.3) miden el coste humano y de infraestructura de
mantener el objetivo cumplido. Las métricas de seguridad y vulnerabilidad
(tema 6.4) extienden la misma disciplina de fiabilidad a un riesgo
distinto pero estrechamente relacionado: no "¿fallará esto por sí solo?"
sino "¿hará alguien que falle a propósito?". Los cuatro temas comparten
la disciplina central de este libro: nombrar la métrica, nombrar cómo se
manipula, y emparejarla con la salvaguarda que detecta esa manipulación.

Para los equipos grandes, las métricas de esta parte son donde las
promesas de la ingeniería se vuelven contractuales y, en contextos
gubernamentales, a veces legales. Las organizaciones empresariales
redactan acuerdos de nivel de servicio frente a las métricas que introduce
el tema 6.1, con penalizaciones financieras reales por incumplirlas;
las organizaciones gubernamentales operan infraestructura pública crítica
donde un fallo de fiabilidad o seguridad conlleva consecuencias que van
mucho más allá del balance de una sola empresa. Esta parte trata ese peso
con seriedad a lo largo de todo el texto.

## Temas de esta parte

- **6.1 Indicadores y objetivos de nivel de servicio, y presupuestos de
  error:** El vocabulario y la disciplina de fijación de objetivos que
  subyace a toda la ingeniería de fiabilidad de sitios, y cómo un
  presupuesto de error convierte la fiabilidad en un recurso gastable y
  gestionable en lugar de un absoluto inalcanzable.
- **6.2 Métricas de incidentes: detección, respuesta, y recuperación:**
  Medir con qué rapidez una organización nota, responde a, y resuelve un
  fallo, y la disciplina sin culpa que mantiene honesta esa medición.
- **6.3 Métricas de guardia, capacidad, y carga operativa:** El coste
  humano y de infraestructura de sostener la fiabilidad, y por qué una
  carga de guardia insostenible eventualmente se manifiesta como un
  problema de fiabilidad en sí mismo.
- **6.4 Métricas de gestión de seguridad y vulnerabilidades:** Extender el
  mismo enfoque disciplinado y emparejado con salvaguardas al riesgo de
  seguridad, desde el descubrimiento de vulnerabilidades hasta su
  remediación.

## Cómo se relacionan estos temas

El tema 6.1 establece la base sobre la que se construye cada tema
posterior de esta parte: sin un objetivo de nivel de servicio claro, "qué
tan grave fue este incidente" (tema 6.2) y "es sostenible nuestra
carga de guardia" (tema 6.3) no tienen ningún punto de referencia
compartido frente al cual medir. Las métricas de incidentes del tema
6.2 son, en un sentido real, el registro del gasto de presupuesto de error
que introduce el tema 6.1; el tema 6.3 mide la sostenibilidad del
sistema humano responsable de mantener ese gasto dentro del presupuesto; y
el tema 6.4 aplica el mismo pensamiento de objetivo y presupuesto a
una postura de seguridad que, si no se mide, tiende a recibir atención
solo de manera reactiva, después de un incidente, en lugar de
proactivamente.

Esta parte se conecta directamente con la parte 2: la tasa de fallos de
cambio de DORA y el tiempo de recuperación de despliegues fallidos (ambos
cubiertos en el tema 2.10) son, respectivamente, un indicador
adelantado y una instancia de las métricas de incidentes de esta parte.
También se conecta hacia adelante con la parte 8, donde la orientación
sobre paneles y madurez de programas se apoya en gran medida en el modelo
de presupuesto de error de esta parte como un ejemplo trabajado de cómo
convertir un objetivo abstracto (fiabilidad, seguridad) en un objetivo
concreto, rastreable, y no absoluto que un equipo realmente puede
gestionar día a día.
