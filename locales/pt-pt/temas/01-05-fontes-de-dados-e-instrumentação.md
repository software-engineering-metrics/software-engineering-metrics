# 1.5 Fontes de dados e instrumentação

## Visão geral e motivação

Uma métrica só é tão credível quanto os dados por baixo dela, e a maioria dos programas de métricas gasta muito mais esforço a desenhar painéis de controlo do que a verificar o pipeline que os alimenta. Isto está ao contrário. Um gráfico lindamente desenhado construído sobre instrumentação inconsistente, autorrelatada, ou silenciosamente avariada é pior do que nenhum gráfico, porque parece autoritativo enquanto está errado. Este capítulo trata da fundação pouco glamorosa que o resto deste livro assume: de onde vêm realmente os dados de engenharia, quando confiar na instrumentação automatizada acima do autorrelato, e as falhas de qualidade de dados que invalidam silenciosamente uma métrica antes de alguém reparar.

Os dados de engenharia de software vêm de um punhado de tipos de fontes, cada uma com características de fiabilidade diferentes. O controlo de versões e os pipelines de **[CI/CD](https://en.wikipedia.org/wiki/CI/CD)** geram registos objetivos, com marca temporal, difíceis de falsificar, daquilo que realmente aconteceu. Os rastreadores de problemas e as ferramentas de gestão de projetos geram registos que dependem de humanos atualizarem o estado correta e prontamente, o que fazem muitas vezes de forma inconsistente. As sondagens geram dados autorrelatados que são inestimáveis para coisas que nenhum sistema consegue observar, como a satisfação, mas estão sujeitos a viés de recordação e a efeitos de desejabilidade social. As plataformas de observabilidade geram telemetria ao nível do sistema que é objetiva mas só cobre o que foi instrumentado. Saber de que categoria vêm os dados de uma dada métrica diz-lhe quanto confiar nela e que modos de falha vigiar.

À escala empresarial e governamental, os problemas de qualidade de dados agravam-se porque a distância entre a origem dos dados e o seu uso final num painel de controlo cresce através de múltiplos sistemas, integrações, e transformações. Um campo que significa uma coisa no sistema de origem pode significar algo subtilmente diferente quando chega a uma camada de relato, e ninguém a jusante repara porque o número ainda parece plausível. Acertar na instrumentação é menos excitante do que acertar nas estruturas, mas é a fundação sobre a qual tudo o resto neste livro assenta.

## Princípios-chave

- **Prefira a instrumentação ao autorrelato sempre que o sistema consiga observar o evento diretamente.** Uma marca temporal de implementação do pipeline é mais credível do que a contagem autorrelatada de implementações de uma equipa.
- **Use o autorrelato apenas para o que não pode ser observado diretamente.** A satisfação, o atrito percebido, e o bem-estar não têm substituto num sistema de registo; pergunte diretamente e desenhe bem a sondagem (capítulo 3.7). Reserve o autorrelato especificamente para essa categoria.
- **Os dados de cada métrica têm um sistema de origem, um método de recolha, e um modo de falha conhecido.** Documente todos os três, não apenas a definição.
- **A qualidade dos dados decai silenciosamente.** Um pipeline que funcionava corretamente há um ano pode estar silenciosamente avariado hoje, e um painel de controlo continuará a renderizar um número errado sem se queixar.
- **Instrumente no ponto da verdade, não a jusante de uma tradução.** Cada salto entre o evento e o painel de controlo é uma oportunidade para o significado derivar.

## Recomendações

### Mapear cada métrica para o seu sistema de origem real antes de confiar nela

Para cada métrica num painel de controlo, nomeie o sistema específico que gera o evento subjacente: o pipeline de CI/CD para eventos de implementação, o anfitrião de controlo de versões para eventos de commit e integração, o rastreador de incidentes para registos de interrupção, a plataforma de sondagem para satisfação autorrelatada. Se não conseguir nomear o sistema exato, não sabe realmente de onde vem o número, e não consegue avaliar a sua fiabilidade. Este mapeamento é um pré-requisito para a carta de governação do capítulo 1.4, não um exercício separado.

### Instrumentar no evento, não no relatório

Os dados mais fiáveis capturam um evento automaticamente no momento em que acontece: um pipeline regista uma implementação no instante em que é concluída, um sistema de controlo de versões regista uma integração no instante em que acontece. Os dados que dependem de um humano se lembrar de atualizar um campo de estado depois, marcar um ticket como "concluído," registar uma implementação manualmente numa folha de cálculo, degradam-se em precisão quanto mais afastados estão do evento real e quanto mais ocupada a pessoa responsável se torna. Sempre que existir um evento automatizado, prefira-o a um proxy reportado por humanos para o mesmo facto.

### Reservar as sondagens para o que apenas uma pessoa consegue dizer

Algumas coisas genuinamente não podem ser observadas a partir da telemetria do sistema: se um engenheiro sente que o seu trabalho tem significado, se um processo parece frustrante, se o risco de esgotamento está a subir. Estas exigem perguntar diretamente, e uma sondagem bem desenhada (o capítulo 3.7 cobre a mecânica) é a ferramenta certa. O erro é usar o autorrelato para coisas que um sistema poderia observar diretamente, pedindo aos engenheiros para estimarem a sua própria frequência de implementação em vez de a extrair do pipeline, o que introduz ruído e viés desnecessários em dados que poderiam ter sido objetivos.

### Construir verificações de qualidade de dados no próprio pipeline

Trate os pipelines de métricas com o mesmo rigor que o código de produção: acrescente verificações automatizadas que assinalem quando uma fonte deixa de enviar dados, quando a distribuição de um campo muda inesperadamente, ou quando uma contagem cai para zero inesperadamente. Um painel de controlo que renderiza silenciosamente dados desatualizados ou avariados como se fossem atuais é pior do que um painel de controlo que mostra visivelmente "dados indisponíveis," porque o primeiro erode a confiança invisivelmente enquanto o segundo pelo menos diz a verdade sobre as suas próprias limitações.

### Documentar o método de recolha ao lado da definição

A definição de uma métrica ("tempo de espera para mudanças") não está completa sem o seu método de recolha (medido a partir da marca temporal do primeiro commit no controlo de versões até à marca temporal da implementação em produção no pipeline, excluindo ramos de correção urgente). Duas equipas com a mesma definição mas métodos de recolha diferentes continuarão a produzir números incomparáveis. Registe ambos na carta de métricas do capítulo 1.4, e trate uma mudança em qualquer um deles como uma mudança que exige a mesma revisão documentada.

## Trocas: prós e contras

| Tipo de fonte | Prós | Contras |
| --- | --- | --- |
| Instrumentação automatizada de pipeline (CI/CD, controlo de versões) | Objetiva, com marca temporal, difícil de falsificar, baixo esforço contínuo | Exige investimento antecipado de engenharia para construir e manter |
| Dados de rastreador de problemas e gestão de projetos | Amplamente disponíveis, familiares às equipas | Depende da diligência humana; frequentemente inconsistente entre equipas |
| Sondagens e autorrelato | Única fonte para experiência subjetiva (satisfação, bem-estar) | Viés de recordação, viés de desejabilidade social, fadiga de resposta |
| Plataformas de observabilidade e telemetria | Sinal rico, em tempo real, ao nível do sistema | Só cobre o que foi explicitamente instrumentado; pode ser caro à escala |

A tensão central é **objetividade versus cobertura**. A instrumentação automatizada é a fonte mais credível mas não consegue observar a experiência subjetiva de todo, enquanto as sondagens conseguem alcançar precisamente o que a automação não consegue mas carregam um risco real de viés. Resolva a tensão usando a instrumentação automatizada sempre que um evento possa ser observado diretamente, e reservando o autorrelato específica e apenas para o que genuinamente exige perguntar a uma pessoa, nunca como um substituto preguiçoso para dados que um sistema poderia ter fornecido.

## Perguntas para debater com a sua equipa

1. **Para as nossas cinco métricas mais importantes, conseguimos nomear o sistema de origem exato e o método de recolha para cada uma, ou estamos a assumir uma definição sem saber de onde vêm realmente os dados?** Esta é uma lacuna surpreendentemente comum: uma métrica é adotada de uma estrutura ou do painel de controlo predefinido de um fornecedor, e ninguém na equipa atual sabe realmente que sistema gera os dados subjacentes ou como. Trace cada uma de volta à sua origem como exercício de grupo.

2. **Quais das nossas métricas dependem do autorrelato para algo que um sistema poderia observar diretamente, e o que seria preciso para substituir esse autorrelato por instrumentação real?** Contagens de implementação autorrelatadas, horas trabalhadas autorrelatadas, e tempo de ciclo autoestimado são todos exemplos comuns de usar a fonte de dados errada para algo que a automação poderia capturar de forma mais fiável. Identifique estes e priorize substituir os de maior risco.

3. **Como saberíamos se um dos nossos pipelines de dados se avariasse silenciosamente?** A maioria das organizações descobre um pipeline de métricas avariado apenas quando alguém repara que um número parece implausível, o que pode demorar meses. Discuta se algum dos seus pipelines tem verificações de saúde automatizadas hoje, e se não, quais precisam delas primeiro.

4. **Onde é que uma tradução entre sistemas mudou o significado de uma métrica sem que ninguém decidisse isso de propósito?** Um campo que significa uma coisa num sistema de origem pode significar algo subtilmente diferente depois de uma integração ou migração, e o número resultante pode parecer plausível enquanto está errado. Percorra o caminho completo dos dados da sua métrica mais consequente e procure pontos de tradução.

5. **Documentamos métodos de recolha, não apenas definições, para a nossa carta de métricas?** Duas equipas podem partilhar o nome e a definição de uma métrica enquanto a calculam a partir de métodos de recolha diferentes, produzindo números que não são na verdade comparáveis. Audite uma amostra das suas cartas contra esta lacuna específica.

6. **Como distinguimos entre uma tendência genuína e um artefacto de qualidade de dados quando um número se move inesperadamente?** Uma mudança súbita numa métrica é muitas vezes o primeiro sinal de uma mudança real ou de um pipeline avariado, e distinguir as duas exige conhecer a fonte de dados suficientemente bem para investigar rapidamente. Discuta o processo real da sua equipa para a última mudança inexplicada de métrica que encontraram.

## Perspetiva setorial

**Startup.** Com uma pilha pequena, a maior parte das suas métricas pode vir diretamente do seu fornecedor de CI/CD, do anfitrião de controlo de versões, e de uma ferramenta de sondagem leve, sem construir pipelines personalizados. O risco é saltar mesmo as verificações de saúde básicas porque a equipa se move depressa; uma verificação automatizada de cinco minutos de que uma fonte de dados ainda está a enviar eventos é um seguro barato contra voar silenciosamente às cegas.

**Pequena empresa.** Apoie-se nos relatórios integrados das suas ferramentas existentes em vez de construir pipelines de dados personalizados que não tem capacidade para manter. Seja explícito sobre quais números vêm de sistemas automatizados e quais são estimativas que alguém digita numa folha de cálculo, porque os dois carregam fiabilidades muito diferentes, mesmo que acabem na mesma página.

**Empresa.** Os problemas de qualidade de dados agravam-se através de integrações, migrações, e fronteiras de unidades de negócio. Invista em pipelines de dados centralizados e bem monitorizados para as suas métricas mais consequentes, construa verificações automatizadas de qualidade de dados como prática padrão, e audite os métodos de recolha, não apenas as definições, sempre que comparar métricas entre unidades de negócio.

**Governo.** A proveniência dos dados pode carregar peso legal e de auditoria: uma figura de desempenho publicada pode precisar de sobreviver a uma auditoria externa não apenas do seu valor mas de toda a sua cadeia de recolha. Documente a linhagem dos dados explicitamente, retenha registos históricos de métodos de recolha mesmo depois de uma metodologia mudar, e esteja preparado para demonstrar exatamente como um número foi produzido, não apenas o que atualmente mostra.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de serviços financeiros tinha estado a acompanhar o "tempo de espera para mudanças" durante dois anos antes de descobrir que uma migração de pipeline de dados dezoito meses antes tinha silenciosamente mudado a fonte da marca temporal do primeiro commit para a criação do pull request, encurtando o tempo de espera aparente numa média de várias horas em todas as equipas sem que ninguém reparasse ou aprovasse a mudança. A correção instituiu uma verificação de qualidade de dados que comparava a distribuição de cada métrica semana a semana e assinalava mudanças estatisticamente invulgares para revisão humana, apanhando dois outros problemas silenciosos de pipeline no ano seguinte.

**Governo.** O painel de controlo público de fiabilidade de serviço de uma agência de transportes dependia de uma mistura de telemetria automatizada de sensores e relatórios de incidentes introduzidos manualmente por escritórios regionais. Uma auditoria encontrou que as regiões com menos capacidade de pessoal estavam sistematicamente a sub-reportar incidentes menores, não por desonestidade mas simplesmente porque a entrada manual competia por tempo com trabalho mais urgente, o que significava que a figura de fiabilidade publicada era melhor do que a realidade precisamente nas regiões que menos podiam permitir que uma manutenção com poucos recursos passasse despercebida. A correção da agência substituiu a entrada manual de incidentes por registo automatizado despoletado por sensores sempre que viável e acrescentou uma estimativa documentada da cobertura de relato manual ao lado da figura publicada.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de uma instrumentação sólida é a confiança: uma equipa de liderança que confia nos seus dados consegue agir sobre eles decisivamente, enquanto uma equipa que já foi queimada por um pipeline silenciosamente avariado começa a questionar cada número, o que abranda cada decisão que depende de métricas. Essa perda de confiança é cara e difícil de reparar, demorando muitas vezes muito mais a reconstruir do que o investimento original de instrumentação teria custado.

O custo total de propriedade de uma boa instrumentação inclui o trabalho de engenharia antecipado para construir pipelines fiáveis e o custo contínuo de monitorização de qualidade de dados, ambos fáceis de subinvestir porque nenhum produz um painel de controlo visível próprio. Esse subinvestimento é uma falsa economia: o custo de descobrir um pipeline silenciosamente avariado depois de meses de decisões terem sido tomadas com base em dados maus é muito mais alto do que o custo de construir as verificações de saúde que o teriam apanhado no primeiro dia.

## Antipadrões e armadilhas

- **Confiar num número sem saber o seu sistema de origem:** uma métrica adotada de uma estrutura ou predefinição de fornecedor sem que ninguém trace de onde vêm realmente os dados.
- **Autorrelatar o que um sistema poderia observar diretamente:** introduz ruído e viés desnecessários em dados que poderiam ter sido objetivos.
- **Nenhuma verificação automatizada de qualidade de dados num pipeline de métricas:** um pipeline silenciosamente avariado pode renderizar números errados durante meses sem ser detetado.
- **Documentar apenas a definição, não o método de recolha:** duas equipas com o mesmo nome de métrica podem continuar a calcular números incomparáveis.
- **Um painel de controlo que renderiza "0" ou dados desatualizados como se fossem atuais, sem indicação de falha de fonte:** pior do que uma mensagem visível de "dados indisponíveis."
- **Regiões ou equipas com poucos recursos a sub-reportar sistematicamente devido ao fardo de entrada manual:** uma lacuna de qualidade de dados que correlaciona precisamente com as áreas que mais precisam de atenção.

## Modelo de maturidade

- **Nível 1, Iniciar:** Ninguém consegue traçar fiavelmente uma métrica de volta ao seu sistema de origem; os pipelines não têm verificações de saúde e as falhas passam despercebidas.
- **Nível 2, Desenvolver:** Algumas métricas têm fontes documentadas, mas os métodos de recolha são inconsistentes e as verificações de qualidade de dados são ad hoc na melhor das hipóteses.
- **Nível 3, Padronizar:** Toda a métrica governada documenta o seu sistema de origem e método de recolha; a instrumentação automatizada é preferida ao autorrelato sempre que um evento pode ser observado diretamente.
- **Nível 4, Gerir:** As verificações automatizadas de qualidade de dados monitorizam todos os pipelines consequentes, assinalam anomalias para revisão, e a linhagem dos dados é documentada e auditável.
- **Nível 5, Orquestrar:** A organização trata a qualidade de dados como uma disciplina de engenharia de primeira classe com a sua própria monitorização e resposta a incidentes, e consegue demonstrar a proveniência completa de qualquer métrica publicada a pedido.

## Ideias para debate

1. Conseguiríamos traçar as nossas três principais métricas de volta ao seu sistema de origem exato agora mesmo, ao vivo, nesta reunião?
2. Quais das nossas métricas atuais dependem do autorrelato para algo que um sistema poderia medir diretamente?
3. Algum dos nossos pipelines de métricas tem verificações de saúde automatizadas hoje?
4. Quando foi a última vez que descobrimos um pipeline de dados silenciosamente avariado, e há quanto tempo estava errado?
5. Onde é que a entrada manual de dados cria uma lacuna entre a realidade reportada e a realidade real?

## Principais conclusões

- Prefira a **instrumentação automatizada** ao autorrelato sempre que um sistema consiga observar o evento diretamente; reserve o autorrelato para experiência genuinamente subjetiva.
- Toda a métrica precisa de um **sistema de origem e método de recolha** documentados, não apenas de uma definição.
- A qualidade dos dados **decai silenciosamente**; construa verificações automatizadas no próprio pipeline em vez de descobrir avarias por acidente.
- Instrumente **no evento**, não a jusante de uma tradução, para minimizar a deriva entre o que aconteceu e o que o painel de controlo mostra.
- O custo de um pipeline silenciosamente avariado, meses de decisões tomadas com base em dados maus, excede em muito o custo das verificações de saúde que o teriam apanhado.

## Referências e leituras adicionais

- *Observability Engineering*, de Charity Majors, Liz Fong-Jones, e George Miranda.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Data Quality: The Accuracy Dimension*, de Jack E. Olson.
- *How to Measure Anything*, de Douglas W. Hubbard.
