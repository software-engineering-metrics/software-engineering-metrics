# 8.3 Implementar métricas sem gerar medo

## Visão geral e motivação

Este capítulo é, num sentido real, a culminação prática de tudo o que este livro tem argumentado desde que o capítulo 1.2 introduziu a lei de Goodhart: um programa de métricas implementado mal, de uma forma que provoca medo em vez de confiança, garante exatamente o comportamento de manipulação contra o qual cada capítulo subsequente alertou, independentemente de quão cuidadosamente cada métrica individual foi desenhada. Uma organização pode acertar cada detalhe técnico, visualização honesta, combinação com salvaguardas, governação cuidadosa, e ainda assim produzir um programa de métricas corrompido e não confiável se a própria implementação ensinar os engenheiros que estes números existem para os julgar em vez de os ajudar.

O mecanismo aqui é direto e bem documentado através da investigação de comportamento organizacional que este livro tem citado ao longo de todo o texto: as pessoas que temem que uma métrica seja usada contra elas, minando a [segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety), respondem exatamente como o capítulo 1.2 prevê, otimizam o número em vez da realidade subjacente, porque o incentivo para se protegerem é imediato e pessoal enquanto o dano à aprendizagem organizacional é difuso e atrasado. Isto não é um fracasso de carácter individual; é uma resposta racional a uma ameaça genuína, e a única correção duradoura é remover a ameaça, não pedir às pessoas que se comportem mais honestamente apesar dela.

Para equipas grandes, a orientação deste capítulo importa mais agudamente no momento da implementação inicial, quando a confiança ainda não foi estabelecida em qualquer direção e as primeiras impressões definem expectativas duradouras. As organizações empresariais que introduzem um novo programa de métricas em toda a organização arriscam que um único incidente mal gerido precocemente, as métricas de uma equipa usadas punitivamente, envenenem a confiança através de toda a implementação; as organizações governamentais, muitas vezes a introduzir programas de métricas num contexto de proteções sindicais existentes, cultura de função pública, ou desconfiança histórica de iniciativas de medição, precisam da orientação deste capítulo aplicada com cuidado e paciência particulares.

## Princípios-chave

- **O medo corrompe os dados mais depressa e mais completamente do que qualquer falha técnica no design de métricas.** Uma métrica perfeitamente desenhada implementada mal ainda é manipulada.
- **A confiança estabelece-se através de utilização demonstrada e consistentemente não punitiva, não através de uma declaração política sozinha.** As ações ao longo de múltiplos ciclos constroem confiança; as palavras sozinhas não.
- **Os incidentes iniciais de implementação definem expectativas duradouras.** As primeiras vezes que uma métrica toca em algo consequente determinam como todo o programa é percebido daí em diante.
- **A transparência sobre propósito e processo reduz o medo mais do que a garantia sozinha.** As pessoas confiam no que conseguem ver e compreender, não apenas no que lhes é dito.
- **Esta é uma disciplina organizacional sustentada, não um anúncio único de implementação.** O medo pode voltar a infiltrar-se gradualmente mesmo depois de um início genuinamente confiável.

## Recomendações

### Comunique o propósito e os não-objetivos explicitamente, antes da implementação, não depois de surgirem preocupações

Seguindo a disciplina de carta de métricas do capítulo 1.4, comunique o propósito de um novo programa de métricas e, criticamente, os seus não-objetivos explícitos (nunca usado para avaliação individual de desempenho sem uma política separadamente e claramente divulgada, segundo o capítulo 1.1) antes do lançamento, não reativamente depois de os engenheiros já terem começado a preocupar-se. A transparência proativa e antecipada sobre para que uma métrica não serve previne a especulação ansiosa que de outra forma preenche o vácuo e molda impressões precoces e difíceis de reverter.

### Envolva as pessoas a serem medidas no processo de design

Os engenheiros que ajudam a desenhar as métricas que descreverão o seu próprio trabalho são muito menos propensos a temer ou ressentir essas métricas do que aqueles a quem um sistema é imposto sem nenhuma contribuição. Envolva representantes de equipa diretamente na escolha de quais métricas rastrear, como são visualizadas, e que salvaguardas se aplicam, seguindo a ênfase consistente deste livro na propriedade ao nível da equipa (capítulo 1.4) em vez de um mandato puramente de cima para baixo.

### Comece com utilização apenas diagnóstica e prove-a ao longo de múltiplos ciclos antes de sequer considerar qualquer utilização avaliativa

Seguindo diretamente a distinção diagnóstica-versus-avaliativa do capítulo 1.1: comece um novo programa de métricas em modo puramente diagnóstico, usado apenas para compreender e melhorar sistemas, sem nenhuma ligação de todo à avaliação individual ou de equipa, e sustente essa disciplina visivelmente ao longo de vários ciclos de reporte antes de sequer começar qualquer conversa sobre utilização mais ampla. A confiança construída desta forma, através de restrição demonstrada ao longo do tempo, é muito mais duradoura do que a confiança reivindicada apenas através de um documento político.

### Responda ao primeiro incidente mal gerido imediata e visivelmente

Se uma métrica é mal usada punitivamente, mesmo uma vez, mesmo informalmente, aborde isso imediata, visível, e diretamente, em vez de a deixar passar silenciosamente. A resposta de uma organização ao seu primeiro incidente de má gestão é desproporcionadamente importante na formação da confiança de toda a equipa ou organização em todo o programa daí em diante; uma correção rápida e transparente sinaliza compromisso genuíno com o propósito declarado não punitivo, enquanto o silêncio ou uma exceção silenciosa e não abordada confirma exatamente o medo que impulsiona o comportamento de manipulação em primeiro lugar.

### Torne o próprio risco de manipulação uma conversa partilhada e transparente, não uma preocupação escondida de gestão

Em vez de tratar o risco de manipulação como algo com que a liderança se preocupa privadamente, partilhe a lógica de combinação com salvaguardas do capítulo 1.2 abertamente com as equipas a serem medidas: explique diretamente porque uma salvaguarda específica existe, que padrão de manipulação foi desenhada para apanhar, e convide a própria contribuição da equipa sobre se a salvaguarda está bem desenhada. Esta transparência, enquadrando toda a equipa como parceira na prevenção de manipulação em vez de sujeitos a serem vigiados por isso, constrói uma relação fundamentalmente diferente com o programa de métricas do que um sistema que silenciosamente policia a manipulação de cima sem nunca discutir o risco abertamente.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Mandato de cima para baixo com envolvimento mínimo da equipa | Rápido de implementar, design consistente | Alto risco de manipulação impulsionada por medo e baixa confiança desde o início |
| Implementação com envolvimento e codesenho da equipa | Constrói confiança genuína e adesão, menor risco de manipulação | Mais lento de implementar, exige mais esforço de coordenação |
| Utilização avaliativa imediata desde o primeiro dia | Parece eficiente, liga as métricas a consequências rapidamente | Provoca máximo medo e risco de manipulação antes de qualquer confiança ter sido estabelecida |
| Período alargado de prova apenas diagnóstica antes de qualquer utilização avaliativa | Constrói confiança duradoura e baseada em evidência | Mais lento a realizar qualquer caso de utilização avaliativa que a liderança possa eventualmente querer |

A tensão central é **velocidade de implementação versus construção de confiança**. Uma implementação rápida e de cima para baixo coloca um programa de métricas a correr depressa mas com risco real de provocar exatamente o medo e a manipulação contra os quais este livro tem alertado desde o seu capítulo de abertura; uma implementação mais lenta, com envolvimento da equipa, com prioridade diagnóstica leva mais tempo mas constrói a confiança duradoura que torna os dados resultantes realmente dignos de serem recolhidos em primeiro lugar. Resolva a tensão firmemente a favor da construção de confiança, já que um programa de métricas que se lança depressa mas produz dados manipulados e não confiáveis não alcançou, num sentido real, nada do que este livro tem defendido, por mais depressa que tenha sido implementado.

## Perguntas para debater com a sua equipa

1. **O propósito e os não-objetivos explícitos do nosso atual programa de métricas foram comunicados antes da implementação, ou os engenheiros primeiro souberam dele e só mais tarde ouviram garantias sobre como seria usado?** Se a garantia veio reativamente em vez de proativamente, essa própria sequência pode já ter moldado negativamente a confiança precoce, vale a pena ser nomeada honestamente.

2. **As pessoas a serem medidas foram envolvidas no design das métricas que descrevem o seu próprio trabalho, ou o sistema foi imposto sem nenhuma contribuição?** Avalie o seu processo real de implementação contra este teste específico, já que o envolvimento importa independentemente de quão bom o design resultante de métrica acabou por ser.

3. **O nosso programa de métricas sustentou utilização genuinamente apenas diagnóstica ao longo de múltiplos ciclos de reporte, ou a utilização avaliativa infiltrou-se mais cedo do que uma implementação com construção de confiança recomendaria?** Rastreie o histórico real honestamente; a deriva aqui acontece muitas vezes gradual e informalmente em vez de através de uma única mudança explícita de política.

4. **Uma métrica alguma vez foi mal usada punitivamente, mesmo uma vez, mesmo informalmente, e como respondeu a organização?** Se isto aconteceu, avalie honestamente se a resposta foi rápida e visível ou silenciosa e não abordada, já que essa resposta moldou a confiança em todo o programa muito mais do que o incidente original em si.

5. **As equipas a serem medidas compreendem porque cada salvaguarda existe, ou a lógica de prevenção de manipulação permanece uma preocupação privada de gestão de que nunca são diretamente informadas?** Discuta se o raciocínio de salvaguarda da sua organização (capítulo 1.2) foi realmente partilhado transparentemente ou permaneceu uma consideração de design não declarada e feita nos bastidores.

6. **Se recomeçássemos a nossa implementação de métricas do zero hoje, aplicando totalmente a orientação deste capítulo, quão diferente pareceria o processo do que realmente aconteceu?** Esta experiência mental retrospetiva revela muitas vezes locais específicos e nomeáveis onde a construção de confiança foi cortada sob pressão de tempo, vale a pena aprender mesmo que a implementação original não possa ser desfeita.

## Perspetiva setorial

**Startup.** A confiança é muitas vezes mais fácil de estabelecer a esta escala, já que a conversa diária direta fornece naturalmente a transparência que este capítulo recomenda. O risco é saltar a comunicação deliberada de propósito e não-objetivos simplesmente porque parece desnecessária numa equipa pequena e unida, uma suposição que pode silenciosamente desmoronar-se à medida que a equipa cresce e novas contratações se juntam sem o mesmo contexto partilhado.

**Pequena empresa.** Uma conversa simples e direta sobre porque uma nova métrica está a ser introduzida e para que será e não será usada, realizada antes da implementação em vez de depois de surgirem preocupações, captura a maior parte do valor deste capítulo sem precisar de processo formal a esta escala.

**Empresa.** A escala e a impessoalidade de uma grande organização tornam a orientação deste capítulo tanto mais difícil de executar bem como mais crítica de acertar, já que um único incidente mal gerido pode envenenar a confiança através de dezenas de equipas que ouvem sobre ele indiretamente em vez de o experimentarem diretamente. Invista deliberadamente no período alargado de prova com prioridade diagnóstica que este capítulo recomenda, e estabeleça um protocolo claro, rápido, e visível de resposta para qualquer incidente de má utilização de métricas antes de um ocorrer.

**Governo.** As organizações do setor público introduzem muitas vezes programas de métricas num contexto de proteções sindicais existentes, cultura estabelecida de função pública, e, em alguns casos, desconfiança histórica de iniciativas de medição ligadas a controvérsias passadas de gestão de desempenho. Aplique a orientação deste capítulo com paciência e formalidade particulares, potencialmente envolvendo diretamente a contribuição de representantes sindicais ou de pessoal no processo de design, e espere que o cronograma de construção de confiança seja genuinamente mais longo do que num contexto típico do setor privado.

## Exemplos

**Empresa.** A implementação inicial de um painel abrangente de métricas de engenharia de uma empresa de software, desenhado inteiramente por uma equipa central de plataforma sem nenhuma contribuição ao nível da equipa, foi recebida com resistência generalizada e silenciosa: engenheiros através da organização começaram a manipular informalmente os seus próprios números reportados dentro de semanas, exatamente como o capítulo 1.2 prevê para um sistema de métricas desconfiado e de cima para baixo. Um relançamento seis meses depois, desta vez envolvendo diretamente representantes de equipa na seleção de métricas e design de salvaguardas, e comprometendo-se explicitamente e depois genuinamente sustentando um período de seis meses apenas diagnóstico antes de qualquer conversa sobre utilização mais ampla, produziu dados mensuravelmente mais confiáveis dentro de um ano: uma auditoria interna comparando contagens autorreportadas e instrumentadas pelo pipeline de implementações descobriu que a lacuna entre os dois tinha fechado substancialmente comparada com os primeiros meses da implementação original.

**Governo.** A primeira tentativa de uma agência de um governo estadual de introduzir métricas de engenharia tinha sido inteiramente abandonada dois anos antes depois de um único incidente em que um gestor tinha informalmente referenciado os dados de atividade de um indivíduo numa conversa de desempenho, um incidente isolado mas não abordado que tinha envenenado a confiança em toda a iniciativa em toda a agência durante anos depois, com o pessoal ainda a referenciar "aquela coisa das métricas" com ceticismo visível muito depois de o programa original ter sido silenciosamente arquivado. Um novo programa, deliberadamente relançado, abordou esta história explícita e publicamente, reconhecendo a má gestão passada, comprometendo-se a uma política específica e publicada de não utilização punitiva com um patrocinador executivo nomeado e responsável, e estabelecendo um protocolo rápido e transparente de resposta para qualquer futura preocupação de má utilização. Este reconhecimento explícito de fracasso passado, em vez de simplesmente relançar como se o histórico não existisse, foi especificamente creditado por representantes de pessoal como a razão pela qual a segunda tentativa ganhou confiança genuína onde a primeira não tinha conseguido.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de uma implementação que constrói confiança e evita o medo é, muito simplesmente, dados confiáveis, sem os quais todo o trabalho cuidadoso de design de métricas de cada outro capítulo deste livro não produz nada de valor real. O exemplo empresarial acima mostra isto concreta e mensuravelmente: os dados do programa relançado eram demonstravelmente mais precisos do que os dados da implementação original e impulsionada pelo medo tinham sido, um retorno direto e quantificável sobre o investimento adicional de construção de confiança.

O custo total de propriedade é principalmente tempo e paciência organizacional: o período alargado de prova com prioridade diagnóstica, o esforço de envolvimento de equipa no design, e a disciplina sustentada de responder rápida e visivelmente a qualquer incidente de má utilização. Esse custo é significativo mas é o preço necessário e inevitável dos dados confiáveis de que cada outro capítulo deste livro depende; uma implementação rápida que salta este investimento produz um programa de métricas que parece completo mas é silenciosamente sem valor, corrompido exatamente pela manipulação contra a qual este livro tem alertado desde o seu primeiríssimo capítulo substantivo.

## Antipadrões e armadilhas

- **Uma implementação de cima para baixo sem nenhum envolvimento da equipa no design de métricas:** provoca medo e manipulação desde o início, independentemente de quão bem as próprias métricas são desenhadas.
- **Comunicação reativa em vez de proativa de propósito e não-objetivos:** deixa a especulação ansiosa preencher o vácuo e moldar impressões precoces e difíceis de reverter.
- **Apressar-se para a utilização avaliativa antes de ter decorrido um período genuíno de confiança apenas diagnóstica:** a forma única mais comum como um novo programa de métricas provoca imediatamente comportamento de manipulação.
- **Uma resposta silenciosa e não abordada a um incidente de má utilização de métrica:** confirma exatamente o medo que impulsiona a manipulação e causa dano duradouro à confiança em todo o programa.
- **Manter a lógica de salvaguarda e prevenção de manipulação uma preocupação privada de gestão:** perde a oportunidade de construção de confiança de raciocínio transparente e partilhado com as equipas a serem medidas.
- **Relançar um programa de métricas anteriormente mal gerido sem reconhecer diretamente o fracasso passado:** repete o erro original de transparência insuficiente, desta vez agravado por histórico não abordado.

## Modelo de maturidade

- **Nível 1, Iniciar:** As métricas são implementadas de cima para baixo sem nenhum envolvimento da equipa, e o propósito e os não-objetivos são comunicados reativamente, se é que o são.
- **Nível 2, Desenvolver:** Ocorre alguma comunicação e envolvimento da equipa, mas não há período sustentado de prova apenas diagnóstica e nenhum protocolo claro de resposta a má utilização.
- **Nível 3, Padronizar:** Os novos programas de métricas são consistentemente implementados com comunicação proativa, envolvimento da equipa no design, e um período comprometido de prova apenas diagnóstica em toda a organização.
- **Nível 4, Gerir:** Existe um protocolo rápido, transparente, e testado de resposta a má utilização e já foi exercitado, e o raciocínio de salvaguarda é partilhado abertamente com as equipas medidas como prática padrão.
- **Nível 5, Orquestrar:** A organização tem um historial demonstrado e sustentado de dados confiáveis e com baixa manipulação de métricas, diretamente atribuível à prática disciplinada e de construção de confiança de implementação, e este historial é ativamente protegido e reforçado com cada nova métrica introduzida.

## Ideias para debate

1. O propósito do nosso atual programa de métricas foi comunicado antes ou depois de surgirem preocupações?
2. As pessoas a serem medidas foram genuinamente envolvidas no design das nossas métricas, ou o sistema foi imposto?
3. A nossa organização alguma vez geriu mal uma métrica punitivamente, e como respondemos?
4. As equipas medidas compreendem porque as nossas salvaguardas existem, ou esse raciocínio é mantido privado?
5. Se relançássemos o nosso programa de métricas hoje com atenção total a este capítulo, o que faríamos diferente?

## Principais conclusões

- **O medo corrompe os dados mais depressa e mais completamente do que qualquer falha técnica** no design de métricas; uma métrica perfeitamente desenhada implementada mal ainda é manipulada.
- **Envolva as equipas medidas diretamente no design de métricas**, e comunique o propósito e os não-objetivos explícitos proativamente, antes da implementação.
- **Comece apenas diagnóstico e prove-o ao longo de múltiplos ciclos** antes de sequer considerar qualquer utilização avaliativa.
- **Responda ao primeiro incidente mal gerido imediata e visivelmente**; o silêncio confirma exatamente o medo que impulsiona o comportamento de manipulação.
- **Partilhe o raciocínio de salvaguarda e prevenção de manipulação transparentemente** com as equipas medidas, construindo parceria em vez de uma relação de policiamento.

## Referências e leituras adicionais

- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink.
- *The Tyranny of Metrics*, de Jerry Z. Muller.
- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy Beyer, Chris Jones, Jennifer Petoff, e Niall Richard Murphy, eds.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
