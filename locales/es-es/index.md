# Métricas de ingeniería de software

Un libro de trabajo sobre cómo medir bien la **ingeniería de software**: cómo elegir métricas que reflejen resultados reales y no solo actividad, los marcos en los que se apoya este libro (el Flow Framework, el marco SPACE, la teoría de colas y las métricas DORA), las familias de métricas que importan y cómo dirigir un programa de métricas que mejore a un equipo en lugar de vigilarlo.

El libro cubre la entrega y el flujo, la experiencia del desarrollador, el código y la calidad, los resultados de producto y de negocio, la fiabilidad y la seguridad, y cómo la IA generativa está cambiando el significado de estos números.

- **[¿Qué son las métricas de ingeniería de software?](preliminares/qué-son-las-métricas-de-ingeniería-de-software.md):** empieza aquí
- **[Introducción](preliminares/introducción.md):** qué es este libro y cómo leerlo
- **[Tabla de contenidos](preliminares/tabla-de-contenidos.md):** la lista completa de temas

## Cómo leer este libro

Las partes son números enteros; los temas son decimales. El tema **N.0** presenta cada parte; **N.1, N.2, …** son sus temas. La parte 9 reúne los apéndices (glosario, una referencia de fórmulas, listas de verificación, plantillas, una autoevaluación de madurez, referencias y un índice). Cada tema sobre una familia de métricas expone principios, recomendaciones, compensaciones, una perspectiva por sector, ejemplos (de empresa y de gobierno), un caso de negocio (ROI/TCO), antipatrones, un modelo de madurez, preguntas para debatir y referencias, y nombra cómo se manipula la métrica y qué barrera de protección lo detecta. Adopta de forma gradual; no todo de golpe.

## Tabla de contenidos

### Parte 1: Fundamentos de la medición
- [1.0 Introducción](temas/01-00-fundamentos-de-la-medición.md)
- [1.1 Por qué medir la ingeniería de software](temas/01-01-por-qué-medir-la-ingeniería-de-software.md)
- [1.2 La ley de Goodhart y la psicología de las métricas](temas/01-02-la-ley-de-goodhart-y-la-psicología-de-las-métricas.md)
- [1.3 Resultados antes que producción: elegir qué medir](temas/01-03-resultados-antes-que-producción.md)
- [1.4 Gobernanza y propiedad de las métricas](temas/01-04-gobernanza-y-propiedad-de-las-métricas.md)
- [1.5 Fuentes de datos e instrumentación](temas/01-05-fuentes-de-datos-e-instrumentación.md)
- [1.6 Alfabetización estadística para métricas de ingeniería](temas/01-06-alfabetización-estadística-para-métricas-de-ingeniería.md)

### Parte 2: Métricas de flujo
- [2.0 Introducción](temas/02-00-métricas-de-flujo.md)
- [2.1 El Flow Framework](temas/02-01-el-flow-framework.md)
- [2.2 Elementos de flujo: funcionalidades, defectos, riesgos y deuda](temas/02-02-elementos-de-flujo.md)
- [2.3 Velocidad de flujo y distribución de flujo](temas/02-03-velocidad-de-flujo-y-distribución-de-flujo.md)
- [2.4 Tiempo de flujo y carga de flujo](temas/02-04-tiempo-de-flujo-y-carga-de-flujo.md)
- [2.5 Eficiencia de flujo y trabajo en curso](temas/02-05-eficiencia-de-flujo-y-trabajo-en-curso.md)
- [2.6 Tiempo de ciclo y sus componentes](temas/02-06-tiempo-de-ciclo-y-sus-componentes.md)
- [2.7 Teoría de colas](temas/02-07-teoría-de-colas.md)
- [2.8 Métricas Lean de cadena de valor](temas/02-08-métricas-lean-de-cadena-de-valor.md)
- [2.9 Métricas de solicitudes de incorporación de cambios y revisión de código](temas/02-09-métricas-de-solicitudes-de-incorporación-de-cambios-y-revisión-de-código.md)
- [2.10 El marco de métricas DORA](temas/02-10-el-marco-de-métricas-dora.md)

### Parte 3: Experiencia del desarrollador y el marco SPACE
- [3.0 Introducción](temas/03-00-experiencia-del-desarrollador-y-el-marco-space.md)
- [3.1 El marco SPACE](temas/03-01-el-marco-space.md)
- [3.2 Métricas de satisfacción y bienestar](temas/03-02-métricas-de-satisfacción-y-bienestar.md)
- [3.3 Métricas de rendimiento e indicadores indirectos de resultado](temas/03-03-métricas-de-rendimiento-e-indicadores-indirectos-de-resultado.md)
- [3.4 Métricas de actividad y sus límites](temas/03-04-métricas-de-actividad-y-sus-límites.md)
- [3.5 Métricas de comunicación y colaboración](temas/03-05-métricas-de-comunicación-y-colaboración.md)
- [3.6 Eficiencia y flujo: trabajo profundo e interrupciones](temas/03-06-eficiencia-y-flujo.md)
- [3.7 Encuestas de experiencia del desarrollador y métricas DevEx](temas/03-07-encuestas-de-experiencia-del-desarrollador-y-métricas-devex.md)

### Parte 4: Métricas de código y calidad
- [4.0 Introducción](temas/04-00-métricas-de-código-y-calidad.md)
- [4.1 Métricas de complejidad de código](temas/04-01-métricas-de-complejidad-de-código.md)
- [4.2 Cobertura de pruebas y eficacia de pruebas](temas/04-02-cobertura-de-pruebas-y-eficacia-de-pruebas.md)
- [4.3 Cambios acumulados de código y análisis de puntos calientes](temas/04-03-cambios-acumulados-de-código-y-análisis-de-puntos-calientes.md)
- [4.4 Análisis estático y métricas de olores de código](temas/04-04-análisis-estático-y-métricas-de-olores-de-código.md)
- [4.5 Medición de la deuda técnica](temas/04-05-medición-de-la-deuda-técnica.md)
- [4.6 Métricas de documentación y conocimiento](temas/04-06-métricas-de-documentación-y-conocimiento.md)

### Parte 5: Métricas de producto y negocio
- [5.0 Introducción](temas/05-00-métricas-de-producto-y-negocio.md)
- [5.1 Tasa de defectos escapados y escapes de calidad](temas/05-01-tasa-de-defectos-escapados-y-escapes-de-calidad.md)
- [5.2 Adopción de funcionalidades y métricas de uso](temas/05-02-adopción-de-funcionalidades-y-métricas-de-uso.md)
- [5.3 Métricas de resultados de clientes y negocio](temas/05-03-métricas-de-resultados-de-clientes-y-negocio.md)
- [5.4 Coste y economía unitaria de la ingeniería](temas/05-04-coste-y-economía-unitaria-de-la-ingeniería.md)
- [5.5 Retorno de la inversión para iniciativas de ingeniería](temas/05-05-retorno-de-la-inversión-para-iniciativas-de-ingeniería.md)

### Parte 6: Métricas de fiabilidad, operaciones, y seguridad
- [6.0 Introducción](temas/06-00-métricas-de-fiabilidad-operaciones-y-seguridad.md)
- [6.1 Indicadores y objetivos de nivel de servicio, y presupuestos de error](temas/06-01-indicadores-objetivos-de-nivel-de-servicio-y-presupuestos-de-error.md)
- [6.2 Métricas de incidencias: detección, respuesta, y recuperación](temas/06-02-métricas-de-incidentes.md)
- [6.3 Métricas de guardia, capacidad, y carga operativa](temas/06-03-métricas-de-guardia-capacidad-y-carga-operativa.md)
- [6.4 Métricas de gestión de seguridad y vulnerabilidades](temas/06-04-métricas-de-gestión-de-seguridad-y-vulnerabilidades.md)

### Parte 7: Métricas en la era de la IA
- [7.0 Introducción](temas/07-00-métricas-en-la-era-de-la-ia.md)
- [7.1 El cambio de paradigma de la IA generativa](temas/07-01-el-cambio-de-paradigma-de-la-ia-generativa.md)
- [7.2 Medir el desarrollo de software asistido por IA](temas/07-02-medir-el-desarrollo-de-software-asistido-por-ia.md)
- [7.3 Riesgos de inflación de métricas y dilución de calidad](temas/07-03-riesgos-de-inflación-de-métricas-y-dilución-de-calidad.md)
- [7.4 La telemetría de resultados como la nueva estrella polar](temas/07-04-la-telemetría-de-resultados-como-la-nueva-estrella-polar.md)

### Parte 8: Construir un programa de métricas
- [8.0 Introducción](temas/08-00-construir-un-programa-de-métricas.md)
- [8.1 Diseñar un panel de métricas de ingeniería](temas/08-01-diseñar-un-panel-de-métricas-de-ingeniería.md)
- [8.2 Panorama de herramientas: construir frente a comprar](temas/08-02-panorama-de-herramientas-construir-frente-a-comprar.md)
- [8.3 Lanzar métricas sin sembrar miedo](temas/08-03-lanzar-métricas-sin-sembrar-miedo.md)
- [8.4 Modelo de madurez para programas de métricas de ingeniería](temas/08-04-modelo-de-madurez-para-programas-de-métricas-de-ingeniería.md)
- [8.5 Una hoja de ruta de adopción incremental](temas/08-05-una-hoja-de-ruta-de-adopción-incremental.md)

### Parte 9: Apéndices
- [9.0 Apéndices](temas/09-00-apéndices.md)
- [9.1 Glosario](temas/09-01-glosario.md)
- [9.2 Referencia de definiciones y fórmulas de métricas](temas/09-02-referencia-de-definiciones-y-fórmulas-de-métricas.md)
- [9.3 Listas de comprobación](temas/09-03-listas-de-comprobación.md)
- [9.4 Plantillas](temas/09-04-plantillas.md)
- [9.5 Autoevaluación de madurez](temas/09-05-autoevaluación-de-madurez.md)
- [9.6 Referencias y lecturas adicionales](temas/09-06-referencias-y-lecturas-adicionales.md)
- [9.7 Índice](temas/09-07-índice.md)

## Temas transversales

La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) gobierna cada tema: una medida que se convierte en objetivo deja de ser una buena medida, así que cada familia de métricas aquí llega con su vector de manipulación y su barrera de protección. Los resultados se ponderan por encima de la producción y la actividad en todo momento. Las obligaciones de información de gobiernos y empresas se tratan como insumos de diseño, no como una ocurrencia tardía, y el cambio hacia la IA generativa se trata como una razón para reexaminar qué significan estas métricas, no solo como una columna nueva en el panel.

## Más allá de los temas

- **[Ejemplos](ejemplos/resumen.md):** ejemplos pequeños y concretos de las ideas del libro en uso.
- **[Acerca de este proyecto](proyecto/resumen.md):** cómo se construye, se comprueba y se publica el libro.
- **[Contribuir](contribuir/resumen.md):** cómo ayudar, y las reglas de estilo de la casa.
