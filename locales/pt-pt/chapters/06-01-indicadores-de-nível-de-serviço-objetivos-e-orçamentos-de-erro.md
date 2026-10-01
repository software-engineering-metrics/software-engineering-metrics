# 6.1 Indicadores de nível de serviço, objetivos, e orçamentos de erro

## Visão geral e motivação

A **[engenharia de fiabilidade de sítio](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, a disciplina pioneirada na Google e documentada no livro *Site Reliability Engineering*, contribuiu um vocabulário sobre o qual este capítulo se constrói diretamente: um **indicador de nível de serviço (SLI)** é um sinal diretamente medido da saúde de um serviço, latência de pedido, taxa de erro, disponibilidade. Um **objetivo de nível de serviço (SLO)** é o intervalo-alvo para esse indicador, 99,9% dos pedidos têm sucesso dentro de 200 milissegundos, por exemplo. E um **orçamento de erro** é a falha permitida, os 0,1% de pedidos autorizados a falhar, tratado não como um defeito a eliminar mas como um recurso gastável que pode ser usado deliberadamente para assumir risco: entregar uma mudança arriscada, correr uma experiência, ou simplesmente aceitar que a fiabilidade perfeita não é alcançável nem, para além de um certo ponto, vale o seu custo.

Esta última ideia, o orçamento de erro como um recurso gastável em vez de um número a minimizar até zero, é o conceito único mais importante neste capítulo e, sem dúvida, em toda esta parte. Resolve uma tensão que atormenta muitas organizações: a engenharia quer entregar funcionalidades e assumir riscos razoáveis; as operações querem máxima estabilidade. Sem um orçamento de erro partilhado e quantificado, isto torna-se uma negociação interminável e politicamente carregada. Com um, torna-se uma regra simples e objetiva: gaste livremente enquanto o orçamento permanecer, abrande e priorize o trabalho de estabilidade automaticamente uma vez esgotado. Isto transforma um desacordo filosófico num aritmético.

Para equipas grandes, os SLOs e orçamentos de erro são o que torna a fiabilidade mensurável e negociável em vez de um absoluto inatingível e não declarado que cada equipa silenciosamente falha em cumprir enquanto se sente vagamente culpada por isso. As organizações empresariais usam SLOs para definir expectativas claras e contratuais entre equipas e com clientes; as organizações governamentais que operam infraestrutura pública crítica usam-nos para definir metas defensáveis e publicamente justificáveis de fiabilidade em vez de um padrão impossível de perfeição que nenhum sistema real consegue sustentar.

## Princípios-chave

- **A fiabilidade de 100% é o alvo errado para quase qualquer sistema.** É normalmente inalcançável, e persegui-la para além de um certo ponto ativamente troca velocidade por nenhum benefício significativo ao utilizador.
- **Um SLO deve refletir o que os utilizadores realmente notam e com que se preocupam**, não um número redondo arbitrário escolhido porque soa tranquilizador.
- **O orçamento de erro transforma a fiabilidade num recurso gastável**, dando tanto à engenharia como às operações uma regra partilhada e objetiva para quando entregar depressa e quando abrandar.
- **Os SLIs devem ser medidos a partir da experiência real do utilizador** sempre que possível, não apenas a partir da saúde autorreportada de um sistema interno.
- **Esgotar o orçamento de erro desencadeia uma resposta predeterminada e acordada**, não um argumento ad hoc sempre que acontece.

## Recomendações

### Escolha SLIs que reflitam experiência genuína do utilizador

Selecione indicadores medidos o mais perto possível da experiência real do utilizador: taxa de sucesso e latência de pedido medidas na periferia ou no balanceador de carga, não apenas verificações internas de saúde de serviço que podem reportar "saudável" enquanto os utilizadores experimentam problemas reais. Um SLI que mede algo que o utilizador nunca realmente nota, um componente interno estar tecnicamente ativo enquanto o pedido global ainda falha, está a medir a coisa errada por mais fácil que seja de instrumentar.

### Defina o alvo do SLO com base no que os utilizadores realmente precisam, não um número redondo arbitrário

Resista ao reflexo de definir um alvo como "99,99% de disponibilidade" simplesmente porque soa impressionantemente rigoroso. Em vez disso, investigue que nível de fiabilidade os utilizadores genuinamente notam e com que se preocupam, informado por dados históricos de incidentes, investigação de utilizador, e o custo demonstrado de alcançar cada incremento adicional de fiabilidade, já que ir de 99,9% para 99,99% custa muitas vezes muito mais esforço de engenharia do que ir de 99% para 99,9% custou, para benefício decrescente e eventualmente negligenciável percetível ao utilizador.

### Trate o orçamento de erro como um recurso gastável com uma resposta predeterminada ao esgotamento

Calcule o orçamento de erro diretamente a partir do SLO (um alvo de 99,9% de disponibilidade ao longo de 30 dias permite aproximadamente 43 minutos de indisponibilidade permitida) e rastreie o gasto contra ele continuamente. Acorde, antecipadamente e antes de qualquer incidente específico, o que acontece quando o orçamento é esgotado: uma política comum e eficaz é que o trabalho de funcionalidades pausa e a prioridade da equipa muda automaticamente para trabalho de fiabilidade até o orçamento recuperar. Esta regra predeterminada remove a necessidade de relitigar a troca sob pressão durante cada incidente individual.

### Use o orçamento de erro para tomar decisões deliberadas e informadas de risco

Um orçamento de erro saudável e não gasto não é algo para acumular; é permissão para assumir riscos razoáveis, entregar uma mudança com risco elevado mas aceitável, correr uma experiência de engenharia do caos (o capítulo de engenharia do caos do livro irmão `software-engineering-guide` cobre isto diretamente), ou aceitar uma mudança arquitetural mais arriscada, porque o orçamento existe especificamente para ser gasto deliberadamente em vez de preservado intocado. Um orçamento de erro que nunca é gasto sugere ou uma equipa excessivamente conservadora ou um SLO definido demasiado frouxamente relativamente à fiabilidade real alcançada, ambos a valer a pena investigar.

### Reveja e revise os SLOs periodicamente, com base em evidência, não em inércia

Um SLO definido há anos pode já não refletir as expectativas atuais dos utilizadores, a arquitetura do sistema, ou as prioridades de negócio. Reveja os SLOs numa cadência regular, verificando a fiabilidade histórica alcançada, o feedback dos utilizadores, e se o alvo ainda representa um ponto significativo de troca em vez de ou um alvo facilmente cumprido que poderia ser apertado para permitir mais velocidade noutro lugar, ou um irrealista que a equipa efetivamente desistiu de cumprir.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Nenhum SLO formal ("tão fiável quanto possível" implícito) | Nenhuma sobrecarga para configurar | Negociação interminável e sem fundamento entre velocidade e estabilidade; nenhuma regra partilhada |
| SLO aspiracional e muito alto (99,99%+) | Sinaliza seriedade sobre fiabilidade | Custo muitas vezes desnecessário; retornos decrescentes para além do que os utilizadores realmente notam |
| SLO baseado em evidência e fundamentado na experiência do utilizador | Reflete valor genuíno; defensável e alcançável | Exige dados reais e análise para definir corretamente |
| Orçamento de erro com resposta predeterminada ao esgotamento | Remove negociação ad hoc; tomada de decisão objetiva e rápida | Exige adesão organizacional e disciplina para realmente honrar a regra predeterminada |

A tensão central é **aspiração versus alcançabilidade**. Um SLO alto e aspiracional parece sinalizar seriedade sobre qualidade, mas perseguir a fiabilidade para além do que os utilizadores realmente notam troca velocidade real por nenhum benefício genuíno, e um alvo irrealista que a equipa nunca realmente cumpre ensina toda a gente a deixar de levar o SLO a sério de todo. Resolva a tensão fundamentando o SLO em evidência real, o que os utilizadores notam, o que o sistema historicamente alcançou, o que cada incremento adicional custa, em vez de em aspiração ou um desejo de parecer rigoroso num placar.

## Perguntas para debater com a sua equipa

1. **O nosso SLO atual está fundamentado em evidência sobre o que os utilizadores realmente notam, ou foi definido aspiracionalmente porque um número alto parecia apropriadamente sério?** Rastreie a origem do seu alvo atual, se conseguir, e avalie honestamente se reflete investigação real de utilizador ou apenas intuição de engenharia.

2. **Temos uma resposta predeterminada e acordada ao esgotamento do orçamento de erro, ou a troca é relitigada sempre que acontece?** Se a resposta honesta é a segunda, essa lacuna vale a pena fechar antes de o próximo incidente forçar o argumento sob pressão.

3. **O nosso orçamento de erro é alguma vez realmente gasto deliberadamente, numa mudança de risco calculado ou numa experiência, ou é apenas consumido acidentalmente através de incidentes?** Um orçamento que nunca é deliberadamente gasto pode indicar uma equipa excessivamente cautelosa a perder oportunidades legítimas que o orçamento existe para permitir.

4. **Os nossos SLIs são medidos a partir de experiência genuína do utilizador, ou a partir de saúde interna do sistema que pode não refletir o que os utilizadores realmente encontram?** Verifique a sua instrumentação atual contra esta distinção específica; é uma lacuna comum mesmo em programas de fiabilidade de outra forma maduros.

5. **Quando revimos pela última vez o nosso SLO contra evidência atual, e alguma coisa mudou, expectativas de utilizador, arquitetura de sistema, prioridades de negócio, que justificasse revê-lo?** Se não conseguir lembrar-se de uma revisão recente, essa ausência vale a pena ser discutida em si mesma.

6. **Quanto nos custaria, em esforço de engenharia, mover o nosso SLO atual para cima em mais um "nove" de fiabilidade, e esse custo seria justificado por algum benefício genuíno ao utilizador?** Este enquadramento concreto de custo-benefício ajuda a fundamentar a tensão aspiração-versus-alcançabilidade em números reais em vez de preferência abstrata.

## Perspetiva setorial

**Startup.** Os SLOs formais são muitas vezes desnecessários muito cedo, quando a equipa consegue responder a problemas de fiabilidade direta e informalmente. Adote pelo menos um SLO aproximado e informal assim que tiver clientes pagantes reais a depender da disponibilidade, já que a disciplina de um alvo explícito, mesmo um rastreado frouxamente, ajuda a priorizar o trabalho de fiabilidade contra a pressão de funcionalidades mais cedo do que a maioria das empresas jovens pensa em fazer.

**Pequena empresa.** A maioria das plataformas modernas de alojamento e observabilidade reporta dados básicos de disponibilidade e latência com configuração mínima; use isto para definir um SLO simples e alcançável em vez de um aspiracional que não consegue realisticamente rastrear ou agir sobre com capacidade operacional limitada.

**Empresa.** Os SLOs a esta escala muitas vezes fundamentam acordos contratuais de nível de serviço com consequências financeiras reais, o que torna a definição de alvos baseada em evidência e a gestão disciplinada do orçamento de erro especialmente importantes. Invista em SLIs genuinamente fundamentados na experiência do utilizador em vez de verificações internas convenientes de saúde, e estabeleça formalmente a política predeterminada de resposta ao esgotamento, com adesão executiva, antes de ser necessária sob pressão.

**Governo.** Os alvos de fiabilidade do setor público para infraestrutura crítica por vezes carregam peso legal ou regulatório, e um alvo irrealista e não cumprido descoberto durante uma auditoria ou um incidente público danifica significativamente a credibilidade institucional. Defina alvos com base em necessidade genuína e documentada de utilizador e missão, e seja transparente publicamente sobre a troca deliberada que um orçamento de erro representa, em vez de implicar um padrão inatingível de perfeição.

## Exemplos

**Empresa.** Uma empresa de armazenamento em nuvem tinha, durante anos, visado "disponibilidade máxima" sem um SLO formal, levando a uma tensão crónica e não resolvida entre a equipa de produto (a querer entregar funcionalidades depressa) e a equipa de infraestrutura (a querer máxima cautela), relitigada de novo em cada reunião de planeamento de lançamento. Adotar um SLO formal de 99,95% de disponibilidade com um orçamento de erro explícito e uma política predeterminada, o trabalho de funcionalidades pausa automaticamente quando o orçamento é esgotado, resolveu inteiramente a negociação recorrente: ambas as equipas conseguiam ver o mesmo número e concordar com a mesma regra, e a empresa reportou um aumento mensurável em funcionalidades entregues durante períodos de orçamento saudável ao lado de um abrandamento mensurável e deliberado durante os dois períodos ao longo do ano seguinte em que o orçamento estava genuinamente esgotado, exatamente como a política pretendia.

**Governo.** O sistema público de alerta de um serviço nacional de meteorologia tinha operado durante anos sob uma expectativa informal de "sempre disponível", sem alvo documentado e tensão operacional significativa e não abordada na equipa de prevenção a tentar cumprir um padrão não declarado e efetivamente impossível. Um SLO formal recentemente adotado, 99,9% de disponibilidade com uma explicação publicamente comunicada e clara do orçamento de erro, deu à equipa de operações permissão explícita e defensável para agendar janelas planeadas de manutenção dentro do orçamento, algo que a expectativa anterior não declarada de "sempre disponível" tinha tornado politicamente difícil de fazer mesmo quando genuinamente necessário para a saúde a longo prazo do sistema. A comunicação pública explicando diretamente o conceito de orçamento de erro, em vez de o esconder, foi recebida favoravelmente como um sinal de prática operacional honesta e madura em vez de um enfraquecimento do compromisso com a qualidade do serviço.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de adotar SLOs e orçamentos de erro formalmente é resolver uma negociação de outra forma interminável e politicamente custosa entre velocidade e estabilidade com uma única regra partilhada e objetiva. O exemplo de armazenamento em nuvem acima mostra isto concretamente: anos de tensão recorrente e não resolvida entre duas equipas foram resolvidos por um único alvo formal e uma política predeterminada, libertando energia organizacional significativa que anteriormente ia para relitigar repetidamente a mesma troca.

O custo total de propriedade inclui o esforço de análise para definir corretamente um alvo baseado em evidência e a disciplina para honrar a resposta predeterminada de esgotamento mesmo sob pressão para entregar uma funcionalidade particularmente desejada de qualquer forma. Esse custo de disciplina é real, mas é muito menor do que o custo contínuo de uma negociação crónica e não resolvida que consome energia organizacional em cada ciclo de planeamento indefinidamente.

## Antipadrões e armadilhas

- **Definir um SLO aspiracional sem nenhuma evidência por trás dele:** produz um alvo irrealista que a equipa deixa de levar a sério, ou um desnecessariamente caro a perseguir benefício que os utilizadores não notam.
- **Nenhuma resposta predeterminada ao esgotamento do orçamento de erro:** força o mesmo argumento difícil de troca sob pressão sempre que acontece.
- **Medir SLIs a partir de saúde interna do sistema em vez de experiência genuína do utilizador:** pode reportar "saudável" enquanto os utilizadores experimentam problemas reais.
- **Nunca realmente gastar deliberadamente um orçamento de erro saudável:** pode indicar cautela excessiva e oportunidade legítima perdida.
- **Definir um alvo uma vez e nunca o revisitar:** um SLO pode tornar-se obsoleto à medida que as expectativas dos utilizadores, a arquitetura, e as prioridades mudam.
- **Tratar a política de orçamento de erro como opcional sob pressão:** uma regra predeterminada que é ignorada sempre que inconveniente não fornece nenhum valor real de tomada de decisão.

## Modelo de maturidade

- **Nível 1, Iniciar:** Os alvos de fiabilidade são implícitos ou aspiracionais, sem SLO, SLI, ou orçamento de erro formal definido.
- **Nível 2, Desenvolver:** Alguns serviços têm um SLO informal, mas os SLIs podem não refletir experiência genuína do utilizador e não há política predeterminada de esgotamento.
- **Nível 3, Padronizar:** Os SLOs baseados em evidência com SLIs genuínos de experiência do utilizador e uma política predeterminada de esgotamento do orçamento de erro são estabelecidos consistentemente através dos serviços críticos.
- **Nível 4, Gerir:** Os orçamentos de erro são ativa e deliberadamente gastos em tomada de risco calculada, e os SLOs são revistos e revisados numa cadência regular e baseada em evidência.
- **Nível 5, Orquestrar:** Os SLOs e orçamentos de erro são integrados em toda a organização como o mecanismo partilhado e objetivo para equilibrar velocidade e estabilidade, e a organização consegue apontar para decisões específicas que o enquadramento permitiu que uma negociação sem fundamento não teria resolvido tão eficazmente.

## Ideias para debate

1. O nosso SLO atual está fundamentado em evidência, ou em aspiração?
2. Temos uma resposta predeterminada ao esgotamento do orçamento de erro que realmente honraríamos sob pressão?
3. Quando foi a última vez que gastámos deliberadamente um orçamento de erro saudável num risco calculado?
4. Os nossos SLIs estão a medir experiência genuína do utilizador ou verificações internas convenientes de saúde?
5. Quanto nos custaria elevar o nosso SLO em mais um "nove", e esse custo seria justificado?

## Principais conclusões

- Um **indicador de nível de serviço (SLI)** mede experiência genuína do utilizador; um **objetivo de nível de serviço (SLO)** é o seu alvo baseado em evidência; um **orçamento de erro** é a falha permitida e deliberadamente gastável.
- **A fiabilidade de 100% é normalmente o alvo errado**; fundamente o seu SLO no que os utilizadores realmente notam e no que cada incremento adicional genuinamente custa.
- Trate o orçamento de erro como um **recurso gastável com uma resposta predeterminada ao esgotamento**, removendo a necessidade de relitigar velocidade-versus-estabilidade sob pressão sempre.
- Meça os SLIs a partir de **experiência genuína do utilizador**, não apenas verificações internas convenientes de saúde.
- **Reveja e revise os SLOs periodicamente**, com base em evidência, já que um alvo obsoleto perde a sua utilidade à medida que o sistema e os seus utilizadores mudam.

## Referências e leituras adicionais

- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy Beyer, Chris Jones, Jennifer Petoff, e Niall Richard Murphy, eds.
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, e Stephen Thorne, eds.
- *Implementing Service Level Objectives*, de Alex Hidalgo.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
