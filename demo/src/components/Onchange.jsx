import { useState } from "react"

export function Onchange() {
    const [name, setname] = useState("")
    const [pin, setpin] = useState("")

    const Handleclick = () => {
        setname(pin)
        setpin("")


    }
    return (
        <div>
            <br />
            <p>your name:{name}</p>
            <input onChange={(e) => setpin(e.target.value)} placeholder="enter your name">
            </input>
            <button onClick={Handleclick}>save</button>

        </div>
    )

}
export default Onchange