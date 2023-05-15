import {UserButton} from "@clerk/nextjs"
import ExampleComponent from "RemysCookBook/components/example"
import Layout from "RemysCookBook/layout/layout"
import {fetchExamples, fetchRecipes} from "RemysCookBook/queries"
import {type NextPage} from "next"
import Head from "next/head"
import {useQuery} from "react-query"
import React from "react";
import {search} from "RemysCookBook/pages/recipe-view/categories";
import {Recipe} from "RemysCookBook/pages/recipe-view/interface-recipe/recipe";
import Image from "next/image";
import Link from "next/link";
import {el} from "date-fns/locale";


const AllRecipes: NextPage = () => {

    const {isLoading, error, data} = useQuery('recipes', fetchRecipes);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {"Error occurred!!!"}</div>;
    }

    const recipes: Recipe[] = data?.data ?? []; // ?? [] -> setzt das array auf einn leeres array wenn data nicht exestiert
    const categories: string[] = [];

    // get category and display it(html)
    const category:string = sessionStorage.getItem('category')!;
    const element = document.getElementById("category");
    console.log(element, category);
    if(element != null) {
        element.innerHTML = `${category.toUpperCase()}`;
    }

    function saveRecipe(recipe: Recipe) {
        const id :number = recipe.recipeID;
        const name:string = recipe.recipeName;
        const preparation :string = recipe.preparation;
        const rating :number = recipe.rating;
        const weekId : number = recipe.weekId;
        const date : string = recipe.recipeDate;
        sessionStorage.setItem('recipeID', id.toString());
        sessionStorage.setItem('recipeName', name);
        sessionStorage.setItem('preparation', preparation);
        sessionStorage.setItem('rating', rating.toString());
        sessionStorage.setItem('weekId', weekId.toString());
        sessionStorage.setItem('recipeDate', date);
    }

    return (
        <>
            <Layout>
                <div>
                    <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-zinc-50 pt-8"
                        id="category"></h1>
                </div>

                <div className="search">
                    <form>
                        <i className="fas fa-search"></i>
                        <input type="text" name="" id="search-item" placeholder="search ..."
                               onKeyUp={search}/>
                    </form>

                    <div>
                        <img src={`/public/images/arrow-back.png`} alt=""/>
                    </div>

                    <div className="product-list" id="product-list">
                        {recipes.map((recipe: Recipe) => {
                            if (recipe.category === category) {
                                return (
                                    <div className="product" key={recipe.recipeID}>
                                        <Image className="grid-suggestion-image rounded-s-3xl"
                                               src={require(`public/images/${recipe.recipeID}.png`).default} alt=""
                                               width={100} height={100}></Image>
                                        <div className="p-details">
                                            <Link className="link-to-recipes" href="/recipe-view/recipe" onClick={() => saveRecipe(recipe)}>
                                                <h2>{recipe.recipeName}</h2></Link>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AllRecipes
