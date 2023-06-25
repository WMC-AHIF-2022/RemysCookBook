import {fetchRestEndpoint} from "../../utils/client-server";
import {Recipe} from "../../service/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
    //TODO: get recipes from session storage
    const categoryList = document.getElementById('product-list') as HTMLDivElement;

    const recipes: Recipe[] = await fetchRestEndpoint(`${apiUrl}/recipes`,"GET").then(r => r.json());

    if (!Array.isArray(recipes)) {
        throw new Error("Response is not an array");
    }

    const categories : string[] = [];
    for(const recipe of recipes){
        if(!categories.includes(recipe.category)){
            categories.push(recipe.category);
            show(recipe);
        }
    }

    function show(recipe: Recipe) {
        categoryList.innerHTML += (`
        <div class="product">
        <img src="../../img/categories/${recipe.category}.png" id="category-img">
        <div class="p-details">
        <h2><a class="link-to-recipes" href="../../pages/recipes/recipe-list/index.html" id="category-name">${recipe.category}</a></h2>
        </div>
        </div>
        `);
    }

    const category = (document.getElementById("category-name"));

    sessionStorage.setItem('category', category.textContent);
}

