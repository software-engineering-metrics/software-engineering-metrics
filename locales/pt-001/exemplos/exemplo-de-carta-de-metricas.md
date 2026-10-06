# Exemplo: carta de métricas para uma equipa de plataforma de pagamentos

Um exemplo concretizado de carta de métricas, o documento de uma página descrito no
[tema 1.4, Governação e responsabilidade das métricas](../temas/01-04-governação-e-propriedade-das-métricas.md). O que importa é a forma: um propósito enunciado,
não-objetivos explícitos, responsáveis nomeados e uma cadência de revisão. Uma carta desta dimensão destina-se a ser lida, não arquivada.

- **Equipa:** Plataforma de pagamentos
- **Responsável:** Gestor de engenharia da plataforma
- **Revista:** Todos os trimestres, na revisão da plataforma

## Propósito

Esta carta rege as métricas que a equipa da plataforma de pagamentos acompanha sobre a sua própria entrega e fiabilidade. Existe para que todos, dentro e fora da equipa,
possam ver o que é medido, porquê e para que não é usado.

## O que acompanhamos

| Métrica | Fonte de verdade | Responsável |
| --- | --- | --- |
| Frequência de implementação | Pipeline de CI/CD | Líder da plataforma |
| Tempo de espera das alterações | Git mais o pipeline de implementação | Líder da plataforma |
| Taxa de falha das alterações | Rastreador de incidentes, etiquetado por implementação | Líder de prevenção |
| Tempo de recuperação de uma implementação falhada | Rastreador de incidentes | Líder de prevenção |
| Latência P99 da API (SLI) | Plataforma de observabilidade | Líder de SRE |
| Consumo do orçamento de erro | Plataforma de observabilidade | Líder de SRE |

## Não-objetivos

Estas métricas nunca são usadas, individualmente ou em conjunto, para classificar engenheiros, julgar avaliações de desempenho ou comparar esta equipa com o roteiro
de outra equipa sem comparar também o âmbito, a dotação e a maturidade do sistema. Qualquer uso fora do propósito enunciado acima exige a aprovação do diretor de engenharia
e da própria equipa.

## Salvaguardas

Cada métrica acima que transporta um incentivo está emparelhada com uma salvaguarda. O tempo de espera das alterações é vigiado ao lado da taxa de falha das alterações, para que a equipa
não possa melhorar o seu número de velocidade entregando alterações mais arriscadas. A frequência de implementação é vigiada ao lado do consumo do orçamento de erro, pela mesma razão.

## Cadência de revisão

A equipa revê esta carta todos os trimestres. Uma métrica que não mudou nenhuma decisão em dois trimestres seguidos é candidata à reforma.
