import React, { useContext } from "react"
import { UserContext } from "./ComponentA"
function ComponentC(props) {
    const user = useContext(UserContext)
    return (
        <div className="box">
            <p>componentC</p>
            <p>{`bye ${user}`}</p>
        </div>
    )
}
export default ComponentC