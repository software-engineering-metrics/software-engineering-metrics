# 3.1 O framework SPACE

## Visão geral e motivação

O **[framework SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, publicado em 2021 pelos investigadores Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, foi construído para responder a um problema específico: as métricas de **[produtividade do programador](https://en.wikipedia.org/wiki/Productivity)** de número único, linhas de código, contagem de commits, pontos de história, são trivialmente manipuláveis e induzem rotineiramente em erro. O SPACE propõe medir através de cinco dimensões em vez disso: **Satisfação e bem-estar**, **Desempenho**, **Atividade**, **Comunicação e colaboração**, e **Eficiência e fluxo**. Nenhuma letra única pretende ficar sozinha; a contribuição real da estrutura é a disciplina de manter todas as cinco à vista juntas, para que uma equipa não consiga parecer produtiva num eixo enquanto danifica silenciosamente outro.

Isto importa porque a produtividade do programador não é uma coisa única. Uma equipa pode ser altamente ativa (muitos commits, muitos pull requests) enquanto tem um mau desempenho (o trabalho não move os resultados que importam). Uma equipa pode ter um bom desempenho a curto prazo enquanto a satisfação se afunda, um indicador avançado do desgaste e colapso de qualidade que aparece meses mais tarde. O insight do SPACE, construindo diretamente sobre os capítulos 1.2 e 1.3 deste livro, é que qualquer uma destas dimensões, perseguida como um alvo isolado, será manipulada à custa das outras, e a estrutura existe especificamente para tornar essa troca visível antes de causar dano real.

Para equipas grandes, o SPACE dá à liderança um vocabulário partilhado para uma conversa que de outra forma volta por predefinição para qualquer dimensão que for mais fácil de medir, quase sempre a atividade. As organizações empresariais que comparam a produtividade através de muitas equipas precisam de uma estrutura que resista à atração para contar commits; as organizações governamentais a enfrentar pressão de recrutamento e retenção num mercado de trabalho competitivo precisam de dados de satisfação e bem-estar tão a sério quanto precisam de dados de entrega, porque perder um engenheiro experiente para o esgotamento custa muito mais do que o output de qualquer sprint único alguma vez poupou.

## Princípios-chave

- **Nenhuma dimensão SPACE única é credível isoladamente.** O valor da estrutura vem especificamente de medir várias juntas.
- **Pelo menos uma métrica de pelo menos três dimensões, misturando fontes subjetivas e objetivas, é o mínimo para um quadro equilibrado.** Um conjunto de métricas retirado inteiramente de uma dimensão ou um tipo de dados não está realmente a usar o SPACE.
- **A atividade é a dimensão mais propensa a uso indevido como proxy isolado.** É a mais fácil de medir e a menos representativa do valor real por si só.
- **A medição ao nível de equipa e ao nível individual precisam de tratamento diferente.** O SPACE foi desenhado principalmente para insight ao nível de equipa e sistema, não para boletins individuais.
- **As cinco dimensões interagem.** Uma mudança que melhora uma pode degradar outra, e a estrutura existe para apanhar essa troca.

## Recomendações

### Construir o seu conjunto de métricas a partir de pelo menos três dimensões antes de confiar nele

Não adote o SPACE escolhendo uma única dimensão favorita, normalmente atividade ou desempenho, e chamando-lhe concluído. Selecione deliberadamente pelo menos uma métrica de pelo menos três das cinco dimensões, misturando instrumentação objetiva (capítulo 1.5) com dados de inquérito subjetivos (capítulo 3.7), antes de apresentar qualquer conclusão sobre a produtividade de uma equipa. Esta composição mínima é o que previne o SPACE de colapsar de volta no problema de proxy único que foi desenhado para resolver.

### Tratar as métricas de atividade como contexto, nunca como a manchete

As contagens de commits, linhas de código, e contagens de pull requests são dados legítimos da dimensão de atividade do SPACE, mas nunca deveriam ser a métrica primária ou única apresentada sobre a produtividade de uma equipa. Use os dados de atividade para fornecer contexto às outras dimensões, por exemplo notando que uma queda na atividade coincidiu com uma subida na satisfação porque a equipa finalmente teve espaço para pagar dívida técnica, em vez de como um veredito independente. O capítulo 3.4 cobre os riscos específicos desta dimensão em profundidade.

### Aplicar o SPACE ao nível da equipa e do sistema, não ao nível individual

A investigação original do SPACE e a sua subsequente adoção pela indústria tratam ambas a estrutura como uma lente para compreender a produtividade de equipa e organizacional, não como um boletim de desempenho individual. Aplicar as dimensões SPACE para classificar indivíduos, especialmente a dimensão de atividade, recria precisamente o risco de manipulação contra o qual o capítulo 1.2 avisa e aplica mal uma estrutura que nunca foi validada para esse uso.

### Vigiar as trocas entre dimensões, não apenas o movimento dentro de uma

O verdadeiro poder diagnóstico da estrutura vem de observar como as dimensões se movem relativamente umas às outras. Uma métrica de desempenho a subir ao lado de uma satisfação a cair é um sinal de aviso que vale a pena investigar imediatamente, potencialmente indicando um ritmo insustentável. Uma métrica de atividade a subir ao lado de um desempenho estável ou a cair sugere trabalho de enchimento em vez de progresso genuíno. Reveja todas as cinco dimensões juntas numa cadência fixa especificamente para apanhar estes padrões entre dimensões, não apenas para verificar cada número isoladamente.

### Misturar cadências apropriadamente entre dimensões

Algumas dimensões SPACE mudam lentamente e são melhor medidas periodicamente (satisfação, tipicamente ciclos trimestrais de inquérito); outras mudam depressa e beneficiam de rastreio mais frequente e automatizado (atividade, eficiência e fluxo, ambas largamente instrumentáveis a partir de sistemas existentes). Corresponda a sua cadência de medição à taxa natural de mudança de cada dimensão em vez de forçar toda a métrica no mesmo calendário de relato.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Conjunto de métricas de dimensão única (normalmente atividade) | Simples, barato, familiar | Facilmente manipulável, perde o custo humano de práticas insustentáveis |
| Adoção completa das cinco dimensões SPACE | Equilibrada, resiste à manipulação de eixo único, apanha trocas | Exige mais instrumentação e investimento em inquéritos |
| Aplicação do SPACE ao nível da equipa | Corresponde ao uso validado da estrutura, protege indivíduos de aplicação incorreta | Não consegue responder a perguntas ao nível individual que a liderança por vezes quer |
| Aplicação do SPACE ao nível individual | Parece mais diretamente acionável para alguns gestores | Aplica mal a estrutura; forte risco de manipulação e moral |

A tensão central é **completude de medição versus custo e complexidade**. Uma implementação completa e equilibrada do SPACE exige mais instrumentação, mais esforço de desenho de inquérito, e mais disciplina para rever todas as cinco dimensões juntas do que um simples painel de controlo de atividade. Resolva a tensão começando com um conjunto genuinamente mínimo mas equilibrado, pelo menos uma métrica de pelo menos três dimensões, em vez de saltar inteiramente a disciplina da estrutura ou tentar uma versão esmagadora e completamente instrumentada de todas as cinco dimensões no primeiro dia.

## Perguntas para debater com a sua equipa

1. **O nosso conjunto atual de métricas de produtividade retira de pelo menos três dimensões SPACE, ou é dominado apenas por dados de atividade?** Audite o seu painel de controlo contra as cinco dimensões explicitamente; a maioria das organizações, avaliada honestamente, é muito mais pesada em atividade do que percebe.

2. **Alguma vez vimos uma dimensão SPACE melhorar enquanto outra se degradava silenciosamente, e reparámos na altura?** Esta troca entre dimensões é precisamente o que a estrutura é desenhada para apanhar. Olhe para trás no último ano para um período em que as métricas de entrega melhoraram e pergunte o que os dados de satisfação ou bem-estar mostraram durante a mesma janela.

3. **Os dados SPACE são alguma vez usados, mesmo informalmente, para avaliar ou comparar indivíduos em vez de equipas?** Isto aplica mal a estrutura e convida à manipulação. Seja honesto sobre como estas métricas são realmente discutidas na prática, não apenas sobre como a política declara que deveriam ser usadas.

4. **Como notaríamos se uma equipa tivesse melhorado as suas métricas de desempenho à custa de um ritmo insustentável?** Sem dados de satisfação e bem-estar revistos ao lado dos dados de desempenho, este tipo de troca é invisível até emergir como desgaste ou um colapso de qualidade meses mais tarde.

5. **Qual é a nossa cadência de medição para cada uma das cinco dimensões, e corresponde a quão depressa cada dimensão realmente muda?** Um inquérito trimestral de satisfação emparelhado com dados de atividade em tempo real é uma incompatibilidade razoável de cadência; a mesma cadência aplicada a todas as cinco sem pensamento não é.

6. **Se um novo gestor de engenharia se juntasse amanhã e olhasse apenas para o nosso painel de controlo, obteria um quadro equilibrado da produtividade da equipa, ou um enviesado?** Este é um teste prático de se o seu conjunto de métricas realmente alcançou o equilíbrio do SPACE, ou se apenas gesticula na direção da estrutura enquanto permanece dominado por atividade na prática.

## Perspetiva setorial

**Startup.** Uma implementação completa de cinco dimensões é normalmente um exagero para um punhado de engenheiros que falam diariamente e conseguem sentir diretamente a satisfação e a saúde da colaboração. O único hábito que vale a pena adotar cedo é resistir à atração para métricas apenas de atividade à medida que a equipa começa a crescer para além do tamanho onde a consciência informal cobre tudo.

**Pequena empresa.** Sem uma função dedicada de análise de pessoas, mantenha-o simples: emparelhe quaisquer dados de entrega que já tenha (capítulo 2.10) com uma verificação curta, informal, e regular sobre a satisfação, mesmo um simples inquérito de pulso de uma pergunta. Este emparelhamento mínimo já captura a disciplina central da estrutura muito melhor do que um painel de controlo apenas de atividade.

**Empresa.** É aqui que a estrutura completa ganha a sua complexidade. Padronize um conjunto equilibrado de métricas SPACE entre equipas para que a liderança consiga comparar a produtividade de forma justa em vez de voltar por predefinição para qualquer equipa que tenha o gráfico de commits com aspeto mais impressionante, e invista na infraestrutura de inquérito que o capítulo 3.7 cobre para tornar os dados de satisfação e colaboração tão fiáveis quanto a instrumentação objetiva.

**Governo.** A pressão de recrutamento e retenção, especialmente onde o salário do setor público nem sempre consegue competir com ofertas do setor privado, torna os dados de satisfação e bem-estar uma preocupação genuinamente estratégica, não um extra brando. Trate o SPACE tão a sério quanto as métricas de entrega no planeamento de pessoal e justificação orçamental, já que o custo de perder um engenheiro experiente para o esgotamento é medido em meses de conhecimento institucional que um substituto não consegue fornecer imediatamente.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de software tinha estado a rastrear contagens de commits e pontos de história concluídos como o seu sinal primário de produtividade durante anos. Depois de adotar um conjunto mais completo de métricas SPACE, incluindo um inquérito trimestral de satisfação e análise de rede de colaboração (capítulo 3.5), a liderança descobriu que a equipa com os números de atividade mais altos também tinha as pontuações de satisfação mais baixas e a taxa mais alta de desgaste voluntário no ano seguinte. Os números de atividade sozinhos tinham estado ativamente a induzir em erro; o quadro mais completo levou a uma redução deliberada da carga de trabalho concorrente dessa equipa (o princípio de WIP do capítulo 2.5 aplicado ao nível humano) e uma recuperação mensurável tanto na satisfação como, eventualmente, no desempenho sustentável.

**Governo.** Uma agência nacional de serviços digitais, a competir por talento de engenharia contra salários do setor privado que não conseguia igualar, adotou um conjunto equilibrado de métricas SPACE especificamente para construir o caso para investimentos de retenção não monetários: melhores ferramentas, tempo de concentração protegido, e atrito de processo reduzido. Os dados de inquérito de satisfação combinados com métricas de eficiência e fluxo (capítulo 3.6) mostraram que a frequência de interrupções, não a compensação, era o preditor mais forte de intenção de saída nos dados de entrevista de saída. O investimento subsequente da agência em política de tempo de concentração protegido, justificado diretamente por estes dados SPACE, correlacionou-se com uma melhoria mensurável na retenção ao longo dos dezoito meses seguintes.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de adotar o SPACE completamente é o desgaste evitado e o colapso de qualidade impulsionado por esgotamento evitado, ambos muito mais caros do que o custo de instrumentação da estrutura. Um conjunto de métricas apenas de atividade pode parecer excelente durante um ano ou dois até que o custo humano apanhe tudo de uma vez, momento em que o custo de substituir a especialização perdida e reconstruir a saúde da equipa ofusca qualquer ganho de produtividade que o conjunto estreito de métricas alguma vez pareceu mostrar.

O custo total de propriedade inclui a infraestrutura de inquérito (capítulo 3.7) e a disciplina de rever todas as cinco dimensões juntas em vez de voltar por predefinição para a que for mais fácil. Esse custo vale genuinamente a pena pagar: o exemplo empresarial acima mostra um padrão real e descobrível, alta atividade a mascarar alto risco de desgaste, que um conjunto de métricas mais estreito nunca teria revelado até o dano já estar feito.

## Antipadrões e armadilhas

- **Adotar o SPACE apenas de nome enquanto permanece dominado por atividade na prática:** o modo de falha mais comum, e derrota todo o propósito da estrutura.
- **Aplicar as dimensões SPACE a boletins individuais:** aplica mal uma estrutura validada para insight ao nível de equipa e sistema.
- **Rever dimensões isoladamente em vez de vigiar trocas entre dimensões:** perde o padrão que o SPACE é especificamente desenhado para apanhar.
- **Forçar cada dimensão na mesma cadência de medição:** desperdiça esforço em dimensões que mudam lentamente e sub-mede as que mudam depressa.
- **Tratar uma única pontuação de inquérito de satisfação como suficiente sem dados objetivos:** perde o equilíbrio entre fontes subjetivas e objetivas que a estrutura exige.
- **Ignorar uma tendência a piorar numa dimensão porque outra parece bem:** a falha exata que a disciplina entre dimensões da estrutura existe para prevenir.

## Modelo de maturidade

- **Nível 1, Iniciar:** A produtividade é medida apenas através de métricas de atividade, sem dados de satisfação, colaboração, ou eficiência recolhidos.
- **Nível 2, Desenvolver:** Algumas dimensões adicionais são medidas informalmente, mas não há revisão consistente entre dimensões nem padrão de composição mínima.
- **Nível 3, Padronizar:** Um conjunto equilibrado de métricas retirado de pelo menos três dimensões SPACE é aplicado consistentemente ao nível da equipa em toda a organização.
- **Nível 4, Gerir:** Todas as cinco dimensões são revistas juntas numa cadência regular, as trocas entre dimensões são ativamente investigadas, e a estrutura informa decisões reais de pessoal e processo.
- **Nível 5, Orquestrar:** Os dados SPACE moldam diretamente o planeamento de pessoal e o investimento em retenção, e a organização consegue apontar para intervenções específicas, informadas por padrões entre dimensões, que melhoraram mensuravelmente tanto a entrega como o bem-estar do programador juntos.

## Ideias para debate

1. Qual dimensão SPACE está mais subestimada no nosso conjunto atual de métricas?
2. Alguma vez vimos a atividade de uma equipa subir enquanto a satisfação caía silenciosamente?
3. Como apanharíamos hoje uma equipa a trocar a sustentabilidade de longo prazo por output de curto prazo?
4. Algum dado adjacente ao SPACE é atualmente usado para avaliar indivíduos em vez de equipas?
5. Como seria, concretamente, um painel de controlo de produtividade genuinamente equilibrado para nós?

## Principais conclusões

- O SPACE abrange cinco dimensões, **Satisfação e bem-estar, Desempenho, Atividade, Comunicação e colaboração, e Eficiência e fluxo**, e nenhuma única é credível sozinha.
- Construa um conjunto de métricas a partir de **pelo menos três dimensões**, misturando fontes de dados objetivas e subjetivas.
- Trate as **métricas de atividade como contexto**, nunca como o sinal principal de produtividade (capítulo 3.4).
- Aplique o SPACE ao **nível da equipa e do sistema**, não como um boletim individual.
- Reveja as dimensões juntas, vigiando **trocas entre dimensões**, não apenas o movimento dentro de uma única.

## Referências e leituras adicionais

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco e Timothy Lister.
- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink.
