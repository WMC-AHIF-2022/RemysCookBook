import {fetchRestEndpoint} from "../../../utils/client-server";
import {Ingredient, Menu, Recipe} from "../../../utils/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
    const recipeList = document.getElementById("recipe") as HTMLDivElement;

    const recipeName: string = sessionStorage.getItem('recipeName');
    const element = document.getElementById('recipe-title') as HTMLElement;
    element.innerHTML = `${recipeName}`;

    const recipeId: number = parseInt(sessionStorage.getItem("recipeId"));

    const recipe: Recipe = await fetchRestEndpoint(`${apiUrl}/recipes/${recipeId}`, "GET").then(r => r.json());
    const ingredients: Ingredient[] = await fetchRestEndpoint(`${apiUrl}/ingredients/${recipeId}`, "GET").then(r => r.json());

    const users = ["Luka", "Laura", "Maja"];
    const randomNum = Math.floor((Math.random() * users.length) + 1);

    await show(recipe, ingredients);

    async function show(recipe: Recipe, ingredients: Ingredient[]) {
        recipeList.innerHTML += (`
      <div class="recipe">
        <div class="container">
          <img src="../../../img/${recipe.recipeID}.png" alt=""/>
          <div class="preparation-container">
            <div class="content">
              <h1 style="font-weight: 100">Ingredients:</h1>
              ${ingredients.map(ingredient => {
            if (ingredient.unit !== null) {
                return `<h2>- ${ingredient.amount} ${ingredient.unit} ${ingredient.ingredientName}</h2>`;
            } else {
                return `<h2>- ${ingredient.amount} ${ingredient.ingredientName}</h2>`;
            }
        }).join("")}              
              <h1>Preparation:</h1>
              <h2>${recipe.preparation}</h2>
              <div class="add-to-suggestion-button">
                <button type="button" class="btn btn-light" onclick="await addSuggestionToMenu(${recipe.recipeID}, ${recipe.recipeID}, ${users[randomNum]})" style="align-items: center">Suggestion</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
    }
};

async function addSuggestionToMenu(recipeId: number, recipeName: string, user: string) {
    const date = new Date().toISOString();
    const menu: Menu = {
        recipeID: recipeId,
        recipeName: recipeName,
        requestedFrom: user,
        date: date,
        accepted: 'false'
    }

    await fetchRestEndpoint(`${apiUrl}/menus`, "POST", menu);
}