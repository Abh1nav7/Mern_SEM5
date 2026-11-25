import Counter from "./Counter"
import Changename from "./Changename"
function App(){
  let name ="Abhinav"
  let islogged =true

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Welcome{name}</h2>
      {islogged ? <p>Active</p> : <p>offline</p>}
      <Counter />
      <Changename />
    </div>
  )
}
export default App