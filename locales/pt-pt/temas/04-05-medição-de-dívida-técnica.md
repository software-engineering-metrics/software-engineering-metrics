# 4.5 Medição de dívida técnica

## Visão geral e motivação

A **[dívida técnica](https://en.wikipedia.org/wiki/Technical_debt)**, uma metáfora cunhada por Ward Cunningham, descreve o custo acumulado de atalhos passados, decisões expeditivas que entregaram algo mais cedo mas deixaram a base de código mais difícil de mudar depois, da mesma forma que a dívida financeira lhe permite gastar agora ao custo de juros mais tarde. Toda a base de código carrega alguma dívida técnica, e isso não é automaticamente um fracasso; o valor real da metáfora é que enquadra a dívida como uma troca gerível em vez de ou um segredo vergonhoso ou um fardo permanente e inevitável. Este tema trata de tornar essa troca visível e gerível através da medição, em vez de a deixar como uma preocupação vaga e perpetuamente despriorizada que todo o engenheiro sente mas sobre a qual ninguém consegue agir com evidência.

Os temas que precedem este, complexidade (4.1), cobertura (4.2), processamento e pontos quentes (4.3), e análise estática (4.4), revelam cada um uma faceta da dívida técnica. O trabalho deste tema é a síntese: transformar esses sinais separados, mais itens que nunca aparecem em nenhuma análise automatizada (um atalho arquitetural não documentado, uma migração deliberadamente adiada), num único backlog visível e priorizado que compete justamente pelo investimento contra o trabalho de funcionalidades, em vez de perder essa competição por predefinição simplesmente porque não tem nenhuma métrica associada e nenhum advogado em reuniões de planeamento.

Para equipas grandes, a dívida técnica não gerida agrava-se de uma forma que é genuinamente perigosa e fácil de subestimar: cada novo atalho torna a mudança seguinte ligeiramente mais difícil, o que cria pressão para mais atalhos, que se agrava ainda mais. As organizações empresariais e governamentais que mantêm sistemas durante muitos anos estão especialmente expostas a este efeito de agravamento, e a recomendação central deste tema, um backlog de dívida visível, quantificado, e priorizado, é o mecanismo que permite a uma organização realmente gerir a troca deliberadamente em vez de derivar para a crise.

## Princípios-chave

- **A dívida técnica é uma metáfora deliberada para uma troca gerível, não um segredo vergonhoso.** Alguma dívida, assumida conscientemente, é uma decisão razoável de negócio.
- **A dívida não medida perde a competição de priorização contra o trabalho de funcionalidades por predefinição,** não porque importa menos, mas porque não tem nenhum advogado visível.
- **Quantifique a dívida em termos que os decisores conseguem pesar: custo de correção versus custo de a carregar.** Uma afirmação vaga de "o código é confuso" raramente compete bem contra um pedido concreto de funcionalidade.
- **A dívida agrava-se.** Cada novo atalho torna as mudanças futuras marginalmente mais difíceis, e esse efeito acelera se não for gerido.
- **Nem toda a dívida deveria ser paga.** Algumas vale a pena carregar indefinidamente se o custo de a corrigir exceder o custo de viver com ela.

## Recomendações

### Construir um único backlog visível de dívida técnica

Consolide os sinais dos temas anteriores desta parte, valores atípicos de complexidade, áreas de baixa taxa de morte de mutação, pontos quentes, descobertas não resolvidas de análise estática, ao lado de itens de dívida que só um humano consegue identificar (um atalho arquitetural, uma atualização adiada de dependência, uma solução de contorno não documentada), num único backlog visível, rastreado com o mesmo rigor e visibilidade que o seu backlog de funcionalidades. A dívida que vive apenas na memória de engenheiros individuais ou em comentários dispersos de código efetivamente não existe para efeitos de priorização.

### Quantificar o custo de cada item de dívida e o seu custo de manutenção

Para cada item, estime duas figuras: o custo de o corrigir (tempo de engenharia, risco da própria correção) e o custo de o carregar sem corrigir (quanto mais lento fica o trabalho relacionado, quanto risco adicional de defeito carrega, quanto bloqueia outro trabalho). Esta formulação, pedida emprestada diretamente da própria lógica da metáfora da dívida financeira, dá aos decisores uma base real para comparação contra o custo e o valor esperado do trabalho de funcionalidades, em vez de uma queixa abstrata e não quantificada.

### Priorizar usando o impacto, não a idade ou o advogado mais ruidoso

Classifique os itens de dívida pela sua combinação de custo de manutenção e com que frequência o código afetado é tocado (os dados de processamento do tema 4.3 são diretamente úteis aqui): um item num canto raramente modificado da base de código, por mais desagradável que seja, importa muito menos do que um que está diretamente no caminho do seu desenvolvimento mais ativo. Resista a priorizar pelo item que está no backlog há mais tempo ou pelo engenheiro que o defende mais persistentemente, nenhum dos quais se correlaciona fiavelmente com o impacto real de negócio.

### Alocar capacidade dedicada e protegida para remediação de dívida

Um backlog de dívida que tem de competir item a item contra todo o pedido de funcionalidade a chegar em cada ciclo de planeamento tende a perder consistentemente, porque o trabalho de funcionalidades normalmente tem um campeão de negócio mais claro e mais imediato. Aloque uma percentagem protegida de capacidade de engenharia, um padrão comum é algures entre 10% e 20%, especificamente para remediação de dívida, decidida antecipadamente em vez de negociada de novo a cada sprint, para que o pagamento da dívida aconteça como uma questão de rotina em vez de apenas no rescaldo de uma crise.

### Aceitar alguma dívida como permanente, e dizê-lo explicitamente

Nem todo o item pertence a um plano ativo de remediação. Onde o custo de corrigir genuinamente excede o custo de carregar um item indefinidamente, particularmente para código num sistema estável, raramente tocado, e prestes a ser retirado, documente essa decisão explicitamente e mova o item para uma categoria deliberadamente despriorizada em vez de o deixar sentar-se indefinidamente num backlog ativo onde a sua presença contínua implica silenciosamente trabalho que nunca vai realmente acontecer.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Nenhum rastreio formal de dívida | Nenhuma sobrecarga | A dívida perde a competição de priorização por predefinição; agrava-se invisivelmente |
| Consciência informal e ad hoc de dívida | Baixa sobrecarga, alguma visibilidade | Inconsistente; depende da memória e advocacia individual |
| Backlog formal e quantificado de dívida | Compete justamente pelo investimento; permite trocas informadas | Exige manutenção contínua e disciplina de quantificação |
| Capacidade protegida e dedicada de remediação | Garante que o pagamento aconteça consistentemente, não apenas reativamente | Reduz a capacidade disponível para trabalho de funcionalidades a curto prazo |

A tensão central é **pressão imediata de entrega versus manutenibilidade a longo prazo**. O trabalho de funcionalidades quase sempre tem um campeão de negócio mais claro e mais imediato do que a remediação de dívida, o que cria pressão estrutural para a dívida perder todas as decisões individuais de priorização mesmo quando o seu custo cumulativo é alto. Resolva a tensão removendo a remediação de dívida inteiramente da competição item a item através de capacidade protegida e pré-alocada, para que a troca seja decidida deliberadamente e antecipadamente em vez de ser relitigada, e normalmente perdida, em cada único ciclo de planeamento.

## Perguntas para debater com a sua equipa

1. **Temos um único backlog visível de dívida técnica, ou a consciência de dívida vive maioritariamente nas cabeças de engenheiros individuais?** Se a resposta honesta é a segunda, essa é a maior lacuna única que este tema recomenda fechar primeiro.

2. **Para o nosso item principal de dívida, conseguiríamos declarar o seu custo de correção e o seu custo de manutenção em termos específicos o suficiente para comparar justamente contra um pedido de funcionalidade?** Se não, pratique esta quantificação juntos como um exercício de grupo usando um item real e atual.

3. **Que percentagem da nossa capacidade de engenharia realmente vai para remediação de dívida, e essa percentagem foi decidida deliberadamente ou é apenas o que calha sobreviver depois de o trabalho de funcionalidades ser alocado?** Olhe para os seus sprints reais recentes e calcule o número real em vez de confiar na impressão.

4. **O nosso backlog de dívida é priorizado por impacto genuíno de negócio, ou pelo item que foi levantado mais persistentemente ou está sentado há mais tempo?** Verifique cruzadamente a sua priorização atual contra dados de processamento (tema 4.3) e veja se os dois se alinham.

5. **Que itens de dívida deveríamos aceitar explicitamente como permanentes, em vez de os deixar sentar-se indefinidamente num backlog ativo?** Identifique pelo menos um item real onde o custo de corrigir genuinamente excede o custo de carregar, e discuta movê-lo para um estado explicitamente despriorizado.

6. **Como mudou o nosso backlog de dívida ao longo do último ano, a crescer, a encolher, ou a manter-se estável, e essa tendência corresponde à nossa intuição?** Rastreie isto ao longo do tempo em vez de olhar apenas para um instantâneo único; a tendência é muitas vezes mais informativa do que o tamanho absoluto em qualquer momento dado.

## Perspetiva setorial

**Startup.** A dívida deliberada e informada é muitas vezes uma estratégia razoável nesta fase: entregar depressa para validar uma hipótese, com um plano claro para revisitar atalhos específicos se o produto se provar, é uma troca legítima, não um fracasso. O risco é perder o rasto de quais atalhos foram deliberados e reversíveis versus quais se tornaram silenciosamente passivos permanentes e não examinados à medida que a base de código cresce.

**Pequena empresa.** Uma lista simples e partilhada, mesmo que informal, nomeando os seus atalhos conhecidos e o seu custo aproximado de correção é normalmente suficiente a esta escala. A principal disciplina que vale a pena adotar é revisitar periodicamente essa lista em vez de a deixar acumular-se silenciosamente e tornar-se invisível através da familiaridade.

**Empresa.** A capacidade protegida e pré-alocada de remediação importa mais aqui, já que a competição individual de priorização entre dívida e trabalho de funcionalidades favorece fiavelmente as funcionalidades através de dezenas de equipas simultaneamente sem um contrapeso estrutural. Padronize a prática de quantificação de dívida em toda a organização para que os itens de dívida possam ser comparados justamente através de equipas para decisões de investimento ao nível de portefólio.

**Governo.** Os sistemas de longa duração acumulam dívida ao longo de anos ou décadas de mudanças incrementais e individualmente razoáveis de requisitos, muitas vezes sem nenhum rastreio formal de dívida de todo até uma crise forçar a questão. Um backlog quantificado e visível de dívida é uma ferramenta genuinamente persuasiva para justificar orçamento de modernização a órgãos de supervisão, já que transforma uma afirmação vaga de "o sistema é antigo" num caso específico e custeado para investimento.

## Exemplos

**Empresa.** A plataforma de faturação de uma empresa de telecomunicações tinha acumulado mais de uma década de dívida técnica informalmente reconhecida mas nunca formalmente rastreada, com engenheiros a citar rotineiramente "o motor de faturação é uma confusão" em retrospetivas sem nenhum acompanhamento. Um novo diretor de engenharia exigiu que cada equipa construísse um backlog quantificado de dívida, estimando o custo de correção e o custo de manutenção para cada item, e alocou uma fixa de 15% da capacidade de engenharia para remediação de dívida daí em diante. Dentro de um ano, os cinco itens de maior custo de manutenção, representando uma pequena fração do backlog total por contagem, tinham sido resolvidos, e a taxa de falha de mudanças (tema 2.10) para implementações relacionadas com faturação melhorou mensuravelmente, demonstrando o impacto desproporcional de visar primeiro os itens de maior custo de manutenção em vez de trabalhar através do backlog em ordem arbitrária.

**Governo.** O sistema central de processamento de dados de uma agência nacional de estatísticas, originalmente construído há mais de vinte anos, nunca tinha tido uma avaliação formal de dívida apesar do amplo reconhecimento informal entre o pessoal de que partes significativas eram frágeis e pouco compreendidas. Uma avaliação estruturada de dívida, combinando descobertas de análise estática, dados de pontos quentes, e entrevistas com os poucos engenheiros restantes que compreendiam os componentes mais antigos, produziu um backlog quantificado e priorizado que apoiou diretamente um pedido orçamental de modernização de vários anos. Criticamente, a avaliação também identificou explicitamente vários componentes legados estáveis e raramente tocados como razoáveis de deixar inalterados, evitando uma reescrita completa desnecessariamente ampla e cara do sistema em favor de um investimento direcionado nas áreas específicas que os dados mostraram carregarem o custo contínuo mais alto.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de gerir deliberadamente a dívida técnica é o custo evitado de agravamento: cada atalho não abordado torna as mudanças futuras marginalmente mais difíceis, e esse efeito acelera sem intervenção, eventualmente produzindo uma base de código tão frágil que até mudanças simples se tornam lentas e arriscadas. O exemplo de telecomunicações acima mostra o retorno concretamente: visar um pequeno número dos itens de maior custo de manutenção produziu uma melhoria mensurável de entrega e qualidade, desproporcional à fração modesta do backlog total que esses itens representavam.

O custo total de propriedade é a capacidade protegida alocada à remediação, tipicamente 10% a 20% do tempo de engenharia, que é um custo real e visível que compete com a velocidade de funcionalidades a curto prazo. Esse custo vale a pena pagar porque a alternativa, dívida não gerida e a agravar-se, eventualmente custa muito mais em entrega abrandada e taxas elevadas de defeitos através de toda a base de código, não apenas os itens específicos deixados não abordados.

## Antipadrões e armadilhas

- **Nenhum backlog visível e rastreado de dívida:** a dívida perde a competição de priorização por predefinição e agrava-se invisivelmente.
- **Afirmações vagas e não quantificadas de dívida:** raramente competem bem contra pedidos concretos e quantificados de funcionalidades em planeamento.
- **Priorizar a dívida por idade ou volume de advocacia em vez de impacto:** desvia a capacidade limitada de remediação.
- **Nenhuma capacidade protegida para remediação:** o pagamento de dívida só acontece reativamente, depois de uma crise, em vez de como prática rotineira e deliberada.
- **Tratar toda a dívida como igualmente digna de correção:** desperdiça esforço em itens de baixo impacto enquanto os itens de alto custo de manutenção permanecem não abordados.
- **Deixar a dívida sentar-se indefinidamente num backlog ativo sem nunca decidir que é permanente:** implica trabalho futuro que nunca vai realmente acontecer e entope a priorização genuína.

## Modelo de maturidade

- **Nível 1, Iniciar:** A dívida técnica é discutida informalmente, sem backlog rastreado e sem quantificação; perde consistentemente para o trabalho de funcionalidades.
- **Nível 2, Desenvolver:** Algumas equipas rastreiam a dívida informalmente, mas não há quantificação consistente, visibilidade entre equipas, ou capacidade protegida de remediação.
- **Nível 3, Padronizar:** Existe um backlog visível e quantificado de dívida em toda a organização, com capacidade protegida de remediação alocada consistentemente.
- **Nível 4, Gerir:** Os itens de dívida são priorizados por impacto medido (custo de manutenção combinado com processamento), e a dívida permanentemente aceite é explicitamente documentada em vez de deixada ambígua.
- **Nível 5, Orquestrar:** A organização consegue apontar para melhorias específicas e mensuráveis de entrega ou qualidade traçadas até remediação direcionada de dívida, e a gestão de dívida é uma entrada rotineira e confiável para decisões de investimento de engenharia ao lado do trabalho de funcionalidades.

## Ideias para debate

1. Qual é o nosso item único de dívida de maior custo de manutenção agora mesmo, e conseguiríamos quantificá-lo?
2. Que percentagem da nossa capacidade realmente vai para remediação de dívida hoje?
3. Que item de dívida deveríamos aceitar explicitamente como permanente em vez de o deixar ambiguamente no nosso backlog?
4. O nosso backlog de dívida cresceu, encolheu, ou manteve-se estável ao longo do último ano?
5. O que uma avaliação quantificada de dívida revelaria que a nossa consciência informal atual está a perder?

## Principais conclusões

- A dívida técnica é uma **troca gerível, não um segredo vergonhoso**; quantifique-a em vez de a deixar como uma preocupação vaga e perpetuamente despriorizada.
- **Quantifique o custo de correção versus o custo de manutenção** para cada item para que compita justamente contra o trabalho de funcionalidades.
- **Priorize por impacto** (custo de manutenção combinado com processamento), não por idade ou volume de advocacia.
- Aloque **capacidade protegida e dedicada de remediação**, decidida antecipadamente, já que a dívida fiavelmente perde a competição item a item contra o trabalho de funcionalidades de outra forma.
- **Aceite explicitamente alguma dívida como permanente** onde o custo de corrigir excede o custo de carregar, em vez de a deixar ambiguamente num backlog ativo.

## Referências e leituras adicionais

- Cunningham, Ward, "The WyCash Portfolio Management System" (relatório de experiência OOPSLA, 1992).
- *Managing Technical Debt: Reducing Friction in Software Development*, de Philippe Kruchten, Robert Nord, e Ipek Ozkaya.
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler.
- *Your Code as a Crime Scene*, de Adam Tornhill.
