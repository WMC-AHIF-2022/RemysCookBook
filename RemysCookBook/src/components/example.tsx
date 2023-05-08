import { useState } from "react"

const ExampleComponent: React.FC = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setCounter(counter + 1)}
            >
                Increment
            </button>
            <div className="text-white">{counter}</div>
        </div>
    )
}

export default ExampleComponent
