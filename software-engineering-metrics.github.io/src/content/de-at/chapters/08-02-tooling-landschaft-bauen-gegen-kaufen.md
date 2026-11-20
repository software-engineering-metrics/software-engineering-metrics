# 8.2 Tooling-Landschaft: Bauen gegen Kaufen

## Überblick und Motivation

Jede Organisation, die die Anleitung dieses Buches umsetzt, steht schließlich vor einer praktischen Infrastrukturentscheidung: Metrik-Tooling intern bauen, eine kommerzielle Engineering-Analytics-Plattform kaufen, oder, am häufigsten in der Praxis, eine Kombination aus beidem. Dieses Thema behandelt diese Entscheidung mit derselben Strenge, die Thema 5.5 auf jede andere Engineering-Investition anwendet: eine ehrliche Kosten-Nutzen-Analyse, spezifisch für den Maßstab der Organisation, bestehende Datenquellen, und die spezifischen Metriken aus diesem Buch, die tatsächlich verfolgt werden sollen, statt einer Standardantwort, die unabhängig vom Kontext einheitlich angewandt wird.

Der Markt für kommerzielles Engineering-Analytics-Tooling ist erheblich gereift, und viele Plattformen bieten jetzt solide, weitgehend automatisierte Instrumentierung für die DORA-Metriken (Teil 2), Pull-Request- und Review-Daten (Thema 2.9), und zunehmend Entwicklererfahrungs-Umfrage-Infrastruktur (Thema 3.7). Diese Reife hat die Kalkulation für viele Organisationen hin zum Kauf zumindest der grundlegenden Schicht verschoben, hat aber die echten Vorteile der Bauen-Option für spezifische, angepasste Bedürfnisse nicht eliminiert, besonders rund um die Ergebnis-Telemetrie, von der Thema 7.4 argumentiert, sie sei jetzt das notwendige Zentrum eines Metrikprogramms, was häufig die am wenigsten standardisierte, organisationsspezifischste Messkategorie ist, die dieses Buch abdeckt.

Für große Teams hat diese Entscheidung echte, laufende Budget- und Engineering-Kapazitätskonsequenzen. Konzerne müssen oft Metrik-Tooling über eine echt heterogene Landschaft aus Alt- und modernen Systemen integrieren, was die Bauen-gegen-Kaufen-Kalkulation erheblich formt; Behörden stehen häufig Beschaffungsbeschränkungen und Datensouveränitäts- oder Sicherheitsanforderungen gegenüber, die materiell beeinflussen, welche kommerziellen Optionen überhaupt lebensfähig sind, was die Entscheidung manchmal hin zum Bauen oder hin zu einem spezifischen, geprüften Anbieter neigt, unabhängig davon, was eine reine Kosten-Nutzen-Analyse allein nahelegen würde.

## Kernprinzipien

- **Dies ist selten eine Alles-oder-nichts-Entscheidung.** Die meisten reifen Metrikprogramme kombinieren gekauftes Tooling für gut standardisierte Metriken mit gebautem Tooling für organisationsspezifische Ergebnis-Telemetrie.
- **Für gut standardisierte, breit benötigte Metriken sollte gekauft werden; für echt organisationsspezifische sollte gebaut werden.** DORA-Metriken und Pull-Request-Analytik sind Gebiet für Massenware; die eigene spezifische Geschäftsergebniskorrelation (Thema 5.3) meist nicht.
- **Dateneigentümerschaft und Portabilität zählen genauso viel wie Feature-Vergleich.** Ein Werkzeug, das Metrikdaten einsperrt, ist ein dauerhaftes Risiko, nicht nur eine Unannehmlichkeit.
- **Integrationskosten werden in einer Bauen-gegen-Kaufen-Analyse häufig unterschätzt**, für beide Optionen.
- **Beschaffungs-, Sicherheits-, und Datensouveränitätsbeschränkungen können eine reine Kosten-Nutzen-Berechnung überstimmen**, besonders für Behörden.

## Empfehlungen

### Für die Massenware-Schicht kaufen: DORA-, Review-, und Umfrage-Infrastruktur

Für Metrikfamilien mit reifem, weit verfügbarem kommerziellem Tooling, DORA-Metrik-Instrumentierung (Teil 2), Pull-Request- und Code-Review-Analytik (Thema 2.9), und Entwicklererfahrungs-Umfrageplattformen (Thema 3.7), ist Kaufen meist die bessere wirtschaftliche Wahl für die meisten Organisationen unter einer bestimmten Größe, da der Bau äquivalenter Infrastruktur Engineering-Aufwand dupliziert, in den viele Anbieter bereits schwer investiert haben, mit begrenzter echter Differenzierung, die durch den Bau der eigenen Version verfügbar wäre.

### Für echt organisationsspezifische Ergebnis-Telemetrie bauen

Für die Ergebnismetriken, von denen Thema 7.4 argumentiert, sie sollten der Schwerpunkt des Metrikprogramms sein, Geschäftsergebniskorrelation (Thema 5.3), Feature-Akzeptanz, an das spezifische Produkt gebunden (Thema 5.2), Einheitswirtschaftlichkeit, an die spezifische Kostenstruktur gebunden (Thema 5.4), ist kommerzielles Tooling weit weniger standardisiert und kann oft die spezifische Geschäftslogik und das Datenmodell der Organisation ohne umfangreiche, teure Anpassung nicht erfassen, was am Ende mehr kosten kann, als die äquivalente Fähigkeit intern mit voller Kontrolle über das Ergebnis zu bauen.

### Dateneigentümerschaft und Portabilität bewerten, bevor man sich einem Anbieter verpflichtet

Vor der Unterzeichnung eines kommerziellen Vertrags sollte bestätigt werden, dass die vollen historischen Metrikdaten in einem nutzbaren, standardisierten Format exportiert werden können, und verstanden werden, was mit diesen Daten und ihrer Historie geschieht, falls der Anbieter gewechselt oder der Dienst eingestellt wird. Ein Anbieterverhältnis, das aufgrund von Daten-[Lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) schwer zu verlassen wird, ist ein dauerhaftes organisatorisches Risiko, nicht bloß eine Unannehmlichkeit, und diese Bewertung verdient dieselbe Ernsthaftigkeit wie jede andere bedeutsame, mehrjährige Infrastrukturverpflichtung.

### Realistisch für Integrationskosten auf beiden Seiten der Entscheidung budgetieren

Ob gebaut oder gekauft, Integrationskosten, das Werkzeug mit der tatsächlichen Versionskontrolle, CI/CD, Vorfallverfolgung, und Geschäftssystemen zu verbinden, werden in der anfänglichen Planung für beide Pfade häufig unterschätzt. Explizit sollte für diesen Integrationsaufwand als eigenständiger, bedeutsamer Posten in der Bauen-gegen-Kaufen-Analyse budgetiert werden, statt anzunehmen, ein kommerzielles Werkzeug werde von Anfang an mit minimaler Einrichtung funktionieren, oder die Integrationskosten einer selbst entwickelten Lösung seien eine geringfügige Ergänzung zu ihren Entwicklungskosten.

### Beschaffungs-, Sicherheits-, und Souveränitätsbeschränkungen explizit und früh berücksichtigen

Für Behörden und regulierte Konzerne können Datensouveränitätsanforderungen, Sicherheitszertifizierungsbedürfnisse, und Beschaffungsprozesse bestimmte kommerzielle Optionen materiell einschränken oder eliminieren, unabhängig von ihrer Feature-Qualität, was die Entscheidung manchmal hin zum Bauen oder hin zu einer kleineren Gruppe speziell geprüfter Anbieter neigt. Diese Beschränkungen sollten explizit und früh im Bewertungsprozess identifiziert werden, statt sie erst zu entdecken, nachdem bereits erheblicher Bewertungsaufwand in eine Option geflossen ist, die sich aus Gründen als nicht lebensfähig herausstellt, die mit ihrer tatsächlichen Fähigkeit nichts zu tun haben.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Kommerzielles Tooling kaufen | Schnell einsatzbereit, reifes Feature-Set, anbietergepflegt | Weniger anpassbar für organisationsspezifische Ergebnismetriken; potenzieller Lock-in |
| Internes Tooling bauen | Vollständig angepasst, volle Dateneigentümerschaft und Kontrolle | Bedeutsame, laufende Engineering-Investition; dupliziert Aufwand für Massenware-Metriken |
| Hybrid: Massenware-Schicht kaufen, Ergebnis-Schicht bauen | Balanciert Kosteneffizienz mit echter Anpassung dort, wo sie am meisten zählt | Braucht Integrationsarbeit, um gekaufte und gebaute Komponenten kohärent zu verbinden |
| Alles kaufen, einschließlich Ergebnis-Telemetrie, via umfangreicher Anbieteranpassung | Einzelnes Anbieterverhältnis, potenziell einfachere Beschaffung | Kann so teuer wie Bauen werden, mit weniger letztendlicher Kontrolle über das Ergebnis |

Die zentrale Spannung ist **Anpassungsbedarf gegen Entwicklungskosten**. Die Metriken, die am meisten von Anpassung profitieren, Ergebnis-Telemetrie, speziell an das eigene Geschäft gebunden, sind auch die teuersten, gut zu bauen; die Metriken, die am günstigsten zu kaufen sind, DORA- und Review-Analytik, sind auch die, bei denen echte Anpassung am wenigsten zählt. Die Spannung sollte gelöst werden, indem die Entscheidung direkt an dieses Muster angepasst wird: gekauft werden sollte, wo Standardisierung gut dient, gebaut werden sollte, wo der spezifische Kontext es echt erfordert, und Integrationskosten sollten realistisch auf beiden Seiten dieser Aufteilung budgetiert werden.

## Fragen für die Diskussion im Team

1. **Würden wir für jede Metrikfamilie, die dieses Buch abdeckt, echt von Anpassung profitieren, oder würde ein standardisiertes kommerzielles Werkzeug uns genauso gut dienen?** Teile 2 bis 6 sollten explizit durchgegangen werden, und jede Metrikfamilie sollte basierend auf diesem spezifischen Test in eine Kaufen- oder Bauen-Spalte sortiert werden.

2. **Haben wir die Datenexport- und Portabilitätsoptionen unseres aktuellen oder potenziellen Anbieters bewertet, oder nehmen wir an, wir könnten leicht gehen, falls nötig?** Dies sollte direkt geprüft werden, statt es anzunehmen; Daten-Lock-in wird oft erst entdeckt, wenn eine Organisation tatsächlich versucht zu wechseln.

3. **Berücksichtigte unsere ursprüngliche Bauen-gegen-Kaufen-Analyse Integrationskosten realistisch, oder fokussierte sie sich primär auf Lizenzgebühren gegenüber Entwicklungsstunden?** Eine kürzliche Tooling-Entscheidung sollte erneut betrachtet werden, und geprüft werden, ob Integrationskosten echt geschätzt oder erheblich unterschätzt wurden.

4. **Stehen wir Beschaffungs-, Sicherheits-, oder Datensouveränitätsbeschränkungen gegenüber, die bestimmte kommerzielle Optionen unabhängig von ihrer Feature-Qualität eliminieren würden?** Diese Beschränkungen sollten explizit identifiziert werden, bevor, nicht nachdem, erheblicher Bewertungsaufwand in Optionen investiert wird, die sich als nicht lebensfähig herausstellen könnten.

5. **Ist unsere aktuelle Tooling-Landschaft ein bewusster Hybrid, der Bauen und Kaufen dort anpasst, wo jedes Sinn ergibt, oder hat sie sich durch Ad-hoc-, einzeln vernünftige Entscheidungen über die Zeit akkumuliert?** Ehrlich sollte reflektiert werden, welches Muster tatsächlich die aktuelle Situation beschreibt.

6. **Was würde es uns kosten, an Aufwand und Risiko, unseren aktuellen Metrik-Tooling-Anbieter heute zu wechseln, falls nötig?** Diese konkrete Frage testet die tatsächliche aktuelle Exposition gegenüber Daten-Lock-in-Risiko, über das hinaus, was die Vertragsbedingungen des Anbieters nominell versprechen.

## Branchenperspektive

**Startup.** Auf dieser Ebene sollte standardmäßig Massenware-Tooling gekauft werden; individuelle Metrikinfrastruktur zu bauen, ist selten eine gute Nutzung knapper früher Engineering-Kapazität, wenn reife, günstige kommerzielle Optionen speziell für DORA- und Review-Metriken existieren. Jeder Bauaufwand sollte für die einzelne Ergebnismetrik (Thema 5.3) reserviert werden, die den Kernwert des Produkts am direktesten widerspiegelt.

**Kleinunternehmen.** Die meisten kommerziellen Tooling-Optionen skalieren vernünftig nach unten und sind für kleinere Organisationen zugänglich bepreist; die Massenware-Schicht zu kaufen ist fast immer die richtige Wahl, und irgendetwas Individuelles zu bauen ist selten gerechtfertigt, bis die Organisation erheblich gewachsen ist und echt spezifische Bedürfnisse entwickelt hat.

**Enterprise.** Der hybride Ansatz, den dieses Thema empfiehlt, verdient sich hier seine Komplexität: die Massenware-Schicht sollte im großen Maßstab gekauft werden (oft mit bedeutsamer Verhandlungshebelwirkung für günstige Bedingungen), und bewusst sollte investiert werden, die organisationsspezifische Ergebnis-Telemetrie-Schicht zu bauen, da die Komplexität der Geschäftslogik und des Datenmodells auf dieser Ebene meist überschreitet, was generisches kommerzielles Tooling ohne umfangreiche, teure Anpassung handhaben kann.

**Behörden.** Beschaffungsprozesse, Sicherheitszertifizierungsanforderungen, und Datensouveränitätsbeschränkungen dominieren diese Entscheidung häufig mehr, als ein reiner Feature- oder Kostenvergleich nahelegen würde. Beschaffungs- und Sicherheits-Stakeholder sollten früh im Bewertungsprozess einbezogen werden, und es sollte darauf vorbereitet sein, dass die Bauen-Option hier echt attraktiver sein kann als in einem vergleichbaren Kontext des privaten Sektors, speziell wegen dieser Beschränkungen statt weil Bauen von Natur aus besser ist.

## Beispiele

**Enterprise.** Ein Softwareunternehmen versuchte zunächst, eine vollständig individuelle Metrikplattform zu bauen, die jede Metrikfamilie von Teil 2 bis Teil 6 abdeckte, ein mehrjähriger Aufwand, der erhebliche Engineering-Kapazität verbrauchte und dennoch hinter reifen kommerziellen Angeboten für die standardisierten DORA- und Review-Metriken speziell zurückblieb. Eine überarbeitete Strategie übernahm eine kommerzielle Plattform für diese Massenware-Metriken, was das interne Plattformteam freisetzte, sich ausschließlich auf den Bau der Geschäftsergebniskorrelations- und Einheitswirtschaftlichkeits-Telemetrie zu fokussieren (Themen 5.3, 5.4), echt spezifisch für das Geschäftsmodell des Unternehmens, was kein kommerzielles Werkzeug von Anfang an hätte liefern können. Dieser hybride Ansatz lieferte innerhalb eines einzelnen Jahres ein vollständigeres, echt nützlicheres Metrikprogramm, als die Alles-Bauen-Strategie nach zwei Jahren erreicht hatte.

**Behörden.** Die anfängliche Bewertung kommerzieller Engineering-Analytics-Plattformen einer Bundesbehörde fand, dass keiner der verfügbaren Anbieter die Datensouveränitätsanforderungen der Behörde erfüllen konnte, die verlangten, dass alle Engineering-Metrikdaten innerhalb spezifischer, zertifizierter Behörden-Rechenzentren verbleiben. Statt die Kaufen-Option vollständig aufzugeben, identifizierte die Behörde eine kleinere Teilmenge von Anbietern, die behördenzertifizierte, souveräne Cloud-Deployment-Optionen anboten, zu einem bescheidenen Kostenaufschlag über Standardpreise, und setzte erfolgreich ein hybrides Programm um: gekauftes Tooling für die Massenware-Metrik-Schicht innerhalb der erforderlichen Souveränitätsgrenze, und internes Tooling für die spezifischen Bürgerergebnis-Telemetrie-Bedürfnisse der Behörde gebaut, die kein verfügbarer kommerzieller Anbieter unabhängig von Souveränitätserwägungen adressierte.

## Business Case: Motivation, ROI und TCO

Die Rendite einer bewussten, hybriden Bauen-gegen-Kaufen-Strategie ist, beide Fehlermodi zu vermeiden, die die Beispiele dieses Themas illustrieren: die verschwendete, mehrjährige Engineering-Investition, Massenware-Fähigkeit zu bauen, die bereits günstig auf dem Markt existiert, und die Frustration und letztendlichen Anpassungskosten, ein echt organisationsspezifisches Bedürfnis in ein schlecht passendes kommerzielles Werkzeug zu zwingen. Das Enterprise-Beispiel oben zeigt dies konkret: der hybride Ansatz lieferte in einem Jahr mehr echten Wert als die Alles-Bauen-Strategie in zwei.

Die Gesamtbetriebskosten für beide Pfade umfassen Integrationskosten, oft unterschätzt, und, speziell für gekauftes Tooling, die laufenden Risikokosten potenziellen Anbieter-Lock-ins, sofern Datenportabilität nicht im Voraus bestätigt und vertraglich geschützt ist. Für beide realistisch zu budgetieren, statt sich eng auf Lizenzgebühren oder Entwicklungsstunden allein zu fokussieren, produziert ein weit genaueres Gesamtkostenbild für beide Optionen.

## Antipatterns und Fallstricke

- **Individuelles Tooling für gut standardisierte Massenware-Metriken bauen:** dupliziert Engineering-Aufwand, in den viele Anbieter bereits schwer investiert haben.
- **Kommerzielles Tooling für echt organisationsspezifische Ergebnis-Telemetrie kaufen, ohne zuerst die Passung zu prüfen:** riskiert teure, schlecht passende Anpassung oder ein unerfülltes Bedürfnis.
- **Keine Bewertung von Datenexport und Portabilität, bevor man sich einem Anbieter verpflichtet:** riskiert dauerhaften, teuren Lock-in, erst entdeckt beim Versuch zu gehen.
- **Integrationskosten auf beiden Seiten der Entscheidung unterschätzen:** produziert einen ungenauen Gesamtkostenvergleich und unrealistische Zeitpläne.
- **Beschaffungs-, Sicherheits-, oder Souveränitätsbeschränkungen bis spät im Bewertungsprozess ignorieren:** verschwendet Bewertungsaufwand auf Optionen, die sich aus mit der Fähigkeit unzusammenhängenden Gründen als nicht lebensfähig herausstellen.
- **Dies als einzelne, Alles-oder-nichts-Entscheidung behandeln:** übersieht den hybriden Ansatz, der am besten zu den tatsächlichen, gemischten Bedürfnissen der meisten Organisationen passt.

## Reifegradmodell

- **Stufe 1, Initiieren:** Tooling-Entscheidungen werden ad hoc getroffen, ohne bewusste Bauen-gegen-Kaufen-Analyse oder Berücksichtigung von Datenportabilität.
- **Stufe 2, Entwickeln:** Manche Analyse findet statt, aber Integrationskosten werden routinemäßig unterschätzt, und der hybride Ansatz wird nicht bewusst erwogen.
- **Stufe 3, Standardisieren:** Eine bewusste, hybride Bauen-gegen-Kaufen-Strategie passt Massenware-Metriken konsistent an gekauftes Tooling und organisationsspezifische Ergebnis-Telemetrie an gebautes Tooling an.
- **Stufe 4, Steuern:** Datenportabilität wird für alles gekaufte Tooling vertraglich bestätigt und geschützt, und Beschaffungs-, Sicherheits-, und Souveränitätsbeschränkungen werden explizit und früh berücksichtigt.
- **Stufe 5, Orchestrieren:** Die Tooling-Landschaft der Organisation spiegelt eine reife, bewusste hybride Strategie wider, regelmäßig überprüft, während sich kommerzielle Angebote und organisatorische Bedürfnisse weiterentwickeln, mit demonstriertem Wert sowohl aus den gekauften als auch den gebauten Komponenten.

## Diskussionsanregungen

1. Welche unserer aktuellen Metriken würden am meisten von Anpassung profitieren, die wir derzeit nicht erhalten?
2. Haben wir bestätigt, dass wir unsere vollen historischen Metrikdaten exportieren könnten, falls wir den Anbieter wechseln müssten?
3. Berücksichtigte unsere letzte Tooling-Entscheidung Integrationskosten realistisch?
4. Welche Beschaffungs-, Sicherheits-, oder Souveränitätsbeschränkung könnten wir unterschätzen?
5. Wie würde eine bewusste hybride Strategie für unser spezifisches Metrik-Set aussehen?

## Die wichtigsten Erkenntnisse

- Dies ist selten alles oder nichts; die meisten reifen Programme **kombinieren gekauftes Tooling für Massenware-Metriken mit gebautem Tooling für organisationsspezifische Ergebnis-Telemetrie**.
- **Für standardisierte Metriken sollte gekauft werden** (DORA, Review-Analytik, Umfrage-Infrastruktur); **für echt organisationsspezifische** Ergebnismessung sollte gebaut werden.
- **Dateneigentümerschaft und Portabilität** sollten bewertet werden, bevor man sich einem Anbieter verpflichtet; Lock-in ist ein dauerhaftes Risiko, nicht nur eine Unannehmlichkeit.
- **Realistisch für Integrationskosten** sollte auf beiden Seiten der Entscheidung budgetiert werden; sie werden häufig unterschätzt.
- **Beschaffungs-, Sicherheits-, und Souveränitätsbeschränkungen** können eine reine Kosten-Nutzen-Berechnung überstimmen, besonders für Behörden.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Metrikfamilien, auf die die Bauen-gegen-Kaufen-Analyse dieses Themas angewandt wird).
- *Cloud FinOps*, von J.R. Storment and Mike Fuller (Kostenanalyseprinzipien, anwendbar auf Tooling-Investitionsentscheidungen).
- Das FinOps-Framework der FinOps Foundation, [finops.org](https://www.finops.org/) (Praktikeranleitung zur Bewertung und Verwaltung von Cloud- und SaaS-Tooling-Kosten).
- U.S. Federal Risk and Authorization Management Program (FedRAMP)-Dokumentation: maßgebliche Anleitung zu Sicherheits- und Souveränitätsanforderungen für Behörden-Cloud-Tooling.
