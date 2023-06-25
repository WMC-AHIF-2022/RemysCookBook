import {fetchRestEndpoint} from "../../utils/client-server";
import {Recipe} from "../../utils/model";

const apiUrl = "http://localhost:3005/api";

window.onload = async () => {
    const categoryList = document.getElementById('product-list') as HTMLDivElement;

    const recipes: Recipe[] = await fetchRestEndpoint(`${apiUrl}/recipes`, "GET").then(r => r.json());

    if (!Array.isArray(recipes)) {
        throw new Error("Response is not an array");
    }

    const categories: string[] = [];
    for (const recipe of recipes) {
        if (!categories.includes(recipe.category)) {
            categories.push(recipe.category);
            show(recipe);
        }
    }

    /** show categories in html page **/
    function show(recipe: Recipe) {
        const link = document.createElement('a');
        link.className = 'link-to-recipes';
        link.href = '../../pages/recipes/recipe-list/index.html';
        link.innerText = recipe.category;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            saveCategory(recipe.category);
            window.location.href = link.href;
        });

        const img = document.createElement('img');
        img.src = `../../img/categories/${recipe.category}.png`;
        img.id = 'category-img';

        const div = document.createElement('div');
        div.className = 'p-details';
        div.appendChild(link);

        const product = document.createElement('div');
        product.className = 'product';
        product.appendChild(img);
        product.appendChild(div);

        categoryList.appendChild(product);
    }
};

/** save category to sessionStorage **/
function saveCategory(category: string) {
    sessionStorage.setItem('category', category);
}
