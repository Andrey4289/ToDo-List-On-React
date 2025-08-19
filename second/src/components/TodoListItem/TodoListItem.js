
import "./TodoListItem.css"

function TodoListItem({ todoData, updateTaskComplited, removeTask }) {

    return (
        <div
            className={`TodoListItem2 ${todoData.isComplited ? "completed" : null}`}>
            <div className="container2">
                <p>{todoData.taskId}</p>
                <p>{todoData.title}</p>
            </div>

            <button
                onClick={() => {
                    updateTaskComplited(todoData.taskId)
                }}
                className={`liButton `} >
                {todoData.isComplited ? "Done" : "Todo"}
            </button>
            <div className="TodoListItem_container2">
                <p>Edit</p>


                <button onClick={() => {
                    removeTask(todoData.taskId)
                }}>Remove</button>


            </div>
        </div>
    );
}

export default TodoListItem;        