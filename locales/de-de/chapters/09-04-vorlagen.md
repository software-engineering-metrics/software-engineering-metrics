# 9.4 Vorlagen

Kopier-und-einfügen-Vorlagen für wiederkehrende Dokumente. Durchgearbeitete, ausgefüllte Beispiele der ersten beiden finden sich in der englischen Version unter `docs/examples/`.

## Metrik-Charter-Vorlage

```markdown
# Metrik-Charter: [Team- oder Metrik-Set-Name]

- **Team:** [besitzendes Team]
- **Eigentümerin/Eigentümer:** [benannte Person oder Rolle]
- **Überprüft:** [Rhythmus, z. B. vierteljährlich]

## Zweck

[Ein bis zwei Sätze: was dieses Charter regiert und warum.]

## Was wir verfolgen

| Metrik | Quelle der Wahrheit | Eigentümerin/Eigentümer |
| --- | --- | --- |
| [Metrik] | [System] | [benannte Eigentümerin/benannter Eigentümer] |

## Nicht-Ziele

[Explizite Erklärung, wofür diese Metriken nicht genutzt werden, z. B. individuelle Leistungsbewertung, teamübergreifendes Ranking ohne Kontext.]

## Leitplanken

[Für jede incentivierte Metrik sollte ihre gepaarte Leitplanke benannt werden und welches Manipulationsmuster sie fängt.]

## Überprüfungsrhythmus

[Wann und wie dieses Charter erneut betrachtet wird; was die Ausmusterung einer Metrik auslöst.]
```

## Dashboard-Spezifikations-Vorlage

```markdown
# Dashboard-Spezifikation: [Dashboard-Name]

## Zielgruppe

[Für wen dieses Dashboard ist, und welche Entscheidung es informiert. Explizit angeben, falls nicht für individuelle Bewertung.]

## Kacheln (in Anzeigereihenfolge)

1. **[Metrikname]**, [Zeitfenster], [Diagrammtyp]. [Alle spezifischen Visualisierungshinweise: Achsenregeln, Annotationen.]
2. ...

## Visualisierungsregeln

- Achsen beginnen bei null, sofern nicht anders angegeben, mit der auf der Kachel dokumentierten Ausnahme.
- [Alle anderen projektspezifischen Ehrlichkeitsregeln.]

## Aktualisierungsrhythmus

[Wie oft jede Kachel aktualisiert wird, und aus welcher Quelle.]

## Was dieses Dashboard bewusst ausschließt

[Alles bewusst Weggelassene sollte benannt werden, und warum, z. B. individuelle Aktivitätszahlen.]
```

## Metrik-Review-Meeting-Agenda-Vorlage

```markdown
# Metrik-Review: [Datum]

## Teilnehmende

[Namen und Rollen]

## Überprüfte Metriken

Für jede Metrik:
- Aktuelle Ablesung und Trend
- Jede Bewegung außerhalb normaler Variation (Kapitel 1.6)
- Status der gepaarten Leitplanke, falls zutreffend
- Entscheidung, die diese Ablesung informiert, falls vorhanden

## Vorgeschlagene neue Metriken

[Jede sollte durch die Checkliste für neue Metrik-Reviews durchlaufen werden, Kapitel 9.3.]

## Für Ausmusterung erwogene Metriken

[Welche Metriken haben in den letzten zwei Zyklen keine Entscheidung informiert?]

## Handlungspunkte

| Punkt | Eigentümerin/Eigentümer | Fällig |
| --- | --- | --- |
| | | |
```

## Schuldfreie-Post-Mortem-Vorlage

```markdown
# Post-Mortem: [Vorfallname], [Datum]

## Zusammenfassung

[Ein Absatz: was geschah, Nutzerwirkung, Dauer.]

## Zeitlinie

- Erkennung: [Zeit, wie erkannt]
- Bestätigung: [Zeit, wer reagierte]
- Lösung: [Zeit, was es behob]

## Schweregrad

[Klassifikation gegen dokumentierte Kriterien, Kapitel 6.2.]

## Ursache

[Was dies erlaubte zu geschehen, gerahmt als Systemfrage, nicht als individuelle.]

## Was gut lief

[Spezifische Dinge, die in der Reaktion funktionierten.]

## Handlungspunkte

| Punkt | Eigentümerin/Eigentümer | Fällig |
| --- | --- | --- |
| | | |

## Nachverfolgung

[Bestätigung, dass Handlungspunkte gemäß dem nächsten Überprüfungszyklus bis zum Abschluss verfolgt wurden.]
```

## ROI-Fall-Vorlage

```markdown
# ROI-Fall: [Initiativenname]

## Kosten (Gesamtbetriebskosten, Kapitel 5.5)

- Vorab: [Entwicklungskosten]
- Laufend: [Wartung, Infrastruktur, Support, pro Jahr]
- Opportunitätskosten: [was diese Kapazität sonst hätte tun können]

## Nutzen (dokumentierte Evidenz, Kapitel 5.1-5.3)

- [Nutzen 1], belegt durch [Datenquelle]
- [Nutzen 2], belegt durch [Datenquelle]

## Spanne und Annahmen

- Konservativer Fall: [Zahl]
- Optimistischer Fall: [Zahl]
- Kernannahme, die die Spanne antreibt: [benennen]

## Berücksichtigte und ausgeschlossene Störvariablen

[Was sonst den projizierten Nutzen erklären könnte, und warum es ausgeschlossen oder berücksichtigt wurde.]

## Nachabschluss-Prüfung (nach Abschluss der Initiative ausfüllen)

- Tatsächliches Ergebnis: [Zahl]
- Verglichen mit der projizierten Spanne: [darüber / innerhalb / darunter]
- Was uns das für die nächste Schätzung lehrt: [Notiz]
```
