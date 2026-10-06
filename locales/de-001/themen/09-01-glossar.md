# 9.1 Glossar

Definitionen der Begriffe und Akronyme, die im gesamten Buch genutzt werden. Jeder Eintrag benennt das Thema, in dem der Begriff vertiefend eingeführt wird.

**Aktivitätsmetrik.** Eine Zählung von Engineering-Bewegung (Commits, Pull Requests, Codezeilen), die Volumen misst, nicht Wert. Siehe Thema 3.4.

**Änderungsfehlerrate.** Der Prozentsatz von Deployments, die einen Produktionsfehler verursachen, der Behebung erfordert. Eine der vier DORA-Metriken. Siehe Thema 2.10.

**Auslastung.** Der Anteil der verfügbaren Kapazität einer Ressource, der beschäftigt ist, berechnet als Ankunftsrate geteilt durch Bedienrate. Wartezeit wächst scharf, nicht graduell, während sich Auslastung voller Kapazität nähert. Siehe Thema 2.7.

**Bus-Faktor.** Die Anzahl Menschen, die nicht mehr verfügbar sein müssten, bevor ein System oder Wissensstück unwartbar wird. Ein Bus-Faktor von eins ist ein schweres Risiko. Siehe Thema 3.5.

**CVSS (Common Vulnerability Scoring System).** Eine standardisierte Skala zur Bewertung des Schweregrads einer Sicherheitsschwachstelle. Siehe Thema 6.4.

**DevEx (Entwicklererfahrung).** Die breitere, verwandte Rahmung zu SPACE, organisiert um Feedback-Schleifen, kognitive Last, und Flow-Zustand. Siehe Thema 3.7.

**Deployment-Frequenz.** Wie oft ein Team erfolgreich in die Produktion freigibt. Eine der vier DORA-Metriken. Siehe Thema 2.10.

**DORA-Metriken.** Vier Metriken aus dem DevOps Research and Assessment-Programm: Deployment-Frequenz, Durchlaufzeit für Änderungen, Änderungsfehlerrate, und Wiederherstellungszeit nach fehlgeschlagenem Deployment. Siehe Thema 2.10.

**Durchlaufzeit für Änderungen.** Die Zeit vom ersten Commit einer Codeänderung bis zu ihrem erfolgreichen Deployment in Produktion. Eine der vier DORA-Metriken. Siehe Thema 2.10.

**Eitle Metrik.** Eine Metrik, die zuverlässig steigt, beeindruckend aussieht, und keine Entscheidung ändert. Siehe Thema 1.1.

**Einheitswirtschaftlichkeit.** Kosten ausgedrückt pro bedeutsamer Einheit gelieferten Werts (pro Kunde, pro Transaktion), statt als undurchsichtige Summe. Siehe Thema 5.4.

**Entwichener Fehler.** Ein Fehler, der die Produktion erreicht und eine echte Nutzerin oder einen echten Nutzer betrifft, unterschieden von einem im Review oder Testen gefangenen. Siehe Thema 5.1.

**Ergebnis-Telemetrie.** Kontinuierliche, instrumentierte Messung echter Ergebnisse statt Aktivität oder Output. Siehe Thema 7.4.

**Fehlerbudget.** Der erlaubte Fehlbetrag zwischen einem Service-Level-Ziel und 100 % Zuverlässigkeit, behandelt als ausgebbare Ressource. Siehe Thema 6.1.

**FinOps.** Die Disziplin, finanzielle Verantwortlichkeit zu variablen Cloud-Infrastrukturausgaben zu bringen. Siehe Thema 5.4.

**Flow-Effizienz.** Das Verhältnis aktiver Arbeitszeit zu Gesamtdurchlaufzeit für ein Arbeitsstück, das sich durch eine Lieferpipeline bewegt. Siehe Thema 2.5.

**Flow-Framework.** Ein von Mik Kersten geschaffenes Managementmodell, das Softwarelieferung als Wertstrom behandelt und ihn mit vier Flow-Item-Typen und fünf Flow-Metriken misst. Siehe Thema 2.1.

**Flow-Item.** Die Arbeitseinheit des Flow-Frameworks: ein Feature-, Fehler-, Risiko-, oder Schuldposten, bei der Aufnahme klassifiziert. Siehe Thema 2.2.

**Flow-Last.** Die Gesamtzahl der Flow-Items, die derzeit aktiv oder wartend in einem Wertstrom sind, der Name des Flow-Frameworks für Work in Process. Siehe Thema 2.4.

**Flow-Velocity.** Die Anzahl abgeschlossener Flow-Items über eine gegebene Periode, das Durchsatzmaß des Flow-Frameworks. Siehe Thema 2.3.

**Flow-Verteilung.** Der Anteil abgeschlossener Flow-Items, der zu jedem Flow-Item-Typ in einer gegebenen Periode gehört. Siehe Thema 2.3.

**Flow-Zeit.** Die gesamte verstrichene Zeit vom Eintritt eines Flow-Items in den Wertstrom bis zu seiner Lieferung, den gesamten Wertstrom umspannend statt nur Engineering. Siehe Thema 2.4.

**Goodharts Gesetz.** Das Prinzip, dass, wenn ein Maß zum Ziel wird, es aufhört, ein gutes Maß zu sein. Die zentrale, leitende Idee dieses Buches. Siehe Thema 1.2.

**Hotspot.** Eine Datei oder ein Modul, das sowohl häufig geändert wird (hohe Fluktuation) als auch hochkomplex ist, identifiziert durch Hotspot-Analyse. Siehe Thema 4.3.

**Kontrollkarte.** Ein Diagramm, das den normalen Variationsbereich einer Metrik über die Zeit zeigt, genutzt, um eine echte Verschiebung von gewöhnlichem Rauschen zu unterscheiden. Siehe Thema 1.6.

**Leitplanken-Metrik.** Eine gepaarte Gegenmetrik, die nicht verfallen darf, während sich eine incentivierte Metrik verbessert, gestaltet, um Manipulation zu fangen. Siehe Thema 1.2.

**Littles Gesetz.** Der Beweis, dass die durchschnittliche Anzahl Elemente in einer stabilen Warteschlange gleich der durchschnittlichen Ankunftsrate multipliziert mit der durchschnittlichen Zeit ist, die ein Element im System verbringt. Auf Lieferung angewandt, ist Work in Process gleich Ankunftsrate mal Zykluszeit. Siehe Thema 2.7.

**Metrikbaum.** Eine Struktur, die eine Top-Level-Ergebnismetrik durch ihre Treiber hinunter mit den operativen Metriken verbindet, die einzelne Teams besitzen. Siehe Thema 1.3.

**MTTA (mittlere Zeit bis zur Bestätigung).** Die Zeit von der Benachrichtigung eines Vorfalls bis jemand Eigentümerschaft für die Reaktion übernimmt. Siehe Thema 6.2.

**MTTD (mittlere Zeit bis zur Erkennung).** Die Zeit vom tatsächlichen Beginn eines Vorfalls bis jemand bemerkt, dass er aufgetreten ist. Siehe Thema 6.2.

**MTTR (mittlere Zeit bis zur Wiederherstellung / mittlere Zeit bis zur Lösung).** Die Zeit, den Dienst nach einem Ausfall vollständig wiederherzustellen. Genutzt sowohl für deployment-verursachte Ausfälle (Thema 2.10) als auch allgemeine Vorfälle (Thema 6.2).

**Mutationstests.** Eine Technik, die absichtlich kleine, künstliche Fehler in Code einführt, um zu prüfen, ob eine Testsuite sie tatsächlich fängt, als Ergänzung zur Abdeckung. Siehe Thema 4.2.

**Nordstern-Metrik.** Das einzelne Maß, das den Kernwert am besten erfasst, den eine Organisation liefert, an der Spitze eines Metrikbaums sitzend. Siehe Thema 1.3.

**Percent Complete and Accurate (%C/A).** Der Prozentsatz von Einheiten, die ein nachgelagertes Team ohne Nacharbeit verarbeiten kann, aus klassischem Lean-Wertstrom-Mapping. Siehe Thema 2.8.

**Prozesszeit (PT).** Die tatsächliche Hands-on-Zeit, an einer einzelnen Einheit zu arbeiten, unterschieden von Wartezeit, aus klassischem Lean-Wertstrom-Mapping. Siehe Thema 2.8.

**ROI (Kapitalrendite).** Die finanzielle Rendite einer Initiative relativ zu ihren Kosten, hier aus dokumentierter Kosten- und Ergebnisevidenz aufgebaut statt aus Annahme. Siehe Thema 5.5.

**Rolled Throughput Yield.** Die Percent-Complete-and-Accurate-Werte jeder Phase in einem Wertstrom miteinander multipliziert, was enthüllt, wie sich Nacharbeit über eine mehrphasige Pipeline hinweg akkumuliert. Siehe Thema 2.8.

**SLI (Service-Level-Indikator).** Ein direkt gemessenes Signal für die Gesundheit eines Dienstes, wie Latenz oder Fehlerrate. Siehe Thema 6.1.

**SLO (Service-Level-Ziel).** Der Zielbereich für einen Service-Level-Indikator. Siehe Thema 6.1.

**SPACE-Framework.** Ein Fünf-Dimensionen-Framework für Entwicklerproduktivität: Zufriedenheit und Wohlbefinden, Leistung, Aktivität, Kommunikation und Zusammenarbeit, und Effizienz und Fluss. Siehe Thema 3.1.

**SRE (Site Reliability Engineering).** Die bei Google entwickelte Disziplin, Software-Engineering-Ansätze auf Betrieb und Zuverlässigkeit anzuwenden. Siehe Thema 6.1.

**Taktzeit.** Die maximal akzeptable Zeit, eine Arbeitseinheit abzuschließen, um sauber mit Kundennachfrage übereinzustimmen, aus klassischem Lean-Wertstrom-Mapping. Siehe Thema 2.8.

**TCO (Gesamtbetriebskosten).** Die vollen Kosten einer Initiative oder eines Systems über seine Lebensdauer, einschließlich laufender Wartung und Infrastruktur, nicht nur Vorabkosten. Siehe Thema 5.5.

**Technische Schuld.** Die akkumulierten Kosten vergangener Abkürzungen in einer Codebasis, eine Metapher für eine handhabbare Abwägung, kein beschämendes Geheimnis. Siehe Thema 4.5.

**Warteschlangentheorie.** Das mathematische Studium von Warteschlangen, angewandt auf Lieferpipelines, um zu erklären, wie Work in Process, Ankunftsrate, und Auslastung Wartezeit antreiben. Siehe Thema 2.7.

**Wertstrom.** Die Ende-zu-Ende-Sequenz von Aktivitäten, die eine Idee in Wert verwandelt, den eine Kundin oder ein Kunde erhält, die Maßeinheit des Flow-Frameworks. Siehe Thema 2.1.

**Work in Process (WIP).** Die Anzahl Elemente, an denen zu einem gegebenen Zeitpunkt aktiv gearbeitet wird, über ein Team oder System hinweg. Siehe Thema 2.5.

**Zyklomatische Komplexität.** Eine Zählung der unabhängigen Pfade durch den Kontrollfluss eines Codestücks, eingeführt von Thomas J. McCabe im Jahr 1976. Siehe Thema 4.1.

**Zykluszeit.** Die interne Aufschlüsselung der Durchlaufzeit in Phasen: Codieren, Review, Testen, und Deployment. Siehe Thema 2.6.
