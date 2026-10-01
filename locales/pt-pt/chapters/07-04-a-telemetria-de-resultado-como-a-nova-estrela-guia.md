# 7.4 A telemetria de resultado como a nova estrela-guia

## Visão geral e motivação

Este capítulo encerra a Parte 7, e num sentido real encerra o argumento que este livro inteiro tem estado a construir desde o capítulo 1.3, com uma única afirmação direta: à medida que a IA generativa torna a produção bruta barata, a **[telemetria](https://en.wikipedia.org/wiki/Telemetry) de resultado**, medição contínua e instrumentada de resultados reais em vez de atividade ou produção, deixa de ser uma boa prática entre várias e torna-se o princípio organizador em torno do qual um programa de métricas tem de ser construído. Esta não é uma ideia nova introduzida pela primeira vez aqui. É a ideia que o capítulo 1.3 introduziu na parte inicial deste livro, agora apresentada como a resposta necessária, em vez de meramente preferível, a uma mudança tecnológica que tornou toda a alternativa mais perigosa do que costumava ser.

A lógica é direta. Antes da IA generativa, o volume de produção era um proxy imperfeito mas não sem valor para o esforço e, frouxamente, para o valor; uma equipa que entregava mais funcionalidades tinha, no mínimo, feito mais trabalho, mesmo que esse trabalho nem sempre fosse o trabalho certo. A IA generativa corta até essa ligação frouxa: o volume de produção já não indica fiavelmente esforço, já que uma ferramenta o consegue gerar em segundos, e certamente não indica valor, já que o capítulo 7.3 mostrou que a produção inflacionada pode coexistir com qualidade a degradar-se. As métricas que sobrevivem intactas a esta mudança são precisamente aquelas para as quais este livro tem enfatizado construir desde os seus capítulos iniciais: taxa de defeitos escapados (capítulo 5.1), adoção de funcionalidades (capítulo 5.2), resultados de cliente e negócio (capítulo 5.3), fiabilidade (Parte 6), e bem-estar do programador (Parte 3). Nenhuma destas depende de como o código subjacente foi produzido; todas medem o que realmente aconteceu como resultado.

Para equipas grandes, o argumento deste capítulo tem consequências diretas e práticas para como um programa de métricas deveria ser construído e reconstruído daqui em diante. As organizações empresariais a redesenhar os seus painéis de engenharia à luz da adoção de IA deveriam ponderar o investimento especificamente em direção à infraestrutura de telemetria de resultado que este capítulo descreve; as organizações governamentais, a avaliar tanto as ferramentas de IA como os programas mais amplos de tecnologia em que estão incorporadas, deveriam sujeitar ambos ao mesmo padrão de telemetria de resultado que este capítulo recomenda como a linha de base para qualquer avaliação credível e preparada para o futuro.

## Princípios-chave

- **A telemetria de resultado torna-se necessária, não meramente preferível, uma vez que a produção é barata.** Este é o princípio fundador do capítulo 1.3, agora urgente em vez de aspiracional.
- **As métricas que sobrevivem a esta mudança são aquelas para as quais este livro tem construído ao longo de todo o texto**: defeitos escapados, adoção, resultados de negócio, fiabilidade, e bem-estar.
- **Um programa de métricas construído principalmente em torno de métricas de produção é agora um passivo, não apenas uma escolha subótima.** As métricas de produção podem ser inflacionadas barata e rapidamente em escala.
- **A telemetria de resultado exige investimento real**, instrumentação, paciência para sinal mais lento, e disciplina organizacional para resistir ao apelo em direção a métricas de produção mais rápidas, mais baratas, mas agora não fiáveis.
- **Este princípio sobrevive a qualquer ferramenta ou fornecedor específico de IA.** É uma resposta duradoura a uma mudança duradoura no que a produção significa, não um ajuste temporário a uma tendência passageira.

## Recomendações

### Audite o seu rácio de investimento em métricas: telemetria de resultado versus rastreio de produção

Calcule aproximadamente que fração da sua infraestrutura atual de métricas, esforço de instrumentação, espaço de painel, tempo de reunião de revisão, vai para métricas de resultado (Parte 5, Parte 6, bem-estar do programador da Parte 3) versus métricas de produção e atividade (contagem de implementações, volume de commits, rendimento de pedidos de incorporação de mudanças). Se o rastreio de produção domina, esse próprio rácio é agora um passivo dado o argumento deste capítulo, e rebalanceá-lo é a mudança única de maior alavancagem que este capítulo recomenda.

### Invista deliberadamente em infraestrutura de telemetria de resultado, como um investimento de engenharia de primeira classe

A medição de resultado, rastreio de adoção de funcionalidades, correlação de resultado de negócio (capítulo 5.3), instrumentação de fiabilidade (Parte 6), exige investimento real e contínuo de engenharia que muitas organizações historicamente subfinanciaram relativamente às métricas de produção comparativamente baratas e fáceis que dominam muitos painéis hoje. Trate este investimento de infraestrutura com a mesma seriedade que este livro aplica a qualquer outra capacidade significativa de engenharia, não como uma preocupação secundária atrás do próprio investimento em ferramentas de IA.

### Aceite e comunique que a telemetria de resultado é mais lenta, e construa paciência para isso nas expectativas da sua organização

As métricas de resultado são, quase pela sua natureza, mais atrasadas e mais ruidosas do que as métricas de produção (a distinção de indicador avançado versus atrasado do capítulo 1.3, a cautela estatística do capítulo 1.6). Uma organização habituada ao feedback rápido e satisfatório de observar um número de produção subir precisa de construir paciência genuína para o sinal mais lento e mais honesto que a telemetria de resultado fornece, e a liderança precisa de comunicar e modelar ativamente essa paciência em vez de recuar reflexivamente para a alternativa mais rápida mas agora não fiável sob pressão para mostrar resultados rápidos.

### Use esta mudança como a ocasião para retirar métricas de produção genuinamente obsoletas, não apenas para acrescentar métricas de resultado ao seu lado

Seguindo a disciplina do capítulo 1.1 de retirar métricas que já não justificam o seu custo, use este momento como uma ocasião deliberada para remover métricas de produção e atividade que esta mudança desvalorizou especificamente, em vez de simplesmente acrescentar métricas de resultado em cima de um painel existente inalterado. Um painel que mantém cada métrica antiga de produção enquanto acopla novas métricas de resultado cresce inchado em vez de genuinamente melhorado.

### Trate o investimento em telemetria de resultado como duradouro, independente de qualquer ferramenta específica de IA ou relação de fornecedor

Construa a infraestrutura de telemetria de resultado como uma capacidade organizacional permanente, não como uma reação específica a qualquer ferramenta de IA que a sua organização calhe estar a usar este ano. Este princípio, e a infraestrutura que exige, vai sobreviver a qualquer relação específica de fornecedor ou geração de ferramentas, e construí-lo como uma capacidade duradoura protege o seu programa de métricas tanto contra a próxima mudança tecnológica como contra a atual.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Painel dominado por métricas de produção | Feedback rápido e barato; familiar à maioria das organizações | Agora ativamente não fiável dado o efeito da IA generativa no custo de produção |
| Painel dominado por telemetria de resultado | Resiliente a esta mudança; mede o que realmente importa | Sinal mais lento e mais ruidoso; exige investimento real de instrumentação |
| Acrescentar métricas de resultado ao lado de métricas de produção inalteradas | Incremental, menos disruptivo | Produz inchaço de painel em vez de melhoria genuína |
| Rebalanceamento completo e deliberado em direção à telemetria de resultado | Aborda a mudança direta e completamente | Exige a mudança mais significativa de organização e investimento |

A tensão central é, num sentido real, a mesma com que este livro abriu no capítulo 1.3, agora afiada à sua forma mais urgente: **feedback rápido e familiar versus sinal mais lento e honesto**. As métricas de produção sempre foram mais fáceis e mais rápidas de produzir; o argumento deste capítulo é que a IA generativa moveu essa troca de meramente subótima para ativamente perigosa. Resolva a tensão da forma que este livro tem recomendado desde o seu capítulo de abertura: pondere decisivamente em direção aos resultados, aceite o feedback mais lento que vem com a medição genuína de valor, e trate o desconforto desse feedback mais lento como o custo honesto de medir algo real em vez de algo meramente conveniente.

## Perguntas para debater com a sua equipa

1. **Que fração da nossa infraestrutura atual de métricas e atenção de painel vai para métricas de resultado versus métricas de produção e atividade?** Calcule este rácio honestamente; a maioria das organizações, avaliadas pela primeira vez, descobre que é mais ponderado para produção do que teriam adivinhado.

2. **Que investimento específico de infraestrutura de telemetria de resultado temos estado a adiar em favor de rastreio mais rápido e mais barato de produção?** Nomeie um exemplo concreto, instrumentação de adoção de funcionalidades, ferramentas de correlação de resultado de negócio, e discuta o que seria necessário para realmente o construir.

3. **A nossa organização construiu paciência genuína para o feedback mais lento da telemetria de resultado, ou a pressão por resultados rápidos continua a puxar-nos de volta para métricas de produção mais rápidas mas agora não fiáveis?** Seja honesto sobre este padrão nas suas próprias reuniões recentes de reporte e revisão.

4. **Que métrica de produção ou atividade no nosso painel atual é uma candidata genuína para retirada, agora que o argumento deste capítulo se aplica especificamente a ela?** Identifique pelo menos uma, e discuta o que precisaria de a substituir em vez de simplesmente deixar uma lacuna.

5. **Se o nosso fornecedor de ferramentas de IA ou a atual geração de assistentes de codificação de IA mudasse dramaticamente no próximo ano, o nosso programa de métricas ainda se sustentaria?** Isto testa se o seu investimento em telemetria de resultado é genuinamente duradouro, construído como uma capacidade permanente, ou meramente uma reação específica à sua situação atual de ferramentas.

6. **Como seria a nossa organização comprometer-se completamente com o argumento deste capítulo, rebalanceando o nosso investimento em métricas decisivamente em direção aos resultados em vez de incrementalmente?** Esboce isto concretamente em vez de o deixar abstrato; a lacuna entre o estado atual e esta visão é o roteiro real da sua organização para responder a esta mudança.

## Perspetiva setorial

**Startup.** Construir telemetria de resultado cedo, antes de as métricas de produção terem tido a oportunidade de se tornarem hábito organizacional profundamente enraizado, é genuinamente mais fácil do que a adaptar retroativamente mais tarde. Uma empresa jovem a adotar assistência de codificação de IA desde o início tem uma oportunidade real de construir o seu programa de métricas com prioridade de resultado em vez de precisar de desfazer uma cultura existente dominada por métricas de produção.

**Pequena empresa.** Concentre o investimento em telemetria de resultado na métrica única de resultado que mais diretamente reflete sobrevivência e crescimento (capítulo 5.3), em vez de tentar instrumentação abrangente através de cada categoria de resultado que este livro cobre. Um investimento modesto e focado em telemetria de resultado supera um painel abrangente de métricas de produção que o argumento deste capítulo agora desvalorizou especificamente.

**Empresa.** O rebalanceamento que este capítulo recomenda é uma mudança organizacional genuína e significativa a esta escala, provavelmente exigindo patrocínio executivo e um plano de investimento de vários trimestres. Trate-o com a mesma seriedade que qualquer outro grande investimento de infraestrutura que este livro cobre, e use os exemplos específicos e concretos dos capítulos 7.1 e 7.3, inflação de métricas e diluição de qualidade que um painel rebalanceado teria apanhado mais cedo, para construir o caso interno para o investimento.

**Governo.** Os programas governamentais de tecnologia avaliados principalmente por métricas de entrega e produção (funcionalidades entregues, dentro do prazo) estão cada vez mais vulneráveis exatamente ao ceticismo que o capítulo 5.3 descreveu, e o argumento deste capítulo afia ainda mais essa vulnerabilidade à medida que a adoção de ferramentas de IA se espalha pela indústria mais ampla de onde as agências governamentais recrutam e contra a qual são comparadas. Construa a telemetria de resultado como a base primária para reporte público e justificação orçamental, posicionando a sua organização à frente, em vez de atrás, desta mudança.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de software, motivada diretamente pelo quase-acidente de inflação de métricas descrito no exemplo de tecnologia financeira do capítulo 7.1, conduziu uma auditoria completa do seu rácio de investimento em métricas e descobriu que quase 70% do seu espaço de painel e esforço de instrumentação estava dedicado a métricas de produção e atividade, com apenas investimento modesto e inconsistente em telemetria de resultado. Ao longo do ano seguinte, a empresa rebalanceou deliberadamente este rácio, retirando várias métricas de produção que a auditoria do capítulo 7.1 tinha sinalizado como as mais expostas e investindo a capacidade libertada em instrumentação de adoção de funcionalidades e resultado de negócio (capítulos 5.2, 5.3). O painel resultante, apresentado na reunião do conselho de administração do ano seguinte, foi explicitamente creditado pelo mesmo membro anteriormente cético do conselho como uma base significativamente mais fiável para avaliar o investimento de engenharia do que a versão anterior pesada em produção que substituiu.

**Governo.** Uma agência nacional de serviços digitais, a construir um novo programa de métricas de engenharia desde o início especificamente porque o seu painel anterior dominado por métricas de produção tinha atraído ceticismo legislativo sustentado, adotou o princípio deste capítulo explicitamente como a sua decisão fundadora de design: a telemetria de resultado, tempo de espera do cidadão, taxa de conclusão de serviço, taxa de defeitos escapados, seria a base primária para todo o reporte público, com as métricas de produção e entrega retidas apenas como ferramentas internas de diagnóstico, nunca como a evidência de manchete apresentada externamente. Este design com prioridade de resultado, construído deliberadamente à luz da mudança de IA generativa que esta parte descreve, deu ao reporte da agência uma durabilidade e credibilidade junto da sua comissão de supervisão que o seu programa predecessor, construído em torno das suposições de métricas de produção de uma geração anterior, nunca tinha alcançado.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de se comprometer decisivamente com a telemetria de resultado é um programa de métricas que permanece fiável e credível através da atual mudança tecnológica e de tudo o que vier a seguir, em vez de um que exige outra revisão significativa da próxima vez que a produção se tornar barata através de alguma futura mudança tecnológica. O exemplo da empresa de software acima mostra isto concretamente: o painel rebalanceado reparou diretamente a credibilidade que a versão anterior pesada em produção tinha posto em risco genuíno.

O custo total de propriedade é o investimento em infraestrutura de telemetria de resultado que este capítulo recomenda, trabalho genuinamente significativo de vários trimestres para uma organização grande, pesado contra o risco duradouro e a longo prazo de um programa de métricas que se torna progressivamente menos fiável à medida que a produção continua a ficar mais barata. Este não é um custo que este livro lhe pede para aceitar levianamente; é a consequência direta e necessária de levar o argumento fundador do capítulo 1.3 tão a sério quanto esta parte final do livro lhe pede.

## Antipadrões e armadilhas

- **Tratar esta mudança como exigindo apenas ajuste incremental em vez de rebalanceamento genuíno:** subestima a escala de mudança que a IA generativa introduziu no que as métricas de produção significam.
- **Acrescentar métricas de resultado ao lado de um conjunto inalterado e ainda dominante de métricas de produção:** produz inchaço de painel em vez do rebalanceamento genuíno por que este capítulo argumenta.
- **Construir o investimento em telemetria de resultado como uma reação a uma ferramenta atual específica de IA em vez de como uma capacidade duradoura:** deixa a organização exposta à próxima mudança tecnológica da mesma forma.
- **Falhar em construir paciência organizacional para o feedback mais lento da telemetria de resultado:** arrisca reverter para métricas de produção mais rápidas mas agora não fiáveis sob pressão por resultados rápidos.
- **Retirar métricas de produção sem uma substituição genuína de telemetria de resultado:** deixa uma lacuna de medição em vez de uma melhoria genuína.
- **Apresentar esta mudança às partes interessadas como meramente uma resposta a ferramentas de IA em vez de como o cumprimento do princípio fundador deste livro:** subestima a durabilidade e generalidade do argumento.

## Modelo de maturidade

- **Nível 1, Iniciar:** O painel permanece dominado por métricas de produção, sem resposta deliberada à mudança que esta parte descreve.
- **Nível 2, Desenvolver:** Foram acrescentadas algumas métricas de resultado, mas o rácio global de investimento permanece pesado em produção e nenhuma métrica foi deliberadamente retirada.
- **Nível 3, Padronizar:** Foi conduzida uma auditoria deliberada e um rebalanceamento em direção à telemetria de resultado, com métricas de produção genuinamente obsoletas retiradas, em toda a organização.
- **Nível 4, Gerir:** A infraestrutura de telemetria de resultado é tratada como um investimento de engenharia de primeira classe e contínuo, e a paciência organizacional para o seu feedback mais lento é ativamente cultivada e protegida.
- **Nível 5, Orquestrar:** O programa de métricas da organização é liderado por telemetria de resultado como um princípio de design duradouro e permanente, provado resiliente através da mudança tecnológica atual e explicitamente construído para permanecer resiliente através do que vier a seguir.

## Ideias para debate

1. Qual é o nosso rácio real atual de investimento em métricas de resultado versus métricas de produção?
2. Que métrica única de produção deveríamos retirar este trimestre, e que métrica de resultado deveria substituí-la?
3. Onde é que a impaciência organizacional nos puxou de volta recentemente para métricas de produção mais rápidas mas menos fiáveis?
4. O nosso investimento em telemetria de resultado é duradouro, ou ligado especificamente à nossa situação atual de ferramentas de IA?
5. O que seria necessário para nos comprometermos completamente com o argumento deste capítulo, em vez de ajustar incrementalmente?

## Principais conclusões

- A telemetria de resultado torna-se **necessária, não meramente preferível**, uma vez que a IA generativa torna a produção barata; este é o princípio fundador do capítulo 1.3, agora urgente.
- As métricas que **sobrevivem a esta mudança** são aquelas para as quais este livro constrói ao longo de todo o texto: defeitos escapados, adoção, resultados de negócio, fiabilidade, e bem-estar.
- **Audite e rebalanceie o seu rácio de investimento em métricas** deliberadamente, retirando métricas de produção genuinamente obsoletas em vez de apenas acrescentar métricas de resultado ao seu lado.
- Construa **paciência organizacional para o feedback mais lento da telemetria de resultado**, e resista ao apelo de volta a métricas de produção mais rápidas mas agora não fiáveis sob pressão.
- Construa este investimento como uma **capacidade duradoura**, independente de qualquer ferramenta específica de IA ou fornecedor, protegendo o seu programa de métricas tanto contra futuras mudanças tecnológicas como contra a atual.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Lean Analytics*, de Alistair Croll e Benjamin Yoskovitz.
- *The Innovator's Dilemma*, de Clayton M. Christensen.
- *Measure What Matters*, de John Doerr.
