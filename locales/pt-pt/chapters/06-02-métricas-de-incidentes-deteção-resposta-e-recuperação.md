# 6.2 Métricas de incidentes: deteção, resposta, e recuperação

## Visão geral e motivação

Este capítulo mede o que acontece quando o orçamento de erro do capítulo 6.1 é gasto através de uma falha real: um **incidente**, um evento não planeado que degrada ou interrompe um serviço. Quatro métricas formam o vocabulário padrão para medir quão bem uma organização lida com isto: **tempo médio de deteção (MTTD)**, quanto tempo até a organização notar que algo está errado; **tempo médio de reconhecimento (MTTA)**, quanto tempo até alguém assumir a responsabilidade de responder; **tempo médio de resolução** ou **recuperação (MTTR)**, quanto tempo até o serviço ser restaurado, o mesmo conceito que o capítulo 2.10 cobriu especificamente para falhas causadas por implementação, agora generalizado a qualquer incidente independentemente da causa; e **frequência de incidentes**, simplesmente com que frequência os incidentes ocorrem de todo.

A preocupação central deste capítulo, ecoando o tratamento do capítulo 2.10 sobre a taxa de falha de mudanças, é que estes números só são tão fiáveis quanto a cultura organizacional em torno do reporte e classificação honesta de incidentes. Uma equipa que teme a culpa por um incidente tem todo o incentivo para sub-reportar, atrasar o reconhecimento para evitar estar "no relógio", ou classificar um evento sério como menor para proteger as suas próprias métricas. A prática de **postmortem [sem culpa](https://en.wikipedia.org/wiki/Just_culture)**, pioneirada em organizações como a Etsy e formalizada na literatura de SRE da Google, existe especificamente para remover esse incentivo, e este capítulo trata-a como um pré-requisito para dados fiáveis de incidentes, não uma gentileza cultural opcional sobreposta às métricas.

Para equipas grandes, as métricas de incidentes revelam se a capacidade de deteção e resposta de uma organização, as ferramentas de reversão do capítulo 2.10 entre outros investimentos, realmente funciona sob condições reais e variadas, não apenas o cenário específico de falha causada por implementação que esse capítulo cobriu. As organizações empresariais e governamentais que operam infraestrutura crítica dependem destas métricas tanto internamente, para impulsionar melhoria operacional genuína, como externamente, para demonstrar a clientes, reguladores, ou ao público que os incidentes são tratados competentemente e a melhorar ao longo do tempo.

## Princípios-chave

- **A cultura sem culpa é um pré-requisito para dados fiáveis de incidentes**, não um acrescento opcional; o medo da culpa corrompe igualmente o reporte, a velocidade de reconhecimento, e a classificação de gravidade.
- **A deteção, o reconhecimento, e a resolução são fases distintas com correções distintas.** Um tempo global lento de recuperação pode esconder problemas subjacentes muito diferentes dependendo de qual fase está realmente lenta.
- **A frequência de incidentes e o MTTR são um sinal combinado**, semelhante à taxa de falha de mudanças e ao tempo de recuperação da DORA (capítulo 2.10): nenhum isoladamente conta a história completa.
- **A classificação de gravidade precisa do mesmo rigor que a classificação de defeitos escapados** (capítulo 5.1): critérios consistentes e documentados, não julgamento ad hoc.
- **O valor de um postmortem está na aprendizagem sistémica, não em produzir um número.** A métrica é um subproduto da boa prática, não o seu objetivo.

## Recomendações

### Decomponha o tempo de resposta a incidentes nas suas fases distintas

Meça e reporte o tempo de deteção (do início real da falha até alguém notar), o tempo de reconhecimento (da notificação até alguém assumir a responsabilidade), e o tempo de resolução (da responsabilidade até à recuperação genuína) separadamente, em vez de apenas um único total combinado. Cada fase aponta para uma correção diferente: deteção lenta aponta para uma lacuna de monitorização e alerta, reconhecimento lento aponta para um problema de processo de prevenção ou escalonamento, e resolução lenta aponta para uma lacuna de ferramentas, manuais de procedimento, ou capacidade diagnóstica (o capítulo 2.10 cobre isto especificamente para falhas causadas por implementação).

### Construa e proteja um processo genuinamente sem culpa de postmortem

Um **postmortem sem culpa** investiga o que aconteceu e porque o sistema permitiu que acontecesse, evitando explicitamente atribuir culpa a um indivíduo por um erro que qualquer pessoa razoável nas mesmas circunstâncias, com a mesma informação, poderia plausivelmente ter cometido. Proteja esta disciplina ativamente: a liderança a modelar respostas não punitivas a incidentes, uma política escrita explícita, e o hábito de perguntar "o que no nosso sistema permitiu isto" em vez de "quem fez isto" são todos investimentos necessários e contínuos, não uma declaração política única.

### Classifique a gravidade com critérios consistentes, documentados, e auditados

Aplique a mesma disciplina que o capítulo 5.1 recomenda para defeitos escapados à classificação de gravidade de incidentes: uma escala fixa e documentada baseada no impacto real no cliente ou negócio, aplicada consistentemente através das equipas, auditada periodicamente quanto a deriva. A classificação inconsistente, algumas equipas generosas, outras rigorosas, torna os dados de incidentes em toda a organização tão pouco fiáveis para comparação quanto dados de defeitos classificados inconsistentemente seriam.

### Rastreie a frequência de incidentes e o MTTR em conjunto, nunca isoladamente

Um MTTR a melhorar ao lado de uma frequência crescente de incidentes pode indicar uma equipa a ficar melhor a apagar incêndios enquanto a fiabilidade subjacente do sistema realmente se degrada; uma frequência decrescente de incidentes ao lado de um MTTR a piorar pode indicar falhas mais raras mas mais severas e mais difíceis de diagnosticar a substituir falhas frequentes menores. Reveja ambos em conjunto, espelhando exatamente a disciplina de combinação de velocidade e estabilidade das métricas DORA da Parte 2, para obter uma imagem combinada e honesta.

### Extraia e rastreie itens de ação sistémicos dos postmortems, não apenas métricas

O valor real do processo de postmortem são os itens específicos e sistémicos de ação que produz: um alerta em falta adicionado, um manual de procedimento melhorado, um ponto único de falha removido. Rastreie estes itens de ação até à conclusão com a mesma disciplina que o backlog de dívida técnica do capítulo 4.5, já que um postmortem que produz perceção mas nenhum seguimento desperdiça a aprendizagem organizacional que o processo pretende capturar.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Métrica única e combinada de tempo de resposta a incidentes | Simples de reportar | Esconde qual fase específica, deteção, reconhecimento, resolução, é o problema real |
| Métricas de incidentes decompostas por fase | Diagnóstica, aponta diretamente para a correção certa | Exige instrumentação mais cuidadosa de cada transição de fase |
| Revisão de incidentes orientada para a culpa | Parece responsável, satisfaz um desejo de atribuir responsabilidade | Corrompe a honestidade de reporte futuro e raramente corrige a causa sistémica real |
| Prática de postmortem sem culpa | Produz dados honestos e correções sistémicas genuínas | Exige investimento cultural sustentado e disciplina de liderança para manter |

A tensão central é **o apelo da responsabilização individual versus a necessidade prática de reporte honesto**. Culpar um indivíduo após um incidente pode parecer satisfatório e pode parecer liderança decisiva, mas corrompe fiavelmente os dados de cada incidente futuro, porque as pessoas sub-reportam, atrasam o reconhecimento, ou classificam mal a gravidade uma vez que temem consequência pessoal. Resolva a tensão a favor da prática sem culpa deliberada e consistentemente, compreendendo que a responsabilização genuína vem de corrigir o sistema que permitiu uma falha, não de punir o indivíduo que calhou estar presente quando ocorreu.

## Perguntas para debater com a sua equipa

1. **Decompomos o tempo de resposta a incidentes em fases de deteção, reconhecimento, e resolução, ou apenas rastreamos um único número combinado?** Se apenas existe um número combinado, escolha um incidente recente e significativo e tente reconstruir a repartição por fase retroativamente para ver o que teria revelado.

2. **A nossa equipa acreditaria genuinamente que o nosso processo de postmortem é sem culpa, ou o medo de consequência ainda molda como os incidentes são reportados e discutidos?** Pergunte isto direta e honestamente; uma política declarada sem culpa que não é realmente vivida não produz dados fiáveis.

3. **Duas equipas diferentes classificariam a gravidade do mesmo incidente da mesma forma?** Escolha um incidente passado real e ambíguo e peça a representantes de equipas diferentes para o classificarem independentemente, depois compare os resultados.

4. **Revemos a frequência de incidentes e o MTTR em conjunto, ou um recebe mais atenção do que o outro?** Verifique a sua prática real de reporte e revisões quanto a esta combinação, espelhando a mesma disciplina que o capítulo 2.10 recomenda para as métricas de estabilidade da DORA.

5. **Que percentagem dos nossos itens de ação de postmortem dos últimos seis meses foi realmente concluída?** Se atualmente não rastreia isto, essa lacuna vale a pena ser nomeada; um processo de postmortem com uma baixa taxa de conclusão de itens de ação está a produzir perceção sem seguimento.

6. **O medo da culpa alguma vez fez alguém atrasar o reporte ou reconhecimento de um incidente?** Esta é uma pergunta desconfortável mas importante; uma resposta honesta "sim, e foi isto que aconteceu" é muito mais valiosa para a saúde do seu processo de incidentes do que um "não" reflexo.

## Perspetiva setorial

**Startup.** A resposta a incidentes é muitas vezes informal por necessidade com uma equipa pequena, e a decomposição formal por fase pode ser desnecessária inicialmente. O hábito que vale a pena adotar cedo são normas de discussão sem culpa desde o primeiríssimo incidente, já que os hábitos culturais definidos cedo são muito mais fáceis de sustentar do que de adaptar retroativamente uma vez que um padrão propenso à culpa se tenha instalado.

**Pequena empresa.** Um registo simples e partilhado de incidentes, mesmo informal, com uma classificação básica de gravidade e uma breve retrospetiva sem culpa para qualquer coisa significativa, captura a maior parte do valor deste capítulo sem precisar de ferramentas sofisticadas ou uma plataforma dedicada de gestão de incidentes.

**Empresa.** Tanto a classificação consistente de gravidade como a cultura genuína e sustentada sem culpa são mais difíceis de manter à escala, e ambas são essenciais para dados fiáveis e comparáveis de incidentes através de dezenas de equipas. Invista em critérios documentados de classificação, auditoria periódica, e modelagem ativa pela liderança de resposta sem culpa, já que a deriva cultural em direção à culpa tende a infiltrar-se gradualmente sem contrapressão deliberada e contínua.

**Governo.** Os incidentes que afetam serviços públicos ou infraestrutura crítica enfrentam muitas vezes escrutínio externo, atenção mediática, ou inquérito formal, o que cria pressão forte em direção à procura de culpa que pode diretamente minar a prática interna sem culpa se não for ativamente gerida. Mantenha uma disciplina interna clara sem culpa para aprendizagem sistémica genuína, separada de qualquer processo externo de responsabilização que possa seguir-se a um incidente sério, e comunique essa distinção claramente ao pessoal.

## Exemplos

**Empresa.** A cultura de engenharia de uma empresa de pagamentos tinha, durante anos, tratado informalmente os incidentes como algo a minimizar reconhecer rapidamente para evitar parecer responsável, levando a tempos de deteção e reconhecimento consistentemente pobres que a liderança inicialmente atribuiu a ferramentas inadequadas de monitorização. Uma mudança cultural em direção a postmortems genuinamente sem culpa, incluindo a liderança a elogiar pública e especificamente o reconhecimento rápido e honesto de incidentes em vez de elogiar apenas a resolução rápida, produziu uma melhoria mensurável tanto no tempo de deteção como no de reconhecimento dentro de dois trimestres, revelando que o obstáculo original tinha sido cultural, medo da culpa, em vez de técnico, ferramentas inadequadas, como inicialmente assumido.

**Governo.** O centro de operações de uma agência de trânsito público tinha historicamente classificado quase todas as interrupções de serviço como "menores" no seu registo interno de incidentes, um padrão que um novo diretor de segurança achou suspeito dadas as queixas persistentes e informais de pessoal de campo sobre problemas recorrentes sérios. Uma investigação revelou que a classificação "menor" evitava um processo formal e oneroso de reporte exigido para gravidades mais altas, criando um incentivo não intencional para subclassificar. A agência simplificou os seus requisitos formais de reporte para todas as gravidades e protegeu explicitamente o pessoal da culpa por reporte honesto de gravidade, e os dados subsequentes de incidentes mostraram uma taxa mais precisa, e substancialmente mais alta, de interrupções genuinamente significativas, finalmente dando à liderança uma imagem honesta contra a qual priorizar investimento em infraestrutura.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de métricas de incidentes genuinamente sem culpa, bem classificadas, e decompostas por fase é dados honestos que realmente impulsionam melhoria sistémica, em vez de uma imagem confortável mas falsa produzida por sub-reporte ou classificação errada impulsionados pelo medo. O exemplo da empresa de pagamentos acima mostra isto concretamente: uma correção cultural, não um investimento em ferramentas, resolveu o que a liderança tinha diagnosticado erradamente como um problema técnico de deteção.

O custo total de propriedade é maioritariamente investimento cultural e de processo: compromisso sustentado da liderança com a prática sem culpa, critérios documentados e auditados de classificação de gravidade, e a disciplina de rastrear itens de ação de postmortem até à conclusão. Esse investimento custa menos do que a alternativa, um programa de métricas de incidentes que produz dados confiantemente errados porque o medo corrompeu cada entrada nele.

## Antipadrões e armadilhas

- **Revisão de incidentes orientada para a culpa:** corrompe a honestidade de reporte, a velocidade de reconhecimento, e a classificação de gravidade para cada incidente futuro.
- **Rastrear apenas um número combinado de tempo de resposta:** esconde qual fase específica, deteção, reconhecimento, resolução, é realmente o problema.
- **Classificação inconsistente de gravidade através das equipas:** torna os dados de incidentes em toda a organização pouco fiáveis para comparação.
- **Rever a frequência de incidentes e o MTTR isoladamente:** perde a imagem combinada e honesta que o sinal combinado fornece.
- **Um processo de postmortem que produz perceção mas nenhum item de ação concluído:** desperdiça a aprendizagem organizacional que o processo pretende capturar.
- **Uma política declarada sem culpa que não é realmente vivida pela liderança:** produz a mesma corrupção de dados impulsionada pelo medo que uma cultura abertamente orientada para a culpa.

## Modelo de maturidade

- **Nível 1, Iniciar:** A resposta a incidentes é informal, o reporte é inconsistente, e uma cultura propensa à culpa desencoraja ativamente o reporte honesto.
- **Nível 2, Desenvolver:** Existe algum rastreio de incidentes, mas a classificação de gravidade é inconsistente e a prática sem culpa é declarada mas não consistentemente vivida.
- **Nível 3, Padronizar:** As métricas de incidentes decompostas por fase com classificação consistente e documentada de gravidade são rastreadas em toda a organização, com prática genuinamente sem culpa de postmortem.
- **Nível 4, Gerir:** A frequência de incidentes e o MTTR são revistos em conjunto, os itens de ação de postmortem são rastreados até à conclusão, e a classificação é periodicamente auditada quanto a consistência.
- **Nível 5, Orquestrar:** A organização tem um historial demonstrado e sustentado de prática sem culpa a produzir dados honestos e correções sistémicas genuínas, e as métricas de incidentes informam direta e fiavelmente decisões de investimento em fiabilidade.

## Ideias para debate

1. O nosso processo de postmortem sobreviveria a um teste honesto de se é genuinamente sem culpa?
2. Qual é a repartição por fase, deteção, reconhecimento, resolução, do nosso incidente recente mais lento?
3. Duas equipas classificariam a gravidade do nosso último incidente significativo da mesma forma?
4. Que percentagem dos nossos itens recentes de ação de postmortem foi realmente concluída?
5. O medo da culpa alguma vez moldou como um incidente foi reportado ou discutido na nossa equipa?

## Principais conclusões

- A **cultura de postmortem sem culpa é um pré-requisito** para dados fiáveis de incidentes; o medo da culpa corrompe igualmente o reporte, a velocidade de reconhecimento, e a classificação.
- Decomponha o tempo de resposta nas fases de **deteção, reconhecimento, e resolução**, cada uma apontando para uma correção diferente.
- Classifique a gravidade com **critérios consistentes, documentados, e auditados**, espelhando a disciplina de defeitos escapados do capítulo 5.1.
- Reveja a **frequência de incidentes e o MTTR em conjunto**, nunca isoladamente, a mesma disciplina de combinação das métricas de estabilidade da DORA.
- Rastreie os **itens de ação de postmortem até à conclusão**; a métrica é um subproduto da boa prática, não o seu objetivo.

## Referências e leituras adicionais

- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy Beyer, Chris Jones, Jennifer Petoff, e Niall Richard Murphy, eds.
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, e Stephen Thorne, eds.
- *The Field Guide to Understanding Human Error*, de Sidney Dekker.
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering Blog (2012).
