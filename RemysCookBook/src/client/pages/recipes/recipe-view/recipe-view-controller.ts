import {fetchRestEndpoint} from "../../../utils/client-server";
import {Recipe} from "../../../service/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
    //TODO: get recipes from session storage
    const recipeList = document.getElementById("product-list") as HTMLDivElement;

    const categoryElement = document.getElementById('recipe-title') as HTMLElement;
    const recipe : string = sessionStorage.getItem('recipe');
    categoryElement.innerHTML = recipe.toUpperCase();

    const recipes: Recipe[] = await fetchRestEndpoint(`${apiUrl}/recipes/categories/${category}`,"GET").then(r => r.json());

    if (!Array.isArray(recipes)) {
        throw new Error("Response is not an array");
    }

    for(const recipe of recipes){
        show(recipe);
    }

    function show(recipe: Recipe) {
        recipeList.innerHTML += (`
        <div class="product">
        <img src="../../../img/${recipe.recipeID}.png" id="category-img">
        <div class="p-details">
        <h2><a class="link-to-recipes" href="../recipe-view/index.html" id="recipe-name">${recipe.recipeName}</a></h2>
        </div>
        </div>
        `);
    }

    const arrowBack = document.getElementById('arrow-back') as HTMLElement;
    arrowBack.addEventListener('click', () => sessionStorage.clear());

    const recipe = (document.getElementById('recipe-name'));
    sessionStorage.setItem('recipe', recipe.textContent);
}

