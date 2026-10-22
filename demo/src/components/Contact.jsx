import { ActionButton } from "./ActionButton"
export const Contact = () => {
    const handlemessage = () => {
        alert("your message is sending")

    }
    return (

        <div>
            <h2>Contact us</h2>
            <ActionButton text="send message" onclick={handlemessage}></ActionButton>
        </div>
    )
}