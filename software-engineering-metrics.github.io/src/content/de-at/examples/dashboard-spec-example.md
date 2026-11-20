# Beispiel: Dashboard-Spezifikation für ein Dashboard mit Lieferkennzahlen

Eine ausgearbeitete Dashboard-Spezifikation nach
[Thema 8.1, Ein Engineering-Metrik-Dashboard entwerfen](../chapters/08-01-ein-engineering-metrik-dashboard-gestalten.md).
Es geht um die Form: ein benanntes Publikum, eine kleine Zahl von Kacheln, ein
ehrlicher Visualisierungsstandard und ein erklärter Aktualisierungsrhythmus.

## Publikum

Führung der Entwicklung und das Plattform-Team, besprochen im zweiwöchentlichen
Liefer-Review. Nicht für die Bewertung individueller Leistung gedacht.

## Kacheln (in Anzeigereihenfolge)

1. **Deployment-Frequenz**, letzte 4 Wochen, nach Team. Liniendiagramm,
   wöchentliche Intervalle, die Achse beginnt bei null.
2. **Durchlaufzeit für Änderungen**, Median und 90. Perzentil, letzte 4 Wochen.
   Balkendiagramm mit beiden Reihen, nicht nur dem Median.
3. **Änderungsfehlerrate**, letzte 4 Wochen, mit der vom Team vereinbarten
   Definition von "Fehler" als Link von der Kachel.
4. **Wiederherstellungszeit nach fehlgeschlagenem Deployment**, Median, letzte
   4 Wochen.
5. **Verbleibendes Fehlerbudget**, aktuelles Quartal, pro Service, in Prozent.

## Visualisierungsregeln

- Jedes Trenddiagramm zeigt mindestens acht Datenpunkte, nie eine einzelne
  Momentaufnahme.
- Achsen beginnen bei null, sofern keine erklärte Ausnahme auf der Kachel
  dokumentiert ist.
- Deployments, Incidents und Feiertage sind auf der Zeitachse annotiert, damit
  die Leserin oder der Leser eine echte Verschiebung vom Rauschen unterscheiden
  kann.
- Keine doppelten Achsen, keine 3D-Effekte, keine handverlesenen Zeiträume.

## Aktualisierungsrhythmus

Pipeline-gespeiste Kacheln (Deployment-Frequenz, Durchlaufzeit) werden stündlich
aktualisiert. Incident-gespeiste Kacheln (Änderungsfehlerrate,
Wiederherstellungszeit) werden beim Abschluss des Postmortems aktualisiert. Das
Dashboard nennt seine eigene letzte Aktualisierungszeit.

## Was dieses Dashboard bewusst ausschließt

Individuelle Commit-Zahlen, individuelle Pull-Request-Zahlen und Codezeilen. Das
sind Aktivitätsmetriken mit einer gut dokumentierten Geschichte der Manipulation
und der Messung von Aufwand statt Ergebnis (Thema 3.4).
