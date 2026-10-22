import { useEffect, useState } from "react"

function MyComponent() {
    const [count, setcount] = useState(0)
    const [color, setcolor] = useState("green")
    useEffect(() => {
        document.title = `count:${count} ${color}`
    }, [count, color])
    function addcount() {
        setcount(count + 1)
    }
    function subcount() {
        setcount(count - 1)
    }
    function changecolor() {
        setcolor((c) => c === "green" ? "red" : "green")
    }
    return (
        <div>
            <p style={{ color: color }}>counter:{count}</p>
            <button onClick={addcount} style={{ margin: "5px" }}>add</button>
            <button onClick={subcount} style={{ margin: "5px" }}>substraction</button>
            <br />
            <button onClick={changecolor}>changecolor</button>

        </div>
    )
}
export default MyComponent