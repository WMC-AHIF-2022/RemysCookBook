import {Menu} from "../../utils/model";
import {fetchRestEndpoint} from "../../utils/client-server.js";

let menus: Menu[] = [];

window.onload = async () => {
    await getMenus();
    console.log(menus);

    const listOfSuggestions = document.getElementById("listOfSuggestions") as HTMLDivElement;

    for (let menu of menus) {
        console.log(menu);
        printSuggestionList(menu);

        const acceptBtn = document.getElementById(`acceptBtn${menu.recipeID}`) as HTMLButtonElement;
        const denyBtn = document.getElementById(`denyBtn${menu.recipeID}`) as HTMLButtonElement;

        acceptBtn.addEventListener('click', async () => {
            console.log("accept button pressed");

            const txt = acceptBtn.id;
            const txtSplit: string[] = txt.split("Btn");
            const recipeIDAsString: string = txtSplit[1];

            const txtRequestedFrom = document.getElementById(`textRequestedFrom${recipeIDAsString}`).innerText;
            const txtRequestedFromSplit: string[] = txtRequestedFrom.split("by ");
            const username = txtRequestedFromSplit[1];

            await fetchRestEndpoint(`http://localhost:3005/api/menus/${recipeIDAsString}`, "PATCH",
                {
                    "recipeID": Number(recipeIDAsString),
                    "requestedFrom": username
                });

            await refreshSuggestionList();
        });

        denyBtn.addEventListener('click', async () => {
            console.log("deny button pressed");

            const txt = acceptBtn.id;
            const txtSplit: string[] = txt.split("Btn");
            const recipeIDAsString: string = txtSplit[1];

            const txtRequestedFrom = document.getElementById(`textRequestedFrom${recipeIDAsString}`).innerText;
            const txtRequestedFromSplit: string[] = txtRequestedFrom.split("by ");
            const username = txtRequestedFromSplit[1];

            await fetchRestEndpoint(`http://localhost:3005/api/menus/${recipeIDAsString}`, "DELETE",  {
                "recipeID": Number(recipeIDAsString),
                "requestedFrom": username
            });

            await refreshSuggestionList();
        });
    }

    async function getMenus() {
        let allMenus: Menu[] = await fetchRestEndpoint("http://localhost:3005/api/menus", "GET").then(r => r.json());
        menus = [];
        for (let menu of allMenus){
            console.log(menu);
            if (menu.accepted === "false"){
                menus.push(menu);
            }
        }
    }

    async function refreshSuggestionList() {
        await getMenus();
        console.log(menus);

        listOfSuggestions.innerHTML = "";
        for (let menu of menus){
            printSuggestionList(menu);
        }
    }
    //adf

    function printSuggestionList(menu: Menu) {
        listOfSuggestions.innerHTML += `<div style="margin-bottom: 10%;"></div>
        <div class="grid-container-suggestions">
            <div class="grid-item-suggestions-picture">
                <img id="imgRecipe" class="menu-cover" src="../../img/${menu.recipeID}.png" alt="${menu.recipeID}">
            </div>
            <div class="grid-item-suggestions-recipe-name">
                <h1 id="textRecipeName" class="suggestions-recipe-name">${menu.recipeName}</h1>
            </div>
            <div class="grid-item-suggestions-user">
                <p id="textRequestedFrom${menu.recipeID}" class="suggestions-user">suggest by ${menu.requestedFrom}</p>
            </div>
            <div class="grid-item-suggestions-date">
                <p id="textDate${menu.recipeID}" class="suggestions-date">on ${menu.date.slice(0,10)}</p>
            </div>
            <div class="grid-item-suggestions-button-accept">
                <button type="button" id="acceptBtn${menu.recipeID}" class="suggestions-button">Accept</button>
            </div>
            <div class="grid-item-suggestions-button-deny">
                <button type="button" id="denyBtn${menu.recipeID}" class="suggestions-button">Deny</button>
            </div>
            <div class="grid-item-suggestions-button-switch">
                <button type="button" id="switchBtn${menu.recipeID}" class="suggestions-button">Switch</button>
            </div>
        </div>`;
    }
}

