# 6.4 Sicherheits- und Schwachstellenmanagement-Metriken

## Überblick und Motivation

Dieses Kapitel schließt Teil 6 ab, indem es dieselbe Zuverlässigkeitsdisziplin erweitert, die dieser Teil aufgebaut hat, Zielsetzung, Leitplanken-Paarung, ehrliche Vorfallmeldung, auf ein eigenständiges, aber eng verwandtes Risiko: nicht ob ein System von selbst versagt, sondern ob jemand es absichtlich versagen lässt oder ausnutzt. **Schwachstellenmanagement**-Metriken messen, wie gut eine Organisation Sicherheitsschwächen findet und behebt, bevor sie ausgenutzt werden: wie viele Schwachstellen existieren, wie schwerwiegend sie sind, und entscheidend, wie schnell sie behoben werden, sobald entdeckt, da eine bekannte, aber ungepatchte Schwachstelle ein stehendes, quantifizierbares Risiko ist, das die Organisation zu tragen gewählt hat, ob bewusst oder durch Vernachlässigung.

Das zentrale Anliegen dieses Kapitels läuft parallel zur Behandlung statischer-Analyse-Befunde in Kapitel 4.4 direkt: eine rohe Schwachstellenzahl ist eine schlechte Metrik, sie vermischt triviale und kritische Probleme, und sie ist genau denselben Manipulationsrisiken ausgesetzt, Definitionsverengung, Unterdrückung, und Schwellenwertmanipulation, die Kapitel 1.2 allgemein beschreibt. Die spezifische Ergänzung, die Sicherheitsmetriken brauchen, ist Behebungszeit, verfolgt gegen Schweregrad, da eine kritische Schwachstelle, die monatelang ungepatcht sitzt, ein fundamental anderes Risiko darstellt als dieselbe Schwachstelle, gefangen und innerhalb eines Tages behoben, Information, die eine einfache Zahl allein nicht vermitteln kann.

Für große Teams tragen Sicherheitsmetriken Konsequenzen über das unmittelbare technische Risiko hinaus: Konzerne stehen vertraglicher und reputationsbezogener Exposition durch eine Sicherheitsverletzung gegenüber, und Behörden stehen Konsequenzen für nationale Sicherheit, Recht, und öffentliches Vertrauen gegenüber, die Sicherheitsmetriken zu einer Angelegenheit echten öffentlichen Interesses machen, nicht bloß eines internen Engineering-Anliegens. Dieses Kapitel behandelt Schwachstellenmanagement mit derselben Strenge und derselben Leitplanken-Paarungsdisziplin, die dieses Buch durchgängig anwendet, da Sicherheitsmetriken jedem Manipulationsrisiko ausgesetzt sind, das dieses Buch beschreibt, mit entsprechend höheren Einsätzen, wenn diese Manipulation gelingt.

## Kernprinzipien

- **Behebungszeit nach Schweregrad zählt mehr als eine rohe Schwachstellenzahl.** Ein kritisches, monatelang ungepatchtes Problem ist ein fundamental anderes Risiko als dasselbe Problem, schnell gefangen und behoben.
- **Sicherheitsmetriken sind denselben Manipulationsrisiken ausgesetzt wie statische-Analyse-Befunde** (Kapitel 4.4), mit höheren Einsätzen, wenn Manipulation gelingt.
- **Schweregradklassifikation braucht, wo möglich, externe, standardisierte Kriterien**, kein rein internes Urteil, das zu Nachsichtigkeit driften kann.
- **Eine Schwachstelle, schnell offengelegt und behoben, ist ein Zeichen eines gesunden Prozesses, kein zu verbergendes Versagen.** Offenlegung zu bestrafen entmutigt die Meldung, von der dieses gesamte System abhängt.
- **Sicherheitsschuld ist eine Kategorie technischer Schuld** (Kapitel 4.5) und sollte auf derselben expliziten, quantifizierten Basis um priorisierte Behebungskapazität konkurrieren.

## Empfehlungen

### Behebungszeit nach Schweregrad als primäre Metrik verfolgen

Für jede entdeckte Schwachstelle sollte ihr Schweregrad aufgezeichnet werden (unter Nutzung einer standardisierten Skala wie dem [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System), CVSS, wo anwendbar), und die Zeit von der Entdeckung bis zur echten Behebung sollte verfolgt werden, nicht bis ein Ticket geschlossen oder eine Korrektur gemergt, aber noch nicht deployt ist. Explizite Behebungszeitziele nach Schweregrad sollten gesetzt werden, üblich in Tagen für kritische Probleme und Wochen für solche mit niedrigerem Schweregrad gemessen, und Einhaltung gegen diese Ziele sollte als primäre Sicherheitsgesundheitsmetrik verfolgt werden, statt einer rohen, ungewichteten Schwachstellenzahl.

### Standardisierte Schweregradbewertung nutzen statt rein internes Urteil

Wo ein standardisiertes externes Bewertungssystem wie CVSS verfügbar ist, sollte es als primäre Basis für Schweregradklassifikation genutzt werden, statt sich vollständig auf internes, potenziell inkonsistentes Urteil zu verlassen. Dies spiegelt die entwichene-Fehler-Klassifikationsdisziplin aus Kapitel 5.1 und die Vorfallklassifikationsdisziplin aus Kapitel 6.2, hier speziell auf Sicherheit angewandt, und es widersteht demselben Nachsichtigkeitsdrift-Risiko, vor dem jene Kapitel warnen, da ein extern verankerter Wert schwerer still nach unten umzudefinieren ist als ein rein interner.

### Eine echt nicht-punitive Schwachstellenoffenlegungs- und interne Meldekultur aufbauen

Das schuldfreie Post-Mortem-Prinzip aus Kapitel 6.2 sollte direkt auf Sicherheit angewandt werden: eine Ingenieurin oder ein Ingenieur, die oder der eine selbst eingeführte Schwachstelle entdeckt und meldet, oder eine Forscherin oder ein Forscher, die oder der eine extern gefundene verantwortungsvoll offenlegt, sollte behandelt werden, als würde sie oder er einen wertvollen Dienst leisten, nicht ein Versagen gestehen. Offenlegung zu bestrafen, intern oder von externen Forschenden, entmutigt zuverlässig genau die Meldung, von der das gesamte Schwachstellenmanagementsystem abhängt, und treibt echtes Risiko in den Untergrund, statt in einen verwalteten Behebungsprozess.

### Sicherheitsschuld als Kategorie innerhalb des technischen-Schuld-Rückstands behandeln

Bekannte, mit akzeptiertem Risiko behaftete Schwachstellen, bewusst noch nicht behoben aufgrund konkurrierender Prioritäten, sollten in denselben sichtbaren, quantifizierten technischen-Schuld-Rückstand eingebracht werden, der in Kapitel 4.5 beschrieben ist, mit derselben Behebungskosten-gegen-Tragekosten-Rahmung. Dies verhindert, dass Sicherheitsrisiko entweder in einen unsichtbaren, undokumentierten „wir wissen davon"-Status verschwindet oder unfair gegen Feature-Arbeit konkurriert, ohne einen expliziten, quantifizierten Fall für seine Priorität.

### Schwachstellenmetriken mit Expositions- und Ausnutzbarkeitskontext kombinieren

Nicht jede Schwachstelle mit demselben nominellen Schweregradwert trägt dasselbe tatsächliche Risiko: eine kritische Schwachstelle in einem internen Werkzeug ohne externe Netzwerkexposition ist ein anderes Risiko als derselbe nominelle Schweregrad in einem internetzugewandten Service, der Kundendaten handhabt. Wo machbar, sollte Priorisierung nach tatsächlicher Exposition und Ausnutzbarkeitskontext gewichtet werden, nicht Schweregradwert allein, damit sich Behebungskapazität zuerst auf echt höchstriskante Posten konzentriert.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Rohe Schwachstellenzahl | Einfach zu berichten | Vermischt triviale und kritische Probleme; leicht durch Unterdrückung manipulierbar |
| Schweregrad-gewichtete Behebungszeitverfolgung | Spiegelt tatsächliche Risikoexposition über die Zeit wider | Braucht disziplinierte, konsistente Klassifikation und Verfolgung |
| Rein internes Schweregradurteil | Flexibel, auf Kontext zugeschnitten | Anfällig für nachsichtige Drift und Inkonsistenz über Teams hinweg |
| Standardisierte externe Bewertung (z. B. CVSS) plus Kontextgewichtung | Konsistent, extern verankert, resistent gegen Manipulation | Braucht zusätzliche Kontextanalyse für echt genaue Priorisierung |

Die zentrale Spannung ist **Konsistenz gegen Kontext**. Ein rein standardisierter Bewertungsansatz ist konsistent und resistent gegen Manipulation, kann aber echten Kontext übersehen, Exposition und Ausnutzbarkeit, die tatsächliches Risiko bestimmen; ein rein kontextueller, intern beurteilter Ansatz erfasst Nuance, ist aber demselben Nachsichtigkeitsdrift-Risiko ausgesetzt, vor dem dieses Buch für jede andere klassifikationsabhängige Metrik warnt. Die Spannung sollte gelöst werden, indem auf standardisierter Bewertung als konsistente Grundlinie verankert wird, dann dokumentierte, auditierbare Kontextgewichtung darauf angewandt wird, statt eines der beiden Extreme allein.

## Fragen für die Diskussion im Team

1. **Verfolgen wir Behebungszeit nach Schweregrad, oder nur eine rohe Schwachstellenzahl?** Die tatsächliche aktuelle Metrik sollte gezogen werden, und geprüft werden, ob sie ein kritisches, monatelang ungepatchtes Problem von einem innerhalb eines Tages behobenen unterscheidet, da eine rohe Zahl diese sehr unterschiedlich riskanten Situationen identisch behandelt.

2. **Nutzen wir ein standardisiertes externes Schweregradbewertungssystem, oder verlässt sich Klassifikation auf rein internes, potenziell inkonsistentes Urteil?** Falls rein intern, sollte diskutiert werden, was die Einführung eines Standards wie CVSS an der aktuellen Klassifikationspraxis ändern würde.

3. **Würde sich eine Ingenieurin oder ein Ingenieur, die oder der eine Schwachstelle eingeführt und dann gemeldet hat, dabei sicher fühlen, oder würde sie oder er Bestrafung fürchten?** Dies ist die direkte, sicherheitsspezifische Version der schuldfreien-Kultur-Frage aus Kapitel 6.2, und eine ehrliche Antwort hier zählt enorm dafür, ob den Schwachstellendaten überhaupt vertraut werden kann.

4. **Haben wir einen sichtbaren, quantifizierten Rückstand bekannter, mit akzeptiertem Risiko behafteter Schwachstellen, oder wird der „wir wissen davon"-Status still unsichtbar und unadressiert über die Zeit?** Es sollte geprüft werden, ob Sicherheitsschuld mit derselben Strenge verfolgt wird wie der allgemeine technische-Schuld-Rückstand (Kapitel 4.5).

5. **Berücksichtigt unsere Behebungspriorisierung tatsächliche Exposition und Ausnutzbarkeit, oder verlässt sie sich rein auf einen nominellen Schweregradwert, unabhängig vom Kontext?** Ein echtes Beispiel sollte ausgewählt werden, bei dem zwei Schwachstellen mit ähnlichem nominellem Schweregrad sehr unterschiedliches tatsächliches Risiko trugen, und diskutiert werden, ob der aktuelle Prozess sie korrekt priorisiert hätte.

6. **Ist die Schweregradklassifikation einer Schwachstelle je über die Zeit ohne klare Rechtfertigung nach unten gedriftet?** Dies spiegelt das Definitionsmanipulationsmuster, vor dem sowohl Kapitel 1.2 als auch Kapitel 6.2 warnen; eine Stichprobe kürzlicher Klassifikationen sollte auf dieses spezifische Risiko auditiert werden.

## Branchenperspektive

**Startup.** Formale Schwachstellenmanagementprozesse sind sehr früh oft unnötig, aber grundlegendes automatisiertes Abhängigkeits-Scanning und eine einfache, ehrliche interne Meldenorm von Anfang an anzunehmen, kostet wenig und verhindert, dass sich Sicherheitsschuld unsichtbar akkumuliert, bevor das Team die Kapazität hat, sie systematisch anzugehen.

**Kleinunternehmen.** Die meisten modernen Entwicklungsplattformen enthalten kostenloses oder günstiges automatisiertes Schwachstellen-Scanning für Abhängigkeiten; dies sollte früh aktiviert werden, und Behebungszeit sollte für alles als kritisch gekennzeichnete verfolgt werden, selbst ohne dedizierte Sicherheitsfunktion oder ausgefeiltes Tooling.

**Enterprise.** Konsistente, standardisierte Schweregradbewertung und echt nicht-punitive Offenlegungskultur sind beide essenziell und beide im großen Maßstab schwerer aufrechtzuerhalten, wo Inkonsistenz über Dutzende Teams und kulturelle Drift hin zu Schuldsuche nach einem schweren Vorfall konstante Risiken sind. In eine dedizierte Sicherheits-Governance-Funktion sollte investiert werden, um Klassifikationskonsistenz aufrechtzuerhalten und Offenlegungskultur aktiv zu schützen.

**Behörden.** Sicherheitsmetriken schneiden sich hier oft direkt mit nationaler Sicherheit, regulatorischer Compliance, und öffentlichem Vertrauen, und eine schwere, falsch gehandhabte Schwachstelle kann Konsequenzen weit über eine typische Sicherheitsverletzung des privaten Sektors hinaus haben. Rigorose, extern verankerte Schweregradklassifikation sollte aufrechterhalten werden, interne und externe Offenlegungskultur sollte aktiv geschützt werden, und Sicherheitsschuld sollte mit der Transparenz und Priorisierungsstrenge behandelt werden, die dieses Kapitel empfiehlt, da eine undokumentierte, still akzeptierte kritische Schwachstelle in öffentlicher Infrastruktur ein echt schweres, auditierbares Risiko ist.

## Beispiele

**Enterprise.** Das Sicherheitsteam eines Softwareunternehmens hatte jahrelang nur eine rohe Schwachstellenzahl an die Führung berichtet, eine Zahl, die flach getrendet hatte, was ein falsches Gefühl von Stabilität gab. Eine überarbeitete schweregrad-gewichtete Behebungszeitanalyse enthüllte, dass, während die Gesamtzahl flach war, kritische Schwachstellen durchschnittlich über neunzig Tage brauchten, um behoben zu werden, weit über jedem vernünftigen Ziel, weil sie in jedem Planungszyklus erfolglos gegen Feature-Arbeit konkurrierten, ohne dedizierte, geschützte Kapazität. Die Etablierung eines harten 7-Tage-Behebungsziels für kritische Schwachstellen, gestützt durch geschützte Sicherheitsschuld-Behebungskapazität, die das Zuteilungsmodell für technische Schuld aus Kapitel 4.5 widerspiegelte, brachte die durchschnittliche kritische Behebungszeit innerhalb von zwei Quartalen auf unter fünf Tage.

**Behörden.** Eine nationale Infrastrukturbehörde entdeckte, nach einem externen Sicherheitsaudit, dass interne Ingenieurinnen und Ingenieure informell vermieden hatten, Schwachstellen zu melden, die sie in ihrem eigenen Code entdeckten, aus Furcht, es würde sich negativ auf ihre Leistungsbeurteilungen auswirken, eine klare Parallele zum schuldgetriebenen Vorfall-Untermeldungsmuster aus Kapitel 6.2. Die Behörde führte eine explizite, öffentlich kommunizierte Richtlinie ein, die interne Schwachstellenmelderinnen und -melder vor jeder Leistungskonsequenz schützte, direkt nach dem Vorbild schuldfreier Vorfallreaktionspraxis modelliert, und interne Schwachstellenmeldungen stiegen im folgenden Jahr substanziell, ein Ergebnis, das die Führung der Behörde korrekt als Evidenz verbesserter Erkennung und ehrlicher Meldung interpretierte, nicht als Evidenz sinkender Code-Qualität, und so die natürliche, aber falsche Schlussfolgerung vermied, dass eine steigende Zahl bedeuten müsse, dass sich die Dinge verschlechtert hätten.

## Business Case: Motivation, ROI und TCO

Die Rendite rigorosen, gut klassifizierten, ehrlich gemeldeten Schwachstellenmanagements sind vermiedene Verletzungskosten, die für einen schweren Sicherheitsvorfall häufig die Kosten proaktiver Behebung um ein Vielfaches übersteigen, zusammen mit vermiedenem regulatorischem, vertraglichem, und reputationsbezogenem Schaden. Das Beispiel des Softwareunternehmens oben zeigt den spezifischen Mechanismus: Sicherheitsschuld hatte jahrelang still den Priorisierungswettbewerb gegen Feature-Arbeit verloren, genau das Muster, vor dem Kapitel 4.5 für technische Schuld allgemein warnt, bis geschützte Behebungskapazität es direkt behob.

Die Gesamtbetriebskosten umfassen automatisiertes Scan-Tooling, die geschützte Behebungskapazität, die dieses Kapitel zuzuteilen empfiehlt, und die anhaltende kulturelle Investition in nicht-punitive Offenlegungspraxis. Diese Kosten sind bescheiden im Vergleich zu den Kosten einer schweren, erfolgreich ausgenutzten Schwachstelle, die proaktive, gut priorisierte Behebung weit vor ihrer Ausnutzbarkeit gefangen und behoben hätte.

## Antipatterns und Fallstricke

- **Nur eine rohe Schwachstellenzahl verfolgen:** vermischt triviale und kritische Probleme und gibt ein falsches Gefühl von Stabilität oder Krise unabhängig vom tatsächlichen Risiko.
- **Rein internes, nicht standardisiertes Schweregradklassifikation:** anfällig für nachsichtige Drift und Inkonsistenz über Teams hinweg.
- **Schwachstellenoffenlegung bestrafen, intern oder extern:** treibt echtes Risiko in den Untergrund, statt in einen verwalteten Behebungsprozess.
- **Sicherheitsschuld ohne sichtbaren, quantifizierten Rückstand:** verliert den Priorisierungswettbewerb gegen Feature-Arbeit standardmäßig.
- **Allein nach nominellem Schweregradwert priorisieren, Expositions- und Ausnutzbarkeitskontext ignorierend:** lenkt begrenzte Behebungskapazität fehl.
- **Eine steigende Schwachstellenmeldezahl als Evidenz sinkender Qualität interpretieren, ohne zu prüfen, ob sich die Meldung selbst verbessert hat:** eine spezifische Instanz der Störvariablenfalle aus Kapitel 1.6.

## Reifegradmodell

- **Stufe 1, Initiieren:** Schwachstellen werden, wenn überhaupt, als rohe Zahl verfolgt, ohne Schweregradgewichtung, ohne Behebungszeitverfolgung, und mit punitiver Offenlegungskultur.
- **Stufe 2, Entwickeln:** Manche Schweregradklassifikation existiert, aber Standards sind inkonsistent, und Behebungszeit wird nicht gegen explizite Ziele verfolgt.
- **Stufe 3, Standardisieren:** Standardisierte, extern verankerte Schweregradbewertung und explizite Behebungszeitziele nach Schweregrad werden konsistent angewandt, mit echt nicht-punitiver Offenlegungskultur.
- **Stufe 4, Steuern:** Sicherheitsschuld wird in einem sichtbaren, quantifizierten Rückstand mit geschützter Behebungskapazität verfolgt; Priorisierung berücksichtigt Expositions- und Ausnutzbarkeitskontext, nicht Schweregrad allein.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete, messbare Reduktionen der kritischen Behebungszeit verweisen und eine anhaltende, vertrauenswürdige Offenlegungskultur demonstrieren, die ehrliche, umfassende Schwachstellendaten produziert.

## Diskussionsanregungen

1. Wie hoch ist unsere aktuelle durchschnittliche Behebungszeit für kritische Schwachstellen, und erfüllt sie ein explizites Ziel?
2. Würde sich eine Ingenieurin oder ein Ingenieur, die oder der eine Schwachstelle eingeführt hat, dabei sicher fühlen, sie selbst zu melden?
3. Haben wir einen sichtbaren, quantifizierten Rückstand bekannter, mit akzeptiertem Risiko behafteter Sicherheitsschuld?
4. Berücksichtigt unsere Behebungspriorisierung tatsächliche Exposition, oder nur nominellen Schweregrad?
5. Ist eine Schweregradklassifikation je über die Zeit ohne klare Rechtfertigung nach unten gedriftet?

## Die wichtigsten Erkenntnisse

- **Behebungszeit nach Schweregrad** sollte verfolgt werden, nicht eine rohe Schwachstellenzahl, als primäre Sicherheitsgesundheitsmetrik.
- **Standardisierte externe Schweregradbewertung** (wie CVSS) sollte als konsistente Grundlinie genutzt werden, resistent gegen das Nachsichtigkeitsdrift-Risiko, das rein internes Urteil einlädt.
- Eine echt **nicht-punitive Offenlegungskultur** sollte aufgebaut werden; Meldung zu bestrafen treibt echtes Risiko in den Untergrund.
- **Sicherheitsschuld sollte als Kategorie technischer Schuld** behandelt werden (Kapitel 4.5), fair um geschützte Behebungskapazität konkurrierend.
- Priorisierung sollte nach **tatsächlicher Exposition und Ausnutzbarkeit** gewichtet werden, nicht Schweregradwert allein.

## Quellen und weiterführende Literatur

- Die Common-Vulnerability-Scoring-System-(CVSS)-Spezifikation von FIRST.org: das standardisierte Schweregradbewertungs-Framework, auf das dieses Kapitel durchgängig verweist.
- OWASP-Foundation-Ressourcen zu Schwachstellenmanagement und sicherer Software-Entwicklungslebenszyklus-Praxis.
- *Site Reliability Engineering: How Google Runs Production Systems*, herausgegeben von Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (die schuldfreien Kulturprinzipien, die dieses Kapitel auf Sicherheitsoffenlegung anwendet).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning*: maßgebliche Anleitung zur Schwachstellenbehebungspraxis.
