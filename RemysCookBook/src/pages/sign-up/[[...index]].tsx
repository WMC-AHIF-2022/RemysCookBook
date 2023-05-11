import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => (
    <div className="flex h-screen flex-row items-center justify-center">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
)
export default SignUpPage
