import { useState } from "react"

export const Login = () => {
    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    const handlechange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value,
        })


    }
    const handlesubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(user))
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <br />
            <br />

            <form onSubmit={handlesubmit} >
                <input placeholder="enter your email" style={{ padding: "10px 10px" }} onChange={handlechange} name="email" value={user.email}></input>

                <input placeholder="enter your password" style={{ margin: "10px", padding: "10px 10px" }} onChange={handlechange} name="password" value={user.password}></input>
                <button type="submit">submit</button>

            </form>

        </div>
    )
}