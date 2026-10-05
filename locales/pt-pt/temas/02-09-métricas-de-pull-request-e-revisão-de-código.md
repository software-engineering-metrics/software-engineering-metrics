# 2.9 Métricas de pull request e revisão de código

## Visão geral e motivação

A **[revisão de código](https://en.wikipedia.org/wiki/Code_review)** é normalmente o maior contribuinte único de tempo de espera dentro da decomposição de tempo de ciclo do tema 2.6, e é também a fase mais diretamente sob o próprio controlo de uma equipa para melhorar, ao contrário de um estrangulamento de plataforma partilhada ou de uma dependência externa. Este tema cobre as métricas específicas que vivem dentro da fase de revisão: tempo até à primeira revisão, tamanho do pull request, contagem de iterações de revisão, e distribuição de carga de revisores, e como usá-las para melhorar a velocidade de revisão sem sacrificar o benefício real de qualidade que a revisão deve proporcionar.

O risco a que este tema está mais atento é um que este livro ainda não cobriu diretamente: otimizar a velocidade de revisão pode erodir silenciosamente a qualidade da revisão se perseguido descuidadamente. Uma equipa que reduz a metade o seu tempo até à primeira revisão aprovando tudo com um carimbo de borracha melhorou uma métrica enquanto destruía o valor real da prática. Cada recomendação neste tema é escrita com essa troca em vista, porque as métricas de pull request estão entre as mais fáceis neste livro de manipular de uma forma que parece boa num painel de controlo enquanto torna a base de código subjacente mensuravelmente pior.

Para equipas grandes, as métricas de revisão revelam problemas de equilíbrio de carga que de outra forma são invisíveis: um pequeno número de engenheiros séniores a absorver uma parcela desproporcionada de carga de revisão, uma equipa específica ou área de base de código onde as revisões consistentemente estagnam, ou um padrão de pull requests sobredimensionados que tornam a revisão minuciosa praticamente impossível independentemente da diligência do revisor. Estes padrões agravam-se à escala muito mais do que numa equipa pequena, onde toda a gente consegue ver o desequilíbrio diretamente sem precisar de uma métrica para o revelar.

## Princípios-chave

- **O tempo até à primeira revisão é normalmente a maior alavanca, não a minuciosidade da revisão em si.** A maior parte do atraso vem de um pull request à espera de ser visto, não da conversa de revisão demorar muito depois de começar.
- **Pull requests mais pequenos são revistos mais depressa e mais minuciosamente, não apenas mais depressa.** O tamanho é um ponto de alavanca tanto para a velocidade como para a qualidade simultaneamente.
- **A velocidade de revisão e a qualidade de revisão não estão automaticamente em tensão, mas podem ser trocadas descuidadamente.** Proteja-se explicitamente contra essa troca.
- **O desequilíbrio de carga de revisores é comum e normalmente invisível sem uma métrica.** Um pequeno número de pessoas absorve muitas vezes uma parcela desproporcionada.
- **Estas métricas estão expostas ao risco de manipulação de carimbo de borracha.** Uma aprovação rápida sem escrutínio real derrota todo o propósito da revisão.

## Recomendações

### Rastrear o tempo até à primeira revisão como a métrica de velocidade primária

Meça o intervalo desde que um pull request é aberto até ao primeiro comentário substantivo ou aprovação de um revisor, instrumentado automaticamente a partir da sua plataforma de controlo de versões. Este é normalmente o contribuinte dominante de tempo de espera dentro da fase de revisão (tema 2.5, tema 2.6), e melhorá-lo, através de normas mais claras de atribuição de revisão, práticas de notificação, ou blocos dedicados de tempo de revisão, normalmente produz a maior melhoria única disponível para uma equipa no tempo de ciclo geral.

### Rastrear o tamanho do pull request e encorajar ativamente mudanças mais pequenas

Meça as linhas mudadas ou ficheiros tocados por pull request, e trate um tamanho mediano persistentemente grande como um sinal que vale a pena abordar diretamente. Os pull requests mais pequenos são revistos mais depressa, revistos mais minuciosamente (um revisor consegue realmente ter toda a mudança na cabeça), e são mais fáceis de reverter se algo correr mal, ligando-se diretamente de volta ao princípio de tamanho de lote por trás da frequência de implementação no tema 2.10. Encoraje a divisão de mudanças grandes numa sequência de pull requests mais pequenos e revisáveis independentemente onde o trabalho o permitir.

### Monitorizar explicitamente a distribuição de carga de revisores

Rastreie o número de revisões concluídas por pessoa ao longo de uma janela móvel, e vigie especificamente um pequeno número de pessoas a absorver uma parcela desproporcionada. Este padrão é comum, muitas vezes recai sobre os engenheiros mais séniores ou mais confiáveis, e cria tanto um estrangulamento (a sua disponibilidade limita o rendimento de revisão de toda a equipa) como um risco de esgotamento (o tema 3.2 cobre métricas de bem-estar com mais profundidade). Rode a responsabilidade de revisão deliberadamente em vez de a deixar concentrar-se por predefinição à volta de quem for mais rápido a responder.

### Proteger-se explicitamente contra o risco de manipulação de carimbo de borracha

Emparelhe o tempo até à primeira revisão com um sinal de qualidade: a taxa de defeitos ou incidentes traçados de volta a mudanças que foram aprovadas com zero comentários de revisão, ou a taxa de correções pós-integração necessárias para código recentemente revisto. Uma equipa que melhora a velocidade de revisão aprovando sem escrutínio real deveria ver esta salvaguarda degradar-se, que é exatamente o princípio de emparelhamento do tema 1.2 aplicado a esta família de métricas específica. Nunca persiga a velocidade de revisão sem esta contramétrica em vista.

### Usar a contagem de iterações de revisão para detetar atrito, não para julgar indivíduos

O número de rondas de revisão que um pull request atravessa antes de ser integrado pode sinalizar atrito genuíno, requisitos pouco claros, desacordo sobre a abordagem, expectativas de estilo inconsistentes, que vale a pena investigar ao nível do processo. Evite usar este número para julgar autores ou revisores individuais diretamente; uma contagem alta de iterações é mais frequentemente um sinal de sistema ou comunicação do que um pessoal, e tratá-la como um boletim individual arrisca precisamente a deriva avaliativa contra a qual o tema 1.1 avisa.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Otimizar puramente para o tempo até à primeira revisão | Sinal rápido e claro, fácil de instrumentar | Pode incentivar revisão superficial de carimbo de borracha se não protegida |
| Otimizar puramente para redução do tamanho do pull request | Melhora tanto a velocidade como a minuciosidade simultaneamente | Nem todo o trabalho se divide limpamente em pequenos incrementos |
| Rodar a carga de revisão uniformemente | Reduz o risco de estrangulamento e esgotamento | Pode abrandar a revisão para código especializado e difícil de rever que precisa de conhecimento específico |
| Concentrar a revisão entre engenheiros séniores | Especialização de domínio profunda aplicada consistentemente | Cria um estrangulamento e um risco de esgotamento ao longo do tempo |

A tensão central é **velocidade versus profundidade de escrutínio**. Toda a técnica neste tema para acelerar a revisão, resposta inicial mais rápida, pull requests mais pequenos, carga de revisor mais distribuída, carrega algum risco de trocar escrutínio real se perseguida sem a salvaguarda de qualidade que este tema recomenda. Resolva a tensão emparelhando toda a métrica de velocidade com um sinal de qualidade, rastreado durante o mesmo período, para que uma equipa consiga distinguir uma melhoria genuína de processo de um padrão de revisão silenciosamente a erodir.

## Perguntas para debater com a sua equipa

1. **Qual é o nosso tempo real até à primeira revisão, e quanto do nosso tempo de ciclo geral a fase de revisão consome?** Extraia o número real em vez de confiar na impressão; o tempo de espera de revisão é muitas vezes maior do que as equipas assumem, precisamente porque é fácil subestimar o tempo gasto à espera em vez de a trabalhar ativamente.

2. **Qual é o nosso tamanho mediano de pull request, e quanto do nosso atraso de revisão encolheria se esse tamanho descesse?** Os pull requests grandes são tanto mais lentos a rever como mais propensos a receber revisão superficial simplesmente porque um revisor não consegue ter tudo na cabeça de uma vez. Olhe para a sua distribuição de tamanho real, não apenas para a mediana.

3. **A carga de revisão está concentrada num pequeno número de pessoas, e o que aconteceria ao nosso rendimento de revisão se uma delas estivesse indisponível durante duas semanas?** Esta pergunta revela tanto um risco de estrangulamento como um risco de esgotamento ao mesmo tempo. Extraia dados reais de carga de revisor em vez de confiar na impressão.

4. **Alguma vez melhorámos uma métrica de velocidade de revisão de uma forma que, em retrospetiva, reduziu o escrutínio real?** Seja honesto aqui; este é precisamente o risco de carimbo de borracha que este tema nomeia, e é fácil deslizar para ele sem nenhuma decisão deliberada de o fazer.

5. **O que normalmente sinaliza uma contagem alta de iterações de revisão na nossa equipa: desacordo genuíno, requisitos pouco claros, ou expectativas de estilo inconsistentes?** Olhe para uma amostra de pull requests com contagens invulgarmente altas de iterações e diagnostique o padrão real, em vez de assumir que reflete mal tanto sobre o autor como sobre o revisor.

6. **Temos uma salvaguarda de qualidade emparelhada com as nossas métricas de velocidade de revisão, ou estamos a rastrear a velocidade isoladamente?** Se a resposta honesta é que essa salvaguarda não existe, essa é uma lacuna que vale a pena fechar antes de empurrar a velocidade de revisão ainda mais, seguindo o princípio de emparelhamento do tema 1.2.

## Perspetiva setorial

**Startup.** A revisão é muitas vezes rápida por predefinição com uma equipa pequena, por vezes quase demasiado rápida, revisão de aprovador único com escrutínio mínimo porque toda a gente confia em toda a gente. O risco a vigiar à medida que a equipa cresce é a qualidade de revisão não escalar ao lado do tamanho da equipa, já que a confiança informal que funcionou para cinco engenheiros não funciona automaticamente para cinquenta.

**Pequena empresa.** A maioria das plataformas de controlo de versões reporta estatísticas de tempo até à integração e contagem de revisão prontas a usar; use-as em vez de construir instrumentação personalizada. A principal disciplina que vale a pena adotar é simplesmente notar se a carga de revisão se concentrou silenciosamente numa ou duas pessoas à medida que a equipa cresceu.

**Empresa.** O desequilíbrio de carga de revisor e os estrangulamentos de conhecimento especializado são especialmente comuns aqui, onde a especialização profunda de domínio num sistema crítico pode concentrar a responsabilidade de revisão num pequeno grupo independentemente do tamanho da equipa. Invista em partilha deliberada de conhecimento e rotação de revisão para espalhar a especialização, reduzindo tanto o estrangulamento como o risco de fator de autocarro dessa especialização viver em pessoas a menos.

**Governo.** Os processos de revisão aqui carregam frequentemente peso de conformidade ao lado dos objetivos de qualidade, o que pode tornar os pull requests maiores e as revisões mais lentas por desenho. Onde requisitos genuínos de conformidade exigem revisão minuciosa, concentre o esforço de melhoria em reduzir o tempo de espera (atribuição de revisão mais rápida, triagem mais clara) em vez de comprometer a profundidade real da revisão, e documente a troca explicitamente se o escrutínio tiver de permanecer intenso por razões regulatórias.

## Exemplos

**Empresa.** A organização de engenharia de uma empresa de cibersegurança descobriu que um punhado de engenheiros principais estava a completar mais de 40% de todas as revisões de código através de uma organização de duzentas pessoas, um desequilíbrio que ninguém tinha medido diretamente até os dados de carga de revisor serem extraídos. Esta concentração era tanto um estrangulamento, já que a disponibilidade desses engenheiros limitava o rendimento de revisão para toda a organização, como um risco de esgotamento sinalizado separadamente por um inquérito de envolvimento (tema 3.2). A organização introduziu um programa estruturado de rotação de revisão emparelhado com sessões direcionadas de partilha de conhecimento, e dentro de dois trimestres a carga de revisão tinha-se espalhado por um grupo muito mais amplo, com o tempo até à primeira revisão a melhorar como efeito secundário direto do estrangulamento reduzido.

**Governo.** A equipa de engenharia de uma autoridade fiscal, sob pressão para melhorar a velocidade de entrega, definiu um alvo para reduzir a metade o tempo até à primeira revisão. Dentro de um trimestre, o alvo foi atingido, mas uma auditoria de qualidade subsequente encontrou uma subida acentuada em pull requests de correção de defeitos pós-integração, concentrados em mudanças que tinham sido aprovadas com um único e breve comentário. A correção da equipa emparelhou o alvo de velocidade com uma salvaguarda explícita de qualidade, a taxa de correções pós-integração necessárias dentro de duas semanas de uma revisão, e retreinou a equipa sobre o que uma revisão substantiva realmente exigia, restaurando o escrutínio genuíno enquanto mantinha a maior parte da melhoria de velocidade que tinha vindo de melhor atribuição de revisão e tamanhos menores de pull request.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de métricas de revisão bem geridas é entrega mais rápida sem sacrificar a qualidade, que é uma combinação rara: a maioria das melhorias de entrega troca velocidade por risco em algum lugar, mas as melhorias na fase de revisão, pull requests mais pequenos, melhor distribuição de carga, resposta inicial mais rápida, genuinamente melhoram ambos simultaneamente quando perseguidas com a salvaguarda de qualidade que este tema recomenda. O exemplo de cibersegurança acima é típico: corrigir um estrangulamento melhorou a velocidade enquanto a qualidade de revisão subjacente, se alguma coisa, melhorou à medida que a especialização se espalhou mais amplamente.

O custo total de propriedade é baixo: a maioria destas métricas vem diretamente dos dados existentes da plataforma de controlo de versões com instrumentação adicional mínima, e as mudanças de processo para as quais apontam, rotação de revisão, encorajar pull requests mais pequenos, custam maioritariamente disciplina em vez de investimento em ferramentas.

## Antipadrões e armadilhas

- **Otimizar o tempo até à primeira revisão sem uma salvaguarda de qualidade emparelhada:** convida à aprovação de carimbo de borracha que derrota o propósito da revisão.
- **Ignorar a concentração de carga de revisor:** cria tanto um estrangulamento como um risco de esgotamento que permanece invisível até ser medido.
- **Tratar a contagem de iterações de revisão como um boletim individual:** mais frequentemente um sinal de sistema ou comunicação do que um pessoal.
- **Aceitar pull requests persistentemente grandes como inevitáveis:** a maioria das mudanças grandes pode ser dividida mais do que as equipas inicialmente assumem.
- **Aplicar profundidade de revisão uniforme independentemente do risco da mudança:** desperdiça escrutínio em mudanças de baixo risco enquanto potencialmente sub-escrutina as de alto risco.
- **Medir a velocidade de revisão mas nunca verificar se o escrutínio real declinou ao seu lado:** a forma mais comum de esta família de métricas ser manipulada não intencionalmente.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas de revisão não são rastreadas; a distribuição de carga de revisão e o tamanho do pull request são invisíveis.
- **Nível 2, Desenvolver:** Existem alguns dados de velocidade de revisão a partir de predefinições de plataforma, mas não há salvaguarda de qualidade nem gestão ativa da carga de revisor.
- **Nível 3, Padronizar:** O tempo até à primeira revisão, o tamanho do pull request, e a carga de revisor são rastreados consistentemente, com uma salvaguarda explícita de qualidade emparelhada contra melhorias de velocidade.
- **Nível 4, Gerir:** A carga de revisor é ativamente reequilibrada através de rotação e partilha de conhecimento; os padrões de contagem de iterações são investigados ao nível do processo em vez do nível individual.
- **Nível 5, Orquestrar:** As métricas da fase de revisão informam diretamente o investimento em processos, e a organização consegue demonstrar melhoria simultânea tanto na velocidade de revisão como nos resultados de qualidade ligados à revisão durante um período sustentado.

## Ideias para debate

1. Qual é o nosso tempo mediano atual até à primeira revisão, e para onde vai realmente esse tempo?
2. A nossa carga de revisão está concentrada num pequeno número de pessoas, e qual é o risco se uma delas estiver indisponível?
3. Alguma vez melhorámos a velocidade de revisão à custa de escrutínio real, mesmo não intencionalmente?
4. Qual é o nosso tamanho mediano de pull request, e quanto menor poderiam a maioria das mudanças realisticamente ser?
5. Tratamos uma contagem alta de iterações de revisão como um sinal de sistema ou um julgamento individual?

## Principais conclusões

- O **tempo até à primeira revisão** é normalmente a maior alavanca única dentro da fase de revisão, mais do que a duração da conversa de revisão em si.
- **Pull requests mais pequenos** melhoram tanto a velocidade de revisão como a minuciosidade de revisão simultaneamente.
- O **desequilíbrio de carga de revisor** é comum e normalmente invisível sem medição direta; cria tanto um estrangulamento como um risco de esgotamento.
- Emparelhe toda a métrica de velocidade de revisão com uma **salvaguarda explícita de qualidade** para apanhar o risco de manipulação de carimbo de borracha a que esta família de métricas é especialmente propensa.
- Use a **contagem de iterações de revisão** para diagnosticar atrito ao nível do sistema, não para julgar autores ou revisores individuais.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- Investigação *Modern Code Review* de Alberto Bacchelli e Christian Bird.
- *Peer Reviews in Software: A Practical Guide*, de Karl E. Wiegers.
- *The Principles of Product Development Flow*, de Donald G. Reinertsen.
