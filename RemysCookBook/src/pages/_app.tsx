import { type AppType } from "next/dist/shared/lib/utils"

import { ClerkProvider } from "@clerk/nextjs"
import "RemysCookBook/styles/globals.css"
import { QueryClient, QueryClientProvider } from "react-query"

const RemysCookBookApp: AppType = ({ Component, pageProps }) => {
    const queryClient = new QueryClient()
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ClerkProvider {...pageProps}>
                    <Component {...pageProps} />
                </ClerkProvider>
            </QueryClientProvider>
        </>
    )
}

export default RemysCookBookApp
