# 1.1 Porquê medir a engenharia de software

## Visão geral e motivação

A engenharia de software resiste à medição de uma forma que a manufatura não resiste. Uma linha de fábrica produz unidades idênticas, pelo que contá-las diz algo real. O trabalho de software produz artefactos únicos sob requisitos em constante mudança, pelo que uma contagem ingénua, de commits, de linhas, de tickets fechados, não diz quase nada sobre o valor entregue. Essa lacuna entre a dificuldade de medir o trabalho de software e a necessidade muito real de saber se as coisas estão a correr bem é onde este livro inteiro vive. Este tema trata de fechar essa lacuna honestamente: não fingindo que o trabalho de software é tão contável como peças de uma fábrica, mas sendo preciso sobre o que a medição pode e não pode fazer por uma organização de engenharia.

A medição existe para responder a perguntas que uma organização não consegue responder de outra forma com confiança: a nossa entrega está a ficar mais rápida ou mais lenta, a qualidade está a melhorar ou a degradar-se, os engenheiros estão a esgotar-se, este investimento está a compensar. Sem métricas, essas perguntas são respondidas por quem falar com mais confiança na sala, normalmente a pessoa mais sénior ou mais persuasiva presente, e essa resposta está frequentemente errada. As equipas de **[engenharia de software](https://en.wikipedia.org/wiki/Software_engineering)** que saltam a medição não evitam fazer juízos sobre o seu próprio desempenho. Apenas fazem esses juízos com base em sensações, anedotas e no viés de recência, em vez de evidência.

Para equipas grandes, isto deixa de ser um extra desejável e torna-se estrutural. Uma equipa de seis pessoas pode partilhar um modelo mental de como as coisas estão a correr através de conversas diárias. Um departamento de seiscentas pessoas, espalhado por fusos horários e unidades de negócio, não pode. A essa escala, um conjunto partilhado e credível de números é o único substituto prático para a consciência informal que uma equipa pequena obtém de graça. A liderança empresarial precisa de métricas para alocar investimento entre dezenas de equipas a competir pelo mesmo orçamento. As organizações de engenharia governamentais precisam de métricas para demonstrar a assembleias legislativas e ao público que os fundos atribuídos produziram capacidade real, não apenas atividade. Em ambos os contextos, "trabalhámos muito" não é evidência; um número defensável é.

## Princípios-chave

- **Medir para aprender, não para julgar.** O propósito primário de uma métrica de engenharia é informar uma decisão, não pontuar uma pessoa ou uma equipa.
- **Um número sem uma decisão associada é decoração.** Se nenhuma leitura de uma métrica mudasse o que faz a seguir, ela não pertence a um painel de controlo.
- **A medição é um meio, não o objetivo.** O objetivo é melhor software, entregue de forma mais fiável, por uma equipa sustentável. As métricas existem apenas para servir esse objetivo.
- **Toda a métrica tem um custo.** Instrumentação, tempo de revisão, e o risco de distorção comportamental abordado no tema 1.2 custam todos algo. Uma métrica tem de compensar esse custo.
- **O silêncio também é uma decisão.** Escolher não medir algo é uma escolha com consequências, não uma predefinição neutra.

## Recomendações

### Começar pela decisão, não pelo painel de controlo

Antes de instrumentar fosse o que fosse, nomeie a decisão que a métrica vai informar. "Queremos saber se o nosso novo pipeline de implementação reduziu as taxas de incidentes" é uma pergunta moldada por uma decisão; "vamos acompanhar tudo o que a ferramenta conseguir exportar" não é. Trabalhar a partir da decisão mantém o conjunto de métricas pequeno e mantém cada painel defensável quando alguém pergunta porque existe. Se não conseguir nomear a decisão que uma métrica informaria, não a construa ainda. O tema 1.3 aprofunda a versão de resultados-acima-do-produto desta disciplina.

### Separar o uso diagnóstico do uso avaliativo

Uma métrica usada para diagnosticar um problema de sistema (porque é que o nosso tempo de espera está a subir lentamente) comporta-se de forma completamente diferente da mesma métrica usada para avaliar uma pessoa ou equipa (de quem é o tempo de espera pior). A primeira convida à investigação e à melhoria. A segunda convida ao ocultamento e à manipulação, porque agora o número tem uma consequência reputacional ou financeira associada. Decida explicitamente, por escrito, para que uso serve uma métrica, e nunca deixe uma métrica diagnóstica deslizar para uso avaliativo sem reconsiderar deliberadamente o risco. Esta distinção repete-se constantemente ao longo deste livro e está formalizada na secção de não-objetivos da carta de métricas descrita no tema 1.4.

### Tratar a medição como uma hipótese, não como um facto

Uma métrica é um proxy para algo com que realmente se importa, não a própria coisa. A frequência de implementação é um proxy para a capacidade de entrega, não a capacidade de entrega em si. Trate cada métrica como uma hipótese em teste contínuo: será que este número ainda acompanha aquilo com que nos importamos, ou será que o mundo mudou e deixou o proxy para trás? Revisite essa pergunta numa cadência fixa em vez de assumir que uma métrica bem escolhida há dois anos continua bem escolhida hoje, especialmente à medida que as ferramentas, a estrutura da equipa, ou (ver Parte 7) a própria natureza do trabalho mudam.

### Tornar visível a ausência de medição

Em grandes organizações, a lacuna mais arriscada não é uma métrica má, é uma área que ninguém está a medir, de todo, porque é difícil de instrumentar: experiência do programador, atrito de dependências entre equipas, a erosão do conhecimento institucional. Nomeie estas lacunas explicitamente na sua carta de métricas em vez de as deixar invisíveis por predefinição. Uma organização que sabe o que não está a medir, e porquê, está numa posição muito mais forte do que uma que esqueceu silenciosamente que essas áreas existem.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Instrumentação pesada, muitas métricas | Visibilidade ampla, menos pontos cegos | Fadiga de painel de controlo, maior superfície de manipulação, custo de manutenção mais elevado |
| Métricas mínimas, orientadas por decisão | Foco, baixa sobrecarga, cada métrica defensável | Risco de perder um problema emergente fora do conjunto escolhido |
| Métricas apenas para diagnóstico | Incentiva o relato honesto e a investigação | A liderança pode ainda assim usá-las informalmente de forma avaliativa |
| Métricas ligadas à avaliação individual | Parece responsabilizador, fácil de explicar a executivos | Forte incentivo à manipulação; prejudica a confiança; normalmente mede a coisa errada |

A tensão central é **cobertura versus foco**, e é agudizada por **diagnóstico versus julgamento**. Poucas métricas e desenvolve pontos cegos que só emergem como uma crise; demasiadas e ninguém consegue agir sobre nenhuma delas, enquanto cada uma à qual se associa peso avaliativo convida à distorção. Resolva-a começando mínimo e orientado por decisão, acrescentando uma métrica apenas quando uma decisão específica e nomeada precisa dela, e defendendo explicitamente a fronteira apenas-diagnóstica no trabalho de governação do tema 1.4 em vez de a deixar erodir por predefinição.

## Perguntas para debater com a sua equipa

1. **Para cada métrica no nosso painel de controlo atual, que decisão desencadearia uma boa leitura e que decisão desencadearia uma má leitura?** Se ambas as leituras levam à mesma ação, ou a nenhuma ação, a métrica é decoração. Percorra o seu painel de controlo painel a painel e force uma resposta honesta para cada um. Este exercício reduz habitualmente a metade um painel de controlo inchado numa única sessão, porque a maior parte da expansão acumula-se a partir de métricas que ninguém alguma vez remove, em vez de métricas que alguém acrescentou deliberadamente por uma razão que ainda se sustenta.

2. **Quais das nossas métricas são usadas diagnosticamente, e quais se tornaram silenciosamente avaliativas?** Uma métrica construída para compreender uma restrição de sistema pode derivar para ser usada para classificar equipas ou indivíduos sem que ninguém decida isso de propósito, muitas vezes através de um comentário informal numa reunião de revisão que se torna hábito. Uma vez que essa deriva aconteça, o número deixa de ser credível, porque agora as pessoas têm uma razão para o fazer parecer bom em vez de o tornar preciso. Nomeie o uso pretendido de cada métrica por escrito e verifique a prática atual contra isso.

3. **O que não estamos a medir porque é difícil de instrumentar, e quanto é que essa lacuna nos está a custar?** Os pontos cegos mais perigosos são aqueles que nunca chegam a um painel de controlo precisamente porque resistem a uma medição fácil: atrito de dependências entre equipas, a erosão do conhecimento institucional, ou a acumulação silenciosa de soluções frágeis de recurso. Traga uma lista das coisas com que todos se preocupam privadamente mas que ninguém acompanha, e seja honesto sobre o porquê.

4. **Se eliminássemos esta métrica amanhã, quem notaria, e o que perderia?** Uma métrica que ninguém sentiria falta é uma métrica que não está a informar nenhuma decisão. Esta pergunta revela painéis de vaidade que sobrevivem puramente por inércia. Para uma organização grande com dezenas de painéis de controlo de equipa, esta disciplina de poda importa tanto quanto a disciplina de acrescentar novas métricas, antes de mais.

5. **Quanto custa realmente produzir e manter cada métrica no nosso painel de controlo, incluindo o tempo de engenharia por trás da instrumentação?** As métricas não são grátis. Pipelines, painéis de controlo, e o tempo de revisão gasto a discutir um número carregam todos um custo recorrente que é fácil de subestimar porque está distribuído por muitas pequenas tarefas em vez de um item de linha visível. Traga o seu esforço real de instrumentação e manutenção e pese-o contra o valor de decisão da pergunta 1.

6. **Onde é que a medição se tornou um substituto para o julgamento, e onde é que o julgamento se tornou um substituto para a medição?** Ambos os modos de falha são reais. Uma equipa que terceiriza cada decisão a um painel de controlo perde o julgamento contextual que apanha o que o número perde; uma equipa que ignora os dados disponíveis em favor da voz mais alta na sala repete precisamente o problema com que este tema abre. O objetivo são métricas que informam o julgamento, não métricas que o substituam.

## Perspetiva setorial

**Startup.** Com um punhado de engenheiros, a maior parte do que este tema adverte, a deriva para uso avaliativo, os pontos cegos, o inchaço de painéis de controlo, é fácil de evitar simplesmente porque toda a gente fala diariamente. O risco é o oposto: saltar a medição por completo porque parece uma sobrecarga que a equipa não pode pagar. Escolha duas ou três perguntas moldadas por decisão (estamos a entregar suficientemente depressa, a qualidade está a aguentar-se) e instrumente apenas essas.

**Pequena empresa.** Sem uma plataforma dedicada ou uma equipa de dados, apoie-se no que as suas ferramentas existentes já reportam em vez de construir instrumentação personalizada. O painel de controlo de um processador de pagamentos, as métricas de resposta de uma ferramenta de suporte, e o histórico de builds do seu fornecedor de CI cobrem normalmente as decisões que mais importam. Resista à tentação de comprar uma plataforma dedicada de análise de engenharia antes de ter provado que vai agir sobre o que ela lhe diz.

**Empresa.** O risco central são métricas que derivam silenciosamente de uso diagnóstico para uso avaliativo à medida que sobem pelas camadas de gestão, e painéis de controlo que crescem por acreção porque ninguém é dono da tarefa de os podar. A governação (tema 1.4) não é opcional a esta escala. Padronize definições entre unidades de negócio, e construa uma revisão regular de retirada no próprio programa de métricas.

**Governo.** As métricas aqui carregam frequentemente peso estatutário ou orçamental, o que eleva tanto o valor de as acertar como o custo de as errar. Um número reportado a uma assembleia legislativa ou a um órgão de supervisão precisa de uma metodologia documentada, uma definição estável entre períodos de relato, e honestidade sobre as suas limitações. Trate "atualmente não medimos isto" como uma resposta que pode precisar de defender, não uma falha privada a esconder.

## Exemplos

**Empresa.** A organização de engenharia de uma seguradora global tinha crescido para mais de sessenta equipas scrum, cada uma com o seu próprio painel de controlo informal, nenhum comparável a qualquer outro. A liderança não conseguia responder a uma pergunta básica: qual dos nossos dez investimentos estratégicos em plataformas está realmente a entregar software mais rápido. A correção não foi mais métricas, foram menos, e melhores: a organização definiu um núcleo partilhado e orientado por decisão de métricas DORA (tema 2.10) calculadas de forma idêntica em todo o lado a partir dos mesmos dados de pipeline, retirou quarenta painéis de controlo específicos de equipa, e conseguiu finalmente comparar áreas de investimento numa base comum dentro de dois trimestres.

**Governo.** A equipa de serviço digital de uma agência fiscal nacional tinha sido chamada por um comité de supervisão a demonstrar o retorno de um programa de modernização de vários anos. As métricas existentes da equipa eram inteiramente internas e baseadas em atividade: pontos de história concluídos, sprints fechados. Nada disso respondia à pergunta real do comité. A equipa construiu, em vez disso, um pequeno conjunto de métricas de resultado: tempo mediano para resolver um problema de registo de um cidadão, taxa de adoção do canal digital, e taxa de defeitos escapados no novo sistema, e reportou-as trimestralmente com uma metodologia documentada. As perguntas do comité mudaram de "provem que estão a trabalhar" para "como replicamos isto na próxima agência," que é o resultado que um conjunto de métricas bem escolhido deve produzir.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da medição deliberada é a qualidade da decisão. Uma organização que consegue dizer, com evidência, "o nosso tempo de espera melhorou 30% após o investimento na plataforma" consegue defender esse investimento, repetir o que funcionou, e parar o que não funcionou. Uma organização que depende de anedotas não consegue fazer nada disso com confiança, e acaba por relitigar os mesmos argumentos a cada ciclo orçamental porque ninguém consegue apontar para um número em que ambos os lados confiem.

O custo da medição não é o painel de controlo. É a disciplina contínua: instrumentação, manutenção de definições, e a poda periódica que este tema recomenda. Esse custo total de propriedade é real mas modesto em comparação com o custo da alternativa, que é uma grande organização a tomar decisões tecnológicas de milhões de euros com base em quem argumentou de forma mais persuasiva na sala. O retorno de um programa de métricas não são as métricas em si; são as decisões tomadas melhor por causa delas.

## Antipadrões e armadilhas

- **Medir tudo o que a ferramenta exporta:** transforma um painel de controlo em ruído e convida à manipulação numa superfície enorme sem valor de decisão correspondente.
- **Métricas sem decisão nomeada:** decoração que custa esforço de manutenção e não diz a ninguém nada acionável.
- **Deriva silenciosa de uso diagnóstico para avaliativo:** a forma mais rápida de destruir a confiança num número.
- **Tratar uma métrica como facto em vez de hipótese:** um proxy que estava certo há dois anos pode estar errado hoje, e ninguém verifica.
- **Confundir a ausência de um número mau com a presença de um bom:** uma métrica que nunca se olha não pode dizer que algo está errado.
- **Construir capacidade de medição antes de decidir o que decidir:** instrumentação à procura de uma pergunta desperdiça tempo real de engenharia.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas, se existirem de todo, são ad hoc, pessoais para quem as construiu, e ninguém consegue dizer que decisão alguma delas informa.
- **Nível 2, Desenvolver:** Existe um conjunto básico de métricas para algumas equipas, maioritariamente copiado de uma estrutura ou das predefinições de uma ferramenta, sem uma ligação clara a uma decisão.
- **Nível 3, Padronizar:** Cada métrica acompanhada tem um propósito documentado e uma classificação explícita diagnóstica-versus-avaliativa, aplicada consistentemente em toda a organização.
- **Nível 4, Gerir:** As métricas são revistas numa cadência fixa contra as decisões que informam; as métricas que deixam de compensar o seu custo são retiradas, e todo o conjunto é medido tanto pelo custo como pelo valor.
- **Nível 5, Orquestrar:** A medição é uma capacidade viva: a organização identifica rotineiramente os seus próprios pontos cegos, testa se os seus proxies ainda acompanham a realidade, e trata o próprio programa de métricas como algo a melhorar, não apenas a manter.

## Ideias para debate

1. Que métrica no nosso painel de controlo teríamos mais dificuldade em justificar manter se nos perguntassem hoje?
2. Que decisão tomámos no último trimestre usando uma métrica, em vez de uma opinião?
3. Onde é que, na nossa organização, uma métrica diagnóstica se tornou silenciosamente avaliativa?
4. O que temos medo de medir, e porquê?
5. Se o nosso programa de métricas desaparecesse amanhã, que decisões piorariam?

## Principais conclusões

- A medição existe para servir **decisões**, não para existir por si mesma; uma métrica sem uma decisão associada é decoração.
- Mantenha o uso **diagnóstico** separado do uso **avaliativo**, por escrito, e esteja atento à deriva silenciosa entre eles.
- Trate cada métrica como uma **hipótese** sobre o que representa, não como um facto assente, e revisite essa hipótese numa cadência.
- O silêncio, escolher não medir algo, é em si mesmo uma decisão com consequências; torne os pontos cegos visíveis em vez de os deixar invisíveis por predefinição.
- O custo total de um programa de métricas é real; pese-o explicitamente contra o valor de decisão que cada métrica fornece.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *How to Measure Anything*, de Douglas W. Hubbard.
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin.
- *Thinking, Fast and Slow*, de Daniel Kahneman.
- Programa DevOps Research and Assessment (DORA) da Google, [dora.dev](https://dora.dev/).
