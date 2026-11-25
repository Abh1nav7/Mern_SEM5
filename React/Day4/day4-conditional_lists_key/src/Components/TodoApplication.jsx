import { useState } from 'react'

const TodoApplication = () => {
    const [task, setTask] = useState("")
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
                            <h2>{el.task}</h2>
                            <button onClick={() => handleDelete(el.id)}>
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TodoApplication