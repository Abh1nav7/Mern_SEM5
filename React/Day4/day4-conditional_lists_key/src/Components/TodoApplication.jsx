import { useState } from 'react'

const TodoApplication = () => {
    const [task, setTask] = useState("")
    const[count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const handleClick = () => {
        if (task.trim() === "") return
        const newTodo = {
            id: Date.now(),
            task: task,
            status: false
        }
        setTodos([...todos, newTodo])
        setTask("")
    }
    const handleDelete = (id) => {
        setTodos(todos.filter((el) => el.id !== id))
    }
    const handleStatus = (id) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, status: !todo.status } : todo
            )
        )
    }
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter todo."
                />

                <button onClick={handleClick}>Submit</button>
            </div>

            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {todos.map((el) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center"
                            }}
                            key={el.id}
                        >
                            <h2
                                onClick={() => handleStatus(el.id)}
                                style={{
                                    textDecoration: el.status ? "line-through red" : "none",
                                    cursor: "pointer"
                                }}
                            >
                                {el.task}
                            </h2>
                            <button onClick={() => handleDelete(el.id)}>
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}
export default TodoApplication