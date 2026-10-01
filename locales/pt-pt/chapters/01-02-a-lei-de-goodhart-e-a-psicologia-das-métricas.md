# 1.2 A lei de Goodhart e a psicologia das métricas

## Visão geral e motivação

A **[lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law)**, assim nomeada em honra do economista Charles Goodhart, é normalmente enunciada como: quando uma medida se torna um alvo, deixa de ser uma boa medida. A observação original de Goodhart em 1975 era sobre política monetária, mas a reformulação posterior da antropóloga Marilyn Strathern é a versão de que as equipas de software realmente precisam, e é a frase sobre a qual este livro inteiro é construído. Toda a métrica em todos os capítulos posteriores, frequência de implementação, cobertura de testes, pontuações de satisfação, carrega este risco, e cada recomendação neste livro é, de alguma forma, uma estratégia para o gerir.

O mecanismo não é misterioso. As pessoas respondem a incentivos, e uma métrica ligada a uma recompensa, uma avaliação, ou uma reputação é um incentivo quer alguém o tenha pretendido como tal quer não. Assim que uma equipa sabe que a "frequência de implementação" está a ser observada, a forma mais barata de mover esse número nem sempre é a pretendida: dividir uma mudança significativa em cinco implementações triviais, e o número sobe enquanto nada de real melhora. Esta não é uma história sobre maus atores. Engenheiros comuns e bem-intencionados respondem exatamente desta forma a incentivos mal desenhados, porque é o incentivo, não a intenção por trás dele, que molda o comportamento sob pressão.

Para organizações grandes, o que está em jogo é maior porque a distância entre o criador da métrica e a pessoa cujo comportamento ela molda cresce com a escala. Um líder de equipa que constrói uma métrica para a sua própria equipa de oito pessoas pode observar diretamente a manipulação e corrigir o rumo rapidamente. Uma métrica implementada numa divisão de seiscentas pessoas, ou publicada num relatório de desempenho governamental lido por uma assembleia legislativa, viaja através de camadas de pessoas que nunca conheceram o seu autor e têm todas as razões para tratar a letra da métrica como o objetivo. A distorção agrava-se com a distância, e é precisamente por isso que este capítulo, e não um posterior, é onde o livro coloca o seu centro de gravidade.

## Princípios-chave

- **Assuma que toda a métrica incentivada será manipulada.** Desenhe contra isso desde a primeira versão, não depois de a distorção ser descoberta.
- **A manipulação é racional, não maliciosa.** As pessoas estão a responder sensatamente ao incentivo que construiu; culpá-las por isso não resolve nada.
- **A distância em relação ao dono da métrica aumenta o risco de distorção.** Quanto mais longe um número viaja da pessoa que compreende a sua intenção, mais se torna a letra da regra em vez do seu espírito.
- **Rácios e intervalos resistem melhor à manipulação do que contagens brutas.** Uma contagem bruta recompensa o volume; um rácio bem escolhido recompensa o comportamento real que se quer.
- **Uma salvaguarda não é opcional numa métrica incentivada.** Toda a métrica a que se associa uma recompensa precisa de uma contramétrica emparelhada que não possa degradar-se.

## Recomendações

### Classificar cada métrica pela sua exposição a incentivos

Antes de publicar uma métrica em qualquer lugar visível, pergunte diretamente: a recompensa, avaliação, reputação, ou orçamento de alguém depende deste número se mover numa direção específica? Se sim, é uma métrica incentivada e precisa de uma salvaguarda (abaixo) antes de entrar em produção. Se não, é uma métrica diagnóstica (capítulo 1.1) e carrega um risco de manipulação mais baixo, embora nunca zero, porque as pessoas ainda podem moldar um número pelo qual meramente esperam vir a ser julgadas mais tarde, mesmo sem um incentivo formal associado hoje.

### Preferir rácios, taxas, e coortes a contagens brutas

Uma contagem bruta como "tickets fechados" é manipulável fazendo mais de algo de baixo valor. Um rácio como "percentagem de tickets resolvidos no primeiro contacto" recompensa o comportamento subjacente em vez do volume. Uma **coorte**, um grupo definido por um ponto de partida partilhado, como todas as implementações numa dada semana, impede que uma má tendência recente se esconda dentro de um agregado de longo prazo que a favorece. Sempre que estiver a escolher entre uma contagem e uma taxa que captura o mesmo comportamento subjacente, escolha a taxa.

### Emparelhar toda a métrica incentivada com uma salvaguarda

Uma **métrica de salvaguarda** é uma contramétrica emparelhada que não se pode degradar enquanto a métrica primária melhora. A frequência de implementação emparelha-se com a taxa de falha de mudanças; o tempo de espera emparelha-se com a taxa de escape de defeitos; o tempo de atendimento de uma equipa de suporte emparelha-se com a satisfação do cliente. A salvaguarda é o que torna a manipulação barata visivelmente cara: uma equipa que melhora o número incentivado degradando a salvaguarda é apanhada pelo emparelhamento, não pela sorte. Desenhe a salvaguarda ao mesmo tempo que a métrica primária, nunca como uma reflexão tardia uma vez que a manipulação já foi descoberta.

### Vigiar os quatro padrões clássicos de manipulação

A distorção sob a lei de Goodhart tende a cair num pequeno número de formas reconhecíveis. A **manipulação de limiar** otimiza exatamente até um alvo e para (um alvo de 95% de cobertura de testes produz testes triviais para atingir exatamente 95%, não cobertura genuína). A **manipulação de definição** muda o que conta em vez do que acontece (redefinir "resolvido" para excluir casos difíceis). A **manipulação de temporização** desloca quando o trabalho é registado em vez de quando ocorreu (agrupar implementações mesmo antes de uma janela de relato fechar). A **manipulação de substituição** entrega a letra da métrica enquanto abandona a sua intenção (dividir uma mudança real em muitas mudanças triviais para inflacionar a frequência de implementação). Nomear estes padrões à sua equipa, explicitamente, torna-os muito mais fáceis de detetar quando aparecem nos seus próprios números.

### Separar a medição da recompensa sempre que possível

A salvaguarda mais forte de todas é estrutural: desacoplar a métrica da recompensa individual. Uma métrica usada puramente para compreender um sistema, sem que o pagamento, a avaliação, ou a posição de nenhuma pessoa dependa da sua direção, enfrenta uma pressão de manipulação muito mais fraca do que uma ligada a uma avaliação. É por isso que a distinção diagnóstica-versus-avaliativa do capítulo 1.1 importa tanto na prática: manter uma métrica diagnóstica é muitas vezes mais barato e mais eficaz do que qualquer quantidade de engenharia de salvaguardas aplicada depois do facto.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Contagens brutas | Simples de calcular e explicar | Altamente manipuláveis por volume |
| Rácios e taxas | Recompensam o comportamento certo, resistem à manipulação por volume | Podem esconder um problema de denominador encolhido |
| Emparelhamento com salvaguarda | Torna a manipulação barata visivelmente cara | Duplica as métricas a definir, possuir, e manter |
| Apenas diagnóstico (sem recompensa individual) | Menor pressão de manipulação de qualquer opção | Alavanca motivacional direta mais fraca para a liderança usar |
| Métricas fortemente incentivadas | Resposta comportamental forte e rápida | Alto risco de distorção, muitas vezes dentro de um único ciclo de relato |

A tensão central é **poder motivacional versus risco de distorção**. As métricas que movem o comportamento mais depressa, ligando um número diretamente a uma recompensa, são exatamente as mais expostas à lei de Goodhart. Resolva a tensão reservando incentivos fortes para métricas de resultado que são genuinamente difíceis de manipular barato, e emparelhando o que quer que incentive com uma salvaguarda desenhada ao mesmo tempo, não acrescentada depois de a primeira distorção aparecer.

## Perguntas para debater com a sua equipa

1. **Para cada métrica da qual a recompensa de alguém depende, qual é a forma mais barata de a manipular, e apanharíamos essa manipulação hoje?** Sente-se e desenhe deliberadamente a exploração para cada número incentivado no seu painel de controlo: como é que uma equipa racional e bem-intencionada faria isto parecer bom sem fazer o trabalho subjacente? Se não conseguir nomear uma forma de apanhar essa manipulação, ainda não está pronto para incentivar a métrica. Este exercício é desconfortável e esse desconforto é o objetivo.

2. **Quais das nossas métricas atuais já derivaram para um dos quatro padrões de manipulação, limiar, definição, temporização, ou substituição, sem que ninguém o tenha assinalado?** A distorção raramente se anuncia; aparece como um número que parece excelente enquanto as queixas subjacentes, os incidentes, ou o feedback dos clientes contam uma história diferente. Percorra o seu painel de controlo contra cada padrão pelo nome e seja honesto sobre as correspondências.

3. **Toda a métrica incentivada no nosso painel de controlo tem uma salvaguarda emparelhada, e essa salvaguarda foi desenhada ao mesmo tempo que a métrica?** Uma salvaguarda acrescentada apenas depois de a manipulação ser descoberta é uma reparação, não uma escolha de desenho, e normalmente chega tarde demais para prevenir a primeira ronda de dano à confiança. Audite as suas métricas incentivadas especificamente para este emparelhamento.

4. **A que distância viaja esta métrica desde a pessoa que compreende a sua intenção até à pessoa cujo comportamento molda?** Uma métrica construída por uma equipa de plataforma e consumida três camadas de gestão mais tarde, ou publicada num relatório público lido por pessoas que nunca viram a instrumentação, está muito mais exposta à manipulação da letra em vez do espírito do que uma que uma equipa desenhou para si própria. Mapeie essa distância para as suas métricas mais consequentes.

5. **Alguma vez removemos um incentivo de uma métrica depois de descobrir que estava a ser manipulada, e o que nos custou isso, em confiança, corrigir?** As organizações descobrem muitas vezes a lei de Goodhart da forma difícil, depois de um trimestre ou um ano de comportamento distorcido, e a reparação custa mais do que a prevenção teria custado. Traga um incidente real, se tiver um, e extraia a lição explicitamente em vez de simplesmente seguir em frente.

6. **Onde assumimos que a manipulação era um problema de integridade pessoal em vez de uma resposta racional a um incentivo mal desenhado?** Culpar indivíduos por responder previsivelmente a um incentivo que construiu raramente resolve alguma coisa e frequentemente prejudica ainda mais a confiança. Reformule cada incidente de manipulação de que se lembre como um problema de desenho na métrica, não um problema de caráter na pessoa, e pergunte que redesenho o teria prevenido.

## Perspetiva setorial

**Startup.** Com uma equipa minúscula, a salvaguarda mais rápida é a conversa direta: toda a gente pode ver um número e perguntar imediatamente "espera, porque é que isso subiu." O risco real é um fundador associar uma métrica a uma narrativa de angariação de fundos (crescimento a todo o custo) sem uma salvaguarda emparelhada, porque os investidores externos aplicam exatamente o tipo de pressão distante e de alto risco que torna a manipulação atrativa.

**Pequena empresa.** As ferramentas prontas a usar enviam frequentemente painéis de controlo predefinidos construídos à volta de contagens (tickets fechados, chamadas atendidas) porque as contagens são fáceis de calcular. Converta ativamente estas para taxas sempre que a ferramenta o permita, e resista a ligar qualquer número único a um bónus ou avaliação sem primeiro identificar a sua salvaguarda.

**Empresa.** A distância é o risco dominante: uma métrica desenhada por uma equipa de plataforma para diagnóstico interno é apanhada três camadas de gestão mais tarde e transformada num KPI que ninguém que a construiu reconheceria. Governe isto explicitamente (capítulo 1.4): exija uma salvaguarda documentada antes de qualquer métrica ser aprovada para uso numa avaliação de desempenho ou num painel executivo.

**Governo.** As medidas de desempenho publicadas enfrentam a pressão de manipulação mais forte de qualquer categoria neste livro, porque um alvo não atingido pode carregar consequências orçamentais ou políticas. Audite a própria definição numa cadência fixa, não apenas o número, já que o padrão clássico de manipulação do setor público é redefinir silenciosamente quem conta (uma lista de espera "resolvida" ao reclassificar quem está à espera) em vez de melhorar o serviço subjacente.

## Exemplos

**Empresa.** Uma empresa de tecnologia retalhista definiu um alvo de 99% de cobertura automatizada de testes em todos os serviços, ligado a uma pontuação de qualidade ao nível da equipa usada em avaliações trimestrais. Dentro de dois trimestres, a cobertura atingiu 99%, e a taxa de incidentes subiu. Uma auditoria encontrou equipas a escrever testes triviais, afirmando que uma função retornava sem lançar uma exceção, puramente para satisfazer a ferramenta de cobertura, enquanto os testes genuínos de casos extremos não tinham melhorado nada. A correção substituiu o alvo bruto de cobertura por uma métrica emparelhada: cobertura mais uma pontuação de testes de mutação (capítulo 4.2) que mede se os testes realmente apanham falhas injetadas, o que é muito mais difícil de manipular barato.

**Governo.** A agência de seguro de desemprego de um estado era medida pela mediana de dias até ao primeiro pagamento, publicada à sua assembleia legislativa. Sob pressão para atingir um alvo, um escritório regional começou a reclassificar silenciosamente os pedidos mais difíceis de processar como "incompletos" e a excluí-los do denominador, o que fazia a mediana publicada parecer excelente enquanto alguns requerentes esperavam muito mais tempo do que o relatório sugeria. Uma auditoria independente à própria definição, não apenas ao número, descobriu a prática. A correção da agência congelou a definição, publicou os critérios de exclusão publicamente, e acrescentou uma métrica de salvaguarda a acompanhar a própria taxa de pedidos incompletos, para que um pico na reclassificação se tornasse agora visível em vez de escondido.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de levar a lei de Goodhart a sério é o retrabalho evitado. Uma organização que desenha salvaguardas antecipadamente gasta uma quantidade modesta de esforço extra a definir uma segunda métrica ao lado da primeira. Uma organização que salta este passo gasta muitas vezes um trimestre inteiro ou mais de esforço mal direcionado antes de a distorção emergir, seguido pelo custo muito mais difícil de desfazer o comportamento manipulado e reconstruir a confiança no número depois. O exemplo retalhista acima é típico: barato de prevenir, caro de reparar.

O custo total de propriedade de uma salvaguarda não é grátis: é uma segunda métrica a definir, instrumentar, e rever. Mas esse custo é pequeno e fixo em comparação com o custo ilimitado de um incentivo que recompensa silenciosamente o comportamento errado durante meses antes de alguém reparar. Todo o capítulo depois deste tem este compromisso em conta, e é por isso que o emparelhamento com salvaguardas aparece como recomendação ao longo do resto deste livro e não apenas aqui.

## Antipadrões e armadilhas

- **Publicar uma métrica incentivada sem salvaguarda:** a causa-raiz mais comum de um painel de controlo distorcido neste livro.
- **Tratar a manipulação como uma falha pessoal:** culpa indivíduos por uma resposta racional a um incentivo mal desenhado, e não resolve nada.
- **Auditar o número mas nunca a definição:** o modo de falha clássico do setor público, onde a métrica parece bem porque quem conta mudou silenciosamente.
- **Assumir que uma métrica que funcionou como diagnóstica continuará segura assim que se torne avaliativa:** a exposição muda no momento em que a recompensa se associa, mesmo que nada mais na métrica mude.
- **Desenhar a salvaguarda apenas depois do primeiro incidente de manipulação:** uma reparação que chega depois de o dano à confiança já estar feito.
- **Ignorar a distância:** assumir que uma métrica será lida da forma que o seu criador pretendeu depois de viajar várias camadas de gestão ou um relatório público para longe deles.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas são incentivadas ad hoc, sem consideração pelo risco de manipulação, e a distorção só é descoberta depois de a qualidade ou a confiança sofrerem visivelmente.
- **Nível 2, Desenvolver:** Algumas equipas reconhecem a manipulação depois do facto e ajustam informalmente, mas não há prática consistente de desenhar salvaguardas antecipadamente.
- **Nível 3, Padronizar:** Toda a métrica incentivada em toda a organização exige uma salvaguarda documentada antes da aprovação, e os quatro padrões de manipulação são nomeados e ensinados.
- **Nível 4, Gerir:** O risco de manipulação é ativamente monitorizado: as definições são periodicamente auditadas, os pares de salvaguarda são revistos quanto a se ainda apanham a distorção, e os incidentes de manipulação são acompanhados como uma métrica por direito próprio.
- **Nível 5, Orquestrar:** A organização trata a lei de Goodhart como uma restrição de desenho permanente, revista automaticamente sempre que uma nova métrica é proposta, e consegue apontar para redesenhos específicos que preveniram a distorção antes de acontecer, não apenas depois.

## Ideias para debate

1. Qual é a métrica mais consequente na nossa organização que não tem uma salvaguarda hoje?
2. Alguma vez vimos um número melhorar enquanto a realidade subjacente piorava?
3. Quem repararia se a definição por trás de uma das nossas métricas públicas mudasse silenciosamente?
4. Qual dos quatro padrões de manipulação (limiar, definição, temporização, substituição) é a nossa organização mais propensa a?
5. Quanto nos custaria, em confiança, descobrir que uma métrica importante tinha sido manipulada durante um ano?

## Principais conclusões

- **Lei de Goodhart:** uma medida que se torna um alvo deixa de ser uma boa medida, e isto governa toda a métrica neste livro.
- A manipulação é uma **resposta racional ao incentivo**, não uma falha de caráter; corrija o desenho do incentivo, não as pessoas.
- Prefira **rácios, taxas, e coortes** a contagens brutas sempre que capturam o mesmo comportamento.
- Toda a métrica incentivada precisa de uma **salvaguarda**, desenhada ao mesmo tempo, não acrescentada depois de a distorção ser descoberta.
- Vigie os quatro padrões de manipulação pelo nome: **manipulação de limiar, de definição, de temporização, e de substituição**.
- A **distância** entre o criador de uma métrica e a pessoa cujo comportamento ela molda aumenta o risco de distorção; mantenha essa distância curta onde puder.

## Referências e leituras adicionais

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience" (1975).
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University System" (1997).
- *Seeing Like a State*, de James C. Scott.
- *The Tyranny of Metrics*, de Jerry Z. Muller.
- *Lean Analytics*, de Alistair Croll e Benjamin Yoskovitz.
- Orientação do U.S. Government Accountability Office (GAO) sobre medição de desempenho e o GPRA Modernization Act.
