import { useState } from "react"

export function FormSubMit() {
    const [value, setvalue] = useState("");
    const [result, setResult] = useState("")
    const handlechange = (e) => {
        setvalue(e.target.value)
        setResult("")
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        setResult("Form has been submitted successfully" + value)

    }

    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h3>OnSubmit handler</h3>
            <form onSubmit={handlesubmit}>
                <label>Add input here</label>
                <input onChange={handlechange} value={value} required></input>
                <br></br>
                <button type="submit">submit</button>
            </form>
            <h2>{result}</h2>

        </div>
    )

}
export default FormSubMit