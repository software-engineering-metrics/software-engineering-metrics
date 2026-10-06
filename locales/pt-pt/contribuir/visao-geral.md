# Contribuir

Obrigado por ajudar a melhorar este livro. São bem-vindas contribuições de qualquer dimensão, desde corrigir uma gralha até escrever um tema novo.

## Regras de base

Este livro segue um estilo da casa rigoroso. O essencial:

- Sem travessões. Use uma vírgula, dois pontos, parênteses ou duas frases.
- Sem frases feitas ("not only ... but also", "load-bearing" e semelhantes).
- Prosa calorosa, simples e direta. Dirija-se diretamente ao leitor. Frases curtas.
- Defina os termos na primeira utilização. Ligue os conceitos-chave à Wikipédia na primeira menção.
- Apenas referências reais.
- Todo o tema de uma família de métricas nomeia a via de manipulação e a salvaguarda.

As regras completas estão em `spec/conventions.md` na raiz do repositório, e a versão curta são as [regras de estilo](regras-de-estilo.md). Os testes impõem a parte mecânica.

## Preparação

Precisa de Python 3 e de [just](https://github.com/casey/just). Este repositório guarda o conteúdo e a especificação do livro, mais o site SvelteKit
(`software-engineering-metrics.github.io/`) que o renderiza como o site publicado.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Fazer uma alteração

1. Leia o guia relevante: [redigir](redigir.md) para temas, [navegação](navegacao.md) para ficheiros gerados, [testar](testes.md) para os testes.
2. Faça a menor alteração que resolva o assunto.
3. Se acrescentar, remover, mudar o nome ou renumerar um tema, atualize `spec/structure.md` na raiz do repositório e execute `just nav`.
4. Execute `just test`. Tem de passar.
5. Acrescente uma linha ao [registo de alterações](../projeto/registo-de-alteracoes.md) em **Unreleased**.

## Em que pode trabalhar

- Corrigir erros, passagens pouco claras ou referências desatualizadas.
- Melhorar exemplos, sobretudo exemplos concretos de empresas e do setor público.
- Verificar citações face a fontes reais.
- Preencher lacunas na cobertura de um tema sem quebrar o modelo.

## O que evitar

- Não edite à mão os ficheiros gerados (`README.md`, o `index.md` de cada locale, `front-matter/table-of-contents.md` e `topics/09-07-index.md`).
  Altere antes os temas e execute `just nav`.
- Não edite `en-001`, `en-gb` ou `en-us` diretamente; são derivados de `en-gb-oxendict` por `tools/localize.py`.
- Não acrescente um tema sem atualizar também `spec/structure.md`.
- Não introduza travessões nem expressões proibidas; os testes falharão.

## Comunicar problemas

Abra uma issue a descrever o problema, o ficheiro e o tema e, quando relevante, a fonte ou referência correta. As comunicações pequenas e específicas são as mais fáceis de tratar.
