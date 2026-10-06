# 2.2 Itens de fluxo: funcionalidades, defeitos, riscos, e dívida

## Visão geral e motivação

Um **item de fluxo** é a unidade de trabalho do Flow Framework, e todo o item de fluxo pertence a exatamente um de quatro tipos: **funcionalidades**, novo valor ou capacidade de negócio entregue a um cliente; **defeitos**, correções de qualidade para bugs encontrados por utilizadores ou testes; **riscos**, trabalho de segurança, conformidade, privacidade, e governação que protege o negócio; e **dívida**, **[dívida técnica](https://en.wikipedia.org/wiki/Technical_debt)**, melhoria arquitetural, e trabalho de infraestrutura que permite velocidade futura. O tema 2.1 introduziu a estrutura a que estas quatro categorias pertencem; este tema aprofunda-se na própria taxonomia, porque as categorias só entregam valor se uma equipa classificar o seu trabalho nelas honesta e consistentemente.

A propriedade que define os itens de fluxo é que a alocação entre os quatro tipos é um **jogo de soma zero**: existe uma quantidade fixa de capacidade de engenharia em qualquer período dado, e cada hora gasta numa funcionalidade é uma hora não gasta em dívida, risco, ou trabalho de defeito. Isto não é um facto novo sobre a entrega de software, todo o líder de engenharia já sabe que a capacidade é finita, mas a maioria das organizações não tem uma forma consistente e honesta de ver a divisão real. A velocidade de sprint conta pontos de história independentemente do tipo; um backlog esgotado parece idêntico quer o trabalho por trás dele fosse um novo fluxo de pagamento ou três meses de correção de segurança pouco glamorosa. Os itens de fluxo existem especificamente para tornar essa divisão invisível visível.

Para equipas grandes, esta visibilidade muda a natureza de uma conversa de alocação de recursos. Em vez de um líder de engenharia fazer um argumento não quantificado de que "precisamos de mais tempo para dívida técnica," a classificação de itens de fluxo produz um número real, a dívida consumiu 30% da capacidade do último trimestre, que pode ser discutido, defendido, e ajustado deliberadamente com interessados de negócio. As organizações empresariais que executam muitas linhas de produto concorrentes e as agências governamentais que equilibram nova funcionalidade voltada para o cidadão contra o risco de sistemas legados dependem ambas deste tipo de troca defensável e quantificada muito mais do que uma sensação privada e informal de que "estamos a gastar demasiado tempo em manutenção."

## Princípios-chave

- **Todo o item de fluxo pertence a exatamente um tipo.** Forçar uma classificação única, em vez de permitir uma mista ou ambígua, é o que torna a taxonomia utilizável para relato agregado.
- **A alocação é soma zero, não aditiva.** Mais capacidade para funcionalidades é necessariamente menos capacidade para defeitos, risco, e dívida no mesmo período.
- **Não há nenhuma distribuição universalmente saudável.** Um produto jovem numa fase de crescimento deve legitimamente inclinar-se para funcionalidades; um sistema maduro a carregar risco técnico real deve legitimamente inclinar-se para trabalho de dívida e risco.
- **O trabalho de dívida e risco é cronicamente sub-reportado sem esta disciplina.** Tende a acontecer silenciosamente, absorvido em "tarefas de engenharia" genéricas, até a classificação de itens de fluxo o forçar a descoberto.
- **A qualidade da classificação determina todo o valor da taxonomia.** Uma taxonomia aplicada inconsistentemente ou manipulada depois do facto produz números que ativamente induzem em erro em vez de informar.

## Recomendações

### Classificar cada item na admissão, usando uma definição escrita para cada tipo

Concorde numa definição concisa e escrita para o que conta como uma funcionalidade, um defeito, um risco, e dívida no seu contexto específico, e exija que cada nova peça de trabalho seja classificada contra essa definição no momento em que entra na cadeia de valor, não depois de ser concluída. Uma definição acordada antecipadamente resiste à tentação de classificar retroativamente com base em como uma peça de trabalho acabou por parecer, que é precisamente o risco de manipulação que este tema nomeia diretamente abaixo.

### Reportar a distribuição de fluxo como uma tendência, não um único instantâneo

A distribuição de um único período diz-lhe menos do que a tendência através de vários períodos. Uma deriva constante em direção a um tipo de item, funcionalidades a subir enquanto a dívida encolhe silenciosamente trimestre após trimestre, é um sinal muito mais forte do que o número de qualquer período único, e é normalmente o padrão que vale a pena levantar aos interessados antes de se tornar uma crise em vez de depois.

### Definir uma distribuição alvo deliberada com interessados de negócio, não apenas engenharia

Decida, juntamente com a liderança de produto e de negócio, como é uma distribuição saudável para a fase atual da sua cadeia de valor específica, e revisite esse alvo periodicamente em vez de o deixar derivar por predefinição. Um produto jovem em fase de crescimento e um sistema maduro em fase de estabilidade têm alvos saudáveis legitimamente diferentes, e o próprio alvo deve ser uma decisão de negócio negociada, não algo que a engenharia decide silenciosamente sozinha.

### Verificar de forma cruzada a classificação de itens de fluxo contra evidência independente

Compare periodicamente a sua distribuição de fluxo contra métricas que não dependem de autoclassificação: taxa de defeitos escapados (tema 5.1), medição de dívida técnica (tema 4.5), e métricas de gestão de vulnerabilidades (tema 6.4). Se os defeitos ou vulnerabilidades estiverem a subir enquanto as parcelas de item de fluxo "defeitos" e "risco" se mantêm estáveis ou encolhem, essa incompatibilidade é o sinal mais claro disponível de que a classificação derivou da realidade.

### Vigiar especificamente o padrão de fábrica de funcionalidades

Quando a distribuição de fluxo mostra as funcionalidades a absorver consistentemente quase toda a capacidade, trimestre após trimestre, com o trabalho de dívida e risco nunca a subir acima de uma parcela simbólica, esse padrão (por vezes chamado uma "fábrica de funcionalidades") normalmente significa que a dívida e o risco estão a ser privados de capacidade, não que o sistema genuinamente não precisa de manutenção. Este padrão é confortável a curto prazo e caro mais tarde, aparecendo eventualmente como uma crise de qualidade ou segurança que chega sem aviso no gráfico de distribuição de fluxo, porque a acumulação subjacente nunca foi visível.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Sem classificação formal (backlog genérico) | Nenhuma sobrecarga de processo | O trabalho de dívida, risco, e defeito permanece invisível; difícil de defender decisões de alocação de recursos |
| Classificação de item de fluxo de quatro tipos | Torna a alocação de capacidade visível e negociável com interessados | Exige disciplina no momento de admissão e uma definição escrita e acordada por tipo |
| Classificação mais granular (muitos subtipos) | Mais detalhe diagnóstico | Mais esforço de classificação; mais números para explicar aos interessados |
| Classificação retroativa | Mais fácil de aplicar, sem mudança de processo antecipada | Altamente exposta à manipulação; a classificação deriva para o que quer que pareça melhor |

A tensão central é **disciplina de classificação versus sobrecarga de processo**. Uma taxonomia de quatro tipos é deliberadamente grosseira, suficientemente grosseira para que classificar um item demore segundos, não um debate, mas essa grosseria só se sustenta se a disciplina de classificar na admissão, contra uma definição escrita, for genuinamente mantida. Resolva a tensão mantendo a taxonomia exatamente tão simples, quatro tipos, nada mais, e investindo qualquer rigor extra no passo de auditoria (verificação cruzada contra evidência independente) em vez de num esquema de classificação mais elaborado que erode sob carga de trabalho real.

## Perguntas para debater com a sua equipa

1. **Se classificássemos tudo o que a nossa equipa entregou no último trimestre, como seria a divisão real entre funcionalidades, defeitos, risco, e dívida, e isso surpreenderia os nossos interessados?** A maioria das equipas nunca fez este exercício honestamente. Tente-o com dados reais antes de assumir que já sabe a resposta.

2. **Temos uma definição escrita e acordada para o que conta como uma funcionalidade versus dívida versus risco no nosso contexto específico, ou a classificação depende de quem quer que esteja a etiquetar o ticket?** Uma definição informal e inconsistente produz números que parecem precisos mas não são na verdade comparáveis período após período.

3. **A nossa distribuição de fluxo alguma vez derivou constantemente em direção a um tipo de item sem que ninguém decidisse isso deliberadamente?** Uma deriva lenta é fácil de perder período a período mas óbvia uma vez traçada como tendência. Extraia vários períodos de dados, se os tiver, e procure honestamente este padrão.

4. **Como seria uma distribuição de fluxo saudável para a fase atual do nosso produto, e acordámos realmente nesse alvo com interessados de negócio?** A maioria das organizações nunca tornou este alvo explícito, o que significa que não há base partilhada para notar quando a distribuição real deriva dele.

5. **A nossa distribuição de fluxo corresponde a evidência independente, como a taxa de defeitos escapados ou contagens de vulnerabilidades abertas, ou há uma incompatibilidade que vale a pena investigar?** Uma incompatibilidade aqui é o sinal mais claro disponível de que a classificação derivou do que o trabalho realmente é.

6. **Alguém na nossa equipa poderia silenciosamente reetiquetar um item de dívida ou risco como uma funcionalidade sob pressão de entrega, e notaríamos atualmente se o fizesse?** Este é o risco de manipulação central do tema declarado diretamente. Discuta se o seu processo atual realmente apanharia isto, não apenas se alguém o faria deliberadamente.

## Perspetiva setorial

**Startup.** A classificação formal parece muitas vezes sobrecarga quando toda a equipa já sabe no que cada pessoa está a trabalhar. O mínimo útil a esta escala é simplesmente nomear as quatro categorias em voz alta durante o planeamento, para que o trabalho de dívida e risco não seja silenciosamente despriorizado cada vez que um prazo de funcionalidade cria pressão, um padrão que se agrava mal uma vez que tanto a base de código como a equipa crescem.

**Pequena empresa.** Um único campo personalizado ou etiqueta na sua ferramenta de rastreio existente é suficiente para capturar o tipo de item de fluxo sem nenhum investimento dedicado em ferramentas. A disciplina de classificar consistentemente na admissão importa muito mais do que qualquer sofisticação de ferramentas.

**Empresa.** A classificação de itens de fluxo é onde esta estrutura ganha o seu valor à escala, porque uma grande organização a executar muitas cadeias de valor concorrentes não tem outra forma fiável e agregada de ver como a capacidade está realmente dividida entre funcionalidades, defeitos, risco, e dívida. Invista em classificação integrada em ferramentas e verificações cruzadas periódicas contra evidência independente; a classificação manual e ad hoc não sobrevive à escala organizacional real.

**Governo.** A distribuição de fluxo dá a um líder de tecnologia do setor público uma resposta defensável e quantificada quando lhe perguntam porque não estão a ser entregues mais novas funcionalidades voltadas para o cidadão, quando a resposta honesta é que o fardo de risco e dívida de um sistema legado está a consumir uma parcela genuína e justificável de capacidade. Tornar essa troca explícita e negociada, em vez de absorvida silenciosamente, tende a construir mais confiança com órgãos de supervisão do que um apelo não quantificado à "necessidade técnica."

## Exemplos

**Empresa.** A equipa de plataforma de comércio eletrónico de uma grande empresa retalhista acreditava, com base na velocidade de sprint, que estava a entregar um output constante de funcionalidades. Um primeiro exercício honesto de classificação de itens de fluxo encontrou que as "funcionalidades" na verdade só compunham 40% do trabalho concluído, com a dívida, muita dela ligada a um sistema de pagamento envelhecido, a consumir quase um terço da capacidade sem nunca ter sido nomeada como tal em nenhum relatório anterior. Apresentar esta divisão à liderança de produto, ao lado de uma taxa crescente de defeitos escapados que corroborava o fardo de dívida, garantiu um orçamento dedicado de modernização que a equipa tinha pedido sem sucesso durante dois anos usando apenas argumentos qualitativos.

**Governo.** A equipa de licenciamento digital de uma agência estatal de veículos motorizados classificou o seu backlog pela primeira vez depois de uma interrupção pública ter atraído escrutínio para a estabilidade do sistema subjacente. O exercício revelou que o trabalho de "risco," principalmente correção de segurança que tinha sido repetidamente despriorizada em favor de funcionalidades visíveis voltadas para o cidadão, tinha encolhido para menos de 5% da capacidade ao longo do ano anterior, um padrão que nunca tinha sido visível no relato padrão da equipa. A liderança da agência usou a descoberta para mandatar uma alocação mínima de trabalho de risco daí em diante, apoiada pelos dados de distribuição de fluxo em vez de apenas uma declaração geral de política.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da classificação de itens de fluxo é uma base defensável e quantificada para decisões de alocação de recursos que anteriormente eram argumentadas qualitativamente e muitas vezes perdidas para o trabalho que fosse mais visível aos interessados. O exemplo retalhista acima, garantindo um orçamento de modernização com dados reais de capacidade em vez de um apelo geral, é o padrão que esta disciplina produz fiavelmente: um número específico é muito mais difícil de descartar do que uma impressão geral de que "precisamos de mais tempo para manutenção."

O custo total de propriedade é baixo uma vez acordadas a taxonomia e as suas definições: a classificação acrescenta segundos à admissão, não um fardo de processo significativo, e a integração de ferramentas necessária para a rastrear é normalmente um único campo personalizado ou etiqueta. O custo real e contínuo é a disciplina de sustentar uma classificação honesta sob pressão de entrega, e é por isso que a verificação cruzada periódica contra evidência independente importa tanto quanto a adoção inicial.

## Antipadrões e armadilhas

- **Classificar o trabalho retroativamente, depois de o resultado ser conhecido:** o vetor de manipulação no centro deste tema. Sob pressão de entrega, uma equipa pode silenciosamente etiquetar trabalho de dívida ou risco como uma funcionalidade depois do facto, ou arredondar um item ambíguo em direção a qualquer tipo que pareça melhor no gráfico de distribuição, sem que nenhuma decisão individual pareça alguma vez desonesta por si só. A salvaguarda é a classificação no momento de admissão contra uma definição escrita, combinada com auditorias periódicas que comparam a distribuição de fluxo contra evidência independente como a taxa de defeitos escapados (tema 5.1) e métricas de vulnerabilidade (tema 6.4), a mesma disciplina de auditoria-contra-evidência-independente que o tema 1.2 pede para cada métrica neste livro.
- **Deixar as funcionalidades absorver consistentemente quase toda a capacidade (o padrão de fábrica de funcionalidades):** priva silenciosamente o trabalho de dívida e risco até emergir como uma crise.
- **Tratar a distribuição de um único período como o quadro completo:** perde a deriva lenta e cumulativa que uma visão de tendência revela claramente.
- **Definir uma distribuição alvo sem interessados de negócio:** perde o principal valor da estrutura, um entendimento partilhado e negociado da troca.
- **Usar uma definição inconsistente ou não documentada por tipo:** produz números que parecem precisos mas não são na verdade comparáveis ao longo do tempo.
- **Sobrengenharizar a taxonomia com muitos subtipos:** acrescenta sobrecarga de classificação que erode a disciplina sem acrescentar insight proporcional.

## Modelo de maturidade

- **Nível 1, Iniciar:** O trabalho é rastreado genericamente, sem classificação de itens de fluxo; o trabalho de dívida e risco é invisível no relato.
- **Nível 2, Desenvolver:** Algumas equipas classificam itens de fluxo informalmente, mas as definições são inconsistentes e a classificação acontece muitas vezes retroativamente.
- **Nível 3, Padronizar:** Todas as equipas classificam na admissão contra uma definição partilhada e escrita, e a distribuição de fluxo é rastreada como tendência.
- **Nível 4, Gerir:** A distribuição de fluxo é verificada de forma cruzada periodicamente contra evidência independente, e as distribuições alvo são definidas deliberadamente com interessados de negócio.
- **Nível 5, Orquestrar:** Os dados de itens de fluxo informam diretamente decisões de alocação de recursos e investimento em toda a organização, e a liderança consegue apontar para decisões específicas tomadas porque a classificação tornou explícita uma troca previamente invisível.

## Ideias para debate

1. O que mostraria uma divisão honesta de itens de fluxo do trabalho do último trimestre, e isso surpreenderia alguém?
2. Temos uma definição escrita para cada um dos quatro tipos de item de fluxo, ou a classificação depende de quem está a etiquetar o trabalho?
3. A nossa distribuição de fluxo alguma vez derivou em direção a um tipo de item sem uma decisão deliberada por trás?
4. Que evidência independente poderíamos usar para verificar de forma cruzada a nossa distribuição de fluxo hoje?

## Principais conclusões

- Um **item de fluxo** pertence a exatamente um de quatro tipos, funcionalidades, defeitos, riscos, ou dívida, e a alocação de capacidade entre eles é **soma zero**.
- Não há **nenhuma distribuição universalmente saudável**; a mistura certa depende da fase de um produto e deve ser um alvo deliberado e negociado com interessados de negócio.
- O vetor de manipulação central do tema é a **classificação retroativa**, reetiquetar silenciosamente trabalho de dívida ou risco como uma funcionalidade depois do facto; a salvaguarda é a classificação no momento de admissão mais auditorias periódicas contra evidência independente.
- Vigie especificamente o **padrão de fábrica de funcionalidades**, funcionalidades a absorver consistentemente quase toda a capacidade, que priva o trabalho de dívida e risco até emergir como uma crise.
- A distribuição de fluxo é mais valiosa como uma **tendência**, e o seu maior retorno vem de a partilhar diretamente com interessados de negócio.

## Referências e leituras adicionais

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, e George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
