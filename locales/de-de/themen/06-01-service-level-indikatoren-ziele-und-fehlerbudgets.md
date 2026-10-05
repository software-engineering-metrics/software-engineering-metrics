# 6.1 Service-Level-Indikatoren, -Ziele, und Fehlerbudgets

## Überblick und Motivation

**[Site Reliability Engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, die bei Google entwickelte Disziplin, dokumentiert im Buch *Site Reliability Engineering*, trug ein Vokabular bei, auf dem dieses Thema direkt aufbaut: ein **Service-Level-Indikator (SLI)** ist ein direkt gemessenes Signal für die Gesundheit eines Dienstes, Anfragelatenz, Fehlerrate, Verfügbarkeit. Ein **Service-Level-Ziel (SLO)** ist der Zielbereich für diesen Indikator, 99,9 % der Anfragen gelingen innerhalb von 200 Millisekunden, zum Beispiel. Und ein **Fehlerbudget** ist der erlaubte Fehlbetrag, die 0,1 % der Anfragen, die versagen dürfen, behandelt nicht als zu eliminierender Fehler, sondern als ausgebbare Ressource, die bewusst genutzt werden kann, um Risiko einzugehen: eine riskante Änderung auszuliefern, ein Experiment durchzuführen, oder einfach zu akzeptieren, dass perfekte Zuverlässigkeit weder erreichbar noch, über einen bestimmten Punkt hinaus, ihre Kosten wert ist.

Diese letzte Idee, das Fehlerbudget als ausgebbare Ressource statt als auf null zu minimierende Zahl, ist das einzige wichtigste Konzept in diesem Thema und vermutlich in diesem gesamten Teil. Sie löst eine Spannung, die viele Organisationen plagt: Engineering will Features ausliefern und vernünftige Risiken eingehen; Betrieb will maximale Stabilität. Ohne ein geteiltes, quantifiziertes Fehlerbudget wird dies zu einer endlosen, politisch aufgeladenen Verhandlung. Mit einem wird es zu einer einfachen, objektiven Regel: frei ausgeben, während Budget verbleibt, automatisch verlangsamen und Stabilitätsarbeit priorisieren, sobald es erschöpft ist. Dies verwandelt eine philosophische Uneinigkeit in eine arithmetische.

Für große Teams sind SLOs und Fehlerbudgets das, was Zuverlässigkeit messbar und verhandelbar macht, statt eines unerreichbaren, unausgesprochenen Absolutums, das jedes Team still verfehlt, während es sich vage schuldig dabei fühlt. Konzerne nutzen SLOs, um klare, vertragliche Erwartungen zwischen Teams und mit Kunden zu setzen; Behörden, die kritische öffentliche Infrastruktur betreiben, nutzen sie, um verteidigungsfähige, öffentlich rechtfertigbare Zuverlässigkeitsziele zu setzen, statt eines unmöglichen Perfektionsstandards, den kein echtes System aufrechterhalten kann.

## Kernprinzipien

- **100 % Zuverlässigkeit ist das falsche Ziel für fast jedes System.** Sie ist meist unerreichbar, und sie über einen bestimmten Punkt hinaus zu verfolgen, tauscht aktiv Geschwindigkeit gegen keinen bedeutsamen Nutzernutzen.
- **Ein SLO sollte widerspiegeln, was Nutzerinnen und Nutzer tatsächlich bemerken und wonach sie sich richten**, keine willkürliche runde Zahl, gewählt, weil sie beruhigend klingt.
- **Das Fehlerbudget verwandelt Zuverlässigkeit in eine ausgebbare Ressource**, und gibt sowohl Engineering als auch Betrieb eine geteilte, objektive Regel, wann schnell ausgeliefert und wann verlangsamt werden soll.
- **SLIs müssen, wo möglich, aus der tatsächlichen Erfahrung der Nutzerin oder des Nutzers gemessen werden**, nicht nur aus der selbstberichteten Gesundheit eines internen Systems.
- **Das Erschöpfen des Fehlerbudgets löst eine vorab bestimmte, vereinbarte Reaktion aus**, keine Ad-hoc-Debatte jedes Mal, wenn es geschieht.

## Empfehlungen

### SLIs wählen, die echte Nutzererfahrung widerspiegeln

Indikatoren sollten gewählt werden, die so nah wie möglich an der tatsächlichen Nutzererfahrung gemessen werden: Anfrageerfolgsrate und Latenz gemessen am Edge oder Load Balancer, nicht nur interne Dienst-Gesundheitsprüfungen, die „gesund" berichten können, während Nutzerinnen und Nutzer echte Probleme erleben. Ein SLI, der etwas misst, das die Nutzerin oder der Nutzer nie tatsächlich bemerkt, eine interne Komponente, die technisch läuft, während die Gesamtanfrage dennoch fehlschlägt, misst das Falsche, wie einfach er auch zu instrumentieren sein mag.

### Das SLO-Ziel basierend auf dem setzen, was Nutzerinnen und Nutzer tatsächlich brauchen, nicht eine willkürliche runde Zahl

Dem Reflex sollte widerstanden werden, ein Ziel wie „99,99 % Betriebszeit" einfach zu setzen, weil es beeindruckend rigoros klingt. Stattdessen sollte erforscht werden, welches Zuverlässigkeitsniveau Nutzerinnen und Nutzer echt bemerken und wonach sie sich richten, informiert durch historische Vorfalldaten, Nutzerforschung, und die demonstrierten Kosten, jedes zusätzliche Inkrement an Zuverlässigkeit zu erreichen, da der Sprung von 99,9 % zu 99,99 % oft weit mehr Engineering-Aufwand kostet als der Sprung von 99 % zu 99,9 %, für abnehmenden und schließlich vernachlässigbaren nutzerwahrnehmbaren Nutzen.

### Das Fehlerbudget als ausgebbare Ressource mit vorab bestimmter Reaktion auf Erschöpfung behandeln

Das Fehlerbudget sollte direkt aus dem SLO berechnet werden (ein 99,9-%-Verfügbarkeitsziel über 30 Tage erlaubt ungefähr 43 Minuten erlaubter Ausfallzeit), und die Ausgabe dagegen sollte kontinuierlich verfolgt werden. Im Voraus, und vor jedem spezifischen Vorfall, sollte vereinbart werden, was geschieht, wenn das Budget erschöpft ist: eine übliche, wirksame Richtlinie ist, dass Feature-Arbeit pausiert und die Priorität des Teams automatisch zu Zuverlässigkeitsarbeit wechselt, bis sich das Budget erholt. Diese vorab bestimmte Regel entfernt die Notwendigkeit, die Abwägung unter Druck während jedes einzelnen Vorfalls neu zu verhandeln.

### Das Fehlerbudget nutzen, um bewusste, informierte Risikoentscheidungen zu treffen

Ein gesundes, unausgegebenes Fehlerbudget ist nichts, was gehortet werden sollte; es ist Erlaubnis, vernünftige Risiken einzugehen, eine Änderung mit erhöhtem, aber akzeptablem Risiko auszuliefern, ein Chaos-Engineering-Experiment durchzuführen (das Thema zu Chaos Engineering im verwandten Buch `software-engineering-guide` behandelt dies direkt), oder eine riskantere Architekturänderung zu akzeptieren, weil das Budget speziell existiert, um bewusst ausgegeben zu werden, statt unberührt bewahrt zu werden. Ein Fehlerbudget, das nie ausgegeben wird, deutet entweder auf ein übermäßig vorsichtiges Team hin oder ein SLO, das relativ zur tatsächlich erreichten Zuverlässigkeit zu locker gesetzt ist, beides es wert, untersucht zu werden.

### SLOs periodisch überprüfen und revidieren, basierend auf Evidenz, nicht Trägheit

Ein vor Jahren gesetztes SLO mag aktuelle Nutzererwartungen, Systemarchitektur, oder Geschäftsprioritäten nicht mehr widerspiegeln. SLOs sollten in regelmäßigem Rhythmus überprüft werden, wobei historisch erreichte Zuverlässigkeit, Nutzerfeedback, und ob das Ziel noch einen bedeutsamen Abwägungspunkt darstellt, geprüft werden, statt entweder ein leicht erreichbares Ziel, das gestrafft werden könnte, um mehr Geschwindigkeit anderswo zu ermöglichen, oder ein unrealistisches, das das Team effektiv aufgegeben hat zu erreichen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Kein formales SLO (implizit „so zuverlässig wie möglich") | Kein Einrichtungsaufwand | Endlose, ungeerdete Verhandlung zwischen Geschwindigkeit und Stabilität; keine geteilte Regel |
| Aspirationales, sehr hohes SLO (99,99 %+) | Signalisiert Ernsthaftigkeit über Zuverlässigkeit | Oft unnötige Kosten; abnehmende Erträge über das hinaus, was Nutzerinnen und Nutzer tatsächlich bemerken |
| Evidenzbasiertes, nutzererfahrungsgeerdetes SLO | Spiegelt echten Wert wider; verteidigungsfähig und erreichbar | Braucht echte Daten und Analyse, um korrekt gesetzt zu werden |
| Fehlerbudget mit vorab bestimmter Erschöpfungsreaktion | Entfernt Ad-hoc-Verhandlung; objektive, schnelle Entscheidungsfindung | Braucht organisatorisches Einverständnis und Disziplin, die vorab bestimmte Regel tatsächlich zu respektieren |

Die zentrale Spannung ist **Aspiration gegen Erreichbarkeit**. Ein hohes, aspirationales SLO fühlt sich an, als signalisiere es Ernsthaftigkeit über Qualität, aber Zuverlässigkeit über das hinaus zu verfolgen, was Nutzerinnen und Nutzer tatsächlich bemerken, tauscht echte Geschwindigkeit gegen keinen echten Nutzen, und ein unrealistisches Ziel, das das Team nie tatsächlich erreicht, lehrt alle, das SLO überhaupt nicht mehr ernst zu nehmen. Die Spannung sollte gelöst werden, indem das SLO in echter Evidenz geerdet wird, was Nutzerinnen und Nutzer bemerken, was das System historisch erreicht hat, was jedes zusätzliche Inkrement kostet, statt in Aspiration oder dem Wunsch, auf einem Scorecard rigoros auszusehen.

## Fragen für die Diskussion im Team

1. **Ist unser aktuelles SLO in Evidenz darüber geerdet, was Nutzerinnen und Nutzer tatsächlich bemerken, oder wurde es aspirational gesetzt, weil eine hohe Zahl angemessen ernst wirkte?** Der Ursprung des aktuellen Ziels sollte verfolgt werden, falls möglich, und ehrlich bewertet werden, ob es echte Nutzerforschung widerspiegelt oder allein Engineering-Intuition.

2. **Haben wir eine vorab bestimmte, vereinbarte Reaktion auf Fehlerbudget-Erschöpfung, oder wird die Abwägung jedes Mal neu verhandelt, wenn es geschieht?** Wenn die ehrliche Antwort Letzteres ist, ist diese Lücke es wert, geschlossen zu werden, bevor der nächste Vorfall die Debatte unter Druck erzwingt.

3. **Wird unser Fehlerbudget je tatsächlich bewusst ausgegeben, für eine kalkulierte-Risiko-Änderung oder ein Experiment, oder wird es nur je zufällig durch Vorfälle verbraucht?** Ein Budget, das nie bewusst ausgegeben wird, könnte auf ein übermäßig vorsichtiges Team hindeuten, das legitime Chancen verpasst, die das Budget ermöglichen soll.

4. **Werden unsere SLIs aus echter Nutzererfahrung gemessen, oder aus interner Systemgesundheit, die möglicherweise nicht widerspiegelt, was Nutzerinnen und Nutzer tatsächlich erleben?** Die aktuelle Instrumentierung sollte gegen diese spezifische Unterscheidung geprüft werden; dies ist eine übliche Lücke, selbst in ansonsten reifen Zuverlässigkeitsprogrammen.

5. **Wann haben wir unser SLO zuletzt gegen aktuelle Evidenz überprüft, und hat sich irgendetwas geändert, Nutzererwartungen, Systemarchitektur, Geschäftsprioritäten, das eine Revision rechtfertigen würde?** Wenn keine kürzliche Überprüfung erinnerlich ist, ist diese Abwesenheit selbst es wert, diskutiert zu werden.

6. **Was würde es uns kosten, an Engineering-Aufwand, unser aktuelles SLO um eine zusätzliche „Neun" an Zuverlässigkeit anzuheben, und wäre diese Kosten durch irgendeinen echten Nutzernutzen gerechtfertigt?** Diese konkrete Kosten-Nutzen-Rahmung hilft, die Aspiration-gegen-Erreichbarkeit-Spannung in echten Zahlen statt abstrakter Präferenz zu erden.

## Branchenperspektive

**Startup.** Formale SLOs sind sehr früh oft unnötig, wenn das Team direkt und informell auf Zuverlässigkeitsprobleme reagieren kann. Mindestens ein grobes, informelles SLO sollte angenommen werden, sobald echte zahlende Kundinnen und Kunden von Betriebszeit abhängen, da die Disziplin eines expliziten Ziels, selbst eines locker verfolgten, hilft, Zuverlässigkeitsarbeit gegen Feature-Druck früher zu priorisieren, als die meisten jungen Unternehmen denken.

**Kleinunternehmen.** Die meisten modernen Hosting- und Observability-Plattformen berichten grundlegende Betriebszeit- und Latenzdaten mit minimaler Einrichtung; dies sollte genutzt werden, um ein einfaches, erreichbares SLO zu setzen, statt eines aspirationalen, das mit begrenzter operativer Kapazität nicht realistisch verfolgt oder umgesetzt werden kann.

**Enterprise.** SLOs untermauern auf dieser Ebene oft vertragliche Service-Level-Agreements mit echten finanziellen Konsequenzen, was evidenzbasierte Zielsetzung und disziplinierte Fehlerbudget-Verwaltung besonders wichtig macht. In echt nutzererfahrungsgeerdete SLIs sollte investiert werden statt in bequeme interne Gesundheitsprüfungen, und die vorab bestimmte Erschöpfungsreaktionsrichtlinie sollte formal etabliert werden, mit Einverständnis der Führung, bevor sie unter Druck gebraucht wird.

**Behörden.** Zuverlässigkeitsziele des öffentlichen Sektors für kritische Infrastruktur tragen manchmal rechtliches oder regulatorisches Gewicht, und ein unrealistisches, unerreichtes Ziel, das während eines Audits oder eines öffentlichen Vorfalls entdeckt wird, schädigt institutionelle Glaubwürdigkeit bedeutsam. Ziele sollten basierend auf echtem, dokumentiertem Nutzer- und Missionsbedarf gesetzt werden, und öffentlich sollte transparent über die bewusste Abwägung gesprochen werden, die ein Fehlerbudget darstellt, statt einen unerreichbaren Perfektionsstandard zu implizieren.

## Beispiele

**Enterprise.** Ein Cloud-Speicherunternehmen hatte jahrelang „maximale Betriebszeit" ohne formales SLO angestrebt, was zu einer chronischen, ungelösten Spannung zwischen dem Produktteam (das Features schnell ausliefern wollte) und dem Infrastrukturteam (das maximale Vorsicht wollte) führte, in jedem Release-Planungsmeeting neu ausgetragen. Die Annahme eines formalen 99,95-%-Verfügbarkeits-SLOs mit explizitem Fehlerbudget und vorab bestimmter Richtlinie, Feature-Arbeit pausiert automatisch, wenn das Budget erschöpft ist, löste die wiederkehrende Verhandlung vollständig: beide Teams konnten dieselbe Zahl sehen und sich auf dieselbe Regel einigen, und das Unternehmen berichtete einen messbaren Anstieg ausgelieferter Features während Perioden gesunden Budgets, zusammen mit einer messbaren, bewussten Verlangsamung während der zwei Perioden im folgenden Jahr, in denen das Budget echt erschöpft war, genau wie die Richtlinie beabsichtigte.

**Behörden.** Das öffentliche Alarmsystem eines nationalen Wetterdienstes hatte jahrelang unter einer informellen Erwartung „immer verfügbar" operiert, ohne dokumentiertes Ziel und mit erheblichem, unadressiertem operativem Stress auf dem Bereitschaftsdienstteam, das versuchte, einen unausgesprochenen, effektiv unmöglichen Standard zu erfüllen. Ein neu angenommenes formales SLO, 99,9 % Verfügbarkeit mit einer klar kommunizierten öffentlichen Fehlerbudget-Erklärung, gab dem Betriebsteam explizite, verteidigungsfähige Erlaubnis, geplante Wartungsfenster innerhalb des Budgets zu planen, etwas, das die vorherige unausgesprochene „immer verfügbar"-Erwartung politisch schwierig gemacht hatte, selbst wenn echt notwendig für langfristige Systemgesundheit. Öffentliche Kommunikation, die das Fehlerbudget-Konzept direkt erklärte, statt es zu verbergen, wurde günstig als Zeichen ehrlicher, reifer Betriebspraxis aufgenommen, statt als Schwächung des Engagements für Dienstqualität.

## Business Case: Motivation, ROI und TCO

Die Rendite, SLOs und Fehlerbudgets formal anzunehmen, ist, eine sonst endlose, politisch teure Verhandlung zwischen Geschwindigkeit und Stabilität mit einer einzelnen, geteilten, objektiven Regel zu lösen. Das Cloud-Speicher-Beispiel oben zeigt dies konkret: Jahre wiederkehrender, ungelöster Spannung zwischen zwei Teams wurden durch ein einzelnes formales Ziel und eine vorab bestimmte Richtlinie gelöst, was bedeutsame organisatorische Energie freisetzte, die zuvor in die wiederholte Neuverhandlung derselben Abwägung geflossen war.

Die Gesamtbetriebskosten umfassen den Analyseaufwand, ein evidenzbasiertes Ziel korrekt zu setzen, und die Disziplin, die vorab bestimmte Erschöpfungsreaktion selbst unter Druck zu respektieren, ein besonders gewünschtes Feature trotzdem auszuliefern. Diese Disziplinkosten sind echt, aber sie sind weit niedriger als die laufenden Kosten einer ungelösten, chronischen Verhandlung, die organisatorische Energie in jedem Planungszyklus unbegrenzt verbraucht.

## Antipatterns und Fallstricke

- **Ein aspirationales SLO ohne Evidenz dahinter setzen:** produziert ein unrealistisches Ziel, das das Team nicht mehr ernst nimmt, oder ein unnötig teures, das Nutzen verfolgt, den Nutzerinnen und Nutzer nicht bemerken.
- **Keine vorab bestimmte Reaktion auf Fehlerbudget-Erschöpfung:** erzwingt dieselbe schwierige Abwägungsdebatte unter Druck jedes Mal, wenn es geschieht.
- **SLIs aus interner Systemgesundheit statt echter Nutzererfahrung messen:** kann „gesund" berichten, während Nutzerinnen und Nutzer echte Probleme erleben.
- **Ein gesundes Fehlerbudget nie tatsächlich bewusst ausgeben:** kann übermäßige Vorsicht und verpasste legitime Chance anzeigen.
- **Ein Ziel einmal setzen und nie überarbeiten:** ein SLO kann veraltet werden, während sich Nutzererwartungen, Architektur, und Prioritäten ändern.
- **Die Fehlerbudget-Richtlinie als optional unter Druck behandeln:** eine vorab bestimmte Regel, die jedes Mal übergangen wird, wenn es unbequem ist, liefert keinen echten Entscheidungswert.

## Reifegradmodell

- **Stufe 1, Initiieren:** Zuverlässigkeitsziele sind implizit oder aspirational, ohne formales SLO, SLI, oder definiertes Fehlerbudget.
- **Stufe 2, Entwickeln:** Manche Dienste haben ein informelles SLO, aber SLIs spiegeln möglicherweise keine echte Nutzererfahrung wider, und es gibt keine vorab bestimmte Erschöpfungsrichtlinie.
- **Stufe 3, Standardisieren:** Evidenzbasierte SLOs mit echten nutzererfahrungsbasierten SLIs und einer vorab bestimmten Fehlerbudget-Erschöpfungsrichtlinie sind konsistent über kritische Dienste hinweg etabliert.
- **Stufe 4, Steuern:** Fehlerbudgets werden aktiv und bewusst für kalkuliertes Risiko ausgegeben, und SLOs werden in regelmäßigem, evidenzbasiertem Rhythmus überprüft und revidiert.
- **Stufe 5, Orchestrieren:** SLOs und Fehlerbudgets sind organisationsweit als geteilter, objektiver Mechanismus integriert, um Geschwindigkeit und Stabilität auszubalancieren, und die Organisation kann auf spezifische Entscheidungen verweisen, die das Framework ermöglichte, die eine ungeerdete Verhandlung nicht so wirksam gelöst hätte.

## Diskussionsanregungen

1. Ist unser aktuelles SLO in Evidenz geerdet, oder in Aspiration?
2. Haben wir eine vorab bestimmte Reaktion auf Fehlerbudget-Erschöpfung, die wir unter Druck tatsächlich respektieren würden?
3. Wann haben wir zuletzt bewusst ein gesundes Fehlerbudget für ein kalkuliertes Risiko ausgegeben?
4. Messen unsere SLIs echte Nutzererfahrung oder bequeme interne Gesundheitsprüfungen?
5. Was würde es uns kosten, unser SLO um eine zusätzliche „Neun" anzuheben, und wäre diese Kosten gerechtfertigt?

## Die wichtigsten Erkenntnisse

- Ein **Service-Level-Indikator (SLI)** misst echte Nutzererfahrung; ein **Service-Level-Ziel (SLO)** ist sein evidenzbasiertes Ziel; ein **Fehlerbudget** ist der bewusst ausgebbare erlaubte Fehlbetrag.
- **100 % Zuverlässigkeit ist meist das falsche Ziel**; das SLO sollte darin geerdet werden, was Nutzerinnen und Nutzer tatsächlich bemerken und was jedes zusätzliche Inkrement echt kostet.
- Das Fehlerbudget sollte als **ausgebbare Ressource mit vorab bestimmter Erschöpfungsreaktion** behandelt werden, was die Notwendigkeit entfernt, Geschwindigkeit-gegen-Stabilität jedes Mal unter Druck neu zu verhandeln.
- SLIs sollten aus **echter Nutzererfahrung** gemessen werden, nicht nur aus bequemen internen Gesundheitsprüfungen.
- **SLOs sollten periodisch überprüft und revidiert werden**, basierend auf Evidenz, da ein veraltetes Ziel seine Nützlichkeit verliert, während sich das System und seine Nutzerinnen und Nutzer ändern.

## Quellen und weiterführende Literatur

- *Site Reliability Engineering: How Google Runs Production Systems*, herausgegeben von Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (der grundlegende Text, der SLIs, SLOs, und Fehlerbudgets definiert).
- *The Site Reliability Workbook*, herausgegeben von Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, and Stephen Thorne (praktische Anleitung zur Umsetzung von SLOs und Fehlerbudgets).
- *Implementing Service Level Objectives*, von Alex Hidalgo (ein umfassender, praktikerorientierter Leitfaden zum Gestalten und Operationalisieren von SLOs).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Beziehung zwischen Zuverlässigkeitspraxis und Lieferleistung).
