# 2.1 O Flow Framework

## Visão geral e motivação

O **Flow Framework** é um modelo gerencial e estrutural criado por Mik Kersten e publicado no seu livro de 2018 *Project to Product*. Existe para responder a uma pergunta que as métricas puras de pipeline não conseguem: não apenas quão rápido e seguro o código se move do commit à produção, mas que tipo de valor está a fluir através do pipeline, de todo, e se essa mistura reflete a estratégia real do negócio. A estrutura trata a entrega de software como uma **[cadeia de valor](https://en.wikipedia.org/wiki/Value_stream)**, a sequência ponta a ponta de atividades que transforma uma ideia no valor que um cliente recebe, pedindo emprestado diretamente à tradição de mapeamento de cadeia de valor da manufatura lean.

Este livro usa o Flow Framework como a estrutura organizadora da Parte 2. O tema 2.2 introduz os seus quatro itens de fluxo, os temas 2.3 e 2.4 introduzem as suas cinco métricas de fluxo, o tema 2.8 traça essas métricas de volta à sua origem no mapeamento clássico de cadeia de valor Lean, e o tema 2.10 cobre as métricas DORA como uma estrutura de referência mais estreita e focada no pipeline que esta parte já não lidera. Essa é uma escolha deliberada, não uma rejeição da investigação do DORA. O DORA mede o rendimento e a estabilidade do sistema com rigor estatístico genuíno, mas é silencioso sobre a pergunta com que um líder de negócio realmente mais se importa: dado tudo o que a organização de engenharia entregou este trimestre, quanto disso era novo valor para o cliente, e quanto foi silenciosamente consumido a corrigir defeitos, gerir risco, ou pagar dívida. O Flow Framework existe especificamente para tornar essa mistura visível.

Para equipas grandes, esta distinção não é académica. Uma organização de plataforma a executar dezenas de cadeias de valor pode ter excelentes números DORA, implementações rápidas, frequentes, estáveis, enquanto o seu produto real derivou silenciosamente para quase puro trabalho de manutenção, um padrão invisível a um painel de controlo que só mede a mecânica do pipeline. As organizações empresariais e governamentais, que têm de justificar o investimento em engenharia a interessados que pensam em termos de negócio, não em termos de pipeline, precisam de um vocabulário que ligue a atividade de entrega à intenção estratégica. É isso que esta estrutura fornece.

## Princípios-chave

- **Uma cadeia de valor é a unidade de medição, não uma equipa ou um pipeline.** Vai de uma necessidade de cliente ou de negócio até ao resultado entregue, atravessando quaisquer fronteiras de equipa que o trabalho realmente atravesse.
- **Os itens de fluxo tornam o "o quê" visível, não apenas o "quão rápido".** As quatro categorias do tema 2.2, funcionalidades, defeitos, riscos, e dívida, transformam uma decisão de priorização implícita numa explícita e mensurável.
- **A alocação de capacidade entre itens de fluxo é soma zero.** Mais capacidade gasta num tipo de item é menos capacidade disponível para os outros; a estrutura torna essa troca visível em vez de a deixar implícita.
- **As cinco métricas de fluxo respondem a perguntas de negócio, não apenas a perguntas de engenharia.** São desenhadas para serem apresentadas a um interessado não técnico, não guardadas dentro de uma equipa de engenharia.
- **A gestão da cadeia de valor deve ser contínua, não um exercício único de mapeamento.** Os mapas estáticos de cadeia de valor tornam-se desatualizados; a estrutura é construída para ser instrumentada a partir das ferramentas que as equipas já usam.

## Recomendações

### Mapear a sua cadeia de valor antes de instrumentar qualquer coisa

Antes de adotar qualquer métrica de fluxo, percorra o caminho real que uma peça de trabalho percorre desde uma necessidade de negócio ser identificada até um cliente receber valor, nomeando cada fase e cada transição entre equipas. Este é o exercício clássico de **[mapeamento de cadeia de valor](https://en.wikipedia.org/wiki/Value_stream_mapping)**, adaptado da manufatura lean, e saltá-lo é a razão mais comum pela qual uma adoção do Flow Framework produz números em que ninguém confia: as métricas calculadas contra um processo não examinado e informalmente compreendido raramente correspondem ao que realmente está a acontecer.

### Ligar as métricas de fluxo às ferramentas que as suas equipas já usam

O Flow Framework é construído para gestão contínua e automatizada da cadeia de valor, não um exercício periódico de mapeamento manual. Integre o rastreio de itens de fluxo diretamente nas ferramentas por onde o trabalho já flui, Jira, Azure DevOps, GitHub, em vez de construir um sistema de rastreio paralelo que as equipas têm de atualizar à mão. O estado de um item de fluxo deve atualizar-se a si próprio à medida que o ticket ou pull request subjacente se move, a mesma disciplina de instrumentação-acima-do-autorrelato que o tema 1.5 recomenda para cada métrica neste livro.

### Apresentar a distribuição de fluxo diretamente a interessados de negócio, não apenas à liderança de engenharia

A maior oportunidade perdida com esta estrutura é tratá-la como uma ferramenta interna de engenharia. A distribuição de fluxo, a proporção de trabalho que vai para funcionalidades versus defeitos, risco, e dívida (tema 2.3), é especificamente desenhada para ser uma conversa que tem com a liderança de produto e de negócio, porque torna uma decisão de priorização implícita, quanta capacidade vai para novo valor versus manter as luzes acesas, explícita e negociável em vez de assumida.

### Tratar os quatro itens de fluxo como uma taxonomia genuína, não uma formalidade

Exija que toda a unidade de trabalho seja classificada em exatamente um dos quatro tipos de item de fluxo na admissão, não retroativamente. Uma classificação aplicada depois do facto, ou aplicada vagamente porque "é basicamente uma funcionalidade," erode todo o valor da taxonomia, porque todo o ponto é um registo honesto e consistente de para onde a capacidade realmente foi.

### Revisitar o seu mapa de cadeia de valor quando a organização muda, não numa agenda fixa

Um mapa de cadeia de valor torna-se desatualizado no momento em que as fronteiras de equipa, as ferramentas, ou o próprio produto mudam significativamente, não numa cadência anual arbitrária. Trate uma reorganização, uma migração importante de ferramentas, ou uma mudança significativa de produto como um gatilho para repercorrer a cadeia de valor, porque uma métrica de fluxo calculada contra um mapa desatualizado mede silenciosamente a coisa errada.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Apenas métricas de pipeline (DORA, tema 2.10) | Simples, bem validadas, baratas de instrumentar a partir de dados existentes de CI/CD | Silenciosas sobre que tipo de valor está a ser entregue |
| Adoção completa do Flow Framework | Liga a entrega à estratégia de negócio; torna a mistura de valor visível e negociável | Exige um mapa honesto de cadeia de valor e disciplina consistente de classificação de itens de fluxo |
| Mapeamento estático e único de cadeia de valor | Barato, rápido de executar como exercício de workshop | Torna-se desatualizado rapidamente; produz um instantâneo, não uma métrica viva |
| Gestão contínua e integrada em ferramentas da cadeia de valor | Dados vivos e sempre atuais; escala através de muitas cadeias de valor | Exige trabalho real de integração de ferramentas antecipadamente |

A tensão central é **legibilidade de negócio versus esforço de instrumentação**. As métricas de pipeline são baratas porque o pipeline já produz os dados; as métricas de cadeia de valor exigem um mapa honesto de todo o processo e um hábito disciplinado de classificação no momento de admissão que as métricas de pipeline nunca exigiram. Resolva a tensão começando com uma única cadeia de valor, não toda a organização de uma vez, mapeando-a adequadamente, e só depois integrando o rastreio de itens de fluxo nas ferramentas existentes, em vez de tentar um lançamento em bloco através de todas as equipas simultaneamente.

## Perguntas para debater com a sua equipa

1. **Conseguiríamos desenhar um mapa preciso de cadeia de valor para o nosso produto mais importante agora mesmo, ou estaríamos a adivinhar em várias das transições?** A maioria das organizações nunca percorreu realmente este caminho de ponta a ponta. Tente o exercício honestamente e note cada local onde o grupo discorda sobre o que realmente acontece, porque esse desacordo é em si mesmo diagnóstico.

2. **Se classificássemos tudo o que a nossa equipa entregou no último trimestre em funcionalidades, defeitos, risco, e dívida, o resultado surpreenderia a nossa liderança de produto?** A maioria das equipas nunca tornou esta divisão explícita, e a resposta revela muitas vezes um fardo de manutenção ou um problema de dívida que estava previamente invisível numa simples contagem de "pontos de história entregues".

3. **Temos uma forma genuína e integrada em ferramentas de rastrear itens de fluxo, ou isto exigiria que alguém classificasse e reclassificasse o trabalho manualmente à mão?** Um sistema manual decai rapidamente sob carga de trabalho real; um integrado em ferramentas não decai. Avalie honestamente qual está realmente preparado para sustentar.

4. **Quando é que o nosso mapa de cadeia de valor mudou pela última vez, e atualizámos as nossas métricas para o refletir?** As reorganizações e as migrações de ferramentas invalidam silenciosamente um mapa de cadeia de valor, e poucas organizações se lembram de o revisitar quando isso acontece.

5. **As nossas métricas de fluxo são alguma vez apresentadas diretamente a interessados de negócio ou de produto, ou permanecem dentro da engenharia?** A maior vantagem desta estrutura sobre as métricas apenas de pipeline é precisamente esta conversa, e saltá-la perde a maior parte do valor da estrutura.

6. **O que seria preciso para alguém manipular a nossa classificação de itens de fluxo sem fazer nada desonesto no papel?** Percorra como uma equipa sob pressão de entrega poderia silenciosamente reetiquetar trabalho de dívida ou de risco como funcionalidades para parecer mais produtiva, e discuta se o notariam atualmente.

## Perspetiva setorial

**Startup.** Um mapa completo de cadeia de valor é normalmente um exagero para uma equipa de cinco pessoas onde toda a gente já conhece todo o processo de cor. O hábito útil a esta escala é simplesmente nomear os quatro tipos de item de fluxo em voz alta nas conversas de planeamento, para que o trabalho de dívida e de risco não desapareça silenciosamente de vista no momento em que um prazo de funcionalidade se aproxima.

**Pequena empresa.** Adote a classificação de itens de fluxo dentro de qualquer ferramenta leve de rastreio que já use, uma coluna etiquetada ou um campo personalizado, em vez de qualquer produto dedicado de gestão de cadeia de valor. A disciplina de classificação consistente importa muito mais do que a sofisticação das ferramentas por trás dela.

**Empresa.** É aqui que a estrutura ganha o seu valor, porque uma grande organização a executar dezenas de cadeias de valor através de muitas linhas de produto não tem outra forma fiável de ver, num só lugar, como a capacidade de engenharia está realmente a ser alocada entre funcionalidades, defeitos, risco, e dívida. Invista na integração de ferramentas; a alternativa manual não sobrevive ao contacto com a escala real.

**Governo.** A distribuição de fluxo dá a uma organização de engenharia do setor público uma resposta defensável e legível para o negócio a "porque é que não está a ser entregue mais nova funcionalidade," quando a resposta honesta é uma parcela crescente de capacidade a ir para correção de segurança ou dívida legada. Tornar essa troca visível e explícita, em vez de absorver a pressão silenciosamente, é muitas vezes a coisa mais útil que esta estrutura oferece a um líder de tecnologia governamental.

## Exemplos

**Empresa.** A organização de plataforma de sinistros de uma grande seguradora acreditava que estava principalmente a entregar novas funcionalidades, com base nos seus relatórios de velocidade de sprint. Um primeiro exercício de mapeamento de cadeia de valor e classificação de itens de fluxo revelou que o trabalho de dívida e de risco, muito dele dívida técnica não documentada de um sistema central com uma década de existência, consumia na verdade perto de metade da capacidade total de engenharia, um facto que nenhum relatório anterior tinha revelado porque esse trabalho tinha sempre sido dobrado em "tarefas de engenharia" genéricas. Apresentar esta divisão ao comité executivo garantiu um orçamento dedicado de redução de dívida pela primeira vez na história da plataforma, em vez de o trabalho de dívida continuar a competir silenciosamente contra todos os pedidos de funcionalidade.

**Governo.** A divisão de serviços digitais de uma autoridade fiscal nacional usou o mapeamento de cadeia de valor para diagnosticar porque uma funcionalidade emblemática voltada para o cidadão tinha estado "em progresso" durante mais de um ano apesar da conclusão constante de sprints. O mapa revelou que a cadeia de valor atravessava na verdade cinco equipas separadas com três transições que o organograma não refletia, e a classificação de itens de fluxo mostrou que o tempo real de engenharia da funcionalidade era uma pequena fração do seu tempo total de fluxo, o resto consumido por atrasos de transição entre equipas que as métricas de nenhuma equipa individual conseguiam ver. A divisão reestruturou-se à volta da cadeia de valor em vez do organograma para essa linha de produto específica, cortando o tempo de fluxo substancialmente dentro de dois trimestres.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de adotar o Flow Framework é uma resposta defensável e legível para o negócio a uma pergunta que as métricas de pipeline não conseguem responder: a capacidade de engenharia está alocada da forma que a liderança acredita que está. O exemplo da seguradora acima, revelando quase metade da capacidade a ir para trabalho de dívida previamente invisível, é um padrão comum uma vez que uma organização realmente classifica o seu trabalho honestamente, e essa visibilidade desbloqueia rotineiramente investimento que um vago pedido de "precisamos de mais tempo para dívida técnica" nunca conseguiria.

O custo total de propriedade está concentrado em dois lugares: o exercício inicial de mapeamento de cadeia de valor, que exige tempo real de facilitação para ser feito honestamente, e a integração de ferramentas necessária para manter os dados de itens de fluxo atuais sem manutenção manual. Ambos os custos são únicos ou de baixa manutenção uma vez bem feitos, o que torna a estrutura consideravelmente mais barata de sustentar do que é de adotar.

## Antipadrões e armadilhas

- **Tratar o mapeamento de cadeia de valor como um workshop único, nunca revisitado:** o mapa torna-se desatualizado no momento em que a organização muda, e uma métrica calculada contra um mapa desatualizado mede a coisa errada.
- **Construir um sistema paralelo e manualmente mantido de rastreio de itens de fluxo:** decai rapidamente sob carga de trabalho real; integre nas ferramentas existentes em vez disso.
- **Classificar itens de fluxo retroativamente em vez de na admissão:** o vetor de manipulação no centro deste tema. Sob pressão de entrega, uma equipa pode silenciosamente reetiquetar trabalho de dívida ou de risco como funcionalidades depois do facto para parecer mais produtiva a interessados que só veem o gráfico de distribuição de fluxo, sem que ninguém alguma vez tome uma decisão explícita e visível para o fazer. A salvaguarda é exigir classificação na admissão, antes de o resultado ser conhecido, e auditar periodicamente uma amostra de itens classificados contra o que a mudança subjacente realmente fez, a mesma disciplina de auditoria que o tema 1.2 pede para cada métrica neste livro.
- **Manter as métricas de fluxo apenas dentro da engenharia:** perde a principal vantagem da estrutura, um vocabulário partilhado com interessados de negócio.
- **Mapear o organograma em vez da cadeia de valor real:** esconde transições entre equipas que são frequentemente a maior fonte de atraso.
- **Adotar a estrutura em toda a organização antes de a validar numa única cadeia de valor:** arrisca um grande investimento em métricas em que ninguém confia porque o mapa subjacente nunca foi confirmado como preciso.

## Modelo de maturidade

- **Nível 1, Iniciar:** Não existe nenhum mapa de cadeia de valor; o trabalho é rastreado como tickets genéricos sem classificação de itens de fluxo.
- **Nível 2, Desenvolver:** Uma cadeia de valor foi mapeada e os itens de fluxo são classificados informalmente, mas o rastreio é manual e aplicado de forma inconsistente.
- **Nível 3, Padronizar:** A classificação de itens de fluxo está integrada nas ferramentas existentes e aplicada consistentemente na admissão através das principais cadeias de valor.
- **Nível 4, Gerir:** A distribuição de fluxo é revista regularmente com interessados de negócio, e os mapas de cadeia de valor são ativamente mantidos atuais à medida que a organização muda.
- **Nível 5, Orquestrar:** A organização aloca investimento de engenharia deliberadamente através das cadeias de valor usando dados de fluxo, e consegue apontar para decisões estratégicas específicas, um orçamento de redução de dívida, uma reestruturação de equipa, feitas porque a estrutura tornou visível uma troca previamente invisível.

## Ideias para debate

1. Conseguiríamos desenhar um mapa preciso de cadeia de valor para o nosso produto emblemático hoje, sem adivinhar?
2. Que percentagem da capacidade do último trimestre uma classificação honesta de itens de fluxo revelaria que foi para dívida e risco, versus funcionalidades?
3. As nossas métricas de fluxo chegam atualmente a interessados de negócio, ou permanecem dentro da engenharia?
4. Qual é a maior transição entre equipas na nossa cadeia de valor que o nosso organograma não reflete?

## Principais conclusões

- O **Flow Framework**, do livro *Project to Product* de Mik Kersten, mede que tipo de valor se move através de um pipeline de entrega, não apenas quão rápido o próprio pipeline funciona.
- Uma **cadeia de valor**, não uma equipa ou um pipeline, é a unidade de medição da estrutura, e mapeá-la honestamente vem antes de instrumentar qualquer coisa.
- A **classificação de itens de fluxo na admissão, não depois do facto**, é a salvaguarda contra o vetor de manipulação central deste tema: reetiquetar silenciosamente trabalho de dívida ou de risco como funcionalidades para parecer mais produtivo.
- **Ligue as métricas de fluxo às ferramentas existentes**, Jira, Azure DevOps, GitHub, em vez de um sistema paralelo de rastreio manual que não sobreviverá à carga de trabalho real.
- Apresente os dados de fluxo **diretamente a interessados de negócio**; essa conversa, não um painel de controlo interno de engenharia, é a principal vantagem da estrutura sobre as métricas apenas de pipeline.

## Referências e leituras adicionais

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, e John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, e George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, e John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
