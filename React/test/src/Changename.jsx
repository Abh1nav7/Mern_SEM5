import {useState} from "react"
function  Changename(){
    const [name, setCurrentName] = useState("Abhinav");

    const handleChangeName = () => {
        setCurrentName("Abhi");
    };

    return(
        <div>
            <p>Current Name: {name}</p>
            <button onClick={handleChangeName}>Change Name </button>
        </div>
    )
}
export default Changename