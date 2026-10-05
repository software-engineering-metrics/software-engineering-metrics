# 6.3 Bereitschaftsdienst-, Kapazitäts-, und Betriebslastmetriken

## Überblick und Motivation

Die Zuverlässigkeit, die Thema 6.1 einführte, und die Vorfallreaktion, die Thema 6.2 maß, hängen beide von einem menschlichen System ab, das dieses Thema direkt misst: die Bereitschaftsdienstrotation, die Ingenieurinnen und Ingenieure, die einen Pager tragen und reagieren, wenn etwas kaputtgeht, und die Infrastrukturkapazität, die bestimmt, wie viel Last ein System absorbieren kann, bevor es überhaupt anfängt, kaputtzugehen. Eine Organisation kann exzellente SLOs, gut gestaltete Fehlerbudgets, und eine echt schuldfreie Vorfallkultur haben, und dennoch ihre Bereitschaftsdienst-Ingenieurinnen und -Ingenieure durch eine unhaltbare Last ausbrennen, die schließlich genau die Zuverlässigkeit verschlechtert, die diese anderen Praktiken schützen sollten.

Dieses Thema behandelt operative Last als eigenständige Metrikfamilie, direkt verbunden mit der Wohlbefindens- und [Burnout](https://en.wikipedia.org/wiki/Occupational_burnout)-Messung aus Thema 3.2, aber spezifisch für die besondere, akute Belastung, einen Pager zu tragen: unterbrochenen Schlaf, die psychologischen Kosten, im Bereitschaftsdienst zu sein, selbst wenn nichts passiert, und die kumulative Belastung häufiger, schlecht verteilter Vorfalllast. Eine Organisation, die die Zuverlässigkeit ihrer Systeme akribisch misst, während sie nie die Nachhaltigkeit der Menschen misst, die diese Systeme zuverlässig halten, misst nur die halbe Geschichte, und die ungemessene Hälfte tendiert dazu, sich schließlich als Fluktuation, verschlechterte Vorfallreaktionsqualität durch erschöpfte Reagierende, oder beides zu zeigen.

Für große Teams enthüllen Bereitschaftsdienst- und Kapazitätsmetriken Lastverteilungsprobleme, die die Wissenskonzentrationsanliegen aus Thema 3.5 widerspiegeln: eine kleine Anzahl Ingenieurinnen und Ingenieure absorbiert einen unverhältnismäßigen Anteil an Pages, oft die erfahrensten Menschen genau deshalb, weil sie Vorfälle am schnellsten lösen können, was gleichzeitig ein Burnout-Risiko und ein Bus-Faktor-Risiko schafft. Konzerne und Behörden, die rund um die Uhr kritische Dienste betreiben, verlassen sich auf die Metriken dieses Themas, um Bereitschaftsdienstrotationen nachhaltig zu besetzen, statt die wahren Kosten erst durch Fluktuation zu entdecken.

## Kernprinzipien

- **Bereitschaftsdienstlast ist eine messbare, handhabbare Ressource**, keine unvermeidliche, unbegrenzte Last, die Ingenieurinnen und Ingenieure einfach absorbieren müssen.
- **Page-Häufigkeit und Page-Verteilung sind beide wichtig.** Ein teamweiter Durchschnitt kann schwere Konzentration auf eine kleine Anzahl Individuen verbergen.
- **Unterbrechung während des Bereitschaftsdienstes trägt Kosten, selbst wenn kein Vorfall tatsächlich auftritt**, das psychologische Gewicht, erreichbar und verantwortlich zu sein.
- **Kapazitätsplanung und Bereitschaftsdienstlast sind verbunden.** Unterversorgte Infrastruktur generiert mehr Pages, was die Bereitschaftsdienstlast direkt erhöht.
- **Ein nachhaltiges Bereitschaftsdienstsystem schützt Zuverlässigkeit selbst**, da erschöpfte Reagierende während Vorfällen langsamere, fehleranfälligere Entscheidungen treffen.

## Empfehlungen

### Page-Häufigkeit und -Verteilung verfolgen, nicht nur einen Team-Ebene-Durchschnitt

Es sollte gemessen werden, wie viele Pages jede einzelne Bereitschaftsdienst-Ingenieurin oder jeder einzelne Bereitschaftsdienst-Ingenieur erhält, nicht nur ein teamweiter Durchschnitt, der schwere Konzentration verbergen kann. Ähnlich den Bus-Faktor-Anliegen aus Thema 3.5 und den Reviewer-Last-Anliegen aus Thema 2.9 konzentriert sich Bereitschaftsdienstlast oft auf eine kleine Anzahl erfahrener Menschen, die Vorfälle am schnellsten lösen können, genau das Muster, das gleichzeitig Burnout-Risiko und einen gefährlichen einzelnen Ausfallpunkt schafft. Rotationen sollten bewusst neu ausbalanciert werden, wenn diese Konzentration erscheint.

### Die psychologischen Kosten des Bereitschaftsdienstes messen, nicht nur aktive Vorfallzeit

Im Bereitschaftsdienst zu sein trägt echte Kosten, selbst während einer Schicht mit null tatsächlichen Pages: reduzierte Schlafqualität durch die Antizipation einer möglichen Unterbrechung, eingeschränkte persönliche Aktivitäten, und der niedriggradige Stress laufender Verantwortung. Wo machbar, sollte dies durch Umfragedaten (Thema 3.7) speziell zur Bereitschaftsdiensterfahrung erfasst werden, getrennt von allgemeiner Zufriedenheit, da ein Team vernünftige allgemeine Zufriedenheit berichten kann, während Bereitschaftsdienst speziell still Wohlbefinden erodiert.

### Explizite Grenzen für nachhaltige Bereitschaftsdiensthäufigkeit setzen

Eine maximal vernünftige Häufigkeit sollte etabliert werden, wie oft eine Einzelperson im Bereitschaftsdienst sein sollte, üblich nicht mehr als eine Woche von vier oder fünf, und die tatsächliche Rotationshäufigkeit sollte gegen diese Grenze verfolgt werden. Eine Rotation, die technisch genug Personen aufgelistet hat, aber effektiv auf zwei oder drei davon angewiesen ist, aufgrund von Kompetenzlücken oder Verfügbarkeitsbeschränkungen, erfüllt die Grenze tatsächlich nicht, unabhängig davon, was der nominelle Zeitplan zeigt.

### Kapazitätsplanung direkt mit Bereitschaftsdienstlast verbinden

Unterversorgte Infrastruktur, unzureichender Spielraum für Verkehrsspitzen, unzureichende Auto-Scaling-Konfiguration, generiert per Definition mehr Pages, was die Bereitschaftsdienstlast direkt erhöht. Infrastrukturkapazitätsnutzung sollte verfolgt werden, und mit Page-Häufigkeit korreliert werden: ein Service, der regelmäßig nahe seiner Kapazitätsobergrenze läuft und einen unverhältnismäßigen Anteil an Pages generiert, ist ein direktes, quantifizierbares Argument für Kapazitätsinvestition, keine bloß vage operative Beschwerde.

### Bereitschaftsdienstmetriken nutzen, um Personal- und Einstellungsentscheidungen zu informieren, nicht individuelle Bewertung

Bereitschaftsdienstlastdaten sollten auf Team-Ebene aggregiert werden, um den Fall für zusätzliche Personalstärke zu machen, besseres Tooling, um Falsch-Positiv-Pages zu reduzieren, oder architektonische Investition, um echte Vorfallhäufigkeit zu reduzieren. Der konsistenten Anleitung dieses Buches für jede Metrik folgend, die Individuen direkt betrifft (Thema 1.2, Thema 3.4), sollten individuelle Page-Reaktionsmetriken nie genutzt werden, um die Leistung einer bestimmten Ingenieurin oder eines bestimmten Ingenieurs zu bewerten; das Ziel ist nachhaltige Personalbesetzung und Systemdesign, keine individuelle Punktezählung.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Keine formale Bereitschaftsdienstlast-Verfolgung | Kein Aufwand | Burnout-Risiko und Bus-Faktor-Konzentration bleiben unsichtbar, bis sie als Fluktuation auftauchen |
| Nur Team-Durchschnitt-Page-Häufigkeit | Einfach zu berechnen | Verbirgt schwere individuelle Konzentration |
| Verfolgung individueller Page-Verteilung | Enthüllt Konzentration und Burnout-Risiko direkt | Braucht Sorgfalt, nur aggregiert genutzt zu werden, nie für individuelle Bewertung |
| Kapazitätsinvestition, um Page-Volumen an der Quelle zu reduzieren | Adressiert die Grundursache, reduziert Last nachhaltig | Braucht Vorab-Infrastrukturinvestition |

Die zentrale Spannung ist **Akzeptanz gegen Investition**. Es ist leicht, ein hohes Page-Volumen einfach als unvermeidliche Kosten des Betreibens eines zuverlässigen Dienstes zu behandeln und Bereitschaftsdienst-Ingenieurinnen und -Ingenieure zu bitten, es zu absorbieren, aber diese Akzeptanz kostet die Organisation schließlich durch Fluktuation und verschlechterte Vorfallreaktionsqualität durch erschöpfte Reagierende. Die Spannung sollte gelöst werden, indem erhöhte Bereitschaftsdienstlast als Signal behandelt wird, das echte Investition erfordert, Kapazitätsverbesserungen, bessere Alarmierung, um Falsch-Positive zu reduzieren, erweiterte Rotationsbesetzung, statt einer unvermeidlichen Last, die einfach unbegrenzt ertragen wird.

## Fragen für die Diskussion im Team

1. **Wie sieht unsere tatsächliche Page-Verteilung über Individuen in der Rotation aus, nicht nur der Team-Durchschnitt?** Die echten, individuellen Daten sollten gezogen werden; ein vernünftig aussehender Team-Durchschnitt kann ein oder zwei Personen verbergen, die einen dramatisch unverhältnismäßigen Anteil absorbieren.

2. **Haben wir je die psychologischen Kosten des Bereitschaftsdienstes separat von allgemeiner Zufriedenheit gemessen?** Falls nicht, sollte diskutiert werden, ob eine dedizierte, kurze Umfragefrage speziell zur Bereitschaftsdiensterfahrung etwas sichtbar machen würde, das die allgemeine Zufriedenheitsumfrage (Thema 3.2) derzeit übersieht.

3. **Spiegelt unser nomineller Bereitschaftsdienst-Rotationszeitplan die Realität wider, oder verlässt er sich effektiv nur auf zwei oder drei Personen aufgrund von Kompetenzlücken oder Verfügbarkeit?** Hier sollte ehrlich reflektiert werden; ein Zeitplan, der acht Namen auflistet, aber effektiv von zweien abhängt, erfüllt keine vernünftige Nachhaltigkeitsgrenze.

4. **Welcher unserer Services generiert einen unverhältnismäßigen Anteil an Pages relativ zu seinem Kapazitätsspielraum, und würde zusätzliche Infrastrukturinvestition diese Last direkt reduzieren?** Page-Häufigkeit sollte explizit mit Kapazitätsnutzungsdaten kreuzreferenziert werden, um diesen Fall mit echter Evidenz aufzubauen.

5. **Wurden Bereitschaftsdienstlastdaten je genutzt, selbst informell, um die Leistung einer Einzelperson zu bewerten, statt Personal- und Architekturentscheidungen zu informieren?** Dies riskiert dieselbe Individualbewertungsfalle, vor der Thema 3.4 für Aktivitätsdaten warnt, hier auf operative Last angewandt.

6. **Was würde es uns kosten, unsere am häufigsten gepagete Bereitschaftsdienst-Ingenieurin oder unseren am häufigsten gepageten Bereitschaftsdienst-Ingenieur an Burnout oder Fluktuation zu verlieren, und wie vergleicht sich das mit den Kosten, die Rotation jetzt neu auszubalancieren oder in Grundursachenkorrekturen zu investieren?** Dieser konkrete Vergleich macht oft einen stärkeren Fall für proaktive Investition als ein abstrakter Appell an Nachhaltigkeit allein.

## Branchenperspektive

**Startup.** Bereitschaftsdienst ist notwendigerweise oft informell und auf Gründerinnen und Gründer oder ein kleines frühes Engineering-Team konzentriert. Das Risiko ist, früh ein unhaltbares Tempo zu normalisieren, bevor bewusstes Rotationsdesign je erwogen wurde, was viel schwerer rückgängig zu machen wird, sobald es zur Standarderwartung für später hinzukommende Neueinstellungen geworden ist.

**Kleinunternehmen.** Ein einfacher, expliziter Rotationszeitplan mit klarer Nachhaltigkeitsgrenze (nicht mehr als eine Woche von vier, zum Beispiel) ist selbst ohne dediziertes Bereitschaftsdienst-Tooling erreichbar. Die Hauptdisziplin ist einfach, die Rotation und ihre Fairness sichtbar und explizit zu machen, statt sie als informelle, unausgesprochene Vereinbarung zu belassen.

**Enterprise.** Page-Verteilungskonzentration und ihre assoziierten Burnout- und Bus-Faktor-Risiken skalieren hier schlecht, da mehr Services und mehr Komplexität generell mehr potenzielle Pages bedeuten, und Expertenkonzentration das Problem verstärkt. In individuelle Lastverfolgung (nur aggregiert für Personalentscheidungen genutzt), Kapazitätsinvestition, um Page-Volumen an der Quelle zu reduzieren, und bewusste Rotationsneuausbalancierung sollte investiert werden.

**Behörden.** Kritische öffentliche Infrastruktur braucht oft Rund-um-die-Uhr-Bereitschaftsdienstabdeckung mit echten Konsequenzen, falls Reaktion verzögert wird, was sowohl die Wichtigkeit nachhaltiger Personalbesetzung als auch die Schwierigkeit erhöht, sie unter typischen Personalbeschränkungen des öffentlichen Sektors zu erreichen. Bereitschaftsdienstlastdaten sollten explizit und direkt genutzt werden, um Personalanfragen zu rechtfertigen, wobei nachhaltige Bereitschaftsdienstkapazität als direkte, quantifizierbare Zuverlässigkeitsanforderung gerahmt wird, statt als diskretionäre Personalpräferenz.

## Beispiele

**Enterprise.** Ein Cloud-Infrastrukturunternehmen fand, nachdem es schließlich zum ersten Mal individuelle Page-Daten zog, dass zwei leitende Ingenieurinnen und Ingenieure von fünfzehn in der Bereitschaftsdienstrotation persönlich über 60 % aller Pages im Vorjahr gehandhabt hatten, sowohl weil sie am schnellsten komplexe Vorfälle lösten als auch weil andere Rotationsmitglieder gelernt hatten, sich informell auf sie zu verlassen, statt eigene Lösungsversuche zu unternehmen. Beide Ingenieurinnen und Ingenieure berichteten bedeutsame Burnout-Symptome in der Wohlbefindensumfrage des Unternehmens (Thema 3.2), ohne dass die Führung dieses Umfragesignal zuvor mit den spezifischen, quantifizierbaren Bereitschaftsdienstkonzentrationsdaten verbunden hatte. Ein bewusster Neuausbalancierungsaufwand, einschließlich gezieltem Training, um Lösungsvertrauen über die breitere Rotation aufzubauen, und eine formale Obergrenze, wie viele aufeinanderfolgende Pages einer Einzelperson zugewiesen werden konnten, reduzierte den Anteil der zwei Ingenieurinnen und Ingenieure innerhalb von sechs Monaten auf unter 25 %, mit einer entsprechenden Verbesserung ihres berichteten Wohlbefindens.

**Behörden.** Das Bereitschaftsdienst-Engineering-Team eines regionalen Wasserversorgers hatte mit einer nominellen Vier-Personen-Rotation für kritische Infrastrukturüberwachung operiert, aber Kapazitätsnutzungsdaten enthüllten, dass eine bestimmte alternde Pumpstation, die konsistent nahe ihrer operativen Obergrenze lief, fast die Hälfte aller Pages über die gesamte Rotation generierte. Ein Kapazitätsupgrade für genau diese eine Pumpstation, direkt finanziert unter Nutzung der Page-Häufigkeit-gegen-Kapazität-Korrelation als konkrete stützende Evidenz in der Budgetanfrage, reduzierte das organisationsweite Gesamt-Page-Volumen um ungefähr 40 % innerhalb des folgenden Jahres, was demonstrierte, dass die Bereitschaftsdienstlast substanziell ein verkleidetes Kapazitätsproblem gewesen war, statt rein ein Personal- oder Prozessproblem.

## Business Case: Motivation, ROI und TCO

Die Rendite, Bereitschaftsdienst- und Kapazitätslast bewusst zu verwalten, sind vermiedene Fluktuation und vermiedene Zuverlässigkeitsverschlechterung durch erschöpfte Reagierende, die langsamere, fehleranfälligere Entscheidungen treffen. Das Beispiel des Cloud-Infrastrukturunternehmens oben zeigt das sich verstärkende Risiko direkt: unverwaltete Konzentration schuf gleichzeitig Burnout- und Bus-Faktor-Exposition, die ein unkomplizierter, datengetriebener Neuausbalancierungsaufwand zu bescheidenen Kosten löste, verglichen mit dem Risiko, eine der leitenden Ingenieurinnen oder einen der leitenden Ingenieure durch Fluktuation zu verlieren.

Die Gesamtbetriebskosten umfassen die Instrumentierung, individuelle Page-Verteilung zu verfolgen (sorgfältig genutzt, nur aggregiert), und, wo angezeigt, echte Kapazitätsinvestition, um Page-Volumen an der Quelle zu reduzieren. Das Wasserversorger-Beispiel zeigt, dass sich diese Investition direkt und messbar auszahlen kann, da eine einzelne, gut gezielte Kapazitätskorrektur die organisationsweite operative Last substanziell reduzierte.

## Antipatterns und Fallstricke

- **Nur einen Team-Ebene-Durchschnitts-Page-Zähler verfolgen:** verbirgt schwere individuelle Konzentration, die sowohl Burnout- als auch Bus-Faktor-Risiko antreibt.
- **Einen nominellen Rotationszeitplan als die Realität widerspiegelnd behandeln:** ein Zeitplan, der effektiv von zwei oder drei Personen abhängt, ist nicht nachhaltig, unabhängig davon, wie viele Namen aufgelistet sind.
- **Individuelle Page-Reaktionsdaten nutzen, um Leistung zu bewerten:** wiederholt die Individualbewertungsfalle, vor der dieses Buch durchgängig warnt, hier auf operative Last angewandt.
- **Hohes Page-Volumen als unvermeidliche Kosten der Zuverlässigkeit akzeptieren, statt Kapazität als Grundursache zu untersuchen:** übersieht eine häufig verfügbare, direkte Korrektur.
- **Bereitschaftsdienstlastdaten nie mit Wohlbefindens-Umfragedaten verbinden:** übersieht die Chance, ein sich verstärkendes Burnout-Risiko zu identifizieren und darauf zu reagieren, bevor es als Fluktuation auftaucht.
- **Die psychologischen Kosten des Bereitschaftsdienstes mit null tatsächlichen Pages ignorieren:** unterschätzt die wahre Last einer Rotation.

## Reifegradmodell

- **Stufe 1, Initiieren:** Bereitschaftsdienstlast wird überhaupt nicht verfolgt, oder nur als teamweiter Durchschnitt, der individuelle Konzentration verbirgt.
- **Stufe 2, Entwickeln:** Manche individuelle Page-Daten existieren, aber sie sind nicht mit Wohlbefindens-Umfragedaten oder Kapazitätsinvestitionsentscheidungen verbunden.
- **Stufe 3, Standardisieren:** Individuelle Page-Verteilung und Kapazitätsnutzungskorrelation werden konsistent verfolgt, mit expliziten Nachhaltigkeitsgrenzen für Rotationshäufigkeit.
- **Stufe 4, Steuern:** Bereitschaftsdienstlastdaten werden aktiv genutzt, um Kapazitätsinvestition und Rotationsneuausbalancierung anzutreiben, explizit mit Wohlbefindens-Umfragesignalen verbunden.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete, messbare Verbesserungen sowohl in operativer Last als auch Wohlbefinden aus gezielter Kapazitätsinvestition und Rotationsredesign verweisen, und nachhaltige Bereitschaftsdienstbesetzung ist ein routinemäßiger, gut gerechtfertigter Eingabewert für Personal- und Infrastrukturplanung.

## Diskussionsanregungen

1. Wie sieht unsere tatsächliche, individuelle Page-Verteilung gerade jetzt aus?
2. Spiegelt unser nomineller Rotationszeitplan wider, wer tatsächlich die meisten Vorfälle löst?
3. Welche einzelne Kapazitätsinvestition würde unser aktuelles Page-Volumen am meisten reduzieren?
4. Haben wir je Bereitschaftsdienstlastdaten mit Wohlbefindens-Umfragesignalen verbunden?
5. Was würde es uns kosten, unsere am häufigsten gepagete Ingenieurin oder unseren am häufigsten gepageten Ingenieur an Burnout zu verlieren?

## Die wichtigsten Erkenntnisse

- Bereitschaftsdienstlast ist eine **messbare, handhabbare Ressource**; individuelle Verteilung sollte verfolgt werden, nicht nur ein teamweiter Durchschnitt, der schwere Konzentration verbergen kann.
- Bereitschaftsdienst trägt **psychologische Kosten, selbst bei null tatsächlichen Pages**; dies sollte separat von allgemeiner Zufriedenheit gemessen werden.
- **Kapazitätsplanung und Bereitschaftsdienstlast sind direkt verbunden**; unterversorgte Infrastruktur generiert mehr Pages und mehr Last.
- Bereitschaftsdienstdaten sollten für **Personal- und Kapazitätsentscheidungen** genutzt werden, nie für individuelle Leistungsbewertung.
- Ein nachhaltiges Bereitschaftsdienstsystem **schützt Zuverlässigkeit selbst**, da erschöpfte Reagierende langsamere, fehleranfälligere Entscheidungen treffen.

## Quellen und weiterführende Literatur

- *Site Reliability Engineering: How Google Runs Production Systems*, herausgegeben von Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (Bereitschaftsdienstpraxis und nachhaltige operative Last).
- *The Site Reliability Workbook*, herausgegeben von Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, and Stephen Thorne (praktische Anleitung zum Bereitschaftsdienst-Rotationsdesign).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*, von Christina Maslach and Michael P. Leiter (organisatorische Ursachen und Interventionen für Burnout, anwendbar auf Bereitschaftsdienststress).
- *Seeking SRE: Conversations About Running Production Systems at Scale*, herausgegeben von David N. Blank-Edelman (Praktikerperspektiven auf nachhaltige Betriebspraxis).
