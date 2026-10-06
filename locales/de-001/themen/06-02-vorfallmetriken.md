# 6.2 Vorfallmetriken: Erkennung, Reaktion, und Wiederherstellung

## Überblick und Motivation

Dieses Thema misst, was geschieht, wenn das Fehlerbudget aus Thema 6.1 durch ein tatsächliches Versagen ausgegeben wird: ein **Vorfall**, ein ungeplantes Ereignis, das einen Dienst verschlechtert oder unterbricht. Vier Metriken bilden das Standardvokabular, um zu messen, wie gut eine Organisation dies handhabt: **mittlere Zeit bis zur Erkennung (MTTD)**, wie lange, bevor die Organisation bemerkt, dass etwas nicht stimmt; **mittlere Zeit bis zur Bestätigung (MTTA)**, wie lange, bevor jemand Eigentümerschaft für die Reaktion übernimmt; **mittlere Zeit bis zur Lösung** oder **Wiederherstellung (MTTR)**, wie lange, bis der Dienst wiederhergestellt ist, dasselbe Konzept, das Thema 2.10 speziell für deployment-verursachte Ausfälle behandelte, jetzt verallgemeinert auf jeden Vorfall unabhängig von der Ursache; und **Vorfallhäufigkeit**, einfach, wie oft Vorfälle überhaupt auftreten.

Das zentrale Anliegen dieses Themas, die Behandlung der Änderungsfehlerrate aus Thema 2.10 widerhallend, ist, dass diese Zahlen nur so vertrauenswürdig sind wie die organisatorische Kultur rund um ehrliche Meldung und Klassifikation von Vorfällen. Ein Team, das Schuld für einen Vorfall fürchtet, hat jeden Anreiz, unterzumelden, Bestätigung zu verzögern, um nicht „auf der Uhr" zu sein, oder ein schweres Ereignis als gering zu klassifizieren, um seine eigenen Metriken zu schützen. **[Schuldfreie](https://en.wikipedia.org/wiki/Just_culture) Post-Mortem**-Praxis, bei Organisationen wie Etsy entwickelt und in Googles SRE-Literatur formalisiert, existiert speziell, um diesen Anreiz zu entfernen, und dieses Thema behandelt sie als Voraussetzung für vertrauenswürdige Vorfalldaten, keine optionale kulturelle Annehmlichkeit, die über den Metriken geschichtet wird.

Für große Teams enthüllen Vorfallmetriken, ob die Erkennungs- und Reaktionsfähigkeit einer Organisation, das Rollback-Tooling aus Thema 2.10 unter anderen Investitionen, unter echten, variierten Bedingungen tatsächlich funktioniert, nicht nur dem spezifischen deployment-verursachten Ausfallszenario, das jenes Thema behandelte. Konzerne und Behörden, die kritische Infrastruktur betreiben, verlassen sich auf diese Metriken sowohl intern, um echte operative Verbesserung anzutreiben, als auch extern, um Kundinnen und Kunden, Regulierungsbehörden, oder der Öffentlichkeit zu demonstrieren, dass Vorfälle kompetent gehandhabt werden und sich über die Zeit verbessern.

## Kernprinzipien

- **Schuldfreie Kultur ist eine Voraussetzung für vertrauenswürdige Vorfalldaten**, keine optionale Ergänzung; Schuldfurcht korrumpiert Meldung, Bestätigungsgeschwindigkeit, und Schweregradklassifikation gleichermaßen.
- **Erkennung, Bestätigung, und Lösung sind eigenständige Phasen mit eigenständigen Korrekturen.** Eine langsame Gesamtwiederherstellungszeit kann sehr unterschiedliche zugrunde liegende Probleme verbergen, je nachdem, welche Phase tatsächlich langsam ist.
- **Vorfallhäufigkeit und MTTR sind ein gepaartes Signal**, ähnlich DORAs Änderungsfehlerrate und Wiederherstellungszeit (Thema 2.10): keine allein erzählt die volle Geschichte.
- **Schweregradklassifikation braucht dieselbe Strenge wie entwichene-Fehler-Klassifikation** (Thema 5.1): konsistente, dokumentierte Kriterien, kein Ad-hoc-Urteil.
- **Der Wert eines Post-Mortems liegt in systemischem Lernen, nicht in der Produktion einer Zahl.** Die Metrik ist ein Nebenprodukt guter Praxis, nicht deren Ziel.

## Empfehlungen

### Vorfallreaktionszeit in ihre eigenständigen Phasen zerlegen

Erkennungszeit (vom tatsächlichen Beginn des Ausfalls bis jemand es bemerkt), Bestätigungszeit (von der Benachrichtigung bis jemand Eigentümerschaft übernimmt), und Lösungszeit (von Eigentümerschaft bis echter Wiederherstellung) sollten separat gemessen und berichtet werden, statt nur einer einzelnen, gemischten Summe. Jede Phase weist auf eine andere Korrektur hin: langsame Erkennung weist auf eine Monitoring- und Alarmierungslücke hin, langsame Bestätigung weist auf ein Bereitschaftsdienstprozess- oder Eskalationsproblem hin, und langsame Lösung weist auf eine Tooling-, Runbook-, oder Diagnosefähigkeitslücke hin (Thema 2.10 behandelt dies speziell für deployment-verursachte Ausfälle).

### Einen echt schuldfreien Post-Mortem-Prozess aufbauen und schützen

Ein **schuldfreies Post-Mortem** untersucht, was geschah und warum das System es erlaubte, dass es geschah, wobei explizit vermieden wird, einer Einzelperson Schuld für einen Fehler zuzuschreiben, den jede vernünftige Person unter denselben Umständen, mit derselben Information, plausibel hätte machen können. Diese Disziplin sollte aktiv geschützt werden: Führung, die nicht-punitive Reaktionen auf Vorfälle vorlebt, eine explizite schriftliche Richtlinie, und die Gewohnheit zu fragen, „was an unserem System erlaubte dies", statt „wer hat das getan", sind alle notwendige, laufende Investitionen, keine einmalige Richtlinienerklärung.

### Schweregrad mit konsistenten, dokumentierten, auditierten Kriterien klassifizieren

Dieselbe Disziplin, die Thema 5.1 für entwichene Fehler empfiehlt, sollte auf Vorfallschweregradklassifikation angewandt werden: eine feste, dokumentierte Skala, basierend auf tatsächlicher Kunden- oder Geschäftswirkung, konsistent über Teams hinweg angewandt, periodisch auf Drift auditiert. Inkonsistente Klassifikation, manche Teams großzügig, manche streng, macht organisationsweite Vorfalldaten genauso unzuverlässig für Vergleich, wie es inkonsistent klassifizierte Fehlerdaten wären.

### Vorfallhäufigkeit und MTTR zusammen verfolgen, nie isoliert

Eine sich verbessernde MTTR zusammen mit steigender Vorfallhäufigkeit könnte darauf hindeuten, dass ein Team besser im Feuerlöschen wird, während sich die zugrunde liegende Systemzuverlässigkeit tatsächlich verschlechtert; eine fallende Vorfallhäufigkeit zusammen mit sich verschlechternder MTTR könnte darauf hindeuten, dass seltenere, aber schwerere, schwerer zu diagnostizierende Ausfälle häufige geringe ersetzen. Beide sollten zusammen überprüft werden, genau die Geschwindigkeit-und-Stabilität-Paarungsdisziplin aus den DORA-Metriken in Teil 2 widerspiegelnd, um ein ehrliches kombiniertes Bild zu erhalten.

### Systemische Handlungspunkte aus Post-Mortems extrahieren und verfolgen, nicht nur Metriken

Der echte Wert des Post-Mortem-Prozesses sind die spezifischen, systemischen Handlungspunkte, die er produziert: ein fehlender Alarm hinzugefügt, ein Runbook verbessert, ein einzelner Ausfallpunkt entfernt. Diese Handlungspunkte sollten bis zum Abschluss verfolgt werden, mit derselben Disziplin wie der technische-Schuld-Rückstand aus Thema 4.5, da ein Post-Mortem, das Einsicht, aber keine Nachverfolgung produziert, das organisatorische Lernen verschwendet, das der Prozess erfassen soll.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Gemischte, einzelne Vorfallreaktionszeit-Metrik | Einfach zu berichten | Verbirgt, welche spezifische Phase, Erkennung, Bestätigung, Lösung, das tatsächliche Problem ist |
| Phasenzerlegte Vorfallmetriken | Diagnostisch, weist direkt auf die richtige Korrektur hin | Braucht sorgfältigere Instrumentierung jedes Phasenübergangs |
| Schuldorientierter Vorfallreview | Fühlt sich verantwortlich an, befriedigt einen Wunsch, Verantwortung zuzuweisen | Korrumpiert zukünftige Meldeehrlichkeit und behebt selten die tatsächliche systemische Ursache |
| Schuldfreie Post-Mortem-Praxis | Produziert ehrliche Daten und echte systemische Korrekturen | Braucht anhaltende kulturelle Investition und Führungsdisziplin zur Aufrechterhaltung |

Die zentrale Spannung ist **die Anziehungskraft individueller Verantwortlichkeit gegen das praktische Bedürfnis nach ehrlicher Meldung**. Eine Einzelperson nach einem Vorfall zu beschuldigen, kann sich befriedigend anfühlen und wie entschlossene Führung aussehen, aber es korrumpiert zuverlässig die Daten jedes zukünftigen Vorfalls, weil Menschen untermelden, Bestätigung verzögern, oder Schweregrad fehlklassifizieren, sobald sie persönliche Konsequenz fürchten. Die Spannung sollte bewusst und konsistent zugunsten schuldfreier Praxis gelöst werden, mit dem Verständnis, dass echte Verantwortlichkeit daher kommt, das System zu beheben, das ein Versagen erlaubte, nicht die Einzelperson zu bestrafen, die zufällig anwesend war, als es geschah.

## Fragen für die Diskussion im Team

1. **Zerlegen wir Vorfallreaktionszeit in Erkennungs-, Bestätigungs-, und Lösungsphasen, oder verfolgen wir nur eine einzelne gemischte Zahl?** Wenn nur eine gemischte Zahl existiert, sollte ein kürzlicher bedeutsamer Vorfall ausgewählt werden, und versucht werden, die Phasenaufschlüsselung rückwirkend zu rekonstruieren, um zu sehen, was sie enthüllt hätte.

2. **Würde unser Team echt glauben, dass unser Post-Mortem-Prozess schuldfrei ist, oder formt Furcht vor Konsequenz immer noch, wie Vorfälle gemeldet und besprochen werden?** Dies sollte direkt und ehrlich gefragt werden; eine erklärte schuldfreie Richtlinie, die nicht tatsächlich gelebt wird, produziert keine vertrauenswürdigen Daten.

3. **Würden zwei verschiedene Teams den Schweregrad desselben Vorfalls gleich klassifizieren?** Ein echter, mehrdeutiger vergangener Vorfall sollte ausgewählt werden, und Vertreterinnen und Vertreter aus verschiedenen Teams sollten ihn unabhängig klassifizieren, dann sollten die Ergebnisse verglichen werden.

4. **Überprüfen wir Vorfallhäufigkeit und MTTR zusammen, oder erhält eine mehr Aufmerksamkeit als die andere?** Die tatsächliche Berichterstattungspraxis und Überprüfungen sollten auf diese Paarung geprüft werden, dieselbe Disziplin widerspiegelnd, die Thema 2.10 für die DORA-Stabilitätsmetriken empfiehlt.

5. **Welcher Prozentsatz unserer Post-Mortem-Handlungspunkte aus den letzten sechs Monaten wurde tatsächlich abgeschlossen?** Wenn dies derzeit nicht verfolgt wird, ist diese Lücke es wert, benannt zu werden; ein Post-Mortem-Prozess mit niedriger Handlungspunkt-Abschlussrate produziert Einsicht ohne Nachverfolgung.

6. **Hat Schuldfurcht je jemanden dazu gebracht, die Meldung oder Bestätigung eines Vorfalls zu verzögern?** Dies ist eine unbequeme, aber wichtige Frage; eine ehrliche „ja, und hier ist, was geschah"-Antwort ist weit wertvoller für die Gesundheit des Vorfallprozesses als ein reflexives „nein".

## Branchenperspektive

**Startup.** Vorfallreaktion ist mit einem kleinen Team oft notwendigerweise informell, und formale Phasenzerlegung mag zunächst unnötig sein. Die Gewohnheit, die es sich lohnt, früh anzunehmen, sind schuldfreie Diskussionsnormen vom allerersten Vorfall an, da kulturelle Gewohnheiten, die früh gesetzt werden, weit leichter aufrechtzuerhalten sind, als nachträglich einzubauen, sobald sich ein schuldanfälliges Muster etabliert hat.

**Kleinunternehmen.** Ein einfaches, geteiltes Vorfallprotokoll, selbst informell, mit einer grundlegenden Schweregradklassifikation und einer kurzen schuldfreien Retrospektive für alles Bedeutsame, erfasst den größten Teil des Werts dieses Themas, ohne ausgefeiltes Tooling oder eine dedizierte Vorfallmanagementplattform zu brauchen.

**Enterprise.** Konsistente Schweregradklassifikation und echte, anhaltende schuldfreie Kultur sind beide im großen Maßstab schwerer aufrechtzuerhalten, und beide sind essenziell für vertrauenswürdige, vergleichbare Vorfalldaten über Dutzende Teams hinweg. In dokumentierte Klassifikationskriterien, periodisches Auditieren, und aktives Führungsvorleben schuldfreier Reaktion sollte investiert werden, da kulturelle Drift hin zu Schuld ohne bewussten, laufenden Gegendruck graduell einschleicht.

**Behörden.** Vorfälle, die öffentliche Dienste oder kritische Infrastruktur betreffen, begegnen oft externer Prüfung, Medienaufmerksamkeit, oder formaler Untersuchung, was starken Druck hin zu Schuldsuche erzeugt, der interne schuldfreie Praxis direkt untergraben kann, wenn nicht aktiv gemanagt. Eine klare interne schuldfreie Disziplin für echtes systemisches Lernen sollte aufrechterhalten werden, getrennt von jedem externen Rechenschaftsprozess, der einem schweren Vorfall folgen könnte, und diese Unterscheidung sollte den Mitarbeitenden klar kommuniziert werden.

## Beispiele

**Enterprise.** Die Engineering-Kultur eines Zahlungsunternehmens hatte jahrelang informell Vorfälle als etwas behandelt, dessen schnelle Bestätigung zu minimieren war, um nicht verantwortlich auszusehen, was zu konsistent schlechten Erkennungs- und Bestätigungszeiten führte, die die Führung anfänglich unzureichendem Monitoring-Tooling zuschrieb. Ein kultureller Wandel hin zu echt schuldfreien Post-Mortems, einschließlich Führung, die öffentlich und speziell schnelle, ehrliche Vorfallbestätigung lobte statt nur schnelle Lösung zu loben, produzierte eine messbare Verbesserung sowohl in Erkennungs- als auch Bestätigungszeit innerhalb von zwei Quartalen, was enthüllte, dass der ursprüngliche Engpass kulturell gewesen war, Schuldfurcht, statt technisch, unzureichendes Tooling, wie ursprünglich angenommen.

**Behörden.** Die Betriebszentrale einer öffentlichen Verkehrsbehörde hatte historisch fast jede Dienststörung als „gering" in ihrem internen Vorfallprotokoll klassifiziert, ein Muster, das ein neuer Sicherheitsdirektor verdächtig fand, angesichts anhaltender, informeller Beschwerden von Feldpersonal über ernste wiederkehrende Probleme. Eine Untersuchung enthüllte, dass die „gering"-Klassifikation einen lästigen formalen Meldeprozess vermied, der für höhere Schweregrade erforderlich war, was einen unbeabsichtigten Anreiz zur Unterklassifikation schuf. Die Behörde vereinfachte ihre formalen Meldeanforderungen für alle Schweregrade und schützte Mitarbeitende explizit vor Schuld für ehrliche Schweregradmeldung, und nachfolgende Vorfalldaten zeigten eine genauere, und substanziell höhere, Rate echt bedeutsamer Störungen, was der Führung schließlich ein ehrliches Bild gab, gegen das Infrastrukturinvestition priorisiert werden konnte.

## Business Case: Motivation, ROI und TCO

Die Rendite echt schuldfreier, gut klassifizierter, phasenzerlegter Vorfallmetriken sind ehrliche Daten, die tatsächlich systemische Verbesserung antreiben, statt ein tröstliches, aber falsches Bild, produziert durch furchtgetriebene Untermeldung oder Fehlklassifikation. Das Beispiel des Zahlungsunternehmens oben zeigt dies konkret: eine kulturelle Korrektur, keine Tooling-Investition, löste, was die Führung als technisches Erkennungsproblem fehldiagnostiziert hatte.

Die Gesamtbetriebskosten sind größtenteils kulturelle und Prozessinvestition: anhaltendes Führungsengagement für schuldfreie Praxis, dokumentierte und auditierte Schweregradklassifikationskriterien, und die Disziplin, Post-Mortem-Handlungspunkte bis zum Abschluss zu verfolgen. Diese Investition kostet weniger als die Alternative, ein Vorfallmetrikprogramm, das selbstsicher falsche Daten produziert, weil Furcht jeden Eingabewert korrumpiert hat.

## Antipatterns und Fallstricke

- **Schuldorientierter Vorfallreview:** korrumpiert Meldeehrlichkeit, Bestätigungsgeschwindigkeit, und Schweregradklassifikation für jeden zukünftigen Vorfall.
- **Nur eine gemischte Reaktionszeitzahl verfolgen:** verbirgt, welche spezifische Phase, Erkennung, Bestätigung, Lösung, tatsächlich das Problem ist.
- **Inkonsistente Schweregradklassifikation über Teams hinweg:** macht organisationsweite Vorfalldaten unzuverlässig für Vergleich.
- **Vorfallhäufigkeit und MTTR isoliert überprüfen:** übersieht das kombinierte, ehrliche Bild, das das gepaarte Signal liefert.
- **Ein Post-Mortem-Prozess, der Einsicht, aber keine abgeschlossenen Handlungspunkte produziert:** verschwendet das organisatorische Lernen, das der Prozess erfassen soll.
- **Eine erklärte schuldfreie Richtlinie, die von der Führung nicht tatsächlich gelebt wird:** produziert dieselbe furchtgetriebene Datenkorruption wie eine offen schuldorientierte Kultur.

## Reifegradmodell

- **Stufe 1, Initiieren:** Vorfallreaktion ist informell, Meldung ist inkonsistent, und eine schuldanfällige Kultur entmutigt aktiv ehrliche Meldung.
- **Stufe 2, Entwickeln:** Manche Vorfallverfolgung existiert, aber Schweregradklassifikation ist inkonsistent, und schuldfreie Praxis ist erklärt, aber nicht konsistent gelebt.
- **Stufe 3, Standardisieren:** Phasenzerlegte Vorfallmetriken mit konsistenter, dokumentierter Schweregradklassifikation werden organisationsweit verfolgt, mit echt schuldfreier Post-Mortem-Praxis.
- **Stufe 4, Steuern:** Vorfallhäufigkeit und MTTR werden zusammen überprüft, Post-Mortem-Handlungspunkte werden bis zum Abschluss verfolgt, und Klassifikation wird periodisch auf Konsistenz auditiert.
- **Stufe 5, Orchestrieren:** Die Organisation hat eine demonstrierte, anhaltende Erfolgsbilanz schuldfreier Praxis, die ehrliche Daten und echte systemische Korrekturen produziert, und Vorfallmetriken informieren direkt und zuverlässig Zuverlässigkeitsinvestitionsentscheidungen.

## Diskussionsanregungen

1. Würde unser Post-Mortem-Prozess einen ehrlichen Test überstehen, ob er echt schuldfrei ist?
2. Wie sieht die Phasenaufschlüsselung, Erkennung, Bestätigung, Lösung, unseres langsamsten kürzlichen Vorfalls aus?
3. Würden zwei Teams den Schweregrad unseres letzten bedeutsamen Vorfalls gleich klassifizieren?
4. Welcher Prozentsatz unserer kürzlichen Post-Mortem-Handlungspunkte wurde tatsächlich abgeschlossen?
5. Hat Schuldfurcht je geformt, wie ein Vorfall in unserem Team gemeldet oder besprochen wurde?

## Die wichtigsten Erkenntnisse

- **Schuldfreie Post-Mortem-Kultur ist eine Voraussetzung** für vertrauenswürdige Vorfalldaten; Schuldfurcht korrumpiert Meldung, Bestätigungsgeschwindigkeit, und Klassifikation gleichermaßen.
- Reaktionszeit sollte in **Erkennungs-, Bestätigungs-, und Lösungs**phasen zerlegt werden, jede weist auf eine andere Korrektur hin.
- Schweregrad sollte mit **konsistenten, dokumentierten, auditierten Kriterien** klassifiziert werden, die Disziplin der entwichenen Fehler aus Thema 5.1 widerspiegelnd.
- **Vorfallhäufigkeit und MTTR sollten zusammen überprüft werden**, nie isoliert, dieselbe Paarungsdisziplin wie DORAs Stabilitätsmetriken.
- **Post-Mortem-Handlungspunkte sollten bis zum Abschluss verfolgt werden**; die Metrik ist ein Nebenprodukt guter Praxis, nicht deren Ziel.

## Quellen und weiterführende Literatur

- *Site Reliability Engineering: How Google Runs Production Systems*, herausgegeben von Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (schuldfreie Post-Mortem-Praxis und Vorfallmetriken).
- *The Site Reliability Workbook*, herausgegeben von Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, and Stephen Thorne (praktische Vorfallreaktions- und Post-Mortem-Anleitung).
- *The Field Guide to Understanding Human Error*, von Sidney Dekker (der grundlegende Fall für systemische, schuldfreie Fehleruntersuchung).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering Blog (2012): eine frühe, einflussreiche Artikulation schuldfreier Praxis im Software-Betrieb.
