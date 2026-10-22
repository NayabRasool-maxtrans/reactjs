import { useState } from "react"

export const Todo = () => {
    const [task, settask] = useState("")
    const [todo, setTodo] = useState([])
    const addTodo = () => {
        if (task.trim() === "") return
        const newtodo = {
            id: Date.now(),
            text: task.trim()
        }
        console.log(newtodo)
        setTodo([...todo, newtodo])
        console.log(todo)
        settask("")


    }
    const deleteTodo = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            <div>
                <p>My Todo List</p>
                <input placeholder="enter a task" onChange={(e) => settask(e.target.value)} value={task}></input>
                <button type="button" onClick={addTodo}>Add</button>
            </div>

            {todo.length === 0 ? (<p>No task at addone </p>) : (
                <ul>
                    {todo.map((item) => (
                        <li key={item.id}>{item.text} <button onClick={() => deleteTodo(item.id)}>Delete</button></li>


                    ))}
                </ul>
            )}

        </div>
    )
}