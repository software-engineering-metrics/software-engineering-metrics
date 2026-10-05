# 5.3 Métricas de resultado de cliente e negócio

## Visão geral e motivação

Este capítulo alarga a lente para além da adoção ao nível de funcionalidade do capítulo 5.2 para toda a gama de resultados de cliente e negócio com que uma organização realmente se preocupa: receita retida ou crescida, satisfação e lealdade do cliente, redução de custos, risco evitado, e, para organizações do setor público, os resultados de cidadão que uma missão existe para servir. Estas são as métricas de resultado que o capítulo 1.3 colocou no topo da hierarquia entrada-produção-resultado, e este capítulo é onde este livro confronta a versão mais difícil e honesta do desafio central desse capítulo: os resultados a este nível são raramente atribuíveis apenas à engenharia, e fingir o contrário produz exatamente o problema de falsa precisão contra o qual o capítulo 3.3 alertou para o desempenho individual, agora escalado ao nível da contribuição de toda uma organização de engenharia para o negócio.

A resposta produtiva a essa dificuldade de atribuição não é desistir de ligar o trabalho de engenharia a resultados de negócio, o que abandonaria toda a premissa do capítulo 1.3, mas ser honesto sobre a força da ligação e usar evidência convergente em vez de afirmações de falsa precisão de causalidade direta. Uma organização de engenharia bem gerida consegue mostrar que o seu trabalho se correlaciona com, contribui para, e por vezes impulsiona diretamente resultados específicos de negócio, sem reivindicar crédito exclusivo por resultados que também dependem de vendas, marketing, condições de mercado, e decisões de estratégia de produto tomadas bem fora do controlo da engenharia.

Para equipas grandes, a disciplina deste capítulo determina se a engenharia tem um lugar real à mesa estratégica ou é tratada como um centro de custo cujo valor é assumido em vez de demonstrado. As organizações empresariais usam métricas de resultado de cliente e negócio para justificar investimento continuado e expandido em engenharia contra reivindicações concorrentes sobre capital; as organizações governamentais usam as métricas equivalentes de resultado de cidadão para demonstrar que o gasto público em tecnologia produziu o seu valor público pretendido, que é cada vez mais o padrão a que os órgãos de supervisão sujeitam os programas digitais governamentais.

## Princípios-chave

- **Os resultados são raramente atribuíveis apenas à engenharia.** Use evidência convergente e linguagem honesta de correlação, não falsas afirmações de causalidade exclusiva.
- **Ligue as métricas de engenharia a métricas de resultado explicitamente, através de uma cadeia causal documentada**, não apenas justaposição no mesmo painel.
- **As organizações governamentais e orientadas por missão têm métricas de resultado para além da receita.** O tempo de espera do cidadão, a taxa de erro, e a conclusão de serviço importam tanto quanto, ou mais do que, as medidas financeiras.
- **Uma métrica de resultado de negócio é lenta e ruidosa.** Aplique a literacia estatística do capítulo 1.6 rigorosamente aqui, mais do que em quase qualquer outro lugar neste livro.
- **É aqui que a credibilidade da engenharia junto de partes interessadas não técnicas se ganha ou perde.** Fale na linguagem de resultado que o seu público já usa.

## Recomendações

### Construa uma cadeia causal explícita e documentada desde as métricas de engenharia até aos resultados de negócio

Em vez de apresentar métricas de entrega e resultados de negócio lado a lado e deixar um público inferir uma ligação, construa a árvore de métricas (capítulo 1.3) explicitamente: este investimento específico de engenharia reduziu o tempo de espera, o que permitiu resposta mais rápida a uma necessidade específica do cliente, o que se correlacionou com uma melhoria específica na retenção. Documente cada elo nesta cadeia com a sua própria evidência, para que a afirmação geral seja uma cadeia de elos individuais defensáveis em vez de um salto único e não suportado de "melhorámos a frequência de implementação" para "a receita cresceu".

### Use linguagem honesta de [correlação](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation), e procure ativamente fatores de confusão

Seguindo diretamente a orientação do capítulo 1.6, resista a afirmar que uma mudança de engenharia *causou* uma melhoria de resultado de negócio sem considerar o que mais mudou ao mesmo tempo: uma mudança de preços, um tropeço de um concorrente, um efeito sazonal, uma campanha de marketing. Declare as descobertas como correlações apoiadas por uma cadeia causal plausível, e seja explícito sobre que fatores de confusão considerou e excluiu, em vez de apresentar uma única comparação de antes e depois como prova.

### Rastreie explicitamente os resultados de cidadão e missão para trabalho do setor público e orientado por missão

Para organizações governamentais e sem fins lucrativos, o equivalente a "receita" é muitas vezes um resultado de cidadão ou beneficiário: tempo de espera reduzido para um serviço, taxa de conclusão bem-sucedida aumentada para um processo de candidatura, taxa de erro reduzida num cálculo de benefício. Rastreie-os com o mesmo rigor que as organizações do setor privado aplicam às métricas de receita, e resista à tentação de recuar para métricas apenas de entrega (funcionalidades entregues, dentro do prazo) simplesmente porque são mais fáceis de medir e menos expostas à dificuldade de atribuição.

### Combine dados quantitativos de resultado com sinal qualitativo do cliente

Os números sozinhos, especialmente números lentos e ruidosos de resultado de negócio, podem perder contexto que o sinal qualitativo capta diretamente: feedback de entrevistas com clientes, temas de tickets de suporte, ou descobertas diretas de investigação de utilizador. Use o sinal qualitativo para explicar *porque* uma métrica quantitativa de resultado se moveu, ou para apanhar um problema emergente antes de aparecer num número atrasado de todo, tratando os dois como evidência complementar em vez de tratar os dados quantitativos como inerentemente mais autoritativos.

### Apresente os dados de resultado no vocabulário próprio do público

Ao apresentar a partes interessadas não técnicas, executivos, membros de conselho, órgãos de supervisão legislativa, comece com a métrica de resultado na linguagem que já usam (receita retida, custo evitado, tempo de espera do cidadão reduzido), e use as métricas de engenharia apenas como evidência de apoio para como esse resultado foi alcançado, não como a manchete. Isto é uma aplicação direta do princípio de ponderação de resultado do capítulo 1.3 à competência específica de comunicação com partes interessadas.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Afirmar causalidade direta de métricas de engenharia para resultados de negócio | Narrativa simples e convincente | Normalmente exagera a certeza; vulnerável a ser desmentida por um público cético |
| Correlação honesta e documentada em cadeia | Defensável, constrói credibilidade a longo prazo | Mais complexa de apresentar; exige mais disciplina de recolha de evidência |
| Reporte apenas de entrega (evitar afirmações de resultado inteiramente) | Simples, evita risco de atribuição | Falha em demonstrar o valor real de negócio da engenharia; fraco em conversas de investimento |
| Evidência combinada quantitativa e qualitativa de resultado | Mais rica, mais explicativa, apanha o que os números sozinhos perdem | Exige mais esforço para recolher e sintetizar ambos os tipos de evidência |

A tensão central é **narrativa convincente versus honestidade defensável**. Uma afirmação simples e direta de causalidade, "entregámos esta funcionalidade e a receita cresceu 20%", é uma história muito mais convincente do que uma cadeia causal cuidadosamente ressalvada e com vários elos com fatores de confusão reconhecidos, mas é também muito mais provável de estar errada e, se desafiada por uma parte interessada cética, de danificar a credibilidade da organização de engenharia para afirmações futuras. Resolva a tensão investindo na versão mais difícil e honesta: uma cadeia causal documentada com fatores de confusão reconhecidos ainda é uma história convincente, e tem a vantagem decisiva de ser uma que sobrevive ao escrutínio.

## Perguntas para debater com a sua equipa

1. **Para a nossa afirmação mais recente de que uma mudança de engenharia melhorou um resultado de negócio, conseguiríamos documentar a cadeia causal completa, ou apresentámos um salto direto de uma coisa para a outra?** Escolha uma afirmação real e recente e tente preencher cada elo explicitamente; lacunas na cadeia valem a pena ser nomeadas honestamente.

2. **Que fatores de confusão considerámos, e excluímos, antes de fazer essa afirmação?** Se a resposta honesta é "não verificámos realmente", essa é uma lacuna que vale a pena fechar antes de a próxima afirmação dessas ser feita a um público cético.

3. **Para o nosso trabalho do setor público ou orientado por missão, rastreamos o resultado equivalente de cidadão ou beneficiário com o mesmo rigor que uma organização do setor privado aplica à receita?** Se a sua organização recua por predefinição para métricas apenas de entrega porque são mais fáceis, discuta o que seria necessário para construir a métrica de resultado mais difícil em vez disso.

4. **Que sinal qualitativo, entrevistas com clientes, temas de suporte, poderia explicar um movimento recente numa métrica quantitativa de resultado que o número sozinho não explica?** Procure um caso específico onde a evidência qualitativa acrescentaria valor explicativo real a uma tendência quantitativa que já observou.

5. **Quando apresentamos a partes interessadas não técnicas, começamos com a métrica de resultado no seu vocabulário, ou com uma métrica de engenharia que elas têm de traduzir elas próprias?** Reveja uma apresentação recente e verifique o que veio primeiro e o que foi enquadrado como a manchete.

6. **Alguma vez fomos desafiados numa afirmação de resultado e descobrimos que não a conseguíamos defender sob escrutínio?** Se isto aconteceu, discuta que evidência teria tornado a afirmação defensável, e aplique essa lição no futuro para como as afirmações futuras são construídas e documentadas.

## Perspetiva setorial

**Startup.** A atribuição de resultado é muitas vezes mais clara a esta escala, já que uma empresa pequena consegue rastrear mais diretamente uma funcionalidade específica a um movimento específico de métrica com menos complexidade organizacional a diluir a ligação. Mesmo assim, resista à tentação de afirmar causalidade direta sem pelo menos brevemente considerar fatores de confusão óbvios como sazonalidade ou um impulso de marketing concorrente.

**Pequena empresa.** Concentre-se em qualquer métrica de resultado que mais diretamente reflita sobrevivência e crescimento, receita, clientes recorrentes, redução de custos, e ligue o trabalho de engenharia a ela através de raciocínio qualitativo simples e honesto em vez de análise estatística sofisticada que provavelmente não tem capacidade para realizar rigorosamente.

**Empresa.** Construir a cadeia causal documentada desde as métricas de engenharia até aos resultados de negócio é genuinamente difícil a esta escala, dada a complexidade organizacional e muitos fatores de confusão, mas é também onde o investimento mais compensa, já que a credibilidade da engenharia em conversas de alocação de capital depende diretamente deste tipo de evidência defensável.

**Governo.** As métricas de resultado de cidadão e missão são cada vez mais o que os órgãos de supervisão esperam, e um programa que só consiga reportar métricas de entrega (funcionalidades entregues, dentro do prazo) convida exatamente o ceticismo que este capítulo foi construído para o ajudar a prevenir. Invista em rastrear explicitamente os resultados de cidadão, mesmo onde são mais difíceis de medir do que uma simples contagem de entrega, já que esse investimento protege diretamente o financiamento futuro e a credibilidade.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de software como serviço queria justificar o investimento continuado em trabalho de fiabilidade de plataforma junto de uma equipa financeira cética focada na velocidade de funcionalidades. Em vez de afirmar causalidade direta das melhorias de fiabilidade para a receita, a equipa construiu uma cadeia documentada: o investimento em fiabilidade reduziu os incidentes de indisponibilidade reportados por clientes, os incidentes de indisponibilidade correlacionaram-se fortemente com risco elevado de abandono nos trinta dias seguintes segundo o próprio modelo de abandono da empresa, e a coorte de clientes que experimentou menos incidentes após o investimento mostrou abandono mensuravelmente mais baixo do que uma coorte comparável de pré-investimento, com a sazonalidade e as mudanças de preços explicitamente verificadas e excluídas como fatores de confusão. Esta cadeia cuidadosamente documentada e honestamente ressalvada provou ser mais persuasiva para a equipa financeira cética do que uma afirmação anterior, mais abrangente, de causalidade direta tinha sido no ano anterior.

**Governo.** Um programa nacional de identidade digital precisava de demonstrar valor a uma comissão legislativa cética quanto ao custo contínuo do programa. Em vez de reportar métricas de entrega (módulos entregues, dentro do prazo), o programa reportou métricas de resultado de cidadão diretamente: o tempo médio para completar uma verificação de identidade caiu de vários dias para menos de dez minutos, e a taxa de conclusão por autoatendimento, sem exigir uma visita presencial a um gabinete, subiu substancialmente. Estas métricas de resultado, combinadas com testemunhos qualitativos de cidadãos que tinham usado o serviço, provaram ser muito mais persuasivas para a comissão do que o reporte focado em entrega que o programa tinha usado em ciclos orçamentais anteriores, e apoiaram diretamente a aprovação de financiamento continuado.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da medição rigorosa e honesta de resultado de cliente e negócio é a credibilidade da engenharia em conversas estratégicas: uma organização que consegue ligar defensavelmente o seu trabalho a resultados reais, com honestidade apropriada sobre os limites de atribuição, ganha uma posição mais forte em futuras decisões de investimento do que uma que ou exagera o seu caso (e é apanhada) ou evita afirmações de resultado inteiramente (e parece um centro de custo sem valor demonstrável de negócio).

O custo total de propriedade é o esforço analítico para construir e documentar cadeias causais, verificar fatores de confusão, e combinar evidência quantitativa com qualitativa, o que é genuinamente mais trabalho do que uma afirmação simples e não suportada de correlação. Esse investimento vale a pena fazer especificamente porque a alternativa, uma afirmação exagerada que mais tarde falha sob escrutínio, custa muito mais em credibilidade a longo prazo do que o rigor extra custa antecipadamente.

## Antipadrões e armadilhas

- **Afirmar causalidade direta sem verificar fatores de confusão:** exagera a certeza e arrisca dano de credibilidade se desafiada.
- **Apresentar métricas de engenharia e resultado lado a lado sem cadeia causal documentada:** convida o público a inferir uma ligação que pode não se sustentar realmente.
- **Recuar por predefinição para métricas apenas de entrega em trabalho do setor público ou orientado por missão porque são mais fáceis de medir:** falha em demonstrar os resultados com que as partes interessadas realmente se preocupam.
- **Tratar os dados quantitativos de resultado como inerentemente mais autoritativos do que a evidência qualitativa:** perde contexto e poder explicativo que os números sozinhos não conseguem fornecer.
- **Apresentar a partes interessadas não técnicas em vocabulário de engenharia em vez de vocabulário de resultado:** enfraquece o poder persuasivo de um caso genuinamente forte.
- **Evitar afirmações de resultado inteiramente para contornar a dificuldade de atribuição:** deixa o valor real de negócio da engenharia não demonstrado e subapreciado.

## Modelo de maturidade

- **Nível 1, Iniciar:** A engenharia reporta apenas métricas de entrega e atividade; não se tenta nenhuma ligação a resultados de negócio ou cidadão.
- **Nível 2, Desenvolver:** Fazem-se algumas afirmações de resultado, mas sem cadeia causal documentada ou consideração de fatores de confusão.
- **Nível 3, Padronizar:** As afirmações de resultado são construídas sobre cadeias causais documentadas e com vários elos, com fatores de confusão explicitamente considerados, em toda a organização.
- **Nível 4, Gerir:** A evidência quantitativa e qualitativa de resultado é combinada sistematicamente, e os dados de resultado são apresentados consistentemente no vocabulário das partes interessadas.
- **Nível 5, Orquestrar:** A engenharia tem um historial demonstrado e de confiança de afirmações defensáveis de resultado que sobreviveram ao escrutínio, e os dados de resultado informam direta e rotineiramente decisões estratégicas de investimento ao mais alto nível da organização.

## Ideias para debate

1. Qual é a nossa evidência atual mais forte a ligar o trabalho de engenharia a um resultado real de negócio ou cidadão?
2. Que fator de confusão nunca realmente verificámos antes de fazer uma afirmação de resultado?
3. Rastreamos os resultados de cidadão ou missão com o mesmo rigor que os financeiros, se aplicável a nós?
4. Que evidência qualitativa fortaleceria a nossa melhor história quantitativa atual de resultado?
5. Como mudaria a nossa última grande apresentação a partes interessadas se começássemos com resultados em vez de métricas de entrega?

## Principais conclusões

- Os resultados são **raramente atribuíveis apenas à engenharia**; use evidência convergente e linguagem honesta de correlação, não falsas afirmações de causalidade exclusiva.
- Construa uma **cadeia causal explícita e documentada** desde as métricas de engenharia até aos resultados de negócio, verificando fatores de confusão em cada elo.
- Rastreie os **resultados de cidadão e missão** para trabalho do setor público e orientado por missão com o mesmo rigor que as organizações privadas aplicam à receita.
- **Combine evidência quantitativa e qualitativa**; os números sozinhos muitas vezes perdem contexto que explica porque um resultado se moveu.
- Apresente os dados de resultado no **vocabulário próprio do público**, começando com resultados, não métricas de engenharia, para partes interessadas não técnicas.

## Referências e leituras adicionais

- *Continuous Discovery Habits*, de Teresa Torres.
- *Lean Analytics*, de Alistair Croll e Benjamin Yoskovitz.
- *How to Measure Anything*, de Douglas W. Hubbard.
- Orientação do U.S. Government Accountability Office (GAO) sobre medição de desempenho e o GPRA Modernization Act: padrões de reporte do setor público baseados em resultados.
