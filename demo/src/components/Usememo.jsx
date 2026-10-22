import { useMemo, useState } from "react"

function Usememo() {
    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(100)
    function squarevalue() {
        console.log("square value reneder")
        return count * count
    }
    const squaredvalue = useMemo(squarevalue, [count])

    return (
        <div style={{ textAlign: "center" }}>
            <p>usememo</p>
            <p>count:{count}</p>
            <p>square counter:{squaredvalue}</p>
            <button onClick={() => setcount(count + 1)}>increment</button>
            <br>
            </br>
            <p>counter2:{count2}</p>
            <button onClick={() => setcount2(count2 - 1)}>decrement</button>

        </div>

    )

}
export default Usememo