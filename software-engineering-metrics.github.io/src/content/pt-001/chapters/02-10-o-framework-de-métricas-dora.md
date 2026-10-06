# 2.10 O framework de métricas DORA

## Visão geral e motivação

As **[métricas DORA](https://dora.dev/guides/dora-metrics/)** vêm do programa de Investigação e Avaliação de **[DevOps](https://en.wikipedia.org/wiki/DevOps)**, um esforço de investigação de vários anos, mais tarde publicado como o livro *Accelerate* por Nicole Forsgren, Jez Humble, e Gene Kim, que inquiriu dezenas de milhares de profissionais de engenharia para encontrar que práticas de entrega se correlacionam com o desempenho organizacional. O resultado foram quatro métricas, emparelhadas duas a duas: a frequência de implementação e o tempo de espera para mudanças medem a velocidade; a taxa de falha de mudanças e o tempo de recuperação de implementação falhada, muitas vezes abreviado para tempo médio de recuperação (MTTR), medem a estabilidade. A descoberta de investigação que tornou a estrutura significativa foi que os melhores desempenhos eram rápidos e estáveis simultaneamente, derrubando a suposição de que a velocidade e a segurança se trocam uma pela outra, e essa descoberta continua a ser o exemplo trabalhado mais claro que este livro tem do princípio de emparelhamento com salvaguarda do tema 1.2: uma métrica de velocidade incentivada, emparelhada com uma salvaguarda de estabilidade, é o que as organizações com melhor desempenho realmente fazem.

Este livro cobre o DORA por último nesta parte, deliberadamente, em vez de como a estrutura organizadora da parte. Essa colocação não é uma rejeição da investigação, que continua a ser genuinamente rigorosa e vale a pena usar. Reflete uma limitação específica e real: o DORA mede quão rápido e quão seguro um pipeline se move, mas é silencioso sobre o que está a mover-se através do pipeline. Uma equipa pode publicar excelentes números DORA enquanto o seu output real derivou silenciosamente para retrabalho de defeitos ou privou de capacidade o trabalho de dívida técnica e segurança, um padrão que os temas 2.1 a 2.4 do Flow Framework são construídos especificamente para revelar e que o DORA não consegue ver. Use o DORA como este tema o apresenta: uma medida de referência bem validada e mais estreita da mecânica do pipeline, não o quadro completo da saúde da entrega.

Para equipas grandes, o valor genuíno restante do DORA é a comparabilidade. Uma métrica calculada consistentemente a partir de dados de pipeline e de incidente permite a uma organização comparar a capacidade de entrega através de muitas equipas a trabalhar em domínios diferentes sem o problema de comparar maçãs com laranjas que aflige a maioria das comparações entre equipas. As organizações empresariais ainda o usam para priorizar o investimento em plataformas; as organizações governamentais ainda o usam para demonstrar, com evidência, que um programa de modernização melhorou mensuravelmente a mecânica de entrega. Trate isso como o trabalho próprio e limitado do DORA, e use os temas do Flow Framework anteriores nesta parte para a pergunta mais ampla de se as coisas certas estão a ser entregues de todo.

## Princípios-chave

- **O DORA mede o pipeline, não o valor a fluir através dele.** O tema 2.1 nomeia esta lacuna diretamente; use a distribuição de fluxo (tema 2.3) para ver o que o DORA não consegue.
- **A velocidade e a estabilidade são medidas juntas, nunca separadamente.** Um painel de controlo informado pelo DORA sem ambas as metades não está realmente a usar a estrutura.
- **A consistência da definição importa mais do que o número bruto.** Uma equipa a mover-se de desempenho "médio" para "alto" numa métrica definida consistentemente é um sinal real; comparar duas equipas calculadas de forma diferente não é.
- **O DORA mede o sistema, não indivíduos.** Aplicar estas métricas a engenheiros individuais quebra a base estatística da estrutura e convida precisamente à manipulação contra a qual o tema 1.2 avisa.
- **Todas as quatro métricas são proxies, não objetivos.** Correlacionam-se com o desempenho organizacional; perseguir o próprio número, desligado de uma melhoria genuína de entrega, derrota o propósito da estrutura.

## Recomendações

### Instrumentar a frequência de implementação a partir do pipeline, contando apenas lançamentos de produção

A **frequência de implementação** mede com que frequência uma equipa liberta com sucesso para produção. Conte apenas implementações de produção bem-sucedidas, instrumentadas automaticamente a partir de dados de pipeline de CI/CD, nunca autorrelatadas. Vigie especificamente a manipulação de substituição, dividir uma mudança significativa em várias implementações triviais puramente para inflacionar a contagem, rastreando o tamanho da implementação ao lado da frequência: um tamanho médio a encolher ao lado de uma contagem a subir é o sinal mais claro de que isto está a acontecer.

### Instrumentar o tempo de espera para mudanças desde o primeiro commit até à produção

O **tempo de espera para mudanças** mede o tempo desde o primeiro commit de uma mudança de código até à sua implementação bem-sucedida em produção. Reporte tanto a mediana como um percentil alto, não apenas uma média, seguindo a orientação do tema 1.6 sobre dados enviesados baseados em tempo, e vigie a deriva de definição em qualquer ponto final, que lisonjeia o número sem nenhuma melhoria genuína.

### Definir a taxa de falha de mudanças por escrito antes de comparar entre equipas

A **taxa de falha de mudanças** mede a percentagem de implementações que causam uma falha que exige remediação, uma reversão, uma correção urgente, ou um incidente. Esta é a mais difícil das quatro de definir consistentemente, porque "falha" não é objetiva por si só. Concorde numa definição escrita antes de comparar equipas; sem ela, uma comparação aparentemente justa pode induzir gravemente em erro. Vigie uma melhoria suspeitosamente rápida sem mudança de processo subjacente por trás dela, o sinal mais claro de manipulação de definição em vez de progresso genuíno.

### Medir o tempo de recuperação a partir da deteção, não do evento de implementação

O **tempo de recuperação de implementação falhada** mede quanto tempo demora a restaurar o serviço quando uma implementação causa uma falha. Comece o relógio na deteção, não no próprio evento de implementação, para que o número reflita o atraso genuíno de recuperação em vez de uma lacuna de monitorização. Invista especificamente em capacidade automatizada de reversão, a alavanca única mais comum para melhorar esta métrica genuinamente em vez de declarar um incidente resolvido prematuramente.

### Usar métricas de fluxo, não o DORA, para diagnosticar porque um número se moveu

Quando uma métrica DORA muda, os quatro números sozinhos raramente explicam porquê. Use a decomposição de tempo de ciclo (tema 2.6), a carga de fluxo (tema 2.4), e a distribuição de fluxo (tema 2.3) como a camada de diagnóstico por baixo dos números resumidos do DORA, e nunca use uma métrica DORA numa avaliação de desempenho individual, o uso indevido único mais prejudicial a que esta estrutura está exposta.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Framework DORA completo, todas as quatro métricas emparelhadas | Validado pela investigação, resiste à manipulação através do emparelhamento, permite comparação justa entre equipas | Silencioso sobre que tipo de valor está a ser entregue; precisa do Flow Framework ao lado para esse quadro |
| DORA como o único conjunto de métricas organizador desta parte | Simples, familiar à maioria dos líderes de engenharia | Perde inteiramente a pergunta sobre a mistura de valor, a razão deste livro para o despriorizar aqui |
| DORA mais Flow Framework juntos | A mecânica do pipeline e a mistura de valor ambas visíveis | Exige manter dois vocabulários de métricas em vez de um |
| DORA aplicado ao nível individual | Parece diretamente acionável para alguns gestores | Quebra a validade estatística da estrutura; forte exposição à lei de Goodhart |

A tensão central é **rigor mecânico versus legibilidade de negócio**. As quatro métricas do DORA são precisamente definidas e validadas pela investigação, o que as torna excelentes para comparar o desempenho de pipeline entre equipas, mas essa mesma precisão está estreitamente limitada ao próprio pipeline e não diz nada sobre se o trabalho certo está a fluir através dele. Resolva a tensão mantendo o DORA como uma camada de referência para a saúde do pipeline, o lugar próprio do tema 2.10 na estrutura deste livro, enquanto usa os temas do Flow Framework anteriores nesta parte para a pergunta voltada para o negócio sobre a mistura de valor, em vez de tentar fazer o DORA responder a uma pergunta para a qual nunca foi desenhado.

## Perguntas para debater com a sua equipa

1. **Estamos a instrumentar todas as quatro métricas DORA a partir do pipeline, ou algumas delas são estimativas autorrelatadas?** Uma estrutura construída sobre medição objetiva e validada pela investigação perde muito do seu valor no momento em que um número se torna um melhor palpite. Audite a fonte de dados real de cada métrica (tema 1.5).

2. **Todas as equipas que comparamos usando métricas DORA partilham as mesmas definições de implementação, mudança, e falha?** Uma comparação entre equipas que usam definições diferentes não é realmente uma comparação, e pode produzir julgamentos injustos sobre o desempenho relativo.

3. **Alguém na nossa organização usou uma métrica DORA numa avaliação de desempenho individual, formal ou informalmente?** Este é o uso indevido único mais prejudicial da estrutura e acontece muitas vezes silenciosamente. Pergunte diretamente e esteja preparado para uma resposta desconfortável mas necessária.

4. **Os nossos números DORA poderiam ser excelentes enquanto a nossa distribuição de fluxo (tema 2.3) derivou silenciosamente para retrabalho ou para longe de funcionalidades?** Esta é precisamente a lacuna que o DORA sozinho não consegue ver. Extraia ambos os conjuntos de números juntos e verifique se contam uma história consistente.

5. **Quando uma das nossas métricas DORA se move, temos os diagnósticos de métrica de fluxo para explicar porquê?** Um número DORA sozinho diz-lhe que algo mudou, não o quê. Verifique se as suas equipas conseguem responder "porque é que o tempo de espera aumentou este mês" com dados, ou apenas com especulação.

6. **Como mudariam os nossos quatro números DORA se tentássemos deliberadamente manipular cada um, e notaríamos?** Percorra a frequência de implementação, o tempo de espera, a taxa de falha de mudanças, e o tempo de recuperação um de cada vez, a aplicação prática da disciplina central do tema 1.2 a esta estrutura específica.

## Perspetiva setorial

**Startup.** As métricas de velocidade do DORA normalmente vêm naturalmente a uma equipa pequena já a implementar frequentemente; a disciplina mais difícil é instrumentar a taxa de falha de mudanças e o tempo de recuperação honestamente em vez de assumir estabilidade porque nada correu muito mal ainda. Emparelhar o DORA com mesmo uma divisão informal de itens de fluxo (tema 2.2) cedo evita construir uma falsa sensação de saúde de entrega apenas à volta da velocidade de pipeline.

**Pequena empresa.** A maioria das plataformas modernas de CI/CD e controlo de versões exporta dados de frequência de implementação e tempo de espera com configuração mínima; ligar implementações a incidentes para a taxa de falha de mudanças normalmente precisa de mais esforço manual. Comece com as duas métricas de velocidade e acrescente o rastreio de estabilidade assim que existir um registo informal de incidentes contra o qual ligar.

**Empresa.** O maior valor restante do DORA a esta escala é a comparação justa e consistente entre equipas para decisões de investimento em plataforma. Padronize as definições em toda a organização (tema 1.4), automatize a instrumentação centralmente, e emparelhe todo o relatório DORA com uma vista de distribuição de fluxo para que a liderança veja tanto a velocidade do pipeline como a mistura de valor juntas, não uma sem a outra.

**Governo.** As métricas DORA ainda dão a um programa de modernização uma forma defensável e apoiada pela investigação de demonstrar melhoria na mecânica de entrega a órgãos de supervisão. Reporte as quatro métricas juntas, nunca escolhendo seletivamente a metade lisonjeadora, e emparelhe-as com a distribuição de fluxo para que o relatório também responda à pergunta mais difícil e mais importante do que o pipeline mais rápido está realmente a entregar.

## Exemplos

**Empresa.** O programa de modernização de plataforma de uma grande empresa de telecomunicações instrumentou todas as quatro métricas DORA consistentemente através de quarenta equipas de produto e mostrou um movimento genuíno de baixo desempenho para alto desempenho ao longo de dezoito meses, frequência de implementação a subir aproximadamente dez vezes, tempo de espera a descer de semanas para dias, taxa de falha de mudanças mantida estável. Um membro do conselho, a rever a apresentação, fez uma pergunta que os números DORA sozinhos não conseguiam responder: quanto dessa entrega mais rápida era novo valor para o cliente versus retrabalho. A organização de engenharia não tinha resposta até adotar a classificação de itens de fluxo no trimestre seguinte, que mostrou que o trabalho de funcionalidades tinha na verdade caído como parcela do output total mesmo com os números de velocidade do DORA a melhorar, uma descoberta que remodelou as prioridades do programa para o ano seguinte.

**Governo.** O gabinete de modernização de TI de um governo estadual adotou as métricas DORA como condição contratual para comparar a capacidade de entrega de várias equipas de fornecedores concorrentes, um uso eficaz da comparabilidade da estrutura. A alta frequência de implementação de um fornecedor foi revelada, uma vez que a taxa de falha de mudanças foi exigida ao lado dela, como correlacionando-se com uma taxa de falha quase três vezes mais alta do que os seus pares, informação que informou diretamente a decisão de renovação de contrato do gabinete. O gabinete mais tarde acrescentou um requisito de distribuição de fluxo aos mesmos contratos depois de descobrir que o fornecedor com os melhores números DORA também era o que gastava a menor parcela de capacidade no trabalho de correção de segurança que o contrato especificamente exigia.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de adotar bem o DORA, dentro do seu âmbito próprio, é uma resposta defensável e baseada em evidência para "a nossa entrega está a ficar mais rápida e mais segura", que continua a ser uma das perguntas mais tratáveis na engenharia para responder com confiança. Essa resposta justifica investimento em plataforma e ferramentas com números reais, e permite à liderança comparar investimentos concorrentes numa base justa e consistente, exatamente como sempre o fez.

O custo total de propriedade é o trabalho de integração que liga eventos de implementação a registos de incidentes para a taxa de falha de mudanças e o tempo de recuperação, não trivial através de um panorama de ferramentas grande e heterogéneo. O custo adicional de emparelhar o DORA com os temas do Flow Framework anteriores nesta parte é comparativamente pequeno, já que a classificação de itens de fluxo é uma convenção de relato sobreposta ao trabalho existente, não um sistema de medição paralelo, e o retorno, apanhando precisamente o ponto cego de mistura de valor que o exemplo das telecomunicações acima ilustra, vale bem esse investimento adicional modesto.

## Antipadrões e armadilhas

- **Tratar o DORA como o quadro completo da saúde de entrega:** o vetor de manipulação que a colocação deste tema é desenhada para contrariar. Uma organização pode apresentar números DORA genuinamente excelentes, implementações rápidas, frequentes, estáveis, enquanto o seu valor realmente entregue derivou silenciosamente para retrabalho ou para longe de funcionalidades, e as quatro métricas do DORA sozinhas nunca revelarão essa mudança porque nunca foram desenhadas para a medir. A salvaguarda é emparelhar todo o relatório DORA com a distribuição de fluxo (tema 2.3), para que um pipeline rápido e estável a entregar a mistura errada de trabalho seja visível em vez de confundido com saúde de entrega genuína.
- **Reportar apenas a metade de velocidade do DORA:** derrota a descoberta central da estrutura de que a velocidade e a estabilidade se movem juntas nos melhores desempenhos.
- **Usar métricas DORA em avaliações de desempenho individuais:** quebra a validade estatística da estrutura e convida a forte manipulação.
- **Comparar equipas com definições inconsistentes:** produz comparações que parecem justas mas não são.
- **Números DORA autorrelatados em vez de instrumentados pelo pipeline:** introduz precisamente o viés que a estrutura foi desenhada para eliminar.
- **Tratar o DORA como diagnóstico em vez de resumo:** deixa uma equipa incapaz de explicar porque um número se moveu sem a camada de métrica de fluxo por baixo dele.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas DORA, se rastreadas de todo, são autorrelatadas, definidas inconsistentemente, e nunca emparelhadas com dados de fluxo.
- **Nível 2, Desenvolver:** Algumas equipas instrumentam o DORA a partir do pipeline, mas as definições variam e não há contraparte de distribuição de fluxo contra a qual verificar.
- **Nível 3, Padronizar:** Todas as quatro métricas DORA são instrumentadas consistentemente a partir de dados de pipeline e incidente, com definições partilhadas, e são rotineiramente mostradas ao lado da distribuição de fluxo.
- **Nível 4, Gerir:** O DORA e as métricas de fluxo são revistos juntos como um emparelhamento padrão em todos os níveis da organização, e o DORA nunca é usado para avaliação individual.
- **Nível 5, Orquestrar:** A organização consegue apontar para casos específicos onde a distribuição de fluxo apanhou um problema de mistura de valor que números DORA excelentes sozinhos tinham escondido, e usa ambas as estruturas deliberadamente para as perguntas distintas que cada uma responde.

## Ideias para debate

1. Onde é que as nossas quatro métricas DORA nos colocam atualmente no espectro de níveis de desempenho, honestamente?
2. Os nossos números DORA poderiam parecer excelentes enquanto a nossa distribuição de fluxo derivou silenciosamente? Alguma vez verificámos?
3. Alguém alguma vez usou um número DORA para julgar um indivíduo, mesmo informalmente?
4. Se um concorrente publicasse os seus números DORA, os nossos comparariam favoravelmente, e essa comparação realmente nos diria quem está a entregar mais valor real?

## Principais conclusões

- As quatro métricas do DORA, **frequência de implementação, tempo de espera, taxa de falha de mudanças, e tempo de recuperação**, emparelham a velocidade com a estabilidade por desenho e continuam genuinamente validadas pela investigação.
- Este livro coloca o DORA **por último nesta parte** porque mede o pipeline, não o valor a fluir através dele; emparelhe-o com a distribuição de fluxo (tema 2.3) para o quadro mais completo.
- O vetor de manipulação central do tema é **confundir números DORA excelentes com saúde de entrega completa**; a salvaguarda é sempre reportar o DORA ao lado da distribuição de fluxo.
- **Nunca use métricas DORA em avaliações de desempenho individuais**; a validade da estrutura depende de medição ao nível do sistema, não individual.
- Use as **métricas de fluxo como a camada de diagnóstico** por baixo dos números resumidos do DORA quando um deles se move.

## Referências e leituras adicionais

- Forsgren, Nicole, Jez Humble, e Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. Programa DevOps Research and Assessment. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, e George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, e John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
