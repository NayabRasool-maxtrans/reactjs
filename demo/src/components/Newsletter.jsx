import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {
    const subscribe = () => {
        alert("thank you for subscribing.. ")
    }
    return (
        <div>
            <h3>Subscribe newsletter</h3>
            <ActionButton text="subscribe" onclick={subscribe}></ActionButton>

        </div>
    )

}