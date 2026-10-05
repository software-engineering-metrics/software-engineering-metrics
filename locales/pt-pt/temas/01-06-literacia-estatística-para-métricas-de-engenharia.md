# 1.6 Literacia estatística para métricas de engenharia

## Visão geral e motivação

Não precisa de um diploma em estatística para gerir bem um programa de métricas, mas precisa de evitar um pequeno número de erros específicos e comuns que tornam métricas de outra forma bem governadas e bem instrumentadas ativamente enganadoras. Uma equipa pode fazer tudo certo, nomear uma decisão clara, evitar a lei de Goodhart, ponderar em direção aos resultados, governar a propriedade, instrumentar fiavelmente, e ainda assim tirar a conclusão errada porque leu uma média onde precisava de um percentil, confundiu ruído com uma tendência, ou caiu numa coincidência disfarçada de causa. Este tema é o julgamento estatístico mínimo que este livro assume que o leitor de cada tema posterior já tem.

O problema central é que as métricas de engenharia são normalmente ruidosas, enviesadas, e de amostra pequena para os padrões da estatística formal. A contagem semanal de implementações de uma única equipa não é uma curva de sino suave; é um punhado de pontos de dados com valores atípicos grandes ocasionais (um grande lançamento, uma série de reversões impulsionada por incidentes). Aplicar intuições ingénuas construídas para grandes conjuntos de dados bem comportados a este tipo de dados produz conclusões confiantes e erradas regularmente. Aprender a detetar quando um número é demasiado ruidoso para confiar, quando uma média está a mentir, e quando duas coisas a mover-se juntas não dizem nada sobre causalidade não é rigor opcional, é o que separa um programa de métricas que ensina algo verdadeiro a uma organização de um que ensina algo que soa plausível e é falso.

À escala empresarial e governamental, os erros estatísticos agravam-se porque uma conclusão enganadora, uma vez aceite pela liderança, é posta em ação em muitas equipas antes de alguém pensar em reexaminar a análise subjacente. Uma comparação estatisticamente ingénua entre duas divisões, ou entre antes e depois de uma grande reorganização, pode moldar decisões de recursos durante anos com base em nada mais do que ruído ou um fator de confusão que ninguém controlou. Este tema existe para tornar essa falha menos provável.

## Princípios-chave

- **Uma mediana ou um percentil normalmente diz mais do que uma média.** Os dados de engenharia são rotineiramente enviesados por valores atípicos que as médias absorvem e os percentis não.
- **Amostras pequenas produzem números ruidosos.** Uma percentagem calculada a partir de um punhado de eventos oscila violentamente por razões que nada têm a ver com mudança real.
- **A regressão à média engana as pessoas constantemente.** Uma leitura invulgarmente boa ou má tende a ser seguida de uma mais normal, com ou sem qualquer intervenção.
- **Correlação não é causalidade, e as variáveis de confusão estão em todo o lado.** Duas métricas que se movem juntas podem partilhar uma terceira causa oculta em vez de uma impulsionar a outra.
- **Um [gráfico de controlo](https://en.wikipedia.org/wiki/Control_chart) vence uma única comparação antes-e-depois.** Ver o intervalo normal de variação é o que lhe permite distinguir uma mudança real de ruído.

## Recomendações

### Usar por predefinição medianas e percentis para dados enviesados

As métricas de engenharia baseadas em tempo, tempo de espera, tempo de recuperação de incidentes, latência de resposta, são quase sempre enviesadas para a direita: a maioria dos valores agrupa-se em baixo, com uma cauda longa de valores atípicos grandes ocasionais. Uma média puxada por essa cauda pode pintar um quadro que nenhum caso típico realmente se assemelha. Reporte a **mediana** (o valor do meio, onde metade das observações está acima e metade abaixo) ao lado do **percentil 90** ou **95** (o valor abaixo do qual caem 90% ou 95% das observações), que juntos mostram tanto o caso típico como a cauda do pior caso que uma equipa realmente experiencia. O tema de KPI do livro companheiro `software-engineering-guide`, e cada tema de métrica de entrega na Parte 2 deste livro, assume este hábito ao longo de todo o texto.

### Saber quando uma amostra é demasiado pequena para confiar

Uma taxa de falha de mudanças calculada a partir de três implementações numa semana lenta não é um sinal significativo; uma única falha move a percentagem de 0% para 33% da noite para o dia por razões que podem não ter nada a ver com o risco subjacente. Antes de reagir a uma métrica baseada em percentagem, verifique a contagem subjacente. Como regra prática, trate uma taxa calculada a partir de menos de aproximadamente vinte a trinta eventos subjacentes como ruidosa e exigindo uma janela de observação mais longa antes de tirar uma conclusão, e diga-o explicitamente no painel de controlo em vez de apresentar uma percentagem volátil de amostra pequena com a mesma confiança que uma de amostra grande e estável.

### Vigiar a regressão à média antes de creditar uma intervenção

Se a pior semana de sempre de uma equipa em incidentes for seguida de atenção da liderança e uma subsequente melhoria, é tentador creditar a intervenção. Muitas vezes, parte dessa melhoria teria acontecido de qualquer forma, porque uma leitura invulgarmente extrema tende a ser seguida de uma mais típica puramente como um artefacto estatístico, um fenómeno chamado **regressão à média**. Proteja-se contra isto comparando com uma linha de base histórica mais longa em vez do único ponto de dados extremo que despoletou a atenção, e sendo apropriadamente humilde sobre quanto de qualquer melhoria observada atribuir a uma ação específica.

### Procurar variáveis de confusão antes de afirmar que uma métrica causou um resultado

Quando duas métricas se movem juntas, a frequência de implementação a subir ao lado da satisfação do cliente, resista ao reflexo de afirmar que uma causou a outra antes de considerar uma **variável de confusão**: um terceiro fator oculto a impulsionar ambas. O lançamento de uma nova funcionalidade pode impulsionar independentemente tanto a frequência de implementação (mais correções de seguimento) como a satisfação (a própria funcionalidade), sem nenhuma ligação causal entre as duas métricas. Antes de apresentar uma correlação como evidência de causalidade, pergunte ativamente o que mais mudou ao mesmo tempo que poderia explicar ambos os movimentos.

### Usar um gráfico de controlo, não um único instantâneo antes-e-depois

Um **gráfico de controlo** traça uma métrica ao longo do tempo com o seu intervalo normal de variação mostrado explicitamente, tipicamente como bandas à volta de uma média central. Isto permite-lhe distinguir uma mudança genuína, um ponto de dados ou uma sequência sustentada fora do intervalo normal, de ruído comum que uma única comparação antes-e-depois não consegue distinguir. Antes de declarar "o número melhorou depois da mudança," trace dados históricos suficientes para ver como é a variação normal, e verifique se a leitura pós-mudança realmente cai fora dela.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Médias | Simples, familiares, fáceis de calcular | Distorcidas por valores atípicos em dados de engenharia enviesados |
| Medianas e percentis | Robustos a valores atípicos, mostram o caso típico e a cauda juntos | Ligeiramente menos familiares a públicos não técnicos |
| Comparação única antes-e-depois | Rápida, intuitiva, fácil de apresentar | Vulnerável à regressão à média e ao ruído |
| Gráficos de controlo e linhas de base mais longas | Distingue mudanças reais de ruído de forma fiável | Exige mais dados históricos e mais explicação a um público não técnico |

A tensão central é **simplicidade versus rigor**. As médias e as comparações únicas antes-e-depois são mais fáceis de calcular e explicar, o que é precisamente porque dominam o relato casual, mas são também as duas técnicas mais propensas a produzir uma conclusão confiante e errada no tipo de dados ruidosos e enviesados que as métricas deste livro geram. Resolva a tensão usando por predefinição as técnicas mais rigorosas, medianas, percentis, e gráficos de controlo, para qualquer decisão com consequência real, e reservando as técnicas mais simples para olhares exploratórios de baixo risco onde uma leitura errada custa pouco.

## Perguntas para debater com a sua equipa

1. **Quais dos nossos painéis de controlo reportam uma média onde uma mediana ou percentil contaria uma história mais verdadeira?** As métricas de engenharia baseadas em tempo são quase sempre enviesadas, e uma média em dados enviesados pode parecer bem enquanto o caso típico, ou a cauda do pior caso, conta uma história inteiramente diferente. Audite os seus painéis baseados em tempo especificamente para esta substituição.

2. **Quão pequena é a amostra subjacente por trás das nossas métricas baseadas em percentagem, e tratamos uma métrica de dez eventos com a mesma confiança que uma de mil?** Uma taxa volátil de amostra pequena apresentada sem a sua contagem subjacente convida a uma reação exagerada ao ruído. Verifique os seus painéis de taxa de falha de mudanças e similares para esta lacuna.

3. **Alguma vez creditámos uma intervenção por uma melhoria que a regressão à média teria produzido de qualquer forma?** Este é um dos erros estatísticos mais fáceis de cometer e um dos mais difíceis de notar depois do facto, porque a intervenção e a melhoria realmente aconteceram por essa ordem. Olhe para trás para uma história recente de "corrigimos isto" e pergunte honestamente se a comparação de linha de base foi suficientemente longa para excluir isto.

4. **Onde assumimos que uma métrica causou outra sem verificar uma variável de confusão?** Duas coisas a mover-se juntas são comuns; uma causar a outra é uma afirmação mais forte que precisa de mais evidência. Escolha uma correlação em que a sua equipa atualmente acredite e tente nomear um confundidor plausível que a explicaria sem nenhuma ligação causal de todo.

5. **Temos dados históricos suficientes para saber como é a variação normal para as nossas métricas mais importantes, ou estamos a comparar pontos únicos?** Sem um sentido do intervalo normal, qualquer leitura única parece alarmante ou tranquilizadora dependendo do humor em vez da evidência. Discuta se a sua métrica mais observada alguma vez foi traçada como um gráfico de controlo em vez de um único número.

6. **Como comunicamos atualmente a incerteza a interessados não técnicos, e o nosso painel de controlo implica mais precisão do que os dados realmente suportam?** Um gráfico sem nenhuma indicação de variação normal ou tamanho de amostra pode fazer uma equipa de liderança reagir exageradamente ao ruído ou, tão frequentemente, descartar um sinal real como ruído. Discuta como o seu relato poderia comunicar isto honestamente sem se tornar ilegível.

## Perspetiva setorial

**Startup.** As equipas pequenas geram amostras pequenas em quase tudo, o que significa que a cautela de amostra pequena deste tema importa constantemente. Resista a tirar conclusões fortes de uma única semana má ou uma única ótima; com apenas um punhado de pontos de dados, a resposta honesta a "isto é uma tendência" é muitas vezes "ainda não sabemos."

**Pequena empresa.** Os painéis de controlo integrados de ferramentas prontas a usar assumem muitas vezes médias e comparações de período único por predefinição porque são as mais simples de calcular e mostrar. Onde a ferramenta o permitir, mude para medianas em métricas baseadas em tempo, e seja cético quanto a qualquer manchete "subiu 40% este mês" calculada a partir de uma contagem subjacente pequena.

**Empresa.** Os erros estatísticos a esta escala ficam cimentados em decisões de recursos e reorganização que afetam centenas de pessoas. Invista em analistas ou praticantes de dados integrados que consigam construir gráficos de controlo adequados e verificar confundidores antes de uma comparação entre unidades de negócio ou antes-e-depois de uma grande mudança ser apresentada à liderança como facto assente.

**Governo.** Uma comparação estatisticamente ingénua que alimenta um relatório público ou uma justificação orçamental pode ter consequências reais desproporcionadas e convida precisamente ao tipo de escrutínio que expõe análises descuidadas publicamente. Aplique as técnicas mais rigorosas, gráficos de controlo, tamanhos de amostra documentados, verificações de confundidores, como prática permanente para tudo o que é publicado externamente, não apenas como um esforço ocasional de melhor esforço.

## Exemplos

**Empresa.** A equipa de liderança de uma empresa de software celebrou uma melhoria de 25% na taxa de falha de mudanças no mês seguinte à introdução de uma nova política de revisão de código, creditando a política diretamente. Um olhar mais atento encontrou que o mês "antes" tinha sido invulgarmente mau, impulsionado por uma migração de uma única equipa que correu mal, e o tamanho de amostra subjacente em ambos os meses estava abaixo de trinta implementações em toda a empresa. Um gráfico de controlo usando doze meses de histórico mostrou que a nova leitura estava bem dentro da variação normal, não uma mudança genuína de patamar, e o efeito real da política, embora real, era muito menor do que a manchete sugeria.

**Governo.** Uma agência de trânsito público reportou uma grande melhoria ano a ano no desempenho pontual para um sistema de agendamento recém-digitalizado, comparando um único trimestre "antes" a um único trimestre "depois." Uma revisão independente encontrou que o trimestre "antes" tinha coincidido com um encerramento de construção não relacionado que tinha deprimido o desempenho em toda a rede, e uma linha de base mais longa mostrou que o desempenho pontual já estava a recuperar antes de o novo sistema ser lançado. O relatório revisto da agência usou um gráfico de controlo completo de vários anos e atribuiu uma melhoria mais modesta, mas mais defensável, especificamente ao novo sistema.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da literacia estatística é o desvio evitado: uma organização que atribui corretamente uma melhoria, ou reconhece corretamente o ruído como ruído, gasta o seu próximo investimento onde realmente vai ajudar em vez de perseguir um efeito fantasma. O exemplo retalhista acima é típico: uma empresa que acreditava que a sua política de revisão sozinha impulsionou uma melhoria de 25% poderia subinvestir noutros contribuintes reais, ou exagerar o valor da política de uma forma que induz em erro decisões futuras.

O custo total do rigor estatístico é maioritariamente uma mudança de hábito em vez de novas ferramentas: escolher uma mediana em vez de uma média, verificar um tamanho de amostra antes de reagir, traçar uma linha de base mais longa antes de declarar vitória. Estes hábitos custam pouco a adotar e previnem o custo muito maior e mais difícil de detetar de decisões tomadas com base em conclusões confiantes e erradas.

## Antipadrões e armadilhas

- **Reportar uma média em dados enviesados baseados em tempo:** esconde o caso típico e a cauda por trás de um único número enganador.
- **Reagir a uma percentagem sem tamanho de amostra visível:** trata o ruído de um punhado de eventos como se fosse uma tendência estável e significativa.
- **Creditar uma intervenção sem excluir a regressão à média:** um erro comum, fácil de cometer, difícil de notar.
- **Afirmar causalidade a partir de correlação sem considerar confundidores:** exagera o que os dados realmente suportam.
- **Comparar um único instantâneo antes-e-depois em vez de traçar uma linha de base mais longa:** não consegue distinguir uma mudança real de variação comum.
- **Implicar mais precisão do que os dados suportam em relatórios voltados para a liderança:** convida a uma reação exagerada ao ruído ou ao descarte de um sinal real.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas são reportadas como médias brutas e instantâneos únicos antes-e-depois sem atenção ao tamanho de amostra, ao enviesamento, ou à variação de linha de base.
- **Nível 2, Desenvolver:** Alguns analistas aplicam medianas ou percentis informalmente, mas não há prática organizacional consistente e os confundidores raramente são verificados.
- **Nível 3, Padronizar:** As medianas e percentis são a predefinição para métricas baseadas em tempo enviesadas; os tamanhos de amostra são mostrados ao lado de métricas baseadas em percentagem em toda a organização.
- **Nível 4, Gerir:** Os gráficos de controlo com linhas de base históricas são prática padrão para qualquer afirmação de uma mudança genuína; as variáveis de confusão são ativamente consideradas antes de afirmações causais serem feitas em relatórios.
- **Nível 5, Orquestrar:** O rigor estatístico está construído na própria ferramenta, os painéis de controlo renderizam percentis e bandas de controlo por predefinição, e a organização consegue demonstrar que uma decisão passada específica foi corrigida porque uma leitura estatisticamente ingénua foi apanhada antes de moldar a estratégia.

## Ideias para debate

1. Quais das nossas manchetes atuais de painel de controlo pareceriam diferentes se substituíssemos uma média por uma mediana?
2. Alguma vez mudámos uma decisão porque uma percentagem se revelou baseada numa amostra muito menor do que assumíamos?
3. Qual é uma história recente de "melhorámos esta métrica" que devíamos reexaminar quanto à regressão à média?
4. Onde poderiam duas das nossas métricas estar correlacionadas através de uma terceira causa oculta em vez de uma impulsionar a outra?
5. Os nossos gráficos mais importantes mostram um intervalo normal de variação, ou apenas uma única linha de tendência?

## Principais conclusões

- Prefira **medianas e percentis** a médias para métricas de engenharia enviesadas baseadas em tempo.
- Trate uma **percentagem de uma amostra pequena** como ruidosa, e diga-o explicitamente em vez de reagir a ela como uma tendência estável.
- Vigie a **regressão à média** antes de creditar uma intervenção por uma melhoria que se seguiu a uma leitura invulgarmente má.
- **Correlação não é causalidade**; procure ativamente variáveis de confusão antes de fazer uma afirmação causal.
- Use um **gráfico de controlo com uma linha de base histórica real**, não um único instantâneo antes-e-depois, para distinguir uma mudança genuína de ruído comum.

## Referências e leituras adicionais

- *The Signal and the Noise*, de Nate Silver.
- *How to Measure Anything*, de Douglas W. Hubbard.
- *Understanding Variation: The Key to Managing Chaos*, de Donald J. Wheeler.
- *Thinking, Fast and Slow*, de Daniel Kahneman.
- *The Visual Display of Quantitative Information*, de Edward R. Tufte.
