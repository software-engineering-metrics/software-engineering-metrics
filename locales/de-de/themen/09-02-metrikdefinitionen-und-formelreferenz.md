# 9.2 Metrikdefinitionen- und Formelreferenz

Jede Formel aus dem Buch, an einem Ort gesammelt. Jeder Eintrag benennt das Kapitel mit der vollständigen Diskussion, einschließlich ihres Manipulationsrisikos und ihrer Leitplanke. Dies sollte als schnelles Nachschlagewerk genutzt werden, nicht als Ersatz für das Kapitel selbst.

## Flow-Metriken (Teil 2)

| Metrik | Formel | Kapitel |
| --- | --- | --- |
| Flow-Velocity | Anzahl abgeschlossener Flow-Items pro Zeiteinheit | 2.3 |
| Flow-Verteilung | (Abgeschlossene Items eines Flow-Item-Typs) / (Gesamt abgeschlossene Items) x 100 % | 2.3 |
| Flow-Zeit | Zeit vom Eintritt eines Flow-Items in den Wertstrom bis zu seiner Lieferung | 2.4 |
| Flow-Last | Anzahl der Flow-Items, die derzeit aktiv oder wartend im Wertstrom sind | 2.4 |
| Littles Gesetz | Flow-Last (Work in Process) = Ankunftsrate x Flow-Zeit (Zykluszeit) | 2.4, 2.7 |
| Flow-Effizienz | Aktive Arbeitszeit / Gesamtdurchlaufzeit x 100 % | 2.5 |
| Zykluszeit | Summe der Phasendauern: Codieren + Aufnahme + Review + Test + Deployment | 2.6 |
| Auslastung | Ankunftsrate / Bedienrate | 2.7 |
| Percent Complete and Accurate (%C/A) | (Einheiten, nachgelagert ohne Nacharbeit nutzbar) / (Gesamteinheiten) x 100 % | 2.8 |
| Rolled Throughput Yield | %C/A von Phase 1 x %C/A von Phase 2 x ... x %C/A von Phase N | 2.8 |
| Taktzeit | Verfügbare Arbeitszeit / Kundennachfrage über diese Periode | 2.8 |
| Zeit bis zum ersten Review | Zeit vom Öffnen des Pull Requests bis zur ersten substanziellen Prüferantwort | 2.9 |
| Deployment-Frequenz | Anzahl erfolgreicher Produktions-Deployments pro Zeiteinheit | 2.10 |
| Durchlaufzeit für Änderungen | Zeit vom ersten Commit bis zum erfolgreichen Produktions-Deployment (Median und 90. Perzentil berichten) | 2.10 |
| Änderungsfehlerrate | (Deployments, die einen Ausfall verursachen) / (Gesamt-Deployments) x 100 % | 2.10 |
| Wiederherstellungszeit nach fehlgeschlagenem Deployment | Zeit von der Ausfallerkennung bis zur echten Diensterholung | 2.10 |

## Entwicklererfahrung (Teil 3)

| Metrik | Formel | Kapitel |
| --- | --- | --- |
| Fokuszeit | Anzahl und Dauer ununterbrochener Zwei-plus-Stunden-Blöcke pro Woche, aus Kalenderdaten | 3.6 |
| Antwortrate | (Erhaltene Umfrageantworten) / (Gesendete Umfrageeinladungen) x 100 % | 3.7 |

## Code und Qualität (Teil 4)

| Metrik | Formel | Kapitel |
| --- | --- | --- |
| Zyklomatische Komplexität | Unabhängige Pfade durch den Kontrollfluss (Kanten − Knoten + 2, gemäß McCabe) | 4.1 |
| Testabdeckung | (Von Tests ausgeführte Zeilen/Verzweigungen) / (Gesamtzeilen/-verzweigungen) x 100 % | 4.2 |
| Mutations-Tötungsrate | (Von der Testsuite getötete Mutanten) / (Gesamt eingeführte Mutanten) x 100 % | 4.2 |
| Code-Fluktuation | Hinzugefügte + geänderte + gelöschte Zeilen pro Datei über ein Zeitfenster | 4.3 |
| Hotspot-Wert | Fluktuation x Komplexität, pro Datei gerankt | 4.3 |
| Schuld-Tragekosten | Geschätzte laufende Kosten, einen Posten nicht zu beheben (langsamere verwandte Arbeit, erhöhtes Fehlerrisiko) | 4.5 |

## Produkt und Geschäft (Teil 5)

| Metrik | Formel | Kapitel |
| --- | --- | --- |
| Entwichene Fehlerrate | (Schweregrad-gewichtete entwichene Fehler) / (Liefer- oder Zeiteinheit) | 5.1 |
| Anfängliche Akzeptanz | (Nutzerinnen und Nutzer, die das Feature mindestens einmal ausprobierten) / (Zielpublikum) x 100 % | 5.2 |
| Beibehaltene Akzeptanz | (Nutzerinnen und Nutzer, die das Feature nach N Wochen noch nutzen) / (Nutzerinnen und Nutzer, die es anfänglich ausprobierten) x 100 % | 5.2 |
| Einheitskosten | Gesamtkosten (Personal + Infrastruktur + Tooling) / Bedeutsame Einheit (Kunde, Transaktion) | 5.4 |
| ROI | (Gesamtnutzen − Gesamtbetriebskosten) / Gesamtbetriebskosten, als Spanne präsentiert | 5.5 |

## Zuverlässigkeit, Betrieb, und Sicherheit (Teil 6)

| Metrik | Formel | Kapitel |
| --- | --- | --- |
| Fehlerbudget | (1 − SLO-Ziel) x Zeitfenster (z. B. 0,1 % von 30 Tagen ≈ 43 Minuten) | 6.1 |
| Fehlerbudget-Verbrauchsrate | Verbrauchtes Fehlerbudget / Zugeteiltes Fehlerbudget, über ein gegebenes Fenster | 6.1 |
| MTTD | Zeit vom Vorfallbeginn bis zur Erkennung | 6.2 |
| MTTA | Zeit von der Vorfallbenachrichtigung bis zur Bestätigung | 6.2 |
| MTTR (Vorfall) | Zeit von der Bestätigung bis zur echten Diensterholung | 6.2 |
| Bereitschaftsdienst-Page-Verteilung | Erhaltene Pages pro Individuum, über ein gleitendes Fenster (nicht Team-Durchschnitt) | 6.3 |
| Schwachstellen-Behebungszeit | Zeit von der Entdeckung bis zur echten Behebung, nach Schweregrad verfolgt | 6.4 |

## Hinweise zur Nutzung dieser Formeln

- **Eine Geschwindigkeits- oder Output-Formel sollte immer mit ihrer Leitplanke gepaart werden** (Kapitel 1.2): Änderungsfehlerrate mit Deployment-Frequenz und Durchlaufzeit; entwichene Fehlerrate mit Liefergeschwindigkeit; Fehlerbudget-Verbrauch mit Deployment-Aktivität.
- **Mediane und Perzentile sollten genutzt werden, nicht Durchschnitte, für zeitbasierte Formeln** (Kapitel 1.6), sofern eine Formel nicht explizit einen Mittelwert verlangt.
- **Jede Formel braucht ein dokumentiertes Quellsystem und eine Erhebungsmethode** (Kapitel 1.5) zusätzlich zu ihrer mathematischen Definition; zwei Teams, die dieselbe Formel aus unterschiedlichen Quellen berechnen, produzieren keine vergleichbaren Zahlen.
- **Schweregradgewichtung wird nicht explizit in jeder Formel oben gezeigt**, gilt aber, wo immer „schweregrad-gewichtet" erscheint; das relevante Kapitel enthält das vollständige Klassifikationsschema.
