# 7.3 Riscos de inflação de métricas e diluição de qualidade

## Visão geral e motivação

Este tema nomeia, direta e especificamente, os dois modos de falha contra os quais o tema 7.1 alertava que todo o enquadramento deste livro se tem de proteger à medida que o desenvolvimento assistido por IA se torna prática padrão: **inflação de métricas**, números a subir sem valor real correspondente, e **diluição de qualidade**, uma erosão gradual na qualidade de código que ultrapassa a capacidade atual da indústria para a detetar através das práticas existentes de revisão e teste. Estas não são novas categorias de risco que este livro ainda não tenha nomeado, a inflação de métricas é a lei de Goodhart do tema 1.2 e a manipulação por substituição do tema 1.2 aplicadas em escala, e a diluição de qualidade é a lacuna de eficácia de cobertura do tema 4.2 e a preocupação de defeitos escapados do tema 5.1, ambas intensificadas. O que é novo é a velocidade e a escala às quais a IA generativa consegue produzir ambos os modos de falha simultaneamente, mais depressa do que as salvaguardas existentes da maioria das organizações foram desenhadas para apanhar.

O mecanismo específico com que este tema se preocupa é subtil: o código gerado por IA parece muito frequentemente correto. Segue idiomas familiares, usa nomes plausíveis de variáveis, e passa uma leitura superficial muito mais fiavelmente do que o código genuinamente descuidado escrito por humanos tipicamente faz, precisamente porque foi treinado num vasto corpus de código que parecia correto. Isto torna os defeitos gerados por IA mais difíceis de um revisor humano apanhar através do tipo de revisão por correspondência de padrões, isto-parece-correto, que apanha muitos bugs introduzidos por humanos, porque a versão gerada por IA é especificamente otimizada, num sentido estatístico, para parecer correta quer realmente o seja quer não.

Para equipas grandes, os riscos deste tema agravam-se com a escala de uma forma que deveria preocupar especificamente as organizações empresariais e governamentais: a inflação de métricas através de dezenas de equipas simultaneamente pode produzir um falso sinal em toda a organização de produtividade melhorada que leva tempo e análise significativos a desfazer, exatamente como o exemplo de tecnologia financeira do tema 7.1 mostrou. A diluição de qualidade que ultrapassa a capacidade de deteção é ainda mais séria em contextos regulados, críticos para a segurança, ou de confiança pública, onde o custo de um defeito não detetado a chegar à produção carrega consequências bem para além da preocupação imediata de engenharia.

## Princípios-chave

- **A inflação de métricas e a diluição de qualidade são versões intensificadas de riscos que este livro já nomeou**, não categorias inteiramente novas; as salvaguardas existentes ainda se aplicam, mas precisam de trabalhar mais arduamente.
- **A qualidade de "parece correto" do código gerado por IA torna-o especificamente mais difícil para a revisão humana por correspondência de padrões apanhar defeitos subtis.** Este é um risco distinto do erro humano comum.
- **A velocidade desta mudança pode ultrapassar a capacidade de uma organização de adaptar as suas salvaguardas**, criando uma janela genuína e limitada no tempo de exposição.
- **As métricas existentes de qualidade (Parte 4) permanecem valiosas mas podem precisar de recalibração**, não substituição, à luz deste novo perfil de risco.
- **A própria capacidade de deteção precisa de investimento deliberado**, já que as práticas de revisão e teste que este livro cobre foram desenhadas antes de este risco específico existir a esta escala.

## Recomendações

### Recalibre a taxa de falha de mudanças e os limiares de defeitos escapados para trabalho intensivo em IA

Onde uma equipa ou área de código adotou intensivamente a assistência de IA, aplique o rastreio ponderado por gravidade dos temas 2.4 e 5.1 com sensibilidade reforçada, pelo menos até a sua organização ter construído evidência suficiente (tema 7.2) para saber se a relação histórica entre estas métricas e o risco genuíno ainda se mantém inalterada especificamente para trabalho assistido por IA. Trate esta recalibração como uma postura temporária de recolha de evidência, não uma suposição permanente e não examinada em qualquer direção.

### Invista especificamente em capacidade de deteção que resista ao problema de "parece correto"

A revisão tradicional de código, que depende fortemente do reconhecimento de padrões de um revisor sobre o que parece correto, está especificamente enfraquecida contra código gerado por IA de aspeto plausível mas subtilmente incorreto. Invista correspondentemente mais em métodos de deteção que não dependem de correspondência visual de padrões: o [teste de mutação](https://en.wikipedia.org/wiki/Mutation_testing) (tema 4.2), que testa comportamento real em vez de aparência, e o teste baseado em propriedades ou invariantes, que verifica correção lógica em vez de plausibilidade superficial, tornam-se ambos desproporcionadamente mais valiosos especificamente por causa desta mudança.

### Fique atento à inflação de métricas através de todo o pipeline de entrega, não apenas no ponto de geração de código

A inflação de métricas do desenvolvimento assistido por IA não se confina à fase de codificação; pode propagar-se através de toda a cadeia de tempo de ciclo (tema 2.6): um volume maior de pedidos de incorporação de mudanças gerados por IA pode inflacionar as métricas de rendimento de pedidos de incorporação de mudanças (tema 2.9) mesmo enquanto o sinal útil que essa métrica foi originalmente desenhada para capturar, rendimento genuíno de equipa, se mantém plano ou até diminui uma vez que o fardo de revisão e o custo de correção são devidamente contabilizados. Audite o seu conjunto completo de métricas quanto a este padrão de propagação, não apenas as métricas mais óbvias e diretamente adjacentes à IA.

### Construa um plano explícito e limitado no tempo de recalibração em vez de uma postura permanente de suspeita

O escrutínio reforçado que este tema recomenda é apropriado durante um período ativo de adoção e incerteza, mas não deveria tornar-se um imposto permanente e não examinado sobre o trabalho assistido por IA indefinidamente. À medida que a sua organização constrói evidência real através da disciplina de medição do tema 7.2, reveja os limiares e salvaguardas com base no que essa evidência realmente mostra, apertando mais onde o risco é confirmado, relaxando onde não é, em vez de ou ignorar o risco inteiramente ou tratar cada peça de código assistido por IA com suspeita permanente e não diferenciada independentemente da evidência acumulada.

### Comunique este risco transparentemente em vez de o tratar como uma razão para resistir à adoção de IA

Enquadre a orientação deste tema como gestão de risco para uma nova capacidade genuinamente valiosa, não como um argumento contra o desenvolvimento assistido por IA em geral. Uma organização que comunica estes riscos específicos e nomeados claramente e constrói salvaguardas proporcionais contra eles, exatamente como este livro recomenda para toda a outra métrica e técnica que cobre, adota a assistência de IA mais seguramente e mais sustentavelmente do que uma que ou ignora o risco ou o trata como uma razão para resistência geral a um conjunto genuinamente útil de ferramentas.

## Trocas: prós e contras

| Abordagem | Prós | Contras |
| --- | --- | --- |
| Nenhuma recalibração, tratar o trabalho assistido por IA de forma idêntica ao código escrito por humanos | Simples, nenhuma mudança de processo | Perde um perfil específico e sugerido por evidência de risco elevado |
| Escrutínio geral e permanente de todo o código assistido por IA | Maximiza a redução de risco a curto prazo | Imposto insustentável sobre uma capacidade genuinamente valiosa; ignora evidência acumulada |
| Recalibração limitada no tempo e orientada por evidência | Equilibra a gestão de risco com adoção sustentável | Exige disciplina contínua de medição (tema 7.2) para saber quando relaxar o escrutínio |
| Investimento em métodos de deteção resistentes a defeitos de "parece correto" | Aborda o novo risco específico direta e duradouramente | Exige investimento inicial em infraestrutura de teste de mutação e baseado em propriedades |

A tensão central é **cautela versus velocidade de adoção**. A cautela excessiva e permanente desperdiça grande parte do valor genuíno do desenvolvimento assistido por IA; a cautela insuficiente arrisca a inflação de métricas e a diluição de qualidade que este tema nomeia, potencialmente em escala significativa antes da deteção. Resolva a tensão através da abordagem limitada no tempo e orientada por evidência que este tema recomenda: escrutínio reforçado agora, calibrado para baixo ou para cima à medida que a evidência real da disciplina de medição do tema 7.2 se acumula, em vez de ou uma política geral permanente ou uma suposição não examinada de que nada mudou.

## Perguntas para debater com a sua equipa

1. **Recalibrámos os nossos limiares de taxa de falha de mudanças ou defeitos escapados para trabalho intensivo em IA, ou estamos a aplicar limiares da era pré-IA sem mudança?** Se inalterados, discuta se isso reflete uma decisão deliberada e baseada em evidência ou simplesmente uma ausência de atenção à questão.

2. **Temos métodos de deteção, como teste de mutação, que não dependem da correspondência visual de padrões de um revisor, ou o nosso processo de revisão depende inteiramente de olhos humanos a avaliar se o código "parece correto"?** Esta é a vulnerabilidade específica que este tema identifica; avalie a sua capacidade atual de deteção contra ela honestamente.

3. **A inflação de métricas propagou-se para além da fase de codificação para as nossas métricas de pedido de incorporação de mudanças ou implementação, e atualmente notaríamos se tivesse?** Percorra toda a sua cadeia de tempo de ciclo procurando este padrão de propagação, não apenas o ponto mais óbvio de origem.

4. **O nosso escrutínio atual reforçado de código assistido por IA, se existir, baseia-se em evidência acumulada, ou é uma predefinição não examinada e indefinida que nunca foi reconsiderada?** Discuta que evidência precisaria de acumular-se antes de considerar relaxar ou apertar mais as salvaguardas atuais.

5. **Como comunicamos os riscos deste tema internamente: como uma razão para cautela e salvaguardas proporcionais, ou como um argumento implícito contra a adoção de IA em geral?** Seja honesto sobre como esta conversa está realmente a ser recebida pela sua equipa, já que uma mensagem recebida como resistência geral raramente produz a resposta proporcional e baseada em evidência que este tema recomenda.

6. **Como seria a nossa organização descobrir, apenas após escala significativa, que tanto a inflação de métricas como a diluição de qualidade tinham estado a acontecer simultaneamente e não detetadas?** Este cenário concreto e algo desconfortável vale a pena ser nomeado explicitamente como a falha específica que as salvaguardas deste tema foram construídas para prevenir.

## Perspetiva setorial

**Startup.** A adoção rápida com capacidade limitada de revisão torna os riscos deste tema particularmente agudos para uma equipa pequena; o problema de deteção de "parece correto" é mais difícil de apanhar com menos revisores, menos especializados. Invista cedo em pelo menos teste de mutação leve nos seus caminhos de código mais críticos, mesmo que cobertura abrangente ainda não seja viável.

**Pequena empresa.** Os processos formais de recalibração são provavelmente desnecessários a esta escala, mas uma consciência simples e explícita de que o código gerado por IA merece uma leitura ligeiramente mais cética do que o normal, especificamente porque tende a parecer mais confiantemente correto do que pode realmente ser, não custa nada e aborda diretamente a preocupação central deste tema.

**Empresa.** Tanto a inflação de métricas como a diluição de qualidade agravam-se significativamente à escala, já que um falso sinal ou um problema não detetado de qualidade através de dezenas de equipas simultaneamente é muito mais consequente e muito mais difícil de desfazer do que o mesmo problema numa única equipa. Invista deliberadamente em atualizações de capacidade de deteção em toda a organização (infraestrutura de teste de mutação, adoção de teste baseado em propriedades) e na disciplina de recalibração limitada no tempo que este tema recomenda, rastreada centralmente.

**Governo.** As consequências da diluição não detetada de qualidade são particularmente sérias em contextos regulados, críticos para a segurança, ou de confiança pública comuns em sistemas governamentais. Aplique escrutínio reforçado e orientado por evidência especificamente a mudanças assistidas por IA em caminhos de código de alta consequência (a lógica de ponderação de exposição e explorabilidade do tema 6.4 aplica-se similarmente aqui), e esteja preparado para demonstrar, a um auditor ou órgão de supervisão, exatamente que capacidade de deteção existe contra este risco específico.

## Exemplos

**Empresa.** A equipa de engenharia de processamento de sinistros de uma seguradora adotou amplamente a assistência de codificação de IA e, seis meses depois, notou um aumento gradual mas mensurável em defeitos escapados especificamente em lógica condicional complexa, o tipo de código onde o tratamento subtilmente errado de casos limite é tanto mais fácil para as ferramentas de IA gerarem plausivelmente como mais difícil para um revisor apanhar apenas por inspeção. Uma investigação confirmou o padrão de "parece correto" que este tema descreve: o código defeituoso tinha usado consistentemente padrões idiomáticos e de aspeto familiar que passavam a revisão sem desencadear o tipo de escrutínio que uma peça obviamente invulgar ou estranha de código escrito por humanos poderia ter recebido. A resposta da equipa direcionou o teste de mutação especificamente para lógica condicional complexa em toda a empresa, um método de deteção resistente ao problema de plausibilidade superficial, e mediu uma redução significativa nesta categoria específica de defeito dentro de dois trimestres.

**Governo.** Uma autoridade fiscal a pilotar desenvolvimento assistido por IA para um subconjunto do seu trabalho de manutenção de motor de cálculo construiu a disciplina de recalibração limitada no tempo que este tema recomenda desde o início, definindo um período explícito de seis meses de recolha de evidência com requisitos reforçados de revisão especificamente para mudanças assistidas por IA à lógica de cálculo. A evidência recolhida não mostrou nenhuma diferença estatisticamente significativa na taxa de defeitos para mudanças bem delimitadas e estreitas, mas confirmou um risco elevado para mudanças assistidas por IA mais amplas e arquiteturalmente mais significativas. A política resultante da agência relaxou o escrutínio reforçado para a categoria de mudança estreita enquanto mantinha e até fortalecia para mudanças arquiteturalmente significativas, um resultado proporcional e baseado em evidência que nem o extremo de "nenhuma recalibração" nem o de "escrutínio geral permanente" teria produzido.

## Argumento de negócio: motivações, ROI, e TCO

O retorno de se proteger deliberadamente contra a inflação de métricas e a diluição de qualidade é evitar exatamente o cenário que o exemplo da seguradora acima mostra: um problema não detetado e gradualmente agravante de qualidade que custa muito mais a descobrir e remediar posteriormente do que o investimento de deteção, infraestrutura de teste de mutação especificamente direcionada ao código de mais alto risco, teria custado proativamente.

O custo total de propriedade inclui o investimento em capacidade de deteção que este tema recomenda e a disciplina contínua de recalibração baseada em evidência em vez de qualquer extremo, suspeita permanente ou desatenção permanente. Esse custo é modesto e limitado no tempo relativamente ao risco de um problema significativo e em escala de qualidade passar não detetado especificamente porque foi concebido, pela natureza de como estas ferramentas geram código, para parecer correto aos processos de revisão que uma organização já tinha em vigor.

## Antipadrões e armadilhas

- **Aplicar limiares e métodos de deteção da era pré-IA sem mudança:** perde um perfil específico e sugerido por evidência de risco elevado.
- **Depender inteiramente de revisão humana por correspondência de padrões para código gerado por IA:** especificamente vulnerável ao problema de "parece correto" que este tema identifica.
- **Perder a propagação de inflação de métricas para além do ponto de geração de código:** um falso sinal pode espalhar-se por todo o pipeline de entrega não detetado.
- **Escrutínio geral permanente e não examinado sem recalibração baseada em evidência:** desperdiça grande parte do valor genuíno do desenvolvimento assistido por IA insustentavelmente.
- **Comunicar os riscos deste tema como resistência geral à adoção de IA em vez de gestão proporcional de risco:** mina tanto a segurança como a adoção.
- **Nenhum investimento em capacidade de deteção especificamente direcionado a este novo perfil de risco:** deixa a organização dependente de métodos de revisão que este tema mostrou estarem especificamente enfraquecidos contra ele.

## Modelo de maturidade

- **Nível 1, Iniciar:** Nenhuma consciência de risco de inflação de métricas ou diluição de qualidade específico do desenvolvimento assistido por IA; as salvaguardas e métodos de deteção existentes são aplicados sem mudança.
- **Nível 2, Desenvolver:** Existe alguma consciência, mas a recalibração é ad hoc e o investimento em capacidade de deteção específico a este risco não foi feito.
- **Nível 3, Padronizar:** Os limiares recalibrados e os métodos de deteção resistentes ao problema de "parece correto" (teste de mutação e baseado em propriedades) são aplicados consistentemente ao trabalho assistido por IA.
- **Nível 4, Gerir:** Uma disciplina limitada no tempo e orientada por evidência de recalibração ajusta ativamente o escrutínio com base em dados acumulados, e a propagação de inflação de métricas é ativamente monitorizada através de todo o pipeline.
- **Nível 5, Orquestrar:** A organização tem uma postura madura, proporcional, e continuamente evolutiva de gestão de risco em direção ao desenvolvimento assistido por IA, comunicada transparentemente, que nem desperdiça o seu valor através de cautela excessiva nem expõe a organização a diluição não detetada de qualidade.

## Ideias para debate

1. Vimos alguma evidência precoce do padrão de defeito "parece correto" no nosso próprio código assistido por IA?
2. Que método de deteção abordaria mais diretamente o risco específico deste tema para nós?
3. A inflação de métricas da assistência de IA propagou-se para alguma das nossas métricas a jusante do pipeline?
4. O nosso escrutínio atual de código assistido por IA é baseado em evidência ou uma predefinição não examinada?
5. Como está a orientação deste tema realmente a ser recebida pela nossa equipa: como gestão de risco ou como resistência à adoção de IA?

## Principais conclusões

- A inflação de métricas e a diluição de qualidade são **versões intensificadas de riscos que este livro já nomeia**, exigindo que as salvaguardas existentes trabalhem mais arduamente, não enquadramentos inteiramente novos.
- A tendência do código gerado por IA de **"parecer correto"** enfraquece especificamente a revisão humana tradicional de código por correspondência de padrões.
- Invista em **métodos de deteção resistentes à plausibilidade superficial**, particularmente teste de mutação e baseado em propriedades.
- Aplique uma postura de **recalibração limitada no tempo e orientada por evidência**, não suspeita geral permanente ou confiança permanente não examinada.
- **Comunique este risco como gestão proporcional de risco**, não como um argumento contra a adoção de IA, para apoiar tanto a segurança como a utilização sustentável.

## Referências e leituras adicionais

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez Humble, e Gene Kim.
- Jia, Yue, e Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011).
- Investigação da GitHub sobre programação em par com IA e produtividade de programadores.
- *The Tyranny of Metrics*, de Jerry Z. Muller.
