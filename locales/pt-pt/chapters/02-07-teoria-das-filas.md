# 2.7 Teoria das filas

## Visão geral e motivação

A **[teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory)** é o estudo matemático das linhas de espera. Parece um encaixe estranho para um livro sobre métricas de engenharia de software até reparar em quanto de um pipeline de entrega é realmente uma fila: um pull request à espera de um revisor, um commit à espera de um executor de CI, um ticket à espera de ser retomado, uma mensagem de apoio ao cliente à espera de uma resposta. O capítulo 2.4 já introduziu a carga de fluxo e o tempo de fluxo e mostrou que sobrecarregar uma cadeia de valor faz a entrega abrandar acentuadamente, e os capítulos 2.5 e 2.6 mostraram que a maior parte do tempo de entrega é tempo de espera, não tempo de trabalho. A teoria das filas é a matemática subjacente que explica porque tudo isso é verdade, não apenas um padrão observado.

O resultado único mais útil é a **[lei de Little](https://en.wikipedia.org/wiki/Little%27s_law)**, um teorema provado pelo investigador de operações John Little em 1961: o número médio de itens num sistema estável é igual à taxa média a que os itens chegam, multiplicada pelo tempo médio que cada item passa no sistema. O capítulo 2.4 já usou este resultado sob os próprios nomes do Flow Framework, a carga de fluxo é igual à taxa de chegada vezes o tempo de fluxo. No vocabulário mais amplo deste livro, também se lê como trabalho em curso (capítulo 2.5) é igual à taxa de chegada de novo trabalho multiplicada pelo tempo de ciclo (capítulo 2.6). Isto não é uma regra prática ou uma correlação observada em alguns estudos. É uma prova que se sustenta para qualquer fila estável, independentemente do que a fila está a processar ou de como decide no que trabalhar a seguir.

Para uma equipa grande, essa generalidade é o ponto. A lei de Little dá-lhe uma verificação de sanidade que funciona de forma idêntica quer a fila seja um quadro kanban, um corretor de mensagens, ou um pipeline de CI partilhado. Se o seu trabalho em curso medido, taxa de chegada, e tempo de ciclo não satisfizerem aproximadamente a equação, um dos seus três números está errado, normalmente por causa de uma definição inconsistente do que conta como "em progresso" ou "chegado". As organizações empresariais e governamentais executam dezenas destas filas de uma vez, conjuntos de revisão de código partilhados, ambientes de teste partilhados, conselhos de aprovação partilhados, e a lei de Little é a ferramenta mais barata disponível para apanhar uma definição de métrica má antes de impulsionar uma má decisão de pessoal ou processo.

## Princípios-chave

- **A lei de Little é uma prova, não uma heurística.** O trabalho em curso é igual à taxa de chegada vezes o tempo de ciclo, para qualquer fila estável, e é uma verificação rápida de se as suas métricas de entrega são internamente consistentes.
- **A utilização não escala linearmente com o tempo de espera.** À medida que um recurso partilhado se aproxima da utilização total, o atraso de enfileiramento cresce acentuadamente, não gradualmente. Um recurso a funcionar a 95% de ocupação está muitas vezes a esperar muitas vezes mais tempo do que um a funcionar a 80%, não apenas "um pouco pior".
- **A média de uma fila esconde o seu pior caso.** Reportar apenas o tempo médio de espera esconde a cauda longa e dolorosa perto da capacidade, precisamente o que o capítulo 1.6 avisa sobre o uso de percentis em vez de médias.
- **Como uma fila é definida pode ser manipulado tão facilmente quanto qualquer outra métrica.** Se algo conta como "chegado", "em progresso", ou "servido" é uma escolha, e pode ser ajustado para lisonjear um painel de controlo sem mudar o que realmente acontece ao trabalho.
- **Um pipeline é normalmente uma fila de filas.** Um pipeline de entrega encadeia várias fases juntas, e a fase mais lenta define o ritmo para toda a cadeia independentemente de quão rápido as outras funcionam.

## Recomendações

### Usar a lei de Little para verificar os seus próprios números antes de confiar neles

Pegue no trabalho em curso médio medido da sua equipa, na sua taxa média de chegada de novos itens por semana, e no seu tempo de ciclo médio, e verifique se o trabalho em curso é aproximadamente igual à taxa de chegada multiplicada pelo tempo de ciclo. Quando não é, não assuma que a teoria está errada. Procure a causa real: uma fronteira de fase contada inconsistentemente, trabalho que fica "bloqueado" mas ainda é contado como em progresso, ou uma taxa de chegada medida numa janela diferente do tempo de ciclo. Esta única verificação apanha mais instrumentação má do que a maioria das equipas encontra de qualquer outra forma.

### Rastrear a utilização diretamente para todo o recurso partilhado e com restrição de capacidade

Identifique os recursos que o seu pipeline de entrega partilha através de muitas equipas, um conjunto de revisão de código, um cluster de CI, um ambiente de teste, e meça quão ocupado cada um funciona como proporção da sua capacidade disponível, antes de planear executá-lo perto do seu limite. Um grupo de revisores partilhado a funcionar perto da capacidade total produz tempos de espera de fila de revisão que crescem muito mais depressa do que o modesto aumento de procura que os causou, precisamente a dinâmica por trás do conselho do capítulo 2.9 de vigiar o tempo até à primeira revisão como indicador avançado.

### Separar a taxa de chegada, a taxa de sucesso, a taxa de falha, e a taxa de abandono

Resista a colapsar tudo o que sai de uma fila num único número de "rendimento" ou "taxa de serviço". Rastreie quatro coisas separadamente: com que rapidez o trabalho chega, quanto dele termina com sucesso, quanto falha e precisa de retrabalho, e quanto é abandonado ou silenciosamente largado antes de alguém o terminar. Um pipeline que parece rápido porque a sua taxa de abandono subiu silenciosamente não está realmente a entregar mais, e só rastrear estas quatro taxas separadamente lhe mostrará isso.

### Modelar pipelines de várias fases como uma fila de filas

Trate um pipeline de entrega, ou qualquer processo de várias fases, um ciclo de vida de incidente, um pipeline de contratação, como uma cadeia de filas em vez de um bloco indiferenciado de "tempo". A taxa de chegada geral é definida pela primeira fase, a taxa de conclusão geral pela última fase, e as contagens totais de erro e abandono do pipeline são a soma das de cada fase. Esta formulação diz-lhe imediatamente em que fase vale a pena investir: aquela com a pior combinação de alta utilização e alta taxa de falha ou abandono, não a que calha ser mais fácil de instrumentar.

### Definir limites de pessoal e de WIP com a utilização em mente, não apenas o rendimento

Quando decidir quantos revisores ou executores de CI uma equipa precisa, não dimensione a capacidade para corresponder exatamente à taxa média de chegada. Uma fila a funcionar a 100% de utilização em média tem um tempo de espera efetivamente infinito na prática, porque as chegadas reais são irregulares, não perfeitamente suaves. Planeie deliberadamente folga, e trate "os nossos revisores estão quase sempre ocupados" como um sinal de aviso sobre tempos de espera a chegar, não como evidência de alocação eficiente de recursos.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Nenhum modelo formal de filas, pessoal por intuição | Rápido de começar; sem novo vocabulário para a equipa | Subestima consistentemente como o tempo de espera explode perto da capacidade total |
| Lei de Little como verificação de sanidade de métricas existentes | Barata, não exige novas ferramentas, apanha definições más rapidamente | Só verifica a consistência, não diagnostica a causa por si só |
| Simulação completa de filas (distribuições de chegada, múltiplos servidores) | Previsão mais precisa do comportamento do tempo de espera sob carga | Exige competência estatística real e manutenção que a maioria das equipas não sustentará |
| Rastreio de utilização em recursos partilhados sem modelação mais profunda | Simples, acionável, apanha a maior causa única de tempos de espera descontrolados | Não diz nada sobre porque a utilização é alta ou o que fazer sobre a causa subjacente |

A tensão central é **rigor versus adoção**. Uma simulação completa de filas dá a resposta mais precisa, mas quase nenhuma equipa de engenharia vai construir e manter uma, e um modelo em que ninguém confia ou atualiza é pior do que nenhum modelo. A lei de Little e o rastreio básico de utilização abdicam de alguma precisão mas não exigem competência estatística especializada e encaixam diretamente nas métricas que uma equipa já recolhe para os capítulos 2.4 a 2.6. Use por predefinição essas verificações baratas e adotáveis, e reserve a simulação completa para o raro caso em que um único recurso partilhado, uma grande frota de CI, um conjunto de revisão especializado, é suficientemente caro para justificar o investimento.

## Perguntas para debater com a sua equipa

1. **O nosso trabalho em curso medido, taxa de chegada, e tempo de ciclo realmente satisfazem a lei de Little, e se não, porquê?** Este é o diagnóstico mais rápido disponível para uma definição de métrica má. Percorra os números reais juntos, e se a equação não se sustentar aproximadamente, trace a incompatibilidade a uma inconsistência definicional específica em vez de descartar a verificação.

2. **Que recursos partilhados no nosso pipeline de entrega estão a funcionar perto da utilização total, e sabemos realmente o seu número de utilização?** A maioria das equipas consegue nomear um recurso que "sempre parece ocupado" mas nunca mediu a sua utilização diretamente. Identifique os dois ou três recursos partilhados mais restritos e obtenha um número real para cada um.

3. **Estamos a misturar sucesso, falha, e abandono num único número de rendimento, e o que veríamos se os separássemos?** Uma única contagem de "itens concluídos" pode subir mesmo enquanto a qualidade cai ou o trabalho é silenciosamente abandonado. Recalcule o rendimento de um período recente como três números separados e discuta o que a divisão revela que o número misturado escondia.

4. **Onde no nosso pipeline está o verdadeiro estrangulamento, a fase mais lenta que define o ritmo para tudo a jusante dela?** As equipas investem muitas vezes em acelerar a fase mais fácil de melhorar em vez da que realmente restringe o rendimento total. Identifique a fase com a pior combinação de alta utilização e alta taxa de falha ou abandono.

5. **Se acrescentássemos capacidade ao nosso recurso partilhado mais restrito, o tempo de espera realmente melhoraria, ou a procura simplesmente expandiria para o preencher?** Esta pergunta separa uma verdadeira escassez de capacidade de um problema de procura, e a resposta muda se a correção certa é mais pessoal, um limite de WIP, ou uma mudança em como o trabalho é priorizado antes de entrar na fila.

6. **Alguma vez redefinimos o que conta como "em progresso" ou "chegado" de uma forma que fez um painel de controlo parecer melhor sem mudar o que realmente aconteceu ao trabalho?** Vale a pena perguntar isto honesta e especificamente, com exemplos reais do último ano, em vez de o tratar como uma preocupação hipotética.

## Perspetiva setorial

**Startup.** Com um punhado de engenheiros, a maioria das filas é suficientemente curta para que a análise formal de filas seja um exagero. O hábito útil é menor: repare quando uma pessoa, muitas vezes o engenheiro mais sénior, se tornou um recurso partilhado de facto pelo qual tudo o resto espera, e trate isso como um problema de utilização que vale a pena nomear mesmo sem nenhum modelo formal por trás.

**Pequena empresa.** Uma equipa de pequena empresa raramente precisa de algo mais sofisticado do que rastrear a utilização nos seus um ou dois recursos genuinamente partilhados, muitas vezes um único revisor ou um único pipeline de implementação, e vigiar o ponto onde "normalmente disponível" se torna silenciosamente "normalmente o estrangulamento". Uma folha de cálculo é suficiente; ferramentas dedicadas não são necessárias a esta escala.

**Empresa.** Os recursos partilhados multiplicam-se depressa à escala empresarial: uma equipa central de plataforma, um conselho partilhado de revisão de segurança, uma frota de CI partilhada a servir dezenas de equipas de produto. Estes são exatamente os recursos onde o rastreio de utilização ganha o seu valor, porque um único recurso partilhado sobrecarregado pode degradar silenciosamente o tempo de entrega para toda a equipa que depende dele, e as próprias métricas de nenhuma equipa individual revelarão uma causa que vive fora do seu próprio pipeline.

**Governo.** Os programas de entrega multiagência e multifornecedor encaminham muitas vezes o trabalho através de conselhos de aprovação partilhados, processos de acreditação de segurança partilhados, e ambientes de teste partilhados que nenhuma equipa individual controla ou consegue redimensionar sozinha. A análise de filas destes portões partilhados, taxa de chegada, capacidade, utilização, é frequentemente a evidência mais clara disponível para um caso de negócio para acrescentar capacidade ou mudar como o trabalho é agrupado antes de chegar ao portão.

## Exemplos

**Empresa.** A equipa de plataforma interna de um fornecedor de infraestrutura cloud notou que o tempo de espera para mudanças (capítulo 2.10) tinha subido lentamente através de todas as equipas de produto que dependiam da sua frota de CI partilhada, mesmo que nenhuma equipa individual tivesse mudado como trabalhava. Uma análise de utilização encontrou a frota a funcionar acima de 90% de ocupação durante as horas centrais, bem além do ponto onde a teoria das filas prevê que o tempo de espera cresce acentuadamente em vez de gradualmente. A equipa de plataforma acrescentou capacidade de CI e introduziu uma política de agendamento de partilha justa para que a explosão de atividade de nenhuma equipa individual pudesse monopolizar a fila. O tempo mediano de espera de CI caiu mais de metade dentro de um mês, evidência de que o estrangulamento tinha sido uma fila partilhada e invisível o tempo todo.

**Governo.** A equipa de serviço digital de uma agência nacional de licenciamento rastreou o processamento de candidaturas como um único número de rendimento de "casos fechados por semana" durante dois anos, e o número parecia estável. Uma análise mais atenta, dividindo esse número em casos aprovados, rejeitados, e abandonados por candidatos depois de longos atrasos, encontrou que a taxa de abandono tinha quase triplicado no mesmo período enquanto as aprovações se mantinham estáveis. A lei de Little, aplicada à fila de agentes de casos, mostrou que o trabalho em curso tinha crescido muito além do que o tempo médio de processamento declarado da equipa implicava, significando que os casos estavam silenciosamente a acumular-se num estado não contado como "à espera". A agência reestruturou as suas definições de rastreio de casos para contar honestamente todo o caso aberto e acrescentou capacidade de agentes de casos dimensionada para manter a utilização abaixo de 85%, agora rastreada como um alvo operacional permanente ao lado do número de rendimento.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de aplicar análise básica de filas é que transforma "o pipeline parece lento" numa decisão específica e defensável, acrescentar folga a este recurso partilhado, dividir esta métrica misturada nos seus componentes reais, em vez de um empurrão vago para "trabalhar mais depressa" que perde a causa real. O exemplo de infraestrutura cloud acima, tempo de espera reduzido a metade a partir de uma correção de capacidade e agendamento em vez de qualquer mudança no comportamento de equipas individuais, é o padrão que esta análise produz fiavelmente: a correção é quase sempre mais barata do que pedir a toda a equipa a jusante para se mover mais depressa à volta de um estrangulamento que não consegue ver.

O custo total de adoção é genuinamente baixo. A lei de Little e o rastreio de utilização não precisam de nenhuma nova ferramenta além do que os capítulos 2.4 a 2.6 já lhe pedem para recolher: taxa de chegada, trabalho em curso, e tempo de ciclo. O investimento é maioritariamente disciplina analítica, verificar os números uns contra os outros e rever periodicamente a utilização em recursos partilhados antes de se tornarem a próxima regressão inexplicada de tempo de espera da organização.

## Antipadrões e armadilhas

- **Dimensionar a capacidade de um recurso partilhado para corresponder exatamente à sua taxa média de chegada:** garante alta utilização e tempos de espera descontrolados sempre que a procura é mesmo brevemente irregular.
- **Reportar apenas o tempo médio de espera, nunca um percentil:** esconde a cauda longa que mais importa às pessoas que esperam nela.
- **Misturar sucesso, falha, e abandono num único número de rendimento:** o vetor de manipulação no centro deste capítulo. Uma equipa sob pressão pode fazer o rendimento parecer saudável deixando silenciosamente a taxa de abandono subir, tickets abandonados, pedidos silenciosamente largados, trabalho que nunca é contado como uma falha. A salvaguarda é rastrear a taxa de chegada, sucesso, falha, e abandono como quatro números separados e visíveis, a mesma disciplina que o capítulo 1.2 pede para cada métrica neste livro, para que uma taxa de abandono crescente não consiga esconder-se atrás de um gráfico de rendimento estável.
- **Tratar "o nosso pessoal está sempre ocupado" como um elogio:** é um sintoma de alta utilização, a causa principal de tempos de espera longos e imprevisíveis.
- **Redefinir "em progresso" para encolher silenciosamente o trabalho em curso:** move o trabalho para um estado não contado, "bloqueado", "em espera", sem mudar quanto tempo demora a terminar, e quebra a verificação da lei de Little que de outra forma o teria apanhado.
- **Assumir que um modelo de filas não precisa de manutenção uma vez construído:** os padrões de chegada e a capacidade mudam constantemente, e um modelo desatualizado produz previsões confiantes e erradas.

## Modelo de maturidade

- **Nível 1, Iniciar:** Nenhuma fila é medida explicitamente; o tempo de espera é discutido anedoticamente como "as coisas parecem lentas".
- **Nível 2, Desenvolver:** A taxa de chegada, o trabalho em curso, e o tempo de ciclo são rastreados para pelo menos um pipeline, mas nunca verificados contra a lei de Little nem contra a utilização em recursos partilhados.
- **Nível 3, Padronizar:** A lei de Little é uma verificação de consistência rotineira através dos pipelines de entrega, e a utilização é rastreada explicitamente para os recursos partilhados mais significativos.
- **Nível 4, Gerir:** As taxas de sucesso, falha, e abandono são rastreadas separadamente para toda a fila significativa, e as decisões de capacidade usam alvos de utilização, não apenas a procura média.
- **Nível 5, Orquestrar:** A organização modela os seus principais pipelines como filas de filas, identifica estrangulamentos verdadeiros sistematicamente, e consegue apontar para mudanças específicas de capacidade ou processo feitas por causa da análise de filas, com melhoria medida do tempo de espera para o mostrar.

## Ideias para debate

1. Escolha um dos nossos pipelines de entrega e verifique se os seus números satisfazem a lei de Little hoje.
2. Nomeie o recurso partilhado único na nossa organização que a maioria das pessoas concordaria que está "sempre ocupado", e encontre o seu número real de utilização.
3. Como seria o nosso gráfico de rendimento se o dividíssemos em taxas de sucesso, falha, e abandono para o último trimestre?
4. Se tivéssemos de acrescentar capacidade a exatamente um recurso partilhado este ano, qual seria, e que evidência o justificaria?

## Principais conclusões

- A **lei de Little**, o trabalho em curso é igual à taxa de chegada vezes o tempo de ciclo, é uma prova, não uma heurística, e é a verificação mais barata disponível sobre se as suas métricas de entrega são internamente consistentes.
- **O tempo de espera cresce acentuadamente, não gradualmente, à medida que a utilização se aproxima da capacidade total.** Trate "sempre ocupado" como um sinal de aviso, não um elogio.
- Rastreie a **taxa de chegada, taxa de sucesso, taxa de falha, e taxa de abandono** separadamente; misturá-las num único número de rendimento é o vetor de manipulação central deste capítulo.
- Modele um pipeline de várias fases como uma **fila de filas**, e invista na fase com a pior combinação de alta utilização e alta taxa de falha ou abandono, não na fase mais fácil de melhorar.
- Favoreça verificações baratas e adotáveis, **a lei de Little e o rastreio de utilização**, em vez de uma simulação completa de filas que poucas equipas sustentarão.

## Referências e leituras adicionais

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
