# Regras de estilo (partilhadas, impostas)

O estilo da casa num só lugar. Os itens marcados com "(test)" são impostos por `tests/validate.py`; uma violação faz a compilação falhar. A versão narrativa completa é
`spec/conventions.md` na raiz do repositório.

## Regras rígidas

- **Sem travessões.** Nunca use "—" (U+2014). Use uma vírgula, dois pontos, parênteses ou duas frases. O meio-travessão "–" só é permitido em intervalos numéricos
  como `1–9` ou `2.1–2.8`. (test)
- **Sem frases feitas.** Não use "not only ... but also", "but also" nem "load-bearing". Evite "It's important to note", "In today's fast-paced world",
  "It's crucial to consider", "It appears that", "One could argue" e a fórmula "it's not just X, it's Y". (test, para as três primeiras)
- **Defina os termos na primeira utilização.** Escreva as siglas por extenso e defina o jargão na primeira vez que cada tema o usa, por exemplo "mean time to recovery (MTTR)".
- **Ligue os conceitos-chave à Wikipédia** na primeira menção, uma vez por tema, apenas na prosa. Forma: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Nunca em títulos, tabelas, código ou na secção de referências. (a forma da ligação é testada)
- **Apenas referências reais.** Autores e títulos de obras reais. Sem títulos, autores ou URL inventados.
- **Nomeie a via de manipulação.** Os temas de famílias de métricas dizem como a métrica é manipulada e que salvaguarda a apanha (tema 1.2).

## Tom

- Caloroso, direto, encorajador. Dirija-se diretamente ao leitor. Frases curtas, palavras simples. Comece pelo essencial.
- Assertivo e prático. Neutro quanto a fornecedores. Mencione produtos apenas como exemplos factuais.

## Estrutura (test)

- Os temas de conteúdo usam exatamente a ordem de secções de [`chapter-template.md`](modelo-de-tema.md).
- O primeiro título é `# N.M Title` (número de tema com ponto) e corresponde ao prefixo `PP-CC` preenchido com zeros do ficheiro.
- A numeração dentro de cada parte é contígua e começa em N.0.

## Depois de editar

- Se alterou o conjunto de temas, atualize `spec/structure.md` e execute `just nav`.
- Execute sempre `just test`.
