# Sobre este projeto

Documentação do projeto deste livro: como está montado, como o construir e verificar e onde está a fonte de verdade. Para o livro em si, veja o [índice](../index.md).

## Mapa do projeto

- **O livro:** publicado em quatro locales em `locales/`; veja
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Este locale, `en-gb-oxendict/topics/` (63 ficheiros), `en-gb-oxendict/front-matter/` e os apêndices da Parte 9 são a fonte escrita à mão;
  `en-001`, `en-gb` e `en-us` derivam dela.
- **Fonte de verdade:** `spec/` na raiz do repositório (não publicada no site). A estrutura é declarada em `spec/structure.md`, as regras de escrita em
  `spec/conventions.md` e a ortografia em `spec/oxford-spelling.md`. Tudo o resto é construído para corresponder.
- **Ferramentas:** `tools/localize.py` deriva os outros três locales; `tools/gen_nav.py` gera a navegação; `tests/validate.py` impõe a especificação;
  o `justfile` liga-os.
- **Orientações para contribuidores:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) na raiz do repositório e os guias na
  [secção de contribuição](../contribuir/visao-geral.md).

## Construir e verificar

O conjunto de validação corre em Python 3 sem outras dependências e sem acesso à rede. As tarefas executam-se com [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Este repositório guarda o conteúdo e a especificação do livro. É renderizado como site pelo repositório separado
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Como funciona aqui o desenvolvimento orientado por especificação

A especificação vem primeiro. `spec/structure.md` declara que temas existem e como são numerados. `spec/conventions.md` declara como os temas devem ser escritos.
Os temas são redigidos para satisfazer ambos. `tools/gen_nav.py` deriva a navegação dos temas e `tests/validate.py` volta a verificar o resultado contra a especificação.
Se um tema e a especificação alguma vez divergirem, um teste falha, e esse é o sinal para os realinhar.

Isto mantém a deriva à distância: uma alteração só está "concluída" quando a especificação, os temas, a navegação gerada e os testes concordam todos.

## Decisões de conceção que vale a pena conhecer

- **Temas planos, numerados por decimais.** Os ficheiros são `locales/<locale>/topics/PP-CC-slug.md`, o mesmo slug em todos os locales. As partes são inteiros; os temas são
  decimais; N.0 é a introdução de uma parte. Isto mantém os identificadores estáveis e deixa as ferramentas ordenar e agrupar sem uma árvore de diretórios.
- **Um locale escrito à mão, três derivados.** `en-gb-oxendict` é ortografia Oxford, o estilo da casa da maioria dos organismos internacionais de normalização (veja
  `spec/oxford-spelling.md`); `en-001`, `en-gb` e `en-us` derivam dele mecanicamente, de modo que as traduções nunca se afastam da fonte.
- **Navegação gerada.** O índice, as páginas de conteúdo e o índice de temas são gerados, pelo que nunca se afastam dos temas.
- **Testes offline e sem dependências.** O conjunto usa apenas a biblioteca padrão, por isso corre em qualquer lado, incluindo CI e hooks de pre-commit.
- **As referências cruzadas ficam em texto simples.** A prosa refere os temas pelo seu número decimal ("veja o tema 2.1"), como a especificação exige; o site que renderiza
  é responsável por transformar essas referências em ligações.
- **Sem travessões, por regra e por teste.** Uma escolha de estilo deliberada, imposta para se manter verdadeira à medida que o livro cresce.
- **Cada família de métricas nomeia a sua própria via de manipulação.** Esta é a única regra do modelo sem equivalente no projeto irmão
  `software-engineering-guide`: existe porque todo o assunto deste livro é a medição, pelo que o risco da própria medição tem de ser de primeira classe, não implícito.

## Leitura adicional

- [Redigir](../contribuir/redigir.md) : escrever e editar temas.
- [Navegação](../contribuir/navegacao.md) : como funcionam os ficheiros gerados.
- [Testar](../contribuir/testes.md) : o que os testes verificam e como corrigir falhas.
- [Exemplos](../exemplos/visao-geral.md) : exemplos pequenos e concretos.
- [Registo de alterações](registo-de-alteracoes.md) : o historial das alterações relevantes.
