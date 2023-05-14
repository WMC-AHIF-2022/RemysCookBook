import {UserButton} from "@clerk/nextjs"
import ExampleComponent from "RemysCookBook/components/example"
import Layout from "RemysCookBook/layout/layout"
import {fetchRecipes} from "RemysCookBook/queries"
import {type NextPage} from "next"
import Head from "next/head"
import {useQuery, UseQueryResult} from "react-query"
import React, {ReactComponentElement} from "react";
import axios from "axios";
import {Recipe} from "RemysCookBook/pages/recipe-view/interface-recipe/recipe";

export const search: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const searchBox: string = (document.getElementById("search-item") as HTMLInputElement).value.toUpperCase();
    const storeItems: HTMLElement = document.getElementById("product-list")!;
    const product: NodeListOf<Element> | undefined = document.querySelectorAll(".product");
    const productName: HTMLCollectionOf<HTMLHeadingElement> = storeItems.getElementsByTagName("h2");

    console.log(product);
    console.log(productName);

    for (let i = 0; i < productName.length; i++) {
        try {
            const match: HTMLHeadingElement = product[i]!.getElementsByTagName("h2")[0] as HTMLHeadingElement;

            if (match) {
                const textVal: string = match.textContent || match.innerHTML;

                if (textVal.toUpperCase().indexOf(searchBox) > -1) {
                    (product[i] as HTMLElement).style.display = "";
                } else {
                    (product[i] as HTMLElement).style.display = "none";
                }
            }
        } catch (e) {
            console.error(e);
            // handle the error in some way
        }
    }
};

const Categories: NextPage = () => {

    const {isLoading, error, data} = useQuery('recipes', fetchRecipes);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {"Error occurred!!!"}</div>;
    }

    const recipes: Recipe[] = data?.data ?? []; // ?? [] -> setzt das array auf einn leeres array wenn data nicht exestiert
    const categories: string[] = [];
    return (
        <>
            <Layout>
                <div>
                    <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-zinc-50 pt-8">RECIPES</h1>
                </div>
                <div className="search">
                    <form>
                        <i className="fas fa-search"></i>
                        <input type="text" name="name" id="search-item" placeholder="search ..."
                               onKeyUp={search}/>
                    </form>

                    <div className="product-list" id="product-list">
                        {recipes.map((recipe: Recipe) => {
                            if (!categories.includes(recipe.category)) {
                                categories.push(recipe.category);
                                const category = recipe.category;
                                console.log(category);
                                return (
                                    <div className="product" key={recipe.recipeID}>
                                        <img src={require(`public/images/categories/${recipe.category}.png`).default} alt="" />
                                        <div className="p-details">
                                            <h2><a className="link-to-recipes" href="/all-recipes.tsx"></a>{recipe.category}</h2>
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
