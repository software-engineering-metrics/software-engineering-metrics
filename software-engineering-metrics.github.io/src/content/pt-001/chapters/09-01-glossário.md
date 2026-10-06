# 9.1 Glossário

Definições dos termos e acrónimos usados através do livro. Cada entrada nomeia o tema onde o termo é introduzido em profundidade.

**Árvore de métricas.** Uma estrutura que liga uma métrica de resultado de topo, através dos seus impulsionadores, até às métricas operacionais que equipas individuais possuem. Ver tema 1.3.

**Cadeia de valor.** A sequência completa de atividades que transforma uma ideia em valor que um cliente recebe, a unidade de medição do Flow Framework. Ver tema 2.1.

**Carga de fluxo.** O número total de itens de fluxo atualmente ativos ou à espera numa cadeia de valor, o nome do Flow Framework para trabalho em curso. Ver tema 2.4.

**Complexidade ciclomática.** Uma contagem dos caminhos independentes através do fluxo de controlo de uma peça de código, introduzida por Thomas J. McCabe em 1976. Ver tema 4.1.

**CVSS (Common Vulnerability Scoring System).** Uma escala padronizada para pontuar a gravidade de uma vulnerabilidade de segurança. Ver tema 6.4.

**Defeito escapado.** Um defeito que chega à produção e afeta um utilizador real, distinto de um apanhado em revisão ou teste. Ver tema 5.1.

**DevEx (experiência do programador).** O enquadramento mais amplo e relacionado ao SPACE, organizado em torno de ciclos de feedback, carga cognitiva, e estado de fluxo. Ver tema 3.7.

**Distribuição de fluxo.** A proporção de itens de fluxo completados que pertencem a cada tipo de item de fluxo num dado período. Ver tema 2.3.

**Dívida técnica.** O custo acumulado de atalhos passados numa base de código, uma metáfora para uma troca gerível, não um segredo vergonhoso. Ver tema 4.5.

**Economia unitária.** Custo expresso por unidade significativa de valor entregue (por cliente, por transação), em vez de como um total opaco. Ver tema 5.4.

**Eficiência de fluxo.** O rácio entre o tempo ativo de trabalho e o tempo total decorrido para uma peça de trabalho a mover-se através de um pipeline de entrega. Ver tema 2.5.

**Enquadramento SPACE.** Um enquadramento de cinco dimensões para a produtividade do programador: Satisfação e bem-estar, Desempenho, Atividade, Comunicação e colaboração, e Eficiência e fluxo. Ver tema 3.1.

**Fator de autocarro.** O número de pessoas que precisariam de ficar indisponíveis antes de um sistema ou peça de conhecimento se tornar impossível de manter. Um fator de autocarro de um é um risco severo. Ver tema 3.5.

**FinOps.** A disciplina de trazer responsabilidade financeira ao gasto variável de infraestrutura de nuvem. Ver tema 5.4.

**Flow Framework.** Um modelo de gestão, criado por Mik Kersten, que trata a entrega de software como uma cadeia de valor e a mede com quatro tipos de item de fluxo e cinco métricas de fluxo. Ver tema 2.1.

**Frequência de implementação.** Com que frequência uma equipa implementa com sucesso em produção. Uma das quatro métricas DORA. Ver tema 2.10.

**Gráfico de controlo.** Um gráfico que mostra o intervalo normal de variação de uma métrica ao longo do tempo, usado para distinguir uma mudança genuína de ruído comum. Ver tema 1.6.

**Item de fluxo.** A unidade de trabalho do Flow Framework: uma funcionalidade, defeito, risco, ou item de dívida, classificado na admissão. Ver tema 2.2.

**Lei de Goodhart.** O princípio de que quando uma medida se torna um alvo, deixa de ser uma boa medida. A ideia central e orientadora deste livro. Ver tema 1.2.

**Lei de Little.** A prova de que o número médio de itens numa fila estável é igual à taxa média de chegada multiplicada pelo tempo médio que um item passa no sistema. Aplicada à entrega, o trabalho em curso é igual à taxa de chegada multiplicada pelo tempo de ciclo. Ver tema 2.7.

**Métrica de atividade.** Uma contagem de movimento de engenharia (commits, pedidos de incorporação de mudanças, linhas de código) que mede volume, não valor. Ver tema 3.4.

**Métrica de salvaguarda.** Uma contra-métrica combinada que não deve degradar-se enquanto uma métrica incentivada melhora, desenhada para apanhar manipulação. Ver tema 1.2.

**Métrica de vaidade.** Uma métrica que fiavelmente sobe, parece impressionante, e não muda nenhuma decisão. Ver tema 1.1.

**Métrica estrela-guia.** A medida única que melhor capta o valor central que uma organização entrega, sentando-se no topo de uma árvore de métricas. Ver tema 1.3.

**Métricas DORA.** Quatro métricas do programa DevOps Research and Assessment: frequência de implementação, tempo de espera para mudanças, taxa de falha de mudanças, e tempo de recuperação de implementação falhada. Ver tema 2.10.

**MTTA (tempo médio de reconhecimento).** O tempo desde a notificação de um incidente até alguém assumir a responsabilidade de responder. Ver tema 6.2.

**MTTD (tempo médio de deteção).** O tempo desde o início real de um incidente até alguém notar que ocorreu. Ver tema 6.2.

**MTTR (tempo médio de recuperação / tempo médio de resolução).** O tempo para restaurar completamente o serviço depois de uma falha. Usado tanto para falhas causadas por implementação (tema 2.10) como para incidentes gerais (tema 6.2).

**Orçamento de erro.** A falha permitida entre um objetivo de nível de serviço e 100% de fiabilidade, tratada como um recurso gastável. Ver tema 6.1.

**Percentagem completa e precisa (%C/A).** A percentagem de unidades que uma equipa a jusante consegue processar sem precisar de retrabalho, do mapeamento clássico lean de cadeia de valor. Ver tema 2.8.

**Ponto quente.** Um ficheiro ou módulo que é tanto frequentemente alterado (alto processamento) como altamente complexo, identificado através de análise de pontos quentes. Ver tema 4.3.

**Rendimento de produção acumulado.** As cifras de percentagem completa e precisa de cada fase numa cadeia de valor multiplicadas em conjunto, revelando como o retrabalho se agrava através de um pipeline de múltiplas fases. Ver tema 2.8.

**ROI (retorno sobre o investimento).** O retorno financeiro de uma iniciativa relativamente ao seu custo, construído aqui a partir de evidência documentada de custo e resultado em vez de suposição. Ver tema 5.5.

**SLI (indicador de nível de serviço).** Um sinal diretamente medido da saúde de um serviço, como latência ou taxa de erro. Ver tema 6.1.

**SLO (objetivo de nível de serviço).** O intervalo-alvo para um indicador de nível de serviço. Ver tema 6.1.

**SRE (engenharia de fiabilidade de sítio).** A disciplina, pioneirada na Google, de aplicar abordagens de engenharia de software a operações e fiabilidade. Ver tema 6.1.

**Taxa de falha de mudanças.** A percentagem de implementações que causam uma falha de produção que exige remediação. Uma das quatro métricas DORA. Ver tema 2.10.

**TCO (custo total de propriedade).** O custo completo de uma iniciativa ou sistema ao longo da sua vida, incluindo manutenção contínua e infraestrutura, não apenas o custo inicial. Ver tema 5.5.

**Telemetria de resultado.** Medição contínua e instrumentada de resultados reais em vez de atividade ou produção. Ver tema 7.4.

**Tempo de ciclo.** A repartição interna do tempo de espera em fases: codificação, revisão, teste, e implementação. Ver tema 2.6.

**Tempo de espera para mudanças.** O tempo desde o primeiro commit de uma mudança de código até à sua implementação bem-sucedida em produção. Uma das quatro métricas DORA. Ver tema 2.10.

**Tempo de fluxo.** O tempo total decorrido desde um item de fluxo entrar na cadeia de valor até à sua entrega, abrangendo toda a cadeia de valor em vez de apenas engenharia. Ver tema 2.4.

**Tempo de processo (PT).** O tempo real de trabalho prático gasto numa única unidade, distinto do tempo gasto à espera, do mapeamento clássico lean de cadeia de valor. Ver tema 2.8.

**Tempo takt.** O tempo máximo aceitável para completar uma unidade de trabalho de forma a corresponder limpamente à procura do cliente, do mapeamento clássico lean de cadeia de valor. Ver tema 2.8.

**Teoria das filas.** O estudo matemático de filas de espera, aplicado a pipelines de entrega para explicar como o trabalho em curso, a taxa de chegada, e a utilização impulsionam o tempo de espera. Ver tema 2.7.

**Teste de mutação.** Uma técnica que introduz deliberadamente pequenas falhas artificiais no código para verificar se uma suite de testes realmente as apanha, como complemento à cobertura. Ver tema 4.2.

**Trabalho em curso (WIP).** A contagem de itens a serem ativamente trabalhados num dado momento através de uma equipa ou sistema. Ver tema 2.5.

**Utilização.** A proporção da capacidade disponível de um recurso que está ocupada, calculada como a taxa de chegada dividida pela taxa de serviço. O tempo de espera cresce acentuadamente, não gradualmente, à medida que a utilização se aproxima da capacidade total. Ver tema 2.7.

**Velocidade de fluxo.** O número de itens de fluxo completados ao longo de um dado período, a medida de rendimento do Flow Framework. Ver tema 2.3.
