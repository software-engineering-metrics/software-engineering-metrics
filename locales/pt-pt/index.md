# Métricas de Engenharia de Software

Um livro de trabalho sobre medir bem a **engenharia de software**: como escolher métricas que reflitam resultados reais em vez de mera atividade, os referenciais em que este livro se apoia (o Flow Framework, o referencial SPACE, a teoria das filas e as métricas DORA), as famílias de métricas que importam e como gerir um programa de métricas que melhora as equipas em vez de as vigiar.

O livro cobre a entrega e o fluxo, a experiência do programador, o código e a qualidade, os resultados de produto e de negócio, a fiabilidade e a segurança, e a forma como a IA generativa está a alterar o significado destes números.

- **[O que são métricas de engenharia de software?](preliminares/o-que-sao-metricas-de-engenharia-de-software.md):** comece aqui
- **[Introdução](preliminares/introducao.md):** o que é este livro e como o ler
- **[Índice](preliminares/indice.md):** a lista completa de temas

## Como ler este livro

As partes são números inteiros; os temas são decimais. O tema **N.0** apresenta cada parte; **N.1, N.2, …** são os respetivos temas. A Parte 9 reúne os apêndices (glossário, referência de fórmulas, listas de verificação, modelos, autoavaliação de maturidade, referências e índice remissivo). Cada tema de uma família de métricas apresenta princípios, recomendações, compromissos, perspetivas setoriais, exemplos (empresa e administração pública), caso de negócio (ROI/TCO), antipadrões, um modelo de maturidade, questões para discussão e referências, e nomeia como a métrica é manipulada e que salvaguarda a apanha. Adote-os por fases; não todos de uma vez.

## Índice

### Parte 1: Fundamentos da Medição
- [1.0 Introdução](temas/01-00-fundamentos-da-medição.md)
- [1.1 Porquê medir a engenharia de software](temas/01-01-porquê-medir-a-engenharia-de-software.md)
- [1.2 A lei de Goodhart e a psicologia das métricas](temas/01-02-a-lei-de-goodhart-e-a-psicologia-das-métricas.md)
- [1.3 Resultados acima do produto: escolher o que medir](temas/01-03-resultados-acima-do-produto-escolher-o-que-medir.md)
- [1.4 Governação e propriedade das métricas](temas/01-04-governação-e-propriedade-das-métricas.md)
- [1.5 Fontes de dados e instrumentação](temas/01-05-fontes-de-dados-e-instrumentação.md)
- [1.6 Literacia estatística para métricas de engenharia](temas/01-06-literacia-estatística-para-métricas-de-engenharia.md)

### Parte 2: Métricas de Fluxo
- [2.0 Introdução](temas/02-00-métricas-de-fluxo.md)
- [2.1 O Flow Framework](temas/02-01-o-flow-framework.md)
- [2.2 Itens de fluxo: funcionalidades, defeitos, riscos, e dívida](temas/02-02-itens-de-fluxo-funcionalidades-defeitos-riscos-e-dívida.md)
- [2.3 Velocidade de fluxo e distribuição de fluxo](temas/02-03-velocidade-de-fluxo-e-distribuição-de-fluxo.md)
- [2.4 Tempo de fluxo e carga de fluxo](temas/02-04-tempo-de-fluxo-e-carga-de-fluxo.md)
- [2.5 Eficiência de fluxo e trabalho em curso](temas/02-05-eficiência-de-fluxo-e-trabalho-em-curso.md)
- [2.6 Tempo de ciclo e os seus componentes](temas/02-06-tempo-de-ciclo-e-os-seus-componentes.md)
- [2.7 Teoria das filas](temas/02-07-teoria-das-filas.md)
- [2.8 Métricas lean de cadeia de valor](temas/02-08-métricas-lean-de-cadeia-de-valor.md)
- [2.9 Métricas de pull request e revisão de código](temas/02-09-métricas-de-pull-request-e-revisão-de-código.md)
- [2.10 O framework de métricas DORA](temas/02-10-o-framework-de-métricas-dora.md)

### Parte 3: Experiência do Programador e o Framework SPACE
- [3.0 Introdução](temas/03-00-experiência-do-programador-e-o-framework-space.md)
- [3.1 O framework SPACE](temas/03-01-o-framework-space.md)
- [3.2 Métricas de satisfação e bem-estar](temas/03-02-métricas-de-satisfação-e-bem-estar.md)
- [3.3 Métricas de desempenho e proxies de resultado](temas/03-03-métricas-de-desempenho-e-proxies-de-resultado.md)
- [3.4 Métricas de atividade e os seus limites](temas/03-04-métricas-de-atividade-e-os-seus-limites.md)
- [3.5 Métricas de comunicação e colaboração](temas/03-05-métricas-de-comunicação-e-colaboração.md)
- [3.6 Eficiência e fluxo: trabalho profundo e interrupções](temas/03-06-eficiência-e-fluxo-trabalho-profundo-e-interrupções.md)
- [3.7 Inquéritos de experiência do programador e métricas DevEx](temas/03-07-inquéritos-de-experiência-do-programador-e-métricas-devex.md)

### Parte 4: Métricas de Código e Qualidade
- [4.0 Introdução](temas/04-00-métricas-de-código-e-qualidade.md)
- [4.1 Métricas de complexidade de código](temas/04-01-métricas-de-complexidade-de-código.md)
- [4.2 Cobertura de testes e eficácia de testes](temas/04-02-cobertura-de-testes-e-eficácia-de-testes.md)
- [4.3 Processamento de código e análise de pontos quentes](temas/04-03-processamento-de-código-e-análise-de-pontos-quentes.md)
- [4.4 Análise estática e métricas de odores de código](temas/04-04-análise-estática-e-métricas-de-odores-de-código.md)
- [4.5 Medição de dívida técnica](temas/04-05-medição-de-dívida-técnica.md)
- [4.6 Métricas de documentação e conhecimento](temas/04-06-métricas-de-documentação-e-conhecimento.md)

### Parte 5: Métricas de produto e negócio
- [5.0 Introdução](temas/05-00-métricas-de-produto-e-negócio.md)
- [5.1 Taxa de defeitos escapados e escapes de qualidade](temas/05-01-taxa-de-defeitos-escapados-e-escapes-de-qualidade.md)
- [5.2 Métricas de adoção e utilização de funcionalidades](temas/05-02-métricas-de-adoção-e-utilização-de-funcionalidades.md)
- [5.3 Métricas de resultado de cliente e negócio](temas/05-03-métricas-de-resultado-de-cliente-e-negócio.md)
- [5.4 Custo e economia unitária da engenharia](temas/05-04-custo-e-economia-unitária-da-engenharia.md)
- [5.5 Retorno sobre o investimento para iniciativas de engenharia](temas/05-05-retorno-sobre-o-investimento-para-iniciativas-de-engenharia.md)

### Parte 6: Métricas de fiabilidade, operações, e segurança
- [6.0 Introdução](temas/06-00-métricas-de-fiabilidade-operações-e-segurança.md)
- [6.1 Indicadores de nível de serviço, objetivos, e orçamentos de erro](temas/06-01-indicadores-de-nível-de-serviço-objetivos-e-orçamentos-de-erro.md)
- [6.2 Métricas de incidentes: deteção, resposta, e recuperação](temas/06-02-métricas-de-incidentes-deteção-resposta-e-recuperação.md)
- [6.3 Métricas de prevenção, capacidade, e carga operacional](temas/06-03-métricas-de-prevenção-capacidade-e-carga-operacional.md)
- [6.4 Métricas de gestão de segurança e vulnerabilidade](temas/06-04-métricas-de-gestão-de-segurança-e-vulnerabilidade.md)

### Parte 7: Métricas na era da IA
- [7.0 Introdução](temas/07-00-métricas-na-era-da-ia.md)
- [7.1 A mudança de paradigma da IA generativa](temas/07-01-a-mudança-de-paradigma-da-ia-generativa.md)
- [7.2 Medir o desenvolvimento de software assistido por IA](temas/07-02-medir-o-desenvolvimento-de-software-assistido-por-ia.md)
- [7.3 Riscos de inflação de métricas e diluição de qualidade](temas/07-03-riscos-de-inflação-de-métricas-e-diluição-de-qualidade.md)
- [7.4 A telemetria de resultado como a nova estrela-guia](temas/07-04-a-telemetria-de-resultado-como-a-nova-estrela-guia.md)

### Parte 8: Construir um programa de métricas
- [8.0 Introdução](temas/08-00-construir-um-programa-de-métricas.md)
- [8.1 Desenhar um painel de métricas de engenharia](temas/08-01-desenhar-um-painel-de-métricas-de-engenharia.md)
- [8.2 Panorama de ferramentas: construir versus comprar](temas/08-02-panorama-de-ferramentas-construir-versus-comprar.md)
- [8.3 Implementar métricas sem gerar medo](temas/08-03-implementar-métricas-sem-gerar-medo.md)
- [8.4 Modelo de maturidade para programas de métricas de engenharia](temas/08-04-modelo-de-maturidade-para-programas-de-métricas-de-engenharia.md)
- [8.5 Um roteiro incremental de adoção](temas/08-05-um-roteiro-incremental-de-adoção.md)

### Parte 9: Apêndices
- [9.0 Apêndices](temas/09-00-apêndices.md)
- [9.1 Glossário](temas/09-01-glossário.md)
- [9.2 Referência de definições e fórmulas de métricas](temas/09-02-referência-de-definições-e-fórmulas-de-métricas.md)
- [9.3 Listas de verificação](temas/09-03-listas-de-verificação.md)
- [9.4 Modelos](temas/09-04-modelos.md)
- [9.5 Autoavaliação de maturidade](temas/09-05-autoavaliação-de-maturidade.md)
- [9.6 Referências e leituras adicionais](temas/09-06-referências-e-leituras-adicionais.md)
- [9.7 Índice](temas/09-07-índice.md)

## Temas transversais

[A lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) rege todos os temas: uma medida que se torna um objetivo deixa de ser uma boa medida, pelo que cada família de métricas aqui vem com a sua via de manipulação e a sua salvaguarda. Os resultados pesam mais do que a produção e a atividade em todo o livro. As obrigações de reporte de governos e empresas são tratadas como contributo de conceção, não como um pensamento tardio, e a mudança para a IA generativa é tratada como razão para reexaminar o significado destas métricas, não apenas como uma nova coluna no painel.

## Para além dos temas

- **[Exemplos](exemplos/visao-geral.md):** exemplos pequenos e concretos que mostram as ideias do livro em uso.
- **[Sobre este projeto](projeto/visao-geral.md):** como o livro é construído, verificado e publicado.
- **[Contribuir](contribuir/visao-geral.md):** como ajudar e as regras do estilo da casa.
