
import "./TodoListItem.css"

function TodoListItem({ todoData, updateTaskComplited, removeTask }) {

    return (
        <div className={`TodoListItem2 ${todoData.isComplited ? "completed" : null}`}>
            <div className="container2">
                <p>{todoData.taskId}</p>
                <p>{todoData.title}</p>
            </div>

            <button
                onClick={() => {
                    updateTaskComplited(todoData.taskId)
                }}
                className='statusButton'>
                {todoData.isComplited ? "Done" : "Todo"}
            </button>
            <button className='editButton'>Edit</button>
            <button className='removeButton' onClick={() => {
                removeTask(todoData.taskId)
            }}>Remove</button>
        </div>
    );
}

export default TodoListItem;        
