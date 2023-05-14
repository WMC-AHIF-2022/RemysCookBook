import React, { useState } from "react";
import "../_app";
import "tailwindcss/tailwind.css";
import Layout from "RemysCookBook/layout/layout";
import { type NextPage } from "next";

const WeekPlaner : NextPage = () => {
    const [recipeName, setRecipeName] = useState("Name");

    return (
        <>
            <Layout>
                <div className=" h-screen background">
                    <h1 className="text-center text-4xl font-bold mt-10 mb-8">Weekplaner</h1>

                    {/* Date */}

                    {/* Food that is served on that day of the week */}
                    <section>
                        <div className="grid-container-weekplan">
                            <div className="grid-item-weekplan-picture">
                                {/* image here */}
                            </div>
                            <div className="grid-item-weekplan-recipe-name">
                                <h1 id="textRecipeName" className="weekplaner-recipe-name">
                                    {recipeName}
                                </h1>
                            </div>
                        </div>
                    </section>

                    {/* Add Button */}
                    <section className="fixed bottom-0 right-0 mb-8 mr-8">
                        <form>
                            <button>
                                <a href="../recipes/recipes" className="bg-white border-none text-black px-4 py-4 text-center text-sm rounded-full m-2 add-button"></a>
                            </button>
                        </form>
                    </section>
                </div>
            </Layout>
        </>

    );
}

export default WeekPlaner;
