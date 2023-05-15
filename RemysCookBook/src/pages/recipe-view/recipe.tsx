import {UserButton} from "@clerk/nextjs"
import ExampleComponent from "RemysCookBook/components/example"
import Layout from "RemysCookBook/layout/layout"
import {fetchIngredients, fetchRecipesPost, fetchRecipes} from "RemysCookBook/queries"
import {type NextPage} from "next"
import Head from "next/head"
import {useQuery, UseQueryResult} from "react-query"
import React, {ReactComponentElement, useState} from "react";
import axios from "axios";
import {Recipe} from "RemysCookBook/pages/recipe-view/interface-recipe/recipe";
import Image from "next/image";
import {Ingredients} from "RemysCookBook/pages/recipe-view/interface-recipe/ingredients";
import {useRouter} from "next/router";

const Categories: NextPage = () => {

    const {isLoading: isLoadingRecipe, error: errorRecipe, data} = useQuery('recipes', fetchRecipes);
    //const {isLoading, error, dataIngredients} = useQuery('ingredients', fetchIngredients);
    const router = useRouter();

    if (isLoadingRecipe) {
        return <div>Loading...</div>;
    }

    if (errorRecipe) {
        return <div>Error: {"Error occurred!!!"}</div>;
    }

    const recipes: Recipe[] = data?.data ?? []; // ?? [] -> setzt das array auf einn leeres array wenn data nicht exestiert

    // get Recipe
    const id: number = parseInt(sessionStorage.getItem('recipeID')!);
    const name: string = sessionStorage.getItem('recipeName')!;
    const preparation: string = sessionStorage.getItem('preparation')!;
    const rating: number = parseInt(sessionStorage.getItem('rating')!);
    const weekId: number = parseInt(sessionStorage.getItem('weekId')!);
    const date: string = sessionStorage.getItem('recipeDate')!;

    const element = document.getElementById("recipe");
    console.log(element);
    if (element != null) {
        element.innerHTML = `${name.toUpperCase()}`;
    }

    async function addRecipeToSuggestions(recipeId: number) {
        const data = JSON.parse(`{"recipeID": "${recipeId}"}`);
        await fetchRecipesPost(data);
    }

    return (
        <>
            <Layout>
                <div>
                    <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-zinc-50 pt-8"
                        id="recipe"></h1>
                </div>
                <div className="search">
                    <div className="product-list" id="product-list">
                        {recipes.map((recipe: Recipe, index) => {
                            if (id === recipe.recipeID) {

                                return (
                                    <div className="recipe" key={recipe.recipeID}>
                                        <div className="container">
                                            <Image src={require(`public/images/${recipe.recipeID}.png`).default}
                                                   alt=""/>
                                            <div className="preperation-container">
                                                <div className="content">
                                                    <h1>Preparation: </h1>
                                                    <h1>{recipe.preparation}</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" id="acceptBtn" onClick={() => addRecipeToSuggestions(recipe.recipeID)}
                                                        className="flex flex-col items-center justify-center bg-teal-700 hover:bg-teal-900 text-white py-2 px-2.5 text-sm rounded-full">SUGGEST</button>
                                            </div>
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

export default Categories
