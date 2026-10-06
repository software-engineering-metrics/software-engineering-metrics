# 9.3 Listas de verificação

Listas de verificação prontas a usar de referência rápida. Copie uma para o seu próprio processo e adapte-a; o objetivo é cobertura, não formulação exata.

## Lista de verificação para revisão de nova métrica (antes de acrescentar qualquer métrica a um painel)

- [ ] A métrica tem uma decisão nomeada que informa (tema 1.1)
- [ ] A métrica está classificada como diagnóstica ou avaliativa, por escrito (tema 1.1)
- [ ] Se incentivada, uma métrica de salvaguarda é definida ao mesmo tempo (tema 1.2)
- [ ] O vetor de manipulação foi nomeado: como faria uma equipa racional este número parecer bom sem melhorar o resultado real (tema 1.2)
- [ ] A métrica está classificada como entrada, produção, ou resultado (tema 1.3)
- [ ] A métrica tem um proprietário nomeado e um sistema documentado de origem e método de recolha (temas 1.4, 1.5)
- [ ] A métrica vai usar uma mediana ou percentil, não uma média, se os dados subjacentes forem assimétricos (tema 1.6)
- [ ] A métrica nunca é usada para avaliação individual, ou essa utilização é separada e explicitamente divulgada (tema 1.1)

## Lista de verificação para lançamento de painel

- [ ] O painel tem um público e uma decisão nomeados e específicos (tema 8.1)
- [ ] Cada métrica incentivada aparece na mesma vista que a sua salvaguarda (temas 1.2, 8.1)
- [ ] Os eixos começam em zero a menos que uma exceção declarada e visível esteja documentada (tema 1.6)
- [ ] A tendência ao longo do tempo é mostrada, não um instantâneo único (tema 1.6)
- [ ] O painel tem um proprietário nomeado e uma cadência de revisão (tema 1.4)
- [ ] Uma declaração visível declara para que o painel não serve, se relevante (tema 1.1)
- [ ] As fontes de dados têm verificações básicas de saúde para que um pipeline quebrado não se renderize silenciosamente como atual (tema 1.5)

## Lista de verificação para implementação de programa de métricas

- [ ] O propósito e os não-objetivos explícitos são comunicados antes do lançamento, não reativamente (tema 8.3)
- [ ] As pessoas a serem medidas foram envolvidas na seleção de métricas (tema 8.3)
- [ ] O programa começa em modo apenas diagnóstico, com um período mínimo comprometido de prova (tema 8.3)
- [ ] Existe um protocolo rápido e visível de resposta para qualquer futuro incidente de má utilização (tema 8.3)
- [ ] Uma equipa piloto foi selecionada que genuinamente se voluntariou, não uma que foi mandatada (tema 8.5)
- [ ] A governação fundacional (carta, propriedade, política diagnóstica) está em vigor antes de a instrumentação começar (temas 1.4, 8.5)

## Lista de verificação para incidente e postmortem

- [ ] O postmortem investiga o sistema, não o indivíduo (tema 6.2)
- [ ] A gravidade foi classificada contra critérios documentados e padronizados (tema 6.2)
- [ ] Os tempos de deteção, reconhecimento, e resolução são registados separadamente (tema 6.2)
- [ ] Os itens de ação são específicos, atribuídos, e rastreados até à conclusão (tema 6.2)
- [ ] O postmortem é partilhado sem medo de consequência individual (temas 6.2, 8.3)

## Lista de verificação para auditoria de métricas na era da IA

- [ ] Cada métrica de painel foi testada contra: "uma equipa a usar assistência intensiva de IA mas a produzir não mais valor real mostraria uma leitura melhorada aqui" (tema 7.1)
- [ ] A taxa de falha de mudanças e a taxa de defeitos são revistas ao lado de qualquer aumento na frequência de implementação ou volume de commits assistidos por IA (tema 7.1)
- [ ] A capacidade e profundidade de revisão são monitorizadas à medida que o volume de código gerado por IA muda (tema 7.1)
- [ ] Os defeitos escapados são etiquetados por nível de assistência de IA para testar, não assumir, se a relação histórica de taxa de defeitos ainda se mantém (temas 7.1, 7.3)
- [ ] Os métodos de deteção resistentes a defeitos de "parece correto" (teste de mutação, teste baseado em propriedades) estão em vigor para caminhos de código intensivos em IA (tema 7.3)
- [ ] A carta de métricas foi explicitamente revisitada e atualizada para esta mudança, não deixada a derivar não examinada (temas 1.4, 7.1)

## Lista de verificação para auditoria de programa de métricas (anual)

- [ ] Cada métrica ainda tem um proprietário nomeado (tema 1.4)
- [ ] Pelo menos uma métrica foi retirada no último ciclo se deixou de justificar o seu custo (tema 1.1)
- [ ] A avaliação de maturidade de cinco dimensões foi conduzida honestamente, pontuada por mínimo, não por média (tema 8.4)
- [ ] Nenhuma métrica derivou de utilização diagnóstica para avaliativa sem uma decisão explícita e divulgada (tema 1.1)
- [ ] As definições foram verificadas pontualmente contra a instrumentação real quanto a deriva (temas 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] O rácio de resultado para produção nos painéis primários foi calculado e revisto (tema 7.4)
