import {UserButton} from "@clerk/nextjs"
import ExampleComponent from "RemysCookBook/components/example"
import Layout from "RemysCookBook/layout/layout"
import {fetchExamples} from "RemysCookBook/queries"
import {type NextPage} from "next"
import Head from "next/head"
import {useQuery} from "react-query"
import React from "react";
import {search} from "RemysCookBook/pages/recipe-view/categories";



const Recipes: NextPage = () => {

    return (
        <>
            <Layout>
                <div>
                    <h1>Recipes</h1>
                </div>

                <div className="search">
                    <form>
                        <i className="fas fa-search"></i>
                        <input type="text" name="" id="search-item" placeholder="search ..."
                               onKeyUp={search}/>
                    </form>

                    <div className="recipe-list" id="recipe-list">

                        <div className="recipe">
                            <img src="../img/breakfast.png" alt=""/>
                            <div className="r-details">
                                <h2 id="recipe"><a className="link-to-recipes" href="recipes.html">Peanut Butter
                                    Toast</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Recipes
