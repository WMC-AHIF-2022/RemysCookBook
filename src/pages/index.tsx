import { UserButton } from "@clerk/nextjs"
import ExampleComponent from "RemysCookBook/components/example"
import { fetchExamples } from "RemysCookBook/queries"
import { type NextPage } from "next"
import Head from "next/head"
import { useQuery } from "react-query"

const Home: NextPage = () => {
    const data = useQuery("examples", fetchExamples)

    console.log(data)

    return (
        <>
            <Head>
                <title>RemysCookBook</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <UserButton></UserButton>
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Es kann los gehen!
                    </h1>
                    <ExampleComponent />
                </div>
            </main>
        </>
    )
}

export default Home
