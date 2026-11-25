import {useState} from "react"
function Counter(){
    const [count, setCount] = useState(0);
    
    const handleInc = () => {
        setCount(count + 1);
    }
    const handleDec = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
    )
}
export default Counter