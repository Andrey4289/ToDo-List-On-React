
import { useState } from "react";
import "./AddNewTask.css"


function AddNewTask({addTask}) {
    const [newTask, setNewTask] = useState("")
    return (
        <div className="AddNewTask">
            <input placeholder="Input you task" onInput={(event) => {
                setNewTask(event.target.value)
            }} />
            <button onClick={() => {
                addTask(newTask)
            }}>Add task</button>
        </div>
    );
}

export default AddNewTask;
