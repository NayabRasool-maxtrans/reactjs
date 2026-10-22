import { useEffect, useRef, useState } from "react"

function Useref() {
    const ref = useRef(0)
    const inputRef = useRef(null)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    function handliclick() {
        ref.current++
        console.log(ref.current)


    }
    useEffect(() => {
        console.log("component rendred")
    })
    function handle() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }
    function handle1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }
    function handle2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = ""
    }
    return (
        <div style={{ textAlign: "center" }}>
            <p>useRef</p>
            <button onClick={handliclick}>click me</button>
            <p>use ref value is:{ref.current}</p>
            <input style={{ margin: "5px" }} ref={inputRef}></input>
            <button onClick={handle}>click</button>

            <input style={{ margin: "5px" }} ref={inputRef1}></input>
            <button onClick={handle1}>click</button>
            <input style={{ margin: "5px" }} ref={inputRef2}></input>
            <button onClick={handle2}>click</button>



        </div>
    )

}
export default Useref