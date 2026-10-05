# 3.7 Inquéritos de experiência do programador e métricas DevEx

## Visão geral e motivação

Este capítulo encerra a Parte 3 com a mecânica prática que torna credíveis os dados autorrelatados de cada capítulo anterior: como desenhar um inquérito de experiência do programador (DevEx) que produz um sinal genuíno em vez de um concurso de popularidade, e como combinar os dados de inquérito com instrumentação objetiva num conjunto de métricas sobre o qual uma organização consegue realmente agir. Todo o capítulo nesta parte depende de alguma forma de autorrelato, a satisfação e o bem-estar (capítulo 3.2) mais diretamente, mas o desempenho, a comunicação, e o fluxo beneficiam todos também de um inquérito bem desenhado, e um inquérito mal desenhado mina o valor de todos de uma vez.

A **experiência do programador (DevEx)** é a formulação mais ampla e mais recente que emergiu à volta da mesma ideia central que o SPACE formalizou: a experiência real e do dia a dia dos engenheiros de fazer o trabalho acontecer, atrito, ferramentas, carga cognitiva, ciclos de feedback, é em si uma coisa mensurável e melhorável, não apenas uma preocupação cultural branda. A investigação DevEx, notavelmente a estrutura proposta por Abi Noda, Margaret-Anne Storey, Nicole Forsgren, e Michaela Greiler, organiza esta experiência à volta de três dimensões: ciclos de feedback, carga cognitiva, e estado de fluxo, que mapeiam de perto e estendem as dimensões SPACE que esta parte já cobriu em profundidade.

Para equipas grandes, a diferença entre um inquérito que produz sinal credível e um que produz ruído ou, pior, dados ativamente enganadores está inteiramente nos detalhes de desenho que este capítulo cobre: formulação de perguntas, escolha de escala de resposta, amostragem e cadência, e como os resultados são comunicados de volta aos inquiridos. As organizações empresariais e governamentais que executam estes inquéritos à escala, através de milhares de engenheiros, não podem dar-se ao luxo de errar nisto, porque um instrumento falho a essa escala produz conclusões confiantemente erradas que moldam decisões reais de alocação de recursos.

## Princípios-chave

- **A qualidade do desenho do inquérito determina a credibilidade dos dados muito mais do que o comprimento ou a sofisticação do inquérito.** Um inquérito curto e bem desenhado vence um longo e mal desenhado sempre.
- **A taxa de resposta é em si um sinal**, não apenas uma métrica de recolha de dados; uma taxa a declinar indica muitas vezes confiança a erodir-se no processo.
- **Combine os dados de inquérito com instrumentação objetiva** sempre que possível, seguindo o princípio de instrumentação do capítulo 1.5; use os dados de inquérito especificamente para o que os dados objetivos não conseguem capturar.
- **Feche o ciclo com os inquiridos.** Um inquérito que nunca leva visivelmente a nenhuma mudança treina as pessoas a deixarem de o levar a sério.
- **O DevEx e o SPACE são formulações complementares da mesma preocupação subjacente**, não estruturas concorrentes entre as quais escolher.

## Recomendações

### Desenhar perguntas para clareza e evitar formulação tendenciosa ou de dois canos

Escreva perguntas de inquérito que perguntam sobre exatamente uma coisa, em linguagem simples, sem incorporar uma suposição na própria pergunta. "Quão satisfeito está com as nossas ferramentas e documentação?" é uma pergunta de dois canos que mistura duas respostas potencialmente muito diferentes numa resposta confusa. Divida-a em duas perguntas separadas. Evite formulação tendenciosa como "quanto é que o nosso investimento recente em ferramentas melhorou a sua experiência?", que presume que a melhoria ocorreu em vez de perguntar neutralmente se ocorreu.

### Usar escalas de resposta consistentes e pilotar novas perguntas antes do lançamento amplo

Padronize numa escala de resposta consistente (uma escala de **[Likert](https://en.wikipedia.org/wiki/Likert_scale)** de cinco ou sete pontos é comum e bem estudada) através do seu instrumento de inquérito, para que as respostas sejam comparáveis através de perguntas e ao longo do tempo. Pilote qualquer nova pergunta com um pequeno grupo antes de a lançar em toda a organização, para apanhar formulação ambígua ou interpretação inesperada antes de corromper um conjunto de dados completo.

### Tratar a taxa de resposta como um sinal diagnóstico por direito próprio

Rastreie a taxa de resposta do inquérito ao longo de ciclos sucessivos, e trate uma taxa a declinar como um sinal de aviso que vale a pena investigar diretamente, semelhante ao sinal de confiança discutido no capítulo 3.2. Uma taxa de resposta a cair indica muitas vezes fadiga de inquérito, confiança a erodir-se de que os resultados levam a ação, ou uma suspeita crescente de que o anonimato não é genuinamente protegido, qualquer uma das quais merece investigação direta em vez de ser descartada como um mero incómodo de recolha de dados.

### Combinar os dados de inquérito com instrumentação objetiva de DevEx

Emparelhe as respostas subjetivas de inquérito com sinais objetivos onde existam: tempo de compilação, tempo de execução da suite de testes, tempo de configuração do ambiente local de desenvolvimento, e os dados de tempo de fluxo e interrupção do capítulo 3.6. Uma resposta de inquérito que diz "a nossa compilação é demasiado lenta" torna-se muito mais acionável quando emparelhada com a tendência real medida de tempo de compilação, e a combinação apanha casos onde a perceção e a realidade objetiva divergem em qualquer direção, o que por si só vale a pena investigar.

### Fechar o ciclo: publicar resultados e ação visível de acompanhamento

Depois de cada ciclo de inquérito, publique um resumo honesto dos resultados, incluindo resultados que a liderança poderia preferir não destacar, e comprometa-se publicamente com pelo menos uma ação concreta tomada em resposta. Um inquérito que não produz nenhum acompanhamento visível ensina aos inquiridos que a sua contribuição honesta não importa, o que degrada tanto a taxa de resposta como a honestidade de resposta em cada ciclo subsequente. Esta disciplina de fechar o ciclo é muitas vezes o determinante único mais importante de se um programa de inquérito DevEx permanece útil durante vários anos ou decai lentamente num exercício de marcar caixas.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Inquérito longo e abrangente | Dados ricos e detalhados através de muitos tópicos | Taxa de resposta mais baixa, mais fadiga, mais espaço para perguntas mal desenhadas |
| Inquérito curto e focado | Taxa de resposta mais alta, mais fácil de desenhar bem | Menos cobertura; pode perder um problema emergente fora do foco escolhido |
| Apenas dados de inquérito | Captura diretamente a experiência subjetiva | Vulnerável a viés e não consegue verificar contra a realidade objetiva |
| Inquérito combinado com instrumentação objetiva | Apanha a divergência entre perceção e realidade, mais acionável | Exige mais esforço de integração de dados |

A tensão central é **cobertura versus qualidade de resposta**. Um inquérito mais longo e mais abrangente captura mais terreno mas degrada a taxa de resposta e aumenta o risco de perguntas mal desenhadas passarem despercebidas; um inquérito curto e focado obtém respostas de melhor qualidade mas arrisca perder algo importante fora do seu âmbito. Resolva a tensão mantendo o inquérito central e recorrente curto e bem pilotado, e usando inquéritos ocasionais e claramente rotulados de aprofundamento para tópicos específicos que precisam de exploração mais detalhada, em vez de tentar cobrir tudo em cada ciclo.

## Perguntas para debater com a sua equipa

1. **Alguma vez pilotámos uma nova pergunta de inquérito com um pequeno grupo antes de a lançar amplamente, ou as novas perguntas vão diretamente para o inquérito completo?** Saltar o passo de pilotagem é uma forma comum de perguntas ambíguas ou de dois canos acabarem por corromper um conjunto de dados completo antes de alguém reparar que a formulação não era clara.

2. **O que fez a nossa taxa de resposta ao longo dos últimos vários ciclos de inquérito, e investigámos um declínio se ocorreu?** Trate esta tendência como um sinal genuíno que vale a pena discutir, não apenas um incómodo de recolha de dados a notar de passagem.

3. **Combinamos os dados de inquérito com alguma instrumentação objetiva, ou a perceção subjetiva fica inteiramente sozinha no nosso relato?** Identifique pelo menos um lugar onde emparelhar uma pergunta de inquérito com dados objetivos, tempo de compilação, frequência de implementação, poderia tornar o resultado mais acionável.

4. **Que ação concreta tomámos como resultado direto e visível do nosso último ciclo de inquérito, e comunicámos essa ação de volta aos inquiridos?** Se a resposta honesta é "nada visível," essa lacuna já está provavelmente a erodir a confiança no instrumento, quer tenha ou não aparecido ainda na taxa de resposta.

5. **Alguma das nossas perguntas atuais de inquérito é tendenciosa ou de dois canos, e notaríamos se fosse?** Reveja as suas perguntas atuais reais contra este teste específico como um exercício de grupo.

6. **Como se comparam os nossos dados de inquérito DevEx ou SPACE contra sinais objetivos quando os dois parecem discordar, e o que esse desacordo nos diz?** Um caso onde a perceção e os dados objetivos divergem é muitas vezes mais valioso diagnosticamente do que um caso onde concordam, já que a própria lacuna é informativa.

## Perspetiva setorial

**Startup.** Um inquérito de pulso simples e muito curto, por vezes apenas uma ou duas perguntas, executado informalmente e frequentemente, é normalmente suficiente a esta escala, e o rigor formal de desenho de instrumento importa menos quando um fundador ainda consegue ter uma conversa direta com quase toda a gente regularmente.

**Pequena empresa.** Uma ferramenta de inquérito gratuita ou de baixo custo com um conjunto curto e adaptado de perguntas, executada trimestralmente, captura a maior parte do valor aqui sem precisar de especialização dedicada em desenho de inquéritos. Priorize a disciplina de fechar o ciclo acima da sofisticação; mesmo uma pequena equipa beneficia de agir visivelmente sobre o que um inquérito curto revela.

**Empresa.** A qualidade do desenho de inquérito importa enormemente à escala, porque uma pergunta falha ou uma garantia de anonimato quebrada corrompe dados através de milhares de inquiridos de uma vez, e as conclusões resultantes, confiantemente erradas, podem desviar decisões significativas de alocação de recursos. Invista em especialização real de desenho de inquérito, ou faça parceria com uma plataforma estabelecida de medição DevEx, em vez de construir um instrumento ad hoc internamente.

**Governo.** A taxa de resposta e a confiança são especialmente frágeis em organizações onde o pessoal pode já estar desconfiado de como os dados são usados internamente. Sobreinvista em garantias transparentes de anonimato e ação visível de acompanhamento especificamente para construir a confiança que torna alcançável uma taxa de resposta honesta num contexto onde o ceticismo sobre o uso de dados pode já ser mais alto do que num contexto típico do setor privado.

## Exemplos

**Empresa.** O inquérito inicial de DevEx de uma empresa de software incluía uma pergunta pedindo aos engenheiros para avaliarem a "satisfação com ferramentas e processo," uma pergunta de dois canos que misturava duas preocupações muito diferentes. Quando a pontuação combinada voltou medíocre, a liderança não conseguia dizer se o problema eram as ferramentas, o processo, ou ambos, e os esforços iniciais de remediação visaram a área errada durante dois trimestres. Dividir a pergunta numa revisão subsequente revelou que a pontuação de ferramentas era na verdade forte e a pontuação de processo era fraca, redirecionando o investimento para simplificar um processo incómodo de aprovação de lançamento, que produziu uma melhoria mensurável de satisfação dentro de um trimestre, ao contrário do esforço anterior focado em ferramentas que tinha mostrado pouco efeito.

**Governo.** O primeiro inquérito DevEx de uma agência digital nacional teve uma taxa de resposta abaixo de 30%, e uma revisão interna descobriu que o pessoal acreditava amplamente, corretamente como se veio a descobrir, que os gestores individuais conseguiam ver quem tinha e não tinha respondido, mesmo que os resultados agregados fossem supostamente anónimos. A agência mudou para uma plataforma de inquérito genuinamente independente e de terceiros com anonimato verificado, comunicou a mudança explícita e repetidamente, e publicou um resumo claro dos resultados do ciclo anterior juntamente com três ações concretas tomadas em resposta. A taxa de resposta subiu para mais de 70% dentro de dois ciclos, e a liderança da agência creditou especificamente a combinação de anonimato genuíno e ação visível de acompanhamento como a razão pela qual a confiança no instrumento recuperou.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de um programa de inquérito DevEx bem desenhado é dados credíveis e acionáveis sobre uma dimensão, a experiência do programador, que de outra forma permanece invisível até emergir como desgaste ou um abrandamento de entrega. O exemplo da empresa de software acima mostra o custo de errar no desenho: dois trimestres de esforço de remediação mal direcionado porque uma única pergunta mal formulada misturou duas preocupações distintas.

O custo total de propriedade inclui as ferramentas de inquérito, a disciplina de desenho e pilotagem que este capítulo recomenda, e o compromisso contínuo de fechar o ciclo com ação visível de acompanhamento a cada ciclo. Esse compromisso, mais do que qualquer custo de ferramentas, é o que determina se um programa de inquérito permanece útil durante anos ou decai num exercício de marcar caixas que produz dados cada vez menos credíveis ao longo do tempo.

## Antipadrões e armadilhas

- **Perguntas de dois canos ou tendenciosas:** misturam preocupações distintas ou enviesam respostas, e muitas vezes passam despercebidas sem pilotagem.
- **Saltar o passo de pilotagem para novas perguntas:** deixa a formulação ambígua corromper um conjunto de dados à escala total.
- **Ignorar uma taxa de resposta a declinar:** perde um sinal importante de confiança por direito próprio.
- **Nunca fechar o ciclo com ação visível de acompanhamento:** ensina aos inquiridos que a contribuição honesta não importa, degradando a qualidade futura dos dados.
- **Tratar os dados de inquérito como suficientes por si só, sem corroboração objetiva:** perde casos onde a perceção e a realidade divergem em qualquer direção.
- **Garantias de anonimato fracas ou não verificáveis:** a forma única mais rápida de colapsar tanto a taxa de resposta como a honestidade de resposta.

## Modelo de maturidade

- **Nível 1, Iniciar:** As perguntas de inquérito são ad hoc e não pilotadas, a taxa de resposta não é rastreada como sinal, e os resultados raramente levam a ação visível.
- **Nível 2, Desenvolver:** Existe alguma disciplina de desenho de inquérito, mas a pilotagem é inconsistente e o ciclo não é fiavelmente fechado com os inquiridos.
- **Nível 3, Padronizar:** As perguntas são pilotadas antes do lançamento, a taxa de resposta é rastreada e investigada quando declina, e os resultados são publicados consistentemente com pelo menos uma ação concreta de acompanhamento.
- **Nível 4, Gerir:** Os dados de inquérito são sistematicamente combinados com instrumentação objetiva, e a divergência entre os dois é ativamente investigada como um sinal diagnóstico.
- **Nível 5, Orquestrar:** A organização tem um programa de inquérito maduro, credível, e de vários anos com taxas de resposta consistentemente altas, ação visível demonstrável de cada ciclo, e um historial de apanhar e corrigir perguntas mal desenhadas antes de corromperem dados.

## Ideias para debate

1. Alguma pergunta atual de inquérito no nosso instrumento alguma vez confundiu ou induziu em erro um inquirido?
2. Qual foi a última ação concreta que tomámos como resultado direto dos dados de inquérito?
3. Como saberíamos se a nossa garantia de anonimato tivesse sido quebrada, mesmo acidentalmente?
4. Onde é que os nossos dados de inquérito concordam ou discordam da instrumentação objetiva, e o que isso nos diz?
5. O que seria preciso para duplicar a nossa taxa atual de resposta?

## Principais conclusões

- A **qualidade de desenho** do inquérito, perguntas claras, de conceito único, e sem viés, importa mais do que o comprimento ou a sofisticação.
- **A taxa de resposta é um sinal por direito próprio**; investigue um declínio em vez de o tratar como um mero incómodo.
- **Combine os dados de inquérito com instrumentação objetiva** para apanhar a divergência entre a perceção e a realidade.
- **Feche o ciclo**: publique resultados e ação visível de acompanhamento a cada ciclo, ou a confiança no instrumento erodirá.
- O **DevEx e o SPACE são formulações complementares**, não concorrentes, da mesma preocupação subjacente para a experiência do programador.

## Referências e leituras adicionais

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, e Michaela Greiler, "DevEx: What Actually Drives Productivity," *ACM Queue* (2023).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century*, de Jeff Lawson.
- *Designing and Conducting Survey Research: A Comprehensive Guide*, de Louis M. Rea e Richard A. Parker.
