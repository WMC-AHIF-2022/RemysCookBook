import { SignIn } from "@clerk/nextjs"
import React from "react"

const SignInPage = () => (
    <div className="flex h-screen flex-row items-center justify-center">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
)

export default SignInPage
