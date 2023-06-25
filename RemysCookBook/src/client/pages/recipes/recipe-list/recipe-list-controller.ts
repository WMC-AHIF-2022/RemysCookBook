import {fetchRestEndpoint} from "../../../utils/client-server";
import {Recipe} from "../../../utils/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
    const recipeList = document.getElementById("product-list") as HTMLDivElement;

    const category : string = sessionStorage.getItem('category');
    const categoryElement = document.getElementById('category-title') as HTMLElement;
    categoryElement.innerHTML = `${category}`;

    const recipes: Recipe[] = await fetchRestEndpoint(`${apiUrl}/recipes/category/${category}`,"GET").then(r => r.json());

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
        <a class="link-to-recipes" href="../recipe-view/index.html" id="recipe-name"><h2>${recipe.recipeName}</h2></a>
        </div>
        </div>
        `);
    }
}

