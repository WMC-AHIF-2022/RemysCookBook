import { UserButton } from "@clerk/nextjs/dist/client";
import { type NextPage } from "next"
import Head from "next/head";
import Image from "next/image";


const MenuSuggestions: NextPage = () => {
        return (
                <>
                <main className="className=flex min-h-screen flex-col items-center justify-center bg-teal-700">
                    <div>
                        <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-zinc-50 pt-8">Menu suggestions</h1>
                    </div>
                    <section>
                        <div id="listOfSuggestions">
                            <div className="grid-suggestion grid grid-rows-3 grid-cols-5 gap-1 rounded-3xl bg-teal-100 mt-10 ml-7 mr-7">
                                <div className="row-span-3 col-span-2">
                                    <Image className="grid-suggestion-image rounded-s-3xl" src="/images/placeholder.jpg" alt="placeholder" width={100} height={100}></Image>
                                </div>
                                <div className="col-span-3">
                                    <h1 id="textRecipeName" className="text-font flex flex-col justify-center pt-4 text-2xl font-semibold text-teal-700">Veggie Bowl</h1>
                                </div>
                                <div className="col-span-3">
                                    <p id="textUser" className="text-font flex flex-col justify-center pt-2 italic text-teal-700">suggest by mustermann</p>
                                </div>
                                <div>
                                    <button type="button" id="acceptBtn" className="flex flex-col items-center justify-center bg-teal-700 hover:bg-teal-900 text-white py-2 px-2.5 text-sm rounded-full">Accept</button>
                                </div>
                                <div>
                                    <button type="button" id="denyBtn" className="flex flex-col items-center justify-center bg-teal-700 hover:bg-teal-900 text-white py-2 px-3.5 text-sm rounded-full">Deny</button>
                                </div>
                                <div>
                                    <button type="button" id="switchBtn" className="flex flex-col items-center justify-center bg-teal-700 hover:bg-teal-900 text-white py-2 pl-2.5 pr-2 text-sm rounded-full">Switch</button>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
                </>
        );
}

export default MenuSuggestions