# 2.3 Velocidade de fluxo e distribuição de fluxo

## Visão geral e motivação

A **velocidade de fluxo** é o número de itens de fluxo (capítulo 2.2) concluídos durante um dado período, a medida de **[rendimento](https://en.wikipedia.org/wiki/Throughput)** do Flow Framework. A **distribuição de fluxo** é a proporção de cada tipo de item de fluxo, funcionalidades, defeitos, risco, e dívida, entre os itens concluídos nesse mesmo período. As duas métricas são desenhadas para serem lidas juntas: a velocidade sozinha responde "quanto entregámos," e a distribuição sozinha responde "que tipo de trabalho era," mas nenhuma das perguntas significa muito sem a outra. Uma equipa pode subir a sua velocidade enquanto a sua distribuição se desloca silenciosamente para longe das funcionalidades e em direção ao retrabalho de defeitos, o que parece aceleração num gráfico de velocidade e é na verdade um sintoma de qualidade a declinar.

Este emparelhamento é a mesma disciplina que o capítulo 1.2 pede para toda a família de métricas neste livro: nunca reportar um número de velocidade sem a salvaguarda que mostra o que essa velocidade custou. A velocidade de fluxo é a generalização mais direta de uma métrica de rendimento nesta parte, mais próxima em espírito da frequência de implementação (capítulo 2.10) do que de qualquer outro número único neste livro, mas consciente do tipo de item de uma forma que a frequência de implementação nunca foi. A frequência de implementação diz-lhe com que frequência o código chega à produção; a velocidade de fluxo, emparelhada com a distribuição, diz-lhe com que frequência o valor chega à produção e que tipo de valor é.

Para equipas grandes a executar muitas cadeias de valor concorrentes, este emparelhamento expõe um padrão que um único número de rendimento esconde completamente: uma cadeia de valor cuja velocidade parece saudável enquanto a sua distribuição derivou silenciosamente para quase puro trabalho de funcionalidades, privando silenciosamente a capacidade de dívida e risco que o capítulo 2.2 avisou precisar de proteção deliberada. As organizações empresariais que comparam rendimento entre linhas de produto, e as agências governamentais que reportam output de entrega a órgãos de supervisão, precisam ambas deste emparelhamento para evitar confundir output bruto com progresso genuíno e sustentável.

## Princípios-chave

- **A velocidade sem distribuição esconde o que realmente foi entregue.** Uma contagem crescente de itens não diz nada sobre se essa contagem é saudável, manipulada, ou silenciosamente inclinada para o trabalho mais fácil disponível.
- **A distribuição sem velocidade esconde a escala.** Uma divisão percentual de aspeto saudável significa pouco se também não souber quanto trabalho total representa.
- **As duas métricas devem ser reportadas juntas, sempre.** Esta é uma aplicação direta do princípio de emparelhamento com salvaguarda do capítulo 1.2 aos dados de fluxo especificamente.
- **A velocidade está exposta à mesma manipulação de substituição que qualquer métrica de contagem de itens.** Dividir trabalho difícil em muitos itens pequenos e fáceis infla a contagem sem entregar proporcionalmente mais valor.
- **Uma distribuição saudável depende do contexto, não é um alvo fixo.** O capítulo 2.2 cobre isto em profundidade; a velocidade e a distribuição devem sempre ser interpretadas contra o alvo que o contexto implica.

## Recomendações

### Reportar a velocidade de fluxo como uma linha de tendência, nunca um número de período único

A contagem de itens de um único período é ruidosa e facilmente mal lida. Trace a velocidade de fluxo através de vários períodos consecutivos e olhe para a tendência, não para qualquer ponto de dados único, a mesma disciplina que o capítulo 1.6 recomenda para qualquer métrica de série temporal propensa a variação natural.

### Nunca apresentar a velocidade de fluxo sem a sua distribuição ao lado

Trate isto como uma regra rígida para qualquer painel de controlo ou relatório, não um extra desejável. Um gráfico de velocidade mostrado sozinho convida precisamente à má leitura com que este capítulo abre: rendimento crescente que é na verdade uma parcela crescente de retrabalho ou trabalho fácil de funcionalidades a afastar a capacidade de dívida e risco. Coloque ambos na mesma vista, sempre.

### Ponderar a velocidade por tamanho ou complexidade quando os tamanhos dos itens variam amplamente

A contagem bruta de itens trata uma mudança de configuração de uma linha e uma migração arquitetural de várias semanas como equivalentes, o que convida à mesma manipulação de substituição que este livro já nomeou para a frequência de implementação (capítulo 2.10): dividir trabalho difícil em muitos itens pequenos infla a contagem sem entregar proporcionalmente mais. Onde os tamanhos dos itens variam amplamente, pondere a velocidade por uma estimativa aproximada de tamanho ou complexidade, ou acompanhe o tamanho médio do item ao lado da contagem bruta, para que um tamanho médio a encolher ao lado de uma contagem crescente seja visível em vez de escondido.

### Vigiar a distribuição de fluxo quanto à deriva, não apenas o seu instantâneo atual

O sinal mais útil na distribuição de fluxo raramente são as percentagens exatas deste período; é a direção da mudança ao longo de vários períodos. Uma deriva constante, funcionalidades a subir enquanto a dívida e o risco encolhem silenciosamente, vale a pena levantar aos interessados bem antes de se tornar o tipo de problema de qualidade ou segurança que o capítulo 2.2 avisa que se acumula invisivelmente sob um padrão de fábrica de funcionalidades.

### Comparar a velocidade de fluxo entre cadeias de valor apenas com cuidado genuíno

Duas cadeias de valor com granularidade de item diferente, tamanhos de equipa diferentes, ou fases de produto diferentes não são diretamente comparáveis apenas na velocidade bruta, o mesmo problema de justiça que o capítulo 2.10 nomeia para a frequência de implementação entre equipas. Use a velocidade primeiro para a tendência da própria cadeia de valor, e só tente a comparação entre cadeias de valor depois de confirmar definições e granularidade de item genuinamente comparáveis.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Apenas velocidade de contagem bruta de itens | Simples de calcular e explicar | Exposta à manipulação de substituição; esconde que tipo de valor foi entregue |
| Velocidade emparelhada com distribuição | Mostra tanto a escala como a mistura de valor juntas | Exige classificação disciplinada de itens de fluxo (capítulo 2.2) para ser significativa |
| Velocidade ponderada por tamanho | Resiste à manipulação de substituição por divisão de tamanho de item | Exige um método de dimensionamento consistente e acordado em toda a equipa |
| Comparação de velocidade entre cadeias de valor | Útil para decisões de investimento ao nível de portefólio | Facilmente injusta sem confirmar definições de item genuinamente comparáveis |

A tensão central é **simplicidade versus resistência à manipulação**. A contagem bruta de itens é o número mais fácil de calcular e explicar, mas é também o mais fácil de inflacionar dividindo trabalho difícil em muitas peças pequenas. Resolva a tensão mantendo a métrica primária simples, velocidade bruta emparelhada com distribuição, e reservando a ponderação por tamanho para cadeias de valor onde se sabe que os tamanhos dos itens variam o suficiente para que a contagem simples se tenha tornado ativamente enganadora.

## Perguntas para debater com a sua equipa

1. **Quando reportamos a velocidade de fluxo, a distribuição de fluxo é sempre mostrada ao lado, ou a velocidade às vezes fica sozinha?** Um número de velocidade sem a sua distribuição é um quadro incompleto pelo próprio princípio central deste capítulo. Verifique os seus painéis de controlo e relatórios reais para esta lacuna.

2. **O nosso tamanho médio de item mudou ao lado de uma velocidade crescente, e saberíamos se tivesse mudado?** Um tamanho médio a encolher ao lado de uma contagem a subir é a assinatura específica da manipulação de substituição aplicada a itens de fluxo. Extraia os dados reais em vez de assumir que o padrão está ausente.

3. **Alguma vez comparámos a nossa velocidade com a de outra equipa sem confirmar que as nossas definições de item e granularidade realmente correspondem?** Uma comparação injusta aqui pode pressionar uma equipa a manipular os seus próprios números apenas para parecer comparável, ecoando o mesmo risco que este livro já nomeia para a frequência de implementação.

4. **A nossa distribuição de fluxo derivou numa direção ao longo dos últimos períodos, e alguém decidiu isso deliberadamente?** Uma deriva lenta é fácil de perder período a período. Trace vários períodos juntos e procure honestamente uma tendência antes de assumir que a divisão atual é estável.

5. **Se alguém quisesse inflacionar a nossa velocidade de fluxo sem fazer mais trabalho real, qual é a forma mais fácil de o fazer, e o nosso relato atual apanharia isso?** Percorra a mecânica específica de dividir itens difíceis em fáceis, e discuta se o seu painel de controlo realmente revelaria esse padrão.

6. **Os nossos números de velocidade e distribuição alguma vez chegam juntos a interessados de negócio, ou apenas a manchete de velocidade viaja para cima?** O princípio de emparelhamento só protege contra má leitura se ambas as metades forem realmente vistas pelas pessoas que tomam decisões a partir dos dados.

## Perspetiva setorial

**Startup.** A velocidade de fluxo é normalmente fácil de rastrear informalmente a esta escala, já que toda a equipa já tem um sentido aproximado do rendimento. A disciplina útil é emparelhá-la com a distribuição mesmo informalmente, para que um fundador não confunda uma contagem crescente de fecho de tickets com progresso genuíno de funcionalidades quando a contagem é na verdade dominada por correção de bugs em fase inicial.

**Pequena empresa.** Rastreie a velocidade e a distribuição juntas a partir de qualquer ferramenta leve que já use para classificação de itens de fluxo (capítulo 2.2); nenhuma plataforma de análise dedicada é necessária a esta escala. O hábito de as ver sempre lado a lado importa mais do que qualquer sofisticação de ferramentas.

**Empresa.** A comparação de velocidade entre cadeias de valor é tentadora a esta escala para priorização ao nível de portefólio, e é também onde o risco de injustiça é maior, já que diferentes linhas de produto têm legitimamente granularidade de item muito diferente. Invista em confirmar definições comparáveis antes de usar comparações de velocidade para justificar decisões de investimento entre equipas.

**Governo.** A velocidade de fluxo emparelhada com a distribuição dá a um líder de tecnologia do setor público uma base de evidência muito mais forte para reportar output de entrega a órgãos de supervisão do que apenas o rendimento bruto, porque consegue mostrar não apenas quanto foi entregue mas que a mistura reflete uma alocação deliberada e defensável entre nova funcionalidade, correção de defeitos, e gestão de risco.

## Exemplos

**Empresa.** A equipa de plataforma de um fornecedor de software reportou uma velocidade de fluxo em subida constante durante três trimestres consecutivos, uma tendência que a liderança celebrou como entrega acelerada. Um olhar mais atento à distribuição de fluxo, pedido apenas depois de uma escalada de cliente sobre bugs recorrentes, revelou que a parcela de "funcionalidades" dessa velocidade crescente tinha na verdade caído de 70% para 45% no mesmo período, com itens de correção de defeitos a preencher a lacuna. A equipa tinha estado a entregar mais itens, mas uma proporção encolhida deles era novo valor; o resto era retrabalho que o gráfico de velocidade sozinho tinha completamente obscurecido.

**Governo.** A equipa de plataforma de dados de uma agência nacional de estatísticas rastreava a velocidade de fluxo como a sua métrica primária de entrega para um relatório anual ao seu conselho de supervisão. Quando um membro do conselho perguntou que proporção dessa velocidade representava nova capacidade voltada para o público, a equipa descobriu que nunca tinha decomposto o número por tipo de item de fluxo e não conseguiu responder diretamente. A agência subsequentemente adotou o relato emparelhado de velocidade e distribuição, que revelou que o trabalho de risco e conformidade, impulsionado por uma nova regulamentação de proteção de dados, tinha legitimamente consumido uma parcela crescente de capacidade, uma alocação defensável que o conselho aceitou prontamente uma vez mostrada explicitamente em vez de deixada implícita numa queda de velocidade inexplicada.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de emparelhar a velocidade com a distribuição é um relato mais honesto e mais defensável do output de entrega do que qualquer um dos números fornece sozinho. O exemplo do fornecedor de software acima, descobrindo que a velocidade crescente na verdade refletia output de funcionalidades a cair, é exatamente o tipo de má leitura que este emparelhamento previne, e apanhar esse padrão cedo é muito mais barato do que o descobrir apenas depois de um problema de qualidade voltado para o cliente forçar a pergunta.

O custo total de propriedade é mínimo uma vez que a classificação de itens de fluxo (capítulo 2.2) já esteja em vigor: a distribuição é uma agregação direta de itens já classificados, e a disciplina de mostrar ambas as métricas juntas é uma convenção de relato, não um investimento técnico. A maior parte do custo das recomendações deste capítulo já foi paga quando a organização adotou a classificação honesta de itens de fluxo em primeiro lugar.

## Antipadrões e armadilhas

- **Reportar a velocidade de fluxo sem distribuição:** o vetor de manipulação no centro deste capítulo. Uma equipa sob pressão de entrega pode subir a contagem de itens preferindo trabalho pequeno e fácil de funcionalidades e evitando itens mais difíceis de dívida, risco, ou defeito, ou dividindo itens grandes em muitos pequenos, e um gráfico de velocidade mostrado sozinho lerá como aceleração em vez da mudança real no que está a ser entregue. A salvaguarda é a mesma disciplina de emparelhamento que o capítulo 1.2 pede ao longo deste livro: nunca mostrar a velocidade sem a distribuição, e verificar periodicamente o tamanho médio do item ao lado da contagem para apanhar especificamente a divisão.
- **Comparar a velocidade entre cadeias de valor com granularidade de item diferente:** produz uma comparação injusta e enganadora.
- **Tratar a distribuição de um único período como estável:** perde uma deriva lenta e significativa que só uma visão de tendência revela.
- **Deixar apenas a manchete de velocidade chegar a interessados de negócio:** perde todo o valor protetor do princípio de emparelhamento.
- **Ignorar o tamanho médio do item enquanto se celebra uma velocidade crescente:** perde a assinatura específica da manipulação de substituição.
- **Definir um alvo de velocidade sem referência à distribuição:** convida precisamente à manipulação que este capítulo avisa pelo nome.

## Modelo de maturidade

- **Nível 1, Iniciar:** A velocidade de fluxo, se rastreada, é reportada sozinha sem dados de distribuição, e ninguém verificou a manipulação de substituição.
- **Nível 2, Desenvolver:** Algumas equipas rastreiam a distribuição, mas não é consistentemente emparelhada com a velocidade no relato nem revista como tendência.
- **Nível 3, Padronizar:** A velocidade e a distribuição são sempre reportadas juntas, vistas como tendências, com o tamanho médio do item monitorizado para apanhar a manipulação de substituição.
- **Nível 4, Gerir:** A deriva de distribuição é investigada proativamente antes de se tornar um problema de qualidade ou segurança, e as comparações de velocidade entre cadeias de valor só são feitas depois de confirmar definições de item genuinamente comparáveis.
- **Nível 5, Orquestrar:** A velocidade e a distribuição informam diretamente decisões de investimento ao nível de portefólio, e a organização consegue apontar para casos específicos onde a deriva de distribuição foi apanhada e corrigida antes de causar uma falha visível.

## Ideias para debate

1. O nosso relato de velocidade de fluxo inclui sempre a distribuição, ou alguma vez mostrámos uma sem a outra?
2. O nosso tamanho médio de item de fluxo mudou ao lado de uma mudança na velocidade recentemente?
3. Saberíamos se a nossa distribuição de fluxo tivesse derivado constantemente ao longo dos últimos trimestres?
4. O que seria preciso para alguém inflacionar a nossa velocidade sem entregar mais valor real, e notaríamos?

## Principais conclusões

- A **velocidade de fluxo** mede o rendimento; a **distribuição de fluxo** mede que tipo de trabalho esse rendimento representa. Reporte-as juntas, sempre.
- Este emparelhamento é uma aplicação direta do **princípio de salvaguarda** do capítulo 1.2: nunca mostrar um número de velocidade sem o contexto do que custou.
- O vetor de manipulação central do capítulo é **reportar a velocidade sozinha**, que pode esconder uma mudança em direção a trabalho fácil de funcionalidades ou divisão de itens que infla a contagem sem entregar valor proporcional.
- A **deriva de distribuição** é mais visível como uma tendência através de vários períodos, não no instantâneo de qualquer período único.
- As **comparações de velocidade entre cadeias de valor** precisam de definições de item genuinamente comparáveis para serem justas; sem isso, induzem mais em erro do que informam.

## Referências e leituras adicionais

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble, e Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
