document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

function init(): void{
    document.getElementById('acceptBtn').addEventListener('click', () => {
        // TODO: hinzufügen in den Kalender + Datum auswählen (alert)
    });

    document.getElementById('denyBtn').addEventListener('click', () => {
        //TODO: Vorschlag aus der Suggestion-Liste löschen
    });

    document.getElementById('switchBtn').addEventListener('click', () => {
        //TODO: switch (den einen löschen, den anderen hinzufügen)
    });
}