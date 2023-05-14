import {UserButton} from "@clerk/nextjs"
import ExampleComponent from "RemysCookBook/components/example"
import Layout from "RemysCookBook/layout/layout"
import {fetchExamples, fetchRecipes} from "RemysCookBook/queries"
import {type NextPage} from "next"
import Head from "next/head"
import {useQuery} from "react-query"
import React from "react";

export const search: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const searchBox: string = (document.getElementById("search-item") as HTMLInputElement).value.toUpperCase();
    const storeItems: HTMLElement = document.getElementById("product-list")!;
    const product: NodeListOf<Element> | undefined = document.querySelectorAll(".product");
    const productName: HTMLCollectionOf<HTMLHeadingElement> = storeItems.getElementsByTagName("h2");

    for (let i = 0; i < productName.length; i++) {
        const match: HTMLHeadingElement = product[i]!.getElementsByTagName("h2")[0] as HTMLHeadingElement;

        if (match) {
            const textVal: string = match.textContent || match.innerHTML;

            if (textVal.toUpperCase().indexOf(searchBox) > -1) {
                (product[i] as HTMLElement).style.display = "";
            } else {
                (product[i] as HTMLElement).style.display = "none";
            }
        }
    }
};

const Categories: NextPage = () => {

   


        return (
            <>
                <Layout>
                    <section>
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
                                <div className="product">
                                    <img src="../img/breakfast.png" alt=""/>
                                    <div className="p-details">
                                        <h2 id="category"><a className="link-to-recipes" href="recipes">Breakfast</a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="../img/pizza.png" alt=""/>
                                    <div className="p-details">
                                        <h2>Italian Food</h2>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="../img/ramen.png" alt=""/>
                                    <div className="p-details">
                                        <h2>Asian Food</h2>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="../img/breakfast.png" alt=""/>
                                    <div className="p-details">
                                        <h2>Breakfast</h2>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="../img/pizza.png" alt=""/>
                                    <div className="p-details">
                                        <h2>Italian Food</h2>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="../img/ramen.png" alt=""/>
                                    <div className="p-details">
                                        <h2>Asian Food</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </>
        )
    }

    export default Categories
