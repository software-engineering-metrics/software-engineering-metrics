# 5.2 Métricas de adoção e utilização de funcionalidades

## Visão geral e motivação

A **adoção de funcionalidades** mede se as pessoas para quem uma funcionalidade foi construída realmente a usam, a que ritmo, e se essa utilização persiste ao longo do tempo. É, num sentido muito direto, o teste de realidade sobre tudo o que as Partes 2 a 4 deste livro medem: uma organização pode implementar frequentemente, manter excelente experiência do programador, e entregar código impecavelmente testado, e ainda assim estar a construir coisas que ninguém quer. Os dados de adoção são onde uma organização de engenharia descobre se a sua produção se ligou a algum resultado real, o que é exatamente a distinção entrada-produção-resultado que o capítulo 1.3 introduziu, aplicada ao caso mais concreto deste livro: uma funcionalidade específica e entregue.

A preocupação central deste capítulo é que os dados de adoção, mais do que quase qualquer outra família de métricas neste livro, são fáceis de medir de uma forma que lisonjeia em vez de informar. Uma funcionalidade pode mostrar adoção inicial impressionante puramente por curiosidade ou exposição forçada (uma janela modal que aparece quer o utilizador a queira ou não), enquanto a entrega genuína e sustentada de valor, medida por se as pessoas continuam a usá-la depois de a novidade desaparecer, conta uma história completamente diferente. Distinguir a adoção genuína de um pico temporário é o desafio técnico central deste capítulo, e errar nisto leva rotineiramente organizações a celebrar funcionalidades que falham silenciosamente e a abandonar outras que estavam apenas a começar a encontrar o seu público.

Para equipas grandes, os dados de adoção de funcionalidades são o que torna a priorização do roteiro baseada em evidência em vez de impulsionada por quem defende mais persuasivamente o trabalho da sua própria equipa. As organizações empresariais que gerem grandes portefólios de produtos precisam de dados de adoção para identificar quais os investimentos que estão a compensar; as organizações governamentais que constroem serviços digitais voltados para o cidadão precisam deles para demonstrar que o investimento público produziu serviços que as pessoas realmente usam, não apenas serviços que tecnicamente existem.

## Princípios-chave

- **A adoção inicial e a adoção sustentada são sinais diferentes.** Um pico por curiosidade ou exposição forçada não é o mesmo que entrega genuína e duradoura de valor.
- **A adoção deve ser medida contra o público para o qual foi construída**, não contra toda a sua base de utilizadores indiscriminadamente.
- **Uma funcionalidade com baixa adoção não é automaticamente um fracasso.** Pode estar mal descoberta, mal direcionada, ou simplesmente ser nova; investigue antes de concluir.
- **A retenção de utilização importa mais do que um instantâneo único de adoção.** Rastreie se as pessoas que experimentaram uma funcionalidade continuam a voltar a ela.
- **Os dados de adoção estão expostos a manipulação através de exposição forçada ou padrões obscuros.** Um número inflacionado ao tornar uma funcionalidade difícil de evitar não é um sinal genuíno.

## Recomendações

### Distinga a experimentação inicial da retenção sustentada

Rastreie dois números separados: a percentagem do seu público-alvo que experimenta uma funcionalidade pelo menos uma vez (adoção inicial), e a percentagem que ainda a está a usar depois de um período significativo, como quatro ou oito semanas (adoção retida). Uma funcionalidade com alta experimentação inicial e baixa retenção sugere que a descoberta funcionou mas a própria funcionalidade não entregou valor suficiente para fazer as pessoas voltarem, um diagnóstico muito diferente, e uma correção muito diferente, do que baixa experimentação inicial com alta retenção, o que sugere uma funcionalidade genuinamente valiosa que não é conhecida por pessoas suficientes.

### Defina o público-alvo precisamente antes de medir a adoção

A adoção medida contra toda a sua base de utilizadores pode ser enganadora se uma funcionalidade sempre foi destinada apenas a um segmento específico: uma funcionalidade para administradores empresariais medida contra uma base maioritariamente de utilizadores individuais vai sempre parecer ter uma adoção terrível, independentemente de quão bem realmente serve as pessoas para quem foi construída. Defina o público pretendido explicitamente antes do lançamento, e meça a adoção contra esse denominador específico, não contra a sua contagem total de utilizadores.

### Investigue a baixa adoção antes de concluir que uma funcionalidade falhou

Um número baixo de adoção tem várias causas possíveis que exigem respostas muito diferentes: a funcionalidade genuinamente não tem valor, a funcionalidade tem valor mas está mal descoberta (os utilizadores não sabem que existe), a funcionalidade tem valor mas está mal explicada (os utilizadores veem-na mas não compreendem o seu propósito), ou a janela de medição é simplesmente demasiado curta para uma funcionalidade de adoção mais lenta ter ainda encontrado o seu público. Investigue qual destas se aplica antes de decidir investir mais, redesenhar, ou descontinuar.

### Fique atento à adoção inflacionada por exposição forçada ou [padrões obscuros](https://en.wikipedia.org/wiki/Dark_pattern)

Um número de adoção impulsionado por uma funcionalidade ser difícil de evitar, um fluxo de integração intrusivo, uma janela modal que um utilizador tem de dispensar, uma predefinição difícil de mudar, não está a medir entrega genuína de valor, e celebrá-lo como se estivesse repete o padrão de manipulação por substituição do capítulo 1.2 em forma de produto. Combine os números brutos de adoção com um sinal de satisfação ou do estilo Net Promoter para a funcionalidade específica onde for viável, para que a exposição forçada que não se traduz em satisfação genuína seja apanhada em vez de celebrada.

### Ligue as tendências de adoção de volta a decisões específicas de produto e engenharia

Quando a adoção sobe ou desce inesperadamente, rastreie a mudança de volta a uma decisão específica, uma mudança de interface, uma mudança nas configurações predefinidas, um impulso de marketing, uma melhoria ou regressão de desempenho, em vez de tratar o movimento como um mistério inexplicado. Isto liga os dados de adoção a aprendizagem acionável de produto e engenharia, fechando o ciclo entre uma mudança específica e o seu efeito medido na utilização real.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Medir contra a base total de utilizadores | Simples, denominador único | Enganador para funcionalidades dirigidas a um segmento específico |
| Medir contra o público-alvo definido | Reflexo justo e preciso do alcance pretendido | Exige definição deliberada do público antes do lançamento |
| Apenas experimentação inicial | Sinal rápido, disponível depressa após o lançamento | Perde se a funcionalidade entrega valor duradouro |
| Experimentação inicial mais retenção | Distingue curiosidade de valor genuíno | Exige esperar mais tempo (semanas) antes de surgir uma imagem completa |

A tensão central é **velocidade versus honestidade**. Os dados de experimentação inicial estão disponíveis quase imediatamente após o lançamento e satisfazem a pressão organizacional para reportar resultados cedo, mas não conseguem distinguir sozinhos a curiosidade ou exposição forçada do valor genuíno e duradouro. Resolva a tensão reportando os dados de experimentação inicial cedo e claramente rotulados como preliminares, enquanto se compromete publicamente a uma leitura de acompanhamento de retenção num intervalo fixo e predeterminado, para que o entusiasmo inicial não se solidifique numa história de sucesso não examinada antes de o sinal real ter tido tempo de emergir.

## Perguntas para debater com a sua equipa

1. **Para a nossa funcionalidade mais recentemente entregue, conhecemos a experimentação inicial e a utilização retida separadamente, ou apenas um único número combinado?** Se apenas existe um número combinado, essa lacuna esconde exatamente a distinção curiosidade-versus-valor que este capítulo trata como central.

2. **O nosso público-alvo para esta funcionalidade foi definido explicitamente antes do lançamento, e estamos a medir a adoção contra esse grupo específico?** Verifique se o seu denominador atual de adoção corresponde a quem a funcionalidade foi realmente construída para servir, ou se está diluído ao medir contra uma população mais ampla e irrelevante.

3. **Para uma funcionalidade com baixa adoção, investigámos qual das várias causas possíveis, baixo valor, má descoberta, má explicação, tempo insuficiente, realmente se aplica?** Percorra esta lista diagnóstica específica para uma funcionalidade real e atual de baixa adoção em vez de assumir por predefinição "deve não ter valor".

4. **Alguma parte do nosso número reportado de adoção está inflacionada por exposição forçada, uma predefinição intrusiva, ou uma janela modal de dispensa obrigatória, em vez de utilização genuína e voluntária?** Seja honesto aqui; este é um padrão comum e fácil de cair, especialmente sob pressão para mostrar resultados positivos precoces.

5. **Quando a adoção de uma funcionalidade se moveu significativamente, conseguimos rastrear esse movimento de volta a uma mudança específica que fizemos?** Se a resposta é normalmente "não temos a certeza", essa lacuna limita quanto a sua organização consegue realmente aprender com os seus próprios dados de adoção ao longo do tempo.

6. **Combinamos os números de adoção com algum sinal de satisfação para a mesma funcionalidade, ou apenas rastreamos a utilização bruta?** Um número alto de adoção combinado com baixa satisfação é um sinal de alerta que a utilização bruta sozinha perderia completamente.

## Perspetiva setorial

**Startup.** A adoção de funcionalidades é muitas vezes o sinal único mais importante que uma empresa jovem tem, intimamente ligado ao próprio ajuste produto-mercado. Rastreie a retenção especificamente, não apenas a experimentação inicial, desde o primeiríssimo lançamento de funcionalidade, já que distinguir valor genuíno de curiosidade precoce é crítico quando a sobrevivência da empresa pode depender de acertar este diagnóstico.

**Pequena empresa.** A maioria das plataformas de análise reporta dados básicos de utilização com configuração mínima; a principal disciplina é definir claramente o seu público-alvo antes de medir, em vez de reportar a adoção contra toda a sua base de clientes independentemente de para quem uma funcionalidade específica foi realmente construída.

**Empresa.** Os dados de adoção a esta escala são essenciais para a priorização justa e baseada em evidência do roteiro através de um grande portefólio de produtos, e a disciplina de distinguir a experimentação inicial da retenção sustentada importa ainda mais aqui, já que uma base de utilizadores suficientemente grande pode produzir um pico inicial de aspeto impressionante para quase qualquer lançamento independentemente do valor real.

**Governo.** A adoção de um serviço digital voltado para o cidadão é uma medida direta e concreta de se o investimento público se traduziu em benefício público real, e é muitas vezes uma métrica muito mais persuasiva para um órgão de supervisão do que uma contagem de entrega ou atividade. Meça a adoção contra a população que o serviço foi realmente construído para servir, e seja honesto sobre barreiras (literacia digital, acesso, consciencialização) que possam explicar a baixa adoção para além do próprio design do serviço.

## Exemplos

**Empresa.** Uma empresa de software de gestão de projetos lançou uma nova funcionalidade de edição colaborativa e celebrou uma impressionante taxa de experimentação inicial de 60% nas primeiras duas semanas. Uma leitura de acompanhamento de retenção às oito semanas mostrou que apenas 8% desses primeiros experimentadores ainda estavam a usar a funcionalidade regularmente, revelando que a alta taxa de experimentação tinha sido impulsionada quase inteiramente por uma dica de ferramenta de integração proeminente e difícil de dispensar em vez de interesse genuíno e sustentado. A investigação de feedback qualitativo de primeiros experimentadores que tinham parado de usar a funcionalidade revelou um problema específico e corrigível de usabilidade, um padrão de interação pouco intuitivo, que um redesenho direcionado abordou, e a utilização retida quase triplicou após a correção, embora nunca se tenha aproximado do número enganadoramente alto de experimentação inicial.

**Governo.** Um serviço nacional de emprego lançou uma nova ferramenta online de correspondência de emprego, inicialmente reportando a adoção contra toda a base registada de utilizadores da agência, produzindo uma percentagem desanimadoramente baixa que ameaçou o financiamento contínuo do programa. Uma análise revista, medindo a adoção especificamente contra o subconjunto de utilizadores registados ativamente a procurar trabalho nas indústrias-alvo da ferramenta, o público realmente pretendido, mostrou uma taxa de adoção substancialmente mais alta e precisa. Combinada com uma campanha de divulgação direcionada especificamente a esse público definido, e uma leitura subsequente de retenção mostrando forte utilização sustentada entre os adotantes, o programa garantiu financiamento contínuo com base na métrica corrigida e honestamente direcionada em vez do número original enganadoramente diluído.

## Argumento de negócio: motivações, ROI, e TCO

O retorno da medição rigorosa da adoção de funcionalidades é o investimento do roteiro baseado em evidência: uma organização que consegue distinguir valor genuíno e retido da experimentação inicial impulsionada por curiosidade consegue investir com confiança mais em funcionalidades que realmente estão a funcionar e redirecionar esforço de outras que não estão, em vez de perseguir um pico inicial enganador ou abandonar prematuramente uma funcionalidade genuinamente valiosa mas lenta a ser descoberta.

O custo total de propriedade é maioritariamente instrumentação de análise, normalmente já disponível na maioria das plataformas modernas de análise de produto, mais a disciplina de definir públicos-alvo explicitamente e comprometer-se a leituras de acompanhamento de retenção em vez de parar num sinal precoce e incompleto. Essa disciplina custa pouco e previne o erro muito mais caro de interpretar mal ou um falso sucesso ou um falso fracasso.

## Antipadrões e armadilhas

- **Reportar apenas a experimentação inicial, nunca a retenção:** não consegue distinguir curiosidade ou exposição forçada de valor genuíno e duradouro.
- **Medir a adoção contra o denominador errado:** dilui ou inflaciona o sinal para funcionalidades dirigidas a um segmento específico de público.
- **Concluir que uma funcionalidade falhou sem investigar a causa específica** da baixa adoção: arrisca abandonar uma funcionalidade genuinamente valiosa mas mal descoberta ou mal cronometrada.
- **Celebrar a adoção inflacionada por exposição forçada ou padrões obscuros:** uma instância do lado do produto da manipulação por substituição do capítulo 1.2.
- **Nunca rastrear o movimento de adoção de volta a decisões específicas:** limita a aprendizagem organizacional a partir dos próprios dados da organização.
- **Rastrear a utilização sem nenhum sinal combinado de satisfação:** perde o caso em que alta utilização coexiste com baixo valor ou satisfação genuínos.

## Modelo de maturidade

- **Nível 1, Iniciar:** A adoção não é medida, ou apenas um único número precoce e não retido de experimentação é reportado.
- **Nível 2, Desenvolver:** Existe algum rastreio de adoção, mas os públicos-alvo não são definidos precisamente e a retenção é medida inconsistentemente.
- **Nível 3, Padronizar:** A experimentação inicial e a adoção retida são ambas rastreadas consistentemente contra um público-alvo precisamente definido para cada funcionalidade principal.
- **Nível 4, Gerir:** As funcionalidades de baixa adoção são sistematicamente investigadas quanto à causa raiz específica antes de uma decisão de redesenhar ou descontinuar; a adoção é combinada com dados de satisfação.
- **Nível 5, Orquestrar:** Os dados de adoção informam direta e rotineiramente a priorização do roteiro e as decisões de investimento, e a organização consegue rastrear movimentos específicos de adoção de volta a decisões específicas de produto e engenharia com confiança.

## Ideias para debate

1. Qual é uma funcionalidade recente onde a nossa experimentação inicial e a adoção retida contaram histórias muito diferentes?
2. O público-alvo da nossa última funcionalidade foi definido precisamente antes do lançamento, ou apenas depois?
3. Que funcionalidade de baixa adoção merece uma investigação honesta de causa raiz antes de decidirmos o seu destino?
4. Alguma parte do nosso reporte atual de adoção está inflacionada por exposição forçada?
5. O que combinar os dados de adoção com dados de satisfação revelaria sobre a nossa funcionalidade mais usada?

## Principais conclusões

- Distinga a **experimentação inicial da retenção sustentada**; um pico por curiosidade ou exposição forçada não é valor genuíno e duradouro.
- Meça a adoção contra um **público-alvo precisamente definido**, não uma base de utilizadores mais ampla e irrelevante.
- **Investigue a causa específica** da baixa adoção antes de concluir que uma funcionalidade falhou; várias causas muito diferentes exigem respostas muito diferentes.
- Fique atento à adoção **inflacionada por exposição forçada ou padrões obscuros**, e combine a adoção com um **sinal de satisfação** para apanhar isto.
- **Rastreie o movimento de adoção de volta a decisões específicas** para transformar os dados em aprendizagem organizacional genuína.

## Referências e leituras adicionais

- *Lean Analytics*, de Alistair Croll e Benjamin Yoskovitz.
- *Continuous Discovery Habits*, de Teresa Torres.
- *Hooked: How to Build Habit-Forming Products*, de Nir Eyal.
- *Measure What Matters*, de John Doerr.
