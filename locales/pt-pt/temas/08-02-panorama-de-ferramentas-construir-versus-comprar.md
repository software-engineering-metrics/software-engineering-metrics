# 8.2 Panorama de ferramentas: construir versus comprar

## Visão geral e motivação

Toda a organização que implementa a orientação deste livro eventualmente enfrenta uma decisão prática de infraestrutura: construir ferramentas de métricas internamente, comprar uma plataforma comercial de análise de engenharia, ou, mais comummente na prática, alguma combinação de ambas. Este tema trata essa decisão com o mesmo rigor que o tema 5.5 aplica a qualquer outro investimento de engenharia: uma análise honesta de custo-benefício específica à escala da sua organização, às fontes de dados existentes, e às métricas específicas deste livro que realmente pretende rastrear, em vez de uma resposta predefinida que se aplica uniformemente independentemente do contexto.

O mercado de ferramentas comerciais de análise de engenharia amadureceu consideravelmente, e muitas plataformas agora oferecem instrumentação sólida e largamente automatizada para as métricas DORA (Parte 2), dados de pedidos de incorporação de mudanças e revisão (tema 2.9), e cada vez mais, infraestrutura de inquérito de experiência do programador (tema 3.7). Esta maturidade mudou o cálculo para muitas organizações em direção a comprar pelo menos a camada fundacional, mas não eliminou as vantagens genuínas da opção de construir para necessidades específicas e personalizadas, particularmente em torno da telemetria de resultado que o tema 7.4 argumenta ser agora o centro necessário de um programa de métricas, que é frequentemente a categoria menos padronizada e mais específica à organização de medição que este livro cobre.

Para equipas grandes, esta decisão tem consequências reais e contínuas de orçamento e capacidade de engenharia. As organizações empresariais precisam muitas vezes de integrar ferramentas de métricas através de um panorama genuinamente heterogéneo de sistemas legados e modernos, o que molda significativamente o cálculo de construir-versus-comprar; as organizações governamentais enfrentam frequentemente restrições de aquisição e requisitos de soberania de dados ou segurança que afetam materialmente quais opções comerciais são sequer viáveis, por vezes inclinando a decisão em direção a construir ou em direção a um conjunto específico de fornecedores validados independentemente do que uma análise pura de custo-benefício sozinha sugeriria.

## Princípios-chave

- **Esta raramente é uma decisão de tudo ou nada.** A maioria dos programas maduros de métricas combina ferramentas compradas para métricas bem padronizadas com ferramentas construídas para telemetria de resultado específica à organização.
- **Compre para métricas bem padronizadas e amplamente necessárias; construa para as genuinamente específicas à organização.** As métricas DORA e a análise de pedidos de incorporação de mudanças são território de commodity; a sua correlação específica de resultado de negócio (tema 5.3) normalmente não é.
- **A propriedade e a portabilidade de dados importam tanto quanto a comparação de funcionalidades.** Uma ferramenta que bloqueia os seus dados de métricas é um risco duradouro, não apenas um inconveniente.
- **O custo de integração é frequentemente subestimado** numa análise de construir-versus-comprar, para ambas as opções.
- **As restrições de aquisição, segurança, e soberania de dados podem substituir um cálculo puro de custo-benefício**, particularmente para organizações governamentais.

## Recomendações

### Compre para a camada de commodity: infraestrutura DORA, de revisão, e de inquérito

Para famílias de métricas com ferramentas comerciais maduras e amplamente disponíveis, instrumentação de métricas DORA (Parte 2), análise de pedidos de incorporação de mudanças e revisão de código (tema 2.9), e plataformas de inquérito de experiência do programador (tema 3.7), comprar é normalmente a melhor escolha económica para a maioria das organizações abaixo de uma certa escala, já que construir infraestrutura equivalente duplica esforço de engenharia em que muitos fornecedores já investiram fortemente, com diferenciação genuína limitada disponível ao construir a sua própria versão.

### Construa para telemetria de resultado genuinamente específica à organização

Para as métricas de resultado que o tema 7.4 argumenta deverem ser o centro de gravidade do seu programa de métricas, correlação de resultado de negócio (tema 5.3), adoção de funcionalidades ligada ao seu produto específico (tema 5.2), economia unitária ligada à sua estrutura específica de custo (tema 5.4), as ferramentas comerciais são muito menos padronizadas e muitas vezes não conseguem captar a lógica de negócio e o modelo de dados específicos da sua organização sem personalização extensa e cara que pode acabar por custar mais do que construir a capacidade equivalente internamente com controlo total sobre o resultado.

### Avalie a propriedade e portabilidade de dados antes de se comprometer com um fornecedor

Antes de assinar um contrato comercial, confirme que consegue exportar os seus dados históricos completos de métricas num formato utilizável e padrão, e compreenda o que acontece a esses dados e ao seu histórico se mudar de fornecedor ou descontinuar o serviço. Uma relação com fornecedor que se torna difícil de terminar devido a [aprisionamento](https://en.wikipedia.org/wiki/Vendor_lock-in) de dados é um risco organizacional duradouro, não meramente um inconveniente, e esta avaliação merece a mesma seriedade que qualquer outro compromisso significativo e plurianual de infraestrutura.

### Orce realisticamente para o custo de integração em ambos os lados da decisão

Quer construindo quer comprando, o custo de integração, ligar a ferramenta ao seu controlo de versão real, CI/CD, rastreio de incidentes, e sistemas de negócio, é frequentemente subestimado no planeamento inicial de qualquer caminho. Orce explicitamente para este esforço de integração como um item de linha distinto e significativo na sua análise de construir-versus-comprar, em vez de assumir que uma ferramenta comercial funcionará pronta a usar com configuração mínima, ou que o custo de integração de uma solução caseira é um acrescento menor ao seu custo de desenvolvimento.

### Contabilize explícita e precocemente as restrições de aquisição, segurança, e soberania

Para organizações governamentais e empresariais reguladas, os requisitos de soberania de dados, as necessidades de certificação de segurança, e os processos de aquisição podem estreitar ou eliminar materialmente certas opções comerciais independentemente da sua qualidade de funcionalidades, por vezes inclinando a decisão em direção a construir ou em direção a um conjunto mais pequeno de fornecedores especificamente validados. Identifique estas restrições explícita e precocemente no processo de avaliação, em vez de as descobrir apenas depois de esforço significativo de avaliação já ter ido para uma opção que se revela não viável por razões não relacionadas com a sua capacidade real.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Comprar ferramentas comerciais | Rápido de implementar, conjunto maduro de funcionalidades, mantido pelo fornecedor | Menos personalizável para métricas de resultado específicas à organização; potencial aprisionamento |
| Construir ferramentas internas | Totalmente personalizado, propriedade e controlo totais de dados | Investimento significativo e contínuo de engenharia; duplica esforço para métricas de commodity |
| Híbrido: comprar camada de commodity, construir camada de resultado | Equilibra eficiência de custo com personalização genuína onde mais importa | Exige trabalho de integração para ligar coerentemente componentes comprados e construídos |
| Comprar tudo, incluindo telemetria de resultado, via personalização extensa de fornecedor | Relação única com fornecedor, aquisição potencialmente mais simples | Pode tornar-se tão caro como construir, com menos controlo final sobre o resultado |

A tensão central é **necessidade de personalização versus custo de desenvolvimento**. As métricas que mais beneficiam de personalização, telemetria de resultado ligada especificamente ao seu negócio, são também as mais caras de construir bem; as métricas mais baratas de comprar, análise DORA e de revisão, são também aquelas onde a personalização genuína menos importa. Resolva a tensão combinando a decisão diretamente com este padrão: compre onde a padronização lhe serve bem, construa onde o seu contexto específico genuinamente o exige, e orce o custo de integração realisticamente em ambos os lados dessa divisão.

## Perguntas para debater com a sua equipa

1. **Para cada família de métricas que este livro cobre, beneficiaríamos genuinamente de personalização, ou uma ferramenta comercial padronizada serviria igualmente bem?** Percorra as Partes 2 a 6 explicitamente e classifique cada família de métricas numa coluna de comprar ou construir com base neste teste específico.

2. **Avaliámos as opções de exportação e portabilidade de dados do nosso fornecedor atual ou prospetivo, ou estamos a assumir que poderíamos sair facilmente se precisássemos?** Verifique isto diretamente em vez de assumir; o aprisionamento de dados é muitas vezes descoberto apenas quando uma organização realmente tenta mudar.

3. **A nossa análise original de construir-versus-comprar contabilizou realisticamente o custo de integração, ou focou-se principalmente em taxas de licenciamento versus horas de desenvolvimento?** Revisite uma decisão recente de ferramentas e verifique se o custo de integração foi genuinamente estimado ou significativamente subestimado.

4. **Enfrentamos restrições de aquisição, segurança, ou soberania de dados que eliminariam certas opções comerciais independentemente da sua qualidade de funcionalidades?** Identifique estas restrições explicitamente antes, não depois, de investir esforço significativo de avaliação em opções que podem revelar-se não viáveis.

5. **O nosso panorama atual de ferramentas é um híbrido deliberado, combinando construir e comprar com onde cada um faz sentido, ou acumulou-se através de decisões ad hoc e individualmente razoáveis ao longo do tempo?** Seja honesto sobre qual padrão realmente descreve a sua situação atual.

6. **Quanto nos custaria, em esforço e risco, mudar o nosso fornecedor atual de ferramentas de métricas hoje se precisássemos?** Esta pergunta concreta testa a sua exposição real atual ao risco de aprisionamento de dados, para além do que os termos contratuais do fornecedor nominalmente prometem.

## Perspetiva setorial

**Startup.** Compre ferramentas de commodity por predefinição a esta escala; construir infraestrutura personalizada de métricas raramente é um bom uso de capacidade escassa e inicial de engenharia quando existem opções comerciais maduras e baratas especificamente para métricas DORA e de revisão. Reserve qualquer esforço de construção para a métrica única de resultado (tema 5.3) que mais diretamente reflete o valor central do seu produto.

**Pequena empresa.** A maioria das opções comerciais de ferramentas escala razoavelmente bem para baixo e tem preços acessíveis para organizações mais pequenas; comprar a camada de commodity é quase sempre a escolha certa, e construir algo personalizado raramente se justifica até a sua organização ter crescido consideravelmente e desenvolvido necessidades genuinamente específicas.

**Empresa.** A abordagem híbrida que este tema recomenda ganha a sua complexidade aqui: compre a camada de commodity à escala (muitas vezes com alavancagem significativa de negociação para termos favoráveis), e invista deliberadamente em construir a camada de telemetria de resultado específica à organização, já que a complexidade da sua lógica de negócio e modelo de dados a esta escala normalmente excede o que ferramentas comerciais genéricas conseguem acomodar sem personalização extensa e cara.

**Governo.** Os processos de aquisição, requisitos de certificação de segurança, e restrições de soberania de dados dominam frequentemente esta decisão mais do que a comparação pura de funcionalidades ou custo sugeriria. Envolva as partes interessadas de aquisição e segurança cedo no processo de avaliação, e esteja preparado para que a opção de construir seja genuinamente mais atrativa aqui do que num contexto comparável do setor privado, especificamente por causa destas restrições e não porque construir seja inerentemente melhor.

## Exemplos

**Empresa.** Uma empresa de software inicialmente tentou construir uma plataforma totalmente personalizada de métricas cobrindo cada família de métricas da Parte 2 à Parte 6, um esforço plurianual que consumiu capacidade significativa de engenharia e ainda assim ficou atrás de ofertas comerciais maduras especificamente para as métricas padronizadas DORA e de revisão. Uma estratégia revista adotou uma plataforma comercial para estas métricas de commodity, libertando a equipa interna de plataforma para se concentrar exclusivamente em construir a telemetria de correlação de resultado de negócio e economia unitária (temas 5.3, 5.4) genuinamente específica ao modelo de negócio da empresa, que nenhuma ferramenta comercial poderia ter fornecido pronta a usar. Esta abordagem híbrida entregou um programa de métricas mais completo e genuinamente mais útil dentro de um único ano do que a estratégia de construir tudo tinha alcançado depois de dois.

**Governo.** A avaliação inicial de uma agência federal de plataformas comerciais de análise de engenharia descobriu que nenhum dos fornecedores disponíveis conseguia satisfazer os requisitos de soberania de dados da agência, que exigiam que todos os dados de métricas de engenharia permanecessem dentro de centros de dados governamentais específicos e certificados. Em vez de abandonar inteiramente a opção de comprar, a agência identificou um subconjunto mais pequeno de fornecedores que ofereciam opções certificadas pelo governo de implementação em nuvem soberana, a um prémio modesto de custo sobre os preços comerciais padrão, e implementou com sucesso um programa híbrido: ferramentas compradas para a camada de métricas de commodity dentro da fronteira exigida de soberania, e ferramentas internas construídas para as necessidades específicas de telemetria de resultado de cidadão da agência, que nenhum fornecedor comercial disponível abordava independentemente de considerações de soberania.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de uma estratégia híbrida e deliberada de construir-versus-comprar é evitar ambos os modos de falha que os exemplos deste tema ilustram: o investimento desperdiçado e plurianual de engenharia a construir capacidade de commodity que já existe barata no mercado, e a frustração e eventual custo de personalização de forçar uma necessidade genuinamente específica à organização numa ferramenta comercial mal ajustada. O exemplo empresarial acima mostra isto concretamente: a abordagem híbrida entregou mais valor genuíno num ano do que a estratégia de construir tudo em dois.

O custo total de propriedade para qualquer caminho inclui o custo de integração, muitas vezes subestimado, e, especificamente para ferramentas compradas, o custo contínuo de risco de potencial aprisionamento de fornecedor a menos que a portabilidade de dados seja confirmada e protegida contratualmente antecipadamente. Orçar para ambos realisticamente, em vez de focar estreitamente apenas em taxas de licenciamento ou horas de desenvolvimento, produz uma imagem muito mais precisa do custo total para qualquer opção.

## Antipadrões e armadilhas

- **Construir ferramentas personalizadas para métricas bem padronizadas e de commodity:** duplica esforço de engenharia em que muitos fornecedores já investiram fortemente.
- **Comprar ferramentas comerciais para telemetria de resultado genuinamente específica à organização sem primeiro verificar o ajuste:** arrisca personalização cara e mal ajustada ou uma necessidade não satisfeita.
- **Nenhuma avaliação de exportação e portabilidade de dados antes de se comprometer com um fornecedor:** arrisca aprisionamento duradouro e caro descoberto apenas ao tentar sair.
- **Subestimar o custo de integração em qualquer lado da decisão:** produz uma comparação imprecisa de custo total e cronogramas irrealistas.
- **Ignorar restrições de aquisição, segurança, ou soberania até tarde no processo de avaliação:** desperdiça esforço de avaliação em opções que se revelam não viáveis por razões não relacionadas com capacidade.
- **Tratar isto como uma decisão única de tudo ou nada:** perde a abordagem híbrida que melhor corresponde às necessidades reais e mistas da maioria das organizações.

## Modelo de maturidade

- **Nível 1, Iniciar:** As decisões de ferramentas são tomadas ad hoc, sem análise deliberada de construir-versus-comprar ou consideração de portabilidade de dados.
- **Nível 2, Desenvolver:** Ocorre alguma análise, mas o custo de integração é rotineiramente subestimado e a abordagem híbrida não é deliberadamente considerada.
- **Nível 3, Padronizar:** Uma estratégia deliberada e híbrida de construir-versus-comprar combina métricas de commodity com ferramentas compradas e telemetria de resultado específica à organização com ferramentas construídas, consistentemente.
- **Nível 4, Gerir:** A portabilidade de dados é confirmada e protegida contratualmente para toda a ferramenta comprada, e as restrições de aquisição, segurança, e soberania são contabilizadas explícita e precocemente.
- **Nível 5, Orquestrar:** O panorama de ferramentas da organização reflete uma estratégia híbrida madura e deliberada, regularmente revista à medida que as ofertas comerciais e as necessidades organizacionais evoluem, com valor demonstrado tanto dos componentes comprados como dos construídos.

## Ideias para debate

1. Qual das nossas métricas atuais mais beneficiaria da personalização que atualmente não estamos a obter?
2. Confirmámos que conseguiríamos exportar os nossos dados históricos completos de métricas se precisássemos de mudar de fornecedor?
3. A nossa última decisão de ferramentas contabilizou realisticamente o custo de integração?
4. Que restrição de aquisição, segurança, ou soberania poderemos estar a subestimar?
5. Como seria uma estratégia híbrida deliberada para o nosso conjunto específico de métricas?

## Principais conclusões

- Isto raramente é tudo ou nada; a maioria dos programas maduros **combina ferramentas compradas para métricas de commodity com ferramentas construídas para telemetria de resultado específica à organização**.
- **Compre para métricas padronizadas** (DORA, análise de revisão, infraestrutura de inquérito); **construa para a medição de resultado genuinamente específica à organização**.
- Avalie a **propriedade e portabilidade de dados** antes de se comprometer com um fornecedor; o aprisionamento é um risco duradouro, não apenas um inconveniente.
- **Orce realisticamente para o custo de integração** em ambos os lados da decisão; é frequentemente subestimado.
- As **restrições de aquisição, segurança, e soberania** podem substituir um cálculo puro de custo-benefício, particularmente para organizações governamentais.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- *Cloud FinOps*, de J.R. Storment e Mike Fuller.
- O FinOps Framework da FinOps Foundation, [finops.org](https://www.finops.org/).
- Documentação do U.S. Federal Risk and Authorization Management Program (FedRAMP).
