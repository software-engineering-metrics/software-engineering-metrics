# 3.3 Métricas de desempenho e proxies de resultado

## Visão geral e motivação

**Desempenho**, o P em SPACE (tema 3.1), é a dimensão mais frequentemente confundida com a atividade, e essa confusão é precisamente o que este tema existe para prevenir. O desempenho pergunta se o trabalho de um engenheiro ou de uma equipa realmente produziu um bom **[resultado](https://en.wikipedia.org/wiki/Outcome_(probability))**: uma funcionalidade que foi entregue e funcionou, um sistema que permaneceu fiável, uma mudança que moveu uma métrica de negócio ou utilizador na direção certa. A atividade (tema 3.4) pergunta apenas quanto movimento ocorreu. Uma equipa pode ser altamente ativa e ter baixo desempenho, entregando mudanças pequenas e constantes que nunca movem um resultado, e o inverso é igualmente possível: uma equipa que entrega raramente mas cujas mudanças pousam fiavelmente exatamente no sítio certo.

A dificuldade com esta dimensão é que o resultado muitas vezes não é atribuível a uma única pessoa ou até a uma única equipa; os resultados de software emergem da colaboração, de decisões tomadas meses antes por pessoas que entretanto se mudaram para outros projetos, de condições de mercado que nenhum engenheiro controla. Os investigadores do SPACE foram explícitos sobre isto: o desempenho deve ser medido ao nível do sistema ou da equipa usando múltiplos sinais convergentes, não reduzido a um único número e certamente não atribuído a um engenheiro individual isoladamente. Este tema leva essa orientação a sério e trata a atribuição de desempenho individual como uma armadilha a evitar ativamente, não um atalho a tomar quando conveniente.

Para equipas grandes, acertar na medição de desempenho é o que separa um programa de métricas que realmente melhora resultados de um que apenas recompensa ocupação visível. As organizações empresariais que comparam o desempenho através de muitas equipas precisam de sinais que resistam à manipulação através do volume de produto bruto; as organizações governamentais que justificam o investimento em tecnologia a órgãos de supervisão precisam de demonstrar que o esforço de engenharia produziu resultados reais, não apenas entregou artefactos, que é precisamente o princípio de resultados-acima-do-produto do tema 1.3 aplicado a esta dimensão específica.

## Princípios-chave

- **O desempenho mede se o trabalho produziu um bom resultado, não quanto trabalho ocorreu.** Esta é a distinção central da dimensão de atividade.
- **Use múltiplos sinais convergentes, nunca um único número de desempenho.** Nenhum proxy individual é suficientemente fiável para ficar sozinho.
- **Meça ao nível da equipa ou do sistema.** A atribuição individual de resultado é normalmente pouco fiável e convida precisamente à manipulação contra a qual este livro avisa ao longo de todo o texto.
- **A qualidade é parte do desempenho, não uma preocupação separada.** O trabalho que é entregue mas quebra outra coisa não teve realmente um bom desempenho.
- **Um sinal de desempenho sem uma decisão associada é decoração**, exatamente segundo o princípio geral do tema 1.1 aplicado a esta dimensão.

## Recomendações

### Combinar vários sinais convergentes em vez de uma única pontuação de desempenho

Extraia evidência de desempenho de múltiplas fontes: taxa de falha de mudanças (tema 2.10) e taxa de escape de defeitos (tema 5.1) para a qualidade, resultados de implementação ligados à adoção real de funcionalidades (tema 5.2) para se o trabalho importou, e avaliação qualitativa de pares ou gestores sobre a contribuição de uma equipa para objetivos estratégicos para contexto que uma métrica pura não consegue capturar. Nenhum destes sozinho é fiável; juntos, quando convergem para a mesma conclusão, são muito mais credíveis do que qualquer número único poderia ser.

### Medir ao nível da equipa, resistir à atribuição individual

Os resultados de software raramente são o produto apenas do trabalho de uma pessoa; emergem de decisões de desenho, feedback de revisão, trabalho anterior de pessoas que entretanto podem ter saído da equipa, e colaboração através de fronteiras. Atribuir um resultado a um único engenheiro é normalmente uma falsa precisão que ignora esta realidade e cria um forte incentivo para os indivíduos protegerem o crédito em vez de colaborarem livremente, precisamente o tipo de distorção de incentivo contra a qual o tema 1.2 avisa.

### Dobrar a qualidade diretamente na definição de desempenho

Uma funcionalidade que é entregue a tempo mas causa uma onda de incidentes de produção não teve um bom desempenho, mesmo que uma vista ingénua apenas de produto a contasse como entregue. Construa a taxa de falha de mudanças, a taxa de escape de defeitos, e os dados de incidente pós-lançamento diretamente em como avalia o desempenho, em vez de tratar a qualidade como uma preocupação separada e desligada medida apenas na Parte 4 e na Parte 6 deste livro.

### Usar os dados de desempenho para informar decisões de investimento e processo, não classificações individuais

O uso produtivo dos dados de desempenho é decidir onde investir mais (uma equipa que entrega consistentemente resultados fortes merece mais recursos e autonomia) e onde investigar (uma equipa cujo trabalho consistentemente falha em pousar merece ajuda, não culpa, segundo o enquadramento diagnóstico do tema 1.1). Classificar indivíduos ou equipas competitivamente uns contra os outros nos dados de desempenho convida precisamente à manipulação e ao dano moral contra os quais este livro avisa e raramente produz melhores resultados do que o uso diagnóstico.

### Ser honesto sobre os limites de atribuição, especialmente para equipas de plataforma e capacitação

As equipas que constroem infraestrutura partilhada, ferramentas internas, ou capacidades de plataforma (o capítulo de engenharia de plataforma do livro companheiro `software-engineering-guide` cobre isto diretamente) têm muitas vezes a sua contribuição para resultados vários passos removida de qualquer métrica única voltada para o cliente. Meça o desempenho destas equipas através do seu efeito nas equipas que capacitam, adoção da sua plataforma, redução de atrito reportada por equipas consumidoras, em vez de forçar uma métrica de resultado direto mal ajustada sobre trabalho que é inerentemente indireto.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Pontuação única de desempenho por equipa | Simples de apresentar e comparar | Falsa precisão; esconde qual sinal subjacente realmente impulsionou a pontuação |
| Múltiplos sinais convergentes | Mais credível, resiste à manipulação de métrica única | Mais difícil de resumir num número; exige mais contexto para interpretar |
| Medição de desempenho ao nível da equipa | Corresponde a como os resultados de software realmente emergem | Não consegue responder diretamente a perguntas sobre contribuição individual |
| Atribuição de desempenho ao nível individual | Parece mais diretamente acionável para avaliações | Normalmente uma falsa precisão; forte risco de manipulação e proteção de crédito |

A tensão central é **precisão versus honestidade**. Um único número de desempenho por equipa, ou pior, por indivíduo, é fácil de comparar e classificar, mas essa precisão é normalmente falsa, escondendo incerteza real sobre atribuição e qualidade por trás de uma figura de aparência limpa. Resolva a tensão aceitando um quadro de múltiplos sinais menos arrumado como o honesto, e resistindo à pressão da liderança ou dos processos de avaliação de desempenho para o colapsar de volta numa única pontuação falsamente precisa.

## Perguntas para debater com a sua equipa

1. **A nossa medição atual de desempenho combina múltiplos sinais convergentes, ou depende de um único número que parece mais preciso do que realmente é?** Audite o que quer que atualmente chame de "métrica de desempenho" e verifique quantos sinais independentes e convergentes realmente a alimentam.

2. **Alguma vez atribuímos o desempenho de uma equipa ou de um indivíduo sem considerar a natureza colaborativa e entre equipas de como o resultado realmente aconteceu?** Escolha uma história de sucesso recente e trace quanto dela dependeu de pessoas, decisões, ou trabalho anterior fora da equipa ou indivíduo creditado.

3. **A nossa medição de desempenho inclui a qualidade, ou apenas a velocidade de entrega e o volume de produto?** Uma funcionalidade entregue que mais tarde causou incidentes significativos de produção não deveria pontuar como alto desempenho; verifique se a sua medição atual realmente apanharia este caso.

4. **Como medimos o desempenho de equipas de plataforma ou capacitação cuja contribuição para resultados é indireta?** Se a resposta honesta é "não medimos, bem," essa lacuna vale a pena nomear e abordar diretamente em vez de deixar essas equipas efetivamente não medidas ou injustamente medidas contra métricas de resultado voltadas para o cliente que não se ajustam ao seu trabalho.

5. **Os dados de desempenho alguma vez foram usados para classificar indivíduos competitivamente uns contra os outros, formal ou informalmente?** Esta deriva, semelhante ao risco de dados de satisfação no tema 3.2, danifica tanto a honestidade dos dados como a vontade da equipa de colaborar abertamente.

6. **Quando os nossos sinais convergentes discordam, por exemplo, alta velocidade de entrega mas taxa de defeitos a subir, o que concluímos, e o nosso processo lida bem com esse desacordo?** O desacordo entre sinais é em si informação valiosa; discuta se a sua equipa atualmente o trata como ruído a ignorar ou como uma descoberta genuína que vale a pena investigar.

## Perspetiva setorial

**Startup.** O desempenho é normalmente visível diretamente: a funcionalidade funcionou, os clientes adotaram-na, a métrica moveu-se. A medição formal de múltiplos sinais é muitas vezes desnecessária a esta escala; o risco é antes atribuir o sucesso ou o fracasso demasiado rapidamente a uma pessoa numa equipa pequena, de movimento rápido e altamente colaborativa onde o crédito e a culpa raramente pertencem apenas a um indivíduo.

**Pequena empresa.** Combine quaisquer dados de entrega e qualidade que já tenha (tema 2.10, tema 5.1) com conversa direta e honesta sobre se o trabalho recente realmente ajudou o negócio, em vez de construir instrumentação formal de múltiplos sinais que não tem capacidade para manter.

**Empresa.** É aqui que a disciplina de medição ao nível da equipa e de múltiplos sinais ganha o seu investimento, já que a pressão para reduzir o desempenho a um único número comparável através de dezenas de equipas é mais forte aqui, e o dano da falsa precisão agrava-se através de todas as decisões de alocação de recursos da organização. Resista a essa pressão explicitamente e construa o caso de múltiplos sinais para porque importa.

**Governo.** Demonstrar que o investimento em engenharia produziu resultados reais, não apenas entregou artefactos, é muitas vezes a pergunta central que um órgão de supervisão faz. A medição de desempenho de múltiplos sinais, ligada explicitamente a métricas de resultado (tema 5.3) em vez de proxies apenas de entrega, dá uma resposta muito mais forte e mais defensável do que uma contagem de atividade ou entrega sozinha.

## Exemplos

**Empresa.** A liderança de uma empresa de tecnologia retalhista tinha estado a classificar informalmente as equipas de engenharia por pontos de história concluídos por sprint, tratando isto como um proxy de desempenho. Depois de adotar uma abordagem de múltiplos sinais, combinando dados de entrega, taxa de falha de mudanças, e adoção de funcionalidades pós-lançamento, a liderança descobriu que a equipa com a taxa mais alta de conclusão de pontos de história tinha a taxa mais baixa de adoção de funcionalidades na empresa: estavam a entregar depressa mas a construir coisas que os clientes não usavam. Realocar as prioridades do roteiro dessa equipa com base no quadro mais completo de desempenho, em vez da classificação enganadora de número único, redirecionou capacidade de engenharia significativa para trabalho de maior impacto dentro de um trimestre.

**Governo.** O programa de engenharia de uma autoridade fiscal nacional precisava de demonstrar a um comité de supervisão que um investimento importante em sistemas tinha melhorado o desempenho, não apenas entregue o âmbito contratado. Em vez de reportar apenas pontos de história ou conclusão de marcos, o programa apresentou um conjunto convergente de sinais: taxa de erro de processamento reduzida, tempo mediano de processamento reduzido, e taxa aumentada de conclusão de autoatendimento bem-sucedida, todos ligados aos componentes específicos do sistema entregues. A apresentação de múltiplos sinais e ligada a resultados satisfez o escrutínio do comité de uma forma que um simples relatório de "entregue dentro do prazo" de um programa anterior não tinha conseguido fazer no ano anterior.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de medir o desempenho através de sinais convergentes e ligados a resultados em vez de um único número de falsa precisão é melhores decisões de alocação de recursos: uma organização que consegue ver qual trabalho de equipa genuinamente move resultados pode investir mais onde importa e investigar onde não importa, em vez de recompensar a equipa que calha parecer mais ocupada. O exemplo retalhista acima é típico: uma classificação enganadora de número único tinha estado a direcionar a atenção de investimento para longe de onde realmente teria ajudado.

O custo total de propriedade é mais alto do que uma abordagem de métrica única, porque exige combinar dados de múltiplas fontes (entrega, qualidade, resultado) e resistir à pressão organizacional para colapsar o quadro de volta num número comparável. Esse custo vale a pena pagar porque a alternativa, uma pontuação única falsamente precisa, induz ativamente em erro as decisões de alocação de recursos que os dados de desempenho se destinam a informar.

## Antipadrões e armadilhas

- **Confundir atividade com desempenho:** o erro mais comum que esta dimensão é especificamente desenhada para prevenir.
- **Atribuição individual de desempenho para resultados colaborativos e entre equipas:** normalmente uma falsa precisão que desencoraja a colaboração.
- **Excluir a qualidade da definição de desempenho:** recompensa trabalho que é entregue mas quebra outra coisa.
- **Forçar uma métrica de resultado direto sobre equipas de plataforma ou capacitação:** mede a coisa errada para trabalho que é inerentemente indireto.
- **Colapsar múltiplos sinais convergentes de volta num único número falsamente preciso sob pressão organizacional:** perde a honestidade que a abordagem de múltiplos sinais foi construída para fornecer.
- **Usar dados de desempenho para classificar indivíduos competitivamente:** danifica tanto a honestidade dos dados como a colaboração de equipa.

## Modelo de maturidade

- **Nível 1, Iniciar:** O desempenho é confundido com atividade ou volume de produto, medido com um único número não examinado.
- **Nível 2, Desenvolver:** Alguns sinais de qualidade são considerados ao lado do produto, mas não há abordagem consistente de múltiplos sinais e a atribuição individual ainda acontece informalmente.
- **Nível 3, Padronizar:** O desempenho é medido ao nível da equipa usando múltiplos sinais convergentes incluindo a qualidade, consistentemente em toda a organização.
- **Nível 4, Gerir:** O desacordo entre sinais convergentes é ativamente investigado; as equipas de plataforma e capacitação têm medidas de desempenho apropriadamente indiretas adequadas ao seu trabalho real.
- **Nível 5, Orquestrar:** Os dados de desempenho informam diretamente decisões de alocação de recursos e investimento, e a organização consegue apontar para decisões específicas de realocação que uma vista de múltiplos sinais permitiu e uma vista de número único teria perdido.

## Ideias para debate

1. Que número único estamos atualmente a usar como proxy de desempenho que deveríamos retirar em favor de um conjunto convergente?
2. Alguma vez creditámos um resultado à equipa ou pessoa errada porque a atribuição estava pouco clara?
3. Como medimos atualmente o desempenho de uma equipa de plataforma ou capacitação?
4. Como seria se os nossos sinais convergentes discordassem uns dos outros no próximo trimestre?
5. Onde uma classificação de pontos de história ou contagem de entrega desviou a nossa atenção de investimento?

## Principais conclusões

- O desempenho mede se o trabalho produziu um **bom resultado**, não quanto movimento ocorreu; não o confunda com a atividade (tema 3.4).
- Use **múltiplos sinais convergentes**, nunca um único número de desempenho, e seja desconfiado de falsa precisão.
- Meça ao **nível da equipa ou do sistema**; a atribuição individual de resultado é normalmente pouco fiável e danifica a colaboração.
- **A qualidade é parte do desempenho**, não uma preocupação separada e desligada.
- Dê às equipas de plataforma e capacitação medidas de desempenho **apropriadamente indiretas** em vez de forçar uma métrica de resultado direto mal ajustada sobre o seu trabalho.

## Referências e leituras adicionais

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Team Topologies*, de Matthew Skelton e Manuel Pais.
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin.
