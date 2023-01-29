# System-Spezifikation `Remys CookBook`

## 1. Ausgangslage und Zielsetzung

### 1.1. Ist-Situation
---
Selten gelingt es Familien einen strukturierten sowie organisierten Essensplan zu erstellen. Oftmals wiederholen sich die Gerichte. Dadurch fehlt die ausgewogene und abwechslungsreiche Ernährung. 

### MyRecipe-Inspiration:
Wir möchten unser Projekt so ähnlich aufbauen wie "myRecipe". Jedoch gefallen uns einige Aspekte nicht bzw. erweitern wir noch einige Features (z.B. eine Einkaufsliste oder das Merken von Rezepten unter Favoriten). Das Design übernehmen wir nicht. Einen random Essensgenerator für Unentschlossene würden wir gerne übernehmen. 

### 1.2. Verbesserungspotenziale
---
### Probleme:
* Haushalte können sich oft nicht über ihre täglichen Mahlzeiten einigen
  * durch unterschiedliche Zeitpläne fällt das Planen der Menüs schwer
    * -> keine abwechslungsreiche und ausgewogene Ernährung
* bisher existieren noch keine Apps, die alle Features erfüllen
  * enthalten nur z.B. eine Einkaufsliste oder das Verwalten der Rezepte, eine Figur, die die Benutzer durch das Programm leitet sowie eine Bewertung mit 1-5 Sternen oder das Abspeichern von Lieblingsrezepten durch ein Herz gibt es noch nicht

### Verbesserungen:
* einfachere Kommunikation mit eines veränderbaren Wochenessensplan
  * übersichtlicher Kalender
  * abwechslungsreiche Gerichte
* Interaktion mit Familie/Mitbewohnern
  * jeder Benutzer erstellt einen Account
* Rezepte in einem Register verwalten
  * bewerte mit Sternen
  * speichern als Favorit mit Herz 
    * eigene Favoritenliste
* Einkaufsliste

### 1.3 Zielsetzung
---
Unser Ziel ist es Familien das Planen und Organisieren ihres Essensplan zu erleichtern. In unserem Anwendungsprogramm sind alle Features vereint.

Es verfügt über eine Kalenderansicht, bei der man mit Hilfe eines Buttons Gerichte für den Tag vorschlagen kann, die der Main-User bestätigt, austauscht oder ablehnt. Falls ein Speise noch nicht in der Rezeptliste vorhanden ist, kann es einfach hinzugefügt werden. Ein bereits bestehndes Rezept kann auch geändert bzw. gelöscht werden. Sobald man das Menü gekostet hat, kann man das Rezept mit Sternen (1- 5) bewerten. Die Rezepte sind auch unterteilbar in Kategorien, also filterbar. Unter Lieblingsrezepten werden alle Menüs angezeigt, die mit 5 Sternen bewerten wurden. 

Sobald ein Gericht in den Essensplan aufgenommen wird, werden seine Zutaten zur Einkaufsliste hinzugefügt. Durch abhacken werden alle benötigten Zutaten, die man bereits zu Hause hat, von der Einkaufsliste gelöscht. Produkte, die nicht in einem Rezept vorkommen, können durch einen Button hinzufüget werden.

Unsere Benutzerverwaltung unterteilt sich in zwei Bereiche. Einen Main-User, welcher den Plan erstellt und Users bzw. Youth-Users, die mit einer Fam-ID und einem Passwort in den Essensplan einsteigen können. Jedes Mitglied kann Gerichte vorschlagen, jedoch kann nur der Main-User den Essenswunsch schlussendlich festlegen. Der Main-User verteilt auch die Rechte, indem er auswählt, wer ein normaler User oder Youth-User ist. 

Die Anwendung enthält außerdem ein Maskottchen, das die Benutzer durch die App leitet und Menüvorschläge durch Klicken auf die Figur verteilt. 


![MindMap](./pictures/MindMap.png)

## 2. Funktionale Anforderungen

### 2.1. Use Case Überblick

#### 2.1.1. Use Case Diagramm 
<img src="./pictures/ucd.webp" height="750" width="375">

- **Main-User:** erstellt den Familien-Account und verwaltet den Kalender mit den Menüvorschlägen. Er kann die Speisen akzeptieren und zum Essensplan hinzufügen, ablehnen oder mit einem anderen Vorschlag austauschen. Zusätzlich wählt er unter den Mitgliedern die Youth-User aus. Außerdem verfügt er über die generellen Rechte. 
- **Side-User:** besitzt die generellen Rechte: 
  - sieht den Kalender/Rezepte
  - ein Gericht für den Plan vorschlagen
  - kann ein Produkt zur Einkaufsliste hinzufügen/löschen 
  - Bearbeiten von Rezepten:
    - hinzufügen
    - ändern
    - löschen
    - bewerten (1-5 Sterne)
  - Menüvorschlag von Remy erhalten
  - Rezepte nach einer Kategorie filtern
- **Youth-User:** 
  Er besitzt die generellen Rechte ausgenommen der Erstellung, das Ändern und Löschen eines Rezepts.
  
### 2.2. Use Case Erstellen des Accounts

#### 2.2.1 GUI-Design

<img src="./pictures/01_CreateAccount.png" width="200" height="400"> <img src="./pictures/02_CreateAccount.png" width="200" height="400">

Zuerst wird nach einem Benutzernamen sowie Passwort gefragt. Ist die Eingabe gültig, wird die Fam-ID, eine 16-stellige Hexadezimal-Nummer, vom  System erzeugt. Die Person, die den Account erstellt, wird automatisch als Main-User angesehen. Es gibt nur einen Main-User und er kann auch nicht auf ein anderes Mitglied geändert werden. Weitere Benutzer können mit der festgelegten Fam-ID in den Essensplan einsteigen (genauers dazu in dem UC Login Main-User/User). 

#### 2.2.2 Workflow

<img src="./pictures/ACD_ErstellenDesAccounts.png" height="400">

Nach der Eingabe wird das Format geprüft. Wenn dieses gültig ist, wird die Fam-ID vom System generiert und angezeigt. 

### 2.3. Use Case Login Main-User/User

#### 2.3.1 GUI-Design

<img src="./pictures/Login_Users.png" width="200" height="400">

Hierbei handelt es sich um ein Login-System, wo die automatisch generierte Fam-ID als Schlüssel zum Einsteigen in den Essensplan verwendet wird. Sollte ein Benutzer zum ersten Mal in den Essensplan einsteigen, erkennt das System dies und erstellt einen neuen Benutzer.

#### 2.3.2 Workflow

<img src="./pictures/ACD_LoginUsers.png" height="400">

Bei der Eingabe wird das Format auf die Gültigkeit geprüft. Sollte diese passen, kann sich der User einloggen. Das System kontrolliert, ob dieser User bereits angelegt ist. Falls nicht, wird er vom System automatisch hinzugefügt. Danach wird der Essensplan angezeigt. 

### 2.3. Use Case Kalenderansicht
#### 2.3.1 GUI-Design

<img src="./pictures/Kalenderansicht1.jpg" width="200" width="200" height="375">

Hierbei sieht man das die jeweiligen eingetragenen Menüs für den Tag, die der Main-User bestätigt hat. Die Request werden von dem Main-User unter dem Button "manage Requests" verwaltet. Er kann diese bestätigen und somit das Gericht in den Essensplan hinzufügen oder ablehnen.

#### 2.4.2 Workflow

<img src="./pictures/ACD_Menü-hinzufügen.jpg">

- Wenn ein User ein Menü auswählen will, muss das Menü zuerst von dem Main User bestätigt werden. Sobald das Menü bestätigt worden ist, wird es auf dem Kalender angezeigt. Ist dies nicht der Fall bleibt der Kalender leer.

### 2.5. Use Case Menü für den Essensplan vorschlagen
#### 2.5.1 GUI-Design

<img src="./pictures/Menuevorschlag.jpg">
Um einen Menüvorschlag zu machen muss man zuerst auf den Plus-Button in der Kalenderansicht drücken. Danach wird man zu einer neuen Seite geführt (Abbildung 2) die alle Rezepte anzeigt, die es gibt, dazu gibt es auch einen Filter für verschiedene Kategorien (Italienisch, Mexikanisch...). Durch einen Klick kommt man auf das Rezept und kann dieses hinzufügen. Hier drückt man wieder auf den Plus Button und ein Kalender wird angezeigt. In dem Kalender kann man das gewünschte Datum auswählen und mit dem Button "Ok" wird ein Request ausgeschickt. 

### 2.6. Use Case Akzeptieren/Ablehnen eines Menüvorschlags
#### 2.6.1 GUI-Design

<img src="./pictures/01_MenuSuggestions.png" width="200" height="400"> <img src="./pictures/02_MenuSuggestions.png" width="200" height="400"> <img src="./pictures/03_MenuSuggestions.png" width="200" height="400"> 

Nur der Main-User sieht in der Navbar den Bereich für das Akzeptieren, Ablehnen oder Austauschen eines Menüvorschlags. Mit den drei Buttons kann er das Gericht hinzufügen zum Essensplan, ablehnen oder mit einem bereits eingetragenen Essen austauschen. Drückt er auf akzeptieren, wird nach dem gewünschtem Datum gefragt und danach zum Essensplan hinzugefügt.  

#### 2.6.2 Workflow

<img src="./pictures/ACD_AkzeptierenAblehnenMenuevorschlag.png">

Der Main-User sieht alle vorgeschlagenen Menüs und kann mit Buttons entscheiden, ob diese abgelehnt oder bestätigt werden. Sollte er ein Gericht bestätigen, wählt er das gewünschte Datum aus und es wird zum Essensplan hinzugefügt. Danach wird der Vorschlag gelöscht. Sollte eine Speise abgelehnt werden, wird der Vorschlag sofort gelöscht. 


### 2.7. Use Case Austauschen eines Menüvorschlags
#### 2.7.1 GUI-Design

<img src="./pictures/Menuevorschlag-austauschen.jpg" width="200" heigth="100">

Mit dem Switch Button kann man ein anderes vorgeschlagenes Rezept auswählen.

#### 2.3.2 Workflow

<img src="./pictures/Menuevorschlag-akzeptieren-ablehnen.jpg">

Der Main-User bekommt eine neue Menürequest für denselben Tag. Er kann ihn entweder ablehnen dann bleibt der alte Menüvorschlag im Kalender. Falls der Main-User den Menüvorschlag annimmt, wird der alte Menüvorschlag gelöscht und der neue kommt zur Kalenderansicht.


### 2.8. Use Case Ansehen von Rezepten
#### 2.8.1 GUI-Design

1. Youth-User Ansicht

<img src="./pictures/Rezeptansicht-Youth.png" width="500" heigth="200">

2. Main-User & Side-User Ansicht (mit + zum hinzufügen von Rezept)

<img src="./pictures/Rezeptansicht-Main.png" width="500" heigth="200">
Die erste Abbildung ist die Sicht des Youth-Users. Die zweite ist die des Main-Users & Side-Users, da die beiden neue Rezepte erstellen können (siehe 2.9). 

### 2.9. Use Case neues Rezept erstellen
#### 2.9.1 GUI-Design

<img src="./pictures/Rezepterstellung.png" width="500" heigth="200">

Nur der Main-User & Side-User können ein neues Rezept erstellen. Dafür drückt man auf das Plus in der rechten unteren Ecke. Dann kommt man auf eine neue Seite (Create Recipe). Hier kann man seine Zutaten und seine ZUbereitung für sein Rezept eingeben und dann auf den Button mit "add recipe" drücken, damit das Rezept erstellt wird. Um seine eigenen Rezepte sehen zu können, gibt es nun eine eigene Kategorie "own recipes", die am Anfang noch leer ist. Erst wenn man ein Rezept erstellt, wird dieses dann in "own recipes" hinzugefügt.

#### 2.9.2 Workflow

<img src="./pictures/ACD-Rezepterstellung.png"  width="300" heigth="90">

### 2.10. Use Case Ändern eines Rezepts

#### 2.10.1 GUI-Design

<img src="./pictures/Rezept-ändern.png" width="500" heigth="200">

Als Main-User & Side-User kann man auch seine Rezepte ändern. Dafür tippt man auf "own recipes" und dann auf sein Rezept, das man ändern möchte. Als nächstes drückt man auf "edit" und man kommt auf die Seite mit der man dann zB: Zutaten hinzufügen oder entfernen oder die Zubereitung ändern kann. Damit man die Änderungen speichert drückt man einfach auf "save changes". Somit hat man sein eigenes Rezept verändert. 

### 2.11. Use Case Löschen eines Rezepts

#### 2.11.1 GUI-Design

<img src="./pictures/Rezept-löschen.png" width="500" heigth="200">

Damit man auch ein Rezept löschen kann, braucht man wieder auf sein eigenens Rezept drücken und dort auf "delete". Die App fragt dann, ob man das Rezept wirklich löschen willst und dann drückt man entwerder auf "yes" (Rezept wird gelöscht) oder auf "no" (wird nicht gelöscht).


### 2.12. Use Case Bewerten eines Rezepts

#### 2.12.1 GUI-Design

<img src="./pictures/RatingRecipe.png" width="400" heigth="100">

Wenn man bei der Ansicht eines Rezeptes etwas nach unten scrollt kommt man zur Sterne-Bewertung. Es wird einem zuerst die durchschnittliche Bewertung dieses Rezeptes angezeigt und darunter die Möglichkeit gegeben eine eigene Bewertung hinzuzufügen. 


### 2.13. Use Case Ansehen von Lieblingsrezepten (5 Sterne)

#### 2.13.1 GUI-Design

<img src="./pictures/Favourites.png" width="400" heigth="100">

Alle Rezepte die mit 5 Sternen bewertet wurden, werden hier angezeigt. Um ein Rezept von dieser Liste zu entfernen muss die Sterne-Bewertung auch entfernt werden. <br>
Durch das Drücken auf ein bestimmtes Rezept erhält man eine detailiertere Ansicht der Personen, die das Rezept mit 5 Sternen bewertet haben und die Möglichkeit es zum Kalendar hinzuzufügen.


### 2.14. Use Case Filtern von Rezepten

#### 2.14.1 GUI-Design

<img src="./pictures/recipes.png" width="400" heigth="100">

#### 2.14.2 Workflow

<img src="./pictures/FilternVonRezepten.jpeg" width="500" heigth="100">
Die User werden durch Remy informiert, dass sie nicht nur nach Rezeptnamen sondern auch nach bestimmmten Zutaten suchen können.

### 2.15 Use Case Erhalten eines Rezeptvorschlags durch Remy

#### 2.15.1 GUI-Design

<img src="./pictures/remys_tipps.jpg">

Sobald man auf Remy klickt bekommt man einen Tipp, wie das Kochen erleichtert werden kann.


### 2.16. Use Case Produkt zur Einkaufsliste hinzufügen

#### 2.16.1 GUI-Design

<img src="./pictures/AddToShoppingList.png" width="200" heigth="100">

#### 2.16.2 Workflow

Zutaten werden automatisch für die Rezepte, die im Kalender stehen, eingetragen. Der User kann anschließend diese Liste überprüfen und Zutaten die schon vorhanden sind löschen, oder eigene Zutaten hinzufügen.

### 2.17. Use Case Produkt von der  Einkaufsliste löschen

#### 2.17.1 GUI-Design

<img src="./pictures/ShoppingList.png" width="200" heigth="100"> 

#### 2.17.2 Workflow

Zutaten können mithilfe eines Klicks auf den Kreis nebenbei abgehakt werden, bleiben jedoch in der Liste bis man auf das Minus-Zeichen drückt um das Rezept permanent zu löschen. Wenn man erneut auf den Kreis drückt, wird diese Zutat wieder als "nicht-abgehakt" angezeigt.


### 2.18. Use Case Auswahl der Youth-User

#### 2.18.1 GUI-Design

<img src="./pictures/Auswahl-Youth-User.png">

Der Main-User kann festlegen, welcher User ein Youth-User ist. Dafür gibt es Einstellungen. In den Einstellungen tippt der Main-User auf "members" und dann kann man sehen wer Mitglied bei der Familie ist, in diesem Fall sind es zwei Mitglieder. Wenn man nun einen Youth-User festlegen will, tippt man auf einen Member-Namen und dann auf "Rights". Da popt dann ein Fenster auf bei dem man Youth-User oder Side-User auswählen kann (in der Abbildung ist ein Youth-User ausgewählt). 

## 3. Nicht-funktionale Anforderungen
Hier ein Überblick über mögliche nicht-funktionale Anforderungen:

### `Usability`: Benutzbarkeitsanforderung
- Die Software soll einfach bedienbar/strukturiert sein und für jedes Alter geeignet.
- Die App sollte einfache Anleitung für Rezepte bieten. Sie sollte auch einen übersichtlichen Essensplan beinhalten.

### `Efficiency`: Effizienzanforderung
- Das Laden der App darf nicht länger als 2 Sekunden dauern, um User nicht abzuschrecken.
- Das Hinzufügen im genrellen oder auch im Essenplan sollte nicht länger als 0,5 Sekunden dauern. 

### `Maintenance`: Wartbarkeits- und Portierbarkeitsanforderung
- Die App soll später auch in Dark-Mode verfügbar sein.
- Remys Cookbook soll in Zukunft auch als Website verfügbar sein.

### `Security`: Sicherheitsanforderung
- Durchgehende sichere Verbindung
- Family ID ist einzigartig und darf nie verändert werden
- Passwörter werden mit Hashcode geschützt

### `Legal`: Gesetzliche Anforderung
- Persönliche Daten dürfen nicht gespeichert werden

## 4. Mengengerüst

Zur Abschätzung der aufkommenden Datenmengen und damit verbunden der notwendigen Infrastruktur, um die nötige Performance zu erzielen, ist ein Mengengerüst zu erstellen. Mögliche Fragestellungen:

- Wieviele User werden erwartet?
- Wieviele Daten pro User werden erwartet?
- Mit welcher Anfrage-Frequenz wird gerechnet?

## 5. Systemarchitektur

- Auflistung der Softwarekomponenten in einem Verteilungsdiagramm (typisch: Client - Server - Datenbank).
- Beispiel:

<img src="./Architektur.jpg">
