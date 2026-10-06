# 3.5 Kommunikations- und Zusammenarbeits-Metriken

## Überblick und Motivation

**Kommunikation und Zusammenarbeit**, das C in SPACE (Thema 3.1), misst, wie Information tatsächlich zwischen Menschen und Teams fließt: wie auffindbar Dokumentation ist, wie gleichmäßig sich Wissen über ein Team verteilt, wie gut teamübergreifende Abhängigkeiten koordiniert werden, und wie neue Teammitglieder in den Fluss gemeinsamen Verständnisses eingeführt werden. Diese Dimension ist oft die am wenigsten instrumentierte der fünf, genau weil sie schwerer zu beobachten ist als Lieferdaten und weniger persönlich als Zufriedenheitsdaten, und diese Lücke ist ein Fehler, weil Zusammenbrüche hier häufig die Grundursache von Problemen sind, die, falsch zugeschrieben, in jeder anderen Dimension auftauchen.

Eine steigende Change Failure Rate (Thema 2.10), die wie ein Testproblem aussieht, ist manchmal tatsächlich ein Kommunikationsproblem: ein Team, das von der Änderung einer Abhängigkeit nichts wusste, bis sie in der Produktion kaputtging. Ein sinkender Zufriedenheitstrend (Thema 3.2), der wie ein Arbeitslastproblem aussieht, ist manchmal tatsächlich ein Isolationsproblem: eine Ingenieurin oder ein Ingenieur, die oder der still aus den Gesprächen ausgeschlossen wurde, in denen Entscheidungen getroffen werden. Das zentrale Argument dieses Themas ist, dass Kommunikation und Zusammenarbeit direkte Messung verdienen, genau weil ihre Ausfälle sich als andere Probleme tarnen, und ein Team, das der falschen Grundursache hinterherjagt, echten Aufwand darauf verschwendet, das Falsche zu beheben.

Für große Teams wird diese Dimension strukturell genau in dem Maße schwerer aufrechtzuerhalten, in dem sie wichtiger wird. Die Koordination eines fünfköpfigen Teams geschieht durch tägliche Nähe und braucht fast keine bewusste Messung; eine fünfhundertköpfige Organisation, verteilt über Zeitzonen und Geschäftsbereiche, hängt von Dokumentation, Auffindbarkeit und teamübergreifenden Koordinationsmechanismen ab, die bewusst gestaltet und aktiv überwacht werden müssen, weil die informellen Kanäle, die im kleinen Maßstab funktionierten, schlicht nicht so weit reichen.

## Kernprinzipien

- **Kommunikationszusammenbrüche tarnen sich oft als andere Probleme.** Ein Qualitäts- oder Zufriedenheitsproblem kann eine Zusammenarbeits-Grundursache haben.
- **Diese Dimension ist am schwersten automatisch zu instrumentieren**, und die Versuchung ist, sie ganz zu überspringen; dieser Versuchung sollte bewusst widerstanden werden.
- **Wissenskonzentration ist ein messbares Risiko, keine bloß vage Sorge.** Verfolgt werden sollte, wie eng kritisches Wissen gehalten wird.
- **Reibung durch teamübergreifende Abhängigkeiten ist für die beteiligten Teams oft unsichtbar**, bis sie jemand direkt misst.
- **Onboarding-Geschwindigkeit ist ein direkter, messbarer Stellvertreter dafür, wie gut gemeinsames Verständnis in einer Organisation tatsächlich fließt.**

## Empfehlungen

### Wissenskonzentration direkt messen

Verfolgt werden sollte, wie viele Menschen jede kritische Systemkomponente kompetent überprüfen, ändern oder betreiben können: Eine Komponente mit nur einer qualifizierten Person hat einen **[Bus-Faktor](https://en.wikipedia.org/wiki/Bus_factor)** von eins, ein schweres und oft unsichtbares Risiko (das Thema zum Erhalt langlebiger Systeme im begleitenden Buch `software-engineering-guide` behandelt das vertiefter). Blame-Daten der Versionsverwaltung, kombiniert mit Bereitschaftsdienst-Rotationsaufzeichnungen, können diese Konzentration automatisch zutage fördern: Es sollte nach Komponenten gesucht werden, bei denen eine einzelne Autorin, ein einzelner Autor oder eine einzelne bereitschaftsdiensthabende Person über einen bedeutsamen Zeitraum einen unverhältnismäßigen Anteil der Änderungen oder Incident-Reaktionen ausmacht.

### Reibung durch teamübergreifende Abhängigkeiten mit einem direkten Signal messen

Verfolgt werden sollte, wie lange eine teamübergreifende Anfrage, eine nötige API-Änderung, ein Update einer gemeinsamen Bibliothek, eine koordinierte Veröffentlichung, von der Erhebung bis zur Lösung braucht, im Geiste ähnlich der Zykluszeit-Zerlegung aus Thema 2.6, aber speziell auf teamübergreifende, statt teaminterne, Koordination angewendet. Ein Team, das beständig Wochen auf eine Abhängigkeit wartet, die ein anderes Team besitzt, hat ein Zusammenarbeitsproblem, das sich in den eigenen internen Liefermetriken keines der beiden Teams sauber zeigen wird.

### Auffindbarkeit der Dokumentation als Signal nutzen, nicht nur ihre Existenz

Ein Wiki voller veralteter oder unauffindbarer Seiten ist kein Beleg guter Kommunikation, nur weil Inhalt technisch irgendwo existiert. Wo möglich, sollte verfolgt werden, wie oft Dokumentation tatsächlich aufgerufen wird, wie oft ein neues Teammitglied berichtet, eine benötigte Antwort nicht gefunden zu haben, oder wie oft dieselbe Frage wiederholt in einem Chat-Kanal gestellt wird, weil die Antwort, obwohl dokumentiert, nicht auffindbar war. Das verbindet Dokumentationsqualität (Thema 4.6) direkt mit den Zusammenarbeits-Anliegen dieser Dimension.

### Onboarding-Zeit bis zum produktiven Beitrag als direkten Stellvertreter verfolgen

Die Zeit von der Ankunft eines neuen Teammitglieds bis zu seinem ersten bedeutsamen, unabhängigen Beitrag ist ein starker, praktischer Stellvertreter dafür, wie gut gemeinsames Verständnis in einer Organisation tatsächlich fließt: Ein Team, in dem Wissen vollständig in den Köpfen der Menschen lebt, onboardet langsam und unvorhersehbar; ein Team mit echt guter Dokumentation, klarer Eigentümerschaft und zugänglichem Mentoring onboardet schneller und konsistenter. Diese Metrik sollte explizit verfolgt werden, und eine lange oder stark variierende Onboarding-Zeit sollte als Zusammenarbeitssignal behandelt werden, nicht nur als HR-Anliegen.

### Echte Kommunikationsnetzwerke periodisch kartieren, nicht nur Organigramme

Ein Organigramm beschreibt, wer wem berichten soll; es beschreibt selten, wer tatsächlich mit wem spricht, um Arbeit zu erledigen. Periodische, leichtgewichtige Analyse von Kommunikationsmustern, Code-Review-Netzwerken (wer überprüft wessen Arbeit) oder Überschneidungen bei Meeting-Teilnahme, kann eine echte Zusammenarbeitsstruktur enthüllen, die sich wesentlich vom formalen Organigramm unterscheidet, und deckt oft einen informellen Flaschenhals (eine Person, über die alle laufen) oder eine isolierte Tasche (ein Subteam, das aus dem breiteren Informationsfluss abgedriftet ist) auf, die sonst unsichtbar bliebe.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Keine direkte Zusammenarbeitsmessung | Geringer Overhead | Grundursachen werden falsch anderen Dimensionen zugeschrieben; Risiken bleiben unsichtbar |
| Wissenskonzentrations-Tracking | Fördert ein echtes, schweres Risiko (Bus-Faktor) direkt zutage | Braucht Kombination von Daten aus mehreren Systemen (Versionsverwaltung, Bereitschaftsdienst) |
| Tracking der Reibung durch teamübergreifende Abhängigkeiten | Enthüllt Koordinationsprobleme, die innerhalb keines der beiden Teams sichtbar sind | Braucht bewusste Instrumentierung; nicht automatisch aus vorhandenen Tools |
| Kartierung des Kommunikationsnetzwerks | Enthüllt die echte, informelle Struktur hinter dem Organigramm | Kann invasiv wirken, wenn nicht mit derselben Sorgfalt behandelt wie Zufriedenheitsdaten |

Die zentrale Spannung ist **Instrumentierungsschwierigkeit gegen diagnostischen Wert**. Diese Dimension ist echt schwerer automatisch zu messen als Liefer- oder Aktivitätsdaten, und genau diese Schwierigkeit ist der Grund, warum viele Organisationen sie überspringen, obwohl ihre Ausfälle häufig die versteckte Grundursache von Problemen sind, die anderen Dimensionen zugeschrieben werden. Die Lösung: mit den wertvollsten, am leichtesten handhabbaren Signalen beginnen, Wissenskonzentration und Reibung durch teamübergreifende Abhängigkeiten, die beide größtenteils aus vorhandenen Versionsverwaltungs- und Issue-Tracking-Daten abgeleitet werden können, bevor ehrgeizigere Kommunikationsnetzwerk-Analyse versucht wird.

## Fragen für die Diskussion im Team

1. **Kennen wir unseren Bus-Faktor für jede kritische Systemkomponente, oder würden wir es erst auf die harte Tour erfahren, wenn die eine Person, die sie versteht, nicht verfügbar ist?** Versionsverwaltungs- und Bereitschaftsdienst-Daten für die kritischsten Systeme sollten gezogen und ehrlich geprüft werden, wie konzentriert das Wissen tatsächlich ist.

2. **Wie lange braucht eine typische teamübergreifende Abhängigkeitsanfrage bis zur Lösung, und hätte eines der beteiligten Teams diese Reibung ohne bewusste Messung bemerkt?** Eine jüngste teamübergreifende Abhängigkeit sollte ausgewählt und ihr tatsächlicher Zeitverlauf nachverfolgt werden; die Antwort ist oft länger und für die Beteiligten weniger sichtbar, als beide Teams annahmen.

3. **Könnte bei einem jüngsten Qualitäts- oder Zufriedenheitsproblem ein Kommunikations- oder Zusammenarbeitszusammenbruch Teil der echten Grundursache gewesen sein?** Ein jüngster Incident oder Zufriedenheitsrückgang sollte betrachtet und diese Frage speziell gestellt werden, statt die erste, offensichtlichere Erklärung zu akzeptieren.

4. **Wie lange braucht ein neues Teammitglied bis zum ersten bedeutsamen, unabhängigen Beitrag, und wie stark variiert diese Zeit von Person zu Person?** Eine lange oder stark variierende Onboarding-Zeit ist ein direktes, messbares Symptom dafür, wie gut gemeinsames Verständnis im eigenen Team tatsächlich fließt.

5. **Stimmt unser informelles Kommunikationsnetzwerk mit unserem formalen Organigramm überein, oder hat sich ein versteckter Flaschenhals oder eine isolierte Tasche entwickelt, die niemand benannt hat?** Wenn das nie direkt betrachtet wurde, ist diese Abwesenheit selbst diskussionswürdig.

6. **Ist unsere Dokumentation tatsächlich auffindbar, oder existiert sie nur irgendwo, wo sie schwer zu finden ist?** Ein jüngstes neues Teammitglied sollte gefragt werden, oder bewusst sollte versucht werden, eine echte Frage nur mit den dokumentierten Ressourcen zu beantworten, und beobachtet werden, wie das tatsächlich läuft.

## Branchenperspektive

**Startup.** Kommunikation geschieht in einem kleinen Team natürlich durch Nähe und tägliches Gespräch, und formale Messung ist meist unnötig. Das Risiko, auf das geachtet werden sollte, ist, dass sich der Bus-Faktor gefährlich konzentriert, sobald das Team über die Größe hinauswächst, in der informelle Osmose noch alle erreicht, oft um acht bis zwölf Personen.

**Kleinunternehmen.** Ein einfaches, periodisches, ehrliches Gespräch, „wer ist die einzige Person, die dieses System versteht", fördert oft die kritischsten Wissenskonzentrationsrisiken zutage, ohne formale Instrumentierung zu brauchen. Zuerst sollte priorisiert werden, die zwei oder drei fragilsten, am stärksten konzentrierten Wissensbereiche zu dokumentieren.

**Enterprise.** Reibung durch teamübergreifende Abhängigkeiten und Wissenskonzentration skalieren hier beide schlecht, da mehr Teams mehr Koordinationsfläche bedeuten und mehr kritische Systeme, die am Ende einem schrumpfenden Pool langgedienter Expertinnen und Experten gehören können. In die in diesem Thema empfohlene Instrumentierung sollte bewusst investiert werden, da informelles Bewusstsein eine Organisation auf dieser Ebene echt nicht abdecken kann.

**Behörden.** Langlebige Systeme und lange Betriebszugehörigkeiten, verbreitet in Organisationen des öffentlichen Sektors, können schweres Bus-Faktor-Risiko erzeugen, das sich hinter scheinbarer Stabilität verbirgt, da ein System, das seit einem Jahrzehnt nicht die Hand gewechselt hat, vollständig von ein oder zwei Menschen kurz vor der Rente abhängen kann. Wissenskonzentrationsmessung sollte als Anliegen der Betriebskontinuität behandelt werden, nicht nur als Engineering-Nettigkeit.

## Beispiele

**Enterprise.** Das Plattform-Team eines Logistikunternehmens entdeckte erst nach einem kritischen Incident während des Urlaubs einer Schlüsselingenieurin oder eines Schlüsselingenieurs, dass ein Kern-Routing-Algorithmus einen effektiven Bus-Faktor von eins hatte: Die Versionsverwaltungshistorie zeigte, dass eine einzelne Person über 90 % der jüngsten Änderungen der Komponente verfasst hatte, und die Bereitschaftsdienst-Rotationsaufzeichnung zeigte, dass dieselbe Person persönlich jeden zugehörigen Incident der vorangegangenen zwei Jahre gelöst hatte. Das Team richtete ein bewusstes Wissensverbreitungsprogramm ein, Pairing-Sitzungen und rotierende Eigentümerschaft verwandter Incidents, und eine Folgeanalyse acht Monate später zeigte, dass der Bus-Faktor auf vier gestiegen war, wobei die ursprüngliche Ingenieurin oder der ursprüngliche Ingenieur frei wurde, neue, hochwirksamere Arbeit zu übernehmen, statt ein dauerhafter Single Point of Failure zu bleiben.

**Behörden.** Das Engineering-Team einer staatlichen Sozialleistungsbehörde maß Reibung durch teamübergreifende Abhängigkeiten zum ersten Mal, nachdem wiederholte, informell bemerkte Verzögerungen bei einem gemeinsamen Anspruchsprüfungsdienst aufgetreten waren. Die Daten zeigten, dass die mediane Wartezeit auf eine Abhängigkeitsänderung vom Team des gemeinsamen Dienstes elf Tage betrug, weit länger, als beide Teams informell angenommen hatten, und die Grundursache erwies sich als unklarer, undokumentierter Anfrageprozess statt eines Kapazitätsmangels. Einen klaren, einfachen Anfrageprozess und ein verbindliches Antwortzeit-Ziel für den gemeinsamen Dienst zu veröffentlichen, senkte die mediane Wartezeit innerhalb eines Quartals auf unter zwei Tage, ohne zusätzliche Personalausstattung.

## Business Case: Motivation, ROI und TCO

Die Rendite, Kommunikation und Zusammenarbeit direkt zu messen, ist, Grundursachen zu fangen, die andere Dimensionen falsch zuschreiben: Ein Qualitätsproblem, das wie eine Testlücke aussieht, aber tatsächlich ein Kommunikationszusammenbruch ist, verschwendet Aufwand, wenn ein Team versucht, es durch mehr Tests zu beheben, statt das zugrunde liegende Koordinationsversagen zu beheben. Das Bus-Faktor-Beispiel oben zeigt die krasseste Version dieser Rendite: Eine Organisation, die ein schweres Wissenskonzentrationsrisiko proaktiv entdeckt und behebt, vermeidet die katastrophalen Kosten, es während einer echten Krise zu entdecken, wenn die eine Person, die ein kritisches System verstand, echt nicht verfügbar ist.

Die Gesamtbetriebskosten sind größtenteils Instrumentierungsaufwand, Versionsverwaltungs-, Bereitschaftsdienst- und Issue-Tracking-Daten auf Weisen zu kombinieren, die nicht von Haus aus automatisch sind, plus die periodische Disziplin, Wissenskonzentration und Abhängigkeitsreibung explizit zu überprüfen. Diese Kosten sind bescheiden im Vergleich zu den Kosten einer echten Bus-Faktor-Krise oder eines chronischen, unbehandelten teamübergreifenden Koordinationsversagens.

## Antipatterns und Fallstricke

- **Diese Dimension überspringen, weil sie schwer automatisch zu instrumentieren ist:** lässt Grundursachen anderen, leichter messbaren Dimensionen falsch zugeschrieben.
- **Ein Organigramm als genaues Bild echter Kommunikationsmuster behandeln:** häufig falsch, und genau in dieser Lücke leben versteckte Flaschenhälse.
- **Bus-Faktor ignorieren, bis eine Krise die Entdeckung erzwingt:** der schädlichste Fehlmodus, vor dem dieses Thema warnt.
- **Annehmen, Existenz von Dokumentation entspreche ihrer Nützlichkeit:** veralteter oder unauffindbarer Inhalt liefert wenig echten Kommunikationswert.
- **Teamübergreifende Reibung messen, aber bei einer gefundenen, klaren, behebbaren Grundursache nicht handeln:** verschwendet die diagnostische Investition.
- **Langsames, variables Onboarding als reines HR-Problem behandeln statt als Engineering-Zusammenarbeitssignal:** übersieht einen echt nützlichen, messbaren Stellvertreter.

## Reifegradmodell

- **Stufe 1, Initiieren:** Kommunikation und Zusammenarbeit werden überhaupt nicht gemessen; Bus-Faktor und teamübergreifende Reibung werden nur durch Krise entdeckt.
- **Stufe 2, Entwickeln:** Manches informelles Bewusstsein für Wissenskonzentration existiert, aber es gibt keine konsistente Messung oder proaktive Untersuchung.
- **Stufe 3, Standardisieren:** Bus-Faktor und Reibung durch teamübergreifende Abhängigkeiten werden für kritische Systeme und gemeinsame Dienste organisationsweit konsistent gemessen.
- **Stufe 4, Steuern:** Kartierung des Kommunikationsnetzwerks enthüllt periodisch versteckte Flaschenhälse und isolierte Taschen, und Onboarding-Zeit wird als direkter Stellvertreter für die Gesundheit gemeinsamen Verständnisses verfolgt.
- **Stufe 5, Orchestrieren:** Die Organisation reduziert Wissenskonzentrationsrisiko und teamübergreifende Reibung proaktiv, bevor sie Incidents verursachen, und kann auf konkrete Interventionen verweisen, bewusste Wissensverbreitung, geklärte Abhängigkeitsprozesse, die diese Dimension messbar verbessert haben.

## Diskussionsanregungen

1. Wie hoch ist unser Bus-Faktor für unser einzelnes kritischstes System, ehrlich betrachtet?
2. Welche teamübergreifende Abhängigkeit hat im letzten Quartal die meiste Reibung verursacht, und haben wir sie gemessen?
3. Würde ein neues Teammitglied unsere Dokumentation finden, oder nur feststellen, dass sie technisch irgendwo existiert?
4. Stimmt unser informelles Kommunikationsnetzwerk mit unserem Organigramm überein?
5. Welches Qualitäts- oder Zufriedenheitsproblem könnte tatsächlich eine Zusammenarbeits-Grundursache haben, die wir nicht untersucht haben?

## Die wichtigsten Erkenntnisse

- Kommunikations- und Zusammenarbeitsausfälle **tarnen sich oft als andere Probleme**; eine der falschen Dimension zugeschriebene Grundursache verschwendet Aufwand.
- **Wissenskonzentration (Bus-Faktor) sollte direkt verfolgt werden**, mit Versionsverwaltungs- und Bereitschaftsdienst-Daten, statt auf eine Krise zu warten, die sie enthüllt.
- **Reibung durch teamübergreifende Abhängigkeiten sollte explizit gemessen werden**; sie ist für die beteiligten Teams meist unsichtbar, bis sie gemessen wird.
- **Onboarding-Zeit bis zum produktiven Beitrag sollte als direkter, praktischer Stellvertreter** dafür genutzt werden, wie gut gemeinsames Verständnis fließt.
- **Echte Kommunikationsnetzwerke sollten periodisch kartiert werden**, da sie sich oft wesentlich vom formalen Organigramm unterscheiden.

## Quellen und weiterführende Literatur

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Team Topologies*, von Matthew Skelton und Manuel Pais (Team-Interaktionsmodi und Gestaltung teamübergreifender Abhängigkeiten).
- *Peopleware: Productive Projects and Teams*, von Tom DeMarco und Timothy Lister (informelle Kommunikationsstrukturen und ihre Wirkung auf Produktivität).
- Conway, Melvin E., "How Do Committees Invent?" (1968): der Ursprung von Conways Gesetz, über die Beziehung zwischen Kommunikationsstruktur und Systemstruktur.
