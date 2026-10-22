export const Lists = () => {
    const items = ['apple', 'banana', 'mango']

    const users = [{ id: 1, name: "rasool", age: 25 }, { id: 1, name: "raja", age: 26 }]

    return (
        <div>
            <h1>Fruits list</h1>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <h1>Map</h1>
            <ul>{users.map((item, id) => {

                return <li key={id}>{item.name} is {item.age} years old</li>

            })}</ul>





        </div>

    )
}