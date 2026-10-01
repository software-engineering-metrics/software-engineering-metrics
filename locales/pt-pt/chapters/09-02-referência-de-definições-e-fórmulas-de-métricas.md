# 9.2 Referência de definições e fórmulas de métricas

Cada fórmula do livro, reunida num único lugar. Cada entrada nomeia o capítulo com a discussão completa, incluindo o seu risco de manipulação e salvaguarda. Use isto como consulta rápida, não como substituto do próprio capítulo.

## Métricas de fluxo (Parte 2)

| Métrica | Fórmula | Capítulo |
| --- | --- | --- |
| Velocidade de fluxo | Contagem de itens de fluxo completados por unidade de tempo | 2.3 |
| Distribuição de fluxo | (Itens completados de um tipo de item de fluxo) / (Total de itens completados) x 100% | 2.3 |
| Tempo de fluxo | Tempo desde um item de fluxo entrar na cadeia de valor até à sua entrega | 2.4 |
| Carga de fluxo | Contagem de itens de fluxo atualmente ativos ou à espera na cadeia de valor | 2.4 |
| Lei de Little | Carga de fluxo (trabalho em curso) = Taxa de chegada x Tempo de fluxo (tempo de ciclo) | 2.4, 2.7 |
| Eficiência de fluxo | Tempo ativo de trabalho / Tempo total decorrido x 100% | 2.5 |
| Tempo de ciclo | Soma das durações de fase: codificação + recolha + revisão + teste + implementação | 2.6 |
| Utilização | Taxa de chegada / Taxa de serviço | 2.7 |
| Percentagem completa e precisa (%C/A) | (Unidades utilizáveis a jusante sem retrabalho) / (Total de unidades) x 100% | 2.8 |
| Rendimento de produção acumulado | %C/A da fase 1 x %C/A da fase 2 x ... x %C/A da fase N | 2.8 |
| Tempo takt | Tempo de trabalho disponível / Procura do cliente nesse período | 2.8 |
| Tempo até à primeira revisão | Tempo desde a abertura do pedido de incorporação de mudanças até à primeira resposta substantiva do revisor | 2.9 |
| Frequência de implementação | Contagem de implementações bem-sucedidas em produção por unidade de tempo | 2.10 |
| Tempo de espera para mudanças | Tempo desde o primeiro commit até à implementação bem-sucedida em produção (reportar mediana e percentil 90) | 2.10 |
| Taxa de falha de mudanças | (Implementações que causam falha) / (Total de implementações) x 100% | 2.10 |
| Tempo de recuperação de implementação falhada | Tempo desde a deteção da falha até à restauração genuína do serviço | 2.10 |

## Experiência do programador (Parte 3)

| Métrica | Fórmula | Capítulo |
| --- | --- | --- |
| Tempo de foco | Contagem e duração de blocos ininterruptos de mais de duas horas por semana, a partir de dados de calendário | 3.6 |
| Taxa de resposta | (Respostas de inquérito recebidas) / (Convites de inquérito enviados) x 100% | 3.7 |

## Código e qualidade (Parte 4)

| Métrica | Fórmula | Capítulo |
| --- | --- | --- |
| Complexidade ciclomática | Caminhos independentes através do fluxo de controlo (arestas − nós + 2, segundo McCabe) | 4.1 |
| Cobertura de testes | (Linhas/ramos executados por testes) / (Total de linhas/ramos) x 100% | 4.2 |
| Taxa de morte de mutação | (Mutantes mortos pela suite de testes) / (Total de mutantes introduzidos) x 100% | 4.2 |
| Processamento de código | Linhas adicionadas + modificadas + eliminadas por ficheiro ao longo de uma janela de tempo | 4.3 |
| Pontuação de ponto quente | Processamento x Complexidade, classificado por ficheiro | 4.3 |
| Custo de manutenção de dívida | Custo estimado e contínuo de não corrigir um item (trabalho relacionado mais lento, risco elevado de defeito) | 4.5 |

## Produto e negócio (Parte 5)

| Métrica | Fórmula | Capítulo |
| --- | --- | --- |
| Taxa de defeitos escapados | (Defeitos escapados ponderados por gravidade) / (Unidade de entrega ou tempo) | 5.1 |
| Adoção inicial | (Utilizadores que experimentaram a funcionalidade pelo menos uma vez) / (Público-alvo) x 100% | 5.2 |
| Adoção retida | (Utilizadores que ainda usam a funcionalidade após N semanas) / (Utilizadores que a experimentaram inicialmente) x 100% | 5.2 |
| Custo unitário | Custo total (pessoas + infraestrutura + ferramentas) / Unidade significativa (cliente, transação) | 5.4 |
| ROI | (Benefício total − Custo total de propriedade) / Custo total de propriedade, apresentado como um intervalo | 5.5 |

## Fiabilidade, operações, e segurança (Parte 6)

| Métrica | Fórmula | Capítulo |
| --- | --- | --- |
| Orçamento de erro | (1 − alvo do SLO) x Janela de tempo (ex., 0,1% de 30 dias ≈ 43 minutos) | 6.1 |
| Taxa de consumo do orçamento de erro | Orçamento de erro consumido / Orçamento de erro alocado, ao longo de uma dada janela | 6.1 |
| MTTD | Tempo desde o início do incidente até à deteção | 6.2 |
| MTTA | Tempo desde a notificação do incidente até ao reconhecimento | 6.2 |
| MTTR (incidente) | Tempo desde o reconhecimento até à restauração genuína do serviço | 6.2 |
| Distribuição de alertas de prevenção | Alertas recebidos por indivíduo, ao longo de uma janela contínua (não média de equipa) | 6.3 |
| Tempo até à remediação de vulnerabilidade | Tempo desde a descoberta até à remediação genuína, rastreado por gravidade | 6.4 |

## Notas sobre o uso destas fórmulas

- **Combine sempre uma fórmula de velocidade ou produção com a sua salvaguarda** (capítulo 1.2): taxa de falha de mudanças com frequência de implementação e tempo de espera; taxa de defeitos escapados com velocidade de entrega; consumo de orçamento de erro com atividade de implementação.
- **Use medianas e percentis, não médias, para fórmulas baseadas em tempo** (capítulo 1.6) a menos que uma fórmula peça explicitamente uma média.
- **Cada fórmula precisa de um sistema documentado de origem e método de recolha** (capítulo 1.5) ao lado da sua definição matemática; duas equipas a calcular a mesma fórmula a partir de fontes diferentes não produzirão números comparáveis.
- **A ponderação por gravidade não é mostrada explicitamente em cada fórmula acima** mas aplica-se sempre que aparece "ponderado por gravidade"; veja o capítulo relevante para o esquema completo de classificação.
