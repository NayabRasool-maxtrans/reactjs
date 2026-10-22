import { useState } from "react"

export const UseState = () => {
    const [count, setcount] = useState(0)
    const increment = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        setcount(count - 1)
    }
    const reset = () => {
        setcount(0)
    }
    return (
        <div>
            <h2>UseState Hook</h2>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button type="reset" onClick={reset}>reset</button>

        </div>
    )
}