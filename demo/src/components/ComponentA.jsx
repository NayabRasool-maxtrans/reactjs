import { useState } from "react"
import ComponentB from "./ComponentB"
import { createContext } from "react"
export const UserContext = createContext()

function ComponentA() {
    const [user, setuser] = useState("rasool")
    return (
        <div className="box">
            <p>componentA</p>
            <p>{`hello ${user}`}</p>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />

            </UserContext.Provider>

        </div>
    )
}
export default ComponentA