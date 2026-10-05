# 3.2 Métricas de satisfação e bem-estar

## Visão geral e motivação

**Satisfação e bem-estar**, o S em SPACE (capítulo 3.1), é a dimensão que nenhuma telemetria de sistema consegue observar diretamente. Se um engenheiro acha o seu trabalho significativo, se se sente apoiado pela sua equipa, se está a caminhar para o esgotamento, nada disto deixa um rasto num registo de controlo de versões ou num pipeline de CI. Tem de ser perguntado. Este capítulo trata de perguntar bem: desenhar uma medição que produza um sinal credível sobre um estado genuinamente subjetivo e genuinamente importante, em vez de um número que parece preciso enquanto mede quase nada real.

Esta dimensão importa porque é o indicador avançado para custos que aparecem noutro lugar, muito mais tarde, e muito mais caros. A satisfação a declinar prevê o desgaste antes de uma entrevista de saída o fazer. O risco crescente de esgotamento prevê um colapso de qualidade antes de a taxa de defeitos o mostrar. Uma organização que só vigia métricas de entrega e atividade descobre um problema de bem-estar apenas quando já se tornou uma saída, um incidente, ou um declínio silencioso e sustentado em output que demora meses a diagnosticar. Medir diretamente a satisfação e o bem-estar é o que compra à organização o tempo de antecedência para agir antes de isso acontecer.

Para equipas grandes, esta dimensão é também onde a distinção diagnóstica e avaliativa do capítulo 1.1 importa mais agudamente. Os dados de satisfação usados para compreender e melhorar as condições de equipa são valiosos e de baixo risco. Os mesmos dados usados para classificar equipas ou, pior, indivíduos uns contra os outros corrompem o instrumento de inquérito quase imediatamente, porque as pessoas deixam de responder honestamente no momento em que suspeitam que a resposta será usada contra elas ou a sua equipa. As organizações empresariais e governamentais, com os seus ciclos formais de avaliação de desempenho, são especialmente propensas a esta deriva e precisam de se proteger explicitamente contra ela.

## Princípios-chave

- **A satisfação e o bem-estar não podem ser observados a partir da telemetria do sistema.** Esta dimensão tem de ser perguntada, deliberada e bem.
- **O anonimato não é opcional.** Qualquer ligação percebida entre uma resposta honesta e uma consequência pessoal destrói o sinal.
- **Esta dimensão é um indicador avançado, não um retardado.** Prevê o desgaste e os problemas de qualidade antes de aparecerem noutro lugar.
- **O esgotamento é um padrão específico e reconhecível, não apenas infelicidade genérica.** Meça-o explicitamente em vez de confiar apenas numa pontuação vaga de satisfação.
- **A tendência importa mais do que qualquer leitura única.** Uma única pontuação de satisfação é um instantâneo; a tendência ao longo de inquéritos sucessivos é o sinal real.

## Recomendações

### Usar instrumentos de inquérito validados em vez de inventar o seu próprio

O bem-estar e o esgotamento têm instrumentos de medição estabelecidos e validados, mais notavelmente o **[Maslach Burnout Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory)**, que mede o esgotamento através de três dimensões reconhecidas: exaustão emocional, despersonalização ou cinismo, e sentido reduzido de realização pessoal. Pedir emprestado de um instrumento estabelecido e validado, mesmo uma versão curta adaptada, produz dados mais credíveis do que um conjunto de perguntas ad hoc inventado internamente, porque os instrumentos validados já foram testados quanto a se realmente medem o que afirmam medir.

### Garantir anonimato genuíno, e ser transparente sobre como o fez

Declare explicitamente, e cumpra-o, que as respostas individuais não podem ser traçadas de volta a uma pessoa, especialmente em equipas pequenas onde os padrões de resposta poderiam de outra forma ser inferidos. Use uma ferramenta de inquérito de terceiros que a própria organização não consiga desanonimizar, publique resultados agregados apenas acima de um tamanho mínimo de grupo (normalmente cinco ou mais inquiridos) para prevenir inferência em equipas pequenas, e comunique esta política claramente antes de pedir a alguém para participar. Um único incidente onde o anonimato é quebrado, mesmo acidentalmente, destrói a confiança em todo o inquérito futuro.

### Rastrear a tendência ao longo do tempo, não uma leitura única isolada

Uma única pontuação de satisfação tem valor diagnóstico limitado por si só; uma tendência a declinar através de três ciclos consecutivos de inquérito é um sinal muito mais forte e mais acionável. Execute o inquérito numa cadência consistente e moderada, trimestral é comum, e apresente sempre os resultados ao lado da linha de tendência histórica em vez de como um número isolado, para que tanto leitores como inquiridos consigam calibrar-se contra mudança genuína em vez de ruído pontual.

### Distinguir a satisfação genérica do risco específico de esgotamento

Uma pergunta geral de satisfação ("quão satisfeito está com o seu trabalho?") e uma pergunta específica de esgotamento ("sente-se emocionalmente exausto pelo seu trabalho?") medem coisas relacionadas mas distintas, e uma equipa pode pontuar razoavelmente na primeira enquanto mostra sinais reais de aviso na segunda. Inclua ambas no seu desenho de inquérito, e trate um sinal de aviso específico de esgotamento como exigindo acompanhamento mais rápido e mais direto do que uma queda geral de satisfação.

### Emparelhar os dados de inquérito com sinais objetivos corroborantes, com cautela

Onde disponível, corrobore as tendências de satisfação com sinais objetivos que plausivelmente se relacionam com o bem-estar: taxa de desgaste voluntário, padrões sustentados de trabalho fora de horas, ou uma taxa crescente de tempo de férias não usado. Use-os como corroboração, nunca como um substituto para perguntar diretamente, e tenha cuidado para que esta corroboração não se torne um mecanismo de vigilância que por si só danifica a confiança e, ironicamente, a satisfação.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Perguntas de inquérito internas ad hoc | Rápidas de construir, adaptadas ao contexto | Não validadas; pouco claro se realmente medem o que afirmam |
| Instrumento validado (ex.: Maslach Burnout Inventory, adaptado) | Testado, comparável, sinal mais credível | Exige mais configuração e pode precisar de adaptação para o contexto de engenharia |
| Inquéritos de pulso curtos e frequentes | Baixa fadiga de inquirido, sinal quase em tempo real | Menos profundidade por inquérito; risco de ruído se sobreinterpretado |
| Inquéritos pouco frequentes e profundos | Sinal rico e detalhado | Mais lento a apanhar um problema de desenvolvimento rápido como esgotamento agudo |

A tensão central é **profundidade versus frequência**. Um inquérito profundo e validado executado trimestralmente dá um quadro credível e detalhado mas pode perder um problema de desenvolvimento rápido entre ciclos; os inquéritos de pulso curtos e frequentes apanham problemas mais depressa mas arriscam dados mais superficiais e ruidosos e fadiga de inquirido se usados em excesso. Resolva a tensão executando um inquérito mais profundo e validado numa cadência trimestral como o instrumento primário, suplementado por uma verificação de pulso muito curta e opcional (uma ou duas perguntas) mais frequentemente para aviso precoce, sem pedir a mesma profundidade de envolvimento todas as vezes.

## Perguntas para debater com a sua equipa

1. **Usamos um instrumento de inquérito validado, ou perguntas que inventámos nós próprios sem evidência de que realmente medem a satisfação ou o esgotamento?** Se o seu inquérito atual foi construído ad hoc, considere se adaptar de um instrumento estabelecido como o Maslach Burnout Inventory produziria dados mais credíveis.

2. **Conseguimos honestamente garantir o anonimato, incluindo em equipas pequenas onde os padrões de resposta poderiam de outra forma ser inferíveis?** Percorra as suas ferramentas reais de inquérito e prática de agregação e verifique se um gestor determinado conseguiria, na prática, inferir as respostas de um indivíduo, mesmo que a política diga que não deveria conseguir.

3. **Alguma vez vimos os dados de satisfação pressagiar um pico de desgaste ou um problema de qualidade que apareceu mais tarde noutras métricas?** Olhe para trás no seu histórico de inquéritos contra os seus dados de desgaste e incidente e veja se um padrão de indicador avançado é visível em retrospetiva. Se nunca verificou, isso em si vale a pena discutir.

4. **Distinguimos a satisfação geral do risco específico de esgotamento no nosso inquérito, ou confiamos numa única pergunta misturada?** Uma equipa pode parecer bem na satisfação geral enquanto mostra sinais reais de aviso de esgotamento por baixo; verifique se o seu instrumento atual conseguiria realmente apanhar essa diferença.

5. **Os dados de satisfação alguma vez foram usados, mesmo informalmente, para comparar ou classificar equipas umas contra as outras?** Esta deriva em direção ao uso avaliativo corrompe o instrumento de inquérito quase imediatamente, porque os inquiridos mudam as suas respostas assim que suspeitam de uma consequência competitiva.

6. **Qual é a nossa taxa real de resposta, e o que uma taxa de resposta a declinar nos estaria a dizer por si só?** Uma taxa de resposta a cair através de inquéritos sucessivos é em si um sinal, muitas vezes de confiança a erodir-se no processo ou fadiga de inquérito, e merece investigação por direito próprio em vez de ser descartada como um incómodo de recolha de dados.

## Perspetiva setorial

**Startup.** Com um punhado de pessoas, os inquéritos anónimos formais podem parecer desnecessários, e a conversa direta revela muitas vezes problemas de satisfação mais depressa do que um instrumento trimestral conseguiria. O risco é um fundador confundir a ausência de queixas com a ausência de um problema; introduza mesmo uma verificação leve e anónima assim que a equipa cresça para além do tamanho onde toda a gente fala diariamente.

**Pequena empresa.** Uma ferramenta de inquérito anónima simples, gratuita ou de baixo custo, executada trimestralmente com um conjunto curto e adaptado de perguntas validadas, é alcançável sem uma função dedicada de análise de pessoas. Resista à tentação de saltar as garantias de anonimato porque a equipa parece unida; essa proximidade é precisamente o que torna o feedback negativo honesto mais difícil de dar diretamente.

**Empresa.** A infraestrutura de inquérito a esta escala precisa de investimento real: uma ferramenta de terceiros adequada, uma política de agregação de tamanho mínimo de grupo, e uma política clara e consistentemente comunicada de uso não avaliativo. O retorno é proporcionalmente maior também, já que apanhar uma tendência de esgotamento numa organização de grande dimensão antes de impulsionar o desgaste protege uma quantidade muito maior de conhecimento institucional.

**Governo.** A pressão de retenção das restrições salariais do setor público torna esta dimensão estrategicamente importante, não opcional. Os dados de bem-estar podem justificar diretamente pedidos orçamentais para investimentos de retenção não monetários (ferramentas, tempo protegido, gestão de carga de trabalho) que as restrições de compensação sozinhas não conseguem abordar, desde que a própria recolha de dados seja suficientemente credível para ser citada com confiança.

## Exemplos

**Empresa.** A equipa de plataforma de uma empresa de infraestrutura cloud pontuou bem na satisfação geral durante mais de um ano enquanto uma pergunta específica de esgotamento, adaptada da subescala de exaustão emocional do Maslach Burnout Inventory, mostrou um declínio constante através de quatro trimestres consecutivos. A liderança, inicialmente inclinada a descartar a preocupação porque o número geral de satisfação parecia bem, investigou mais a fundo depois de um segundo trimestre consecutivo de declínio e descobriu que a equipa tinha estado a absorver uma carga insustentável de on-call (capítulo 6.3) durante quase um ano após um congelamento de contratações. Restaurar o pessoal adequado de on-call reverteu a tendência de esgotamento dentro de dois trimestres, bem antes de se ter convertido no pico de desgaste que os dados da empresa mostraram ser a consequência a jusante típica deste padrão.

**Governo.** Uma agência estadual de TI, a enfrentar dificuldade crónica em competir em salário com empregadores do setor privado, usou dados de inquérito de bem-estar especificamente para construir um caso orçamental para uma política de tempo de concentração protegido em vez de um aumento salarial que não conseguia garantir. O inquérito mostrou a frequência de interrupções e a carga de reuniões, não a compensação, como os preditores mais fortes de intenção de saída entre os inquiridos que indicaram estar ativamente à procura de emprego. A política resultante, bloqueando dois blocos ininterruptos de tarde por semana para trabalho de engenharia concentrado, correlacionou-se com uma melhoria mensurável tanto nas pontuações de satisfação como na retenção voluntária ao longo do ano seguinte, a uma fração do custo que um aumento salarial competitivo teria exigido.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de medir diretamente a satisfação e o bem-estar é o aviso precoce: uma organização que apanha uma tendência de esgotamento um ano inteiro antes de se converter em desgaste consegue intervir a uma fração do custo de recrutar e integrar um substituto, que tipicamente demora meses a atingir produtividade total mesmo depois de contratado. O desgaste voluntário de um engenheiro experiente custa a uma organização muito mais do que a infraestrutura de inquérito que poderia ter fornecido o aviso.

O custo total de propriedade inclui as ferramentas de inquérito, a disciplina de garantir e manter anonimato genuíno, e o compromisso organizacional de agir sobre o que os dados mostram em vez de os recolher e ignorar resultados inconvenientes. Esse último custo, vontade de agir, é muitas vezes o verdadeiro estrangulamento, não a medição em si; um inquérito que revela um problema que ninguém aborda erode a confiança no instrumento tão certamente quanto uma garantia de anonimato quebrada o faz.

## Antipadrões e armadilhas

- **Perguntas de inquérito ad hoc e não validadas:** produz dados de fiabilidade pouco clara.
- **Garantias de anonimato fracas ou quebradas:** destrói a resposta honesta e a confiança no instrumento, muitas vezes permanentemente.
- **Reagir a uma leitura única em vez de rastrear a tendência:** reage exageradamente ao ruído ou perde um declínio lento e genuíno.
- **Misturar a satisfação geral com perguntas específicas de esgotamento:** pode mascarar um sinal real de aviso dentro de uma média que parece bem.
- **Usar dados de satisfação para classificar ou comparar equipas:** a deriva avaliativa que corrompe as respostas honestas.
- **Recolher os dados mas nunca agir sobre um resultado inconveniente:** erode a confiança no inquérito tão completamente quanto uma promessa de anonimato quebrada o faz.

## Modelo de maturidade

- **Nível 1, Iniciar:** A satisfação e o bem-estar não são medidos de todo, ou apenas através de conversa informal e não estruturada.
- **Nível 2, Desenvolver:** Existe um inquérito ad hoc mas carece de validação, uma cadência consistente, ou uma garantia forte de anonimato.
- **Nível 3, Padronizar:** Um instrumento de inquérito validado ou adaptado executa numa cadência consistente com uma garantia forte e comunicada de anonimato, em toda a organização.
- **Nível 4, Gerir:** As tendências são ativamente rastreadas através de ciclos sucessivos, os sinais específicos de esgotamento são distinguidos da satisfação geral, e a organização tem um processo documentado para agir sobre sinais de aviso.
- **Nível 5, Orquestrar:** Os dados de bem-estar informam diretamente o planeamento de pessoal e o investimento em retenção, corroborados com cautela com sinais objetivos, e a organização consegue apontar para intervenções específicas que reverteram um declínio medido antes de se tornar desgaste ou um problema de qualidade.

## Ideias para debate

1. O nosso instrumento de inquérito atual sobreviveria ao escrutínio como genuinamente anónimo?
2. Uma tendência de satisfação ou esgotamento alguma vez previu um problema que mais tarde apareceu noutro lugar?
3. Qual é o nosso processo para agir sobre um resultado de inquérito que não queremos ouvir?
4. Distinguimos atualmente o risco de esgotamento da satisfação geral na nossa medição?
5. Que investimento não monetário os nossos dados de bem-estar melhor justificariam agora mesmo?

## Principais conclusões

- A satisfação e o bem-estar têm de ser **perguntados diretamente**; nenhuma telemetria de sistema consegue observar esta dimensão.
- Use um **instrumento validado** onde possível, e garanta **anonimato** genuíno e bem comunicado.
- Esta dimensão é um **indicador avançado** para problemas de desgaste e qualidade que de outra forma emergiriam muito mais tarde e mais caro.
- Distinga a **satisfação geral do risco específico de esgotamento**, e rastreie a **tendência ao longo do tempo**, não uma leitura única.
- Nunca use estes dados para **classificar ou comparar equipas**; essa deriva corrompe a resposta honesta quase imediatamente.

## Referências e leituras adicionais

- Maslach, Christina, e Susan E. Jackson, *Maslach Burnout Inventory*.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink.
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*, de Christina Maslach e Michael P. Leiter.
