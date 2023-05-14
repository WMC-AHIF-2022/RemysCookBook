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
    const category = sessionStorage.getItem('category');
    console.log(category);
    return (
        <>
            <Layout>
                <div>
                    <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-zinc-50 pt-8">JAPANESE</h1>
                </div>

                <div className="search">
                    <form>
                        <i className="fas fa-search"></i>
                        <input type="text" name="" id="search-item" placeholder="search ..."
                               onKeyUp={search}/>
                    </form>

                    <div className="product-list" id="product-list">
                        {recipes.map((recipe: Recipe) => {
                            if (!categories.includes(recipe.category)) {
                                categories.push(recipe.category);
                                return (
                                    <div className="product" key={recipe.recipeID}>
                                        <img src={require(`public/images/${recipe.recipeID}.png`).default} alt="" />
                                        <div className="p-details">
                                            <h2><a className="link-to-recipes" href="/recipe-view/recipe-view"></a>{recipe.recipeName}</h2>
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
