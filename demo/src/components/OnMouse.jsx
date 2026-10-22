import { useState } from "react"

export function OnMouse() {
    const [count, setcount] = useState(0)
    const increment = () => {
        setcount(count + 1)

    }


    return (
        <div style={{ backgroundColor: "blue", padding: "5px" }}>
            <p>count:{count}</p>
            <button onMouseDown={increment}>OnMouseDown</button>

        </div>
    )

}
export default OnMouse