# 4.1 Métricas de complexidade de código

## Visão geral e motivação

A **[complexidade ciclomática](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, introduzida por Thomas J. McCabe em 1976, conta o número de caminhos independentes através do fluxo de controlo de uma peça de código: cada `if`, ciclo, e ramo acrescenta à contagem. Continua a ser a métrica de complexidade de código mais amplamente usada quase cinquenta anos depois, ao lado de parentes como a complexidade cognitiva (que pondera o fluxo de controlo aninhado e difícil de seguir mais pesadamente do que a contagem linear original de McCabe) e a profundidade de aninhamento. Estas métricas partilham um insight real e validado: o código com mais caminhos independentes através dele é mais difícil de testar completamente, mais difícil de raciocinar sobre, e, em décadas de investigação empírica, mensuravelmente mais propenso a conter defeitos.

Este capítulo trata esse insight com respeito real enquanto trata os seus limites com igual seriedade. As métricas de complexidade medem uma propriedade específica do código, e uma base de código pode ser simples por toda métrica de complexidade enquanto continua mal desenhada, mal nomeada, ou conceptualmente incoerente de formas que nenhum algoritmo de contagem de ramos consegue detetar. Inversamente, alguns problemas irredutivelmente complexos genuinamente exigem código complexo para resolver corretamente, e uma equipa pressionada a minimizar uma pontuação de complexidade pode produzir código que pontua bem enquanto é na verdade mais difícil de compreender, espalhando a complexidade essencial através de mais ficheiros e camadas de indireção em vez de a reduzir.

Para equipas grandes, as métricas de complexidade ganham o seu valor como ferramenta de triagem: uma forma de encontrar, entre milhares de ficheiros, o pequeno subconjunto mais provável de recompensar um olhar mais atento, não como um veredito isolado sobre a qualidade do código. As organizações empresariais e governamentais que mantêm bases de código demasiado grandes para qualquer indivíduo ter lido na íntegra dependem desta função de triagem para direcionar o esforço escasso de refatoração e revisão para onde fará mais bem.

## Princípios-chave

- **As métricas de complexidade preveem a dificuldade de teste e defeito; não medem a qualidade diretamente.** Trate-as como uma entrada, não um veredito.
- **Uma pontuação de complexidade está exposta à manipulação através de ofuscação, não apenas simplificação genuína.** Dividir a complexidade através de mais ficheiros pode baixar a pontuação sem realmente tornar o código mais fácil de compreender.
- **Alguma complexidade é essencial, não acidental.** Um problema genuinamente difícil pode exigir código genuinamente complexo; o objetivo é minimizar a complexidade acidental, não eliminar toda a complexidade indiscriminadamente.
- **Use as métricas de complexidade para triagem, não como um boletim individual ou de equipa.** Apontam para onde olhar, não para quem culpar.
- **A tendência e os valores atípicos importam mais do que qualquer limiar absoluto.** Uma tendência a subir ou um valor atípico extremo é mais acionável do que uma única média em toda a base de código.

## Recomendações

### Usar as métricas de complexidade para triar o esforço de revisão e refatoração

Execute a análise de complexidade através da base de código e use os resultados para priorizar onde uma revisão humana mais atenta ou um investimento de refatoração mais compensaria: as funções ou ficheiros que pontuam muito acima do intervalo típico da própria base de código são os lugares de maior valor para olhar primeiro. Este uso de triagem, encontrar onde olhar, é a aplicação mais defensável e valiosa das métricas de complexidade, muito mais do que usá-las como um portão absoluto de aprovação/reprovação.

### Definir limiares relativos à sua própria base de código, não um número universal

Os limiares absolutos de complexidade pedidos emprestados sem crítica à convenção da indústria (uma pontuação de complexidade de dez é uma regra prática comummente citada) podem ser demasiado tolerantes ou demasiado rigorosos dependendo do seu domínio: um analisador sintático ou um motor de regras pode ter legitimamente uma complexidade de base mais alta do que um serviço CRUD típico. Calibre os seus próprios limiares contra a distribuição real da sua base de código, e trate uma violação de limiar como um aviso para olhar mais atentamente, não uma falha automática de compilação, a menos que a sua equipa tenha escolhido deliberadamente essa política mais rigorosa com plena consciência das suas trocas.

### Vigiar a manipulação através de decomposição sem simplificação genuína

A forma mais comum de as pontuações de complexidade serem manipuladas é o padrão de substituição do capítulo 1.2 aplicado a esta métrica específica: dividir uma função genuinamente complexa em várias funções mais pequenas que individualmente pontuam bem, enquanto o sistema geral permanece tão difícil de compreender, ou por vezes se torna mais difícil, porque a lógica está agora espalhada através de mais ficheiros com mais indireção entre eles. Emparelhe as métricas de complexidade com uma revisão qualitativa de se a decomposição realmente clarificou o código, ou se apenas moveu a complexidade para algum lugar onde a métrica já não a conseguia ver.

### Distinguir a complexidade essencial da complexidade acidental antes de reagir

Antes de tratar uma pontuação alta de complexidade como um problema a corrigir, pergunte se o problema subjacente genuinamente exige tantos caminhos independentes, a lógica de cálculo de impostos legitimamente tem muitos ramos, por exemplo, ou se a complexidade vem de causas evitáveis: condicionais profundamente aninhados que poderiam ser achatados, lógica duplicada que poderia ser consolidada, ou fronteiras de responsabilidade pouco claras que poderiam ser redesenhadas. Apenas a segunda categoria é um problema genuíno de qualidade que esta métrica deveria levá-lo a corrigir.

### Rastrear a tendência e os valores atípicos, não apenas uma média de instantâneo

Uma pontuação média de complexidade em toda a base de código a mover-se ligeiramente raramente é acionável por si só; a complexidade de um ficheiro específico a subir acentuadamente através de várias mudanças, ou um pequeno número de valores atípicos extremos numa base de código de outra forma bem comportada, são sinais muito mais úteis. Rastreie tanto a tendência ao longo do tempo como a cauda de valores atípicos, e use-os para despoletar uma investigação específica e direcionada em vez de uma iniciativa ampla e não focada de redução de complexidade.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Limiar universal absoluto | Simples, consistente, fácil de automatizar | Ignora diferenças legítimas de domínio; pode ser manipulado por decomposição |
| Limiar relativo à base de código | Melhor calibrado ao contexto real | Exige mais configuração e recalibração periódica |
| Complexidade como portão automatizado de build | Aplica consistência sem sobrecarga de revisão humana | Pode bloquear código legitimamente complexo mas bem desenhado, ou recompensar decomposição ofuscada |
| Complexidade como sinal de triagem para revisão humana | Apanha problemas genuínos de qualidade que a decomposição sozinha perderia | Exige mais tempo de revisão humana do que um portão totalmente automatizado |

A tensão central é **automação versus julgamento**. Um portão totalmente automatizado de complexidade é barato de aplicar e consistente, mas pode tanto bloquear código legitimamente complexo e bem desenhado como recompensar decomposição superficial que manipula a pontuação sem genuinamente simplificar nada. Resolva a tensão usando a análise automatizada de complexidade para revelar candidatos para revisão, e reservando o julgamento real, esta complexidade é essencial ou acidental, esta refatoração realmente clarificou ou apenas realocou a complexidade, para um revisor humano em vez de apenas um portão automatizado rígido.

## Perguntas para debater com a sua equipa

1. **Os nossos limiares de complexidade estão calibrados à distribuição real da nossa própria base de código, ou pedidos emprestados sem crítica de uma convenção genérica da indústria?** Extraia a distribuição real de complexidade da sua base de código e verifique se os seus limiares atuais fazem sentido contra ela, em vez de assumir que um número comummente citado se aplica universalmente ao seu domínio.

2. **Alguma vez vimos uma função dividida em várias mais pequenas sem o código resultante realmente se tornar mais fácil de compreender?** Este é o sinal mais claro do padrão de manipulação por decomposição contra o qual este capítulo avisa. Olhe para uma refatoração recente motivada principalmente por uma pontuação de complexidade e avalie honestamente se melhorou a compreensibilidade genuína.

3. **Onde na nossa base de código a complexidade é essencial para o problema, e onde é acidental e corrigível?** Percorra os seus valores atípicos de maior complexidade e classifique-os nestas duas categorias explicitamente, já que apenas a segunda categoria representa um problema genuíno e acionável de qualidade.

4. **Usamos as métricas de complexidade para triar o esforço de revisão, ou como um portão automatizado rígido sem nenhum julgamento humano envolvido?** Discuta se a sua abordagem atual de aplicação deixa espaço para a distinção essencial-versus-acidental que este capítulo recomenda, ou se trata cada violação identicamente independentemente do contexto.

5. **Uma pontuação de complexidade alguma vez foi usada, mesmo informalmente, para julgar a qualidade do trabalho de um engenheiro individual?** Isto arrisca a mesma armadilha de avaliação individual contra a qual o capítulo 3.4 avisa para métricas de atividade, aplicada aqui a métricas de código em vez disso, e convida à mesma resposta de manipulação.

6. **Como é a nossa tendência de complexidade ao longo do último ano para os nossos ficheiros mais críticos e mais frequentemente mudados?** Combine isto com a análise de processamento e pontos quentes do capítulo 4.3, já que um ficheiro que é tanto altamente complexo como frequentemente mudado merece atenção bem antes de um que é complexo mas raramente tocado.

## Perspetiva setorial

**Startup.** As métricas de complexidade são normalmente menos urgentes a esta escala; o tamanho da base de código é suficientemente pequeno para que a familiaridade informal muitas vezes substitua a medição formal. O hábito que vale a pena adotar cedo é simplesmente executar uma análise de complexidade ocasionalmente para apanhar um ficheiro específico a tornar-se silenciosamente ingerível antes de a equipa ter crescido demasiado para reparar informalmente.

**Pequena empresa.** A maioria das ferramentas modernas de análise estática reporta métricas de complexidade como parte de uma configuração mais ampla, gratuita ou de baixo custo, de verificação de estilo; use o output como um sinal periódico de triagem em vez de investir em ferramentas dedicadas. Concentre a atenção primeiro nos seus ficheiros mais frequentemente modificados.

**Empresa.** As métricas de complexidade à escala são mais valiosas combinadas com dados de processamento (capítulo 4.3) para priorizar o investimento de refatoração através de uma base de código demasiado grande para qualquer indivíduo pesquisar manualmente. Calibre os limiares por serviço ou domínio em vez de aplicar um único número para toda a organização, já que a complexidade legítima varia significativamente através de diferentes tipos de sistemas.

**Governo.** Os sistemas governamentais de longa duração acumulam muitas vezes complexidade gradualmente ao longo de anos ou décadas de mudanças incrementais de requisitos, e uma auditoria de complexidade pode ser uma ferramenta persuasiva e concreta para justificar investimento em modernização ou refatoração a interessados que de outra forma poderiam ver o sistema como simplesmente "a funcionar" e portanto não valendo a pena investir.

## Exemplos

**Empresa.** Uma empresa de processamento de pagamentos executou uma auditoria de complexidade em toda a base de código pela primeira vez e encontrou uma única função de validação de transações com uma pontuação de complexidade ciclomática mais de dez vezes a mediana da base de código. A investigação descobriu que a complexidade era quase inteiramente acidental: anos de tratamento de casos especiais acrescentado incrementalmente para fornecedores específicos de pagamento tinham-se acumulado em condicionais profundamente aninhados que podiam ser reestruturados num padrão de estratégia mais limpo separando a lógica específica de fornecedor. A refatoração, priorizada diretamente porque a auditoria de complexidade a identificou como o alvo único de maior valor na base de código, reduziu a pontuação de complexidade da função em mais de 80% e, mais importante, reduziu mensuravelmente a taxa de defeitos nesse caminho específico de código ao longo dos dois trimestres seguintes.

**Governo.** O motor de cálculo de benefícios de décadas de uma autoridade fiscal pontuou extremamente alto em métricas de complexidade em quase todas as funções, impulsionando uma suposição inicial de que todo o sistema precisava de uma reescrita desde o início. Uma revisão mais atenta, função a função, distinguindo a complexidade essencial da acidental, descobriu que a maior parte da complexidade refletia genuinamente as regras legais subjacentes, que realmente tinham tantos ramos legítimos e casos especiais mandatados por lei, enquanto um subconjunto mais pequeno vinha de duplicação evitável através de caminhos de cálculo semelhantes. A equipa visou apenas o subconjunto de complexidade acidental para refatoração, evitando uma reescrita completa cara e arriscada enquanto ainda melhorava significativamente as áreas mais genuinamente problemáticas do sistema.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de usar bem as métricas de complexidade é investimento de refatoração direcionado e de alto valor: o exemplo da empresa de pagamentos acima mostra uma única correção bem direcionada, identificada através de análise de complexidade, que reduziu mensuravelmente os defeitos precisamente no caminho de código de maior risco, a uma fração do custo que uma iniciativa ampla e não direcionada de refatoração teria exigido.

O custo total de propriedade é baixo: a maioria das cadeias de ferramentas modernas de desenvolvimento calcula as métricas de complexidade automaticamente como parte da análise estática (capítulo 4.4), e o investimento real é o tempo de julgamento humano para interpretar os resultados corretamente, distinguindo a complexidade essencial da acidental e apanhando a manipulação por decomposição, em vez de qualquer custo significativo de novas ferramentas.

## Antipadrões e armadilhas

- **Tratar uma pontuação de complexidade como um veredito direto de qualidade:** mede uma propriedade específica, não a qualidade geral do código.
- **Dividir uma função para manipular a pontuação sem simplificação genuína:** o padrão de manipulação por decomposição que este capítulo nomeia especificamente.
- **Aplicar um limiar universal sem calibrar à sua própria base de código:** produz aplicação demasiado tolerante ou demasiado rigorosa dependendo do domínio.
- **Usar métricas de complexidade para avaliar individualmente engenheiros:** convida à manipulação e aplica mal uma métrica destinada à triagem, não ao julgamento.
- **Tratar toda a complexidade como igualmente corrigível:** a complexidade essencial de um problema genuinamente difícil não é um defeito a eliminar.
- **Ignorar a tendência e os valores atípicos em favor de uma média estável em toda a base de código:** perde o sinal mais acionável que esta família de métricas fornece.

## Modelo de maturidade

- **Nível 1, Iniciar:** A complexidade não é medida, ou é medida com um limiar universal genérico e não examinado aplicado sem crítica.
- **Nível 2, Desenvolver:** As métricas de complexidade são recolhidas mas raramente levam a ação, e nenhuma distinção é feita entre complexidade essencial e acidental.
- **Nível 3, Padronizar:** Os limiares são calibrados à distribuição própria da base de código, e as métricas de complexidade impulsionam consistentemente a triagem de revisão e refatoração em toda a organização.
- **Nível 4, Gerir:** A tendência de complexidade e os valores atípicos são ativamente monitorizados e combinados com dados de processamento (capítulo 4.3) para priorizar o investimento de refatoração; a manipulação por decomposição é ativamente vigiada.
- **Nível 5, Orquestrar:** A organização consegue apontar para melhorias específicas e mensuráveis na taxa de defeitos traçadas diretamente até ao investimento de refatoração informado pela complexidade, e os dados de complexidade são uma entrada rotineira e confiável para decisões de investimento de engenharia.

## Ideias para debate

1. Qual é a nossa função ou ficheiro único mais complexo, e a sua complexidade é essencial ou acidental?
2. Alguma vez manipulámos uma pontuação de complexidade através de decomposição sem simplificação real?
3. Os nossos limiares estão calibrados à nossa própria base de código, ou pedidos emprestados sem crítica?
4. Onde é que a alta complexidade se sobrepõe ao alto processamento na nossa base de código agora mesmo?
5. Os dados de complexidade alguma vez informaram uma decisão de investimento de refatoração, ou ficam sem ser usados?

## Principais conclusões

- As métricas de complexidade como a **complexidade ciclomática** preveem a dificuldade de teste e defeito; não medem a qualidade geral do código diretamente.
- Distinga a **complexidade essencial** (de um problema genuinamente difícil) da **complexidade acidental** (evitável através de melhor desenho) antes de reagir a uma pontuação alta.
- Vigie a **manipulação por decomposição**: dividir código para baixar uma pontuação sem genuinamente simplificar nada.
- Use as métricas de complexidade para **triagem**, direcionando o esforço de revisão humana e refatoração, não como um boletim individual ou um portão automatizado rígido.
- Calibre os limiares à **distribuição da sua própria base de código**, e rastreie a **tendência e os valores atípicos**, não apenas uma média estável.

## Referências e leituras adicionais

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976).
- *Code Complete*, de Steve McConnell.
- *Working Effectively with Legacy Code*, de Michael Feathers.
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018).
