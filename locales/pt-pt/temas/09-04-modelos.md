# 9.4 Modelos

Modelos para copiar e colar para documentos recorrentes. Exemplos trabalhados e preenchidos dos dois primeiros vivem em `docs/examples/`.

## Modelo de carta de métricas

```markdown
# Carta de métricas: [nome da equipa ou conjunto de métricas]

- **Equipa:** [equipa proprietária]
- **Proprietário:** [pessoa ou função nomeada]
- **Revisto:** [cadência, ex. trimestralmente]

## Propósito

[Uma ou duas frases: o que esta carta governa e porquê.]

## O que rastreamos

| Métrica | Fonte da verdade | Proprietário |
| --- | --- | --- |
| [métrica] | [sistema] | [proprietário nomeado] |

## Não-objetivos

[Declaração explícita do que estas métricas não são usadas para, ex.
avaliação individual de desempenho, classificação entre equipas sem contexto.]

## Salvaguardas

[Para cada métrica incentivada, nomeie a sua salvaguarda combinada e que
padrão de manipulação apanha.]

## Cadência de revisão

[Quando e como esta carta é revisitada; o que desencadeia a retirada de
uma métrica.]
```

## Modelo de especificação de painel

```markdown
# Especificação de painel: [nome do painel]

## Público

[Para quem é este painel, e que decisão informa. Declare explicitamente
se não é para avaliação individual.]

## Blocos (por ordem de exibição)

1. **[Nome da métrica]**, [janela de tempo], [tipo de gráfico]. [Quaisquer
   notas específicas de visualização: regras de eixo, anotações.]
2. ...

## Regras de visualização

- Os eixos começam em zero a menos que declarado de outra forma, com a
  exceção documentada no bloco.
- [Quaisquer outras regras de honestidade específicas do projeto.]

## Cadência de atualização

[Com que frequência cada bloco atualiza, e a partir de que fonte.]

## O que este painel exclui deliberadamente

[Nomeie qualquer coisa intencionalmente deixada de fora, e porquê, ex.
contagens individuais de atividade.]
```

## Modelo de ordem de trabalhos de reunião de revisão de métricas

```markdown
# Revisão de métricas: [data]

## Participantes

[Nomes e funções]

## Métricas revistas

Para cada métrica:
- Leitura atual e tendência
- Qualquer movimento fora da variação normal (tema 1.6)
- Estatuto da salvaguarda combinada, se aplicável
- Decisão que esta leitura informa, se alguma

## Novas métricas propostas

[Percorra cada uma através da lista de verificação de revisão de nova
métrica, tema 9.3.]

## Métricas consideradas para retirada

[Que métricas não informaram nenhuma decisão nos últimos dois ciclos?]

## Itens de ação

| Item | Proprietário | Prazo |
| --- | --- | --- |
| | | |
```

## Modelo de postmortem sem culpa

```markdown
# Postmortem: [nome do incidente], [data]

## Resumo

[Um parágrafo: o que aconteceu, impacto no utilizador, duração.]

## Cronologia

- Deteção: [hora, como foi detetado]
- Reconhecimento: [hora, quem respondeu]
- Resolução: [hora, o que o corrigiu]

## Gravidade

[Classificação contra critérios documentados, tema 6.2.]

## Causa raiz

[O que permitiu que isto acontecesse, enquadrado como uma questão de
sistema, não individual.]

## O que correu bem

[Coisas específicas que funcionaram na resposta.]

## Itens de ação

| Item | Proprietário | Prazo |
| --- | --- | --- |
| | | |

## Acompanhamento

[Confirmação de que os itens de ação foram rastreados até à conclusão,
segundo o próximo ciclo de revisão.]
```

## Modelo de caso de ROI

```markdown
# Caso de ROI: [nome da iniciativa]

## Custo (custo total de propriedade, tema 5.5)

- Inicial: [custo de desenvolvimento]
- Contínuo: [manutenção, infraestrutura, suporte, por ano]
- Custo de oportunidade: [o que mais esta capacidade poderia ter feito]

## Benefício (evidência documentada, temas 5.1-5.3)

- [Benefício 1], evidenciado por [fonte de dados]
- [Benefício 2], evidenciado por [fonte de dados]

## Intervalo e pressupostos

- Caso conservador: [cifra]
- Caso otimista: [cifra]
- Pressuposto-chave a impulsionar o intervalo: [nomeie-o]

## Fatores de confusão considerados e excluídos

[O que mais poderia explicar o benefício projetado, e porque foi
excluído ou contabilizado.]

## Verificação pós-conclusão (preencher depois de a iniciativa se completar)

- Resultado real: [cifra]
- Comparado com o intervalo projetado: [acima / dentro / abaixo]
- O que isto nos ensina para a próxima estimativa: [nota]
```
