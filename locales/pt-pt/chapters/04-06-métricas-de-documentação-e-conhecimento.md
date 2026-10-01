# 4.6 Métricas de documentação e conhecimento

## Visão geral e motivação

Este capítulo encerra a Parte 4 medindo se o conhecimento necessário para manter uma base de código em segurança está realmente documentado e encontrável, não apenas se a documentação tecnicamente existe algures. O capítulo 3.5 cobriu a comunicação e colaboração como uma preocupação de experiência do programador; este capítulo cobre a mesma questão subjacente, a disponibilidade de conhecimento, do lado do código: um novo engenheiro, ou um existente a trabalhar em código pouco familiar, tem o que precisa para fazer uma mudança segura, ou esse conhecimento vive apenas nas cabeças de um número cada vez menor de pessoas com antiguidade?

O desafio de medição aqui é genuinamente difícil, mais difícil do que a maioria das outras métricas neste livro, porque a qualidade e utilidade da documentação são inerentemente mais subjetivas do que uma percentagem de cobertura ou uma pontuação de complexidade. A abordagem deste capítulo é medir proxies de utilidade em vez de existência: com que frequência a documentação é realmente acedida, com que frequência a mesma pergunta é feita repetidamente apesar de existir uma resposta documentada, e quanto tempo leva alguém pouco familiarizado com um sistema a tornar-se produtivo nele. Nenhum destes proxies é perfeito isoladamente, mas juntos dão uma imagem muito mais honesta do que contar o número de páginas wiki ou ficheiros README que uma base de código contém.

Para equipas grandes, as preocupações deste capítulo agravam-se com a antiguidade organizacional e a rotatividade de formas fáceis de subestimar até uma crise forçar a questão: um sistema mantido durante anos pelos mesmos dois engenheiros pode funcionar perfeitamente bem com quase nenhuma documentação escrita, até ambos esses engenheiros saírem no mesmo ano, altura em que a organização descobre que o conhecimento nunca foi realmente capturado em nenhum sítio durável. As organizações empresariais e governamentais, com durações de vida de sistemas tipicamente mais longas e continuidade de pessoal menos certa do que uma startup, carregam este risco mais agudamente do que a maioria.

## Princípios-chave

- **A existência de documentação não é o mesmo que a utilidade da documentação.** Meça se realmente ajuda, não apenas se está presente.
- **Perguntas repetidas apesar de respostas documentadas revelam um problema de descoberta, não um problema de esforço de documentação.** Mais conteúdo nem sempre é a correção.
- **O tempo de integração até à contribuição produtiva é um proxy forte e prático** para a saúde geral do conhecimento, ligando-se diretamente às métricas de colaboração do capítulo 3.5.
- **O conhecimento que vive apenas nas cabeças das pessoas é um risco de durabilidade,** não um estado estável e sustentável, por mais bem que funcione atualmente.
- **A documentação decai.** Uma página que era precisa há um ano pode estar agora ativamente a induzir em erro, e a própria obsolescência precisa de ser rastreada.

## Recomendações

### Rastreie o acesso e a obsolescência da documentação, não apenas a existência

Onde a sua plataforma de documentação o suporte, rastreie com que frequência as páginas são realmente vistas, e separadamente, quanto tempo passou desde que uma página foi atualizada pela última vez relativamente à frequência com que o sistema subjacente que descreve mudou (fazer referência cruzada com os dados de processamento do capítulo 4.3 é diretamente útil aqui). Uma página que descreve um sistema que mudou substancialmente desde que a página foi editada pela última vez é uma forte candidata a estar ativamente a induzir em erro em vez de meramente pouco útil, e este sinal de obsolescência merece pelo menos tanta atenção como rastrear se a documentação existe.

### Fique atento a perguntas repetidas como sinal de descoberta

Se a mesma pergunta é feita repetidamente num canal de conversa de equipa ou durante a integração, apesar de existir tecnicamente uma resposta documentada algures, esse padrão revela um problema de descoberta, a resposta não está onde as pessoas naturalmente procuram, em vez de um problema de esforço de documentação que mais escrita resolveria. Rastreie explicitamente as perguntas recorrentes, e use-as para priorizar a reorganização ou melhor exposição do conteúdo existente em vez de escrever mais.

### Meça o tempo de integração até à primeira contribuição independente e significativa

Esta métrica, introduzida no capítulo 3.5 como um sinal de colaboração, é igualmente um sinal de saúde de documentação e conhecimento do lado do código. Um tempo de integração consistentemente curto e previsível sugere conhecimento genuinamente acessível e preciso; um tempo longo e altamente variável, especialmente um que depende fortemente de qual pessoa específica calha integrar um novo membro de equipa, sugere conhecimento que vive perigosamente concentrado na memória individual em vez de em forma durável e escrita.

### Identifique e priorize explicitamente áreas de conhecimento crítico não documentadas

Faça referência cruzada dos seus dados de concentração de conhecimento (a análise do [fator de autocarro](https://en.wikipedia.org/wiki/Bus_factor) do capítulo 3.5) com a cobertura de documentação: um sistema com um fator de autocarro de um e nenhuma documentação significativa é um risco severo e agravante que merece atenção prioritária sobre um sistema bem documentado com o mesmo fator de autocarro baixo, já que a documentação pelo menos fornece uma mitigação parcial enquanto um sucessor dedicado é formado.

### Trate a dívida de documentação como uma categoria dentro do seu backlog de dívida técnica

Em vez de rastrear as lacunas de documentação separadamente e informalmente, dobre as lacunas significativas de documentação no mesmo backlog visível e quantificado descrito no capítulo 4.5, particularmente para sistemas críticos e com baixo fator de autocarro, para que o trabalho de documentação compita justamente por capacidade priorizada em vez de ser perpetuamente adiado como uma tarefa de estatuto inferior comparado com a remediação de dívida focada em código.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Nenhuma medição de documentação | Baixa sobrecarga | O risco de conhecimento mantém-se invisível até uma crise forçar a descoberta |
| Contar a existência de documentação (contagem de páginas, presença de README) | Simples, fácil de reportar | Não diz nada sobre utilidade, precisão, ou descoberta |
| Rastrear acesso e obsolescência | Revela utilidade real e decaimento | Exige análise da plataforma de documentação e disciplina contínua de revisão |
| Tempo de integração como proxy | Prático, concreto, liga-se diretamente a impacto real de negócio | Indireto; outros fatores além da documentação também afetam a velocidade de integração |

A tensão central é **mensurabilidade versus significado**. A existência de documentação é trivialmente fácil de contar e não diz quase nada de útil; a utilidade genuína, se alguém realmente consegue encontrar e confiar em conhecimento documentado quando precisa, é o que realmente importa mas é mais difícil de medir diretamente. Resolva a tensão usando os proxies que este capítulo recomenda, padrões de acesso, obsolescência relativa ao processamento, perguntas repetidas, e tempo de integração, em combinação, aceitando que nenhum isoladamente é perfeito mas que a sua convergência é muito mais significativa do que uma contagem de existência isolada.

## Perguntas para debater com a sua equipa

1. **Para o nosso sistema mais crítico e com o fator de autocarro mais baixo, existe realmente documentação significativa e precisa, ou um especialista a sair levaria a maior parte do conhecimento real consigo?** Esta é a versão mais afiada e concreta da preocupação central deste capítulo; responda-lhe honestamente primeiro para o seu sistema único mais arriscado.

2. **Que pergunta é feita repetidamente na nossa conversa de equipa apesar de existir uma resposta documentada algures?** Se conseguir nomear uma imediatamente, isso é um problema de descoberta que vale a pena corrigir diretamente, provavelmente reorganizando ou melhor expondo o conteúdo existente em vez de escrever mais.

3. **Quanto tempo levou o nosso membro de equipa mais recente a fazer a sua primeira contribuição significativa e independente, e como se comparou isso com o membro de equipa anterior?** Uma variância grande e inexplicada entre indivíduos aponta muitas vezes para conhecimento que depende fortemente de quem calha integrar alguém, em vez de documentação durável e acessível.

4. **Quando verificámos pela última vez se uma peça de documentação ainda estava precisa, relativamente a quanto o sistema subjacente mudou desde que foi escrita?** Se a resposta honesta é "não verificamos isto sistematicamente", esse risco de obsolescência é provavelmente maior do que alguém atualmente assume.

5. **O nosso backlog de dívida técnica (capítulo 4.5) inclui lacunas de documentação, ou o trabalho de documentação é perpetuamente adiado como uma tarefa de estatuto inferior comparado com correções de código?** Verifique o seu backlog real e veja se a dívida de documentação está visível e a competir por capacidade priorizada ou efetivamente invisível.

6. **Quanto nos custaria se a uma ou duas pessoas que compreendem o nosso sistema mais crítico e menos documentado saíssem no mesmo ano?** Esta questão concreta e desconfortável vale a pena ser respondida honestamente em vez de tratar o risco como abstrato ou improvável.

## Perspetiva setorial

**Startup.** As métricas formais de documentação são normalmente desnecessárias com uma equipa pequena onde o conhecimento se espalha através de conversa constante e direta. O risco a vigiar é a mesma concentração de fator de autocarro que o capítulo 3.5 alerta, agora aplicada especificamente à documentação: à medida que a equipa cresce para além do tamanho em que todos falam diariamente, o conhecimento não documentado que funcionava bem informalmente torna-se um passivo real.

**Pequena empresa.** Priorize documentar o seu sistema único mais crítico e menos redundante primeiro, mesmo que informalmente, em vez de tentar documentação abrangente em tudo. Um documento curto e preciso cobrindo o seu único ponto de falha mais arriscado entrega mais valor real do que cobertura ampla mas superficial em todo o lado.

**Empresa.** Tanto a obsolescência como a descoberta de documentação escalam mal aqui, já que uma organização grande acumula documentação através de muitas equipas e plataformas mais depressa do que alguém consegue mantê-la atualizada ou consistentemente organizada. Invista em análise de plataforma de documentação para rastrear acesso e obsolescência à escala, e trate a dívida de documentação como uma categoria de primeira classe no seu backlog de dívida ao nível organizacional.

**Governo.** A antiguidade longa de funcionários comum em organizações do setor público pode mascarar risco severo de conhecimento não documentado atrás de aparente estabilidade, já que um sistema mantido pela mesma pessoa durante quinze anos pode funcionar perfeitamente bem até essa pessoa se reformar. Trate a saúde da documentação explicitamente como uma preocupação de continuidade de operações, ligada diretamente ao planeamento de pessoal e sucessão, não meramente como uma gentileza de engenharia.

## Exemplos

**Empresa.** Uma empresa de serviços financeiros descobriu, durante uma reorganização não relacionada, que o seu motor central de cálculo de risco não tinha documentação significativa além de alguns comentários de código desatualizados, e os dois engenheiros que o compreendiam melhor estavam ambos a ser reatribuídos a uma nova iniciativa simultaneamente. Um esforço de documentação de emergência, conduzido sob pressão significativa de tempo, extraiu e registou o conhecimento crítico antes da reatribuição entrar em vigor, mas o processo levou várias semanas de tempo dedicado de engenheiro sénior que poderia ter sido distribuído mais gradual e barateamente se a saúde da documentação tivesse sido rastreada e priorizada proativamente em vez de descoberta como uma emergência.

**Governo.** O sistema de gestão de casos com décadas de existência de um governo estadual tinha acumulado documentação substancial ao longo dos anos, mas uma auditoria de descoberta descobriu que novos membros de equipa consistentemente não conseguiam encontrar documentação relevante existente e faziam repetidamente o mesmo punhado de perguntas em canais de equipa, perguntas que, de facto, já estavam respondidas algures na plataforma de documentação extensa e mal organizada da agência. Em vez de escrever mais conteúdo, a agência investiu em reorganizar e melhorar a estrutura de pesquisa e navegação da sua documentação existente, e um inquérito de acompanhamento mostrou uma redução mensurável em perguntas repetidas e uma experiência de integração reportada significativamente mais rápida para o novo pessoal, sem adicionar uma única página nova de conteúdo.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de medir e gerir a saúde da documentação deliberadamente é o custo de crise evitado: o exemplo de serviços financeiros acima mostra a diferença entre captura de conhecimento proativa e gradual e um esforço de emergência caro e comprimido forçado por movimento de pessoal não planeado. O conhecimento crítico não documentado é um passivo permanente que não custa nada visivelmente até ao momento em que se torna muito caro de uma só vez.

O custo total de propriedade é maioritariamente a disciplina de rastrear os proxies que este capítulo recomenda, padrões de acesso, obsolescência, perguntas repetidas, tempo de integração, e a vontade de dobrar as lacunas de documentação num backlog priorizado em vez de as tratar como perpetuamente de estatuto inferior comparado com o trabalho focado em código. Essa disciplina custa muito menos do que a extração de conhecimento em modo de crise que o exemplo de serviços financeiros mostra como a alternativa.

## Antipadrões e armadilhas

- **Contar a existência de documentação em vez da utilidade:** não diz quase nada sobre se o conhecimento é realmente acessível quando necessário.
- **Escrever mais conteúdo em resposta a perguntas repetidas, sem primeiro verificar a descoberta:** muitas vezes resolve o problema errado inteiramente.
- **Nunca verificar a obsolescência da documentação relativamente a quanto o sistema mudou:** arrisca conteúdo ativamente a induzir em erro e desatualizado.
- **Tratar a dívida de documentação como perpetuamente de estatuto inferior comparado com a dívida de código:** deixa-a cronicamente despriorizada e invisível no backlog.
- **Confundir estabilidade aparente, um sistema que não mudou em anos, com baixo risco:** pode mascarar um problema severo de fator de autocarro não documentado atrás de um sistema que simplesmente ainda não precisou do seu único especialista.
- **Descobrir conhecimento crítico não documentado apenas durante uma transição de pessoal de emergência:** o modo de falha caro e evitável que este capítulo foi construído para prevenir.

## Modelo de maturidade

- **Nível 1, Iniciar:** A saúde da documentação não é medida; a concentração de conhecimento e o risco de obsolescência são descobertos apenas através de crise.
- **Nível 2, Desenvolver:** Existe alguma documentação, mas não há rastreio sistemático de acesso, obsolescência, ou descoberta.
- **Nível 3, Padronizar:** O acesso e a obsolescência são rastreados para sistemas críticos, e o tempo de integração é medido como proxy para a saúde do conhecimento em toda a organização.
- **Nível 4, Gerir:** As lacunas de documentação são dobradas no backlog priorizado de dívida técnica, com referência cruzada ao risco de fator de autocarro para identificar os riscos combinados mais severos.
- **Nível 5, Orquestrar:** A organização identifica e aborda proativamente o risco de conhecimento crítico não documentado antes de uma transição de pessoal forçar a questão, e consegue apontar para melhorias específicas e mensuráveis de integração ou resposta a incidentes traçadas até ao investimento em documentação.

## Ideias para debate

1. Qual é a nossa combinação única mais severa de fator de autocarro baixo e documentação pobre neste momento?
2. Que pergunta é feita repetidamente apesar de existir uma resposta documentada?
3. Como saberíamos se uma peça de documentação crítica se tinha tornado obsoleta e enganadora?
4. O nosso backlog de dívida técnica inclui lacunas de documentação, ou são invisíveis?
5. Quanto nos custaria se o único especialista do nosso sistema mais pouco documentado saísse este ano?

## Principais conclusões

- Meça a **utilidade, não a existência**: se a documentação realmente ajuda, usando proxies como padrões de acesso, obsolescência, e perguntas repetidas.
- **Perguntas repetidas apesar de respostas documentadas** revelam um problema de descoberta, não necessariamente um problema de esforço de conteúdo.
- O **tempo de integração até à contribuição produtiva** é um proxy forte e prático para a saúde geral do conhecimento.
- **O conhecimento crítico não documentado é um risco agravante**, especialmente combinado com um fator de autocarro baixo (capítulo 3.5); não custa nada visivelmente até custar muito de uma só vez.
- Dobre as **lacunas de documentação no seu backlog de dívida técnica** (capítulo 4.5) para que compitam justamente por capacidade priorizada.

## Referências e leituras adicionais

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, de Jared Bhatti, Zachariah Goldberg, Ted Kubaska, e Sarah Moir.
- *A Philosophy of Software Design*, de John Ousterhout.
- *Team Topologies*, de Matthew Skelton e Manuel Pais.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
