# 2.4 Tempo de fluxo e carga de fluxo

## Visão geral e motivação

O **tempo de fluxo** é o tempo total decorrido desde que um item de fluxo (tema 2.2) entra na cadeia de valor até ser entregue, medindo a capacidade de resposta através de todo o caminho desde uma necessidade de negócio ser identificada até um cliente receber valor. A **carga de fluxo** é o número total de itens de fluxo atualmente ativos ou à espera na cadeia de valor em qualquer momento, o nome do Flow Framework para aquilo a que o tema 2.5 chama trabalho em curso. Juntas, estas são as duas métricas do Flow Framework que mais diretamente se ligam à matemática das filas, porque a carga de fluxo não apenas se correlaciona com o tempo de fluxo, ela dita-o matematicamente.

Essa relação é a **[lei de Little](https://en.wikipedia.org/wiki/Little%27s_law)**, uma prova da teoria das filas (o tema 2.7 cobre-a na íntegra) que declara que o número médio de itens num sistema estável é igual à taxa média de chegada multiplicada pelo tempo médio que cada item passa no sistema. Aplicada aqui: a carga de fluxo é igual à taxa de chegada multiplicada pelo tempo de fluxo. Este é o facto único mais útil deste tema, porque transforma um argumento que costumava ser qualitativo, "estamos demasiado sobrecarregados, as coisas estão a demorar demasiado tempo," num argumento demonstrável e quantitativo que um líder de negócio não consegue facilmente descartar: se a carga de fluxo continuar a subir enquanto a taxa de chegada se mantém estável, o tempo de fluxo está matematicamente garantido a subir também, não apenas é provável que suba.

Para equipas grandes, este é muitas vezes o número único mais persuasivo em toda a estrutura. Um líder de negócio que resiste à ideia de dizer não a novo trabalho, porque cada pedido parece individualmente justificado, aceitará muitas vezes que sobrecarregar uma cadeia de valor abranda comprovadamente cada item já nela, uma vez que a carga de fluxo é rastreada e a relação com o tempo de fluxo é mostrada diretamente em vez de argumentada abstratamente. As organizações empresariais a gerir muitas iniciativas estratégicas concorrentes e os programas governamentais a executar dezenas de fluxos de trabalho paralelos dependem ambos desta prova, não apenas da intuição por trás dela, para justificar dizer não a começar mais trabalho de uma vez.

## Princípios-chave

- **A carga de fluxo dita matematicamente o tempo de fluxo, via lei de Little.** Isto não é correlação; é uma prova que se sustenta para qualquer cadeia de valor estável.
- **O tempo de fluxo abrange toda a cadeia de valor, não apenas a engenharia.** Começa quando uma necessidade de negócio é identificada, não quando a engenharia pega no trabalho, que o tempo de ciclo do tema 2.6 depois decompõe ainda mais.
- **A carga de fluxo em subida é o sinal de aviso mais precoce do tempo de fluxo em subida.** Porque a relação é demonstrável, a carga de fluxo pode ser vigiada como um indicador avançado, não apenas descoberta depois de o tempo de fluxo já se ter degradado.
- **O ponto de entrada da cadeia de valor tem de ser fixo e documentado.** Onde o relógio do tempo de fluxo começa é uma escolha definicional exposta ao mesmo risco de manipulação que qualquer outra fronteira de métrica neste livro.
- **Um líder de negócio consegue agir diretamente sobre a carga de fluxo.** Ao contrário do tempo de fluxo, que é uma medição retardada, a carga de fluxo é uma alavanca: dizer não a começar novo trabalho é uma ação disponível hoje.

## Recomendações

### Fixar e documentar o ponto de entrada da cadeia de valor antes de medir o tempo de fluxo

Decida explicitamente se o tempo de fluxo começa quando uma necessidade de negócio é identificada pela primeira vez, quando é formalmente aprovada, ou quando a engenharia começa o trabalho, e documente essa escolha da mesma forma que o tema 1.4 recomenda para qualquer carta de métricas. Esta única decisão determina se o tempo de fluxo mede a capacidade de resposta genuína de ponta a ponta ou apenas a fatia mais estreita dela que a engenharia controla, e mudar a definição mais tarde sem divulgação é o risco de manipulação central deste tema.

### Rastrear a carga de fluxo continuamente, não periodicamente

Porque a carga de fluxo é um indicador avançado, via lei de Little, do tempo de fluxo ainda por vir, rastreie-a como um número vivo e continuamente atualizado em vez de um instantâneo periódico. Uma carga de fluxo que já subiu durante semanas até alguém a verificar já esteve silenciosamente a prolongar o tempo de fluxo por tanto tempo, invisivelmente, antes de a métrica apanhar.

### Usar a lei de Little explicitamente ao argumentar por um limite de trabalho em curso ou aumento de capacidade

Ao fazer o caso para começar menos trabalho concorrente, ou para acrescentar capacidade, apresente a equação real, não apenas a recomendação: a carga de fluxo é igual à taxa de chegada vezes o tempo de fluxo, pelo que se a taxa de chegada for aproximadamente fixa, reduzir a carga de fluxo está matematicamente garantido a reduzir o tempo de fluxo. Este é um argumento substancialmente mais forte para um interessado cético do que uma afirmação não quantificada de que "estamos demasiado ocupados," porque é demonstrável em vez de afirmado.

### Separar o tempo de fluxo das causas subjacentes da carga de fluxo antes de propor uma correção

Quando a carga de fluxo é alta, investigue qual tipo de item de fluxo (tema 2.2) está realmente a impulsioná-la: demasiadas funcionalidades concorrentes iniciadas de uma vez, um backlog de defeitos não resolvidos, ou trabalho de risco preso à espera de uma aprovação partilhada. Cada causa implica uma correção diferente, e tratar "a carga de fluxo é alta" como um único problema não diferenciado tende a produzir uma resposta genérica e ineficaz.

### Verificar de forma cruzada o tempo de fluxo contra o tempo de ciclo para isolar onde o atraso realmente acontece

Já que o tempo de fluxo abrange toda a cadeia de valor e o tempo de ciclo (tema 2.6) cobre apenas a porção de engenharia dela, compare os dois diretamente. Uma grande lacuna entre o tempo de fluxo e o tempo de ciclo significa que a maior parte do atraso acontece antes de a engenharia alguma vez ver o trabalho, em filas de aprovação, backlogs de priorização, ou transições entre equipas, o que aponta para uma correção muito diferente do que uma lacuna concentrada dentro da própria engenharia.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Medir o tempo de fluxo apenas a partir da admissão pela engenharia | Simples, corresponde à instrumentação existente de tempo de ciclo | Perde o atraso antes da engenharia, subestima a verdadeira capacidade de resposta |
| Medir o tempo de fluxo a partir da identificação genuína da necessidade de negócio | Captura a verdadeira capacidade de resposta de ponta a ponta | Exige instrumentar fases fora do controlo direto da engenharia |
| Instantâneos periódicos de carga de fluxo | Barato de calcular ocasionalmente | Perde o valor de indicador avançado; a carga crescente passa despercebida durante demasiado tempo |
| Rastreio contínuo de carga de fluxo | Indicador avançado vivo e acionável | Exige integração contínua de ferramentas, não apenas um relatório ocasional |

A tensão central é **âmbito versus alcance da instrumentação**. Medir o tempo de fluxo apenas a partir da admissão pela engenharia é muito mais fácil de instrumentar, já que reutiliza os dados de tempo de ciclo que o tema 2.6 já recolhe, mas subestima silenciosamente a verdadeira capacidade de resposta ao ignorar tudo o que acontece antes de a engenharia ver o trabalho. Resolva a tensão começando com a medição mais estreita e com âmbito de engenharia se for tudo o que consegue instrumentar hoje, mas trate estender o ponto de início do tempo de fluxo a montante, para a identificação de necessidade de negócio e priorização, como uma prioridade de curto prazo em vez de uma limitação permanente.

## Perguntas para debater com a sua equipa

1. **Onde começa realmente o nosso relógio de tempo de fluxo hoje, e toda a gente na organização concorda que esse é o ponto de início correto?** Uma incompatibilidade entre onde os interessados assumem que o relógio começa e onde realmente começa é uma fonte comum e silenciosa de desconfiança na métrica. Confirme que a definição documentada corresponde ao entendimento partilhado.

2. **Alguma vez verificámos se a nossa carga de fluxo medida, taxa de chegada, e tempo de fluxo realmente satisfazem a lei de Little?** Se não se equilibrarem aproximadamente, um dos três números está a ser medido inconsistentemente. Percorra os números reais juntos em vez de assumir que a verificação passaria.

3. **A carga de fluxo é rastreada continuamente, ou uma subida constante passaria despercebida durante semanas antes de alguém verificar?** Um indicador avançado só o protege se alguém estiver realmente a vigiá-lo quase em tempo real, não apenas a revê-lo num relatório trimestral.

4. **Quando a carga de fluxo sobe, conseguimos dizer qual tipo de item de fluxo está realmente a impulsioná-la, ou lê-se como um único número não diferenciado?** Um diagnóstico genérico de "estamos sobrecarregados" produz uma resposta genérica, muitas vezes ineficaz. Verifique se a sua instrumentação atual consegue realmente atribuir a carga crescente a uma causa específica.

5. **Quão grande é a lacuna entre o nosso tempo de fluxo e o nosso tempo de ciclo, e essa lacuna sugere que a maior parte do atraso acontece antes ou depois de a engenharia ver o trabalho?** Esta comparação revela muitas vezes que a maior oportunidade de melhoria está inteiramente fora do próprio controlo da engenharia.

6. **Alguém alguma vez estreitou silenciosamente o nosso ponto de início do tempo de fluxo para fazer o número parecer melhor, sem essa mudança ser documentada ou divulgada?** Este é o risco de manipulação central do tema declarado diretamente. Pergunte honestamente se a sua definição alguma vez derivou desta forma.

## Perspetiva setorial

**Startup.** A carga de fluxo é normalmente baixa simplesmente porque não há pessoas suficientes para começar muito trabalho simultaneamente, mas a mesma relação matemática continua a aplicar-se no momento em que um fundador ou engenheiro líder se torna um estrangulamento pessoal para muitas iniciativas concorrentes. Rastreie a carga de fluxo informalmente mesmo sem ferramentas dedicadas, já que a lei de Little se sustenta independentemente da escala.

**Pequena empresa.** Uma lista simples e partilhada de tudo o que está atualmente ativo é normalmente suficiente para calcular a carga de fluxo sem software dedicado de gestão de cadeia de valor. O hábito útil é verificá-la com frequência suficiente para que um número crescente seja apanhado cedo, não descoberto apenas depois de o tempo de fluxo já se ter degradado visivelmente.

**Empresa.** É aqui que a lei de Little ganha o seu valor como argumento, não apenas como métrica: uma grande organização a gerir dezenas de iniciativas estratégicas concorrentes pode usar a relação demonstrável entre a carga de fluxo e o tempo de fluxo para fazer um caso baseado em evidência para sequenciar trabalho, algo que um argumento puramente qualitativo de "estamos demasiado ocupados" raramente consegue contra pressão determinada de interessados.

**Governo.** Os programas de vários anos acumulam rotineiramente uma grande carga de fluxo implícita através de muitos fluxos de trabalho, cada um individualmente justificado, sem visibilidade organizacional do total. Apresentar a lei de Little diretamente, mostrando que o crescimento do tempo de fluxo do próprio programa é matematicamente explicado pela sua própria carga de fluxo crescente, é muitas vezes a evidência mais clara e mais persuasiva disponível para sequenciar fluxos de trabalho em vez de os executar todos em paralelo indefinidamente.

## Exemplos

**Empresa.** A organização de plataforma de uma empresa de tecnologia de media estava a executar vinte e duas iniciativas estratégicas concorrentes com capacidade realista para aproximadamente doze, uma incompatibilidade que ninguém tinha quantificado até uma nova vice-presidente de engenharia pedir a carga de fluxo diretamente. O tempo de fluxo para a iniciativa mediana tinha crescido 40% no ano anterior, uma tendência que a liderança tinha atribuído a "o trabalho a ficar mais difícil." Apresentar a lei de Little ao lado dos números reais de carga de fluxo e taxa de chegada mostrou que o crescimento era totalmente explicado apenas pela carga de fluxo crescente, sem nenhuma mudança na dificuldade subjacente do trabalho necessária para o explicar. A organização sequenciou as iniciativas até uma carga de fluxo sustentável, e o tempo de fluxo mediano caiu quase um terço dentro de dois trimestres.

**Governo.** O programa de modernização de uma agência federal de gestão de subsídios tinha acumulado carga de fluxo através de dezenas de fluxos de trabalho paralelos sem nenhum total único rastreado, cada patrocinador de fluxo de trabalho a acreditar que a sua própria iniciativa estava adequadamente dotada de recursos isoladamente. Uma análise do gabinete do programa usando a lei de Little mostrou que o tempo de fluxo agregado do programa, o tempo desde a aprovação de um fluxo de trabalho até à sua entrega, podia ser previsto quase exatamente a partir apenas da sua carga de fluxo agregada, uma descoberta que convenceu patrocinadores que tinham resistido a argumentos de despriorização durante mais de um ano. O programa adotou um teto explícito de carga de fluxo, e novos fluxos de trabalho agora entram numa fila em vez de começarem imediatamente independentemente da carga atual.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de rastrear a carga de fluxo e o tempo de fluxo juntos é um caso demonstrável, não apenas persuasivo, para sequenciar o trabalho em vez de executar tudo em paralelo. O exemplo da tecnologia de media acima, explicando toda uma regressão de tempo de fluxo apenas através da carga de fluxo, é o padrão que esta combinação produz fiavelmente: um argumento específico e quantitativo tem sucesso onde um apelo qualitativo a estar "demasiado ocupado" falhou anteriormente contra pressão organizacional real para começar mais trabalho.

O custo total de propriedade é baixo em relação ao seu poder persuasivo: a carga de fluxo exige apenas uma contagem viva de itens ativos e à espera, e o tempo de fluxo exige instrumentar o ponto de entrada da cadeia de valor, trabalho que se paga a si próprio a primeira vez que impede uma organização de se comprometer com mais iniciativas concorrentes do que a sua capacidade real consegue suportar.

## Antipadrões e armadilhas

- **Estreitar silenciosamente o ponto de início do tempo de fluxo para lisonjear o número:** o vetor de manipulação no centro deste tema. Mover o início do relógio da identificação genuína de necessidade de negócio para um ponto mais tardio, admissão pela engenharia, aprovação formal, encolhe o tempo de fluxo sem mudar a capacidade de resposta genuína de todo, e pode acontecer gradualmente o suficiente para que nenhuma mudança única pareça uma manipulação deliberada. A salvaguarda é documentar o ponto de entrada explicitamente numa carta de métricas (tema 1.4) e auditá-lo periodicamente contra a definição documentada, a mesma disciplina que este livro pede para toda a fronteira de métrica.
- **Medir a carga de fluxo apenas periodicamente:** perde o seu valor como indicador avançado, já que uma subida constante pode passar despercebida durante semanas.
- **Tratar a carga de fluxo como um único número não diferenciado:** perde qual tipo de item de fluxo está realmente a impulsionar uma sobrecarga, produzindo uma resposta genérica em vez de direcionada.
- **Ignorar a lacuna entre o tempo de fluxo e o tempo de ciclo:** perde se o atraso está concentrado antes ou depois da engenharia, o que implica correções muito diferentes.
- **Argumentar por trabalho concorrente reduzido sem apresentar a lei de Little explicitamente:** um apelo qualitativo é muito mais fácil de descartar para um interessado do que uma relação quantitativa e demonstrável.
- **Assumir que a lei de Little só se aplica a grande escala:** sustenta-se para qualquer sistema estável independentemente do tamanho, incluindo um único indivíduo sobrecarregado.

## Modelo de maturidade

- **Nível 1, Iniciar:** Nem o tempo de fluxo nem a carga de fluxo são rastreados; o atraso é discutido anedoticamente sem dados de suporte.
- **Nível 2, Desenvolver:** O tempo de fluxo é rastreado apenas a partir da admissão pela engenharia, e a carga de fluxo é verificada periodicamente em vez de continuamente.
- **Nível 3, Padronizar:** O tempo de fluxo é medido a partir de um ponto de entrada documentado e à escala da organização na cadeia de valor, e a carga de fluxo é rastreada continuamente como indicador avançado.
- **Nível 4, Gerir:** A lei de Little é usada explicitamente para justificar decisões de capacidade e sequenciamento, e a carga de fluxo crescente é atribuída a um tipo específico de item de fluxo antes de uma correção ser proposta.
- **Nível 5, Orquestrar:** A organização define tetos explícitos de carga de fluxo através das suas cadeias de valor, e consegue apontar para decisões específicas de sequenciamento, apoiadas pela lei de Little, que melhoraram mensuravelmente o tempo de fluxo.

## Ideias para debate

1. Onde começa realmente o nosso relógio de tempo de fluxo, e essa definição alguma vez derivou sem documentação?
2. A nossa carga de fluxo medida, taxa de chegada, e tempo de fluxo satisfazem aproximadamente a lei de Little?
3. A carga de fluxo é rastreada continuamente o suficiente para que uma subida constante fosse apanhada dentro de dias, não meses?
4. Qual é a lacuna entre o nosso tempo de fluxo e o nosso tempo de ciclo, e o que essa lacuna nos diz sobre onde o atraso realmente acontece?

## Principais conclusões

- A **carga de fluxo dita matematicamente o tempo de fluxo**, via lei de Little: a carga de fluxo é igual à taxa de chegada vezes o tempo de fluxo, para qualquer cadeia de valor estável.
- O **tempo de fluxo abrange toda a cadeia de valor**, desde a identificação da necessidade de negócio até à entrega, mais amplo do que o âmbito apenas de engenharia do tempo de ciclo (tema 2.6).
- O vetor de manipulação central do tema é **estreitar silenciosamente o ponto de início do tempo de fluxo**; a salvaguarda é uma definição documentada e auditada do ponto de entrada.
- **Rastreie a carga de fluxo continuamente**, não periodicamente, para que funcione como um indicador avançado genuíno em vez de uma descoberta retardada.
- Use a lei de Little **explicitamente**, não apenas como intuição, ao argumentar por um limite de trabalho em curso, um aumento de capacidade, ou sequenciamento de trabalho concorrente.

## Referências e leituras adicionais

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
