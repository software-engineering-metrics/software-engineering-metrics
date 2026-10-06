# 7.2 Medir o desenvolvimento de software assistido por IA

## Visão geral e motivação

O tema 7.1 estabeleceu porque várias métricas existentes já não medem fiavelmente o que costumavam sob desenvolvimento assistido por IA. Este tema trata do que medir em vez disso: como saber, com evidência real em vez de impressão ou marketing de fornecedor, se a assistência de codificação de IA está realmente a ajudar a sua organização, e em quanto. Esta é uma pergunta genuinamente importante com consequências reais de orçamento, as licenças de ferramentas de IA representam um custo real e contínuo, a disciplina de economia unitária do tema 5.4 aplica-se diretamente, e uma organização que não consegue responder-lhe com evidência está ou a pagar em excesso por uma ferramenta que não está a ajudar ou a subinvestir numa que genuinamente está.

A abordagem deste tema baseia-se diretamente no princípio de resultados-acima-do-produto do tema 1.3, agora aplicado especificamente à avaliação de ferramentas de IA. A abordagem ingénua e mais comum mede o desenvolvimento assistido por IA por volume de produção, linhas de código geradas, sugestões aceites, tempo poupado por tarefa autorreportado por programadores, exatamente as métricas contra as quais o tema 7.1 alertava como mais expostas a esta mudança. A abordagem mais rigorosa que este tema recomenda mede resultados: a assistência de IA reduziu genuinamente o tempo de ciclo sem degradar a qualidade, reduziu o tempo gasto em trabalho genuinamente repetitivo e de baixo valor, libertando capacidade para trabalho de maior valor, e afetou mensuravelmente os resultados de negócio e produto da Parte 5.

Para equipas grandes, acertar nesta medição determina se as decisões de investimento em ferramentas de IA são tomadas com base em evidência ou em afirmações de fornecedores e ímpeto organizacional. As organizações empresariais que negoceiam contratos de ferramentas de IA em grande escala precisam de evidência genuína de valor para justificar a despesa e para comparar ferramentas concorrentes justamente; as organizações governamentais, muitas vezes sob escrutínio particular quanto a gastos em tecnologia, precisam de uma metodologia rigorosa e defensável de avaliação antes de comprometer fundos públicos à adoção de ferramentas de IA em escala.

## Princípios-chave

- **Meça a assistência de IA por resultado, não por volume de produção ou estatísticas de utilização reportadas pelo fornecedor.** A disciplina do tema 1.3 aplica-se com força total aqui.
- **Use um [grupo de comparação](https://en.wikipedia.org/wiki/Treatment_and_control_groups) genuíno sempre que viável**, não apenas uma comparação de antes e depois que uma linha de base crescente em toda a indústria poderia confundir.
- **As poupanças de tempo autorreportadas são um sinal fraco isoladamente.** Combine-as com dados objetivos de tempo de ciclo e qualidade.
- **Meça o custo completo, incluindo o tempo de revisão e correção**, não apenas a velocidade de geração.
- **Tarefas diferentes e engenheiros diferentes podem ver valor muito diferente de assistência de IA.** Evite um único número combinado em toda a organização que esconda esta variação.

## Recomendações

### Construa uma comparação genuína, não apenas um instantâneo de antes e depois

Onde viável, compare resultados entre um grupo a usar assistência de IA e um grupo comparável que não a usa, durante o mesmo período, em vez de comparar apenas os números de antes e depois da sua própria organização, que não conseguem distinguir o efeito da assistência de IA de qualquer outra mudança concorrente (a cautela de variável de confusão do tema 1.6 aplica-se diretamente). Onde um verdadeiro grupo de comparação é impraticável, no mínimo compare contra uma linha de base histórica mais longa (um gráfico de controlo, segundo o tema 1.6) em vez de um único instantâneo de antes e depois vulnerável à regressão à média ou a mudanças concorrentes não relacionadas.

### Meça o tempo de ciclo e a qualidade em conjunto, nunca a afirmação de velocidade da assistência de IA sozinha

Aplique diretamente a disciplina dos temas 2.6 e 2.10: rastreie se o trabalho assistido por IA se move mais depressa através das fases de tempo de ciclo, e simultaneamente se a taxa de falha de mudanças ou a taxa de defeitos escapados (tema 5.1) para esse trabalho se move na direção errada. Um ganho genuíno de produtividade mostra tempo de ciclo mais rápido com qualidade estável ou melhorada; um ganho falso mostra tempo de ciclo mais rápido com qualidade a degradar-se, exatamente a troca contra a qual o tema 7.1 alertava, descoberta aqui através da mesma disciplina de métrica combinada que este livro aplica ao longo de todo o texto.

### Inclua o tempo de revisão e correção na contabilização completa de custo

O código gerado por IA que é mais rápido de produzir mas mais lento de rever, ou que exige mais correção e retrabalho após a geração inicial, pode não mostrar nenhuma melhoria líquida de tempo de ciclo uma vez que o pipeline completo é medido, mesmo que o passo inicial de geração de código tenha parecido dramaticamente mais rápido ao engenheiro individual. Meça a cadeia completa de tempo de ciclo (tema 2.6), não apenas a fase de codificação, para captar isto honestamente em vez de creditar a assistência de IA com base numa sensação de velocidade sentida mas incompleta.

### Trate as poupanças de tempo autorreportadas como uma hipótese inicial, não uma conclusão

O autorreporte de programador de "isto poupou-me uma hora" é útil como sinal inicial e como contexto qualitativo (a abordagem combinada quantitativa-qualitativa do tema 5.3 aplica-se aqui também), mas está sujeito aos mesmos enviesamentos de recordação e desejabilidade contra os quais o tema 1.5 alerta para qualquer dado autorreportado, e não diz nada sobre o custo a jusante de revisão ou correção. Use o autorreporte para gerar hipóteses sobre onde a assistência de IA está a ajudar mais, depois valide essas hipóteses contra dados objetivos de tempo de ciclo e qualidade antes de tirar uma conclusão firme.

### Segmente a medição por tipo de tarefa e evite um único número combinado

A assistência de codificação de IA provavelmente fornece valor muito diferente para tarefas de modelo padrão e bem compreendidas do que para resolução de problemas genuinamente nova e complexa. Meça e reporte por categoria de tarefa em vez de uma única média combinada em toda a organização, que pode esconder o facto de a assistência estar a fornecer forte valor numa categoria enquanto fornece pouco ou até valor negativo noutra, informação que um número combinado obscureceria completamente.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Apenas poupanças autorreportadas de tempo | Rápido, fácil de recolher | Sinal fraco; sujeito a enviesamento; ignora o custo a jusante de revisão |
| Apenas comparação de antes e depois | Simples de configurar | Confundida por qualquer outra mudança concorrente ou tendência em toda a indústria |
| Grupo genuíno de comparação | Evidência mais forte e mais defensável | Mais difícil de organizar; pode não ser viável para uma implementação de adoção completa |
| Medição de resultado segmentada por tarefa | Revela onde o valor genuinamente se concentra | Exige esforço mais granular de rastreio e categorização |

A tensão central é **rigor de medição versus viabilidade prática**. Um grupo genuíno e controlado de comparação é a evidência mais forte mas é muitas vezes impraticável uma vez que uma ferramenta tenha sido implementada em toda a organização sem nenhum grupo de controlo retido; as impressões autorreportadas são rápidas e fáceis mas fracas isoladamente. Resolva a tensão usando o design de comparação mais forte que a sua implementação real permite, um grupo genuíno de controlo durante uma fase inicial de piloto se possível, um gráfico de controlo de linha de base histórica se não, e tratando o autorreporte como uma ferramenta de geração de hipóteses em vez da palavra final, independentemente de qual design de comparação acabe por usar.

## Perguntas para debater com a sua equipa

1. **Tivemos, ou ainda poderíamos construir, um grupo genuíno de comparação para avaliar a nossa adoção de ferramentas de IA, ou estamos a depender inteiramente de uma comparação de antes e depois?** Se um verdadeiro grupo de comparação nunca foi estabelecido, discuta se um gráfico de controlo de linha de base histórica ainda poderia fornecer uma alternativa razoavelmente rigorosa.

2. **Medimos o tempo de ciclo e a qualidade em conjunto para o trabalho assistido por IA, ou apenas temos uma afirmação de velocidade sem uma verificação correspondente de qualidade?** Puxe quaisquer dados que existam e verifique esta combinação específica; se não existir, essa lacuna é a correção de maior prioridade única deste tema.

3. **A nossa medição de tempo de ciclo para trabalho assistido por IA inclui o tempo de revisão e correção, ou apenas o passo inicial de geração?** Uma afirmação de velocidade baseada apenas no tempo de geração, ignorando o custo a jusante de revisão, arrisca a armadilha de contabilização incompleta contra a qual este tema alerta diretamente.

4. **Que afirmações autorreportadas de poupança de tempo recolhemos, e validámos alguma delas contra dados objetivos?** Escolha uma afirmação específica e comummente repetida e verifique se os dados objetivos realmente a apoiam.

5. **A nossa medição atual combina todos os tipos de tarefa num único número, ou sabemos quais categorias específicas de trabalho veem o valor mais forte de assistência de IA?** Se combinada, discuta o que uma repartição segmentada por tarefa poderia revelar que o número atual esconde.

6. **Se tivéssemos de defender o nosso investimento em ferramentas de IA a uma parte interessada financeira cética hoje, usando evidência em vez de impressão, o que realmente conseguiríamos mostrar-lhe?** Este teste concreto revela a lacuna entre o que a sua organização atualmente acredita sobre o valor da assistência de IA e o que realmente consegue demonstrar com evidência.

## Perspetiva setorial

**Startup.** Um estudo formal de grupo de comparação é normalmente impraticável à pequena escala, mas mesmo um olhar simples e honesto de antes e depois sobre o tempo de ciclo e a taxa de defeitos, em vez de depender puramente de quão mais rápido o trabalho parece, dá um sinal significativamente mais fiável do que a impressão sozinha.

**Pequena empresa.** Concentre o esforço de medição na sua categoria de tarefa de maior valor e mais repetitiva primeiro, onde o valor da assistência de IA é mais provável de ser claro e mensurável, em vez de tentar uma avaliação abrangente através de todo o tipo de trabalho que a sua pequena equipa faz.

**Empresa.** Uma comparação genuína e controlada durante uma fase inicial de piloto, antes da implementação completa em toda a organização, é muitas vezes alcançável aqui e vale o esforço deliberado de organizar, já que produz evidência muito mais defensável para a decisão de investimento em ferramentas em grande escala que tipicamente se segue a um piloto bem-sucedido.

**Governo.** As decisões de gasto público em tecnologia, incluindo a aquisição de ferramentas de IA, enfrentam muitas vezes escrutínio particular e podem exigir justificação formal de custo-benefício (tema 5.5). Construa a disciplina de medição que este tema recomenda em qualquer fase de piloto desde o início, já que uma metodologia rigorosa e documentada de avaliação fortalece consideravelmente o eventual caso de financiamento ou aquisição.

## Exemplos

**Empresa.** Uma empresa de software implementou um assistente de codificação de IA em metade das suas equipas de engenharia como um piloto deliberado, mantendo a outra metade como grupo de comparação durante um trimestre antes da implementação completa. O grupo piloto mostrou uma melhoria genuína e estatisticamente significativa de tempo de ciclo para tarefas bem definidas e de modelo padrão, mas não mostrou nenhuma melhoria mensurável, e uma contagem ligeiramente elevada de iterações de revisão (tema 2.9), para trabalho arquitetural complexo e novo. Esta descoberta segmentada por tarefa, apenas visível por causa do design genuíno de comparação e da repartição por categoria de tarefa, levou a empresa a direcionar especificamente a mensagem de implementação e a formação de assistência de IA para as categorias de tarefa onde demonstravelmente ajudava, em vez de a apresentar como um aumento uniforme de produtividade através de todo o trabalho.

**Governo.** Uma agência federal a pilotar assistência de codificação de IA para um subconjunto das suas equipas de programa de modernização inicialmente dependeu de inquéritos autorreportados de poupança de tempo, que mostraram respostas entusiásticas e uniformemente positivas. Uma análise objetiva de acompanhamento, comparando o tempo de ciclo e a taxa de defeitos escapados entre as equipas piloto e uma coorte comparável não piloto a trabalhar em componentes semelhantes de sistema, descobriu que a melhoria objetiva de tempo de ciclo era real mas notavelmente menor do que as estimativas autorreportadas sugeriam, e identificou um aumento modesto mas real no tempo de revisão que tinha estado a compensar parte do ganho de velocidade de geração, uma descoberta que os dados de autorreporte sozinhos tinham completamente perdido. Esta imagem mais precisa e baseada em evidência informou diretamente um caso de negócio mais modesto e mais defensável para a aquisição continuada e expandida da ferramenta.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de medir rigorosamente o desenvolvimento assistido por IA são decisões de investimento confiantes e baseadas em evidência: uma organização que sabe precisamente onde a assistência de IA genuinamente ajuda consegue investir em expandi-la lá e evitar pagar em excesso por licenças em categorias de tarefa onde fornece pouco valor, exatamente a perceção de segmentação por tarefa que o exemplo da empresa de software acima demonstra. Isto liga-se diretamente à economia unitária do tema 5.4 e à disciplina de ROI do tema 5.5, já que o custo de ferramentas de IA, muitas vezes licenciado por lugar, precisa do mesmo tratamento rigoroso de custo-benefício que este livro aplica a qualquer outro grande investimento de engenharia.

O custo total de propriedade é o esforço analítico para construir comparações genuínas, medir o tempo completo de ciclo incluindo revisão e correção, e segmentar por tipo de tarefa, o que é mais trabalho do que aceitar estatísticas de utilização reportadas pelo fornecedor ou impressões autorreportadas pelo valor nominal. Esse esforço justifica-se diretamente pela escala do custo de licenciamento de ferramentas de IA através de uma grande organização e pelo risco de um compromisso dispendioso e mal fundamentado em toda a organização baseado em impressão em vez de dados.

## Antipadrões e armadilhas

- **Medir a assistência de IA apenas por volume de produção ou estatísticas de utilização do fornecedor:** repete diretamente o alerta central do tema 7.1.
- **Depender inteiramente de poupanças autorreportadas de tempo:** um sinal fraco vulnerável a enviesamento, e cego ao custo a jusante de revisão e correção.
- **Medir apenas o passo de velocidade de geração, ignorando o tempo completo de ciclo:** produz uma contabilização incompleta e potencialmente enganadora do efeito real de produtividade.
- **Reportar um único número combinado em toda a organização:** esconde variação real de valor através de diferentes categorias de tarefa.
- **Nenhum grupo de comparação ou linha de base histórica:** não consegue distinguir o efeito real da assistência de IA de qualquer outra mudança concorrente.
- **Tratar um resultado entusiástico de inquérito autorreportado como evidência suficiente para uma decisão de investimento em grande escala:** arrisca exatamente a lacuna que o exemplo da agência federal acima descobriu apenas depois de construir uma comparação mais rigorosa.

## Modelo de maturidade

- **Nível 1, Iniciar:** O valor do desenvolvimento assistido por IA é avaliado, se é que o é, apenas através de impressão autorreportada e estatísticas de utilização do fornecedor.
- **Nível 2, Desenvolver:** Existem alguns dados de tempo de ciclo ou qualidade, mas não há grupo genuíno de comparação ou linha de base histórica e nenhuma análise segmentada por tarefa.
- **Nível 3, Padronizar:** Um design genuíno de comparação (grupo de controlo ou linha de base histórica) com medição combinada de tempo de ciclo e qualidade é aplicado consistentemente, segmentado por tipo de tarefa.
- **Nível 4, Gerir:** A contabilização completa de tempo de ciclo, incluindo tempo de revisão e correção, é rastreada; as afirmações autorreportadas são sistematicamente validadas contra dados objetivos.
- **Nível 5, Orquestrar:** A organização tem uma compreensão madura e baseada em evidência de exatamente onde a assistência de IA genuinamente ajuda, informando a implementação direcionada, o investimento em formação, e as decisões de aquisição com ROI demonstrado e defensável.

## Ideias para debate

1. Que comparação genuína, se alguma, temos para a nossa adoção atual de ferramentas de IA?
2. Medimos o tempo de ciclo e a qualidade em conjunto, ou apenas uma afirmação de velocidade?
3. Que afirmação autorreportada de assistência de IA deveríamos validar contra dados objetivos?
4. Que categoria específica de tarefa mostra a evidência mais forte de valor genuíno de assistência de IA para nós?
5. Conseguiríamos atualmente defender o nosso investimento em ferramentas de IA a uma parte interessada financeira cética com evidência?

## Principais conclusões

- Meça o desenvolvimento assistido por IA por **resultado**, não por volume de produção ou estatísticas de utilização reportadas pelo fornecedor.
- Use um **grupo genuíno de comparação ou linha de base histórica**, não apenas um instantâneo de antes e depois vulnerável a fatores de confusão.
- Meça o **tempo de ciclo e a qualidade em conjunto**, incluindo o pipeline completo, tempo de revisão e correção, não apenas a velocidade de geração.
- Trate as **poupanças autorreportadas de tempo como uma hipótese**, não uma conclusão, e valide-as contra dados objetivos.
- **Segmente por tipo de tarefa**; um único número combinado esconde onde o valor genuinamente se concentra e onde não.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- Investigação da GitHub sobre programação em par com IA e produtividade de programadores.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *How to Measure Anything*, de Douglas W. Hubbard.
