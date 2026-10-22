export function Clickable() {
    const comapany = ["greeksForGreeek", "W3School",]
    const Handleclick = (comp) => {
        alert(`you clicked ${comp}`)
    }
    return (
        <div>
            {comapany.map((company, index) =>
                (< button key={index} onClick={() => Handleclick(company)} > {comapany}</button>)
            )}


        </div >
    )

}
export default Clickable