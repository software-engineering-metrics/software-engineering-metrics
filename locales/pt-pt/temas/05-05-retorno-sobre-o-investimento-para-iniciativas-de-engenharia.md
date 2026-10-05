# 5.5 Retorno sobre o investimento para iniciativas de engenharia

## Visão geral e motivação

Este tema encerra a Parte 5 reunindo tudo o que os quatro temas anteriores mediram, qualidade, adoção, resultados, e custo, num único enquadramento financeiro que em última análise governa a maioria das grandes decisões de investimento de engenharia: o **[retorno sobre o investimento](https://en.wikipedia.org/wiki/Return_on_investment) (ROI)**. Quer uma organização esteja a decidir financiar uma modernização de plataforma, um grande esforço de refatoração, ou uma nova linha de produto, alguém eventualmente tem de responder à pergunta em termos financeiros: isto vale o que custa? Este tema trata de responder a essa pergunta honestamente, usando as métricas que este livro já construiu, em vez de evitar a pergunta (o que cede influência sobre decisões de investimento a pessoas menos equipadas para lhe responder bem) ou responder-lhe com um caso inflacionado e insustentável que danifica a credibilidade quando não se sustenta.

A disciplina que este tema recomenda baseia-se diretamente na economia unitária do tema 5.4 para o lado do custo da equação, e nas métricas de resultado do tema 5.3, com o seu tratamento honesto da incerteza de atribuição, para o lado do benefício. Um caso de ROI construído desta forma é necessariamente mais modesto e mais ressalvado do que um número de manchete simples e apelativo, mas tem a vantagem decisiva que este livro enfatizou ao longo de todo o texto: sobrevive ao escrutínio, e uma organização que constrói consistentemente casos defensáveis de ROI ganha mais confiança, e portanto mais autonomia, em futuras decisões de investimento do que uma que ocasionalmente promete em excesso.

Para equipas grandes, a disciplina de ROI é o que separa uma organização de engenharia tratada como parceira estratégica de uma tratada como um centro de custo cujo gasto é tolerado em vez de ativamente investido. As organizações empresariais usam casos rigorosos de ROI para competir com sucesso por capital contra outros investimentos de negócio; as organizações governamentais usam a disciplina equivalente, muitas vezes reenquadrada como análise custo-benefício, para garantir e sustentar financiamento público de tecnologia contra pressão política e orçamental que tem pouca paciência para promessas vagas e não substanciadas.

## Princípios-chave

- **Um caso honesto de ROI é construído a partir das outras métricas deste livro**, não inventado separadamente; o custo do tema 5.4, o benefício dos temas 5.1 a 5.3.
- **O custo total de propriedade, não apenas o custo inicial, pertence ao lado do custo.** A manutenção contínua, o suporte, e o custo de infraestrutura agravam-se ao longo da vida de um sistema.
- **As estimativas de benefício carregam incerteza; declare-a explicitamente** em vez de apresentar um único número falsamente preciso.
- **Uma descoberta de ROI negativo ou marginal é um resultado legítimo e útil.** A disciplina existe para informar decisões honestamente, não para justificar decisões já tomadas.
- **Rastreie o ROI real posteriormente, não apenas o caso projetado antecipadamente.** Uma projeção que nunca é verificada contra a realidade não ensina nada à organização.

## Recomendações

### Construa o lado do custo a partir do custo total de propriedade, não apenas do investimento inicial

Inclua não apenas o custo inicial de desenvolvimento mas o **[custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)** completo: manutenção contínua, infraestrutura (a economia unitária do tema 5.4 é diretamente útil aqui), suporte, e o custo de oportunidade da capacidade de engenharia que a iniciativa consome que poderia ter ido para trabalho alternativo. Um projeto que parece barato baseado apenas no custo inicial pode ser caro ao longo de toda a sua vida uma vez que o fardo contínuo de manutenção é honestamente contabilizado.

### Construa o lado do benefício a partir de evidência documentada e honesta de resultado

Retire as estimativas de benefício da disciplina de medição de resultado dos temas 5.1 a 5.3: melhorias de qualidade traduzidas em custo reduzido de incidentes e suporte, dados de adoção traduzidos em valor impulsionado por utilização, e correlações de resultado de negócio construídas com a abordagem honesta e verificada quanto a fatores de confusão de cadeia causal do tema 5.3. Evite inventar uma estimativa de benefício a partir de princípios básicos ou suposição otimista quando dados reais medidos ou comparáveis históricos estão disponíveis para a fundamentar.

### Declare a incerteza explicitamente, usando um intervalo em vez de um único número

Apresente estimativas de ROI como um intervalo (um caso conservador e um caso otimista) em vez de uma cifra única e falsamente precisa, e explique o que impulsiona o intervalo: que pressuposto específico, se se revelar otimista ou pessimista, moveria mais o resultado. Isto espelha diretamente o princípio de literacia estatística do tema 1.6, aplicado à projeção financeira, e protege a credibilidade do caso, já que uma estimativa pontual única que se revela errada danifica a confiança muito mais do que um intervalo bem explicado dentro do qual o resultado real cai.

### Trate uma descoberta negativa ou marginal como um resultado legítimo

Construa o seu processo de análise de ROI para ser genuinamente capaz de concluir "isto não vale a pena", e trate essa conclusão, quando a evidência a apoia, como um resultado valioso em vez de um fracasso da análise. Uma organização conhecida por apenas produzir casos positivos de ROI, independentemente da iniciativa, perde rapidamente credibilidade, porque as partes interessadas inferem corretamente que a análise não é realmente independente da decisão que pretende informar.

### Rastreie os resultados reais contra o caso projetado, e feche o ciclo publicamente

Depois de uma iniciativa se completar, ou atingir um marco significativo, compare os resultados reais medidos contra o intervalo originalmente projetado, e publique essa comparação, incluindo onde a projeção estava errada. Esta disciplina de fechar o ciclo, semelhante à recomendação do tema 3.7 para acompanhamento de inquéritos, é o que constrói a credibilidade de previsão de ROI a longo prazo de uma organização e melhora a precisão de estimativas futuras ao criar um ciclo de feedback real e visível.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Afirmação simples de ROI com número único | Convincente, fácil de comunicar | Falsamente precisa; vulnerável a estar errada e a danificar a credibilidade |
| ROI baseado em intervalo com incerteza declarada | Defensável, sobrevive ao escrutínio, honesto sobre o que impulsiona o intervalo | Mais complexo de apresentar; exige mais esforço analítico |
| Análise apenas do custo inicial | Simples, rápida de produzir | Subestima o custo real ao omitir o fardo contínuo de manutenção e suporte |
| Análise completa do custo total de propriedade | Precisa, imagem completa do custo real de investimento | Exige mais recolha de dados, particularmente para projeção de custo contínuo |

A tensão central é **simplicidade persuasiva versus honestidade defensável**, a mesma tensão que o tema 5.3 nomeou para afirmações de resultado em geral, agora aplicada especificamente ao caso financeiro. Uma afirmação simples e confiante de ROI com número único é mais fácil de vender a um decisor no momento, mas um caso honesto baseado em intervalo com incerteza explícita e contabilização completa do custo total de propriedade é o que realmente se sustenta ao longo da vida do investimento e protege a credibilidade da organização para o próximo caso que precisar de fazer.

## Perguntas para debater com a sua equipa

1. **Para o nosso último grande caso de investimento de engenharia, contabilizámos o custo total de propriedade, ou apenas o custo inicial de desenvolvimento?** Revisite o caso original e verifique se o custo contínuo de manutenção e infraestrutura foi incluído, e se não, estime o que teriam acrescentado.

2. **A nossa estimativa de benefício baseou-se em evidência documentada e medida de resultado, ou foi construída a partir de suposição otimista?** Rastreie o lado do benefício de um caso recente até à sua fonte real de evidência e avalie honestamente quão fundamentado realmente estava.

3. **Alguma vez apresentámos uma estimativa de ROI como um único número quando um intervalo teria sido mais honesto?** Discuta como teria sido o intervalo para um caso recente, e que pressuposto específico impulsionou a largura desse intervalo.

4. **O nosso processo de análise de ROI alguma vez concluiu que uma iniciativa não valia a pena perseguir, e como foi essa conclusão recebida?** Se todas as análises passadas concluíram positivamente, discuta honestamente se isso reflete seleção genuinamente sólida de iniciativas ou um processo que apenas produz a resposta que as partes interessadas querem ouvir.

5. **Para uma iniciativa completada, alguma vez voltámos atrás e comparámos os resultados reais contra o caso originalmente projetado?** Se não, escolha uma iniciativa real e completada e faça esta comparação agora como exercício de grupo, por mais desconfortável que a lacuna entre projeção e realidade se revele.

6. **O que seria necessário para tornar o nosso próximo grande caso de ROI defensável sob escrutínio genuíno e cético de alguém fora da engenharia?** Percorra o seu próximo caso planeado e identifique o elo mais fraco na sua cadeia atual de evidência antes de ir para um decisor.

## Perspetiva setorial

**Startup.** A análise formal de ROI é muitas vezes menos relevante do que uma questão mais simples de sobrevivência e crescimento: este investimento ajuda-nos a atingir o próximo marco ou ronda de financiamento? Ainda assim, aplique o mesmo princípio de honestidade, resista a inflacionar um caso para justificar uma decisão a que a equipa já se comprometeu emocionalmente, já que o escrutínio de investidores eventualmente vai aplicar o mesmo ceticismo que este tema recomenda aplicar internamente primeiro.

**Pequena empresa.** Mantenha a análise de ROI proporcional ao tamanho da decisão; um grande investimento plurianual de plataforma merece a disciplina completa que este tema recomenda, enquanto uma pequena compra de ferramentas não precisa do mesmo rigor. Concentre o esforço formal de análise nas suas poucas decisões maiores e mais consequentes.

**Empresa.** A disciplina de ROI a esta escala é o que determina se a engenharia compete com sucesso por capital contra outros investimentos de negócio com tradições mais estabelecidas de análise financeira. Construa a disciplina completa de custo total de propriedade e baseada em intervalo que este tema recomenda como prática padrão, e invista no rastreio de fecho de ciclo que constrói credibilidade de previsão a longo prazo.

**Governo.** A análise custo-benefício, o equivalente do setor público ao ROI, é frequentemente uma parte formal e exigida da justificação orçamental, e a honestidade sobre incerteza e custo total de propriedade é especialmente importante onde as descobertas podem enfrentar auditoria externa ou escrutínio legislativo. Uma análise que exagerou o benefício ou subestimou o custo, uma vez descoberta, causa dano duradouro à credibilidade de um programa junto do seu órgão financiador.

## Exemplos

**Empresa.** A liderança de engenharia de uma empresa de tecnologia logística propôs um grande investimento na migração de um monólito legado para uma arquitetura de microsserviços, inicialmente apresentando uma cifra única e otimista de ROI baseada principalmente em melhorias projetadas de frequência de implementação. O questionamento cético de uma parte interessada financeira expôs que o caso não tinha contabilizado a complexidade operacional contínua substancial e o custo de infraestrutura que a nova arquitetura introduziria. Um caso revisto, construído com custo total de propriedade completo e um intervalo refletindo cenários conservadores e otimistas de melhoria de entrega, mostrou um retorno esperado mais modesto mas ainda positivo, e criticamente, sobreviveu ao escrutínio da equipa financeira e garantiu financiamento, onde o caso original e exagerado provavelmente não teria.

**Governo.** O programa de digitalização de registos judiciais de um governo estadual construiu o seu caso inicial de custo-benefício em torno apenas de poupanças de custo administrativo, com uma cifra única e precisa de ROI. Uma revisão independente do gabinete orçamental descobriu que a projeção não tinha contabilizado as poupanças de tempo do lado do cidadão ou as taxas reduzidas de erro em processos judiciais, benefícios que eram reais mas tinham sido omitidos por serem mais difíceis de quantificar do que o custo administrativo. Uma análise revista incorporou estes benefícios com um intervalo explicitamente declarado refletindo a incerteza genuína de medição envolvida, produzindo um caso mais forte e, importante, mais defensável que o gabinete orçamental finalmente aprovou, precisamente porque era transparente sobre o que sabia e não sabia com confiança.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de uma disciplina rigorosa de ROI é, de forma algo recursiva, a própria credibilidade da disciplina de ROI: uma organização que constrói consistentemente casos honestos e defensáveis, incluindo ocasionalmente concluir que uma iniciativa não vale a pena perseguir, ganha maior confiança e portanto mais autonomia em futuras decisões de investimento do que uma cujos casos são vistos com ceticismo porque já prometeram em excesso antes. O exemplo da empresa de logística acima mostra isto diretamente: o caso revisto, mais modesto mas honesto, teve sucesso onde o original inflacionado provavelmente teria falhado sob escrutínio.

O custo total de propriedade desta disciplina é o esforço analítico para construir estimativas completas de custo total de propriedade, fundamentar estimativas de benefício em evidência real, declarar incerteza explicitamente, e rastrear resultados reais posteriormente. Esse esforço é genuinamente mais trabalho do que um discurso rápido e confiante de número único, e vale a pena especificamente porque a alternativa arrisca a credibilidade da organização para cada caso futuro que precisará de fazer.

## Antipadrões e armadilhas

- **Análise apenas do custo inicial, omitindo o custo total de propriedade:** subestima o custo real de investimento, particularmente para sistemas de longa duração.
- **Inventar estimativas de benefício a partir de suposição otimista em vez de evidência documentada:** produz um caso que não sobrevive ao escrutínio.
- **Apresentar uma cifra única e falsamente precisa de ROI em vez de um intervalo declarado:** danifica a credibilidade quando o resultado real difere da estimativa pontual.
- **Um processo de análise que apenas produz conclusões positivas:** corretamente lido pelas partes interessadas como evidência de que o processo não é genuinamente independente.
- **Nunca rastrear os resultados reais contra a projeção original:** perde o ciclo de feedback que melhoraria a precisão de previsão futura.
- **Construir um caso para justificar uma decisão a que já se está emocionalmente comprometido, em vez de genuinamente informar a decisão:** a causa raiz da maioria dos casos inflacionados de ROI.

## Modelo de maturidade

- **Nível 1, Iniciar:** Os casos de ROI são informais, não apoiados por evidência documentada, e quase sempre concluem positivamente independentemente da iniciativa.
- **Nível 2, Desenvolver:** Alguns casos incluem estimativas de custo e benefício, mas o custo total de propriedade é aplicado inconsistentemente e a incerteza raramente é declarada explicitamente.
- **Nível 3, Padronizar:** Os casos de ROI usam consistentemente o custo total de propriedade completo, evidência documentada de benefício, e um intervalo declarado refletindo incerteza genuína, em toda a organização.
- **Nível 4, Gerir:** Os resultados reais são rastreados contra as projeções originais após a conclusão, e a comparação é publicada e usada para melhorar a previsão futura.
- **Nível 5, Orquestrar:** A organização tem um historial demonstrado e plurianual de previsão precisa e honesta de ROI, incluindo casos que corretamente concluíram que uma iniciativa não valia a pena perseguir, e este historial ganha à engenharia um lugar de confiança em decisões estratégicas de investimento.

## Ideias para debate

1. Qual é o nosso maior caso atual de investimento, e conseguiria sobreviver a escrutínio genuinamente cético hoje?
2. Alguma vez rastreámos o resultado real de uma iniciativa completada contra a sua projeção original de ROI?
3. O que o nosso processo de análise precisaria de mudar para ser genuinamente capaz de concluir "não vale a pena"?
4. Que componente de custo total de propriedade está mais frequentemente ausente das nossas estimativas atuais de custo?
5. Qual é o elo mais fraco único de evidência no nosso próximo grande caso planeado de investimento?

## Principais conclusões

- Construa os casos de ROI a partir das **outras métricas deste livro**, custo a partir da economia unitária (tema 5.4), benefício a partir de evidência documentada de resultado (temas 5.1 a 5.3), não a partir de suposições inventadas.
- Inclua o **custo total de propriedade**, não apenas o custo inicial, e declare as estimativas de benefício como um **intervalo com incerteza explícita**, não uma cifra única e falsamente precisa.
- Construa um processo genuinamente capaz de concluir que uma iniciativa **não vale a pena perseguir**; uma análise que apenas produz conclusões positivas não é credível.
- **Rastreie os resultados reais contra a projeção** após a conclusão, e publique a comparação para construir credibilidade de previsão a longo prazo.
- A disciplina honesta e defensável de ROI é o que ganha à engenharia um **lugar de confiança** em decisões estratégicas de investimento ao longo do tempo.

## Referências e leituras adicionais

- *How to Measure Anything*, de Douglas W. Hubbard.
- *Cloud FinOps*, de J.R. Storment e Mike Fuller.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- U.S. Office of Management and Budget Circular A-94, orientação sobre análise custo-benefício para programas federais.
