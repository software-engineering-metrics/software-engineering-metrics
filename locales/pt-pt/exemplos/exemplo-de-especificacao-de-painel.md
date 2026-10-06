# Exemplo: especificação de painel para um painel de métricas de entrega

Uma especificação de painel concretizada, seguindo o
[tema 8.1, Conceber um painel de métricas de engenharia](../temas/08-01-desenhar-um-painel-de-métricas-de-engenharia.md). O que importa é a forma: um público nomeado, um pequeno
número de mosaicos, padrões de visualização honestos e uma cadência de atualização enunciada.

## Público

A liderança de engenharia e a equipa da plataforma, revisto na revisão de entrega quinzenal. Não se destina à avaliação de desempenho individual.

## Mosaicos (por ordem de apresentação)

1. **Frequência de implementação**, últimas 4 semanas, por equipa. Gráfico de linhas, intervalos semanais, eixo a começar em zero.
2. **Tempo de espera das alterações**, mediana e percentil 90, últimas 4 semanas. Gráfico de barras com ambas as séries apresentadas, não apenas a mediana.
3. **Taxa de falha das alterações**, últimas 4 semanas, com a definição de "falha" acordada pela equipa ligada a partir do mosaico.
4. **Tempo de recuperação de uma implementação falhada**, mediana, últimas 4 semanas.
5. **Orçamento de erro restante**, trimestre em curso, por serviço, em percentagem.

## Regras de visualização

- Todo o gráfico de tendência mostra pelo menos oito pontos de dados, nunca uma única fotografia.
- Os eixos começam em zero, salvo se uma exceção enunciada estiver documentada no mosaico.
- As implementações, os incidentes e os feriados são anotados na linha cronológica para que os leitores possam distinguir uma mudança real de ruído.
- Sem eixos duplos, sem efeitos 3D, sem intervalos de datas escolhidos a dedo.

## Cadência de atualização

Os mosaicos alimentados pelo pipeline (frequência de implementação, tempo de espera) são atualizados de hora a hora. Os mosaicos alimentados por incidentes (taxa de falha das alterações, tempo
de recuperação) são atualizados quando uma análise pós-incidente é encerrada. O painel mostra a sua própria hora da última atualização.

## O que este painel exclui deliberadamente

Contagens de commits por pessoa, contagens de pull requests por pessoa e linhas de código. São métricas de atividade com um historial bem documentado de manipulação
e de medirem o esforço em vez do resultado (tema 3.4).
