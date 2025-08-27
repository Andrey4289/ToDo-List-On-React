
import { useState } from "react";
import "./TodoListItem.css"

function TodoListItem({ todoData, updateTaskComplited, removeTask, updateTaskTitle }) {
    const [isTaskEdit, setIsTaskEdit] = useState(false);
    const [editText, setEditText] = useState(todoData.title);
    return (
        <div className={`TodoListItem2 ${todoData.isComplited ? "completed" : null}`}>
            <div className="container2">
                {/* <p>{todoData.taskId}</p> */}

                {isTaskEdit ? (
                    <input value={editText} onInput={(event) => {
                        setEditText(event.target.value)
                    }} />
                ) : (
                    <p>{todoData.title}</p>
                )}

            </div>

            <div className="button-container                ">
                <button
                    onClick={() => {
                        updateTaskComplited(todoData.taskId)
                    }}
                    className='statusButton'>
                    {todoData.isComplited ? "Done" : "Todo"}
                </button>

                <button
                    onClick={() => {
                        setIsTaskEdit(!isTaskEdit)
                        updateTaskTitle(todoData.taskId, editText)
                    }}
                    className='editButton'>{isTaskEdit ? "Save" : "Edit"}</button>
                <button className='removeButton' onClick={() => {
                    removeTask(todoData.taskId)
                }}>Remove</button>
            </div>
        </div>
    );
}

export default TodoListItem;


