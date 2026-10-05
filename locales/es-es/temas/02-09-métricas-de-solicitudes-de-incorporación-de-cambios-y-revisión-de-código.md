# 2.9 Métricas de solicitudes de incorporación de cambios y revisión de código

## Visión general y motivación

La [revisión de código](https://en.wikipedia.org/wiki/Code_review) suele
ser el mayor contribuyente individual al tiempo de espera dentro del
desglose de tiempo de ciclo del tema 2.6, y también es la etapa que
está más directamente bajo el control propio de un equipo para mejorar, a
diferencia de un cuello de botella de plataforma compartido o una
dependencia externa. Este tema cubre las métricas específicas que
viven dentro de la etapa de revisión: tiempo hasta la primera revisión,
tamaño de la solicitud de incorporación de cambios, número de iteraciones
de revisión y distribución de la carga de revisores, y cómo usarlas para
mejorar la velocidad de revisión sin sacrificar el beneficio real de
calidad que se supone que aporta la revisión.

El riesgo al que este tema está más atento es uno que este libro
todavía no ha cubierto directamente: optimizar la velocidad de revisión
puede erosionar en silencio la calidad de la revisión si se persigue sin
cuidado. Un equipo que reduce a la mitad su tiempo hasta la primera
revisión aprobando todo con un sello de goma ha mejorado una métrica
mientras destruye el valor real de la práctica. Cada recomendación de este
tema está escrita con esa compensación a la vista, porque las métricas
de solicitudes de incorporación de cambios están entre las más fáciles de
este libro de manipular de una forma que se ve bien en un tablero mientras
empeora de forma medible la base de código subyacente.

Para los equipos grandes, las métricas de revisión revelan problemas de
equilibrio de carga que de otro modo son invisibles: un pequeño número de
ingenieros veteranos absorbiendo una parte desproporcionada de la carga de
revisión, un equipo o área de código específica donde las revisiones se
estancan de forma consistente, o un patrón de solicitudes de incorporación
de cambios sobredimensionadas que hacen prácticamente imposible una
revisión exhaustiva sin importar la diligencia del revisor. Estos patrones
se agravan a escala mucho más de lo que lo hacen en un equipo pequeño,
donde todos pueden ver el desequilibrio directamente sin necesitar una
métrica que lo saque a la luz.

## Principios clave

- **El tiempo hasta la primera revisión suele ser la palanca más grande,
  no la exhaustividad de la revisión en sí misma.** La mayor parte del
  retraso viene de una solicitud de incorporación de cambios esperando a
  que la miren, no de que la conversación de revisión tarde una vez que
  empieza.
- **Las solicitudes de incorporación de cambios más pequeñas se revisan
  más rápido y más a fondo, no solo más rápido.** El tamaño es un punto de
  apalancamiento tanto para la velocidad como para la calidad
  simultáneamente.
- **La velocidad de revisión y la calidad de revisión no están
  automáticamente en tensión, pero se pueden intercambiar sin cuidado.**
  Protégete explícitamente de ese intercambio.
- **El desequilibrio de carga de revisores es común y suele ser invisible
  sin una métrica.** A menudo, un pequeño número de personas absorbe una
  parte desproporcionada.
- **Estas métricas están expuestas al riesgo de manipulación del sello de
  goma.** Una aprobación rápida sin escrutinio real derrota todo el
  propósito de la revisión.

## Recomendaciones

### Rastrea el tiempo hasta la primera revisión como métrica de velocidad principal

Mide el intervalo desde que se abre una solicitud de incorporación de
cambios hasta el primer comentario sustantivo o aprobación de un revisor,
instrumentado automáticamente desde tu plataforma de control de versiones.
Este suele ser el mayor contribuyente al tiempo de espera dentro de la
etapa de revisión (tema 2.5, tema 2.6), y mejorarlo, mediante
normas más claras de asignación de revisión, prácticas de notificación o
bloques de tiempo dedicados a la revisión, suele producir la mayor mejora
individual disponible para un equipo en el tiempo de ciclo general.

### Rastrea el tamaño de las solicitudes de incorporación de cambios y fomenta activamente cambios más pequeños

Mide las líneas cambiadas o los archivos tocados por solicitud de
incorporación de cambios, y trata un tamaño mediano persistentemente
grande como una señal que merece abordarse directamente. Las solicitudes
de incorporación de cambios más pequeñas se revisan más rápido, se revisan
más a fondo (un revisor puede realmente tener todo el cambio en la cabeza)
y son más fáciles de revertir si algo sale mal, conectando directamente con
el principio de tamaño de lote detrás de la frecuencia de despliegue del
tema 2.10. Fomenta dividir los cambios grandes en una secuencia de
solicitudes de incorporación de cambios más pequeñas y revisables de forma
independiente siempre que el trabajo lo permita.

### Monitoriza explícitamente la distribución de la carga de revisores

Rastrea el número de revisiones completadas por persona en una ventana
móvil, y vigila específicamente si un pequeño número de personas absorbe
una parte desproporcionada. Este patrón es común, a menudo recae sobre los
ingenieros más veteranos o más confiables, y crea tanto un cuello de
botella (su disponibilidad limita todo el rendimiento de revisión del
equipo) como un riesgo de agotamiento (el tema 3.2 cubre las métricas
de bienestar con más profundidad). Rota la responsabilidad de revisión de
forma deliberada en lugar de dejar que se concentre por defecto en quien
responda más rápido.

### Protégete explícitamente contra el riesgo de manipulación del sello de goma

Empareja el tiempo hasta la primera revisión con una señal de calidad: la
tasa de defectos o incidencias rastreadas hasta cambios que se aprobaron sin
ningún comentario de revisión, o la tasa de correcciones posteriores a la
fusión necesarias para código recién revisado. Un equipo que mejora la
velocidad de revisión aprobando sin escrutinio real debería ver que esta
barrera de contención se degrada, que es precisamente el principio de
emparejamiento del tema 1.2 aplicado a esta familia de métricas
específica. Nunca persigas la velocidad de revisión sin tener a la vista
esta contramétrica.

### Usa el número de iteraciones de revisión para detectar fricción, no para juzgar a personas

El número de rondas de revisión que atraviesa una solicitud de
incorporación de cambios antes de fusionarse puede señalar fricción
genuina, requisitos poco claros, desacuerdo sobre el enfoque, expectativas
de estilo inconsistentes, algo que merece investigarse a nivel de proceso.
Evita usar este número para juzgar directamente a autores o revisores
individuales; un número alto de iteraciones suele ser más una señal de
sistema o de comunicación que una señal personal, y tratarlo como un
marcador individual arriesga precisamente la deriva evaluativa contra la
que advierte el tema 1.1.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Optimizar puramente para el tiempo hasta la primera revisión | Rápido, señal clara, fácil de instrumentar | Puede incentivar una revisión superficial y de sello de goma si no se protege |
| Optimizar puramente para reducir el tamaño de las solicitudes | Mejora la velocidad y la exhaustividad simultáneamente | No todo el trabajo se divide limpiamente en incrementos pequeños |
| Rotar la carga de revisión de forma equitativa | Reduce el riesgo de cuello de botella y de agotamiento | Puede ralentizar la revisión de código especializado y difícil de revisar que necesita experiencia específica |
| Concentrar la revisión entre ingenieros veteranos | Experiencia profunda de dominio aplicada de forma consistente | Crea un cuello de botella y un riesgo de agotamiento con el tiempo |

La tensión central es **velocidad frente a profundidad de escrutinio**.
Cada técnica de este tema para acelerar la revisión, primera respuesta
más rápida, solicitudes más pequeñas, carga de revisores más distribuida,
conlleva cierto riesgo de sacrificar el escrutinio real si se persigue sin
la barrera de contención de calidad que recomienda este tema. Resuélvela
emparejando cada métrica de velocidad con una señal de calidad, rastreada
en el mismo periodo, para que un equipo pueda distinguir una mejora de
proceso genuina de un estándar de revisión que se erosiona en silencio.

## Preguntas para debatir con tu equipo

1. **¿Cuál es nuestro tiempo real hasta la primera revisión, y cuánto de
   nuestro tiempo de ciclo general consume la etapa de revisión?** Extrae
   el número real en lugar de confiar en la impresión; el tiempo de espera
   de revisión suele ser mayor de lo que los equipos asumen, precisamente
   porque es fácil subestimar el tiempo pasado esperando frente al tiempo
   trabajando activamente.

2. **¿Cuál es nuestro tamaño mediano de solicitud de incorporación de
   cambios, y cuánto se reduciría nuestro retraso de revisión si ese tamaño
   bajara?** Las solicitudes grandes tardan más en revisarse y tienen más
   probabilidad de recibir una revisión superficial simplemente porque un
   revisor no puede tener todo en la cabeza a la vez. Mira tu distribución
   real de tamaños, no solo la mediana.

3. **¿Está la carga de revisión concentrada en un pequeño número de
   personas, y qué pasaría con nuestro rendimiento de revisión si una de
   ellas no estuviera disponible durante dos semanas?** Esta pregunta saca
   a la luz un riesgo de cuello de botella y un riesgo de agotamiento a la
   vez. Extrae datos reales de carga de revisores en lugar de confiar en la
   impresión.

4. **¿Hemos mejorado alguna vez una métrica de velocidad de revisión de una
   forma que, en retrospectiva, redujo el escrutinio real?** Sé honesto
   aquí; este es precisamente el riesgo de sello de goma que nombra este
   tema, y es fácil deslizarse hacia él sin ninguna decisión
   deliberada de hacerlo.

5. **¿Qué suele señalar en nuestro equipo un número alto de iteraciones de
   revisión: desacuerdo genuino, requisitos poco claros o expectativas de
   estilo inconsistentes?** Mira una muestra de solicitudes con un número
   inusualmente alto de iteraciones y diagnostica el patrón real, en lugar
   de asumir que refleja mal ni al autor ni al revisor.

6. **¿Tenemos una barrera de contención de calidad emparejada con nuestras
   métricas de velocidad de revisión, o estamos rastreando la velocidad de
   forma aislada?** Si la respuesta honesta es que no existe tal barrera de
   contención, ese es un vacío que merece cerrarse antes de seguir
   empujando la velocidad de revisión, según el principio de emparejamiento
   del tema 1.2.

## Enfoque sectorial

**Startup.** La revisión suele ser rápida por defecto con un equipo
pequeño, a veces casi demasiado rápida, revisión de un solo aprobador con
escrutinio mínimo porque todos confían en todos. El riesgo que hay que
vigilar a medida que crece el equipo es que la calidad de revisión no
escale junto con el tamaño del equipo, ya que la confianza informal que
funcionaba para cinco ingenieros no funciona automáticamente para
cincuenta.

**Pequeña empresa.** La mayoría de las plataformas de control de versiones
reportan estadísticas de tiempo hasta la fusión y número de revisiones de
serie; úsalas en lugar de construir instrumentación personalizada. La
principal disciplina que merece adoptarse es simplemente notar si la carga
de revisión se ha concentrado en silencio en una o dos personas a medida
que ha crecido el equipo.

**Empresa grande.** El desequilibrio de carga de revisores y los cuellos de
botella de conocimiento especializado son especialmente comunes aquí,
donde una experiencia profunda de dominio en un sistema crítico puede
concentrar la responsabilidad de revisión en un grupo pequeño sin importar
el tamaño del equipo. Invierte en compartir conocimiento de forma
deliberada y en la rotación de revisión para repartir la experiencia,
reduciendo tanto el cuello de botella como el riesgo de factor de autobús
de que esa experiencia viva en muy pocas personas.

**Sector público.** Los procesos de revisión aquí a menudo llevan un peso
de cumplimiento junto a los objetivos de calidad, lo que puede hacer que
las solicitudes de incorporación de cambios sean más grandes y las
revisiones más lentas por diseño. Donde requisitos de cumplimiento
genuinos exijan una revisión exhaustiva, enfoca el esfuerzo de mejora en
reducir el tiempo de espera (asignación de revisión más rápida, triaje más
claro) en lugar de comprometer la profundidad real de la revisión, y
documenta explícitamente la compensación si el escrutinio debe seguir
siendo intenso por razones regulatorias.

## Ejemplos

**Empresa grande.** La organización de ingeniería de una empresa de
ciberseguridad encontró que un puñado de ingenieros principales estaba
completando más del 40% de todas las revisiones de código en una
organización de doscientas personas, un desequilibrio que nadie había
medido directamente hasta que se extrajeron los datos de carga de
revisores. Esta concentración era tanto un cuello de botella, ya que la
disponibilidad de esos ingenieros limitaba el rendimiento de revisión de
toda la organización, como un riesgo de agotamiento señalado por separado
por una encuesta de compromiso (tema 3.2). La organización introdujo un
programa estructurado de rotación de revisión emparejado con sesiones
específicas de intercambio de conocimiento, y en dos trimestres la carga de
revisión se había repartido entre un grupo mucho más amplio, con el tiempo
hasta la primera revisión mejorando como efecto secundario directo de la
reducción del cuello de botella.

**Sector público.** El equipo de ingeniería de una autoridad tributaria,
bajo presión para mejorar la velocidad de entrega, fijó el objetivo de
reducir a la mitad el tiempo hasta la primera revisión. En un trimestre se
alcanzó el objetivo, pero una auditoría de calidad posterior encontró un
fuerte aumento en solicitudes de incorporación de cambios de corrección de
defectos posteriores a la fusión, concentradas en cambios que se habían
aprobado con un único comentario breve. La solución del equipo emparejó el
objetivo de velocidad con una barrera de contención de calidad explícita,
la tasa de correcciones posteriores a la fusión necesarias en las dos
semanas siguientes a una revisión, y volvió a formar al equipo sobre lo que
realmente requería una revisión sustantiva, restaurando el escrutinio
genuino mientras conservaba la mayor parte de la mejora de velocidad que
había venido de una mejor asignación de revisión y tamaños de solicitud más
pequeños.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de unas métricas de revisión bien gestionadas es una entrega más
rápida sin sacrificar la calidad, que es una combinación poco común: la
mayoría de las mejoras de entrega intercambian velocidad por riesgo en
algún punto, pero las mejoras en la etapa de revisión, solicitudes más
pequeñas, mejor distribución de carga, primera respuesta más rápida,
mejoran genuinamente ambas cosas de forma simultánea cuando se persiguen
con la barrera de contención de calidad que recomienda este tema. El
ejemplo de ciberseguridad de arriba es típico: arreglar un cuello de
botella mejoró la velocidad mientras la calidad de revisión subyacente, si
acaso, mejoró a medida que la experiencia se repartió más ampliamente.

El coste total de propiedad es bajo: la mayoría de estas métricas vienen
directamente de los datos existentes de la plataforma de control de
versiones con una instrumentación adicional mínima, y los cambios de
proceso hacia los que apuntan, rotación de revisión, fomentar solicitudes
más pequeñas, cuestan sobre todo disciplina en lugar de inversión en
herramientas.

## Antipatrones y errores comunes

- **Optimizar el tiempo hasta la primera revisión sin una barrera de
  contención de calidad emparejada:** invita a una aprobación de sello de
  goma que derrota el propósito de la revisión.
- **Ignorar la concentración de carga de revisores:** crea tanto un cuello
  de botella como un riesgo de agotamiento que permanece invisible hasta
  que se mide.
- **Tratar el número de iteraciones de revisión como un marcador
  individual:** suele ser más una señal de sistema o de comunicación que
  una señal personal.
- **Aceptar solicitudes de incorporación de cambios persistentemente
  grandes como inevitables:** la mayoría de los cambios grandes se pueden
  dividir más de lo que los equipos asumen inicialmente.
- **Aplicar una profundidad de revisión uniforme sin importar el riesgo del
  cambio:** desperdicia escrutinio en cambios de bajo riesgo mientras
  potencialmente subescrutina los de alto riesgo.
- **Medir la velocidad de revisión pero nunca comprobar si el escrutinio
  real disminuyó junto con ella:** la forma más común de que esta familia
  de métricas se manipule de forma no intencionada.

## Modelo de madurez

- **Nivel 1, Iniciar:** Las métricas de revisión no se rastrean; la
  distribución de carga de revisores y el tamaño de las solicitudes son
  invisibles.
- **Nivel 2, Desarrollar:** Existen algunos datos de velocidad de revisión
  por defecto de la plataforma, pero no hay ninguna barrera de contención
  de calidad ni gestión activa de la carga de revisores.
- **Nivel 3, Estandarizar:** El tiempo hasta la primera revisión, el
  tamaño de las solicitudes y la carga de revisores se rastrean de forma
  consistente, con una barrera de contención de calidad explícita
  emparejada con las mejoras de velocidad.
- **Nivel 4, Gestionar:** La carga de revisores se reequilibra activamente
  mediante rotación e intercambio de conocimiento; los patrones de número
  de iteraciones se investigan a nivel de proceso en lugar de a nivel
  individual.
- **Nivel 5, Orquestar:** Las métricas de la etapa de revisión informan
  directamente la inversión en proceso, y la organización puede demostrar
  una mejora simultánea tanto en la velocidad de revisión como en los
  resultados de calidad ligados a la revisión durante un periodo
  sostenido.

## Ideas para el debate

1. ¿Cuál es nuestro tiempo mediano actual hasta la primera revisión, y adónde va realmente ese tiempo?
2. ¿Está nuestra carga de revisión concentrada en un pequeño número de personas, y cuál es el riesgo si una no está disponible?
3. ¿Hemos mejorado alguna vez la velocidad de revisión a costa del escrutinio real, aunque fuera sin querer?
4. ¿Cuál es nuestro tamaño mediano de solicitud de incorporación de cambios, y cuánto más pequeños podrían ser realmente la mayoría de los cambios?
5. ¿Tratamos un número alto de iteraciones de revisión como una señal de sistema o como un juicio individual?

## Conclusiones clave

- El **tiempo hasta la primera revisión** suele ser la palanca individual
  más grande dentro de la etapa de revisión, más que la propia duración de
  la conversación de revisión.
- Las **solicitudes de incorporación de cambios más pequeñas** mejoran
  simultáneamente la velocidad y la exhaustividad de la revisión.
- El **desequilibrio de carga de revisores** es común y suele ser
  invisible sin una medición directa; crea tanto un cuello de botella como
  un riesgo de agotamiento.
- Empareja cada métrica de velocidad de revisión con una **barrera de
  contención de calidad** explícita para detectar el riesgo de
  manipulación del sello de goma al que es especialmente propensa esta
  familia de métricas.
- Usa el **número de iteraciones de revisión** para diagnosticar fricción a
  nivel de sistema, no para juzgar a autores o revisores individuales.

## Referencias y lecturas adicionales

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (prácticas de revisión de código y su
  relación con el rendimiento de entrega).
- Investigación *Modern Code Review* de Alberto Bacchelli y Christian Bird
  (estudio empírico de las prácticas de revisión de código a escala).
- *Peer Reviews in Software: A Practical Guide*, de Karl E. Wiegers
  (diseño del proceso de revisión y sus compensaciones).
- *The Principles of Product Development Flow*, de Donald G. Reinertsen
  (razonamiento de tamaño de lote aplicado al dimensionamiento de
  solicitudes de incorporación de cambios).
