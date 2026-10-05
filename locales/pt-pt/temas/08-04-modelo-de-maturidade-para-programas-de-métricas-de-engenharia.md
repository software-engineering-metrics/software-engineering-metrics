# 8.4 Modelo de maturidade para programas de métricas de engenharia

## Visão geral e motivação

Cada tema nas Partes 1 a 7 deste livro termina com o seu próprio [modelo de maturidade](https://en.wikipedia.org/wiki/Capability_Maturity_Model) de cinco níveis, delimitado à família específica de métricas desse tema. Este tema faz algo diferente: afasta-se e pergunta como é a maturidade para o *programa* de métricas como um todo, a capacidade organizacional que produz, governa, e age sobre todas essas métricas individuais em conjunto. Uma organização pode estar no Nível 4 na maturidade individual de métricas DORA enquanto ainda está no Nível 1 na maturidade geral de programa, se, por exemplo, tiver instrumentação excelente mas nenhuma governação (tema 1.4), ou métricas individuais excelentes mas uma implementação impulsionada pelo medo (tema 8.3) que corrompeu os dados subjacentes independentemente de quão bem cada métrica foi desenhada.

O modelo deste tema é construído em torno de cinco dimensões que atravessam cada família individual de métricas que este livro cobre: governação e propriedade (tema 1.4), qualidade de instrumentação (tema 1.5), equilíbrio resultado-versus-produção (tema 1.3, tema 7.4), confiança cultural (tema 8.3), e melhoria contínua (a disciplina de retirada e revisão que o tema 1.1 estabeleceu logo no início deste livro). A maturidade geral de programa de uma organização é realisticamente o mínimo, não a média, através destas cinco dimensões, já que uma fraqueza séria em qualquer uma, particularmente confiança cultural, pode minar o valor da força em todas as outras, exatamente como o tema 8.3 argumentou diretamente.

Para equipas grandes, este modelo consolidado dá à liderança um único instrumento honesto para autoavaliação organizacional, distinto de e complementar às verificações de maturidade tema a tema que este livro fornece ao longo de todo o texto. As organizações empresariais a comparar a maturidade de métricas através de unidades de negócio, e as organizações governamentais a reportar maturidade de programa a órgãos de supervisão, beneficiam ambas desta única avaliação transversal em vez de precisarem de sintetizar quarenta e cinco leituras separadas de maturidade ao nível de tema numa imagem geral coerente elas próprias.

## Princípios-chave

- **A maturidade de programa é o mínimo através das suas dimensões, não a média.** Uma fraqueza séria em confiança cultural mina a força em todo o resto.
- **As cinco dimensões transversais são governação, instrumentação, equilíbrio de resultado, confiança cultural, e melhoria contínua.** Cada dimensão reúne fios de muitos temas individuais.
- **Este modelo complementa, não substitui, os modelos individuais de maturidade ao nível de tema.** Use ambos em conjunto para uma imagem completa.
- **A autoavaliação deveria ser honesta e específica, não aspiracional.** Pontue onde realmente está, usando evidência concreta, não onde pretende estar.
- **O movimento entre níveis exige investimento deliberado**, não apenas o tempo a passar; a maturidade não se acumula automaticamente.

## Recomendações

### Avalie cada uma das cinco dimensões independentemente, usando evidência concreta

Para governação, verifique se cada métrica consequente tem um proprietário nomeado e uma carta documentada (tema 1.4). Para instrumentação, verifique se as métricas vêm de fontes automatizadas em vez de autorreporte sempre que possível (tema 1.5). Para equilíbrio de resultado, calcule o rácio real de métricas ponderadas por resultado versus ponderadas por produção nos seus painéis primários (tema 7.4). Para confiança cultural, avalie honestamente se o seu histórico de implementação alguma vez incluiu uma utilização mal gerida e punitiva de uma métrica e como foi abordada (tema 8.3). Para melhoria contínua, verifique se a sua organização tem um histórico documentado de retirar métricas que deixaram de justificar o seu custo (tema 1.1). Pontue cada dimensão independentemente antes de as combinar.

### Tome o mínimo através das dimensões como a sua pontuação honesta geral

Resista à tentação de calcular a média das suas cinco pontuações de dimensão num composto único e mais lisonjeiro. Um programa com instrumentação excelente (Nível 4) mas confiança cultural fraca (Nível 1) não é, em nenhum sentido significativo, um programa de Nível 2 ou 3; a dimensão fraca mina ativamente o valor das fortes, já que dados não confiáveis corrompidos por manipulação impulsionada pelo medo não são salvos por terem sido recolhidos com instrumentação excelente. Reporte o mínimo honestamente, mesmo que produza uma imagem geral menos lisonjeira do que uma média produziria.

### Use este modelo ao lado, não em vez, dos modelos ao nível de tema

Este modelo consolidado responde a "quão maduro é o nosso programa geral"; os modelos individuais ao nível de tema através das Partes 2 a 8 respondem a "quão madura é a nossa prática para esta métrica específica". Use ambos em conjunto: o modelo consolidado para priorizar que dimensão transversal mais precisa de investimento, e os modelos ao nível de tema para identificar que famílias específicas de métricas mais precisam de atenção dentro dessa dimensão.

### Revisite a avaliação numa cadência fixa, não apenas quando motivado por uma crise

Seguindo a disciplina consistente de governação deste livro (tema 1.4), reavalie a maturidade de programa numa cadência regular, anualmente é comum, em vez de apenas depois de uma crise (um incidente descoberto de manipulação, um relatório público que danifica a credibilidade) forçar a questão. Um programa que apenas examina a sua própria maturidade reativamente perde a oportunidade de apanhar e abordar uma dimensão a enfraquecer antes de produzir um incidente real e caro.

### Trate uma pontuação baixa honestamente como um ponto de partida para investimento, não uma nota reprovatória

Seguindo o enquadramento diagnóstico, não avaliativo, que o tema 1.1 estabeleceu para todo este livro, use uma pontuação baixa de maturidade, em qualquer dimensão, como o ponto de partida para um plano deliberado de investimento (o roteiro de adoção do tema 8.5 é o próximo passo direto), não como um veredito pelo qual sentir-se mal. A maioria das organizações, avaliadas honestamente, encontrará fraquezas reais algures neste modelo; a resposta produtiva é investimento direcionado, não defensividade sobre a pontuação.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Calcular a média das cinco pontuações de dimensão | Produz um único número simples e mais lisonjeiro | Esconde uma fraqueza crítica numa dimensão a minar o resto |
| Tomar o mínimo através das dimensões | Honesto, acionável, identifica corretamente a restrição real | Pode parecer desencorajador se uma dimensão ficar significativamente atrás das outras |
| Usar apenas os modelos ao nível de tema | Orientação detalhada e específica a métrica | Perde a vista transversal da saúde geral do programa |
| Usar apenas este modelo consolidado | Simples, de alto nível | Perde o detalhe específico e acionável que os modelos ao nível de tema fornecem |

A tensão central é **simplicidade versus honestidade**, ecoando a cautela do tema 5.5 contra um número único e falsamente preciso. Uma pontuação calculada por média é mais simples e mais confortável de reportar, mas esconde ativamente a restrição real na confiabilidade e valor geral do seu programa. Resolva a tensão a favor da honestidade: reporte o mínimo, e use tanto este modelo consolidado como os modelos individuais ao nível de tema em conjunto para uma imagem completa, precisa, e acionável.

## Perguntas para debater com a sua equipa

1. **Avaliada honesta e independentemente, que nível cada uma das nossas cinco dimensões, governação, instrumentação, equilíbrio de resultado, confiança cultural, e melhoria contínua, realmente pontua?** Percorra cada dimensão explicitamente, usando evidência concreta em vez de impressão, antes de as combinar numa avaliação geral.

2. **Qual é a nossa dimensão mais fraca, e isso corresponde à nossa intuição sobre a saúde geral do nosso programa, ou revela algo que não tínhamos previamente nomeado diretamente?** Uma pontuação baixa especificamente em confiança cultural, por exemplo, pode minar a confiança em dados que de outra forma parecem tecnicamente excelentes.

3. **Alguma vez calculámos a média dos nossos pontos fortes e fracos numa imagem geral mais lisonjeira, em vez de reportar honestamente a nossa dimensão mais fraca como a restrição real?** Seja honesto sobre como a sua organização tem anteriormente falado sobre a sua própria maturidade de métricas.

4. **Quando reavaliámos pela última vez formalmente a nossa maturidade geral de programa, e foi motivado por uma crise ou por uma cadência deliberada e regular?** Se apenas motivado por crise, discuta como seria uma cadência regular de avaliação daqui em diante.

5. **Como seria realmente o investimento direcionado na nossa dimensão mais fraca, concretamente, para o próximo trimestre?** Mova-se diretamente da avaliação para a ação, ligando o diagnóstico deste tema ao roteiro de adoção do tema 8.5.

6. **Como se compararia a nossa autoavaliação com uma revisão externa honesta de alguém fora da nossa organização?** Esta pergunta testa se a sua avaliação interna pode ela própria estar sujeita a alguns dos mesmos enviesamentos otimistas contra os quais este livro tem alertado ao longo de todo o texto, vale a pena verificar periodicamente com uma perspetiva genuinamente externa.

## Perspetiva setorial

**Startup.** A avaliação formal de cinco dimensões é provavelmente desnecessária a escala muito pequena, onde a consciência informal normalmente cobre a maior parte do que este modelo revelaria. O hábito que vale a pena adotar cedo é simplesmente ser honesto sobre confiança cultural especificamente, já que a cultura inicial de métricas de uma empresa jovem estabelece uma fundação que se torna muito mais difícil de mudar depois de a organização ter crescido significativamente.

**Pequena empresa.** Um percurso simples, honesto, e informal pelas cinco dimensões uma vez por ano, mesmo sem pontuação formal, captura a maior parte do valor deste tema sem precisar de um processo estruturado de avaliação a esta escala.

**Empresa.** Este modelo consolidado é particularmente valioso para comparar justamente a maturidade de métricas através de muitas unidades de negócio, já que uma comparação tema a tema através de dezenas de equipas seria incómoda. Use-o para priorizar investimento em toda a organização em direção a qualquer dimensão que mostre a fraqueza mais generalizada através das unidades.

**Governo.** Uma autoavaliação documentada e honesta de maturidade, usando este modelo consolidado, é um artefacto genuinamente útil para demonstrar rigor de programa a um órgão de supervisão, desde que a avaliação seja conduzida honestamente em vez de aspiracionalmente. Considere revisão externa periódica da própria autoavaliação, particularmente para a dimensão de confiança cultural, que é a mais difícil de avaliar precisamente a partir de uma perspetiva puramente interna.

## Exemplos

**Empresa.** A autoavaliação inicial de uma empresa de tecnologia logística pontuou a sua dimensão de instrumentação no Nível 4 (fornecimento automatizado e abrangente de dados a partir de pipelines e sistemas) mas a sua dimensão de confiança cultural no Nível 1, seguindo um incidente não abordado de má utilização de métrica de dois anos antes que nunca tinha sido diretamente reconhecido ou reparado (ecoando diretamente o exemplo governamental do tema 8.3). O instinto inicial da liderança foi calcular a média destas numa imagem geral respeitável de Nível 2 ou 3; uma aplicação mais honesta da pontuação baseada em mínimo deste tema identificou corretamente a confiança cultural como a restrição real em todo o valor do programa, já que mesmo a instrumentação excelente estava a produzir dados em que os engenheiros, cientes do incidente passado, ainda não confiavam totalmente nem reportavam honestamente. O investimento direcionado especificamente na reparação de confiança cultural, seguindo diretamente a orientação do tema 8.3, foi priorizado sobre mais investimento em instrumentação como resultado direto desta avaliação honesta e baseada em mínimo.

**Governo.** Uma agência nacional de estatísticas a conduzir a sua primeira autoavaliação formal de maturidade, usando este modelo consolidado como parte de uma revisão mais ampla de governação de tecnologia, descobriu que a sua dimensão de governação pontuava bem (propriedade clara, cartas documentadas) mas a sua dimensão de equilíbrio de resultado pontuava mal, com a esmagadora maioria das métricas rastreadas sendo baseadas em produção e atividade apesar do argumento da Parte 7 para ponderação de resultado ter sido bem compreendido intelectualmente dentro da liderança técnica da agência. Esta descoberta honesta e específica, em vez de um sentido geral vago de que "deveríamos medir mais resultados", deu ao plano subsequente de investimento da agência (tema 8.5) um ponto de partida concreto e baseado em evidência, e o reporte de acompanhamento ao conselho de supervisão da agência citou especificamente esta avaliação de maturidade como a base para uma estratégia redirecionada de investimento em métricas.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de uma autoavaliação honesta e baseada em mínimo de maturidade é identificar corretamente a restrição real sobre o valor de um programa de métricas, em vez de investir mais numa dimensão já forte enquanto uma fraca continua a minar a confiabilidade de todo o programa, exatamente o padrão que ambos os exemplos acima ilustram. Este efeito de direcionamento é o valor primário do modelo: direciona investimento limitado de melhoria para onde genuinamente move a maturidade geral do programa, em vez de para onde quer que o investimento calhe ser mais fácil ou mais familiar.

O custo total de propriedade é o próprio esforço de avaliação, modesto e periódico, pesado contra o risco de continuar a investir numa dimensão já forte enquanto uma fraca não abordada, particularmente confiança cultural, continua a corromper silenciosamente o valor de tudo o resto que o programa construiu.

## Antipadrões e armadilhas

- **Calcular a média das pontuações de dimensão num composto mais lisonjeiro:** esconde a restrição real sobre o valor geral do programa.
- **Avaliar apenas aspiracionalmente, com base em política declarada em vez de prática real:** produz uma imagem imprecisa e excessivamente otimista.
- **Usar este modelo consolidado como substituto de, em vez de complemento a, os modelos ao nível de tema:** perde o detalhe específico e acionável que esses modelos individuais fornecem.
- **Apenas reavaliar depois de uma crise forçar a questão:** perde a oportunidade de apanhar e abordar uma dimensão a enfraquecer proativamente.
- **Tratar uma pontuação baixa como uma nota reprovatória em vez de um ponto de partida de investimento:** convida à defensividade em vez da resposta produtiva e diagnóstica que este livro recomenda ao longo de todo o texto.
- **Nunca procurar uma perspetiva externa honesta sobre a autoavaliação:** arrisca o mesmo enviesamento otimista contra o qual este livro alerta ao longo de todo o texto a afetar a própria avaliação.

## Modelo de maturidade

- **Nível 1, Iniciar:** Não existe nenhuma avaliação formal transversal; as famílias individuais de métricas podem ser avaliadas independentemente, mas a saúde geral do programa não é examinada.
- **Nível 2, Desenvolver:** Existe alguma consciência informal dos pontos fortes e fracos gerais do programa, mas nenhuma avaliação estruturada de cinco dimensões foi conduzida.
- **Nível 3, Padronizar:** É conduzida uma avaliação estruturada, honesta, e baseada em mínimo de cinco dimensões, usando evidência concreta, em toda a organização.
- **Nível 4, Gerir:** A avaliação é repetida numa cadência regular, e as suas descobertas informam direta e consistentemente as prioridades direcionadas de investimento.
- **Nível 5, Orquestrar:** A organização tem uma prática demonstrada e sustentada de autoavaliação honesta, incluindo revisão externa periódica, e consegue apontar para decisões específicas de investimento que as descobertas da avaliação diretamente impulsionaram.

## Ideias para debate

1. Qual é a nossa pontuação honesta e baseada em evidência em cada uma das cinco dimensões neste momento?
2. Qual dimensão é a nossa restrição real, e isso corresponde à nossa intuição?
3. Alguma vez calculámos a média das nossas pontuações numa imagem mais lisonjeira do que o mínimo mostraria?
4. Quando reavaliámos pela última vez formalmente, e foi proativo ou impulsionado por crise?
5. O que uma revisão externa honesta da nossa autoavaliação provavelmente revelaria?

## Principais conclusões

- A maturidade de programa abrange cinco dimensões transversais: **governação, instrumentação, equilíbrio de resultado, confiança cultural, e melhoria contínua**.
- A maturidade geral é o **mínimo através das dimensões, não a média**; uma fraqueza em confiança cultural mina a força em todo o resto.
- Use este modelo consolidado **ao lado de, não em vez de**, os modelos individuais de maturidade ao nível de tema ao longo deste livro.
- **Reavalie numa cadência regular**, em vez de esperar até uma crise forçar a questão.
- Trate uma pontuação baixa como um **ponto de partida honesto de investimento**, não uma nota reprovatória, seguindo o enquadramento diagnóstico deste livro ao longo de todo o texto.

## Referências e leituras adicionais

- *Capability Maturity Model Integration (CMMI)*, Software Engineering Institute.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin.
- *The Fifth Discipline: The Art and Practice of the Learning Organization*, de Peter M. Senge.
