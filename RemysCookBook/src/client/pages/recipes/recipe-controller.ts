import {fetchRestEndpoint} from "../../utils/client-server";
import {Recipe} from "../../utils/model";

const apiUrl = "http://localhost:3005/api"

window.onload = async () => {
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

    /** show categories in html page **/
    function show(recipe: Recipe) {
        console.log(recipe.category);

        categoryList.innerHTML += (`
        <div class="product">
            <img src="../../img/categories/${recipe.category}.png" id="category-img">
            <div class="p-details">
                <a class="link-to-recipes" href="../../pages/recipes/recipe-list/index.html" id="link-to-recipe-list" onclick="saveCategory(${recipe.category})">
                <h2>${recipe.category}</h2></a>
            </div>
        </div>
        `);
    }
}

/** save category to sessionStorage (does not work) **/
function saveCategory(category : string){
    sessionStorage.setItem('category', category);
}