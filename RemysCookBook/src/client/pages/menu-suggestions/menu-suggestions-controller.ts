interface requestedMenu {
    recipeId: number;
    name: string;
    requestedBy: string;
    date?: Date;
}

const demo: requestedMenu[] = []

const suggestion1: requestedMenu = {
    recipeId: 7098,
    name: "Veggie Bowl",
    requestedBy: "mustermann",
}


const suggestion2: requestedMenu = {
    recipeId: 1234,
    name: "Ramen Noodles",
    requestedBy: "sara",
}
demo.push(suggestion1);
demo.push(suggestion2);

window.onload = async () => {
    //alle requestedMenues von der db holen
    const listOfSuggestions = document.getElementById("listOfSuggestions") as HTMLDivElement;

    let count: number = 0;
    for (let menu of demo) {
        refreshSuggestionList(menu);

        const acceptBtn = document.getElementById(`acceptBtn${menu.recipeId}`) as HTMLButtonElement;
        const denyBtn = document.getElementById(`denyBtn${menu.recipeId}`) as HTMLButtonElement;

        acceptBtn.addEventListener('click', () => {
            //backend put endpoint implementieren (accepted-property ändern)
            //refresh output
        });

        denyBtn.addEventListener('click', () => {
            //backend aus der tabelle löschen (das eine Rezept)
            //refresh output
        });
    }

    function refreshSuggestionList(menu: requestedMenu) {
        listOfSuggestions.innerHTML += `<div style="margin-bottom: 10%;"></div>
        <div class="grid-container-suggestions">
            <div class="grid-item-suggestions-picture">
                <img class="menu-cover" src="../../img/${menu.recipeId}.jpg" >
            </div>
            <div class="grid-item-suggestions-recipe-name">
                <h1 id="textRecipeName" class="suggestions-recipe-name">${menu.name}</h1>
            </div>
            <div class="grid-item-suggestions-user">
                <p id="textUser" class="suggestions-user">suggest by ${menu.requestedBy}</p>
            </div>
            <div class="grid-item-suggestions-button-accept">
                <button type="button" id="acceptBtn${menu.recipeId}" class="suggestions-button">Accept</button>
            </div>
            <div class="grid-item-suggestions-button-deny">
                <button type="button" id="denyBtn${menu.recipeId}" class="suggestions-button">Deny</button>
            </div>
            <div class="grid-item-suggestions-button-switch">
                <button type="button" id="switchBtn${menu.recipeId}" class="suggestions-button">Switch</button>
            </div>
        </div>`;
    }
}

