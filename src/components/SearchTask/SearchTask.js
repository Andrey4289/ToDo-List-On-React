
import { useState } from "react";
import "./SearchTask.css"


function SearchTask({ searchTasks }) {
    const [inputValue, setInputValue] = useState("")
    return (
        <div className="Search-task">
            <input onChange={(event => {
                setInputValue(event.target.value)
            })} placeholder="Search" />
            
        <button onClick={() => {
            searchTasks(inputValue)
        }}>Search</button>
        </div >
    );
}

export default SearchTask;
