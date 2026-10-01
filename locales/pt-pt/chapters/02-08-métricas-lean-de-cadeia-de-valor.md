# 2.8 Métricas lean de cadeia de valor

## Visão geral e motivação

Toda a métrica que esta parte cobriu até agora, tempo de fluxo, carga de fluxo, tempo de ciclo, utilização, descende de um conjunto de ferramentas muito mais antigo: as cinco medições de referência do mapeamento clássico de cadeia de valor **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**, desenvolvido na Toyota e generalizado através da manufatura, operações, e entrega de serviços muito antes de o software as adotar. O **tempo de espera (LT)** é o tempo total de relógio desde que o trabalho é pedido até ser entregue. O **tempo de processo (PT)** é o tempo real de mão na massa gasto a trabalhar numa única unidade. O **tempo de ciclo (CT)** é o tempo médio necessário para completar um único nó ou fase dentro da cadeia. A **percentagem completa e precisa (%C/A)** é a percentagem de unidades que uma equipa a jusante consegue processar sem precisar de retrabalho. O **tempo takt** é o tempo máximo aceitável para completar uma unidade de forma a corresponder limpamente à procura do cliente.

Este capítulo existe porque a engenharia de software não inventou estas ideias, pediu-as emprestadas, e o empréstimo por vezes reutilizou as mesmas palavras para coisas ligeiramente diferentes. O próprio tempo de ciclo deste livro (capítulo 2.6) mede especificamente as fases de engenharia de uma mudança, codificação, revisão, teste, implementação, enquanto o CT clássico do Lean é o mais geral "tempo médio por nó" aplicado a qualquer processo. O tempo de fluxo (capítulo 2.4) é o nome deste livro para o que o Lean chama tempo de espera. Conhecer este mapeamento importa porque um leitor vindo de uma formação em Lean Six Sigma, comum na manufatura, logística, saúde, e operações governamentais, usará estes termos exatos com os seus significados originais, e uma equipa de software que não fala a mesma língua perde uma ponte fácil e apoiada em evidência para colegas fora da engenharia.

Para equipas grandes, a %C/A é a métrica mais subutilizada deste capítulo. Captura algo que as métricas de fluxo nos capítulos 2.3 e 2.4 não capturam: quanto do que uma fase produz é realmente utilizável pela fase seguinte sem ser devolvido. Acumulada através de uma cadeia de valor de várias fases, um conceito a que a manufatura chama **rendimento de produção acumulado**, a %C/A revela como o retrabalho se agrava invisivelmente através das transições, um padrão a que organizações empresariais com pipelines longos e multiequipa e programas governamentais com múltiplos portões de aprovação são especialmente propensos e raramente medem diretamente.

## Princípios-chave

- **Estas cinco métricas antecedem o software e generalizam para além dele.** São o vocabulário comum que um interessado formado em Lean Six Sigma, comum em grandes empresas e operações governamentais, já fala fluentemente.
- **A colisão terminológica é real e vale a pena nomear explicitamente.** O tempo de ciclo deste livro (capítulo 2.6) e o CT clássico do Lean estão relacionados mas não são idênticos; documente o mapeamento para que as conversas interfuncionais não se cruzem silenciosamente sem se entenderem.
- **A %C/A tem de ser acumulada através de todas as fases, não medida uma vez no final.** O retrabalho introduzido cedo numa cadeia e apanhado tarde é invisível para uma métrica medida apenas na entrega final.
- **O tempo takt reformula o planeamento de capacidade à volta da procura, não do esforço.** A pergunta muda de "quão depressa conseguimos ir" para "quão depressa precisamos de ir", que se liga diretamente à utilização (capítulo 2.7) e à carga de fluxo (capítulo 2.4).
- **Estas são métricas diagnósticas, não métricas de vaidade.** Cada uma existe para responder a uma pergunta operacional específica, não para produzir um número impressionante para um painel de controlo.

## Recomendações

### Mapear a sua cadeia de valor com todas as cinco métricas Lean antes de adotar uma estrutura específica de software

Calcule o tempo de espera, o tempo de processo, o tempo de ciclo, a %C/A, e o tempo takt para uma amostra representativa de trabalho a mover-se através da sua cadeia de valor antes de sobrepor as próprias métricas do Flow Framework (capítulos 2.3 e 2.4). Isto dá-lhe uma linha de base que qualquer interessado literado em Lean Six Sigma consegue compreender imediatamente, e frequentemente revela a mesma dominância de tempo de espera que o capítulo 2.5 descreve, expressa num vocabulário que antecede e perdura além de qualquer estrutura específica de software.

### Acumular a percentagem completa e precisa multiplicativamente através de todas as fases

Meça a %C/A em cada fase individualmente, depois multiplique as percentagens ao nível da fase juntas para obter o rendimento de produção acumulado da cadeia de valor. Três fases, cada uma individualmente a funcionar a 90% completa e precisa, agravam-se para aproximadamente 73% no total, um número que não se parece nada com o relato de qualquer fase individual e é normalmente o mais honesto. Este único cálculo é a forma mais rápida de revelar quanto retrabalho um pipeline de várias fases está genuinamente a absorver.

### Definir o tempo takt explicitamente a partir de dados reais de procura do cliente, não a partir da capacidade

Calcule o tempo takt como o tempo de trabalho disponível dividido pela procura do cliente nesse período, deliberadamente independente de quão depressa a sua equipa calha conseguir trabalhar hoje. Compare o seu tempo de processo e tempo de ciclo medidos contra este número: um tempo de processo confortavelmente abaixo do tempo takt indica folga saudável, enquanto um tempo de ciclo que excede o tempo takt é evidência concreta e quantificada de uma escassez de capacidade, não apenas uma sensação de que as coisas estão atrasadas.

### Documentar o mapeamento entre os termos Lean e o vocabulário deste livro

Onde a sua organização já executa um programa Lean Six Sigma fora do software, ou onde a engenharia reporta a uma liderança fluente nesse vocabulário, escreva o mapeamento explicitamente na sua carta de métricas (capítulo 1.4): o tempo de fluxo deste livro é o tempo de espera do Lean, o tempo de ciclo deste livro (capítulo 2.6) é uma aplicação específica do CT mais geral do Lean, e o tempo ativo deste livro (capítulo 2.5) é o tempo de processo do Lean. Este único documento previne um argumento recorrente e de baixo valor sobre quais números são "reais".

### Usar a %C/A como salvaguarda ao lado da velocidade de fluxo, não como substituto dela

Emparelhe o rendimento de produção acumulado com a velocidade de fluxo (capítulo 2.3) da mesma forma que este livro emparelha toda a métrica de velocidade com uma salvaguarda de estabilidade. Uma contagem crescente de itens com uma %C/A acumulada a cair significa que a cadeia de valor está a entregar mais unidades que cada vez mais precisam de retrabalho mais tarde, precisamente o tipo de padrão de velocidade-sem-qualidade contra o qual o capítulo 1.2 avisa toda a família de métricas a proteger-se.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Apenas métricas Lean clássicas (LT, PT, CT, %C/A, tempo takt) | Vocabulário universal; funciona tanto em equipas de software como não-software | Não específico de software; precisa de tradução para fases específicas de engenharia |
| Apenas métricas do Flow Framework (capítulos 2.3, 2.4) | Construído especificamente para cadeias de valor de software e visibilidade de tipo de item | Não familiar a interessados formados em Lean Six Sigma fora da engenharia |
| Ambos, com um mapeamento explícito documentado | Fala ambos os vocabulários; a ponte interfuncional mais forte | Exige a disciplina antecipada de escrever o mapeamento e mantê-lo atual |
| %C/A medida apenas na entrega final | Simples, um único número | Esconde o retrabalho introduzido e apanhado mais cedo na cadeia |

A tensão central é **universalidade versus especificidade**. As métricas Lean clássicas são instantaneamente legíveis para qualquer pessoa com experiência em manufatura, operações, ou Six Sigma, mas não foram desenhadas tendo em mente as fases específicas do software, revisão de código, testes automatizados, aprovação de implementação. Resolva a tensão usando as métricas Lean como o vocabulário partilhado de referência para conversas interfuncionais e executivas, e as próprias métricas do Flow Framework (capítulos 2.3 e 2.4) para o trabalho diagnóstico específico de software que as equipas de engenharia fazem no dia a dia.

## Perguntas para debater com a sua equipa

1. **Conseguiríamos calcular todas as cinco métricas Lean clássicas para a nossa cadeia de valor hoje, ou só temos algumas delas?** A maioria das equipas de software tem equivalentes de tempo de fluxo e tempo de ciclo mas nunca calculou explicitamente o tempo de processo, a %C/A, ou o tempo takt. Identifique quais das cinco estão genuinamente em falta antes de assumir que a lacuna é pequena.

2. **Alguma vez acumulámos a %C/A através de todas as fases da nossa cadeia de valor, ou só a medimos na entrega final?** Uma única medição de fim de cadeia esconde precisamente o retrabalho agravado que o cálculo de rendimento de produção acumulado deste capítulo é desenhado para revelar. Tente o cálculo de acumulação com dados reais.

3. **Sabemos o nosso tempo takt, calculado a partir da procura real do cliente, e como o nosso tempo de ciclo medido se compara a ele?** A maioria das equipas nunca tornou esta comparação explícita, o que significa que as conversas de capacidade permanecem anedóticas em vez de quantificadas.

4. **Se um interessado formado em Lean Six Sigma de fora da engenharia perguntasse sobre o nosso tempo de ciclo, estaríamos confiantes de que queremos dizer a mesma coisa que ele quer dizer?** O tempo de ciclo deste livro (capítulo 2.6) e o CT clássico do Lean estão relacionados mas não são idênticos. Discuta se essa distinção alguma vez causou um mal-entendido real na sua organização.

5. **O nosso rendimento de produção acumulado alguma vez foi significativamente mais baixo do que a %C/A reportada por qualquer fase individual?** Se nunca calculou a acumulação, discuta o que esperaria encontrar e depois verifique isso contra dados reais.

6. **A nossa organização já executa um programa Lean ou Six Sigma fora do software com o qual poderíamos alinhar-nos em vez de manter um vocabulário separado e desligado?** Muitas empresas e agências governamentais já têm esta infraestrutura; verifique se a engenharia alguma vez realmente se ligou a ela.

## Perspetiva setorial

**Startup.** O mapeamento completo de cadeia de valor Lean raramente vale a cerimónia a esta escala, mas o tempo takt vale a pena compreender informalmente: saber aproximadamente quão depressa a equipa genuinamente precisa de se mover para corresponder à procura real do cliente, em vez de um ritmo interno arbitrário, previne tanto construir capacidade em excesso demasiado cedo como construí-la a menos quando o crescimento chega.

**Pequena empresa.** A %C/A é a mais imediatamente útil das cinco métricas aqui, já que responde diretamente a "quanto do que entregamos precisa de ser refeito", uma pergunta que os proprietários e pequenas equipas sentem agudamente sem sempre terem um número associado a ela. Rastreie-a informalmente para os seus um ou dois processos críticos antes de investir em algo mais elaborado.

**Empresa.** É aqui que o vocabulário Lean clássico ganha o seu valor, porque as grandes empresas muito frequentemente já executam um programa Lean Six Sigma em operações, divisões próximas da manufatura, ou serviços partilhados, e a engenharia que fala a mesma língua ganha uma ponte imediata e credível para essas funções em vez de precisar de justificar um conjunto de métricas separado e apenas-de-software do zero.

**Governo.** As agências governamentais, especialmente aquelas com raízes em funções regulatórias, próximas da manufatura, ou logísticas, têm frequentemente mandatos existentes de Lean ou melhoria de processos. Reformular a cadeia de valor de um serviço digital nos mesmos termos clássicos, tempo de espera, tempo de processo, %C/A, tempo takt, que o gabinete de melhoria de processos de uma agência já usa é muitas vezes a forma mais rápida de garantir apoio institucional genuíno para um esforço de modernização de software.

## Exemplos

**Empresa.** A divisão interna de software de uma empresa de manufatura tinha lutado durante anos para que as suas métricas de engenharia fossem levadas a sério por uma equipa de liderança de operações fluente em Lean Six Sigma vinda do chão de fábrica. Reformular o pipeline de entrega da divisão usando as mesmas cinco métricas clássicas, calculando o tempo de espera, o tempo de processo, o tempo de ciclo, a %C/A, e o tempo takt para a sua cadeia de valor de software, tornou imediatamente os números da divisão legíveis à liderança de operações pela primeira vez. Um cálculo de rendimento de produção acumulado através das quatro fases do pipeline revelou uma %C/A real de 61%, muito abaixo do número reportado por qualquer fase individual, que se tornou a base de evidência para uma iniciativa de redução de retrabalho que a liderança de operações financiou dentro do mesmo trimestre.

**Governo.** A equipa de licenciamento digital de um departamento estadual de transportes, reportando a uma agência com um gabinete de melhoria de processos Lean de longa data, nunca tinha envolvido esse gabinete porque as suas próprias métricas usavam linguagem específica de software que o gabinete não reconhecia. Depois de traduzir a cadeia de valor de licenciamento para tempo de espera, tempo de processo, e %C/A, o gabinete de melhoria de processos identificou que a verdadeira restrição da equipa não era a velocidade da engenharia mas uma fase a jusante de revisão legal a funcionar muito abaixo do seu próprio tempo takt efetivo em relação à procura de licenças, uma descoberta que o gabinete estava equipado para agir sobre imediatamente porque foi formulada em termos familiares.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de adotar o vocabulário Lean clássico ao lado das métricas específicas de software deste livro é uma ponte credível e imediata para especialização e financiamento de melhoria de processos que muitas vezes já existe noutro lugar numa grande organização. O exemplo da empresa de manufatura acima, garantindo financiamento de redução de retrabalho no mesmo trimestre em que a reformulação tornou o caso legível, é o padrão que a abordagem deste capítulo produz fiavelmente: o insight não era novo, mas o vocabulário que o tornou acionável para o público certo era.

O custo total de propriedade é baixo: estas cinco métricas não exigem nenhuma nova instrumentação além do que os capítulos 2.4 a 2.6 já recolhem, mais uma classificação de retrabalho de %C/A que normalmente é uma adição simples ao rastreio existente de defeitos e itens de fluxo (capítulo 2.2). O principal investimento é a tradução, escrever o mapeamento entre os termos deste livro e os clássicos do Lean, que se paga a si próprio a primeira vez que previne um mal-entendido interfuncional.

## Antipadrões e armadilhas

- **Medir a %C/A apenas na entrega final:** o vetor de manipulação no centro deste capítulo. Uma equipa pode reportar uma %C/A alta na fase final enquanto fases anteriores produzem silenciosamente retrabalho que é corrigido antes de alguém o medir, fazendo toda a cadeia de valor parecer mais saudável do que é. A salvaguarda é acumular a %C/A multiplicativamente através de todas as fases, o cálculo de rendimento de produção acumulado, e auditar periodicamente a definição de "completo e preciso" de cada fase para que não possa estreitar silenciosamente ao longo do tempo.
- **Assumir que o tempo de ciclo deste livro e o CT clássico do Lean significam exatamente a mesma coisa:** produz confusão interfuncional real quando os dois vocabulários se encontram sem um mapeamento documentado.
- **Definir o tempo takt a partir da capacidade atual em vez da procura real do cliente:** derrota o propósito da métrica, que é revelar uma lacuna entre a procura e a capacidade, não confirmar o ritmo que já existe.
- **Tratar as métricas Lean clássicas como obsoletas uma vez adotada uma estrutura específica de software:** descarta uma ponte credível e apoiada em evidência para especialização de melhoria de processos que pode já existir na organização.
- **Ignorar um programa Lean Six Sigma existente noutro lugar na organização:** perde financiamento, especialização, e credibilidade institucional que reformular as métricas de entrega em linguagem partilhada poderia desbloquear.
- **Reportar a %C/A sem a emparelhar contra a velocidade de fluxo:** permite que um número crescente de rendimento esconda uma taxa de retrabalho a cair, a mesma lacuna de salvaguarda contra a qual este livro avisa ao longo de todo o texto.

## Modelo de maturidade

- **Nível 1, Iniciar:** Nenhuma das cinco métricas Lean clássicas é calculada; a entrega é discutida sem referência ao tempo de espera, tempo de processo, ou %C/A.
- **Nível 2, Desenvolver:** O tempo de espera e o tempo de ciclo são rastreados informalmente, mas o tempo de processo, a %C/A, e o tempo takt não são calculados, e não existe nenhum mapeamento para o vocabulário deste livro.
- **Nível 3, Padronizar:** Todas as cinco métricas clássicas são calculadas consistentemente, e o mapeamento para o vocabulário de fluxo e tempo de ciclo deste livro é documentado numa carta de métricas partilhada.
- **Nível 4, Gerir:** O rendimento de produção acumulado é calculado através de todas as fases da cadeia de valor, e o tempo takt é comparado contra o tempo de ciclo medido para quantificar explicitamente lacunas de capacidade.
- **Nível 5, Orquestrar:** A organização ligou as suas métricas de entrega de software a um programa Lean ou Six Sigma existente noutro lugar do negócio, e consegue apontar para decisões específicas de investimento ou processo tomadas porque o vocabulário partilhado tornou um insight acionável para um público não-engenheiro.

## Ideias para debate

1. Conseguiríamos calcular o tempo de espera, o tempo de processo, o tempo de ciclo, a %C/A, e o tempo takt para a nossa cadeia de valor hoje?
2. Qual seria o nosso rendimento de produção acumulado se multiplicássemos a %C/A de todas as fases juntas?
3. A nossa organização já executa um programa Lean ou Six Sigma ao qual nunca ligámos as métricas de engenharia?
4. Como é que o nosso tempo de ciclo medido se compara ao nosso tempo takt, calculado a partir da procura real do cliente?

## Principais conclusões

- As cinco métricas Lean clássicas, **tempo de espera, tempo de processo, tempo de ciclo, percentagem completa e precisa, e tempo takt**, antecedem o software e continuam a ser o vocabulário comum de interessados formados em Lean Six Sigma.
- O **tempo de fluxo e o tempo de ciclo** deste livro **mapeiam para, mas não são idênticos a**, o tempo de espera e o CT clássico do Lean; documente o mapeamento explicitamente para evitar confusão interfuncional.
- O vetor de manipulação central do capítulo é **medir a %C/A apenas na entrega final**; a salvaguarda é acumulá-la multiplicativamente através de todas as fases como rendimento de produção acumulado.
- O **tempo takt reformula a capacidade à volta da procura real do cliente**, não do ritmo existente, e emparelha diretamente com a utilização (capítulo 2.7) e a carga de fluxo (capítulo 2.4).
- Reformular a entrega de software em termos Lean clássicos é muitas vezes a forma mais rápida de ligar a **especialização e financiamento existentes de melhoria de processos** já presentes numa grande organização.

## Referências e leituras adicionais

- Rother, Mike, e John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., e Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, e Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
