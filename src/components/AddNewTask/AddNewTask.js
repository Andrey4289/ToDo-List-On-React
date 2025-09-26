import { addTask } from "../../store/actions"
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./AddNewTask.css"


function AddNewTask() {
    const [newTask, setNewTask] = useState("")
    const dispath = useDispatch();
    return (
        <div className="AddNewTask">
            <input placeholder="Input you task" onInput={(event) => {
                setNewTask(event.target.value)
            }} />
            <button onClick={() => {
                addTask(dispath, newTask)
            }}>Add task</button>
        </div>
    );
}

export default AddNewTask;
