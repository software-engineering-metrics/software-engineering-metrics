# Redigir: escrever e editar temas

## Antes de escrever

- Leia as [regras de estilo](regras-de-estilo.md) e `spec/conventions.md` na raiz do repositório.
- Consulte `spec/structure.md` na raiz do repositório para ver onde o tema se encaixa e que número deve ter.

## Escrever um tema novo

1. Escolha a parte e o próximo número decimal livre nessa parte. A numeração é contígua, por isso um tema novo costuma ficar com o número a seguir ao último tema da sua parte.
2. Crie `locales/en-gb-oxendict/topics/PP-CC-slug.md` (prefixo preenchido com zeros e separado por hífen, por exemplo `02-01-...`) a partir do
   [modelo de tema](modelo-de-tema.md). Escreva em ortografia Oxford (veja `spec/oxford-spelling.md`); nunca edite os outros três locales diretamente.
3. Escreva de acordo com o modelo. Um tema de conteúdo precisa de todas as secções: visão geral, princípios-chave, recomendações, compromissos (com uma tabela), questões para discussão,
   perspetiva setorial (startup, pequena empresa, grande empresa, administração pública), exemplos (um empresarial e um público), caso de negócio, antipadrões, modelo de maturidade
   de cinco níveis, ideias para discussão, conclusões e referências.
4. Nomeie a via de manipulação. Toda a família de métricas precisa de uma resposta explícita a "como é que uma equipa faz este número parecer bom sem melhorar o que ele mede, e que
   salvaguarda o apanha" (veja o tema 1.2).
5. Defina os termos na primeira utilização. Acrescente uma ligação à Wikipédia para os conceitos-chave na primeira menção, apenas na prosa.
6. Faça referências cruzadas a temas relacionados pelo número decimal, por exemplo "(tema 2.1)".
7. Acrescente o tema a `spec/structure.md`.
8. Se a introdução da parte (N.0) enumera os seus temas, acrescente um ponto.
9. Execute `python3 tools/localize.py` para derivar o tema para `en-001`, `en-gb` e `en-us`.
10. Execute `just nav` e depois `just test`.

## Editar um tema existente

- Mantenha a ordem e os títulos das secções. Os testes verificam que os temas de conteúdo continuam a ter todas as secções exigidas.
- Mantenha as definições em linha, as ligações à Wikipédia, as tabelas e as listas de referências, a não ser que a edição seja precisamente sobre elas.
- Não introduza travessões nem expressões proibidas. Se reformular, reescreva em vez de inserir um travessão.
- Depois execute `python3 tools/localize.py` para voltar a derivar `en-001`, `en-gb` e `en-us` a partir da fonte `en-gb-oxendict` editada.

## Mudar o nome ou renumerar

- Mude o nome do ficheiro em `locales/en-gb-oxendict/`, atualize o título `# N.M Title`, atualize `spec/structure.md` e atualize todas as referências cruzadas ao número antigo.
- Execute `python3 tools/localize.py` para mudar também o nome dos ficheiros nos outros três locales (deriva os quatro a partir do mesmo caminho relativo).
- Execute `just nav` e `just test`. Os testes assinalam uma discrepância entre o H1 e o nome do ficheiro, uma falha na numeração, um locale que divergiu da fonte ou uma ligação quebrada.

## Lembrete de tom

Escreva como um colega experiente que quer que o leitor tenha êxito. Caloroso, simples, direto e útil. Frases curtas. Sem enchimento.
