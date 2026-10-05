# 1.4 Governação e propriedade das métricas

## Visão geral e motivação

Uma métrica sem dono é um argumento permanente à espera de acontecer. Duas equipas calculam "utilizadores ativos" de forma diferente e gastam uma reunião a reconciliar números em vez de gerir a tendência; um painel de controlo que ninguém mantém torna-se silenciosamente desatualizado durante meses antes de alguém reparar; uma métrica originalmente construída para o diagnóstico de uma equipa é adotada por outra equipa para um propósito que a sua definição original nunca foi desenhada para suportar. Nada disto é um problema de medição no sentido estatístico. É um problema de governação, e é resolúvel com a mesma disciplina que as organizações já aplicam ao código: propriedade explícita, uma **[fonte única da verdade](https://en.wikipedia.org/wiki/Single_source_of_truth)** documentada, e um processo de revisão.

A governação não é burocracia pela burocracia. É o que faz um programa de métricas sobreviver ao contacto com a escala organizacional. Uma única equipa pode manter as suas definições de métricas na cabeça de alguém e corrigir a deriva através de conversas diárias. Uma organização com dezenas de equipas, cada uma a produzir e a consumir métricas, não pode. Sem governação, as definições derivam silenciosamente, as métricas multiplicam-se sem que ninguém as pode, e quando a liderança repara que dois relatórios discordam, o custo de os reconciliar já foi pago muitas vezes em reuniões desperdiçadas e confiança erodida.

Para organizações empresariais e governamentais, a governação carrega um peso adicional porque as métricas alimentam cada vez mais decisões com consequências reais, alocação orçamental, relatórios públicos de desempenho, contratos com fornecedores, que sobrevivem a qualquer pessoa que construiu o painel de controlo original. Uma carta de métricas que sobrevive à rotatividade de pessoal, que qualquer novo membro da equipa consegue ler e compreender, é o que mantém os números de uma organização a significar a mesma coisa daqui a cinco anos como significam hoje.

## Princípios-chave

- **Toda a métrica tem exatamente um dono.** A propriedade partilhada não é propriedade nenhuma; quando toda a gente é dona de uma definição, ninguém a mantém.
- **Uma métrica tem uma fonte única da verdade.** Dois sistemas a calcular a mesma métrica de formas diferentes é uma falha de governação à espera de emergir.
- **A governação é escrita, não conhecimento tribal.** Uma carta de métricas que vive apenas na memória de alguém não sobrevive à sua saída.
- **A retirada é tão importante quanto a adoção.** Um programa de métricas saudável poda tão deliberadamente quanto cresce.
- **A governação escala com a consequência, não com a contagem de métricas.** Uma métrica que alimenta um relatório público precisa de uma governação mais pesada do que uma que uma única equipa usa para depurar o seu próprio sprint.

## Recomendações

### Escrever uma carta de métricas para todo o conjunto de métricas que atravesse uma fronteira de equipa

Uma **carta de métricas** é um documento curto e vivo que declara o propósito de um conjunto de métricas, os seus não-objetivos explícitos (a distinção diagnóstica-versus-avaliativa do tema 1.1 pertence aqui), o dono e a fonte da verdade de cada métrica, e uma cadência de revisão. Mantenha-a numa página. O ficheiro docs/examples/metrics-charter-example.md no repositório companheiro deste livro mostra a forma. Uma carta tão curta é lida; uma carta que se expande para um documento de política não é.

### Atribuir um dono nomeado a cada métrica, não a uma equipa

"A equipa de plataforma é dona desta métrica" difunde a responsabilidade até que ninguém realmente a mantenha. Nomeie uma pessoa ou um papel específico e responsável. Esse dono é responsável por manter a definição da métrica precisa, a sua instrumentação saudável, e por responder à pergunta "porque é que este número parece errado" quando ela inevitavelmente surgir. A propriedade pode e deve rodar à medida que as pessoas mudam de papel, mas a carta deve sempre nomear um dono atual, nunca deixar o campo em branco.

### Estabelecer uma fonte única da verdade por métrica e proibir o cálculo paralelo

Quando dois sistemas calculam a mesma métrica nominalmente designada de formas diferentes, por exemplo, a "utilizadores ativos" de uma equipa a contar logins e a de outra a contar chamadas de API, o desacordo resultante custa muito mais em reuniões de reconciliação do que teria custado concordar numa única fonte da verdade antecipadamente. Nomeie o sistema autoritativo para cada métrica na carta, e trate qualquer outro cálculo da mesma métrica ou como um erro a corrigir ou como uma métrica com nome diferente a renomear.

### Construir uma revisão de retirada na cadência de governação

Um programa de métricas que apenas acrescenta métricas acumula uma expansão de painel de controlo sobre a qual ninguém consegue agir (tema 1.1). Em cada revisão de governação, ao lado de propor novas métricas, pergunte quais das existentes não informaram uma decisão nos últimos dois ciclos e são candidatas à retirada. A retirada não é um fracasso; é a mesma disciplina que uma base de código saudável aplica ao código morto.

### Escalar o rigor da governação com a consequência, não com o volume

Nem toda a métrica precisa do mesmo processo. Uma métrica que uma única equipa inventa para depurar o seu próprio sprint precisa de quase nenhuma governação para além de a equipa saber o que significa. Uma métrica que alimenta um painel executivo, um relatório público de desempenho, ou a compensação de um indivíduo precisa de uma definição documentada, um dono nomeado, um registo de auditoria, e aprovação antes de entrar em produção. Ajuste o peso do seu processo à consequência de a métrica estar errada, não a quantas métricas existem.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Sem governação formal | Rápida, baixa sobrecarga para equipas pequenas | As definições derivam; a propriedade difunde-se; os painéis de controlo expandem-se sem controlo |
| Carta leve por conjunto de métricas | Barata, legível, escala com a organização | Exige disciplina para se manter atual; pode ser saltada sob pressão de prazos |
| Conselho central pesado de governação de métricas | Forte consistência, forte registo de auditoria | Lento a aprovar novas métricas; pode tornar-se um estrangulamento que as equipas contornam |
| Governação escalada à consequência | Ajusta o esforço ao risco real | Exige julgamento para classificar a consequência corretamente; pode ser manipulada subestimando o que está em jogo |

A tensão central é **consistência versus velocidade**. A governação central pesada produz métricas credíveis e consistentes mas abranda uma equipa precisamente quando quer instrumentar algo rapidamente para responder a uma pergunta urgente. Resolva a tensão escalando o peso da governação à consequência: deixe as equipas instrumentar livremente para o seu próprio uso diagnóstico, e exija a disciplina completa de carta, propriedade, e aprovação apenas quando uma métrica atravessa uma fronteira de equipa ou alimenta um uso avaliativo ou público.

## Perguntas para debater com a sua equipa

1. **Toda a métrica que atravessa uma fronteira de equipa tem um dono nomeado, e esse dono reconhecer-se-ia como responsável se lhe perguntassem hoje?** "A equipa de plataforma é dona dela" não é uma resposta; uma pessoa ou papel específico é. Audite as suas métricas entre equipas e verifique se o dono nomeado, se existir algum, sabe realmente que detém essa responsabilidade.

2. **Onde calculamos atualmente a mesma métrica nominalmente designada de duas formas diferentes, e quanto tempo gastámos a reconciliar o desacordo?** Esta é uma das falhas de governação mais caras e mais comuns em grandes organizações, e é inteiramente evitável com uma única fonte da verdade documentada. Traga um exemplo real se tiver um e trace o seu custo.

3. **Quando foi a última vez que retirámos uma métrica, e o que desencadeou essa decisão?** Uma organização que apenas consegue descrever como acrescenta métricas, nunca como as remove, está a acumular dívida de painel de controlo. Se não conseguir lembrar-se de uma retirada, essa ausência é em si mesma a resposta a esta pergunta.

4. **O nosso processo de governação é proporcional à consequência, ou toda a métrica passa pelo mesmo peso de revisão independentemente do que está em jogo?** Uma governação excessivamente pesada numa métrica de equipa de baixo risco abranda o trabalho sem benefício de segurança; uma governação excessivamente leve numa métrica que alimenta um relatório público ou uma decisão de compensação é um risco real. Mapeie as suas métricas atuais por consequência e verifique honestamente o peso do processo contra ela.

5. **O que acontece à propriedade de uma métrica quando a pessoa que a construiu muda de papel ou sai?** Uma carta de métricas que só existe na cabeça de uma pessoa desaparece com ela. Teste isto escolhendo uma métrica e perguntando se um novo contratado conseguiria, apenas a partir da documentação escrita, compreender a sua definição, fonte da verdade, e propósito.

6. **Como saberíamos se a definição de uma métrica tivesse mudado silenciosamente?** Uma mudança na forma como um número é calculado, sem uma mudança no seu nome ou uma nota no seu histórico, é quase invisível até alguém comparar dados antigos e novos e encontrar uma descontinuidade que não consegue explicar. Discuta se as suas métricas carregam alguma forma de registo de alterações hoje.

## Perspetiva setorial

**Startup.** A governação formal é normalmente um exagero para uma equipa de cinco pessoas onde toda a gente já sabe o que cada número significa. A única disciplina que vale a pena adotar cedo, mesmo assim, é nomear um único dono por métrica por escrito, porque custa quase nada e previne confusão à medida que as primeiras contratações se juntam e começam a perguntar o que um número significa.

**Pequena empresa.** A governação aqui significa principalmente escolher, e manter-se fiel a, uma ferramenta como fonte da verdade para cada métrica em vez de deixar folhas de cálculo e o painel de controlo integrado de uma plataforma divergirem silenciosamente. Escreva a carta como um único documento partilhado, mesmo que informal, para que um novo funcionário consiga descobrir o que um número significa sem ter de perguntar por aí.

**Empresa.** É aqui que a governação ganha o seu valor. Padronize as definições entre unidades de negócio, exija uma carta para tudo o que alimenta um painel executivo, e construa a revisão de retirada numa cadência de governação recorrente, porque a expansão de painéis de controlo a esta escala torna-se cara depressa, tanto em custo de manutenção como na perda de credibilidade quando duas divisões reportam números contraditórios para a mesma coisa.

**Governo.** A governação aqui tem frequentemente uma dimensão legal ou de auditoria: as medidas de desempenho publicadas podem precisar de satisfazer requisitos estatutários de relato, e uma mudança de definição pode ter consequências políticas reais. Documente a metodologia publicamente, congele as definições entre períodos de relato a menos que uma mudança seja ela própria publicamente justificada, e trate uma auditoria independente da definição da métrica, não apenas do seu valor atual, como uma prática de governação permanente.

## Exemplos

**Empresa.** Uma empresa multinacional de software descobriu, durante uma integração pós-aquisição, que as suas duas maiores unidades de negócio definiam "frequência de implementação" de forma diferente: uma contava cada envio a um ambiente de teste, a outra contava apenas lançamentos de produção. A liderança tinha estado a comparar o desempenho de entrega das duas unidades durante mais de um ano usando números que não eram na verdade comparáveis. A correção foi um conselho de governação de métricas à escala da empresa que publicou um único glossário de definições de métricas (espelhado no tema 9.2 deste livro), exigiu que cada equipa certificasse conformidade, e retirou as definições locais ambíguas dentro de um trimestre.

**Governo.** Um gabinete nacional de estatísticas responsável por publicar um painel de controlo de desempenho de serviços digitais descobriu que uma mudança na forma como "resolvido dentro do SLA" era calculado, feita silenciosamente por uma equipa de engenharia a corrigir o que viam como um erro, tinha deslocado uma figura de conformidade de destaque em vários pontos percentuais sem documentação pública da mudança. O gabinete estabeleceu um processo formal de controlo de mudanças para qualquer definição de métrica que alimentasse um relatório público: as mudanças propostas exigem uma justificação documentada, uma comparação antes-e-depois publicada ao lado da mudança, e aprovação de um responsável nomeado, fechando a lacuna que tinha deixado a mudança anterior passar despercebida.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da governação é o custo de reconciliação evitado. Cada hora gasta numa reunião onde duas equipas discutem sobre qual número está certo é uma hora que uma governação disciplinada, uma única fonte da verdade, um dono nomeado, teria prevenido inteiramente. À escala empresarial, este custo agrava-se através de dezenas de equipas e pode consumir uma parcela genuinamente significativa da atenção da liderança num problema que uma carta de uma página por conjunto de métricas teria evitado.

O custo total de propriedade de uma prática de governação leve, uma carta, um dono nomeado, uma revisão periódica, é modesto e maioritariamente antecipado. A alternativa, descobrir um ano dentro de uma iniciativa importante que os números em que a liderança tem confiado nunca foram realmente comparáveis, custa dramaticamente mais, tanto em análise desperdiçada como no dano de credibilidade de corrigir o registo público ou interno depois do facto.

## Antipadrões e armadilhas

- **Propriedade de equipa em vez de propriedade de pessoa nomeada:** difunde a responsabilização até que ninguém realmente mantém a definição.
- **Cálculo paralelo da mesma métrica nominal:** garante um desacordo eventual e uma reconciliação cara.
- **Uma carta que só existe na cabeça de alguém:** desaparece no momento em que essa pessoa muda de papel.
- **Um programa de métricas que apenas acrescenta, nunca retira:** produz uma expansão de painel de controlo sobre a qual ninguém consegue agir.
- **Peso de governação uniforme independentemente da consequência:** abranda trabalho de baixo risco enquanto subprotege métricas públicas ou ligadas à compensação de alto risco.
- **Mudanças silenciosas de definição:** o significado de uma métrica muda sem registo de alterações, e as comparações históricas tornam-se silenciosamente inválidas.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas não têm donos formais; as definições vivem na memória individual e derivam silenciosamente entre equipas.
- **Nível 2, Desenvolver:** Algumas equipas escrevem documentação informal para as suas próprias métricas, mas não há formato de carta partilhado nem consistência entre equipas.
- **Nível 3, Padronizar:** Toda a métrica que atravessa uma fronteira de equipa tem uma carta documentada, um dono nomeado, e uma única fonte da verdade acordada, aplicada em toda a organização.
- **Nível 4, Gerir:** Uma cadência de governação recorrente revê as métricas quanto à relevância contínua, retira as que já não compensam o seu custo, e acompanha as mudanças de definição com um histórico visível.
- **Nível 5, Orquestrar:** A governação é proporcional à consequência, automatizada onde possível (um catálogo de métricas que assinala métricas não documentadas ou sem dono), e a organização consegue demonstrar, a pedido, a proveniência completa de qualquer número publicado.

## Ideias para debate

1. Um novo contratado conseguiria descobrir, apenas a partir da documentação, o que as nossas três métricas mais importantes realmente significam?
2. Quais das nossas métricas são atualmente calculadas de forma diferente por dois sistemas diferentes?
3. Quando foi a última vez que retirámos uma métrica, e como decidimos fazê-lo?
4. O nosso processo de governação é mais pesado onde a consequência é maior, ou é uniforme?
5. Quem é o dono, pelo nome, da métrica mais consequente e orientada para o público da nossa organização?

## Principais conclusões

- Toda a métrica precisa de **um dono nomeado**, não uma equipa, e **uma fonte da verdade**, não cálculo paralelo.
- Escreva uma **carta de métricas** curta e viva para todo o conjunto de métricas que atravesse uma fronteira de equipa, declarando o propósito, os não-objetivos, a propriedade, e a cadência de revisão.
- A **retirada** é uma disciplina de governação tão importante quanto a adoção; pode deliberadamente.
- Escale o rigor da governação com a **consequência**, não com a contagem de métricas: processo mais pesado para métricas públicas, avaliativas, ou ligadas à compensação.
- A definição de uma métrica pode derivar silenciosamente; acompanhe as mudanças com um histórico visível para que a confiança num número sobreviva à rotatividade de pessoal.

## Referências e leituras adicionais

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program*, de John Ladley.
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin.
- *Key Performance Indicators*, de David Parmenter.
- Orientação do U.S. Government Accountability Office (GAO) sobre medição de desempenho e o GPRA Modernization Act.
