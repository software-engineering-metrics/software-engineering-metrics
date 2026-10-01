# 4.4 Análise estática e métricas de odores de código

## Visão geral e motivação

As ferramentas de **[análise estática](https://en.wikipedia.org/wiki/Static_program_analysis)** examinam o código-fonte sem o executar, assinalando padrões conhecidos por se correlacionarem com defeitos, vulnerabilidades de segurança, ou problemas de manutenibilidade: código inalcançável, recursos não fechados, coerções suspeitas de tipo, lógica duplicada, e a categoria mais ampla de **odores de código**, padrões estruturais que não são necessariamente bugs mas tendem a tornar o código mais difícil de compreender, testar, ou mudar com segurança. A análise estática é a camada automatizada e contínua por baixo das métricas mais direcionadas nos outros capítulos desta parte, executando em cada commit e revelando problemas no momento em que são introduzidos em vez de esperar por uma auditoria periódica.

A preocupação central deste capítulo é a lacuna entre o que as ferramentas de análise estática reportam e o que realmente importa. Uma ferramenta pode assinalar milhares de descobertas através de uma grande base de código, e o número de descobertas sozinho é uma métrica fraca, já que mistura preferências triviais de estilo com risco genuíno e severo, e pode ser reduzido através de supressão tão facilmente quanto através de correções reais. O valor da análise estática não vem da contagem bruta de descobertas mas de quão bem uma organização faz a triagem de severidade, previne regressão, e resiste à tentação de tratar o julgamento da ferramenta como um substituto para a revisão humana em vez de um complemento a ela.

Para equipas grandes, a análise estática é a única forma prática de aplicar uma linha de base de qualidade de código e higiene de segurança através de uma base de código maior do que qualquer equipa consegue rever manualmente na íntegra. As organizações empresariais e governamentais, muitas vezes a enfrentar requisitos de conformidade à volta de práticas seguras de codificação, dependem da análise estática como evidência documentada e auditável de que um nível de base de escrutínio foi aplicado consistentemente, não apenas quando um revisor humano calhou notar um problema.

## Princípios-chave

- **A contagem bruta de descobertas é uma métrica fraca por si só.** Mistura problemas triviais e severos, e pode ser manipulada através de supressão em vez de correções genuínas.
- **A triagem de severidade importa mais do que o volume.** Um pequeno número de descobertas críticas merece mais atenção do que um grande número de triviais.
- **A análise estática complementa a revisão humana; não a substitui.** As ferramentas apanham padrões; não compreendem a intenção ou o contexto de negócio.
- **Uma tendência de "novos problemas introduzidos" é mais acionável do que uma contagem total de backlog.** Diz-lhe se a prática atual está a melhorar ou a regredir.
- **Os falsos positivos erodem a confiança na ferramenta.** Uma taxa não gerida de falsos positivos leva as equipas a ignorar as descobertas por completo, incluindo as reais.

## Recomendações

### Rastrear descobertas ponderadas por severidade, não a contagem bruta

Configure as suas ferramentas de análise estática para classificar as descobertas por severidade (crítica, alta, média, baixa, ou uma escala equivalente), e rastreie uma tendência ponderada por severidade em vez de uma contagem total plana. Uma base de código com zero descobertas críticas e quinhentas sugestões de estilo de baixa severidade está num estado muito diferente de uma com cinquenta descobertas críticas e nenhum problema de estilo de todo, e uma contagem bruta trata estas como aproximadamente equivalentes quando não são.

### Aplicar o portão sobre novas descobertas introduzidas, não sobre todo o backlog histórico

A maioria das bases de código estabelecidas carrega um backlog legado de descobertas que precedem a prática atual e seria proibitivamente caro corrigir tudo de uma vez. Em vez de bloquear todo o trabalho até o backlog inteiro ser limpo, aplique o portão de CI sobre se uma mudança específica introduz novas descobertas acima de um limiar acordado de severidade, deixando o backlog encolher gradualmente através da manutenção normal enquanto previne acumulação adicional. Esta distinção reflete a recomendação de piso de cobertura do capítulo 4.2: proteger contra regressão em vez de exigir uma correção irrealista de uma só vez.

### Gerir ativamente a taxa de falsos positivos

Reveja periodicamente uma amostra de descobertas, particularmente qualquer categoria com alto volume, e verifique quantas são genuinamente falsos positivos, casos onde a ferramenta assinalou um padrão que na verdade não é problemático no contexto. Ajuste a configuração de regras para suprimir especificamente categorias de regras genuinamente ruidosas e de baixo valor, em vez de deixar as equipas desenvolverem o hábito de ignorar o output da ferramenta por completo porque demasiado dele é ruído. Uma taxa alta e não gerida de falsos positivos é a forma única mais rápida de destruir a credibilidade de um programa de análise estática.

### Usar as descobertas de análise estática como um estímulo para revisão, não um veredito automático

Mesmo uma descoberta legítima e não falsa-positiva nem sempre justifica uma correção automática e obrigatória; alguns padrões assinalados são aceitáveis dado um contexto específico que uma ferramenta não consegue ver. Construa um processo leve para um humano rever e ou corrigir ou dispensar explícita e visivelmente uma descoberta com uma razão documentada, em vez de ou aplicar cegamente toda a descoberta como obrigatória ou permitir supressão silenciosa e não documentada que erode o valor da ferramenta ao longo do tempo.

### Combinar a análise estática com as outras métricas de qualidade de código nesta parte

As descobertas de análise estática, as pontuações de complexidade (capítulo 4.1), e os dados de pontos quentes (capítulo 4.3) são evidência complementar, não métricas concorrentes. Um ficheiro com uma alta concentração de descobertas não resolvidas de análise estática que é também um ponto quente de processamento-complexidade é um candidato particularmente forte para atenção priorizada, já que múltiplos sinais independentes convergem para a mesma conclusão.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Contagem bruta de descobertas como a métrica | Simples de reportar | Mistura problemas triviais e severos; facilmente manipulável através de supressão |
| Tendência ponderada por severidade | Reflete o risco real mais precisamente | Exige manutenção contínua de classificação de severidade |
| Portão sobre todo o backlog histórico | Maximiza a limpeza eventual do código | Normalmente impraticável para bases de código estabelecidas; pode parar todo o trabalho |
| Portão apenas sobre novas descobertas | Prático, previne regressão, deixa o backlog encolher gradualmente | Os problemas legados persistem mais tempo sem um plano deliberado de remediação |

A tensão central é **minuciosidade versus praticabilidade**. Uma política de análise estática que exige que todo o backlog histórico seja resolvido antes de qualquer novo trabalho prosseguir é minuciosa mas normalmente impraticável para qualquer base de código com história real, e as equipas sob essa pressão tendem a suprimir descobertas por completo em vez de genuinamente as corrigir. Resolva a tensão aplicando o portão rigorosamente sobre novas descobertas enquanto executa um esforço separado e deliberadamente ritmado de remediação contra o backlog legado, priorizado usando a severidade e as técnicas de verificação cruzada que este capítulo e o capítulo 4.3 recomendam.

## Perguntas para debater com a sua equipa

1. **Rastreamos uma tendência ponderada por severidade, ou apenas uma contagem bruta total de descobertas?** Extraia o seu painel de controlo real e verifique; uma contagem bruta é comum por predefinição em muitas ferramentas e muitas vezes precisa de configuração deliberada para revelar a severidade adequadamente em vez disso.

2. **Qual é o nosso backlog legado atual de descobertas não resolvidas, e temos um plano deliberado e ritmado para o reduzir, ou está apenas a acumular-se indefinidamente?** Um backlog não abordado e silenciosamente a crescer é comum e vale a pena nomear honestamente em vez de deixar não examinado.

3. **Qual é a nossa taxa estimada de falsos positivos para as nossas categorias de descoberta de maior volume, e ajustámos a configuração de regras em resposta?** Se nunca verificou isto, amostre um lote de descobertas da sua categoria mais ruidosa e avalie honestamente quantas são genuinamente acionáveis.

4. **Os engenheiros na nossa equipa confiam nas descobertas de análise estática, ou aprenderam a ignorá-las porque demasiado do output é ruído?** Esta é uma pergunta direta e honesta de verificação de instinto que vale a pena fazer à equipa, já que uma ferramenta que é ignorada não fornece nenhum valor real independentemente da sua capacidade teórica.

5. **Como tratamos atualmente uma descoberta legítima que uma equipa acredita que deveria ser dispensada dado um contexto específico?** Verifique se o seu processo torna isto uma decisão visível e documentada, ou se acontece através de supressão silenciosa e não documentada que erode o sinal da ferramenta ao longo do tempo.

6. **Onde é que as descobertas de análise estática, as pontuações de complexidade, e os dados de pontos quentes convergem no mesmo ficheiro ou módulo?** Verifique cruzadamente estes três sinais explicitamente; a convergência através de múltiplas métricas independentes é um sinal de priorização mais forte do que qualquer uma sozinha.

## Perspetiva setorial

**Startup.** Uma ferramenta leve e gratuita de análise estática integrada em CI desde o início é um seguro barato e apanha problemas genuínos cedo, antes de um backlog legado ter alguma hipótese de se acumular. Mantenha o conjunto de regras focado em categorias genuinamente de alto valor e baixo ruído em vez de ativar imediatamente todas as regras disponíveis.

**Pequena empresa.** A maioria dos ecossistemas modernos de linguagem inclui ferramentas capazes e gratuitas de análise estática; ativá-las em CI com um conjunto sensato e predefinido de regras exige pouco investimento. Concentre-se em aplicar o portão sobre novas descobertas em vez de tentar resolver qualquer backlog pré-existente de uma vez.

**Empresa.** Gerir deliberadamente a taxa de falsos positivos e a triagem de severidade torna-se essencial a esta escala, já que uma ferramenta mal ajustada que gera ruído excessivo através de dezenas de equipas será ignorada em toda a organização. Invista num dono dedicado para a própria configuração de ferramentas de análise estática, tratando o ajuste de regras como uma disciplina contínua em vez de uma tarefa única de configuração.

**Governo.** As descobertas de análise estática, particularmente as relacionadas com segurança, são muitas vezes diretamente relevantes para requisitos de conformidade e auditoria. Mantenha um processo documentado e auditável de como as descobertas são triadas, corrigidas, ou formalmente dispensadas com uma justificação registada, já que esta própria documentação é frequentemente o que um auditor externo vai querer ver.

## Exemplos

**Empresa.** O painel de controlo de análise estática de uma empresa de software tinha acumulado mais de quarenta mil descobertas não resolvidas através da sua base de código depois de vários anos sem triagem ponderada por severidade, um número tão grande que os engenheiros tinham largamente deixado de olhar para o painel de controlo de todo. Uma abordagem revista classificou as descobertas por severidade, encontrou que menos de duzentas eram genuinamente críticas, e aplicou o portão de CI especificamente sobre novas descobertas críticas e de alta severidade enquanto deixava o backlog de baixa severidade encolher gradualmente através da manutenção normal de código. Dentro de seis meses, as descobertas críticas tinham caído para dígitos únicos, e, mais importante, os dados de inquérito de engenheiros mostraram confiança renovada no output da ferramenta agora que revelava um sinal gerível e genuinamente acionável em vez de um backlog esmagador e ignorado.

**Governo.** A política de segurança da cadeia de fornecimento de software de uma agência de defesa exigia uma análise estática com zero descobertas não resolvidas antes de qualquer lançamento, uma política que tinha, na prática, levado as equipas de desenvolvimento a suprimir grandes números de descobertas, incluindo alguns problemas genuínos de segurança, simplesmente para cumprir prazos de lançamento sob um portão impraticável de tudo-ou-nada. Uma política revista exigia zero novas descobertas críticas ou de alta severidade introduzidas por qualquer lançamento dado, combinada com um plano documentado e rastreado de remediação e cronograma para o backlog legado, revisto trimestralmente por um conselho de governação de segurança. Esta abordagem prática e faseada tanto restaurou o escrutínio genuíno de segurança para o código novo como fez progresso real e mensurável contra o backlog legado ao longo de dezoito meses, ao contrário da política impraticável anterior que tinha maioritariamente produzido supressão em vez de correções genuínas.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de uma análise estática bem gerida é apanhar defeitos reais e vulnerabilidades de segurança antes de chegarem à produção, a um custo muito mais baixo do que o esforço equivalente de revisão humana exigiria para a mesma cobertura. O exemplo da agência de defesa acima mostra o custo de errar nisto: uma política impraticável de tudo-ou-nada tinha na verdade reduzido o escrutínio genuíno de segurança ao impulsionar a supressão, o oposto da sua intenção.

O custo total de propriedade inclui as próprias ferramentas, muitas vezes gratuitas ou de baixo custo para ecossistemas comuns de linguagem, e a disciplina contínua de triagem de severidade, gestão de falsos positivos, e planeamento de remediação do backlog legado. Essa disciplina contínua, mais do que a própria ferramenta, é o que determina se um programa de análise estática fornece valor genuíno e confiável ou degrada em ruído ignorado.

## Antipadrões e armadilhas

- **Tratar a contagem bruta de descobertas como a métrica:** mistura problemas triviais e severos e é facilmente manipulável através de supressão.
- **Exigir que todo o backlog histórico seja resolvido antes de qualquer novo trabalho prosseguir:** normalmente impraticável e impulsiona a supressão em vez de correções genuínas.
- **Ignorar a taxa de falsos positivos:** um nível de ruído não gerido leva as equipas a ignorar inteiramente o output da ferramenta, incluindo descobertas reais.
- **Supressão silenciosa e não documentada de descobertas legítimas:** erode o sinal da ferramenta e não deixa nenhum rasto de auditoria para efeitos de conformidade.
- **Tratar uma descoberta de análise estática como um veredito automático sem revisão humana:** perde contexto que uma ferramenta não consegue ver.
- **Nunca verificar cruzadamente as descobertas com dados de complexidade e pontos quentes:** perde o sinal mais forte de priorização que a evidência convergente fornece.

## Modelo de maturidade

- **Nível 1, Iniciar:** A análise estática não é executada, ou as descobertas acumulam-se não geridas sem triagem de severidade ou rastreio de tendência.
- **Nível 2, Desenvolver:** Alguma análise estática executa em CI, mas a triagem de severidade é inconsistente e a taxa de falsos positivos não é gerida.
- **Nível 3, Padronizar:** As descobertas são ponderadas por severidade e a CI aplica o portão sobre novas descobertas críticas e de alta severidade, em toda a organização.
- **Nível 4, Gerir:** A taxa de falsos positivos é ativamente ajustada, o backlog legado tem um plano documentado e ritmado de remediação, e as dispensas são visíveis e documentadas.
- **Nível 5, Orquestrar:** As descobertas de análise estática, os dados de complexidade, e os dados de pontos quentes são rotineiramente verificados cruzadamente para priorizar o investimento, e a organização consegue apontar para melhorias específicas e mensuráveis de defeito ou segurança traçadas até ao programa.

## Ideias para debate

1. Qual é a nossa tendência atual ponderada por severidade, e está a melhorar ou a piorar?
2. Quão grande é o nosso backlog legado de descobertas, e temos um plano deliberado para o reduzir?
3. Qual é a nossa taxa estimada de falsos positivos para a nossa categoria mais ruidosa de descoberta?
4. Os engenheiros na nossa equipa atualmente confiam ou ignoram o output da nossa análise estática?
5. Onde convergem as descobertas de análise estática com os dados de complexidade ou pontos quentes na nossa base de código?

## Principais conclusões

- Rastreie uma **tendência ponderada por severidade**, não uma contagem bruta de descobertas, que mistura problemas triviais e severos.
- Aplique o portão de CI sobre **novas descobertas introduzidas**, não todo o backlog histórico, para prevenir regressão sem exigir uma correção impraticável de uma só vez.
- Gira ativamente a **taxa de falsos positivos**; o ruído não gerido destrói a confiança na ferramenta e leva as descobertas a serem ignoradas por completo.
- Trate as descobertas como um **estímulo para revisão humana**, com dispensas visíveis e documentadas, não um veredito automático ou supressão silenciosa.
- Verifique cruzadamente a análise estática com **dados de complexidade e pontos quentes** (capítulos 4.1, 4.3) para evidência convergente e mais forte de priorização.

## Referências e leituras adicionais

- *Static Program Analysis*, de Anders Møller e Michael I. Schwartzbach.
- Orientação da OWASP sobre teste estático de segurança de aplicações (SAST).
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler.
- *Working Effectively with Legacy Code*, de Michael Feathers.
