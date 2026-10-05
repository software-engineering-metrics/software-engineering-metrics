# 2.5 Eficiência de fluxo e trabalho em curso

## Visão geral e motivação

A **eficiência de fluxo** é o rácio entre o tempo ativo e o tempo total para uma peça de trabalho: se uma mudança passa dez horas ativamente a ser codificada, revista, e testada, mas fica inativa em filas noventa horas no total ao longo de toda a sua jornada, a eficiência de fluxo é 10%. A maioria dos pipelines de entrega de software, medidos honestamente, situa-se algures entre 10% e 25% de eficiência de fluxo, o que surpreende as pessoas que esperam que o esforço domine. O custo dominante na maioria dos sistemas de entrega não é quanto tempo o trabalho demora a fazer, é quanto tempo o trabalho espera para começar.

O **[trabalho em curso](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) é a contagem de itens ativamente a serem trabalhados em qualquer momento, através de uma equipa ou de um sistema, a mesma quantidade a que o tema 2.4 chama "carga de fluxo". A descoberta contraintuitiva por trás deste tema, apoiada por décadas de investigação em gestão de operações e formalizada para a entrega de software através do kanban e da teoria das filas, é que limitar o WIP tende a *aumentar* o rendimento, não a diminuí-lo, porque menos trabalho em voo de uma vez significa menos mudança de contexto, filas mais curtas, e conclusão mais rápida por item, mesmo que pareça que fazer menos trabalho simultaneamente deveria produzir menos output no total.

Para equipas grandes, compreender a eficiência de fluxo reformula quase todo o problema de entrega de "as pessoas precisam de trabalhar mais depressa" para "o trabalho precisa de esperar menos." Essa reformulação importa porque a primeira formulação convida a pressão sobre indivíduos, precisamente a armadilha contra a qual o tema 2.6 avisa, enquanto a segunda convida à investigação sobre a estrutura de filas, a capacidade de revisão, e quanto trabalho é iniciado simultaneamente, que é onde a melhoria real e sustentável normalmente vive. As organizações empresariais a gerir muitas iniciativas concorrentes através de equipas partilhadas são especialmente propensas a WIP alto e baixa eficiência de fluxo, porque começar novo trabalho sempre parece progresso mesmo quando está silenciosamente a abrandar tudo o que já está em voo.

## Princípios-chave

- **O tempo de espera, não o esforço ativo, domina a maioria dos pipelines de entrega.** Uma eficiência de fluxo abaixo de 25% é típica, não um sinal de uma equipa avariada.
- **Limitar o trabalho em curso tende a aumentar o rendimento,** não a diminuí-lo, ao reduzir a mudança de contexto e encurtar as filas.
- **Começar novo trabalho parece progresso; terminar trabalho é o que realmente entrega valor.** Estas não são a mesma coisa, e as organizações confundem-nas rotineiramente.
- **O WIP alto é muitas vezes invisível até ser medido.** Uma equipa pode estar a gerir muito mais trabalho concorrente do que qualquer indivíduo percebe.
- **Esta é uma métrica ao nível do sistema, não individual.** Aplicar limites de WIP para punir indivíduos interpreta mal todo o objetivo da técnica.

## Recomendações

### Medir a eficiência de fluxo antes de assumir que o esforço é o estrangulamento

Calcule o rácio entre o tempo ativo e o tempo total decorrido para uma amostra representativa de mudanças recentes, usando os dados de fase de tempo de ciclo do tema 2.6. A maioria das equipas que mede isto pela primeira vez fica surpreendida com quão baixo é o número, e essa surpresa é em si valiosa: redireciona a atenção de "trabalhar mais" para "reduzir o enfileiramento," que é quase sempre a alavanca mais produtiva.

### Definir um limite explícito de trabalho em curso e aplicá-lo visivelmente

Limite o número de itens que uma equipa ou um indivíduo pode ter ativamente em progresso de uma vez, visível num quadro partilhado (um quadro kanban físico ou digital é a implementação clássica). Quando o limite é atingido, a próxima ação da equipa é ajudar a terminar algo já em voo, não começar algo novo. Esta única prática, emprestada da manufatura lean e formalizada no kanban, é uma das melhorias de fluxo mais consistentemente eficazes disponíveis para uma equipa de software, e custa quase nada a implementar.

### Tratar um limite de WIP como uma restrição de sistema, não uma quota individual

Um limite de WIP governa quanto trabalho o *sistema* (uma equipa, uma fila de revisão partilhada, um ambiente partilhado) tem em voo de uma vez, não quanto qualquer pessoa individual tem permissão para tocar. Aplicar o limite como uma quota individual de desempenho, "só podes ter dois tickets abertos," aplica mal a técnica e arrisca precisamente o tipo de manipulação ao nível individual contra a qual este livro avisa ao longo de todo o texto. O limite existe para proteger o fluxo através de todo o sistema, e a sua aplicação deve ser uma norma de equipa, não um teto pessoal.

### Investigar porque o trabalho fica inativo, não apenas por quanto tempo

Quando a análise de eficiência de fluxo revela longos tempos de espera, pergunte especificamente porquê: o trabalho está à espera porque um revisor não está disponível, porque um ambiente de teste partilhado está reservado, porque uma dependência de outra equipa ainda não chegou. Cada uma destas tem uma correção diferente. Uma diretiva genérica de "reduzir o tempo de espera" sem esta investigação específica tende a produzir respostas genéricas e ineficazes.

### Vigiar o WIP a voltar a subir silenciosamente depois de uma melhoria inicial

As equipas que adotam com sucesso um limite de WIP veem-no muitas vezes erodir ao longo do tempo à medida que a pressão para começar novas iniciativas regressa, "só desta vez, também precisamos de começar esta coisa urgente." Trate toda a exceção ao limite de WIP como uma decisão deliberada e visível com uma razão declarada, não uma substituição silenciosa e rotineira, para que a disciplina do limite não decaia silenciosamente de volta ao seu estado original.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Sem limite de WIP | Parece flexível; sem atrito ao começar novo trabalho | A mudança de contexto e o enfileiramento abrandam silenciosamente tudo |
| Limite de WIP ao nível da equipa | Melhora o rendimento e a eficiência de fluxo mensuravelmente | Exige disciplina para aplicar, especialmente sob pressão de prazos |
| Quota de WIP ao nível individual | Simples de declarar | Aplica mal a técnica; arrisca manipulação individual |
| Limite de WIP rígido e inflexível | Benefício máximo de eficiência de fluxo | Pode parecer rígido em situações genuinamente urgentes e excecionais |

A tensão central é **flexibilidade versus fluxo**. Começar novo trabalho sempre que parece urgente parece reativo, mas a investigação sobre eficiência de fluxo e WIP mostra consistentemente que esta flexibilidade tem o custo de terminar qualquer coisa rapidamente, já que mais trabalho concorrente significa filas mais longas e mais mudança de contexto para tudo o que já está em voo. Resolva a tensão adotando um limite de WIP ao nível da equipa como predefinição, com um processo de exceção deliberado, visível, e raro para emergências genuínas, em vez de uma regra rígida sem exceções ou um livre-para-todos ilimitado e flexível.

## Perguntas para debater com a sua equipa

1. **Qual é a nossa eficiência de fluxo real, medida a partir de dados reais de tempo de ciclo, e esse número surpreende-nos?** A maioria das equipas nunca calculou isto e assume que é muito mais alto do que realmente é. Extraia uma amostra de mudanças recentes e calcule o rácio honestamente antes de discutir qualquer outra coisa neste tema.

2. **Quanto trabalho em curso temos realmente agora mesmo, em toda a equipa, e alguém sabia esse número antes de contar?** O WIP alto é muitas vezes invisível até ser medido explicitamente, porque cada indivíduo só vê a sua própria fatia dele. Conte tudo o que está atualmente em progresso, incluindo trabalho em que ninguém está ativamente a tocar hoje.

3. **Se adotássemos um limite de WIP, o que precisaria de mudar sobre como respondemos a um novo pedido urgente?** Esta pergunta revela o verdadeiro hábito organizacional, começar novo trabalho reflexivamente, que um limite de WIP é desenhado para interromper, e vale a pena discuti-la antes, não depois, de tentar aplicar um limite.

4. **Quando o trabalho fica inativo no nosso pipeline, qual é a razão específica, e é a mesma razão todas as vezes?** Uma sensação genérica de que "as coisas ficam à espera" é menos útil do que uma causa específica e recorrente: um revisor indisponível, um ambiente partilhado reservado, uma dependência entre equipas. Nomeie o padrão real a partir de exemplos recentes reais.

5. **Alguma vez adotámos um limite de WIP e depois o vimos erodir silenciosamente através de exceções?** Isto é extremamente comum e vale a pena discutir honestamente: que pressão causou a primeira exceção, e as exceções tornaram-se a nova normalidade sem que ninguém decidisse isso explicitamente.

6. **Um limite de WIP no nosso contexto precisaria de ser aplicado ao nível individual, de equipa, ou de recurso partilhado (como uma fila de revisão ou ambiente de teste)?** Diferentes estrangulamentos exigem limites a diferentes níveis, e aplicar um limite ao nível errado, quotas individuais em vez de um teto de fila partilhada, pode aplicar mal toda a técnica.

## Perspetiva setorial

**Startup.** Com poucas pessoas, o WIP é muitas vezes naturalmente baixo simplesmente porque não há engenheiros suficientes para começar muito trabalho simultaneamente. O risco é o oposto: um fundador ou engenheiro líder a gerir pessoalmente muito mais iniciativas concorrentes do que percebe, o que vale a pena medir mesmo sem ferramentas formais de kanban.

**Pequena empresa.** Um quadro visível simples, físico ou uma ferramenta digital básica, com um limite de coluna explícito é suficiente para obter a maior parte do benefício sem investir em ferramentas sofisticadas de métricas de fluxo. Comece com um limite generoso e aperte-o gradualmente à medida que a equipa fica confortável com a disciplina.

**Empresa.** O WIP alto é especialmente comum e especialmente caro aqui, porque muitas iniciativas estratégicas concorrentes competem pela mesma capacidade de engenharia partilhada, e começar uma nova sempre parece progresso para quem quer que a tenha patrocinado. Torne o WIP visível ao nível do portefólio, não apenas ao nível da equipa, para que a liderança consiga ver o custo de começar mais uma iniciativa antes de terminar as atuais.

**Governo.** Os programas de vários anos acumulam muitas vezes um WIP implícito enorme através de muitos fluxos de trabalho, cada um individualmente justificado, sem visibilidade organizacional do total. Introduzir visibilidade de WIP ao nível do portefólio, mesmo informalmente, é muitas vezes o argumento único mais persuasivo para sequenciar trabalho em vez de executar tudo em paralelo, já que o custo de eficiência de fluxo do WIP alto se agrava visivelmente uma vez medido.

## Exemplos

**Empresa.** A equipa de plataforma de uma empresa de serviços financeiros estava a gerir dezoito iniciativas concorrentes com apenas doze engenheiros, um rácio de WIP para capacidade que ninguém tinha realmente calculado até um novo diretor de engenharia o pedir diretamente. A eficiência de fluxo através do trabalho da equipa media menos de 12%. A equipa adotou um limite explícito de WIP de uma iniciativa ativa por cada dois engenheiros, pausando deliberadamente várias iniciativas de prioridade mais baixa em vez de continuar a espalhar a capacidade de forma esticada. O rendimento, medido como iniciativas genuinamente concluídas por trimestre, mais do que duplicou dentro de dois trimestres, mesmo que a equipa estivesse visivelmente a "fazer menos" em qualquer momento dado.

**Governo.** O programa de transformação digital de uma agência nacional de infraestruturas tinha acumulado mais de quarenta fluxos de trabalho concorrentes através do seu portefólio, cada um com o seu próprio patrocinador e a sua própria justificação, sem nenhuma vista única do trabalho total em curso. Uma revisão de eficiência de fluxo ao nível do programa encontrou que o fluxo de trabalho mediano gastava menos de 15% do seu tempo decorrido em desenvolvimento ativo, o resto à espera de recursos partilhados: uma pequena equipa central de revisão arquitetural, um ambiente de teste partilhado, e aprovação entre agências. O programa introduziu limites explícitos de WIP ao nível do portefólio, sequenciando fluxos de trabalho em vez de executar todos os quarenta em paralelo, e o próprio rastreio da agência mostrou conclusão mensuravelmente mais rápida para os fluxos de trabalho que permaneceram ativos, mesmo com o número total a executar de uma vez a cair acentuadamente.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de gerir a eficiência de fluxo e o WIP deliberadamente é contraintuitivo mas bem documentado: o rendimento tende a subir, não a cair, quando uma organização faz menos de uma vez, porque menos mudança de contexto e filas mais curtas significam que cada peça individual de trabalho termina mais depressa. O exemplo de serviços financeiros acima, rendimento duplicado a partir da redução deliberada de trabalho concorrente, é um padrão comum uma vez que as organizações realmente medem e agem sobre a eficiência de fluxo em vez de assumir que mais trabalho paralelo sempre significa mais progresso.

O custo total de adotar esta disciplina é maioritariamente organizacional, não técnico: um quadro visível, um limite de WIP acordado, e a disciplina de dizer não a começar novo trabalho quando o limite é atingido. Essa disciplina é mais difícil de sustentar do que de adotar, e é por isso que a recomendação acima de "vigiar o WIP a voltar a subir" importa tanto quanto a adoção inicial.

## Antipadrões e armadilhas

- **Assumir que o esforço ativo domina o tempo de entrega sem medir a eficiência de fluxo:** normalmente errado, e desvia o esforço de melhoria para a alavanca errada.
- **Aplicar um limite de WIP como quota individual em vez de restrição de sistema:** aplica mal a técnica e arrisca manipulação individual.
- **Começar novo trabalho reflexivamente porque parece progresso:** o hábito central que a eficiência de fluxo e os limites de WIP são desenhados para interromper.
- **Deixar as exceções ao limite de WIP tornarem-se rotineiras e invisíveis:** erode a disciplina de volta ao seu estado original sem que ninguém decida isso de propósito.
- **Medir o WIP apenas ao nível da equipa, perdendo a sobrecarga ao nível do portefólio:** comum em grandes organizações a gerir muitas iniciativas estratégicas concorrentes.
- **Tratar um número baixo de eficiência de fluxo como sinal de uma má equipa:** é típico da maioria dos pipelines de entrega e é um ponto de partida para investigação, não um veredito.

## Modelo de maturidade

- **Nível 1, Iniciar:** O trabalho em curso não é rastreado; as equipas começam novo trabalho reflexivamente sem visibilidade da carga concorrente total.
- **Nível 2, Desenvolver:** Algumas equipas usam um quadro informal, mas os limites de WIP não são aplicados consistentemente e a eficiência de fluxo nunca é calculada.
- **Nível 3, Padronizar:** As equipas têm limites de WIP explícitos e visíveis ao nível do sistema, e a eficiência de fluxo é medida periodicamente a partir de dados reais de tempo de ciclo.
- **Nível 4, Gerir:** As exceções ao limite de WIP são rastreadas como decisões deliberadas e visíveis; a eficiência de fluxo é monitorizada quanto à erosão ao longo do tempo e investigada quando cai.
- **Nível 5, Orquestrar:** O WIP é visível e gerido ao nível do portefólio, não apenas ao nível da equipa, e a organização consegue apontar para melhorias específicas de rendimento que resultaram da redução deliberada de trabalho concorrente.

## Ideias para debate

1. Qual é a nossa eficiência de fluxo real, calculada honestamente a partir de dados reais?
2. Quanto trabalho em curso temos atualmente que ninguém tinha contado antes desta discussão?
3. A que teríamos de dizer não para aplicar um limite real de WIP?
4. Qual é a razão única mais comum pela qual o trabalho fica inativo no nosso pipeline?
5. Onde na nossa organização o WIP ao nível do portefólio é invisível e provavelmente demasiado alto?

## Principais conclusões

- A **eficiência de fluxo**, o rácio entre o tempo ativo e o tempo total, está tipicamente abaixo de 25% em pipelines de entrega reais; o tempo de espera, não o esforço, domina.
- **Limitar o trabalho em curso tende a aumentar o rendimento**, não a diminuí-lo, ao reduzir a mudança de contexto e encurtar as filas.
- Aplique um **limite de WIP como restrição de sistema**, nunca como quota individual.
- Investigue a **razão específica** pela qual o trabalho fica inativo em vez de emitir uma diretiva genérica de "reduzir o tempo de espera".
- Vigie os limites de WIP a **erodir através de exceções rotineiras**; trate toda a exceção como uma decisão deliberada e visível.
- O tema 2.4 chama a esta quantidade **carga de fluxo** e o tema 2.7 formaliza a relação como a lei de Little: o trabalho em curso é igual à taxa de chegada vezes o tempo de ciclo, para qualquer fila estável.

## Referências e leituras adicionais

- *The Principles of Product Development Flow*, de Donald G. Reinertsen.
- *Kanban: Successful Evolutionary Change for Your Technology Business*, de David J. Anderson.
- *Actionable Agile Metrics for Predictability*, de Daniel S. Vacanti.
- *The Goal*, de Eliyahu M. Goldratt.
