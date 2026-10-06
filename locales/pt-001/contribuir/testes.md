# Testes: o conjunto de validação

## Executá-lo

```sh
just test
# or
python3 tests/validate.py
```

Corre a partir de qualquer lado e só precisa de Python 3 (sem pacotes de terceiros, sem rede). Imprime uma linha por verificação e termina com um valor
diferente de zero se alguma falhar, por isso serve para CI e como hook de pre-commit.

## O que verifica

- **Número de temas esperado** (uma constante no topo do script).
- **Numeração contígua** dentro de cada parte, a começar em N.0.
- **H1 corresponde ao decimal do nome do ficheiro** em todos os temas.
- **O título H1 corresponde a `spec/structure.md`** carácter a carácter, não apenas ao decimal inicial.
- **Secções obrigatórias** presentes em todos os temas de conteúdo (Partes 1 a 8, temas N.1 e superiores), **exatamente pela ordem do modelo**.
- **Número mínimo de palavras** para cada tema de conteúdo (1500 palavras), com uma lista de permissões no script para exceções deliberadas.
- **Sem travessões** em qualquer ficheiro Markdown.
- **Meios-travessões apenas entre dígitos**, por isso "2.1–2.8" passa e os outros falham.
- **Sem expressões proibidas** ("not only", "but also", "load-bearing").
- **Todas as ligações `.md` internas resolvem.**
- **As referências cruzadas na prosa apontam para temas reais**: uma referência a um número de tema sem ficheiro correspondente em disco falha, usando o mesmo padrão de referência
  que a ligação automática de temas do site publicado.
- **As ligações à Wikipédia têm a forma correta** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` corresponde aos ficheiros em disco**, nos dois sentidos.
- **O README, a página inicial e as páginas de conteúdo ligam a todos os temas.**

## Quando uma verificação falha

A linha que falhou nomeia o ficheiro e o problema. Correções comuns:

- Travessão encontrado: reescreva a frase para eliminar o "—". Não se limite a apagá-lo.
- Secção em falta: acrescente a secção `##` em falta a partir do modelo de tema.
- Discrepância de estrutura: acrescentou ou mudou o nome de um tema sem atualizar `spec/structure.md`, ou o inverso. Realinhe-os.
- Ligação quebrada: corrija o caminho ou atualize-o depois de uma mudança de nome.
- Falha na numeração: renumere para que a parte fique contígua a partir de N.0.

## Para além do conjunto de validação

- `just spell` executa o [codespell](https://github.com/codespell-project/codespell) sobre o repositório. A configuração, incluindo uma lista de ignorados para falsos positivos,
  é a secção `[tool.codespell]` em `pyproject.toml`.
- `just stats` imprime um relatório em Markdown (contagem de palavras por tema, temas finos, ligações à Wikipédia, entradas de referências) a partir de `tools/stats.py`.

## Integração contínua

- `.github/workflows/test.yml` corre em cada pull request e em pushes para ramos que não sejam o main: o conjunto de validação e o codespell. Este repositório não compila nem
  implementa o site; a renderização acontece no repositório separado `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` verifica semanalmente as ligações externas com [lychee](https://github.com/lycheeverse/lychee) (padrões ignorados em `.lycheeignore`) e mantém o resultado
  numa única issue "Link checker report". As ligações externas são deliberadamente mantidas fora do caminho dos PR.

## Não coberto pelos testes

O conjunto verifica a estrutura e o estilo, não a verdade. Não consegue saber se uma referência é real ou se a prosa é exata. Verifique citações e factos à mão ou com uma ronda de investigação.
A existência de uma ligação à Wikipédia (distinta da sua forma) também exige uma verificação de rede, que o conjunto deixa de fora deliberadamente para poder correr offline.
