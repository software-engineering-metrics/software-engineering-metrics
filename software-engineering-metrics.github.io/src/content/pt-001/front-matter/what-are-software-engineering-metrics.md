# O que são métricas de engenharia de software?

As [métricas de engenharia de software](https://en.wikipedia.org/wiki/Software_metric) são medidas quantitativas usadas para avaliar, acompanhar e melhorar
a qualidade, a eficiência e o impacto dos processos, dos produtos e das equipas de desenvolvimento de software. Bem usadas, funcionam como uma ferramenta de
diagnóstico sistémico: revelam estrangulamentos operacionais, justificam o pagamento da dívida técnica e alinham a atividade de engenharia com resultados de negócio
concretos. Mal usadas, distorcem comportamentos, corroem a confiança e recompensam precisamente a coisa errada.

Este livro existe porque a maioria das equipas recorre a métricas antes de decidir *para que serve* uma métrica. O painel enche-se de tudo o que é fácil de contar,
a liderança começa a perguntar "este número subiu ou desceu?" e, num trimestre, a equipa está a otimizar o número em vez do resultado que ele devia representar.
Essa falha tem nome: [a lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law). Quando uma medida se torna um objetivo, deixa de ser uma boa medida.
Cada tema deste livro foi escrito com essa lei por trás.

## Dois referenciais de base

O setor convergiu, em grande medida, para dois referenciais com base em investigação para medir a entrega de engenharia e a saúde das equipas.

As **[métricas DORA](https://dora.dev/guides/dora-metrics/)** (do programa DevOps Research and Assessment) medem o débito e a estabilidade de um sistema:
frequência de implementação, tempo de espera das alterações, taxa de falha das alterações e tempo de recuperação de uma implementação falhada. A Parte 2 deste livro
trata as quatro num único tema de referência, a par do Flow Framework, que usamos para organizar de forma mais ampla as métricas de entrega e de fluxo, porque a DORA
mede bem a mecânica do pipeline mas nada diz sobre que tipo de valor flui através dele.

O **[referencial SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, criado por investigadores da Microsoft, do GitHub e da Universidade de Victoria,
equilibra o débito em bruto com a experiência dos programadores em cinco dimensões: satisfação e bem-estar, desempenho, atividade, comunicação e colaboração,
e eficiência e fluxo. A Parte 3 aprofunda-o.

Para além destes dois referenciais, as equipas acompanham métricas locais agrupadas por domínio: métricas de código e qualidade (Parte 4), métricas de produto e negócio
(Parte 5) e métricas de fiabilidade, operações e segurança (Parte 6). A Parte 7 trata da mudança que já está em curso: as ferramentas de IA generativa tornaram a produção de código
em bruto quase gratuita, o que significa que algumas métricas em que o setor se apoiou durante uma década já não querem dizer o que diziam.

## Para quem é este livro

Os leitores principais são quem escolhe o que uma equipa mede e porquê: líderes de engenharia, engenheiros staff e principal, equipas de plataforma e DevOps, e gestores de programa e de produto
que estão a construir pela primeira vez um painel de métricas ou um scorecard, ou a reparar um que começou a distorcer comportamentos. Os leitores secundários são todos os engenheiros que querem
perceber por que razão a sua organização acompanha o que acompanha, e como contestar quando uma métrica é mal usada.

## Como o ler

Comece aqui e depois leia a [introdução](introduction.md) para ver como o livro está organizado, ou salte diretamente para o [índice](table-of-contents.md).
Cada tema é autónomo: enuncia primeiro o princípio, faz recomendações concretas, nomeia como a métrica abordada é manipulada e termina com um
modelo de maturidade, questões para discussão e referências. Não precisa de ler o livro de ponta a ponta para tirar proveito dele.
