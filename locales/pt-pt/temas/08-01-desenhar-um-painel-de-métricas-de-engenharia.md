# 8.1 Desenhar um painel de métricas de engenharia

## Visão geral e motivação

Cada métrica que este livro cobriu eventualmente tem de viver algures onde pessoas reais realmente olham, e um [painel](https://en.wikipedia.org/wiki/Dashboard_(business)) mal desenhado pode desfazer o trabalho cuidadoso de cada tema anterior: métricas honestas, bem governadas, e combinadas com salvaguardas apresentadas desonestamente, desorganizadamente, ou ao público errado produzem exatamente a confusão e desconfiança que este livro se esforçou para prevenir. Este tema trata do ofício específico do design de painel: escolher o que mostrar a quem, visualizá-lo honestamente, e estruturar todo o artefacto para que seja realmente usado para tomar decisões em vez de ser ignorado ou, pior, mal interpretado.

A disciplina central que este tema recomenda é o design específico por público. Um painel construído para a reunião diária de uma equipa individual de engenharia precisa de métricas diferentes, granularidade diferente, e uma densidade visual diferente do que um construído para uma revisão executiva trimestral, e um único painel de tamanho único a tentar servir ambos os públicos normalmente não serve bem nenhum deles. Este tema trata o design de painel como uma disciplina genuína de design, não apenas uma reflexão tardia de reporte, baseando-se nos princípios de honestidade estatística do tema 1.6 ao longo de todo o texto: cada escolha de visualização ou ajuda ou dificulta a capacidade de um leitor de tirar a conclusão correta dos dados.

Para equipas grandes, o design de painel é onde as muitas salvaguardas individuais ao nível de métrica deste livro ou sobrevivem até à prática ou se perdem. As organizações empresariais que correm dezenas de painéis de equipa precisam de consistência sem rigidez, padrões partilhados que ainda permitam que as necessidades específicas de cada público sejam satisfeitas; as organizações governamentais, cujos painéis podem enfrentar escrutínio público ou servir como base para reporte de supervisão, precisam dos padrões honestos de visualização que este tema recomenda aplicados com rigor particular, já que um gráfico enganador descoberto por um revisor externo danifica a credibilidade muito para além da métrica específica envolvida.

## Princípios-chave

- **Desenhe para um público e decisão específicos, não para cobertura abrangente.** Um painel a tentar servir toda a gente normalmente não serve bem ninguém.
- **Cada escolha de visualização ou ajuda ou ativamente engana.** Aplique a honestidade estatística do tema 1.6 rigorosamente: tendência real, eixos honestos, incerteza visível.
- **Menos métricas bem escolhidas superam a cobertura abrangente.** O princípio contínuo deste livro, desde o tema 1.1, aplica-se diretamente ao design de painel.
- **Um painel precisa de um proprietário e uma cadência de revisão**, exatamente como qualquer outra métrica governada (tema 1.4), ou decai num artefacto não mantido e não confiável.
- **Os pares de salvaguarda pertencem à mesma vista.** Nunca separe uma métrica incentivada da sua salvaguarda em painéis diferentes ou secções diferentes.

## Recomendações

### Desenhe painéis distintos para públicos e decisões distintas

Construa vistas separadas e específicas para o propósito em vez de um painel a servir todo o público: um painel operacional ao nível de equipa (cadência diária ou semanal, métricas granulares de entrega e qualidade para uso da própria equipa), um painel de liderança (cadência mensal ou trimestral, ponderado por resultado segundo o tema 7.4, menos métricas, mais contexto), e, onde relevante, um painel voltado para o exterior (para clientes, órgãos de supervisão, ou o público, cuidadosamente governado segundo o rigor escalado por consequência do tema 1.4). Cada um serve uma decisão diferente e deveria ser desenhado especificamente para essa decisão, não como uma vista filtrada de um único painel mestre.

### Aplique padrões honestos de visualização consistentemente

Siga os princípios de honestidade estatística do tema 1.6 como requisitos rígidos de design, não polimento opcional: comece os eixos de valor em zero a menos que uma exceção declarada e visível esteja documentada, mostre a tendência ao longo do tempo em vez de um instantâneo único, use medianas e percentis em vez de médias para dados assimétricos, e anote o contexto (implementações, incidentes, mudanças organizacionais) para que um leitor consiga distinguir uma mudança genuína de ruído. Evite as manipulações específicas de gráfico que o tema 1.6 nomeou diretamente: eixos duplos a implicar falsa correlação, intervalos de datas escolhidos a dedo, e efeitos 3D que distorcem a proporção.

### Nunca separe uma métrica da sua salvaguarda combinada através de vistas diferentes

Seguindo o princípio de combinação com salvaguardas do tema 1.2 como uma regra rígida de design de painel: a frequência de implementação e a taxa de falha de mudanças (tema 2.10) pertencem à mesma vista, sempre visíveis em conjunto, nunca divididas entre um painel de "velocidade" e um painel separado de "qualidade" que diferentes públicos possam ver isoladamente. Isto não é uma preferência menor de layout; separar uma métrica da sua salvaguarda em painéis diferentes recria exatamente o risco de exposição a incentivos contra o qual o tema 1.2 alerta, mesmo que ambos os números sejam tecnicamente rastreados algures.

### Atribua um proprietário nomeado e uma cadência de revisão a cada painel

Aplique a disciplina de governação do tema 1.4 diretamente ao próprio artefacto de painel, não apenas às métricas individuais que exibe: nomeie um proprietário responsável pela precisão e relevância contínuas do painel, e defina uma cadência de revisão em que as métricas são acrescentadas, retiradas, ou reconsideradas. Um painel sem proprietário decai exatamente da forma como uma métrica sem proprietário o faz (tema 1.4), acumulando blocos obsoletos que ninguém tem autoridade ou responsabilidade para podar.

### Construa uma declaração explícita e visível do que o painel não é para

Seguindo a distinção diagnóstica-versus-avaliativa do tema 1.1, declare direta e visivelmente em qualquer painel cujas métricas possam plausivelmente ser mal usadas para avaliação individual, exatamente para que o painel não serve: "estas métricas descrevem a saúde da equipa e do sistema; não são usadas em avaliações individuais de desempenho". Esta declaração explícita, aplicada especialmente a qualquer painel que contenha dados de atividade (tema 3.4) ou dados de carga de prevenção (tema 6.3), é uma pequena escolha de design com um efeito desproporcionado na prevenção exatamente da deriva avaliativa contra a qual este livro alerta ao longo de todo o texto.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Único painel abrangente para todos os públicos | Simples de construir e manter um artefacto | Não serve bem nenhum público específico; sobrecarregado para alguns, insuficiente para outros |
| Painéis específicos por público | Cada um serve bem a sua decisão real | Mais artefactos para construir, manter, e manter consistentes |
| Cobertura abrangente de métricas em cada vista | Nada é perdido | Fadiga de painel; enterra as métricas que realmente importam para a decisão desse público |
| Seleção mínima e orientada por decisão de métricas por painel | Focada, acionável, mais fácil de confiar | Exige disciplina deliberada de curadoria e arrisca omitir algo relevante |

A tensão central é **abrangência versus foco**, a tensão fundacional do tema 1.1 aplicada especificamente ao design de painel. Um painel abrangente parece mais seguro, nada é deixado de fora, mas normalmente serve pior o seu público real do que um focado construído especificamente em torno das decisões que esse público precisa de tomar. Resolva a tensão construindo múltiplos painéis específicos para o propósito em vez de um abrangente, aceitando o custo adicional modesto de manutenção de vários artefactos focados em troca de cada um ser realmente útil ao seu público pretendido.

## Perguntas para debater com a sua equipa

1. **O nosso painel atual tenta servir múltiplos públicos ao mesmo tempo, e se sim, a quem realmente serve bem?** Percorra o seu painel existente e identifique o seu público primário real versus o seu público pretendido; uma desadequação aqui é comum e vale a pena ser nomeada diretamente.

2. **Algum dos nossos painéis separa uma métrica incentivada da sua salvaguarda combinada em vistas diferentes?** Audite os seus painéis atuais especificamente quanto a este padrão, verificando cada uma das métricas DORA da Parte 2 e as suas combinações como ponto de partida.

3. **As visualizações do nosso painel passariam os padrões honestos de visualização do tema 1.6: eixos baseados em zero, tendência sobre instantâneo, medianas sobre médias para dados assimétricos?** Reveja os seus gráficos atuais reais contra esta lista de verificação diretamente.

4. **Cada painel que mantemos tem um proprietário nomeado e uma cadência de revisão, ou alguns simplesmente existem sem ninguém responsável por mantê-los precisos e relevantes?** Se algum painel não tem um proprietário nomeado, essa lacuna vale a pena ser fechada imediatamente, já que um painel sem proprietário decai exatamente da forma como uma métrica sem proprietário o faz.

5. **Algum painel cujas métricas possam plausivelmente ser mal usadas para avaliação individual declara explicitamente para que não serve?** Verifique qualquer painel que contenha dados de atividade ou carga de prevenção especificamente quanto a esta declaração explícita.

6. **Se redesenhássemos os nossos painéis do zero hoje, público por público, começando pela decisão que cada público precisa de tomar, quão diferente pareceria o resultado do que atualmente existe?** Esta experiência mental revela muitas vezes quanta estrutura de painel se acumulou por inércia em vez de design deliberado.

## Perspetiva setorial

**Startup.** Um único painel simples é normalmente apropriado a esta escala, já que toda a equipa e liderança são muitas vezes o mesmo pequeno grupo de pessoas a tomar largamente as mesmas decisões. Concentre-se nos padrões honestos de visualização e na declaração explícita de não-para-avaliação mesmo em pequena escala, já que estes hábitos são muito mais fáceis de estabelecer cedo do que de adaptar retroativamente mais tarde.

**Pequena empresa.** A maioria das ferramentas prontas a usar fornece painéis predefinidos razoáveis; a principal disciplina é curá-los até às poucas métricas que realmente informam uma decisão real para o seu negócio específico, em vez de exibir cada métrica que a ferramenta calha computar por predefinição.

**Empresa.** A consistência sem rigidez é o desafio central aqui: dezenas de painéis de equipa precisam de padrão partilhado suficiente (regras honestas de visualização, combinação com salvaguardas, disciplina de propriedade) para serem fiáveis e comparáveis, enquanto ainda permitem que as necessidades operacionais específicas de cada equipa moldem a sua própria vista. Invista num padrão partilhado de design de painel, imposto através de governação (tema 1.4), em vez de ou um modelo rígido de tamanho único ou painéis locais completamente não estruturados e inconsistentes.

**Governo.** Os painéis que enfrentam escrutínio externo ou de supervisão precisam de rigor particular em visualização honesta e documentação explícita de governação, já que um gráfico enganador descoberto por um revisor externo danifica a credibilidade institucional muito para além da métrica específica envolvida. Aplique o padrão mais alto das recomendações deste tema a qualquer painel voltado para o exterior especificamente.

## Exemplos

**Empresa.** Uma empresa de tecnologia logística tinha, durante anos, mantido um único painel de "saúde de engenharia" visto tanto por equipas individuais de engenharia como pela equipa de liderança executiva, com mais de quarenta blocos cobrindo tudo desde contagens individuais de commits até resultados trimestrais de negócio. Nenhum público o achava genuinamente útil: os engenheiros ignoravam os blocos de resultado de negócio como irrelevantes para o seu trabalho diário, e os executivos estavam sobrecarregados com métricas granulares de entrega sem contexto para interpretação. Dividi-lo num painel operacional focado de seis blocos para a equipa e um painel separado de liderança de oito blocos, ambos seguindo os padrões deste tema de combinação com salvaguardas e visualização honesta, produziu envolvimento mensuravelmente mais alto e, criticamente, os executivos reportaram pela primeira vez conseguir explicar o que os números significavam quando questionados pela sua própria liderança.

**Governo.** O painel voltado para o público de serviços digitais de um governo estadual tinha sido criticado publicamente por um gráfico a mostrar o tempo "médio" de processamento usando um eixo y truncado que exagerava visualmente uma melhoria modesta, uma violação dos padrões honestos de visualização do tema 1.6 que um jornalista externo de tecnologia tinha apanhado e reportado. O painel redesenhado da agência, construído explicitamente contra os padrões deste tema, eixos baseados em zero, mediana em vez de média para os dados assimétricos à direita de tempo de processamento, e contexto claramente anotado para qualquer mudança notável, foi especificamente elogiado num artigo de acompanhamento como um modelo de apresentação transparente de dados do setor público, reparando diretamente a credibilidade que o gráfico anterior e enganador tinha danificado.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de painéis deliberados, específicos por público, e honestamente desenhados é utilização genuína e confiança genuína: o exemplo da empresa de logística acima mostra o custo direto de um único painel mal desenhado, baixo envolvimento de ambos os públicos pretendidos, e o benefício direto do redesenho, envolvimento mensuravelmente mais alto uma vez que cada público teve uma vista realmente construída para as suas próprias decisões.

O custo total de propriedade é o esforço de design e manutenção para múltiplos painéis específicos para o propósito em vez de um artefacto abrangente, mais a disciplina contínua de governação (propriedade nomeada, cadência de revisão) que este tema recomenda. Esse custo é modesto comparado com o risco de um painel que fica sem utilização, ou pior, um que ativamente engana o seu público e danifica a credibilidade, como o exemplo governamental acima mostra concretamente.

## Antipadrões e armadilhas

- **Um único painel a tentar servir todo o público:** normalmente não serve bem ninguém.
- **Separar uma métrica incentivada da sua salvaguarda através de vistas diferentes:** recria o risco de exposição a incentivos contra o qual o tema 1.2 alerta.
- **Escolhas desonestas de visualização:** eixos truncados, intervalos de datas escolhidos a dedo, e eixos duplos enganam todos os leitores, por vezes com consequências reputacionais reais.
- **Nenhum proprietário nomeado ou cadência de revisão para o próprio painel:** o artefacto decai exatamente da forma como uma métrica sem proprietário o faz.
- **Nenhuma declaração explícita do que um painel não é para:** convida a deriva avaliativa contra a qual este livro alerta ao longo de todo o texto.
- **Cobertura abrangente de blocos sobre curadoria focada e orientada por decisão:** produz fadiga de painel e enterra o que realmente importa.

## Modelo de maturidade

- **Nível 1, Iniciar:** Um único painel não curado, se existir algum, serve mal todo o público, sem nenhum padrão honesto de visualização ou combinação com salvaguardas.
- **Nível 2, Desenvolver:** Existem algumas vistas específicas por público, mas os padrões de visualização são inconsistentes e a propriedade não é clara.
- **Nível 3, Padronizar:** Os painéis específicos por público com padrões consistentes e honestos de visualização e combinação com salvaguardas são estabelecidos em toda a organização, cada um com um proprietário nomeado.
- **Nível 4, Gerir:** Os painéis são revistos numa cadência regular, com declarações explícitas de não-para-avaliação onde relevante, e os blocos obsoletos são ativamente podados.
- **Nível 5, Orquestrar:** A prática de design de painel da organização é uma capacidade de confiança e bem governada, e a organização consegue apontar para instâncias específicas onde painéis honestos e bem desenhados repararam ou construíram confiança de partes interessadas.

## Ideias para debate

1. Quem é o público primário real do nosso painel atual, versus o seu público pretendido?
2. Algum dos nossos painéis separa uma métrica da sua salvaguarda?
3. Os nossos gráficos atuais passariam uma auditoria honesta de visualização?
4. Cada painel que mantemos tem um proprietário claramente nomeado e responsável?
5. Como seria um redesenho do zero, com prioridade de público, dos nossos painéis?

## Principais conclusões

- Desenhe **painéis específicos por público** para decisões específicas, não um artefacto abrangente a tentar servir toda a gente.
- Aplique **padrões honestos de visualização** (tema 1.6) como requisitos rígidos: eixos baseados em zero, tendência sobre instantâneo, medianas sobre médias para dados assimétricos.
- **Nunca separe uma métrica incentivada da sua salvaguarda** através de vistas diferentes; mantenha os pares de salvaguarda no mesmo painel.
- Atribua um **proprietário nomeado e cadência de revisão** a cada painel, exatamente como o tema 1.4 exige para qualquer métrica governada.
- Declare explicitamente **para que um painel não serve**, especialmente onde dados de atividade ou carga operacional poderiam ser mal usados para avaliação individual.

## Referências e leituras adicionais

- *The Visual Display of Quantitative Information*, de Edward R. Tufte.
- *Storytelling with Data*, de Cole Nussbaumer Knaflic.
- *Information Dashboard Design*, de Stephen Few.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
