# Introdução

Este livro é um guia prático para medir bem a [engenharia de software](https://en.wikipedia.org/wiki/Software_engineering), para qualquer equipa, desde uma startup de cinco pessoas
até uma empresa com milhares de engenheiros ou um organismo público que presta contas face a um quadro legal de desempenho. Existe porque a maior parte dos conselhos sobre métricas
é ou um resumo de um referencial sem detalhe operacional, ou uma lista de funcionalidades de um fornecedor de ferramentas. Este livro tenta não ser nenhuma das duas coisas: é assertivo
sobre o que medir, explícito sobre como cada métrica é manipulada e prático sobre como gerir um programa de métricas em que as equipas confiam em vez de o temerem.

## Para quem é este livro

Os leitores principais são quem escolhe o que uma organização mede: líderes de engenharia, engenheiros staff e principal, equipas de plataforma e DevOps, e gestores de programa
e de produto. Os leitores secundários são todos os engenheiros que querem perceber o raciocínio por trás de um painel que lhes pedem para fazer mexer, ou que querem contestar
uma métrica que deixou de cumprir o seu propósito. Não precisa de o ler de ponta a ponta. Cada tema é autónomo, enuncia primeiro o princípio e termina com conclusões práticas,
um modelo de maturidade e referências.

## Como o livro está organizado

O livro está dividido em **partes** (números inteiros) e **temas** (decimais). O tema **N.0** apresenta cada parte e explica como os respetivos temas se relacionam;
os temas **N.1, N.2, …** tratam cada tópico em profundidade.

- **Parte 1, Fundamentos da medição:** porquê medir, a lei de Goodhart e a psicologia da manipulação, escolher resultados em vez de produção, governação e responsabilidade,
  fontes de dados e a literacia estatística de que todo o programa de métricas precisa.
- **Parte 2, Métricas de fluxo:** o Flow Framework, os itens de fluxo e as cinco métricas de fluxo, tempo de ciclo, teoria das filas, métricas clássicas de cadeia de valor lean,
  métricas de pull requests e de revisão de código, e o referencial DORA como tema de referência.
- **Parte 3, Experiência do programador e referencial SPACE:** o referencial SPACE e as suas cinco dimensões, e como conduzir inquéritos de experiência do programador
  sem os transformar num concurso de popularidade.
- **Parte 4, Métricas de código e qualidade:** complexidade, cobertura e eficácia dos testes, churn e hotspots, análise estática, dívida técnica e documentação.
- **Parte 5, Métricas de produto e negócio:** defeitos escapados, adoção de funcionalidades, resultados para o cliente e para o negócio, economia unitária e retorno do investimento.
- **Parte 6, Métricas de fiabilidade, operações e segurança:** SLI, SLO e orçamentos de erro, métricas de incidentes, prevenção e capacidade, e métricas de segurança e de vulnerabilidades.
- **Parte 7, Métricas na era da IA:** a mudança de paradigma da IA generativa, como medir o desenvolvimento assistido por IA, o risco de inflação de métricas
  e por que razão a telemetria de resultados se torna a estrela polar quando a produção fica barata.
- **Parte 8, Construir um programa de métricas:** conceber painéis, construir ou comprar, lançar métricas sem criar medo, modelos de maturidade
  e um roteiro de adoção por fases.
- **Parte 9, Apêndices:** glossário, referência de definições e fórmulas de métricas, listas de verificação, modelos, autoavaliação de maturidade, referências e índice remissivo.

## Princípios orientadores

Oito princípios formam a espinha dorsal do livro:

1. **Uma medida que se torna um objetivo deixa de ser uma boa medida.** Conceba contra a lei de Goodhart desde o início, não depois de a distorção aparecer.
2. **Resultados acima da produção, acima da atividade.** Pese cada conjunto de métricas para o que muda para o cliente ou para o negócio, não para o que a equipa produziu
   ou quão ocupada esteve.
3. **Toda a métrica com um incentivo precisa de uma salvaguarda.** Emparelhe a velocidade com a qualidade e o débito com a estabilidade, e nunca persiga um único número isoladamente.
4. **Meça sistemas, não pessoas.** As métricas que individualizam a culpa corroem a confiança e convidam à manipulação; as métricas que expõem restrições do sistema
   convidam à melhoria.
5. **Prefira a instrumentação ao autorrelato onde puder, e o autorrelato onde não puder.** As contagens de implementações vêm do pipeline; a satisfação vem de perguntar.
6. **Uma métrica ganha o seu lugar ou reforma-se.** Cada mosaico de um painel custa atenção. Pode com intenção.
7. **As definições importam mais do que os painéis.** Duas equipas que calculam o "tempo de espera" de forma diferente gastam mais tempo a discutir o número do que a agir sobre ele.
8. **A IA generativa é uma razão para reexaminar, não apenas para reajustar a linha de base.** Quando a produção fica barata, as métricas construídas em torno do volume de produção
   precisam não só de novos objetivos mas de novas salvaguardas.

## Temas transversais

[A lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) é um tema que atravessa todas as partes deste livro, não apenas o tema 1.2. Cada tema de uma família de métricas
nomeia como a métrica abordada é manipulada e que salvaguarda a apanha. As obrigações de reporte de governos e empresas, onde uma métrica pode ter peso legal ou contratual,
são tratadas em todo o livro como contributo de conceção, não como um pensamento tardio confinado a um único tema.

## Como o usar

Adote-o por fases; não largue de uma vez um painel numa equipa que nunca teve um. Comece onde a dor é maior, use o modelo de maturidade de cada tema
para se situar com honestidade e deixe o roteiro de adoção (tema 8.5) ordenar o trabalho. O objetivo não é uma parede de gráficos. O objetivo é uma organização que consiga dizer,
com provas, se o que faz está a funcionar, e que confie o suficiente nos seus próprios números para agir com base neles.
