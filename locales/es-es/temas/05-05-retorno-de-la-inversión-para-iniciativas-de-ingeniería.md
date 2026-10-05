# 5.5 Retorno de la inversión para iniciativas de ingeniería

## Visión general y motivación

Este tema cierra la parte 5 reuniendo todo lo que midieron los cuatro
temas anteriores, calidad, adopción, resultados, y coste, en el único
marco financiero que en última instancia gobierna la mayoría de las
decisiones de inversión de ingeniería importantes: el
**[retorno de la inversión](https://en.wikipedia.org/wiki/Return_on_investment)
(ROI)**. Ya sea que una organización esté decidiendo financiar una
modernización de plataforma, un esfuerzo de refactorización importante, o
una nueva línea de producto, alguien eventualmente tiene que responder la
pregunta en términos financieros: ¿esto vale lo que cuesta? Este tema
trata de responder esa pregunta con honestidad, usando las métricas que
este libro ya ha construido, en lugar de evitar la pregunta (lo cual cede
influencia sobre las decisiones de inversión a personas menos preparadas
para responderla bien) o responderla con un caso inflado e insostenible
que daña la credibilidad cuando no se sostiene.

La disciplina que recomienda este tema se apoya directamente en la
economía unitaria del tema 5.4 para el lado del coste de la ecuación,
y en las métricas de resultado del tema 5.3, con su tratamiento
honesto de la incertidumbre de atribución, para el lado del beneficio. Un
caso de ROI construido de esta manera es necesariamente más modesto y más
matizado que un número titular simple y atractivo, pero tiene la ventaja
decisiva que este libro ha enfatizado a lo largo de todo el texto:
sobrevive al escrutinio, y una organización que construye de manera
consistente casos de ROI defendibles gana más confianza, y por tanto más
autonomía, en las futuras decisiones de inversión que una que
ocasionalmente promete de más.

Para los equipos grandes, la disciplina de ROI es lo que separa a una
organización de ingeniería tratada como socio estratégico de una tratada
como centro de coste cuyo gasto se tolera en lugar de invertirse
activamente en él. Las organizaciones empresariales usan casos de ROI
rigurosos para competir con éxito por el capital frente a otras
inversiones de negocio; las organizaciones gubernamentales usan la
disciplina equivalente, a menudo replanteada como análisis de coste y
beneficio, para asegurar y sostener la financiación de tecnología pública
frente a la presión política y presupuestaria que tiene poca paciencia
para promesas vagas e infundadas.

## Principios clave

- **Un caso de ROI honesto se construye a partir de las otras métricas de
  este libro**, no se inventa por separado; el coste del tema 5.4, el
  beneficio de los temas 5.1 al 5.3.
- **El coste total de propiedad, no solo el coste inicial, pertenece al
  lado del coste.** El mantenimiento continuo, el soporte, y el coste de
  infraestructura se acumulan a lo largo de la vida de un sistema.
- **Las estimaciones de beneficio conllevan incertidumbre; decláralo
  explícitamente** en lugar de presentar un único número falsamente
  preciso.
- **Un hallazgo de ROI negativo o marginal es un resultado legítimo y
  útil.** La disciplina existe para informar las decisiones con
  honestidad, no para justificar decisiones ya tomadas.
- **Rastrea el ROI real después del hecho, no solo el caso proyectado de
  antemano.** Una proyección que nunca se comprueba frente a la realidad
  no le enseña nada a la organización.

## Recomendaciones

### Construye el lado del coste a partir del coste total de propiedad, no solo la inversión inicial

Incluye no solo el coste de desarrollo inicial sino el
**[coste total de propiedad](https://en.wikipedia.org/wiki/Total_cost_of_ownership)
(TCO)** completo: el mantenimiento continuo, la infraestructura (la
economía unitaria del tema 5.4 es directamente útil aquí), el
soporte, y el coste de oportunidad de la capacidad de ingeniería que
consume la iniciativa que podría haberse dedicado a un trabajo
alternativo. Un proyecto que parece barato basándose solo en el coste
inicial puede ser costoso a lo largo de toda su vida una vez que se
contabiliza honestamente la carga de mantenimiento continuo.

### Construye el lado del beneficio a partir de evidencia de resultado documentada y honesta

Extrae las estimaciones de beneficio de la disciplina de medición de
resultados de los temas 5.1 al 5.3: las mejoras de calidad traducidas
en un coste de incidencias y soporte reducido, los datos de adopción
traducidos en valor impulsado por el uso, y las correlaciones de
resultados de negocio construidas con el enfoque honesto de cadena causal
verificado frente a factores de confusión del tema 5.3. Evita inventar
una estimación de beneficio a partir de primeros principios o suposiciones
optimistas cuando hay datos históricos reales, medidos o comparables,
disponibles para fundamentarla en su lugar.

### Declara la incertidumbre explícitamente, usando un rango en lugar de un único número

Presenta las estimaciones de ROI como un rango (un caso conservador y un
caso optimista) en lugar de una cifra única y falsamente precisa, y
explica qué impulsa el rango: qué suposición específica, si resulta ser
optimista o pesimista, movería más el resultado. Esto refleja
directamente el principio de alfabetización estadística del tema 1.6,
aplicado a la proyección financiera, y protege la credibilidad del caso,
ya que una única estimación puntual que resulta equivocada daña la
confianza mucho más que un rango bien explicado dentro del cual cae el
resultado real.

### Trata un hallazgo negativo o marginal como un resultado legítimo

Construye tu proceso de análisis de ROI para que sea genuinamente capaz
de concluir "esto no vale la pena", y trata esa conclusión, cuando la
evidencia la respalde, como un resultado valioso en lugar de un fracaso
del análisis. Una organización conocida por producir siempre casos de ROI
positivos, sin importar la iniciativa, pierde rápidamente credibilidad,
porque las partes interesadas infieren correctamente que el análisis en
realidad no es independiente de la decisión a la que debe informar.

### Rastrea los resultados reales frente al caso proyectado, y cierra el ciclo públicamente

Después de que una iniciativa se completa, o alcanza un hito
significativo, compara los resultados reales medidos frente al rango
proyectado original, y publica esa comparación, incluyendo dónde estuvo
equivocada la proyección. Esta disciplina de cierre de ciclo, similar a la
recomendación de seguimiento de encuestas del tema 3.7, es lo que
construye la credibilidad de pronóstico de ROI a largo plazo de una
organización y mejora la precisión de las estimaciones futuras al crear
un ciclo de retroalimentación real y visible.

## Ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Afirmación de ROI simple y de un solo número | Convincente, fácil de comunicar | Falsamente precisa; vulnerable a estar equivocada y dañar la credibilidad |
| ROI basado en rango con incertidumbre declarada | Defendible, sobrevive al escrutinio, honesto sobre qué impulsa el rango | Más complejo de presentar; requiere más esfuerzo analítico |
| Análisis solo del coste inicial | Simple, rápido de producir | Subestima el coste real al omitir la carga de mantenimiento y soporte continuos |
| Análisis completo de coste total de propiedad | Preciso, imagen completa del verdadero coste de inversión | Requiere más recopilación de datos, particularmente para la proyección de coste continuo |

La tensión central es **simplicidad persuasiva frente a honestidad
defendible**, la misma tensión que nombró el tema 5.3 para las
afirmaciones de resultado en general, ahora aplicada específicamente al
caso financiero. Una afirmación de ROI simple, segura, y de un solo número
es más fácil de vender a quien toma la decisión en el momento, pero un
caso honesto, basado en rangos, con incertidumbre explícita y una
contabilidad completa de coste total de propiedad es lo que realmente se
sostiene a lo largo de la vida de la inversión y protege la credibilidad
de la organización para el próximo caso que necesite hacer.

## Preguntas para debatir con tu equipo

1. **Para nuestro último caso de inversión de ingeniería importante,
   ¿contabilizamos el coste total de propiedad, o solo el coste de
   desarrollo inicial?** Revisa el caso original y comprueba si se incluyó
   el mantenimiento continuo y el coste de infraestructura, y si no, estima
   cuánto habrían añadido.

2. **¿Nuestra estimación de beneficio se basó en evidencia de resultado
   documentada y medida, o se construyó a partir de suposiciones
   optimistas?** Rastrea el lado del beneficio de un caso reciente hasta su
   fuente evidencial real y evalúa con honestidad cuán fundamentado estaba
   realmente.

3. **¿Alguna vez hemos presentado una estimación de ROI como un único
   número cuando un rango habría sido más honesto?** Debate cómo habría
   sido el rango para un caso reciente, y qué suposición específica
   impulsó la amplitud de ese rango.

4. **¿Nuestro proceso de análisis de ROI ha concluido alguna vez que una
   iniciativa no valía la pena perseguir, y cómo se recibió esa
   conclusión?** Si todos los análisis pasados han concluido de manera
   positiva, debate con honestidad si eso refleja una selección de
   iniciativas genuinamente acertada o un proceso que solo produce la
   respuesta que las partes interesadas quieren escuchar.

5. **Para una iniciativa completada, ¿alguna vez volvimos a comparar los
   resultados reales frente al caso proyectado original?** Si no, elige
   una iniciativa real y completada y haz esta comparación ahora como
   ejercicio grupal, por incómoda que resulte la brecha entre la
   proyección y la realidad.

6. **¿Qué se necesitaría para que nuestro próximo caso de ROI importante
   sea defendible bajo un escrutinio genuinamente escéptico de alguien
   fuera de ingeniería?** Repasa tu próximo caso planificado e identifica
   el eslabón más débil de su cadena evidencial actual antes de que llegue
   a quien toma la decisión.

## Enfoque sectorial

**Startup.** El análisis formal de ROI a menudo es menos relevante que una
pregunta más simple de supervivencia y crecimiento: ¿esta inversión nos
ayuda a alcanzar el próximo hito o ronda de financiación? Aun así, aplica
el mismo principio de honestidad, resiste inflar un caso para justificar
una decisión con la que el equipo ya se ha comprometido emocionalmente, ya
que el escrutinio de los inversores eventualmente aplicará el mismo
escepticismo que este tema recomienda aplicar internamente primero.

**Pequeña empresa.** Mantén el análisis de ROI proporcionado al tamaño de
la decisión; una inversión de plataforma importante y plurianual merece
toda la disciplina que recomienda este tema, mientras que una compra
de herramientas pequeña no necesita el mismo rigor. Concentra el esfuerzo
de análisis formal en tus pocas decisiones más grandes y consecuentes.

**Empresa.** La disciplina de ROI a esta escala es lo que determina si la
ingeniería compite con éxito por el capital frente a otras inversiones de
negocio con tradiciones de análisis financiero más establecidas.
Construye la disciplina completa de coste total de propiedad y basada en
rangos que recomienda este tema como práctica estándar, e invierte en
el rastreo de cierre de ciclo que construye la credibilidad de pronóstico
a largo plazo.

**Gobierno.** El análisis de coste y beneficio, el equivalente del sector
público al ROI, con frecuencia es una parte formal y requerida de la
justificación presupuestaria, y la honestidad sobre la incertidumbre y el
coste total de propiedad es especialmente importante donde los hallazgos
pueden enfrentar auditoría externa o escrutinio legislativo. Un análisis
que exageró el beneficio o subestimó el coste, una vez descubierto, causa
un daño duradero a la credibilidad de un programa ante su organismo
financiador.

## Ejemplos

**Empresa.** El liderazgo de ingeniería de una empresa de tecnología
logística propuso una inversión importante para migrar un monolito
heredado a una arquitectura de microservicios, presentando inicialmente
una única cifra de ROI optimista basada principalmente en mejoras
proyectadas de frecuencia de despliegue. El cuestionamiento escéptico de
una parte interesada de finanzas expuso que el caso no había contabilizado
la sustancial complejidad operativa continua y el coste de
infraestructura que introduciría la nueva arquitectura. Un caso revisado,
construido con el coste total de propiedad completo y un rango que
reflejaba tanto escenarios conservadores como optimistas de mejora de
entrega, mostró un retorno esperado más modesto pero todavía positivo, y,
de manera crucial, sobrevivió al escrutinio del equipo de finanzas y
aseguró la financiación, donde el caso original exagerado probablemente no
lo habría logrado.

**Gobierno.** El programa de digitalización de registros judiciales de un
gobierno estatal construyó su caso inicial de coste y beneficio en torno
únicamente al ahorro de coste administrativo, con una única cifra de ROI
precisa. Una revisión independiente de la oficina de presupuesto encontró
que la proyección no había contabilizado los ahorros de tiempo del lado
del ciudadano ni la reducción de las tasas de error en los procedimientos
legales, beneficios que eran reales pero se habían omitido porque eran
más difíciles de cuantificar que el coste administrativo. Un análisis
revisado incorporó estos beneficios con un rango explícitamente declarado
que reflejaba la incertidumbre de medición genuina involucrada,
produciendo un caso más sólido y, de manera importante, más defendible
que la oficina de presupuesto finalmente aprobó, precisamente porque era
transparente sobre lo que sabía y no sabía con confianza.

## Caso de negocio: motivaciones, retorno de la inversión y coste total de propiedad

El retorno de una disciplina de ROI rigurosa es, de manera algo
recursiva, la propia credibilidad de la disciplina de ROI: una
organización que construye de manera consistente casos honestos y
defendibles, incluyendo concluir ocasionalmente que una iniciativa no vale
la pena perseguir, gana mayor confianza y por tanto más autonomía en las
futuras decisiones de inversión que una cuyos casos se ven con
escepticismo porque han prometido de más antes. El ejemplo de la empresa
de logística anterior lo muestra directamente: el caso revisado, más
modesto pero honesto, tuvo éxito donde el original inflado probablemente
habría fracasado bajo escrutinio.

El coste total de propiedad de esta disciplina es el esfuerzo analítico
de construir estimaciones de coste total de propiedad completas,
fundamentar las estimaciones de beneficio en evidencia real, declarar la
incertidumbre explícitamente, y rastrear los resultados reales después
del hecho. Ese esfuerzo es genuinamente más trabajo que una propuesta
rápida, segura, y de un solo número, y vale la pena precisamente porque la
alternativa arriesga la credibilidad de la organización para cada caso
futuro que necesitará hacer.

## Antipatrones y errores comunes

- **Análisis solo del coste inicial, omitiendo el coste total de
  propiedad:** subestima el verdadero coste de inversión, particularmente
  para sistemas de larga vida.
- **Inventar estimaciones de beneficio a partir de suposiciones optimistas
  en lugar de evidencia documentada:** produce un caso que no sobrevive al
  escrutinio.
- **Presentar un único número de ROI falsamente preciso en lugar de un
  rango declarado:** daña la credibilidad cuando el resultado real difiere
  de la estimación puntual.
- **Un proceso de análisis que solo produce conclusiones positivas:**
  correctamente interpretado por las partes interesadas como evidencia de
  que el proceso no es genuinamente independiente.
- **No rastrear nunca los resultados reales frente a la proyección
  original:** pierde el ciclo de retroalimentación que mejoraría la
  precisión de los pronósticos futuros.
- **Construir un caso para justificar una decisión con la que ya se está
  comprometido emocionalmente, en lugar de informar genuinamente la
  decisión:** la causa raíz de la mayoría de los casos de ROI inflados.

## Modelo de madurez

- **Nivel 1, Iniciar:** Los casos de ROI son informales, no respaldados
  por evidencia documentada, y casi siempre concluyen de manera positiva
  sin importar la iniciativa.
- **Nivel 2, Desarrollar:** Algunos casos incluyen estimaciones de coste y
  beneficio, pero el coste total de propiedad se aplica de manera
  inconsistente y la incertidumbre rara vez se declara explícitamente.
- **Nivel 3, Estandarizar:** Los casos de ROI usan de manera consistente
  el coste total de propiedad completo, evidencia de beneficio
  documentada, y un rango declarado que refleja la incertidumbre genuina,
  en toda la organización.
- **Nivel 4, Gestionar:** Los resultados reales se rastrean frente a las
  proyecciones originales después de la finalización, y la comparación se
  publica y se usa para mejorar los pronósticos futuros.
- **Nivel 5, Orquestar:** La organización tiene un historial demostrado y
  plurianual de pronósticos de ROI precisos y honestos, incluyendo casos
  que correctamente concluyeron que una iniciativa no valía la pena
  perseguir, y este historial le gana a la ingeniería un asiento
  confiable en las decisiones de inversión estratégica.

## Ideas para el debate

1. ¿Cuál es nuestro caso de inversión más grande actualmente, y podría sobrevivir hoy a un escrutinio genuinamente escéptico?
2. ¿Alguna vez hemos rastreado el resultado real de una iniciativa completada frente a su proyección de ROI original?
3. ¿Qué necesitaría cambiar en nuestro proceso de análisis para ser genuinamente capaz de concluir "no vale la pena"?
4. ¿Qué componente de coste total de propiedad falta con más frecuencia en nuestras estimaciones de coste actuales?
5. ¿Cuál es el eslabón evidencial individual más débil en nuestro próximo caso de inversión importante planificado?

## Conclusiones clave

- Construye los casos de ROI a partir de las **otras métricas de este
  libro**, el coste de la economía unitaria (tema 5.4), el beneficio
  de la evidencia de resultado documentada (temas 5.1 al 5.3), no de
  suposiciones inventadas.
- Incluye el **coste total de propiedad**, no solo el coste inicial, y
  declara las estimaciones de beneficio como un **rango con incertidumbre
  explícita**, no un único número falsamente preciso.
- Construye un proceso genuinamente capaz de concluir que una iniciativa
  **no vale la pena perseguir**; un análisis que solo produce conclusiones
  positivas no es creíble.
- **Rastrea los resultados reales frente a la proyección** después de la
  finalización, y publica la comparación para construir credibilidad de
  pronóstico a largo plazo.
- Una disciplina de ROI honesta y defendible es lo que le gana a la
  ingeniería un **asiento confiable** en las decisiones de inversión
  estratégica con el tiempo.

## Referencias y lecturas adicionales

- *How to Measure Anything*, de Douglas W. Hubbard (cuantificar el valor
  incierto y construir estimaciones defendibles basadas en rangos).
- *Cloud FinOps*, de J.R. Storment y Mike Fuller (la disciplina de coste
  total de propiedad para la inversión en infraestructura basada en la
  nube).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole
  Forsgren, Jez Humble, y Gene Kim (la base de investigación para conectar
  la inversión en prácticas de entrega con el retorno de negocio).
- Circular A-94 de la Oficina de Administración y Presupuesto de Estados
  Unidos, orientación sobre el análisis de coste y beneficio para programas
  federales (disciplina de ROI del sector público).
