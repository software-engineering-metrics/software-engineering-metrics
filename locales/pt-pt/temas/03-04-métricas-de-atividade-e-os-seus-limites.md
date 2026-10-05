# 3.4 Métricas de atividade e os seus limites

## Visão geral e motivação

A **Atividade**, o A em SPACE (capítulo 3.1), conta o volume de trabalho de engenharia observável a partir da telemetria do sistema: commits, pull requests abertos, linhas de código mudadas, comentários de revisão de código deixados. É a dimensão SPACE mais fácil de medir, porque cada um destes eventos já é registado automaticamente por ferramentas que as equipas de engenharia usam diariamente, e essa facilidade de medição é precisamente o que torna esta dimensão a mais perigosa de sobreponderar. A atividade é um sinal real e legítimo quando usada com cuidado. Usada como um proxy isolado de produtividade, é a família de métricas única mais manipulada e mais enganadora em toda a história da medição de **[engenharia de software](https://en.wikipedia.org/wiki/Software_engineering)**.

O problema central é que a atividade mede o movimento, não o valor. Uma contagem de commits não distingue entre um commit que resolveu um problema difícil elegantemente e um commit que dividiu uma mudança significativa em cinco para parecer mais produtivo (a manipulação de substituição do capítulo 1.2, aplicada diretamente a esta família de métricas). As linhas de código mudadas recompensam a verbosidade acima da competência muito mais valiosa de eliminar código desnecessário. Um engenheiro a passar um dia inteiro em pensamento profundo e ininterrupto antes de escrever dez linhas elegantes e bem testadas parece menos "ativo" por estas métricas do que um a cometer mudanças superficiais e não revistas a cada vinte minutos, mesmo que o primeiro esteja muito frequentemente a produzir muito mais valor real.

Para equipas grandes, a tentação de usar métricas de atividade para avaliação individual é constante e bem documentada, porque a atividade é fácil de atribuir a uma pessoa específica e fácil de calcular automaticamente, ao contrário dos sinais mais difíceis e mais honestos nas outras dimensões SPACE. Este capítulo existe especificamente para nomear essa tentação e dar às equipas linguagem e evidência para lhe resistir, porque uma vez que uma organização começa a classificar individualmente engenheiros por contagem de commits ou linhas de código, o dano à colaboração, qualidade de código, e moral está bem documentado e é difícil de reverter.

## Princípios-chave

- **A atividade mede o movimento, não o valor.** É um sinal contextual legítimo, nunca um proxy isolado de produtividade.
- **Esta é a família de métricas única mais historicamente mal utilizada na medição de engenharia de software.** Trate essa história como um aviso, não uma coincidência.
- **A classificação individual de atividade é quase sempre prejudicial.** Danifica a colaboração, recompensa trabalho de enchimento visível, e convida à manipulação quase imediatamente.
- **Os dados de atividade são mais úteis em agregado, como contexto para outras dimensões,** não como um sinal independente sobre qualquer pessoa ou equipa.
- **O trabalho profundo e valioso parece muitas vezes silencioso num painel de controlo de atividade.** A família de métricas é estruturalmente enviesada contra precisamente o tipo de pensamento que produz os melhores resultados de engenharia.

## Recomendações

### Nunca classificar ou avaliar indivíduos por contagens brutas de atividade

Esta é a regra única mais difícil e mais importante neste capítulo. A contagem de commits, linhas de código, e contagem de pull requests nunca deveriam aparecer numa avaliação de desempenho individual, uma classificação comparativa, ou qualquer contexto onde a compensação, a posição, ou a reputação de um engenheiro depende do número. Isto segue diretamente o princípio de exposição a incentivos do capítulo 1.2: no momento em que a atividade se torna uma métrica individual incentivada, a manipulação segue-se quase imediatamente, e o comportamento resultante, inchar commits, dividir mudanças trivialmente, evitar trabalho profundo e pouco glamoroso que produz poucos eventos visíveis, prejudica ativamente a organização.

### Usar os dados de atividade em agregado, como contexto, não como um veredito

Os dados de atividade tornam-se genuinamente úteis quando agregados ao nível da equipa e lidos ao lado das outras dimensões SPACE: uma queda acentuada na atividade de commits ao nível da equipa que coincide com uma subida na satisfação pode indicar que a equipa finalmente teve espaço para pensar profundamente e pagar dívida técnica, um padrão positivo, não negativo. Lida isoladamente, a mesma queda parece alarmante. O contexto das outras dimensões é o que torna os dados de atividade interpretáveis em vez de enganadores.

### Preferir sinais de atividade próximos de qualidade acima do volume bruto

Onde os dados de atividade são de todo úteis, prefira sinais ajustados pela qualidade acima de contagens brutas: tamanho do pull request relativo à profundidade de revisão (capítulo 2.9), ou o rácio entre código novo e código removido, que pode revelar se uma equipa está a acumular complexidade ou a simplificar ativamente. Estes sinais ajustados continuam a ser dados da dimensão de atividade mas resistem à manipulação mais crua que as contagens brutas convidam.

### Vigiar especificamente o padrão de manipulação de substituição em dados de atividade

A forma mais comum de as métricas de atividade serem manipuladas é precisamente o padrão de substituição do capítulo 1.2: dividir trabalho genuinamente significativo em muitos eventos pequenos e triviais para inflacionar uma contagem. Se a frequência de commits ou pull requests sobe enquanto a complexidade ou o tamanho subjacente das mudanças cai acentuadamente, investigue antes de creditar uma melhoria real de produtividade, usando a mesma disciplina diagnóstica que o capítulo 2.10 recomenda para a frequência de implementação.

### Nomear e desencorajar explicitamente o teatro de atividade

O **teatro de atividade** é trabalho realizado, consciente ou inconscientemente, principalmente porque é visível e contável em vez de porque é valioso: commits pequenos e frequentes, atividade conspícua tarde à noite, ou ocupação visível em canais partilhados. Nomear este padrão explicitamente à sua equipa, e ser transparente que a liderança não usa a atividade bruta para julgar a contribuição, remove muito do incentivo para que ocorra, antes de mais.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Classificação individual de atividade | Simples, fácil de calcular, parece diretamente acionável | Manipulada quase imediatamente; danifica a colaboração e a moral; mede a coisa errada |
| Nenhuma medição de atividade de todo | Evita inteiramente o risco de uso indevido | Perde sinal contextual genuinamente útil para deteção de padrões ao nível da equipa |
| Atividade agregada ao nível da equipa, lida em contexto | Fornece contexto útil sem risco individual | Exige disciplina para interpretar ao lado de outras dimensões em vez de isoladamente |
| Sinais de atividade ajustados pela qualidade | Resiste à manipulação mais crua de contagem bruta | Mais complexo de calcular e explicar do que uma simples contagem |

A tensão central é **utilidade versus risco de uso indevido**. Os dados de atividade, lidos cuidadosamente em agregado e em contexto, são genuinamente úteis para detetar padrões como ritmo insustentável ou uma equipa a encontrar silenciosamente espaço para abordar dívida técnica. Os mesmos dados, usados como um boletim individual, são quase uniformemente prejudiciais. Resolva a tensão não evitando inteiramente os dados de atividade mas construindo uma regra organizacional rígida contra o uso individual, enquanto permite e até encoraja o uso ponderado e contextualizado ao nível da equipa.

## Perguntas para debater com a sua equipa

1. **Alguém na nossa organização alguma vez foi avaliado, formal ou informalmente, usando uma contagem bruta de atividade como commits ou linhas de código?** Pergunte isto diretamente e esteja preparado para uma resposta desconfortável mas necessária; este uso indevido acontece muitas vezes silenciosamente, através de um comentário informal de um gestor, sem nunca se tornar política oficial.

2. **Como seria o teatro de atividade especificamente na nossa equipa, e vimos sinais dele?** Nomear a forma específica e plausível que este padrão poderia tomar na sua própria equipa torna muito mais fácil reconhecê-lo se começar a acontecer.

3. **Quando os nossos dados de atividade ao nível da equipa se movem, interpretamo-los ao lado das outras dimensões SPACE, ou isoladamente?** Uma queda na atividade lida isoladamente parece preocupante; a mesma queda lida ao lado de uma melhoria de satisfação ou desempenho pode parecer um padrão genuinamente positivo. Verifique a sua prática real de revisão contra esta distinção.

4. **Alguma vez vimos uma subida na frequência de commits ou pull requests acompanhada por um tamanho médio de mudança a encolher, sugerindo divisão trivial em vez de ganho genuíno de produtividade?** Extraia dados reais e verifique este padrão específico de manipulação de substituição.

5. **Como falamos atualmente sobre "quem está a contribuir mais" na nossa equipa, e essa conversa inclina-se implicitamente para dados de atividade mesmo sem uma métrica formal?** O viés informal e não medido em direção à ocupação visível pode moldar a perceção e a recompensa mesmo sem uma política explícita baseada em atividade; revele isto honestamente.

6. **Como é o trabalho genuinamente valioso mas silencioso, pensamento profundo, desenho cuidadoso, mentoria, na nossa equipa, e como garantimos que é reconhecido apesar de gerar poucos dados visíveis de atividade?** Esta pergunta é o complemento positivo das anteriores: nomear como é o bom trabalho silencioso ajuda a protegê-lo de ser negligenciado em favor de trabalho mais ruidoso e mais contável.

## Perspetiva setorial

**Startup.** Com uma equipa pequena e intimamente colaborativa, os dados de atividade são normalmente visíveis sem precisar de nenhum painel de controlo, e o risco de classificação individual contra o qual este capítulo avisa é menos provável simplesmente porque toda a gente já sabe no que todos os outros estão a trabalhar. O risco é antes um fundador a favorecer inconscientemente comportamento visivelmente "ocupado" ao tomar decisões iniciais de contratação ou capital.

**Pequena empresa.** Os dados de atividade das suas ferramentas existentes são bons para dar uma vista de olhos para um sentido geral do rendimento da equipa, mas resista a usá-los para comparar contribuidores individuais diretamente; o valor real de uma equipa pequena concentra-se muitas vezes em algumas pessoas a fazer trabalho silencioso e de alta alavancagem que uma vista de contagem de commits subvalorizaria sistematicamente.

**Empresa.** É aqui que a tentação de classificação individual é mais forte e mais prejudicial, porque os dados de atividade são o sinal mais fácil de extrair para um processo de avaliação de desempenho que abrange milhares de engenheiros, e a pressão para encontrar *alguma* entrada quantificável é real. Construa uma política explícita, comunicada, e aplicada contra a classificação individual de atividade, e audite as práticas de avaliação de desempenho periodicamente para confirmar que a política está realmente a ser seguida na prática, não apenas declarada.

**Governo.** As métricas de atividade podem ser tentadoras de citar num relatório público como evidência de produtividade ("dez mil commits este ano"), mas este tipo de manchete é quase sem sentido e pode convidar precisamente o escrutínio errado assim que um revisor conhecedor assinalar que a atividade bruta não diz nada sobre resultados. Reporte dados de resultado e desempenho (capítulo 3.3) em vez disso, e evite contagens de atividade em qualquer comunicação voltada para o exterior.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de software tinha, sem política formal, começado a referenciar informalmente dados de frequência de commits individuais em discussões de promoção. Uma revisão interna, impulsionada por um projeto não relacionado de análise de desgaste, descobriu que os engenheiros a trabalhar nos sistemas mais complexos e de maior valor da empresa, exigindo longos períodos de trabalho cuidadoso de desenho antes de qualquer código ser escrito, tinham sistematicamente contagens de commits mais baixas do que engenheiros em sistemas mais simples e desenvolvidos mais incrementalmente, e estavam a ser subtilmente desfavorecidos em conversas de promoção como resultado. A liderança emitiu uma política explícita e comunicada proibindo referências a contagem de atividade em discussões de desempenho e promoção, e mudou a evidência de promoção para a abordagem de desempenho de múltiplos sinais do capítulo 3.3.

**Governo.** Uma agência de serviços digitais, sob pressão para demonstrar produtividade a um comité legislativo de supervisão, propôs inicialmente reportar o total de commits e linhas de código escritas através do seu programa de engenharia como evidência de valor entregue. Um conselheiro técnico interno contrariou, notando corretamente que esta formulação convidava precisamente o escrutínio errado, já que um membro do comité tecnicamente literado poderia facilmente assinalar que o volume bruto de código não diz nada sobre se o código funcionou ou importou. O relatório revisto da agência usou em vez disso métricas de resultado (capítulo 5.3): redução em erros reportados por cidadãos e aumento na conclusão bem-sucedida de autoatendimento, que se sustentou muito melhor sob o questionamento do comité do que os números de atividade teriam feito.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de acertar nas métricas de atividade, usando-as contextualmente em vez de como boletins individuais, é o dano evitado: as organizações que classificam individualmente engenheiros por atividade veem fiavelmente comportamento de manipulação, colaboração reduzida (engenheiros a proteger o seu próprio output visível em vez de ajudar um colega de equipa), e um viés sistemático contra o trabalho profundo e de alta alavancagem que muitas vezes produz mais valor enquanto gera menos atividade visível. Reverter esse dano, uma vez entrincheirado numa cultura de avaliação de desempenho, é genuinamente difícil e lento.

O custo total de evitar esta armadilha é maioritariamente disciplina organizacional: uma política explícita, aplicada consistentemente, contra a classificação individual de atividade, e um compromisso de investir na medição de desempenho mais difícil e mais honesta descrita no capítulo 3.3 em vez disso. Essa disciplina custa menos do que as decisões de promoção mal direcionadas, a colaboração danificada, e o comportamento de manipulação que as métricas individuais de atividade produzem fiavelmente ao longo do tempo.

## Antipadrões e armadilhas

- **Classificação individual por contagem de commits ou linhas de código:** o uso indevido único mais prejudicial e mais historicamente comum em todo este livro.
- **Teatro de atividade:** trabalho realizado principalmente para visibilidade em vez de valor, uma resposta inteiramente previsível à avaliação baseada em atividade.
- **Interpretar uma queda de atividade ao nível da equipa isoladamente, sem verificar as outras dimensões SPACE:** pode confundir um padrão genuinamente positivo com um preocupante.
- **Citar contagens brutas de atividade em comunicação externa ou voltada para a liderança:** convida precisamente o escrutínio errado e diz pouco sobre o valor real.
- **Subvalorizar sistematicamente o trabalho profundo e cuidadoso que gera poucos eventos visíveis:** um viés estrutural incorporado em toda esta família de métricas.
- **Viés informal e não politizado de atividade a infiltrar-se em conversas de promoção ou avaliação:** prejudicial mesmo sem uma métrica oficial por trás.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas de atividade são usadas, formal ou informalmente, para avaliar ou classificar indivíduos, sem consciência do risco.
- **Nível 2, Desenvolver:** Existe alguma consciência do risco, mas nenhuma política explícita impede que os dados de atividade influenciem informalmente avaliações ou discussões de promoção.
- **Nível 3, Padronizar:** Uma política explícita e comunicada em toda a organização proíbe a classificação individual de atividade, e os dados de atividade são usados apenas em contexto agregado ao nível da equipa.
- **Nível 4, Gerir:** As práticas de avaliação de desempenho e promoção são auditadas periodicamente para confirmar que a política é seguida na prática, e sinais de atividade ajustados pela qualidade substituem contagens brutas onde os dados de atividade são usados de todo.
- **Nível 5, Orquestrar:** A organização mudou demonstravelmente a cultura de avaliação para longe das métricas de atividade em direção à abordagem de desempenho de múltiplos sinais do capítulo 3.3, com melhoria visível na colaboração e comportamento reduzido de manipulação como evidência de que a mudança funcionou.

## Ideias para debate

1. Alguém aqui alguma vez se sentiu avaliado, mesmo informalmente, por quão "ocupada" a sua atividade parecia?
2. Como seria o teatro de atividade especificamente na nossa equipa?
3. Temos uma política explícita e escrita contra a classificação individual de atividade, e é realmente seguida?
4. Que trabalho silencioso e de alto valor na nossa equipa atualmente gera os dados de atividade menos visíveis?
5. Como redesenharíamos a nossa evidência de avaliação de desempenho para remover inteiramente as contagens de atividade?

## Principais conclusões

- A atividade mede o **movimento, não o valor**; é a família de métricas única mais historicamente mal utilizada na engenharia de software.
- **Nunca classifique ou avalie indivíduos** por contagens brutas de atividade; esta é a regra mais difícil e mais importante neste capítulo.
- Use os dados de atividade **em agregado, como contexto** para as outras dimensões SPACE, nunca como um veredito isolado.
- Vigie o **teatro de atividade** e o **padrão de manipulação de substituição** (capítulo 1.2) especificamente dentro desta família de métricas.
- O trabalho profundo e de alto valor gera muitas vezes os **dados de atividade menos visíveis**; proteja-o de ser sistematicamente subvalorizado.

## Referências e leituras adicionais

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco e Timothy Lister.
- *Deep Work: Rules for Focused Success in a Distracted World*, de Cal Newport.
- *The Tyranny of Metrics*, de Jerry Z. Muller.
