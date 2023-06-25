import {fetchRestEndpoint} from "../../../utils/client-server";
import {Ingredient, Recipe} from "../../../utils/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
    const recipeList = document.getElementById("recipe") as HTMLDivElement;

    const recipeName: string = sessionStorage.getItem('recipeName');
    const element = document.getElementById('recipe-title') as HTMLElement;
    element.innerHTML = `${recipeName}`;

    const recipeId: number = parseInt(sessionStorage.getItem("recipeId"));

    const recipe: Recipe = await fetchRestEndpoint(`${apiUrl}/recipes/${recipeId}`, "GET").then(r => r.json());
    const ingredients: Ingredient[] = await fetchRestEndpoint(`${apiUrl}/ingredients/${recipeId}`, "GET").then(r => r.json());

    show(recipe, ingredients);

    function show(recipe: Recipe, ingredients: Ingredient[]) {
        recipeList.innerHTML += (`
      <div class="recipe">
        <div class="container">
          <img src="../../../img/${recipe.recipeID}.png" alt=""/>
          <div class="preparation-container">
            <div class="content">
              <h1 style="font-weight: 100">Ingredients:</h1>
              ${ingredients.map(ingredient => `<h2>- ${ingredient.ingredientName}</h2>`).join("")}
              <h1>Preparation:</h1>
              <h2>${recipe.preparation}</h2>
              <div class="add-to-suggestion-button">
            <button type="button" class="btn btn-light" onclick="addSuggestionToMenu()" style="align-items: center">Suggestion</button>
          </div>
            </div>
          </div>
        </div>
      </div>
    `);
    }
};

function addSuggestionToMenu(){

}