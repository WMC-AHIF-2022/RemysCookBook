import Layout from "RemysCookBook/layout/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

const Weekplaner = () => {
    const [recipe, setRecipe] = useState({
        recipeId: 6760,
        name: "Veggie Bowl",
        imageUrl: "/images/6760.jpg",
    });

    const [selectedDate, setSelectedDate] = useState("");


    useEffect(() => {
        const selectedDate = sessionStorage.getItem("date-selected");
        const date = new Date(selectedDate);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        setSelectedDate(formattedDate);
    }, []);

    return (
        <Layout>
            <div>
                <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-zinc-50 pt-8">
                    Weekplanner
                </h1>
            </div>
            <section>
                <div className="absolute right-0 p-5 text-white text-xl">{selectedDate}</div>

                <div className="mt-10 flex flex-col items-center justify-center py-4">
                    <div className="grid-suggestion grid grid-rows-3 grid-cols-5 gap-1 rounded-3xl bg-teal-100">
                        <div className="row-span-3 col-span-2">
                            <Image
                                className="grid-suggestion-image rounded-s-3xl"
                                src={recipe.imageUrl}
                                alt={recipe.name}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="col-span-3">
                            <h1
                                id="textRecipeName"
                                className="text-font flex flex-col justify-center pt-6 text-2xl font-semibold text-teal-700"
                            >
                                {recipe.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Weekplaner;
