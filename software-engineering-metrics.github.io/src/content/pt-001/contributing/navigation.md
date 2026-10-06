# Navegação: como funcionam os ficheiros gerados

Por locale, quatro artefactos de navegação são gerados a partir dos temas desse locale, não escritos à mão (mais o `README.md`, gerado uma única vez para o locale de referência,
`en-gb-oxendict`):

- `README.md` (o índice da página inicial do repositório; apenas o locale de referência)
- `locales/<locale>/index.md` (a página inicial do site publicado)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (o índice remissivo de temas, com ligações)

São todos produzidos por
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Não os edite à mão, porque a geração seguinte substitui as suas alterações.

## Quando voltar a gerar

Execute `just nav` (ou `python3 tools/gen_nav.py`) sempre que:

- acrescentar, remover, mudar o nome ou renumerar um tema, ou
- alterar o título `# N.M Title` de um tema (o índice usa-o).

Execute primeiro `python3 tools/localize.py` se alterou alguma coisa em `locales/en-gb-oxendict/`, para que os temas dos outros três locales (e os títulos que produzem) estejam atualizados
antes de `gen_nav.py` os ler; veja
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Como funciona

Para cada locale, `gen_nav.py` lê todos os ficheiros de `locales/<locale>/topics/*.md`, ordena por número decimal, agrupa por parte e:

- constrói o índice parte a parte a partir do título H1 de cada tema,
- escreve-o em `locales/<locale>/index.md` e `locales/<locale>/front-matter/table-of-contents.md` (e, apenas para o locale de referência, `README.md`),
- analisa os temas de conteúdo (Partes 1 a 8) à procura de uma lista fixa de termos-chave e escreve o índice remissivo em `locales/<locale>/topics/09-07-index.md`.

O texto-padrão partilhado (parágrafos de introdução, "Como ler este livro", "Temas transversais" e títulos das partes) é localizado da mesma forma que a prosa dos temas,
através das funções de locale de `tools/localize.py`, de modo que as páginas geradas se leiam naturalmente em cada locale.

Os títulos das partes vivem no dicionário `PART_TITLES` perto do topo do script. O gerador usa cabeçalhos de parte em estilo de dois pontos ("Part 2: Delivery and Flow Metrics"),
nunca travessões.

Para os locales traduzidos à mão, a página inicial e a página do índice são escritas à mão (títulos traduzidos e a linha de introdução N.0 de cada parte), e
`tools/gen_translated_nav.py` atualiza a lista de temas a partir dos títulos H1 dos temas desse locale.

## O que não toca

A especificação na raiz do repositório (`spec/index.md`, `spec/structure.md` e as suas companheiras) é a fonte de verdade escrita à mão. O gerador não a escreve e ela não faz parte do site publicado.
Se alterar a estrutura, atualize você mesmo `spec/structure.md`, depois execute `just nav` para os ficheiros derivados e `just test` para confirmar que tudo está alinhado.
