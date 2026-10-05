# 2.6 Tempo de ciclo e os seus componentes

## Visão geral e motivação

O **tempo de ciclo** é a decomposição interna do tempo de fluxo de uma mudança (capítulo 2.4) nas suas fases constituintes de engenharia: tempo de codificação, tempo de revisão, tempo de teste, e tempo de implementação, por vezes dividido ainda mais em tempo de admissão (quanto tempo uma mudança espera antes de alguém começar a trabalhar nela) e tempo ativo (quanto tempo demora uma vez que alguém o faz). Enquanto o tempo de fluxo lhe dá um único número para quanto tempo uma mudança demora de ponta a ponta através de toda a cadeia de valor, o **[tempo de ciclo](https://en.wikipedia.org/wiki/Cycle_time)** diz-lhe para onde esse tempo realmente vai uma vez que chega à engenharia, que é a camada de diagnóstico que o capítulo 2.4 prometeu estar por baixo do seu próprio número resumido.

Esta distinção importa porque "o tempo de espera é demasiado longo" não é acionável por si só. Uma equipa cujo tempo de espera é dominado pelo tempo de codificação precisa de uma intervenção diferente de uma equipa cujo tempo de espera é dominado por uma fila de revisão de três dias, que precisa de uma intervenção novamente diferente de uma equipa a perder a maior parte do seu tempo para uma suite de testes instável e lenta. Sem a decomposição do tempo de ciclo, as equipas tendem a adivinhar o estrangulamento, e a adivinhação está errada frequentemente o suficiente para que corrigir a fase errada desperdice esforço real enquanto a restrição real permanece intocada.

Para equipas grandes, a decomposição do tempo de ciclo é o que transforma uma regressão de tempo de espera à escala da organização de um mistério num problema específico e abordável. Quando dezenas de equipas partilham infraestrutura comum, um estrangulamento de revisão partilhado ou um pipeline de CI partilhado e lento pode estar a arrastar o tempo de espera de todas as equipas para baixo de forma idêntica, e só uma comparação de tempo de ciclo entre equipas revela essa causa raiz partilhada, em vez de cada equipa adivinhar independentemente a sua própria explicação local.

## Princípios-chave

- **O tempo de ciclo explica o tempo de espera; não o substitui.** Reporte ambos juntos, com o tempo de ciclo como o diagnóstico e o tempo de espera como o resumo.
- **O tempo de espera normalmente domina o tempo ativo.** A maior parte do atraso na entrega de software vem de trabalho inativo numa fila, não de esforço ativo (o capítulo 2.5 cobre isto diretamente através da eficiência de fluxo).
- **Decomponha por fase antes de propor uma correção.** Uma correção dirigida à fase errada desperdiça esforço e pode desmoralizar uma equipa a quem é pedido para "trabalhar mais depressa" quando o verdadeiro estrangulamento estava noutro lugar.
- **Um estrangulamento partilhado através de muitas equipas é uma oportunidade de investimento em plataforma,** não apenas uma série de problemas individuais de equipa.
- **Os dados de tempo de ciclo estão expostos aos mesmos riscos de manipulação que o tempo de fluxo** (capítulo 2.4): vigie as fronteiras de fase que mudam silenciosamente para lisonjear um número.

## Recomendações

### Instrumentar cada fronteira de fase explicitamente

Divida a jornada de uma mudança em fases nomeadas com fronteiras claras e instrumentáveis: codificação (primeiro commit até o pull request ser aberto), admissão (pull request aberto até à primeira revisão), revisão (primeira revisão até à aprovação), e implementação (aprovação até à produção). Capture marcas temporais para cada transição automaticamente a partir de eventos de controlo de versões e CI/CD, não a partir de rastreio de fase autorrelatado, aplicando o mesmo princípio de instrumentação-acima-do-autorrelato do capítulo 1.5.

### Separar o tempo de espera do tempo ativo dentro de cada fase

Dentro da revisão, por exemplo, distinga o tempo que um pull request fica intocado à espera de um revisor começar (tempo de espera) do tempo que uma conversa ativa de revisão demora uma vez que começa (tempo ativo). Esta distinção normalmente revela que o custo dominante é o enfileiramento, não o esforço, o que aponta para uma correção muito diferente (mais capacidade de revisor, melhor notificação, pull requests menores para rever) do que uma correção dirigida a tornar as próprias conversas de revisão mais rápidas.

### Procurar um estrangulamento partilhado antes de diagnosticar equipa a equipa

Quando várias equipas mostram a mesma fase como o seu atraso dominante, um pipeline de CI partilhado e lento, um conjunto de revisão partilhado e sobrecarregado, um trem de lançamento partilhado e infrequente, essa causa partilhada é uma oportunidade de investimento ao nível da plataforma, não uma série de problemas locais não relacionados. Agregue os dados de tempo de ciclo através das equipas especificamente para procurar este padrão antes de assumir que o estrangulamento de cada equipa é único para essa equipa.

### Usar o tempo de ciclo para definir alvos de melhoria realistas e específicos por fase

Em vez de um único alvo de "reduzir o tempo de espera em 20%", que não dá a uma equipa nenhuma orientação sobre onde se concentrar, use a decomposição do tempo de ciclo para definir um alvo específico por fase: "reduzir o tempo mediano de espera de revisão de dois dias para quatro horas." Um objetivo específico e dirigido a uma fase é tanto mais fácil de uma equipa agir sobre ele como mais fácil de verificar que foi realmente alcançado através de mudança real de processo em vez de uma mudança não relacionada noutro lugar.

### Vigiar a manipulação de fronteira de fase

Tal como os pontos de início e fim do tempo de fluxo podem derivar (capítulo 2.4), as fronteiras individuais de fase do tempo de ciclo podem mudar de formas que lisonjeiam o número de uma fase específica sem nenhuma melhoria real, por exemplo, marcar uma revisão como "iniciada" no momento em que um revisor é atribuído em vez de quando realmente começa a ler a mudança. Audite periodicamente a instrumentação de fronteira de fase contra a sua definição documentada.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Tempo de ciclo grosseiro (duas ou três fases) | Simples de instrumentar e explicar | Pode não identificar o estrangulamento real com precisão suficiente para agir |
| Tempo de ciclo granular (muitas fases, divisão espera vs. ativo) | Diagnóstico preciso, alvos acionáveis específicos por fase | Mais esforço de instrumentação; mais números para manter e explicar |
| Revisão de tempo de ciclo equipa a equipa | Adaptada ao fluxo de trabalho real de cada equipa | Pode perder um estrangulamento partilhado entre equipas escondido atrás de números locais semelhantes |
| Revisão agregada de tempo de ciclo entre equipas | Revela estrangulamentos partilhados ao nível da plataforma | Exige definições de fase padronizadas entre equipas para ser significativa |

A tensão central é **precisão diagnóstica versus custo de instrumentação**. O rastreio mais granular do tempo de ciclo dá um diagnóstico mais acionável mas custa mais a construir e manter, e acrescenta mais números que uma equipa tem de compreender e em que confiar. Resolva a tensão começando grosseiro (codificação, revisão, implementação) e acrescentando divisões mais finas, tempo de espera versus tempo ativo dentro de uma fase específica, apenas depois de essa fase ser confirmada como um estrangulamento genuíno e recorrente que vale o investimento extra de instrumentação.

## Perguntas para debater com a sua equipa

1. **Se o tempo de espera regredisse hoje, conseguiríamos dizer dentro de uma hora qual fase específica foi responsável, usando dados em vez de palpites?** Este é o teste central de se a sua instrumentação de tempo de ciclo está realmente a servir o seu propósito diagnóstico. Se a resposta honesta for não, essa lacuna vale a pena fechar antes de a próxima regressão acontecer.

2. **Dentro da nossa fase de estrangulamento dominante, quanto do atraso é tempo de espera versus tempo ativo?** A maioria das equipas assume que o esforço ativo é a restrição antes de verificar, quando o enfileiramento é normalmente o custo maior. Extraia a divisão real para a sua fase mais lenta e veja se a suposição se sustenta.

3. **Várias equipas partilham a mesma fase de estrangulamento dominante, sugerindo uma correção ao nível da plataforma em vez de ao nível da equipa?** Agregue os seus dados de tempo de ciclo através das equipas e procure explicitamente este padrão antes de assumir que a lentidão de cada equipa é causada localmente.

4. **Definimos alvos de melhoria específicos por fase, ou apenas um único alvo geral de tempo de espera sem orientação sobre onde nos concentrarmos?** Um alvo vago deixa uma equipa a adivinhar onde investir esforço; um específico por fase não. Verifique os seus objetivos atuais contra esta distinção.

5. **Alguma fronteira de fase de tempo de ciclo na nossa instrumentação derivou da sua definição documentada ao longo do tempo?** As fronteiras de fase estão expostas ao mesmo risco de deriva definicional que o próprio tempo de fluxo (capítulo 2.4). Audite uma amostra de eventos recentes de transição de fase contra a definição escrita.

6. **Como é que uma cultura de revisão intensa versus uma cultura de confiança intensa se manifesta de forma diferente nos nossos dados de tempo de ciclo?** Uma equipa com revisão muito minuciosa e de várias rondas mostrará um tempo de fase de revisão mais longo do que uma equipa que confia em integrações de aprovação única; discuta se o seu equilíbrio atual reflete uma escolha deliberada ou uma predefinição não examinada.

## Perspetiva setorial

**Startup.** O tempo de ciclo é normalmente dominado pelo tempo de codificação em vez das fases de revisão ou implementação, simplesmente porque o processo é mínimo. À medida que a equipa cresce para além de um punhado de engenheiros, comece a vigiar especificamente o tempo de espera de revisão, já que essa é normalmente a primeira fase a abrandar à medida que o trabalho de mais pessoas precisa de passar por menos revisores disponíveis.

**Pequena empresa.** As análises básicas da plataforma de controlo de versões normalmente expõem tempo suficiente ao nível da fase (tempo até à primeira revisão, tempo até à integração) sem instrumentação personalizada. Concentre-se primeiro na fase de revisão, já que é o estrangulamento inicial mais comum e o mais fácil de corrigir com uma pequena mudança de processo como uma rotação de revisores.

**Empresa.** Os estrangulamentos partilhados através de dezenas de equipas são comuns e de alta alavancagem para encontrar: uma única fila de CI partilhada e sobrecarregada ou um passo de revisão central obrigatório pode estar silenciosamente a taxar o tempo de espera em toda a organização. Invista especificamente em agregação de tempo de ciclo entre equipas para revelar estas restrições partilhadas em vez de deixar cada equipa diagnosticar independentemente.

**Governo.** Os dados de tempo de ciclo são uma ferramenta forte e concreta para justificar a modernização de processos a interessados céticos, já que "o tempo de espera de revisão tem uma média de quatro dias por causa de um único papel de aprovação estrangulado" é um caso muito mais persuasivo e específico para investimento do que uma afirmação abstrata de "o nosso processo é lento".

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de infraestrutura cloud notou o tempo de espera a subir lentamente através de quase todas as equipas simultaneamente. A agregação de tempo de ciclo entre equipas revelou que o tempo de espera de revisão, não o tempo ativo de revisão, era a causa dominante e partilhada: uma pequena equipa centralizada de revisão de segurança tinha-se tornado um estrangulamento à medida que o número de equipas que exigiam a sua aprovação crescia mais depressa do que a própria equipa. Expandir e treinar um conjunto mais amplo de revisores certificados em segurança, em vez de pedir às equipas individuais para de alguma forma codificar ou testar mais depressa, resolveu o estrangulamento partilhado e trouxe o tempo de espera de volta para baixo em todo o lado dentro de um trimestre.

**Governo.** A equipa de serviços digitais de um governo estadual estava sob pressão para reduzir o tempo de espera, e inicialmente respondeu pedindo aos engenheiros para trabalharem mais depressa, um instinto natural mas em última análise inútil. A decomposição do tempo de ciclo mostrou que o tempo ativo de codificação mal tinha mudado ano após ano; quase toda a regressão vinha de uma fila crescente numa fase obrigatória de revisão arquitetural introduzida dezoito meses antes como uma medida de conformidade. A equipa redesenhou essa revisão para um processo mais leve e escalonado por risco para mudanças de baixo risco, cortando substancialmente o tempo de espera de revisão enquanto preservava o rigor total de revisão para mudanças genuinamente de alto risco.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da decomposição do tempo de ciclo é um investimento direcionado e eficaz: uma organização que sabe exatamente qual fase é o estrangulamento consegue corrigir essa fase específica em vez de espalhar esforço de forma esparsa através de todo um processo na esperança de que algo ajude. O exemplo de revisão de segurança acima é típico: uma correção precisamente direcionada, expandindo um recurso específico estrangulado, resolveu um problema à escala da organização muito mais barato do que uma iniciativa ampla e não focada de "acelerar a entrega" teria conseguido.

O custo total de propriedade é o esforço de instrumentação para capturar marcas temporais ao nível da fase de forma fiável e a disciplina contínua de auditar periodicamente as fronteiras de fase quanto à deriva. Esse custo vale a pena porque a alternativa, adivinhar estrangulamentos e corrigir a fase errada, desperdiça muito mais esforço de engenharia ao longo do tempo do que a própria instrumentação custa.

## Antipadrões e armadilhas

- **Reagir a uma regressão de tempo de espera sem diagnóstico de tempo de ciclo:** leva frequentemente a corrigir a fase errada.
- **Assumir que o esforço ativo, não o tempo de espera, é o custo dominante:** normalmente errado; o enfileiramento domina na maioria dos pipelines de entrega reais (capítulo 2.5).
- **Perder um estrangulamento partilhado entre equipas por rever o tempo de ciclo apenas equipa a equipa:** deixa uma correção de plataforma de alta alavancagem por descobrir.
- **Definir um alvo geral vago de tempo de espera sem orientação específica por fase:** deixa as equipas a adivinhar onde concentrar esforço.
- **Deriva definicional de fronteira de fase:** lisonjeia o número de uma fase específica sem melhoria real.
- **Instrumentar cada fase possível granular antes de confirmar que alguma delas é um estrangulamento genuíno:** desperdiça esforço de instrumentação em detalhe que ainda não informa uma decisão.

## Modelo de maturidade

- **Nível 1, Iniciar:** O tempo de ciclo não é decomposto de todo; as equipas adivinham estrangulamentos quando o tempo de espera regride.
- **Nível 2, Desenvolver:** Algumas equipas rastreiam tempo grosseiro de fase informalmente, mas não há instrumentação consistente nem comparação entre equipas.
- **Nível 3, Padronizar:** As fronteiras de fase são instrumentadas consistentemente em toda a organização, com o tempo de espera separado do tempo ativo nas fases de estrangulamento dominantes.
- **Nível 4, Gerir:** A agregação de tempo de ciclo entre equipas revela ativamente estrangulamentos partilhados; os alvos de melhoria específicos por fase substituem objetivos gerais vagos de tempo de espera.
- **Nível 5, Orquestrar:** Os dados de tempo de ciclo impulsionam diretamente a priorização de investimento em plataforma, e a organização consegue apontar para correções específicas e direcionadas, um conjunto de revisão expandido, um pipeline partilhado mais rápido, que melhoraram mensuravelmente o tempo de espera através de muitas equipas de uma vez.

## Ideias para debate

1. Qual é a nossa fase de estrangulamento dominante atual, e quão confiantes estamos nessa resposta?
2. Quanto do tempo dessa fase de estrangulamento é tempo de espera versus tempo ativo?
3. Alguma das nossas equipas partilha o mesmo estrangulamento, sugerindo uma correção ao nível da plataforma?
4. Quando foi a última vez que definimos um alvo de melhoria de entrega específico por fase, em vez de geral?
5. Uma definição de fronteira de fase nas nossas ferramentas alguma vez mudou sem documentação?

## Principais conclusões

- O tempo de ciclo **decompõe o tempo de fluxo** em fases de engenharia, codificação, revisão, teste, implementação, e é a camada de diagnóstico por baixo desse número resumido.
- Separe o **tempo de espera do tempo ativo** dentro de cada fase; o enfileiramento normalmente domina o esforço ativo (capítulo 2.5).
- Procure **estrangulamentos partilhados entre equipas** antes de assumir que uma lentidão é específica de uma equipa; uma causa partilhada é muitas vezes uma oportunidade de investimento em plataforma.
- Defina **alvos de melhoria específicos por fase**, não objetivos gerais vagos, para que as equipas saibam exatamente onde se concentrar.
- As fronteiras de fase estão expostas ao mesmo risco de **deriva definicional** que o próprio tempo de fluxo; audite-as periodicamente.
- O capítulo 2.7 dá a matemática subjacente, a lei de Little, para porque o trabalho em curso e o tempo de ciclo se movem juntos.

## Referências e leituras adicionais

- *The Principles of Product Development Flow*, de Donald G. Reinertsen.
- *Actionable Agile Metrics for Predictability*, de Daniel S. Vacanti.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *The Goal*, de Eliyahu M. Goldratt.
