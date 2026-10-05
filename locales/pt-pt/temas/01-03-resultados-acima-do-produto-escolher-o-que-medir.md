# 1.3 Resultados acima do produto: escolher o que medir

## Visão geral e motivação

Toda a métrica de engenharia cai numa de três categorias, e confundi-las é o segundo modo de falha mais comum neste livro, depois de ignorar completamente a **[lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law)**. Uma **métrica de entrada** mede o esforço gasto: horas de engenheiro, dólares implementados, pontos de história comprometidos. Uma **métrica de produto** mede o que o sistema produziu: funcionalidades entregues, pull requests integrados, tickets fechados. Uma **métrica de resultado** mede a mudança que realmente importou: receita retida, incidentes evitados, tempo poupado a um utilizador. As equipas gravitam em direção às entradas e aos produtos porque são fáceis de contar e totalmente dentro do controlo de uma equipa. O valor, quase sempre, vive nos resultados, que são mais lentos a aparecer, mais ruidosos de medir, e mais difíceis de atribuir ao trabalho de qualquer equipa.

Este tema trata de resistir deliberadamente a essa gravidade. Um painel de controlo construído inteiramente a partir de entradas e produtos pode parecer impressionantemente ocupado enquanto não produz valor real nenhum: uma equipa pode entregar dezenas de funcionalidades que ninguém usa, fechar centenas de tickets que reabrem uma semana depois, ou cumprir cada estimativa de pontos de história enquanto os resultados reais do produto, retenção, satisfação, receita, se mantêm estáveis ou declinam. Nada dessa ocupação aparece como um problema num painel de controlo apenas-de-produto, porque os painéis apenas-de-produto não são construídos para o ver.

À escala empresarial e governamental, esta distinção determina se a liderança consegue distinguir uma equipa produtiva de uma equipa meramente ativa. Uma divisão pode publicar excelentes números de produto durante anos, funcionalidades entregues, sprints fechados, enquanto o resultado com que um financiador ou uma assembleia legislativa realmente se importa, receita retida, tempos de espera do cidadão reduzidos, erode silenciosamente por baixo. "Entregámos o roteiro" não é a mesma afirmação que "o roteiro tornou as coisas melhores," e só um conjunto de métricas ponderado por resultados consegue distinguir as duas.

## Princípios-chave

- **Entradas e produtos são proxies; os resultados são a própria coisa.** Pondere o seu conjunto de métricas em direção aos resultados onde quer que consiga alcançá-los.
- **A facilidade de medição não é uma razão para medir algo.** As coisas mais fáceis de contar são normalmente entradas e produtos, não porque sejam as que mais importam mas porque são mecanicamente simples de capturar.
- **A atribuição torna-se mais difícil à medida que se avança em direção aos resultados.** Aceite essa troca deliberadamente em vez de recuar para os produtos porque os resultados são mais difíceis de atribuir.
- **Uma equipa pode controlar as suas entradas e produtos mas apenas influenciar os resultados.** Desenhe a responsabilização de acordo: responsabilize as equipas pelo que realmente conseguem controlar, e acompanhe os resultados como sinais partilhados entre equipas.
- **Um único resultado-guia, com um pequeno conjunto de motores, vence uma parede de painéis de produto.** A cobertura deve vir da estrutura, não do puro volume do painel de controlo.

## Recomendações

### Classificar cada métrica antes de a adotar

Para qualquer métrica candidata, pergunte em qual das três categorias ela cai. "Pull requests integrados por semana" é um produto. "Percentagem de pull requests integrados que causaram um incidente de produção dentro de uma semana" está mais perto de um resultado, porque mede uma consequência em vez de um volume. Esta classificação demora trinta segundos e deveria ser obrigatória antes de uma métrica ser acrescentada a qualquer painel de controlo de equipa ou organizacional, porque é a forma mais rápida de apanhar um painel de controlo a encher-se silenciosamente de produtos fáceis de contar enquanto acredita que mede valor.

### Construir uma árvore de métricas sob um único resultado

Não acompanhe uma lista plana. Organize as métricas como uma **árvore de métricas** (por vezes chamada árvore de KPI): uma métrica de resultado de topo decomposta nos motores que a alimentam causal ou matematicamente, até às medidas operacionais de produto e entrada que as equipas individuais realmente possuem. Quando o resultado de topo se move, a árvore diz-lhe qual motor de nível inferior investigar, transformando "o número desceu" em "este passo específico no pipeline é a causa." Nomeie uma única **métrica-guia** no topo sempre que o seu domínio suporte uma: a medida que melhor captura o valor entregue, frequência de implementação emparelhada com taxa de falha de mudanças para uma equipa de plataforma, ou uso ativo semanal de uma funcionalidade central para uma equipa de produto.

### Ponderar os resultados na revisão, não apenas no painel de controlo

Uma árvore de métricas só é tão boa quanto a forma como é usada na prática. Nas revisões de sprint, nas revisões trimestrais de negócio, e nas atualizações de liderança, lidere com o número ao nível de resultado e use as métricas de produto e entrada por baixo dele apenas para explicar o movimento, não para o substituir. Uma equipa que reporta "fechámos 40 tickets neste sprint" sem nenhum contexto de resultado não lhe disse nada sobre se o trabalho importou; uma equipa que reporta "os defeitos escapados caíram 30% e aqui está o investimento em testes que o impulsionou" disse-lhe algo real.

### Aceitar feedback mais lento para métricas de resultado, e emparelhá-las com indicadores avançados mais rápidos

As métricas de resultado são muitas vezes retardadas: confirmam um resultado depois de tempo suficiente ter passado para se ter a certeza. Esse atraso é um custo genuíno, já que atrasa a aprendizagem. Emparelhe cada métrica de resultado com pelo menos um indicador avançado, uma métrica que se move mais cedo e prevê o resultado, para que uma equipa consiga orientar-se antes de o número lento e autoritativo finalmente chegar. A frequência de implementação é um indicador avançado para resultados de entrega; uma tendência crescente de escape de defeitos é um indicador avançado para um resultado de fiabilidade que se aproxima. Use os indicadores avançados para agir cedo e as métricas de resultado retardadas para confirmar que teve razão.

## Trocas: prós e contras

| Categoria | Prós | Contras |
| --- | --- | --- |
| Métricas de entrada | Totalmente dentro do controlo da equipa, fáceis de contar | Ligação mais fraca ao valor real; fáceis de manipular por volume |
| Métricas de produto | Fáceis de contar, propriedade clara, feedback rápido | Recompensam a atividade acima do impacto; podem subir enquanto o valor desce |
| Métricas de resultado | Refletem diretamente o que importa; difíceis de manipular barato | Lentas, ruidosas, e difíceis de atribuir a uma única equipa |
| Estrutura de árvore de métricas | Liga o trabalho diário ao valor estratégico; ajuda o diagnóstico | Exige trabalho analítico real para construir e manter corretamente |

A tensão central é **controlabilidade versus valor**. As entradas e os produtos estão totalmente dentro do controlo de uma equipa, o que os torna tentadores para responsabilizar equipas; os resultados carregam o valor mas estão apenas parcialmente dentro da influência de qualquer equipa individual, já que uma boa funcionalidade ainda pode falhar por razões inteiramente fora da engenharia. Resolva isto responsabilizando as equipas pelas entradas e produtos que controlam totalmente, enquanto acompanha os resultados como sinais partilhados que toda a organização possui em conjunto, ligados através de uma árvore de métricas explícita em vez de deixados como uma lacuna inexplicada entre "fizemos o trabalho" e "ajudou."

## Perguntas para debater com a sua equipa

1. **Para cada métrica no nosso painel de controlo atual, é uma entrada, um produto, ou um resultado, e o equilíbrio entre os três conta uma história honesta?** A maioria dos painéis de controlo, auditados honestamente, revela-se quase inteiramente entradas e produtos, porque é isso que as ferramentas reportam por predefinição. Classifique cada painel e conte a divisão; um painel de controlo sem nenhum painel de resultado está a medir atividade e a apresentá-la como desempenho.

2. **Qual é a nossa única métrica-guia de resultado, e conseguimos traçá-la através de uma árvore de métricas até algo que cada equipa realmente possui?** Sem esta estrutura de ligação, um número de topo em movimento não dá nenhuma pista sobre onde olhar, e as equipas não conseguem ver como as suas métricas diárias de produto se ligam a algo que importa. Traga a sua métrica de topo atual, se tiver uma, e tente construir a árvore ao vivo.

3. **Onde estamos a responsabilizar uma equipa por um resultado que apenas consegue influenciar, não controlar?** Esta é uma fonte comum de frustração e manipulação silenciosa, porque uma equipa punida por um resultado moldado por fatores fora do seu controlo tem todas as razões para se proteger em vez de melhorar o sistema real. Identifique estas incompatibilidades e ajuste a responsabilização ou acrescente as alavancas em falta.

4. **Que indicador avançado temos para cada uma das nossas métricas de resultado retardadas, e com quanta antecedência as prevê?** Um conjunto de métricas puramente retardado significa que só descobre que estava errado depois de já ser tarde demais para mudar de rumo barato. Traga as suas métricas de resultado e verifique se existe um indicador avançado genuíno para cada uma, ou se está a voar às cegas entre períodos de relato.

5. **Quanto do que celebramos em revisões e retrospetivas é produto ("entregámos X") versus resultado ("X mudou Y para melhor")?** A linguagem que as equipas usam para celebrar o trabalho molda aquilo para que otimizam ao longo do tempo, muitas vezes mais do que o painel de controlo o faz. Ouça as suas próprias reuniões de revisão durante um sprint e conte a divisão honestamente.

6. **Se as nossas principais métricas de produto duplicassem da noite para o dia, as nossas métricas de resultado melhorariam necessariamente, ou poderiam piorar?** Esta experiência mental expõe métricas de produto que se desligaram, ou até se opõem ativamente, aos resultados que deviam servir, como um volume de funcionalidades que aumenta o fardo de manutenção mais depressa do que aumenta a adoção.

## Perspetiva setorial

**Startup.** Escolha um resultado, tipicamente um proxy para se os clientes continuam a obter valor, como a retenção semanal ou a ativação, e trate-o como o seu resultado-guia desde o primeiro dia. Resista à atração de métricas de vaidade de produto como a contagem cumulativa de funcionalidades, que são tentadoras de reportar a investidores mas não dizem nada sobre se o produto realmente funciona para alguém.

**Pequena empresa.** As suas ferramentas existentes, ponto de venda, balcão de suporte, análises, já reportam normalmente um número próximo de um resultado, taxa de compra repetida, taxa de reabertura de tickets. Use-as em vez de construir instrumentação personalizada de resultados que não tem capacidade para manter, e resista à tentação de recuar para contagens brutas de atividade apenas porque são a vista predefinida.

**Empresa.** O modo de falha dominante é um portefólio de equipas, cada uma a otimizar métricas de produto locais que não somam a nenhum resultado organizacional coerente. Construa a árvore de métricas deliberadamente, padronize as definições de resultado entre unidades de negócio, e exija que toda a iniciativa importante declare a sua hipótese de resultado antes do financiamento, não apenas o seu plano de produto.

**Governo.** Os órgãos de supervisão e o público estão cada vez mais literados na diferença entre "entregou a declaração de trabalho" e "melhorou o resultado," e um relatório apenas-de-produto convida precisamente a esse escrutínio. Defina o sucesso como um resultado voltado para o cidadão (tempo de espera, taxa de erro, satisfação) sempre que legal e praticamente possível, e seja explícito quando apenas uma métrica de produto está disponível e porquê.

## Exemplos

**Empresa.** A divisão de engenharia de uma empresa de logística reportou uma contagem consistentemente crescente de "funcionalidades entregues por trimestre" durante dois anos, enquanto a pontuação central de satisfação do cliente da empresa estabilizou silenciosamente. Uma nova vice-presidente de engenharia construiu uma árvore de métricas enraizada na taxa de entrega pontual, o resultado de negócio real, decomposta através do tempo de permanência no centro logístico e do sucesso da última milha até às métricas de produto de engenharia ao nível da equipa. Dentro de um ciclo de relato tornou-se claro que várias equipas de alto produto estavam a entregar funcionalidades em áreas sem efeito mensurável na métrica-guia, e o investimento deslocou-se para os motores que a árvore mostrou que realmente importavam.

**Governo.** A equipa digital de um serviço nacional de saúde tinha reportado "módulos entregues contra a declaração de trabalho" para um programa de modernização de registos de pacientes de vários anos. Um comité de supervisão fez uma pergunta diferente: os clínicos passavam menos tempo em entrada administrativa de dados. A equipa retroadaptou uma métrica de resultado, minutos medianos de tempo administrativo por consulta de paciente, e descobriu que os módulos iniciais tinham na verdade aumentado este tempo devido a atrito no fluxo de trabalho, apesar de cumprirem todos os marcos de entrega. Os módulos posteriores foram redesenhados diretamente à volta da métrica de resultado, e o relato público do programa mudou de uma lista de verificação de entrega para uma comparação de resultado antes-e-depois.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da ponderação por resultados é o desperdício evitado: uma organização que consegue ver, em tempo quase real, que um fluxo de produto não está a mover nenhum resultado pode redirecionar esse investimento antes de um ciclo orçamental completo ser gasto a descobrir isso da forma difícil. O custo oculto dominante em grandes organizações de engenharia não é o subinvestimento, é o trabalho bem executado que nunca deveria ter sido financiado porque estava desligado de qualquer resultado real, e um painel de controlo apenas-de-produto não consegue ver essa desconexão de todo.

O custo total de propriedade da medição de resultados é mais alto do que a medição de produto, porque os resultados são genuinamente mais difíceis de definir, atribuir, e instrumentar, e construir uma árvore de métricas real exige esforço analítico deliberado em vez de aceitar o que quer que uma ferramenta exporte por predefinição. Esse custo vale a pena pagar para qualquer iniciativa acima de uma dimensão modesta, porque a alternativa, descobrir depois do facto que um ano de produto confiantemente reportado não produziu valor real, custa muito mais do que a análise prévia.

## Antipadrões e armadilhas

- **Um painel de controlo que é inteiramente painéis de produto:** mede atividade e apresenta-a como desempenho.
- **Responsabilizar totalmente uma equipa por um resultado que não controla:** gera frustração e convida à manipulação para se proteger de culpa injusta.
- **Nenhum indicador avançado para um resultado retardado:** a equipa só aprende que estava errada depois de já ser caro demais corrigir.
- **Celebrar linguagem de produto nas revisões enquanto se afirma valorizar resultados:** a prioridade declarada e o incentivo vivido divergem, e o incentivo vivido vence.
- **Uma lista plana de métricas sem estrutura de árvore:** um número de topo em movimento não dá nenhuma pista sobre onde olhar.
- **Tratar a medição de resultados como demasiado difícil de tentar:** devolve permanentemente uma organização a entradas e produtos fáceis de contar.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas são quase inteiramente entradas e produtos; ninguém consegue nomear as métricas de resultado da organização ou traçar uma linha até elas.
- **Nível 2, Desenvolver:** Algumas equipas identificaram métricas de resultado informalmente, mas não há árvore de métricas partilhada nem indicadores avançados consistentes.
- **Nível 3, Padronizar:** Uma árvore de métricas documentada liga um resultado-guia partilhado até aos produtos possuídos pelas equipas, aplicada consistentemente em toda a organização.
- **Nível 4, Gerir:** Os indicadores avançados e retardados são ambos acompanhados e revistos em conjunto; as equipas são responsabilizadas apenas pelo que controlam, e a medição de resultados é ativamente dotada de recursos.
- **Nível 5, Orquestrar:** A medição de resultados é integrada diretamente nas decisões de financiamento e priorização; a organização redireciona rotineiramente o investimento de trabalho de alto produto e baixo resultado antes de um ciclo orçamental completo decorrer.

## Ideias para debate

1. Nomeie a métrica de resultado mais importante da nossa organização. Todos concordam com ela?
2. Qual é o nosso maior investimento atual em produto que ainda não conseguimos traçar até nenhum resultado?
3. Onde é que a nossa estrutura de responsabilização pune uma equipa por um resultado que não consegue controlar?
4. Como seria o nosso painel de controlo se eliminássemos todos os painéis de produto puros?
5. Quanto tempo demoramos atualmente a aprender se uma funcionalidade entregue realmente ajudou?

## Principais conclusões

- Classifique cada métrica como **entrada, produto, ou resultado**, e pondere o seu conjunto deliberadamente em direção aos resultados.
- Construa uma **árvore de métricas** sob uma única **métrica-guia** para que um número de topo em movimento aponte para uma causa.
- Responsabilize as equipas pelo que **controlam** (entradas, produtos); acompanhe os resultados como sinais partilhados que toda a organização influencia em conjunto.
- Emparelhe cada **métrica de resultado** retardada com um **indicador avançado** mais rápido para conseguir orientar-se antes de o número lento confirmar que estava errado.
- Um painel de controlo apenas-de-produto mede atividade e chama-lhe desempenho; trate isso como um sinal de aviso, não um conforto.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Lean Analytics*, de Alistair Croll e Benjamin Yoskovitz.
- *Measure What Matters*, de John Doerr.
- *The Lean Startup*, de Eric Ries.
- *Key Performance Indicators*, de David Parmenter.
