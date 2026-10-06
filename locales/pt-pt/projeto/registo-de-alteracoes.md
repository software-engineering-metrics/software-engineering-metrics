# Registo de alterações

Alterações relevantes ao livro e às suas ferramentas. As entradas mais recentes vêm primeiro. As datas usam ISO 8601 (AAAA-MM-DD).

## [Unreleased]

### Changed

- Neerlandês (`nl-nl`): traduzidos os restantes títulos e slugs em inglês dos temas 9.0, 9.3 e 9.4 (`bijlagen`, `controlelijsten`, `sjablonen`).
- Galês (`cy-001`, `cy-gb`): terminologia alinhada com o TermCymru: `risg` (risco, em vez de `perygl`, com concordância de género), `cyfnewidiad` (compromisso),
  `dangosydd rhagfynegi` e `dangosydd ôl-fynegi` (indicador avançado e indicador retardado, em vez de `hwyrfrydig`), `cynhwysedd` (capacidade), `dosraniad` (distribuição),
  `cydberthynas` (correlação), `allbwn` para produção no tema 1.3 e `cyfradd gadael staff` (rotatividade de pessoal). Quatro slugs de temas foram renomeados para corresponder.
- Site: `@lilydesignsystem/svelte-picker-bar` atualizado para a 0.2.0, que acrescenta um seletor de pesquisa à barra de cabeçalho; submete para a pesquisa do site já existente `/?<query>`.
- Acrescentado `scripts/generate-sitemap.mjs`, que corre no fim de `pnpm build` e escreve `sitemap.xml` a partir das páginas pré-renderizadas (apenas URL canónicos de locale,
  sem duplicados dos aliases de duas letras), para que a linha `Sitemap:` de `robots.txt` resolva.
- `AGENTS.md` é agora um índice breve; o pormenor passou para `AGENTS/layout.md`, `style.md`, `locales.md` e `workflow.md`.
- Limpeza da documentação: atualizados `AGENTS.md`, `index.md`, o texto de locale do README gerado, `spec/index.md`, `spec/locales.md` e o `AGENTS.md` e `README.md` do site
  para 27 locales, nomes de diretórios de secção por locale e as novas ferramentas; acrescentado `CLAUDE.md` (um apontador para `AGENTS.md`); corrigidos caminhos `docs/` desatualizados
  nas duas competências de agente e feito de `skills/` a cópia canónica de `.claude/skills/` (verificada por testes).
- Acrescentados `llms.txt` e `llms.json` (um índice para agentes de IA de todos os locales e temas servidos) ao `static/` do site, gerados por `tools/gen_llms.py`
  (`just llms`) e verificados por testes.
- Página inicial do site: a lista de mosaicos "nove partes" é agora uma lista aninhada "Índice" de todas as partes e temas, e a secção "A lei de Goodhart, em todo o lado" foi removida.
- Alterado "chapter" para "topic" na prosa do livro em todos os locales (por exemplo "tema 2.1", "Os temas desta parte"), usando a palavra própria de cada língua para "topic"
  (`tema`, `sujet`, `Thema`, `тема`, `主題` e assim por diante), e também na especificação, no texto gerado pelas ferramentas e nas cadeias de interface do site. Nomes de ficheiros, URL e chaves de secção
  não mudam.
- Traduzido o nome de cada diretório de secção em `locales/`: `chapters/` é agora `topics/` (e a sua tradução em cada outro locale, como `temas/`, `sujets/`, `themen/`), e
  `examples/` de `es-001` é agora `ejemplos/`. Os nomes vivem em `spec/section-names.json`; as ferramentas, os testes e a sincronização de conteúdo do site leem-nos de lá, e os URL do site não mudam.

### Changed

- Revisto o locale galês (`cy-001`, `cy-gb`, mantidos idênticos) face à lista terminológica TermCymru do Governo do País de Gales: `llesiant` para bem-estar, `cynhyrchiant` para produtividade,
  `gwendid`/`gwendidau` para vulnerabilidade, `llywodraethiant` para governação, `cydberthynas` para correlação, `ôl-groniad` para backlog (antes deixado em inglês), `cost a budd` para custo-benefício
  e `deallusrwydd artiffisial (AI)` na primeira menção de IA em cada tema.

### Added

- As secções de preliminares, exemplos, contribuir e projeto (14 ficheiros, mais registo de alterações, página inicial e índice) foram traduzidas para este locale, com nomes de diretórios traduzidos.
- Alemão (`de-001`) acrescentado como 26.º locale totalmente traduzido: todos os 63 temas com os ficheiros auxiliares `.locale-peer-id` correspondentes, idêntico em conteúdo a `de-de`.
  Ligado ao site e servido em `/de-001/` (alias `/de/`).
- Português (`pt-001`) acrescentado como 25.º locale totalmente traduzido: todos os 63 temas com os ficheiros auxiliares `.locale-peer-id` correspondentes, idêntico em conteúdo a `pt-pt`.
  Ligado ao site e servido em `/pt-001/` (alias `/pt/`).
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para urdu (`ur-001`, da direita para a esquerda), o 24.º locale totalmente traduzido, com os ficheiros auxiliares
  `.locale-peer-id` correspondentes. Cada tema foi traduzido diretamente da fonte em inglês, o índice (tema 9.7) remapeia cada ligação interna para o respetivo nome de ficheiro em urdu
  e o diretório da secção é `موضوعات`. Ligado ao site e servido em `/ur-001/` (alias `/ur/`).
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para indonésio (`id-001`), com os ficheiros auxiliares `.locale-peer-id` correspondentes. Não havia um locale indonésio anterior
  em que basear, pelo que cada tema foi traduzido diretamente da fonte em inglês, e o índice (tema 9.7) remapeia cada ligação interna para o respetivo nome de ficheiro em indonésio. Ligado ao site e servido em
  `/id-001/` (alias `/id/`).
- Russo (`ru-001`) e chinês (`zh-001`) acrescentados como 21.º e 22.º locales totalmente traduzidos: cada um com todos os 63 temas, com os ficheiros auxiliares `.locale-peer-id` correspondentes,
  idênticos em conteúdo a `ru-ru` e `zh-cn`. Ligados ao site e servidos em `/ru-001/` e `/zh-001/` (aliases `/ru/` e `/zh/`).
- Francês (`fr-001`) acrescentado como 20.º locale totalmente traduzido: todos os 63 temas com os ficheiros auxiliares `.locale-peer-id` correspondentes, idêntico em conteúdo a `fr-fr`.
  Ligado ao site e servido em `/fr-001/` (alias `/fr/`).
- Bengali (`bn-001`) acrescentado como 19.º locale totalmente traduzido: todos os 63 temas com os ficheiros auxiliares `.locale-peer-id` correspondentes, idêntico em conteúdo a `bn-bd`.
  Ligado ao site e servido em `/bn-001/` (alias `/bn/`).
- Árabe (`ar-001`) acrescentado como 18.º locale totalmente traduzido: todos os 63 temas com os ficheiros auxiliares `.locale-peer-id` correspondentes, idêntico em conteúdo a `ar-eg`.
  Ligado ao site e servido em `/ar-001/` (alias `/ar/`).
- Galês, Grã-Bretanha (`cy-gb`) acrescentado como 17.º locale totalmente traduzido: todos os 63 temas com os ficheiros auxiliares `.locale-peer-id` correspondentes, idêntico em conteúdo
  a `cy-001` (a mesma relação que `hi-id` tem com `hi-001`). Ligado ao `SERVED_LOCALE_CODES` do site e servido em `/cy-gb/`.
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para neerlandês, Países Baixos (`nl-nl`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar.
  Não havia um locale neerlandês anterior em que basear, pelo que cada tema foi traduzido diretamente da fonte em inglês. O índice (tema 9.7) remapeia cada ligação interna de tema para o respetivo nome de ficheiro
  em neerlandês, seguindo a abordagem adotada para `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` e `sv-se`. Ainda não ligado ao site.
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para sueco, Suécia (`sv-se`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar.
  Cada tema foi traduzido diretamente da fonte em inglês. O índice (tema 9.7) remapeia cada ligação interna de tema para o respetivo nome de ficheiro em sueco, seguindo a abordagem adotada para
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`, `ru-ru` e `fr-fr`. Ainda não ligado ao site.
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para francês, França (`fr-fr`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar.
  Cada tema foi traduzido diretamente da fonte em inglês. O índice (tema 9.7) remapeia cada ligação interna de tema para o respetivo nome de ficheiro em francês, seguindo a abordagem adotada para
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp` e `ru-ru`. Ainda não ligado ao site.
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para russo, Rússia (`ru-ru`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar.
  Cada tema foi traduzido diretamente da fonte em inglês. O índice (tema 9.7) remapeia cada ligação interna de tema para o respetivo nome de ficheiro em russo, seguindo a abordagem adotada para
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt` e `ja-jp`. Ainda não ligado ao site.
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para japonês, Japão (`ja-jp`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar.
  Cada tema foi traduzido diretamente da fonte em inglês. O índice (tema 9.7) remapeia cada ligação interna de tema para o respetivo nome de ficheiro em japonês, seguindo a abordagem adotada para
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es` e `pt-pt`. Ainda não ligado ao site.
- Concluída uma tradução manual integral, de raiz, de todos os 63 temas para português, Portugal (`pt-pt`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar.
  Cada tema foi traduzido diretamente da fonte em inglês. O índice (tema 9.7) remapeia cada ligação interna de tema para o respetivo nome de ficheiro em português, seguindo a abordagem adotada para
  `ar-eg`, `bn-bd`, `ko-kr` e `es-es`. Ainda não ligado ao site.
- Espanhol, Espanha (`es-es`) acrescentado como locale totalmente traduzido, todos os 63 temas, a partir de uma cópia da tradução espanhola existente (`es-001`) (que, ao ser inspecionada,
  se revelou já gramaticalmente neutra, com um vocabulário em grande parte já inclinado para Espanha) e depois aplicando uma passagem terminológica dirigida às restantes utilizações minoritárias, em particular
  "incidente" para "incidencia" no domínio das métricas de incidentes deste livro, com as correspondentes correções de concordância de género em todo o texto. Ainda não ligado ao site.
- Concluída uma tradução manual integral de todos os 63 temas para coreano, Coreia (`ko-kr`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar. O índice (tema 9.7)
  remapeia cada ligação interna de tema para o respetivo nome de ficheiro em coreano, seguindo a abordagem adotada para `ar-eg` e `bn-bd`. Ainda não ligado ao site.
- Hindi, Índia (`hi-id`) acrescentado como locale totalmente traduzido, todos os 63 temas, copiando textualmente a tradução hindi existente (`hi-001`) para o código de locale marcado com o país,
  porque o hindi padrão não tem uma variante independente específica da Índia que precise de ser traduzida à mão em separado. Ainda não ligado ao site.
- Concluída uma tradução manual integral de todos os 63 temas para bengali, Bangladeche (`bn-bd`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar. Ainda não ligado ao site.
- Concluída uma tradução manual integral de todos os 63 temas para árabe, Egito (`ar-eg`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar. Ainda não ligado ao site.
- Concluída uma tradução manual integral de todos os 63 temas para alemão, Alemanha (`de-de`), com os ficheiros auxiliares `.locale-peer-id` correspondentes e `just test` a passar. Ainda não ligado ao site.
- Concluídas traduções manuais integrais de todos os 63 temas em três locales: galês (`cy-001`), chinês (`zh-cn`) e hindi (`hi-001`), cada um com os ficheiros auxiliares `.locale-peer-id` correspondentes
  e `just test` a passar.
- Mais dois locales traduzidos planeados, galês - Grã-Bretanha (`cy-gb`) e chinês (`zh-001`), acrescentados a `spec/locales-for-global-sharing-with-svelte/locales.tsv` e
  `spec/locales.md` (agora treze locales planeados, em vez de onze), e o endónimo de `zh-cn`, até então por decidir, fixado como 中文. Os `LOCALE_LABELS` do site ganharam as entradas
  correspondentes (`cy-gb`: "Cymraeg (Prydain Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Por agora apenas infraestrutura: nenhum destes locales tem um diretório `locales/<code>/` nem conteúdo traduzido.
- Publicado o livro em quatro locales em `locales/`: `en-gb-oxendict` (inglês britânico, ortografia Oxford; a fonte escrita à mão), `en-001` (inglês internacional), `en-gb`
  (inglês britânico corrente) e `en-us` (inglês americano). `en-001`, `en-gb` e `en-us` são derivados mecanicamente de `en-gb-oxendict` pelo novo `tools/localize.py`; veja
  `spec/locales.md`. `docs/` já não existe; todas as referências a ele em `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` e `tools/stats.py` apontam agora para `locales/<locale>/`.
- Acrescentadas duas competências do Claude Code, `software-engineering-metrics-skill` (para leitores que aplicam a orientação do livro à sua própria equipa) e
  `software-engineering-metrics-maintainer-skill` (para contribuidores que acrescentam ou editam temas), em `skills/` e espelhadas em `.claude/skills/`.
- Movida a fonte do site publicado para este repositório como `software-engineering-metrics.github.io/`, anteriormente um repositório separado. Agora lê `locales/` diretamente da raiz do repositório
  em vez de uma cópia extraída ao lado. O `.github/workflows/deploy.yml` na raiz verifica a cada push para `main` que o site continua a compilar e depois envia um `repository_dispatch` para o repositório
  `software-engineering-metrics.github.io` (mantido como uma casca de implementação fina, porque o GitHub Pages só serve esse domínio simples a partir de um repositório com exatamente esse nome),
  que extrai este monorrepositório, compila o site e implementa-o.
- Acrescentada infraestrutura para locales traduzidos (não apenas derivados por ortografia), segundo a nova subespecificação `spec/locales-for-global-sharing-with-svelte/`: `tools/gen_locale_peer_ids.py` dá a cada
  ficheiro de conteúdo um ficheiro auxiliar `.locale-peer-id`, idêntico em todos os locales, que um futuro locale traduzido (com o seu próprio slug em escrita nativa) pode usar para resolver
  "esta página, no locale X" em vez de fazer corresponder por slug; `tests/validate.py` verifica que cada ficheiro auxiliar existe e corresponde. `spec/locales.md` regista dez locales traduzidos planeados (árabe, bengali, galês,
  espanhol, francês, hindi, indonésio, português, russo, urdu e chinês - China). Do lado do site, `scripts/locales.mjs` ganhou `LOCALE_LABELS`/`localeLabel()` (nomes de apresentação de cada locale planeado,
  prontos antes do encaminhamento) e `sortedLocaleEntries()` (a ordem de ordenação que uma futura lista de locales deve usar), e `src/lib/i18n.js` extraiu as cadeias do chrome da interface (navegação, barra lateral, paginador, seletores,
  rodapé, ligações de salto) que cada componente `.svelte` antes fixava em inglês, encaminhadas por `ui(locale)`, com recurso ao inglês para qualquer locale sem tradução própria.
- Substituído o controlo de cabeçalho do site, feito à mão e só para locale, por `@lilydesignsystem/svelte-picker-bar` do [Lily Design System](https://lilydesignsystem.com/): um verdadeiro seletor de tema
  (claro/escuro, através de novos `static/assets/themes/{light,dark}.css`), um verdadeiro seletor de locale (ligado ao encaminhamento por URL deste site em vez do seu comportamento por omissão só de lang/dir),
  um seletor de tamanho de texto (a escala de sete passos do Lily) e um seletor de partilha (e-mail, Mastodon, copiar ligação). Fixados `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` em
  `^0.1.2` e `@lilydesignsystem/svelte-headless` em `^0.2.0` através de overrides em `pnpm-workspace.yaml`, contornando um erro real publicado nos intervalos de dependências da própria `svelte-picker-bar` 0.1.0
  (veja o `CHANGELOG.md` de cada seletor, "0.1.2", e o `AGENTS.md` deste site).
- Removida a linha de estatísticas da página inicial (partes/temas/"Free Always") e a sua secção "How to read it", e substituída a grelha de cartões "Browse the nine parts" por uma lista simples de pontos.

### Changed

- Acrescentado `scripts/generate-sitemap.mjs`, que corre no fim de `pnpm build` e escreve `sitemap.xml` a partir das páginas pré-renderizadas (apenas URL canónicos de locale, sem duplicados dos aliases de duas letras),
  para que a linha `Sitemap:` de `robots.txt` resolva.
- Acrescentado o tema 2.8, métricas de cadeia de valor lean (tempo de espera, tempo de processamento, tempo de ciclo, percentagem completa e correta e takt time do mapeamento clássico da cadeia de valor lean,
  mais o cálculo do rendimento de débito acumulado), colocado depois da teoria das filas. As métricas de pull requests e de revisão de código passaram de 2.8 para 2.9 e o tema das métricas DORA de 2.9 para 2.10.
  Todas as referências cruzadas afetadas em todo o livro foram atualizadas.
- Parte 2 renomeada de "Delivery and Flow Metrics" para "Flow Metrics" e reestruturada em torno do Flow Framework de Mik Kersten. Acrescentados quatro temas novos: 2.1 O Flow Framework, 2.2 Itens de fluxo (funcionalidades, defeitos,
  riscos, dívida), 2.3 Velocidade de fluxo e distribuição de fluxo e 2.4 Tempo de fluxo e carga de fluxo. Os quatro temas individuais de métricas DORA (frequência de implementação, tempo de espera, taxa de falha das alterações,
  tempo de recuperação) foram consolidados num único tema de referência, 2.9 O referencial de métricas DORA, movido para o fim da parte. A eficiência de fluxo e o trabalho em curso foram renumerados para 2.5 e o tema de teoria das filas
  (antes 2.9) foi renomeado e renumerado para 2.7 Teoria das filas. O tempo de ciclo (2.6) e as métricas de pull requests e de revisão de código (2.8) mantêm os seus números. Todas as referências cruzadas em todo o livro, no glossário,
  na referência de fórmulas, na autoavaliação de maturidade e nos preliminares foram atualizadas para corresponder.

### Added

- Lançamento inicial: 45 temas de conteúdo em 8 partes, mais os preliminares e um apêndice de 7 temas (Parte 9), cobrindo os referenciais DORA e SPACE, métricas de código e qualidade, métricas de produto e negócio,
  métricas de fiabilidade e segurança, e o impacto da IA generativa nas métricas de engenharia.
- Infraestrutura do repositório espelhada do projeto irmão `software-engineering-guide`: um `spec/` orientado por especificação (índice, estrutura, convenções, ortografia oxford, roteiro), um conjunto de validação em
  `tests/validate.py`, um gerador de navegação em `tools/gen_nav.py`, um `justfile`, `AGENTS.md` com orientações para contribuidores em `docs/contributing/`, `CONTRIBUTING.md` e este registo de alterações.
- `spec/structure.md`, o manifesto canónico de temas face ao qual os testes verificam os ficheiros.
- Dois exemplos concretizados em `docs/examples/`: uma carta de métricas preenchida e uma especificação de painel.

## Historial

O livro foi construído da especificação para fora: a estrutura de nove partes foi declarada primeiro em `spec/structure.md`, depois cada tema foi redigido face ao modelo partilhado em
`docs/contributing/chapter-template.md`, com `tests/validate.py` a impor a estrutura e o estilo da casa durante todo o processo.

## Convenções deste ficheiro

- Agrupe as alterações em **Added**, **Changed**, **Fixed**, **Removed** ou **Deprecated**.
- Mantenha as entradas curtas e específicas. Uma linha cada, sempre que possível.
- Também aqui, não use travessões; os testes verificam este ficheiro.
