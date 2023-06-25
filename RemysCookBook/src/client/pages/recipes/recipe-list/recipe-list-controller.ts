import {fetchRestEndpoint} from "../../../utils/client-server";
import {Recipe} from "../../../utils/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
    const recipeList = document.getElementById("product-list") as HTMLDivElement;

    const category: string = sessionStorage.getItem('category');
    const categoryElement = document.getElementById('category-title') as HTMLElement;
    categoryElement.innerHTML = `${category}`;

    const recipes: Recipe[] = await fetchRestEndpoint(`${apiUrl}/recipes/category/${category}`, "GET").then(r => r.json());

    if (!Array.isArray(recipes)) {
        throw new Error("Response is not an array");
    }

    for (const recipe of recipes) {
        show(recipe);
    }

    function show(recipe: Recipe) {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const image = document.createElement("img");
        image.src = `../../../img/${recipe.recipeID}.png`;
        image.id = "category-img";

        const detailsDiv = document.createElement("div");
        detailsDiv.className = "p-details";

        const recipeLink = document.createElement("a");
        recipeLink.className = "link-to-recipe";
        recipeLink.href = "../recipe-view/index.html";
        recipeLink.id = "recipe-name";
        recipeLink.onclick = () => saveRecipeIdAndName(recipe.recipeID, recipe.recipeName);

        const recipeName = document.createElement("h2");
        recipeName.textContent = recipe.recipeName;

        recipeLink.appendChild(recipeName);
        detailsDiv.appendChild(recipeLink);

        productDiv.appendChild(image);
        productDiv.appendChild(detailsDiv);

        recipeList.appendChild(productDiv);
    }
};

function saveRecipeIdAndName(id: number, name : string) {
    sessionStorage.setItem('recipeId', id.toString());
    sessionStorage.setItem('recipeName', name);
}