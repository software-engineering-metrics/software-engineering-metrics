# 4.2 Cobertura de testes e eficácia de testes

## Visão geral e motivação

A **[cobertura de testes](https://en.wikipedia.org/wiki/Code_coverage)** mede a percentagem de código executado por uma suite de testes: cobertura de linhas, cobertura de ramos, ou a mais rigorosa cobertura de caminhos. É uma das métricas mais amplamente rastreadas em todo este livro, barata de calcular, fácil de visualizar como uma única percentagem, e consequentemente uma das mais frequentemente manipuladas, precisamente da forma que o tema 1.2 prevê para qualquer métrica que se torna um alvo. Uma suite de testes pode alcançar alta cobertura enquanto verifica quase nada significativo, porque a cobertura mede se o código foi executado durante uma execução de teste, não se o teste realmente verificou que o código se comportou corretamente.

Esta lacuna entre a cobertura e a eficácia genuína de testes não é uma nota de rodapé menor; é a preocupação central deste tema. Um teste que chama uma função e não afirma nada sobre o seu resultado aumenta a cobertura identicamente a um teste que verifica minuciosamente o comportamento da função através de casos extremos. A correção que este tema recomenda, o **teste de mutação**, que introduz deliberadamente falhas pequenas e artificiais no código e verifica se a suite de testes realmente as apanha, é a resposta direta a esta lacuna, e este tema trata-a como o complemento necessário da cobertura, não um extra opcional.

Para equipas grandes, os alvos de cobertura são muitas vezes adotados em toda a organização como um portão de qualidade, precisamente o tipo de métrica incentivada e de alta visibilidade contra a qual o tema 1.2 avisa que está mais exposta à manipulação. As organizações empresariais e governamentais que definem um requisito geral de percentagem de cobertura sem uma verificação de eficácia emparelhada estão, na prática, a incentivar precisamente o padrão de manipulação de limiar que este livro descreve: testes triviais escritos puramente para alcançar um número, sem melhoria correspondente na prevenção real de defeitos.

## Princípios-chave

- **A cobertura mede a execução, não a verificação.** Uma linha a ser executada por um teste não diz nada sobre se o teste verificou algo significativo sobre ela.
- **Um alvo de cobertura sem uma verificação de eficácia é uma configuração de manual de livro didático da lei de Goodhart** (tema 1.2): o número melhora enquanto a qualidade genuína não.
- **O teste de mutação é o complemento necessário da cobertura**, não um substituto; use ambos juntos.
- **A cobertura é mais útil como um piso do que como um alvo a maximizar.** Um número baixo revela código genuinamente não testado; perseguir 100% produz muitas vezes retornos decrescentes ou negativos.
- **A cobertura de caminho crítico importa mais do que a cobertura uniforme e geral.** Nem todo o código carrega risco igual se falhar.

## Recomendações

### Usar a cobertura para encontrar código não testado, não como um alvo a maximizar

Trate um relatório de cobertura primariamente como um mapa do que não tem nenhum teste de todo, que é informação genuinamente útil, em vez de como uma pontuação a empurrar em direção a 100%. O código com zero cobertura é uma lacuna real que vale a pena fechar; o valor marginal de empurrar a cobertura de 85% para 95% é normalmente muito mais baixo e muitas vezes não vale o esforço que exige, especialmente se esse esforço produz testes de baixo valor apenas para alcançar o número mais alto.

### Emparelhar todo o alvo de cobertura com teste de mutação

As ferramentas de **teste de mutação** introduzem automaticamente pequenas falhas no seu código, invertendo um operador de comparação, mudando uma condição de fronteira, e depois executam a sua suite de testes contra cada versão mutada. Uma suite de testes que "mata" (falha contra) a maioria dos mutantes está genuinamente a verificar o comportamento; uma suite de testes com alta cobertura de linhas mas uma baixa taxa de morte de mutação está a executar código sem o verificar significativamente. Este emparelhamento é a salvaguarda única mais eficaz contra a manipulação de alvo de cobertura, e este livro recomenda-o como prática padrão, não uma técnica avançada ou opcional.

### Priorizar a cobertura e o teste de mutação primeiro em caminhos críticos

Nem todo o código carrega risco igual. Um caminho de processamento de pagamento, uma verificação de autenticação, ou um script de migração de dados merece teste muito mais rigoroso do que um relatório administrativo raramente usado. Em vez de perseguir cobertura uniforme através de toda uma base de código, identifique os seus caminhos de código de maior risco e maior consequência e concentre tanto a cobertura como o esforço de teste de mutação neles primeiro, aceitando uma cobertura mais baixa em código genuinamente de baixo risco como uma troca deliberada e informada em vez de um descuido.

### Vigiar os padrões específicos de manipulação de cobertura

As formas mais comuns de a cobertura ser manipulada, uma vez que se torna um alvo, incluem: testes que chamam uma função mas não afirmam nada significativo sobre o resultado (a manipulação de limiar do tema 1.2 aplicada a esta métrica), desativar ou eliminar testes que falham em vez de corrigir o problema subjacente, e excluir código difícil de testar do cálculo de cobertura inteiramente em vez de abordar porque é difícil de testar. Audite periodicamente uma amostra de testes diretamente, lendo as suas afirmações reais, em vez de confiar apenas na percentagem de cobertura.

### Definir um piso de cobertura, não um teto de cobertura, no seu pipeline de CI

Configure o seu pipeline de build para falhar se a cobertura cair abaixo de um piso acordado para código novo, prevenindo regressão, em vez de exigir que toda a mudança empurre o número geral mais alto. Esta distinção importa: um piso protege contra retrocesso sem criar a mesma pressão incessante ascendente que produz testes de baixo valor escritos puramente para empurrar o número ainda mais alto.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Apenas percentagem de cobertura | Barata, simples, amplamente suportada por ferramentas | Facilmente manipulável; mede a execução, não a verificação |
| Cobertura mais teste de mutação | Verifica que os testes realmente verificam o comportamento, resiste à manipulação | Mais cara computacionalmente; exige investimento em ferramentas |
| Alvo uniforme de cobertura através da base de código | Simples de declarar e aplicar | Desperdiça esforço em código de baixo risco; subinveste relativamente ao risco noutros locais |
| Cobertura baseada em risco, caminho crítico primeiro | Concentra o esforço onde mais importa | Exige julgamento para identificar corretamente caminhos genuinamente críticos |

A tensão central é **simplicidade versus honestidade**. Uma única percentagem de cobertura é fácil de reportar e fácil de definir como um alvo, mas essa simplicidade é precisamente o que a torna tão facilmente manipulável uma vez que se torna um número incentivado. Resolva a tensão aceitando a complexidade acrescida do teste de mutação e da priorização baseada em risco como o custo de um sinal honesto, e comunicando explicitamente à sua equipa porque um número geral de cobertura mais baixo, concentrado corretamente em caminhos críticos e apoiado por uma taxa forte de morte de mutação, é mais valioso do que um mais alto, mais uniformemente distribuído mas menos eficazmente verificado.

## Perguntas para debater com a sua equipa

1. **Qual é a nossa taxa de morte de mutação nos nossos caminhos de código de maior risco, e como se compara à nossa percentagem de cobertura no mesmo código?** Uma grande lacuna entre um número alto de cobertura e uma taxa baixa de morte de mutação é o sinal mais claro possível de que a cobertura sozinha não está a dizer-lhe o que pensa que está a dizer-lhe.

2. **Alguma vez escrevemos um teste principalmente para aumentar um número de cobertura, com pouco pensamento real sobre o que deveria verificar?** Seja honesto aqui; isto acontece mais frequentemente do que as equipas gostam de admitir, especialmente sob pressão de prazos quando um portão de cobertura está a bloquear uma integração.

3. **O nosso esforço de cobertura está concentrado nos nossos caminhos de código de maior risco, ou espalhado uniformemente independentemente da consequência se esse código falhar?** Mapeie a sua distribuição atual de cobertura contra uma avaliação honesta de risco da sua base de código e procure a incompatibilidade.

4. **Alguma vez desativámos ou eliminámos um teste a falhar em vez de corrigir o problema subjacente que revelou?** Esta é uma das formas mais prejudiciais de manipulação de cobertura, porque remove ativamente proteção real enquanto o número reportado de cobertura pode mal se mover.

5. **O nosso pipeline de CI aplica um piso de cobertura para código novo, ou empurra para um teto sempre mais alto independentemente de retornos decrescentes?** Discuta se o desenho atual do seu portão cria o incentivo certo, proteção contra regressão, ou o errado, pressão incessante ascendente que recompensa o enchimento de baixo valor de testes.

6. **Que código na nossa base de código está excluído do cálculo de cobertura, e essa exclusão é justificada ou está a esconder uma lacuna real de teste?** Reveja a sua configuração real de exclusão; é comum que esta lista cresça silenciosamente ao longo do tempo sem que ninguém revisite se cada exclusão ainda é justificada.

## Perspetiva setorial

**Startup.** Os alvos formais de cobertura são muitas vezes desnecessários tão cedo; concentre o esforço de escrita de testes diretamente nos seus caminhos de código mais arriscados e mais críticos para o negócio (normalmente lógica de pagamento ou fluxo de trabalho central) em vez de perseguir uma percentagem geral através de uma base de código que ainda está a mudar rapidamente e pode ser substancialmente reescrita em breve de qualquer forma.

**Pequena empresa.** A maioria das plataformas de CI reporta a cobertura automaticamente com custo mínimo de configuração; use-a principalmente para detetar código crítico completamente não testado em vez de perseguir uma percentagem específica de alvo, e considere o teste de mutação apenas quando tiver a capacidade de engenharia para agir sobre o que revela.

**Empresa.** Os alvos gerais de cobertura em toda a organização são um erro comum e consequente a esta escala, já que incentivam precisamente a manipulação que este tema descreve através de dezenas de equipas simultaneamente. Estabeleça expectativas de cobertura baseadas em risco que variam por criticidade de serviço, e invista em infraestrutura de teste de mutação especificamente para os seus sistemas de maior risco.

**Governo.** Os requisitos de cobertura por vezes aparecem em documentação de contratação ou conformidade como um proxy rude e facilmente especificado para garantia de qualidade. Onde possível, emparelhe qualquer percentagem de cobertura contratualmente exigida com um requisito de eficácia baseado em teste de mutação ou defeito, para que o incentivo contratual não recompense inadvertidamente precisamente o enchimento de baixo valor de testes contra o qual este tema avisa.

## Exemplos

**Empresa.** A liderança de uma plataforma de comércio eletrónico tinha definido um requisito de 95% de cobertura em toda a empresa para todo o código novo, aplicado como um portão rígido de CI. Uma auditoria dois anos depois, impulsionada por uma onda de defeitos de produção em código supostamente bem testado, encontrou uma taxa de morte de mutação abaixo de 40% através de grande parte da base de código: as equipas tinham estado a escrever testes que executavam caminhos de código sem afirmar significativamente sobre o seu comportamento, puramente para satisfazer o portão sob pressão de prazos. A empresa substituiu o requisito geral de cobertura por uma política escalonada por risco: cobertura rigorosa mais teste de mutação obrigatório acima de um limiar de taxa de morte de 80% para código de pagamento e autenticação, e um piso de cobertura muito mais leve para ferramentas internas de baixo risco, o que tanto reduziu o esforço desperdiçado de teste como melhorou mensuravelmente as taxas de defeitos nos caminhos genuinamente críticos.

**Governo.** O sistema de elegibilidade de benefícios de uma agência de saúde pública tinha sido contratualmente exigido a manter 90% de cobertura de testes sob o seu acordo de fornecedor de desenvolvimento. Uma revisão pós-incidente, seguindo um defeito significativo de cálculo de elegibilidade que tinha sido entregue apesar de o requisito de cobertura ser cumprido, descobriu que a função específica responsável tinha alcançado a sua cobertura inteiramente através de testes que chamavam a função com entradas válidas mas nunca testavam condições de fronteira ou entradas inválidas, precisamente onde o defeito ocorreu. O contrato revisto de fornecedor da agência agora exige uma pontuação documentada de teste de mutação ao lado da cobertura para qualquer código de cálculo de elegibilidade, fechando a lacuna específica que tinha permitido que testes conformes mas ineficazes satisfizessem o contrato.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de emparelhar a cobertura com o teste de mutação é apanhar a lacuna entre a qualidade aparente e real de teste antes de custar um defeito de produção. O exemplo de comércio eletrónico acima mostra o padrão claramente: um requisito de cobertura sozinho tinha produzido uma falsa sensação de segurança que uma onda de defeitos eventualmente expôs a um custo muito maior do que o investimento em teste de mutação que teria apanhado a lacuna mais cedo.

O custo total de propriedade inclui o custo computacional do teste de mutação, que é mais caro de executar do que a instrumentação simples de cobertura e é portanto normalmente reservado para código de caminho crítico em vez de toda uma base de código, mais o tempo de engenharia para interpretar e agir sobre os resultados. Esse custo é justificado especificamente para o código de maior risco, onde o custo de uma lacuna não detetada na eficácia de teste é mais alto.

## Antipadrões e armadilhas

- **Tratar a percentagem de cobertura como um veredito direto de qualidade:** mede a execução, não a verificação.
- **Escrever testes principalmente para satisfazer um portão de cobertura:** produz precisamente o padrão de manipulação de limiar de baixo valor contra o qual o tema 1.2 avisa.
- **Desativar ou eliminar testes a falhar em vez de corrigir o problema subjacente:** remove proteção real enquanto mal afeta o número reportado.
- **Aplicar um alvo uniforme de cobertura independentemente do risco do código:** desperdiça esforço em código de baixo risco e subinveste em caminhos genuinamente críticos.
- **Fazer crescer silenciosamente uma lista de exclusão ao longo do tempo:** esconde lacunas reais de teste por trás de uma figura de cobertura tecnicamente precisa mas enganadora.
- **Perseguir um teto de cobertura em vez de um piso de cobertura:** cria pressão incessante ascendente que recompensa o enchimento de testes acima da verificação genuína.

## Modelo de maturidade

- **Nível 1, Iniciar:** A cobertura não é medida, ou é medida inconsistentemente sem piso, alvo, ou verificação de eficácia.
- **Nível 2, Desenvolver:** Existe um alvo de cobertura e é rastreado, mas nenhum teste de mutação ou priorização baseada em risco informa como o esforço é alocado.
- **Nível 3, Padronizar:** Os pisos de cobertura são aplicados consistentemente em CI, com priorização baseada em risco a direcionar onde o esforço de cobertura se concentra.
- **Nível 4, Gerir:** O teste de mutação executa em código de caminho crítico, com um limiar rastreado de taxa de morte que tem de ser cumprido ao lado da cobertura, e as listas de exclusão são auditadas periodicamente.
- **Nível 5, Orquestrar:** A organização consegue apontar para reduções específicas de defeitos traçadas até à priorização informada por teste de mutação, e os dados de cobertura e eficácia juntos informam diretamente decisões de investimento em teste.

## Ideias para debate

1. Qual é a nossa taxa de morte de mutação no nosso caminho de código único mais crítico, e sequer a sabemos?
2. Alguma vez escrevemos um teste de baixo valor puramente para satisfazer um portão de cobertura?
3. O nosso esforço atual de cobertura está concentrado onde o risco é mais alto, ou espalhado uniformemente?
4. Que código está atualmente excluído do cálculo de cobertura, e essa exclusão ainda é justificada?
5. Um investimento de teste de mutação no nosso sistema de maior risco valeria o seu custo computacional?

## Principais conclusões

- A cobertura de testes mede a **execução, não a verificação**; uma linha coberta não diz nada sobre se foi verificada significativamente.
- Emparelhe a cobertura com o **teste de mutação** para verificar que os testes realmente apanham falhas reais, não apenas que executam o código.
- Concentre o esforço de teste em **caminhos críticos e de alto risco** em vez de perseguir cobertura uniforme através de toda uma base de código.
- Use a cobertura como um **piso para proteger contra regressão**, não um teto a maximizar incessantemente.
- Vigie os padrões específicos de manipulação de cobertura: **testes de baixo valor, testes falhados desativados, e listas de exclusão que crescem silenciosamente**.

## Referências e leituras adicionais

- *Working Effectively with Legacy Code*, de Michael Feathers.
- Jia, Yue, e Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011).
- *xUnit Test Patterns*, de Gerard Meszaros.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
