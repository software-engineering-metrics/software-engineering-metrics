# 6.3 Métricas de prevenção, capacidade, e carga operacional

## Visão geral e motivação

A fiabilidade que o capítulo 6.1 introduziu e a resposta a incidentes que o capítulo 6.2 mediu dependem ambas de um sistema humano que este capítulo mede diretamente: a rotação de prevenção, os engenheiros que carregam um dispositivo de alerta e respondem quando algo quebra, e a capacidade de infraestrutura que determina quanta carga um sistema consegue absorver antes de começar a quebrar em primeiro lugar. Uma organização pode ter SLOs excelentes, orçamentos de erro bem desenhados, e uma cultura genuinamente sem culpa de incidentes, e ainda assim esgotar os seus engenheiros de prevenção através de uma carga insustentável que eventualmente degrada a própria fiabilidade que essas outras práticas foram construídas para proteger.

Este capítulo trata a carga operacional como uma família de métricas por direito próprio, diretamente ligada à medição de bem-estar e [esgotamento](https://en.wikipedia.org/wiki/Occupational_burnout) do capítulo 3.2 mas específica ao stress particular e agudo de carregar um dispositivo de alerta: sono interrompido, o custo psicológico de estar em prevenção mesmo quando nada acontece, e o custo cumulativo de carga frequente e mal distribuída de incidentes. Uma organização que mede meticulosamente a fiabilidade dos seus sistemas mas nunca mede a sustentabilidade dos humanos que mantêm esses sistemas fiáveis está a medir apenas metade da imagem, e a metade não medida tende a emergir eventualmente como desgaste, qualidade degradada de resposta a incidentes por parte de respondentes exaustos, ou ambos.

Para equipas grandes, as métricas de prevenção e capacidade revelam problemas de balanceamento de carga que espelham as preocupações de concentração de conhecimento do capítulo 3.5: um pequeno número de engenheiros a absorver uma parcela desproporcional de alertas, muitas vezes as pessoas mais experientes precisamente porque conseguem resolver incidentes mais depressa, o que cria simultaneamente um risco de esgotamento e um risco de fator de autocarro. As organizações empresariais e governamentais que correm serviços críticos ininterruptos dependem das métricas deste capítulo para dotar as rotações de prevenção sustentavelmente em vez de descobrir o custo real apenas através do desgaste.

## Princípios-chave

- **A carga de prevenção é um recurso mensurável e gerível**, não um fardo inevitável e ilimitado que os engenheiros simplesmente têm de absorver.
- **A frequência e a distribuição de alertas são ambas importantes.** Uma média de toda a equipa pode esconder uma concentração severa num pequeno número de indivíduos.
- **A interrupção durante a prevenção carrega um custo mesmo quando nenhum incidente realmente ocorre**, o peso psicológico de estar contactável e responsável.
- **O planeamento de capacidade e a carga de prevenção estão ligados.** A infraestrutura subaprovisionada gera mais alertas, aumentando diretamente o fardo de prevenção.
- **Um sistema sustentável de prevenção protege a própria fiabilidade**, já que respondentes exaustos tomam decisões mais lentas e mais propensas a erro durante incidentes.

## Recomendações

### Rastreie a frequência e a distribuição de alertas, não apenas uma média ao nível da equipa

Meça quantos alertas cada engenheiro individual de prevenção recebe, não apenas uma média de toda a equipa que pode esconder concentração severa. Semelhante às preocupações de fator de autocarro do capítulo 3.5 e de carga de revisor do capítulo 2.9, a carga de prevenção concentra-se muitas vezes num pequeno número de pessoas experientes que conseguem resolver incidentes mais depressa, precisamente o padrão que cria tanto risco de esgotamento como um perigoso ponto único de falha. Rebalanceie as rotações deliberadamente quando esta concentração aparecer.

### Meça o custo psicológico de estar em prevenção, não apenas o tempo ativo de incidente

Estar em prevenção carrega um custo real mesmo durante um turno com zero alertas reais: qualidade de sono reduzida por antecipar uma possível interrupção, atividades pessoais constrangidas, e o stress de baixo grau de responsabilidade contínua. Onde viável, capture isto através de dados de inquérito (capítulo 3.7) especificamente sobre a experiência de prevenção, separada da satisfação geral, já que uma equipa pode reportar satisfação geral razoável enquanto a prevenção especificamente está silenciosamente a corroer o bem-estar.

### Defina limites explícitos para a frequência sustentável de prevenção

Estabeleça uma frequência máxima razoável para quão frequentemente qualquer indivíduo deve estar em prevenção, comummente não mais do que uma semana em quatro ou cinco, e rastreie a frequência real de rotação contra esse limite. Uma rotação que tecnicamente tem pessoas suficientes listadas mas efetivamente depende de duas ou três delas devido a lacunas de competência ou restrições de disponibilidade não está realmente a cumprir o limite, independentemente do que o calendário nominal mostra.

### Ligue o planeamento de capacidade diretamente à carga de prevenção

A infraestrutura subaprovisionada, folga insuficiente para picos de tráfego, configuração inadequada de escalonamento automático, gera mais alertas por definição, aumentando diretamente o fardo de prevenção. Rastreie a utilização de capacidade de infraestrutura e correlacione-a com a frequência de alertas: um serviço que regularmente corre perto do seu teto de capacidade e gera uma parcela desproporcional de alertas é um argumento direto e quantificável para investimento em capacidade, não apenas uma queixa operacional vaga.

### Use as métricas de prevenção para informar decisões de pessoal e contratação, não avaliação individual

Agregue os dados de carga de prevenção ao nível da equipa para construir o caso para pessoal adicional, melhores ferramentas para reduzir alertas de falso positivo, ou investimento arquitetural para reduzir a frequência genuína de incidentes. Seguindo a orientação consistente deste livro para qualquer métrica que toque diretamente em indivíduos (capítulo 1.2, capítulo 3.4), nunca use métricas individuais de resposta a alertas para avaliar o desempenho de um engenheiro específico; o objetivo é pessoal sustentável e design de sistema, não pontuação individual.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Nenhum rastreio formal de carga de prevenção | Nenhuma sobrecarga | O risco de esgotamento e a concentração de fator de autocarro mantêm-se invisíveis até emergirem como desgaste |
| Apenas frequência média de alertas ao nível da equipa | Simples de calcular | Esconde concentração severa individual |
| Rastreio de distribuição de alertas ao nível individual | Revela concentração e risco de esgotamento diretamente | Exige cuidado para usar apenas de forma agregada, nunca para avaliação individual |
| Investimento em capacidade para reduzir o volume de alertas na fonte | Aborda a causa raiz, reduz o fardo sustentavelmente | Exige investimento inicial de infraestrutura |

A tensão central é **aceitação versus investimento**. É fácil tratar um volume alto de alertas simplesmente como o custo inevitável de correr um serviço fiável e pedir aos engenheiros de prevenção para o absorverem, mas essa aceitação eventualmente custa à organização através de desgaste e qualidade degradada de resposta a incidentes por parte de respondentes exaustos. Resolva a tensão tratando a carga elevada de prevenção como um sinal que exige investimento genuíno, melhorias de capacidade, melhor alerta para reduzir falsos positivos, pessoal expandido de rotação, em vez de um fardo inevitável a simplesmente suportar indefinidamente.

## Perguntas para debater com a sua equipa

1. **Qual é a nossa distribuição real de alertas através dos indivíduos na rotação, não apenas a média da equipa?** Puxe os dados reais ao nível individual; uma média de equipa de aspeto razoável pode esconder uma ou duas pessoas a absorver uma parcela dramaticamente desproporcional.

2. **Alguma vez medimos o custo psicológico de estar em prevenção separadamente da satisfação geral?** Se não, discuta se uma pergunta dedicada e curta de inquérito especificamente sobre a experiência de prevenção revelaria algo que o seu inquérito geral de satisfação (capítulo 3.2) está atualmente a perder.

3. **O nosso calendário nominal de rotação de prevenção reflete a realidade, ou depende efetivamente apenas de duas ou três pessoas devido a lacunas de competência ou disponibilidade?** Seja honesto sobre isto; um calendário a listar oito nomes mas a depender efetivamente de duas não está a cumprir nenhum limite razoável de sustentabilidade.

4. **Qual dos nossos serviços gera uma parcela desproporcional de alertas relativamente à sua folga de capacidade, e investimento adicional em infraestrutura reduziria essa carga diretamente?** Faça referência cruzada da frequência de alertas contra dados de utilização de capacidade explicitamente para construir este caso com evidência real.

5. **Os dados de carga de prevenção alguma vez foram usados, mesmo informalmente, para avaliar o desempenho de um indivíduo em vez de informar decisões de pessoal e arquitetura?** Isto arrisca a mesma armadilha de avaliação individual contra a qual o capítulo 3.4 alerta para dados de atividade, aplicada aqui à carga operacional.

6. **Quanto nos custaria perder o nosso engenheiro de prevenção mais alertado para esgotamento ou desgaste, e como se compara isso com o custo de rebalancear a rotação ou investir em correções de causa raiz agora?** Esta comparação concreta constrói muitas vezes um caso mais forte para investimento proativo do que um apelo abstrato à sustentabilidade sozinho.

## Perspetiva setorial

**Startup.** A prevenção é muitas vezes informal e concentrada nos fundadores ou numa pequena equipa inicial de engenharia por necessidade. O risco é normalizar um ritmo insustentável cedo, antes de o design deliberado de rotação alguma vez ter sido considerado, o que se torna muito mais difícil de desfazer uma vez que se tenha tornado a expectativa predefinida para novas contratações que se juntam mais tarde.

**Pequena empresa.** Um calendário simples e explícito de rotação com um limite claro de sustentabilidade (não mais do que uma semana em quatro, por exemplo) é alcançável mesmo sem ferramentas dedicadas de prevenção. A principal disciplina é simplesmente tornar a rotação e a sua justiça visíveis e explícitas em vez de a deixar como um arranjo informal e não declarado.

**Empresa.** A concentração de distribuição de alertas e os seus riscos associados de esgotamento e fator de autocarro escalam mal aqui, já que mais serviços e mais complexidade geralmente significam mais alertas potenciais, e a concentração de especialização agrava o problema. Invista em rastreio de carga ao nível individual (usado apenas de forma agregada para decisões de pessoal), investimento em capacidade para reduzir o volume de alertas na fonte, e rebalanceamento deliberado de rotação.

**Governo.** A infraestrutura pública crítica exige muitas vezes cobertura ininterrupta de prevenção com consequências genuínas se a resposta for atrasada, o que aumenta tanto a importância do pessoal sustentável como a dificuldade de o alcançar sob restrições típicas de pessoal do setor público. Use os dados de carga de prevenção explícita e diretamente para justificar pedidos de pessoal, enquadrando a capacidade sustentável de prevenção como um requisito direto e quantificável de fiabilidade em vez de uma preferência discricionária de pessoal.

## Exemplos

**Empresa.** Uma empresa de infraestrutura de nuvem descobriu, depois de finalmente puxar dados de alertas ao nível individual pela primeira vez, que dois engenheiros sénior de uma rotação de prevenção de quinze pessoas tinham pessoalmente tratado mais de 60% de todos os alertas no ano anterior, tanto porque eram os mais rápidos a resolver incidentes complexos como porque outros membros da rotação tinham aprendido a deferir informalmente a eles em vez de tentarem a resolução eles próprios. Ambos os engenheiros reportaram sintomas significativos de esgotamento no inquérito de bem-estar da empresa (capítulo 3.2) sem que a liderança tivesse anteriormente ligado esse sinal de inquérito aos dados específicos e quantificáveis de concentração de prevenção. Um esforço deliberado de rebalanceamento, incluindo formação direcionada para construir confiança de resolução através da rotação mais ampla e um limite formal de quantos alertas consecutivos qualquer indivíduo poderia ser atribuído, reduziu a parcela dos dois engenheiros para menos de 25% dentro de seis meses, com uma melhoria correspondente no seu bem-estar reportado.

**Governo.** A equipa de engenharia de prevenção de uma concessionária regional de água tinha estado a operar com uma rotação nominal de quatro pessoas para monitorização de infraestrutura crítica, mas os dados de utilização de capacidade revelaram que uma estação específica e envelhecida de bombagem, a correr consistentemente perto do seu teto operacional, gerava quase metade de todos os alertas através de toda a rotação. Uma atualização de capacidade a essa única estação de bombagem, financiada diretamente usando a correlação entre frequência de alertas e capacidade como evidência concreta de apoio no pedido orçamental, reduziu o volume total de alertas em toda a organização em aproximadamente 40% dentro do ano seguinte, demonstrando que o fardo de prevenção tinha sido substancialmente um problema de capacidade disfarçado em vez de puramente um problema de pessoal ou processo.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de gerir deliberadamente a carga de prevenção e capacidade é desgaste evitado e degradação evitada de fiabilidade por respondentes exaustos a tomarem decisões mais lentas e mais propensas a erro. O exemplo de infraestrutura de nuvem acima mostra o risco agravante diretamente: a concentração não gerida criou simultaneamente exposição a esgotamento e a fator de autocarro que um esforço direto e informado por dados de rebalanceamento resolveu a um custo modesto comparado com o risco de perder qualquer um dos engenheiros sénior para o desgaste.

O custo total de propriedade inclui a instrumentação para rastrear a distribuição de alertas ao nível individual (usada cuidadosamente, apenas de forma agregada) e, onde indicado, investimento genuíno em capacidade para reduzir o volume de alertas na fonte. O exemplo da concessionária de água mostra que este investimento se pode pagar a si próprio direta e mensuravelmente, já que uma única correção bem direcionada de capacidade reduziu substancialmente o fardo operacional em toda a organização.

## Antipadrões e armadilhas

- **Rastrear apenas uma contagem média de alertas ao nível da equipa:** esconde concentração severa individual que impulsiona tanto o risco de esgotamento como o de fator de autocarro.
- **Tratar um calendário nominal de rotação como refletindo a realidade:** um calendário que efetivamente depende de duas ou três pessoas não é sustentável independentemente de quantos nomes estão listados.
- **Usar dados individuais de resposta a alertas para avaliar desempenho:** repete a armadilha de avaliação individual contra a qual este livro alerta ao longo de todo o texto, aplicada aqui à carga operacional.
- **Aceitar volume alto de alertas como um custo inevitável de fiabilidade em vez de investigar a capacidade como causa raiz:** perde uma correção direta frequentemente disponível.
- **Nunca ligar os dados de carga de prevenção a dados de inquérito de bem-estar:** perde a oportunidade de identificar e agir sobre um risco agravante de esgotamento antes de emergir como desgaste.
- **Ignorar o custo psicológico de estar em prevenção com zero alertas reais:** subconta o verdadeiro fardo de uma rotação.

## Modelo de maturidade

- **Nível 1, Iniciar:** A carga de prevenção não é rastreada de todo, ou rastreada apenas como uma média de toda a equipa que esconde concentração individual.
- **Nível 2, Desenvolver:** Existem alguns dados de alertas ao nível individual, mas não estão ligados a dados de inquérito de bem-estar ou decisões de investimento em capacidade.
- **Nível 3, Padronizar:** A distribuição de alertas ao nível individual e a correlação de utilização de capacidade são rastreadas consistentemente, com limites explícitos de sustentabilidade na frequência de rotação.
- **Nível 4, Gerir:** Os dados de carga de prevenção são ativamente usados para impulsionar investimento em capacidade e rebalanceamento de rotação, ligados explicitamente a sinais de inquérito de bem-estar.
- **Nível 5, Orquestrar:** A organização consegue apontar para melhorias específicas e mensuráveis tanto na carga operacional como no bem-estar a partir de investimento direcionado em capacidade e redesenho de rotação, e o pessoal sustentável de prevenção é uma entrada rotineira e bem justificada para o planeamento de pessoal e infraestrutura.

## Ideias para debate

1. Qual é o aspeto da nossa distribuição real de alertas ao nível individual neste momento?
2. O nosso calendário nominal de rotação reflete quem realmente resolve a maioria dos incidentes?
3. Que investimento único de capacidade mais reduziria o nosso volume atual de alertas?
4. Alguma vez ligámos os dados de carga de prevenção a sinais de inquérito de bem-estar?
5. Quanto nos custaria perder o nosso engenheiro mais alertado para o esgotamento?

## Principais conclusões

- A carga de prevenção é um **recurso mensurável e gerível**; rastreie a distribuição ao nível individual, não apenas uma média de toda a equipa que pode esconder concentração severa.
- Estar em prevenção carrega um **custo psicológico mesmo com zero alertas reais**; meça isto separadamente da satisfação geral.
- **O planeamento de capacidade e a carga de prevenção estão diretamente ligados**; a infraestrutura subaprovisionada gera mais alertas e mais fardo.
- Use os dados de prevenção para **decisões de pessoal e capacidade**, nunca para avaliação individual de desempenho.
- Um sistema sustentável de prevenção **protege a própria fiabilidade**, já que respondentes exaustos tomam decisões mais lentas e mais propensas a erro.

## Referências e leituras adicionais

- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy Beyer, Chris Jones, Jennifer Petoff, e Niall Richard Murphy, eds.
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, e Stephen Thorne, eds.
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*, de Christina Maslach e Michael P. Leiter.
- *Seeking SRE: Conversations About Running Production Systems at Scale*, editado por David N. Blank-Edelman.
