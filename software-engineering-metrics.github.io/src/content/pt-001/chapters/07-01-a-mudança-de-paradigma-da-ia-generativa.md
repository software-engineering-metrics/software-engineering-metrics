# 7.1 A mudança de paradigma da IA generativa

## Visão geral e motivação

Durante a maior parte da história da engenharia de software, escrever código era suficientemente lento e trabalhoso para que o volume bruto de produção, linhas escritas, commits feitos, funcionalidades entregues, se correlacionasse pelo menos frouxamente com esforço real e, imperfeitamente, com valor real. Essa correlação nunca foi perfeita, o tema 3.4 foi inteiramente dedicado a porque as métricas de atividade enganam mesmo num mundo pré-IA, mas era forte o suficiente para que muitas organizações construíssem programas de métricas na suposição implícita de que mais código produzido geralmente significava mais trabalho feito. Os assistentes de codificação de **[IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)** quebraram essa suposição decisivamente: uma ferramenta consegue agora produzir um volume grande e de aspeto plausível de código em segundos, a uma fração do custo anterior, e esse volume não diz quase nada por si só sobre se o código resultante funciona, é mantível, ou serve algum propósito real.

A afirmação central deste tema é que isto é uma mudança de paradigma, não uma mudança incremental de ferramentas. Uma mudança de paradigma muda o que os seus instrumentos existentes realmente medem, não apenas os valores que reportam. Um velocímetro ainda mede velocidade depois de mudar o motor de um carro; várias das métricas deste livro não sobrevivem a esta transição tão limpamente. A frequência de implementação (tema 2.10) pode subir porque a IA acelerou trabalho genuinamente valioso, ou porque a IA tornou trivialmente fácil gerar muitas mudanças pequenas e de baixo valor; o número sozinho já não consegue distinguir os dois, de uma forma que na maior parte conseguia, com cautela apropriada, antes. A mesma lógica aplica-se com ainda mais força a contagens brutas de commits, linhas de código, e volume de pedidos de incorporação de mudanças, todos os quais o tema 3.4 já alertava contra como métricas individuais, agora amplificados num risco relevante também ao nível da equipa e organizacional.

Para equipas grandes, esta mudança chegou mais depressa do que a prática de medição da maioria das organizações conseguiu adaptar-se a ela, e a lacuna entre a velocidade de adoção e a adaptação de medição é onde vive o risco real nesta parte. As organizações empresariais que continuam a reportar métricas de atividade da era pré-IA sem ajuste arriscam-se a celebrar uma métrica que silenciosamente deixou de se correlacionar com valor; as organizações governamentais que avaliam investimento em ferramentas de IA precisam de uma compreensão clara de exatamente que métricas permanecem fiáveis e quais já não são, antes de se comprometerem com decisões de aquisição ou política construídas sobre suposições obsoletas de medição.

## Princípios-chave

- **Esta é uma mudança de paradigma no que as métricas medem, não uma mudança incremental.** Algumas métricas existentes deixaram silenciosamente de significar o que costumavam significar.
- **O volume de produção nunca foi um proxy fiável para valor, e tornou-se ativamente não fiável agora.** O alerta do tema 3.4 esteve sempre correto; esta mudança torna ignorá-lo muito mais custoso.
- **A lacuna entre a velocidade de adoção de IA e a velocidade de adaptação de medição é o risco real.** As organizações adotam as ferramentas mais depressa do que reconsideram as suas métricas.
- **Nem toda a métrica neste livro é afetada igualmente.** As métricas de resultado (Parte 5) são muito mais resilientes a esta mudança do que as métricas de atividade e produção bruta.
- **Esta mudança é generalizada na indústria e contínua, não um ajuste único.** Espere mudança contínua à medida que as ferramentas e os seus padrões de adoção continuam a evoluir.

## Recomendações

### Audite explicitamente o seu conjunto existente de métricas quanto à validade na era da IA

Percorra o seu painel atual e, para cada métrica, pergunte diretamente: uma equipa a usar assistência de IA intensivamente mas a produzir não mais valor real do que antes mostraria uma leitura melhorada nesta métrica? As contagens de atividade, a frequência de commits, e a frequência bruta de implementação (sem uma salvaguarda combinada de estabilidade, tema 2.10) são as mais expostas. As métricas de resultado da Parte 5, taxa de defeitos escapados, adoção de funcionalidades, resultados de negócio, são comparativamente resilientes, já que medem o resultado real em vez do volume de atividade que o produziu.

### Reexamine especificamente a frequência de implementação e o tempo de espera, com atenção reforçada a salvaguardas

O tema 2.10 já alertava sobre manipulação por substituição, dividir trabalho significativo em implementações triviais para inflacionar a contagem. A IA generativa torna este padrão específico de manipulação dramaticamente mais barato e fácil de produzir, mesmo não intencionalmente, já que mudanças triviais assistidas por IA são agora quase gratuitas de gerar. Aperte a sua salvaguarda de taxa de falha de mudanças (tema 2.10) especificamente em proporção a quão intensamente uma equipa adotou o desenvolvimento assistido por IA, e observe as tendências de tamanho de implementação ainda mais de perto do que antes.

### Trate a capacidade de revisão de código como um novo e crítico gargalo

Se a assistência de IA aumenta dramaticamente o volume de código proposto para revisão, a fase de revisão (tema 2.9), já muitas vezes o maior contribuidor de tempo de espera no pipeline de entrega, torna-se uma restrição ainda mais afiada. Um revisor a quem é pedido para avaliar um volume muito mais alto de código gerado por IA ao mesmo ritmo de antes vai inevitavelmente ou abrandar o pipeline ou reduzir a profundidade de revisão, exatamente o risco de carimbo automático contra o qual o tema 2.9 já alertava, agora sob pressão significativamente maior. Monitorize a profundidade de revisão e as salvaguardas de qualidade com atenção reforçada à medida que o volume de código gerado por IA sobe.

### Não assuma que o código gerado por IA carrega o mesmo perfil de defeitos do que o código escrito por humanos

A evidência precoce e a experiência de praticantes sugerem que o código gerado por IA pode ter um perfil diferente de defeitos do que o código escrito por humanos: lógica de aspeto plausível mas subtilmente errada, tratamento de casos limite gerado com confiança mas incorreto, ou código que passa a revisão superficial porque parece idiomático e razoável, mas não foi realmente raciocinado com compreensão genuína do contexto específico do sistema. Trate isto como uma hipótese que vale a pena testar ativamente contra os seus próprios dados de defeitos escapados (tema 5.1), etiquetando os defeitos quanto a se o código de origem foi substancialmente gerado por IA, em vez de assumir que as relações históricas de taxa de defeitos em torno das quais a sua organização construiu as suas práticas de qualidade ainda se mantêm inalteradas.

### Atualize explicitamente a sua carta de métricas e processo de governação para esta mudança

Seguindo a disciplina de governação do tema 1.4, não deixe esta mudança acontecer passivamente ao seu programa de métricas. Revisite explicitamente a sua carta de métricas, nomeando quais métricas precisam de novas salvaguardas, quais precisam de ser retiradas, e quais permanecem fiáveis, como uma decisão deliberada de governação em vez de uma deriva não examinada. Documente o raciocínio, já que esta é exatamente o tipo de mudança definicional e contextual contra a qual o tema 1.4 alerta que pode de outra forma acontecer silenciosamente e ser descoberta apenas muito mais tarde.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Continuar a reportar métricas pré-IA sem mudança | Nenhuma disrupção, reporte familiar | Arrisca celebrar métricas que silenciosamente deixaram de se correlacionar com valor |
| Auditoria completa e revisão deliberada do conjunto de métricas | Restaura a medição fiável | Exige esforço analítico real e gestão de mudança organizacional |
| Abandonar inteiramente as métricas de atividade e produção | Remove diretamente o risco mais exposto | Perde algum sinal contextual legitimamente útil (a ressalva do tema 3.4) |
| Apertar salvaguardas sem auditoria completa | Mais rápido de implementar | Pode perder métricas cuja exposição é menos óbvia do que os casos mais claros |

A tensão central é **continuidade de medição versus validade de medição**. As organizações compreensivelmente preferem continuar a reportar métricas familiares de formas familiares, já que mudar um programa de métricas tem custo organizacional real e disrupção. Mas continuar a reportar uma métrica que silenciosamente deixou de medir o que costumava medir é pior do que disrupção, é desorientação ativa. Resolva a tensão tratando isto como exatamente o tipo de mudança deliberada e documentada de governação que o tema 1.4 descreve, disruptiva a curto prazo mas necessária para manter as métricas da organização honestas.

## Perguntas para debater com a sua equipa

1. **Para cada métrica no nosso painel, uma equipa a usar assistência de IA intensivamente mas a produzir não mais valor real mostraria uma leitura melhorada?** Percorra as suas métricas explicitamente com este teste; as que falham são os seus candidatos de maior prioridade para salvaguardas revistas ou retirada.

2. **A nossa frequência de implementação ou volume de commits subiu desde a adoção de assistência de codificação de IA, e verificámos se a taxa de falha de mudanças ou a taxa de defeitos se moveu correspondentemente?** Puxe os dados reais combinados em vez de assumir um resultado positivo ou negativo.

3. **A nossa capacidade de revisão de código está a acompanhar algum aumento no volume de código assistido por IA, ou a profundidade de revisão está silenciosamente a corroer-se sob pressão aumentada?** Verifique as métricas da fase de revisão (tema 2.9) especificamente quanto a sinais do risco de carimbo automático a intensificar-se.

4. **Etiquetamos os defeitos quanto a se o código de origem foi substancialmente gerado por IA, e se sim, o que esses dados mostram até agora?** Se atualmente não etiqueta isto, discuta o que seria necessário para começar, já que estes dados são diretamente relevantes para se as suas suposições históricas de qualidade ainda se mantêm.

5. **Revisitámos deliberadamente a nossa carta de métricas (tema 1.4) à luz desta mudança, ou a nossa prática de medição simplesmente continuou inalterada?** Se a resposta honesta é a segunda, essa lacuna é exatamente o que este tema recomenda fechar primeiro.

6. **Como seria a nossa organização apanhada desprevenida por esta mudança, a celebrar uma métrica que já tinha deixado de significar o que pensávamos que significava?** Esta experiência mental concreta e ligeiramente desconfortável ajuda a motivar a auditoria que este tema recomenda antes, em vez de depois, desse cenário realmente acontecer.

## Perspetiva setorial

**Startup.** A adoção rápida de ferramentas de IA é comum e muitas vezes uma vantagem competitiva genuína, mas a mesma velocidade que torna a adoção atrativa torna a deriva não examinada de métricas mais provável. Construa o hábito de verificar métricas de resultado (Parte 5) ao lado de qualquer ganho de eficiência que reporte da adoção de IA, em vez de reportar melhorias de velocidade sozinhas.

**Pequena empresa.** A assistência de codificação de IA pode estender significativamente a capacidade de uma equipa pequena, mas resista à tentação de reportar aumentos brutos de produção como sucesso inequívoco sem verificar as salvaguardas de qualidade; uma equipa pequena tem menos capacidade para absorver um problema não detetado de qualidade do que uma organização maior com mais redundância.

**Empresa.** A escala deste risco agrava-se significativamente aqui, já que a adoção de IA através de dezenas ou centenas de equipas simultaneamente pode mudar a validade de métricas em toda a organização antes de qualquer equipa individual notar o padrão localmente. Conduza a auditoria de conjunto de métricas que este tema recomenda ao nível organizacional, não apenas equipa por equipa, e atualize a governação (tema 1.4) centralmente e explicitamente.

**Governo.** As organizações do setor público adotam muitas vezes nova tecnologia mais cautelosamente, mas as métricas e padrões de referência usados para avaliar programas governamentais de tecnologia são frequentemente retirados de, ou comparados contra, dados da indústria do setor privado que estão eles próprios a mudar sob a mesma pressão. Compreenda explicitamente quais padrões de referência da indústria contra os quais compara foram afetados por esta mudança antes de os usar para definir expectativas ou avaliar desempenho.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de tecnologia financeira notou que a frequência de implementação tinha subido quase 40% nos dois trimestres seguintes à adoção generalizada de assistente de codificação de IA, e inicialmente reportou isto como uma vitória direta de produtividade numa apresentação ao conselho de administração. Uma análise de acompanhamento mais cuidadosa, motivada pela pergunta de um membro cético do conselho sobre se a qualidade tinha sido verificada, descobriu que a taxa de falha de mudanças tinha subido quase ao mesmo ritmo que a frequência de implementação, compensando inteiramente o ganho aparente uma vez que a métrica combinada de estabilidade foi realmente examinada. O reporte revisto da empresa agora apresenta a frequência de implementação e a taxa de falha de mudanças em conjunto explicitamente sempre que são feitas afirmações de produtividade assistida por IA, evitando a afirmação anterior, quase pública, e enganadora.

**Governo.** Um departamento de TI de um governo estadual a pilotar assistência de codificação de IA para um subconjunto das suas equipas de engenharia descobriu que a produção bruta de código por engenheiro tinha aumentado substancialmente, uma cifra inicialmente citada favoravelmente numa revisão interna do piloto. Uma análise mais próxima, motivada pela orientação deste livro a ser incorporada no enquadramento de avaliação do departamento, examinou especificamente a taxa de defeitos escapados para trabalho assistido por IA versus não assistido e encontrou uma taxa modestamente elevada de defeitos na coorte assistida por IA, concentrada no tratamento de casos limite para circunstâncias invulgares de cidadão a que as ferramentas de IA não tinham sido expostas durante o treino. Esta descoberta não parou o piloto mas levou a um aumento específico e direcionado no rigor de revisão para mudanças assistidas por IA que tocassem lógica de casos limite de elegibilidade, abordando o risco real que a métrica bruta de produção sozinha nunca teria revelado.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de conduzir esta auditoria proativamente é evitar um embaraço público ou ao nível do conselho de administração por reportar uma métrica que se revela, sob escrutínio, não ter medido nada real, exatamente o cenário que o exemplo da empresa de tecnologia financeira acima quase produziu. Uma organização que se antecipa a esta mudança mantém credibilidade junto das suas partes interessadas; uma que é apanhada a reportar uma métrica oca paga um custo reputacional real e largamente evitável.

O custo total de propriedade é o esforço analítico para auditar o conjunto existente de métricas, apertar salvaguardas, e atualizar a documentação de governação, um investimento único e moderado relativamente ao risco contínuo de continuar a reportar métricas que silenciosamente deixaram de medir o que afirmam medir. Este custo também é recorrente a um nível mais baixo, já que esta mudança é contínua, não um evento único, e a reauditoria periódica à medida que as ferramentas e os padrões de adoção continuam a evoluir é um acrescento razoável e permanente a uma cadência de governação de métricas.

## Antipadrões e armadilhas

- **Continuar a reportar métricas de atividade da era pré-IA sem mudança e acriticamente:** arrisca celebrar uma métrica que silenciosamente deixou de se correlacionar com valor real.
- **Reportar aumentos de frequência de implementação ou volume de produção sem a salvaguarda combinada de estabilidade:** repete o alerta do tema 2.10 com apostas significativamente mais altas sob desenvolvimento assistido por IA.
- **Assumir que o código gerado por IA carrega o mesmo perfil de defeitos do que o código escrito por humanos sem verificar:** uma suposição não testada que poderia estar ativamente errada.
- **Deixar a profundidade de revisão corroer-se silenciosamente sob volume aumentado de código gerado por IA:** o risco de carimbo automático do tema 2.9, intensificado.
- **Tratar esta mudança como um ajuste único em vez de uma preocupação contínua:** as ferramentas e os seus padrões de adoção continuam a evoluir, e a prática de medição precisa de acompanhar.
- **Comparar contra padrões de referência da indústria sem compreender se esses padrões se moveram eles próprios sob a mesma pressão:** arrisca uma falsa sensação de desempenho relativo.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas da era pré-IA são reportadas sem mudança, sem consciência de que a adoção de IA pode ter afetado a sua validade.
- **Nível 2, Desenvolver:** Existe alguma consciência da mudança, mas nenhuma auditoria sistemática do conjunto existente de métricas foi conduzida.
- **Nível 3, Padronizar:** Foi conduzida uma auditoria completa do conjunto de métricas, com salvaguardas apertadas e métricas documentadas como afetadas ou resilientes, em toda a organização.
- **Nível 4, Gerir:** Os defeitos e resultados de qualidade são ativamente etiquetados e rastreados por nível de assistência de IA para testar, não assumir, que as relações históricas de qualidade da organização ainda se mantêm.
- **Nível 5, Orquestrar:** A organização tem uma prática madura e contínua de reexaminar as suas métricas à medida que as ferramentas de IA e os padrões de adoção continuam a evoluir, e consegue apontar para decisões específicas de governação tomadas proativamente em resposta a esta mudança em vez de reativamente depois de um problema ter emergido.

## Ideias para debate

1. Qual das nossas métricas atuais mais lisonjearia uma equipa a usar assistência de IA intensivamente mas a produzir não mais valor real?
2. A nossa frequência de implementação subiu desde a adoção de IA, e a taxa de falha de mudanças moveu-se com ela?
3. Etiquetamos os resultados de qualidade por nível de assistência de IA, e o que esses dados mostrariam?
4. A nossa capacidade de revisão está a acompanhar algum aumento no volume de código gerado por IA?
5. Contra que padrão de referência da indústria nos comparamos atualmente, e ele próprio se moveu sob esta pressão?

## Principais conclusões

- A IA generativa é uma **mudança de paradigma no que várias métricas existentes medem**, não uma mudança incremental de ferramentas; algumas métricas deixaram silenciosamente de significar o que costumavam significar.
- **As métricas de atividade e produção bruta são as mais expostas**; as métricas de resultado (Parte 5) são comparativamente resilientes.
- **Aperte as salvaguardas, especialmente a taxa de falha de mudanças**, em proporção à adoção de desenvolvimento assistido por IA.
- **Teste, não assuma, se o código gerado por IA carrega um perfil diferente de defeitos** do que o código escrito por humanos, usando dados etiquetados de defeitos escapados.
- Trate isto como uma **preocupação contínua, não única, de governação** (tema 1.4), já que as ferramentas e os seus padrões de adoção continuam a evoluir.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- Investigação da GitHub sobre programação em par com IA e produtividade de programadores.
- O programa DevOps Research and Assessment da Google Cloud, [dora.dev](https://dora.dev/).
- *The Tyranny of Metrics*, de Jerry Z. Muller.
